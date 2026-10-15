import test, { after, before } from 'node:test';
import assert from 'node:assert/strict';
import { join } from 'node:path';
import { createServer } from 'vite';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

// Smoke test of the study pages: they are loaded through Vite (the same transforms as the real build) and drawn
// once on the server for a few addresses and saved states. It catches a crash on an empty pack, a missing text, a
// broken filter, a list in the wrong order. Effects and clicks do not run here; the logic behind them is covered by
// the other study-*.test.mjs files.
const root = join(import.meta.dirname, '..');
let server;
let i18n;
let example;
const loaded = {};

before(async () => {
  server = await createServer({
    root,
    appType: 'custom',
    // No port, no web socket, no file watcher: the server only compiles modules for this test.
    server: { middlewareMode: true, hmr: false, ws: false, watch: null },
    optimizeDeps: { noDiscovery: true, include: [] },
    logLevel: 'silent',
    // The router offers an ES module for Node under the "module-sync" condition. Vite does not ask for it by
    // default, picks the CommonJS file and then cannot read the named exports.
    ssr: { resolve: { conditions: ['module-sync', 'module', 'node', 'development|production'], externalConditions: ['node', 'module-sync'] } },
  });
  i18n = (await server.ssrLoadModule('/src/i18n/index.ts')).default;
  const registry = await server.ssrLoadModule('/src/content/registry.ts');
  example = await registry.loadSubject('_example');
  // The pages draw a placeholder until their data is in memory, so the drawing tests load it all first.
  await registry.loadSubjects(registry.listSubjects().map(meta => meta.id));
  await registry.loadTopicIndexes([...registry.listSubjects().map(meta => meta.id), '_example']);
  await new Promise(resolve => setTimeout(resolve, 20));
  const files = {
    PracticePage: '/src/pages/PracticePage.tsx',
    GlossaryPage: '/src/pages/GlossaryPage.tsx',
    FormulasPage: '/src/pages/FormulasPage.tsx',
    SimsPage: '/src/pages/SimsPage.tsx',
    ReportPage: '/src/pages/ReportPage.tsx',
    PracticeView: '/src/components/practice/PracticeView.tsx',
    GlossaryView: '/src/components/glossary/GlossaryView.tsx',
    FormulasView: '/src/components/formulas/FormulasView.tsx',
    SimsView: '/src/components/sims/SimsView.tsx',
    ReportView: '/src/components/report/ReportView.tsx',
    FormulaCard: '/src/components/ui/Formula.tsx',
    SubjectLoadError: '/src/components/subject/SubjectLoadError.tsx',
    InlineLoadError: '/src/components/subject/SubjectLoadError.tsx',
    InlineLoadWait: '/src/components/subject/SubjectLoadError.tsx',
    PastPaperCard: '/src/components/past-papers/PastPaperCard.tsx',
  };
  for (const [name, path] of Object.entries(files)) loaded[name] = (await server.ssrLoadModule(path))[name];
});

after(async () => {
  await server?.close();
});

// ---- drawing

// A saved progress state in localStorage for the time of one draw (storage.ts reads window.localStorage).
function withStorage(state, extra, drawIt) {
  const values = new Map(state ? [['foma-portal-v1', JSON.stringify(state)]] : []);
  for (const [key, value] of Object.entries(extra ?? {})) values.set(key, typeof value === 'string' ? value : JSON.stringify(value));
  globalThis.window = {
    localStorage: { getItem: key => values.get(key) ?? null, setItem: (key, value) => values.set(key, value) },
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => true,
  };
  const error = console.error;
  // React Router uses useLayoutEffect, which warns on the server. That is not a problem of the pages.
  console.error = (...args) => {
    if (!String(args[0]).includes('useLayoutEffect does nothing on the server')) error(...args);
  };
  try {
    return drawIt();
  } finally {
    console.error = error;
    delete globalThis.window;
  }
}

async function draw(element, url, { lang = 'en', state, extra, pattern } = {}) {
  await i18n.changeLanguage(lang);
  const inner = pattern ? createElement(Routes, null, createElement(Route, { path: pattern, element })) : element;
  return withStorage(state, extra, () => renderToString(createElement(MemoryRouter, { initialEntries: [url] }, inner)));
}

