import { Children, cloneElement, isValidElement, useEffect, useRef, useState, type ReactElement, type ReactNode, type SVGProps } from 'react';
import type { Lang } from '../contract/types';
import { minimumDiagramWidth } from './readable-diagram-logic';

// Keep the geometry unchanged and scroll only the picture when shrinking it would make labels illegible.
function smallestLabel(node: ReactNode, inherited = 16): number {
  let min = Infinity;
  Children.forEach(node, child => {
    if (!isValidElement<SVGProps<SVGElement>>(child)) return;
    const font = Number(child.props.style?.fontSize ?? child.props.fontSize ?? inherited);
    const size = Number.isFinite(font) ? font : inherited;
    if (child.type === 'text') min = Math.min(min, size);
    min = Math.min(min, smallestLabel(child.props.children, size));
  });
  return min;
}
export default function ReadableDiagram({ children, lang, smallestFont }: { smallestFont?: number; children: ReactElement<SVGProps<SVGSVGElement>>; lang: Lang }) {
  const width = Number(children.props.viewBox?.split(/\s+/)[2]);
  const font = Math.min(smallestFont ?? Infinity, smallestLabel(children));
  const minWidth = Number.isFinite(font) && width > 0 ? minimumDiagramWidth(width, font) : 0;
  const ref = useRef<HTMLDivElement>(null);
  const [scrolls, setScrolls] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setScrolls(el.scrollWidth > el.clientWidth + 1);
    const observer = new ResizeObserver(update);
    observer.observe(el);
    update();
    return () => observer.disconnect();
  }, [minWidth]);
  return <div style={{ minWidth: 0, maxWidth: '100%' }}>
    <div ref={ref} tabIndex={scrolls ? 0 : undefined} role={scrolls ? 'region' : undefined}
      aria-label={scrolls ? (lang === 'ru' ? 'Диаграмма с горизонтальной прокруткой' : 'Horizontally scrollable diagram') : undefined}
      style={{ overflowX: 'auto', maxWidth: '100%' }}>
      {cloneElement(children, { style: { ...children.props.style, minWidth: Math.max(minWidth, Number(children.props.style?.minWidth) || 0) } })}
    </div>
    {scrolls && <p style={{ margin: '4px 0', fontSize: 12 }}>{lang === 'ru' ? 'Прокрутите диаграмму вбок →' : 'Scroll the diagram sideways →'}</p>}
  </div>;
}
