// Topic queue and first-pass progress. PLAN.md §5, step 1: in-scope topics first, then priority, then order.
import type { PlannerTopic } from './types.ts';

export const UNIT_MINUTES = 25;   // one Pomodoro: the size of a first-pass chunk
export const MIN_SLICE = 5;       // the smallest block the planner hands out

const priorityOf = (topic: PlannerTopic): number => (topic.priority === 1 || topic.priority === 2 || topic.priority === 3 ? topic.priority : 3);
const scopeRank = (topic: PlannerTopic): number => (topic.inMockScope === 'no' ? 1 : 0);

// `yes` and `unknown` come before `no`; then priority 1..3; then the author's order; the id breaks ties.
export function topicQueue(topics: PlannerTopic[]): PlannerTopic[] {
  return [...topics].sort((a, b) =>
    scopeRank(a) - scopeRank(b)
    || priorityOf(a) - priorityOf(b)
    || a.order - b.order
    || (a.id < b.id ? -1 : a.id > b.id ? 1 : 0));
}

// First-pass minutes of a topic, rounded up to 5 so slices always line up with 5-minute quotas.
export function effectiveMinutes(minutes: number): number {
  if (!Number.isFinite(minutes) || minutes <= 0) return UNIT_MINUTES;
  return Math.ceil(minutes / 5) * 5;
}

// Covered minutes of a topic as sorted, merged [start, end) intervals.
export type Interval = [number, number];

export function addInterval(list: Interval[], start: number, end: number): Interval[] {
  if (end <= start) return list;
  const merged: Interval[] = [];
  let [from, to] = [start, end];
  let placed = false;
  for (const [s, e] of list) {
    if (e < from) merged.push([s, e]);
    else if (s > to) {
      if (!placed) { merged.push([from, to]); placed = true; }
      merged.push([s, e]);
    } else {
      from = Math.min(from, s);
      to = Math.max(to, e);
    }
  }
  if (!placed) merged.push([from, to]);
  return merged;
}

// The first stretch of [0, total) that is not covered yet, or null when the topic is fully covered.
export function firstGap(list: Interval[], total: number): Interval | null {
  let cursor = 0;
  for (const [s, e] of list) {
    if (s > cursor) return cursor < total ? [cursor, Math.min(s, total)] : null;
    cursor = Math.max(cursor, e);
  }
  return cursor < total ? [cursor, total] : null;
}

export const isCovered = (list: Interval[], total: number): boolean => firstGap(list, total) === null;

export const coveredMinutes = (list: Interval[]): number => list.reduce((sum, [s, e]) => sum + (e - s), 0);
