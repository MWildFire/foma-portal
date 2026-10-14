// S9 review, round 1: one generic UX pass over a subject (math | geo | econ | fr | eng | cs).
//
// Headless Chromium (Playwright) against the built preview. Every route of the subject is opened in EN and RU at 390 px
// and 1280 px. Per page: console and page errors, failed local requests (audio included), horizontal scroll, service
// text, Cyrillic on EN pages (decision 6), KaTeX, RU term labels with the English term in brackets, <Question> reveal,
// every <Sim> (an input or a button must change its output), the content-language switch, the practice bank and the
// paper guides. On the subject home and two topics at 1280 px: axe-core, serious and critical violations only.
//
// Subject facts are read from the repository, never typed in here: topics from content/<subject>/**/topics/*.meta.ts,
// papers from content/<subject>/**/papers.ts and data/exams.json, simulations from src/sims/<subject>/ and the <Sim>
// tags of the topic sources, labels from src/i18n/<lang>/*.json, +25% times from data/exams.json (accessMinutes).
//
// Two extra passes. "time" context (EN, 1280 px, extra time on in storage): the exam times on #/exams (listening gets
// no extra time, decision 5) and the practice timer of every timed set linked from the paper pages, which must equal
// accessMinutes. Shared pages (#/, #/plan, #/settings, #/report) run once per session, unless UX_SHARED=0.
//
// Not covered here: the deep scenarios of the English simulations and the cs lab pages (/cs-lab/). They stay in
// ux-eng.mjs and ux-cs.mjs. Here every simulation gets the generic reaction test only.
//
// Network policy: only the local preview is reachable. Every other request is aborted and its host is listed.
//
// Usage:  node tests/review/ux-subject.mjs <math|geo|econ|fr|eng|cs>
// Env:    BASE_URL      preview origin (default http://127.0.0.1:4173); vite preview is started if nothing answers
//         UX_OUT        folder for ux-<subject>.json and screenshots (default: a folder under the OS temp directory)
//         AXE_PATH      path to axe.min.js (default: axe-core from node_modules, when it resolves)
//         UX_BUDGET_MS  wall-clock budget; routes not reached in time are reported as skipped (default 14 min)
//         UX_ROUTES     optional comma list of route names, for smoke runs (e.g. "subject,terms,t/<topic-id>")
//         UX_SHARED     0 to skip the shared pages (default 1)
import { spawn } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const SUBJECTS = ['math', 'geo', 'econ', 'fr', 'eng', 'cs'];
const SUBJECT = process.argv[2];
if (!SUBJECTS.includes(SUBJECT)) {
  console.error(`usage: node tests/review/ux-subject.mjs <${SUBJECTS.join('|')}>`);
  process.exit(2);
}

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const BASE_URL = (process.env.BASE_URL ?? 'http://127.0.0.1:4173').replace(/\/+$/, '');
const BASE = new URL(BASE_URL);
if (!['127.0.0.1', 'localhost'].includes(BASE.hostname)) {
  throw new Error(`BASE_URL must be a local preview, got ${BASE.hostname}`);
}
const OUT = process.env.UX_OUT ?? path.join(tmpdir(), `foma-ux-${SUBJECT}`);
const SHOTS = path.join(OUT, 'shots');
const STARTED = Date.now();
const DEADLINE = STARTED + Number(process.env.UX_BUDGET_MS ?? 14 * 60 * 1000);
const SHARED_ON = process.env.UX_SHARED !== '0';
const ONLY = process.env.UX_ROUTES
  ? new Set(process.env.UX_ROUTES.split(',').map((name) => name.trim()).filter(Boolean))
  : null;
const SHOT_CAP = 160;
mkdirSync(SHOTS, { recursive: true });

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const pad = (n) => String(n).padStart(2, '0');

// ---------------------------------------------------------------------------------------------------------------
// Subject facts from the repository
// ---------------------------------------------------------------------------------------------------------------

function walk(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

const SUBJECT_DIR = path.join(ROOT, 'content', SUBJECT);
const CONTENT_FILES = walk(SUBJECT_DIR);

// Topics: content/<subject>/**/topics/<file>.meta.ts, with the English and Russian bodies next to them.
const TOPICS = CONTENT_FILES.filter((file) => /\/topics\/[^/]+\.meta\.ts$/.test(file))
  .map((file) => {
    const base = path.basename(file, '.meta.ts');
    const id = readFileSync(file, 'utf8').match(/\bid:\s*'([^']+)'/)?.[1] ?? base;
    const dir = path.dirname(file);
    return { id, file, body: { en: path.join(dir, `${base}.en.mdx`), ru: path.join(dir, `${base}.ru.mdx`) } };
  })
  .sort((a, b) => a.id.localeCompare(b.id));
const DUPLICATE_TOPIC_IDS = TOPICS.map((topic) => topic.id).filter((id, index, all) => all.indexOf(id) !== index);

const EXAMS = JSON.parse(readFileSync(path.join(ROOT, 'data', 'exams.json'), 'utf8'));
const PAPERS = [
  ...new Set([
    ...EXAMS.papers.filter((paper) => paper.subject === SUBJECT).map((paper) => paper.paper),
    ...CONTENT_FILES.filter((file) => file.endsWith('papers.ts')).flatMap((file) =>
      [...readFileSync(file, 'utf8').matchAll(/paper:\s*'(P\d)'/g)].map((match) => match[1]),
    ),
  ]),
].sort();

// Simulations: the .tsx files of src/sims/<subject> (not the _ helpers) and the <Sim id> tags of the topic bodies.
const SIM_DIR = path.join(ROOT, 'src', 'sims', SUBJECT);
const SIM_FILES = existsSync(SIM_DIR)
  ? readdirSync(SIM_DIR).filter((file) => file.endsWith('.tsx') && !file.startsWith('_')).map((file) => `${SUBJECT}.${file.slice(0, -4)}`)
  : [];
