// Time for a timed practice set. Pure (no React), so tests/access-practice-timers.test.mjs can run it on the real schedule.
import { extendedMinutes } from '../../planner/calendar.ts';
import type { ExamsFile } from '../../planner/types.ts';

// Sittings with no extra time, by subject, paper and part. A listening paper plays one fixed recording, so the printed
// time stands (fr P2 listening, fr-p2l). data/exams.json does not mark this per sitting yet.
const NO_EXTRA_TIME: readonly { subject: string; paper: string; part: string }[] = [
  { subject: 'fr', paper: 'P2', part: 'listening' },
];

export function noExtraTimeFor(subject: string, paper: string, part?: string): boolean {
  return part !== undefined && NO_EXTRA_TIME.some(rule => rule.subject === subject && rule.paper === paper && rule.part === part);
}

export interface TimedSetTiming {
  paper: string;
  part?: string;
  /** The printed time of the set, in minutes. */
  minutes: number;
}

// The minutes a timed set runs for. Without extra time it is the printed time. With extra time it is the school's figure
// from data/exams.json (accessMinutes), or the printed time plus 25% when the table has no entry for it.
export function setAllowanceMinutes(input: { subject: string; set: TimedSetTiming; exams: ExamsFile; extraTime: boolean }): number {
  const { subject, set, exams, extraTime } = input;
  const printed = Number.isFinite(set.minutes) && set.minutes > 0 ? set.minutes : 0;
  if (!extraTime || noExtraTimeFor(subject, set.paper, set.part)) return printed;
  return extendedMinutes(exams, printed);
}
