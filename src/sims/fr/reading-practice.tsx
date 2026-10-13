import { useCallback, useEffect, useMemo, useState } from 'react';
import type { Lang } from '../../contract/types';
import {
  TIMED_LIMIT_MS,
  TRUE_FALSE,
  answerKind,
  checkAnswer,
  collectItems,
  collectPassages,
  formatTime,
  scoreOf,
  splitPrompt,
  timedSets,
  type ItemLike,
  type PassageLike,
} from './reading-logic';

// The reading passages (content/fr/reading/) and their items (content/fr/questions/reading-1.ts and reading-2.ts), read at
// build time. The logic is in reading-logic.ts. Practice works on one text; a timed run is one set of three texts in 45 minutes.
const PASSAGES = collectPassages(import.meta.glob<{ passage?: unknown }>('../../../content/fr/reading/*.ts', { eager: true }));
const ITEMS = collectItems(import.meta.glob<{ questions?: unknown }>('../../../content/fr/questions/reading-[0-9]*.ts', { eager: true }));
const ITEM_BY_ID = new Map(ITEMS.map((item): [string, ItemLike] => [item.id, item]));
const SETS = timedSets(PASSAGES);
const LETTERS = ['A', 'B', 'C', 'D', 'E'];
// The theme codes of the passages (T1 to T5) and their labels.
const THEMES: Record<Lang, Record<string, string>> = {
  en: {
    T1: 'Theme 1: Identities', T2: 'Theme 2: Experiences', T3: 'Theme 3: Human ingenuity',
    T4: 'Theme 4: Social organization', T5: 'Theme 5: Sharing the planet',
  },
  ru: {
    T1: 'Тема 1: Идентичность (Identities)', T2: 'Тема 2: Опыт и впечатления (Experiences)',
    T3: 'Тема 3: Человеческая изобретательность (Human ingenuity)',
    T4: 'Тема 4: Общественная организация (Social organization)', T5: 'Тема 5: Общая планета (Sharing the planet)',
  },
};

const itemsOf = (passage: PassageLike): ItemLike[] => passage.questionIds.flatMap(id => ITEM_BY_ID.get(id) ?? []);
const shortCode = (passage: PassageLike): string => passage.id.slice(0, 2).toUpperCase();

const COPY = {
  en: {
    title: 'Reading practice (Paper 2)',
    intro: 'Read the text, then answer its ten items. The paragraphs are lettered A to E. In the French answers accents and capitals are not checked. Check when you are ready; the markscheme follows.',
    practice: 'Practice: one text',
    timed: 'Timed run: three texts, 45 minutes',
    set: 'Set',
    text: 'Text',
    start: 'Start the timer',
    left: 'Time left',
    over: 'Time is up. Your answers are marked.',
    check: 'Check (Vérifier)',
    clear: 'Clear answers and start again',
    pick: 'choose',
    answer: 'Answer:',
    right: 'Correct.',
    wrong: 'Not quite.',
    markscheme: 'Markscheme:',
    score: (right: number, total: number) => `Score: ${right} of ${total}`,
  },
  ru: {
    title: 'Тренировка чтения (Paper 2)',
    intro: 'Прочитайте текст, затем ответьте на его десять заданий. Абзацы обозначены буквами от A до E. Во французских ответах акценты и заглавные буквы не проверяются. Проверяйте, когда будете готовы: потом появятся критерии (markscheme).',
    practice: 'Тренировка: один текст',
    timed: 'На время: три текста, 45 минут',
    set: 'Набор',
    text: 'Текст',
    start: 'Запустить таймер',
    left: 'Осталось',
    over: 'Время вышло. Ответы проверены.',
    check: 'Проверить (Vérifier)',
    clear: 'Очистить ответы и начать заново',
    pick: 'выберите',
    answer: 'Ответ:',
    right: 'Верно.',
    wrong: 'Неверно.',
    markscheme: 'Критерии оценивания:',
    score: (right: number, total: number) => `Результат: ${right} из ${total}`,
  },
};

const button = {
  border: '1px solid currentColor',
  borderRadius: 6,
  padding: '4px 12px',
  background: 'transparent',
  color: 'inherit',
  font: 'inherit',
  cursor: 'pointer',
} as const;

