import { useTranslation } from 'react-i18next';
import { percent, type SubjectProgress } from '../../lib/topic-progress';
import '../content/ui.css';
import './subject.css';

const RAG_KEYS = [
  { key: 'red', tone: 'red' },
  { key: 'amber', tone: 'amber' },
  { key: 'green', tone: 'green' },
  { key: 'unrated', tone: 'slate' },
] as const;

// Subject progress: topics marked done out of all topics (bar and number) and the red / amber / green split.
// Every figure is also written as text, so nothing depends on colour.
export function ProgressSummary({ progress }: { progress: SubjectProgress }) {
  const { t } = useTranslation('subject');
  if (progress.total === 0) {
    return <p className="foma-card m-0 text-[var(--color-muted)]">{t('progress.empty')}</p>;
  }
  const share = percent(progress.done, progress.total);
  const doneText = t('progress.doneOf', { done: progress.done, total: progress.total });
  return (
    <div className="foma-card">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <p className="m-0 font-semibold">{doneText}</p>
        <p className="m-0 text-sm text-[var(--color-muted)]">{share}%</p>
      </div>
      <div
        className="foma-bar mt-2"
        role="progressbar"
        aria-label={t('progress.barLabel')}
        aria-valuemin={0}
        aria-valuemax={progress.total}
        aria-valuenow={progress.done}
        aria-valuetext={doneText}
      >
        <span style={{ width: `${share}%` }} />
      </div>
      <p className="mb-2 mt-4 text-sm font-medium">{t('progress.confidence')}</p>
      <ul className="m-0 flex list-none flex-wrap gap-1.5 p-0">
        {RAG_KEYS.map(({ key, tone }) => (
          <li key={key}>
            <span className="foma-chip" data-tone={tone}>{t(`progress.${key}`)}: {progress.rag[key]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
