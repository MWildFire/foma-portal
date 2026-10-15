// S9 diagram review (R02): one picture per diagram, for a person to look at.
//
// Every topic of the given subjects that has a <Sim> or a <Figure> is opened on the local preview in EN and RU at
// 1280 and 390 px. Each simulation frame (.foma-sim) and each figure (figure.foma-figure) is captured as its own PNG.
// index.json lists every picture (subject, topic, kind, id, lang, width, file) and every diagram that did not render.
// External requests are aborted: the harness talks only to the local preview.
//
// Usage:  BASE_URL=http://127.0.0.1:4181 OUT=/tmp/foma-diag-geo node tests/review/diag-shots.mjs geo [math ...]
// Env:    BASE_URL  local preview of THIS worktree's build, on 127.0.0.1 only; start it first:
//                   npm run build && node node_modules/vite/bin/vite.js preview --host 127.0.0.1 --port <port> --strictPort
//         OUT       output folder (default /tmp/foma-diag)
//         TOPICS    optional comma list of topic ids (smoke runs)
//         LANGS     comma list, default en,ru
//         WIDTHS    comma list of viewport widths in px, default 1280,390
//         SCALE     device scale factor, default 1 (use 2 for a zoomed re-shot of a few topics)
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
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
const SCALE = Number(process.env.SCALE ?? 1);

// The preview must serve this worktree's build: the entry script of "/" must match dist/index.html.
const entryOf = (html) => html.match(/<script type="module"[^>]*src="([^"]+)"/)?.[1] ?? null;
const DIST_INDEX = path.join(ROOT, 'dist', 'index.html');
if (!existsSync(DIST_INDEX)) throw new Error('no dist/index.html: run npm run build first');
const LOCAL_ENTRY = entryOf(readFileSync(DIST_INDEX, 'utf8'));
const SERVED = await fetch(`${BASE_URL}/`).then((response) => response.text()).catch((error) => {
  throw new Error(`nothing answers on ${BASE_URL} (${error?.message ?? error}): start the preview first`);
});
if (!LOCAL_ENTRY || entryOf(SERVED) !== LOCAL_ENTRY) {
  throw new Error(`${BASE_URL} does not serve this worktree's build (dist entry ${LOCAL_ENTRY}, served ${entryOf(SERVED)}): use your own port and rebuild`);
}
const OUT = process.env.OUT ?? '/tmp/foma-diag';
const SUBJECTS = process.argv.slice(2);
if (SUBJECTS.length === 0) {
  console.error('usage: node tests/review/diag-shots.mjs <subject> [<subject> ...]');
  process.exit(2);
}
const list = (value, fallback) => (value ? value.split(',').map((item) => item.trim()).filter(Boolean) : fallback);
const LANGS = list(process.env.LANGS, ['en', 'ru']);
const WIDTHS = list(process.env.WIDTHS, ['1280', '390']).map(Number);
const ONLY = process.env.TOPICS ? new Set(list(process.env.TOPICS, [])) : null;
const LOADING = /Loading the |Загружаю|Загрузка/;

function walk(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

// Topics with a diagram: the <Sim id> and <Figure src> tags of the English body, in page order.
const jobs = [];
for (const subject of SUBJECTS) {
  const dir = path.join(ROOT, 'content', subject);
  if (!existsSync(dir)) throw new Error(`no folder content/${subject}`);
  for (const meta of walk(dir).filter((file) => /\/topics\/[^/]+\.meta\.ts$/.test(file))) {
    const base = path.basename(meta, '.meta.ts');
    const id = readFileSync(meta, 'utf8').match(/\bid:\s*'([^']+)'/)?.[1] ?? base;
    const en = path.join(path.dirname(meta), `${base}.en.mdx`);
    if (!existsSync(en) || (ONLY && !ONLY.has(id))) continue;
    const body = readFileSync(en, 'utf8');
    const sims = [...body.matchAll(/<Sim\s+id="([^"]+)"/g)].map((match) => match[1]);
    const figures = [...body.matchAll(/<Figure\s+src="([^"]+)"/g)].map((match) => path.basename(match[1], '.svg'));
    if (sims.length || figures.length) jobs.push({ subject, topic: id, sims, figures });
  }
}
jobs.sort((a, b) => `${a.subject}/${a.topic}`.localeCompare(`${b.subject}/${b.topic}`));
mkdirSync(OUT, { recursive: true });

