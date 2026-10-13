// Countdown to the next exam. Pure: the current time is a parameter.
import type { ExamPaper, ExamsFile } from './types.ts';
// The .ts extension is what Node's test runner needs; tsconfig.json does not allow it for value imports, hence the ignore.
// @ts-ignore TS5097
import { examEndMs, examStartMs } from './calendar.ts';

export interface NextExam {
  exam: ExamPaper;
  phase: 'upcoming' | 'running';
  startMs: number;
  endMs: number;
  remainingMs: number;           // to the start while upcoming, to the end while running
}

// The first exam on the schedule that has not finished yet. With extra time a sitting lasts 25% longer.
export function nextExam(exams: ExamsFile, now: number, extraTime: boolean): NextExam | null {
  for (const exam of exams.papers) {
    const startMs = examStartMs(exam);
    const endMs = examEndMs(exam, exams, extraTime);
    if (endMs <= now) continue;
    const running = startMs <= now;
    return { exam, phase: running ? 'running' : 'upcoming', startMs, endMs, remainingMs: (running ? endMs : startMs) - now };
  }
  return null;
}

export function splitDuration(ms: number): { days: number; hours: number; minutes: number; seconds: number } {
  const total = Math.max(0, Math.floor(ms / 1000));
  return {
    days: Math.floor(total / 86_400),
    hours: Math.floor((total % 86_400) / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
  };
}
