// Timed practice always uses the printed duration.
import type { ExamsFile } from '../../planner/types.ts';
import type { PaperId } from '../../contract/types.ts';
export interface TimedSetTiming { paper: PaperId; part?: string; minutes: number }
export function setAllowanceMinutes(input: { subject: string; set: TimedSetTiming; exams: ExamsFile }): number {
  return Number.isFinite(input.set.minutes) && input.set.minutes > 0 ? input.set.minutes : 0;
}
