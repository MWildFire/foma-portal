import { useEffect } from 'react';

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
// half way down. Call this with the route key to start at the top.
export function useScrollToTop(key: string): void {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [key]);
}
