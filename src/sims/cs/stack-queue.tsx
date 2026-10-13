import { useId, useState } from 'react';
import type { Lang } from '../../contract/types';

// ---- logic (pure) ----
type Mode = 'stack' | 'queue';
type Op = 'push' | 'pop' | 'peek' | 'enqueue' | 'dequeue' | 'front';
type Msg = { en: string; ru: string };
type Outcome = { ok: true; items: number[]; value?: number } | { ok: false; items: number[]; error: 'empty' | 'full' };

const CAPACITY = 8;
const INITIAL: Record<Mode, number[]> = { stack: [3, 8], queue: [3, 8] };
const OPS: Record<Mode, Op[]> = { stack: ['push', 'pop', 'peek'], queue: ['enqueue', 'dequeue', 'front'] };
const LABEL: Record<Op, Msg> = {
  push: { en: 'Push', ru: 'Положить (push)' },
  pop: { en: 'Pop', ru: 'Извлечь (pop)' },
  peek: { en: 'Peek', ru: 'Посмотреть (peek)' },
  enqueue: { en: 'Enqueue', ru: 'В конец (enqueue)' },
  dequeue: { en: 'Dequeue', ru: 'Из начала (dequeue)' },
  front: { en: 'Front', ru: 'Посмотреть начало (front)' },
};
const OK_TEXT: Record<Op, (v: number) => Msg> = {
  push: (v) => ({ en: `Pushed ${v} on top.`, ru: `${v} положено сверху.` }),
  pop: (v) => ({ en: `Popped ${v} from the top.`, ru: `Снято ${v} с вершины.` }),
  peek: (v) => ({ en: `The top element is ${v}.`, ru: `Элемент на вершине: ${v}.` }),
  enqueue: (v) => ({ en: `Enqueued ${v} at the back.`, ru: `${v} поставлено в конец очереди.` }),
  dequeue: (v) => ({ en: `Dequeued ${v} from the front.`, ru: `${v} удалено из начала очереди.` }),
  front: (v) => ({ en: `The front element is ${v}.`, ru: `Элемент в начале очереди: ${v}.` }),
};
const EMPTY_TEXT: Partial<Record<Op, Msg>> = {
  pop: { en: 'The stack is empty, so there is nothing to pop.', ru: 'Стек пуст, снимать нечего.' },
  peek: { en: 'The stack is empty: there is no top element.', ru: 'Стек пуст: вершины нет.' },
  dequeue: { en: 'The queue is empty, so there is nothing to dequeue.', ru: 'Очередь пуста, удалять нечего.' },
  front: { en: 'The queue is empty: there is no front element.', ru: 'Очередь пуста: начала нет.' },
};
const FULL_TEXT: Msg = {
  en: `The structure is full: at most ${CAPACITY} items.`,
  ru: `Структура заполнена: не больше ${CAPACITY} элементов.`,
};
const VALUE_TEXT: Msg = { en: 'Enter a whole number from 0 to 99.', ru: 'Введите целое число от 0 до 99.' };
const isAdd = (op: Op) => op === 'push' || op === 'enqueue';

// Stack: the top is the LAST array element.
// Queue: the front is the FIRST element; enqueue adds at the back (the end of the array).
function run(op: Op, items: number[], value = 0): Outcome {
  if (isAdd(op)) {
    return items.length >= CAPACITY ? { ok: false, items, error: 'full' } : { ok: true, items: [...items, value] };
  }
  if (items.length === 0) return { ok: false, items, error: 'empty' };
  const last = items[items.length - 1];
  if (op === 'pop') return { ok: true, items: items.slice(0, -1), value: last };
  if (op === 'peek') return { ok: true, items, value: last };
  if (op === 'dequeue') return { ok: true, items: items.slice(1), value: items[0] };
  return { ok: true, items, value: items[0] }; // front
}

function failText(op: Op, error: 'empty' | 'full'): Msg {
  return error === 'full' ? FULL_TEXT : (EMPTY_TEXT[op] ?? FULL_TEXT);
}

function logLine(call: string, o: Outcome): Msg {
  if (!o.ok) {
    return { en: `${call} → error: ${o.error}`, ru: `${call} → ошибка: ${o.error === 'empty' ? 'пусто' : 'полно'}` };
  }
  const shown = o.value !== undefined ? String(o.value) : `[${o.items.join(', ')}]`;
  return { en: `${call} → ${shown}`, ru: `${call} → ${shown}` };
}

// ---- component ----
const btn = (on = false) =>
  `rounded-md border bg-[var(--color-card)] px-3 py-1.5 text-sm disabled:opacity-50 ${
    on
      ? 'border-[var(--color-accent)] text-[var(--color-accent)]'
      : 'border-[var(--color-border)] text-[var(--color-fg)] hover:border-[var(--color-accent)]'
  }`;
const field = 'w-24 rounded-md border border-[var(--color-border)] bg-[var(--color-card)] px-2 py-1.5 text-[var(--color-fg)]';
const cell = 'rounded border border-[var(--color-fg)] bg-[var(--color-card)] font-mono text-[var(--color-fg)]';

