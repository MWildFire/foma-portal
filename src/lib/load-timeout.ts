import { useEffect, useState } from 'react';

// How long a page may wait for its content before it shows the load error with a retry, not a placeholder forever.
export const LOAD_TIMEOUT_MS = 15_000;

// Calls onTimeout once, after ms. The returned function cancels the call, for a load that finished first.
export function onLoadTimeout(ms: number, onTimeout: () => void): () => void {
  const timer = setTimeout(onTimeout, ms);
  return () => clearTimeout(timer);
}

// True once the wait has lasted LOAD_TIMEOUT_MS while `active` is true. When `active` turns false, or the component
// unmounts, the timer is cleared and the flag starts again from false the next time.
export function useLoadTimedOut(active: boolean): boolean {
  const [timedOut, setTimedOut] = useState(false);

  useEffect(() => {
    if (!active) {
      setTimedOut(false);
      return undefined;
    }
    return onLoadTimeout(LOAD_TIMEOUT_MS, () => setTimedOut(true));
  }, [active]);

  return active && timedOut;
}
