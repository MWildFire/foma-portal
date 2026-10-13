import test from 'node:test';
import assert from 'node:assert/strict';
import { allocateCards, buildRecall, CARDS_PER_MINUTE, RECALL_WEIGHT } from '../src/planner/recall.ts';

const emptyState = () => ({
  version: 1, topics: {}, terms: {}, questions: {}, blocks: {},
  settings: { accessArrangements: { extraTime: false, separateRoom: false }, dailyLoadMinutes: {} },
});
const subject = (id, topics = [], termIds = null) => ({ id, topics, termIds });
const topic = (id, termIds) => ({
  id, subject: 'geo', title: { en: id, ru: id }, order: 1, minutes: 25, priority: 1, inMockScope: 'yes', papers: ['P1'],
  termIds, questionCount: 0, links: [], ready: { en: false, ru: false },
});

test('a card is due when its due date is today or earlier', () => {
  const state = emptyState();
  state.terms = {
    'geo/a': { box: 1, due: '2026-10-14' },
    'geo/b': { box: 2, due: '2026-10-13' },
    'geo/c': { box: 3, due: '2026-10-15' },
    'fr/x': { box: 1, due: '2026-10-14' },
  };
  const recall = buildRecall({ date: '2026-10-14', minutes: 15, subjects: [subject('geo'), subject('fr')], active: ['geo', 'fr'], state });
  const bySubject = Object.fromEntries(recall.subjects.map(s => [s.subject, s.due]));
  assert.deepEqual(bySubject, { geo: 2, fr: 1 });
  assert.equal(recall.dueTotal, 3);
  assert.equal(recall.capacityCards, 15 * CARDS_PER_MINUTE);
});

test('cards of subjects without exams ahead are not counted, nor are cards the pack no longer has', () => {
  const state = emptyState();
  state.terms = { 'geo/a': { box: 1, due: '2026-10-14' }, 'geo/gone': { box: 1, due: '2026-10-14' }, 'math/m': { box: 1, due: '2026-10-14' } };
  const recall = buildRecall({
    date: '2026-10-14', minutes: 15, active: ['geo'], state,
    subjects: [subject('geo', [], ['a']), subject('math', [], ['m'])],
  });
  assert.deepEqual(recall.subjects.map(s => [s.subject, s.due]), [['geo', 1]]);
});

test('key terms of red topics join the recall, without counting cards twice', () => {
  const state = emptyState();
  state.topics = { 'geo/red-one': { rag: 'red' }, 'geo/green-one': { rag: 'green' } };
  state.terms = { 'geo/t1': { box: 1, due: '2026-10-14' } };
  const recall = buildRecall({
    date: '2026-10-14', minutes: 15, active: ['geo'], state,
    subjects: [subject('geo', [topic('red-one', ['t1', 't2', 't3']), topic('green-one', ['t4'])])],
  });
  assert.deepEqual(recall.subjects, [{ subject: 'geo', due: 1, redTerms: 2, suggested: 3 }]);
  assert.equal(recall.redTotal, 2);
});

test('French and English come first and get twice the share of a crowded recall', () => {
  assert.equal(RECALL_WEIGHT.fr, 2);
  assert.equal(RECALL_WEIGHT.eng, 2);
  assert.equal(RECALL_WEIGHT.geo, 1);
  const shares = allocateCards(30, [
    { subject: 'geo', cards: 40 }, { subject: 'fr', cards: 40 }, { subject: 'math', cards: 40 },
  ]);
  assert.deepEqual([shares.get('fr'), shares.get('geo'), shares.get('math')], [15, 8, 7]);
  assert.equal([...shares.values()].reduce((a, b) => a + b, 0), 30);

  const state = emptyState();
  for (let i = 0; i < 3; i++) {
    state.terms[`geo/g${i}`] = { box: 1, due: '2026-10-14' };
    state.terms[`fr/f${i}`] = { box: 1, due: '2026-10-14' };
    state.terms[`eng/e${i}`] = { box: 1, due: '2026-10-14' };
  }
  const recall = buildRecall({
    date: '2026-10-14', minutes: 15, active: ['geo', 'eng', 'fr'], state,
    subjects: [subject('geo'), subject('eng'), subject('fr')],
  });
  assert.deepEqual(recall.subjects.map(s => s.subject), ['eng', 'fr', 'geo']);
});

test('small piles are served in full and the rest is shared by weight', () => {
  const shares = allocateCards(30, [
    { subject: 'geo', cards: 4 }, { subject: 'fr', cards: 100 }, { subject: 'eng', cards: 100 },
  ]);
  assert.equal(shares.get('geo'), 4);
  assert.equal(shares.get('fr') + shares.get('eng'), 26);
  assert.equal(shares.get('fr'), 13);
  assert.deepEqual([...allocateCards(30, [{ subject: 'math', cards: 6 }]).entries()], [['math', 6]]);
  assert.deepEqual([...allocateCards(0, [{ subject: 'math', cards: 6 }]).entries()], [['math', 0]]);
});

test('no cards means an empty recall, not an error', () => {
  const recall = buildRecall({ date: '2026-10-14', minutes: 15, subjects: [], active: [], state: emptyState() });
  assert.deepEqual(recall.subjects, []);
  assert.equal(recall.dueTotal, 0);
});
