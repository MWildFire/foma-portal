import { useId, useState } from 'react';
import type { Lang } from '../../contract/types';

// ---- logic (pure) ----
type Msg = { en: string; ru: string };
type NodeRec = { id: number; value: number; next: number | null };
type ListState = { head: number | null; nodes: NodeRec[]; nextId: number };
type Result = { state: ListState; steps: Msg[]; changed: number[] };

const MAX_NODES = 8;
const START: ListState = {
  head: 1,
  nodes: [{ id: 1, value: 5, next: 2 }, { id: 2, value: 12, next: 3 }, { id: 3, value: 20, next: null }],
  nextId: 4,
};
const VALUE_TEXT: Msg = { en: 'Enter a whole number from 0 to 99.', ru: 'Введите целое число от 0 до 99.' };
const FULL_TEXT: Msg = { en: `The list is full: at most ${MAX_NODES} nodes.`, ru: `Список заполнен: не больше ${MAX_NODES} узлов.` };
const EMPTY_TEXT: Msg = { en: 'The list is empty: there is no node to use.', ru: 'Список пуст: узлов нет.' };

const nm = (id: number | null) => (id === null ? 'NULL' : `N${id}`);
const get = (s: ListState, id: number) => s.nodes.find((n) => n.id === id)!;
const withNext = (nodes: NodeRec[], id: number, next: number | null) => nodes.map((n) => (n.id === id ? { ...n, next } : n));

// Node ids in list order: follow next pointers from head until NULL.
function order(s: ListState): number[] {
  const ids: number[] = [];
  let cur = s.head;
  while (cur !== null && ids.length <= s.nodes.length) {
    ids.push(cur);
    cur = get(s, cur).next;
  }
  return ids;
}

function insertHead(s: ListState, v: number): Result {
  const id = s.nextId;
  const oldHead = s.head === null ? '' : ' (the old head)';
  const oldHeadRu = s.head === null ? '' : ' (бывшая голова)';
  return {
    state: { head: id, nodes: [...s.nodes, { id, value: v, next: s.head }], nextId: id + 1 },
    steps: [
      { en: `Create N${id} with value ${v}; set its next to ${nm(s.head)}${oldHead}.`, ru: `Создаём N${id} со значением ${v}; его next указывает на ${nm(s.head)}${oldHeadRu}.` },
      { en: `head now points to N${id}.`, ru: `head теперь указывает на N${id}.` },
    ],
    changed: [id],
  };
}

function insertTail(s: ListState, v: number): Result {
  const id = s.nextId;
  const ids = order(s);
  const node: NodeRec = { id, value: v, next: null };
  if (ids.length === 0) {
    return {
      state: { head: id, nodes: [node], nextId: id + 1 },
      steps: [
        { en: `The list is empty: create N${id} with value ${v} and next = NULL.`, ru: `Список пуст: создаём N${id} со значением ${v} и next = NULL.` },
        { en: `head now points to N${id}.`, ru: `head теперь указывает на N${id}.` },
      ],
      changed: [id],
    };
  }
  const last = ids[ids.length - 1];
  return {
    state: { head: s.head, nodes: [...withNext(s.nodes, last, id), node], nextId: id + 1 },
    steps: [
      { en: `Walk from head to the last node N${last}; its next is NULL.`, ru: `Идём от head до последнего узла N${last}; его next = NULL.` },
      { en: `Create N${id} with value ${v} and next = NULL.`, ru: `Создаём N${id} со значением ${v} и next = NULL.` },
      { en: `N${last}.next changes from NULL to N${id}.`, ru: `N${last}.next меняется с NULL на N${id}.` },
    ],
    changed: [last, id],
  };
}

