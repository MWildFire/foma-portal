import { type CSSProperties, type FormEvent, Fragment, useId, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';
import type { L, Lang } from '../../contract/types';

// ---- logic (pure, no JSX; checked outside the browser) ----
type Verdict = 'start' | 'probe' | 'right' | 'left' | 'found' | 'missing' | 'unsorted';
type Problem = 'empty' | 'format' | 'count' | 'target';

// One step of a search. The range [low, high] is inclusive; low > high means the range is empty.
interface Step {
  low: number;
  high: number;
  mid: number | null; // index probed in this step
  verdict: Verdict;
  comparisons: number; // probes so far
  msg: L;
}

const MAX_ITEMS = 15;

// ceil(log2(n + 1)) with integers only: the smallest k with 2^k >= n + 1
function worstCase(n: number): number {
  let k = 0;
  while (2 ** k < n + 1) k++;
  return k;
}

const isSorted = (xs: number[]): boolean => xs.every((x, k) => k === 0 || xs[k - 1] <= x);
const span = (lo: number, hi: number): L => (lo > hi ? { en: 'empty', ru: 'пустой' } : { en: `${lo} to ${hi}`, ru: `с ${lo} по ${hi}` });

function traceBinary(a: number[], target: number): Step[] {
  const steps: Step[] = [];
  let low = 0;
  let high = a.length - 1;
  let comparisons = 0;
  const push = (mid: number | null, verdict: Verdict, msg: L) => steps.push({ low, high, mid, verdict, comparisons, msg });
  push(null, 'start', { en: `Search for ${target} in ${a.length} sorted values (indices 0 to ${a.length - 1}).`, ru: `Ищем ${target} среди ${a.length} отсортированных значений (индексы с 0 по ${a.length - 1}).` });
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const v = a[mid];
    comparisons++;
    push(mid, 'probe', { en: `mid = floor((${low} + ${high}) / 2) = ${mid}. Compare A[${mid}] = ${v} with ${target}.`, ru: `mid = floor((${low} + ${high}) / 2) = ${mid}. Сравниваем A[${mid}] = ${v} с ${target}.` });
    if (v === target) {
      push(mid, 'found', { en: `Found ${target} at index ${mid}. Comparisons: ${comparisons}.`, ru: `Нашли ${target} на индексе ${mid}. Сравнений: ${comparisons}.` });
      return steps;
    }
    const oldLow = low;
    const oldHigh = high;
    if (v < target) {
      low = mid + 1;
      const r = span(low, high);
      push(mid, 'right', { en: `${v} < ${target}: discard indices ${oldLow} to ${mid}. New range: ${r.en}.`, ru: `${v} < ${target}: отбрасываем индексы с ${oldLow} по ${mid}. Новый диапазон: ${r.ru}.` });
    } else {
      high = mid - 1;
      const r = span(low, high);
      push(mid, 'left', { en: `${v} > ${target}: discard indices ${mid} to ${oldHigh}. New range: ${r.en}.`, ru: `${v} > ${target}: отбрасываем индексы с ${mid} по ${oldHigh}. Новый диапазон: ${r.ru}.` });
    }
  }
  push(null, 'missing', { en: `The range is empty, so ${target} is not in the array. Comparisons: ${comparisons}.`, ru: `Диапазон пуст, значит ${target} в массиве нет. Сравнений: ${comparisons}.` });
  return steps;
}

const unsortedSteps = (n: number): Step[] => [
  { low: 0, high: n - 1, mid: null, verdict: 'unsorted', comparisons: 0, msg: { en: 'Sort the numbers first, then search.', ru: 'Сначала отсортируйте числа, потом ищите.' } },
];

type Parsed = { ok: true; values: number[] } | { ok: false; problem: Problem };
function parseList(text: string): Parsed {
  const parts = text.split(',').map(s => s.trim()).filter(s => s !== '');
  if (parts.length === 0) return { ok: false, problem: 'empty' };
  if (!parts.every(s => /^\d{1,2}$/.test(s))) return { ok: false, problem: 'format' };
  if (parts.length > MAX_ITEMS) return { ok: false, problem: 'count' };
  return { ok: true, values: parts.map(Number) };
}
const parseTarget = (text: string): number | null => (/^\d{1,2}$/.test(text.trim()) ? Number(text.trim()) : null);
// ---- end logic ----

