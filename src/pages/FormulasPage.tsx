import { useTranslation } from 'react-i18next';

export function FormulasPage() {
  const { t } = useTranslation();
  return (
    <section>
      <h1 className="text-2xl font-semibold">{t('nav.formulas')}</h1>
      <p className="mt-2 text-[var(--color-muted)]">{t('pages.comingSoon')}</p>
    </section>
  );
}
