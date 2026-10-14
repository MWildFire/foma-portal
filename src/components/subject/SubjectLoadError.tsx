import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RotateCcw } from 'lucide-react';
import { isChunkLoadError } from '../../lib/chunk-error';
import { useLoadTimedOut } from '../../lib/load-timeout';
import '../content/ui.css';
import './subject.css';

// Shown when a page's files could not be loaded (a subject, a topic, or any route, see RouteBoundary). The address may be
// right, so this is not "not found". The retry
// is a reload: a file that failed to load stays failed in the browser until the page is loaded again.
export function SubjectLoadError({ cause }: { cause: unknown }) {
  const { t } = useTranslation('subject');
  return (
    <section>
      <h1 className="text-2xl font-semibold">{t('loadError.title')}</h1>
      <p role="alert" className="mt-2 text-[var(--color-muted)]">{t(isChunkLoadError(cause) ? 'loadError.network' : 'loadError.other')}</p>
      <button type="button" className="foma-btn" onClick={() => window.location.reload()}>
        <RotateCcw size={16} aria-hidden="true" />
        {t('loadError.retry')}
      </button>
    </section>
  );
}

// Inside a topic, a map or a simulation that did not load: a short message with no heading, so the page keeps its one h1.
// Its retry calls onRetry, and the wait is started again; the page is not reloaded.
export function InlineLoadError({ onRetry }: { onRetry: () => void }) {
  const { t } = useTranslation('subject');
  return (
    <div role="alert" className="text-sm">
      <p className="m-0 text-[var(--color-muted)]">{t('loadError.inline')}</p>
      <button type="button" className="foma-btn mt-2" onClick={onRetry}>
        <RotateCcw size={16} aria-hidden="true" />
        {t('loadError.retry')}
      </button>
    </div>
  );
}

// The placeholder of a map or a simulation while its chunk loads: a status line, and after the load timeout the inline
// error. The retry gives the wait a new key, so only this block starts again.
export function InlineLoadWait({ label, className = 'm-0 text-sm text-[var(--color-muted)]' }: { label: string; className?: string }) {
  const [attempt, setAttempt] = useState(0);
  return <InlineWait key={attempt} label={label} className={className} onRetry={() => setAttempt(count => count + 1)} />;
}

function InlineWait({ label, className, onRetry }: { label: string; className: string; onRetry: () => void }) {
  const timedOut = useLoadTimedOut(true);
  if (timedOut) return <InlineLoadError onRetry={onRetry} />;
  return <p role="status" className={className}>{label}</p>;
}
