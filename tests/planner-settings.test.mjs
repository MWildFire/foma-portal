import test from 'node:test';
import assert from 'node:assert/strict';
import {
  blocksOf, dayOf, emptyState, minutesOf, plan, quotas, sum, withSettings,
} from './planner-fixtures.mjs';
import { weekdayOf } from '../src/planner/dates.ts';

test('default daily loads: Mon-Thu 150, Fri 120, Sat-Sun 270', () => {
  const result = plan('2026-10-14');
  const capacityOn = date => dayOf(result, date).capacity;
  assert.deepEqual(
    ['2026-10-14', '2026-10-15', '2026-10-19', '2026-10-22'].map(capacityOn), [150, 150, 150, 150], 'Wed, Thu, Mon, Thu',
  );
  assert.deepEqual(['2026-10-16', '2026-10-23'].map(capacityOn), [120, 120], 'Fridays');
  assert.deepEqual(['2026-10-17', '2026-10-18', '2026-10-24', '2026-10-31'].map(capacityOn), [270, 270, 270, 270], 'weekends');
  assert.equal(weekdayOf('2026-10-17'), 'sat');
});

test('exam days keep only the evening: the capacity comes from the schedule', () => {
  const result = plan('2026-10-14');
  assert.deepEqual(['2026-10-26', '2026-10-27', '2026-10-28', '2026-10-29'].map(d => dayOf(result, d).capacity), [90, 120, 120, 60]);
  const thursday = dayOf(result, '2026-10-29');
  assert.ok(thursday.blocks.every(b => b.subject === 'econ'), 'only the Economics warm-up is planned after the English papers');
  assert.equal(thursday.minutes, 60);
  assert.equal(thursday.blocks.some(b => b.kind === 'recall'), false, 'no recall on a 60-minute evening');
});

test('an exam day without a quota entry gets the evening capacity of 60 minutes', () => {
  const lastDay = dayOf(plan('2026-10-14'), '2026-11-05');
  assert.equal(lastDay.kind, 'exam');
  assert.equal(lastDay.capacity, 60);
  assert.equal(lastDay.blocks.length, 0, 'every subject is finished by then');
});

test('a weekday load setting changes every ordinary day of that weekday', () => {
  const state = withSettings(emptyState(), { dailyLoadMinutes: { sat: 180 } });
  const result = plan('2026-10-14', { state });
  const saturdays = result.days.filter(d => weekdayOf(d.date) === 'sat');
  assert.deepEqual(saturdays.map(d => d.date), ['2026-10-17', '2026-10-24', '2026-10-31']);
  for (const day of saturdays) assert.equal(day.capacity, 180, day.date);
  const oct17 = dayOf(result, '2026-10-17');
  assert.equal(oct17.minutes, 180);
  assert.ok(blocksOf(oct17, 'geo').length > 0 && blocksOf(oct17, 'cs').length > 0, 'every subject keeps a share');
  // Sunday is untouched.
  assert.equal(dayOf(result, '2026-10-18').capacity, 270);
  assert.equal(dayOf(result, '2026-10-18').minutes, 270);
});

test('quotas scale in proportion when the load changes', () => {
  const halved = plan('2026-10-14', { state: withSettings(emptyState(), { dailyLoadMinutes: { wed: 75 } }) });
  const normal = plan('2026-10-14');
  const day = dayOf(halved, '2026-10-14');
  assert.equal(day.capacity, 75);
  assert.ok(Math.abs(day.minutes - 75) <= 0.15 * 75, `got ${day.minutes}`);
  const bySubject = s => minutesOf(blocksOf(day, s));
  const base = s => minutesOf(blocksOf(dayOf(normal, '2026-10-14'), s));
  // 60 : 45 : 30 stays the ratio, within the 5-minute granularity.
  assert.ok(bySubject('geo') > bySubject('math') && bySubject('math') > bySubject('eng'));
  assert.ok(Math.abs(bySubject('geo') - base('geo') * 0.444) <= 6);
  assert.equal(day.blocks[0].minutes, 15, 'recall keeps its 15 minutes');

  const doubled = plan('2026-10-14', { state: withSettings(emptyState(), { dailyLoadMinutes: { wed: 300 } }) });
  assert.equal(dayOf(doubled, '2026-10-14').minutes, 300);
});

