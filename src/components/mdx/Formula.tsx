import { FormulaCard } from '../ui/Formula';
import { useBodyT, useTopicContext } from './context';
import { MdxWarning } from './MdxWarning';

// <Formula id="ped"/>: the KaTeX formula with its name, meaning, when to use it, the booklet badge and the GDC note.
export function Formula({ id }: { id?: string }) {
  const ctx = useTopicContext();
  const { t } = useBodyT();
  if (!ctx) return <MdxWarning>{t('warn.outside', { name: 'Formula' })}</MdxWarning>;
  const formula = id ? ctx.pack.formulas.find(item => item.id === id) : undefined;
  if (!formula) return <MdxWarning>{t('warn.formula', { id: id || t('warn.noId') })}</MdxWarning>;
  return <FormulaCard formula={formula} lang={ctx.contentLang} />;
}
