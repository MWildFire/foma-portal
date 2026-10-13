import { useTranslation } from 'react-i18next';
import { RotateCcw } from 'lucide-react';
import { isChunkLoadError } from '../../lib/chunk-error';
import '../content/ui.css';
import './subject.css';

// Shown when a subject's files could not be loaded. The address may be right, so this is not "not found". The retry
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
