import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { extendedMinutes, parseExams } from '../src/planner/calendar.ts';
import { hasExtraTimeSet, setAllowanceMinutes } from '../src/components/practice/timing.ts';

// The school's schedule, read from disk as the planner tests do.
const exams = parseExams(JSON.parse(readFileSync(new URL('../data/exams.json', import.meta.url), 'utf8')));

const allowance = (set, extraTime, subject = 'geo', schedule = exams) => setAllowanceMinutes({ subject, set, exams: schedule, extraTime });

test('without extra time a timed set runs for its printed time', () => {
  assert.equal(allowance({ paper: 'P1', minutes: 75 }, false), 75);
  assert.equal(allowance({ paper: 'P2', part: 'reading', minutes: 45 }, false, 'fr'), 45);
  assert.equal(allowance({ paper: 'P2', part: 'listening', minutes: 60 }, false, 'fr'), 60);
});

test('with extra time the school table gives the minutes (45 is 56, not 57)', () => {
  const table = { 45: 56, 60: 75, 75: 94, 90: 113, 105: 131, 120: 150, 150: 188 };
  for (const [printed, total] of Object.entries(table)) {
    assert.equal(allowance({ paper: 'P1', minutes: Number(printed) }, true), total, `${printed} minutes`);
  }
});

test('a time missing from the table is the printed time plus 25%, rounded to the nearest minute', () => {
  assert.equal(allowance({ paper: 'P1', minutes: 80 }, true), 100);
  assert.equal(allowance({ paper: 'P1', minutes: 20 }, true), 25);
  assert.equal(allowance({ paper: 'P1', minutes: 50 }, true), 63); // 62.5 rounds up
  assert.equal(allowance({ paper: 'P1', minutes: 45 }, true, 'geo', { ...exams, accessMinutes: {} }), 56);
});

test('the table wins over the arithmetic', () => {
  const custom = { ...exams, accessMinutes: { 45: 60 } };
  assert.equal(allowance({ paper: 'P2', part: 'reading', minutes: 45 }, true, 'fr', custom), 60);
});

test('listening has no extra time: the printed 60 minutes stays', () => {
  assert.equal(hasExtraTimeSet(exams, 'fr', { paper: 'P2', part: 'listening', minutes: 60 }), false);
  assert.equal(allowance({ paper: 'P2', part: 'listening', minutes: 60 }, true, 'fr'), 60);
  assert.equal(allowance({ paper: 'P2', part: 'listening', minutes: 60 }, false, 'fr'), 60);
});

test('only the French listening paper is exempt', () => {
  assert.equal(hasExtraTimeSet(exams, 'fr', { paper: 'P2', part: 'reading', minutes: 45 }), true);
  assert.equal(hasExtraTimeSet(exams, 'fr', { paper: 'P2', minutes: 45 }), true); // no part given
  assert.equal(hasExtraTimeSet(exams, 'eng', { paper: 'P2', part: 'listening', minutes: 60 }), true);
  assert.equal(hasExtraTimeSet(exams, 'fr', { paper: 'P1', minutes: 75 }), true);
  assert.equal(allowance({ paper: 'P2', part: 'reading', minutes: 45 }, true, 'fr'), 56);
  assert.equal(allowance({ paper: 'P1', minutes: 75 }, true, 'fr'), 94);
});

test('the exempt rule matches only the listening sitting in data/exams.json', () => {
  const exempt = exams.papers.filter(exam => !hasExtraTimeSet(exams, exam.subject, { paper: exam.paper, part: exam.part, minutes: exam.minutes }));
  assert.deepEqual(exempt.map(exam => exam.id), ['fr-p2l']);
});

test('a bad printed time gives 0 minutes', () => {
  for (const minutes of [0, -30, Number.NaN, Number.POSITIVE_INFINITY]) {
    assert.equal(allowance({ paper: 'P1', minutes }, false), 0, `${minutes} without extra time`);
    assert.equal(allowance({ paper: 'P1', minutes }, true), 0, `${minutes} with extra time`);
  }
});

test('every sitting in data/exams.json gets the planner time, except listening', () => {
  for (const exam of exams.papers) {
    const got = allowance({ paper: exam.paper, part: exam.part, minutes: exam.minutes }, true, exam.subject);
    const expected = exam.part === 'listening' ? exam.minutes : extendedMinutes(exams, exam.minutes);
    assert.equal(got, expected, exam.id);
  }
});
