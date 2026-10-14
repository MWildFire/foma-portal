// S9 review, round 1: UX pass over the Computer Science HL subject (cs) and the static lab under /cs-lab/.
//
// Headless Chromium (Playwright) against the built preview. Every subject route is opened in EN and RU at 390 px and
// 1280 px. The lab pages are static (no language switch), so each one runs once per width and is marked "static".
// Per page: console and page errors, failed local requests, Pyodide load problems, horizontal scroll, service text,
// KaTeX, the language of the text, <Question> reveal, the ten CS simulations and the content-language switch.
// Lab pages also get their visible buttons clicked and their internal links checked. On the subject home and two
// topics: axe-core, serious and critical violations only.
//
// Network policy: only the local preview and cdn.jsdelivr.net (Pyodide) are reachable. Every other request is aborted
// and its host is listed in the summary. Links that point outside the preview are listed, never followed.
//
// Usage:  node tests/review/ux-cs.mjs
// Env:    BASE_URL      preview origin (default http://127.0.0.1:4173); vite preview is started if nothing answers
//         UX_OUT        folder for ux-cs.json and screenshots (default: a folder under the OS temp directory)
//         AXE_PATH      path to axe.min.js (default: axe-core from node_modules, when it resolves)
//         UX_BUDGET_MS  wall-clock budget; routes not reached in time are reported as skipped (default 25 min)
//         UX_ROUTES     optional comma list of route names to run, for smoke runs (e.g. "subject,t/b2-4-algorithms")
import { spawn } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const BASE_URL = (process.env.BASE_URL ?? 'http://127.0.0.1:4173').replace(/\/+$/, '');
const BASE = new URL(BASE_URL);
if (!['127.0.0.1', 'localhost'].includes(BASE.hostname)) {
  throw new Error(`BASE_URL must be a local preview, got ${BASE.hostname}`);
}
const OUT = process.env.UX_OUT ?? path.join(tmpdir(), 'foma-ux-cs');
const SHOTS = path.join(OUT, 'shots');
const STARTED = Date.now();
const DEADLINE = STARTED + Number(process.env.UX_BUDGET_MS ?? 25 * 60 * 1000);
const ONLY = process.env.UX_ROUTES
  ? new Set(process.env.UX_ROUTES.split(',').map((s) => s.trim()).filter(Boolean))
  : null;
mkdirSync(SHOTS, { recursive: true });

const CDN_ORIGIN = 'https://cdn.jsdelivr.net';
const SUBJECT_TOPIC_PREFIX = '/s/cs/t/';
const NET = { blocked: new Map(), cdnOk: 0, cdnFailed: 0 };

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function isLocal(url) {
  if (/^(data|blob|about):/.test(url)) return true;
  try {
    return new URL(url).origin === BASE.origin;
  } catch {
    return false;
  }
}

function isCdn(url) {
  try {
    return new URL(url).origin === CDN_ORIGIN;
  } catch {
    return false;
  }
}

const isOwn = (url) => isLocal(url) || isCdn(url);

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

// ---------------------------------------------------------------------------------------------------------------
// Routes and matrix
// ---------------------------------------------------------------------------------------------------------------

