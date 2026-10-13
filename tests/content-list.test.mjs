import test from 'node:test';
import assert from 'node:assert/strict';
import { guidesForPaper, isPaperKey, papersWithGuides, sortTopics, timedSetSearch } from '../src/lib/topic-list.ts';

test('topics are sorted by order, then by code with numbers compared as numbers', () => {
  const topics = [
    { id: 'c', order: 3, code: '1.10' },
    { id: 'a', order: 1, code: '1.2' },
    { id: 'd', order: 3, code: '1.9' },
    { id: 'b', order: 2, code: '1.1' },
  ];
  assert.deepEqual(sortTopics(topics).map(topic => topic.id), ['a', 'b', 'd', 'c']);
});

test('sorting does not change the input and handles an empty list', () => {
  const topics = [{ id: 'b', order: 2, code: 'x' }, { id: 'a', order: 1, code: 'y' }];
  const copy = structuredClone(topics);
  sortTopics(topics);
  assert.deepEqual(topics, copy);
  assert.deepEqual(sortTopics([]), []);
});

test('papers with a guide are listed once each, in P1, P2, P3 order', () => {
  const guides = [{ paper: 'P3' }, { paper: 'P1' }, { paper: 'P3', part: 'b' }];
  assert.deepEqual(papersWithGuides(guides), ['P1', 'P3']);
  assert.deepEqual(papersWithGuides([]), []);
});

test('all guides of one paper are returned, a paper without a guide gives none', () => {
  const guides = [{ paper: 'P2', part: 'reading' }, { paper: 'P1' }, { paper: 'P2', part: 'listening' }];
  assert.deepEqual(guidesForPaper(guides, 'P2').map(guide => guide.part), ['reading', 'listening']);
  assert.deepEqual(guidesForPaper(guides, 'P3'), []);
});

test('only P1, P2 and P3 are paper keys', () => {
  for (const value of ['P1', 'P2', 'P3']) assert.equal(isPaperKey(value), true);
  for (const value of ['P4', 'p1', '', null, undefined, 'paper1']) assert.equal(isPaperKey(value), false);
});

test('the timed-set link carries the set id in the query string', () => {
  assert.equal(timedSetSearch('p2-full-1'), '?set=p2-full-1');
  assert.equal(timedSetSearch('a b&c'), '?set=a%20b%26c');
});
