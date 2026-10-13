import { Suspense } from 'react';
import type { SimId } from '../../contract/types';
import { useLoadTimedOut } from '../../lib/load-timeout';
import { SubjectLoadError } from '../subject/SubjectLoadError';
import { useBodyT, useTopicContext } from './context';
import { lazyOnce } from './lazy';
import { MdxWarning } from './MdxWarning';
import { SafeContent } from './SafeContent';

// The placeholder while the simulation loads. After the load timeout it becomes the load error, with a retry.
function SimLoading({ label }: { label: string }) {
  const timedOut = useLoadTimedOut(true);
  if (timedOut) return <SubjectLoadError cause={new Error('load timeout')} />;
  return <p role="status" className="m-0 text-sm text-[var(--color-muted)]">{label}</p>;
}

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
        <Suspense fallback={<SimLoading label={t('sim.loading')} />}>
          <Loaded lang={ctx.contentLang} />
        </Suspense>
      </SafeContent>
    </div>
  );
}
