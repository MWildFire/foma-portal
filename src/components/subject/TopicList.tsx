import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import type { SubjectPack } from '../../contract/pack';
import type { TopicMeta } from '../../contract/types';
import { ROUTES } from '../../config/routes';
import { pickText } from '../../lib/text';
import { bodyState, missingLangs, toLang, type ContentLang } from '../../lib/topic-lang';
import { dateOnly, topicKey } from '../../lib/topic-progress';
import { publicUrl } from '../../lib/topic-text';
import type { GlobalState } from '../../lib/storage';
import { LinkList } from '../content/SourceList';
import { TopicChips } from './TopicChips';
import '../content/ui.css';
import './subject.css';

interface Props {
  pack: SubjectPack;
  topics: TopicMeta[];
  progress: GlobalState['topics'];
  contentLang: ContentLang;
}

// The topics of a subject in teaching order: code, title, priority, minutes, mock scope, the student's progress.
// A topic whose text is not ready in the chosen language shows its public reading links instead.
export function TopicList({ pack, topics, progress, contentLang }: Props) {
  const { t, i18n } = useTranslation('subject');
  const uiLang = toLang(i18n.language);
  const subject = pack.meta.id;

  if (topics.length === 0) {
    return <p role="status" className="foma-card m-0 text-[var(--color-muted)]">{t('topics.empty')}</p>;
  }

  return (
    <ol className="m-0 list-none space-y-3 p-0">
      {topics.map(topic => {
        const bodies = pack.topicBodies[topic.id];
        const state = bodyState(bodies, contentLang);
        const missing = missingLangs(bodies, contentLang);
        const record = progress[topicKey(subject, topic.id)];
        const links = (topic.links ?? []).filter(link => publicUrl(link.url) !== null);
        const notReady = state === 'missing' && contentLang === 'en+ru' ? t('topics.notReady.both') : t(`topics.notReady.${missing[0] ?? 'en'}`);
        return (
          <li key={topic.id} className="foma-card">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="foma-code-label">{topic.code}</span>
              <Link to={ROUTES.topic(subject, topic.id)} className="text-lg font-semibold underline underline-offset-2 [overflow-wrap:anywhere]">
                {pickText(topic.title, uiLang)}
              </Link>
            </div>
            <div className="mt-2"><TopicChips topic={topic} /></div>
            <p className="mb-0 mt-2 text-sm text-[var(--color-muted)]">
              {record?.done ? t('topics.done', { date: dateOnly(record.done) }) : t('topics.notDone')}
              {record?.rag ? ` · ${t(`topics.rag.${record.rag}`)}` : ''}
            </p>
            {state !== 'ready' ? (
              <div className="mt-3 border-t border-[var(--color-border)] pt-3 text-sm">
                <p className="m-0 font-medium">{notReady}</p>
                {links.length > 0 ? (
                  <>
                    <p className="mb-1 mt-2 text-[var(--color-muted)]">{t('topics.meanwhile')}</p>
                    <LinkList links={links} lang={uiLang} />
                  </>
                ) : null}
              </div>
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}