const safe = (text) => text.replace(/[^\w.-]+/g, '_');
const index = { base: BASE_URL, subjects: SUBJECTS, started: new Date().toISOString(), shots: [], missing: [] };

async function settle(page) {
  await page.waitForSelector('article', { timeout: 15000 }).catch(() => {});
  await page
    .waitForFunction((re) => !new RegExp(re).test(document.body.innerText), LOADING.source, { timeout: 15000 })
    .catch(() => {});
  await page.waitForTimeout(400);
}

async function capture(page, locator, entry) {
  await locator.scrollIntoViewIfNeeded({ timeout: 10000 }).catch(() => {});
  // Lazy images load only when they are near the viewport; animations settle within a few hundred ms.
  await locator
    .evaluate((el) => Promise.all([...el.querySelectorAll('img')].map((img) => (img.complete ? null : new Promise((done) => {
      img.addEventListener('load', done, { once: true });
      img.addEventListener('error', done, { once: true });
    })))))
    .catch(() => {});
  await page.waitForTimeout(700);
  const file = path.join(OUT, `${safe([entry.subject, entry.topic, entry.kind, entry.id, entry.lang, entry.width].join('__'))}.png`);
  try {
    await locator.screenshot({ path: file, timeout: 15000 });
    index.shots.push({ ...entry, file });
  } catch (error) {
    index.missing.push({ ...entry, why: `screenshot failed: ${String(error?.message ?? error).slice(0, 160)}` });
  }
}

const browser = await chromium.launch();
try {
  // Another project's preview can answer on a shared port: stop unless this is the [redacted] portal.
  const probe = await browser.newPage();
  await probe.goto(`${BASE_URL}/`, { waitUntil: 'domcontentloaded' });
  const title = await probe.title();
  await probe.close();
  if (!/[redacted]/i.test(title)) throw new Error(`${BASE_URL} serves "${title}", not the [redacted] portal: use another port`);
  for (const width of WIDTHS) {
    for (const lang of LANGS) {
      const context = await browser.newContext({ viewport: { width, height: 1000 }, deviceScaleFactor: SCALE });
      await context.addInitScript((code) => {
        try {
          window.localStorage.setItem('foma-lang', code);
          window.localStorage.setItem('foma-content-lang', code);
        } catch {
          // Storage blocked: the app falls back to the browser language.
        }
      }, lang);
      await context.route('**/*', (route) => {
        const url = route.request().url();
        if (/^(data|blob|about):/.test(url) || new URL(url).origin === BASE.origin) return route.continue();
        return route.abort();
      });
      const page = await context.newPage();
      for (const job of jobs) {
        await page.goto(`${BASE_URL}/#/s/${job.subject}/t/${job.topic}`, { waitUntil: 'domcontentloaded' });
        await settle(page);
        // A subject chunk may still be mounting after the article shell appears on a busy machine.
        await page.waitForFunction(({ sims, figures }) =>
          document.querySelectorAll('.foma-sim').length >= sims &&
          document.querySelectorAll('figure.foma-figure').length >= figures,
          { sims: job.sims.length, figures: job.figures.length }, { timeout: 30000 }).catch(() => {});
        const common = { subject: job.subject, topic: job.topic, lang, width };
        const sims = page.locator('.foma-sim');
        const simCount = await sims.count();
        for (let i = 0; i < job.sims.length; i += 1) {
          if (i >= simCount) {
            index.missing.push({ ...common, kind: 'sim', id: job.sims[i], why: `only ${simCount} simulation frame(s) on the page` });
            continue;
          }
          await capture(page, sims.nth(i), { ...common, kind: 'sim', id: job.sims[i] });
        }
        const figures = page.locator('figure.foma-figure');
        const figureCount = await figures.count();
        for (let i = 0; i < job.figures.length; i += 1) {
          if (i >= figureCount) {
            index.missing.push({ ...common, kind: 'figure', id: job.figures[i], why: `only ${figureCount} figure(s) on the page` });
            continue;
          }
          await capture(page, figures.nth(i), { ...common, kind: 'figure', id: job.figures[i] });
        }
      }
      await context.close();
    }
  }
} finally {
  await browser.close();
}
index.finished = new Date().toISOString();
writeFileSync(path.join(OUT, 'index.json'), `${JSON.stringify(index, null, 2)}\n`);
console.log(`diag-shots: ${jobs.length} topic(s), ${index.shots.length} picture(s), ${index.missing.length} missing -> ${OUT}`);
if (index.missing.length) process.exitCode = 1;