function insertAfter(s: ListState, k: number, v: number): Result {
  const id = s.nextId;
  const a = order(s)[k];
  const old = get(s, a).next;
  return {
    state: { head: s.head, nodes: [...withNext(s.nodes, a, id), { id, value: v, next: old }], nextId: id + 1 },
    steps: [
      { en: `The node at index ${k} is N${a}; its next is ${nm(old)}.`, ru: `Узел с индексом ${k} — N${a}; его next указывает на ${nm(old)}.` },
      { en: `Create N${id} with value ${v} and next = ${nm(old)} (the old next).`, ru: `Создаём N${id} со значением ${v} и next = ${nm(old)} (старый next).` },
      { en: `N${a}.next changes from ${nm(old)} to N${id}.`, ru: `N${a}.next меняется с ${nm(old)} на N${id}.` },
    ],
    changed: [a, id],
  };
}

function deleteAt(s: ListState, k: number): Result {
  const ids = order(s);
  const target = ids[k];
  const { next: after, value } = get(s, target);
  const nodes = s.nodes.filter((n) => n.id !== target);
  const gone: Msg = {
    en: `N${target} (value ${value}) is no longer reachable, so it is removed.`,
    ru: `N${target} (значение ${value}) больше не достижим, поэтому удалён.`,
  };
  if (k === 0) {
    return {
      state: { head: after, nodes, nextId: s.nextId },
      steps: [{ en: `head changes from N${target} to ${nm(after)}.`, ru: `head меняется с N${target} на ${nm(after)}.` }, gone],
      changed: [],
    };
  }
  const prev = ids[k - 1];
  return {
    state: { head: s.head, nodes: withNext(nodes, prev, after), nextId: s.nextId },
    steps: [
      {
        en: `The node at index ${k - 1} is N${prev}; its next changes from N${target} to ${nm(after)}.`,
        ru: `Узел с индексом ${k - 1} — N${prev}; его next меняется с N${target} на ${nm(after)}.`,
      },
      gone,
    ],
    changed: [prev],
  };
}

// Message for traversal step i (0-based). i equal to the list length means NULL was reached.
function visitMsg(s: ListState, i: number): Msg {
  const ids = order(s);
  if (i >= ids.length) return { en: 'NULL reached: the traversal is complete.', ru: 'Достигнут NULL: обход завершён.' };
  const n = get(s, ids[i]);
  const last = n.next === null;
  return {
    en: `Visit N${n.id} (value ${n.value}). ${last ? 'Its next is NULL, so this is the last node.' : `Follow next to N${n.next}.`}`,
    ru: `Посещаем N${n.id} (значение ${n.value}). ${last ? 'Его next = NULL, это последний узел.' : `Идём по next к N${n.next}.`}`,
  };
}

// ---- component ----
const btn =
  'rounded-md border border-[var(--color-border)] bg-[var(--color-card)] px-3 py-1.5 text-sm text-[var(--color-fg)] hover:border-[var(--color-accent)] disabled:opacity-50';
const field = 'w-24 rounded-md border border-[var(--color-border)] bg-[var(--color-card)] px-2 py-1.5 text-[var(--color-fg)]';
const INK = 'var(--color-fg)';
const X0 = 70; // x of the first node
const STEP = 96; // distance between neighbouring nodes
const Y = 74; // top of the node boxes
const H = 40; // node height
// Fills of the node boxes. The legend under the picture uses the same values.
const CURRENT_FILL = 'color-mix(in srgb, var(--color-accent) 40%, transparent)'; // current node of the traversal
const CHANGED_FILL = 'rgba(217, 142, 4, 0.35)'; // changed by the last operation

function HArrow({ x1, x2, y }: { x1: number; x2: number; y: number }) {
  return (
    <g style={{ stroke: INK, fill: INK }}>
      <line x1={x1} y1={y} x2={x2} y2={y} strokeWidth={1.5} />
      <polygon points={`${x2},${y} ${x2 - 8},${y - 4} ${x2 - 8},${y + 4}`} />
    </g>
  );
}

