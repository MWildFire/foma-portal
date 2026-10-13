import test from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

// tests/i18n-parity.test.mjs checks that EN and RU have the same keys. This test checks the study pages
// (practice, glossary, formulas, simulations, report): every key they ask for exists in both languages with the
// placeholders they fill in, and no text in their namespaces is left unused.
const root = join(import.meta.dirname, '..');
const read = file => readFileSync(join(root, file), 'utf8');
const NAMESPACES = ['practice', 'glossary', 'formulas', 'sims', 'report'];

const bundle = {};
for (const lang of ['en', 'ru']) {
  for (const file of readdirSync(join(root, 'src', 'i18n', lang)).filter(name => name.endsWith('.json'))) {
    bundle[`${lang}:${file.replace(/\.json$/, '')}`] = JSON.parse(read(`src/i18n/${lang}/${file}`));
  }
}
const lookup = (lang, ns, key) => key.split('.').reduce((node, part) => (node && typeof node === 'object' ? node[part] : undefined), bundle[`${lang}:${ns}`]);

function sourceFiles(dir) {
  return readdirSync(join(root, dir), { withFileTypes: true }).flatMap(entry => {
    const path = `${dir}/${entry.name}`;
    if (entry.isDirectory()) return sourceFiles(path);
    return /\.tsx?$/.test(entry.name) ? [path] : [];
  });
}

const FILES = [
  ...['practice', 'glossary', 'formulas', 'sims', 'report'].flatMap(folder => sourceFiles(`src/components/${folder}`)),
  ...['PracticePage', 'GlossaryPage', 'FormulasPage', 'SimsPage', 'ReportPage'].map(page => `src/pages/${page}.tsx`),
  'src/lib/report.ts',
];

// Keys built from a value of a union type. The values come from the code; they are listed here, and the second test
// checks that every listed key exists.
const DYNAMIC = {
  'paperNames.': { ns: 'subject', values: ['P1', 'P2', 'P3'] },
  'q.rating.': { values: ['right', 'partial', 'wrong'] },
  'timed.state.': { values: ['idle', 'running', 'paused', 'done'] },
  'cards.answer.': { values: ['knew', 'unsure', 'missed'] },
  'language.': { values: ['en', 'ru'] },
  'status.': { values: ['copied', 'selected'] },
};

// Keys the scanner cannot see because the call chooses between two keys with a condition.
const EXPLICIT = { practice: ['list.heading', 'list.headingOther'] };

// Every t(...) call: its text from the opening bracket to the matching closing bracket, and the same text with the
// calls inside it blanked out. A call such as t('a', { x: t('b', { ns: 'subject' }) }) has its own options only in
// the second text, so the ns of the inner call is not taken for the outer one.
function callsOf(source) {
  const found = [];
  const start = /(?<![\w.$])t\(/g;
  let match;
  while ((match = start.exec(source))) {
    let depth = 1;
    let quote = null;
    let index = start.lastIndex;
    for (; index < source.length && depth > 0; index += 1) {
      const ch = source[index];
      if (quote) {
        if (ch === '\\') index += 1;
        else if (ch === quote) quote = null;
      } else if (ch === "'" || ch === '"' || ch === '`') quote = ch;
      else if (ch === '(') depth += 1;
      else if (ch === ')') depth -= 1;
    }
    found.push({ from: start.lastIndex, to: index - 1 });
  }
  return found.map(call => {
    let own = source.slice(call.from, call.to);
    for (const inner of found) {
      if (inner !== call && inner.from > call.from && inner.to <= call.to) {
        const length = inner.to - inner.from;
        own = own.slice(0, inner.from - call.from) + ' '.repeat(length) + own.slice(inner.to - call.from);
      }
    }
    return { text: source.slice(call.from, call.to), own };
  });
}

function defaultNamespace(file, source) {
  if (file === 'src/lib/report.ts') return 'report';
  const hook = /useTranslation\(\s*(\[[^\]]*\]|'[^']*')/.exec(source);
  return hook ? /'([^']+)'/.exec(hook[1])[1] : null;
}

const placeholders = text => [...String(text).matchAll(/\{\{(\w+)\}\}/g)].map(item => item[1]);

