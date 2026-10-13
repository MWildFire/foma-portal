import test from 'node:test';
import assert from 'node:assert/strict';
import { capitalize, formatDate, formatDuration, formatInstant, formatTimeRange, weekdayName } from '../src/planner/format.ts';

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

test('the day style has no weekday, so it fits inside a sentence', () => {
  assert.equal(formatDate('2026-11-05', 'en', 'day'), '5 November');
  assert.equal(formatDate('2026-11-05', 'ru', 'day'), '5 ноября');
  assert.equal(capitalize(formatDate('2026-10-26', 'ru', 'weekday')), 'Понедельник');
  assert.equal(capitalize(''), '');
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

test('a timestamp is shown as date and time in Dubai, whatever the device zone', () => {
  // 21:30 UTC on 13 Oct is 01:30 on 14 Oct in Dubai.
  const en = formatInstant('2026-10-13T21:30:00.000Z', 'en');
  assert.match(en, /14 October 2026/);
  assert.match(en, /01:30/);
  const ru = formatInstant('2026-10-13T21:30:00.000Z', 'ru');
  assert.match(ru, /14 октября 2026/);
  assert.match(ru, /01:30/);
  assert.equal(formatInstant('not a time', 'en'), 'not a time');
  assert.equal(formatInstant('', 'en'), '');
});
