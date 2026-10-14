// S9 review, round 2: live checks on the site for what the day1 pass does not cover. English and Russian, 1280 px:
//  - Exams (#/exams): every printed end time is shown, and no "+25 %" or "With extra time" anywhere ([redacted] has none);
//  - Settings (#/settings): the extra-time switch is off;
//  - typing reminder ("Practise typing your answer"): shown on the English P2 timed set, not on the Maths P1 one;
//  - population pyramid (core-1-1): a screenshot, and the labels in order (80+ above 0–9, Male on the left).
// Headless Chromium against the live site, with the Basic Auth login of day1.mjs; the password is never printed.
//
// Usage:  OUT=/tmp/foma-s9-live node tests/review/live-r02.mjs
// Env:    BASE_URL      site origin (default https://fomalearningportal.academy)
//         OUT           folder for live-r02.json and the pyramid screenshots (default: the current folder)
//         SITE_USER, SITE_PASS, LOGIN, CREDENTIALS: the same login as day1.mjs (the password is never printed)
import { chromium } from 'playwright';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const BASE = process.env.BASE_URL ?? 'https://fomalearningportal.academy';
const ORIGIN = new URL(BASE).origin;
const OUT = process.env.OUT ?? '.';
const HTTP_CREDENTIALS = siteLogin();
function siteLogin() {
  if (process.env.SITE_PASS) return { username: process.env.SITE_USER ?? 'dmitry', password: process.env.SITE_PASS };
  const user = process.env.LOGIN ?? 'dmitry';
  const file = process.env.CREDENTIALS ?? path.join(homedir(), '.foma-portal', 'credentials.txt');
  for (const line of readFileSync(file, 'utf8').split('\n')) {
    const m = line.match(/^\s*([^:=\s]+)\s*[:=]\s*(.+?)\s*$/);
    if (m && m[1] === user) return { username: user, password: m[2] };
  }
  throw new Error(`no login "${user}" in the credentials file`);
}

// [redacted]'s storage now: schema 3, no extra time.
const STATE = JSON.stringify({
  version: 3, topics: {}, terms: {}, questions: {}, blocks: {},
  settings: { accessArrangements: { extraTime: false, separateRoom: false }, dailyLoadMinutes: {} },
});
function seedStorage({ lang, state }) {
  localStorage.setItem('foma-lang', lang);
  localStorage.setItem('foma-content-lang', lang);
  localStorage.setItem('foma-portal-v1', state);
}

const EXAMS = JSON.parse(readFileSync(path.join(ROOT, 'data', 'exams.json'), 'utf8'));
const pad = (n) => String(n).padStart(2, '0');
const endOf = (start, minutes) => {
  const [hours, mins] = start.split(':').map(Number);
  const total = hours * 60 + mins + minutes;
  return `${pad(Math.floor(total / 60) % 24)}:${pad(total % 60)}`;
};
// The extra-time wording of the site (src/i18n/*/exams.json, practice.json): none of it may show for [redacted].
const EXTRA_SHOWN = {
  en: /\+\s?25\s?%|25% extra time|With extra time|With your 25%/i,
  ru: /\+\s?25\s?%|С доп\. временем|С дополнительными 25%|\+25% времени/i,
};
const TYPING_HINT = { en: /Practise typing your answer/, ru: /Тренируйся печатать ответ/ };
const PYRAMID = 'svg[role="img"][aria-label^="Age"], svg[role="img"][aria-label^="Возрастно"]';
const LANGS = ['en', 'ru'];
const WIDTH = 1280;
const NOISE = /ERR_FAILED|ERR_ABORTED|net::|Failed to load resource/;

// One page of the site, opened in a new context with [redacted]'s storage. Only the site itself is reachable.
async function openPage(browser, lang, hash) {
  const context = await browser.newContext({
    httpCredentials: { ...HTTP_CREDENTIALS, origin: ORIGIN },
    viewport: { width: WIDTH, height: 900 },
    deviceScaleFactor: 1,
    locale: lang === 'ru' ? 'ru-RU' : 'en-GB',
    timezoneId: 'Asia/Dubai',
    reducedMotion: 'reduce',
  });
  await context.route('**/*', route => {
    const url = route.request().url();
    return url.startsWith(ORIGIN) || url.startsWith('data:') || url.startsWith('blob:') ? route.continue() : route.abort();
  });
  await context.addInitScript(seedStorage, { lang, state: STATE });
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push(`PAGEERROR ${e.message}`));
  page.on('console', m => { if (m.type() === 'error' && !NOISE.test(m.text())) errors.push(m.text()); });
  await page.clock.setFixedTime(new Date('2026-10-14T13:00:00+04:00'));
  await page.goto(`${BASE}/#${hash}`, { waitUntil: 'load', timeout: 30000 });
  await page.waitForSelector('h1', { timeout: 15000 }).catch(() => {});
  await page.waitForTimeout(800);
  return { context, page, errors };
}

