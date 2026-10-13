import { AlertTriangle, ArrowRightLeft, ChevronDown, Circle, CircleCheck, Info } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { describeBlock, formatMinutes, paperLabel } from '../components/planner/labels';
import { subjectInfo, subjectInfos, type SubjectInfo } from '../components/planner/subjects';
import { usePageTitle, useScrollToTop } from '../components/planner/usePageTitle';
import { usePlan } from '../components/planner/usePlan';
import { Btn, CARD, Chip, MUTED } from '../components/planner/ui';
import { ROUTES } from '../config/routes';
import type { Lang, SubjectId } from '../contract/types';
import { capitalize, formatDate, formatTimeRange } from '../planner/format';
import type { PlanBlock, PlanDay } from '../planner/types';

type Infos = Map<SubjectId, SubjectInfo>;

// Subject groups in the order the blocks come in (the day's priority), the recall block on its own.
function groupBySubject(blocks: PlanBlock[]): { subject: SubjectId; blocks: PlanBlock[] }[] {
  const out: { subject: SubjectId; blocks: PlanBlock[] }[] = [];
  for (const block of blocks) {
    if (!block.subject) continue;
    const group = out.find(item => item.subject === block.subject);
    if (group) group.blocks.push(block);
    else out.push({ subject: block.subject, blocks: [block] });
  }
  return out;
}

function BlockStatus({ block, lang }: { block: PlanBlock; lang: Lang }) {
  const { t: tp } = useTranslation('planner');
  if (block.status === 'done') {
    return (
      <span className="inline-flex items-center gap-1 font-medium text-[var(--color-accent)]">
        <CircleCheck size={14} aria-hidden /> {tp('status.done')}
      </span>
    );
  }
  if (block.status === 'moved') {
    return (
      <span className="inline-flex items-center gap-1 font-medium">
        <ArrowRightLeft size={14} aria-hidden />{' '}
        {block.movedFrom ? tp('movedFrom', { date: formatDate(block.movedFrom, lang, 'day') }) : tp('status.moved')}
      </span>
    );
  }
  return (
    <span className={`inline-flex items-center gap-1 ${MUTED}`}>
      <Circle size={14} aria-hidden /> {tp('status.planned')}
    </span>
  );
}

function BlockRow({ block, lang }: { block: PlanBlock; lang: Lang }) {
  const { t: tp } = useTranslation('planner');
  const text = describeBlock(block, lang, tp);
  // The overview keeps only details that differ from block to block (the part of a topic, the note of a timed paper).
  const detail = block.kind === 'topic' || block.kind === 'timed' ? text.detail : null;
  return (
    <li className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 border-t border-[var(--color-border)] py-2 first:border-t-0">
      <div className="min-w-0 flex-1">
        <p className={`text-xs font-medium uppercase tracking-wide ${MUTED}`}>{text.kind}</p>
        <Link to={block.route} className="break-words font-medium">
          {text.title}
        </Link>
        {detail && <p className={`break-words text-sm ${MUTED}`}>{detail}</p>}
      </div>
      <p className="flex shrink-0 flex-wrap items-center gap-x-3 text-sm">
        <span className="tabular-nums">{formatMinutes(tp, block.minutes)}</span>
        <BlockStatus block={block} lang={lang} />
      </p>
    </li>
  );
}

