// Daily study load per weekday: the defaults of PLAN.md §5 and the checks for what the student types in Settings.
import type { Weekday } from '../lib/storage.ts';

export const DEFAULT_DAILY_LOAD: Record<Weekday, number> = {
  mon: 150, tue: 150, wed: 150, thu: 150, fri: 120, sat: 270, sun: 270,
};

export const MAX_DAILY_LOAD = 600;   // the same ceiling the progress store applies

// The load in force for a weekday: the override if there is one, the default otherwise.
export function effectiveLoad(overrides: Partial<Record<Weekday, number>>, day: Weekday): number {
  return overrides[day] ?? DEFAULT_DAILY_LOAD[day];
}

// What the student typed -> whole minutes from 0 to 600, or null when it is not a usable number.
export function parseLoadInput(text: string): number | null {
  const trimmed = text.trim();
  if (!/^\d{1,4}$/.test(trimmed)) return null;
  const minutes = Number(trimmed);
  return minutes <= MAX_DAILY_LOAD ? minutes : null;
}
