// Access arrangements (PLAN.md §0): the exam file, the extra-time lengths, the ACC2 starts, the halls and the clashes.
import test from 'node:test';
import assert from 'node:assert/strict';
import { exams } from './planner-fixtures.mjs';
import { extendedMinutes, hasExtraTime, noExtraTimeFor, sittingMinutes } from '../src/planner/calendar.ts';
import { hallClashes, hallOf, hallWindows } from '../src/planner/rooms.ts';
import { accessChoiceOf } from '../src/planner/access.ts';
import { setExamRoom } from '../src/planner/actions.ts';
import { emptyState } from './planner-fixtures.mjs';

const minutesOf = clock => Number(clock.slice(0, 2)) * 60 + Number(clock.slice(3, 5));
const byId = id => exams.papers.find(exam => exam.id === id);

// The ACC2 starts. Where the printout gives no ACC2 time, the start is 15 minutes before the main-hall start
// (geo-p1, fr-p1, fr-p2r, fr-p2l, eng-p1, eng-p2). Maths P1 is printed in ACC2 at 08:00 only, so 08:00 is its ACC2 start.
const ACC2_START = {
  'math-p1': '08:00', 'geo-p1': '13:15', 'geo-p2': '08:00', 'math-p3': '09:30', 'math-p2': '13:20', 'fr-p1': '08:00',
  'fr-p2r': '10:30', 'fr-p2l': '14:30', 'eng-p1': '08:00', 'eng-p2': '10:45', 'econ-p3': '10:30', 'econ-p2': '13:45',
  'econ-p1': '08:00', 'cs-p1': '13:30', 'cs-p2': '08:00',
};

test('the access block of the schedule file: 25% extra time, and the French listening is the one paper without it', () => {
  assert.equal(exams.access.extraTime, 0.25);
  assert.deepEqual(exams.access.noExtraTime, ['fr-p2l']);
  assert.equal(hasExtraTime(exams, byId('fr-p2l')), false);
  assert.equal(hasExtraTime(exams, byId('fr-p2r')), true);
  assert.equal(noExtraTimeFor(exams, 'fr', 'P2', 'listening'), true);
  assert.equal(noExtraTimeFor(exams, 'fr', 'P2', 'reading'), false);
  assert.equal(noExtraTimeFor(exams, 'math', 'P2'), false);
});

test('every entry of the accessMinutes table is the printed length plus 25%, rounded', () => {
  for (const [minutes, extended] of Object.entries(exams.accessMinutes)) {
    assert.equal(extended, Math.round(Number(minutes) * 1.25), `${minutes} minutes`);
  }
});

test('every paper of the file gets the extended length from the table (or the rounded 25%) and French listening keeps its length', () => {
  for (const exam of exams.papers) {
    const extended = Math.round(exam.minutes * 1.25);
    assert.equal(extendedMinutes(exams, exam.minutes), extended, exam.id);
    const expected = exam.id === 'fr-p2l' ? exam.minutes : extended;
    assert.equal(sittingMinutes(exams, exam, true), expected, `${exam.id} with extra time`);
    assert.equal(sittingMinutes(exams, exam, false), exam.minutes, `${exam.id} without extra time`);
  }
});

test('every paper has the ACC2 start the schedule gives (or start minus 15 minutes where no ACC2 time is printed)', () => {
  assert.equal(exams.papers.length, Object.keys(ACC2_START).length);
  for (const exam of exams.papers) {
    assert.equal(exam.acc2Start, ACC2_START[exam.id], exam.id);
    if (['geo-p1', 'fr-p1', 'fr-p2r', 'fr-p2l', 'eng-p1', 'eng-p2'].includes(exam.id)) {
      assert.equal(minutesOf(exam.start) - minutesOf(exam.acc2Start), 15, exam.id);
    }
  }
  assert.equal(byId('geo-p2').acc2Start, '08:00', 'Geography P2 is ACC2 from 08:00 (school)');
});

test('the ACC2 window of Geography P2 with extra time is 08:00 to 09:34', () => {
  const windows = hallWindows(exams, 'ACC2', true);
  const geo = windows.find(w => w.exam.id === 'geo-p2');
  assert.equal(geo.hall, 'ACC2');
  assert.deepEqual([geo.start, geo.end], ['08:00', '09:34']);
  const math = windows.find(w => w.exam.id === 'math-p3');
  assert.deepEqual([math.start, math.end], ['09:30', '11:04']);
});

