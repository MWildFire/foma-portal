import { useId, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Check, Copy } from 'lucide-react';
import type { Lang } from '../../contract/types';
import { useLocalProgress } from '../../hooks/useLocalProgress';
import { buildReport, type ReportPackLike } from '../../lib/report';
import { toLang } from '../../lib/topic-lang';
import { dubaiDate } from '../../lib/topic-progress';
import { TopicHero } from '../content/TopicHero';
import { copyText, type CopyResult } from './copy';
import '../content/ui.css';
import '../practice/fields.css';
import './report.css';

const LANGS: Lang[] = ['en', 'ru'];

// #/report. A plain-text report of the student's progress for the teacher: counts and topic titles only. It is
// shown in a text box with a copy button. If the browser does not allow copying, the text is selected instead.
export function ReportView({ packs }: { packs: readonly ReportPackLike[] }) {
  const { t, i18n } = useTranslation(['report', 'common']);
  const [state] = useLocalProgress();
  const [reportLang, setReportLang] = useState<Lang>(() => toLang(i18n.language));
  const [status, setStatus] = useState<CopyResult | ''>('');
  const area = useRef<HTMLTextAreaElement>(null);
  const fieldId = useId();
  const today = dubaiDate();

  const text = useMemo(() => {
    const fixed = i18n.getFixedT(reportLang, 'report');
    return buildReport({ state, packs, today, lang: reportLang, t: (key, vars) => String(fixed(key, vars)) });
  }, [state, packs, today, reportLang, i18n]);

  const rows = Math.min(32, Math.max(8, text.split('\n').length + 1));

  const copy = async (): Promise<void> => {
    const box = area.current;
    const clipboard = typeof navigator !== 'undefined' ? navigator.clipboard : undefined;
    const result = await copyText(text, {
      writeText: clipboard && typeof clipboard.writeText === 'function' ? value => clipboard.writeText(value) : undefined,
      select: () => {
        if (!box) return;
        box.focus();
        box.select();
        box.setSelectionRange(0, box.value.length);
      },
      execCopy: () => document.execCommand('copy'),
    });
    setStatus(result);
  };

  return (
    <div className="study-page">
      <TopicHero title={t('title')} intro={t('intro')} />

      <div role="group" aria-label={t('language.label')} className="rp-lang">
        <span className="rp-lang__label">{t('language.label')}</span>
        <div className="foma-btn-row">
          {LANGS.map(value => (
            <button
              key={value}
              type="button"
              className="foma-btn"
              aria-pressed={reportLang === value}
              onClick={() => {
                setReportLang(value);
                setStatus('');
              }}
            >
              {reportLang === value ? <Check size={16} aria-hidden="true" /> : null}
              {t(`language.${value}`)}
            </button>
          ))}
        </div>
      </div>

      <div className="study-field rp-field">
        <label htmlFor={fieldId} className="study-field__label">{t('field')}</label>
        <textarea
          id={fieldId}
          ref={area}
          className="study-input rp-text"
          readOnly
          rows={rows}
          wrap="soft"
          spellCheck={false}
          value={text}
          lang={reportLang}
        />
      </div>

      <button type="button" className="foma-btn foma-btn--primary" onClick={() => void copy()}>
        <Copy size={16} aria-hidden="true" />
        {t('copy')}
      </button>
      <p role="status" className="study-status">{status ? t(`status.${status}`) : ''}</p>
    </div>
  );
}
