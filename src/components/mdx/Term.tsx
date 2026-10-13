import { TermCard } from '../ui/TermCard';
import { useBodyT, useTopicContext } from './context';
import { MdxWarning } from './MdxWarning';

// <Term id="supply"/>: the term card with the English definition first and the Russian one below.
export function Term({ id }: { id?: string }) {
  const ctx = useTopicContext();
  const { t } = useBodyT();
  if (!ctx) return <MdxWarning>{t('warn.outside', { name: 'Term' })}</MdxWarning>;
  const term = id ? ctx.pack.terms.find(item => item.id === id) : undefined;
  if (!term) return <MdxWarning>{t('warn.term', { id: id || t('warn.noId') })}</MdxWarning>;
  return <TermCard term={term} lang={ctx.contentLang} />;
}
