import { useRef, useState, type FormEvent } from 'react';
import type { Lang } from '../../contract/types';
import {
  MOODS,
  collectDrills,
  filterDrills,
  fullForm,
  hintText,
  isCorrect,
  moodLabel,
  tenseLabel,
  tensesFor,
  type DrillFilter,
  type DrillLike,
  type Mood,
} from './conjugation-logic';
import { shuffle } from './shuffle';

// The drill files of the grammar topic (conjugation.ts and conjugation-mood.ts), read at build time. The logic is in
// conjugation-logic.ts. The student types one form at a time; a mistake shows the form and the hint.
const DRILLS = collectDrills(import.meta.glob<{ drills?: unknown }>('../../../content/fr/grammar/conjugation*.ts', { eager: true }));

const COPY = {
  en: {
    title: 'Conjugation trainer',
    intro: 'Type the verb form. A subject pronoun before it is allowed, except in the imperative, which has none.',
    mood: 'Mood',
    tense: 'Tense',
    allMoods: 'All moods',
    allTenses: 'All tenses',
    verb: 'Verb',
    person: 'Person',
    form: 'Tense or mood',
    answer: 'Your answer',
    check: 'Check (Vérifier)',
    next: 'Next (Suivant)',
    right: 'Correct:',
    wrong: 'Not quite. The form is:',
    hint: 'Hint:',
    score: (right: number, asked: number) => `Right so far: ${right} of ${asked}`,
    empty: 'No forms match this filter.',
  },
  ru: {
    title: 'Тренажёр спряжения',
    intro: 'Введите форму глагола. Местоимение перед ней можно написать, кроме повелительного наклонения, где его нет.',
    mood: 'Наклонение',
    tense: 'Время',
    allMoods: 'Все наклонения',
    allTenses: 'Все времена',
    verb: 'Глагол',
    person: 'Лицо',
    form: 'Время или наклонение',
    answer: 'Ваш ответ',
    check: 'Проверить (Vérifier)',
    next: 'Дальше (Suivant)',
    right: 'Верно:',
    wrong: 'Неверно. Правильно:',
    hint: 'Подсказка:',
    score: (right: number, asked: number) => `Верно: ${right} из ${asked}`,
    empty: 'Нет форм для этого фильтра.',
  },
};

const button = {
  border: '1px solid currentColor',
  borderRadius: 6,
  padding: '4px 12px',
  background: 'transparent',
  color: 'inherit',
  cursor: 'pointer',
} as const;

const input = {
  flex: '1 1 180px',
  minWidth: 0,
  font: 'inherit',
  padding: '4px 8px',
  border: '1px solid currentColor',
  borderRadius: 6,
  background: 'transparent',
  color: 'inherit',
} as const;

const field = { display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', minWidth: 0, maxWidth: '100%', gap: 4 } as const;

export default function ConjugationTrainer({ lang }: { lang: Lang }) {
  const copy = COPY[lang];
  const [filter, setFilter] = useState<DrillFilter>({ mood: 'all', tense: 'all' });
  const [queue, setQueue] = useState<DrillLike[]>(() => shuffle(filterDrills(DRILLS, { mood: 'all', tense: 'all' })));
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [verdict, setVerdict] = useState<'idle' | 'right' | 'wrong'>('idle');
  const [score, setScore] = useState({ right: 0, asked: 0 });
  const inputRef = useRef<HTMLInputElement>(null);

  const drill = queue[index] as DrillLike | undefined;
  const tenses = tensesFor(DRILLS, filter.mood);

  const applyFilter = (next: DrillFilter): void => {
    setFilter(next);
    setQueue(shuffle(filterDrills(DRILLS, next)));
    setIndex(0);
    setText('');
    setVerdict('idle');
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (!drill) return;
    if (verdict === 'idle') {
      if (text.trim() === '') return;
      const ok = isCorrect(drill, text);
      setVerdict(ok ? 'right' : 'wrong');
      setScore(s => ({ right: s.right + (ok ? 1 : 0), asked: s.asked + 1 }));
      return;
    }
    // The next form. When the list is used up, the same forms come again in a new order.
    if (index + 1 < queue.length) {
      setIndex(index + 1);
    } else {
      setQueue(shuffle(filterDrills(DRILLS, filter)));
      setIndex(0);
    }
    setText('');
    setVerdict('idle');
    // Next turns disabled once the input is blank, so focus moves to the input first.
    inputRef.current?.focus();
  };

  const hint = drill && verdict === 'wrong' ? hintText(drill, lang) : undefined;
  const checkDisabled = verdict === 'idle' && text.trim() === '';

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: 12 }}>
      <p style={{ margin: 0 }}>
        <strong>{copy.title}</strong>
        <br />
        {copy.intro}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
        <label style={field}>
          {copy.mood}
          <select style={{ minWidth: 0, maxWidth: '100%' }} value={filter.mood} onChange={e => applyFilter({ mood: e.target.value as Mood | 'all', tense: 'all' })}>
            <option value="all">{copy.allMoods}</option>
            {MOODS.map(mood => (
              <option key={mood} value={mood}>{moodLabel(mood, lang)}</option>
            ))}
          </select>
        </label>
        <label style={field}>
          {copy.tense}
          <select style={{ minWidth: 0, maxWidth: '100%' }} value={filter.tense} onChange={e => applyFilter({ mood: filter.mood, tense: e.target.value })}>
            <option value="all">{copy.allTenses}</option>
            {tenses.map(tense => (
              <option key={tense} value={tense}>{tenseLabel(tense, lang)}</option>
            ))}
          </select>
        </label>
      </div>
      {drill ? (
        <form onSubmit={onSubmit} style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: 10 }}>
          <p style={{ margin: 0 }}>
            {copy.verb}: <strong lang="fr">{drill.verb}</strong> · {copy.person}: <strong lang="fr">{drill.pronoun}</strong>
            <br />
            {copy.form}: {tenseLabel(drill.tense, lang)}
          </p>
          <div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              <input
                type="text"
                ref={inputRef}
                value={text}
                onChange={e => setText(e.target.value)}
                readOnly={verdict !== 'idle'}
                aria-label={copy.answer}
                autoComplete="off"
                autoCapitalize="none"
                spellCheck={false}
                style={input}
              />
              <button
                type="submit"
                disabled={checkDisabled}
                style={{ ...button, opacity: checkDisabled ? 0.4 : 1, cursor: checkDisabled ? 'default' : 'pointer' }}
              >
                {verdict === 'idle' ? copy.check : copy.next}
              </button>
            </div>
            {/* Always mounted: a live region must exist before its text is written in. */}
            <div role="status" style={{ display: 'grid', gap: 4, marginTop: verdict === 'idle' ? 0 : 10 }}>
              {verdict === 'idle' ? null : (
                <>
                  <span>
                    {verdict === 'right' ? copy.right : copy.wrong} <strong lang="fr">{fullForm(drill)}</strong>
                  </span>
                  {hint ? <span>{copy.hint} {hint}</span> : null}
                </>
              )}
            </div>
          </div>
        </form>
      ) : (
        <p style={{ margin: 0 }}>{copy.empty}</p>
      )}
      <p style={{ margin: 0 }}>{copy.score(score.right, score.asked)}</p>
    </div>
  );
}
