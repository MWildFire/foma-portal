// S0, round 3. Regression test for the map crash on topics with a <CaseMap>: switching the text language while the
// map is still zooming throws "Cannot read properties of undefined (reading '_leaflet_pos')". Leaflet finishes a zoom
// animation in a 250 ms timer; when the map was removed in that window, the timer runs on the removed map.
//
// Headless Chromium (Playwright) against the built preview. Run after `npm run build`:
//   node tests/review/casemap-switch.mjs
// Env: BASE_URL  preview origin (default: `vite preview` is started on port 4179 when nothing answers)
// Exit code 1 when any page error appears, or a console error that is not a failed resource request.
import { spawn } from 'node:child_process';
import { readFileSync, readdirSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { setTimeout as sleep } from 'node:timers/promises';
import { chromium } from 'playwright';

const PORT = 4179;
const ROOT = new URL('../..', import.meta.url).pathname;

// Every topic whose Russian body has a <CaseMap>: [subject, topic id]. The topic id is the file name without ".ru.mdx".
function mapTopics(dir = join(ROOT, 'content')) {
  const found = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      found.push(...mapTopics(path));
    } else if (entry.name.endsWith('.ru.mdx') && path.includes(`${sep}topics${sep}`) && readFileSync(path, 'utf8').includes('<CaseMap')) {
      const [subject] = relative(join(ROOT, 'content'), path).split(sep);
      found.push([subject, entry.name.slice(0, -'.ru.mdx'.length)]);
    }
  }
  return found.sort((a, b) => a.join('/').localeCompare(b.join('/')));
}
const TOPICS = mapTopics();
// The label of each text-language button (src/i18n/en/topic.json, contentLang).
const LABEL = { en: 'EN', ru: 'RU', 'en+ru': 'EN + RU' };
// Each run starts with a quiet page, then switches the text language twice in quick succession. Every switch that
// removes a freshly mounted map, 40 ms after it appeared, is the case that used to crash.
const RUNS = [
  { start: 'en+ru', steps: ['ru', 'en+ru', 'ru'] },
  { start: 'en+ru', steps: ['en', 'en+ru', 'en'] },
  { start: 'ru', steps: ['en+ru', 'ru'] },
];

async function waitForServer(base) {
  for (let i = 0; i < 100; i += 1) {
    try {
      const response = await fetch(base);
      if (response.ok) return;
    } catch {
      // not up yet
    }
    await sleep(200);
  }
  throw new Error(`no answer from ${base}`);
}

// Clicks the text-language button by its label, inside the group that holds the "EN + RU" button.
function clickLanguage(label) {
  const groups = [...document.querySelectorAll('[role="group"]')];
  const group = groups.find(item => [...item.querySelectorAll('button')].some(button => button.textContent.trim() === 'EN + RU'));
  const button = group && [...group.querySelectorAll('button')].find(item => item.textContent.trim() === label);
  if (!button) throw new Error(`no language button ${label}`);
  button.click();
}

async function runOnce(browser, base, subject, topic, run) {
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await context.newPage();
  const problems = [];
  page.on('pageerror', error => problems.push(`page error: ${error.message}`));
  page.on('console', message => {
    if (message.type() !== 'error' || message.text().startsWith('Failed to load resource')) return;
    problems.push(`console error: ${message.text()}`);
  });
  await page.addInitScript(lang => localStorage.setItem('foma-content-lang', lang), run.start);
  await page.goto(`${base}/#/s/${subject}/t/${topic}`, { waitUntil: 'load' });
  await page.waitForSelector('.foma-casemap', { timeout: 30000 });
  // A CaseMap with no coordinates in the topic draws a text list only, with no map to switch.
  const hasMap = await page.waitForSelector('.leaflet-container', { timeout: 15000 }).then(() => true, () => false);
  if (!hasMap) {
    await context.close();
    return null;
  }
  await sleep(400); // the first zoom timers have fired: the steps below start from a quiet map
  for (const lang of run.steps) {
    await page.evaluate(clickLanguage, LABEL[lang]);
    await sleep(40);
  }
  await sleep(1500); // time for any timer left behind by a removed map to fire
  await context.close();
  return problems;
}

async function main() {
  let server = null;
  let base = process.env.BASE_URL;
  if (!base) {
    base = `http://127.0.0.1:${PORT}/`;
    server = spawn('node_modules/.bin/vite', ['preview', '--host', '127.0.0.1', '--port', String(PORT), '--strictPort'], { stdio: 'ignore' });
  }
  const browser = await chromium.launch({ headless: true });
  let failed = 0;
  try {
    if (server) await waitForServer(base);
    for (const [subject, topic] of TOPICS) {
      for (const run of RUNS) {
        const problems = await runOnce(browser, base, subject, topic, run);
        const label = `${subject}/${topic} start=${run.start} steps=${run.steps.join('>')}`;
        if (problems === null) {
          console.log(`skip  ${label} (no map drawn)`);
        } else if (problems.length === 0) {
          console.log(`ok    ${label}`);
        } else {
          failed += 1;
          console.log(`FAIL  ${label}`);
          for (const problem of [...new Set(problems)]) console.log(`      ${problem.slice(0, 240)}`);
        }
      }
    }
  } finally {
    await browser.close();
    if (server) server.kill();
  }
  console.log(failed === 0 ? 'all map switches are clean' : `${failed} map switch run(s) with page errors`);
  process.exitCode = failed === 0 ? 0 : 1;
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