const page = (name, pattern, url, options) => draw(createElement(loaded[name]), url, { ...options, pattern });
const view = (name, props, url, options) => draw(createElement(loaded[name], props), url, options);

// ---- a small subject to draw

const L = (en, ru) => ({ en, ru: ru ?? `${en} (по-русски)` });
const topic = (id, order, extra = {}) => ({
  id, subject: 'geo', code: `T.${order}`, title: L(`Topic ${id}`, `Тема ${id}`), papers: ['P1'], order, minutes: 30, priority: 1,
  inMockScope: 'yes', outcomes: [], termIds: [], questionIds: [], sources: [], ...extra,
});
const question = (id, paper, topicIds, command, marks = 2) => ({
  id, subject: 'geo', topicIds, paper, marks, command, origin: 'original',
  prompt: L(`Prompt of ${id}`, `Условие ${id}`),
  markscheme: L(`Markscheme of ${id}`, `Критерии ${id}`),
});
const term = (id, papers = ['P1']) => ({
  id, term: L(`term ${id}`, `термин ${id} (term ${id})`), def: L(`English definition of ${id}`, `Русское определение ${id}`),
  syllabus: `S.${id}`, papers, src: { kind: 'textbook', title: 'Course book', locator: 'ch. 1, p. 10' },
});
const formula = (id, inBooklet) => ({
  id, tex: 'a^2 + b^2 = c^2', name: L(`Formula ${id}`, `Формула ${id}`), meaning: L(`Meaning ${id}`, `Смысл ${id}`),
  when: L(`When ${id}`, `Когда ${id}`), syllabus: 'F.1', ...(inBooklet === undefined ? {} : { inBooklet }),
});
const loader = () => Promise.resolve({ default: () => null });

function pack(overrides = {}) {
  return {
    meta: { id: 'geo', title: L('Geography SL', 'География SL'), level: 'SL', color: 'teal' },
    syllabus: [],
    topics: [topic('t1', 1, { termIds: ['a'], formulaIds: ['f1'], sims: ['geo.river'] }), topic('t2', 2)],
    topicBodies: {},
    terms: [term('a'), term('b', ['P2'])],
    formulas: [formula('f1', true), formula('f2', false), formula('f3')],
    questions: [
      question('q1', 'P1', ['t1'], 'Explain'),
      question('q2', 'P1', ['t2'], 'Calculate'),
      question('q3', 'P2', ['t1'], 'explain'),
      question('q4', 'P2', ['t2'], 'Evaluate'),
    ],
    cases: [],
    papers: [{
      subject: 'geo', paper: 'P1', title: L('Paper 1'), minutes: 60, marks: 20, structure: L('s'), strategy: L('s'),
      timedSets: [{ id: 'set-a', title: L('Mock set A', 'Набор А'), questionIds: ['q4', 'q2', 'q404'], minutes: 45 }],
    }],
    sims: { 'geo.river': loader },
    ...overrides,
  };
}

const empty = () => pack({ topics: [], terms: [], formulas: [], questions: [], papers: [], sims: {} });
// What React writes for a text: the five characters it escapes.
const esc = text => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;');
// The first words of a text from the example pack, as they appear in the page (plain text, no Markdown marks).
const start = (text, length = 24) => esc(text.slice(0, length));
const inOrder = (html, first, second) => html.indexOf(first) !== -1 && html.indexOf(first) < html.indexOf(second);

// ---- practice

test('practice, example subject: the questions are shown and the markscheme is hidden', async () => {
  const html = await page('PracticePage', '/s/:subject/practice', '/s/_example/practice');
  assert.ok(example.questions.length > 0, 'the example subject has questions');
  for (const q of example.questions) {
    assert.ok(html.includes(start(q.prompt.en)), `the prompt of ${q.id}`);
    assert.ok(!html.includes(start(q.markscheme.en)), `the markscheme of ${q.id} stays hidden until the button is pressed`);
    assert.ok(html.includes(`Command term: ${esc(q.command)}`), `the command term of ${q.id}`);
    assert.ok(html.includes(`Marks: ${q.marks}`) || html.includes(`Marks: <!-- -->${q.marks}`), `the marks of ${q.id}`);
  }
  assert.match(html, /Show the markscheme/);
  assert.ok(html.includes(`Showing ${example.questions.length} of ${example.questions.length} questions`));
});

