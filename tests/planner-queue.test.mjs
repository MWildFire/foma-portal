import test from 'node:test';
import assert from 'node:assert/strict';
import {
  paperBlockId, parseBlockId, practiceBlockId, recallBlockId, studyBlockId, timedBlockId, topicBlockId,
} from '../src/planner/blocks.ts';
import {
  addInterval, coveredMinutes, effectiveMinutes, firstGap, isCovered, topicQueue,
} from '../src/planner/queue.ts';

const topic = (id, order, priority, inMockScope, minutes = 25) => ({
  id, subject: 'geo', title: { en: id, ru: id }, order, minutes, priority, inMockScope, papers: ['P2'],
  termIds: [], questionCount: 0, links: [], ready: { en: false, ru: false },
});

test('topic queue: yes, then unknown, then no, then priority, then order', () => {
  const queue = topicQueue([
    topic('out-of-scope', 1, 1, 'no'),
    topic('later', 9, 1, 'yes'),
    topic('p2-first', 1, 2, 'yes'),
    topic('unknown-scope', 2, 1, 'unknown'),
    topic('p1-first', 3, 1, 'yes'),
    topic('p3', 1, 3, 'yes'),
  ]);
  assert.deepEqual(queue.map(t => t.id), ['p1-first', 'later', 'p2-first', 'p3', 'unknown-scope', 'out-of-scope']);
});

test('topic queue is stable and does not mutate its input', () => {
  const input = [topic('b', 1, 1, 'yes'), topic('a', 1, 1, 'yes')];
  const copy = [...input];
  assert.deepEqual(topicQueue(input).map(t => t.id), ['a', 'b']); // ties fall back to the id
  assert.deepEqual(input, copy);
});

test('effective minutes round up to 5 and default to one Pomodoro', () => {
  assert.equal(effectiveMinutes(40), 40);
  assert.equal(effectiveMinutes(33), 35);
  assert.equal(effectiveMinutes(60), 60);
  assert.equal(effectiveMinutes(0), 25);
  assert.equal(effectiveMinutes(Number.NaN), 25);
  assert.equal(effectiveMinutes(-10), 25);
});

test('covered intervals merge and the first gap is the next minute to teach', () => {
  let done = [];
  assert.deepEqual(firstGap(done, 40), [0, 40]);
  done = addInterval(done, 0, 25);
  assert.deepEqual(firstGap(done, 40), [25, 40]);
  done = addInterval(done, 25, 40);
  assert.deepEqual(done, [[0, 40]]);
  assert.equal(firstGap(done, 40), null);
  assert.equal(isCovered(done, 40), true);
  assert.equal(coveredMinutes(done), 40);
});

test('out-of-order slices leave a gap that is found first', () => {
  const done = addInterval(addInterval([], 25, 40), 0, 10);
  assert.deepEqual(done, [[0, 10], [25, 40]]);
  assert.deepEqual(firstGap(done, 40), [10, 25]);
  assert.equal(isCovered(done, 40), false);
  assert.equal(coveredMinutes(done), 25);
  // overlapping or touching intervals merge
  assert.deepEqual(addInterval(done, 8, 30), [[0, 40]]);
});

test('block ids round-trip through the parser', () => {
  const cases = [
    [recallBlockId('2026-10-14'), { kind: 'recall', date: '2026-10-14' }],
    [topicBlockId('geo', 'urban-systems', 25, 15), { kind: 'topic', subject: 'geo', topicId: 'urban-systems', start: 25, len: 15 }],
    [practiceBlockId('math', 'quadratics', 2, 25), { kind: 'practice', subject: 'math', topicId: 'quadratics', seq: 2, len: 25 }],
    [studyBlockId('fr', '2026-10-15', 1, 35), { kind: 'study', subject: 'fr', date: '2026-10-15', seq: 1, len: 35 }],
    [paperBlockId('2026-10-25', 'geo-p1'), { kind: 'paper', date: '2026-10-25', examId: 'geo-p1' }],
    [timedBlockId('2026-10-24', 'math', 'P2'), { kind: 'timed', date: '2026-10-24', subject: 'math', paper: 'P2' }],
  ];
  for (const [id, expected] of cases) assert.deepEqual(parseBlockId(id), expected, id);
  assert.equal(topicBlockId('geo', 'urban-systems', 0, 25), 't:geo/urban-systems@0+25');
  assert.equal(recallBlockId('2026-10-14'), 'r:2026-10-14');
});

test('the parser rejects ids it does not know', () => {
  for (const id of ['', 'x:foo', 't:geo/@0+25', 't:art/topic@0+25', 't:geo/topic@a+25', 'r:tomorrow', 'm:2026-10-24/math/P9', 'plain-old-id']) {
    assert.equal(parseBlockId(id), null, id);
  }
});