function DayBody({ day, lang, infos }: { day: PlanDay; lang: Lang; infos: Infos }) {
  const { t } = useTranslation('plan');
  const { t: tp } = useTranslation('planner');
  const recall = day.blocks.find(block => block.kind === 'recall') ?? null;
  const groups = groupBySubject(day.blocks);

  return (
    <div className="space-y-4 border-t border-[var(--color-border)] px-3 pb-3 pt-3 sm:px-4">
      {day.exams.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold">{t('day.examsTitle')}</h3>
          <ul className="mt-1 list-none space-y-1 p-0 text-sm">
            {day.exams.map(exam => (
              <li key={exam.id} className="break-words">
                <span className="font-medium tabular-nums">{formatTimeRange(exam.start, exam.minutes)}</span>{' '}
                {subjectInfo(infos, exam.subject).name}, {paperLabel(tp, exam.paper, exam.part)} · {t('day.room', { room: exam.room })}
              </li>
            ))}
          </ul>
        </div>
      )}
      {day.focus && (
        <p className="break-words text-sm">
          <span className="font-medium">{t('day.focus')}: </span>
          {day.focus}
        </p>
      )}
      {day.kind === 'rest' && <p className={`text-sm ${MUTED}`}>{t('day.restText')}</p>}
      {day.kind !== 'rest' && day.blocks.length === 0 && <p className={`text-sm ${MUTED}`}>{t('day.empty')}</p>}

      {recall && (
        <ul className="m-0 list-none p-0">
          <BlockRow block={recall} lang={lang} />
        </ul>
      )}
      {groups.map(group => {
        const info = subjectInfo(infos, group.subject);
        const total = group.blocks.reduce((sum, block) => sum + block.minutes, 0);
        return (
          <section key={group.subject} aria-label={info.name}>
            <h3 className="flex flex-wrap items-center gap-x-2 text-sm font-semibold">
              <span aria-hidden className="inline-block h-3 w-3 shrink-0 rounded-sm" style={{ background: info.accent }} />
              <Link to={info.route} className="no-underline hover:underline" style={{ color: 'inherit' }}>
                {info.name}
              </Link>
              <span className={`font-normal ${MUTED}`}>· {formatMinutes(tp, total)}</span>
            </h3>
            <ul className="m-0 mt-1 list-none p-0">
              {group.blocks.map(block => (
                <BlockRow key={block.id} block={block} lang={lang} />
              ))}
            </ul>
          </section>
        );
      })}
      {day.isToday && (
        <p className="m-0">
          <Link to={ROUTES.today()} className="inline-flex min-h-[44px] items-center text-sm font-medium">
            {t('day.openToday')}
          </Link>
        </p>
      )}
    </div>
  );
}

function DaySummary({ day, lang, infos }: { day: PlanDay; lang: Lang; infos: Infos }) {
  const { t } = useTranslation('plan');
  const { t: tp } = useTranslation('planner');
  const exams = day.exams.map(exam => `${subjectInfo(infos, exam.subject).name} ${paperLabel(tp, exam.paper, exam.part)}`).join(', ');
  const eve = day.eveOf.map(exam => `${subjectInfo(infos, exam.subject).name} ${paperLabel(tp, exam.paper, exam.part)}`).join(', ');
  // Only spans: <summary> may hold phrasing content only.
  return (
    <span className="block min-w-0 flex-1">
      <span className="flex flex-wrap items-center gap-2">
        <span className="font-semibold">{capitalize(formatDate(day.date, lang, 'long'))}</span>
        {day.isToday && <Chip strong>{t('day.today')}</Chip>}
        {day.kind === 'exam' && <Chip strong>{t('day.kind.exam')}</Chip>}
        {day.kind === 'rest' && <Chip>{t('day.kind.rest')}</Chip>}
      </span>
      <span className={`mt-0.5 block break-words text-sm ${MUTED}`}>
        {day.kind === 'rest'
          ? t('day.noTime')
          : day.isToday && day.minutes > 0
            ? t('day.minutesToday', { time: formatMinutes(tp, day.minutes), done: formatMinutes(tp, day.doneMinutes) })
            : day.minutes > 0
              ? formatMinutes(tp, day.minutes)
              : t('day.nothing')}
      </span>
      {exams && <span className="block break-words text-sm">{t('day.exams', { papers: exams })}</span>}
      {eve && <span className="block break-words text-sm">{t('day.eve', { papers: eve })}</span>}
    </span>
  );
}

