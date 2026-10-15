// Countdown to the next exam. Pure: the current time is a parameter.
import type { ExamPaper, ExamsFile } from './types.ts';
// The .ts extension is what Node's test runner needs.
import { examEndMs, examStartClock, examStartMs } from './calendar.ts';

export interface NextExam {
  exam: ExamPaper;
  phase: 'upcoming' | 'running';
  start: string;                 // HH:MM the student starts (ACC2 start with a separate room, when the schedule has one)
  startMs: number;
  endMs: number;
  remainingMs: number;           // to the start while upcoming, to the end while running
}

// The first exam on the schedule that has not finished yet. With extra time a sitting lasts 25% longer; with a
// separate room it starts at the ACC2 time.
export function nextExam(exams: ExamsFile, now: number, extraTime: boolean, separateRoom = false): NextExam | null {
  let best: NextExam | null = null;
  for (const exam of exams.papers) {
    const startMs = examStartMs(exam, separateRoom);
    const endMs = examEndMs(exam, exams, extraTime, separateRoom);
    if (endMs <= now) continue;
    // An earlier ACC2 start can put a later paper of the file ahead of an earlier one, so pick the earliest start.
    if (best && startMs >= best.startMs) continue;
    const running = startMs <= now;
    best = { exam, phase: running ? 'running' : 'upcoming', start: examStartClock(exam, separateRoom), startMs, endMs, remainingMs: (running ? endMs : startMs) - now };
  }
  return best;
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
