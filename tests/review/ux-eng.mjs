// S9 review, round 2: UX pass over the English subject (eng).
//
// Headless Chromium (Playwright) against the built preview. Every subject route is opened in EN and RU at 390 px
// and 1280 px. Per page: console and page errors, failed local requests, horizontal scroll, service text, KaTeX,
// the language of the text, <Question> reveal, the three English simulations and the content-language switch.
// On the subject home and two topics: axe-core, serious and critical violations only. External requests are
// blocked on purpose; the harness talks only to the local preview.
//
// Usage:  node tests/review/ux-eng.mjs
// Env:    BASE_URL      preview origin, 127.0.0.1 only (default http://127.0.0.1:4173); vite preview is started if
//                       nothing answers there. If another server answers, it must serve this worktree's build
//         UX_OUT        folder for ux-eng.json and screenshots (default: a folder under the OS temp directory)
//         AXE_PATH      path to axe.min.js (default: axe-core from node_modules, when it resolves)
//         UX_BUDGET_MS  wall-clock budget; routes not reached in time are reported as skipped (default 14 min)
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
// Only 127.0.0.1: on this Mac "localhost" resolves to [::1], where a stale preview of another build can answer.
if (BASE.hostname !== '127.0.0.1') {
  throw new Error(`BASE_URL must be http://127.0.0.1:<port>, got ${BASE.hostname}`);
}
const OUT = process.env.UX_OUT ?? path.join(tmpdir(), 'foma-ux-eng');
const SHOTS = path.join(OUT, 'shots');
const STARTED = Date.now();
const DEADLINE = STARTED + Number(process.env.UX_BUDGET_MS ?? 14 * 60 * 1000);
mkdirSync(SHOTS, { recursive: true });

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

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

// The HTML that a server on the preview origin serves at "/", or null when nothing answers there.
async function servedHtml(url) {
  try {
    const response = await fetch(url);
    return response.ok ? await response.text() : null;
  } catch {
    return null;
  }
}

// A server already on the port must serve this worktree's build: its entry script must match dist/index.html
// (the same test as diag-shots.mjs). A stale preview of another build fails here, with a clear message.
const entryOf = (html) => html.match(/<script type="module"[^>]*src="([^"]+)"/)?.[1] ?? null;

async function ensurePreview() {
  const indexFile = path.join(ROOT, 'dist', 'index.html');
  if (!existsSync(indexFile)) throw new Error('no dist/index.html: run npm run build first');
  const local = entryOf(readFileSync(indexFile, 'utf8'));
  const served = await servedHtml(`${BASE_URL}/`);
  if (served !== null) {
    if (!local || entryOf(served) !== local) {
      throw new Error(`${BASE_URL} does not serve this worktree's build (dist entry ${local}, served ${entryOf(served)}): use another port`);
    }
    return null;
  }
  const vite = path.join(ROOT, 'node_modules', 'vite', 'bin', 'vite.js');
  const child = spawn(process.execPath, [vite, 'preview', '--host', BASE.hostname, '--port', BASE.port || '4173', '--strictPort'], {
    cwd: ROOT,
    stdio: 'ignore',
  });
  for (let i = 0; i < 60; i += 1) {
    if ((await servedHtml(`${BASE_URL}/`)) !== null) return child;
    await sleep(500);
  }
  child.kill();
  throw new Error(`vite preview did not answer on ${BASE_URL}`);
}

// ---------------------------------------------------------------------------------------------------------------
// Routes and matrix
// ---------------------------------------------------------------------------------------------------------------

const TOPIC_IDS = readdirSync(path.join(ROOT, 'content', 'eng', 'topics'))
  .filter((file) => file.endsWith('.meta.ts'))
  .map((file) => file.slice(0, -'.meta.ts'.length))
  .sort();

const AXE_TOPICS = new Set(['p1-method', 'form-poetry']);

