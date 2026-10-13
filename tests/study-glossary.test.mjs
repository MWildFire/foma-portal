import test from 'node:test';
import assert from 'node:assert/strict';
import { NO_TERM_FILTERS, filterTerms, normalizeSearch, sortTerms, termPapers } from '../src/components/glossary/terms.ts';

const term = (id, en, ru, defEn, defRu, papers, syllabus = 'X.1') => ({
  id,
  term: { en, ru },
  def: { en: defEn, ru: defRu },
  syllabus,
  papers,
});

const TERMS = [
  term('supply', 'supply', 'предложение (supply)', 'What producers will sell at each price.', 'Сколько производители готовы продать.', ['P1', 'P2'], '2.2'),
  term('demand', 'demand', 'спрос (demand)', 'What buyers will purchase at each price.', 'Сколько покупатели готовы купить.', ['P1'], '2.1'),
  term('gdp', 'GDP', 'ВВП (GDP)', 'The value of all final goods made in a year.', 'Стоимость всех конечных товаров за год.', ['P2'], '3.1'),
  term('elasticity', 'Elasticity', 'эластичность (elasticity)', 'How strongly quantity reacts to a change.', 'Как сильно количество реагирует на изменение. Всё о ёмкости.', ['P1', 'P3'], '2.4'),
];

test('search text is lower case, "ё" is read as "е", and spaces are collapsed', () => {
  assert.equal(normalizeSearch('  Спрос   И  Предложение '), 'спрос и предложение');
  assert.equal(normalizeSearch('Всё'), 'все');
  assert.equal(normalizeSearch(''), '');
});

test('no filters keep every term', () => {
  assert.equal(filterTerms(TERMS, NO_TERM_FILTERS).length, 4);
  assert.deepEqual(filterTerms([], NO_TERM_FILTERS), []);
});

test('the search box finds terms by English term, Russian term, either definition or syllabus code', () => {
  const ids = query => filterTerms(TERMS, { ...NO_TERM_FILTERS, query }).map(item => item.id);
  assert.deepEqual(ids('demand'), ['demand']);
  assert.deepEqual(ids('СПРОС'), ['demand']);
  assert.deepEqual(ids('producers'), ['supply']);
  assert.deepEqual(ids('покупатели'), ['demand']);
  assert.deepEqual(ids('3.1'), ['gdp']);
  assert.deepEqual(ids('емкости'), ['elasticity'], '"е" finds "ё"');
  assert.deepEqual(ids('nothing like this'), []);
});

test('every word of the search must be found, in any order', () => {
  const ids = query => filterTerms(TERMS, { ...NO_TERM_FILTERS, query }).map(item => item.id);
  assert.deepEqual(ids('price buyers'), ['demand']);
  assert.deepEqual(ids('price'), ['supply', 'demand']);
  assert.deepEqual(ids('price zebra'), []);
  assert.deepEqual(ids('   '), ['supply', 'demand', 'gdp', 'elasticity']);
});

test('the paper filter keeps the terms of that paper, together with the search', () => {
  const ids = filters => filterTerms(TERMS, { ...NO_TERM_FILTERS, ...filters }).map(item => item.id);
  assert.deepEqual(ids({ paper: 'P2' }), ['supply', 'gdp']);
  assert.deepEqual(ids({ paper: 'P3' }), ['elasticity']);
  assert.deepEqual(ids({ paper: 'P1', query: 'price' }), ['supply', 'demand']);
  assert.deepEqual(ids({ paper: 'P3', query: 'price' }), []);
});

test('terms are ordered by the English term, ignoring case, and the input is not changed', () => {
  const before = TERMS.map(item => item.id);
  assert.deepEqual(sortTerms(TERMS).map(item => item.id), ['demand', 'elasticity', 'gdp', 'supply']);
  assert.deepEqual(TERMS.map(item => item.id), before);
  const twins = [term('b', 'same', '', '', '', []), term('a', 'Same', '', '', '', [])];
  assert.deepEqual(sortTerms(twins).map(item => item.id), ['a', 'b'], 'the same term goes by id');
});

test('the paper list has only the papers some term belongs to, in order', () => {
  assert.deepEqual(termPapers(TERMS), ['P1', 'P2', 'P3']);
  assert.deepEqual(termPapers([TERMS[2]]), ['P2']);
  assert.deepEqual(termPapers([]), []);
});