// Every literal key the files ask for, with the text of the call (for the placeholder check).
function usedKeys() {
  const used = [];
  const problems = [];
  for (const file of FILES) {
    const source = read(file);
    const fallback = defaultNamespace(file, source);
    for (const { text: call, own } of callsOf(source)) {
      const first = /^\s*(`[^`]*`|'[^']*'|"[^"]*")/.exec(call);
      if (!first) continue;
      const key = first[1].slice(1, -1);
      const ns = /\bns:\s*'([^']+)'/.exec(own)?.[1] ?? fallback;
      if (key.includes('${')) {
        const prefix = key.slice(0, key.indexOf('${'));
        const info = DYNAMIC[prefix];
        if (!info || key.slice(key.indexOf('}') + 1) !== '') {
          problems.push(`${file}: dynamic key "${key}" is not registered in this test`);
          continue;
        }
        for (const value of info.values) used.push({ file, ns: info.ns ?? ns, key: prefix + value, call: '' });
        continue;
      }
      if (!ns) {
        problems.push(`${file}: cannot tell the namespace of "${key}"`);
        continue;
      }
      used.push({ file, ns, key, call });
    }
  }
  for (const [ns, keys] of Object.entries(EXPLICIT)) for (const key of keys) used.push({ file: '(explicit)', ns, key, call: '' });
  return { used, problems };
}

test('every key the study pages use exists in English and Russian', () => {
  const { used, problems } = usedKeys();
  for (const { file, ns, key } of used) {
    for (const lang of ['en', 'ru']) {
      if (typeof lookup(lang, ns, key) !== 'string') problems.push(`${file}: ${lang}/${ns} has no text for "${key}"`);
    }
  }
  assert.deepEqual(problems, []);
  assert.ok(used.length > 80, `only ${used.length} keys were found; the scanner may be broken`);
});

test('a call fills in every {{placeholder}} of its text', () => {
  const problems = [];
  for (const { file, ns, key, call } of usedKeys().used) {
    if (!call) continue;
    const text = lookup('en', ns, key);
    if (typeof text !== 'string') continue;
    const options = call.slice(call.indexOf(',') === -1 ? call.length : call.indexOf(',') + 1);
    for (const name of placeholders(text)) {
      if (!new RegExp(`\\b${name}\\b`).test(options)) problems.push(`${file}: t("${key}") does not give {{${name}}}`);
    }
  }
  assert.deepEqual(problems, []);
});

test('English and Russian texts keep the same {{placeholders}}', () => {
  const problems = [];
  const walk = (en, ru, path) => {
    for (const [key, value] of Object.entries(en)) {
      if (value && typeof value === 'object') walk(value, ru?.[key] ?? {}, `${path}.${key}`);
      else if (JSON.stringify(placeholders(value).sort()) !== JSON.stringify(placeholders(ru?.[key]).sort())) problems.push(`${path}.${key}`);
    }
  };
  for (const ns of NAMESPACES) walk(bundle[`en:${ns}`], bundle[`ru:${ns}`], ns);
  assert.deepEqual(problems, []);
});

test('every text of the study namespaces is used somewhere, so no dead text is left behind', () => {
  const { used } = usedKeys();
  const usedSet = new Set(used.map(item => `${item.ns}:${item.key}`));
  const leaves = (node, prefix = '') => Object.entries(node).flatMap(([key, value]) => (
    value && typeof value === 'object' ? leaves(value, `${prefix}${key}.`) : [`${prefix}${key}`]
  ));
  const unused = [];
  for (const ns of NAMESPACES) {
    for (const key of leaves(bundle[`en:${ns}`])) if (!usedSet.has(`${ns}:${key}`)) unused.push(`${ns}.${key}`);
  }
  assert.deepEqual(unused, []);
});

// Texts that stay in English in the Russian version on purpose: an IB term, or the name of a language.
const ENGLISH_ON_PURPOSE = new Set(['practice.q.command', 'report.language.en']);

test('no text in the study namespaces is empty, and Russian texts are in Russian', () => {
  const problems = [];
  const walk = (node, lang, path) => {
    for (const [key, value] of Object.entries(node)) {
      const where = `${path}.${key}`;
      if (value && typeof value === 'object') walk(value, lang, where);
      else if (typeof value !== 'string' || value.trim() === '') problems.push(`${lang}/${where} is empty`);
      else if (lang === 'ru' && !ENGLISH_ON_PURPOSE.has(where)) {
        const words = value.replace(/\{\{\w+\}\}/g, '');
        if (/[A-Za-z]{3,}/.test(words) && !/[А-Яа-яЁё]/.test(words)) problems.push(`ru/${where} has no Russian text`);
      }
    }
  };
  for (const ns of NAMESPACES) {
    walk(bundle[`en:${ns}`], 'en', ns);
    walk(bundle[`ru:${ns}`], 'ru', ns);
  }
  assert.deepEqual(problems, []);
});
