import test from 'node:test';
import assert from 'node:assert/strict';
import { parseIdList, publicUrl, termLabel } from '../src/lib/topic-text.ts';

test('the label is "EN term (RU term)"', () => {
  assert.equal(termLabel({ en: 'price elasticity of demand', ru: 'ценовая эластичность спроса' }), 'price elasticity of demand (ценовая эластичность спроса)');
});

test('a Russian term that repeats the English one in brackets is shortened', () => {
  assert.equal(termLabel({ en: 'demand', ru: 'спрос (demand)' }), 'demand (спрос)');
  assert.equal(termLabel({ en: 'demand', ru: 'спрос ( Demand )' }), 'demand (спрос)');
  assert.equal(termLabel({ en: 'GDP per capita', ru: 'ВВП на душу населения (GDP per capita)' }), 'GDP per capita (ВВП на душу населения)');
});

test('when the Russian term adds nothing only the English term is shown', () => {
  assert.equal(termLabel({ en: 'demand', ru: 'demand' }), 'demand');
  assert.equal(termLabel({ en: 'Demand', ru: 'demand' }), 'Demand');
  assert.equal(termLabel({ en: 'demand', ru: '' }), 'demand');
  assert.equal(termLabel({ en: 'demand', ru: '  (demand)' }), 'demand');
});

test('regular-expression characters in a term are matched literally', () => {
  assert.equal(termLabel({ en: 'f(x)', ru: 'функция (f(x))' }), 'f(x) (функция)');
  assert.equal(termLabel({ en: 'C++', ru: 'язык C++ (C++)' }), 'C++ (язык C++)');
});

test('an empty English term falls back to the Russian one', () => {
  assert.equal(termLabel({ en: '', ru: 'спрос' }), 'спрос');
});

test('an id list is split on commas, trimmed and de-duplicated in order', () => {
  assert.deepEqual(parseIdList('a, b,,a , c'), ['a', 'b', 'c']);
  assert.deepEqual(parseIdList('one'), ['one']);
  assert.deepEqual(parseIdList(''), []);
  assert.deepEqual(parseIdList(undefined), []);
  assert.deepEqual(parseIdList(' , '), []);
});

test('public pages keep their link', () => {
  assert.equal(publicUrl('https://www.thinkib.net/geography/page/1'), 'https://www.thinkib.net/geography/page/1');
  assert.equal(publicUrl('http://example.org/a?b=1'), 'http://example.org/a?b=1');
});

test('private school or personal hosts, other schemes and broken URLs give no link', () => {
  for (const url of [
    'https://launchpad.classlink.com/[redacted]',
    'https://web.toddleapp.com/classroom/1',
    'https://drive.google.com/file/d/abc/view',
    'https://docs.google.com/document/d/abc',
    'https://school.sharepoint.com/sites/x',
    'http://localhost:5173/',
    'https://192.168.1.10/notes',
    'https://user:secret@example.org/',
    'javascript:alert(1)',
    'data:text/html,hi',
    'ftp://example.org/file',
    'not a url',
    '',
    null,
    undefined,
  ]) {
    assert.equal(publicUrl(url), null, String(url));
  }
});

test('a host that only contains a private name inside a longer name is still public', () => {
  assert.equal(publicUrl('https://notclasslink.com/x'), 'https://notclasslink.com/x');
  assert.equal(publicUrl('https://example.org/drive.google.com'), 'https://example.org/drive.google.com');
});