test('the paper listed only in ACC2 stays in ACC2 whatever the student chose', () => {
  assert.equal(hallOf(byId('math-p1'), 'SpHal2'), 'ACC2');
  assert.equal(hallOf(byId('math-p1'), 'unknown'), 'ACC2');
  assert.equal(hallOf(byId('geo-p1'), 'unknown'), 'SpHal2');
  assert.equal(hallOf(byId('geo-p1'), 'ACC2'), 'ACC2');
});

test('ACC2 with extra time: exactly one clash, Geography P2 against Maths P3 on 27 Oct', () => {
  const clashes = hallClashes(exams, 'ACC2', true);
  assert.equal(clashes.length, 1);
  const [clash] = clashes;
  assert.equal(clash.date, '2026-10-27');
  assert.equal(clash.hall, 'ACC2');
  assert.deepEqual([clash.first.exam.id, clash.first.start, clash.first.end], ['geo-p2', '08:00', '09:34']);
  assert.deepEqual([clash.second.exam.id, clash.second.start], ['math-p3', '09:30']);
});

test('the clash depends on the length: without extra time the two ACC2 windows do not overlap', () => {
  assert.deepEqual(hallClashes(exams, 'ACC2', false), []);
});

test('the main hall and an unknown room have no clashes in the schedule', () => {
  assert.deepEqual(hallClashes(exams, 'SpHal2', true), []);
  assert.deepEqual(hallClashes(exams, 'unknown', true), []);
});

test('clash rules on a small schedule: touching windows are fine, a one-minute overlap is a clash, other halls are fine', () => {
  const paper = (id, date, start, minutes, room = 'SpHal2') => ({
    id, subject: 'geo', paper: 'P1', title: id, date, start, acc2Start: start, minutes, room,
  });
  const pairsOf = list => list.map(c => [c.first.exam.id, c.second.exam.id]);
  const small = (b, d) => ({
    ...exams,
    papers: [
      paper('a', '2026-11-01', '08:00', 60),
      paper('b', '2026-11-01', b, 60),                 // with extra time a runs 08:00-09:15
      paper('c', '2026-11-02', '08:00', 60),
      paper('d', '2026-11-02', '08:00', 60, d),        // 'ACC2' is a hall of its own in the main-hall choice
    ],
  });
  // ACC2 chosen, extra time: a ends at 09:15 exactly when b starts, so only the same-time pair c and d clashes.
  assert.deepEqual(pairsOf(hallClashes(small('09:15', 'SpHal2'), 'ACC2', true)), [['c', 'd']]);
  // A one-minute overlap (b starts at 09:14) is a clash.
  assert.deepEqual(pairsOf(hallClashes(small('09:14', 'SpHal2'), 'ACC2', true)), [['a', 'b'], ['c', 'd']]);
  // Main hall chosen: d is listed in ACC2 in the file, so it is not in the main hall with c; a and b still touch only.
  assert.deepEqual(pairsOf(hallClashes(small('09:15', 'ACC2'), 'SpHal2', true)), []);
});

test('the access choice: extra time on and the room unknown by default, a stored room wins, a legacy flag still means ACC2', () => {
  assert.deepEqual(accessChoiceOf(undefined), { extraTime: true, room: 'unknown', separateRoom: false });
  assert.deepEqual(accessChoiceOf({ extraTime: false, separateRoom: false }), { extraTime: false, room: 'unknown', separateRoom: false });
  assert.deepEqual(accessChoiceOf({ extraTime: true, separateRoom: true }), { extraTime: true, room: 'ACC2', separateRoom: true });
  assert.deepEqual(accessChoiceOf({ extraTime: true, room: 'SpHal2', separateRoom: true }), { extraTime: true, room: 'SpHal2', separateRoom: false });
  assert.deepEqual(accessChoiceOf({ extraTime: true, room: 'ACC3' }), { extraTime: true, room: 'unknown', separateRoom: false });
});

test('choosing the room writes it into the settings and keeps the old flag in step', () => {
  let state = setExamRoom(emptyState(), 'ACC2');
  assert.equal(state.settings.accessArrangements.room, 'ACC2');
  assert.equal(state.settings.accessArrangements.separateRoom, true);
  state = setExamRoom(state, 'SpHal2');
  assert.equal(state.settings.accessArrangements.room, 'SpHal2');
  assert.equal(state.settings.accessArrangements.separateRoom, false);
  assert.equal(state.settings.accessArrangements.extraTime, false, 'the extra time choice is left alone');
});
