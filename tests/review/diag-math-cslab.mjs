// S9 diagram review (R02): CS lab pages (public/cs-lab/*.html) hold hand-made SVG schemes that diag-shots.mjs
// does not open. Every visible <svg> of every page is captured as its own PNG, at 1280 and 390 px.
// index.json lists each picture with its nearest heading, and flags pages that overflow horizontally.
// External requests are aborted: the harness talks only to the local preview.
//
// Usage:  BASE_URL=http://127.0.0.1:4314 OUT=/tmp/foma-diag-math/cslab node tests/review/diag-math-cslab.mjs [page ...]
// Env:    BASE_URL  local preview of THIS worktree's build, on 127.0.0.1 only; start it first (see diag-shots.mjs)
//         OUT       output folder (default /tmp/foma-diag-math/cslab)
//         WIDTHS    comma list of viewport widths in px, default 1280,390
//         SCALE     device scale factor, default 1
//         MIN       smallest svg side in px that is captured, default 60 (smaller ones are icons, listed as skipped)
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const BASE_URL = (process.env.BASE_URL ?? 'http://127.0.0.1:4314').replace(/\/+$/, '');
const BASE = new URL(BASE_URL);
// Only 127.0.0.1: on this Mac "localhost" resolves to [::1], where a stale preview of another build can answer.
if (BASE.hostname !== '127.0.0.1') {
  throw new Error(`BASE_URL must be http://127.0.0.1:<port>, got ${BASE.hostname}`);
}
const SCALE = Number(process.env.SCALE ?? 1);
const OUT = process.env.OUT ?? '/tmp/foma-diag-math/cslab';
const WIDTHS = (process.env.WIDTHS ?? '1280,390').split(',').map((item) => Number(item.trim()));
const MIN = Number(process.env.MIN ?? 60);

const LAB_SRC = path.join(ROOT, 'public', 'cs-lab');
const LAB_DIST = path.join(ROOT, 'dist', 'cs-lab');
if (!existsSync(LAB_DIST)) throw new Error('no dist/cs-lab: run npm run build first');
const labPages = readdirSync(LAB_SRC).filter((file) => file.endsWith('.html') && readFileSync(path.join(LAB_SRC, file), 'utf8').includes('<svg'));
const PAGES = process.argv.length > 2
  ? process.argv.slice(2).map((name) => (name.endsWith('.html') ? name : `${name}.html`))
  : labPages;

// The preview must serve this worktree's build: a lab page must be byte-identical to dist/cs-lab/<file>.
const probe = PAGES[0];
const served = await fetch(`${BASE_URL}/cs-lab/${probe}`).then((response) => response.text()).catch((error) => {
  throw new Error(`nothing answers on ${BASE_URL} (${error?.message ?? error}): start the preview first`);
});
if (served !== readFileSync(path.join(LAB_DIST, probe), 'utf8')) {
  throw new Error(`${BASE_URL} does not serve this worktree's build for cs-lab/${probe}: use your own port and rebuild`);
}

mkdirSync(OUT, { recursive: true });
const index = { base: BASE_URL, pages: PAGES, started: new Date().toISOString(), shots: [], skipped: [], overflow: [] };

// Lists every <svg> of the page in document order, with its size, visibility and nearest preceding heading.
function describeSvgs(min) {
  const heads = [...document.querySelectorAll('h1,h2,h3,h4,figcaption,caption,summary')];
  const nearest = (el) => {
    let last = '';
    for (const head of heads) {
      if (head.compareDocumentPosition(el) & Node.DOCUMENT_POSITION_FOLLOWING) last = head.innerText.trim();
      else break;
    }
    return last.replace(/\s+/g, ' ').slice(0, 120);
  };
  return [...document.querySelectorAll('svg')].map((el, n) => {
    const rect = el.getBoundingClientRect();
    const visible = rect.width > 0 && rect.height > 0;
    return {
      n,
      id: el.id || '',
      title: nearest(el),
      w: Math.round(rect.width),
      h: Math.round(rect.height),
      visible,
      captured: visible && Math.min(rect.width, rect.height) >= min,
      clippedRight: visible && rect.right > window.innerWidth + 1,
    };
  });
}

const browser = await chromium.launch();
try {
  for (const width of WIDTHS) {
    const context = await browser.newContext({ viewport: { width, height: 1000 }, deviceScaleFactor: SCALE });
    await context.route('**/*', (route) => {
      const url = route.request().url();
      if (/^(data|blob|about):/.test(url) || new URL(url).origin === BASE.origin) return route.continue();
      return route.abort();
    });
    const page = await context.newPage();
    for (const file of PAGES) {
      await page.goto(`${BASE_URL}/cs-lab/${file}`, { waitUntil: 'load' });
      await page.waitForTimeout(800);
      const svgs = await page.evaluate(describeSvgs, MIN);
      const overflowX = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
      if (overflowX) index.overflow.push({ page: file, width });
      const name = file.replace(/\.html$/, '');
      for (const svg of svgs) {
        const common = { page: file, n: svg.n, id: svg.id, title: svg.title, w: svg.w, h: svg.h, width, clippedRight: svg.clippedRight };
        if (!svg.captured) {
          index.skipped.push({ ...common, why: svg.visible ? `smaller than ${MIN}px (icon)` : 'hidden (not rendered)' });
          continue;
        }
        const locator = page.locator('svg').nth(svg.n);
        await locator.scrollIntoViewIfNeeded({ timeout: 10000 }).catch(() => {});
        await page.waitForTimeout(300);
        const fileOut = path.join(OUT, `cslab__${name}__${String(svg.n).padStart(2, '0')}__${width}.png`);
        try {
          await locator.screenshot({ path: fileOut, timeout: 15000 });
          index.shots.push({ ...common, file: fileOut });
        } catch (error) {
          index.skipped.push({ ...common, why: `screenshot failed: ${String(error?.message ?? error).slice(0, 160)}` });
        }
      }
    }
    await context.close();
  }
} finally {
  await browser.close();
}
index.finished = new Date().toISOString();
writeFileSync(path.join(OUT, 'index.json'), `${JSON.stringify(index, null, 2)}\n`);
console.log(`diag-math-cslab: ${PAGES.length} page(s), ${index.shots.length} picture(s), ${index.skipped.length} skipped, ${index.overflow.length} horizontal overflow(s) -> ${OUT}`);