const toggle = (pressed: boolean) => ({ ...button, borderWidth: pressed ? 2 : 1, fontWeight: pressed ? 700 : 400 });

const input = {
  font: 'inherit',
  padding: '4px 8px',
  minWidth: 0,
  border: '1px solid currentColor',
  borderRadius: 6,
  background: 'transparent',
  color: 'inherit',
} as const;

export default function ReadingPractice({ lang }: { lang: Lang }) {
  const copy = COPY[lang];
  const [mode, setMode] = useState<'practice' | 'timed'>('practice');
  const [setIndex, setSetIndex] = useState(0);
  const [passageId, setPassageId] = useState(PASSAGES[0]?.id ?? '');
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [timer, setTimer] = useState<{ start: number; end?: number } | null>(null);
  const [now, setNow] = useState(() => Date.now());

  // The texts on the selector, the texts that are marked together, and the text on screen (falls back to the first one).
  const tabs = mode === 'practice' ? PASSAGES : (SETS[setIndex] ?? []);
  const passage = tabs.find(p => p.id === passageId) ?? tabs[0];
  const scope = useMemo<PassageLike[]>(() => (mode === 'practice' ? (passage ? [passage] : []) : tabs), [mode, passage, tabs]);
  const scopeItems = scope.flatMap(itemsOf);
  const shown = passage ? itemsOf(passage) : [];
  const marked = passage !== undefined && checked[passage.id] === true;
  const score = scoreOf(scopeItems, answers);
  const remaining = timer ? TIMED_LIMIT_MS - ((timer.end ?? now) - timer.start) : TIMED_LIMIT_MS;
  const canStart = timer === null && !scope.some(p => checked[p.id] === true);

  const markScope = useCallback((): void => {
    setChecked(prev => ({ ...prev, ...Object.fromEntries(scope.map(p => [p.id, true])) }));
    setTimer(prev => (prev && !prev.end ? { ...prev, end: Date.now() } : prev));
  }, [scope]);

  // The countdown ticks twice a second; when the time is up the set is marked once, as if Check had been pressed.
  useEffect(() => {
    if (!timer || timer.end) return;
    const id = window.setInterval(() => setNow(Date.now()), 500);
    return () => window.clearInterval(id);
  }, [timer]);

  useEffect(() => {
    if (timer && !timer.end && now - timer.start >= TIMED_LIMIT_MS) markScope();
  }, [now, timer, markScope]);

  const chooseMode = (next: 'practice' | 'timed'): void => {
    setMode(next);
    setAnswers({});
    setChecked({});
    setTimer(null);
  };

  const chooseSet = (index: number): void => {
    setSetIndex(index);
    setPassageId(SETS[index]?.[0]?.id ?? passageId);
    setAnswers({});
    setChecked({});
    setTimer(null);
  };

  const startTimer = (): void => {
    if (!canStart) return;
    const start = Date.now();
    setNow(start);
    setTimer({ start });
  };

  const setAnswer = (id: string, value: string): void => setAnswers(prev => ({ ...prev, [id]: value }));

  const clearScope = (): void => {
    const ids = new Set(scopeItems.map(item => item.id));
    const passageIds = new Set(scope.map(p => p.id));
    setAnswers(prev => Object.fromEntries(Object.entries(prev).filter(([id]) => !ids.has(id))));
    setChecked(prev => Object.fromEntries(Object.entries(prev).filter(([id]) => !passageIds.has(id))));
    setTimer(null);
  };

  return (
    <div style={{ display: 'grid', gap: 14 }}>
      <p style={{ margin: 0 }}>
        <strong>{copy.title}</strong>
        <br />
        {copy.intro}
      </p>
      <div role="group" aria-label={copy.title} style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        <button type="button" aria-pressed={mode === 'practice'} onClick={() => chooseMode('practice')} style={toggle(mode === 'practice')}>
          {copy.practice}
        </button>
        <button type="button" aria-pressed={mode === 'timed'} onClick={() => chooseMode('timed')} style={toggle(mode === 'timed')}>
          {copy.timed}
        </button>
      </div>
      {mode === 'timed' ? (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' }}>
          {SETS.map((set, index) => (
            <button key={index} type="button" aria-pressed={setIndex === index} onClick={() => chooseSet(index)} style={toggle(setIndex === index)}>
              {copy.set} {index + 1}: {set.map(shortCode).join(', ')}
            </button>
          ))}
          <span>
            {copy.left}: <strong>{formatTime(remaining)}</strong>
          </span>
          {canStart ? (
            <button type="button" onClick={startTimer} style={button}>{copy.start}</button>
          ) : null}
          {timer && remaining <= 0 ? <span>{copy.over}</span> : null}
        </div>
      ) : null}
      <select aria-label={copy.text} value={passage?.id ?? ''} onChange={e => setPassageId(e.target.value)} style={input}>
        {tabs.map(p => (
          <option key={p.id} value={p.id}>{shortCode(p)} · {p.title[lang]}</option>
        ))}
      </select>
      {passage ? (
        <article style={{ display: 'grid', gap: 8, lineHeight: 1.6 }}>
          <h3 style={{ margin: 0 }}>{passage.title[lang]}</h3>
          <small>{THEMES[lang][passage.theme] ?? passage.theme} · {passage.level}</small>
          <div lang="fr" style={{ display: 'grid', gap: 8 }}>
            {passage.paragraphs.map((text, index) => (
              <p key={index} style={{ margin: 0 }}>
                <strong>{LETTERS[index]}</strong> {text}
              </p>
            ))}
          </div>
        </article>
      ) : null}
      <ol style={{ display: 'grid', gap: 14, margin: 0, paddingLeft: 24 }}>
        {shown.map(item => {
          const { stem, options } = splitPrompt(item.prompt[lang]);
          const kind = answerKind(item);
          const value = answers[item.id] ?? '';
          const ok = marked && checkAnswer(item, value);
          return (
            <li key={item.id} style={{ display: 'grid', gap: 6 }}>
              <span>{stem}</span>
              {kind === 'letter' && options.length > 0 ? (
                <div role="radiogroup" aria-label={stem} style={{ display: 'grid', gap: 4 }}>
                  {options.map(option => (
                    <label key={option.letter} style={{ display: 'flex', gap: 6 }}>
                      <input
                        type="radio"
                        name={item.id}
                        value={option.letter}
                        checked={value === option.letter}
                        disabled={marked}
                        onChange={() => setAnswer(item.id, option.letter)}
                      />
                      {option.letter}) {option.label}
                    </label>
                  ))}
                </div>
              ) : kind === 'truefalse' || kind === 'letter' ? (
                <select
                  aria-label={stem}
                  value={value}
                  disabled={marked}
                  onChange={e => setAnswer(item.id, e.target.value)}
                  style={{ ...input, flex: '0 1 auto' }}
                >
                  <option value="">— {copy.pick} —</option>
                  {(kind === 'truefalse' ? TRUE_FALSE : LETTERS).map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              ) : (
                <input
                  type="text"
                  aria-label={stem}
                  value={value}
                  readOnly={marked}
                  onChange={e => setAnswer(item.id, e.target.value)}
                  autoComplete="off"
                  autoCapitalize="none"
                  spellCheck={false}
                  style={input}
                />
              )}
              {marked ? (
                <div role="status" style={{ display: 'grid', gap: 2, color: ok ? '#1a7f37' : '#b42318' }}>
                  <span>{ok ? copy.right : copy.wrong} {copy.answer} <strong>{item.answer}</strong></span>
                  <span>{copy.markscheme} {item.markscheme[lang]}</span>
                </div>
              ) : null}
            </li>
          );
        })}
      </ol>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center' }}>
        <button
          type="button"
          onClick={markScope}
          disabled={marked || scopeItems.every(entry => (answers[entry.id] ?? '').trim() === '')}
          style={{ ...button, opacity: marked ? 0.4 : 1 }}
        >
          {copy.check}
        </button>
        <button type="button" onClick={clearScope} style={button}>{copy.clear}</button>
        {marked ? <strong>{copy.score(score.right, score.total)}</strong> : null}
      </div>
    </div>
  );
}
