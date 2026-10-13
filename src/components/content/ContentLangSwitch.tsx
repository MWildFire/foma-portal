import { useTranslation } from 'react-i18next';
import { CONTENT_LANGS, type ContentLang } from '../../lib/topic-lang';
import './ui.css';

// Text language of topics: EN, RU or both side by side. Not the same as the UI language in the header.
export function ContentLangSwitch({ value, onChange }: { value: ContentLang; onChange: (next: ContentLang) => void }) {
  const { t } = useTranslation('topic');
  return (
    <div role="group" aria-label={t('contentLang.label')} className="flex flex-wrap items-center gap-2">
      <span className="text-sm text-[var(--color-muted)]">{t('contentLang.label')}</span>
      <div className="foma-btn-row">
        {CONTENT_LANGS.map(lang => (
          <button key={lang} type="button" className="foma-btn" aria-pressed={value === lang} onClick={() => onChange(lang)}>
            {lang === 'en+ru' ? t('contentLang.both') : t(`contentLang.${lang}`)}
          </button>
        ))}
      </div>
    </div>
  );
}