export default function LinkedListSim(p: { lang: Lang }) {
  const t = (en: string, ru: string) => (p.lang === 'ru' ? ru : en);
  const inputId = useId();
  const selId = useId();
  const [s, setS] = useState<ListState>(START);
  const [raw, setRaw] = useState('9');
  const [k, setK] = useState(0);
  const [steps, setSteps] = useState<Msg[]>([]);
  const [changed, setChanged] = useState<number[]>([]);
  const [status, setStatus] = useState<{ msg: Msg; error: boolean } | null>(null);
  const [trav, setTrav] = useState<number | null>(null);
  const ids = order(s);
  const sel = Math.min(k, Math.max(ids.length - 1, 0));
  const valid = /^\d{1,2}$/.test(raw.trim());
  const v = valid ? Number(raw.trim()) : 0;
  const current = trav !== null && trav < ids.length ? ids[trav] : null;
  const endX = X0 + ids.length * STEP; // the NULL box sits here
  const W = Math.max(320, endX + 70); // drawing width in SVG units, NULL box included
  const listText = [...ids.map(nm), 'NULL'].join(' → ');

  function fail(msg: Msg) {
    setTrav(null);
    setStatus({ msg, error: true });
  }

  function apply(r: Result) {
    setS(r.state);
    setSteps(r.steps);
    setChanged(r.changed);
    setTrav(null);
    setStatus(null);
  }

  function insert(kind: 'head' | 'tail' | 'after') {
    if (!valid) return fail(VALUE_TEXT);
    if (s.nodes.length >= MAX_NODES) return fail(FULL_TEXT);
    if (kind === 'head') return apply(insertHead(s, v));
    if (kind === 'tail') return apply(insertTail(s, v));
    if (ids.length === 0) return fail(EMPTY_TEXT);
    apply(insertAfter(s, sel, v));
  }

  function remove() {
    if (ids.length === 0) return fail(EMPTY_TEXT);
    apply(deleteAt(s, sel));
  }

  function startTraverse() {
    if (ids.length === 0) return fail(EMPTY_TEXT);
    setChanged([]);
    setStatus(null);
    setTrav(0);
  }

  function reset() {
    setS(START);
    setK(0);
    setSteps([]);
    setChanged([]);
    setTrav(null);
    setStatus(null);
  }

  const travMsg = trav === null ? null : visitMsg(s, trav);

  return (
    <div className="space-y-4 text-sm">
      <p className="text-[var(--color-muted)]">{t('Each node stores a value and a next pointer to the following node. The last next is NULL; head points to the first node.', 'Каждый узел хранит значение и указатель next на следующий узел. У последнего next = NULL; head указывает на первый узел.')}</p>
      <div className="flex flex-wrap items-end gap-3">
        <div>
          <label htmlFor={inputId} className="block text-xs text-[var(--color-muted)]">{t('Value (0–99)', 'Значение (0–99)')}</label>
          <input id={inputId} type="number" inputMode="numeric" min={0} max={99} value={raw} onChange={(e) => setRaw(e.target.value)} className={field} />
        </div>
        <div>
          <label htmlFor={selId} className="block text-xs text-[var(--color-muted)]">{t('Node index k (0 = head)', 'Индекс узла k (0 — голова)')}</label>
          <select id={selId} value={sel} disabled={ids.length === 0} onChange={(e) => setK(Number(e.target.value))} className={field}>
            {ids.map((id, i) => (
              <option key={id} value={i}>{`${i}: N${id} = ${get(s, id).value}`}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        <button type="button" onClick={() => insert('head')} className={btn}>{t('Insert at head', 'Вставить в начало')}</button>
        <button type="button" onClick={() => insert('tail')} className={btn}>{t('Insert at tail', 'Вставить в конец')}</button>
        <button type="button" disabled={ids.length === 0} onClick={() => insert('after')} className={btn}>{t('Insert after node k', 'Вставить после узла k')}</button>
        <button type="button" disabled={ids.length === 0} onClick={remove} className={btn}>{t('Delete node k', 'Удалить узел k')}</button>
        <button type="button" disabled={ids.length === 0 || trav !== null} onClick={startTraverse} className={btn}>{t('Traverse', 'Обход')}</button>
        {trav !== null && (
          <>
            <button type="button" disabled={trav >= ids.length} onClick={() => setTrav(trav + 1)} className={btn}>{t('Next node', 'Следующий узел')}</button>
            <button type="button" onClick={() => setTrav(null)} className={btn}>{t('Stop', 'Остановить')}</button>
          </>
        )}
        <button type="button" onClick={reset} className={btn}>{t('Reset list', 'Сбросить список')}</button>
      </div>
      <div className="overflow-x-auto rounded-md border border-[var(--color-border)] bg-[var(--color-card)] py-2">
        {/* The drawing scales down to the frame width, but to no less than 75 %; below that the frame scrolls sideways. */}
        <svg viewBox={`0 0 ${W} 150`} width="100%" style={{ maxWidth: W, minWidth: Math.round(W * 0.75), height: 'auto' }} role="img" aria-label={t(`Linked list: ${listText}`, `Связный список: ${listText}`)} className="block">
          <text x={6} y={Y + 24} fontSize={12} style={{ fill: INK }}>head</text>
          <HArrow x1={42} x2={X0 - 2} y={Y + H / 2} />
          {ids.map((id, i) => {
            const x = X0 + i * STEP;
            const fill =
              id === current
                ? CURRENT_FILL
                : changed.includes(id)
                  ? CHANGED_FILL
                  : 'var(--color-card)';
            return (
              <g key={id}>
                <rect x={x} y={Y} width={34} height={H} style={{ fill, stroke: INK }} />
                <rect x={x + 34} y={Y} width={24} height={H} style={{ fill, stroke: INK }} />
                <text x={x + 17} y={Y + 25} textAnchor="middle" fontSize={13} style={{ fill: INK }}>{get(s, id).value}</text>
                <circle cx={x + 46} cy={Y + H / 2} r={3.5} style={{ fill: INK }} />
                <text x={x + 29} y={Y - 8} textAnchor="middle" fontSize={12} style={{ fill: 'var(--color-muted)' }}>{`N${id}`}</text>
                <text x={x + 29} y={Y + H + 18} textAnchor="middle" fontSize={12} style={{ fill: 'var(--color-muted)' }}>
                  {`${t('index', 'индекс')} ${i}`}
                </text>
                <HArrow x1={x + 58} x2={x + STEP - 2} y={Y + H / 2} />
              </g>
            );
          })}
          <rect x={endX} y={Y + 11} width={46} height={18} style={{ fill: 'var(--color-card)', stroke: INK }} />
          <text x={endX + 23} y={Y + 24} textAnchor="middle" fontSize={12} style={{ fill: INK }}>NULL</text>
        </svg>
      </div>
      <ul className="m-0 flex list-none flex-wrap gap-x-4 gap-y-1 p-0 text-xs text-[var(--color-muted)]">
        <li className="flex items-center gap-1.5"><span aria-hidden="true" className="inline-block h-3 w-3 rounded-sm" style={{ background: CURRENT_FILL }} />{t('Shaded: current node of the traversal.', 'Выделено: текущий узел обхода.')}</li>
        <li className="flex items-center gap-1.5"><span aria-hidden="true" className="inline-block h-3 w-3 rounded-sm" style={{ background: CHANGED_FILL }} />{t('Amber: nodes changed by the last operation.', 'Янтарный: узлы, изменённые последней операцией.')}</li>
      </ul>
      <p aria-live="polite" className={`min-h-[3rem] rounded-md border px-3 py-2 ${status?.error ? 'border-[#c5221f]' : 'border-[var(--color-border)]'}`}>
        {travMsg
          ? travMsg[p.lang]
          : status && (
              <>
                {status.error && <strong>{t('Error. ', 'Ошибка. ')}</strong>}
                {status.msg[p.lang]}
              </>
            )}
      </p>
      <div>
        <p className="font-medium">{t('Pointer changes in the last operation', 'Изменения указателей в последней операции')}</p>
        {steps.length === 0 && <p className="text-[var(--color-muted)]">{t('No operation yet.', 'Операций пока нет.')}</p>}
        <ol className="mt-1 list-decimal space-y-1 pl-5">{steps.map((st, i) => <li key={i}>{st[p.lang]}</li>)}</ol>
      </div>
    </div>
  );
}
