import { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BookMarked, CircleCheck, CircleHelp, CircleX, type LucideIcon } from 'lucide-react';
import type { Lang, Term } from '../../contract/types';
import { ANSWERS, deckKeyAction, dueQueue, type Answer } from '../../lib/leitner';
import type { GlobalState } from '../../lib/storage';
import { pickText } from '../../lib/text';
import { InlineText } from '../content/RichText';
import { SourceItem } from '../content/SourceList';
import '../content/ui.css';
import '../practice/fields.css';
import './glossary.css';

const ICONS: Record<Answer, LucideIcon> = { knew: CircleCheck, unsure: CircleHelp, missed: CircleX };

interface Props {
  subject: string;
  terms: readonly Term[];
  progress: GlobalState['terms'];
  /** Today in Dubai, YYYY-MM-DD. */
  today: string;
  lang: Lang;
  /** The earliest day a card that is not due yet comes back. */
  nextDue: string | null;
  /** Saves the answer and returns the box and the day it was stored with. */
  onAnswer: (term: Term, answer: Answer) => { box: number; due: string };
  onShowGlossary: () => void;
}

// Targets that keep their own keyboard behaviour: Space on a button presses it, a number in a text box is text.
const INTERACTIVE = 'a, button, input, select, textarea, summary, [role="button"], [contenteditable="true"]';
const TEXT_FIELD = 'input, textarea, select, [contenteditable="true"]';

function matches(target: EventTarget | null, selector: string): boolean {
  return target instanceof Element && target.closest(selector) !== null;
}

