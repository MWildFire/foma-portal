import { useTranslation } from 'react-i18next';

export function GlossaryPage() {
  const { t } = useTranslation();
  return (
    <section>
      <h1 className="text-2xl font-semibold">{t('nav.glossary')}</h1>
      <p className="mt-2 text-[var(--color-muted)]">{t('pages.comingSoon')}</p>
    </section>
  );
}
