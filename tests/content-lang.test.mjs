import test from 'node:test';
import assert from 'node:assert/strict';
import {
  bodyState,
  CONTENT_LANGS,
  CONTENT_LANG_KEY,
  isContentLang,
  langsOf,
  missingLangs,
  resolveContentLang,
  toLang,
} from '../src/lib/topic-lang.ts';

const loader = () => Promise.resolve({ default: () => null });

test('the storage key and the three content languages are fixed', () => {
  assert.equal(CONTENT_LANG_KEY, 'foma-content-lang');
  assert.deepEqual([...CONTENT_LANGS], ['en', 'ru', 'en+ru']);
});

test('only en, ru and en+ru are accepted as a content language', () => {
  for (const value of ['en', 'ru', 'en+ru']) assert.equal(isContentLang(value), true);
  for (const value of ['EN', 'ru+en', 'both', '', null, undefined, 3]) assert.equal(isContentLang(value), false);
});

test('UI language codes map to en or ru', () => {
  for (const value of ['ru', 'ru-RU', 'RU']) assert.equal(toLang(value), 'ru');
  for (const value of ['en', 'en-GB', 'de', '', null, undefined]) assert.equal(toLang(value), 'en');
});

test('a stored choice wins; without one the text follows the UI language', () => {
  assert.equal(resolveContentLang('en+ru', 'ru'), 'en+ru');
  assert.equal(resolveContentLang('en', 'ru-RU'), 'en');
  assert.equal(resolveContentLang(null, 'ru'), 'ru');
  assert.equal(resolveContentLang(undefined, 'en-US'), 'en');
  assert.equal(resolveContentLang('klingon', 'ru'), 'ru');
});

test('both languages render English first', () => {
  assert.deepEqual(langsOf('en'), ['en']);
  assert.deepEqual(langsOf('ru'), ['ru']);
  assert.deepEqual(langsOf('en+ru'), ['en', 'ru']);
});

test('body state tells ready, partial and missing apart', () => {
  const both = { en: loader, ru: loader };
  const onlyEn = { en: loader };
  assert.equal(bodyState(both, 'en'), 'ready');
  assert.equal(bodyState(both, 'ru'), 'ready');
  assert.equal(bodyState(both, 'en+ru'), 'ready');
  assert.equal(bodyState(onlyEn, 'en'), 'ready');
  assert.equal(bodyState(onlyEn, 'ru'), 'missing');
  assert.equal(bodyState(onlyEn, 'en+ru'), 'partial');
  assert.equal(bodyState({}, 'en+ru'), 'missing');
  assert.equal(bodyState(undefined, 'en'), 'missing');
  assert.equal(bodyState(null, 'ru'), 'missing');
});

test('missingLangs lists the wanted languages that have no body', () => {
  assert.deepEqual(missingLangs({ en: loader }, 'en+ru'), ['ru']);
  assert.deepEqual(missingLangs({ ru: loader }, 'en+ru'), ['en']);
  assert.deepEqual(missingLangs({ en: loader, ru: loader }, 'en+ru'), []);
  assert.deepEqual(missingLangs(undefined, 'ru'), ['ru']);
  assert.deepEqual(missingLangs({ en: loader }, 'en'), []);
});
