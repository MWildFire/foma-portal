import { Fragment, memo, useId, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CircleCheck, CircleMinus, CircleX, Eye, EyeOff, type LucideIcon } from 'lucide-react';
import type { Lang, Question, TopicMeta } from '../../contract/types';
import type { Rating } from '../../lib/storage';
import { ROUTES } from '../../config/routes';
import { pickText } from '../../lib/text';
import { dateOnly } from '../../lib/topic-progress';
import { RichText } from '../content/RichText';
import { FrenchText } from '../ui/FrenchText';
import '../content/ui.css';
import './fields.css';
import './practice.css';

const RATINGS: { rating: Rating; Icon: LucideIcon; tone: string }[] = [
  { rating: 'right', Icon: CircleCheck, tone: 'green' },
  { rating: 'partial', Icon: CircleMinus, tone: 'amber' },
  { rating: 'wrong', Icon: CircleX, tone: 'red' },
];

interface Props {
  question: Question;
  /** Position in its list, from 1. */
  index: number;
  lang: Lang;
  subject: string;
  topicIndex: ReadonlyMap<string, TopicMeta>;
  /** The last self-rating saved for this question, if any. */
  rating?: Rating;
  ratedAt?: string;
  onRate: (questionId: string, rating: Rating) => void;
}

// One practice question: prompt, marks and command term. The markscheme stays hidden until the button is pressed;
// then the student rates the answer (right, partly right, wrong) and the rating is saved on this device.
// Props are plain values, so a card is redrawn only when its own rating changes.
export const QuestionCard = memo(function QuestionCard({ question, index, lang, subject, topicIndex, rating, ratedAt, onRate }: Props) {
  const { t } = useTranslation(['practice', 'subject']);
  const [open, setOpen] = useState(false);
  const [savedNow, setSavedNow] = useState<Rating | null>(null);
  const titleId = useId();
  const panelId = useId();
  const rateId = useId();

  const hints = question.hints ?? [];
  const topics = question.topicIds.flatMap(id => {
    const topic = topicIndex.get(id);
    return topic ? [topic] : [];
  });
  const last = RATINGS.find(item => item.rating === rating);

  const rate = (next: Rating): void => {
    onRate(question.id, next);
    setSavedNow(next);
  };

  return (
    <article className="study-q" data-question-id={question.id} lang={lang} aria-labelledby={titleId}>
      <header>
        <h3 id={titleId} className="study-q__title">{t('q.label', { n: index })}</h3>
        <div className="study-q__chips">
          <span className="foma-chip">{t(`paperNames.${question.paper}`, { ns: 'subject' })}</span>
          {question.section ? <span className="foma-chip">{t('q.section', { name: question.section })}</span> : null}
          <span className="foma-chip" data-tone="blue">{t('q.command', { term: question.command })}</span>
          <span className="foma-chip">{t('q.marks', { n: question.marks })}</span>
          {question.minutes ? <span className="foma-chip">{t('q.minutes', { n: question.minutes })}</span> : null}
          {last && rating ? (
            <span className="foma-chip" data-tone={last.tone}>
              <last.Icon size={14} aria-hidden="true" />
              {t('q.last', { rating: t(`q.rating.${rating}`), date: ratedAt ? dateOnly(ratedAt) : '' })}
            </span>
          ) : null}
        </div>
      </header>

      {question.stimulus ? (
        <div className="study-q__stimulus">
          <p className="study-label">{t('q.stimulus')}</p>
          <FrenchText text={question.stimulus} rich className="study-rich" />
          <RichText className="study-rich" text={pickText(question.stimulus, lang)} />
        </div>
      ) : null}

      <FrenchText text={question.prompt} rich className="study-rich study-q__prompt" />
      <RichText className="study-rich study-q__prompt" text={pickText(question.prompt, lang)} />

      {hints.length > 0 ? (
        <details className="study-q__hints">
          <summary>{t('q.hints')}</summary>
          <ol className="my-1 list-decimal space-y-1 pl-6">
            {hints.map((hint, position) => (
              <li key={position}><RichText className="study-rich" text={pickText(hint, lang)} /></li>
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
        {open ? t('q.hide') : t('q.show')}
      </button>

      {open ? (
        <div id={panelId} className="study-q__answer">
          <div>
            <p className="study-label">{t('q.markscheme')}</p>
            <RichText className="study-rich" text={pickText(question.markscheme, lang)} />
          </div>
          {question.model ? (
            <div>
              <p className="study-label">{t('q.model')}</p>
              <FrenchText text={question.model} rich className="study-rich" />
              <RichText className="study-rich" text={pickText(question.model, lang)} />
            </div>
          ) : null}
          <div>
            <p id={rateId} className="study-label">{t('q.rate')}</p>
            <div role="group" aria-labelledby={rateId} className="foma-btn-row">
              {RATINGS.map(({ rating: value, Icon }) => (
                <button key={value} type="button" className="foma-btn" aria-pressed={rating === value} onClick={() => rate(value)}>
                  <Icon size={16} aria-hidden="true" />
                  {t(`q.rating.${value}`)}
                </button>
              ))}
            </div>
            <p role="status" className="study-status">
              {savedNow ? t('q.saved', { rating: t(`q.rating.${savedNow}`) }) : ''}
            </p>
          </div>
          {topics.length > 0 ? (
            <p className="study-q__revise">
              <span>{t('q.revise')}</span>{' '}
              {topics.map((topic, position) => (
                <Fragment key={topic.id}>
                  {position > 0 ? ', ' : null}
                  <Link to={ROUTES.topic(subject, topic.id)} className="foma-link">{pickText(topic.title, lang)}</Link>
                </Fragment>
              ))}
            </p>
          ) : null}
        </div>
      ) : null}
    </article>
  );
});
