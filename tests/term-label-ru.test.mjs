import test from 'node:test';
import assert from 'node:assert/strict';
import { termLabel, termLabelRu } from '../src/lib/topic-text.ts';

// The Russian label of a term (decision 6): the Russian term first, the English term once in brackets, no brackets
// inside brackets. The first two examples are the values of content/geo/core/terms/core-1-1.ts and
// content/math/u4-statistics/terms/4-17-poisson.ts.

test('geo core-1-1: the English copy in the Russian term is replaced once, and the English brackets become a list', () => {
  const term = { en: 'crude birth rate (CBR)', ru: 'общий коэффициент рождаемости (crude birth rate)' };
  assert.equal(termLabelRu(term), 'общий коэффициент рождаемости (crude birth rate, CBR)');
});

test('math 4-17-poisson: the English copy in the Russian term is replaced by the English term', () => {
  const term = { en: 'Poisson parameter m', ru: 'параметр m (Poisson parameter)' };
  assert.equal(termLabelRu(term), 'параметр m (Poisson parameter m)');
});

test('a copy of the English term in the Russian term is not doubled, whatever its case or spacing', () => {
  assert.equal(termLabelRu({ en: 'demand', ru: 'спрос ( Demand )' }), 'спрос (demand)');
  assert.equal(termLabelRu({ en: 'standard form', ru: 'стандартный вид (standard form)' }), 'стандартный вид (standard form)');
  assert.equal(termLabelRu({ en: 'Profit (π)', ru: 'Прибыль (π)' }), 'Прибыль (Profit, π)', 'a symbol copy is not doubled either');
});

test('an empty Russian term gives the English term alone, with its brackets as a list', () => {
  assert.equal(termLabelRu({ en: 'crude birth rate (CBR)', ru: '' }), 'crude birth rate, CBR');
  assert.equal(termLabelRu({ en: 'demand', ru: '   ' }), 'demand');
});

test('a Russian term equal to the English term (ignoring case) gives the English term once', () => {
  assert.equal(termLabelRu({ en: 'Demand', ru: 'demand' }), 'Demand');
  assert.equal(termLabelRu({ en: 'demand', ru: 'DEMAND (demand)' }), 'demand');
});

test('a Russian term without Cyrillic gives the English term alone', () => {
  assert.equal(termLabelRu({ en: 'Poisson parameter m', ru: 'Poisson parameter m (copy)' }), 'Poisson parameter m');
  assert.equal(termLabelRu({ en: 'Recall (sensitivity)', ru: 'recall' }), 'Recall, sensitivity');
});

test('Russian words in brackets stay; notation attached to a word stays as written', () => {
  assert.equal(
    termLabelRu({ en: 'Area of a triangle (surplus)', ru: 'Площадь треугольника (излишек)' }),
    'Площадь треугольника (излишек) (Area of a triangle, surplus)',
  );
  assert.equal(termLabelRu({ en: 'f(x)', ru: 'функция (f(x))' }), 'функция (f(x))', 'f(x) is not a list of f and x');
});

test('in a bracket list the English items are copies and go, the Russian items stay', () => {
  assert.equal(
    termLabelRu({ en: 'Human Development Index (HDI)', ru: 'индекс развития человеческого потенциала (ИРЧП, Human Development Index)' }),
    'индекс развития человеческого потенциала (ИРЧП) (Human Development Index, HDI)',
  );
  assert.equal(
    termLabelRu({ en: 'recall (sensitivity)', ru: 'полнота (recall, чувствительность)' }),
    'полнота (чувствительность) (recall, sensitivity)',
  );
});

test('termLabel (English first) drops the same copy, and keeps the English term as written', () => {
  assert.equal(
    termLabel({ en: 'crude birth rate (CBR)', ru: 'общий коэффициент рождаемости (crude birth rate)' }),
    'crude birth rate (CBR) (общий коэффициент рождаемости)',
  );
  assert.equal(termLabel({ en: 'f(x)', ru: 'функция (f(x))' }), 'f(x) (функция)');
});
