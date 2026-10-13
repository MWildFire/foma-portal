import { useEffect, useMemo, useState } from 'react';
import { nextExam, type NextExam } from '../planner/countdown';
import { EXAMS } from '../planner/data';

// The current time, refreshed every `intervalMs` and as soon as the tab is visible again.
export function useNow(intervalMs = 10_000): number {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const tick = () => setNow(Date.now());
    const id = window.setInterval(tick, intervalMs);
    const onVisible = () => {
      if (!document.hidden) tick();
    };
    document.addEventListener('visibilitychange', onVisible);
    tick();
    return () => {
      window.clearInterval(id);
      document.removeEventListener('visibilitychange', onVisible);
    };
  }, [intervalMs]);
  return now;
}

// The exam the countdown points at: the first one that has not finished yet.
export function useExamCountdown(extraTime: boolean, intervalMs = 10_000): { now: number; next: NextExam | null } {
  const now = useNow(intervalMs);
  const next = useMemo(() => nextExam(EXAMS, now, extraTime), [now, extraTime]);
  return { now, next };
}
