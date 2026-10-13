import { Check, CircleCheck, Play, Undo2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ROUTES } from '../../config/routes';
import type { SubjectId } from '../../contract/types';
import type { PlanBlock, RecallInfo } from '../../planner/types';
import { formatMinutes } from './labels';
import { subjectInfo, type SubjectInfo } from './subjects';
import { Btn, CARD, Chip, MUTED } from './ui';

interface Props {
  block: PlanBlock | null;
  recall: RecallInfo | null;
  infos: Map<SubjectId, SubjectInfo>;
  activeSubjects: SubjectId[];
  timerRunning: boolean;
  onStart: (block: PlanBlock, label: string) => void;
  onToggleDone: (block: PlanBlock) => void;
}

const LINK_CLASS = 'inline-flex min-h-[44px] items-center text-sm font-medium';

// The 15-minute recall at the start of the day: flashcards that are due, and the key terms of red topics.
export function RecallSection({ block, recall, infos, activeSubjects, timerRunning, onStart, onToggleDone }: Props) {
  const { t } = useTranslation('today');
  const { t: tp } = useTranslation('planner');
  if (!block) return null;
  const done = block.status === 'done';
  const total = (recall?.dueTotal ?? 0) + (recall?.redTotal ?? 0);
  const crowded = recall !== null && total > recall.capacityCards;

  return (
    <section aria-labelledby="recall-title" className={`${CARD} p-4`}>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="mb-1 flex flex-wrap items-center gap-2">
            <Chip>{tp('kind.recall')}</Chip>
            <Chip>{formatMinutes(tp, block.minutes)}</Chip>
            {done && (
              <Chip strong>
                <CircleCheck size={12} aria-hidden /> {tp('status.done')}
              </Chip>
            )}
          </div>
          <h2 id="recall-title" className="text-lg font-semibold">{tp('recallTitle')}</h2>
          <p className={`mt-1 text-sm ${MUTED}`}>{t('recall.intro', { n: block.minutes })}</p>
        </div>
        <div className="flex w-full flex-wrap gap-2 sm:w-auto">
          {/* One Done/Undo button that changes its label keeps keyboard focus; see BlockCard. */}
          {!done && (
            <Btn aria-disabled={timerRunning || undefined} onClick={() => !timerRunning && onStart(block, tp('recallTitle'))}>
              <Play size={16} aria-hidden /> {timerRunning ? t('block.running') : t('block.start')}
              <span className="sr-only">: {tp('recallTitle')}</span>
            </Btn>
          )}
          <Btn variant={done ? 'quiet' : 'primary'} onClick={() => onToggleDone(block)}>
            {done ? <Undo2 size={16} aria-hidden /> : <Check size={16} aria-hidden />} {done ? t('block.undo') : t('block.done')}
            <span className="sr-only">: {tp('recallTitle')}</span>
          </Btn>
        </div>
      </div>

      {recall && recall.subjects.length > 0 ? (
        <>
          <p className="mt-3 text-sm font-medium">{t('recall.total', { n: total })}</p>
          <ul className="mt-2 list-none space-y-2 p-0">
            {recall.subjects.map(row => {
              const info = subjectInfo(infos, row.subject);
              return (
                <li key={row.subject} className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-t border-[var(--color-border)] pt-2">
                  <div className="min-w-0">
                    <p className="break-words font-medium">{info.name}</p>
                    <p className={`text-sm ${MUTED}`}>
                      {t('recall.due', { n: row.due })}
                      {row.redTerms > 0 ? ` · ${t('recall.red', { n: row.redTerms })}` : ''}
                      {crowded ? ` · ${t('recall.suggested', { n: row.suggested })}` : ''}
                    </p>
                  </div>
                  <Link to={ROUTES.flashcards(row.subject)} className={LINK_CLASS}>
                    {t('recall.open')}
                    <span className="sr-only"> — {info.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          {crowded && <p className={`mt-2 text-xs ${MUTED}`}>{t('recall.crowded', { cards: recall.capacityCards, n: block.minutes })}</p>}
        </>
      ) : (
        <div className="mt-3">
          <p className="text-sm font-medium">{t('recall.none')}</p>
          <p className={`text-sm ${MUTED}`}>{t('recall.noneHint')}</p>
          {activeSubjects.length > 0 && (
            <ul className="mt-1 flex list-none flex-wrap gap-x-4 p-0">
              {activeSubjects.map(subject => (
                <li key={subject}>
                  <Link to={ROUTES.terms(subject)} className={LINK_CLASS}>
                    {subjectInfo(infos, subject).name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </section>
  );
}
