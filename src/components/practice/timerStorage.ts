import { timerFromStored, timerToStored, type TimerState } from '../../lib/practice';

// Saves the countdown of a timed set in localStorage (the rules are in src/lib/practice.ts). Blocked storage is not
// an error: the clock still works, it just does not survive a reload.

export function readStoredTimer(key: string, totalMs: number, now: number = Date.now()): TimerState | null {
  try {
    return timerFromStored(window.localStorage.getItem(key), totalMs, now);
  } catch {
    return null;
  }
}

// An idle clock has nothing to keep, so its saved value is removed.
export function writeStoredTimer(key: string, timer: TimerState, now: number = Date.now()): void {
  try {
    if (timer.status === 'idle') window.localStorage.removeItem(key);
    else window.localStorage.setItem(key, timerToStored(timer, now));
  } catch {
    // Storage is blocked or full.
  }
}

export function clearStoredTimer(key: string): void {
  try {
    window.localStorage.removeItem(key);
  } catch {
    // Nothing to remove.
  }
}
