import { CircleCheck, Info } from 'lucide-react';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BlockCard } from '../components/planner/BlockCard';
import { RecallSection } from '../components/planner/RecallSection';
import { TimerPanel } from '../components/planner/TimerPanel';
import { studyTimer, useStudyTimer } from '../components/planner/timerStore';
import { subjectInfo, subjectInfos } from '../components/planner/subjects';
import { usePageTitle, useScrollToTop } from '../components/planner/usePageTitle';
import { usePlan } from '../components/planner/usePlan';
import { CARD, CARD_ACCENT, MUTED } from '../components/planner/ui';
import { formatMinutes, paperLabel } from '../components/planner/labels';
import { ExamCountdown } from '../components/progress/ExamCountdown';
import { ROUTES } from '../config/routes';
import type { SubjectId } from '../contract/types';
import { useExamCountdown } from '../hooks/useExamCountdown';
import { markBlockDone, setTopicRag, unmarkBlockDone } from '../planner/actions';
import { capitalize, formatDate } from '../planner/format';
import type { PlanBlock, Rag } from '../planner/types';

function Note({ children }: { children: React.ReactNode }) {
  return (
    <div role="note" className={`${CARD} flex items-start gap-2 p-3 text-sm`}>
      <Info size={18} aria-hidden className="mt-0.5 shrink-0 text-[var(--color-accent)]" />
      <p className="m-0 min-w-0 break-words">{children}</p>
    </div>
  );
}

