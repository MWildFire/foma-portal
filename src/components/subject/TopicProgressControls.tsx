import { useId } from 'react';
import { useTranslation } from 'react-i18next';
import { Check } from 'lucide-react';
import { useLocalProgress } from '../../hooks/useLocalProgress';
import type { Rag } from '../../lib/storage';
import { chooseRag, dateOnly, dubaiDate, toggleDone, topicKey } from '../../lib/topic-progress';
import '../content/ui.css';

const RAGS: Rag[] = ['red', 'amber', 'green'];

// At the end of a topic: "I finished this topic" and the confidence colour. Both are saved on this device in
// topics["<subject>/<topic>"] and show up on the subject page.
export function TopicProgressControls({ subject, topicId }: { subject: string; topicId: string }) {
  const { t } = useTranslation('subject');
  const [state, update] = useLocalProgress();
  const confidenceId = useId();
  const key = topicKey(subject, topicId);
  const record = state.topics[key];

  // The change is applied to the freshest stored record, so two open tabs do not overwrite each other.
  const change = (edit: (record: ReturnType<typeof toggleDone>) => ReturnType<typeof toggleDone>): void => {
    update(current => ({ ...current, topics: { ...current.topics, [key]: edit(current.topics[key] ?? {}) } }));
  };

  return (
    <div className="foma-card">
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          className="foma-btn"
          aria-pressed={Boolean(record?.done)}
          onClick={() => change(item => toggleDone(item, dubaiDate()))}
        >
          {record?.done ? <Check size={16} aria-hidden="true" /> : null}
          {t('topicProgress.finished')}
        </button>
        <p role="status" className="m-0 text-sm text-[var(--color-muted)]">
          {record?.done ? t('topicProgress.doneOn', { date: dateOnly(record.done) }) : t('topicProgress.notDone')}
        </p>
      </div>
      <p id={confidenceId} className="mb-2 mt-4 text-sm font-medium">{t('topicProgress.confidence')}</p>
      <div role="group" aria-labelledby={confidenceId} className="foma-btn-row">
        {RAGS.map(rag => (
          <button
            key={rag}
            type="button"
            className="foma-btn"
            aria-pressed={record?.rag === rag}
            onClick={() => change(item => chooseRag(item, rag))}
          >
            {record?.rag === rag ? <Check size={16} aria-hidden="true" /> : null}
            {t(`topicProgress.rag.${rag}`)}
          </button>
        ))}
      </div>
    </div>
  );
}
