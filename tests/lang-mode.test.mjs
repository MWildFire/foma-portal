import test, { after, before } from 'node:test';
import assert from 'node:assert/strict';
import { join } from 'node:path';
import { Writable } from 'node:stream';
import { createServer } from 'vite';
import { createElement } from 'react';
import { renderToPipeableStream, renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { primaryTermIn, shownLangs, termLabelIn, textsIn } from '../src/lib/text.ts';
import { showsSource, termLabel, termLabelRu } from '../src/lib/topic-text.ts';

// The text language (EN, RU or both) decides which definitions, labels and examples of a term are drawn. The helpers
// are checked directly. The glossary, the flashcards and a term card are drawn once on the server in each mode, with
// the UI in English, so that any Cyrillic on the page is Russian content.

const L = (en, ru, fr) => ({ en, ru, ...(fr === undefined ? {} : { fr }) });
const CYRILLIC = /[Ѐ-ӿ]/;

// ---- the helpers

test('shownLangs: EN shows English, RU shows Russian, EN+RU both, English first; no mode shows both', () => {
  assert.deepEqual(shownLangs('en'), ['en']);
  assert.deepEqual(shownLangs('ru'), ['ru']);
  assert.deepEqual(shownLangs('en+ru'), ['en', 'ru']);
  assert.deepEqual(shownLangs(undefined), ['en', 'ru']);
});

test('textsIn gives the texts of the shown languages, English first, and leaves out blank ones', () => {
  const text = L('Example in English.', 'Пример по-русски.');
  assert.deepEqual(textsIn(text, 'en'), [{ lang: 'en', text: 'Example in English.' }]);
  assert.deepEqual(textsIn(text, 'ru'), [{ lang: 'ru', text: 'Пример по-русски.' }]);
  assert.deepEqual(textsIn(text, 'en+ru'), [
    { lang: 'en', text: 'Example in English.' },
    { lang: 'ru', text: 'Пример по-русски.' },
  ]);
  assert.deepEqual(textsIn(L('Only English.', '   '), 'en+ru'), [{ lang: 'en', text: 'Only English.' }]);
  assert.deepEqual(textsIn(undefined, 'en+ru'), []);
  assert.deepEqual(textsIn(null, 'ru'), []);
});

test('termLabelIn: the English term in EN, the Russian word with the English one in brackets in RU, English first in EN+RU', () => {
  const term = { en: 'demand', ru: 'спрос (demand)' };
  assert.equal(termLabelIn(term, 'en'), 'demand');
  assert.equal(termLabelIn(term, 'ru'), 'спрос (demand)');
  assert.equal(termLabelIn(term, 'en+ru'), 'demand (спрос)');
  assert.equal(termLabelIn(term), 'demand (спрос)');
  assert.equal(termLabelIn({ en: 'demand', ru: 'спрос' }, 'ru'), 'спрос (demand)');
  assert.equal(termLabelIn({ en: 'demand', ru: 'demand' }, 'ru'), 'demand', 'a Russian term that adds nothing is not repeated');
  assert.equal(termLabelIn({ en: 'demand', ru: '' }, 'ru'), 'demand');
});

test('termLabelRu follows the copy rules of termLabel: a copy of the English term in brackets is not doubled', () => {
  const gdp = { en: 'GDP per capita', ru: 'ВВП на душу населения (GDP per capita)' };
  assert.equal(termLabelRu(gdp), 'ВВП на душу населения (GDP per capita)');
  assert.equal(termLabel(gdp), 'GDP per capita (ВВП на душу населения)');
  assert.equal(termLabelRu({ en: 'demand', ru: 'спрос ( Demand )' }), 'спрос (demand)');
});

test('primaryTermIn: the English term for EN and EN+RU, the Russian label for RU', () => {
  const term = { en: 'demand', ru: 'спрос' };
  assert.deepEqual(primaryTermIn(term, 'en'), { lang: 'en', text: 'demand' });
  assert.deepEqual(primaryTermIn(term, 'en+ru'), { lang: 'en', text: 'demand' });
  assert.deepEqual(primaryTermIn(term, 'ru'), { lang: 'ru', text: 'спрос (demand)' });
});

test('an own-notes source is not shown; the other kinds are', () => {
  assert.equal(showsSource({ kind: 'own' }), false);
  assert.equal(showsSource({ kind: 'textbook' }), true);
  assert.equal(showsSource({ kind: 'thinkib' }), true);
});

// ---- drawing: the glossary, the flashcards and a term card

const root = join(import.meta.dirname, '..');
let server;
let i18n;
const loaded = {};

before(async () => {
  server = await createServer({
    root,
    appType: 'custom',
    // No port, no web socket, no file watcher: the server only compiles modules for this test.
    server: { middlewareMode: true, hmr: false, ws: false, watch: null },
    optimizeDeps: { noDiscovery: true, include: [] },
    logLevel: 'silent',
    ssr: { resolve: { conditions: ['module-sync', 'module', 'node', 'development|production'], externalConditions: ['node', 'module-sync'] } },
  });
  i18n = (await server.ssrLoadModule('/src/i18n/index.ts')).default;
  await new Promise(resolve => setTimeout(resolve, 20));
  loaded.GlossaryView = (await server.ssrLoadModule('/src/components/glossary/GlossaryView.tsx')).GlossaryView;
  loaded.CardBack = (await server.ssrLoadModule('/src/components/glossary/FlashcardDeck.tsx')).CardBack;
  loaded.TermCard = (await server.ssrLoadModule('/src/components/ui/TermCard.tsx')).TermCard;
  loaded.Sim = (await server.ssrLoadModule('/src/components/mdx/Sim.tsx')).Sim;
  loaded.TopicContextProvider = (await server.ssrLoadModule('/src/components/mdx/context.tsx')).TopicContextProvider;
  loaded.GlossaryEntry = (await server.ssrLoadModule('/src/components/glossary/GlossaryEntry.tsx')).GlossaryEntry;
  const sourceList = await server.ssrLoadModule('/src/components/content/SourceList.tsx');
  loaded.SourceList = sourceList.SourceList;
  loaded.SourceItem = sourceList.SourceItem;
});

after(async () => {
  await server?.close();
});

// The localStorage values for the time of one draw (the content language and the progress are read from it).
function withStorage(values, drawIt) {
  const store = new Map(Object.entries(values));
  globalThis.window = {
    localStorage: { getItem: key => store.get(key) ?? null, setItem: (key, value) => store.set(key, value) },
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

// `content` is the stored text language (foma-content-lang); without it the text follows the UI language.
async function draw(element, url, { lang = 'en', content } = {}) {
  await i18n.changeLanguage(lang);
  const values = content ? { 'foma-content-lang': content } : {};
  return withStorage(values, () => renderToString(createElement(MemoryRouter, { initialEntries: [url] }, element)));
}

// Like draw, but it waits for the lazy parts (a simulation is loaded when it is first shown), which renderToString does not.
function drawWhenReady(element) {
  return new Promise((resolve, reject) => {
    let html = '';
    const sink = new Writable({
      write(chunk, _encoding, done) {
        html += chunk;
        done();
      },
    });
    sink.on('finish', () => resolve(html));
    sink.on('error', reject);
    const { pipe } = renderToPipeableStream(element, {
      onAllReady() {
        pipe(sink);
      },
      onShellError: reject,
    });
  });
}

const topic = (id, termIds) => ({
  id, subject: 'econ', code: '2.2', title: L('Demand', 'Спрос'), papers: ['P1'], order: 1, minutes: 30, priority: 1,
  inMockScope: 'yes', outcomes: [], termIds, questionIds: [], sources: [],
});
const term = (id, extra = {}) => ({
  id,
  term: L('demand', 'спрос'),
  def: L('The quantity buyers want to buy at each price.', 'Количество, которое покупатели хотят купить при каждой цене.'),
  syllabus: '2.2',
  papers: ['P1'],
  src: { kind: 'textbook', title: 'Course book', locator: 'ch. 2, p. 40' },
  ...extra,
});
const pack = terms => ({
  meta: { id: 'econ', title: L('Economics', 'Экономика'), level: 'HL', color: 'slate' },
  syllabus: [], topics: [topic('t1', terms.map(item => item.id))], topicBodies: {}, terms, formulas: [], questions: [], cases: [], papers: [], sims: {},
});
const glossary = (terms, url = '/s/econ/terms', options) => draw(createElement(loaded.GlossaryView, { pack: pack(terms) }), url, options);

const EN_DEF = 'The quantity buyers want to buy at each price.';
const RU_DEF = 'Количество, которое покупатели хотят купить при каждой цене.';
const EXAMPLE = { example: L('A price rise cuts demand.', 'Рост цены снижает спрос.') };

test('glossary, EN: English only, with no Cyrillic on the page', async () => {
  const html = await glossary([term('demand', EXAMPLE)], '/s/econ/terms', { content: 'en' });
  assert.ok(html.includes(EN_DEF));
  assert.ok(html.includes('A price rise cuts demand.'));
  assert.ok(!CYRILLIC.test(html), 'the UI is in English, so the page has no Russian at all');
  assert.match(html, /<h3 id="[^"]*" class="gl-entry__term" lang="en">demand<\/h3>/);
});

test('glossary, RU: the Russian term with the English one in brackets, and the Russian definition only', async () => {
  const html = await glossary([term('demand', EXAMPLE)], '/s/econ/terms', { content: 'ru' });
  assert.match(html, /<h3 id="[^"]*" class="gl-entry__term" lang="ru">спрос \(demand\)<\/h3>/);
  assert.ok(html.includes(RU_DEF));
  assert.ok(html.includes('Рост цены снижает спрос.'));
  assert.ok(!html.includes(EN_DEF), 'no English definition');
  assert.ok(!html.includes('A price rise cuts demand.'), 'no English example');
});

test('glossary, EN+RU: both definitions, English first, with the Russian term in bold under the English one', async () => {
  const html = await glossary([term('demand', EXAMPLE)], '/s/econ/terms', { content: 'en+ru' });
  assert.ok(html.indexOf(EN_DEF) !== -1 && html.indexOf(EN_DEF) < html.indexOf(RU_DEF));
  assert.match(html, /<strong>спрос<\/strong> — (<!-- -->)?Количество/);
  assert.ok(html.includes('A price rise cuts demand.') && html.includes('Рост цены снижает спрос.'));
});

test('the text language is the content choice, not the UI language: UI in Russian with the content in EN shows English', async () => {
  const html = await glossary([term('demand')], '/s/econ/terms', { lang: 'ru', content: 'en' });
  assert.ok(html.includes(EN_DEF));
  assert.ok(!html.includes(RU_DEF));
});

test('without a stored choice the text follows the UI language', async () => {
  assert.ok((await glossary([term('demand')], '/s/econ/terms', { lang: 'ru' })).includes(RU_DEF));
  assert.ok(!(await glossary([term('demand')], '/s/econ/terms', { lang: 'en' })).includes(RU_DEF));
});

test('an own-notes source is not shown in the glossary, and the source line that would hold it is left out', async () => {
  const own = term('demand', { src: { kind: 'own', title: 'Internal note for the reviewer' } });
  const html = await glossary([own], '/s/econ/terms', { content: 'en+ru' });
  assert.ok(!html.includes('Internal note'));
  assert.ok(!html.includes('Own notes'));
  assert.doesNotMatch(html, /Source(<!-- -->)?:/);
  const textbook = await glossary([term('demand')], '/s/econ/terms', { content: 'en+ru' });
  assert.match(textbook, /Source(<!-- -->)?:/, 'a textbook source is still shown');
});

test('flashcards, RU: the front has the Russian label, and the back does not repeat it', async () => {
  const front = await glossary([term('demand')], '/s/econ/terms?mode=cards', { content: 'ru' });
  assert.match(front, /<p class="gl-card__term" lang="ru">спрос \(demand\)<\/p>/);
  const back = await draw(createElement(loaded.CardBack, { term: term('demand'), mode: 'ru' }), '/');
  assert.ok(back.includes(RU_DEF));
  assert.ok(!back.includes('<strong>спрос</strong>'), 'the Russian name is on the front already');
  assert.ok(!back.includes(EN_DEF));
});

test('flashcards, EN+RU: the back has both definitions and the Russian name, which is not on the front', async () => {
  const back = await draw(createElement(loaded.CardBack, { term: term('demand'), mode: 'en+ru' }), '/');
  assert.ok(back.includes(EN_DEF) && back.includes(RU_DEF));
  assert.ok(back.includes('<strong>спрос</strong>'));
  const front = await glossary([term('demand')], '/s/econ/terms?mode=cards', { content: 'en+ru' });
  assert.match(front, /<p class="gl-card__term" lang="en">demand<\/p>/);
});

test('a French card keeps its English and Russian names on the back, in every mode', async () => {
  const french = term('demand', { term: L('demand', 'спрос', 'la demande') });
  for (const mode of ['en', 'ru', 'en+ru']) {
    const back = await draw(createElement(loaded.CardBack, { term: french, mode }), '/');
    assert.ok(!back.includes('lang="fr"'), `the French term stays on the front (${mode})`);
  }
  const both = await draw(createElement(loaded.CardBack, { term: french, mode: 'en+ru' }), '/');
  assert.ok(both.includes('<strong>demand</strong>') && both.includes('<strong>спрос</strong>'));
});

test('term card: the body language decides the text; without a language both show, English first', async () => {
  const en = await draw(createElement(loaded.TermCard, { term: term('demand', EXAMPLE), lang: 'en' }), '/');
  assert.ok(en.includes('>demand</span>') && en.includes(EN_DEF));
  assert.ok(!en.includes(RU_DEF) && !CYRILLIC.test(en));
  const ru = await draw(createElement(loaded.TermCard, { term: term('demand', EXAMPLE), lang: 'ru' }), '/');
  assert.ok(ru.includes('>спрос (demand)</span>') && ru.includes(RU_DEF));
  assert.ok(!ru.includes(EN_DEF) && !ru.includes('A price rise cuts demand.'));
  const both = await draw(createElement(loaded.TermCard, { term: term('demand') }), '/');
  assert.ok(both.includes('>demand (спрос)</span>') && both.includes(EN_DEF) && both.includes(RU_DEF));
});

test('term card: an own-notes source is left out', async () => {
  const html = await draw(createElement(loaded.TermCard, { term: term('demand', { src: { kind: 'own', title: 'Internal note' } }), lang: 'en' }), '/');
  assert.ok(!html.includes('Internal note'));
  assert.doesNotMatch(html, /Source(<!-- -->)?:/);
});

// ---- a simulation: the language of the body it sits in

test('a simulation gets the language of the body it sits in, not the UI language', async () => {
  const Echo = ({ lang }) => createElement('span', null, `sim-lang:${lang}`);
  const simPack = { meta: { id: 'econ' }, sims: { 'econ.echo': async () => ({ default: Echo }) } };
  const drawSim = (contentLang, uiLang) => drawWhenReady(createElement(loaded.TopicContextProvider, {
    value: { subjectId: 'econ', topicId: 't1', pack: simPack, contentLang, uiLang },
  }, createElement(loaded.Sim, { id: 'econ.echo' })));
  assert.match(await drawSim('en', 'ru'), /sim-lang:en/, 'an English body with the UI in Russian: English simulation');
  assert.match(await drawSim('ru', 'en'), /sim-lang:ru/, 'a Russian body with the UI in English: Russian simulation');
});

// ---- the English text with the UI in Russian: no Russian on a term card or in a glossary entry; no own-notes rows

test('an English term card and glossary entry have no Russian, even with the UI in Russian', async () => {
  const card = await draw(createElement(loaded.TermCard, { term: term('demand', EXAMPLE), lang: 'en' }), '/', { lang: 'ru' });
  assert.ok(card.includes(EN_DEF) && card.includes('A price rise cuts demand.'));
  assert.ok(!CYRILLIC.test(card), 'the card follows the body language, not the UI language');
  const entry = await draw(createElement(loaded.GlossaryEntry, { term: term('demand', EXAMPLE), mode: 'en', subject: 'econ', topics: [] }), '/', { lang: 'ru' });
  assert.ok(entry.includes(EN_DEF) && entry.includes('A price rise cuts demand.'));
  assert.ok(!CYRILLIC.test(entry), 'the entry follows the mode, not the UI language');
});

test('an own-notes source is not drawn by a source list or a source item, in any language', async () => {
  const own = { kind: 'own', title: 'Internal note for the reviewer' };
  const textbook = { kind: 'textbook', title: 'Course book', locator: 'ch. 2, p. 40' };
  const list = await draw(createElement(loaded.SourceList, { sources: [own, textbook], lang: 'en' }), '/', { lang: 'ru' });
  assert.ok(list.includes('Course book'), 'a textbook source is still shown');
  assert.ok(!list.includes('Internal note') && !list.includes('Own notes'), 'the own-notes row is not drawn');
  assert.equal(await draw(createElement(loaded.SourceItem, { source: own, lang: 'en' }), '/'), '', 'a source item for own notes draws nothing');
  assert.equal(await draw(createElement(loaded.SourceList, { sources: [own] }), '/'), '', 'with only own notes the list draws nothing');
});