test('an override equal to the planned load changes nothing', () => {
  const same = plan('2026-10-14', { state: withSettings(emptyState(), { dailyLoadMinutes: { wed: 150, thu: 150 } }) });
  assert.deepEqual(same.days.slice(0, 2), plan('2026-10-14').days.slice(0, 2));
});

test('weekday settings never touch exam days', () => {
  const state = withSettings(emptyState(), { dailyLoadMinutes: { mon: 30, tue: 30, wed: 30, thu: 30 } });
  const result = plan('2026-10-14', { state });
  assert.equal(dayOf(result, '2026-10-26').capacity, 90); // Monday, exam day
  assert.equal(dayOf(result, '2026-10-27').capacity, 120);
  assert.equal(dayOf(result, '2026-10-19').capacity, 30); // an ordinary Monday
  assert.equal(dayOf(result, '2026-10-19').minutes, 30);
  assert.equal(dayOf(result, '2026-10-26').minutes, 90);
});

test('a rest day (0 minutes) has no blocks and its timed papers move on', () => {
  const state = withSettings(emptyState(), { dailyLoadMinutes: { sat: 0 } });
  const result = plan('2026-10-14', { state });
  for (const date of ['2026-10-17', '2026-10-24', '2026-10-31']) {
    const day = dayOf(result, date);
    assert.equal(day.kind, 'rest');
    assert.deepEqual(day.blocks, []);
    assert.equal(day.minutes, 0);
  }
  // The two timed papers of 24 Oct find no room before their last exams.
  const unplaced = Object.fromEntries(result.unplaced.map(u => [u.subject, u.timed.map(t => t.paper)]));
  assert.deepEqual(unplaced.math, ['P2']);
  assert.deepEqual(unplaced.geo, ['P2']);
});

test('extra time gives timed sets 25% more time and keeps the day the same length', () => {
  const normal = dayOf(plan('2026-10-14'), '2026-10-24');
  const extra = dayOf(plan('2026-10-14', { state: withSettings(emptyState(), { accessArrangements: { extraTime: true } }) }), '2026-10-24');
  const timed = day => Object.fromEntries(day.blocks.filter(b => b.kind === 'timed').map(b => [b.subject, b.minutes]));
  assert.deepEqual(timed(normal), { math: 120, geo: 75 });
  assert.deepEqual(timed(extra), { math: 150, geo: 94 });
  assert.ok(Math.abs(extra.minutes - normal.minutes) <= 0.15 * normal.minutes);
  assert.ok(extra.minutes >= 150 + 94 + 15);
  const everyDay = plan('2026-10-14', { state: withSettings(emptyState(), { accessArrangements: { extraTime: true } }) });
  for (const day of everyDay.days.filter(d => d.blocks.length > 0)) {
    assert.ok(Math.abs(day.minutes - day.capacity) <= 0.15 * day.capacity, `${day.date}: ${day.minutes} vs ${day.capacity}`);
  }
});

test('a separate room changes nothing in the plan itself', () => {
  const room = plan('2026-10-14', { state: withSettings(emptyState(), { accessArrangements: { separateRoom: true } }) });
  assert.deepEqual(room, plan('2026-10-14'));
});

test('the planned load of the real quotas equals the 62 hours promised in PLAN.md', () => {
  const planned = plan('2026-10-14');
  const total = sum(planned.days.map(d => d.minutes));
  assert.equal(total, sum(quotas.days.map(d => d.capacity)));
  assert.ok(Math.abs(total / 60 - 62) < 0.5, `${total / 60} hours`);
});
