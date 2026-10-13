import test from 'node:test';
import assert from 'node:assert/strict';
import { lastExamDate } from '../src/planner/calendar.ts';
import { parseBlockId } from '../src/planner/blocks.ts';
import { markBlockDone, setTopicRag } from '../src/planner/actions.ts';
import { dateRange } from '../src/planner/dates.ts';
import { emptyState, exams, makeSubjects, plan, SUBJECTS } from './planner-fixtures.mjs';

// A small deterministic random generator, so a failure can be replayed.
function random(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function checkPlan(result, state, label) {
  const seen = new Set();
  for (const day of result.days) {
    const where = `${label}: ${day.date}`;
    assert.equal(day.minutes, day.blocks.reduce((a, b) => a + b.minutes, 0), `${where}: minutes are the sum of the blocks`);
    assert.ok(day.doneMinutes <= day.minutes, `${where}: done minutes`);
    if (day.blocks.length > 0) {
      // Timed papers keep their length even when a lighter load setting would not hold them.
      const fixed = day.blocks.filter(b => b.kind === 'recall' || b.kind === 'timed').reduce((a, b) => a + b.minutes, 0);
      assert.ok(day.minutes <= Math.max(Math.floor(1.15 * day.capacity), fixed), `${where}: ${day.minutes} min over 115% of ${day.capacity}`);
    }
    const eveSubjects = new Set(day.eveOf.map(exam => exam.subject));
    for (const block of day.blocks) {
      assert.ok(!seen.has(block.id), `${where}: duplicate id ${block.id}`);
      seen.add(block.id);
      assert.notEqual(parseBlockId(block.id), null, `${where}: unparsable id ${block.id}`);
      assert.ok(block.minutes > 0, `${where}: empty block ${block.id}`);
      assert.ok(['planned', 'moved', 'done'].includes(block.status), `${where}: status`);
      if (!day.isToday) {
        assert.notEqual(block.status, 'done', `${where}: ${block.id} is done on a future day`);
        assert.equal(state.blocks[block.id], undefined, `${where}: ${block.id} was finished already`);
      }
      if (!block.subject) continue;
      assert.ok(day.date < lastExamDate(exams, block.subject), `${where}: ${block.subject} after its last exam`);
      if (eveSubjects.has(block.subject)) {
        const sitting = day.eveOf.filter(exam => exam.subject === block.subject);
        assert.ok(['paper', 'timed'].includes(block.kind), `${where}: ${block.kind} on the eve of ${block.subject}`);
        if (block.kind === 'paper') assert.ok(sitting.some(exam => exam.id === block.examId), `${where}: ${block.examId}`);
        if (block.kind === 'timed') assert.ok(sitting.some(exam => exam.paper === block.paper), `${where}: timed ${block.paper}`);
      }
    }
  }
}

for (const seed of [1, 2, 3, 4]) {
  test(`random progress, seed ${seed}: every recalculation keeps the planner’s rules`, () => {
    const next = random(seed);
    const subjects = makeSubjects(seed % 2 === 0 ? 40 : 6);   // plenty of topics, or so few that practice starts early
    let state = emptyState();
    if (seed === 3) state.settings.accessArrangements.extraTime = true;
    if (seed === 4) state.settings.dailyLoadMinutes = { sat: 200, mon: 100, fri: 60 };
    for (const date of dateRange('2026-10-13', '2026-11-05')) {
      const result = plan(date, { subjects, state });
      checkPlan(result, state, `seed ${seed} today ${date}`);
      assert.deepEqual(result, plan(date, { subjects, state }), 'deterministic');
      const today = result.days.find(day => day.isToday);
      if (!today) continue;
      for (const block of today.blocks) {
        if (block.status === 'done' || next() < 0.3) continue;
        state = markBlockDone(state, block, date);
        if (block.kind === 'topic' && block.last && next() < 0.5) {
          state = setTopicRag(state, block.subject, block.topicId, ['red', 'amber', 'green'][Math.floor(next() * 3)]);
        }
      }
      // After the click the list is the same list, with the clicked blocks done.
      const again = plan(date, { subjects, state }).days.find(day => day.isToday);
      assert.deepEqual(again.blocks.map(b => b.id), today.blocks.map(b => b.id), `seed ${seed} ${date}: the list moved under the student`);
    }
  });
}

test('every possible “today” gives a valid plan, even with no progress at all', () => {
  for (const date of dateRange('2026-10-01', '2026-11-08')) {
    const result = plan(date);
    checkPlan(result, emptyState(), `today ${date}`);
    const expectedActive = SUBJECTS.filter(s => date < lastExamDate(exams, s)).sort();
    assert.deepEqual([...result.activeSubjects].sort(), expectedActive, `active subjects on ${date}`);
  }
});

test('the rules follow the calendar: moving an exam moves its eve and its last day', () => {
  // Economics P1 moves to 30 Oct (it was 3 Nov), so 29 Oct becomes its eve; Econ P3 and P2 stay on 2 Nov.
  const changed = { ...exams, papers: exams.papers.map(p => (p.id === 'econ-p1' ? { ...p, date: '2026-10-30' } : p)).sort((a, b) => `${a.date} ${a.start}`.localeCompare(`${b.date} ${b.start}`)) };
  const result = plan('2026-10-14', { examsFile: changed });
  const eve = result.days.find(day => day.date === '2026-10-29');
  assert.deepEqual(eve.blocks.map(b => [b.kind, b.examId]), [['paper', 'econ-p1']]);
  assert.equal(eve.minutes, 60);
  for (const day of result.days) {
    for (const block of day.blocks) {
      if (block.subject) assert.ok(day.date < lastExamDate(changed, block.subject), `${day.date} ${block.id}`);
    }
  }
  // CS keeps working after Economics is over; nothing is planned for Economics after 2 Nov.
  const econ = date => result.days.find(d => d.date === date).blocks.filter(b => b.subject === 'econ');
  assert.deepEqual(econ('2026-11-01').map(b => b.examId).sort(), ['econ-p2', 'econ-p3'], 'the eve of Econ P3 and P2');
  assert.equal(econ('2026-11-02').length, 0, 'nothing for Economics on its new last exam day');
});
