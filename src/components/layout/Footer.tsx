import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="mx-auto w-full max-w-5xl px-4 py-8 text-xs text-[var(--color-muted)]">
      {t('footer.note')}
    </footer>
  );
}
