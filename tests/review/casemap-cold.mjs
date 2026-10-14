// S9 review, R01: cold first load of the geography Unit 1 case map on a 390 px phone, on the live site.
//
// Each run is a new browser context (empty cache, no stored files) that opens the topic in English. The run ends when the
// map is on the page (.leaflet-container wider than 200 px) or after RUN_TIMEOUT_MS. It records the time to the map
// and the time the load-error block ("This page did not load") first appeared, if it did. Real internet is used: the
// tiles come from tile.openstreetmap.org as they do for [redacted].
//
// Usage:  BASE_URL=https://fomalearningportal.academy node tests/review/casemap-cold.mjs
// Env:    BASE_URL        origin (default https://fomalearningportal.academy)
//         RUNS            cold runs (default 3)
//         RUN_TIMEOUT_MS  how long each run waits for the map (default 60000)
//         OUT             folder for casemap-cold.json (default: the current folder)
//         SITE_USER, SITE_PASS, LOGIN, CREDENTIALS: the same Basic Auth login as day1.mjs; the password is never printed
import { chromium } from 'playwright';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

const BASE = process.env.BASE_URL ?? 'https://fomalearningportal.academy';
const ORIGIN = new URL(BASE).origin;
const OUT = process.env.OUT ?? '.';
const RUNS = Number(process.env.RUNS ?? 3);
const RUN_TIMEOUT_MS = Number(process.env.RUN_TIMEOUT_MS ?? 60000);
const HASH = '#/s/geo/t/core-1-1-population-development';
const LOCAL = /^https?:\/\/(127\.0\.0\.1|localhost)(:|\/|$)/.test(BASE);
const HTTP_CREDENTIALS = LOCAL ? null : siteLogin();
function siteLogin() {
  if (process.env.SITE_PASS) return { username: process.env.SITE_USER ?? 'dmitry', password: process.env.SITE_PASS };
  const user = process.env.LOGIN ?? 'dmitry';
  const file = process.env.CREDENTIALS ?? join(homedir(), '.foma-portal', 'credentials.txt');
  for (const line of readFileSync(file, 'utf8').split('\n')) {
    const m = line.match(/^\s*([^:=\s]+)\s*[:=]\s*(.+?)\s*$/);
    if (m && m[1] === user) return { username: user, password: m[2] };
  }
  throw new Error(`no login "${user}" in the credentials file`);
}
// The same storage as day1.mjs: [redacted]'s extra time is on, so the topic is opened the way [redacted] opens it.
const STATE = JSON.stringify({
  version: 2, topics: {}, terms: {}, questions: {}, blocks: {},
  settings: { accessArrangements: { extraTime: true, separateRoom: false }, dailyLoadMinutes: {} },
});
const NOISE = /ERR_FAILED|ERR_ABORTED|net::|Failed to load resource/;

// One look at the page: is the wide map there, and is the load-error block there instead.
function probe(page) {
  return page.evaluate(() => {
    const map = document.querySelector('.leaflet-container');
    const main = document.querySelector('main') ?? document.body;
    return {
      map: Boolean(map && map.getBoundingClientRect().width > 200),
      error: /This page did not load/.test(main.innerText ?? ''),
    };
  });
}

const browser = await chromium.launch();
const runs = [];
for (let run = 1; run <= RUNS; run++) {
  const context = await browser.newContext({
    ...(HTTP_CREDENTIALS ? { httpCredentials: { ...HTTP_CREDENTIALS, origin: ORIGIN } } : {}),
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
    deviceScaleFactor: 1,
    locale: 'en-GB',
    timezoneId: 'Asia/Dubai',
    reducedMotion: 'reduce',
  });
  await context.addInitScript(({ state }) => {
    localStorage.setItem('foma-lang', 'en');
    localStorage.setItem('foma-content-lang', 'en');
    localStorage.setItem('foma-portal-v1', state);
  }, { state: STATE });
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push(`PAGEERROR ${e.message}`));
  page.on('console', m => { if (m.type() === 'error' && !NOISE.test(m.text())) errors.push(m.text()); });

  const started = Date.now();
  await page.goto(`${BASE}/${HASH}`, { waitUntil: 'domcontentloaded' });
  let mapMs = null;
  let errorMs = null;
  while (Date.now() - started < RUN_TIMEOUT_MS) {
    const state = await probe(page);
    if (state.error && errorMs === null) errorMs = Date.now() - started;
    if (state.map) { mapMs = Date.now() - started; break; }
    await page.waitForTimeout(250);
  }
  runs.push({ run, mapMs, errorMs, pageErrors: errors.length, errors: errors.slice(0, 5) });
  console.log(`run ${run}: map ${mapMs === null ? 'not shown' : mapMs + ' ms'}, error block ${errorMs === null ? 'no' : 'yes at ' + errorMs + ' ms'}, page errors ${errors.length}`);
  await context.close();
}
await browser.close();

mkdirSync(OUT, { recursive: true });
const file = join(OUT, 'casemap-cold.json');
writeFileSync(file, JSON.stringify({ base: BASE, hash: HASH, width: 390, lang: 'en', runs }, null, 2));
console.log(`wrote ${file}`);