const browser = await chromium.launch();
const checks = [];
try {
  // 1. Exams: the printed end of every paper is on the page; no extra time wording.
  for (const lang of LANGS) {
    const { context, page, errors } = await openPage(browser, lang, '/exams');
    const text = await page.evaluate(() => document.querySelector('main')?.innerText ?? '');
    const missingEnds = EXAMS.papers.map(p => ({ id: p.id, end: endOf(p.start, p.minutes) })).filter(p => !text.includes(p.end)).map(p => `${p.id} ${p.end}`);
    const extraShown = EXTRA_SHOWN[lang].exec(text)?.[0] ?? null;
    checks.push({ id: `exams-${lang}`, ok: missingEnds.length === 0 && extraShown === null && errors.length === 0, missingEnds, extraShown, errors });
    await context.close();
  }

  // 2. Settings: the extra-time switch is off.
  for (const lang of LANGS) {
    const { context, page, errors } = await openPage(browser, lang, '/settings');
    const box = page.getByRole('checkbox', { name: /25% extra time|Доп\. время 25/ });
    const found = (await box.count()) > 0;
    const checked = found ? await box.first().isChecked() : null;
    checks.push({ id: `settings-${lang}`, ok: found && checked === false && errors.length === 0, found, checked, errors });
    await context.close();
  }

  // 3. Typing reminder: on the English P2 timed set, not on the Maths P1 one (the set opened by "Solve on time").
  const TYPING_CASES = [
    { id: 'typing-eng-p2', hash: '/s/eng/paper/P2', expect: true },
    { id: 'typing-math-p1', hash: '/s/math/paper/P1', expect: false },
  ];
  for (const lang of LANGS) {
    for (const item of TYPING_CASES) {
      const { context, page, errors } = await openPage(browser, lang, item.hash);
      const button = page.getByRole('button', { name: /^(Solve on time|Решать на время)$/ }).first();
      const clicked = (await button.count()) > 0;
      if (clicked) {
        await button.click();
        await page.waitForTimeout(800);
      }
      const text = await page.evaluate(() => document.querySelector('main')?.innerText ?? '');
      const shown = TYPING_HINT[lang].test(text);
      checks.push({ id: `${item.id}-${lang}`, ok: clicked && shown === item.expect && errors.length === 0, clicked, shown, expected: item.expect, errors });
      await context.close();
    }
  }

  // 4. Population pyramid on core-1-1: screenshot, and the label order by the boxes of the SVG texts.
  mkdirSync(OUT, { recursive: true });
  for (const lang of LANGS) {
    const { context, page, errors } = await openPage(browser, lang, '/s/geo/t/core-1-1-population-development');
    await page.waitForSelector(PYRAMID, { timeout: 20000 }).catch(() => {});
    const svg = page.locator(PYRAMID).first();
    const found = (await svg.count()) > 0;
    let shot = null;
    let order = null;
    if (found) {
      await svg.scrollIntoViewIfNeeded();
      shot = path.join(OUT, `pyramid-${lang}-${WIDTH}.png`);
      await svg.screenshot({ path: shot });
      const box = async (name) => {
        const text = page.locator(PYRAMID).locator('text').filter({ hasText: name });
        return (await text.count()) > 0 ? text.first().boundingBox() : null;
      };
      const [oldest, youngest, male, female] = await Promise.all([
        box(/^80\+$/), box(/^0–9$/), box(/^(Male|Мужчины)$/), box(/^(Female|Женщины)$/),
      ]);
      order = {
        oldestAbove: Boolean(oldest && youngest && oldest.y < youngest.y),
        maleLeft: Boolean(male && female && male.x < female.x),
        oldestY: oldest?.y ?? null, youngestY: youngest?.y ?? null, maleX: male?.x ?? null, femaleX: female?.x ?? null,
      };
    }
    checks.push({ id: `pyramid-${lang}`, ok: found && order.oldestAbove && order.maleLeft && errors.length === 0, found, shot, order, errors });
    await context.close();
  }
} finally {
  await browser.close();
}

mkdirSync(OUT, { recursive: true });
const file = path.join(OUT, 'live-r02.json');
writeFileSync(file, JSON.stringify({ base: BASE, width: WIDTH, checks }, null, 2));
const failed = checks.filter(c => !c.ok).map(c => c.id);
console.log(`live R02: ${checks.length - failed.length} of ${checks.length} checks ok${failed.length ? `; failed: ${failed.join(', ')}` : ''}`);
for (const c of checks) console.log(`  ${c.ok ? 'ok  ' : 'FAIL'} ${c.id}`);
console.log(`wrote ${file}`);
