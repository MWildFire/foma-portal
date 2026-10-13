import { CircleCheck, Clock, Hourglass } from 'lucide-react';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { formatMinutes, paperLabel } from '../components/planner/labels';
import { subjectInfo, subjectInfos } from '../components/planner/subjects';
import { CARD, Chip, MUTED } from '../components/planner/ui';
import { ExamCountdown } from '../components/progress/ExamCountdown';
import { ROUTES } from '../config/routes';
import type { Lang } from '../contract/types';
import { useExamCountdown } from '../hooks/useExamCountdown';
import { useLocalProgress } from '../hooks/useLocalProgress';
import { examEndMs, examStartMs, extendedMinutes } from '../planner/calendar';
import { EXAMS } from '../planner/data';
import { dubaiToday } from '../planner/dates';
import { capitalize, formatDate, formatTimeRange } from '../planner/format';
import type { ExamPaper } from '../planner/types';

// The exam days in calendar order; papers inside a day keep the order of the file (by start time).
function byDay(papers: ExamPaper[]): { date: string; papers: ExamPaper[] }[] {
  const out: { date: string; papers: ExamPaper[] }[] = [];
  for (const paper of papers) {
    const last = out[out.length - 1];
    if (last && last.date === paper.date) last.papers.push(paper);
    else out.push({ date: paper.date, papers: [paper] });
  }
  return out;
}

// The mock exam calendar from data/exams.json, in Dubai time, with the room exactly as the school printed it.
export function ExamsPage() {
  const { t, i18n } = useTranslation('exams');
  const { t: tc } = useTranslation();
  const { t: tp } = useTranslation('planner');
  const lang: Lang = i18n.language.startsWith('ru') ? 'ru' : 'en';
  const [state] = useLocalProgress();
  const { extraTime, separateRoom } = state.settings.accessArrangements;
  const { now, next } = useExamCountdown(extraTime);
  const infos = useMemo(() => subjectInfos(lang), [lang]);
  const days = useMemo(() => byDay(EXAMS.papers), []);
  const today = dubaiToday(now);
  const first = EXAMS.papers[0];
  const last = EXAMS.papers[EXAMS.papers.length - 1];

  return (
    <section className="space-y-5">
      <header>
        <h1 className="text-2xl font-semibold">{tc('nav.exams')}</h1>
        {first && last && (
          <p className={MUTED}>
            {t('intro', { n: EXAMS.papers.length, from: formatDate(first.date, lang, 'day'), to: formatDate(last.date, lang, 'day') })}
          </p>
        )}
        <p className={`text-sm ${MUTED}`}>{t('timesNote')}</p>
      </header>

      <ExamCountdown next={next} lang={lang} infos={infos} />

      <div role="note" className={`${CARD} p-3 text-sm`}>
        <p className="m-0">
          <span className="font-medium">{t('access.title')}: </span>
          {extraTime || separateRoom
            ? [extraTime ? t('access.extraTime') : null, separateRoom ? t('access.separateRoom') : null].filter(Boolean).join(' · ')
            : t('access.none')}
        </p>
        <Link to={ROUTES.settings()} className="inline-flex min-h-[44px] items-center font-medium">
          {t('access.change')}
        </Link>
      </div>

      {days.length === 0 && (
        <div className={`${CARD} p-4`}>
          <p className={MUTED}>{t('empty')}</p>
        </div>
      )}

      {days.map(day => (
        <section key={day.date} aria-labelledby={`exam-day-${day.date}`} className="space-y-2">
          <h2 id={`exam-day-${day.date}`} className="flex flex-wrap items-center gap-2 text-lg font-semibold">
            {capitalize(formatDate(day.date, lang, 'long'))}
            {day.date === today && <Chip strong>{t('today')}</Chip>}
          </h2>
          <ul className="m-0 list-none space-y-2 p-0">
            {day.papers.map(exam => {
              const startMs = examStartMs(exam);
              const endMs = examEndMs(exam, EXAMS, extraTime);
              const finished = endMs <= now;
              const running = !finished && startMs <= now;
              const isNext = !finished && !running && next?.exam.id === exam.id;
              const info = subjectInfo(infos, exam.subject);
              const longer = extendedMinutes(EXAMS, exam.minutes);
              const ownStart = separateRoom && exam.acc2Start ? exam.acc2Start : exam.start;
              return (
                <li key={exam.id} className={`${CARD} p-3 ${isNext || running ? 'border-[var(--color-accent)]' : ''}`}>
                  <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-1">
                    <p className="m-0 text-lg font-semibold tabular-nums">{formatTimeRange(exam.start, exam.minutes)}</p>
                    {finished && (
                      <Chip>
                        <CircleCheck size={12} aria-hidden /> {t('status.finished')}
                      </Chip>
                    )}
                    {running && (
                      <Chip strong>
                        <Hourglass size={12} aria-hidden /> {t('status.running')}
                      </Chip>
                    )}
                    {isNext && (
                      <Chip strong>
                        <Clock size={12} aria-hidden /> {t('status.next')}
                      </Chip>
                    )}
                  </div>
                  <h3 className="mt-0.5 break-words text-base font-semibold leading-snug">
                    {info.name}, {paperLabel(tp, exam.paper, exam.part)}
                  </h3>
                  <dl className="mt-1 grid grid-cols-[auto_1fr] gap-x-3 gap-y-0.5 text-sm">
                    <dt className={MUTED}>{t('fields.duration')}</dt>
                    <dd className="m-0">{formatMinutes(tp, exam.minutes)}</dd>
                    <dt className={MUTED}>{t('fields.room')}</dt>
                    <dd className="m-0 break-words">{exam.room}</dd>
                    {separateRoom && (
                      <>
                        <dt className={MUTED}>{t('fields.separateRoom')}</dt>
                        <dd className="m-0 break-words">
                          {exam.acc2Start ? t('separateStart', { time: exam.acc2Start }) : t('noSeparateStart')}
                        </dd>
                      </>
                    )}
                    {extraTime && (
                      <>
                        <dt className={MUTED}>{t('fields.extraTime')}</dt>
                        <dd className="m-0 break-words tabular-nums">
                          {t('extraTimeValue', { time: formatMinutes(tp, longer), range: formatTimeRange(ownStart, longer) })}
                        </dd>
                      </>
                    )}
                  </dl>
                  {exam.note && (
                    <p className={`mt-1 break-words text-sm ${MUTED}`}>
                      <span className="font-medium">{t('fields.note')}: </span>
                      <span lang="en">{exam.note}</span>
                    </p>
                  )}
                  <Link to={ROUTES.paper(exam.subject, exam.paper)} className="inline-flex min-h-[44px] items-center text-sm font-medium">
                    {t('paperGuide')}
                    <span className="sr-only">: {info.name}, {paperLabel(tp, exam.paper, exam.part)}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </section>
  );
}
