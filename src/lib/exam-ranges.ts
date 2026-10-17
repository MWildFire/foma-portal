// Printed duration, with an optional school room start.
import type { ExamPaper, ExamsFile } from '../planner/types.ts';
import { examStartClock } from '../planner/calendar.ts';
import { formatTimeRange } from '../planner/format.ts';
export interface ExamRange { range: string; minutes: number }
export interface ExamRanges { printed: ExamRange; sitting: ExamRange }
export function examRanges(_exams: ExamsFile, exam: ExamPaper, separateRoom: boolean): ExamRanges {
 return { printed: {range: formatTimeRange(exam.start,exam.minutes),minutes:exam.minutes},
  sitting: {range: formatTimeRange(examStartClock(exam,separateRoom),exam.minutes),minutes:exam.minutes} };
}
