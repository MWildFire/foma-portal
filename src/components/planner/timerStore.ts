import { useSyncExternalStore } from 'react';
import {
  pauseTimer, resumeTimer, skipPhase, startTimer, tickTimer, type TimerEvent, type TimerState,
} from '../../planner/timer';

// One study timer for the whole app. It lives in this module (not in a page), so it keeps running while the student
// reads a topic on another page, and it signals the end of a phase with a chime and a vibration.
let current: TimerState | null = null;
let timeout: number | undefined;
let audio: AudioContext | undefined;
const listeners = new Set<() => void>();

function audioContext(): AudioContext | undefined {
  try {
    if (!audio) {
      const Ctor = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (Ctor) audio = new Ctor();
    }
    return audio;
  } catch {
    return undefined;
  }
}

function chime(beeps: number): void {
  try {
    const ctx = audioContext();
    if (ctx) {
      void ctx.resume();
      const begin = ctx.currentTime;
      for (let i = 0; i < beeps; i++) {
        const at = begin + i * 0.4;
        const oscillator = ctx.createOscillator();
        const gain = ctx.createGain();
        oscillator.type = 'sine';
        oscillator.frequency.value = 880;
        gain.gain.setValueAtTime(0.0001, at);
        gain.gain.exponentialRampToValueAtTime(0.15, at + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, at + 0.3);
        oscillator.connect(gain).connect(ctx.destination);
        oscillator.start(at);
        oscillator.stop(at + 0.32);
      }
    }
  } catch {
    // Sound is a bonus; the screen shows the state anyway.
  }
  try {
    navigator.vibrate?.([200, 100, 200]);
  } catch {
    // Not every browser can vibrate.
  }
}

function emit(): void {
  for (const listener of listeners) listener();
}

function onDue(): void {
  timeout = undefined;
  if (!current) return;
  const step = tickTimer(current, Date.now());
  if (step.event) chime(beepsFor(step.event));
  set(step.state);
}

const beepsFor = (event: Exclude<TimerEvent, null>): number => (event === 'work-ended' ? 2 : 3);

function set(next: TimerState | null): void {
  current = next;
  if (timeout !== undefined) window.clearTimeout(timeout);
  timeout = undefined;
  if (next && next.endsAt !== null && next.phase !== 'done') {
    timeout = window.setTimeout(onDue, Math.max(50, next.endsAt - Date.now()));
  }
  emit();
}

export const studyTimer = {
  subscribe(listener: () => void): () => void {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  },
  getSnapshot(): TimerState | null {
    return current;
  },
  start(args: { blockId: string; label: string; minutes?: number; mode?: 'pomodoro' | 'single' }): void {
    void audioContext()?.resume();   // started by a click, so the browser lets the chime play later
    set(startTimer({ ...args, now: Date.now() }));
  },
  pause(): void {
    if (current) set(pauseTimer(current, Date.now()));
  },
  resume(): void {
    if (current) set(resumeTimer(current, Date.now()));
  },
  skip(): void {
    if (current) set(skipPhase(current, Date.now()));
  },
  stop(): void {
    set(null);
  },
};

export function useStudyTimer(): TimerState | null {
  return useSyncExternalStore(studyTimer.subscribe, studyTimer.getSnapshot, studyTimer.getSnapshot);
}