test('practice with an empty pack shows an empty state and does not crash', async () => {
  const html = await view('PracticeView', { pack: empty() }, '/s/geo/practice');
  assert.match(html, /No questions yet/);
  assert.ok(!html.includes('Filters'));
});

test('an unknown subject gives the "subject not found" page', async () => {
  for (const name of ['PracticePage', 'GlossaryPage', 'FormulasPage']) {
    const html = await page(name, '/s/:subject/x', '/s/nope/x');
    assert.match(html, /Subject not found/, name);
  }
});

test('practice: the filters come from the address and narrow the list', async () => {
  const props = { pack: pack() };
  const all = await view('PracticeView', props, '/s/geo/practice');
  for (const id of ['q1', 'q2', 'q3', 'q4']) assert.ok(all.includes(`Prompt of ${id}`), id);
  assert.match(all, /Showing 4 of 4 questions/);

  const byPaper = await view('PracticeView', props, '/s/geo/practice?paper=P2');
  assert.ok(byPaper.includes('Prompt of q3') && byPaper.includes('Prompt of q4'));
  assert.ok(!byPaper.includes('Prompt of q1') && !byPaper.includes('Prompt of q2'));

  const combined = await view('PracticeView', props, '/s/geo/practice?paper=P2&command=Explain&topic=t1');
  assert.ok(combined.includes('Prompt of q3'));
  assert.ok(!combined.includes('Prompt of q4') && !combined.includes('Prompt of q1'));
  assert.match(combined, /Showing 1 of 4 questions/);
  assert.match(combined, /Clear filters/);
});

test('practice: a filter value that no question has is kept, shows a count of 0 and an empty list', async () => {
  const html = await view('PracticeView', { pack: pack() }, '/s/geo/practice?paper=P3&topic=nope&command=zzz');
  assert.match(html, /Showing 0 of 4 questions/);
  assert.match(html, /No questions match these filters/);
  assert.match(html, /Paper 3 \(0\)/);
  assert.match(html, /nope \(0\)/);
  assert.match(html, /zzz \(0\)/);
  assert.match(html, /Clear filters/);
  assert.ok(!html.includes('Prompt of q1'));
});

test('practice: when no question matches, a message is shown', async () => {
  const html = await view('PracticeView', { pack: pack() }, '/s/geo/practice?paper=P1&command=evaluate');
  assert.match(html, /No questions match these filters/);
});

test('practice: questions rated wrong come first under "To redo"', async () => {
  const state = { questions: { 'geo/q3': { rating: 'wrong', at: '2026-10-12' }, 'geo/q1': { rating: 'right', at: '2026-10-12' } } };
  const html = await view('PracticeView', { pack: pack() }, '/s/geo/practice', { state });
  assert.match(html, /To redo \(1\)/);
  assert.ok(inOrder(html, 'Prompt of q3', 'Prompt of q1'), 'q3 (wrong) before q1');
  assert.ok(inOrder(html, 'To redo (1)', 'Other questions (3)'));
  assert.ok(inOrder(html, 'Prompt of q1', 'Prompt of q2'), 'the rest keep their order');
});

test('practice: with nothing rated wrong the redo list says so', async () => {
  const html = await view('PracticeView', { pack: pack() }, '/s/geo/practice');
  assert.match(html, /To redo \(0\)/);
  assert.match(html, /Nothing to redo here/);
});

test('practice, timed mode: ?set= opens the set with its questions in order, time and clock', async () => {
  const html = await view('PracticeView', { pack: pack() }, '/s/geo/practice?set=set-a');
  assert.match(html, /Mock set A/);
  assert.match(html, /45:00/); // the printed time by default: [redacted] has no extra time
  assert.ok(!html.includes('56:00'), 'no 25% by default');
  assert.match(html, /Start the timer/);
  assert.ok(inOrder(html, 'Prompt of q4', 'Prompt of q2'), 'the order of the set');
  assert.ok(!html.includes('Prompt of q1') && !html.includes('Prompt of q3'), 'only the questions of the set');
  assert.match(html, /q404/, 'a question missing from the pack is named');
  assert.match(html, /Time is the printed time, as in the exam\./);
  assert.ok(!html.includes('Filters'), 'filters are off in timed mode');
  assert.match(html, /Leave timed mode/);
});

