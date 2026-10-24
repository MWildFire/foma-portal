// Room selection preserves the school start times.
export type ExamRoom = 'ACC2' | 'SpHal2' | 'unknown';
export const EXAM_ROOMS: readonly ExamRoom[] = ['ACC2', 'SpHal2', 'unknown'];
export const DEFAULT_ROOM: ExamRoom = 'SpHal2';

export interface AccessChoice {
  room: ExamRoom;
  separateRoom: boolean;          // room === 'ACC2': the start times and the windows are the ACC2 ones
}

export const isExamRoom = (value: unknown): value is ExamRoom => (EXAM_ROOMS as readonly unknown[]).includes(value);

// The student confirmed Main Hall for every mock on 24 Oct 2026. This personal
// schedule takes precedence over legacy browser choices without rewriting progress.
export function accessChoiceOf(_stored?: { separateRoom?: unknown; room?: unknown } | null): AccessChoice {
  return { room: 'SpHal2', separateRoom: false };
}

// [redacted]'s only access arrangement is typing ([redacted], 14 Oct 2026). The papers with long typed answers (essays) get a
// reminder to type in the timed practice. Subject and paper as data/exams.json names them: one list, used everywhere.
export const TYPING_PAPERS: readonly { subject: string; paper: string }[] = [
  { subject: 'eng', paper: 'P1' }, { subject: 'eng', paper: 'P2' },
  { subject: 'geo', paper: 'P1' }, { subject: 'geo', paper: 'P2' },
  { subject: 'econ', paper: 'P1' }, { subject: 'econ', paper: 'P2' }, { subject: 'econ', paper: 'P3' },
];

export function typingReminderFor(subject: string, paper: string): boolean {
  return TYPING_PAPERS.some(item => item.subject === subject && item.paper === paper);
}
