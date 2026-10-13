import { useId, useState } from 'react';
import { CircleCheck, CircleHelp, CircleMinus, CircleX, Eye, EyeOff, type LucideIcon } from 'lucide-react';
import { useLocalProgress } from '../../hooks/useLocalProgress';
import { pickText } from '../../lib/text';
import { dateOnly, dubaiDate, questionKey } from '../../lib/topic-progress';
import type { Rating } from '../../lib/storage';
import { RichText } from '../content/RichText';
import { useBodyT, useTopicContext } from './context';
import { MdxWarning } from './MdxWarning';
import '../content/ui.css';

const RATINGS: { rating: Rating; Icon: LucideIcon; tone: string }[] = [
  { rating: 'right', Icon: CircleCheck, tone: 'green' },
  { rating: 'partial', Icon: CircleMinus, tone: 'amber' },
  { rating: 'wrong', Icon: CircleX, tone: 'red' },
];

// <Question id="q1"/>: the prompt, command term and marks. The markscheme stays hidden until the button is
// pressed; then the student rates the answer (right, partial, wrong) and the rating is saved on this device
// as questions["<subject>/<id>"] = { rating, at }.
export function Question({ id }: { id?: string }) {
  const ctx = useTopicContext();
  const { t, lang } = useBodyT();
  const [progress, update] = useLocalProgress();
  const [open, setOpen] = useState(false);
  const [savedNow, setSavedNow] = useState<Rating | null>(null);
  const panelId = useId();
  const rateId = useId();

  if (!ctx) return <MdxWarning>{t('warn.outside', { name: 'Question' })}</MdxWarning>;
  const question = id ? ctx.pack.questions.find(item => item.id === id) : undefined;
  if (!question) return <MdxWarning>{t('warn.question', { id: id || t('warn.noId') })}</MdxWarning>;

  const key = questionKey(ctx.subjectId, question.id);
  const last = progress.questions[key];
  const hints = question.hints ?? [];

  const rate = (rating: Rating): void => {
    update(state => ({ ...state, questions: { ...state.questions, [key]: { rating, at: dubaiDate() } } }));
    setSavedNow(rating);
  };

  return (
    <div role="group" className="foma-card foma-question" lang={lang} aria-label={t('question.label')}>
      <p className="foma-kind">
        <CircleHelp size={14} aria-hidden="true" />
        {t('question.label')}
      </p>
      <div className="foma-question__meta">
        <span className="foma-chip" data-tone="blue">{t('question.command', { term: question.command })}</span>
        <span className="foma-chip">{t('question.marks', { n: question.marks })}</span>
        {last ? (
          <span className="foma-chip" data-tone={RATINGS.find(item => item.rating === last.rating)?.tone}>
            {t('question.last', { rating: t(`question.rating.${last.rating}`), date: dateOnly(last.at) })}
          </span>
        ) : null}
      </div>

      {question.stimulus ? (
        <div className="foma-question__stimulus">
          <p className="foma-question__label">{t('question.stimulus')}</p>
          <RichText text={pickText(question.stimulus, lang)} />
        </div>
      ) : null}

      <RichText className="foma-question__prompt" text={pickText(question.prompt, lang)} />

      {hints.length > 0 ? (
        <details className="foma-question__hints">
          <summary>{t('question.hints')}</summary>
          <ol className="my-1 list-decimal space-y-1 pl-6">
            {hints.map((hint, index) => (
              <li key={index}><RichText text={pickText(hint, lang)} /></li>
            ))}
          </ol>
        </details>
      ) : null}

      <button
        type="button"
        className="foma-btn foma-btn--primary"
        aria-expanded={open}
        aria-controls={open ? panelId : undefined}
        onClick={() => setOpen(value => !value)}
      >
        {open ? <EyeOff size={16} aria-hidden="true" /> : <Eye size={16} aria-hidden="true" />}
        {open ? t('question.hide') : t('question.show')}
      </button>

      {open ? (
        <div id={panelId} className="foma-question__answer">
          <div>
            <p className="foma-question__label">{t('question.markscheme')}</p>
            <RichText text={pickText(question.markscheme, lang)} />
          </div>
          {question.model ? (
            <div>
              <p className="foma-question__label">{t('question.model')}</p>
              <RichText text={pickText(question.model, lang)} />
            </div>
          ) : null}
          <div>
            <p id={rateId} className="foma-question__label">{t('question.rate')}</p>
            <div role="group" aria-labelledby={rateId} className="foma-btn-row">
              {RATINGS.map(({ rating, Icon }) => {
                const selected = last?.rating === rating;
                return (
                  <button key={rating} type="button" className="foma-btn" aria-pressed={selected} onClick={() => rate(rating)}>
                    <Icon size={16} aria-hidden="true" />
                    {t(`question.rating.${rating}`)}
                  </button>
                );
              })}
            </div>
            <p role="status" className="mb-0 mt-2 min-h-[1.5rem] text-sm text-[var(--color-muted)]">
              {savedNow ? t('question.saved', { rating: t(`question.rating.${savedNow}`) }) : ''}
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
