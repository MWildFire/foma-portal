import { useId, useState } from 'react';
import type { Lang } from '../../contract/types';

// ---- Logic: plain functions, no React or DOM (checked from the scratchpad) ----

type Bi = { en: string; ru: string };
type Kind = 'factorial' | 'sum_digits';

interface Spec {
  name: Kind;
  options: number[]; // allowed values of n
  start: number; // default n
  isBase: (n: number) => boolean;
  baseValue: (n: number) => number;
  next: (n: number) => number; // argument of the recursive call
  combine: (n: number, sub: number) => number; // return value from n and the callee's value
  pending: (n: number) => string; // return expression while the callee runs
  computed: (n: number, sub: number) => string; // return expression with the callee's value filled in
}

const SPECS: Record<Kind, Spec> = {
  factorial: {
    name: 'factorial',
    options: [1, 2, 3, 4, 5],
    start: 3,
    isBase: (n) => n <= 1,
    baseValue: () => 1,
    next: (n) => n - 1,
    combine: (n, sub) => n * sub,
    pending: (n) => `${n} * factorial(${n - 1})`,
    computed: (n, sub) => `${n} * ${sub}`,
  },
  sum_digits: {
    name: 'sum_digits',
    options: [7, 25, 308, 1234],
    start: 1234,
    isBase: (n) => n < 10,
    baseValue: (n) => n,
    next: (n) => Math.floor(n / 10),
    combine: (n, sub) => (n % 10) + sub,
    pending: (n) => `${n % 10} + sum_digits(${Math.floor(n / 10)})`,
    computed: (n, sub) => `${n % 10} + ${sub}`,
  },
};

interface Frame { n: number; base: boolean; received: number | null; value: number | null }
interface Snap { frames: Frame[]; result: number | null; msg: Bi } // frames: bottom first

// One snapshot per event: the start, then one push per call, then one pop per return.
function buildTrace(kind: Kind, n: number): Snap[] {
  const s = SPECS[kind];
  const args: number[] = [];
  for (let x = n; ; x = s.next(x)) {
    args.push(x);
    if (s.isBase(x)) break;
  }
  const snaps: Snap[] = [{
    frames: [],
    result: null,
    msg: { en: `Press Next to call ${s.name}(${n}).`, ru: `Нажмите «Дальше», чтобы вызвать ${s.name}(${n}).` },
  }];
  let stack: Frame[] = [];
  for (const x of args) {
    const base = s.isBase(x);
    stack = [...stack, { n: x, base, received: null, value: base ? s.baseValue(x) : null }];
    const msg = base
      ? {
        en: `Call ${s.name}(${x}): base case reached, so it returns ${s.baseValue(x)} without a new call.`,
        ru: `Вызов ${s.name}(${x}): базовый случай, функция возвращает ${s.baseValue(x)} без нового вызова.`,
      }
      : {
        en: `Call ${s.name}(${x}): push a frame. It waits for ${s.name}(${s.next(x)}).`,
        ru: `Вызов ${s.name}(${x}): кладём кадр в стек. Он ждёт ${s.name}(${s.next(x)}).`,
      };
    snaps.push({ frames: stack, result: null, msg });
  }
  while (stack.length > 0) {
    const top = stack[stack.length - 1];
    const v = top.value ?? 0; // every frame on the stack has its value by now
    stack = stack.slice(0, -1);
    const caller = stack[stack.length - 1];
    if (caller) {
      const cv = s.combine(caller.n, v);
      stack = [...stack.slice(0, -1), { ...caller, received: v, value: cv }];
      snaps.push({
        frames: stack,
        result: null,
        msg: {
          en: `${s.name}(${top.n}) returns ${v} to ${s.name}(${caller.n}), which computes ${s.computed(caller.n, v)} = ${cv}.`,
          ru: `${s.name}(${top.n}) возвращает ${v} в ${s.name}(${caller.n}), который вычисляет ${s.computed(caller.n, v)} = ${cv}.`,
        },
      });
    } else {
      snaps.push({
        frames: [],
        result: v,
        msg: {
          en: `${s.name}(${top.n}) returns ${v} to the program. The stack is empty.`,
          ru: `${s.name}(${top.n}) возвращает ${v} в программу. Стек пуст.`,
        },
      });
    }
  }
  return snaps;
}

function frameLine(kind: Kind, f: Frame): Bi {
  const s = SPECS[kind];
  if (f.base) return { en: `value: ${f.value} (base case)`, ru: `значение: ${f.value} (базовый случай)` };
  if (f.received !== null && f.value !== null) {
    const expr = s.computed(f.n, f.received);
    return { en: `value: ${expr} = ${f.value}`, ru: `значение: ${expr} = ${f.value}` };
  }
  return { en: `pending: ${s.pending(f.n)}`, ru: `ждёт: ${s.pending(f.n)}` };
}

