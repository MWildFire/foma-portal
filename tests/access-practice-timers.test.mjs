import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { extendedMinutes, parseExams } from '../src/planner/calendar.ts';
import { hasExtraTimeSet, setAllowanceMinutes } from '../src/components/practice/timing.ts';
import { papers as csPapers } from '../content/cs/papers.ts';
import { papers as econPapers } from '../content/econ/papers.ts';
import { papers as engPapers } from '../content/eng/papers.ts';
import { papers as frPapers } from '../content/fr/papers.ts';
import { papers as mathPapers } from '../content/math/papers.ts';
import { papers as geoCorePapers } from '../content/geo/core/papers.ts';
import { papers as geoOptionPapers } from '../content/geo/options/papers.ts';
import { pastPapers as csPast } from '../content/cs/pastpapers.ts';
import { pastPapers as econPast } from '../content/econ/pastpapers.ts';
import { pastPapers as engPast } from '../content/eng/pastpapers.ts';
import { pastPapers as frPast } from '../content/fr/pastpapers.ts';
import { pastPapers as mathPast } from '../content/math/pastpapers.ts';
import { pastPapers as geoCorePast } from '../content/geo/core/pastpapers.ts';
import { pastPapers as geoOptionPast } from '../content/geo/options/pastpapers.ts';

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

test('a time missing from the table is the printed time plus 25%, rounded up to the minute (decision 6)', () => {
  assert.equal(allowance({ paper: 'P1', minutes: 80 }, true), 100);
  assert.equal(allowance({ paper: 'P1', minutes: 20 }, true), 25);
  assert.equal(allowance({ paper: 'P1', minutes: 50 }, true), 63); // 62.5 rounds up
  assert.equal(allowance({ paper: 'P1', minutes: 25 }, true, 'geo', { ...exams, accessMinutes: {} }), 32); // 31.25 rounds up
  assert.equal(allowance({ paper: 'P1', minutes: 45 }, true, 'geo', { ...exams, accessMinutes: {} }), 57); // 56.25 rounds up
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

test('CS timed sets: 120 minutes is 150 and 60 is 75 with extra time, the printed time without', () => {
  for (const paper of ['P1', 'P2']) {
    assert.equal(allowance({ paper, minutes: 120 }, true, 'cs'), 150, `CS ${paper} 120`);
    assert.equal(allowance({ paper, minutes: 60 }, true, 'cs'), 75, `CS ${paper} 60`);
    assert.equal(allowance({ paper, minutes: 120 }, false, 'cs'), 120, `CS ${paper} 120 without extra time`);
  }
});

test('economics P3 (60 minutes) is 75 with extra time, and the French reading set (45) is 56', () => {
  assert.equal(allowance({ paper: 'P3', minutes: 60 }, true, 'econ'), 75);
  assert.equal(allowance({ paper: 'P2', part: 'reading', minutes: 45 }, true, 'fr'), 56);
  assert.equal(allowance({ paper: 'P2', part: 'reading', minutes: 45 }, false, 'fr'), 45);
});

// Every sitting length the content prints, read the way the portal reads it: the timed sets of the paper guides and the
// past-paper refs (their minutes are the printed time; the portal adds the extra time on top).
const contentSittings = [
  ...[['cs', csPapers], ['econ', econPapers], ['eng', engPapers], ['fr', frPapers], ['math', mathPapers],
    ['geo', geoCorePapers], ['geo', geoOptionPapers]]
    .flatMap(([subject, guides]) => guides.flatMap(guide => (guide.timedSets ?? []).map(set => ({
      kind: 'timed set', subject, id: set.id, set: { paper: guide.paper, part: guide.part, minutes: set.minutes },
    })))),
  ...[['cs', csPast], ['econ', econPast], ['eng', engPast], ['fr', frPast], ['math', mathPast],
    ['geo', geoCorePast], ['geo', geoOptionPast]]
    .flatMap(([subject, refs]) => refs.map(ref => ({
      kind: 'past paper', subject, id: ref.id, set: { paper: ref.paper, part: ref.part, minutes: ref.minutes },
    }))),
];
const hasTableRow = ({ set }) => exams.accessMinutes[String(set.minutes)] !== undefined;

test('every timed set and past-paper length in the content gets the school table, and the French listening keeps its printed time', () => {
  assert.ok(contentSittings.length > 0, 'the content has sittings to check');
  for (const { kind, subject, id, set } of contentSittings) {
    assert.match(set.paper, /^P[123]$/, `${kind} ${subject} ${id}: paper`);
    const expected = set.part === 'listening' ? set.minutes : (exams.accessMinutes[String(set.minutes)] ?? Math.ceil(set.minutes * 1.25));
    assert.equal(allowance(set, true, subject), expected, `${kind} ${subject} ${id}`);
  }
});

test('the lengths the school table lacks are named here: their rule is printed time plus 25%, rounded up (decision 6)', () => {
  const lacking = contentSittings.filter(row => !hasTableRow(row));
  assert.deepEqual(
    lacking.filter(row => row.kind === 'timed set').map(row => `${row.subject} ${row.id}`).sort(),
    ['econ p1-essay-plan', 'eng p1-one-extract-30', 'eng p2-essay-80', 'eng p2-plan-10'],
  );
  assert.deepEqual(
    [...new Set(lacking.filter(row => row.kind === 'past paper').map(row => row.set.minutes))].sort((a, b) => a - b),
    [15, 20, 30, 80, 130],
  );
});