const PROBLEM: Record<Problem, L> = {
  empty: { en: 'Enter at least one number in the array.', ru: 'Введите хотя бы одно число в массиве.' },
  format: { en: 'Use whole numbers from 0 to 99, separated by commas.', ru: 'Используйте целые числа от 0 до 99, через запятую.' },
  count: { en: `Use at most ${MAX_ITEMS} numbers.`, ru: `Используйте не больше ${MAX_ITEMS} чисел.` },
  target: { en: 'The target must be a whole number from 0 to 99.', ru: 'Искомое значение — целое число от 0 до 99.' },
};
const DEFAULT_VALUES = [3, 7, 11, 19, 24, 30, 37, 42, 48, 55, 61, 70, 78, 85, 93];
const DEFAULT_TARGET = 61;
const HATCH = 'repeating-linear-gradient(135deg, var(--color-card) 0 4px, var(--color-border) 4px 6px)';
const FIELD = 'min-w-0 rounded-md border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 font-mono text-[var(--color-fg)]';

function cellStyle(k: number, s: Step): CSSProperties {
  const probed = s.mid === k;
  if (probed && (s.verdict === 'probe' || s.verdict === 'found')) {
    return { background: 'var(--color-accent)', color: 'var(--color-card)', fontWeight: 700 };
  }
  if (k < s.low || k > s.high) {
    return { background: HATCH, color: 'var(--color-muted)', outline: probed ? '2px solid var(--color-accent)' : undefined, outlineOffset: probed ? -2 : undefined };
  }
  return { background: 'var(--color-card)', color: 'var(--color-fg)' };
}

function markerFor(row: 'low' | 'mid' | 'high', k: number, s: Step): boolean {
  if (s.verdict === 'unsorted') return false;
  if (row === 'low') return s.low === k;
  if (row === 'high') return s.high === k;
  return s.mid === k;
}

