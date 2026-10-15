// S9 economics layout and behaviour probe (R02): every step of every econ simulation, in EN and RU at 1280 and 390 px.
//
// Per step it reads the step counter, measures every <text> inside the picture against the picture box, against the other
// texts and against the point markers (clipped, overlapping, covering a point), and records the smallest font on screen.
// Then it presses Next up to the last step, checks the counter after each press, checks that Next is disabled there and
// that Start again returns to step 1. Console errors and page errors are recorded too.
// Output: OUT/probe.json (every step) and a summary on stdout. The check flags text; a person decides from the picture.
//
// Usage:  BASE_URL=http://127.0.0.1:4315 OUT=/tmp/foma-diag-econ/probe node tests/review/diag-econ-probe.mjs econ
// Env:    BASE_URL  local preview of THIS worktree's build, on 127.0.0.1 only (same start as diag-shots.mjs)
//         OUT       output folder (default /tmp/foma-diag-econ/probe)
//         TOPICS    optional comma list of topic ids (smoke runs)
//         WIDTHS    comma list of viewport widths in px, default 1280,390
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

const OUT = process.env.OUT ?? '/tmp/foma-diag-econ/probe';
const SUBJECTS = process.argv.slice(2);
if (SUBJECTS.length === 0) {
  console.error('usage: node tests/review/diag-econ-probe.mjs <subject> [<subject> ...]');
  process.exit(2);
}
const list = (value, fallback) => (value ? value.split(',').map((item) => item.trim()).filter(Boolean) : fallback);
const WIDTHS = list(process.env.WIDTHS, ['1280', '390']).map(Number);
const ONLY = process.env.TOPICS ? new Set(list(process.env.TOPICS, [])) : null;
const LANGS = ['en', 'ru'];
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

// Runs in the page on one picture (.foma-sim): every text and point marker, and what is wrong among them.
// Several pictures can share one simulation (perfect-competition-lr has a firm panel and a market panel): each SVG is measured
// on its own, and the problems are merged.
function measure(el) {
  const svgs = [...el.querySelectorAll('svg')];
  if (svgs.length === 0) return { picture: false };
  const overlap = (a, b) => Math.min(a.right, b.right) - Math.max(a.left, b.left) > 1 && Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top) > 1;
  const result = { picture: true, svgWidth: 0, texts: 0, clipped: [], overlaps: [], covers: [], minFontPx: null };
  for (const svg of svgs) {
    const box = svg.getBoundingClientRect();
    if (box.width === 0) continue;
    const vb = svg.viewBox?.baseVal;
    const scale = vb && vb.width ? box.width / vb.width : 1;
    const texts = [...svg.querySelectorAll('text')]
      .filter((node) => (node.textContent ?? '').trim() !== '')
      .map((node) => ({ text: node.textContent.trim(), rect: node.getBoundingClientRect(), size: Number(node.getAttribute('font-size')) || 16 }))
      .filter((item) => item.rect.width > 0 && item.rect.height > 0);
    const dots = [...svg.querySelectorAll('circle')].map((node) => node.getBoundingClientRect()).filter((rect) => rect.width > 0);
    result.svgWidth = Math.max(result.svgWidth, Math.round(box.width));
    result.texts += texts.length;
    result.clipped.push(...texts
      .filter(({ rect }) => rect.left < box.left - 1 || rect.right > box.right + 1 || rect.top < box.top - 1 || rect.bottom > box.bottom + 1)
      .map(({ text }) => text));
    for (let i = 0; i < texts.length; i += 1) {
      for (let j = i + 1; j < texts.length; j += 1) {
        if (overlap(texts[i].rect, texts[j].rect)) result.overlaps.push([texts[i].text, texts[j].text]);
      }
    }
    result.covers.push(...texts.filter((item) => dots.some((dot) => overlap(item.rect, dot))).map((item) => item.text));
    if (texts.length) {
      const smallest = Math.round(Math.min(...texts.map((item) => item.size * scale)) * 10) / 10;
      result.minFontPx = result.minFontPx === null ? smallest : Math.min(result.minFontPx, smallest);
    }
  }
  result.covers = [...new Set(result.covers)];
  return result;
}

