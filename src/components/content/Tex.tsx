import { useMemo } from 'react';
import katex from 'katex';
import { useBodyT } from '../mdx/context';

const cache = new Map<string, string | null>();

// KaTeX output as an HTML string, or null when the formula does not compile.
export function texToHtml(tex: string, display: boolean): string | null {
  const key = `${display ? 'D' : 'I'}:${tex}`;
  const hit = cache.get(key);
  if (hit !== undefined) return hit;
  let html: string | null;
  try {
    html = katex.renderToString(tex, { displayMode: display, throwOnError: true, output: 'htmlAndMathml', strict: 'ignore' });
  } catch {
    html = null;
  }
  cache.set(key, html);
  return html;
}

// A formula. Display mode scrolls inside its own box on a narrow screen; that box can take the keyboard focus and has
// a name for screen readers, so the keyboard can scroll it. A broken formula shows its source text instead of
// crashing the page.
export function Tex({ tex, display = false }: { tex: string; display?: boolean }) {
  const { t } = useBodyT();
  const html = useMemo(() => texToHtml(tex, display), [tex, display]);
  if (html === null) return <code className="break-words">{tex}</code>;
  return display
    ? <span className="block max-w-full overflow-x-auto" tabIndex={0} role="region" aria-label={t('region.formula')} dangerouslySetInnerHTML={{ __html: html }} />
    : <span dangerouslySetInnerHTML={{ __html: html }} />;
}
