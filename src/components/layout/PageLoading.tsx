import { useTranslation } from 'react-i18next';

// Placeholder while a page waits for its content: a subject pack, or the planner's index of topics.
export function PageLoading() {
  const { t } = useTranslation();
  return <p role="status" className="py-10 text-center text-[var(--color-muted)]">{t('loading')}</p>;
}
