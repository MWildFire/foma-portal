#!/usr/bin/env node
// Lab pages (public/cs-lab) are Russian-only in plain text. This tool adds the English
// next to each Russian text segment. A segment is the inner HTML of a leaf element
// (no block children) that contains Cyrillic. The segment becomes two inline spans,
// which the lab's data-lang switch shows one at a time (styles.css: .lang-ru-inline,
// .lang-en-inline). Parts that cannot be copied safely are listed as manual items.
//
//   node scripts/cs-lab-bilingual.mjs list  <page.html>             segments and manual items
//   node scripts/cs-lab-bilingual.mjs apply <page.html> <en.txt>    writes the bilingual page
//   node scripts/cs-lab-bilingual.mjs check <page.html> <orig.html> verifies against the original
//
// en.txt: one block per segment, in the order `list` printed them:
//   @@ 0
//   <English inner HTML of segment 0>
//   @@ 1
//   ...
// Elements with lang="ru" are deliberately Russian (data, quotes): not translated, not checked.

import { readFileSync, writeFileSync } from 'node:fs';

const VOID = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']);
const RAW = new Set(['script', 'style']);
// Children that make an element a container rather than a text segment
// (head and title are containers too: the page title is handled by hand)
const BLOCK = new Set(['address', 'article', 'aside', 'blockquote', 'body', 'dd', 'details', 'dialog', 'div', 'dl', 'dt', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hr', 'html', 'li', 'main', 'nav', 'ol', 'option', 'p', 'pre', 'section', 'summary', 'table', 'tbody', 'td', 'tfoot', 'th', 'thead', 'title', 'tr', 'ul']);
// Children that must not be copied into a segment (interactive, drawn or duplicated by id)
const UNSAFE = new Set(['audio', 'canvas', 'embed', 'iframe', 'img', 'input', 'math', 'noscript', 'object', 'select', 'svg', 'template', 'textarea', 'video']);
const CYR = /[Ѐ-ӿ]/;
const TAG = /<!--[\s\S]*?-->|<![^>]*>|<\/([a-zA-Z][\w:-]*)\s*>|<([a-zA-Z][\w:-]*)((?:\s+[^\s"'>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s"'=<>`]+))?)*)\s*(\/?)>/g;
const KEEP_RU = /\blang\s*=\s*["']?ru\b/i;
const HAS_ID = /\sid\s*=/;
const USAGE = 'usage: cs-lab-bilingual.mjs list|apply|check <page.html> [arg]';

const keep = (el) => el.name !== 'html' && KEEP_RU.test(el.attrs);
const classes = (attrs) => {
  const m = /\bclass\s*=\s*"([^"]*)"/.exec(attrs);
  return m ? m[1].split(/\s+/) : [];
};
const preview = (s) => s.replace(/\s+/g, ' ').trim().slice(0, 90);
const lineStarts = (html) => {
  const starts = [0];
  for (let i = 0; i < html.length; i++) if (html[i] === '\n') starts.push(i + 1);
  return starts;
};
const lineOf = (starts, pos) => {
  let lo = 0;
  let hi = starts.length - 1;
  while (lo < hi) {
    const mid = (lo + hi + 1) >> 1;
    if (starts[mid] <= pos) lo = mid;
    else hi = mid - 1;
  }
  return lo + 1;
};

// Minimal tree: elements with children, text nodes with offsets into `html`.
function parse(html) {
  const root = { type: 'el', name: '#root', attrs: '', children: [], parent: null, innerStart: 0, innerEnd: html.length };
  let cur = root;
  let last = 0;
  const tag = new RegExp(TAG.source, 'g');
  let m;
  while ((m = tag.exec(html))) {
    if (m.index > last) cur.children.push({ type: 'text', start: last, end: m.index, parent: cur });
    last = tag.lastIndex;
    const [whole, endName, name, attrs = '', slash] = m;
    if (whole.startsWith('<!')) {
      cur.children.push({ type: 'other', start: m.index, end: tag.lastIndex, parent: cur });
      continue;
    }
    if (endName) {
      const lname = endName.toLowerCase();
      let n = cur;
      while (n !== root && n.name !== lname) n = n.parent;
      if (n !== root) {
        n.innerEnd = m.index;
        cur = n.parent;
      }
      continue;
    }
    const lname = name.toLowerCase();
    const el = { type: 'el', name: lname, attrs, start: m.index, innerStart: tag.lastIndex, innerEnd: tag.lastIndex, children: [], parent: cur };
    cur.children.push(el);
    if (RAW.has(lname)) {
      const close = new RegExp(`</${lname}\\s*>`, 'gi');
      close.lastIndex = tag.lastIndex;
      const c = close.exec(html);
      el.innerEnd = c ? c.index : html.length;
      el.children.push({ type: 'text', start: el.innerStart, end: el.innerEnd, parent: el });
      tag.lastIndex = c ? close.lastIndex : html.length;
      last = tag.lastIndex;
      continue;
    }
    if (VOID.has(lname) || slash) continue;
    cur = el;
  }
  if (last < html.length) cur.children.push({ type: 'text', start: last, end: html.length, parent: cur });
  return root;
}

const textOf = (html, node) => {
  if (node.type === 'text') return html.slice(node.start, node.end);
  if (node.type === 'el') return node.children.map((c) => textOf(html, c)).join('');
  return '';
};
// Text outside lang="ru" elements
const textNoKeep = (html, node) => {
  if (node.type === 'text') return html.slice(node.start, node.end);
  if (node.type === 'el' && !keep(node)) return node.children.map((c) => textNoKeep(html, c)).join('');
  return '';
};
const someDescendant = (el, pred) => el.children.some((c) => c.type === 'el' && (pred(c) || someDescendant(c, pred)));
// Element names in document order. Russian sample spans (lang="ru") are not structure, so an English block may add them.
const tagSeq = (h) => {
  const names = [];
  const walk = (node) => {
    for (const c of node.children) {
      if (c.type !== 'el') continue;
      if (!keep(c)) names.push(c.name);
      walk(c);
    }
  };
  walk(parse(h));
  return names.join(' ');
};

function scan(html) {
  const root = parse(html);
  const starts = lineStarts(html);
  const at = (pos) => lineOf(starts, pos);
  const segments = [];
  const manual = [];
  let heading = '';
  const attrChecks = (el) => {
    for (const a of el.attrs.matchAll(/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g)) {
      const v = a[2] ?? a[3] ?? '';
      if (CYR.test(v)) manual.push(`attr ${a[1]} on <${el.name}> line ${at(el.start)}: ${preview(v)}`);
    }
  };
  const visit = (node) => {
    for (const c of node.children) {
      if (c.type === 'text') {
        if (RAW.has(node.name)) continue;
        const t = html.slice(c.start, c.end);
        if (CYR.test(t)) manual.push(`loose text in <${node.name}> line ${at(c.start)}: ${preview(t)}`);
        continue;
      }
      if (c.type !== 'el' || keep(c)) continue;
      if (RAW.has(c.name)) {
        const t = textOf(html, c);
        if (CYR.test(t)) manual.push(`<${c.name}> line ${at(c.start)} has Cyrillic: ${preview(t)}`);
        continue;
      }
      attrChecks(c);
      if (c.name === 'title') {
        const t = textNoKeep(html, c);
        if (CYR.test(t)) manual.push(`<title> line ${at(c.start)}: ${preview(t)}`);
        continue;
      }
      if (UNSAFE.has(c.name)) {
        const t = textNoKeep(html, c);
        if (CYR.test(t)) manual.push(`<${c.name}> line ${at(c.start)} has Cyrillic text: ${preview(t)}`);
        continue;
      }
      const leaf = !someDescendant(c, (d) => BLOCK.has(d.name) || UNSAFE.has(d.name) || HAS_ID.test(d.attrs));
      if (leaf) {
        const t = textNoKeep(html, c);
        if (CYR.test(t)) {
          if (/^h[1-3]$/.test(c.name)) heading = preview(t);
          segments.push({ el: c, tag: c.name, line: at(c.start), heading, ru: html.slice(c.innerStart, c.innerEnd) });
        }
        continue;
      }
      visit(c);
    }
  };
  visit(root);
  return { segments, manual };
}

function readBlocks(file) {
  const blocks = [];
  let cur = null;
  for (const line of readFileSync(file, 'utf8').split('\n')) {
    const h = /^@@ (\d+)\s*$/.exec(line);
    if (h) {
      cur = { i: Number(h[1]), lines: [] };
      blocks.push(cur);
    } else if (cur) cur.lines.push(line);
  }
  return blocks.map((b) => ({ i: b.i, html: b.lines.join('\n').trim() }));
}

function list(file) {
  const { segments, manual } = scan(readFileSync(file, 'utf8'));
  for (const [k, s] of segments.entries()) {
    console.log(`=== #${k}  <${s.tag}> line ${s.line}${s.heading ? `  under "${s.heading}"` : ''}`);
    console.log(s.ru);
  }
  console.log(`\n--- manual items (${manual.length}): fix these by hand, see the brief`);
  for (const m of manual) console.log(`- ${m}`);
  console.log(`\n${segments.length} segments to translate, ${manual.length} manual items`);
}

function apply(file, translationsFile) {
  const html = readFileSync(file, 'utf8');
  if (/\blang-(en|ru)(-inline)?\b/.test(html)) throw new Error('the page already has language classes; apply runs on a Russian-only page');
  const { segments } = scan(html);
  const blocks = readBlocks(translationsFile);
  if (blocks.length !== segments.length) throw new Error(`${segments.length} segments, ${blocks.length} translations`);
  const problems = [];
  for (const [k, b] of blocks.entries()) {
    const s = segments[k];
    if (b.i !== k) problems.push(`@@ ${b.i} at position ${k}: numbers must run 0..N-1 in order`);
    if (!b.html) problems.push(`#${k} (line ${s.line}) is empty`);
    if (tagSeq(b.html) !== tagSeq(s.ru)) problems.push(`#${k} (line ${s.line}): tags differ from the Russian`);
    if (CYR.test(textNoKeep(b.html, parse(b.html)))) problems.push(`#${k} (line ${s.line}): Cyrillic left in the English`);
  }
  if (problems.length) throw new Error(problems.join('\n'));
  let out = html;
  for (let k = segments.length - 1; k >= 0; k--) {
    const s = segments[k];
    out = `${out.slice(0, s.el.innerStart)}<span class="lang-ru-inline">${s.ru}</span><span class="lang-en-inline">${blocks[k].html}</span>${out.slice(s.el.innerEnd)}`;
  }
  writeFileSync(file, out);
  return segments.length;
}

function textsByLanguage(html) {
  const starts = lineStarts(html);
  const found = [];
  const walk = (node, lang) => {
    for (const c of node.children) {
      if (c.type === 'text') {
        if (RAW.has(node.name) || node.name === 'title') continue;
        const t = html.slice(c.start, c.end);
        if (CYR.test(t)) found.push({ lang, line: lineOf(starts, c.start), text: preview(t) });
        continue;
      }
      if (c.type !== 'el' || keep(c) || c.name === 'title') continue;
      const cls = classes(c.attrs);
      let l = lang;
      if (cls.includes('lang-en') || cls.includes('lang-en-inline')) l = 'en';
      else if (cls.includes('lang-ru') || cls.includes('lang-ru-inline')) l = 'ru';
      walk(c, l);
    }
  };
  walk(parse(html), 'none');
  return found;
}

function check(file, origFile) {
  const html = readFileSync(file, 'utf8');
  const orig = readFileSync(origFile, 'utf8');
  const problems = [];
  const idsOf = (h) => [...h.matchAll(/\sid\s*=\s*["']([^"']+)["']/g)].map((x) => x[1]);
  const ids = idsOf(html);
  const dups = [...new Set(ids.filter((x, i) => ids.indexOf(x) !== i))];
  if (dups.length) problems.push(`duplicate ids: ${dups.join(', ')}`);
  const lost = idsOf(orig).filter((x) => !ids.includes(x));
  if (lost.length) problems.push(`ids missing: ${lost.join(', ')}`);
  const count = (h, re) => (h.match(re) || []).length;
  for (const t of ['button', 'input', 'select', 'textarea', 'canvas', 'svg', 'table', 'script', 'form']) {
    const a = count(orig, new RegExp(`<${t}[\\s>]`, 'gi'));
    const b = count(html, new RegExp(`<${t}[\\s>]`, 'gi'));
    if (a !== b) problems.push(`<${t}> count ${a} -> ${b}`);
  }
  for (const t of ['div', 'span', 'p', 'ul', 'ol', 'li', 'table', 'tr', 'td', 'th', 'h1', 'h2', 'h3', 'h4', 'section', 'figure', 'button', 'label', 'pre', 'code', 'a']) {
    const opens = count(html, new RegExp(`<${t}[\\s>/]`, 'gi'));
    const closes = count(html, new RegExp(`</${t}\\s*>`, 'gi'));
    if (opens !== closes) problems.push(`<${t}> opened ${opens}, closed ${closes}`);
  }
  const found = textsByLanguage(html);
  const enCyr = found.filter((f) => f.lang === 'en' && CYR.test(f.text));
  const bare = found.filter((f) => f.lang === 'none');
  for (const f of enCyr) problems.push(`Cyrillic in English, line ${f.line}: ${f.text}`);
  for (const f of bare) problems.push(`Russian outside any language block, line ${f.line}: ${f.text}`);
  const pairs = (a, b) => (count(html, new RegExp(`class="[^"]*\\b${a}\\b`, 'g')) === count(html, new RegExp(`class="[^"]*\\b${b}\\b`, 'g')));
  if (!pairs('lang-ru-inline', 'lang-en-inline')) problems.push('lang-ru-inline and lang-en-inline counts differ');
  if (!pairs('lang-ru', 'lang-en')) problems.push('lang-ru and lang-en counts differ');
  if (problems.length) {
    for (const p of problems) console.log(`- ${p}`);
    console.log(`${problems.length} problem(s) in ${file}`);
    return 1;
  }
  console.log(`OK ${file}: ids and structure kept, no Cyrillic in English, no bare Russian`);
  return 0;
}

const [cmd, file, arg] = process.argv.slice(2);
try {
  if (cmd === 'list') list(file);
  else if (cmd === 'apply') console.log(`applied ${apply(file, arg)} segments to ${file}`);
  else if (cmd === 'check') process.exitCode = check(file, arg);
  else throw new Error(USAGE);
} catch (e) {
  console.error(e.message);
  process.exitCode = 1;
}
