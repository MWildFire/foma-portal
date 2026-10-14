// S9 review, round 3: the first-day pass over the Today page (14.10 and 15.10), EN and RU, 390 and 1280 px.
//
// Headless Chromium against the built preview. The clock is fixed to 13:00 Dubai time on each date, and the
// storage is set the way [redacted]'s is (extra time on, +25%). Per combination:
//  - the Today page is read as a student sees it: its headings, the language of its focus line (decision 6),
//    and whether the math diagnostic is among the links it offers;
//  - every internal link of the Today page (blocks, glossary, plan, exams) is opened in the same browser context;
//    each page must render content, show no error or service text, and not scroll sideways on 390 px;
//  - three fixed checks: the math diagnostic timer (45 min + 25% = 56:00), the English P1 timed set (75 + 25% =
//    94:00), and the geography Unit 1 topic with its case map.
// Errors are attributed by step: every visit leaves the previous page first, so an error thrown while that page is
// torn down is listed as a teardown error of the page that was left, not of the page that was opened.
//
// Network policy: only the local preview is reachable; every other request is aborted and its host is listed.
//
// Usage:  node tests/review/day1.mjs
//         BASE_URL=https://fomalearningportal.academy node tests/review/day1.mjs   (live site, Basic Auth)
//         DATES=2026-10-14..2026-10-20 LANGS=en WIDTHS=390 OUT=/tmp/days node tests/review/day1.mjs
// Env:    BASE_URL     preview origin (default http://127.0.0.1:4173), or the live origin
//         DATES        dates to check: "2026-10-14,2026-10-15" or an inclusive range "2026-10-14..2026-11-04"
//                      (default: today and tomorrow in Dubai)
//         LANGS        en, ru (default en,ru)
//         WIDTHS       viewport widths in px (default 390,1280)
//         SITE_USER    Basic Auth login for the live site (default dmitry), with SITE_PASS
//         SITE_PASS    Basic Auth password; without it the login is read from the credentials file
//         LOGIN        login to take from the credentials file (default dmitry)
//         CREDENTIALS  credentials file (default ~/.foma-portal/credentials.txt); the password is never printed
//         OUT          folder for day1.json (default: UX_OUT, else the current folder)
import { chromium } from 'playwright';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

