import { useTranslation } from 'react-i18next';

export function ExamsPage() {
  const { t } = useTranslation();
  return (
    <section>
      <h1 className="text-2xl font-semibold">{t('nav.exams')}</h1>
      <p className="mt-2 text-[var(--color-muted)]">{t('pages.comingSoon')}</p>
    </section>
  );
}
