import { useTranslation } from 'react-i18next';
import type { TopicMeta } from '../../contract/types';
import '../content/ui.css';

const MOCK_TONE = { yes: 'green', no: 'slate', unknown: 'amber' } as const;

// Facts about a topic as small labels: priority, minutes, mock scope, papers, HL, option.
// Each label says what it is in words.
export function TopicChips({ topic }: { topic: TopicMeta }) {
  const { t } = useTranslation('subject');
  return (
    <div className="flex flex-wrap gap-1.5">
      <span className="foma-chip" data-tone={topic.priority === 1 ? 'blue' : undefined}>{t('chips.priority', { n: topic.priority })}</span>
      <span className="foma-chip">{t('chips.minutes', { n: topic.minutes })}</span>
      <span className="foma-chip" data-tone={MOCK_TONE[topic.inMockScope]}>{t(`chips.mock.${topic.inMockScope}`)}</span>
      {topic.papers.length > 0 ? <span className="foma-chip">{t('chips.papers', { papers: topic.papers.join(', ') })}</span> : null}
      {topic.hl ? <span className="foma-chip">{t('chips.hl')}</span> : null}
      {topic.option ? <span className="foma-chip">{t('chips.option', { name: topic.option })}</span> : null}
    </div>
  );
}
