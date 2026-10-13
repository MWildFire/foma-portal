import test from 'node:test';
import assert from 'node:assert/strict';
import { nextExam, splitDuration } from '../src/planner/countdown.ts';
import { dubaiEpoch } from '../src/planner/dates.ts';
import { exams } from './planner-fixtures.mjs';

const at = (date, time) => dubaiEpoch(date, time);

test('before the first exam the countdown points at it and counts down to its start', () => {
  const next = nextExam(exams, at('2026-10-13', '15:00'), false);
  assert.equal(next.exam.id, 'math-p1');
  assert.equal(next.phase, 'upcoming');
  assert.equal(next.remainingMs, at('2026-10-26', '08:00') - at('2026-10-13', '15:00'));
  assert.equal(next.exam.room, 'ACC2');
});

test('during a sitting the exam is running and the countdown is to its end', () => {
  const next = nextExam(exams, at('2026-10-26', '08:30'), false);
  assert.equal(next.exam.id, 'math-p1');
  assert.equal(next.phase, 'running');
  assert.equal(next.remainingMs, 90 * 60_000);
});

test('extra time keeps an exam running for 25% longer', () => {
  assert.equal(nextExam(exams, at('2026-10-26', '10:10'), false).exam.id, 'geo-p1');
  const extra = nextExam(exams, at('2026-10-26', '10:10'), true);
  assert.equal(extra.exam.id, 'math-p1');
  assert.equal(extra.phase, 'running');
  assert.equal(extra.remainingMs, 20 * 60_000); // 120 -> 150 minutes ends at 10:30
});

test('after one exam the next one on the schedule takes over, even on the same day', () => {
  assert.equal(nextExam(exams, at('2026-10-26', '10:01'), false).exam.id, 'geo-p1');
  assert.equal(nextExam(exams, at('2026-10-26', '15:01'), false).exam.id, 'geo-p2');
  assert.equal(nextExam(exams, at('2026-10-29', '13:00'), false).exam.id, 'econ-p3');
});

test('after the last exam there is nothing to count down to', () => {
  assert.equal(nextExam(exams, at('2026-11-05', '10:14'), false).exam.id, 'cs-p2');
  assert.equal(nextExam(exams, at('2026-11-05', '10:15'), false), null);
  assert.equal(nextExam({ ...exams, papers: [] }, at('2026-10-13', '12:00'), false), null);
});

test('a duration is split into days, hours, minutes and seconds', () => {
  assert.deepEqual(splitDuration(((13 * 24 + 7) * 60 + 42) * 60_000 + 5_000), { days: 13, hours: 7, minutes: 42, seconds: 5 });
  assert.deepEqual(splitDuration(59_999), { days: 0, hours: 0, minutes: 0, seconds: 59 });
  assert.deepEqual(splitDuration(-5), { days: 0, hours: 0, minutes: 0, seconds: 0 });
});
