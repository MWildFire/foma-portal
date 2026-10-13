import type { ReactNode } from 'react';
import { useBodyT } from './context';

// <Reveal title="Why?">text</Reveal>: a native details element, closed until opened.
export function Reveal({ title, children }: { title?: string; children?: ReactNode }) {
  const { t } = useBodyT();
  return (
    <details className="foma-reveal">
      <summary>{title || t('reveal.show')}</summary>
      <div className="foma-reveal__body">{children}</div>
    </details>
  );
}
