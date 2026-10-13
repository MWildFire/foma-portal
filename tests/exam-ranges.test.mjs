// The two time ranges of an exam on #/exams (src/lib/exam-ranges.ts), checked against data/exams.json.
import test from 'node:test';
import assert from 'node:assert/strict';
import { exams } from './planner-fixtures.mjs';
import { examStartClock, sittingMinutes } from '../src/planner/calendar.ts';
import { examRanges } from '../src/lib/exam-ranges.ts';

const byId = id => exams.papers.find(exam => exam.id === id);
const minutesOf = clock => Number(clock.slice(0, 2)) * 60 + Number(clock.slice(3, 5));
// "08:00–10:30" -> ["08:00", "10:30"]
const endsOf = range => range.split('–');

test('math P1 at 08:00 for 120 minutes: printed 08:00–10:00, with extra time 08:00–10:30 (150 minutes)', () => {
  assert.deepEqual(examRanges(exams, byId('math-p1'), false), {
    printed: { range: '08:00–10:00', minutes: 120 },
    extended: { range: '08:00–10:30', minutes: 150 },
  });
});

test('the separate room moves only the extended range, and only where the schedule gives an ACC2 start', () => {
  // Geography P2: printed 08:15 for 75 minutes. Its ACC2 start is 08:00, so with extra time (94 minutes) it is 08:00–09:34.
  assert.deepEqual(examRanges(exams, byId('geo-p2'), false), {
    printed: { range: '08:15–09:30', minutes: 75 },
    extended: { range: '08:15–09:49', minutes: 94 },
  });
  assert.deepEqual(examRanges(exams, byId('geo-p2'), true), {
    printed: { range: '08:15–09:30', minutes: 75 },
    extended: { range: '08:00–09:34', minutes: 94 },
  });
  // Maths P3: printed 10:15 for 75 minutes; ACC2 from 09:30, so 09:30–11:04 (as in access-exams.test.mjs).
  assert.equal(examRanges(exams, byId('math-p3'), true).extended.range, '09:30–11:04');
});

test('French listening has no extra time: only the printed range 14:45–15:45, with or without a separate room', () => {
  for (const separateRoom of [false, true]) {
    assert.deepEqual(examRanges(exams, byId('fr-p2l'), separateRoom), {
      printed: { range: '14:45–15:45', minutes: 60 },
      extended: null,
    });
  }
});

test('every paper: the printed range starts at the main-hall time and lasts the printed length', () => {
  for (const exam of exams.papers) {
    const { printed } = examRanges(exams, exam, true);
    const [from, to] = endsOf(printed.range);
    assert.equal(from, exam.start, exam.id);
    assert.equal(minutesOf(to) - minutesOf(from), exam.minutes, exam.id);
    assert.equal(printed.minutes, exam.minutes, exam.id);
  }
});

test('every paper: the extended range starts at the student\'s own start and lasts as long as the timer (sittingMinutes with extra time)', () => {
  for (const exam of exams.papers) {
    for (const separateRoom of [false, true]) {
      const { extended } = examRanges(exams, exam, separateRoom);
      // The listening is the only paper without extra time in data/exams.json.
      if (exam.id === 'fr-p2l') {
        assert.equal(extended, null, exam.id);
        continue;
      }
      assert.notEqual(extended, null, exam.id);
      const [from, to] = endsOf(extended.range);
      assert.equal(from, examStartClock(exam, separateRoom), `${exam.id} start`);
      assert.equal(minutesOf(to) - minutesOf(from), sittingMinutes(exams, exam, true), `${exam.id} length`);
      assert.equal(extended.minutes, sittingMinutes(exams, exam, true), exam.id);
    }
  }
});
