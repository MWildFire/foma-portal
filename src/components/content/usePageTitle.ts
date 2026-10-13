import { useEffect } from 'react';
import { useNavigationType } from 'react-router-dom';

// Browser tab title for the page: "<title> | <brand>". The previous title comes back when the page closes.
export function usePageTitle(title: string | null | undefined, brand: string): void {
  useEffect(() => {
    if (!title) return undefined;
    const previous = document.title;
    document.title = `${title} | ${brand}`;
    return () => {
      document.title = previous;
    };
  }, [title, brand]);
}

// The router keeps the scroll position when the route changes, so a long list would open the next page
// half way down. Call this with the route key to start at the top. On Back and Forward (POP) the browser
// puts the student back where they were, so the page is left alone. A page that edits its own query with
// replace keeps its key, so it stays where it is: only a change of key scrolls.
export function useScrollToTop(key: string): void {
  const navigation = useNavigationType();
  useEffect(() => {
    if (navigation !== 'POP') window.scrollTo(0, 0);
  }, [key]);
}
