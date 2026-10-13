import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import {
  addDays, dateRange, daysBetween, dubaiEpoch, dubaiToday, formatClock, isDate, parseClock, weekdayOf,
} from '../src/planner/dates.ts';

test('dubaiToday follows Asia/Dubai (UTC+4) around midnight', () => {
  assert.equal(dubaiToday(Date.parse('2026-10-13T19:59:59Z')), '2026-10-13'); // 23:59:59 in Dubai
  assert.equal(dubaiToday(Date.parse('2026-10-13T20:00:00Z')), '2026-10-14'); // 00:00:00 in Dubai
  assert.equal(dubaiToday(new Date('2026-12-31T20:30:00Z')), '2027-01-01');
});

test('dates do not depend on the device time zone', () => {
  const script = `
    import { dubaiToday, weekdayOf, addDays } from ${JSON.stringify(new URL('../src/planner/dates.ts', import.meta.url).href)};
    console.log([dubaiToday(Date.parse('2026-10-13T20:00:00Z')), weekdayOf('2026-10-26'), addDays('2026-10-31', 2)].join('|'));
  `;
  for (const TZ of ['America/Los_Angeles', 'Pacific/Kiritimati', 'Europe/Moscow', 'UTC']) {
    const out = execFileSync(process.execPath, ['--input-type=module', '-e', script], { env: { ...process.env, TZ }, encoding: 'utf8' }).trim();
    assert.equal(out, '2026-10-14|mon|2026-11-02', `TZ=${TZ}`);
  }
});

test('addDays and daysBetween cross month, year and leap-day borders', () => {
  assert.equal(addDays('2026-10-31', 1), '2026-11-01');
  assert.equal(addDays('2026-12-31', 1), '2027-01-01');
  assert.equal(addDays('2028-02-28', 1), '2028-02-29');
  assert.equal(addDays('2027-03-01', -1), '2027-02-28');
  assert.equal(addDays('2026-10-14', 0), '2026-10-14');
  assert.equal(daysBetween('2026-10-14', '2026-11-05'), 22);
  assert.equal(daysBetween('2026-11-05', '2026-10-14'), -22);
});

test('weekdayOf starts the week on Monday and matches the exam schedule', () => {
  assert.equal(weekdayOf('2026-10-26'), 'mon'); // Maths P1 mock
  assert.equal(weekdayOf('2026-10-17'), 'sat');
  assert.equal(weekdayOf('2026-10-18'), 'sun');
  assert.equal(weekdayOf('2026-10-23'), 'fri');
  assert.equal(weekdayOf('2026-11-05'), 'thu'); // CS P2 mock
});

test('dateRange is inclusive and empty when reversed', () => {
  assert.deepEqual(dateRange('2026-10-30', '2026-11-02'), ['2026-10-30', '2026-10-31', '2026-11-01', '2026-11-02']);
  assert.deepEqual(dateRange('2026-10-14', '2026-10-14'), ['2026-10-14']);
  assert.deepEqual(dateRange('2026-10-15', '2026-10-14'), []);
});

test('isDate accepts real calendar dates only', () => {
  assert.equal(isDate('2026-10-14'), true);
  assert.equal(isDate('2028-02-29'), true);
  assert.equal(isDate('2026-02-29'), false);
  assert.equal(isDate('2026-13-01'), false);
  assert.equal(isDate('14-10-2026'), false);
  assert.equal(isDate(20261014), false);
  assert.equal(isDate(undefined), false);
});

test('clock helpers read and write HH:MM', () => {
  assert.equal(parseClock('08:15'), 495);
  assert.equal(parseClock('14:45'), 885);
  assert.equal(parseClock('24:00'), null);
  assert.equal(parseClock('8:15'), null);
  assert.equal(parseClock('noon'), null);
  assert.equal(formatClock(495), '08:15');
  assert.equal(formatClock(24 * 60 + 5), '00:05'); // wraps past midnight
});

test('dubaiEpoch converts Dubai wall-clock time to a UTC instant', () => {
  assert.equal(dubaiEpoch('2026-10-26', '08:00'), Date.UTC(2026, 9, 26, 4, 0));
  assert.equal(dubaiEpoch('2026-10-26'), Date.UTC(2026, 9, 25, 20, 0));
  // Cross-check against Intl: formatting that instant in Dubai gives the same wall time back.
  const parts = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Dubai', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' })
    .format(dubaiEpoch('2026-11-05', '08:15'));
  assert.equal(parts, '08:15');
});
