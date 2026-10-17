import { CalendarClock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { Lang, SubjectId } from '../../contract/types';
import type { NextExam } from '../../planner/countdown';
import { capitalize, formatDate, formatTimeRange } from '../../planner/format';
import { formatMinutes, formatRemaining, paperLabel } from '../planner/labels';
import { subjectInfo, type SubjectInfo } from '../planner/subjects';
import { CARD, MUTED } from '../planner/ui';

interface Props {
  next: NextExam | null;
  lang: Lang;
  infos: Map<SubjectId, SubjectInfo>;
  headingLevel?: 'h2' | 'h3';
}

// Countdown to the nearest exam, with the time and the room from data/exams.json (Dubai time, room as written there).
export function ExamCountdown({ next, lang, infos, headingLevel = 'h2' }: Props) {
  const { t } = useTranslation('exams');
  const { t: tp } = useTranslation('planner');
  const Heading = headingLevel;

  if (!next) {
    return (
      <section className={`${CARD} p-4`} aria-label={t('countdown.next')}>
        <Heading className="text-lg font-semibold">{t('countdown.next')}</Heading>
        <p className={`mt-1 ${MUTED}`}>{t('countdown.none')}</p>
      </section>
    );
  }

  const { exam } = next;
  const running = next.phase === 'running';
  const remaining = formatRemaining(tp, next.remainingMs);
  const name = `${subjectInfo(infos, exam.subject).name}, ${paperLabel(tp, exam.paper, exam.part)}`;
  const length = Math.round((next.endMs - next.startMs) / 60_000);
  return (
    <section className={`${CARD} p-4`} aria-label={t('countdown.next')}>
      <p className={`flex items-center gap-2 text-xs font-medium uppercase tracking-wide ${MUTED}`}>
        <CalendarClock size={14} aria-hidden /> {running ? t('countdown.running') : t('countdown.next')}
      </p>
      <Heading className="mt-1 break-words text-lg font-semibold leading-snug">{name}</Heading>
      <p className="mt-1 text-sm">
        {capitalize(formatDate(exam.date, lang, 'long'))}, {formatTimeRange(next.start, length)} · {t('dubaiTime')}
      </p>
      {next.start !== exam.start && (
        <p className={`text-sm ${MUTED}`}>{t('countdown.separateRoom', { time: next.start, hall: exam.start })}</p>
      )}
      <p className="text-sm">{t('countdown.room', { room: exam.room })}</p>
      <p
        role="timer"
        aria-label={`${running ? t('countdown.untilEnd') : t('countdown.untilStart')}: ${remaining}`}
        className="mt-3 flex flex-wrap items-baseline gap-x-2"
      >
        <span className="text-3xl font-semibold tabular-nums">{remaining}</span>
        <span className={`text-sm ${MUTED}`}>{running ? t('countdown.untilEnd') : t('countdown.untilStart')}</span>
      </p>
    </section>
  );
}
