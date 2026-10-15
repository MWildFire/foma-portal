// Copies the FomaCS lesson site into public/cs-lab (served at /cs-lab/).
// Removed on the way, so no school material reaches git: the teacher's official question cards, the banners that
// point to them, and links to the school's private Google Site and Google Docs (the links carry a Google account index).
// Usage: FOMACS_DIR=path/to/FomaCS node scripts/cs-port-lab.mjs [path/to/FomaCS]
// The output is generated: change this script and rerun it instead of editing public/cs-lab by hand.
// Portal-only edits live here: ASSET_EDITS, CORRECTIONS and the legacy bilingual pages.
// R03 diagram fixes belong to FomaCS, including source-owned bilingual pages in .foma-port/pages.
// A changed Russian source invalidates its translation before the generated lab is touched.
import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { homedir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const source = path.resolve(process.argv[2] || process.env.FOMACS_DIR || path.join(homedir(), 'Projects', 'FomaCS'));
const target = path.join(root, 'public', 'cs-lab');
// Refuse an old checkout before touching the last good generated lab.
const marker = path.join(source, 'foma-port.json');
let portVersion;
try { portVersion = JSON.parse(readFileSync(marker, 'utf8')).portVersion; } catch { /* diagnosed below */ }
if (portVersion !== 2) {
  throw new Error('в FomaCS нет правок R03: слей ветку codex/foma-r03-lab (required portVersion: 2)');
}

// Banners that point to teacher material or to the school site are dropped as a whole.
const BANNED_BANNER = [/sites\.google\.com/i, /docs\.google\.com/i, /Google Doc/i, /официальн/i, /экзамен-вопрос/i, /от преподавателя/i];

// Corrections of the FomaCS source made in the copy. The FomaCS repository should get the same fix.
// - MD5("Hello, world!") is 6cd3556deb0da54bca060b4c39479839 (checked with node:crypto); the source printed another value.
// - Feature engineering divides: price / bedrooms, and BMI = weight / height².
// - The nav label of the network devices lab is "A2.1.3 Network devices", as in the English topic.
const CORRECTIONS = [
  {
    file: 'a2-4-security.html',
    replace: [['fc3ff98e8c6a0d3087d515c0473f8677', '6cd3556deb0da54bca060b4c39479839']],
  },
  {
    file: 'a4-2-preprocessing.html',
    replace: [['price + bedrooms → price_per_bedroom; height + weight → BMI.', 'price ÷ bedrooms → price_per_bedroom; weight ÷ height² → BMI.']],
  },
  {
    file: 'networks.html',
    replace: [['A2.1.3 Devices', 'A2.1.3 Network devices']],
  },
];

// Our own edits to the copied assets (round 2 and round 3 fixes for the 390 px screen and the language switch).
// Each `from` must match exactly once in the FomaCS file; `append` adds text at the end. A mismatch stops the run.
const ASSET_EDITS = [
  {
    file: 'styles.css',
    replace: [
      [
        '@media (max-width: 900px) {\n  .sidebar-layout { grid-template-columns: 1fr; }\n  .sidebar { display: none; }\n}',
        '@media (max-width: 900px) {\n  /* minmax(0, 1fr): the column must not grow to the widest canvas (min-width 540px) and push controls off the screen */\n  .sidebar-layout { grid-template-columns: minmax(0, 1fr); padding: 24px 16px 64px; overflow-x: auto; }\n  .sidebar { display: none; }\n}',
      ],
      [
        '  .sim-canvas-wrap canvas, .sim-canvas-wrap svg { min-width: 540px; }\n}',
        '  .sim-canvas-wrap canvas, .sim-canvas-wrap svg { min-width: 540px; }\n  /* Long words and binary strings wrap; wide content scrolls inside its own column instead of widening the page */\n  .device-page, .lessons-page, .container { overflow-x: auto; overflow-wrap: anywhere; }\n}',
      ],
    ],
    append: '\n/* Wide tables and code blocks scroll inside their own box, so a lab page never grows wider than a 390 px screen. */\n.table-scroll { max-width: 100%; overflow-x: auto; }\npre { max-width: 100%; overflow-x: auto; }\n/* English summaries in the Russian pages repeat the English text in EN mode */\n[data-lang="en"] .en-summary { display: none; }\n',
  },
  // Tables inside the lab's scripts scroll inside their own box on a 390 px screen (round 2, CS-08)
  {
    file: 'js/joins.js',
    replace: [
      [`    let html = '<table class="dbtable joins-result"><thead><tr>';`, `    let html = '<div class="table-scroll"><table class="dbtable joins-result"><thead><tr>';`],
      [`    html += '</tbody></table>';`, `    html += '</tbody></table></div>';`],
    ],
  },
  {
    file: 'js/karnaugh.js',
    replace: [
      [`    let s = '<table class="truth-table"><thead><tr>';`, `    let s = '<div class="table-scroll"><table class="truth-table"><thead><tr>';`],
      [`    s += '</tbody></table>';`, `    s += '</tbody></table></div>';`],
    ],
  },
  {
    file: 'js/logic-gates.js',
    replace: [
      [`    let s = '<table class="truth-table"><thead><tr><th>A</th>' +`, `    let s = '<div class="table-scroll"><table class="truth-table"><thead><tr><th>A</th>' +`],
      [`    s += '</tbody></table>';`, `    s += '</tbody></table></div>';`],
    ],
  },
  {
    file: 'js/normalization.js',
    replace: [
      [`      html += '<table class="dbtable' + (t.anomalies ? ' anomaly-host' : '') + '">';`, `      html += '<div class="table-scroll"><table class="dbtable' + (t.anomalies ? ' anomaly-host' : '') + '">';`],
      [`      html += '</tbody></table>';`, `      html += '</tbody></table></div>';`],
    ],
  },
  {
    file: 'js/scheduling.js',
    replace: [
      [`    let html = '<table class="sched-table"><thead><tr>';`, `    let html = '<div class="table-scroll"><table class="sched-table"><thead><tr>';`],
      [`    html += '</tbody></table>';`, `    html += '</tbody></table></div>';`],
    ],
  },
  {
    file: 'js/sql-playground.js',
    replace: [
      [`      html += '<div class="sql-result-table-wrap"><table class="sql-result-table"><thead><tr>';`, `      html += '<div class="sql-result-table-wrap"><div class="table-scroll"><table class="sql-result-table"><thead><tr>';`],
      [`      html += '</tbody></table></div>';`, `      html += '</tbody></table></div></div>';`],
    ],
  },
  {
    file: 'js/app.js',
    replace: [
      [
        "  const STORAGE_LANG = 'fomacs-lang';\n  const getLang = () => localStorage.getItem(STORAGE_LANG) || 'en';\n  const setLang = (l) => {\n    localStorage.setItem(STORAGE_LANG, l);\n    root.setAttribute('data-lang', l);",
        "  // ?lang=en|ru (set by the portal's links) overrides the stored choice.\n  // Without a stored choice a page opens in its own <html lang>.\n  const STORAGE_LANG = 'fomacs-lang';\n  const urlLang = new URLSearchParams(location.search).get('lang');\n  if (urlLang === 'en' || urlLang === 'ru') localStorage.setItem(STORAGE_LANG, urlLang);\n  const getLang = () => localStorage.getItem(STORAGE_LANG) || root.lang || 'en';\n  // persist = false when only syncing the UI to the default, so a page does not store its own default\n  const setLang = (l, persist = true) => {\n    if (persist) localStorage.setItem(STORAGE_LANG, l);\n    root.setAttribute('data-lang', l);",
      ],
      [
        '    setLang(getLang());\n    setTheme(getTheme());',
        '    setLang(getLang(), false);\n    setTheme(getTheme());',
      ],
    ],
  },
];
const editAsset = (text, edit, rel) => {
  let out = text;
  for (const [from, to] of edit.replace || []) {
    const hits = out.split(from).length - 1;
    if (hits !== 1) throw new Error(`${rel}: asset edit matches ${hits} times (expected 1): ${from.slice(0, 60)}`);
    out = out.replace(from, () => to);
  }
  return edit.append ? `${out}${edit.append}` : out;
};

// English lab pages. scripts/cs-lab-overlay/pages/<page>.html is the bilingual page; <page>.html.base keeps the sha-256
// of the Russian page it was made from (after cleaning). If the Russian source changes, the overlay is not used and the
// run fails, so a translation cannot silently go missing. CS_LAB_OVERLAY=off writes the plain Russian pages (base hashes).
const OVERLAY_DIR = path.join(root, 'scripts', 'cs-lab-overlay', 'pages');
const overlaysOn = process.env.CS_LAB_OVERLAY !== 'off';
const sha256 = (text) => createHash('sha256').update(text).digest('hex');
const pageFor = (rel, cleaned) => {
  // R03 corrected bilingual pages belong to FomaCS, alongside their Russian originals.
  const sourceOverlay = path.join(source, '.foma-port', 'pages', rel);
  const overlay = existsSync(sourceOverlay) ? sourceOverlay : path.join(OVERLAY_DIR, rel);
  if (!overlaysOn || !existsSync(overlay)) return cleaned;
  const base = existsSync(`${overlay}.base`) ? readFileSync(`${overlay}.base`, 'utf8').trim() : '';
  if (base !== sha256(cleaned)) {
    throw new Error(`${rel}: the Russian source changed; update the bilingual overlay and its .base hash`);
  }
  console.log(`  ${rel}: English overlay`);
  return readFileSync(overlay, 'utf8');
};

// A heading that opens a section of teacher questions: the section runs to the next heading of the same or a higher level.
const OFFICIAL_HEADING = /официальн|экзаменационн\S* вопрос|вопросы преподавателя|Тренировочн/i;

// Pages made only of teacher question collections are not published; their links point to the portal topic instead.
const DROPPED_PAGES = new Set(['a4-1-ml-fundamentals.html', 'a4-3-approaches.html', 'a4-4-ethics.html']);

// Anything that is not a plain lesson file stays out (notes, handoff, PDFs, git data, editor folders).
const KEEP_EXT = new Set(['.html', '.css', '.js', '.svg', '.png', '.jpg', '.jpeg', '.gif', '.webp', '.ico']);

function listFiles(dir, base = '') {
  const out = [];
  for (const name of readdirSync(dir)) {
    if (name.startsWith('.')) continue;
    const full = path.join(dir, name);
    const rel = base ? `${base}/${name}` : name;
    if (statSync(full).isDirectory()) out.push(...listFiles(full, rel));
    else if (KEEP_EXT.has(path.extname(name).toLowerCase())) out.push(rel);
  }
  return out;
}

const plain = (html) => html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

// Cuts every section that starts with an official-question heading (up to the next heading of the same or higher level).
function cutOfficialSections(html, rel) {
  let text = html;
  for (let guard = 0; guard < 60; guard++) {
    const headings = [...text.matchAll(/<h([1-4])\b[^>]*>([\s\S]*?)<\/h\1>/gi)];
    const hit = headings.find((match) => OFFICIAL_HEADING.test(plain(match[2])));
    if (!hit) break;
    const level = Number(hit[1]);
    const next = headings.find((match) => match.index > hit.index && Number(match[1]) <= level);
    const mainEnd = text.indexOf('</main>', hit.index);
    let end = next ? next.index : text.length;
    if (mainEnd !== -1 && mainEnd < end) end = mainEnd;
    console.log(`  ${rel}: cut section "${plain(hit[2]).slice(0, 70)}" (${end - hit.index} chars)`);
    text = text.slice(0, hit.index) + text.slice(end);
  }
  return text;
}

// Removes the question cards, the official sections and the banned banners; unwraps the school links; rewrites the
// links to dropped pages to the portal topic. The lesson text stays.
function cleanHtml(html, rel) {
  let text = html.replace(/<details class="question-card">[\s\S]*?<\/details>/g, '');
  for (const correction of CORRECTIONS.filter((entry) => entry.file === rel)) {
    for (const [from, to] of correction.replace) {
      if (!text.includes(from)) {
        if (text.includes(to)) continue; // already fixed in FomaCS
        throw new Error(`${rel}: correction target not found: ${from}`);
      }
      text = text.split(from).join(to);
      console.log(`  ${rel}: corrected "${from.slice(0, 40)}"`);
    }
  }
  text = cutOfficialSections(text, rel);
  let banners = 0;
  text = text.replace(/<div class="ru-tip"[^>]*>(?:(?!<\/div>)[\s\S])*<\/div>/g, (block) => {
    if (BANNED_BANNER.some((pattern) => pattern.test(block))) {
      banners += 1;
      return '';
    }
    return block;
  });
  if (banners > 0) console.log(`  ${rel}: dropped ${banners} banner(s)`);
  text = text.replace(/✅ Официальные вопросы\.?/g, '');
  text = text.replace(/<a\b[^>]*href="https:\/\/(?:sites\.google\.com|docs\.google\.com)[^"]*"[^>]*>([\s\S]*?)<\/a>/g, '$1');
  text = text.replace(/href="([a-z0-9-]+)\.html(#[^"]*)?"/g, (match, name) => (DROPPED_PAGES.has(`${name}.html`)
    ? `href="/#/s/cs/t/${name}"`
    : match));
  return text;
}

