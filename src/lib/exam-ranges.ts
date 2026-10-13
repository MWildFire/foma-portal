// The two time ranges of an exam on #/exams: the printed sitting (main hall, as the school's schedule prints it) and the
// sitting with extra time (from the student's own start, with the length the planner's timer uses). Pure functions:
// the schedule is passed in, so the page and the tests read the same numbers.
import type { ExamPaper, ExamsFile } from '../planner/types.ts';
import { examStartClock, hasExtraTime, sittingMinutes } from '../planner/calendar.ts';
// The .ts extension is what Node's test runner needs.
import { formatTimeRange } from '../planner/format.ts';

export interface ExamRange {
  // "08:00–10:30"
  range: string;
  // The length of the sitting in minutes.
  minutes: number;
}

export interface ExamRanges {
  printed: ExamRange;
  // Null when the schedule gives the paper no extra time (access.noExtraTime: the French listening).
  extended: ExamRange | null;
}

// The extended range is computed whatever the student's extra-time setting is: the page shows it next to the printed
// one, while the status and the countdown apply the setting themselves.
export function examRanges(exams: ExamsFile, exam: ExamPaper, separateRoom: boolean): ExamRanges {
  const printed: ExamRange = { range: formatTimeRange(exam.start, exam.minutes), minutes: exam.minutes };
  if (!hasExtraTime(exams, exam)) return { printed, extended: null };
  const minutes = sittingMinutes(exams, exam, true);
  return { printed, extended: { range: formatTimeRange(examStartClock(exam, separateRoom), minutes), minutes } };
}
