import ReadableDiagram from '../readable-diagram';
import { useState } from 'react';
import type { Lang } from '../../contract/types';

// Kruskal and Prim on one fixed network (lengths in km). Kruskal sorts the edges and accepts each one that does not
// close a cycle; Prim grows one tree from A. Both finish with the same total weight.

const ORDER = 'ABCDEF';
const POS: Record<string, [number, number]> = {
  A: [40, 120], B: [110, 50], C: [110, 190], D: [200, 50], E: [200, 190], F: [280, 120],
};
const EDGES: [string, string, number][] = [
  ['A', 'B', 4], ['A', 'C', 3], ['B', 'C', 6], ['B', 'D', 5], ['C', 'D', 8],
  ['C', 'E', 9], ['D', 'E', 7], ['D', 'F', 10], ['E', 'F', 2],
];

interface Step { u: string; v: string; w: number; ok: boolean }

// Kruskal: go through the edges by length; accept an edge when its ends lie in different trees, stop at five accepted.
function kruskalSteps(): Step[] {
  const group: Record<string, string> = {};
  for (const x of ORDER) group[x] = x;
  const find = (x: string): string => (group[x] === x ? x : find(group[x]));
  const steps: Step[] = [];
  let accepted = 0;
  for (const [u, v, w] of [...EDGES].sort((a, b) => a[2] - b[2])) {
    if (accepted === ORDER.length - 1) break;
    const ok = find(u) !== find(v);
    if (ok) {
      group[find(u)] = find(v);
      accepted++;
    }
    steps.push({ u, v, w, ok });
  }
  return steps;
}

// Prim from A: each step adds the cheapest edge that leaves the tree.
function primSteps(): Step[] {
  const inside = new Set(['A']);
  const steps: Step[] = [];
  while (inside.size < ORDER.length) {
    const [u, v, w] = EDGES.filter(([a, b]) => inside.has(a) !== inside.has(b)).sort((a, b) => a[2] - b[2])[0];
    const from = inside.has(u) ? u : v;
    const to = from === u ? v : u;
    inside.add(to);
    steps.push({ u: from, v: to, w, ok: true });
  }
  return steps;
}

const KRUSKAL = kruskalSteps();
const PRIM = primSteps();

const TEXT = {
  en: {
    label: 'Kruskal and Prim steps on one network of six sites',
    kruskal: 'Kruskal',
    prim: 'Prim from A',
    shown: 'Steps shown',
    current: 'Current edge',
    accept: 'accepted: no cycle is formed',
    add: 'added: the cheapest edge leaving the tree',
    reject: 'rejected: it would close a cycle',
    total: 'Total length so far (km)',
    count: 'Edges in the tree',
    note: 'Blue edges form the tree; dashed red edges were rejected. Lengths in km.',
  },
  ru: {
    label: 'Шаги алгоритмов Крускала и Прима на одной сети из шести узлов',
    kruskal: 'Крускал',
    prim: 'Прим из A',
    shown: 'Показано шагов',
    current: 'Текущее ребро',
    accept: 'принято: цикл не образуется',
    add: 'добавлено: самое дешёвое ребро из дерева',
    reject: 'отклонено: оно замкнёт цикл',
    total: 'Суммарная длина на этом шаге (км)',
    count: 'Рёбер в дереве',
    note: 'Синие рёбра образуют дерево, красные пунктирные отклонены. Длины в км.',
  },
} as const;

export default function MstLab({ lang }: { lang: Lang }) {
  const t = TEXT[lang];
  const [algo, setAlgo] = useState<'kruskal' | 'prim'>('kruskal');
  const [count, setCount] = useState(0);
  const steps = algo === 'kruskal' ? KRUSKAL : PRIM;
  const shown = steps.slice(0, count);
  const current = shown[shown.length - 1];
  const tree = shown.filter(s => s.ok);
  const total = tree.reduce((sum, s) => sum + s.w, 0);

  const choose = (name: 'kruskal' | 'prim') => {
    setAlgo(name);
    setCount(0);
  };

  const edgeStyle = (u: string, v: string): { stroke: string; strokeWidth: number; strokeDasharray?: string } => {
    const s = shown.find(x => (x.u === u && x.v === v) || (x.u === v && x.v === u));
    if (!s) return { stroke: '#c9ced8', strokeWidth: 2 };
    if (s === current) return { stroke: '#e0883a', strokeWidth: 5 };
    return s.ok ? { stroke: '#4f6fd8', strokeWidth: 4 } : { stroke: '#c0392b', strokeWidth: 2, strokeDasharray: '5 4' };
  };

  return (
    <figure style={{ margin: 0 }}>
      <div style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
        {(['kruskal', 'prim'] as const).map(name => (
          <button key={name} type="button" aria-pressed={algo === name} onClick={() => choose(name)} style={{ fontWeight: algo === name ? 700 : 400 }}>
            {t[name]}
          </button>
        ))}
      </div>
      <ReadableDiagram lang={lang}><svg viewBox="0 0 320 230" width="100%" style={{ maxWidth: 320 }} role="img" aria-label={t.label}>
        {EDGES.map(([u, v, w]) => {
          const [x1, y1] = POS[u];
          const [x2, y2] = POS[v];
          return (
            <g key={u + v}>
              <line x1={x1} y1={y1} x2={x2} y2={y2} {...edgeStyle(u, v)} />
              <text x={(x1 + x2) / 2} y={(y1 + y2) / 2 - 5} textAnchor="middle" fontSize={12} fill="#333">{w}</text>
            </g>
          );
        })}
        {ORDER.split('').map(x => (
          <g key={x}>
            <circle cx={POS[x][0]} cy={POS[x][1]} r={12} fill="#fff" stroke="#333" strokeWidth={1.5} />
            <text x={POS[x][0]} y={POS[x][1] + 4} textAnchor="middle" fontSize={13} fontWeight={600} fill="#222">{x}</text>
          </g>
        ))}
      </svg></ReadableDiagram>
      <label style={{ display: 'block', marginTop: 8 }}>
        {t.shown}: {count} / {steps.length}
        <input type="range" min={0} max={steps.length} step={1} value={count} onChange={event => setCount(Number(event.target.value))} style={{ width: '100%' }} />
      </label>
      <p style={{ fontSize: 13, lineHeight: 1.5, margin: '6px 0' }}>
        {t.current}: {current ? `${current.u}${current.v} (${current.w}) — ${current.ok ? (algo === 'kruskal' ? t.accept : t.add) : t.reject}` : '—'}
      </p>
      <p style={{ fontSize: 13, lineHeight: 1.5, margin: '6px 0' }}>
        {t.total}: {total} · {t.count}: {tree.length}
      </p>
      <figcaption style={{ fontSize: 12, lineHeight: 1.5 }}>{t.note}</figcaption>
    </figure>
  );
}
