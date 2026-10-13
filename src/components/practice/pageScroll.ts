import { useEffect } from 'react';
import { useNavigationType } from 'react-router-dom';

// A page starts at the top when the student arrives from a link or a menu. It does not jump when the address only
// changes inside the page (a filter chosen, the flashcard mode, an open simulation: those add or replace a query),
// and it leaves Back and Forward alone, because the browser puts the student back where they were.
// `key` names the page; a new key is a new arrival. Only the key decides: the navigation type changes to REPLACE
// when a filter is chosen, and that must not scroll. `enabled` is false for an address that brings its own scroll
// (a simulation opened by a link scrolls itself into view), and is read when the key changes.
export function useScrollToTopOnArrival(key: string, enabled: boolean = true): void {
  const navigation = useNavigationType();
  useEffect(() => {
    if (enabled && navigation !== 'POP') window.scrollTo(0, 0);
  }, [key]);
}
