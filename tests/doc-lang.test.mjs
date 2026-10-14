import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { documentLang } from '../src/i18n/document-lang.ts';

// The page language (<html lang>) follows the UI language, so screen readers and hyphenation use the right one.

test('the page is Russian for a Russian interface and English for every other', () => {
  assert.equal(documentLang('ru'), 'ru');
  assert.equal(documentLang('ru-RU'), 'ru');
  assert.equal(documentLang('RU'), 'ru');
  assert.equal(documentLang('en'), 'en');
  assert.equal(documentLang('en-GB'), 'en');
  assert.equal(documentLang('fr'), 'en');
});

test('the language is set again whenever the UI language changes, not only at start', () => {
  const source = readFileSync(new URL('../src/i18n/index.ts', import.meta.url), 'utf8');
  assert.match(source, /i18n\.on\('languageChanged', syncDocumentLang\)/);
});
