import type { TermProgress } from './storage';

// Flashcards use four Leitner boxes. A card in box 1 comes back after 1 day, in box 2 after 2 days, in box 3
// after 4 days and in box 4 after 7 days. Progress is stored as terms["<subject>/<termId>"] = { box, due }.
//
// A card that was never answered has no entry: it is "new" and counts as due. Pure functions only, so the
// rules can be tested without a browser. This file may import types only (the unit tests run it as plain
// TypeScript, without a bundler).

export type Box = 1 | 2 | 3 | 4;
export const BOXES: readonly Box[] = [1, 2, 3, 4];
export const INTERVAL_DAYS: Readonly<Record<Box, number>> = { 1: 1, 2: 2, 3: 4, 4: 7 };

// How well the student knew the card: up one box, stay in the box, back to box 1.
export type Answer = 'knew' | 'unsure' | 'missed';
export const ANSWERS: readonly Answer[] = ['knew', 'unsure', 'missed'];

type ProgressMap = Record<string, TermProgress | undefined>;

const DATE_PREFIX = /^(\d{4})-(\d{2})-(\d{2})/;

// The key in storage.terms.
export function termKey(subject: string, termId: string): string {
  return `${subject}/${termId}`;
}

// 'YYYY-MM-DD' plus a number of calendar days. UTC arithmetic, so no daylight-saving change can move the day.
export function addDays(date: string, days: number): string {
  const match = DATE_PREFIX.exec(date);
  if (!match) throw new RangeError(`Not a date: ${date}`);
  const moved = Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3]) + days);
  return new Date(moved).toISOString().slice(0, 10);
}

// Any stored number becomes a valid box. A card without a box is in box 1.
export function clampBox(value: number | undefined | null): Box {
  if (typeof value !== 'number' || !Number.isFinite(value)) return 1;
  return Math.min(4, Math.max(1, Math.round(value))) as Box;
}

// The box a card lands in. A card that was never shown starts in box 1, so "knew it" takes it to box 2.
export function nextBox(box: number | undefined | null, answer: Answer): Box {
  const current = clampBox(box);
  if (answer === 'knew') return Math.min(4, current + 1) as Box;
  if (answer === 'unsure') return current;
  return 1;
}

// The stored progress after an answer: the new box and the day the card is due again.
export function review(current: TermProgress | undefined, answer: Answer, today: string): TermProgress {
  const box = nextBox(current?.box, answer);
  return { box, due: addDays(today, INTERVAL_DAYS[box]) };
}

const dayOf = (value: string): string | null => (DATE_PREFIX.test(value) ? value.slice(0, 10) : null);

// A new card is due. A scheduled card is due on its date or after it. A date that cannot be read counts as due,
// so a damaged entry never hides a card for good.
export function isDue(progress: TermProgress | undefined, today: string): boolean {
  if (!progress) return true;
  const due = dayOf(progress.due);
  return due === null || due <= today;
}

export interface DeckStats {
  total: number;
  /** New cards plus the cards whose day has come. */
  due: number;
  /** Cards that were never answered. */
  fresh: number;
  /** Cards in box 1, 2, 3 and 4, due or not. */
  boxes: [number, number, number, number];
  /** The earliest day a card that is not due yet comes back, or null. */
  nextDue: string | null;
}

// Counts for the top of the glossary page. Only terms of the subject that exist in the pack are counted, and a
// repeated id counts once, so a stale key in storage never shows up.
export function deckStats(subject: string, termIds: readonly string[], progress: ProgressMap, today: string): DeckStats {
  const stats: DeckStats = { total: 0, due: 0, fresh: 0, boxes: [0, 0, 0, 0], nextDue: null };
  const seen = new Set<string>();
  for (const id of termIds) {
    if (seen.has(id)) continue;
    seen.add(id);
    stats.total += 1;
    const entry = progress[termKey(subject, id)];
    if (!entry) {
      stats.fresh += 1;
      stats.due += 1;
      continue;
    }
    stats.boxes[clampBox(entry.box) - 1] += 1;
    if (isDue(entry, today)) {
      stats.due += 1;
      continue;
    }
    const day = dayOf(entry.due);
    if (day !== null && (stats.nextDue === null || day < stats.nextDue)) stats.nextDue = day;
  }
  return stats;
}

// The cards to study now, in the order to show them: scheduled cards first (the longest overdue first, weaker
// boxes first on the same day), then the new cards in the order of the pack.
export function dueQueue<T extends { id: string }>(subject: string, items: readonly T[], progress: ProgressMap, today: string): T[] {
  const scheduled: { item: T; due: string; box: Box }[] = [];
  const fresh: T[] = [];
  const seen = new Set<string>();
  for (const item of items) {
    if (seen.has(item.id)) continue;
    seen.add(item.id);
    const entry = progress[termKey(subject, item.id)];
    if (!entry) fresh.push(item);
    else if (isDue(entry, today)) scheduled.push({ item, due: dayOf(entry.due) ?? '', box: clampBox(entry.box) });
  }
  scheduled.sort((a, b) => (a.due < b.due ? -1 : a.due > b.due ? 1 : a.box - b.box));
  return [...scheduled.map(entry => entry.item), ...fresh];
}
