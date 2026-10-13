// Time for a timed practice set. Pure (no React), so tests/access-practice-timers.test.mjs can run it on the real schedule.
// Which papers have no extra time comes from data/exams.json (access.noExtraTime), not from this file.
import { extendedMinutes, noExtraTimeFor } from '../../planner/calendar.ts';
import type { ExamsFile } from '../../planner/types.ts';
import type { PaperId, SubjectId } from '../../contract/types.ts';

export interface TimedSetTiming {
  paper: PaperId;
  part?: string;
  /** The printed time of the set, in minutes. */
  minutes: number;
}

// Whether a set gets extra time: not when the schedule marks its papers as having none (the French listening).
export function hasExtraTimeSet(exams: ExamsFile, subject: string, set: TimedSetTiming): boolean {
  return !noExtraTimeFor(exams, subject as SubjectId, set.paper, set.part);
}

// The minutes a timed set runs for. Without extra time it is the printed time. With extra time it is the school's figure
// from data/exams.json (accessMinutes), or the printed time plus 25% when the table has no entry for it.
export function setAllowanceMinutes(input: { subject: string; set: TimedSetTiming; exams: ExamsFile; extraTime: boolean }): number {
  const { subject, set, exams, extraTime } = input;
  const printed = Number.isFinite(set.minutes) && set.minutes > 0 ? set.minutes : 0;
  if (!extraTime || !hasExtraTimeSet(exams, subject, set)) return printed;
  return extendedMinutes(exams, printed);
}
