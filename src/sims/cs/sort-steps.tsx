import { type FormEvent, useEffect, useId, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play, RotateCcw } from 'lucide-react';
import type { L, Lang } from '../../contract/types';

// ---- logic (pure, no JSX; checked outside the browser) ----
type Algo = 'bubble' | 'insertion' | 'selection';
type Problem = 'empty' | 'format' | 'count';

// One step of a run. `array` is the state after the step; in insertion sort a null cell is the slot of the key
// taken out of the array (`held` is its value). `sorted` = indices already in the sorted part; `line` = pseudo-code line.
// `swaps`: bubble and selection count exchanges; insertion counts each shift and each placement that moves the key.
interface Step { array: (number | null)[]; held: number | null; active: number[]; sorted: number[]; line: number; comparisons: number; swaps: number; msg: L }

const MAX_ITEMS = 10;
const range = (from: number, to: number): number[] => Array.from({ length: Math.max(0, to - from + 1) }, (_, k) => from + k);
const show = (xs: (number | null)[]): string => `[${xs.map(x => (x === null ? '_' : x)).join(', ')}]`;

const PSEUDO: Record<Algo, string[]> = {
  bubble: ['procedure bubbleSort(A)', '  for i ← 0 to n − 2', '    for j ← 0 to n − i − 2', '      if A[j] > A[j + 1] then', '        swap A[j] and A[j + 1]', '  return A'],
  insertion: ['procedure insertionSort(A)', '  for i ← 1 to n − 1', '    key ← A[i]', '    j ← i − 1', '    while j ≥ 0 and A[j] > key', '      A[j + 1] ← A[j]', '      j ← j − 1', '    A[j + 1] ← key', '  return A'],
  selection: ['procedure selectionSort(A)', '  for i ← 0 to n − 2', '    min ← i', '    for j ← i + 1 to n − 1', '      if A[j] < A[min] then', '        min ← j', '    if min ≠ i then', '      swap A[i] and A[min]', '  return A'],
};

function traceBubble(input: number[]): Step[] {
  const a = [...input];
  const n = a.length;
  const steps: Step[] = [];
  let comparisons = 0;
  let swaps = 0;
  const snap = (active: number[], line: number, sorted: number[], msg: L) => steps.push({ array: [...a], held: null, active, sorted, line, comparisons, swaps, msg });
  snap([], 1, [], { en: `Start: ${show(a)}.`, ru: `Начало: ${show(a)}.` });
  for (let i = 0; i < n - 1; i++) {
    const sorted = range(n - i, n - 1);
    snap([], 2, sorted, { en: `Pass ${i + 1}: the largest unsorted value moves to position ${n - i - 1}.`, ru: `Проход ${i + 1}: наибольшее неотсортированное значение идёт на позицию ${n - i - 1}.` });
    for (let j = 0; j < n - i - 1; j++) {
      comparisons++;
      const gt = a[j] > a[j + 1];
      snap([j, j + 1], 4, sorted, { en: `Compare ${a[j]} and ${a[j + 1]}: is ${a[j]} > ${a[j + 1]}? ${gt ? 'Yes.' : 'No.'}`, ru: `Сравниваем ${a[j]} и ${a[j + 1]}: ${a[j]} > ${a[j + 1]}? ${gt ? 'Да.' : 'Нет.'}` });
      if (gt) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
        swaps++;
        snap([j, j + 1], 5, sorted, { en: `Swap them: ${show(a)}.`, ru: `Меняем местами: ${show(a)}.` });
      }
    }
  }
  snap([], 6, range(0, n - 1), { en: `Sorted: ${show(a)}. Comparisons: ${comparisons}. Swaps: ${swaps}.`, ru: `Отсортировано: ${show(a)}. Сравнений: ${comparisons}. Обменов: ${swaps}.` });
  return steps;
}