const ROUTES = [
  { name: 'subject', hash: '/s/eng', kind: 'subject', axe: true },
  { name: 'terms', hash: '/s/eng/terms', kind: 'page' },
  { name: 'practice', hash: '/s/eng/practice', kind: 'page' },
  { name: 'formulas', hash: '/s/eng/formulas', kind: 'page' },
  { name: 'paper-P1', hash: '/s/eng/paper/P1', kind: 'page' },
  { name: 'paper-P2', hash: '/s/eng/paper/P2', kind: 'page' },
  ...TOPIC_IDS.map((id) => ({ name: `t/${id}`, hash: `/s/eng/t/${id}`, kind: 'topic', topic: id, axe: AXE_TOPICS.has(id) })),
  { name: 'sims-page', hash: '/sims', kind: 'page' },
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
// Text patterns and UI strings of the three English simulations (from src/sims/eng/*.tsx)
// ---------------------------------------------------------------------------------------------------------------

const SERVICE = [
  { label: 'placeholder note "Own wording"', re: /own wording/gi },
  { label: 'placeholder note "check against the course textbook"', re: /check against the course textbook/gi },
  { label: 'placeholder note "chapter and page to be added"', re: /chapter and page to be added/gi },
  { label: 'TODO/TBD/FIXME/XXX marker', re: /\b(?:TODO|TBD|FIXME|XXX)\b/g },
  { label: 'lorem / placeholder / Заглушка', re: /\blorem\b|\bplaceholder\b|Заглушк/gi },
  { label: '"???"', re: /\?\?\?/g },
  { label: '"undefined"', re: /\bundefined\b/g },
  { label: '"[object"', re: /\[object /g },
  { label: 'raw i18n braces', re: /\{\{|\}\}/g },
  { label: '"NaN" or "null"', re: /\b(?:NaN|null)\b/g },
  {
    label: 'raw i18n key',
    re: /\b(?:contentLang|question|sim|warn|error|page|body|callout|term|formula|case|caseMap|reveal|source|link|table|nav|subject|exams|paper|plan|today|settings|planner|common|pages|notFound)\.[a-z][A-Za-z]+\b/g,
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

const SIM_LABELS = {
  en: {
    correct: 'Correct.',
    wrong: 'Not quite.',
    found: (n) => `Found ${n} of 4`,
    reveal: 'Show all answers',
    reset: 'Start again',
    metaphor: 'metaphor',
    ready: 'Ready.',
    notReady: 'Not yet.',
    words: (n) => `${n} words`,
    start: 'Start',
    pause: 'Pause',
    next: 'Next stage',
    resetStage: 'Reset this stage',
    stage: 'Stage',
    done: 'Time for this stage is up',
  },
  ru: {
    correct: 'Верно.',
    wrong: 'Не совсем.',
    found: (n) => `Найдено ${n} из 4`,
    reveal: 'Показать все ответы',
    reset: 'Начать заново',
    metaphor: 'метафора',
    ready: 'Готово.',
    notReady: 'Пока нет.',
    words: (n) => `${n} слов`,
    start: 'Старт',
    pause: 'Пауза',
    next: 'Следующий этап',
    resetStage: 'Сбросить этап',
    stage: 'Этап',
    done: 'Время этапа вышло',
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
  const dollars = [...text.matchAll(/\$/g)];
  const commands = [...text.matchAll(/\\[a-zA-Z]{2,}/g)];
  const first = dollars[0] ?? commands[0];
  return { dollars: dollars.length, commands: commands.length, sample: first ? snippet(text, first.index) : '' };
}

// Runs in the page. Visible text, layout width, offending boxes and the counts the checks need.
function pageState() {
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
      .filter((href) => href && href.includes('/s/eng/t/')),
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
    // Only http(s) resources from another origin count as external; file-like sourceURLs (injected axe) are local.
    const external = /^https?:\/\//.test(url) && !isLocal(url);
    if (external || text.includes('net::ERR_FAILED')) {
      // Blocked by the harness (external request), not an app error.
      if (external) rec.external.add(hostOf(url));
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
async function shotOnce(page, rec, type) {
  if (shotted.has(type)) return;
  shotted.add(type);
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
  const s = await page.evaluate(pageState);
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

// Simulation tests. Each one acts like a student and checks that the DOM answers.

async function testAnnotate(page, sim, rec, lang) {
  const L = SIM_LABELS[lang];
  await sim.getByRole('button', { name: 'wrung them dry', exact: true }).click();
  await sim.getByRole('button', { name: L.metaphor, exact: true }).click();
  let text = await sim.innerText();
  must(rec, text.includes(L.correct) && text.includes(L.found(1)), 'annotate: a correct choice does not show the verdict and "1 found"');
  await sim.getByRole('button', { name: 'Was like the stillness in the air', exact: true }).click();
  await sim.getByRole('button', { name: L.metaphor, exact: true }).click();
  text = await sim.innerText();
  must(rec, text.includes(L.wrong), 'annotate: a wrong choice (simile given as metaphor) does not show "not quite"');
  await sim.getByRole('button', { name: L.reveal, exact: true }).click();
  must(rec, (await sim.locator('ul li').count()) === 4, 'annotate: "Show all answers" does not list the four techniques');
  await sim.getByRole('button', { name: L.reset, exact: true }).click();
  text = await sim.innerText();
  must(rec, text.includes(L.found(0)), 'annotate: "Start again" does not reset the counter');
}

async function testThesis(page, sim, rec, lang) {
  const L = SIM_LABELS[lang];
  const crosses = async () => ((await sim.innerText()).match(/✗/g) ?? []).length;
  await sim.locator('select').selectOption('1');
  must(rec, (await sim.locator('select').inputValue()) === '1', 'thesis: the prompt select does not change');
  await sim.locator('input').nth(0).fill('Hamlet');
  await sim.locator('input').nth(1).fill('Hamlet');
  const sameWork = await crosses();
  must(rec, sameWork >= 1, 'thesis: two identical works still pass the "works" check');
  await sim.locator('input').nth(1).fill('Macbeth');
  const fixed = await crosses();
  must(rec, fixed === sameWork - 1, `thesis: naming a second work changes failed checks from ${sameWork} to ${fixed}, expected one fewer`);
  await sim.locator('textarea').fill(
    'While Hamlet and Macbeth both leave home, the setting invites the reader to doubt where each character belongs.',
  );
  let text = await sim.innerText();
  must(rec, text.includes(L.words(18)), `thesis: word count is not "${L.words(18)}"`);
  must(rec, (await crosses()) === 0, 'thesis: a valid thesis still fails a check');
  must(rec, text.includes(L.ready), 'thesis: a valid thesis does not show the ready message');
  await sim.locator('textarea').fill('Hamlet is about a prince.');
  text = await sim.innerText();
  must(rec, text.includes(L.notReady), 'thesis: a plot summary is not marked as not ready');
}

async function testTimer(page, sim, rec, lang) {
  const L = SIM_LABELS[lang];
  const clock = sim.getByRole('timer');
  const read = async () => (await clock.innerText()).trim();
  must(rec, (await read()) === '10:00', `timer: starts at ${await read()}, expected 10:00`, 'sim');
  await sim.getByRole('button', { name: L.start, exact: true }).click();
  await page.waitForTimeout(2200);
  must(rec, (await read()) !== '10:00', 'timer: does not count down after Start');
  await sim.getByRole('button', { name: L.pause, exact: true }).click();
  const paused = await read();
  await page.waitForTimeout(1500);
  must(rec, (await read()) === paused, 'timer: keeps running after Pause');
  await sim.getByRole('button', { name: new RegExp(`^${L.stage} 2:`) }).click();
  // The sitting follows the access setting (105 without extra time, 131 with it): writing gets the rest after
  // 10 to plan, 10 to check and 5 spare (src/sims/eng/p2-timer.tsx). Take the total the sim shows, in EN or RU.
  const total = Number(((await sim.innerText()).match(/(?:Total|Всего):?\s*(\d+)/) ?? [])[1] ?? 105);
  const writing = `${String(total - 25).padStart(2, '0')}:00`;
  must(rec, (await read()) === writing, `timer: stage 2 shows ${await read()}, expected ${writing} for a ${total}-minute sitting`);
  await sim.getByRole('button', { name: L.next, exact: true }).click();
  must(rec, (await read()) === '10:00', `timer: "Next stage" shows ${await read()}, expected 10:00 for stage 3`);
  must(
    rec,
    await sim.getByRole('button', { name: L.next, exact: true }).isDisabled(),
    'timer: "Next stage" stays enabled on the last stage',
  );
  await sim.getByRole('button', { name: L.resetStage, exact: true }).click();
  must(rec, (await read()) === '10:00', 'timer: "Reset this stage" does not restore 10:00');
}

// Runs the stage to its end on a page with a fake clock: 10 minutes of stage 1 must show 00:00 and the message.
async function timerFinish(context, rec, route, combo) {
  const L = SIM_LABELS[combo.lang.code];
  const page = await context.newPage();
  attachListeners(page, rec);
  try {
    await page.clock.install();
    await page.goto(`${BASE_URL}/#${route.hash}`, { waitUntil: 'load', timeout: 20000 });
    await settle(page, route);
    const sim = page.locator('.foma-sim').first();
    await sim.getByRole('button', { name: L.start, exact: true }).click();
    await page.clock.runFor(10 * 60 * 1000 + 5000);
    await page.waitForTimeout(300);
    const shown = (await sim.getByRole('timer').innerText()).trim();
    must(rec, shown === '00:00', `timer finish: shows ${shown} after 10 minutes, expected 00:00`, 'sim', { phase: 'timer-finish' });
    must(
      rec,
      (await sim.innerText()).includes(L.done),
      'timer finish: no "time is up" message after 10 minutes',
      'sim',
      { phase: 'timer-finish' },
    );
    must(
      rec,
      await sim.getByRole('button', { name: L.start, exact: true }).isDisabled(),
      'timer finish: Start stays enabled after the stage ends',
      'sim',
      { phase: 'timer-finish' },
    );
  } catch (error) {
    problem(rec, 'sim', `timer finish check failed: ${String(error.message).split('\n')[0]}`, { phase: 'timer-finish' });
  } finally {
    await page.close().catch(() => {});
  }
}

const SIM_TESTS = {
  'eng.annotate': testAnnotate,
  'eng.thesis': testThesis,
  'eng.p2-timer': testTimer,
};

async function runSim(ctx, id) {
  const { context, page, rec, route, combo } = ctx;
  const test = SIM_TESTS[id];
  if (!test) {
    problem(rec, 'sim', `no UX test written for simulation ${id}`);
    return;
  }
  try {
    const sim = page.locator('.foma-sim').first();
    await sim.locator('h3').first().waitFor({ timeout: 10000 });
    await test(page, sim, rec, combo.lang.code);
    if (id === 'eng.p2-timer') await timerFinish(context, rec, route, combo);
    rec.info.simsTested = [...(rec.info.simsTested ?? []), id];
  } catch (error) {
    problem(rec, 'sim', `${id}: ${String(error.message).split('\n')[0]}`, { phase: 'sim' });
    await shotOnce(page, rec, 'sim');
  }
}

async function topicChecks(ctx) {
  const { page, rec, route, combo } = ctx;
  const source = readFileSync(path.join(ROOT, 'content', 'eng', 'topics', `${route.topic}.${combo.lang.code}.mdx`), 'utf8');
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
  for (const id of simIds) await runSim(ctx, id);
  await contentToggle(page, rec);
}

// ---------------------------------------------------------------------------------------------------------------
// Matrix runner
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

// Simulations index: every topic it links to must open and show its simulation.
async function simsLinkChecks(page, rec) {
  const hrefs = await page
    .locator('a[href*="/s/eng/t/"]')
    .evaluateAll((els) => [...new Set(els.map((el) => el.getAttribute('href')))]);
  rec.info.simLinks = hrefs.length;
  for (const href of hrefs) {
    try {
      await page.goto(`${BASE_URL}/${href}`, { waitUntil: 'load', timeout: 20000 });
      await page.waitForSelector('.foma-sim h3', { timeout: 10000 });
      await page.waitForTimeout(200);
    } catch (error) {
      problem(rec, 'sim', `link ${href} does not open a simulation: ${String(error.message).split('\n')[0]}`, { phase: 'sims-index' });
    }
    await page.goto(`${BASE_URL}/#/sims`, { waitUntil: 'load', timeout: 20000 });
    await page.waitForSelector('a[href*="/s/eng/t/"]', { timeout: 10000 }).catch(() => {});
  }
}

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
  // Only the local preview is reachable; anything else is aborted and listed in the report.
  await context.route('**/*', (handle) => {
    const url = handle.request().url();
    if (isLocal(url)) return handle.continue();
    if (cur.rec) cur.rec.external.add(hostOf(url));
    return handle.abort();
  });
  try {
    for (const route of ROUTES) runs.push(await runRoute(context, cur, route, combo));
  } finally {
    await context.close();
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
  const shots = {};
  const external = new Set();
  for (const run of runs) {
    for (const host of run.external ?? []) external.add(host);
    for (const [type, file] of Object.entries(run.shots ?? {})) shots[type] = file;
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
  return {
    base: BASE_URL,
    routes: ROUTES.length,
    combos: COMBOS.length,
    runs: runs.length,
    rendered: runs.filter((run) => run.info?.initial?.h1).length,
    skipped: runs.filter((run) => run.skipped).map((run) => `${run.route} ${run.lang} ${run.width}`),
    runsWithProblems: runs.filter((run) => (run.problems ?? []).length > 0).length,
    problemCounts: counts,
    katexElementsSeen: runs.reduce((sum, run) => sum + (run.info?.initial?.katex ?? 0), 0),
    axe: AXE ? 'run on subject home, p1-method, form-poetry at 390 and 1280, EN and RU' : 'not run (axe-core not found)',
    externalHostsBlocked: [...external].sort(),
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
    await Promise.all(COMBOS.map((combo) => runCombo(browser, combo, runs)));
  } finally {
    await browser.close();
    preview?.kill();
  }
  const order = new Map(ROUTES.map((route, index) => [route.name, index]));
  runs.sort(
    (a, b) =>
      (order.get(a.route) ?? 0) - (order.get(b.route) ?? 0) ||
      a.lang.localeCompare(b.lang) ||
      a.width.localeCompare(b.width),
  );
  const summary = summarise(runs);
  writeFileSync(path.join(OUT, 'ux-eng.json'), JSON.stringify({ summary, runs }, null, 2));
  console.log(JSON.stringify(summary, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
