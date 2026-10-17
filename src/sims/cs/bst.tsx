import { useId, useState } from 'react';
import type { Lang } from '../../contract/types';

// ---- logic (pure) ----
type Msg = { en: string; ru: string };
type TNode = { value: number; left: TNode | null; right: TNode | null };
type Kind = 'in' | 'pre' | 'post';
type Pos = { value: number; x: number; y: number; parent: number | null };

const MAX_NODES = 15;
const START = [50, 30, 70, 20, 40, 60, 80];
const VALUE_TEXT: Msg = { en: 'Enter a whole number from 1 to 99.', ru: 'Введите целое число от 1 до 99.' };
const FULL_TEXT: Msg = { en: `The tree is full: at most ${MAX_NODES} nodes.`, ru: `Дерево заполнено: не больше ${MAX_NODES} узлов.` };
const dupText = (v: number): Msg => ({
  en: `${v} is already in the tree, so it was not added again.`,
  ru: `${v} уже есть в дереве, повторно не добавлено.`,
});
const KIND: Record<Kind, Msg> = {
  in: { en: 'In-order (left, node, right)', ru: 'Симметричный (in-order): левый, узел, правый' },
  pre: { en: 'Pre-order (node, left, right)', ru: 'Прямой (pre-order): узел, левый, правый' },
  post: { en: 'Post-order (left, right, node)', ru: 'Обратный (post-order): левый, правый, узел' },
};

// Pure insert: returns a new tree and does not mutate the old one. The caller rejects duplicates.
function insertInto(n: TNode | null, v: number): TNode {
  if (n === null) return { value: v, left: null, right: null };
  return v < n.value ? { ...n, left: insertInto(n.left, v) } : { ...n, right: insertInto(n.right, v) };
}

function build(values: number[]): TNode | null {
  return values.reduce<TNode | null>((root, v) => insertInto(root, v), null);
}

// Values compared on the way down. found = the last value on the path equals v.
function search(root: TNode | null, v: number): { found: boolean; path: number[] } {
  const path: number[] = [];
  let n = root;
  while (n !== null) {
    path.push(n.value);
    if (n.value === v) return { found: true, path };
    n = v < n.value ? n.left : n.right;
  }
  return { found: false, path };
}

function walk(n: TNode | null, kind: Kind, out: number[] = []): number[] {
  if (n === null) return out;
  if (kind === 'pre') out.push(n.value);
  walk(n.left, kind, out);
  if (kind === 'in') out.push(n.value);
  walk(n.right, kind, out);
  if (kind === 'post') out.push(n.value);
  return out;
}

// x = in-order index (every node gets its own column, so nodes never overlap); y = depth.
function layout(root: TNode | null): Pos[] {
  const out: Pos[] = [];
  const visit = (n: TNode | null, depth: number, parent: number | null) => {
    if (n === null) return;
    visit(n.left, depth + 1, n.value);
    out.push({ value: n.value, x: out.length, y: depth, parent });
    visit(n.right, depth + 1, n.value);
  };
  visit(root, 0, null);
  return out;
}

function insertMsg(root: TNode | null, v: number): Msg {
  const { path } = search(root, v); // for a new value the path ends at the parent of the new leaf
  if (path.length === 0) return { en: `Inserted ${v} as the root.`, ru: `${v} добавлено как корень.` };
  const parent = path[path.length - 1];
  const left = v < parent;
  return {
    en: `Inserted ${v} as the ${left ? 'left' : 'right'} child of ${parent}.`,
    ru: `${v} добавлено как ${left ? 'левый' : 'правый'} потомок узла ${parent}.`,
  };
}

function searchMsg(v: number, r: { found: boolean; path: number[] }): Msg {
  const n = r.path.length;
  if (n === 0) return { en: 'The tree is empty.', ru: 'Дерево пусто.' };
  const trail = r.path.join(' → ');
  if (r.found) {
    return {
      en: `Found ${v} after ${n} ${n === 1 ? 'comparison' : 'comparisons'}: ${trail}.`,
      ru: `Найдено ${v}: сравнений — ${n}, путь: ${trail}.`,
    };
  }
  const last = r.path[n - 1];
  return {
    en: `${v} is not in the tree. The path ends at an empty child of ${last}: ${trail}.`,
    ru: `${v} в дереве нет. Путь заканчивается пустым потомком узла ${last}: ${trail}.`,
  };
}

// ---- component ----
const btn = 'rounded-md border border-[var(--color-border)] bg-[var(--color-card)] px-3 py-1.5 text-sm text-[var(--color-fg)] hover:border-[var(--color-accent)] disabled:opacity-50';
const field = 'w-24 rounded-md border border-[var(--color-border)] bg-[var(--color-card)] px-2 py-1.5 text-[var(--color-fg)]';
const INK = 'var(--color-fg)';
const PATH = 'color-mix(in srgb, var(--color-accent) 35%, transparent)';
const FOUND = 'rgba(46, 125, 50, 0.4)';
const R = 14; // node radius
const GX = 38; // horizontal distance between neighbouring in-order positions
const GY = 46; // vertical distance between levels
const PAD = 26;