export function TodayPage() {
  const { t } = useTranslation('today');
  const { t: tc } = useTranslation();
  const { t: tp } = useTranslation('planner');
  const { plan, state, update, today, lang } = usePlan();
  usePageTitle(tc('nav.today'), tc('brand'));
  useScrollToTop();
  const { extraTime, separateRoom } = state.settings.accessArrangements;
  const { next } = useExamCountdown(extraTime, separateRoom);
  const timer = useStudyTimer();
  const infos = useMemo(() => subjectInfos(lang), [lang]);

  const day = plan.days.find(d => d.isToday) ?? null;
  const recallBlock = day?.blocks.find(b => b.kind === 'recall') ?? null;
  const groups = useMemo(() => {
    const out: { subject: SubjectId; blocks: PlanBlock[] }[] = [];
    for (const block of day?.blocks ?? []) {
      if (block.kind === 'recall' || !block.subject) continue;
      const last = out[out.length - 1];
      if (last && last.subject === block.subject) last.blocks.push(block);
      else out.push({ subject: block.subject, blocks: [block] });
    }
    return out;
  }, [day]);

  // A timed paper and the recall run one countdown for their own length; everything else is a 25/5 Pomodoro.
  const startBlock = (block: PlanBlock, label: string) => {
    studyTimer.start({
      blockId: block.id,
      label: block.subject ? `${subjectInfo(infos, block.subject).name}: ${label}` : label,
      mode: block.kind === 'timed' || block.kind === 'recall' ? 'single' : 'pomodoro',
      minutes: block.minutes,
    });
  };
  const toggleDone = (block: PlanBlock) => {
    if (block.status === 'done') {
      update(s => unmarkBlockDone(s, block, today));
    } else {
      update(s => markBlockDone(s, block, today));
      if (timer?.blockId === block.id) studyTimer.stop();
    }
  };
  const setRag = (block: PlanBlock, rag: Rag | null) => {
    if (block.subject && block.topicId) update(s => setTopicRag(s, block.subject as SubjectId, block.topicId as string, rag));
  };
  const timerRunning = (block: PlanBlock) => timer?.blockId === block.id && timer.phase !== 'done';

  const finished = plan.activeSubjects.length === 0 && next === null;
  // Before the plan starts: what the first day holds, per subject ("Geography 1 h · Maths 45 min").
  const firstDayPreview = useMemo(() => {
    const first = plan.days[0];
    if (!first || first.isToday) return '';
    const minutes = new Map<SubjectId, number>();
    for (const block of first.blocks) if (block.subject) minutes.set(block.subject, (minutes.get(block.subject) ?? 0) + block.minutes);
    return [...minutes].map(([subject, total]) => `${subjectInfo(infos, subject).name} ${formatMinutes(tp, total)}`).join(' · ');
  }, [plan, infos, tp]);
  const hasTimed = day?.blocks.some(b => b.kind === 'timed') ?? false;
  const allDone = day !== null && day.minutes > 0 && day.doneMinutes >= day.minutes;

  return (
    <section className="space-y-5">
      <header>
        <h1 className="text-2xl font-semibold">{tc('nav.today')}</h1>
        <p className={MUTED}>{t('dateLine', { date: capitalize(formatDate(today, lang, 'long')) })}</p>
      </header>

      <ExamCountdown next={next} lang={lang} infos={infos} />

      {/* With an ACC2 time the countdown above already starts there; without one the student has to ask. */}
      {separateRoom && next && !next.exam.acc2Start && (
        <Note>{t('notes.separateRoomUnknown', { time: next.exam.start, room: next.exam.room })}</Note>
      )}

      <TimerPanel />

      {finished && (
        <div className={`${CARD} p-4`}>
          <h2 className="text-lg font-semibold">{t('empty.finished.title')}</h2>
          <p className={`mt-1 ${MUTED}`}>{t('empty.finished.text')}</p>
          <Link to={ROUTES.exams()} className="mt-2 inline-flex min-h-[44px] items-center font-medium">
            {t('links.exams')}
          </Link>
        </div>
      )}

      {!finished && !day && (
        <div className={`${CARD} p-4`}>
          <h2 className="text-lg font-semibold">{t('empty.nothing.title')}</h2>
          <p className={`mt-1 ${MUTED}`}>
            {today < plan.firstDate ? t('empty.beforeStart', { date: formatDate(plan.firstDate, lang, 'long') }) : t('empty.nothing.text')}
          </p>
          {today < plan.firstDate && firstDayPreview && <p className="mt-1 break-words text-sm">{t('empty.firstDay', { list: firstDayPreview })}</p>}
          <Link to={ROUTES.plan()} className="mt-2 inline-flex min-h-[44px] items-center font-medium">
            {t('links.plan')}
          </Link>
        </div>
      )}

      {!finished && day && (
        <>
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">{t('plan.title')}</h2>
            {day.focus && (
              <p className="text-sm">
                <span className="font-medium">{t('focus')}: </span>
                {/* The focus of the day comes from data/plan-quotas.json, which is written in English. */}
                <span lang="en">{day.focus}</span>
              </p>
            )}
            {day.minutes > 0 && (
              <div>
                <progress
                  className="h-2 w-full [accent-color:var(--color-accent)]"
                  value={day.doneMinutes}
                  max={day.minutes}
                  aria-label={t('progressLabel')}
                />
                <p className={`text-sm ${MUTED}`}>
                  {t('progress', { done: formatMinutes(tp, day.doneMinutes), total: formatMinutes(tp, day.minutes) })}
                </p>
              </div>
            )}
            {/* The live region is always there, so its message is announced when the last block is ticked off. */}
            <div role="status" aria-live="polite">
              {allDone && (
                <div className={`${CARD_ACCENT} flex items-start gap-2 p-3 text-sm`}>
                  <CircleCheck size={18} aria-hidden className="mt-0.5 shrink-0 text-[var(--color-accent)]" />
                  <p className="m-0 font-medium">{t('notes.allDone')}</p>
                </div>
              )}
            </div>
            {day.kind === 'exam' && groups.length > 0 && <Note>{t('notes.exam')}</Note>}
            {day.eveOf.length > 0 && (
              <Note>
                {t('notes.eve', {
                  papers: day.eveOf
                    .map(exam => `${subjectInfo(infos, exam.subject).name} ${paperLabel(tp, exam.paper, exam.part)}`)
                    .join(', '),
                })}
              </Note>
            )}
            {day.moved > 0 && <Note>{t('notes.moved', { time: formatMinutes(tp, day.moved) })}</Note>}
            {extraTime && hasTimed && <Note>{t('notes.extraTime')}</Note>}
            {day.kind === 'rest' && <Note>{t('empty.rest')}</Note>}
          </div>

          <RecallSection
            block={recallBlock}
            recall={day.recall}
            infos={infos}
            activeSubjects={plan.activeSubjects}
            timerRunning={recallBlock ? timerRunning(recallBlock) : false}
            onStart={startBlock}
            onToggleDone={toggleDone}
          />

          {groups.length === 0 && day.kind !== 'rest' && (
            <div className={`${CARD} p-4`}>
              <h2 className="text-lg font-semibold">{day.kind === 'exam' ? t('empty.examDay.title') : t('empty.nothing.title')}</h2>
              <p className={`mt-1 ${MUTED}`}>{day.kind === 'exam' ? t('empty.examDay.text') : t('empty.nothing.text')}</p>
              <Link to={ROUTES.plan()} className="mt-2 inline-flex min-h-[44px] items-center font-medium">
                {t('links.plan')}
              </Link>
            </div>
          )}

          {groups.map(group => {
            const info = subjectInfo(infos, group.subject);
            const total = group.blocks.reduce((sum, b) => sum + b.minutes, 0);
            const done = group.blocks.filter(b => b.status === 'done').length;
            // The general hint of a study session or of exam prep is the same for every such block: show it once.
            const hinted = new Set<string>();
            const showsHint = (block: PlanBlock): boolean => {
              if (block.kind !== 'study' && block.kind !== 'paper') return true;
              if (hinted.has(block.kind)) return false;
              hinted.add(block.kind);
              return true;
            };
            return (
              <section key={group.subject} aria-labelledby={`subject-${group.subject}`}>
                <div className="mb-2 flex flex-wrap items-baseline justify-between gap-x-3">
                  <h2 id={`subject-${group.subject}`} className="flex items-center gap-2 text-lg font-semibold">
                    <span aria-hidden className="inline-block h-3 w-3 shrink-0 rounded-sm" style={{ background: info.accent }} />
                    <Link to={info.route} className="no-underline hover:underline" style={{ color: 'inherit' }}>
                      {info.name}
                    </Link>
                  </h2>
                  <p className={`text-sm ${MUTED}`}>
                    {formatMinutes(tp, total)} · {t('subject.done', { done, total: group.blocks.length })}
                  </p>
                </div>
                <ul className="m-0 list-none space-y-2 p-0">
                  {group.blocks.map(block => (
                    <BlockCard
                      key={block.id}
                      block={block}
                      lang={lang}
                      showDetail={showsHint(block)}
                      timerRunning={timerRunning(block)}
                      onStart={startBlock}
                      onToggleDone={toggleDone}
                      onRag={setRag}
                    />
                  ))}
                </ul>
              </section>
            );
          })}

          <p>
            <Link to={ROUTES.plan()} className="inline-flex min-h-[44px] items-center font-medium">
              {t('links.plan')}
            </Link>
          </p>
        </>
      )}
    </section>
  );
}
