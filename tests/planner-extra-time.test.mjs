// Extra time in the plan (PLAN.md §5): a timed paper gets 25% more time from the school's table; a day never goes past
// 115% of its capacity, and when it would, the review of its timed papers moves to the next day.
import test from 'node:test';
import assert from 'node:assert/strict';
import { blocksOf, dayOf, emptyState, exams, makeSubjects, minutesOf, plan, quotas, withSettings } from './planner-fixtures.mjs';

const extraState = () => withSettings(emptyState(), { accessArrangements: { extraTime: true } });
const unplacedOf = (result, subject) => result.unplaced.find(item => item.subject === subject)?.minutes ?? 0;

test('24 Oct with extra time: the papers get their table lengths, the day stays within 115%, the review moves on', () => {
  const result = plan('2026-10-14', { state: extraState() });
  const day = dayOf(result, '2026-10-24');
  assert.equal(day.capacity, 270);
  assert.deepEqual(
    Object.fromEntries(blocksOf(day, 'math').filter(b => b.kind === 'timed').map(b => [b.paper, b.minutes])),
    { P2: 150 },
    'Maths P2: 120 becomes 150 from the table',
  );
  assert.deepEqual(
    Object.fromEntries(day.blocks.filter(b => b.kind === 'timed' && b.subject === 'geo').map(b => [b.paper, b.minutes])),
    { P2: 94 },
    'Geography P2: 75 becomes 94 from the table',
  );
  // Without the move the day would be 15 recall + 150 + 30 review + 94 + 30 review = 319 minutes, past 115% of 270 (310).
  assert.ok(day.minutes <= Math.floor(day.capacity * 1.15), `${day.minutes} minutes`);
  assert.equal(day.minutes, 309);
  // Maths keeps its review, Geography (the less important subject that day) gives up 10 minutes of it.
  assert.equal(minutesOf(blocksOf(day, 'math').filter(b => b.kind !== 'timed')), 30);
  assert.equal(minutesOf(blocksOf(day, 'geo').filter(b => b.kind !== 'timed')), 20);
  // Nothing is lost: the 10 minutes wait for a later day of Geography. 25-27 Oct are its eve and exam days, so they
  // stay unplaced.
  assert.equal(unplacedOf(result, 'geo'), 10);
});

test('without extra time the same day is the printed plan: nothing moves', () => {
  const result = plan('2026-10-14');
  const day = dayOf(result, '2026-10-24');
  assert.equal(day.minutes, 270);
  assert.equal(minutesOf(blocksOf(day, 'geo').filter(b => b.kind !== 'timed')), 30);
  assert.equal(unplacedOf(result, 'geo'), 0);
});

test('a day that cannot hold the extended paper within 115% moves the review of that paper to the next day', () => {
  // Capacity 150 and one timed Maths P2 (120 becomes 150) with a 30-minute review: 150 + 30 = 180 is past 172 (115%),
  // so 10 minutes of the review move to the next day. That day has room, so they are placed there as moved work.
  const tight = {
    ...quotas,
    start: '2026-10-22',
    end: '2026-10-23',
    days: [
      { date: '2026-10-22', capacity: 150, recall: 0, examDay: false, focus: null, quota: { math: 150 }, subjectOrder: ['math'], timed: [{ subject: 'math', paper: 'P2', minutes: 120 }] },
      { date: '2026-10-23', capacity: 150, recall: 0, examDay: false, focus: null, quota: { math: 150 }, subjectOrder: ['math'], timed: [] },
    ],
  };
  const subjects = makeSubjects();
  const withExtra = plan('2026-10-22', { state: extraState(), subjects, quotasFile: tight });
  const first = dayOf(withExtra, '2026-10-22');
  assert.equal(minutesOf(blocksOf(first, 'math').filter(b => b.kind === 'timed')), 150);
  assert.equal(first.minutes, 170, 'the review shrinks by 10 to fit 115%');
  assert.ok(first.minutes <= Math.floor(first.capacity * 1.15));
  const next = dayOf(withExtra, '2026-10-23');
  assert.equal(next.moved, 10, 'the 10 minutes come back as moved work on the next day');
  assert.equal(next.minutes, 160);

  const without = plan('2026-10-22', { subjects, quotasFile: tight });
  assert.equal(dayOf(without, '2026-10-22').minutes, 150);
  assert.equal(dayOf(without, '2026-10-23').moved, 0);
});

test('the real plan with extra time never goes past 115% on a day, and every extended paper keeps its table length', () => {
  const result = plan('2026-10-14', { state: extraState() });
  for (const day of result.days) {
    assert.ok(day.minutes <= Math.floor(day.capacity * 1.15), `${day.date}: ${day.minutes} against ${day.capacity}`);
  }
  // A timed block is checked against its own entry: a set of the guide (its route has `?set=`), or a whole paper.
  const entryOf = block => quotas.days.flatMap(d => d.timed).find(t =>
    t.subject === block.subject && t.paper === block.paper && block.route.includes('?set=') === (t.set !== undefined));
  for (const block of result.days.flatMap(day => day.blocks.filter(b => b.kind === 'timed'))) {
    const paper = exams.papers.find(p => p.subject === block.subject && p.paper === block.paper);
    assert.equal(block.minutes, exams.accessMinutes[String(entryOf(block).minutes)], `${block.date} ${block.subject} ${block.paper}`);
    assert.ok(paper, 'every timed block has its paper in the exam file');
  }
});
