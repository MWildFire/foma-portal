// S9 economics step pictures (R02): every step of every econ simulation, one PNG per step.
//
// diag-shots.mjs captures each simulation only at its first step. This script walks the steps with Next and captures the
// picture (.foma-sim) at each one, so a reviewer sees the whole build-up as the student does.
// Output: OUT/index.json (subject, topic, id, lang, width, step, total, text, file) and one PNG per step.
//
// Usage:  BASE_URL=http://127.0.0.1:4315 OUT=/tmp/foma-diag-econ/steps node tests/review/diag-econ-steps.mjs econ
// Env:    BASE_URL  local preview of THIS worktree's build, on 127.0.0.1 only (same start as diag-shots.mjs)
//         OUT       output folder (default /tmp/foma-diag-econ/steps)
//         TOPICS    optional comma list of topic ids (smoke runs)
//         LANGS     comma list, default en,ru
//         WIDTHS    comma list of viewport widths in px, default 1280,390
//         SCALE     device scale factor, default 1
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const BASE_URL = (process.env.BASE_URL ?? 'http://127.0.0.1:4315').replace(/\/+$/, '');
const BASE = new URL(BASE_URL);
// Only 127.0.0.1: on this Mac "localhost" resolves to [::1], where a stale preview of another build can answer.
if (BASE.hostname !== '127.0.0.1') {
  throw new Error(`BASE_URL must be http://127.0.0.1:<port>, got ${BASE.hostname}`);
}

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

const OUT = process.env.OUT ?? '/tmp/foma-diag-econ/steps';
const SUBJECTS = process.argv.slice(2);
if (SUBJECTS.length === 0) {
  console.error('usage: node tests/review/diag-econ-steps.mjs <subject> [<subject> ...]');
  process.exit(2);
}
const list = (value, fallback) => (value ? value.split(',').map((item) => item.trim()).filter(Boolean) : fallback);
const LANGS = list(process.env.LANGS, ['en', 'ru']);
const WIDTHS = list(process.env.WIDTHS, ['1280', '390']).map(Number);
const ONLY = process.env.TOPICS ? new Set(list(process.env.TOPICS, [])) : null;
const SCALE = Number(process.env.SCALE ?? 1);
// The button names and the step counter of StepFrame (src/sims/econ/_lib/graph.tsx).
const NAV = {
  en: { next: 'Next', restart: 'Start again', counter: /Step (\d+) of (\d+)\./ },
  ru: { next: 'Далее', restart: 'Сначала', counter: /Шаг (\d+) из (\d+)\./ },
};

function walk(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

// Topics with a simulation: the <Sim id> tags of the English body, in page order (as in diag-shots.mjs).
const jobs = [];
for (const subject of SUBJECTS) {
  const dir = path.join(ROOT, 'content', subject);
  if (!existsSync(dir)) throw new Error(`no folder content/${subject}`);
  for (const meta of walk(dir).filter((file) => /\/topics\/[^/]+\.meta\.ts$/.test(file))) {
    const base = path.basename(meta, '.meta.ts');
    const id = readFileSync(meta, 'utf8').match(/\bid:\s*'([^']+)'/)?.[1] ?? base;
    const en = path.join(path.dirname(meta), `${base}.en.mdx`);
    if (!existsSync(en) || (ONLY && !ONLY.has(id))) continue;
    const sims = [...readFileSync(en, 'utf8').matchAll(/<Sim\s+id="([^"]+)"/g)].map((match) => match[1]);
    if (sims.length) jobs.push({ subject, topic: id, sims });
  }
}
jobs.sort((a, b) => `${a.subject}/${a.topic}`.localeCompare(`${b.subject}/${b.topic}`));
mkdirSync(OUT, { recursive: true });

const safe = (text) => text.replace(/[^\w.-]+/g, '_');
const index = { base: BASE_URL, subjects: SUBJECTS, started: new Date().toISOString(), shots: [], missing: [] };

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
        await page.waitForSelector('article', { timeout: 15000 }).catch(() => {});
        await page.waitForTimeout(500);
        const frames = page.locator('.foma-sim');
        const count = await frames.count();
        for (let i = 0; i < job.sims.length; i += 1) {
          const sim = job.sims[i];
          if (i >= count) {
            index.missing.push({ topic: job.topic, id: sim, lang, width, why: `only ${count} frame(s) on the page` });
            continue;
          }
          const frame = frames.nth(i);
          const counter = frame.locator('p[aria-live]');
          const hasCounter = (await counter.count()) > 0;
          try {
            const total = hasCounter ? Number((await counter.innerText()).match(NAV[lang].counter)?.[2] ?? 1) : 1;
            for (let step = 1; step <= total; step += 1) {
              if (step > 1) {
                await frame.getByRole('button', { name: NAV[lang].next, exact: true }).click();
                await page.waitForTimeout(250);
              }
              const text = hasCounter ? (await counter.innerText()).trim().slice(0, 400) : '';
              const file = path.join(OUT, `${safe([job.subject, job.topic, 'sim', sim, lang, width, `s${step}`].join('__'))}.png`);
              await frame.scrollIntoViewIfNeeded({ timeout: 10000 }).catch(() => {});
              await frame.screenshot({ path: file, timeout: 15000 });
              index.shots.push({ subject: job.subject, topic: job.topic, id: sim, lang, width, step, total, text, file });
            }
            if (hasCounter) {
              await frame.getByRole('button', { name: NAV[lang].restart, exact: true }).click();
              await page.waitForTimeout(150);
            }
          } catch (error) {
            index.missing.push({ topic: job.topic, id: sim, lang, width, why: `screenshot failed: ${String(error?.message ?? error).slice(0, 160)}` });
          }
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
console.log(`diag-econ-steps: ${jobs.length} topic(s), ${index.shots.length} step picture(s), ${index.missing.length} missing -> ${OUT}`);
if (index.missing.length) process.exitCode = 1;
