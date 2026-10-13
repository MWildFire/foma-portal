import { useEffect } from 'react';
import { useNavigationType } from 'react-router-dom';

// The same behaviour as the content pages: the browser tab reads "<title> | <brand>", and a page opened from a link
// starts at the top (Back and Forward keep the browser's own scroll position).
export function usePageTitle(title: string, brand: string): void {
  useEffect(() => {
    const previous = document.title;
    document.title = `${title} | ${brand}`;
    return () => {
      document.title = previous;
    };
  }, [title, brand]);
}

export function useScrollToTop(): void {
  const navigation = useNavigationType();
  useEffect(() => {
    if (navigation !== 'POP') window.scrollTo(0, 0);
  }, [navigation]);
}
