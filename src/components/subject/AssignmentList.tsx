import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import type { Assignment, TopicMeta } from '../../contract/types';
import { ROUTES } from '../../config/routes';
import { pickText } from '../../lib/text';
import './subject.css';

// Today as YYYY-MM-DD in Dubai, the time zone of the plan: due dates are compared on that calendar day.
export function dubaiToday(now: Date = new Date()): string {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Dubai', year: 'numeric', month: '2-digit', day: '2-digit' }).format(now);
}

// The teacher's tasks with their due dates, earliest first. A task that is late or due today says so in words.
export function AssignmentList({ subject, assignments, topics }: { subject: string; assignments: Assignment[]; topics: TopicMeta[] }) {
  const { t, i18n } = useTranslation('subject');
  const today = dubaiToday();
  const topicById = new Map(topics.map(topic => [topic.id, topic]));
  const sorted = [...assignments].sort((a, b) => a.due.localeCompare(b.due) || a.id.localeCompare(b.id));
  const dateFormat = new Intl.DateTimeFormat(i18n.language, { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });

  return (
    <ul className="m-0 flex list-none flex-col gap-3 p-0">
      {sorted.map(item => {
        const late = item.due < today;
        const dueToday = item.due === today;
        return (
          <li key={item.id} className="flex flex-col gap-2 rounded-lg border border-current/20 p-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-medium">{pickText(item.title, i18n.language)}</span>
              <span className="foma-chip" data-tone={late ? 'red' : dueToday ? 'amber' : undefined}>
                {late ? t('assignments.overdue') : dueToday ? t('assignments.today') : t('assignments.due', { date: dateFormat.format(new Date(`${item.due}T00:00:00Z`)) })}
              </span>
            </div>
            {item.topicIds.length > 0 ? (
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-sm">{t('assignments.topics')}:</span>
                {item.topicIds.map(topicId => {
                  const topic = topicById.get(topicId);
                  if (!topic) return null;
                  return (
                    <Link key={topicId} to={ROUTES.topic(subject, topicId)} className="foma-chip">
                      {pickText(topic.title, i18n.language)}
                    </Link>
                  );
                })}
              </div>
            ) : null}
            {item.url ? (
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="foma-btn self-start">
                {t('assignments.open')}
              </a>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}