function traceInsertion(input: number[]): Step[] {
  const a: (number | null)[] = [...input];
  const n = a.length;
  const steps: Step[] = [];
  let comparisons = 0;
  let moves = 0;
  let held: number | null = null;
  const snap = (active: number[], line: number, sorted: number[], msg: L) => steps.push({ array: [...a], held, active, sorted, line, comparisons, swaps: moves, msg });
  snap([], 1, [0], { en: `Start: ${show(a)}. Position 0 is sorted.`, ru: `Начало: ${show(a)}. Позиция 0 уже отсортирована.` });
  for (let i = 1; i < n; i++) {
    const key = a[i] as number;
    const sorted = range(0, i - 1);
    a[i] = null;
    held = key;
    snap([i], 3, sorted, { en: `Key = ${key} from position ${i}. Positions 0 to ${i - 1} are sorted.`, ru: `Ключ = ${key} с позиции ${i}. Позиции с 0 по ${i - 1} отсортированы.` });
    let gap = i;
    let j = i - 1;
    while (j >= 0) {
      comparisons++;
      const v = a[j] as number;
      const gt = v > key;
      snap([j], 5, sorted, { en: `Is ${v} > ${key}? ${gt ? 'Yes: shift it right.' : 'No: the key stops here.'}`, ru: `${v} > ${key}? ${gt ? 'Да: сдвигаем вправо.' : 'Нет: ключ встаёт здесь.'}` });
      if (!gt) break;
      a[gap] = v;
      a[j] = null;
      gap = j;
      moves++;
      snap([j + 1], 6, sorted, { en: `Shift ${v} right, to position ${j + 1}.`, ru: `Сдвигаем ${v} вправо, на позицию ${j + 1}.` });
      j--;
    }
    a[gap] = key;
    held = null;
    if (gap !== i) moves++;
    const msg: L = gap === i ? { en: `${key} is already in place.`, ru: `${key} уже на месте.` }
      : j < 0 ? { en: `No values to the left: put ${key} at position 0.`, ru: `Слева значений нет: ставим ${key} на позицию 0.` } : { en: `Put ${key} at position ${gap}.`, ru: `Ставим ${key} на позицию ${gap}.` };
    snap([gap], 8, range(0, i), msg);
  }
  snap([], 9, range(0, n - 1), { en: `Sorted: ${show(a)}. Comparisons: ${comparisons}. Swaps or moves: ${moves}.`, ru: `Отсортировано: ${show(a)}. Сравнений: ${comparisons}. Обменов или сдвигов: ${moves}.` });
  return steps;
}

function traceSelection(input: number[]): Step[] {
  const a = [...input];
  const n = a.length;
  const steps: Step[] = [];
  let comparisons = 0;
  let swaps = 0;
  const snap = (active: number[], line: number, sorted: number[], msg: L) => steps.push({ array: [...a], held: null, active, sorted, line, comparisons, swaps, msg });
  snap([], 1, [], { en: `Start: ${show(a)}.`, ru: `Начало: ${show(a)}.` });
  for (let i = 0; i < n - 1; i++) {
    const sorted = range(0, i - 1);
    let min = i;
    snap([i], 2, sorted, { en: `Pass ${i + 1}: find the smallest value in positions ${i} to ${n - 1}.`, ru: `Проход ${i + 1}: ищем наименьшее значение на позициях с ${i} по ${n - 1}.` });
    snap([min], 3, sorted, { en: `Assume the minimum is ${a[min]} at position ${min}.`, ru: `Пусть минимум — ${a[min]} на позиции ${min}.` });
    for (let j = i + 1; j < n; j++) {
      comparisons++;
      const less = a[j] < a[min];
      snap([j, min], 5, sorted, { en: `Is ${a[j]} < ${a[min]}? ${less ? 'Yes.' : 'No.'}`, ru: `${a[j]} < ${a[min]}? ${less ? 'Да.' : 'Нет.'}` });
      if (less) {
        min = j;
        snap([min], 6, sorted, { en: `New minimum: ${a[min]} at position ${min}.`, ru: `Новый минимум: ${a[min]} на позиции ${min}.` });
      }
    }
    if (min === i) {
      snap([i], 7, range(0, i), { en: `Minimum ${a[i]} is already at position ${i}: no swap.`, ru: `Минимум ${a[i]} уже на позиции ${i}: обмен не нужен.` });
    } else {
      snap([i, min], 7, sorted, { en: `Minimum ${a[min]} is at position ${min}: swap it with position ${i}.`, ru: `Минимум ${a[min]} на позиции ${min}: меняем его с позицией ${i}.` });
      [a[i], a[min]] = [a[min], a[i]];
      swaps++;
      snap([i, min], 8, range(0, i), { en: `Swapped: ${show(a)}.`, ru: `Обмен: ${show(a)}.` });
    }
  }
  snap([], 9, range(0, n - 1), { en: `Sorted: ${show(a)}. Comparisons: ${comparisons}. Swaps: ${swaps}.`, ru: `Отсортировано: ${show(a)}. Сравнений: ${comparisons}. Обменов: ${swaps}.` });
  return steps;
}

const TRACE: Record<Algo, (input: number[]) => Step[]> = { bubble: traceBubble, insertion: traceInsertion, selection: traceSelection };

type Parsed = { ok: true; values: number[] } | { ok: false; problem: Problem };
function parseList(text: string): Parsed {
  const parts = text.split(',').map(s => s.trim()).filter(s => s !== '');
  if (parts.length === 0) return { ok: false, problem: 'empty' };
  if (!parts.every(s => /^\d{1,2}$/.test(s))) return { ok: false, problem: 'format' };
  if (parts.length > MAX_ITEMS) return { ok: false, problem: 'count' };
  return { ok: true, values: parts.map(Number) };
}
// ---- end logic ----

