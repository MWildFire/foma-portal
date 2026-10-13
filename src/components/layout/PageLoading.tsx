import { useTranslation } from 'react-i18next';
import { useLoadTimedOut } from '../../lib/load-timeout';
import { SubjectLoadError } from '../subject/SubjectLoadError';

// Placeholder while a page waits for its content: a subject pack, or the planner's index of topics. If the content has
// not arrived by the load timeout, the placeholder becomes the load error, with a retry.
export function PageLoading() {
  const { t } = useTranslation();
  const timedOut = useLoadTimedOut(true);
  if (timedOut) return <SubjectLoadError cause={new Error('load timeout')} />;
  return <p role="status" className="py-10 text-center text-[var(--color-muted)]">{t('loading')}</p>;
}