export default function StackQueueSim(p: { lang: Lang }) {
  const t = (en: string, ru: string) => (p.lang === 'ru' ? ru : en);
  const inputId = useId();
  const [mode, setMode] = useState<Mode>('stack');
  const [data, setData] = useState(INITIAL);
  const [raw, setRaw] = useState('7');
  const [status, setStatus] = useState<{ msg: Msg; error: boolean } | null>(null);
  const [log, setLog] = useState<Msg[]>([]);
  const items = data[mode];
  const valid = /^\d{1,2}$/.test(raw.trim());
  const value = valid ? Number(raw.trim()) : 0;
  const slot = mode === 'stack' ? t('Stack, top first', 'Стек, сверху вниз') : t('Queue, front first', 'Очередь, от начала к концу');

  function act(op: Op) {
    if (isAdd(op) && !valid) {
      setStatus({ msg: VALUE_TEXT, error: true });
      return;
    }
    const o = run(op, items, value);
    setLog((l) => [logLine(isAdd(op) ? `${op}(${value})` : `${op}()`, o), ...l].slice(0, 8));
    if (o.ok) {
      setData((d) => ({ ...d, [mode]: o.items }));
      setStatus({ msg: OK_TEXT[op](isAdd(op) ? value : (o.value ?? 0)), error: false });
    } else {
      setStatus({ msg: failText(op, o.error), error: true });
    }
  }

  function pick(m: Mode) {
    setMode(m);
    setStatus(null);
  }

  function reset() {
    setData(INITIAL);
    setLog([]);
    setStatus(null);
  }

  return (
    <div className="space-y-4 text-sm">
      <p className="text-[var(--color-muted)]">
        {t(
          'Stack: last in, first out (LIFO). Queue: first in, first out (FIFO).',
          'Стек: последним пришёл, первым ушёл (LIFO). Очередь: первым пришёл, первым ушёл (FIFO).',
        )}
      </p>
      <div role="group" aria-label={t('Structure', 'Структура')} className="flex flex-wrap gap-2">
        <button type="button" aria-pressed={mode === 'stack'} onClick={() => pick('stack')} className={btn(mode === 'stack')}>
          {t('Stack (LIFO)', 'Стек (LIFO)')}
        </button>
        <button type="button" aria-pressed={mode === 'queue'} onClick={() => pick('queue')} className={btn(mode === 'queue')}>
          {t('Queue (FIFO)', 'Очередь (FIFO)')}
        </button>
      </div>
      <div className="flex flex-wrap items-end gap-2">
        <div>
          <label htmlFor={inputId} className="block text-xs text-[var(--color-muted)]">
            {t('Value (0–99)', 'Значение (0–99)')}
          </label>
          <input
            id={inputId}
            type="number"
            inputMode="numeric"
            min={0}
            max={99}
            value={raw}
            onChange={(e) => setRaw(e.target.value)}
            className={field}
          />
        </div>
        {OPS[mode].map((op) => (
          <button key={op} type="button" onClick={() => act(op)} className={btn()}>
            {LABEL[op][p.lang]}
          </button>
        ))}
        <button type="button" onClick={reset} className={btn()}>
          {t('Reset', 'Сбросить')}
        </button>
      </div>
      <section aria-label={slot} className="rounded-md border border-[var(--color-border)] bg-[var(--color-card)] p-3">
        <p className="mb-2 text-xs text-[var(--color-muted)]">
          {t(`Size ${items.length} of ${CAPACITY}`, `Размер: ${items.length} из ${CAPACITY}`)}
        </p>
        {mode === 'stack' ? (
          <ol aria-label={slot} className="flex min-h-[9rem] flex-col items-center gap-1">
            {items.length === 0 && <li className="py-6 text-[var(--color-muted)]">{t('(empty)', '(пусто)')}</li>}
            {[...items].reverse().map((v, i) => (
              <li key={i} className={`${cell} flex w-32 items-center justify-between px-3 py-1`}>
                <span>{v}</span>
                {i === 0 && <span className="font-sans text-xs text-[var(--color-accent)]">{t('top', 'вершина')}</span>}
              </li>
            ))}
          </ol>
        ) : (
          <div className="overflow-x-auto pb-1">
            <ol aria-label={slot} className="flex w-max items-start gap-2 px-1">
              {items.length === 0 && <li className="py-6 text-[var(--color-muted)]">{t('(empty)', '(пусто)')}</li>}
              {items.map((v, i) => (
                <li key={i} className="flex w-12 flex-col items-center">
                  <span className="h-4 font-sans text-xs text-[var(--color-accent)]">
                    {i === 0 ? t('front', 'начало') : i === items.length - 1 ? t('back', 'конец') : ''}
                  </span>
                  <span className={`${cell} flex h-12 w-12 items-center justify-center`}>{v}</span>
                </li>
              ))}
            </ol>
          </div>
        )}
      </section>
      <p
        aria-live="polite"
        className={`min-h-[3rem] rounded-md border px-3 py-2 ${
          status?.error ? 'border-[#c5221f]' : 'border-[var(--color-border)]'
        }`}
      >
        {status && (
          <>
            {status.error && <strong>{t('Error. ', 'Ошибка. ')}</strong>}
            {status.msg[p.lang]}
          </>
        )}
      </p>
      <div>
        <p className="font-medium">{t('Operations log (newest first)', 'Журнал операций (новые сверху)')}</p>
        {log.length === 0 ? (
          <p className="text-[var(--color-muted)]">{t('No operations yet.', 'Операций пока нет.')}</p>
        ) : (
          <ol className="mt-1 space-y-1 font-mono text-xs">
            {log.map((l, i) => (
              <li key={i}>{l[p.lang]}</li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}