export default function BstSim(p: { lang: Lang }) {
  const t = (en: string, ru: string) => (p.lang === 'ru' ? ru : en);
  const inputId = useId();
  const [values, setValues] = useState<number[]>(START);
  const [raw, setRaw] = useState('65');
  const [path, setPath] = useState<{ values: number[]; found: boolean } | null>(null);
  const [status, setStatus] = useState<{ msg: Msg; error: boolean } | null>(null);
  const [kind, setKind] = useState<Kind | null>(null);
  const root = build(values);
  const v = Number(raw.trim());
  const valid = /^\d{1,2}$/.test(raw.trim()) && v >= 1;
  const pos = layout(root);
  const byValue = new Map<number, Pos>(pos.map((q): [number, Pos] => [q.value, q]));
  const onPath = new Set(path?.values ?? []);
  const hit = path?.found ? path.values[path.values.length - 1] : undefined;
  const seq = kind ? walk(root, kind) : [];
  const maxY = pos.reduce((m, q) => Math.max(m, q.y), 0);
  const W = Math.max(300, PAD * 2 + Math.max(0, pos.length - 1) * GX);
  const H = PAD * 2 + maxY * GY;
  const X = (q: Pos) => PAD + q.x * GX;
  const Y = (q: Pos) => PAD + q.y * GY;

  function fail(msg: Msg) {
    setStatus({ msg, error: true });
  }

  function insert() {
    if (!valid) return fail(VALUE_TEXT);
    const r = search(root, v);
    if (r.found) return fail(dupText(v));
    if (values.length >= MAX_NODES) return fail(FULL_TEXT);
    setPath({ values: r.path, found: false });
    setValues([...values, v]);
    setStatus({ msg: insertMsg(root, v), error: false });
  }

  function find() {
    if (!valid) return fail(VALUE_TEXT);
    const r = search(root, v);
    setPath({ values: r.path, found: r.found });
    setStatus({ msg: searchMsg(v, r), error: false });
  }

  function reset() {
    setValues(START);
    setPath(null);
    setStatus(null);
    setKind(null);
  }

  return (
    <div className="space-y-4 text-sm">
      <p className="text-[var(--color-muted)]">
        {t(
          'Left child < parent < right child. Integers 1–99, no duplicates, at most 15 nodes.',
          'Левый потомок < родителя < правого потомка. Целые числа 1–99, без повторов, не больше 15 узлов.',
        )}
      </p>
      <div className="flex flex-wrap items-end gap-2">
        <div>
          <label htmlFor={inputId} className="block text-xs text-[var(--color-muted)]">
            {t('Value (1–99)', 'Значение (1–99)')}
          </label>
          <input id={inputId} type="number" inputMode="numeric" min={1} max={99} value={raw} onChange={(e) => setRaw(e.target.value)} className={field} />
        </div>
        <button type="button" onClick={insert} className={btn}>{t('Insert', 'Вставить')}</button>
        <button type="button" onClick={find} className={btn}>{t('Search', 'Найти')}</button>
        <button type="button" onClick={reset} className={btn}>{t('Reset', 'Сбросить')}</button>
      </div>
      <div role="group" aria-label={t('Traversal', 'Обход')} className="flex flex-wrap gap-2">
        {(['in', 'pre', 'post'] as const).map((k) => (
          <button
            key={k}
            type="button"
            aria-pressed={kind === k}
            onClick={() => setKind(kind === k ? null : k)}
            className={`${btn} ${kind === k ? 'border-[var(--color-accent)] text-[var(--color-accent)]' : ''}`}
          >
            {KIND[k][p.lang]}
          </button>
        ))}
      </div>
      <p aria-live="polite" className="min-h-[1.5rem]">
        {kind && (
          <>
            <span className="text-[var(--color-muted)]">{`${KIND[kind][p.lang]}: `}</span>
            <span className="font-mono">{seq.length ? seq.join(', ') : t('(empty tree)', '(дерево пусто)')}</span>
          </>
        )}
      </p>
      <div className="overflow-x-auto rounded-md border border-[var(--color-border)] bg-[var(--color-card)]">
        <svg width={W} height={H} role="img" aria-label={t(`Binary search tree with ${pos.length} nodes`, `Двоичное дерево поиска, узлов: ${pos.length}`)} className="block">
          {pos.length === 0 && (
            <text x={PAD} y={PAD + 8} fontSize={12} style={{ fill: 'var(--color-muted)' }}>
              {t('empty tree', 'пустое дерево')}
            </text>
          )}
          {pos
            .filter((q) => q.parent !== null)
            .map((q) => {
              const par = byValue.get(q.parent as number)!;
              const onP = onPath.has(q.value); // a node on the path has all its ancestors on it too
              return (
                <line
                  key={`e${q.value}`}
                  x1={X(par)}
                  y1={Y(par)}
                  x2={X(q)}
                  y2={Y(q)}
                  strokeWidth={onP ? 3 : 1.5}
                  style={{ stroke: onP ? 'var(--color-accent)' : INK }}
                />
              );
            })}
          {pos.map((q) => {
            const ord = seq.indexOf(q.value) + 1;
            return (
              <g key={q.value}>
                <circle cx={X(q)} cy={Y(q)} r={R} strokeWidth={1.5} style={{ fill: q.value === hit ? FOUND : onPath.has(q.value) ? PATH : 'var(--color-card)', stroke: INK }} />
                <text x={X(q)} y={Y(q) + 4} textAnchor="middle" fontSize={12} style={{ fill: INK }}>{q.value}</text>
                {ord > 0 && (
                  <text x={X(q) + R - 2} y={Y(q) - R + 4} fontSize={11} style={{ fill: 'var(--color-accent)' }}>{ord}</text>
                )}
              </g>
            );
          })}
        </svg>
      </div>
      <p className="text-xs text-[var(--color-muted)]">{t('If the tree is wider than the frame, scroll inside it →', 'Если дерево шире рамки, прокрутите его внутри →')}</p>
      <p aria-live="polite" className={`min-h-[3rem] rounded-md border px-3 py-2 ${status?.error ? 'border-[#c5221f]' : 'border-[var(--color-border)]'}`}>
        {status && (
          <>
            {status.error && <strong>{t('Error. ', 'Ошибка. ')}</strong>}
            {status.msg[p.lang]}
          </>
        )}
      </p>
    </div>
  );
}