test('practice, timed mode: extra time adds 25% and says so', async () => {
  const state = { version: 3, settings: { accessArrangements: { extraTime: true } } };
  const html = await view('PracticeView', { pack: pack() }, '/s/geo/practice?set=set-a', { state });
  assert.match(html, /56:00/); // the school table: 45 minutes is 56 with extra time
  assert.match(html, /Extra time is on: 45 min \+ 25% \(\+11 min\) = 56 min/);
  assert.ok(!html.includes('45:00'));
});

test('practice, timed mode: a set that does not exist is reported, and the normal list stays', async () => {
  const html = await view('PracticeView', { pack: pack() }, '/s/geo/practice?set=nope');
  assert.match(html, /There is no timed set/);
  assert.match(html, /nope/);
  assert.match(html, /Prompt of q1/);
});

test('practice: a subject without timed sets says so', async () => {
  const html = await view('PracticeView', { pack: pack({ papers: [] }) }, '/s/geo/practice');
  assert.match(html, /no timed sets yet/);
});

test('practice, timed mode: the results tiles stay out of the way, so the timer is near the top', async () => {
  const timed = await view('PracticeView', { pack: pack() }, '/s/geo/practice?set=set-a');
  assert.ok(!timed.includes('Your results'));
  assert.ok(inOrder(timed, 'Timed practice', 'Prompt of q4'));
  const normal = await view('PracticeView', { pack: pack() }, '/s/geo/practice');
  assert.match(normal, /Your results/);
});

test('practice, timed mode: a saved countdown is picked up again after a reload', async () => {
  const key = 'foma-portal-timer-v1:geo/set-a';
  const saved = { status: 'paused', totalMs: 45 * 60_000, remainingMs: 20 * 60_000, endsAt: null, savedAt: Date.now() };
  const paused = await view('PracticeView', { pack: pack() }, '/s/geo/practice?set=set-a', { extra: { [key]: saved } });
  assert.match(paused, /20:00/);
  assert.match(paused, /Paused/);
  assert.match(paused, /Resume/);
  assert.ok(!paused.includes('Start the timer'));

  const running = { status: 'running', totalMs: 45 * 60_000, remainingMs: 45 * 60_000, endsAt: Date.now() + 10 * 60_000, savedAt: Date.now() };
  const resumed = await view('PracticeView', { pack: pack() }, '/s/geo/practice?set=set-a', { extra: { [key]: running } });
  assert.match(resumed, /(09|10):\d\d/);
  assert.match(resumed, /Running/);
  assert.match(resumed, />Pause</);

  const over = { status: 'running', totalMs: 45 * 60_000, remainingMs: 1000, endsAt: Date.now() - 5000, savedAt: Date.now() - 60_000 };
  const done = await view('PracticeView', { pack: pack() }, '/s/geo/practice?set=set-a', { extra: { [key]: over } });
  assert.match(done, /00:00/);
  assert.match(done, /Time is up/);
});

test('practice, timed mode: a saved countdown of another length, or damaged, is ignored', async () => {
  const key = 'foma-portal-timer-v1:geo/set-a';
  const other = { status: 'paused', totalMs: 57 * 60_000, remainingMs: 20 * 60_000, endsAt: null, savedAt: Date.now() };
  assert.match(await view('PracticeView', { pack: pack() }, '/s/geo/practice?set=set-a', { extra: { [key]: other } }), /45:00/);
  assert.match(await view('PracticeView', { pack: pack() }, '/s/geo/practice?set=set-a', { extra: { [key]: '{broken' } }), /45:00/);
});

test('practice: the select shows the filter chosen in the address', async () => {
  const html = await view('PracticeView', { pack: pack() }, '/s/geo/practice?paper=P2&command=evaluate');
  assert.match(html, /<option value="P2" selected="">/);
  assert.match(html, /<option value="evaluate" selected="">/);
  assert.match(html, /<option value="" selected="">All<\/option>/, 'the topic select stays on "All"');
});

test('practice in Russian', async () => {
  const state = { version: 3, settings: { accessArrangements: { extraTime: true } } };
  const html = await view('PracticeView', { pack: pack() }, '/s/geo/practice?set=set-a', { lang: 'ru', state });
  assert.match(html, /Практика/);
  assert.match(html, /Условие q4/);
  assert.match(html, /Дополнительное время включено/);
  assert.match(html, /56:00/);
});

