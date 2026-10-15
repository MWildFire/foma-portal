// Exam halls and clashes: overlapping sittings in the same room and on the same day.
import type { ExamRoom } from './access.ts';
import type { ExamPaper, ExamsFile } from './types.ts';
import { examStartClock, examStartMs, sittingMinutes } from './calendar.ts';
import { formatClock, parseClock } from './dates.ts';

export type Hall = 'ACC2' | 'SpHal2';

export interface HallWindow {
  exam: ExamPaper;
  hall: Hall;
  start: string;                  // HH:MM, the student's own start in this hall
  end: string;                    // HH:MM, start plus the sitting using the printed duration
  startMs: number;
  endMs: number;
}

export interface HallClash {
  date: string;
  hall: Hall;
  first: HallWindow;              // the paper that starts earlier
  second: HallWindow;
}

// The hall a paper is sat in for this student. A paper the printout lists only in ACC2 is always there; every other
// paper is in the student's room when it is known, and in the main hall otherwise.
export function hallOf(exam: ExamPaper, room: ExamRoom): Hall {
  return exam.room === 'ACC2' || room === 'ACC2' ? 'ACC2' : 'SpHal2';
}

export function hallWindows(exams: ExamsFile, room: ExamRoom): HallWindow[] {
  return exams.papers.map(exam => {
    const hall = hallOf(exam, room);
    const separate = hall === 'ACC2';
    const start = examStartClock(exam, separate);
    const minutes = sittingMinutes(exams, exam);
    const startMs = examStartMs(exam, separate);
    return {
      exam,
      hall,
      start,
      end: formatClock((parseClock(start) ?? 0) + minutes),
      startMs,
      endMs: startMs + minutes * 60_000,
    };
  });
}

// Every pair of windows in the same hall on the same day that overlap. A window that ends exactly when the next one
// starts is not a clash.
export function hallClashes(exams: ExamsFile, room: ExamRoom): HallClash[] {
  const windows = hallWindows(exams, room).sort((a, b) => a.startMs - b.startMs || a.exam.id.localeCompare(b.exam.id));
  const clashes: HallClash[] = [];
  for (let i = 0; i < windows.length; i++) {
    for (let j = i + 1; j < windows.length; j++) {
      const first = windows[i];
      const second = windows[j];
      if (first.exam.date !== second.exam.date || first.hall !== second.hall) continue;
      if (second.startMs < first.endMs && first.startMs < second.endMs) {
        clashes.push({ date: first.exam.date, hall: first.hall, first, second });
      }
    }
  }
  return clashes;
}