export default function BinarySearch(p: { lang: Lang }) {
  const lang = p.lang;
  const t =(en: string, ru: string) => (lang === 'ru' ? ru : en);
  const pick = (text: L) => text[lang];
  const uid = useId();
  const [draft, setDraft] = useState(DEFAULT_VALUES.join(', '));
  const [targetDraft, setTargetDraft] = useState(String(DEFAULT_TARGET));
  const [values, setValues] = useState(DEFAULT_VALUES);
  const [target, setTarget] = useState(DEFAULT_TARGET);
  const [problem, setProblem] = useState<Problem | null>(null);
  const [index, setIndex] = useState(0);

  const sorted = isSorted(values);
  const steps = useMemo(() => (sorted ? traceBinary(values, target) : unsortedSteps(values.length)), [sorted, values, target]);
  const last = steps.length - 1;
  const current = Math.min(index, last);
  const step = steps[current];
  const n = values.length;
  const bound = worstCase(n);

  const apply = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const parsed = parseList(draft);
    const goal = parseTarget(targetDraft);
    if (!parsed.ok) return setProblem(parsed.problem);
    if (goal === null) return setProblem('target');
    setProblem(null);
    setValues(parsed.values);
    setTarget(goal);
    setIndex(0);
  };
  const go = (to: number) => setIndex(Math.max(0, Math.min(last, to)));

  const idArray = `${uid}-array`;
  const idTarget = `${uid}-target`;
  const errorId = `${uid}-error`;

  return (
    <div className="space-y-4">
      <form onSubmit={apply} className="space-y-3">
        <div className="space-y-1">
          <label htmlFor={idArray} className="block text-sm font-medium">
            {t(`Sorted numbers, separated by commas (up to ${MAX_ITEMS}, whole numbers 0 to 99)`, `Отсортированные числа через запятую (до ${MAX_ITEMS}, целые от 0 до 99)`)}
          </label>
          <input id={idArray} value={draft} onChange={e => setDraft(e.target.value)} aria-invalid={problem !== null} aria-describedby={problem ? errorId : undefined} className={`${FIELD} w-full`} />
        </div>
        <div className="flex flex-wrap items-end gap-2">
          <div className="space-y-1">
            <label htmlFor={idTarget} className="block text-sm font-medium">{t('Target', 'Искомое значение')}</label>
            <input id={idTarget} type="number" inputMode="numeric" min={0} max={99} value={targetDraft} onChange={e => setTargetDraft(e.target.value)} className={`${FIELD} w-28`} />
          </div>
          <button type="submit" className="foma-btn">{t('Apply', 'Применить')}</button>
        </div>
        {problem && <p id={errorId} role="alert" className="m-0 font-medium">{pick(PROBLEM[problem])}</p>}
      </form>

      {!sorted && (
        <p role="alert" className="m-0 rounded-md border border-[var(--color-border)] p-2 font-medium">
          {t('Warning: these numbers are not in ascending order. Sort them and apply again.', 'Внимание: числа не идут по возрастанию. Отсортируйте их и примените снова.')}
        </p>
      )}

      <div role="img" aria-label={`${t('Sorted array', 'Отсортированный массив')}: ${values.join(', ')}. ${t('Target', 'Искомое значение')}: ${target}.`}>
        <div className="overflow-x-auto">
          <div className="grid items-center gap-[2px] text-center font-mono text-[13px]" style={{ minWidth: 70 + n * 28, gridTemplateColumns: `4rem repeat(${n}, minmax(28px, 1fr))` }}>
            {(['low', 'mid', 'high'] as const).map(row => (
              <Fragment key={row}>
                <span aria-hidden="true" className="text-left font-sans text-[11px] text-[var(--color-muted)]">{row}</span>
                {values.map((_, k) => (
                  <span key={k} aria-hidden="true" className="leading-none" style={{ color: row === 'mid' ? 'var(--color-accent)' : 'var(--color-fg)' }}>
                    {markerFor(row, k, step) ? '▲' : ''}
                  </span>
                ))}
              </Fragment>
            ))}
            <span aria-hidden="true" className="text-left font-sans text-[11px] text-[var(--color-muted)]">{t('value', 'значение')}</span>
            {values.map((v, k) => (
              <span key={k} className="rounded-sm py-1 leading-none" style={cellStyle(k, step)}>{v}</span>
            ))}
            <span aria-hidden="true" className="text-left font-sans text-[11px] text-[var(--color-muted)]">{t('index', 'индекс')}</span>
            {values.map((_, k) => (
              <span key={k} aria-hidden="true" className="text-[11px] leading-none text-[var(--color-muted)]">{k}</span>
            ))}
          </div>
        </div>
      </div>

      <p className="m-0 text-xs">{t('Scroll the array sideways on a narrow screen.', 'На узком экране прокручивайте массив вбок.')}</p>
      <ul className="m-0 flex list-none flex-wrap gap-x-4 gap-y-1 p-0 text-xs text-[var(--color-muted)]">
        <li className="flex items-center gap-1.5"><span aria-hidden="true" className="inline-block h-3 w-3 rounded-sm" style={{ background: 'var(--color-accent)' }} />{t('Probed now', 'Проверяем сейчас')}</li>
        <li className="flex items-center gap-1.5"><span aria-hidden="true" className="inline-block h-3 w-3 rounded-sm border border-[var(--color-border)]" style={{ background: HATCH }} />{t('Discarded', 'Отброшено')}</li>
        <li className="basis-full">{t('low and high are the ends of the search range; mid is the index checked now.', 'low и high — концы диапазона поиска; mid — индекс, который проверяем сейчас.')}</li>
      </ul>

      <p className="m-0 font-mono text-sm">
        {t(`Worst case for n = ${n}: ceil(log2(${n} + 1)) = ${bound} comparisons at most.`, `Худший случай при n = ${n}: ceil(log2(${n} + 1)) = ${bound}, не больше.`)}
      </p>
      <dl className="m-0 grid grid-cols-2 gap-2">
        {[[t('Comparisons', 'Сравнения'), step.comparisons], [t('Worst case', 'Худший случай'), bound]].map(([label, value]) => (
          <div key={label} className="rounded-md border border-[var(--color-border)] p-2">
            <dt className="text-xs text-[var(--color-muted)]">{label}</dt>
            <dd className="m-0 font-mono text-lg">{value}</dd>
          </div>
        ))}
      </dl>

      <div className="flex flex-wrap items-center gap-2">
        <button type="button" className="foma-btn" disabled={!sorted || current === 0} onClick={() => go(0)}>
          <RotateCcw size={16} aria-hidden="true" />{t('Reset', 'В начало')}
        </button>
        <button type="button" className="foma-btn" disabled={!sorted || current === 0} onClick={() => go(current - 1)}>
          <ChevronLeft size={16} aria-hidden="true" />{t('Previous', 'Назад')}
        </button>
        <button type="button" className="foma-btn" disabled={!sorted || current === last} onClick={() => go(current + 1)}>
          {t('Next', 'Вперёд')}<ChevronRight size={16} aria-hidden="true" />
        </button>
      </div>

      <div aria-live="polite" className="space-y-1">
        <p className="m-0 font-medium">{pick(step.msg)}</p>
        <p className="m-0 text-xs text-[var(--color-muted)]">{t('Step', 'Шаг')} {current} / {last}</p>
      </div>
    </div>
  );
}