const SIM_REFS = TOPICS.flatMap((topic) =>
  [topic.body.en, topic.body.ru]
    .filter((file) => existsSync(file))
    .flatMap((file) => [...readFileSync(file, 'utf8').matchAll(/<Sim\s+id="([^"]+)"/g)].map((match) => match[1])),
);
const ALL_SIMS = [...new Set([...SIM_FILES, ...SIM_REFS])].sort();

// Topics checked with axe: the first topic, the first one with a simulation, and the second topic (two in total).
const withSim = TOPICS.find((topic) => existsSync(topic.body.en) && /<Sim\s/.test(readFileSync(topic.body.en, 'utf8')));
const AXE_TOPIC_IDS = new Set([TOPICS[0]?.id, withSim?.id, TOPICS[1]?.id].filter(Boolean).slice(0, 2));

const readI18n = (...file) => JSON.parse(readFileSync(path.join(ROOT, 'src', 'i18n', ...file), 'utf8'));
const PRACTICE = { en: readI18n('en', 'practice.json'), ru: readI18n('ru', 'practice.json') };
const EXAM_T = { en: readI18n('en', 'exams.json'), ru: readI18n('ru', 'exams.json') };

// The +25% rule (decision 5). The school table first; plain rounding only when a length is missing from it.
const extendedFor = (minutes) => {
  const fromTable = EXAMS.accessMinutes[String(minutes)];
  return typeof fromTable === 'number' ? fromTable : Math.round(minutes * 1.25);
};
const endOf = (start, minutes) => {
  const [hours, mins] = start.split(':').map(Number);
  const total = hours * 60 + mins + minutes;
  return `${pad(Math.floor(total / 60) % 24)}:${pad(total % 60)}`;
};

// "Extra time is on: {{base}} min + 25% (+{{extra}} min) = {{total}} min." -> a regex with three capture groups.
function templateRegex(template) {
  const source = template
    .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    .replace(/\\\{\\\{\w+\\\}\\\}/g, '(\\d+)');
  return new RegExp(source);
}
const EXTRA_ON_RE = templateRegex(PRACTICE.en.timed.extra.on);

// ---------------------------------------------------------------------------------------------------------------
// Routes and matrix
// ---------------------------------------------------------------------------------------------------------------

const SUBJECT_ROUTES = [
  { name: 'subject', hash: `/s/${SUBJECT}`, kind: 'subject', axe: true },
  { name: 'terms', hash: `/s/${SUBJECT}/terms`, kind: 'terms' },
  { name: 'formulas', hash: `/s/${SUBJECT}/formulas`, kind: 'page' },
  { name: 'practice', hash: `/s/${SUBJECT}/practice`, kind: 'practice' },
  ...PAPERS.map((paper) => ({ name: `paper-${paper}`, hash: `/s/${SUBJECT}/paper/${paper}`, kind: 'paper', paper })),
  { name: 'exams', hash: '/exams', kind: 'exams' },
  ...TOPICS.map((topic) => ({ name: `t/${topic.id}`, hash: `/s/${SUBJECT}/t/${topic.id}`, kind: 'topic', topic, axe: AXE_TOPIC_IDS.has(topic.id) })),
  { name: 'sims-index', hash: '/sims', kind: 'sims-index' },
  ...ALL_SIMS.map((id) => ({ name: `sim/${id}`, hash: `/sims?sim=${encodeURIComponent(id)}`, kind: 'sim', sim: id })),
];

const SHARED_ROUTES = [
  { name: 'today', hash: '/', kind: 'shared' },
  { name: 'plan', hash: '/plan', kind: 'shared' },
  { name: 'settings', hash: '/settings', kind: 'shared' },
  { name: 'report', hash: '/report', kind: 'shared' },
];

const LANGS = [
  { code: 'en', ui: 'en', content: 'en', locale: 'en-US' },
  { code: 'ru', ui: 'ru', content: 'ru', locale: 'ru-RU' },
];
const WIDTHS = [
  { name: '390', width: 390, height: 844, mobile: true },
  { name: '1280', width: 1280, height: 800, mobile: false },
];
const MATRIX = LANGS.flatMap((lang) => WIDTHS.map((width) => ({ lang, width, mode: 'matrix', extraTime: false })));
const TIME_COMBO = { lang: LANGS[0], width: WIDTHS[1], mode: 'time', extraTime: true };

// ---------------------------------------------------------------------------------------------------------------
// Text patterns
// ---------------------------------------------------------------------------------------------------------------

const SERVICE = [
  { label: 'placeholder note "Own wording"', re: /own wording/gi },
  { label: 'source label "Own notes" (service text)', re: /own notes/gi },
  { label: 'placeholder note "check against the course textbook"', re: /check against the course textbook/gi },
  { label: 'placeholder note "chapter and page to be added"', re: /chapter and page to be added/gi },
  { label: 'TODO/TBD/FIXME/XXX marker', re: /\b(?:TODO|TBD|FIXME|XXX)\b/g },
  { label: 'lorem / placeholder / Заглушка', re: /\blorem\b|\bplaceholder\b|Заглушк/gi },
  { label: '"???"', re: /\?\?\?/g },
  // Values only: "undefined", "null" and "NaN" as a rendered value ("Value: null", "(NaN)"), not the English word
  // ("or undefined", "null hypothesis") that the statistics and calculus content uses.
  { label: '"undefined" as a value', re: /(?:[:=]|\()\s*undefined\b/g },
  { label: '"[object"', re: /\[object /g },
  { label: 'raw i18n braces', re: /\{\{|\}\}/g },
  { label: '"NaN" or "null" as a value', re: /\bNaN\b|(?:[:=]|\()\s*null\b(?! hypothesis)/g },
  {
    label: 'raw i18n key',
    re: /\b(?:contentLang|question|sim|warn|error|page|body|callout|term|formula|case|caseMap|reveal|source|link|table|nav|subject|exams|paper|plan|today|settings|planner|common|pages|notFound|practice|timed|filters|glossary|topics)\.[a-z][A-Za-z]+\b/g,
  },
  {
    label: 'component error boundary shown',
    re: /could not be loaded|could not be displayed|cannot be embedded|не удалось загрузить|не удалось отобразить/gi,
  },
  {
    label: 'missing component reference',
    re: /works only inside a topic page|работает только на странице темы|\(no id given\)|\(id не указан\)|not found:|не найден[аоы]?:/gi,
  },
  // The missing-body notices from src/i18n/*/topic.json (body.missing), not any sentence that happens to say "пока не готова".
  { label: 'topic body not ready', re: /(?:This topic|version of this topic) is not ready yet|версия этой темы пока не готова|Эта тема пока не готова/gi },
  { label: 'still loading after settle', re: /Loading the (?:topic|simulation|map)|Загружаю (?:тему|симуляцию|карту)/gi },
];
const NOT_FOUND = /Topic not found|Subject not found|Page not found|Тема не найдена|Предмет не найден|Страница не найдена/i;
const STUB = /This page is being built\.|Эта страница в работе\./;
const LOADING = /Loading|Загружа/;
const RU_CYR = /[Ѐ-ӿ]/;
// A Russian term followed by its English term in brackets, e.g. "Предложение (supply)". The decision-6 format.
const RU_THEN_EN = /[Ѐ-ӿ][^()]*\([^()]*[A-Za-z][^()]*\)/;

function snippet(text, index) {
  return text.slice(Math.max(0, index - 35), index + 45).replace(/\s+/g, ' ').trim();
}

function serviceHits(text) {
  const hits = [];
  for (const { label, re } of SERVICE) {
    let n = 0;
    for (const match of text.matchAll(re)) {
      hits.push({ label, sample: snippet(text, match.index) });
      n += 1;
      if (n >= 3) break;
    }
  }
  return hits;
}

function rawMathHits(text) {
  // Not TeX: a "$" after a letter or digit, before another "$" (US$, A$, "100$", "$$$$$"), a "$" before a digit ("$99")
  // unless a TeX mark (^ _ { } < > =) follows before the next "$", as in "$2P(t_{35} > 2.16)$", and a Python "\n"
  // before a capital letter in a string.
  const dollars = [...text.matchAll(/(?<![A-Za-z\d$])\$(?![$\d])|(?<![A-Za-z\d$])\$(?=\d[^$\n]{0,80}?[\^_{}<>=])/g)];
  const commands = [...text.matchAll(/\\[a-zA-Z]{2,}/g)].filter((m) => !/^\\n[A-Z]/.test(m[0]));
  const first = dollars[0] ?? commands[0];
  return { dollars: dollars.length, commands: commands.length, sample: first ? snippet(text, first.index) : '' };
}

function problem(rec, type, message, extra = {}) {
  rec.problems.push({ type, message, ...extra });
}

function must(rec, ok, message, type = 'sim', extra = {}) {
  if (!ok) problem(rec, type, message, extra);
  return ok;
}

// ---------------------------------------------------------------------------------------------------------------
// Runs in the page: layout, visible text and the counts the checks need.
// ---------------------------------------------------------------------------------------------------------------

function pageState(subject) {
  const vw = document.documentElement.clientWidth;
  const sw = document.documentElement.scrollWidth;
  const offenders = [];
  for (const el of document.querySelectorAll('body *')) {
    const r = el.getBoundingClientRect();
    if (r.width === 0 || r.height === 0) continue;
    if (r.right <= vw + 1 && r.left >= -1) continue;
    // Hidden or clipped by design: the MathML copy of a formula (screen readers only) and the map tiles of a case map.
    if (el.closest('.katex-mathml, .leaflet-container')) continue;
    let p = el.parentElement;
    let inScroller = false;
    while (p && p !== document.body) {
      const ox = getComputedStyle(p).overflowX;
      if ((ox === 'auto' || ox === 'scroll') && p.scrollWidth > p.clientWidth + 1) {
        inScroller = true;
        break;
      }
      p = p.parentElement;
    }
    if (inScroller) continue;
    offenders.push({
      tag: el.tagName.toLowerCase(),
      cls: (el.getAttribute('class') || '').slice(0, 80),
      left: Math.round(r.left),
      right: Math.round(r.right),
      text: (el.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 60),
    });
    if (offenders.length >= 6) break;
  }
  const bodyText = document.body.innerText;
  const main = document.querySelector('main') || document.body;
  const mainText = main.innerText;
  const cyrBody = bodyText.match(/[Ѐ-ӿ]/g) || [];
  const cyrAt = bodyText.search(/[Ѐ-ӿ]/);
  const h1 = document.querySelector('h1');
  const topicHrefs = new Set(
    Array.from(document.querySelectorAll('a[href]'))
      .map((a) => a.getAttribute('href'))
      .filter((href) => href && href.includes(`/s/${subject}/t/`)),
  );
  return {
    scrollWidth: sw,
    clientWidth: vw,
    hscroll: sw > vw + 1,
    offenders,
    text: bodyText,
    cyr: cyrBody.length,
    cyrSample: cyrAt >= 0 ? bodyText.slice(Math.max(0, cyrAt - 30), cyrAt + 40).replace(/\s+/g, ' ') : '',
    cyrMain: (mainText.match(/[Ѐ-ӿ]/g) || []).length,
    latMain: (mainText.match(/[A-Za-z]/g) || []).length,
    katex: document.querySelectorAll('.katex').length,
    katexError: document.querySelectorAll('.katex-error').length,
    h1: h1 ? h1.innerText.trim() : null,
    questions: document.querySelectorAll('.foma-question').length,
    sims: document.querySelectorAll('.foma-sim').length,
    articles: Array.from(document.querySelectorAll('article[lang]')).map((a) => a.getAttribute('lang')),
    topicLinks: topicHrefs.size,
  };
}

// The part of a simulation that shows its output: everything except the form controls (their values are input).
function outputSignature(el) {
  const clone = el.cloneNode(true);
  clone.querySelectorAll('input:not([readonly]), select, textarea').forEach((node) => node.remove());
  return clone.innerHTML;
}

function describeControl(el) {
  return {
    tag: el.tagName.toLowerCase(),
    type: (el.getAttribute('type') || '').toLowerCase(),
    readOnly: el.readOnly === true,
    text: String(el.innerText || el.value || el.getAttribute('aria-label') || '').trim().replace(/\s+/g, ' ').slice(0, 30),
  };
}

// ---------------------------------------------------------------------------------------------------------------
// Preview and page plumbing
// ---------------------------------------------------------------------------------------------------------------

function isLocal(url) {
  if (/^(data|blob|about):/.test(url)) return true;
  try {
    return new URL(url).origin === BASE.origin;
  } catch {
    return false;
  }
}

function hostOf(url) {
  try {
    return new URL(url).host;
  } catch {
    return url.slice(0, 80);
  }
}

function resolveAxe() {
  if (process.env.AXE_PATH && existsSync(process.env.AXE_PATH)) return process.env.AXE_PATH;
  try {
    return createRequire(import.meta.url).resolve('axe-core/axe.min.js');
  } catch {
    return null;
  }
}
const AXE = resolveAxe();

async function responds(url) {
  try {
    return (await fetch(url)).ok;
  } catch {
    return false;
  }
}

async function ensurePreview() {
  if (await responds(BASE_URL)) return null;
  const vite = path.join(ROOT, 'node_modules', 'vite', 'bin', 'vite.js');
  const child = spawn(process.execPath, [vite, 'preview', '--host', BASE.hostname, '--port', BASE.port || '4173', '--strictPort'], {
    cwd: ROOT,
    stdio: 'ignore',
  });
  for (let i = 0; i < 60; i += 1) {
    if (await responds(BASE_URL)) return child;
    await sleep(500);
  }
  child.kill();
  throw new Error(`vite preview did not answer on ${BASE_URL}`);
}

function attachListeners(page, rec) {
  page.on('console', (msg) => {
    if (msg.type() !== 'error' && msg.type() !== 'warning') return;
    const url = msg.location()?.url ?? '';
    const text = msg.text();
    // Only http(s) resources from another origin count as external; file-like sourceURLs (injected axe) are local.
    const external = /^https?:\/\//.test(url) && !isLocal(url);
    if (external || text.includes('net::ERR_FAILED')) {
      if (external) rec.external.add(hostOf(url));
      return;
    }
    // Seen only after axe-core is injected into a page (a harness step): counted, not reported. A real failed
    // resource would still show as a local request failure below.
    if (text.includes("Couldn't load preload assets")) {
      rec.info.preloadWarnings = (rec.info.preloadWarnings ?? 0) + 1;
      return;
    }
    problem(rec, 'console', `${msg.type()}: ${text}`.slice(0, 300));
  });
  page.on('pageerror', (error) => problem(rec, 'pageerror', String(error?.message ?? error).slice(0, 300)));
  page.on('requestfailed', (request) => {
    if (isLocal(request.url())) problem(rec, 'request', `failed: ${request.url()} (${request.failure()?.errorText})`);
    else rec.external.add(hostOf(request.url()));
  });
  page.on('response', (response) => {
    if (response.status() >= 400 && isLocal(response.url())) {
      problem(rec, 'request', `HTTP ${response.status()}: ${response.url()}`);
    }
  });
}

const shotted = new Set();
let shotCount = 0;
async function shotOnce(page, rec, type) {
  const key = [type, rec.route, rec.lang, rec.width, rec.mode].join('|');
  if (shotted.has(key) || shotCount >= SHOT_CAP) return;
  shotted.add(key);
  shotCount += 1;
  const name = ['ux', SUBJECT, type, rec.route, rec.lang, rec.width, rec.mode].join('__').replace(/[^\w.-]+/g, '_');
  const file = path.join(SHOTS, `${name}.png`);
  try {
    await page.screenshot({ path: file, fullPage: true, timeout: 15000 });
    rec.shots[type] = file;
  } catch {
    // A screenshot is evidence only; a failed capture must not hide the finding.
  }
}

async function settle(page, route) {
  await page.waitForLoadState('networkidle', { timeout: 6000 }).catch(() => {});
  if (route.kind === 'sim') {
    await page.waitForSelector('.sim-viewer__stage', { timeout: 10000 }).catch(() => {});
  } else {
    await page.waitForSelector('h1', { timeout: 8000 }).catch(() => {});
  }
  if (route.kind === 'topic') await page.waitForSelector('article', { timeout: 8000 }).catch(() => {});
  await page.waitForFunction(() => !/Loading the |Загружаю /.test(document.body.innerText), null, { timeout: 8000 }).catch(() => {});
  await page.waitForTimeout(300);
}

async function snapshot(page, rec, phase, route, combo) {
  const s = await page.evaluate(pageState, SUBJECT);
  rec.info[phase] = {
    h1: s.h1,
    questions: s.questions,
    sims: s.sims,
    articles: s.articles,
    katex: s.katex,
    scroll: [s.scrollWidth, s.clientWidth],
    topicLinks: s.topicLinks,
  };
  if (s.hscroll) {
    problem(rec, 'hscroll', `page is ${s.scrollWidth - s.clientWidth}px wider than the ${s.clientWidth}px viewport`, {
      phase,
      offenders: s.offenders,
    });
    await shotOnce(page, rec, 'hscroll');
  }
  for (const hit of serviceHits(s.text)) {
    problem(rec, 'text', `${hit.label}: "${hit.sample}"`, { phase });
    await shotOnce(page, rec, 'text');
  }
  // Sims pages have no page h1 of their own; the simulation title is checked in the sim route instead.
  if (route.kind !== 'sim' && route.kind !== 'sims-index') {
    if (s.h1 === null) problem(rec, 'route', 'no h1 on the page', { phase });
    if (s.h1 !== null && NOT_FOUND.test(s.h1)) problem(rec, 'route', `page shows "${s.h1}"`, { phase });
  }
  if (STUB.test(s.text)) problem(rec, 'stub', 'page is a stub ("This page is being built.")', { phase });
  if (s.katexError > 0) problem(rec, 'katex', `${s.katexError} .katex-error element(s)`, { phase });
  const math = rawMathHits(s.text);
  if (math.dollars + math.commands > 0) {
    problem(rec, 'katex', `${math.dollars} "$" and ${math.commands} backslash command(s) in visible text, e.g. "${math.sample}"`, { phase });
  }
  // Decision 6: EN shows English only, anywhere on the page (header and footer included).
  if (combo.lang.code === 'en' && s.cyr > 0) {
    problem(rec, 'lang', `${s.cyr} Cyrillic letter(s) on an English page, e.g. "${s.cyrSample}"`, { phase });
    await shotOnce(page, rec, 'lang');
  }
  if (combo.lang.code === 'ru' && route.kind === 'topic' && s.cyrMain + s.latMain > 0) {
    const share = s.cyrMain / (s.cyrMain + s.latMain);
    if (share < 0.5) {
      problem(rec, 'lang', `Russian topic text is only ${Math.round(share * 100)}% Cyrillic letters`, { phase });
      await shotOnce(page, rec, 'lang');
    }
  }
}

// ---------------------------------------------------------------------------------------------------------------
// Per-page checks
// ---------------------------------------------------------------------------------------------------------------

async function axeCheck(page, rec) {
  if (!AXE) {
    rec.info.axe = 'not run: axe.min.js not found (set AXE_PATH)';
    return;
  }
  await page.addScriptTag({ path: AXE });
  const violations = await page.evaluate(async () => {
    const result = await window.axe.run(document, { resultTypes: ['violations'] });
    return result.violations.map((v) => ({
      id: v.id,
      impact: v.impact,
      help: v.help,
      nodes: v.nodes.length,
      targets: v.nodes.slice(0, 2).map((n) => n.target.join(' ')),
    }));
  });
  rec.info.axe = violations.map((v) => `${v.impact}:${v.id}:${v.nodes}`);
  for (const v of violations) {
    if (v.impact !== 'serious' && v.impact !== 'critical') continue;
    problem(rec, 'axe', `${v.impact} ${v.id} (${v.help}): ${v.nodes} node(s), e.g. ${v.targets.join(' | ')}`, { phase: 'axe' });
    await shotOnce(page, rec, 'axe');
  }
}

async function revealQuestions(page, rec) {
  const cards = page.locator('.foma-question');
  const total = await cards.count();
  rec.info.questions = total;
  rec.info.revealed = 0;
  for (let i = 0; i < total; i += 1) {
    const card = cards.nth(i);
    const label = `question ${i + 1} of ${total}`;
    try {
      const toggle = card.locator('button[aria-expanded]').first();
      const before = (await card.innerText()).length;
      await toggle.click({ timeout: 5000 });
      const answer = card.locator('.foma-question__answer');
      await answer.waitFor({ state: 'visible', timeout: 3000 });
      const answerText = (await answer.innerText()).trim();
      const after = (await card.innerText()).length;
      const expanded = await toggle.getAttribute('aria-expanded');
      if (expanded !== 'true' || answerText.length < 20 || after <= before) {
        problem(rec, 'question', `${label}: expanded=${expanded}, answer ${answerText.length} chars, card text ${before} -> ${after}`, {
          phase: 'reveal',
        });
        await shotOnce(page, rec, 'question');
        continue;
      }
      // Rate the answer as a student would ("Partly right") and check that the save message appears.
      await card.locator('.foma-btn-row button').nth(1).click({ timeout: 5000 });
      const status = card.locator('[role="status"]');
      const saved = (await status.count()) > 0 ? (await status.first().innerText()).trim() : '';
      must(rec, saved.length > 0, `${label}: no save message after rating`, 'question', { phase: 'reveal' });
      rec.info.revealed += 1;
    } catch (error) {
      problem(rec, 'question', `${label} did not reveal: ${String(error.message).split('\n')[0]}`, { phase: 'reveal' });
      await shotOnce(page, rec, 'question');
    }
  }
}

async function contentToggle(page, rec) {
  const group = page.getByRole('group', { name: /Text language|Язык текста/ }).first();
  if ((await group.count()) === 0) {
    rec.info.toggle = 'no content-language switch on this page';
    return;
  }
  const langs = () => page.locator('article[lang]').evaluateAll((nodes) => nodes.map((node) => node.getAttribute('lang')).join(','));
  try {
    await group.getByRole('button', { name: 'EN + RU', exact: true }).click({ timeout: 5000 });
    const both = await langs();
    must(rec, both === 'en,ru', `"EN + RU" shows articles [${both}], expected [en,ru]`, 'toggle');
    await group.getByRole('button', { name: 'RU', exact: true }).click({ timeout: 5000 });
    const ru = await langs();
    must(rec, ru === 'ru', `"RU" shows articles [${ru}], expected [ru]`, 'toggle');
    await group.getByRole('button', { name: 'EN', exact: true }).click({ timeout: 5000 });
    const en = await langs();
    must(rec, en === 'en', `"EN" shows articles [${en}], expected [en]`, 'toggle');
  } catch (error) {
    problem(rec, 'toggle', `content-language switch: ${String(error.message).split('\n')[0]}`);
  }
}

// A simulation must react to input: some input or button, when used, changes what the simulation shows.
async function actOn(page, control, info) {
  if (info.tag === 'select') {
    const count = await control.evaluate((el) => el.options.length);
    if (count > 1) await control.selectOption({ index: 1 });
    return;
  }
  if (info.tag === 'textarea') {
    await control.fill('A short sample answer for the review check, with a few words in it.');
    return;
  }
  if (info.tag === 'input') {
    if (['checkbox', 'radio', 'button', 'submit', 'reset'].includes(info.type)) {
      await control.click();
      return;
    }
    if (info.type === 'range') {
      await control.focus();
      await page.keyboard.press('End');
      return;
    }
    if (info.type === 'number') {
      await control.fill('7');
      return;
    }
    await control.fill('Macbeth');
    return;
  }
  await control.click();
}

async function reactionCheck(page, rec, root, id, phase) {
  if (!(await root.isVisible().catch(() => false))) {
    problem(rec, 'sim', `${id}: not visible on the page`, { phase });
    await shotOnce(page, rec, 'sim');
    return;
  }
  // The simulation is loaded lazily: wait for its "Loading" line to go away.
  for (let k = 0; k < 40; k += 1) {
    const text = await root.innerText().catch(() => '');
    if (text.trim() && !LOADING.test(text)) break;
    await page.waitForTimeout(200);
  }
  const text = await root.innerText().catch(() => '');
  if (!text.trim() || LOADING.test(text)) {
    problem(rec, 'sim', `${id}: still loading or empty after 8 s`, { phase });
    await shotOnce(page, rec, 'sim');
    return;
  }
  const controls = root.locator('input:not([type=hidden]), select, textarea, button');
  const total = await controls.count();
  const usable = [];
  for (let i = 0; i < total && usable.length < 40; i += 1) {
    const control = controls.nth(i);
    const info = await control.evaluate(describeControl).catch(() => null);
    if (!info || info.readOnly) continue;
    if (!(await control.isVisible().catch(() => false)) || !(await control.isEnabled().catch(() => false))) continue;
    usable.push({ control, info });
  }
  rec.info.simsChecked = (rec.info.simsChecked ?? 0) + 1;
  if (usable.length === 0) {
    problem(rec, 'sim', `${id}: no input or button to test (a static figure, or the controls are missing)`, { phase });
    return;
  }
  // Buttons first: some simulations show their result only after a "Check" button, once the selects are chosen.
  usable.sort((a, b) => (a.info.tag === 'button' ? 0 : 1) - (b.info.tag === 'button' ? 0 : 1));
  let before = await root.evaluate(outputSignature);
  const tried = [];
  let reacted = false;
  for (const { control, info } of usable.slice(0, 8)) {
    tried.push(`${info.tag}${info.type ? `[${info.type}]` : ''} "${info.text}"`);
    try {
      await actOn(page, control, info);
    } catch {
      continue;
    }
    await page.waitForTimeout(250);
    const after = await root.evaluate(outputSignature);
    if (after !== before) {
      reacted = true;
      break;
    }
    before = after;
  }
  if (reacted) {
    rec.info.simsReacting = (rec.info.simsReacting ?? 0) + 1;
  } else {
    problem(rec, 'sim', `${id}: ${tried.length} control(s) tried, none changes the output: ${tried.join(' | ')}`, { phase });
    await shotOnce(page, rec, 'sim');
  }
}

async function audioCheck(page, rec) {
  const audios = page.locator('audio');
  const count = await audios.count();
  if (count === 0) return;
  await page
    .waitForFunction(() => [...document.querySelectorAll('audio')].every((a) => a.readyState >= 1 || a.error), null, { timeout: 8000 })
    .catch(() => {});
  const states = await audios.evaluateAll((els) =>
    els.map((a) => ({ src: a.getAttribute('src') ?? '', ready: a.readyState, error: a.error ? a.error.code : null })),
  );
  rec.info.audio = states.length;
  for (const state of states) {
    if (state.error !== null) problem(rec, 'audio', `audio ${state.src} failed to load (media error ${state.error})`, { phase: 'audio' });
    else if (state.ready < 1) problem(rec, 'audio', `audio ${state.src} not loaded after 8 s`, { phase: 'audio' });
    const http = await page.evaluate(async (src) => {
      try {
        const response = await fetch(src);
        return { status: response.status, type: response.headers.get('content-type') ?? '' };
      } catch (error) {
        return { status: 0, type: String(error) };
      }
    }, state.src);
    if (http.status !== 200 || !/audio|octet-stream/.test(http.type)) {
      problem(rec, 'audio', `audio ${state.src}: HTTP ${http.status}, ${http.type}`, { phase: 'audio' });
    }
  }
}

// Decision 6 on term cards: EN shows no Russian; RU labels put the English term in brackets after the Russian term.
async function termChecks(page, rec, combo, phase) {
  const info = await page.evaluate(() => {
    const visible = (el) => el.getBoundingClientRect().height > 0;
    const clean = (text) => (text || '').replace(/\s+/g, ' ').trim();
    const ruDefs = [...document.querySelectorAll('.foma-term__def[lang="ru"], .gl-entry__def[lang="ru"]')].filter(visible).length;
    const labels = [...document.querySelectorAll('.foma-term__label')].slice(0, 10).map((el) => clean(el.textContent));
    const cards = [...document.querySelectorAll('.gl-entry')].slice(0, 10).map((el) => ({
      en: clean(el.querySelector('h3')?.textContent),
      ru: clean(el.querySelector('.gl-entry__def[lang="ru"]')?.textContent).slice(0, 160),
    }));
    return {
      ruDefs,
      labels,
      cards,
      termCount: document.querySelectorAll('.foma-term').length,
      cardCount: document.querySelectorAll('.gl-entry').length,
    };
  });
  rec.info[`${phase}-terms`] = { termCards: info.termCount, glossaryCards: info.cardCount };
  if (combo.lang.code === 'en' && info.ruDefs > 0) {
    problem(rec, 'lang', `${info.ruDefs} Russian term definition(s) visible on an English page`, { phase });
    await shotOnce(page, rec, 'lang');
  }
  if (combo.lang.code === 'ru') {
    const badLabels = info.labels.filter((label) => !RU_THEN_EN.test(label));
    if (badLabels.length > 0) {
      problem(rec, 'term', `${badLabels.length} of ${info.labels.length} RU term label(s) lack the English term in brackets after the Russian, e.g. "${badLabels[0]}"`, { phase });
      await shotOnce(page, rec, 'term');
    }
    const badCards = info.cards.filter((card) => card.ru && !RU_THEN_EN.test(card.ru));
    if (badCards.length > 0) {
      problem(rec, 'term', `${badCards.length} of ${info.cards.length} sampled glossary cards lack the English term in brackets after the Russian, e.g. "${badCards[0].en}: ${badCards[0].ru.slice(0, 60)}"`, { phase });
      await shotOnce(page, rec, 'term');
    }
  }
}

async function topicChecks(ctx) {
  const { page, rec, route, combo } = ctx;
  const file = route.topic.body[combo.lang.code];
  const source = existsSync(file) ? readFileSync(file, 'utf8') : '';
  const questionTags = (source.match(/<Question\b/g) ?? []).length;
  const simIds = [...source.matchAll(/<Sim\s+id="([^"]+)"/g)].map((match) => match[1]);
  const initial = rec.info.initial;
  rec.info.bodyFound = source !== '';
  if (source !== '') {
    must(rec, initial.questions === questionTags, `${initial.questions} rendered for ${questionTags} <Question> tag(s)`, 'question', {
      phase: 'initial',
    });
    must(rec, initial.sims === simIds.length, `${initial.sims} simulation frame(s) rendered for ${simIds.length} <Sim> tag(s)`, 'sim', {
      phase: 'initial',
    });
  }
  if (route.axe && combo.width.name === '1280') await axeCheck(page, rec);
  await revealQuestions(page, rec);
  await snapshot(page, rec, 'after-reveal', route, combo);
  await audioCheck(page, rec);
  const sims = page.locator('.foma-sim');
  const simCount = await sims.count();
  for (let i = 0; i < simCount; i += 1) {
    await reactionCheck(page, rec, sims.nth(i), simIds[i] ?? `sim #${i + 1}`, 'sims');
  }
  // Term labels are checked in the language the page opened in; the content toggle below switches it to English.
  await termChecks(page, rec, combo, 'topic');
  await contentToggle(page, rec);
}

// Practice bank: every filter option with a count must show that many questions, the timed sets must apply, every
// markscheme must open, and three ratings must be counted in the results. Labels come from src/i18n/*/practice.json.
async function practiceChecks(page, rec, combo) {
  const P = PRACTICE[combo.lang.code];
  const selects = page.locator('main select');
  const selectCount = await selects.count();
  const visibleItems = () =>
    page.locator('main article[lang]').evaluateAll((els) => els.filter((el) => el.getBoundingClientRect().height > 0).length);
  const allCount = await visibleItems();
  rec.info.practiceItems = allCount;
  if (allCount === 0) return;
  // The list re-renders after a filter or timed set is cleared: wait until the full bank is back.
  const settleToAll = async () => {
    for (let k = 0; k < 30 && (await visibleItems()) !== allCount; k += 1) await page.waitForTimeout(100);
  };
  // The timed-set select is the one whose first option is the "no timed set" line.
  let timedIndex = -1;
  for (let i = 0; i < selectCount; i += 1) {
    const first = await selects.nth(i).evaluate((el) => el.options[0]?.textContent.trim() ?? '');
    if (first === P.timed.none) {
      timedIndex = i;
      break;
    }
  }
  let filtersChecked = 0;
  for (let s = 0; s < selectCount; s += 1) {
    if (s === timedIndex) continue;
    const options = await selects.nth(s).evaluate((el) => Array.from(el.options).map((o) => o.textContent.trim()));
    for (let o = 1; o < options.length; o += 1) {
      const match = options[o].match(/\((\d+)\)\s*$/);
      await selects.nth(s).selectOption({ index: o });
      await page.waitForTimeout(150);
      if (match) {
        filtersChecked += 1;
        const shown = await visibleItems();
        must(rec, shown === Number(match[1]), `practice filter "${options[o]}" shows ${shown} questions, its label says ${match[1]}`, 'question', {
          phase: 'practice',
        });
      }
    }
    await selects.nth(s).selectOption({ index: 0 });
    await settleToAll();
  }
  rec.info.practiceFilters = filtersChecked;

  if (timedIndex >= 0) {
    const sets = await selects.nth(timedIndex).evaluate((el) => el.options.length);
    for (let o = 1; o < sets; o += 1) {
      await selects.nth(timedIndex).selectOption({ index: o });
      await page.waitForTimeout(100);
    }
    await selects.nth(timedIndex).selectOption({ index: 0 });
    await settleToAll();
  }
  must(rec, (await visibleItems()) === allCount, `after clearing the filters the bank shows ${await visibleItems()} questions, expected ${allCount}`, 'question', {
    phase: 'practice',
  });

  const toggles = page.locator('main button[aria-expanded]');
  const total = await toggles.count();
  let opened = 0;
  for (let i = 0; i < total; i += 1) {
    const toggle = toggles.nth(i);
    const item = toggle.locator('xpath=ancestor::article[1]');
    try {
      const before = (await item.innerText()).length;
      await toggle.click({ timeout: 5000 });
      const expanded = await toggle.getAttribute('aria-expanded');
      const after = (await item.innerText()).length;
      if (expanded === 'true' && after > before) opened += 1;
      else problem(rec, 'question', `practice item ${i + 1}: expanded=${expanded}, text ${before} -> ${after}`, { phase: 'practice' });
    } catch (error) {
      problem(rec, 'question', `practice item ${i + 1} did not open: ${String(error.message).split('\n')[0]}`, { phase: 'practice' });
    }
  }
  rec.info.practiceToggles = total;
  rec.info.practiceOpened = opened;

  if (allCount >= 3) {
    const items = page.locator('main article[lang]');
    try {
      await items.nth(0).getByRole('button', { name: P.q.rating.right, exact: true }).click({ timeout: 5000 });
      await items.nth(1).getByRole('button', { name: P.q.rating.partial, exact: true }).click({ timeout: 5000 });
      await items.nth(2).getByRole('button', { name: P.q.rating.wrong, exact: true }).click({ timeout: 5000 });
      await page.waitForTimeout(200);
      const counts = await page.evaluate(
        ({ heading, labels }) => {
          const text = (document.querySelector('main') || document.body).innerText.replace(/\s+/g, ' ');
          const at = text.indexOf(heading);
          const block = at >= 0 ? text.slice(at, at + 260) : '';
          const grab = (word) => {
            const m = block.match(new RegExp(`${word}\\D{0,4}(\\d+)`));
            return m ? Number(m[1]) : null;
          };
          return { right: grab(labels.right), partial: grab(labels.partial), wrong: grab(labels.wrong) };
        },
        { heading: P.summary.heading, labels: { right: P.summary.right, partial: P.summary.partial, wrong: P.summary.wrong } },
      );
      must(
        rec,
        counts.right === 1 && counts.partial === 1 && counts.wrong === 1,
        `practice: after three ratings the results show right=${counts.right}, partly=${counts.partial}, wrong=${counts.wrong}`,
        'question',
        { phase: 'practice' },
      );
    } catch (error) {
      problem(rec, 'question', `practice rating: ${String(error.message).split('\n')[0]}`, { phase: 'practice' });
    }
  }
}

// The exam times on #/exams. Base time for everybody; with extra time on, the school's accessMinutes table, and no
// extra time for the listening paper (decision 5). The rows are matched by date and by their place in the day.
async function examChecks(page, rec, combo) {
  const extraLabel = EXAM_T[combo.lang.code].fields.extraTime;
  const rows = EXAMS.papers
    .filter((paper) => paper.subject === SUBJECT)
    .map((paper) => ({
      id: paper.id,
      date: paper.date,
      start: paper.start,
      minutes: paper.minutes,
      part: paper.part ?? null,
      index: EXAMS.papers.filter((other) => other.date === paper.date).indexOf(paper),
    }));
  rec.info.examRows = rows.length;
  if (rows.length === 0) return;
  const found = await page.evaluate(
    ({ rows, extraLabel }) =>
      rows.map((row) => {
        const section = document.getElementById(`exam-day-${row.date}`)?.closest('section');
        const item = section ? section.querySelectorAll(':scope > ul > li')[row.index] : undefined;
        if (!item) return { id: row.id, missing: true };
        const extra = Array.from(item.querySelectorAll('dt'))
          .filter((dt) => dt.textContent.trim() === extraLabel)
          .map((dt) => (dt.nextElementSibling?.textContent ?? '').replace(/\s+/g, ' ').trim());
        return { id: row.id, missing: false, text: item.innerText.replace(/\s+/g, ' '), extra };
      }),
    { rows, extraLabel },
  );
  const timeRanges = (text) =>
    [...text.matchAll(/(\d{1,2}):(\d{2})\s*[–-]\s*(\d{1,2}):(\d{2})/g)].map((m) => [`${pad(Number(m[1]))}:${m[2]}`, `${pad(Number(m[3]))}:${m[4]}`]);
  const endTimes = (text) => [...text.matchAll(/(\d{1,2}):(\d{2})/g)].map((m) => `${pad(Number(m[1]))}:${m[2]}`);
  const mode = combo.extraTime ? 'extra time on' : 'extra time off';
  for (const row of rows) {
    const shown = found.find((item) => item.id === row.id);
    if (!shown || shown.missing) {
      problem(rec, 'time', `${row.id}: exam row not found on #/exams`, { phase: mode });
      continue;
    }
    const ranges = timeRanges(shown.text);
    const baseEnd = endOf(row.start, row.minutes);
    const first = ranges[0];
    if (!first || first[0] !== row.start || first[1] !== baseEnd) {
      problem(rec, 'time', `${row.id}: base time shows ${first ? first.join('–') : 'nothing'}, expected ${row.start}–${baseEnd} (${row.minutes} min)`, {
        phase: mode,
      });
    }
    const shows = shown.extra.length > 0;
    if (!combo.extraTime) {
      if (shows) problem(rec, 'time', `${row.id}: an extra-time row is shown although extra time is off`, { phase: mode });
      continue;
    }
    if (row.part === 'listening') {
      if (shows) problem(rec, 'time', `${row.id}: listening paper shows extra time (decision 5: listening has none)`, { phase: mode });
      continue;
    }
    const longer = extendedFor(row.minutes);
    const extraEnd = endOf(row.start, longer);
    if (!shows) {
      problem(rec, 'time', `${row.id}: no extra-time row with extra time on (expected ${longer} min, ends ${extraEnd})`, { phase: mode });
      continue;
    }
    // The extended end is shown next to the printed end (decision 7): take it from the extra-time value when the row
    // has one, otherwise from the item text.
    const fromRow = endTimes(shown.extra[0] ?? '');
    const ends = fromRow.length > 0 ? fromRow : endTimes(shown.text);
    if (!ends.includes(extraEnd)) {
      problem(rec, 'time', `${row.id}: extra time shows no end of ${extraEnd} (accessMinutes gives ${longer} min); shown ends: ${ends.join(', ') || 'none'}`, {
        phase: mode,
      });
    }
  }
  rec.info.examTimes = rows.map((row) => `${row.id}:${row.minutes}->${combo.extraTime ? (row.part === 'listening' ? row.minutes : extendedFor(row.minutes)) : row.minutes}`);
  if (rec.problems.some((p) => p.type === 'time')) await shotOnce(page, rec, 'time');
}

// Time context: the paper guides' timed sets. Each set is started from the paper page; its practice timer must show
// the accessMinutes value (listening: no extra time). The paper's section is found from the chip "Part: listening".
async function paperTimedChecks(page, rec) {
  const links = await page.evaluate(() =>
    Array.from(document.querySelectorAll('article')).flatMap((article) => {
      const listening = Array.from(article.querySelectorAll('.foma-chip')).some((chip) => /listening/i.test(chip.textContent || ''));
      const title = (article.querySelector('h2')?.textContent || '').trim();
      return Array.from(article.querySelectorAll('a[href*="/practice"]')).map((a) => ({ href: a.getAttribute('href'), listening, title }));
    }),
  );
  rec.info.timedSetLinks = links.length;
  for (const link of links) {
    await page.evaluate((href) => {
      location.hash = href;
    }, link.href);
    let match = null;
    for (let k = 0; k < 25 && !match; k += 1) {
      await page.waitForTimeout(200);
      match = (await page.evaluate(() => document.body.innerText)).match(EXTRA_ON_RE);
    }
    const label = `${link.title} (${link.href})`;
    if (link.listening) {
      if (match) problem(rec, 'time', `listening timed set shows extra time: "${match[0]}" (decision 5: listening has none)`, { phase: 'paper-timed' });
      continue;
    }
    if (!match) {
      problem(rec, 'time', `timed set ${label}: no extra-time line in the practice timer`, { phase: 'paper-timed' });
      continue;
    }
    const base = Number(match[1]);
    const total = Number(match[3]);
    const expected = extendedFor(base);
    if (total !== expected) {
      problem(rec, 'time', `timed set of ${base} min: practice timer shows ${total} min, accessMinutes gives ${expected} min`, {
        phase: 'paper-timed',
      });
    }
  }
  if (rec.problems.some((p) => p.type === 'time')) await shotOnce(page, rec, 'time');
}

async function simsIndexChecks(page, rec) {
  const listed = await page.locator('code').evaluateAll((els) => els.map((el) => el.textContent.trim()));
  rec.info.simsListed = listed.filter((id) => ALL_SIMS.includes(id)).length;
  for (const id of ALL_SIMS) {
    if (!listed.includes(id)) problem(rec, 'sim', `${id} is not listed on #/sims`, { phase: 'index' });
  }
}

async function simPageCheck(page, rec, route) {
  const stage = page.locator('.sim-viewer__stage');
  const opened = await stage.waitFor({ state: 'visible', timeout: 10000 }).then(() => true).catch(() => false);
  if (!opened) {
    problem(rec, 'sim', `${route.sim}: #/sims does not open it`, { phase: 'sim-page' });
    await shotOnce(page, rec, 'sim');
    return;
  }
  await reactionCheck(page, rec, stage, route.sim, 'sim-page');
}

async function subjectChecks(page, rec, combo, route) {
  const topicLinks = rec.info.initial.topicLinks;
  if (topicLinks !== TOPICS.length) {
    problem(rec, 'route', `subject page links ${topicLinks} topics, the content has ${TOPICS.length}`, { phase: 'initial' });
  }
  rec.info.pastPapers = await page.evaluate(() =>
    Array.from(document.querySelectorAll('a[href]')).filter((a) => /past|прошл/i.test(`${a.getAttribute('href')} ${a.textContent}`)).length,
  );
  if (route.axe && combo.width.name === '1280') await axeCheck(page, rec);
}

// ---------------------------------------------------------------------------------------------------------------
// Matrix runner
// ---------------------------------------------------------------------------------------------------------------

function newRec(route, combo) {
  return {
    route: route.name,
    hash: route.hash,
    kind: route.kind,
    lang: combo.lang.code,
    width: combo.width.name,
    mode: combo.mode,
    problems: [],
    external: new Set(),
    shots: {},
    info: {},
  };
}

async function runRoute(context, cur, route, combo) {
  const rec = newRec(route, combo);
  if (Date.now() > DEADLINE) return { ...rec, external: [], skipped: 'time budget' };
  cur.rec = rec;
  let page;
  try {
    page = await context.newPage();
    attachListeners(page, rec);
    await page.goto(`${BASE_URL}/#${route.hash}`, { waitUntil: 'load', timeout: 20000 });
    await settle(page, route);
    await snapshot(page, rec, 'initial', route, combo);
    if (route.kind === 'subject') await subjectChecks(page, rec, combo, route);
    if (route.kind === 'topic') await topicChecks({ context, page, rec, route, combo });
    if (route.kind === 'terms') await termChecks(page, rec, combo, 'terms');
    if (route.kind === 'practice') {
      await practiceChecks(page, rec, combo);
      await snapshot(page, rec, 'after-practice', route, combo);
    }
    if (route.kind === 'paper' && combo.mode === 'time') await paperTimedChecks(page, rec);
    if (route.kind === 'exams') await examChecks(page, rec, combo);
    if (route.kind === 'sims-index') await simsIndexChecks(page, rec);
    if (route.kind === 'sim') await simPageCheck(page, rec, route);
  } catch (error) {
    problem(rec, 'harness', String(error?.message ?? error).split('\n')[0].slice(0, 300));
  } finally {
    cur.rec = null;
    await page?.close().catch(() => {});
  }
  return { ...rec, external: [...rec.external] };
}

async function runCombo(browser, combo, runs) {
  const context = await browser.newContext({
    viewport: { width: combo.width.width, height: combo.width.height },
    isMobile: combo.width.mobile,
    hasTouch: combo.width.mobile,
    deviceScaleFactor: 1,
    locale: combo.lang.locale,
    timezoneId: 'Asia/Dubai',
    colorScheme: 'light',
    reducedMotion: 'reduce',
  });
  const cur = { rec: null };
  // Language and access settings are written before the app starts, so every page of this run opens the same way.
  const state = JSON.stringify({
    version: 2,
    topics: {},
    terms: {},
    questions: {},
    blocks: {},
    settings: { accessArrangements: { extraTime: combo.extraTime, separateRoom: false }, dailyLoadMinutes: {} },
  });
  await context.addInitScript(
    ({ ui, content, state }) => {
      try {
        window.localStorage.setItem('foma-lang', ui);
        window.localStorage.setItem('foma-content-lang', content);
        window.localStorage.setItem('foma-portal-v1', state);
      } catch {
        // Storage blocked: the app then falls back to the browser language and the default settings.
      }
    },
    { ui: combo.lang.ui ?? combo.lang.code, content: combo.lang.content ?? combo.lang.code, state },
  );
  // Only the local preview is reachable; anything else is aborted and listed in the report.
  // The Google Fonts stylesheet of index.html is answered with empty CSS: the page then does not wait for a blocked
  // request, and nothing leaves the machine. Every other external request is aborted.
  await context.route('**/*', (handle) => {
    const url = handle.request().url();
    if (isLocal(url)) return handle.continue();
    if (cur.rec) cur.rec.external.add(hostOf(url));
    if (/^https:\/\/fonts\.googleapis\.com\//.test(url)) {
      return handle.fulfill({ status: 200, contentType: 'text/css', body: '' });
    }
    return handle.abort();
  });
  const routes =
    combo.mode === 'time'
      ? SUBJECT_ROUTES.filter((route) => route.kind === 'exams' || route.kind === 'paper')
      : [...SUBJECT_ROUTES, ...(SHARED_ON ? SHARED_ROUTES : [])];
  try {
    for (const route of routes) {
      if (ONLY && !ONLY.has(route.name)) continue;
      runs.push(await runRoute(context, cur, route, combo));
    }
  } finally {
    await context.close();
  }
}

// ---------------------------------------------------------------------------------------------------------------
// Summary
// ---------------------------------------------------------------------------------------------------------------

// P0: an English page with Russian or service text, a broken page or simulation, a console error on a main route,
// a time that differs from accessMinutes, listening with extra time, or audio that does not play.
// P1: horizontal scroll at 390 px, serious or critical axe, a Question that does not open, a missing English term.
// P2 is decided by hand in the report. HARNESS marks a route the harness could not run, not a product fault.
function severity(type, message) {
  if (['console', 'pageerror'].includes(type)) return 'P0';
  if (type === 'harness') return 'HARNESS';
  if (type === 'request') return /audio|\.mp3/.test(message) ? 'P0' : 'P1';
  if (type === 'lang') return /Russian topic text is only/.test(message) ? 'P1' : 'P0';
  if (['text', 'stub', 'time', 'audio'].includes(type)) return 'P0';
  if (type === 'route') return /no h1|shows "|not found/i.test(message) ? 'P0' : 'P1';
  if (type === 'sim') return /no input or button|static figure/.test(message) ? 'P1' : 'P0';
  return 'P1';
}

function normaliseMessage(p) {
  let message = p.message;
  if (p.type === 'text') message = message.split(': "')[0];
  if (p.type === 'lang' || p.type === 'term' || p.type === 'time') message = message.replace(/, e\.g\. .*$/, '');
  return message.replace(/\d+/g, 'N');
}

function summarise(runs) {
  const groups = new Map();
  const shotFiles = new Set();
  const external = new Set();
  for (const run of runs) {
    for (const host of run.external ?? []) external.add(host);
    for (const file of Object.values(run.shots ?? {})) shotFiles.add(file);
    for (const p of run.problems ?? []) {
      const message = normaliseMessage(p);
      const key = `${p.type} | ${message}`;
      const group = groups.get(key) ?? { type: p.type, sev: severity(p.type, p.message), message, example: p.message, count: 0, where: [] };
      group.count += 1;
      if (group.where.length < 12) group.where.push(`${run.route} ${run.mode} ${run.lang} ${run.width}${p.phase ? ` (${p.phase})` : ''}`);
      groups.set(key, group);
    }
  }
  const bySeverity = {};
  for (const group of groups.values()) bySeverity[group.sev] = (bySeverity[group.sev] ?? 0) + group.count;
  return {
    subject: SUBJECT,
    base: BASE_URL,
    topics: TOPICS.length,
    duplicateTopicIds: DUPLICATE_TOPIC_IDS,
    papers: PAPERS,
    sims: ALL_SIMS.length,
    axeTopics: [...AXE_TOPIC_IDS],
    axe: AXE ? 'run on subject home and two topics, 1280 px, EN and RU' : 'not run (axe-core not found)',
    runs: runs.length,
    skipped: runs.filter((run) => run.skipped).map((run) => `${run.route} ${run.mode} ${run.lang} ${run.width}`),
    runsWithProblems: runs.filter((run) => (run.problems ?? []).length > 0).length,
    severityCounts: bySeverity,
    externalHostsBlocked: [...external].sort(),
    screenshots: [...shotFiles].sort(),
    problems: [...groups.values()].sort((a, b) => a.sev.localeCompare(b.sev) || b.count - a.count),
    seconds: Math.round((Date.now() - STARTED) / 1000),
  };
}

async function main() {
  const preview = await ensurePreview();
  const browser = await chromium.launch();
  const runs = [];
  try {
    await Promise.all([...MATRIX, TIME_COMBO].map((combo) => runCombo(browser, combo, runs)));
  } finally {
    await browser.close();
    preview?.kill();
  }
  const order = new Map([...SUBJECT_ROUTES, ...SHARED_ROUTES].map((route, index) => [route.name, index]));
  runs.sort(
    (a, b) =>
      (order.get(a.route) ?? 0) - (order.get(b.route) ?? 0) ||
      a.mode.localeCompare(b.mode) ||
      a.lang.localeCompare(b.lang) ||
      a.width.localeCompare(b.width),
  );
  const summary = summarise(runs);
  mkdirSync(OUT, { recursive: true });
  writeFileSync(path.join(OUT, `ux-${SUBJECT}.json`), JSON.stringify({ summary, runs }, null, 2));
  console.log(
    JSON.stringify(
      {
        subject: summary.subject,
        runs: summary.runs,
        skipped: summary.skipped.length,
        severityCounts: summary.severityCounts,
        seconds: summary.seconds,
        json: path.join(OUT, `ux-${SUBJECT}.json`),
      },
      null,
      2,
    ),
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
