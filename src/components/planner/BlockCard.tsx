import { ArrowRightLeft, Check, CircleCheck, ExternalLink as ExternalIcon, Play, Undo2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import type { Lang } from '../../contract/types';
import { formatDate } from '../../planner/format';
import type { PlanBlock, Rag } from '../../planner/types';
import { describeBlock, formatMinutes } from './labels';
import { RagControl } from './RagControl';
import { Btn, CARD, Chip, ExternalLink, MUTED } from './ui';

interface Props {
  block: PlanBlock;
  lang: Lang;
  showDetail?: boolean;           // false hides a general hint that an earlier block of the group already shows
  timerRunning: boolean;
  onStart: (block: PlanBlock, label: string) => void;
  onToggleDone: (block: PlanBlock) => void;
  onRag: (block: PlanBlock, rag: Rag | null) => void;
}

const LINK_CLASS = 'inline-flex min-h-[44px] items-center gap-1 text-sm font-medium';

// One block of today's plan. Links lead to the portal page; a topic with no lesson text yet shows its outside links instead.
export function BlockCard({ block, lang, showDetail = true, timerRunning, onStart, onToggleDone, onRag }: Props) {
  const { t } = useTranslation('today');
  const { t: tp } = useTranslation('planner');
  const text = describeBlock(block, lang, tp);
  const done = block.status === 'done';
  const hasLessonText = block.ready?.[lang] ?? false;
  const links = block.links ?? [];
  const showOutsideLinks = (block.kind === 'topic' || block.kind === 'practice') && !hasLessonText && links.length > 0;

  let materials: JSX.Element | null = null;
  if (showOutsideLinks) {
    materials = (
      <div className="mt-2 text-sm">
        <p className={MUTED}>{tp('noLessonText')}</p>
        <ul className="mt-1 list-none space-y-1 p-0">
          {links.map(link => (
            <li key={link.url} className="flex items-start gap-1">
              <ExternalIcon size={14} aria-hidden className="mt-1 shrink-0" />
              <ExternalLink href={link.url} hint={tp('opensInNewTab')}>
                {link.title}
              </ExternalLink>
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    // A practice block of a topic without questions yet leads to the topic page, so it says so. A timed set of a guide
    // (the maths diagnostic) leads to the practice page, not to the paper guide.
    const label =
      block.kind === 'practice' ? (block.hasQuestions ? tp('openPractice') : tp('openTopic'))
        : block.kind === 'timed' && block.route.includes('?set=') ? tp('openPractice')
          : block.kind === 'timed' || block.kind === 'paper' ? tp('openPaper')
          : block.kind === 'study' ? tp('openSubject')
            : tp('openTopic');
    materials = (
      <Link to={block.route} className={LINK_CLASS}>
        {label}
      </Link>
    );
  }

  // The visible button text stays short; screen readers also hear which block it is for.
  const context = <span className="sr-only">: {text.title}</span>;
  return (
    <li className={`${CARD} p-3`} data-status={block.status}>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="mb-1 flex flex-wrap items-center gap-2">
            <Chip>{text.kind}</Chip>
            <Chip>{formatMinutes(tp, block.minutes)}</Chip>
            {done && (
              <Chip strong>
                <CircleCheck size={12} aria-hidden /> {tp('status.done')}
              </Chip>
            )}
            {block.status === 'moved' && (
              <Chip strong>
                <ArrowRightLeft size={12} aria-hidden />{' '}
                {block.movedFrom ? tp('movedFrom', { date: formatDate(block.movedFrom, lang, 'day') }) : tp('status.moved')}
              </Chip>
            )}
          </div>
          <h3 className="break-words text-base font-semibold leading-snug">{text.title}</h3>
          {showDetail && text.detail && (
            // A timed paper's note comes from data/plan-quotas.json, which is written in English.
            <p lang={block.kind === 'timed' ? 'en' : undefined} className={`mt-0.5 break-words text-sm ${MUTED}`}>
              {text.detail}
            </p>
          )}
          {materials}
        </div>
        <div className="flex w-full flex-wrap gap-2 sm:w-auto">
          {/* Done and Undo are one button that changes its label, so keyboard focus stays on it. A running timer
              marks Start as unavailable without taking it out of the tab order. */}
          {!done && (
            <Btn aria-disabled={timerRunning || undefined} onClick={() => !timerRunning && onStart(block, text.title)}>
              <Play size={16} aria-hidden /> {timerRunning ? t('block.running') : t('block.start')}
              {context}
            </Btn>
          )}
          <Btn variant={done ? 'quiet' : 'primary'} onClick={() => onToggleDone(block)}>
            {done ? <Undo2 size={16} aria-hidden /> : <Check size={16} aria-hidden />} {done ? t('block.undo') : t('block.done')}
            {context}
          </Btn>
        </div>
      </div>
      {block.kind === 'topic' && block.last && done && block.subject && block.topicId && (
        <RagControl name={text.title} value={block.rag} onChange={rag => onRag(block, rag)} />
      )}
    </li>
  );
}