const ALGO_NAME: Record<Algo, L> = {
  bubble: { en: 'Bubble sort', ru: 'Пузырьковая сортировка' },
  insertion: { en: 'Insertion sort', ru: 'Сортировка вставками' },
  selection: { en: 'Selection sort', ru: 'Сортировка выбором' },
};
const PROBLEM: Record<Problem, L> = {
  empty: { en: 'Enter at least one number.', ru: 'Введите хотя бы одно число.' },
  format: { en: 'Use whole numbers from 0 to 99, separated by commas.', ru: 'Используйте целые числа от 0 до 99, через запятую.' },
  count: { en: `Use at most ${MAX_ITEMS} numbers.`, ru: `Используйте не больше ${MAX_ITEMS} чисел.` },
};
const DEFAULT_VALUES = [5, 2, 8, 1, 9, 3];
const FIELD = 'min-w-0 flex-1 rounded-md border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 font-mono text-[var(--color-fg)]';

function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);
  return reduced;
}

export default function SortSteps(p: { lang: Lang }) {
  const lang = p.lang;
  const t =(en: string, ru: string) => (lang === 'ru' ? ru : en);
  const pick = (text: L) => text[lang];
  const uid = useId();
  const reduced = useReducedMotion();
  const [draft, setDraft] = useState(DEFAULT_VALUES.join(', '));
  const [values, setValues] = useState(DEFAULT_VALUES);
  const [problem, setProblem] = useState<Problem | null>(null);
  const [algo, setAlgo] = useState<Algo>('bubble');
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);

  const steps = useMemo(() => TRACE[algo](values), [algo, values]);
  const last = steps.length - 1;
  const current = Math.min(index, last);
  const step = steps[current];
  const autoPlay = playing && !reduced;
  const maxValue = Math.max(1, ...values);

  useEffect(() => {
    if (!autoPlay) return;
    if (current >= last) {
      setPlaying(false);
      return;
    }
    const timer = window.setTimeout(() => setIndex(i => Math.min(i + 1, last)), 900);
    return () => window.clearTimeout(timer);
  }, [autoPlay, current, last]);

  const go = (to: number) => {
    setPlaying(false);
    setIndex(Math.max(0, Math.min(last, to)));
  };
  const apply = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const parsed = parseList(draft);
    if (!parsed.ok) return setProblem(parsed.problem);
    setProblem(null);
    setValues(parsed.values);
    go(0);
  };
  const togglePlay = () => {
    if (autoPlay) return setPlaying(false);
    if (current === last) setIndex(0);
    setPlaying(true);
  };

  const inputId = `${uid}-values`;
  const errorId = `${uid}-error`;
  const legend: [string, string][] = [
    ['var(--color-accent)', t('Compared', 'Сравниваем')],
    ['var(--color-fg)', t('Sorted part', 'Отсортированная часть')],
    ['var(--color-muted)', t('Not yet sorted', 'Ещё не отсортировано')],
  ];
  const counters: [string, number][] = [[t('Comparisons', 'Сравнения'), step.comparisons], [t('Swaps / moves', 'Обмены / сдвиги'), step.swaps]];

  return (
    <div className="space-y-4">
      <div role="group" aria-label={t('Algorithm', 'Алгоритм')} className="foma-btn-row">
        {(Object.keys(ALGO_NAME) as Algo[]).map(id => (
          <button key={id} type="button" className="foma-btn" aria-pressed={algo === id} onClick={() => { setAlgo(id); go(0); }}>{pick(ALGO_NAME[id])}</button>
        ))}
      </div>

      <form onSubmit={apply} className="space-y-2">
        <label htmlFor={inputId} className="block text-sm font-medium">
          {t(`Numbers, separated by commas (up to ${MAX_ITEMS}, whole numbers 0 to 99)`, `Числа через запятую (до ${MAX_ITEMS}, целые от 0 до 99)`)}
        </label>
        <div className="flex flex-wrap gap-2">
          <input id={inputId} value={draft} onChange={e => setDraft(e.target.value)} aria-invalid={problem !== null} aria-describedby={problem ? errorId : undefined} className={FIELD} />
          <button type="submit" className="foma-btn">{t('Apply', 'Применить')}</button>
        </div>
        {problem && <p id={errorId} role="alert" className="m-0 font-medium">{pick(PROBLEM[problem])}</p>}
      </form>

      <ol aria-label={t('Pseudo-code', 'Псевдокод')} className="m-0 list-none overflow-x-auto rounded-md border border-[var(--color-border)] p-2 font-mono text-sm">
        {PSEUDO[algo].map((code, k) => (
          <li key={k} aria-current={step.line === k + 1 ? 'step' : undefined} className={`whitespace-pre rounded px-1 ${step.line === k + 1 ? 'bg-[var(--color-accent)] text-[var(--color-card)]' : ''}`}><span aria-hidden="true" className="mr-2 inline-block w-4 text-right opacity-70">{k + 1}</span>{code}</li>
        ))}
      </ol>

      <div role="img" aria-label={`${t('Array', 'Массив')}: ${show(step.array)}`} className="flex h-44 items-end gap-1.5">
        {step.array.map((cell, k) => {
          const shown = cell ?? step.held ?? 0;
          const hole = cell === null;
          const isActive = step.active.includes(k);
          const fill = isActive ? 'var(--color-accent)' : step.sorted.includes(k) ? 'var(--color-fg)' : 'var(--color-muted)';
          return (
            <div key={k} aria-hidden="true" className="flex h-full min-w-0 flex-1 flex-col items-center justify-end">
              <span className={`mb-0.5 font-mono text-xs leading-none ${hole ? 'text-[var(--color-accent)]' : 'text-[var(--color-fg)]'}`}>{shown}</span>
              <div className="w-full rounded-t motion-safe:transition-[height] motion-safe:duration-300" style={{ height: `calc((100% - 2.5rem) * ${shown / maxValue})`, background: hole ? 'transparent' : fill, border: hole ? '2px dashed var(--color-accent)' : 'none' }} />
              <span className={`mt-0.5 font-mono text-xs leading-none ${isActive ? 'font-bold' : ''}`}>{k}</span>
            </div>
          );
        })}
      </div>
      <ul className="m-0 flex list-none flex-wrap gap-x-4 gap-y-1 p-0 text-xs text-[var(--color-muted)]">
        {legend.map(([bg, label]) => (
          <li key={label} className="flex items-center gap-1.5"><span aria-hidden="true" className="inline-block h-3 w-3 rounded-sm" style={{ background: bg }} />{label}</li>
        ))}
        {algo === 'insertion' && (
          <li className="flex items-center gap-1.5"><span aria-hidden="true" className="inline-block h-3 w-3 rounded-sm border-2 border-dashed border-[var(--color-accent)]" />{t('Key taken out', 'Ключ вынут')}</li>
        )}
      </ul>

      <div className="flex flex-wrap items-center gap-2">
        <button type="button" className="foma-btn" disabled={current === 0} onClick={() => go(0)}><RotateCcw size={16} aria-hidden="true" />{t('Reset', 'В начало')}</button>
        <button type="button" className="foma-btn" disabled={current === 0} onClick={() => go(current - 1)}><ChevronLeft size={16} aria-hidden="true" />{t('Previous', 'Назад')}</button>
        <button type="button" className="foma-btn" disabled={current === last} onClick={() => go(current + 1)}>{t('Next', 'Вперёд')}<ChevronRight size={16} aria-hidden="true" /></button>
        <button type="button" className="foma-btn" disabled={reduced} onClick={togglePlay}>
          {autoPlay ? <Pause size={16} aria-hidden="true" /> : <Play size={16} aria-hidden="true" />}
          {autoPlay ? t('Pause', 'Пауза') : t('Auto-play', 'Авто')}
        </button>
      </div>
      {reduced && <p className="m-0 text-xs text-[var(--color-muted)]">{t('Auto-play is off because reduced motion is on in your device settings. Use Next and Previous.', 'Автопроигрывание выключено: на устройстве включено уменьшение движения. Используйте «Вперёд» и «Назад».')}</p>}

      <div aria-live="polite" className="space-y-1">
        <p className="m-0 font-medium">{pick(step.msg)}</p>
        <p className="m-0 text-xs text-[var(--color-muted)]">{t('Step', 'Шаг')} {current} / {last}</p>
      </div>
      <dl className="m-0 grid grid-cols-2 gap-2">
        {counters.map(([label, value]) => (
          <div key={label} className="rounded-md border border-[var(--color-border)] p-2"><dt className="text-xs text-[var(--color-muted)]">{label}</dt><dd className="m-0 font-mono text-lg">{value}</dd></div>
        ))}
      </dl>
      {algo === 'insertion' && <p className="m-0 text-xs text-[var(--color-muted)]">{t('Insertion sort: each shift counts as a move, and so does each placement of the key at a new position.', 'Сортировка вставками: каждый сдвиг и каждая постановка ключа на новое место считаются перемещениями.')}</p>}
    </div>
  );
}
