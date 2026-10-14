import { Suspense } from 'react';
import type { SimId } from '../../contract/types';
import { InlineLoadWait } from '../subject/SubjectLoadError';
import { useBodyT, useTopicContext } from './context';
import { lazyOnce } from './lazy';
import { MdxWarning } from './MdxWarning';
import { SafeContent } from './SafeContent';

// <Sim id="econ.supply-demand"/>: loads the simulation from the subject pack when it is first shown.
// The simulation gets the language of the body it sits in (contentLang), not the UI language.
export function Sim({ id }: { id?: string }) {
  const ctx = useTopicContext();
  const { t } = useBodyT();
  if (!ctx) return <MdxWarning>{t('warn.outside', { name: 'Sim' })}</MdxWarning>;
  const loader = id ? ctx.pack.sims[id as SimId] : undefined;
  if (!id || !loader) return <MdxWarning>{t('warn.sim', { id: id || t('warn.noId') })}</MdxWarning>;
  const Loaded = lazyOnce(loader);
  return (
    <div className="foma-sim" role="group" aria-label={t('sim.label', { id })}>
      <SafeContent>
        <Suspense fallback={<InlineLoadWait label={t('sim.loading')} />}>
          <Loaded lang={ctx.contentLang} />
        </Suspense>
      </SafeContent>
    </div>
  );
}
