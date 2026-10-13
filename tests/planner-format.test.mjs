import test from 'node:test';
import assert from 'node:assert/strict';
import { formatDate, formatDuration, formatTimeRange, weekdayName } from '../src/planner/format.ts';

test('dates are formatted in the UI language for the calendar day, whatever the device zone', () => {
  assert.match(formatDate('2026-10-26', 'en', 'long'), /Monday/);
  assert.match(formatDate('2026-10-26', 'en', 'long'), /26/);
  assert.match(formatDate('2026-10-26', 'en', 'long'), /October/);
  assert.match(formatDate('2026-10-26', 'ru', 'long'), /понедельник/i);
  assert.match(formatDate('2026-10-26', 'ru', 'long'), /октября/);
  assert.match(formatDate('2026-10-26', 'en', 'short'), /Mon/);
  assert.match(formatDate('2026-10-26', 'en', 'short'), /Oct/);
  assert.match(formatDate('2026-10-26', 'ru-RU', 'short'), /пн/i);
  assert.equal(formatDate('2026-10-26', 'en', 'weekday'), 'Monday');
  assert.match(formatDate('2026-10-26', 'ru', 'weekday'), /понедельник/i);
});

test('a bad date does not throw', () => {
  assert.equal(formatDate('soon', 'en', 'long'), 'soon');
});

test('a sitting is shown as start-end in Dubai time', () => {
  assert.equal(formatTimeRange('08:15', 75), '08:15\u201309:30');
  assert.equal(formatTimeRange('13:30', 90), '13:30\u201315:00');
  assert.equal(formatTimeRange('14:45', 60), '14:45\u201315:45');
  assert.equal(formatTimeRange('late', 60), 'late');
});

test('durations read as hours and minutes', () => {
  assert.deepEqual(formatDuration(150), { hours: 2, minutes: 30 });
  assert.deepEqual(formatDuration(45), { hours: 0, minutes: 45 });
  assert.deepEqual(formatDuration(120), { hours: 2, minutes: 0 });
});

test('weekday names come from the UI language', () => {
  assert.equal(weekdayName('mon', 'en'), 'Monday');
  assert.equal(weekdayName('sun', 'en'), 'Sunday');
  assert.match(weekdayName('fri', 'ru'), /пятница/i);
  assert.match(weekdayName('sat', 'ru'), /суббота/i);
});
