import { useState } from 'react';
import type { Lang } from '../../contract/types';

// Postman on graph P (odd vertices B, C, D, E; the pairings repeat 10, 12 and 12 km) and a nearest-neighbour tour with
// its deleted-vertex bound on the complete graph K. Fixed, hand-checked graphs; lengths in km.

const LETTERS = ['A', 'B', 'C', 'D', 'E'];
const POS: Record<string, [number, number]> = { A: [160, 30], B: [50, 110], C: [110, 200], D: [270, 110], E: [230, 200] };
const P_EDGES: [string, string, number][] = [['A', 'B', 5], ['A', 'C', 6], ['A', 'D', 3], ['A', 'E', 12], ['B', 'C', 1], ['B', 'E', 7], ['C', 'E', 2]];
const K_EDGES: [string, string, number][] = [['A', 'B', 1], ['A', 'C', 2], ['A', 'D', 8], ['A', 'E', 5], ['B', 'C', 10], ['B', 'D', 16], ['B', 'E', 11], ['C', 'D', 7], ['C', 'E', 13], ['D', 'E', 9]];
// Pairings of the odd vertices, each with its shortest routes (B to D through A; D to E through A and C).
const PAIRINGS: string[][][] = [[['B', 'A', 'D'], ['C', 'E']], [['B', 'C'], ['D', 'A', 'C', 'E']], [['B', 'C', 'E'], ['C', 'A', 'D']]];
const PAIR_NAMES = ['BD + CE', 'BC + DE', 'BE + CD'];
const ODD = ['B', 'C', 'D', 'E'];

type Weight = (u: string, v: string) => number;
function weightOf(edges: [string, string, number][]): Weight {
  const table: Record<string, number> = {};
  for (const [u, v, w] of edges) { table[u + v] = w; table[v + u] = w; }
  return (u, v) => table[u + v];
}
const pw = weightOf(P_EDGES);
const kw = weightOf(K_EDGES);
const P_TOTAL = P_EDGES.reduce((sum, e) => sum + e[2], 0);
const pathLength = (path: string[], w: Weight) => path.slice(1).reduce((sum, x, i) => sum + w(path[i], x), 0);
const segments = (routes: string[][]) => routes.reduce<string[][]>((acc, r) => acc.concat(r.slice(1).map((x, i) => [r[i], x])), []);
const onSegment = (segs: string[][], u: string, v: string) => segs.some(([a, b]) => (a === u && b === v) || (a === v && b === u));
const costOf = (routes: string[][]) => routes.reduce((sum, r) => sum + pathLength(r, pw), 0);
const ROWS = PAIRINGS.map(routes => ({ cost: costOf(routes), route: P_TOTAL + costOf(routes) }));

// Nearest neighbour: go to the nearest unvisited site each time, then return to the start.
function nearest(start: string): string[] {
  const tour = [start];
  const left = LETTERS.filter(x => x !== start);
  while (left.length > 0) {
    const here = tour[tour.length - 1];
    left.sort((a, b) => kw(here, a) - kw(here, b));
    tour.push(left.shift() as string);
  }
  return [...tour, start];
}

// Deleted vertex: minimum spanning tree of the other sites (Prim) plus the two cheapest edges from the deleted site.
function bound(dropped: string) {
  const rest = LETTERS.filter(x => x !== dropped);
  const inside = [rest[0]];
  let mst = 0;
  while (inside.length < rest.length) {
    let best: [number, string] = [Infinity, ''];
    for (const u of inside) for (const v of rest) if (!inside.includes(v) && kw(u, v) < best[0]) best = [kw(u, v), v];
    inside.push(best[1]);
    mst += best[0];
  }
  const spokes = rest.map(x => kw(dropped, x)).sort((a, b) => a - b);
  return { mst, a: spokes[0], b: spokes[1], lower: mst + spokes[0] + spokes[1] };
}

const TEXT = {
  en: {
    label: 'Postman route on graph P and nearest-neighbour tour on the complete graph K',
    postman: 'Chinese postman (graph P)', tsp: 'Travelling salesman (graph K)',
    pairing: 'Pairing of the odd vertices (repeated routes, then route length)', routeFor: 'Route length for',
    start: 'Start of the nearest-neighbour tour', upper: 'Upper bound, tour', drop: 'Deleted vertex',
    lower: 'Lower bound, deleting', cheapest: '(tree without it, plus its two cheapest edges)',
    interval: 'So the minimum weight of a Hamiltonian cycle lies between', and: 'and',
    note: 'Lengths in km. Orange dashed edges are repeated; blue edges form the tour. Odd vertices have a double ring.',
  },
  ru: {
    label: 'Маршрут почтальона на графе P и обход ближайшего соседа на полном графе K',
    postman: 'Китайский почтальон (граф P)', tsp: 'Коммивояжёр (граф K)',
    pairing: 'Разбиение нечётных вершин (повторы, затем длина маршрута)', routeFor: 'Длина маршрута для',
    start: 'Начальная вершина обхода ближайшего соседа', upper: 'Верхняя оценка, обход', drop: 'Удалённая вершина',
    lower: 'Нижняя оценка при удалении', cheapest: '(дерево без неё плюс два самых дешёвых ребра из неё)',
    interval: 'Значит, минимальный вес гамильтонова цикла лежит между', and: 'и',
    note: 'Длины в км. Оранжевые пунктирные рёбра повторяются; синие образуют обход. Нечётные вершины обведены двойным кругом.',
  },
} as const;

