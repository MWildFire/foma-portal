// Dates and times for display. Calendar days are shown for the Dubai date itself, whatever zone the device is in.
import type { Weekday } from '../lib/storage.ts';
// The .ts extension is what Node's test runner needs; tsconfig.json does not allow it for value imports, hence the ignore.
// @ts-ignore TS5097
import { WEEKDAY_KEYS, addDays, formatClock, isDate, parseClock } from './dates.ts';

// long: "Monday 26 October"; short: "Mon 26 Oct"; day: "26 October" (reads well inside a sentence in both languages);
// weekday: "Monday".
export type DateStyle = 'long' | 'short' | 'day' | 'weekday';

const localeOf = (lang: string): string => (lang.startsWith('ru') ? 'ru-RU' : 'en-GB');

const OPTIONS: Record<DateStyle, Intl.DateTimeFormatOptions> = {
  long: { weekday: 'long', day: 'numeric', month: 'long' },
  short: { weekday: 'short', day: 'numeric', month: 'short' },
  day: { day: 'numeric', month: 'long' },
  weekday: { weekday: 'long' },
};

// Russian weekday and month names are lower case; a date that starts a heading or a line needs a capital.
export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function formatDate(date: string, lang: string, style: DateStyle): string {
  if (!isDate(date)) return date;
  // Noon UTC with a UTC formatter prints the calendar day itself, not a shifted one.
  return new Intl.DateTimeFormat(localeOf(lang), { ...OPTIONS[style], timeZone: 'UTC' }).format(new Date(`${date}T12:00:00Z`));
}

// 2026-10-12 is a Monday, so it works as a reference day for weekday names.
export function weekdayName(weekday: Weekday, lang: string): string {
  return formatDate(addDays('2026-10-12', WEEKDAY_KEYS.indexOf(weekday)), lang, 'weekday');
}

// "08:15" and 75 minutes -> "08:15–09:30"
export function formatTimeRange(start: string, minutes: number): string {
  const from = parseClock(start);
  if (from === null) return start;
  return `${start}–${formatClock(from + minutes)}`;
}

export function formatDuration(minutes: number): { hours: number; minutes: number } {
  return { hours: Math.floor(minutes / 60), minutes: minutes % 60 };
}

// An ISO timestamp (e.g. when a progress code was made) as date and time in Dubai. Unreadable input comes back as is.
export function formatInstant(iso: string, lang: string): string {
  const instant = new Date(iso);
  if (!iso || Number.isNaN(instant.getTime())) return iso;
  return new Intl.DateTimeFormat(localeOf(lang), {
    timeZone: 'Asia/Dubai', day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
  }).format(instant);
}