// Prepare and validate every file before replacing any published lab files.
const prepared = new Map();
const files = listFiles(source);
let cards = 0;
for (const rel of files) {
  if (DROPPED_PAGES.has(rel)) {
    console.log(`  ${rel}: not published (teacher question collection)`);
    continue;
  }
  const from = path.join(source, rel);
  if (rel.endsWith('.html')) {
    const original = readFileSync(from, 'utf8');
    cards += (original.match(/<details class="question-card">/g) || []).length;
    prepared.set(rel, pageFor(rel, cleanHtml(original, rel)));
  } else {
    const edit = overlaysOn ? ASSET_EDITS.find((entry) => entry.file === rel) : undefined;
    if (edit) prepared.set(rel, editAsset(readFileSync(from, 'utf8'), edit, rel));
    else prepared.set(rel, readFileSync(from));
  }
}
console.log(`prepared ${prepared.size} files from ${source}; question cards removed: ${cards}`);

// Residual check: nothing that points to school documents or to the teacher's questions may remain.
// "Google Docs" as a product name in a list is fine; a quoted teacher document title is not.
const residual = /docs\.google|sites\.google|authuser=|официальн|от преподавателя|Google Doc\s*[«"“]/i;
const leftovers = [...prepared.keys()]
  .filter((rel) => /\.(html|js|css)$/.test(rel))
  .flatMap((rel) => prepared.get(rel).toString().split('\n')
    .map((line, index) => ({ rel, line: index + 1, text: line.trim() }))
    .filter((entry) => residual.test(entry.text)));
if (leftovers.length > 0) {
  console.log(`residual references (${leftovers.length}):`);
  leftovers.slice(0, 40).forEach((entry) => console.log(`  ${entry.rel}:${entry.line}: ${entry.text.slice(0, 160)}`));
  process.exitCode = 1;
} else {
  console.log('residual check: clean');
  rmSync(target, { recursive: true, force: true });
  for (const [rel, content] of prepared) {
    const to = path.join(target, rel);
    mkdirSync(path.dirname(to), { recursive: true });
    writeFileSync(to, content);
  }
  console.log(`copied ${prepared.size} files to ${path.relative(root, target)}`);
}