test('practice, timed mode: an essay paper reminds the student to type the answer, in both languages', async () => {
  const html = await view('PracticeView', { pack: pack() }, '/s/geo/practice?set=set-a');
  assert.match(html, /Practise typing your answer: in the exam you type \(access arrangement: typing\)\. No extra time\./);
  const ru = await view('PracticeView', { pack: pack() }, '/s/geo/practice?set=set-a', { lang: 'ru' });
  assert.match(ru, /Тренируйся печатать ответ: на экзамене ты печатаешь/);
});

// ---- glossary and flashcards

test('glossary, example subject: English term and definition come before the Russian ones, with syllabus; own notes are not shown as a source', async () => {
  // The text language is set to EN+RU, so both definitions are on the page (the EN-only and RU-only layouts are in lang-mode.test.mjs).
  const html = await page('GlossaryPage', '/s/:subject/terms', '/s/_example/terms', { extra: { 'foma-content-lang': 'en+ru' } });
  assert.ok(example.terms.length > 0, 'the example subject has terms');
  for (const t of example.terms) {
    assert.ok(html.includes(`Syllabus ${esc(t.syllabus)}`), `syllabus code of ${t.id}`);
    // 60 characters are enough to tell two definitions apart ("... that buyers ..." and "... that producers ...").
    assert.ok(inOrder(html, `>${esc(t.term.en)}<`, start(t.def.en, 60)), `the English term, then its definition (${t.id})`);
    assert.ok(inOrder(html, start(t.def.en, 60), start(t.def.ru, 60)), `the English definition before the Russian one (${t.id})`);
    assert.ok(html.includes(esc(t.term.ru)), `the Russian term of ${t.id}`);
    if (t.pitfall) assert.ok(html.includes(start(t.pitfall.en)), `the pitfall of ${t.id}`);
  }
  // The example terms have "own" sources: the internal note is not shown, and neither is the source line that holds it.
  assert.doesNotMatch(html, /Own notes/);
  assert.doesNotMatch(html, /Source(<!-- -->)?:/);
  assert.match(html, /Due today/);
});

test('glossary: the list is A-Z by the English term and shows the topics that use a term', async () => {
  const p = pack({ terms: [term('zebra'), term('apple'), term('a')] });
  const html = await view('GlossaryView', { pack: p }, '/s/geo/terms');
  assert.ok(inOrder(html, '>term a<', '>term apple<') && inOrder(html, '>term apple<', '>term zebra<'));
  assert.match(html, /In topics/);
  assert.match(html, /Topic t1/);
  assert.match(html, /Showing 3 of 3 terms/);
});

test('glossary: the counts at the top show the cards due, the new cards and the cards in each box', async () => {
  const tile = (label, value) => new RegExp(`${label}(<[^>]*>[^<]*</[^>]*>)*</dt><dd>${value}</dd>`);
  const later = await view('GlossaryView', { pack: pack() }, '/s/geo/terms', { state: { terms: { 'geo/a': { box: 2, due: '2099-01-01' } } } });
  assert.match(later, tile('Terms', 2));
  assert.match(later, tile('Due today', 0));
  assert.match(later, tile('New', 1));
  assert.match(later, tile('Box 2', 1));
  assert.match(later, tile('Box 1', 0));
  assert.match(later, /Up to 10 per session/);
  const overdue = await view('GlossaryView', { pack: pack() }, '/s/geo/terms', { state: { terms: { 'geo/a': { box: 1, due: '2026-01-01' } } } });
  assert.match(overdue, tile('Due today', 1));
  assert.match(overdue, tile('Box 1', 1));
});

test('flashcards: the first due card shows only the term; the definition waits for Space or a tap', async () => {
  const html = await view('GlossaryView', { pack: pack() }, '/s/geo/terms?mode=cards');
  assert.match(html, /Card 1 of 2/);
  assert.match(html, />term a</);
  assert.match(html, /Show the definition/);
  assert.ok(!html.includes('English definition of a'), 'the definition is hidden');
  assert.match(html, /Space/);
});

