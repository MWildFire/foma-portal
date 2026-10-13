// The study timer: a 25/5 Pomodoro, or a single countdown for a timed paper. A pure state machine; the clock is a
// parameter and every phase end is an absolute timestamp, so a sleeping tab cannot make the timer drift.
export type TimerPhase = 'work' | 'break' | 'done';
export type TimerEvent = 'work-ended' | 'break-ended' | 'finished' | null;

export interface TimerState {
  blockId: string;
  label: string;
  mode: 'pomodoro' | 'single';
  phase: TimerPhase;
  endsAt: number | null;          // null while paused or done
  pausedLeftMs: number | null;
  workMs: number;
  breakMs: number;
}

export const WORK_MINUTES = 25;
export const BREAK_MINUTES = 5;
const MINUTE = 60_000;

export function startTimer(args: { blockId: string; label: string; now: number; minutes?: number; mode?: 'pomodoro' | 'single' }): TimerState {
  const mode = args.mode ?? 'pomodoro';
  const workMs = (mode === 'single' ? args.minutes ?? WORK_MINUTES : WORK_MINUTES) * MINUTE;
  return {
    blockId: args.blockId,
    label: args.label,
    mode,
    phase: 'work',
    endsAt: args.now + workMs,
    pausedLeftMs: null,
    workMs,
    breakMs: mode === 'single' ? 0 : BREAK_MINUTES * MINUTE,
  };
}

export function remainingMs(state: TimerState, now: number): number {
  if (state.phase === 'done') return 0;
  if (state.endsAt === null) return state.pausedLeftMs ?? 0;
  return Math.max(0, state.endsAt - now);
}

export const isPaused = (state: TimerState): boolean => state.phase !== 'done' && state.endsAt === null;

function advance(state: TimerState, now: number): { state: TimerState; event: Exclude<TimerEvent, null> } {
  if (state.phase === 'work' && state.mode === 'pomodoro') {
    return { state: { ...state, phase: 'break', endsAt: now + state.breakMs, pausedLeftMs: null }, event: 'work-ended' };
  }
  const event = state.phase === 'work' ? 'finished' : 'break-ended';
  return { state: { ...state, phase: 'done', endsAt: null, pausedLeftMs: null }, event };
}

// Moves to the next phase when the current one has run out. Late ticks are fine: the break always gets its full length.
export function tickTimer(state: TimerState, now: number): { state: TimerState; event: TimerEvent } {
  if (state.phase === 'done' || state.endsAt === null || now < state.endsAt) return { state, event: null };
  return advance(state, now);
}

export function pauseTimer(state: TimerState, now: number): TimerState {
  if (state.phase === 'done' || state.endsAt === null) return state;
  return { ...state, endsAt: null, pausedLeftMs: Math.max(0, state.endsAt - now) };
}

export function resumeTimer(state: TimerState, now: number): TimerState {
  if (state.phase === 'done' || state.endsAt !== null) return state;
  return { ...state, endsAt: now + (state.pausedLeftMs ?? 0), pausedLeftMs: null };
}

export function skipPhase(state: TimerState, now: number): TimerState {
  return state.phase === 'done' ? state : advance(state, now).state;
}
