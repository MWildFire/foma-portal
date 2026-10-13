import test, { after, before } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { createServer } from 'vite';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { frenchOf, pickText } from '../src/lib/text.ts';
import { NO_TERM_FILTERS, filterTerms } from '../src/components/glossary/terms.ts';

// The optional French text (`fr`) of an L object: the helper that picks it, the component that draws it, and every
// place that shows it (questions, terms, flashcards, the glossary list, topic titles, the glossary search). Pages are
// loaded through Vite and drawn once on the server, the way tests/study-render.test.mjs does it. Clicks do not run
// here, so what sits behind a button (the model answer, the back of a flashcard) is covered by its own component or
// by reading the source, and the tests below say so where it matters.
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
  example = (await server.ssrLoadModule('/src/content/registry.ts')).getSubject('_example');
  await new Promise(resolve => setTimeout(resolve, 20));
  const files = {
    FrenchText: '/src/components/ui/FrenchText.tsx',
    TermCard: '/src/components/ui/TermCard.tsx',
    TopicContextProvider: '/src/components/mdx/context.tsx',
    Question: '/src/components/mdx/Question.tsx',
    PracticeView: '/src/components/practice/PracticeView.tsx',
    GlossaryView: '/src/components/glossary/GlossaryView.tsx',
    CardBack: '/src/components/glossary/FlashcardDeck.tsx',
    TopicList: '/src/components/subject/TopicList.tsx',
    TopicPage: '/src/pages/TopicPage.tsx',
  };
  for (const [name, path] of Object.entries(files)) loaded[name] = (await server.ssrLoadModule(path))[name];
});

after(async () => {
  await server?.close();
});

// ---- drawing

