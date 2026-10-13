import test from 'node:test';
import assert from 'node:assert/strict';
import { dubaiDate, percent, questionKey, subjectProgress, topicKey } from '../src/lib/topic-progress.ts';

test('progress keys are subject/id', () => {
  assert.equal(topicKey('geo', 'core-1-1'), 'geo/core-1-1');
  assert.equal(questionKey('econ', 'q7'), 'econ/q7');
});

test('subject progress counts done topics and the RAG split', () => {
  const topics = {
    'geo/a': { done: '2026-10-13', rag: 'green' },
    'geo/b': { rag: 'red' },
    'geo/c': { done: '2026-10-14' },
    'geo/d': { done: '2026-10-14', rag: 'amber' },
    'math/a': { done: '2026-10-14', rag: 'green' },
  };
  const result = subjectProgress('geo', ['a', 'b', 'c', 'd', 'e'], topics);
  assert.deepEqual(result, { total: 5, done: 3, rag: { red: 1, amber: 1, green: 1, unrated: 2 } });
});

test('topics that are not in the pack never count, and a repeated id counts once', () => {
  const topics = { 'geo/gone': { done: '2026-10-13', rag: 'green' }, 'geo/a': { done: '2026-10-13' } };
  const result = subjectProgress('geo', ['a', 'a'], topics);
  assert.deepEqual(result, { total: 1, done: 1, rag: { red: 0, amber: 0, green: 0, unrated: 1 } });
});

test('an empty pack gives zeros', () => {
  assert.deepEqual(subjectProgress('geo', [], {}), { total: 0, done: 0, rag: { red: 0, amber: 0, green: 0, unrated: 0 } });
});

test('percent is rounded, bounded, and zero for an empty list', () => {
  assert.equal(percent(0, 0), 0);
  assert.equal(percent(1, 3), 33);
  assert.equal(percent(2, 3), 67);
  assert.equal(percent(5, 5), 100);
  assert.equal(percent(9, 5), 100);
  assert.equal(percent(-1, 5), 0);
});

test('the Dubai date moves to the next day four hours before UTC midnight', () => {
  assert.equal(dubaiDate(new Date('2026-10-13T19:59:59Z')), '2026-10-13');
  assert.equal(dubaiDate(new Date('2026-10-13T20:00:00Z')), '2026-10-14');
  assert.equal(dubaiDate(new Date('2026-12-31T21:30:00Z')), '2027-01-01');
  assert.match(dubaiDate(), /^\d{4}-\d{2}-\d{2}$/);
});
