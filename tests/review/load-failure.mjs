// S0, round 3. A page whose files fail to load shows the load error with a retry, not a blank screen or a placeholder
// that never ends. Checked in headless Chromium against the built preview: a page chunk blocked (App boundary), and the
// planner's topic index blocked (usePlannerContent throws into the boundary). A normal load must show no error.
//
// Usage: node tests/review/load-failure.mjs          (after `npm run build`; starts `vite preview` on port 4186)
// Env:   BASE_URL  preview origin, when a preview is already running
import { spawn } from 'node:child_process';
import { setTimeout as sleep } from 'node:timers/promises';
import { chromium } from 'playwright';

const PORT = 4186;
const LOAD_ERROR = 'This page did not load';
const RETRY = 'Try again';

async function waitForServer(base) {
  for (let i = 0; i < 100; i += 1) {
    try {
      if ((await fetch(base)).ok) return;
    } catch {
      // not up yet
    }
    await sleep(200);
  }
  throw new Error(`no answer from ${base}`);
}

// One visit with the given files blocked. Returns what the student sees and any uncaught page error.
async function visit(browser, base, hash, blockedGlob) {
  const context = await browser.newContext({ viewport: { width: 390, height: 844 }, locale: 'en-US' });
  const page = await context.newPage();
  const uncaught = [];
  page.on('pageerror', error => uncaught.push(error.message));
  if (blockedGlob) await page.route(blockedGlob, route => route.abort());
  await page.goto(`${base}${hash}`, { waitUntil: 'load' });
  await sleep(4000);
  const seen = await page.evaluate(
    ({ loadError, retry }) => ({
      header: Boolean(document.querySelector('header')),
      loadError: document.body.innerText.includes(loadError),
      retry: [...document.querySelectorAll('button')].some(button => button.innerText.trim() === retry),
      stuck: document.querySelector('main')?.innerText.trim() === 'Loading…',
    }),
    { loadError: LOAD_ERROR, retry: RETRY },
  );
  await context.close();
  return { ...seen, uncaught };
}

async function main() {
  let server = null;
  let base = process.env.BASE_URL;
  if (!base) {
    base = `http://127.0.0.1:${PORT}/`;
    server = spawn('node_modules/.bin/vite', ['preview', '--host', '127.0.0.1', '--port', String(PORT), '--strictPort'], { stdio: 'ignore' });
  }
  const browser = await chromium.launch({ headless: true });
  const cases = [
    { name: 'page chunk blocked (#/plan)', hash: '#/plan', blocked: '**/PlanPage-*.js', expectError: true },
    { name: 'planner index blocked (#/)', hash: '#/', blocked: '**/topic-index-*.js', expectError: true },
    { name: 'normal load (#/)', hash: '#/', blocked: null, expectError: false },
  ];
  let failed = 0;
  try {
    if (server) await waitForServer(base);
    for (const item of cases) {
      const seen = await visit(browser, base, item.hash, item.blocked);
      const ok = item.expectError
        ? seen.header && seen.loadError && seen.retry && !seen.stuck && seen.uncaught.length === 0
        : !seen.loadError && seen.header && seen.uncaught.length === 0;
      if (!ok) failed += 1;
      console.log(`${ok ? 'ok  ' : 'FAIL'} ${item.name}: header ${seen.header}, load error ${seen.loadError}, retry ${seen.retry}, stuck ${seen.stuck}, uncaught ${seen.uncaught.length}`);
    }
  } finally {
    await browser.close();
    if (server) server.kill();
  }
  console.log(failed === 0 ? 'load failures show the load error' : `${failed} load-failure case(s) failed`);
  process.exitCode = failed === 0 ? 0 : 1;
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