export default function RouteLab({ lang }: { lang: Lang }) {
  const t = TEXT[lang];
  const [mode, setMode] = useState<'postman' | 'tsp'>('postman');
  const [pairing, setPairing] = useState(0);
  const [start, setStart] = useState('A');
  const [dropped, setDropped] = useState('A');
  const repeated = segments(PAIRINGS[pairing]);
  const tour = nearest(start);
  const tourSegs = segments([tour]);
  const upper = pathLength(tour, kw);
  const lb = bound(dropped);
  const edges = mode === 'postman' ? P_EDGES : K_EDGES;
  const edgePick = (u: string, v: string) => {
    if (mode === 'postman') {
      return onSegment(repeated, u, v) ? { stroke: '#e0883a', strokeWidth: 4, strokeDasharray: '6 4' } : { stroke: '#c9ced8', strokeWidth: 2 };
    }
    return onSegment(tourSegs, u, v) ? { stroke: '#4f6fd8', strokeWidth: 4 } : { stroke: '#c9ced8', strokeWidth: 1.5 };
  };
  const button = (label: string, active: boolean, onClick: () => void) => (
    <button key={label} type="button" aria-pressed={active} onClick={onClick} style={{ fontWeight: active ? 700 : 400, marginRight: 4, marginBottom: 4 }}>{label}</button>
  );

  return (
    <figure style={{ margin: 0 }}>
      <div style={{ marginBottom: 6 }}>
        {button(t.postman, mode === 'postman', () => setMode('postman'))}
        {button(t.tsp, mode === 'tsp', () => setMode('tsp'))}
      </div>
      <svg viewBox="0 0 320 230" width="100%" style={{ maxWidth: 320 }} role="img" aria-label={t.label}>
        {edges.map(([u, v, w]) => {
          const [x1, y1] = POS[u];
          const [x2, y2] = POS[v];
          return (
            <g key={u + v}>
              <line x1={x1} y1={y1} x2={x2} y2={y2} {...edgePick(u, v)} />
              <text x={(x1 + x2) / 2} y={(y1 + y2) / 2 - 5} textAnchor="middle" fontSize={12} fill="#333">{w}</text>
            </g>
          );
        })}
        {LETTERS.map(x => (
          <g key={x}>
            {mode === 'postman' && ODD.includes(x) && <circle cx={POS[x][0]} cy={POS[x][1]} r={17} fill="none" stroke="#e0883a" strokeWidth={1.5} />}
            <circle cx={POS[x][0]} cy={POS[x][1]} r={12} fill={mode === 'tsp' && x === dropped ? '#e5e7eb' : '#fff'} stroke="#333" strokeWidth={1.5} />
            <text x={POS[x][0]} y={POS[x][1] + 4} textAnchor="middle" fontSize={13} fontWeight={600} fill="#222">{x}</text>
          </g>
        ))}
      </svg>
      {mode === 'postman' ? (
        <div style={{ fontSize: 13, lineHeight: 1.6 }}>
          <div>{t.pairing}:</div>
          {PAIR_NAMES.map((name, i) => button(`${name}: ${ROWS[i].cost} → ${ROWS[i].route}`, pairing === i, () => setPairing(i)))}
          <p style={{ margin: '6px 0' }}>{t.routeFor} {PAIR_NAMES[pairing]}: {P_TOTAL} + {ROWS[pairing].cost} = {ROWS[pairing].route} km</p>
        </div>
      ) : (
        <div style={{ fontSize: 13, lineHeight: 1.6 }}>
          <div>{t.start}:</div>
          {LETTERS.map(x => button(x, start === x, () => setStart(x)))}
          <p style={{ margin: '4px 0' }}>{t.upper} {tour.join('–')} = {upper}</p>
          <div>{t.drop}:</div>
          {LETTERS.map(x => button(x, dropped === x, () => setDropped(x)))}
          <p style={{ margin: '4px 0' }}>{t.lower} {dropped}: {lb.mst} + {lb.a} + {lb.b} = {lb.lower} {t.cheapest}</p>
          <p style={{ margin: '4px 0' }}>{t.interval} {lb.lower} {t.and} {upper}.</p>
        </div>
      )}
      <figcaption style={{ fontSize: 12, lineHeight: 1.5 }}>{t.note}</figcaption>
    </figure>
  );
}
