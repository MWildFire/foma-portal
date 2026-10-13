import { useTranslation } from 'react-i18next';

type UiLang = 'en' | 'ru';

const OPTIONS: Array<{ code: UiLang; label: string }> = [
  { code: 'ru', label: 'RU' },
  { code: 'en', label: 'EN' },
];

export function LanguageToggle() {
  const { i18n } = useTranslation();
  const current: UiLang = i18n.language.startsWith('ru') ? 'ru' : 'en';

  const setLanguage = (lang: UiLang) => {
    void i18n.changeLanguage(lang);
    try {
      localStorage.setItem('foma-lang', lang);
    } catch {
      // Storage can be blocked; the language still changes for this visit.
    }
  };

  return (
    <div className="inline-flex rounded-md border border-[var(--color-border)] p-0.5">
      {OPTIONS.map(option => {
        const active = current === option.code;
        return (
          <button
            key={option.code}
            type="button"
            onClick={() => setLanguage(option.code)}
            aria-pressed={active}
            className={`rounded px-2.5 py-1 text-xs font-medium transition-colors ${
              active ? 'bg-[var(--color-fg)] text-[var(--color-bg)]' : 'text-[var(--color-muted)] hover:text-[var(--color-fg)]'
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