test('flashcards: only cards due today or earlier are shown', async () => {
  const state = { terms: { 'geo/a': { box: 2, due: '2099-01-01' } } };
  const html = await view('GlossaryView', { pack: pack() }, '/s/geo/terms?mode=cards', { state });
  assert.match(html, /Card 1 of 1/);
  assert.match(html, />term b</);
  assert.ok(!html.includes('>term a<'));
});

test('flashcards: with nothing due the page says so and names the next day', async () => {
  const state = { terms: { 'geo/a': { box: 2, due: '2099-01-05' }, 'geo/b': { box: 1, due: '2099-01-02' } } };
  const html = await view('GlossaryView', { pack: pack() }, '/s/geo/terms?mode=cards', { state });
  assert.match(html, /No cards left for today/);
  assert.match(html, /2099-01-02/);
});

test('glossary with an empty pack shows an empty state', async () => {
  assert.match(await view('GlossaryView', { pack: empty() }, '/s/geo/terms?mode=cards'), /No terms yet/);
  assert.match(await view('GlossaryView', { pack: empty() }, '/s/geo/terms'), /No terms yet/);
});

test('glossary in Russian', async () => {
  const html = await view('GlossaryView', { pack: pack() }, '/s/geo/terms', { lang: 'ru' });
  assert.match(html, /Глоссарий и карточки/);
  assert.match(html, /На сегодня/);
  assert.match(html, /Программа S\.a/);
});

test('glossary: cards that are due are announced in the list, with a button that starts them', async () => {
  const due = await view('GlossaryView', { pack: pack() }, '/s/geo/terms', { state: { terms: { 'geo/a': { box: 1, due: '2026-01-01' } } } });
  assert.match(due, /Cards due today: (<!-- -->)?1/);
  assert.match(due, /Start the flashcards/);
  const none = await view('GlossaryView', { pack: pack() }, '/s/geo/terms');
  assert.ok(!none.includes('Start the flashcards'), 'new cards are not due, so there is no notice');
  const inDeck = await view('GlossaryView', { pack: pack() }, '/s/geo/terms?mode=cards', { state: { terms: { 'geo/a': { box: 1, due: '2026-01-01' } } } });
  assert.ok(!inDeck.includes('Start the flashcards'), 'no notice inside the flashcards');
});

test('flashcards: a session has at most 10 new cards, however many terms there are', async () => {
  const many = Array.from({ length: 214 }, (_, index) => term(`n${String(index).padStart(3, '0')}`));
  const html = await view('GlossaryView', { pack: pack({ terms: many }) }, '/s/geo/terms?mode=cards');
  assert.match(html, /Card 1 of 10/);
  assert.match(html, />term n000</);
  const tiles = await view('GlossaryView', { pack: pack({ terms: many }) }, '/s/geo/terms');
  assert.match(tiles, /New(<[^>]*>[^<]*<\/[^>]*>)*<\/dt><dd>214<\/dd>/);
});

test('flashcards: every due card comes before the new ones', async () => {
  const many = Array.from({ length: 30 }, (_, index) => term(`n${String(index).padStart(2, '0')}`));
  const state = { terms: { 'geo/n20': { box: 1, due: '2026-01-02' }, 'geo/n05': { box: 3, due: '2026-01-01' } } };
  const html = await view('GlossaryView', { pack: pack({ terms: many }) }, '/s/geo/terms?mode=cards', { state });
  assert.match(html, /Card 1 of 12/, 'two due cards and ten new ones');
  assert.match(html, />term n05</, 'the longest overdue card first');
});

// ---- formulas