const rows = [];
const problems = [];
const nav = [];
const errors = [];
let current = '';
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
      const context = await browser.newContext({ viewport: { width, height: 1000 } });
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
      page.on('pageerror', (error) => errors.push({ topic: current, lang, width, error: String(error.message).slice(0, 200) }));
      page.on('console', (msg) => {
        if (msg.type() === 'error') errors.push({ topic: current, lang, width, error: msg.text().slice(0, 200) });
      });
      // Requests the probe blocks (everything but the local preview) are reported with their address.
      page.on('requestfailed', (request) => errors.push({ topic: current, lang, width, error: `request failed: ${request.url().slice(0, 160)}` }));
      for (const job of jobs) {
        current = job.topic;
        await page.goto(`${BASE_URL}/#/s/${job.subject}/t/${job.topic}`, { waitUntil: 'domcontentloaded' });
        await page.waitForSelector('article', { timeout: 15000 }).catch(() => {});
        await page.waitForTimeout(500);
        const frames = page.locator('.foma-sim');
        const count = await frames.count();
        if (count < job.sims.length) nav.push({ topic: job.topic, lang, width, why: `only ${count} frame(s) for ${job.sims.length} sims` });
        for (let i = 0; i < job.sims.length && i < count; i += 1) {
          const sim = job.sims[i];
          const frame = frames.nth(i);
          const counter = frame.locator('p[aria-live]');
          const hasCounter = (await counter.count()) > 0;
          try {
            const total = hasCounter ? Number((await counter.innerText()).match(NAV[lang].counter)?.[2] ?? 1) : 1;
            for (let step = 1; step <= total; step += 1) {
              const measured = await frame.evaluate(measure);
              const row = { topic: job.topic, sim, lang, width, step, total, ...measured };
              rows.push(row);
              if (measured.clipped?.length || measured.overlaps?.length || measured.covers?.length) problems.push(row);
              if (step < total) {
                await frame.getByRole('button', { name: NAV[lang].next, exact: true }).click();
                await page.waitForTimeout(150);
                const shown = Number((await counter.innerText()).match(NAV[lang].counter)?.[1]);
                if (shown !== step + 1) nav.push({ topic: job.topic, sim, lang, width, why: `after Next the counter shows ${shown}, expected ${step + 1}` });
              }
            }
            if (hasCounter) {
              const nextDisabled = await frame.getByRole('button', { name: NAV[lang].next, exact: true }).isDisabled();
              if (!nextDisabled) nav.push({ topic: job.topic, sim, lang, width, why: 'Next is enabled on the last step' });
              await frame.getByRole('button', { name: NAV[lang].restart, exact: true }).click();
              await page.waitForTimeout(150);
              const back = Number((await counter.innerText()).match(NAV[lang].counter)?.[1]);
              if (back !== 1) nav.push({ topic: job.topic, sim, lang, width, why: `Start again shows step ${back}, expected 1` });
            }
          } catch (error) {
            nav.push({ topic: job.topic, sim, lang, width, why: `probe error: ${String(error?.message ?? error).slice(0, 160)}` });
          }
        }
      }
      await context.close();
    }
  }
} finally {
  await browser.close();
}

const result = { base: BASE_URL, widths: WIDTHS, topics: jobs.length, steps: rows.length, problems, nav, errors, rows };
writeFileSync(path.join(OUT, 'probe.json'), `${JSON.stringify(result, null, 2)}\n`);
for (const row of problems.slice(0, 80)) {
  console.log(`${row.topic} ${row.sim} ${row.lang}/${row.width} step ${row.step}: clipped ${JSON.stringify(row.clipped)} overlaps ${JSON.stringify(row.overlaps)} covers ${JSON.stringify(row.covers)}`);
}
for (const item of nav.slice(0, 40)) console.log(`NAV ${item.topic} ${item.sim ?? ''} ${item.lang}/${item.width}: ${item.why}`);
for (const item of errors.slice(0, 20)) console.log(`ERROR ${item.topic} ${item.lang}/${item.width}: ${item.error}`);
console.log(`probe: ${jobs.length} topic(s), ${rows.length} step(s), ${problems.length} with clipped, overlapping or covering text, ${nav.length} navigation problem(s), ${errors.length} console error(s) -> ${OUT}/probe.json`);