const BASE = process.env.BASE_URL ?? 'http://127.0.0.1:4173';
const OUT = process.env.OUT ?? process.env.UX_OUT ?? '.';
const ORIGIN = new URL(BASE).origin;
// The live site sits behind Basic Auth. SITE_USER / SITE_PASS win when set; otherwise the login is read from the
// credentials file at run time. The password is never printed: reports and logs must not contain it.
const LIVE = !/^https?:\/\/(127\.0\.0\.1|localhost)(:|\/|$)/.test(BASE);
const HTTP_CREDENTIALS = LIVE ? siteLogin() : null;
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
// DATES, LANGS and WIDTHS come from the environment (see the header). Default: today and tomorrow in Dubai.
const DATES = datesFromEnv(process.env.DATES);
const LANGS = listFromEnv(process.env.LANGS, ['en', 'ru']);
const WIDTHS = listFromEnv(process.env.WIDTHS, ['390', '1280']).map(Number);
if (LANGS.some(lang => lang !== 'en' && lang !== 'ru')) throw new Error(`LANGS must be en or ru, got "${LANGS}"`);
if (WIDTHS.some(width => !Number.isInteger(width) || width <= 0)) throw new Error(`WIDTHS must be pixel widths, got "${WIDTHS}"`);
function datesFromEnv(value) {
  if (!value) {
    const today = new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Dubai' });
    return [today, addDays(today, 1)];
  }
  const range = value.match(/^(\d{4}-\d{2}-\d{2})\.\.(\d{4}-\d{2}-\d{2})$/);
  const dates = range ? [] : listFromEnv(value, []);
  if (range) for (let d = range[1]; d <= range[2]; d = addDays(d, 1)) dates.push(d);
  if (!dates.length || dates.some(d => !/^\d{4}-\d{2}-\d{2}$/.test(d))) throw new Error(`DATES: cannot read "${value}"`);
  return dates;
}
function addDays(iso, days) {
  const d = new Date(`${iso}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}
function listFromEnv(value, fallback) {
  return value ? value.split(',').map(s => s.trim()).filter(Boolean) : fallback;
}
const NOT_FOUND = /not found|There is no |Something went wrong|не найден|Нет такой|Что-то пошло не так/i;
const CYRILLIC = /[а-яёА-ЯЁ]/g;
const STATE = JSON.stringify({
  version: 2, topics: {}, terms: {}, questions: {}, blocks: {},
  settings: { accessArrangements: { extraTime: true, separateRoom: false }, dailyLoadMinutes: {} },
});
// Fixed checks. `action` is the button that starts the timer; `expect` is what the page shows after it.
const FIXED = [
  { id: 'math-diagnostic-timer', route: '/s/math/practice?set=diagnostic', action: /^(Start the timer|Запустить таймер)$/, expect: /\b56:00\b/, why: 'math diagnostic runs 56:00 with +25%' },
  { id: 'eng-p1-timer', route: '/s/eng/paper/P1', action: /^(Solve on time|Решать на время)$/, expect: /\b94:00\b/, why: 'English P1 timed set runs 94:00 with +25%' },
  { id: 'geo-unit-1-map', route: '/s/geo/t/core-1-1-population-development', map: true, why: 'geography Unit 1 renders its case map' },
  { id: 'eng-p1-method', route: '/s/eng/t/p1-method', minSections: 6, why: 'English P1 method has its eight sections' },
];

const browser = await chromium.launch();
const results = [];

function isNoise(text) {
  return /ERR_FAILED|ERR_ABORTED|net::|Failed to load resource/.test(text);
}

async function goHash(page, hash) {
  await page.evaluate(h => { window.location.hash = h; }, hash);
  await page.waitForFunction(() => (document.querySelector('main')?.innerText ?? '').length > 80, null, { timeout: 9000 }).catch(() => {});
  await page.waitForTimeout(250);
}

// run: { page, errors, teardown, last } for one browser context. Leaves `run.last` on the page just opened.
async function visit(run, hash) {
  const { page, errors, teardown } = run;
  const a = errors.length;
  await goHash(page, '#/');
  const b = errors.length;
  if (run.last !== '#/') teardown.push({ left: run.last, errors: errors.slice(a, b).filter(e => !isNoise(e)) });
  await goHash(page, hash);
  run.last = hash;
  const info = await page.evaluate(() => {
    const main = document.querySelector('main') ?? document.body;
    const text = main.innerText ?? '';
    const map = document.querySelector('.foma-map');
    const box = map ? map.getBoundingClientRect() : null;
    return {
      len: text.length,
      head: text.slice(0, 1200),
      h1: document.querySelector('h1')?.textContent?.trim() ?? '',
      h2: main.querySelectorAll('h2').length,
      overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
      map: box ? { w: Math.round(box.width), h: Math.round(box.height) } : null,
      text,
    };
  });
  const c = errors.length;
  return {
    hash,
    h1: info.h1,
    len: info.len,
    h2: info.h2,
    overflow: info.overflow,
    map: info.map,
    notFound: NOT_FOUND.test(info.head),
    errors: errors.slice(b, c).filter(e => !isNoise(e)),
    noise: errors.slice(b, c).filter(isNoise).length,
    text: info.text,
  };
}

for (const date of DATES) {
  for (const lang of LANGS) {
    for (const width of WIDTHS) {
      const label = `${date} ${lang} ${width}`;
      const context = await browser.newContext({
        ...(HTTP_CREDENTIALS ? { httpCredentials: { ...HTTP_CREDENTIALS, origin: ORIGIN } } : {}),
        viewport: { width, height: 900 },
        isMobile: width < 500,
        hasTouch: width < 500,
        deviceScaleFactor: 1,
        locale: lang === 'ru' ? 'ru-RU' : 'en-GB',
        timezoneId: 'Asia/Dubai',
        reducedMotion: 'reduce',
      });
      const blockedHosts = new Set();
      await context.route('**/*', route => {
        const url = route.request().url();
        if (url.startsWith(ORIGIN) || url.startsWith('data:') || url.startsWith('blob:')) return route.continue();
        try { blockedHosts.add(new URL(url).host); } catch { /* malformed URL: ignore */ }
        return route.abort();
      });
      await context.addInitScript(({ lang, state }) => {
        localStorage.setItem('foma-lang', lang);
        localStorage.setItem('foma-content-lang', lang);
        localStorage.setItem('foma-portal-v1', state);
      }, { lang, state: STATE });
      const page = await context.newPage();
      const run = { page, errors: [], teardown: [], last: '#/' };
      page.on('console', m => { if (m.type() === 'error') run.errors.push(m.text()); });
      page.on('pageerror', e => run.errors.push(`PAGEERROR ${e.message}`));
      await page.clock.setFixedTime(new Date(`${date}T13:00:00+04:00`));
      await page.goto(`${BASE}/#/`, { waitUntil: 'domcontentloaded' });
      await page.waitForFunction(() => (document.querySelector('main')?.innerText ?? '').length > 80, null, { timeout: 15000 }).catch(() => {});
      await page.waitForTimeout(500);

      const today = await page.evaluate(() => {
        const main = document.querySelector('main') ?? document.body;
        const links = [...main.querySelectorAll('a[href^="#/"]')].map(a => a.getAttribute('href'));
        const headings = [...main.querySelectorAll('h1,h2,h3')].map(h => h.textContent.trim()).filter(Boolean);
        return { links: [...new Set(links)], headings, text: main.innerText ?? '' };
      });
      // The focus line: its body (after the label) must be in the page language (decision 6).
      const focusLine = (today.text.split('\n').find(l => /^(Фокус дня|Focus):/.test(l.trim())) ?? '').trim();
      const focusBody = focusLine.replace(/^[^:]*:/, '').trim();
      const todayRes = {
        h1: await page.evaluate(() => document.querySelector('h1')?.textContent?.trim() ?? ''),
        focusLine,
        focusOk: lang === 'ru' ? (focusBody.match(CYRILLIC) ?? []).length > 0 : true,
        cyrOnEnglishPage: lang === 'en' ? (today.text.match(CYRILLIC) ?? []).length : 0,
        // The focus line names the math diagnostic: [redacted] must find it among Today's links.
        diagnosticOnToday: today.links.some(h => h.includes('set=diagnostic')),
        headings: today.headings,
      };

      const hashes = [...new Set(today.links.filter(h => h !== '#/' && !/^#\/(report|settings|sims)$/.test(h)))];
      const visited = [];
      for (const hash of hashes) visited.push(await visit(run, hash));

      const fixed = [];
      for (const f of FIXED) {
        const r = await visit(run, f.route);
        let actionFound = true;
        let expectOk = true;
        if (f.action) {
          const btn = page.getByRole('button', { name: f.action }).first();
          actionFound = (await btn.count()) > 0;
          if (actionFound) {
            await btn.click();
            await page.waitForTimeout(800);
            const after = await page.evaluate(() => document.querySelector('main')?.innerText ?? '');
            expectOk = f.expect.test(after);
          }
        }
        const mustOk = f.action ? actionFound && expectOk : true;
        const mapOk = f.map ? r.map !== null && r.map.w > 200 && r.map.h > 100 : true;
        const sectionsOk = f.minSections ? r.h2 >= f.minSections : true;
        fixed.push({
          id: f.id, route: f.route, why: f.why,
          ok: mustOk && mapOk && sectionsOk && !r.notFound && r.errors.length === 0,
          actionFound, expectOk, mapOk, sectionsOk, map: r.map, h2: r.h2, errors: r.errors, notFound: r.notFound,
        });
      }
      results.push({
        date, lang, width,
        today: todayRes,
        blockedHosts: [...blockedHosts],
        visited: visited.map(({ text, ...v }) => v),
        fixed,
        teardown: run.teardown.filter(t => t.errors.length),
      });
      await context.close();
      const badPages = visited.filter(v => v.errors.length || v.notFound).map(v => v.hash);
      const overflowPages = visited.filter(v => v.overflow > 1).map(v => v.hash);
      console.log(`${label}: links ${hashes.length}, pages with errors ${badPages.length}${badPages.length ? ' (' + badPages.join(' ') + ')' : ''}, overflow ${overflowPages.length}, teardown errors ${run.teardown.filter(t => t.errors.length).length}, fixed ok ${fixed.filter(f => f.ok).length}/${fixed.length}, focusOk ${todayRes.focusOk}, diagnosticOnToday ${todayRes.diagnosticOnToday}`);
    }
  }
}
await browser.close();

mkdirSync(OUT, { recursive: true });
const file = join(OUT, 'day1.json');
writeFileSync(file, JSON.stringify(results, null, 2));
console.log(`wrote ${file}`);
