// S9 review, econ r2: targeted check of the CaseMap crash on #/s/econ/t/monetary-policy (P0 from r1/r2, owner S0).
//
// Headless Chromium against the local preview (BASE_URL). Each scenario opens the topic in one UI language and one
// text language, then switches the text language (EN, RU, EN + RU) or the UI language (RU, EN). After every step:
// uncaught page errors, console errors (with the message of an Error argument), Leaflet containers and markers,
// the SafeContent failure text ("could not be loaded"), the text "not found", and the page width.
// Requests to hosts other than the preview (map tiles) are aborted and listed apart; their console noise is not an error.
//
// Usage:  BASE_URL=http://127.0.0.1:4173 OUT=<folder> node tests/review/econ-r2-casemap.mjs
// Output: <OUT>/casemap-econ.json and <OUT>/shots/*.png; one summary line per run on stdout.
import { chromium } from 'playwright';
import { mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const BASE = (process.env.BASE_URL ?? 'http://127.0.0.1:4173').replace(/\/+$/, '');
if (!/^https?:\/\/(127\.0\.0\.1|localhost)(:\d+)?$/.test(BASE)) throw new Error(`BASE_URL must be a local preview, got ${BASE}`);
const OUT = process.env.OUT ?? './econ-r2-out';
const SHOTS = path.join(OUT, 'shots');
mkdirSync(SHOTS, { recursive: true });

const ROUTE = '#/s/econ/t/monetary-policy';
const VIEWPORTS = [
  { name: '390', width: 390, height: 844 },
  { name: '1280', width: 1280, height: 800 },
];
const FAILURE = ['Эту часть страницы не удалось загрузить.', 'This part of the page could not be loaded.'];
const NOISE = /ERR_FAILED|ERR_BLOCKED|ERR_ABORTED|Failed to load resource/;
const TEXT_LABEL = { en: /^EN$/, ru: /^RU$/, 'en+ru': /^EN \+ RU$/ };
// [name, UI language at start, text language at start, steps]; a step is ['text', mode] or ['ui', lang].
const SCENARIOS = [
  ['ui-ru text-ru', 'ru', 'ru', [['text', 'en'], ['text', 'en+ru'], ['text', 'ru']]],
  ['ui-en text-en', 'en', 'en', [['text', 'ru'], ['text', 'en+ru']]],
  ['ui-ru text-en+ru', 'ru', 'en+ru', [['text', 'en'], ['text', 'ru']]],
  ['ui-ru text-ru, switch UI', 'ru', 'ru', [['ui', 'en'], ['ui', 'ru']]],
  ['ui-en text-ru, switch UI', 'en', 'ru', [['ui', 'ru']]],
  // Same order as contentToggle in tests/review/ux-subject.mjs (EN + RU, RU, EN), clicked back to back with no pause.
  ['fast ui-ru text-ru', 'ru', 'ru', [['text', 'en+ru'], ['text', 'ru'], ['text', 'en']], true],
  ['fast ui-en text-en', 'en', 'en', [['text', 'en+ru'], ['text', 'ru'], ['text', 'en']], true],
];
// The same settings shape as the harness writes (tests/review/ux-subject.mjs), so the app opens the same way.
const STATE = JSON.stringify({
  version: 2,
  topics: {},
  terms: {},
  questions: {},
  blocks: {},
  settings: { accessArrangements: { extraTime: true, separateRoom: false }, dailyLoadMinutes: {} },
});

const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const report = { base: BASE, route: ROUTE, started: new Date().toISOString(), runs: [], external: new Set() };
const browser = await chromium.launch({ headless: true });

try {
  for (const vp of VIEWPORTS) {
    for (const [name, ui, content, steps, fast = false] of SCENARIOS) {
      const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
      await context.addInitScript(
        ({ ui, content, state }) => {
          try {
            window.localStorage.setItem('foma-lang', ui);
            window.localStorage.setItem('foma-content-lang', content);
            window.localStorage.setItem('foma-portal-v1', state);
          } catch {
            // Storage blocked: the app falls back to its defaults.
          }
        },
        { ui, content, state: STATE },
      );
      await context.route('**/*', route => {
        const url = route.request().url();
        if (url.startsWith(BASE) || url.startsWith('data:') || url.startsWith('blob:')) return route.continue();
        try { report.external.add(new URL(url).host); } catch { /* not a URL: ignore */ }
        return route.abort();
      });

      const page = await context.newPage();
      const events = [];
      const pending = [];
      let step = 'open';
      page.on('pageerror', err => events.push({ step, kind: 'pageerror', text: String(err?.message ?? err).slice(0, 400) }));
      page.on('requestfailed', req => {
        if (req.url().startsWith(BASE)) events.push({ step, kind: 'local-request-failed', text: req.url().slice(0, 200) });
      });
      page.on('console', msg => {
        if (msg.type() !== 'error') return;
        const at = step;
        pending.push((async () => {
          const extra = [];
          for (const arg of msg.args()) {
            try {
              const s = await arg.evaluate(x => (x && typeof x === 'object' && 'message' in x ? String(x.message) : typeof x === 'string' ? x : ''));
              if (s) extra.push(s);
            } catch {
              // handle already gone: keep the plain text
            }
          }
          const text = [msg.text(), ...extra].join(' | ').slice(0, 400);
          events.push({ step: at, kind: NOISE.test(text) ? 'noise' : 'console', text });
        })());
      });

      const snap = async label => {
        await Promise.allSettled(pending.splice(0));
        const info = await page.evaluate(failure => {
          const text = document.body ? document.body.innerText : '';
          const notFound = text.match(/[^\n]{0,50}(не найден|not found)[^\n]{0,40}/i);
          return {
            casemapBlocks: document.querySelectorAll('.foma-casemap').length,
            leafletContainers: document.querySelectorAll('.leaflet-container').length,
            markers: document.querySelectorAll('.leaflet-marker-icon').length,
            mapHeights: [...document.querySelectorAll('.foma-map')].map(el => Math.round(el.getBoundingClientRect().height)),
            failureShown: failure.filter(f => text.includes(f)).length,
            notFound: notFound ? notFound[0].trim() : null,
            pageWidth: document.documentElement.scrollWidth,
            viewWidth: document.documentElement.clientWidth,
          };
        }, FAILURE);
        const shot = path.join(SHOTS, `casemap-${slug(name)}-${vp.name}-${slug(label)}.png`);
        await page.screenshot({ path: shot });
        return { step: label, ...info, errors: events.filter(e => e.step === label), shot: path.relative(OUT, shot) };
      };

      const run = { viewport: vp.name, scenario: name, ui, content, steps: [] };
      try {
        await page.goto(`${BASE}/${ROUTE}`, { waitUntil: 'domcontentloaded', timeout: 30000 });
        await page
          .waitForFunction(
            () => document.querySelector('.foma-casemap') !== null || /could not be loaded|не удалось загрузить/.test(document.body?.innerText ?? ''),
            null,
            { timeout: 15000 },
          )
          .catch(() => {});
        await page.waitForTimeout(1500);
        run.steps.push(await snap('open'));

        for (const [kind, value] of steps) {
          step = fast ? 'fast-sequence' : `${kind}:${value}`;
          try {
            if (kind === 'text') {
              await page.locator('button.foma-btn').filter({ hasText: TEXT_LABEL[value] }).first().click({ timeout: 5000 });
            } else {
              await page
                .locator('button[aria-pressed]:not(.foma-btn)')
                .filter({ hasText: new RegExp(`^${value.toUpperCase()}$`) })
                .first()
                .click({ timeout: 5000 });
            }
          } catch (err) {
            events.push({ step, kind: 'harness', text: `click failed: ${String(err.message).split('\n')[0]}` });
          }
          if (!fast) {
            await page.waitForTimeout(1500);
            run.steps.push(await snap(step));
          }
        }
        if (fast) {
          // All clicks are done without a pause; one snapshot after the sequence, errors labelled 'fast-sequence'.
          await page.waitForTimeout(1500);
          run.steps.push(await snap('fast-sequence'));
        }
      } catch (err) {
        run.fatal = String(err.message).split('\n')[0];
      }
      report.runs.push(run);
      await context.close();
    }
  }
} finally {
  await browser.close();
}

report.external = [...report.external].sort();
report.finished = new Date().toISOString();
writeFileSync(path.join(OUT, 'casemap-econ.json'), JSON.stringify(report, null, 2));

// One line per run on stdout: each step as label[markers/containers, failure?, errors].
for (const run of report.runs) {
  const parts = run.steps.map(s => {
    const bad = s.failureShown > 0 || s.errors.some(e => e.kind !== 'noise') ? 'BAD' : 'ok';
    const errs = s.errors.filter(e => e.kind !== 'noise').map(e => e.text.slice(0, 90));
    return `${s.step}[m${s.markers}/c${s.leafletContainers}/fail${s.failureShown}/w${s.pageWidth}] ${bad}${errs.length ? ` ${JSON.stringify(errs)}` : ''}`;
  });
  console.log(`${run.viewport} ${run.scenario}: ${run.fatal ? `FATAL ${run.fatal}` : ''}\n    ${parts.join('\n    ')}`);
}
console.log(`external hosts (aborted): ${report.external.join(', ') || 'none'}`);
