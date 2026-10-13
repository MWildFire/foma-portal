import test, { after, before } from 'node:test';
import assert from 'node:assert/strict';
import { join } from 'node:path';
import { createServer } from 'vite';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { frenchOf, pickText } from '../src/lib/text.ts';

// The optional French text (`fr`) of an L object: the helper that picks it, the component that draws it, and every
// place that shows it (questions, terms, flashcards, the glossary list, topic titles, the glossary search). Pages are
// loaded through Vite and drawn once on the server, the way tests/study-render.test.mjs does it. Clicks do not run
// here, so what sits behind a button (the model answer, the back of a flashcard) is covered by its own component or
// by reading the source, and the tests below say so where it matters.
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
    // The router offers an ES module for Node under the "module-sync" condition. Vite does not ask for it by
    // default, picks the CommonJS file and then cannot read the named exports.
    ssr: { resolve: { conditions: ['module-sync', 'module', 'node', 'development|production'], externalConditions: ['node', 'module-sync'] } },
  });
  i18n = (await server.ssrLoadModule('/src/i18n/index.ts')).default;
  await new Promise(resolve => setTimeout(resolve, 20));
  const files = {
    FrenchText: '/src/components/ui/FrenchText.tsx',
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
const frenchParts = html => [...html.matchAll(/<(span|div) [^>]*\blang="fr"[^>]*>(.*?)<\/\1>/g)].map(match => stripTags(match[2]));
const inOrder = (html, first, second) => html.indexOf(first) !== -1 && html.indexOf(first) < html.indexOf(second);

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

test('FrenchText, one line: extra classes are added to the element, and the text is plain (no Markdown)', async () => {
  const html = await view('FrenchText', { text: L('a', 'б', 'le *mot*'), className: 'foma-term__label' });
  assert.equal(html, '<span lang="fr" class="foma-fr foma-term__label">le *mot*</span>');
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
