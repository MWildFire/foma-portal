import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import type { PastPaperRef, TopicMeta } from '../../contract/types';
import { ROUTES } from '../../config/routes';
import type { PastPaperProgress } from '../../lib/storage';
import { clampScore, selfScore, sessionDate } from '../../lib/past-papers';
import { pickText } from '../../lib/text';
import { RichText } from '../content/RichText';
import { dubaiToday } from '../subject/AssignmentList';
import { timerStorageKey } from '../../lib/practice';
import { EXAMS } from '../../planner/data';
import { Clock } from '../practice/Clock';
import { setAllowanceMinutes } from '../practice/timing';

const FILE_ORDER = ['questions', 'resources', 'markscheme', 'audio'];

export interface PastPaperCardProps {
  subject: string;
  paper: PastPaperRef;
  topics: TopicMeta[];
  progress: PastPaperProgress | undefined;
  extraTime: boolean;                  // the student's extra-time setting (Settings)
  onScore: (itemIndex: number, score: number) => void;
  onSolved: (date: string | undefined) => void;
}

// One past paper: its files as links to the IB site, our guide, the questions with a box for the marks you got,
// and a mark for "solved". The question text stays on the IB site.
export function PastPaperCard({ subject, paper, topics, progress, extraTime, onScore, onSolved }: PastPaperCardProps) {
  const { t, i18n } = useTranslation('subject');
  const lang = i18n.language;
  const date = sessionDate(paper.session);
  const title = date
    ? new Intl.DateTimeFormat(lang, { month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(Date.UTC(date.year, date.monthIndex, 1)))
    : paper.session;
  const topicById = new Map(topics.map(topic => [topic.id, topic]));
  const score = selfScore(paper, progress?.scores);
  const solved = progress?.solved;
  const files = [...paper.files].sort((a, b) => FILE_ORDER.indexOf(a.kind) - FILE_ORDER.indexOf(b.kind));
  // The timer runs for the time the school's table gives with extra time, and for the printed time without it.
  const [timed, setTimed] = useState(false);
  const allowance = setAllowanceMinutes({ subject, set: { paper: paper.paper, part: paper.part, minutes: paper.minutes }, exams: EXAMS, extraTime });

  return (
    <article className="flex flex-col gap-4 rounded-lg border border-current/20 p-4">
      <header className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h3 className="m-0 text-lg font-semibold">{title}{paper.part ? `, ${paper.part}` : ''}</h3>
        <span className="foma-chip">{paper.level}</span>
        {paper.tz ? <span className="foma-chip">{paper.tz}</span> : null}
        <span className="text-sm">{t('pastPapers.minutes', { minutes: paper.minutes })}</span>
      </header>

      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap items-center gap-3">
          <button type="button" className="foma-btn" aria-expanded={timed} onClick={() => setTimed(value => !value)}>
            {timed ? t('pastPapers.hideTimer') : t('pastPapers.solveOnTime')}
          </button>
          <span className="text-sm">
            {allowance > paper.minutes ? t('pastPapers.allowanceExtra', { minutes: allowance }) : t('pastPapers.allowance', { minutes: allowance })}
          </span>
        </div>
        {timed ? <Clock key={`${paper.id}:${allowance}`} minutes={allowance} storageKey={timerStorageKey(subject, `past-${paper.id}`)} /> : null}
      </div>

      {files.length > 0 ? (
        <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
          {files.map(file => (
            <li key={`${file.kind}-${file.url}`}>
              <a href={file.url} target="_blank" rel="noopener noreferrer" className="foma-btn">
                {t(`pastPapers.files.${file.kind}`)}
              </a>
            </li>
          ))}
        </ul>
      ) : null}

      <details>
        <summary className="cursor-pointer font-medium">{t('pastPapers.guide')}</summary>
        <div className="mt-2">
          {paper.guide ? <RichText text={pickText(paper.guide, lang)} /> : <p className="m-0">{t('pastPapers.noGuide')}</p>}
        </div>
      </details>

      <details>
        <summary className="cursor-pointer font-medium">{t('pastPapers.itemsSummary', { count: paper.items.length })}</summary>
      <section aria-label={t('pastPapers.items')} className="mt-3 flex flex-col gap-3">
        <ol className="m-0 flex list-none flex-col gap-3 p-0">
          {paper.items.map((item, index) => {
            const value = progress?.scores?.[String(index)];
            return (
              <li key={`${index}-${item.q}`} className="flex flex-col gap-2 border-t border-current/15 pt-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-medium">{item.q}</span>
                  <span className="text-sm">{t('pastPapers.marksOf', { marks: item.marks })}</span>
                  {item.command ? <span className="foma-chip">{t('pastPapers.command', { command: item.command })}</span> : null}
                  {item.option ? <span className="foma-chip">{item.option}</span> : null}
                </div>
                {item.topicIds.length > 0 ? (
                  <div className="flex flex-wrap gap-1.5">
                    {item.topicIds.map(topicId => {
                      const topic = topicById.get(topicId);
                      return topic ? (
                        <Link key={topicId} to={ROUTES.topic(subject, topicId)} className="foma-chip">
                          {pickText(topic.title, lang)}
                        </Link>
                      ) : null;
                    })}
                  </div>
                ) : null}
                <label className="flex items-center gap-2 text-sm">
                  <span>{t('pastPapers.marksFor', { q: item.q })}</span>
                  <input
                    type="number"
                    inputMode="numeric"
                    min={0}
                    max={item.marks}
                    step={1}
                    value={value ?? ''}
                    placeholder="0"
                    className="w-20 rounded border border-current/30 bg-transparent px-2 py-1"
                    onChange={event => onScore(index, clampScore(event.currentTarget.valueAsNumber, item.marks))}
                  />
                </label>
              </li>
            );
          })}
        </ol>
      </section>
      </details>

      <footer className="flex flex-wrap items-center gap-3">
        <span>{t('pastPapers.selfScore', { earned: score.earned, total: score.total })}</span>
        <button type="button" className="foma-btn" aria-pressed={solved !== undefined} onClick={() => onSolved(solved === undefined ? dubaiToday() : undefined)}>
          {solved === undefined ? t('pastPapers.solve') : t('pastPapers.unsolve')}
        </button>
        {solved !== undefined ? <span className="text-sm">{t('pastPapers.solvedOn', { date: solved })}</span> : null}
      </footer>
    </article>
  );
}
