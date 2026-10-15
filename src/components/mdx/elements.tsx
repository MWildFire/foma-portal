import type { ComponentProps } from 'react';
import { safeLinkTarget } from '../../lib/topic-markdown';
import { ContentLink } from '../content/ContentLink';
import { useBodyT, useTopicContext } from './context';

// Plain Markdown elements of the MDX body, mapped to components that carry the reading styles (mdx.css).

export const P = (props: ComponentProps<'p'>) => <p {...props} className="foma-p" />;
export const H2 = (props: ComponentProps<'h2'>) => <h2 {...props} className="foma-h2" />;
export const H3 = (props: ComponentProps<'h3'>) => <h3 {...props} className="foma-h3" />;
export const Ul = (props: ComponentProps<'ul'>) => <ul {...props} className="foma-ul" />;
export const Ol = (props: ComponentProps<'ol'>) => <ol {...props} className="foma-ol" />;
export const Li = (props: ComponentProps<'li'>) => <li {...props} className="foma-li" />;
export const Quote = (props: ComponentProps<'blockquote'>) => <blockquote {...props} className="foma-quote" />;
export const Hr = (props: ComponentProps<'hr'>) => <hr {...props} className="foma-hr" />;
export const Code = (props: ComponentProps<'code'>) => <code {...props} className="foma-code" />;
// A code block scrolls sideways on a narrow screen, so it is a named region the keyboard can reach.
export function Pre(props: ComponentProps<'pre'>) {
  const { t } = useBodyT();
  return <pre {...props} className="foma-pre" tabIndex={0} role="region" aria-label={t('region.code')} />;
}
export const Th = (props: ComponentProps<'th'>) => <th {...props} className="foma-th" />;
export const Td = (props: ComponentProps<'td'>) => <td {...props} className="foma-td" />;

// A wide table scrolls inside its own box instead of widening the page. The box can be focused, so the
// keyboard can scroll it.
export function Table(props: ComponentProps<'table'>) {
  const { t } = useBodyT();
  return (
    <div className="foma-table-wrap" tabIndex={0} role="region" aria-label={t('table.label')}>
      <table {...props} className="foma-table" />
    </div>
  );
}

// Links: web pages open in a new tab, #/ routes stay in the app, anything unsafe is shown as plain text.
export function Anchor({ href, children }: ComponentProps<'a'>) {
  const ctx = useTopicContext();
  const target = href ? safeLinkTarget(href) : null;
  if (!target) return <>{children}</>;
  return <ContentLink href={target} lang={ctx?.contentLang}>{children}</ContentLink>;
}

// Rehype KaTeX emits spans. Display formulas get the same accessible scroll box as Tex.
export function Span(props: ComponentProps<'span'>) {
  const { t } = useBodyT();
  if (!props.className?.split(/\s+/).includes('katex-display')) return <span {...props} />;
  return <span className="foma-math-region" tabIndex={0} role="region" aria-label={t('region.formula')}><span {...props} /></span>;
}
