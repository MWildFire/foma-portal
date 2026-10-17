import { useEffect, useRef, useState, type ReactNode } from 'react';
import type { Lang } from '../../contract/types';
import { useBodyT } from '../mdx/context';
import { useLangT } from './useLangT';
import './ui.css';

// The single keyboard scroll owner for both raw MDX and FormulaCard display maths.
export function MathRegion({ children, lang }: { children: ReactNode; lang?: Lang }) {
  const body = useBodyT();
  const { t, lang: lng } = useLangT(lang ?? body.lang);
  const region = useRef<HTMLSpanElement>(null);
  const [scrolls, setScrolls] = useState(false);
  useEffect(() => {
    const el = region.current;
    if (!el) return;
    const update = () => setScrolls(el.scrollWidth > el.clientWidth + 1);
    const observer = new ResizeObserver(update);
    observer.observe(el);
    let active = true;
    void document.fonts.ready.then(() => { if (active) update(); });
    update();
    return () => { active = false; observer.disconnect(); };
  }, [children]);
  return <span className="foma-math-wrap">
    <span ref={region} className="foma-math-region block max-w-full overflow-x-auto"
      data-scrolls={scrolls} tabIndex={0} role="region" aria-label={t('region.formula')}>
      {children}
    </span>
    {scrolls ? <span className="foma-math-hint">{lng === 'ru' ? 'Прокрутите формулу вбок →' : 'Scroll the formula sideways →'}</span> : null}
  </span>;
}