// Flashcards: one due card at a time. The term is shown first; Space (or a tap) shows the definition; then
// 1, 2 or 3 (or a button) says how well the student knew it. Only cards due today or earlier are shown, and a
// card answered now leaves the queue until its next day.
export function FlashcardDeck({ subject, terms, progress, today, lang, nextDue, onAnswer, onShowGlossary }: Props) {
  const { t } = useTranslation('glossary');
  const [answered, setAnswered] = useState<string[]>([]);
  const [revealed, setRevealed] = useState(false);
  const [last, setLast] = useState<{ term: string; box: number; due: string } | null>(null);
  const revealButton = useRef<HTMLButtonElement>(null);
  const answersBox = useRef<HTMLDivElement>(null);
  const focusAnswers = useRef(false);
  const answeredIds = useRef(new Set<string>());
  const answerLabelId = useId();
  const progressId = useId();

  const queue = useMemo(() => {
    const gone = new Set(answered);
    return dueQueue(subject, terms, progress, today).filter(term => !gone.has(term.id));
  }, [subject, terms, progress, today, answered]);

  const current = queue[0];
  const total = answered.length + queue.length;

  // When the button that was pressed disappears, the focus would fall back to the top of the page. So if the button
  // had the focus, it goes to the answers (the box itself, not a button: a second Space must not answer).
  const reveal = useCallback((): void => {
    focusAnswers.current = document.activeElement !== null && document.activeElement === revealButton.current;
    setRevealed(true);
  }, []);

  const answer = useCallback((value: Answer): void => {
    if (!current || answeredIds.current.has(current.id)) return;
    answeredIds.current.add(current.id);
    const saved = onAnswer(current, value);
    setLast({ term: current.term.en, box: saved.box, due: saved.due });
    setAnswered(list => [...list, current.id]);
    setRevealed(false);
  }, [current, onAnswer]);

  // Keyboard: Space shows the definition, 1 / 2 / 3 answer. A held key does not repeat, and typing in a field or
  // pressing Space on a button is left to the browser.
  useEffect(() => {
    if (!current) return undefined;
    const onKeyDown = (event: KeyboardEvent): void => {
      const action = deckKeyAction(event, {
        revealed,
        onControl: matches(event.target, INTERACTIVE),
        onTextField: matches(event.target, TEXT_FIELD),
      });
      if (!action) return;
      event.preventDefault();
      if (action.type === 'reveal') reveal();
      else answer(action.answer);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [current, revealed, answer, reveal]);

  // The definition has appeared: move the focus to the answers if the reveal button had it (see reveal above).
  useEffect(() => {
    if (revealed && focusAnswers.current) answersBox.current?.focus({ preventScroll: true });
    focusAnswers.current = false;
  }, [revealed]);

  // After an answer the button that was pressed is gone. Put the focus on the next card, so a keyboard user can
  // go on with Space. Not on the first card: the page should open where it always does.
  const hasAnswered = useRef(false);
  hasAnswered.current = answered.length > 0;
  const currentId = current?.id;
  useEffect(() => {
    if (hasAnswered.current && currentId) revealButton.current?.focus({ preventScroll: true });
  }, [currentId]);

  if (!current) {
    return (
      <section className="gl-deck" aria-label={t('cards.heading')}>
        <div className="gl-card" role="status">
          <p className="gl-card__done"><CircleCheck size={20} aria-hidden="true" />{t('cards.doneTitle')}</p>
          <p className="study-muted">{t('cards.doneBody')}</p>
          {answered.length > 0 ? <p className="study-muted">{t('cards.answeredToday', { n: answered.length })}</p> : null}
          {nextDue ? <p className="study-muted">{t('cards.next', { date: nextDue })}</p> : null}
          <p className="mb-0 mt-3">
            <button type="button" className="foma-btn" onClick={onShowGlossary}>{t('cards.toGlossary')}</button>
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="gl-deck" aria-label={t('cards.heading')}>
      <div className="gl-deck__progress">
        <p id={progressId} className="gl-deck__count">{t('cards.progress', { n: answered.length + 1, total })}</p>
        <progress className="gl-deck__bar" max={total} value={answered.length} aria-labelledby={progressId} />
      </div>
      <p role="status" className="study-status gl-deck__saved">
        {last ? t('cards.saved', { term: last.term, box: last.box, date: last.due }) : ''}
      </p>

      <div className="gl-card">
        <p className="foma-kind"><BookMarked size={14} aria-hidden="true" />{t('cards.front')}</p>
        {/* Tapping the card shows the definition; the button below does the same for the keyboard. */}
        <div className={revealed ? undefined : 'gl-card__front'} onClick={revealed ? undefined : reveal}>
          <p className="gl-card__term" lang="en">{current.term.en}</p>
          {revealed ? null : (
            <button ref={revealButton} type="button" className="foma-btn foma-btn--primary gl-card__reveal" onClick={reveal}>
              {t('cards.reveal')}
            </button>
          )}
        </div>
        {revealed ? null : <p className="study-muted gl-card__hint">{t('cards.revealHint')}</p>}

        <div aria-live="polite">
          {revealed ? (
            <div className="gl-card__back">
              <p className="gl-entry__def" lang="en"><span className="foma-tag">EN</span> <InlineText text={current.def.en} /></p>
              <p className="gl-entry__def" lang="ru">
                <span className="foma-tag">RU</span>{' '}
                {current.term.ru.trim() ? <><strong>{current.term.ru.trim()}</strong>{' — '}</> : null}
                <InlineText text={current.def.ru} />
              </p>
              {current.example ? (
                <p className="gl-entry__extra" lang={lang}><strong>{t('entry.example')}:</strong> <InlineText text={pickText(current.example, lang)} /></p>
              ) : null}
              {current.pitfall ? (
                <p className="gl-entry__extra" lang={lang}><strong>{t('entry.pitfall')}:</strong> <InlineText text={pickText(current.pitfall, lang)} /></p>
              ) : null}
              <p className="gl-entry__extra">
                <strong>{t('entry.source')}:</strong> <SourceItem source={current.src} lang={lang} />
              </p>
            </div>
          ) : null}
        </div>

        {revealed ? (
          <div ref={answersBox} tabIndex={-1} className="gl-card__answers">
            <p id={answerLabelId} className="study-label">{t('cards.answerHeading')}</p>
            <div role="group" aria-labelledby={answerLabelId} className="foma-btn-row">
              {ANSWERS.map((value, index) => {
                const Icon = ICONS[value];
                return (
                  <button key={value} type="button" className="foma-btn" onClick={() => answer(value)}>
                    <Icon size={16} aria-hidden="true" />
                    <span className="gl-key" aria-hidden="true">{index + 1}</span>
                    {t(`cards.answer.${value}`)}
                  </button>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>

      <p className="study-muted gl-deck__help">{t('cards.keys')} {t('cards.how')}</p>
    </section>
  );
}