test('formulas, example subject: KaTeX, name, meaning, when, units, example and the booklet badge', async () => {
  const html = await page('FormulasPage', '/s/:subject/formulas', '/s/_example/formulas');
  assert.ok(example.formulas.length > 0, 'the example subject has formulas');
  assert.match(html, /class="katex/);
  for (const f of example.formulas) {
    assert.ok(html.includes(esc(f.name.en)), `name of ${f.id}`);
    assert.ok(html.includes(start(f.meaning.en)), `meaning of ${f.id}`);
    assert.ok(html.includes(start(f.when.en)), `when of ${f.id}`);
    if (f.units) assert.ok(html.includes(esc(f.units)), `units of ${f.id}`);
    if (f.example) assert.ok(html.includes(start(f.example.en, 12)), `example of ${f.id}`);
    if (f.inBooklet) assert.match(html, /In the formula booklet/);
  }
});

test('formulas: "booklet only" keeps the booklet formulas', async () => {
  const all = await view('FormulasView', { pack: pack() }, '/s/geo/formulas');
  for (const id of ['f1', 'f2', 'f3']) assert.ok(all.includes(`Formula ${id}`), id);
  assert.match(all, /Showing 3 of 3 formulas/);
  const booklet = await view('FormulasView', { pack: pack() }, '/s/geo/formulas?booklet=1');
  assert.ok(booklet.includes('Formula f1'));
  assert.ok(!booklet.includes('Formula f2') && !booklet.includes('Formula f3'));
  assert.match(booklet, /Showing 1 of 3 formulas/);
  const none = await view('FormulasView', { pack: pack({ formulas: [formula('f2', false)] }) }, '/s/geo/formulas?booklet=1');
  assert.match(none, /No formula from the booklet/);
});

test('a formula card: the booklet badge for a formula in the booklet, the learn-it badge outside it, none without the flag', async () => {
  const inside = await view('FormulaCard', { formula: formula('a', true), lang: 'en' }, '/');
  assert.match(inside, /In the formula booklet/);
  assert.ok(!inside.includes('Not in the booklet'));
  const outside = await view('FormulaCard', { formula: formula('b', false), lang: 'en' }, '/');
  assert.match(outside, /Not in the booklet — learn it/);
  assert.ok(!outside.includes('In the formula booklet'));
  const unflagged = await view('FormulaCard', { formula: formula('c'), lang: 'en' }, '/');
  assert.ok(!unflagged.includes('In the formula booklet') && !unflagged.includes('Not in the booklet'));
  const ruInside = await view('FormulaCard', { formula: formula('a', true), lang: 'ru' }, '/', { lang: 'ru' });
  assert.match(ruInside, /Есть в формульной книжке/);
  const ruOutside = await view('FormulaCard', { formula: formula('b', false), lang: 'ru' }, '/', { lang: 'ru' });
  assert.match(ruOutside, /Нет в книжке — выучить/);
});

// ---- inside a topic: a map or a simulation that waits or fails keeps the page's one heading

test('a map or a simulation in a topic: the wait is a status line, and a failed wait is an alert with no second heading', async () => {
  const wait = await view('InlineLoadWait', { label: 'Loading the map' }, '/');
  assert.match(wait, /role="status"/);
  assert.ok(wait.includes('Loading the map'));
  assert.ok(!wait.includes('<h1'));
  const failed = await view('InlineLoadError', { onRetry: () => {} }, '/');
  assert.match(failed, /role="alert"/);
  assert.match(failed, /This did not load/);
  assert.match(failed, /Try again/);
  assert.ok(!failed.includes('<h1'), 'no second h1 inside a topic');
  const whole = await view('SubjectLoadError', { cause: new Error('load timeout') }, '/');
  assert.match(whole, /<h1/, 'the whole-page error keeps its heading');
});

// ---- past papers: the typing reminder above the paper's own timer

test('a past paper timer: the typing reminder for an essay paper, none for maths', async () => {
  const paper = (subject, id) => ({
    id: `${subject}-${id}`, subject, paper: id, session: 'M24', level: 'HL', files: [], minutes: 105, marks: 50, items: [],
  });
  const props = { topics: [], progress: undefined, extraTime: false, onScore: () => {}, onSolved: () => {} };
  const essay = await view('PastPaperCard', { ...props, subject: 'eng', paper: paper('eng', 'P2') }, '/');
  assert.ok(essay.includes('Practise typing your answer'));
  const maths = await view('PastPaperCard', { ...props, subject: 'math', paper: paper('math', 'P1') }, '/');
  assert.ok(!maths.includes('Practise typing your answer'));
});

test('formulas: links to the topics that use a formula; an empty pack gives an empty state', async () => {
  const html = await view('FormulasView', { pack: pack() }, '/s/geo/formulas');
  assert.match(html, /Used in topics/);
  assert.match(html, /Topic t1/);
  assert.match(await view('FormulasView', { pack: empty() }, '/s/geo/formulas'), /<h2 id="[^"]*">No formulas<\/h2>/);
});

test('formulas: a formula that does not compile does not crash the page', async () => {
  const broken = { ...formula('bad', true), tex: '\\frac{1' };
  const html = await view('FormulasView', { pack: pack({ formulas: [broken] }) }, '/s/geo/formulas');
  assert.match(html, /Formula bad/);
});

// ---- simulations

test('simulations: the example subject is hidden unless the address says ?include=example', async () => {
  const ids = Object.keys(example.sims);
  assert.ok(ids.length > 0, 'the example subject has a simulation');
  const hidden = await page('SimsPage', '/sims', '/sims');
  const shown = await page('SimsPage', '/sims', '/sims?include=example');
  for (const id of ids) {
    assert.ok(!hidden.includes(id), `${id} is hidden by default`);
    assert.ok(shown.includes(id), `${id} is listed with ?include=example`);
  }
  const using = example.topics.find(item => (item.sims ?? []).some(id => ids.includes(id)));
  if (using) assert.ok(shown.includes(esc(using.title.en)), 'the topic that uses it is linked');
});

test('simulations: grouped by subject, with the id, the subject and links to the topics', async () => {
  const econ = pack({ meta: { id: 'econ', title: L('Economics HL'), level: 'HL', color: 'amber' }, sims: { 'econ.market': loader }, topics: [topic('markets', 1, { sims: ['econ.market'] })] });
  const html = await view('SimsView', { packs: [pack(), econ] }, '/sims');
  assert.match(html, /geo\.river/);
  assert.match(html, /econ\.market/);
  assert.match(html, /Geography SL/);
  assert.match(html, /Economics HL/);
  assert.match(html, /Topic markets/);
  assert.match(html, /Simulations: (<!-- -->)?2/);
});

test('simulations: no simulations gives an empty state', async () => {
  assert.match(await view('SimsView', { packs: [empty()] }, '/sims'), /No simulations yet/);
  assert.match(await view('SimsView', { packs: [] }, '/sims'), /No simulations yet/);
});

test('simulations: ?sim= opens one, an unknown id is reported', async () => {
  const open = await view('SimsView', { packs: [pack()] }, '/sims?sim=geo.river');
  assert.match(open, /Simulation: (<!-- -->)?geo\.river/);
  assert.match(open, /Close the simulation/);
  const missing = await view('SimsView', { packs: [pack()] }, '/sims?sim=geo.nope');
  assert.match(missing, /There is no simulation/);
});

// ---- report

test('report: the text has the date, one block per subject and counts only', async () => {
  const state = {
    topics: { 'geo/t1': { done: '2026-10-12', rag: 'green' }, 'geo/t2': { rag: 'red' } },
    questions: { 'geo/q1': { rating: 'right', at: '2026-10-12' }, 'geo/q2': { rating: 'wrong', at: '2026-10-12' } },
    terms: { 'geo/a': { box: 3, due: '2026-10-20' } },
  };
  const html = await view('ReportView', { packs: [pack(), empty()] }, '/report', { state });
  assert.match(html, /Progress report/);
  assert.match(html, /Date: \d{4}-\d{2}-\d{2} \(Asia\/Dubai\)/);
  assert.match(html, /Topics done: 1 of 2/);
  assert.match(html, /Confidence \(RAG\): red 1, amber 0, green 1, not rated 0/);
  assert.match(html, /Questions rated: 2 of 4 \(right 1, partial 0, wrong 1\)/);
  assert.match(html, /box 3: 1/);
  assert.match(html, /1\. Topic t1/);
  assert.match(html, /Copy the report/);
  assert.match(html, /readOnly|readonly/);
});

test('report in Russian is written in Russian, with Russian topic titles', async () => {
  const state = { topics: { 'geo/t1': { done: '2026-10-12' } } };
  const html = await view('ReportView', { packs: [pack()] }, '/report', { lang: 'ru', state });
  assert.match(html, /Отчёт о прогрессе/);
  assert.match(html, /Пройдено тем: 1 из 2/);
  assert.match(html, /1\. Тема t1/);
  assert.match(html, /Скопировать отчёт/);
});

test('report page: the real subjects draw without a crash', async () => {
  const html = await page('ReportPage', '/report', '/report');
  assert.match(html, /Progress report/);
});
