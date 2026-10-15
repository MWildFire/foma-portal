// Access arrangements as the student sets them in Settings (PLAN.md §0). Pure: the stored values go in, a typed choice
// comes out. The room has three values: ACC2, SpHal2 and "unknown" (the school has not said yet). Extra time is off by
// default: [redacted] has none ([redacted], 14 Oct 2026). The switch in Settings is only for checking the school's table.
export type ExamRoom = 'ACC2' | 'SpHal2' | 'unknown';
export const EXAM_ROOMS: readonly ExamRoom[] = ['ACC2', 'SpHal2', 'unknown'];
export const DEFAULT_ROOM: ExamRoom = 'unknown';
export const DEFAULT_EXTRA_TIME = false;

export interface AccessChoice {
  extraTime: boolean;
  room: ExamRoom;
  separateRoom: boolean;          // room === 'ACC2': the start times and the windows are the ACC2 ones
}

export const isExamRoom = (value: unknown): value is ExamRoom => (EXAM_ROOMS as readonly unknown[]).includes(value);

// What the settings hold. A stored `room` wins; without one (settings saved before the room existed) a stored
// `separateRoom: true` still means ACC2, and anything else means "unknown".
export function accessChoiceOf(stored?: { extraTime?: unknown; separateRoom?: unknown; room?: unknown } | null): AccessChoice {
  const raw: { extraTime?: unknown; separateRoom?: unknown; room?: unknown } = stored ?? {};
  const extraTime = raw.extraTime === undefined ? DEFAULT_EXTRA_TIME : raw.extraTime === true;
  const room: ExamRoom = isExamRoom(raw.room) ? raw.room : raw.separateRoom === true ? 'ACC2' : DEFAULT_ROOM;
  return { extraTime, room, separateRoom: room === 'ACC2' };
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
