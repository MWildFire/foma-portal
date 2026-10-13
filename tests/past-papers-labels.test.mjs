import test from 'node:test';
import assert from 'node:assert/strict';
import { groupPastPapers, sessionLabel } from '../src/lib/past-papers.ts';

// Labels and order of past-paper sessions, including the specimen paper (SPEC27), which the page lists first.

const ref = (id, paper, session) => ({ id, subject: 'cs', paper, session, level: 'HL', files: [], minutes: 90, marks: 10, items: [] });

test('a specimen paper is named by its exam year, with the English name in brackets for Russian readers', () => {
  assert.equal(sessionLabel('SPEC27', 'en'), 'Specimen 2027');
  assert.equal(sessionLabel('SPEC27', 'ru'), 'Образец 2027 (Specimen 2027)');
  assert.equal(sessionLabel('SPEC27', 'ru-RU'), 'Образец 2027 (Specimen 2027)');
});

test('May and November sessions keep their month names, and any other code is shown as it is', () => {
  assert.equal(sessionLabel('M24', 'en'), 'May 2024');
  assert.equal(sessionLabel('N23', 'en'), 'November 2023');
  assert.equal(sessionLabel('SPEC', 'en'), 'SPEC');
  assert.equal(sessionLabel('SPEC2027', 'en'), 'SPEC2027');
});

test('the specimen paper lists first, ahead of the May and November sessions', () => {
  const groups = groupPastPapers([ref('a', 'P1', 'N25'), ref('b', 'P1', 'SPEC27'), ref('c', 'P1', 'M25'), ref('d', 'P1', 'SPEC26')]);
  assert.deepEqual(groups[0].refs.map(item => item.session), ['SPEC27', 'SPEC26', 'N25', 'M25']);
});

test('every paper group lists its specimen first', () => {
  const groups = groupPastPapers([ref('a', 'P2', 'M25'), ref('b', 'P2', 'SPEC27'), ref('c', 'P1', 'SPEC27'), ref('d', 'P1', 'N24')]);
  assert.deepEqual(groups.map(group => group.refs[0].id), ['c', 'b']);
});

test('an unknown session code still sorts last', () => {
  const groups = groupPastPapers([ref('a', 'P1', 'SPEC'), ref('b', 'P1', 'N20')]);
  assert.deepEqual(groups[0].refs.map(item => item.id), ['b', 'a']);
});
