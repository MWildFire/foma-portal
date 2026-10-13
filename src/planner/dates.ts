// Calendar dates for the planner. Every date is a "YYYY-MM-DD" string in Asia/Dubai, never the device's zone.
// Pure module: no React, no JSON. Node's test runner imports it directly.
import type { Weekday } from '../lib/storage.ts';

export const DUBAI_TZ = 'Asia/Dubai';
// Dubai is UTC+4 all year (no daylight saving), so a wall-clock time maps to one fixed UTC offset.
const DUBAI_OFFSET_MS = 4 * 60 * 60 * 1000;

export const WEEKDAY_KEYS: Weekday[] = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const DATE_PATTERN = /^(\d{4})-(\d{2})-(\d{2})$/;
const CLOCK_PATTERN = /^([01]\d|2[0-3]):([0-5]\d)$/;

function utcMidday(date: string): Date {
  const match = DATE_PATTERN.exec(date);
  if (!match) throw new Error(`Not a YYYY-MM-DD date: ${date}`);
  return new Date(Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3]), 12));
}

const isoOf = (instant: Date): string => instant.toISOString().slice(0, 10);

// True only for real calendar dates ("2026-02-29" is rejected).
export function isDate(value: unknown): value is string {
  if (typeof value !== 'string' || !DATE_PATTERN.test(value)) return false;
  return isoOf(utcMidday(value)) === value;
}

// The calendar date in Dubai at the given instant.
export function dubaiToday(now: Date | number = new Date()): string {
  const parts = new Intl.DateTimeFormat('en-CA', { timeZone: DUBAI_TZ, year: 'numeric', month: '2-digit', day: '2-digit' })
    .formatToParts(new Date(now));
  const pick = (type: string) => parts.find(part => part.type === type)?.value ?? '';
  return `${pick('year')}-${pick('month')}-${pick('day')}`;
}

export function addDays(date: string, days: number): string {
  const instant = utcMidday(date);
  instant.setUTCDate(instant.getUTCDate() + days);
  return isoOf(instant);
}

// Whole days from `from` to `to` (negative when `to` is earlier).
export function daysBetween(from: string, to: string): number {
  return Math.round((utcMidday(to).getTime() - utcMidday(from).getTime()) / 86_400_000);
}

export function weekdayOf(date: string): Weekday {
  const sundayFirst = utcMidday(date).getUTCDay();
  return WEEKDAY_KEYS[(sundayFirst + 6) % 7];
}

export function dateRange(from: string, to: string): string[] {
  const out: string[] = [];
  for (let date = from; date <= to; date = addDays(date, 1)) out.push(date);
  return out;
}

// "08:15" -> minutes since midnight; null when the text is not a valid 24-hour clock time.
export function parseClock(time: string): number | null {
  const match = CLOCK_PATTERN.exec(time);
  return match ? Number(match[1]) * 60 + Number(match[2]) : null;
}

// Minutes since midnight -> "HH:MM". Wraps past midnight.
export function formatClock(minutes: number): string {
  const wrapped = ((Math.round(minutes) % 1440) + 1440) % 1440;
  const hh = String(Math.floor(wrapped / 60)).padStart(2, '0');
  const mm = String(wrapped % 60).padStart(2, '0');
  return `${hh}:${mm}`;
}

// The UTC instant (ms) of a Dubai wall-clock time. `time` defaults to midnight.
export function dubaiEpoch(date: string, time = '00:00'): number {
  const instant = utcMidday(date);
  const minutes = parseClock(time) ?? 0;
  return Date.UTC(instant.getUTCFullYear(), instant.getUTCMonth(), instant.getUTCDate(), 0, minutes) - DUBAI_OFFSET_MS;
}
