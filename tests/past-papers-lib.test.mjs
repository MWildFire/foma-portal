import test from 'node:test';
import assert from 'node:assert/strict';
import { clampScore, groupPastPapers, selfScore, sessionDate, sessionRank } from '../src/lib/past-papers.ts';
import { normalizeState } from '../src/lib/storage.ts';

const ref = (id, paper, session, marks = 10, items = []) => ({ id, subject: 'geo', paper, session, level: 'SL', files: [], minutes: 90, marks, items });

test('sessions sort newest first: November after May, later years after earlier ones', () => {
  assert.ok(sessionRank('N24') > sessionRank('M24'));
  assert.ok(sessionRank('M24') > sessionRank('N23'));
  assert.equal(sessionRank('May24'), Number.NEGATIVE_INFINITY);
});

test('a session has a month and a year for its label', () => {
  assert.deepEqual(sessionDate('M24'), { year: 2024, monthIndex: 4 });
  assert.deepEqual(sessionDate('N23'), { year: 2023, monthIndex: 10 });
  assert.equal(sessionDate('x'), null);
});

test('papers group by paper in order, each group newest session first', () => {
  const groups = groupPastPapers([ref('b', 'P2', 'M23'), ref('a', 'P1', 'M24'), ref('c', 'P2', 'N24'), ref('d', 'P1', 'N23')]);
  assert.deepEqual(groups.map(group => group.paper), ['P1', 'P2']);
  assert.deepEqual(groups[0].refs.map(item => item.id), ['a', 'd']);
  assert.deepEqual(groups[1].refs.map(item => item.id), ['c', 'b']);
});

test('the self-score sums scored items and counts unscored items as zero', () => {
  const paper = ref('x', 'P1', 'M24', 10, [{ q: '1a', marks: 4, topicIds: [] }, { q: '1b', marks: 6, topicIds: [] }]);
  assert.deepEqual(selfScore(paper, { '0': 3 }), { earned: 3, total: 10 });
  assert.deepEqual(selfScore(paper, undefined), { earned: 0, total: 10 });
});

test('a score is a whole number of marks from 0 to the item marks', () => {
  assert.equal(clampScore(7, 4), 4);
  assert.equal(clampScore(-2, 4), 0);
  assert.equal(clampScore(2.6, 4), 3);
  assert.equal(clampScore(Number.NaN, 4), 0);
});

test('stored past-paper progress keeps valid entries and drops broken ones', () => {
  const state = normalizeState({ pastPapers: { 'geo/a': { solved: '2026-10-13', scores: { '0': 3, '1': 'x', '2': -1 } }, 'geo/b': 5 } });
  assert.deepEqual(state.pastPapers, { 'geo/a': { solved: '2026-10-13', scores: { '0': 3 } } });
});

test('a state saved before past papers existed loads an empty record', () => {
  assert.deepEqual(normalizeState({}).pastPapers, {});
});