// A saved progress state in localStorage for the time of one draw (storage.ts reads window.localStorage).
function withStorage(state, drawIt) {
  const values = new Map(state ? [['foma-portal-v1', JSON.stringify(state)]] : []);
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

async function draw(element, url = '/', { lang = 'en', state, pattern } = {}) {
  await i18n.changeLanguage(lang);
  const inner = pattern ? createElement(Routes, null, createElement(Route, { path: pattern, element })) : element;
  return withStorage(state, () => renderToString(createElement(MemoryRouter, { initialEntries: [url] }, inner)));
}

const view = (name, props, url, options) => draw(createElement(loaded[name], props), url, options);

// ---- reading the page

// A text object the way the content files write it: `fr` is a key only when the text has a French version.
const L = (en, ru, fr) => ({ en, ru: ru ?? `${en} (по-русски)`, ...(fr === undefined ? {} : { fr }) });
const stripTags = html => html.replace(/<[^>]*>/g, '');
// The texts of the elements that carry lang="fr", in page order, with their tags removed.
const frenchParts = html => [...html.matchAll(/<(span|div|p) [^>]*\blang="fr"[^>]*>(.*?)<\/\1>/g)].map(match => stripTags(match[2]));
const inOrder = (html, first, second) => html.indexOf(first) !== -1 && html.indexOf(first) < html.indexOf(second);

// ---- a small French subject to draw

const topic = (id, order, extra = {}) => ({
  id, subject: 'fr', code: `T.${order}`, title: L(`Topic ${id}`, `Тема ${id}`), papers: ['P1'], order, minutes: 30, priority: 1,
  inMockScope: 'yes', outcomes: [], termIds: [], questionIds: [], sources: [], ...extra,
});
const question = (id, extra = {}) => ({
  id, subject: 'fr', topicIds: ['t1'], paper: 'P1', marks: 10, command: 'Write', origin: 'original',
  prompt: L(`Prompt of ${id}`, `Условие ${id}`),
  markscheme: L(`Markscheme of ${id}`, `Критерии ${id}`),
  ...extra,
});
const term = (id, extra = {}) => ({
  id, term: L(`term ${id}`, `термин ${id}`), def: L(`English definition of ${id}`, `Русское определение ${id}`),
  syllabus: `S.${id}`, papers: ['P1'], src: { kind: 'textbook', title: 'Course book', locator: 'ch. 1, p. 10' }, ...extra,
});
const pack = (overrides = {}) => ({
  meta: { id: 'fr', title: L('French B SL', 'Французский B SL'), level: 'SL', color: 'teal' },
  syllabus: [], topics: [topic('t1', 1), topic('t2', 2)], topicBodies: {}, terms: [], formulas: [],
  questions: [], cases: [], papers: [], sims: {},
  ...overrides,
});

// A question with French text in the three places that show it. The model answer sits behind a button, so a server
// render never shows it; the other two are drawn as soon as the page opens.
const frenchQuestion = () => question('fq1', {
  stimulus: L('You read this message.', 'Вы прочли сообщение.', 'Salut ! Tu viens samedi ?'),
  prompt: L('Write a reply.', 'Напишите ответ.', 'Écris une réponse à Paul.'),
  model: L('Hi Paul, yes!', 'Привет, Поль, да!', 'Salut Paul, oui !'),
});
const FRENCH_STIMULUS = 'Salut ! Tu viens samedi ?';
const FRENCH_PROMPT = 'Écris une réponse à Paul.';

// ---- the helper

test('frenchOf returns the French text of an L object, and nothing when there is none', () => {
  assert.equal(frenchOf(L('to be', 'быть', 'être')), 'être');
  assert.equal(frenchOf(L('to be', 'быть')), undefined, 'no fr key');
  assert.equal(frenchOf(undefined), undefined);
  assert.equal(frenchOf(null), undefined);
});

test('frenchOf treats a blank or damaged fr as none, and trims the text it returns', () => {
  assert.equal(frenchOf(L('a', 'б', '')), undefined);
  assert.equal(frenchOf(L('a', 'б', '  \n ')), undefined);
  assert.equal(frenchOf({ en: 'a', ru: 'б', fr: undefined }), undefined);
  assert.equal(frenchOf({ en: 'a', ru: 'б', fr: 5 }), undefined, 'not a string');
  assert.equal(frenchOf(L('a', 'б', '  l’école \n')), 'l’école');
});

test('pickText still follows the UI language only: French never replaces the English or Russian text', () => {
  const text = L('school', 'школа', 'école');
  assert.equal(pickText(text, 'en'), 'school');
  assert.equal(pickText(text, 'en-GB'), 'school');
  assert.equal(pickText(text, 'ru'), 'школа');
  assert.equal(pickText(text, 'fr'), 'school', 'the UI has no French; a French browser gets English');
});

// ---- the component

test('FrenchText, one line: its own element with lang="fr" and the French text', async () => {
  const html = await view('FrenchText', { text: L('to be', 'быть', 'être') });
  assert.equal(html, '<span lang="fr" class="foma-fr">être</span>');
});

test('FrenchText, one line: extra classes are added to the element, and inline Markdown is read like the English text', async () => {
  const html = await view('FrenchText', { text: L('a', 'б', 'le *mot*'), className: 'foma-term__label' });
  assert.equal(html, '<span lang="fr" class="foma-fr foma-term__label">le <em>mot</em></span>');
  const plain = await view('FrenchText', { text: L('a', 'б', 'le mot') });
  assert.equal(plain, '<span lang="fr" class="foma-fr">le mot</span>', 'plain text is the same markup as before');
  const escaped = await view('FrenchText', { text: L('a', 'б', "l'été <b>") });
  assert.equal(frenchParts(escaped)[0], "l&#x27;été &lt;b&gt;", 'React escapes it; no markup gets in');
});

test('FrenchText, rich: Markdown blocks inside an element with lang="fr"', async () => {
  const html = await view('FrenchText', { text: L('a', 'б', 'Un **mot** important.\n\n- Premier\n- Second'), rich: true, className: 'study-rich' });
  assert.match(html, /^<div lang="fr" class="foma-fr foma-fr--rich"><div class="rich-text study-rich">/);
  assert.match(html, /<strong>mot<\/strong>/);
  assert.match(html, /<li>Premier<\/li>/);
  assert.match(html, /<li>Second<\/li>/);
});

test('FrenchText draws nothing without a French text, whatever the mode', async () => {
  for (const text of [L('to be', 'быть'), L('to be', 'быть', ''), L('to be', 'быть', '   '), undefined]) {
    assert.equal(await view('FrenchText', { text }), '');
    assert.equal(await view('FrenchText', { text, rich: true, className: 'study-rich' }), '');
  }
});

// ---- questions

test('practice: a question with French text shows the French stimulus and prompt before the English ones', async () => {
  const html = await view('PracticeView', { pack: pack({ questions: [frenchQuestion()] }) }, '/s/fr/practice');
  assert.deepEqual(frenchParts(html), [FRENCH_STIMULUS, FRENCH_PROMPT], 'two French elements, in page order');
  assert.ok(inOrder(html, FRENCH_STIMULUS, 'You read this message.'), 'French stimulus, then English');
  assert.ok(inOrder(html, 'You read this message.', FRENCH_PROMPT), 'the stimulus comes before the prompt');
  assert.ok(inOrder(html, FRENCH_PROMPT, 'Write a reply.'), 'French prompt, then English');
  assert.ok(!html.includes('Salut Paul, oui'), 'the model answer waits behind the button');
});

test('practice in Russian: the French text still comes first, the Russian text follows it', async () => {
  const html = await view('PracticeView', { pack: pack({ questions: [frenchQuestion()] }) }, '/s/fr/practice', { lang: 'ru' });
  assert.deepEqual(frenchParts(html), [FRENCH_STIMULUS, FRENCH_PROMPT]);
  assert.ok(inOrder(html, FRENCH_STIMULUS, 'Вы прочли сообщение.'));
  assert.ok(inOrder(html, FRENCH_PROMPT, 'Напишите ответ.'));
  assert.ok(!html.includes('Write a reply.'), 'English is not shown with a Russian UI, as before');
});

test('practice: a question without French text is drawn as before, with no French element', async () => {
  const html = await view('PracticeView', { pack: pack({ questions: [question('q1')] }) }, '/s/fr/practice');
  assert.ok(html.includes('<div class="rich-text study-rich study-q__prompt"><p class="my-2 first:mt-0 last:mb-0">Prompt of q1</p></div>'));
  assert.ok(!html.includes('lang="fr"'));
  assert.ok(!html.includes('foma-fr'));
});

test('practice: only the question that has French text gets a French element', async () => {
  const html = await view('PracticeView', { pack: pack({ questions: [question('q1'), frenchQuestion(), question('q2')] }) }, '/s/fr/practice');
  assert.deepEqual(frenchParts(html), [FRENCH_STIMULUS, FRENCH_PROMPT]);
  assert.ok(inOrder(html, 'Prompt of q1', FRENCH_STIMULUS));
  assert.ok(inOrder(html, 'Write a reply.', 'Prompt of q2'));
});

// <Question id="..."/> inside a topic text gets its pack and language from the topic context.
const inTopic = (element, contentLang = 'en') => createElement(
  loaded.TopicContextProvider,
  { value: { subjectId: 'fr', topicId: 't1', pack: pack({ questions: [frenchQuestion(), question('q1')] }), contentLang, uiLang: contentLang } },
  element,
);

test('topic text, <Question>: the French stimulus and prompt come before the English ones', async () => {
  const html = await draw(inTopic(createElement(loaded.Question, { id: 'fq1' })));
  assert.deepEqual(frenchParts(html), [FRENCH_STIMULUS, FRENCH_PROMPT]);
  assert.ok(inOrder(html, FRENCH_STIMULUS, 'You read this message.'));
  assert.ok(inOrder(html, FRENCH_PROMPT, 'Write a reply.'));
  assert.ok(html.includes('<div lang="fr" class="foma-fr foma-fr--rich"><div class="rich-text foma-question__prompt">'), 'the French prompt has the prompt style');
  const russian = await draw(inTopic(createElement(loaded.Question, { id: 'fq1' }), 'ru'), '/', { lang: 'ru' });
  assert.deepEqual(frenchParts(russian), [FRENCH_STIMULUS, FRENCH_PROMPT]);
  assert.ok(inOrder(russian, FRENCH_PROMPT, 'Напишите ответ.'));
});

test('topic text, <Question>: a question without French text has no French element', async () => {
  const html = await draw(inTopic(createElement(loaded.Question, { id: 'q1' })));
  assert.ok(html.includes('<div class="rich-text foma-question__prompt"><p class="my-2 first:mt-0 last:mb-0">Prompt of q1</p></div>'));
  assert.ok(!html.includes('lang="fr"'));
  assert.ok(!html.includes('foma-fr'));
});

// The model answer is behind a button, so a server render cannot show it. This reads the two question components and
// checks that each of the three fields is drawn through FrenchText, in rich mode, before the English or Russian text.
test('both question components draw the French stimulus, prompt and model answer before the UI-language text', () => {
  for (const file of ['src/components/mdx/Question.tsx', 'src/components/practice/QuestionCard.tsx']) {
    const source = readFileSync(join(root, file), 'utf8');
    for (const field of ['stimulus', 'prompt', 'model']) {
      const french = `<FrenchText text={question.${field}} rich`;
      assert.ok(source.includes(french), `${file}: ${field} is drawn through FrenchText, in rich mode`);
      assert.ok(inOrder(source, french, `pickText(question.${field}, lang)`), `${file}: the French ${field} comes before the English or Russian one`);
    }
  }
});

// ---- terms

test('term card: the French term is a line of its own above the English one', async () => {
  const html = await view('TermCard', { term: term('etre', { term: L('to be', 'быть (to be)', 'être') }) });
  assert.deepEqual(frenchParts(html), ['être']);
  assert.ok(html.includes('<span lang="fr" class="foma-fr foma-term__label">être</span><span class="foma-term__label">to be (быть)</span>'));
});

test('term card: a term without French text has one label and no French element', async () => {
  const html = await view('TermCard', { term: term('etre', { term: L('to be', 'быть (to be)') }) });
  assert.equal((html.match(/foma-term__label/g) ?? []).length, 1);
  assert.ok(html.includes('<span class="foma-term__label">to be (быть)</span>'));
  assert.ok(!html.includes('lang="fr"'));
});

test('glossary list: the French term is in the heading before the English term; other terms are unchanged', async () => {
  const terms = [term('a'), term('etre', { term: L('to be', 'быть', 'être') })];
  const html = await view('GlossaryView', { pack: pack({ terms }) }, '/s/fr/terms');
  assert.deepEqual(frenchParts(html), ['être']);
  assert.match(html, /<h3 id="[^"]*" class="gl-entry__term" lang="en"><span lang="fr" class="foma-fr">être<\/span>to be<\/h3>/);
  assert.match(html, /<h3 id="[^"]*" class="gl-entry__term" lang="en">term a<\/h3>/, 'the heading of a term without French is as before');
});

// ---- topic titles

test('topic list: the French title is a line of its own in the link, before the English or Russian title', async () => {
  const p = pack({ topics: [topic('t1', 1, { title: L('Daily life', 'Повседневная жизнь', 'La vie quotidienne') }), topic('t2', 2)] });
  const props = { pack: p, topics: p.topics, progress: {}, contentLang: 'en' };
  const html = await view('TopicList', props, '/s/fr');
  assert.deepEqual(frenchParts(html), ['La vie quotidienne']);
  assert.match(html, /<a [^>]*><span lang="fr" class="foma-fr">La vie quotidienne<\/span>Daily life<\/a>/);
  assert.match(html, /<a [^>]*>Topic t2<\/a>/, 'a topic without French text is as before');
  const russian = await view('TopicList', props, '/s/fr', { lang: 'ru' });
  assert.match(russian, /<a [^>]*><span lang="fr" class="foma-fr">La vie quotidienne<\/span>Повседневная жизнь<\/a>/);
});

test('topic page: the heading shows the French title first; the breadcrumb and the outcomes are unchanged', async () => {
  const meta = example.topics.find(item => item.id === 'example-topic');
  const original = meta.title;
  const pattern = '/s/:subject/t/:topic';
  const url = '/s/_example/t/example-topic';
  try {
    const before = await draw(createElement(loaded.TopicPage), url, { pattern });
    assert.ok(before.includes('>Example topic: demand and elasticity</h1>'), 'the heading is the English title only');
    assert.ok(!before.includes('lang="fr"'));
    meta.title = { ...original, fr: 'Exemple : la demande' };
    const html = await draw(createElement(loaded.TopicPage), url, { pattern });
    assert.deepEqual(frenchParts(html), ['Exemple : la demande']);
    assert.match(html, /<h1 [^>]*><span lang="fr" class="foma-fr">Exemple : la demande<\/span>Example topic: demand and elasticity<\/h1>/);
    assert.ok(!html.includes('>Exemple : la demande</span></nav>'), 'the breadcrumb keeps the UI language only');
  } finally {
    meta.title = original;
  }
});

// ---- flashcards

const frenchTerm = (id = 'stroll') => term(id, { term: L('to stroll', 'прогуливаться', 'flâner') });
// React puts <!-- --> between two pieces of text that sit next to each other; the tests do not care about it.
const noComments = html => html.replace(/<!-- -->/g, '');

test('flashcards: the front of a French card shows the French term only, and the definition waits', async () => {
  const html = await view('GlossaryView', { pack: pack({ terms: [frenchTerm()] }) }, '/s/fr/terms?mode=cards');
  assert.match(html, /Card 1 of 1/);
  assert.deepEqual(frenchParts(html), ['flâner']);
  assert.ok(html.includes('<p class="gl-card__term" lang="fr">flâner</p>'));
  assert.ok(!html.includes('to stroll') && !html.includes('прогуливаться'), 'the English and Russian terms are on the back');
  assert.ok(!html.includes('English definition of stroll'), 'the definition is hidden');
  assert.match(html, /Show the definition/);
});

test('flashcards: the front of a card without a French term is as before', async () => {
  const html = await view('GlossaryView', { pack: pack({ terms: [term('b')] }) }, '/s/fr/terms?mode=cards');
  assert.ok(html.includes('<p class="gl-card__term" lang="en">term b</p>'));
  assert.ok(!html.includes('lang="fr"'));
});

test('flashcards: in one deck each card has its own front', async () => {
  const terms = [frenchTerm('a'), term('b')];
  const due = id => ({ terms: { [`fr/${id}`]: { box: 1, due: '2026-01-01' } } });
  const french = await view('GlossaryView', { pack: pack({ terms }) }, '/s/fr/terms?mode=cards', { state: due('a') });
  assert.match(french, /Card 1 of 2/);
  assert.ok(french.includes('<p class="gl-card__term" lang="fr">flâner</p>'), 'the due French card comes first');
  const plain = await view('GlossaryView', { pack: pack({ terms }) }, '/s/fr/terms?mode=cards', { state: due('b') });
  assert.match(plain, /Card 1 of 2/);
  assert.ok(plain.includes('<p class="gl-card__term" lang="en">term b</p>'), 'the due English card comes first');
  assert.ok(!plain.includes('lang="fr"'));
});

test('flashcards: the back of a French card gives the English and the Russian term with their definitions', async () => {
  const html = noComments(await view('CardBack', { term: frenchTerm(), lang: 'en' }));
  assert.match(html, /<p class="gl-entry__def" lang="en"><span class="foma-tag">EN<\/span> <strong>to stroll<\/strong> — English definition of stroll<\/p>/);
  assert.match(html, /<p class="gl-entry__def" lang="ru"><span class="foma-tag">RU<\/span> <strong>прогуливаться<\/strong> — Русское определение stroll<\/p>/);
  assert.ok(!html.includes('lang="fr"'), 'the French term stays on the front');
});

test('flashcards: the back of a card without a French term is as before', async () => {
  const html = noComments(await view('CardBack', { term: term('b'), lang: 'en' }));
  assert.match(html, /<p class="gl-entry__def" lang="en"><span class="foma-tag">EN<\/span> English definition of b<\/p>/);
  assert.match(html, /<p class="gl-entry__def" lang="ru"><span class="foma-tag">RU<\/span> <strong>термин b<\/strong> — Русское определение b<\/p>/);
  assert.ok(!html.includes('<strong>term b</strong>'), 'the English term is on the front, not repeated on the back');
});

test('flashcards: the back keeps the example, the pitfall and the source for a French card', async () => {
  const extra = { example: L('He strolls.', 'Он гуляет.'), pitfall: L('Not "se promener".', 'Не "se promener".') };
  const html = noComments(await view('CardBack', { term: { ...frenchTerm('x'), ...extra }, lang: 'en' }));
  assert.match(html, /Example:<\/strong> He strolls\./);
  assert.match(html, /Common pitfall:<\/strong> Not &quot;se promener&quot;\./);
  assert.match(html, /Source:<\/strong>/);
});

// ---- search

// A glossary term as the search sees it. The definition is the same for all of them, so only the terms are found.
const searchable = (id, en, ru, fr, defFr) => ({
  id,
  term: L(en, ru, fr),
  def: { en: 'A word from the unit.', ru: 'Слово из раздела.', ...(defFr === undefined ? {} : { fr: defFr }) },
  syllabus: 'A1',
  papers: ['P1'],
});
const SEARCH_TERMS = [
  searchable('be', 'to be', 'быть', 'être'),
  searchable('school', 'school', 'школа', 'l’école'),
  searchable('heart', 'heart', 'сердце', 'le cœur'),
  searchable('have', 'to have', 'иметь', 'avoir', 'Verbe auxiliaire très fréquent'),
  searchable('table', 'table', 'стол'),
  searchable('coffee', 'café', 'кофе'),
  searchable('my', 'my', 'мой'),
];
const found = query => filterTerms(SEARCH_TERMS, { ...NO_TERM_FILTERS, query }).map(item => item.id);

test('search: a term is found by its French text, and by its French definition when it has one', () => {
  assert.deepEqual(found('être'), ['be']);
  assert.deepEqual(found('ÊTRE'), ['be'], 'case is ignored');
  assert.deepEqual(found('avoir'), ['have']);
  assert.deepEqual(found('auxiliaire'), ['have']);
  assert.deepEqual(found('avoir verbe'), ['have'], 'every word must be found, in any order, as before');
  assert.deepEqual(found('avoir zebra'), []);
});

test('search: accents and ligatures in the French text are ignored, so "ecole" finds "école"', () => {
  assert.deepEqual(found('etre'), ['be']);
  assert.deepEqual(found('ecole'), ['school']);
  assert.deepEqual(found('école'), ['school'], 'typing the accent works as well');
  assert.deepEqual(found('coeur'), ['heart']);
  assert.deepEqual(found('cœur'), ['heart']);
  assert.deepEqual(found('tres frequent'), ['have']);
  assert.deepEqual(found('l’école'), ['school'], 'a curly apostrophe, as an iPhone types it');
  assert.deepEqual(found("l'ecole"), ['school'], 'a straight apostrophe finds it as well');
});

test('search: terms without French text are found exactly as before', () => {
  assert.deepEqual(found('table'), ['table']);
  assert.deepEqual(found('стол'), ['table']);
  assert.deepEqual(found('to'), ['be', 'have'], 'English text still matches in the middle of a word list');
  assert.deepEqual(found('cafe'), [], 'accents are not ignored in English text');
  assert.deepEqual(found('café'), ['coffee']);
  assert.deepEqual(found('мои'), [], 'nor in Russian text ("й" is not "и")');
  assert.deepEqual(found('мой'), ['my']);
});

test('search: the paper filter and the empty search work with French terms too', () => {
  assert.equal(filterTerms(SEARCH_TERMS, NO_TERM_FILTERS).length, SEARCH_TERMS.length);
  assert.deepEqual(filterTerms(SEARCH_TERMS, { query: 'ecole', paper: 'P2' }).map(item => item.id), []);
  assert.deepEqual(filterTerms(SEARCH_TERMS, { query: 'ecole', paper: 'P1' }).map(item => item.id), ['school']);
});

// ---- the French example of a term

test('term card: a French example is a line of its own above the English one, and reads inline Markdown', async () => {
  const html = await view('TermCard', { term: term('etre', { example: L('I am tired.', 'Я устал.', 'Je suis **fatigué**.') }) });
  assert.deepEqual(frenchParts(html), ['Je suis fatigué.']);
  assert.ok(inOrder(html, 'Je suis', 'I am tired.'), 'the French example comes first');
  assert.ok(html.includes('<strong>fatigué</strong>'), 'bold works in the French example, as in the English one');
});

test('term card: an example without French text is drawn as before', async () => {
  const html = await view('TermCard', { term: term('etre', { example: L('I am tired.', 'Я устал.') }) });
  assert.ok(!html.includes('lang="fr"'));
  assert.ok(html.includes('I am tired.'));
});

test('glossary list and flashcard back: the French example comes first, as a block of its own', async () => {
  const withExample = term('etre', { term: L('to be', 'быть', 'être'), example: L('I am tired.', 'Я устал.', 'Je suis fatigué.') });
  const list = await view('GlossaryView', { pack: pack({ terms: [withExample] }) }, '/s/fr/terms');
  assert.ok(frenchParts(list).includes('Je suis fatigué.'));
  assert.ok(inOrder(list, 'Je suis fatigué.', 'I am tired.'));
  assert.match(list, /<div lang="fr" class="foma-fr foma-fr--rich"><div class="rich-text[^"]*"><p [^>]*>Je suis fatigué\.<\/p><\/div><\/div>/);
  const back = await view('CardBack', { term: withExample, lang: 'en' });
  assert.ok(frenchParts(back).includes('Je suis fatigué.'));
  assert.ok(inOrder(back, 'Je suis fatigué.', 'I am tired.'));
});