// Topics live in content/cs/<theme>/topics/<id>.meta.ts (theme-a, theme-b, case-2027).
const CS_ROOT = path.join(ROOT, 'content', 'cs');
const TOPIC_DIR = new Map();
for (const entry of readdirSync(CS_ROOT, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  const dir = path.join(CS_ROOT, entry.name, 'topics');
  if (!existsSync(dir)) continue;
  for (const file of readdirSync(dir)) {
    if (file.endsWith('.meta.ts')) TOPIC_DIR.set(file.slice(0, -'.meta.ts'.length), dir);
  }
}
const TOPIC_IDS = [...TOPIC_DIR.keys()].sort();

const AXE_TOPICS = new Set(['a1-1-hardware', 'b2-4-algorithms']);

const ROUTES = [
  { name: 'subject', hash: '/s/cs', kind: 'subject', axe: true },
  { name: 'terms', hash: '/s/cs/terms', kind: 'page' },
  { name: 'practice', hash: '/s/cs/practice', kind: 'page' },
  { name: 'formulas', hash: '/s/cs/formulas', kind: 'page' },
  { name: 'paper-P1', hash: '/s/cs/paper/P1', kind: 'page' },
  { name: 'paper-P2', hash: '/s/cs/paper/P2', kind: 'page' },
  ...TOPIC_IDS.map((id) => ({ name: `t/${id}`, hash: `/s/cs/t/${id}`, kind: 'topic', topic: id, axe: AXE_TOPICS.has(id) })),
  { name: 'sims-page', hash: '/sims', kind: 'page' },
];

// Lab pages: 12 linked from the topics, the index, and seven pages that the lab itself links to (extra).
const LAB_LINKED = [
  'a1-1-hardware.html',
  'a1-2-data-logic.html',
  'a1-3-os.html',
  'a1-4-translation.html',
  'a2-1-fundamentals.html',
  'a2-2-architecture.html',
  'a2-3-transmissions.html',
  'a2-4-security.html',
  'a3-1-fundamentals.html',
  'a3-2-design.html',
  'a3-3-sql.html',
  'a4-2-preprocessing.html',
];
const LAB_EXTRA = ['fundamentals.html', 'networks.html', 'databases.html', 'setevye-ustroistva.html', 'quiz.html', 'ml.html', 'lessons.html'];
const LABS = [
  { name: 'lab/', path: '/cs-lab/', extra: false },
  { name: 'lab/index.html', path: '/cs-lab/index.html', extra: false },
  ...LAB_LINKED.map((file) => ({ name: `lab/${file}`, path: `/cs-lab/${file}`, extra: false })),
  ...LAB_EXTRA.map((file) => ({ name: `lab/${file}`, path: `/cs-lab/${file}`, extra: true })),
];

const LANGS = [
  { code: 'en', ui: 'en', content: 'en', locale: 'en-US' },
  { code: 'ru', ui: 'ru', content: 'ru', locale: 'ru-RU' },
];

const WIDTHS = [
  { name: '390', width: 390, height: 844, mobile: true },
  { name: '1280', width: 1280, height: 800, mobile: false },
];

const COMBOS = LANGS.flatMap((lang) => WIDTHS.map((width) => ({ lang, width })));

// ---------------------------------------------------------------------------------------------------------------
// Text patterns and UI strings of the CS simulations (src/sims/cs/*.tsx; labels are inline t('EN', 'RU') pairs)
// ---------------------------------------------------------------------------------------------------------------

// "null" is left out on purpose: it is a regular CS term (linked lists, SQL NULL). "error", "table", "link", "case"
// and "body" are left out of the raw-key list too: they are ordinary identifiers in Python and SQL examples.
const SERVICE = [
  { label: 'placeholder note "still being written"', re: /still being written/gi },
  { label: 'placeholder note "Own notes"', re: /own notes/gi },
  { label: 'placeholder note "Own wording"', re: /own wording/gi },
  { label: 'placeholder note "check against the course textbook"', re: /check against the course textbook/gi },
  { label: 'placeholder note "chapter and page to be added"', re: /chapter and page to be added/gi },
  { label: 'TODO/TBD/FIXME/XXX marker', re: /\b(?:TODO|TBD|FIXME|XXX)\b/g },
  { label: 'lorem / placeholder / Заглушка', re: /\blorem\b|\bplaceholder\b|Заглушк/gi },
  { label: '"???"', re: /\?\?\?/g },
  { label: '"undefined"', re: /\bundefined\b/g },
  { label: '"[object"', re: /\[object /g },
  { label: 'raw i18n braces', re: /\{\{|\}\}/g },
  { label: '"NaN"', re: /\bNaN\b/g },
  {
    label: 'raw i18n key',
    re: /\b(?:contentLang|caseMap|reveal|callout|planner|exams|common|notFound|subject|paper|formula|sim|question|term|source|settings|today|plan)\.[a-z][A-Za-z]+\b/g,
  },
  {
    label: 'component error boundary shown',
    re: /could not be loaded|could not be displayed|cannot be embedded|не удалось загрузить|не удалось отобразить/gi,
  },
  {
    label: 'missing component reference',
    re: /works only inside a topic page|работает только на странице темы|\(no id given\)|\(id не указан\)|not found:|не найден[аоы]?:/gi,
  },
  // The missing-body notices from src/i18n/*/topic.json (body.missing), not any sentence that happens to say "not ready".
  { label: 'topic body not ready', re: /(?:This topic|version of this topic) is not ready yet|версия этой темы пока не готова|Эта тема пока не готова/gi },
  { label: 'still loading after settle', re: /Loading the (?:topic|simulation|map)|Загружаю (?:тему|симуляцию|карту)/gi },
];
const NOT_FOUND = /Topic not found|Subject not found|Page not found|Тема не найдена|Предмет не найден|Страница не найдена/i;
const STUB = /This page is being built\.|Эта страница в работе\./;

// Labels of the simulations, as the student sees them. Keys are used by the tests below.
const S = {
  en: {
    run: 'Run', resetCode: 'Reset code', check: 'Check', tests: 'Tests', couldNot: 'Python could not run',
    showAnswer: 'Show answer', answerShown: 'The answer is shown.', startAgain: 'Start again', program: 'Program',
    recNext: 'Next', startOver: 'Start over',
    apply: 'Apply', sortNext: 'Next', bsNext: 'Next', notAscending: 'not in ascending order', foundAt: 'Found 7 at index 3',
    insert: 'Insert', search: 'Search', reset: 'Reset', traversal: 'Traversal',
    insertHead: 'Insert at head', insertTail: 'Insert at tail', del: 'Delete node k', traverse: 'Traverse',
    nextNode: 'Next node', stop: 'Stop', resetList: 'Reset list',
    stackMode: 'Stack (LIFO)', queueMode: 'Queue (FIFO)', push: 'Push', pop: 'Pop', enqueue: 'Enqueue',
    pushed: (v) => `Pushed ${v} on top.`, popped: (v) => `Popped ${v} from the top.`,
    nAbove: 'n is above 50', loadExample: 'Load example', clearAll: 'Clear all', addClass: 'Add class',
    headValue: (v) => `with value ${v}`,
    className: 'Class name', noClasses: 'No classes yet.',
  },
  ru: {
    run: 'Запустить', resetCode: 'Исходный код', check: 'Проверить', tests: 'Тесты', couldNot: 'Python не запустился',
    showAnswer: 'Показать ответ', answerShown: 'Ответ показан.', startAgain: 'Начать заново', program: 'Программа',
    recNext: 'Дальше', startOver: 'Сначала',
    apply: 'Применить', sortNext: 'Вперёд', bsNext: 'Вперёд', notAscending: 'не идут по возрастанию', foundAt: 'Нашли 7 на индексе 3',
    insert: 'Вставить', search: 'Найти', reset: 'Сбросить', traversal: 'Обход',
    insertHead: 'Вставить в начало', insertTail: 'Вставить в конец', del: 'Удалить узел k', traverse: 'Обход',
    nextNode: 'Следующий узел', stop: 'Остановить', resetList: 'Сбросить список',
    stackMode: 'Стек (LIFO)', queueMode: 'Очередь (FIFO)', push: 'Положить (push)', pop: 'Извлечь (pop)', enqueue: 'В конец (enqueue)',
    pushed: (v) => `${v} положено сверху.`, popped: (v) => `Снято ${v} с вершины.`,
    nAbove: 'n больше 50', loadExample: 'Загрузить пример', clearAll: 'Очистить всё', addClass: 'Добавить класс',
    headValue: (v) => `со значением ${v}`,
    className: 'Имя класса', noClasses: 'Классов пока нет.',
  },
};

// ---------------------------------------------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------------------------------------------

// Practice page labels (src/i18n/*/practice.json): the results heading and the three rating words.
const PRACTICE_LABELS = {
  en: { heading: 'Your results', right: 'Right', partial: 'Partly right', wrong: 'Wrong' },
  ru: { heading: 'Твои результаты', right: 'Верно', partial: 'Частично', wrong: 'Неверно' },
};

function problem(rec, type, message, extra = {}) {
  rec.problems.push({ type, message, ...extra });
}

function must(rec, ok, message, type = 'sim', extra = {}) {
  if (!ok) problem(rec, type, message, extra);
  return ok;
}

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
  // Not TeX: currency and price marks ("$99", "100$", "$$$$$"), unless a TeX mark (^ _ { } < > =) follows a "$" before a
  // digit before the next "$", as in "$2P(t_{35} > 2.16)$". Also a Python "\n" before a capital letter in a string.
  const dollars = [...text.matchAll(/(?<![A-Za-z\d$])\$(?![$\d])|(?<![A-Za-z\d$])\$(?=\d[^$\n]{0,80}?[\^_{}<>=])/g)];
  const commands = [...text.matchAll(/\\[a-zA-Z]{2,}/g)].filter((m) => !/^\\n[A-Z]/.test(m[0]));
  const first = dollars[0] ?? commands[0];
  return { dollars: dollars.length, commands: commands.length, sample: first ? snippet(text, first.index) : '' };
}

// Runs in the page. Visible text, layout width, offending boxes and the counts the checks need.
function pageState(prefix) {
  const vw = document.documentElement.clientWidth;
  const sw = document.documentElement.scrollWidth;
  const offenders = [];
  for (const el of document.querySelectorAll('body *')) {
    const r = el.getBoundingClientRect();
    if (r.width === 0 || r.height === 0) continue;
    if (r.right <= vw + 1 && r.left >= -1) continue;
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
  const text = document.body.innerText;
  const main = document.querySelector('main') || document.body;
  const mainText = main.innerText;
  const cyrMatch = mainText.match(/[Ѐ-ӿ]/);
  const h1 = document.querySelector('h1');
  const topicHrefs = new Set(
    Array.from(document.querySelectorAll('a[href]'))
      .map((a) => a.getAttribute('href'))
      .filter((href) => href && href.includes(prefix)),
  );
  return {
    scrollWidth: sw,
    clientWidth: vw,
    hscroll: sw > vw + 1,
    offenders,
    text,
    cyr: (mainText.match(/[Ѐ-ӿ]/g) || []).length,
    lat: (mainText.match(/[A-Za-z]/g) || []).length,
    cyrSample: cyrMatch ? mainText.slice(Math.max(0, cyrMatch.index - 30), cyrMatch.index + 40).replace(/\s+/g, ' ') : '',
    katex: document.querySelectorAll('.katex').length,
    katexError: document.querySelectorAll('.katex-error').length,
    h1: h1 ? h1.innerText.trim() : null,
    questions: document.querySelectorAll('.foma-question').length,
    sims: document.querySelectorAll('.foma-sim').length,
    articles: Array.from(document.querySelectorAll('article[lang]')).map((a) => a.getAttribute('lang')),
    topicLinks: topicHrefs.size,
  };
}

function attachListeners(page, rec) {
  page.on('console', (msg) => {
    if (msg.type() !== 'error' && msg.type() !== 'warning') return;
    const url = msg.location()?.url ?? '';
    const text = msg.text();
    // Only http(s) resources from outside the preview and the CDN count as blocked; they are listed, not reported.
    if (/^https?:\/\//.test(url) && !isOwn(url)) {
      rec.external.add(hostOf(url));
      return;
    }
    const type = /pyodide/i.test(`${url} ${text}`) ? 'pyodide' : 'console';
    problem(rec, type, `${msg.type()}: ${text}`.slice(0, 300), { url: url.slice(0, 160) });
  });
  page.on('pageerror', (error) => problem(rec, 'pageerror', String(error?.message ?? error).slice(0, 300)));
  page.on('requestfailed', (request) => {
    const url = request.url();
    const reason = request.failure()?.errorText ?? '';
    if (isCdn(url)) {
      NET.cdnFailed += 1;
      problem(rec, /pyodide/.test(url) ? 'pyodide' : 'request', `failed: ${url} (${reason})`);
    } else if (isLocal(url)) {
      problem(rec, 'request', `failed: ${url} (${reason})`);
    } else {
      rec.external.add(hostOf(url));
    }
  });
  page.on('response', (response) => {
    const url = response.url();
    if (isCdn(url)) {
      if (response.status() >= 400) {
        NET.cdnFailed += 1;
        problem(rec, /pyodide/.test(url) ? 'pyodide' : 'request', `HTTP ${response.status()}: ${url}`);
      } else {
        NET.cdnOk += 1;
      }
      return;
    }
    if (response.status() >= 400 && isLocal(url)) problem(rec, 'request', `HTTP ${response.status()}: ${url}`);
  });
}

async function shotOnce(page, rec, type) {
  if (rec.shots[type]) return;
  const name = [type, rec.route, rec.lang, rec.width].join('__').replace(/[^\w.-]+/g, '_');
  const file = path.join(SHOTS, `${name}.png`);
  try {
    await page.screenshot({ path: file, fullPage: true });
    rec.shots[type] = file;
  } catch {
    // A screenshot is evidence only; a failed capture must not hide the finding.
  }
}

async function settle(page, route) {
  await page.waitForLoadState('networkidle', { timeout: 8000 }).catch(() => {});
  await page.waitForSelector('h1', { timeout: 8000 }).catch(() => {});
  if (route.kind === 'topic') await page.waitForSelector('article', { timeout: 8000 }).catch(() => {});
  await page.waitForFunction(() => !/Loading the |Загружаю /.test(document.body.innerText), null, { timeout: 8000 }).catch(() => {});
  await page.waitForTimeout(300);
}

async function snapshot(page, rec, phase, route, combo) {
  const s = await page.evaluate(pageState, SUBJECT_TOPIC_PREFIX);
  rec.info[phase] = {
    h1: s.h1,
    questions: s.questions,
    sims: s.sims,
    articles: s.articles,
    katex: s.katex,
    scroll: [s.scrollWidth, s.clientWidth],
    topicLinks: s.topicLinks,
    cyr: s.cyr,
    lat: s.lat,
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
  if (s.h1 === null) problem(rec, 'route', 'no h1 on the page', { phase });
  if (s.h1 !== null && NOT_FOUND.test(s.h1)) problem(rec, 'route', `page shows "${s.h1}"`, { phase });
  if (STUB.test(s.text)) problem(rec, 'stub', 'page is a stub ("This page is being built.")', { phase });
  if (route.name === 'subject' && s.topicLinks !== TOPIC_IDS.length) {
    problem(rec, 'route', `subject page links ${s.topicLinks} topics, expected ${TOPIC_IDS.length}`, { phase });
  }
  if (route.kind === 'topic' && s.articles.length === 0) problem(rec, 'route', 'topic page renders no body article', { phase });
  if (s.katexError > 0) problem(rec, 'katex', `${s.katexError} .katex-error element(s)`, { phase });
  const math = rawMathHits(s.text);
  if (math.dollars + math.commands > 0) {
    problem(rec, 'katex', `${math.dollars} "$" and ${math.commands} backslash command(s) in visible text, e.g. "${math.sample}"`, { phase });
  }
  if (combo.lang.code === 'en' && s.cyr > 0) {
    problem(rec, 'lang', `${s.cyr} Cyrillic letter(s) on an English page, e.g. "${s.cyrSample}"`, { phase });
    await shotOnce(page, rec, 'lang');
  }
  if (combo.lang.code === 'ru' && route.kind === 'topic' && s.cyr + s.lat > 0) {
    const share = s.cyr / (s.cyr + s.lat);
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
    problem(rec, 'axe', `${v.impact} ${v.id} (${v.help}): ${v.nodes} node(s), e.g. ${v.targets.join(' | ')}`, { phase: 'initial' });
    await shotOnce(page, rec, 'axe');
  }
}

async function revealQuestions(page, rec) {
  const cards = page.locator('.foma-question');
  const total = await cards.count();
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

// ---------------------------------------------------------------------------------------------------------------
// Simulation tests. Each one acts like a student and checks that the DOM answers. `sim` is the .foma-sim frame.
// ---------------------------------------------------------------------------------------------------------------

// Python runner: edit the code, run it in the browser (Pyodide), read the output and the error panel, reset, check.
async function testPython(page, sim, rec, lang) {
  const L = S[lang];
  const code = sim.locator('textarea').first();
  await code.waitFor({ state: 'visible', timeout: 15000 });
  const starter = await code.inputValue();
  must(rec, starter.trim().length > 0, 'python: the code box starts empty', 'sim', { phase: 'python' });
  await code.fill('print("ux check", 2 + 3)');
  const started = Date.now();
  await sim.getByRole('button', { name: L.run, exact: true }).click();
  const printed = sim.locator('pre').filter({ hasText: 'ux check 5' }).first();
  const ran = await printed.waitFor({ state: 'visible', timeout: 150000 }).then(() => true, () => false);
  rec.info.pythonFirstRunMs = Date.now() - started;
  if (!ran) {
    const dead = L.couldNot.length > 0 && (await sim.innerText()).includes(L.couldNot);
    problem(
      rec,
      dead ? 'pyodide' : 'sim',
      dead ? 'Python did not start: Pyodide could not load in this run' : 'run: the printed line "ux check 5" did not appear within 150 s',
      { phase: 'python' },
    );
    await shotOnce(page, rec, 'sim');
    return;
  }
  await code.fill('print(1 / 0)');
  await sim.getByRole('button', { name: L.run, exact: true }).click();
  const failed = await sim.locator('pre').filter({ hasText: 'ZeroDivisionError' }).first().waitFor({ state: 'visible', timeout: 60000 }).then(() => true, () => false);
  must(rec, failed, 'python: a ZeroDivisionError does not appear in the error panel', 'sim', { phase: 'python' });
  await sim.getByRole('button', { name: L.resetCode, exact: true }).click();
  must(rec, (await code.inputValue()) === starter, '"Reset code" does not restore the starter code', 'sim', { phase: 'python' });
  await sim.getByRole('button', { name: L.check, exact: true }).click();
  const tests = sim.getByRole('list', { name: L.tests, exact: true });
  const listed = await tests.first().waitFor({ state: 'visible', timeout: 90000 }).then(() => true, () => false);
  must(rec, listed && (await tests.locator('li').count()) > 0, '"Check" shows no test rows', 'sim', { phase: 'python' });
  const tasks = sim.locator('button[aria-pressed]');
  if ((await tasks.count()) > 1) {
    await tasks.nth(1).click();
    must(rec, (await code.inputValue()) !== starter, 'python: choosing the second task does not change the code', 'sim', { phase: 'python' });
  }
}

// Trace table: pick a program, show the answer, start again.
async function testTrace(page, sim, rec, lang) {
  const L = S[lang];
  const programs = sim.getByRole('group', { name: L.program, exact: true }).getByRole('button');
  if ((await programs.count()) > 1) {
    await programs.nth(1).click();
    must(rec, (await programs.nth(1).getAttribute('aria-pressed')) === 'true', 'trace: choosing another program does not select it');
  }
  await sim.getByRole('button', { name: L.showAnswer, exact: true }).click();
  must(rec, (await sim.innerText()).includes(L.answerShown), 'trace: "Show answer" shows no answer message');
  await sim.getByRole('button', { name: L.startAgain, exact: true }).click();
  must(rec, !(await sim.innerText()).includes(L.answerShown), '"Start again" keeps the answer message');
}

// Recursion stack: step forward, step back to the start, change the function and the value of n.
async function testRecursion(page, sim, rec, lang) {
  const L = S[lang];
  const first = await sim.textContent();
  await sim.getByRole('button', { name: L.recNext, exact: true }).click();
  await sim.getByRole('button', { name: L.recNext, exact: true }).click();
  must(rec, (await sim.textContent()) !== first, '"Next" does not change the call stack');
  await sim.getByRole('button', { name: L.startOver, exact: true }).click();
  must(rec, (await sim.textContent()) === first, '"Start over" does not return to the first step');
  const kind = sim.locator('select').nth(0);
  const nSel = sim.locator('select').nth(1);
  await kind.selectOption({ index: 1 });
  must(rec, (await sim.textContent()) !== first, 'recursion: choosing the other function does not change the trace');
  // Choosing a function resets n to that function's start value, so pick a value of n different from the current one.
  const current = await nSel.inputValue();
  const values = await nSel.locator('option').evaluateAll((els) => els.map((el) => el.value));
  const other = values.find((v) => v !== current);
  if (other !== undefined) {
    const beforeN = await sim.textContent();
    await nSel.selectOption(other);
    must(rec, (await sim.textContent()) !== beforeN, 'recursion: a new value of n does not change the trace');
  }
}

// Sorting steps: pick an algorithm, enter a list, step to the end, then check that a bad list is marked invalid.
async function testSort(page, sim, rec, lang) {
  const L = S[lang];
  const algos = sim.locator('button[aria-pressed]');
  if ((await algos.count()) > 1) {
    await algos.nth(1).click();
    must(rec, (await algos.nth(1).getAttribute('aria-pressed')) === 'true', 'sort: choosing another algorithm does not select it');
  }
  const input = sim.locator('input').first();
  await input.fill('5, 2, 9, 1, 7');
  await sim.getByRole('button', { name: L.apply, exact: true }).click();
  const next = sim.getByRole('button', { name: L.sortNext, exact: true });
  const first = await sim.textContent();
  await next.click();
  await next.click();
  await next.click();
  must(rec, (await sim.textContent()) !== first, '"Next" does not change the picture of the sort');
  let steps = 3;
  while (steps < 120 && (await next.isEnabled())) {
    await next.click();
    steps += 1;
  }
  must(rec, !(await next.isEnabled()), `sort: "Next" is still enabled after ${steps} steps`);
  rec.info.sortSteps = steps;
  await input.fill('a, b');
  await sim.getByRole('button', { name: L.apply, exact: true }).click();
  must(rec, (await input.getAttribute('aria-invalid')) === 'true', 'sort: a list that is not numbers is not marked invalid');
}

// Binary search: enter a sorted list and a target, step to the end, then check the warning for an unsorted list.
async function testBinary(page, sim, rec, lang) {
  const L = S[lang];
  const array = sim.locator('input:not([type=number])').first();
  const target = sim.locator('input[type=number]').first();
  const apply = sim.getByRole('button', { name: L.apply, exact: true });
  await array.fill('1, 3, 5, 7, 9, 11, 13');
  await target.fill('7');
  await apply.click();
  const next = sim.getByRole('button', { name: L.bsNext, exact: true });
  let steps = 0;
  while (steps < 20 && (await next.isEnabled())) {
    await next.click();
    steps += 1;
  }
  rec.info.bsSteps = steps;
  must(rec, (await sim.innerText()).includes(L.foundAt), `binary search: stepping to the end does not report "${L.foundAt}"`);
  await array.fill('5, 2, 9');
  await apply.click();
  must(rec, (await sim.innerText()).includes(L.notAscending), 'binary search: an unsorted list shows no warning');
}

// Big-O: move the size slider with the keyboard from its minimum to its maximum; the picture must change.
async function testBigO(page, sim, rec, lang) {
  const L = S[lang];
  const range = sim.locator('input[type=range]').first();
  await range.focus();
  await page.keyboard.press('Home');
  const low = await sim.innerText();
  const lowValue = await range.inputValue();
  await page.keyboard.press('End');
  const high = await sim.innerText();
  const highValue = await range.inputValue();
  must(rec, lowValue !== highValue, `big-o: the size slider does not move (${lowValue} and ${highValue})`);
  must(rec, low !== high, 'big-o: moving the size slider does not change the text of the simulation');
  rec.info.bigONote = high.includes(L.nAbove);
}

// Binary search tree: insert three new values, search one, pick a traversal, reset.
async function testBst(page, sim, rec, lang) {
  const L = S[lang];
  const value = sim.locator('input[type=number]').first();
  const nodes = () => sim.locator('svg circle').count();
  const before = await nodes();
  for (const v of [17, 64, 92]) {
    await value.fill(String(v));
    await sim.getByRole('button', { name: L.insert, exact: true }).click();
  }
  const after = await nodes();
  must(rec, after - before === 3, `bst: three new values changed the node count from ${before} to ${after}, expected +3`);
  await value.fill('64');
  await sim.getByRole('button', { name: L.search, exact: true }).click();
  must(rec, /Found 64 after|Найдено 64/.test(await sim.innerText()), 'bst: searching for 64 does not report it as found');
  const traversal = sim.getByRole('group', { name: L.traversal, exact: true }).getByRole('button');
  const beforeTraversal = await sim.textContent();
  await traversal.first().click();
  must(rec, (await sim.textContent()) !== beforeTraversal, 'bst: choosing a traversal shows no result');
  await sim.getByRole('button', { name: L.reset, exact: true }).click();
  must(rec, (await nodes()) === before, `bst: "Reset" leaves ${await nodes()} nodes, expected ${before}`);
}

// Linked list: reset, insert at head and tail, traverse, delete node 1. The picture label lists node names (N1, N2, ...),
// so the test counts nodes; the values show in the step text.
async function testLinkedList(page, sim, rec, lang) {
  const L = S[lang];
  const value = sim.locator('input[type=number]').first();
  const picture = sim.locator('svg[role="img"]').first();
  const nodes = async () => ((await picture.getAttribute('aria-label')) ?? '').match(/N\d+/g)?.length ?? 0;
  await sim.getByRole('button', { name: L.resetList, exact: true }).click();
  const start = await nodes();
  await value.fill('5');
  await sim.getByRole('button', { name: L.insertHead, exact: true }).click();
  must(rec, (await sim.innerText()).includes(L.headValue(5)), 'linked list: inserting at head shows no step with the value 5');
  await value.fill('9');
  await sim.getByRole('button', { name: L.insertTail, exact: true }).click();
  const grown = await nodes();
  must(rec, grown === start + 2, `linked list: two inserts changed the node count from ${start} to ${grown}, expected +2`);
  await sim.getByRole('button', { name: L.traverse, exact: true }).click();
  await sim.getByRole('button', { name: L.nextNode, exact: true }).click();
  await sim.getByRole('button', { name: L.stop, exact: true }).click();
  await sim.locator('select').first().selectOption('1');
  await sim.getByRole('button', { name: L.del, exact: true }).click();
  must(rec, (await nodes()) === grown - 1, `linked list: deleting node 1 changed the node count from ${grown} to ${await nodes()}`);
}

// Stack and queue: push two values, pop one, switch to the queue, enqueue, reset.
async function testStackQueue(page, sim, rec, lang) {
  const L = S[lang];
  const value = sim.locator('input').first();
  const startText = await sim.innerText();
  await value.fill('7');
  await sim.getByRole('button', { name: L.push, exact: true }).click();
  must(rec, (await sim.innerText()).includes(L.pushed(7)), `stack: pushing 7 shows no "${L.pushed(7)}" line`);
  await value.fill('9');
  await sim.getByRole('button', { name: L.push, exact: true }).click();
  await sim.getByRole('button', { name: L.pop, exact: true }).click();
  must(rec, (await sim.innerText()).includes(L.popped(9)), `stack: popping shows no "${L.popped(9)}" line`);
  await sim.getByRole('button', { name: L.queueMode, exact: true }).click();
  must(rec, (await sim.getByRole('button', { name: L.queueMode, exact: true }).getAttribute('aria-pressed')) === 'true', 'queue: the mode button does not select the queue');
  await value.fill('4');
  await sim.getByRole('button', { name: L.enqueue, exact: true }).click();
  must(rec, (await sim.innerText()).includes('4'), 'queue: enqueuing 4 shows nothing');
  // Reset restores the example data of the simulation (src/sims/cs/stack-queue.tsx: setData(INITIAL)), not an empty box.
  await sim.getByRole('button', { name: L.stackMode, exact: true }).click();
  await sim.getByRole('button', { name: L.reset, exact: true }).click();
  must(rec, (await sim.innerText()) === startText, '"Reset" does not return to the starting state (example data, empty log)');
}

// UML builder: clear, add a class by name, load the example.
async function testUml(page, sim, rec, lang) {
  const L = S[lang];
  await sim.getByRole('button', { name: L.clearAll, exact: true }).click();
  must(rec, (await sim.innerText()).includes(L.noClasses), '"Clear all" does not empty the diagram');
  await sim.getByLabel(L.className, { exact: true }).fill('Animal');
  await sim.getByRole('button', { name: L.addClass, exact: true }).click();
  const added = await sim.innerText();
  must(rec, added.includes('Animal') && !added.includes(L.noClasses), 'uml: adding a class does not show it in the diagram');
  await sim.getByRole('button', { name: L.loadExample, exact: true }).click();
  must(rec, !(await sim.innerText()).includes(L.noClasses), '"Load example" leaves the diagram empty');
}

const SIM_TESTS = {
  'cs.python-runner': testPython,
  'cs.trace-table': testTrace,
  'cs.recursion-stack': testRecursion,
  'cs.sort-steps': testSort,
  'cs.binary-search': testBinary,
  'cs.big-o': testBigO,
  'cs.bst': testBst,
  'cs.linked-list': testLinkedList,
  'cs.stack-queue': testStackQueue,
  'cs.uml-builder': testUml,
};

async function runSim(ctx, id, index) {
  const { page, rec, combo } = ctx;
  const test = SIM_TESTS[id];
  if (!test) {
    problem(rec, 'sim', `no UX test written for simulation ${id}`);
    return;
  }
  try {
    const sim = page.locator('.foma-sim').nth(index);
    await sim.waitFor({ state: 'visible', timeout: 15000 });
    await sim.locator('button, input, textarea, select').first().waitFor({ state: 'visible', timeout: 20000 });
    rec.info.sims = [...(rec.info.sims ?? []), { id, index, label: (await sim.getAttribute('aria-label')) ?? '' }];
    await test(page, sim, rec, combo.lang.code);
    rec.info.simsTested = [...(rec.info.simsTested ?? []), id];
  } catch (error) {
    problem(rec, 'sim', `${id} (frame ${index + 1}): ${String(error.message).split('\n')[0]}`, { phase: 'sim' });
    await shotOnce(page, rec, 'sim');
  }
}

async function topicChecks(ctx) {
  const { page, rec, route, combo } = ctx;
  const file = path.join(TOPIC_DIR.get(route.topic), `${route.topic}.${combo.lang.code}.mdx`);
  const source = readFileSync(file, 'utf8');
  const questionTags = (source.match(/<Question\b/g) ?? []).length;
  const simIds = [...source.matchAll(/<Sim\s+id="([^"]+)"/g)].map((match) => match[1]);
  const initial = rec.info.initial;
  must(rec, initial.questions === questionTags, `${initial.questions} rendered for ${questionTags} <Question> tag(s)`, 'question', {
    phase: 'initial',
  });
  must(rec, initial.sims === simIds.length, `${initial.sims} simulation frame(s) rendered for ${simIds.length} <Sim> tag(s)`, 'sim', {
    phase: 'initial',
  });
  await revealQuestions(page, rec);
  await snapshot(page, rec, 'after-reveal', route, combo);
  for (let i = 0; i < simIds.length; i += 1) await runSim(ctx, simIds[i], i);
  await snapshot(page, rec, 'after-sims', route, combo);
  await contentToggle(page, rec);
}

// ---------------------------------------------------------------------------------------------------------------
// Practice bank, simulations index and lab pages
// ---------------------------------------------------------------------------------------------------------------

// Practice bank (route practice): every filter option that carries a count must show that many questions, the
// timed sets must apply without errors, every markscheme must open, and three ratings must be counted in the results.
async function practiceChecks(page, rec, combo) {
  const L = PRACTICE_LABELS[combo.lang.code];
  const visibleItems = () =>
    page.locator('main article[lang]').evaluateAll((els) => els.filter((el) => el.getBoundingClientRect().height > 0).length);
  const selects = page.locator('main select');
  const selectCount = await selects.count();
  const allCount = await visibleItems();
  // The list re-renders after a filter or timed set is cleared: wait until the full bank is back.
  const settleToAll = async () => {
    for (let k = 0; k < 30 && (await visibleItems()) !== allCount; k += 1) await page.waitForTimeout(100);
  };
  let filtersChecked = 0;
  for (let s = 1; s < selectCount; s += 1) {
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

  const timedSets = await selects.nth(0).evaluate((el) => el.options.length);
  for (let o = 1; o < timedSets; o += 1) {
    await selects.nth(0).selectOption({ index: o });
    await page.waitForTimeout(100);
  }
  await selects.nth(0).selectOption({ index: 0 });
  await settleToAll();
  must(rec, (await visibleItems()) === allCount, `after clearing the timed set the bank shows ${await visibleItems()} questions, expected ${allCount}`, 'question', {
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
  rec.info.practiceItems = total;
  rec.info.practiceOpened = opened;

  const items = page.locator('main article[lang]');
  try {
    await items.nth(0).getByRole('button', { name: L.right, exact: true }).click({ timeout: 5000 });
    await items.nth(1).getByRole('button', { name: L.partial, exact: true }).click({ timeout: 5000 });
    await items.nth(2).getByRole('button', { name: L.wrong, exact: true }).click({ timeout: 5000 });
    await page.waitForTimeout(200);
    const counts = await page.evaluate((labels) => {
      const text = (document.querySelector('main') || document.body).innerText.replace(/\s+/g, ' ');
      const at = text.indexOf(labels.heading);
      const block = at >= 0 ? text.slice(at, at + 220) : '';
      const grab = (word) => {
        const m = block.match(new RegExp(`${word}\\s+(\\d+)`));
        return m ? Number(m[1]) : null;
      };
      return { right: grab(labels.right), partial: grab(labels.partial), wrong: grab(labels.wrong) };
    }, L);
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

// Simulations index: every CS topic it links to must open and show a simulation.
async function simsLinkChecks(page, rec) {
  const hrefs = await page
    .locator(`a[href*="${SUBJECT_TOPIC_PREFIX}"]`)
    .evaluateAll((els) => [...new Set(els.map((el) => el.getAttribute('href')))]);
  rec.info.simLinks = hrefs.length;
  if (hrefs.length === 0) problem(rec, 'sim', 'the simulations page links to no cs topic', { phase: 'sims-index' });
  for (const href of hrefs) {
    try {
      await page.goto(`${BASE_URL}/${href}`, { waitUntil: 'load', timeout: 20000 });
      await page.waitForSelector('.foma-sim', { timeout: 10000 });
      await page.waitForTimeout(200);
    } catch (error) {
      problem(rec, 'sim', `link ${href} does not open a simulation: ${String(error.message).split('\n')[0]}`, { phase: 'sims-index' });
    }
    await page.goto(`${BASE_URL}/#/sims`, { waitUntil: 'load', timeout: 20000 });
    await page.waitForSelector(`a[href*="${SUBJECT_TOPIC_PREFIX}"]`, { timeout: 10000 }).catch(() => {});
  }
}

// Lab page: every visible button is clicked (no error, no navigation away), every internal link must answer.
async function labButtons(page, rec) {
  const home = page.url().split('#')[0];
  // The lab switches language and theme by attributes and text, not by replacing the markup.
  const fingerprint = () =>
    page.evaluate(() =>
      JSON.stringify([document.documentElement.getAttribute('data-lang'), document.documentElement.className, document.body.innerText]),
    );
  const buttons = page.locator('button:visible');
  const total = await buttons.count();
  const seen = [];
  for (let i = 0; i < Math.min(total, 8); i += 1) {
    const button = buttons.nth(i);
    const label = ((await button.innerText().catch(() => '')) || (await button.getAttribute('aria-label')) || '')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 40);
    try {
      const before = await fingerprint();
      await button.click({ timeout: 3000 });
      await page.waitForTimeout(200);
      const after = await fingerprint();
      seen.push({ label, changed: before !== after });
      if (page.url().split('#')[0] !== home) {
        problem(rec, 'lab', `button "${label}" navigated away to ${page.url()}`);
        await page.goBack().catch(() => {});
      }
    } catch (error) {
      seen.push({ label, changed: null });
      problem(rec, 'lab', `button "${label}" could not be clicked: ${String(error.message).split('\n')[0]}`);
    }
  }
  rec.info.buttonCount = total;
  rec.info.buttons = seen;
}

async function labLinks(page, rec, context) {
  const hrefs = await page.evaluate(() => Array.from(document.querySelectorAll('a[href]')).map((a) => a.getAttribute('href')));
  const unique = [...new Set(hrefs)];
  rec.info.links = unique.length;
  rec.info.externalLinks = [];
  for (const href of unique) {
    if (/^(mailto:|tel:|javascript:|data:)/i.test(href)) continue;
    if (href.startsWith('#')) {
      const id = decodeURIComponent(href.slice(1));
      const found = await page.evaluate((x) => Boolean(document.getElementById(x) || document.querySelector(`[name="${x}"]`)), id);
      if (id && !found) problem(rec, 'lab', `in-page link ${href} has no target`);
      continue;
    }
    let url;
    try {
      url = new URL(href, page.url());
    } catch {
      problem(rec, 'lab', `link ${href} is not a valid URL`);
      continue;
    }
    if (!isOwn(url.href)) {
      rec.info.externalLinks.push(url.host);
      continue;
    }
    const response = await context.request.get(url.href, { failOnStatusCode: false }).catch(() => null);
    if (!response) problem(rec, 'lab', `link ${href} could not be requested`);
    else if (response.status() >= 400) problem(rec, 'lab', `link ${href} answers HTTP ${response.status()}`);
  }
}

// ---------------------------------------------------------------------------------------------------------------
// Matrix runners
// ---------------------------------------------------------------------------------------------------------------

async function runRoute(context, cur, route, combo) {
  const rec = {
    route: route.name,
    hash: route.hash,
    lang: combo.lang.code,
    width: combo.width.name,
    problems: [],
    external: new Set(),
    shots: {},
    info: {},
  };
  if (Date.now() > DEADLINE) return { ...rec, external: [], skipped: 'time budget' };
  cur.rec = rec;
  let page;
  try {
    page = await context.newPage();
    attachListeners(page, rec);
    await page.goto(`${BASE_URL}/#${route.hash}`, { waitUntil: 'load', timeout: 20000 });
    await settle(page, route);
    await snapshot(page, rec, 'initial', route, combo);
    if (route.axe) await axeCheck(page, rec);
    if (route.kind === 'topic') await topicChecks({ context, page, rec, route, combo });
    if (route.name === 'practice') {
      await practiceChecks(page, rec, combo);
      if (rec.problems.some((p) => p.phase === 'practice')) await shotOnce(page, rec, 'practice');
      await snapshot(page, rec, 'after-practice', route, combo);
    }
    if (route.name === 'sims-page') await simsLinkChecks(page, rec);
  } catch (error) {
    problem(rec, 'harness', String(error?.message ?? error).split('\n')[0].slice(0, 300));
  } finally {
    cur.rec = null;
    await page?.close().catch(() => {});
  }
  return { ...rec, external: [...rec.external] };
}

async function runLab(context, cur, lab, width) {
  const rec = {
    route: lab.name,
    hash: lab.path,
    lang: 'static',
    width: width.name,
    problems: [],
    external: new Set(),
    shots: {},
    info: { extra: lab.extra },
  };
  if (Date.now() > DEADLINE) return { ...rec, external: [], skipped: 'time budget' };
  cur.rec = rec;
  let page;
  try {
    page = await context.newPage();
    attachListeners(page, rec);
    await page.goto(`${BASE_URL}${lab.path}`, { waitUntil: 'load', timeout: 20000 });
    await page.waitForLoadState('networkidle', { timeout: 8000 }).catch(() => {});
    await page.waitForTimeout(300);
    await snapshot(page, rec, 'initial', { name: lab.name, kind: 'lab' }, { lang: { code: 'static' } });
    await labButtons(page, rec);
    await labLinks(page, rec, context);
  } catch (error) {
    problem(rec, 'harness', String(error?.message ?? error).split('\n')[0].slice(0, 300));
  } finally {
    cur.rec = null;
    await page?.close().catch(() => {});
  }
  return { ...rec, external: [...rec.external] };
}

// Every request that is neither the local preview nor the CDN is aborted and its host is counted.
function routeExternal(cur) {
  return (handle) => {
    const url = handle.request().url();
    if (isOwn(url)) return handle.continue();
    const host = hostOf(url);
    NET.blocked.set(host, (NET.blocked.get(host) ?? 0) + 1);
    if (cur.rec) cur.rec.external.add(host);
    return handle.abort();
  };
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
  // The language choice is written before the app starts, so every page of this run opens in the same language.
  await context.addInitScript(
    ({ ui, content }) => {
      try {
        window.localStorage.setItem('foma-lang', ui);
        window.localStorage.setItem('foma-content-lang', content);
      } catch {
        // Storage blocked: the app then falls back to the browser language.
      }
    },
    { ui: combo.lang.ui, content: combo.lang.content },
  );
  await context.route('**/*', routeExternal(cur));
  try {
    for (const route of ROUTES) {
      if (ONLY && !ONLY.has(route.name)) continue;
      runs.push(await runRoute(context, cur, route, combo));
    }
  } finally {
    await context.close();
  }
}

// The lab keeps its language and theme in localStorage, so every page gets a fresh context: each page opens in its own
// default language, and one page cannot change the next one.
async function runLabChain(browser, runs) {
  for (const width of WIDTHS) {
    for (const lab of LABS) {
      if (ONLY && !ONLY.has(lab.name)) continue;
      const context = await browser.newContext({
        viewport: { width: width.width, height: width.height },
        isMobile: width.mobile,
        hasTouch: width.mobile,
        deviceScaleFactor: 1,
        locale: 'en-US',
        timezoneId: 'Asia/Dubai',
        colorScheme: 'light',
        reducedMotion: 'reduce',
      });
      const cur = { rec: null };
      await context.route('**/*', routeExternal(cur));
      try {
        runs.push(await runLab(context, cur, lab, width));
      } finally {
        await context.close();
      }
    }
  }
}

// Groups repeated findings: numbers and quoted samples vary from page to page, the pattern does not.
function normaliseMessage(p) {
  if (p.type === 'text') return p.message.split(': "')[0];
  if (p.type === 'lang') return p.message.replace(/, e\.g\. .*$/, '').replace(/\d+/g, 'N');
  return p.message.replace(/\d+/g, 'N');
}

function summarise(runs) {
  const groups = new Map();
  const shots = [];
  const external = new Set();
  for (const run of runs) {
    for (const host of run.external ?? []) external.add(host);
    for (const file of Object.values(run.shots ?? {})) shots.push(file);
    for (const p of run.problems ?? []) {
      const message = normaliseMessage(p);
      const key = `${p.type} | ${message}`;
      const group = groups.get(key) ?? { type: p.type, message, example: p.message, count: 0, where: [] };
      group.count += 1;
      if (group.where.length < 8) group.where.push(`${run.route} ${run.lang} ${run.width}${p.phase ? ` (${p.phase})` : ''}`);
      groups.set(key, group);
    }
  }
  const counts = {};
  for (const group of groups.values()) counts[group.type] = (counts[group.type] ?? 0) + group.count;
  const appRuns = runs.filter((run) => !run.route.startsWith('lab/'));
  const labRuns = runs.filter((run) => run.route.startsWith('lab/'));
  return {
    base: BASE_URL,
    topics: TOPIC_IDS.length,
    appRoutes: ROUTES.length,
    appCombos: COMBOS.length,
    labPages: LABS.length,
    labWidths: WIDTHS.length,
    runs: runs.length,
    appRuns: appRuns.length,
    labRuns: labRuns.length,
    rendered: runs.filter((run) => run.info?.initial?.h1).length,
    skipped: runs.filter((run) => run.skipped).map((run) => `${run.route} ${run.lang} ${run.width}`),
    runsWithProblems: runs.filter((run) => (run.problems ?? []).length > 0).length,
    problemCounts: counts,
    katexElementsSeen: appRuns.reduce((sum, run) => sum + (run.info?.initial?.katex ?? 0), 0),
    axe: AXE ? 'run on subject, a1-1-hardware, b2-4-algorithms at 390 and 1280, EN and RU' : 'not run (axe-core not found)',
    externalHostsBlocked: [...external].sort(),
    blockedRequestCounts: Object.fromEntries([...NET.blocked.entries()].sort()),
    cdnResponsesOk: NET.cdnOk,
    cdnResponsesFailed: NET.cdnFailed,
    screenshots: shots,
    problems: [...groups.values()].sort((a, b) => a.type.localeCompare(b.type) || b.count - a.count),
    seconds: Math.round((Date.now() - STARTED) / 1000),
  };
}

async function main() {
  const preview = await ensurePreview();
  const browser = await chromium.launch();
  const runs = [];
  try {
    await Promise.all([...COMBOS.map((combo) => runCombo(browser, combo, runs)), runLabChain(browser, runs)]);
  } finally {
    await browser.close();
    preview?.kill();
  }
  const order = new Map([...ROUTES, ...LABS].map((route, index) => [route.name, index]));
  const langOrder = { en: 0, ru: 1, static: 2 };
  runs.sort(
    (a, b) =>
      (order.get(a.route) ?? 0) - (order.get(b.route) ?? 0) ||
      (langOrder[a.lang] ?? 3) - (langOrder[b.lang] ?? 3) ||
      a.width.localeCompare(b.width),
  );
  const summary = summarise(runs);
  const file = path.join(OUT, 'ux-cs.json');
  writeFileSync(file, JSON.stringify({ summary, runs }, null, 2));
  console.log(
    JSON.stringify({
      file,
      runs: summary.runs,
      runsWithProblems: summary.runsWithProblems,
      problemCounts: summary.problemCounts,
      externalHostsBlocked: summary.externalHostsBlocked,
      seconds: summary.seconds,
    }),
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