// The whole plan from today to the last exam. Every day is collapsible; today starts open.
export function PlanPage() {
  const { t } = useTranslation('plan');
  const { t: tc } = useTranslation();
  const { t: tp } = useTranslation('planner');
  const { plan, today, lang } = usePlan();
  usePageTitle(tc('nav.plan'), tc('brand'));
  useScrollToTop();
  const infos = useMemo(() => subjectInfos(lang), [lang]);
  const [open, setOpen] = useState<Set<string>>(() => {
    const first = plan.days.find(day => day.isToday)?.date ?? plan.days[0]?.date;
    return new Set(first ? [first] : []);
  });

  const toggle = (date: string, isOpen: boolean) => {
    setOpen(prev => {
      if (prev.has(date) === isOpen) return prev;
      const next = new Set(prev);
      if (isOpen) next.add(date);
      else next.delete(date);
      return next;
    });
  };

  const total = plan.days.reduce((sum, day) => sum + day.minutes, 0);
  const done = plan.days.reduce((sum, day) => sum + day.doneMinutes, 0);
  const debt = plan.debt.reduce((sum, item) => sum + item.minutes, 0);

  return (
    <section className="space-y-5">
      <header>
        <h1 className="text-2xl font-semibold">{tc('nav.plan')}</h1>
        {plan.days.length > 0 && (
          <p className={MUTED}>
            {t('range', {
              from: formatDate(plan.days[0].date, lang, 'day'),
              to: formatDate(plan.lastDate, lang, 'day'),
              days: plan.days.length,
            })}
          </p>
        )}
      </header>

      {plan.days.length === 0 ? (
        <div className={`${CARD} p-4`}>
          <h2 className="text-lg font-semibold">{t('finished.title')}</h2>
          <p className={`mt-1 ${MUTED}`}>{t('finished.text')}</p>
          <Link to={ROUTES.exams()} className="mt-2 inline-flex min-h-[44px] items-center font-medium">
            {t('links.exams')}
          </Link>
        </div>
      ) : (
        <>
          <div className={`${CARD} space-y-1 p-4 text-sm`}>
            <p>{t('summary.planned', { time: formatMinutes(tp, total) })}</p>
            {done > 0 && <p>{t('summary.doneToday', { time: formatMinutes(tp, done) })}</p>}
            {today < plan.firstDate && <p>{t('summary.beforeStart', { date: formatDate(plan.firstDate, lang, 'long') })}</p>}
            <p className={MUTED}>{t('summary.howItWorks')}</p>
          </div>

          {debt > 0 && (
            <div role="note" className={`${CARD} flex items-start gap-2 p-3 text-sm`}>
              <Info size={18} aria-hidden className="mt-0.5 shrink-0 text-[var(--color-accent)]" />
              <div className="min-w-0">
                <p className="m-0 font-medium">{t('debt.title', { time: formatMinutes(tp, debt) })}</p>
                <p className="m-0 break-words">
                  {plan.debt.map(item => `${subjectInfo(infos, item.subject).name}: ${formatMinutes(tp, item.minutes)}`).join(' · ')}
                </p>
                <p className={`m-0 ${MUTED}`}>{t('debt.text')}</p>
              </div>
            </div>
          )}

          {plan.unplaced.length > 0 && (
            <div role="note" className={`${CARD} flex items-start gap-2 border-[var(--color-accent)] p-3 text-sm`}>
              <AlertTriangle size={18} aria-hidden className="mt-0.5 shrink-0 text-[var(--color-accent)]" />
              <div className="min-w-0">
                <p className="m-0 font-medium">{t('unplaced.title')}</p>
                <ul className="my-1 list-disc space-y-0.5 pl-5">
                  {plan.unplaced.map(item => {
                    const name = subjectInfo(infos, item.subject).name;
                    return (
                      <li key={item.subject} className="break-words">
                        {item.minutes > 0 && t('unplaced.minutes', { subject: name, time: formatMinutes(tp, item.minutes) })}
                        {item.minutes > 0 && item.timed.length > 0 && ' · '}
                        {item.timed.length > 0 &&
                          t('unplaced.timed', {
                            subject: name,
                            papers: item.timed.map(entry => `${paperLabel(tp, entry.paper)} (${formatDate(entry.from, lang, 'day')})`).join(', '),
                          })}
                      </li>
                    );
                  })}
                </ul>
                <p className="m-0">
                  {t('unplaced.text')}{' '}
                  <Link to={ROUTES.settings()}>{t('links.settings')}</Link>
                </p>
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-2">
            <Btn onClick={() => setOpen(new Set(plan.days.map(day => day.date)))}>{t('expandAll')}</Btn>
            <Btn onClick={() => setOpen(new Set())}>{t('collapseAll')}</Btn>
          </div>

          <ol className="m-0 list-none space-y-3 p-0">
            {plan.days.map(day => {
              const isOpen = open.has(day.date);
              return (
                <li key={day.date}>
                  <details
                    open={isOpen}
                    onToggle={event => toggle(day.date, event.currentTarget.open)}
                    className={`${CARD} group ${day.isToday ? 'border-[var(--color-accent)]' : ''}`}
                  >
                    <summary className="flex min-h-[44px] cursor-pointer list-none items-start gap-3 p-3 sm:px-4 [&::-webkit-details-marker]:hidden">
                      <DaySummary day={day} lang={lang} infos={infos} />
                      <ChevronDown size={20} aria-hidden className="mt-0.5 shrink-0 transition-transform group-open:rotate-180" />
                    </summary>
                    {isOpen && <DayBody day={day} lang={lang} infos={infos} />}
                  </details>
                </li>
              );
            })}
          </ol>
        </>
      )}
    </section>
  );
}
