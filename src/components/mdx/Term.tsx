import { useId, useState } from 'react';
import { TermCard } from '../ui/TermCard';
import { useBodyT, useTopicContext } from './context';
import { MdxWarning } from './MdxWarning';

// Standalone terms retain the full card. Inline terms keep the sentence intact and
// expose the same definition, examples, pitfalls and source through an optional expansion.
export function Term({ id, inline, label }: { id?: string; inline?: string; label?: string }) {
  const ctx = useTopicContext();
  const { t } = useBodyT();
  const [open, setOpen] = useState(false);
  const panelId = useId();
  if (!ctx) return <MdxWarning>{t('warn.outside', { name: 'Term' })}</MdxWarning>;
  const term = id ? ctx.pack.terms.find(item => item.id === id) : undefined;
  if (!term) return <MdxWarning>{t('warn.term', { id: id || t('warn.noId') })}</MdxWarning>;
  if (inline !== 'true') return <TermCard term={term} lang={ctx.contentLang} />;
  return <span className="foma-inline-term">
    <button type="button" className="foma-inline-term__label" aria-expanded={open}
      aria-controls={panelId} onClick={() => setOpen(value => !value)}>
      {label ?? term.term[ctx.contentLang]}
    </button>
    {open ? <span id={panelId} className="foma-inline-term__panel"><TermCard term={term} lang={ctx.contentLang} /></span> : null}
  </span>;
}