// ---- UI ----

const control = 'min-h-[44px] rounded-md border border-[var(--color-border)] bg-[var(--color-card)] px-2 font-sans text-[16px] text-[var(--color-fg)]';

export default function RecursionStack(p: { lang: Lang }) {
  const t = (en: string, ru: string) => (p.lang === 'ru' ? ru : en);
  const uid = useId();
  const [kind, setKind] = useState<Kind>('factorial');
  const [n, setN] = useState(SPECS.factorial.start);
  const [step, setStep] = useState(0);

  const spec = SPECS[kind];
  const snaps = buildTrace(kind, n);
  const last = snaps.length - 1;
  const snap = snaps[step];
  const frames = [...snap.frames].reverse(); // top (most recent call) first
  const kindId = `${uid}-kind`;
  const nId = `${uid}-n`;
  const stackId = `${uid}-stack`;

  function chooseKind(k: Kind) {
    setKind(k);
    setN(SPECS[k].start);
    setStep(0);
  }

  function chooseN(v: number) {
    setN(v);
    setStep(0);
  }

  return (
    <div className="flex min-w-0 flex-col gap-3 text-[var(--color-fg)]">
      <div className="flex flex-wrap gap-3">
        <div className="flex flex-col gap-1 text-sm">
          <label htmlFor={kindId} className="font-semibold">{t('Function', 'Функция')}</label>
          <select id={kindId} value={kind} onChange={(e) => chooseKind(e.target.value as Kind)} className={control}>
            <option value="factorial">factorial(n)</option>
            <option value="sum_digits">sum_digits(n)</option>
          </select>
        </div>
        <div className="flex flex-col gap-1 text-sm">
          <label htmlFor={nId} className="font-semibold">{t('Value of n', 'Значение n')}</label>
          <select id={nId} value={n} onChange={(e) => chooseN(Number(e.target.value))} className={control}>
            {spec.options.map((v) => (
              <option key={v} value={v}>{v}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="foma-btn-row">
        <button type="button" className="foma-btn" onClick={() => setStep(Math.max(0, step - 1))}>
          {t('Back', 'Назад')}
        </button>
        <button type="button" className="foma-btn foma-btn--primary" onClick={() => setStep(Math.min(last, step + 1))}>
          {t('Next', 'Дальше')}
        </button>
        <button type="button" className="foma-btn" onClick={() => setStep(0)}>
          {t('Start over', 'Сначала')}
        </button>
      </div>

      <p aria-live="polite" className="m-0 text-sm">
        <strong>{t(`Event ${step} of ${last}.`, `Событие ${step} из ${last}.`)}</strong>{' '}
        {t(snap.msg.en, snap.msg.ru)}
      </p>

      <section aria-labelledby={stackId} className="rounded-md border border-[var(--color-border)] bg-[var(--color-bg)] p-2">
        <h3 id={stackId} className="m-0 text-sm font-semibold">
          {t('Call stack (top = most recent call)', 'Стек вызовов (сверху — последний вызов)')}
        </h3>
        {frames.length === 0 ? (
          <p className="m-0 mt-2 text-sm text-[var(--color-muted)]">{t('The stack is empty.', 'Стек пуст.')}</p>
        ) : (
          <ol className="m-0 mt-2 flex list-none flex-col gap-2 p-0">
            {frames.map((f, i) => {
              const line = frameLine(kind, f);
              return (
                <li
                  key={`${f.n}-${i}`}
                  aria-current={i === 0 ? 'step' : undefined}
                  className={`rounded-md border-2 bg-[var(--color-card)] p-2 ${f.base ? 'border-[var(--color-accent)]' : 'border-[var(--color-border)]'}`}
                >
                  <div className="flex flex-wrap items-center gap-2 text-sm">
                    <span className="font-mono font-semibold">{kind}</span>
                    {i === 0 && <span className="text-[var(--color-muted)]">{t('top', 'верх')}</span>}
                    {f.base && <span className="font-semibold">{t('base case', 'базовый случай')}</span>}
                  </div>
                  <div className="font-mono text-sm">n = {f.n}</div>
                  <div className="text-sm">{t(line.en, line.ru)}</div>
                </li>
              );
            })}
          </ol>
        )}
      </section>

      {snap.result !== null && (
        <p className="m-0 text-sm font-semibold">
          {t(`Result returned to the program: ${snap.result}`, `Результат, возвращённый программе: ${snap.result}`)}
        </p>
      )}
    </div>
  );
}
