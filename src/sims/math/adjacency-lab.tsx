import { useState } from 'react';
import type { Lang } from '../../contract/types';

// The five-vertex graph of the walks topic, with fixed vertex positions. The adjacency matrix A is built from
// the edges; the number of walks of length k between two vertices is the entry of A^k in their row and column.

const LABELS = ['A', 'B', 'C', 'D', 'E'];
const EDGES: [number, number][] = [[0, 1], [0, 2], [1, 2], [1, 3], [2, 3], [3, 4]];
const POS: [number, number][] = [[50, 110], [150, 40], [150, 180], [250, 110], [330, 110]];
const MAX_K = 6;

type Matrix = number[][];

function multiply(X: Matrix, Y: Matrix): Matrix {
  return X.map(row => Y[0].map((_, j) => row.reduce((sum, value, k) => sum + value * Y[k][j], 0)));
}

const ADJ: Matrix = LABELS.map((_, i) =>
  LABELS.map((_, j) => (EDGES.some(([u, v]) => (u === i && v === j) || (u === j && v === i)) ? 1 : 0)),
);

// POWERS[k - 1] is A^k, for k = 1 to MAX_K.
const POWERS: Matrix[] = [ADJ];
for (let k = 2; k <= MAX_K; k++) POWERS.push(multiply(POWERS[k - 2], ADJ));

const TEXT = {
  en: {
    label: 'Five-vertex graph with its adjacency matrix and walk counts',
    matrix: 'Adjacency matrix A',
    start: 'Start vertex',
    end: 'End vertex',
    length: 'Walk length k',
    exact: (k: number, a: string, b: string) => `Walks of length ${k} from ${a} to ${b}`,
    atMost: (k: number, a: string, b: string) => `Walks of length at most ${k} from ${a} to ${b}`,
    note: 'Walks may repeat vertices and edges, so each entry of the power A^k counts all of them.',
  },
  ru: {
    label: 'Граф из пяти вершин с матрицей смежности и числом маршрутов',
    matrix: 'Матрица смежности A',
    start: 'Начальная вершина',
    end: 'Конечная вершина',
    length: 'Длина маршрута k',
    exact: (k: number, a: string, b: string) => `Маршруты длины ${k} из ${a} в ${b}`,
    atMost: (k: number, a: string, b: string) => `Маршруты длины не более ${k} из ${a} в ${b}`,
    note: 'Маршруты могут повторять вершины и рёбра, поэтому каждый элемент степени матрицы A^k учитывает их все.',
  },
} as const;

const cell = { padding: '2px 6px', textAlign: 'center' as const };

function Grid({ matrix, row, col, caption }: { matrix: Matrix; row: number; col: number; caption: string }) {
  return (
    <table style={{ borderCollapse: 'collapse', fontSize: 13 }}>
      <caption style={{ textAlign: 'left', fontWeight: 600 }}>{caption}</caption>
      <thead>
        <tr>
          <th />
          {LABELS.map(label => <th key={label} style={cell}>{label}</th>)}
        </tr>
      </thead>
      <tbody>
        {matrix.map((values, i) => (
          <tr key={LABELS[i]}>
            <th style={cell}>{LABELS[i]}</th>
            {values.map((value, j) => (
              <td key={LABELS[j]} style={{ ...cell, background: i === row && j === col ? '#f6d68a' : undefined }}>
                {value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function AdjacencyLab({ lang }: { lang: Lang }) {
  const t = TEXT[lang];
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(3);
  const [k, setK] = useState(3);

  const exact = POWERS[k - 1][from][to];
  const atMost = POWERS.slice(0, k).reduce((sum, power) => sum + power[from][to], 0);

  return (
    <figure style={{ margin: 0 }}>
      <svg viewBox="0 0 380 220" width="100%" style={{ maxWidth: 380 }} role="img" aria-label={t.label}>
        {EDGES.map(([u, v]) => (
          <line key={`${LABELS[u]}${LABELS[v]}`} x1={POS[u][0]} y1={POS[u][1]} x2={POS[v][0]} y2={POS[v][1]}
            stroke="currentColor" strokeWidth={1.5} />
        ))}
        {POS.map(([x, y], i) => {
          const picked = i === from || i === to;
          return (
            <g key={LABELS[i]}>
              <circle cx={x} cy={y} r={15} fill={picked ? '#4f6fd8' : 'none'} stroke="currentColor" strokeWidth={1.5} />
              <text x={x} y={y + 5} textAnchor="middle" fontSize={14} fill={picked ? '#ffffff' : 'currentColor'}>
                {LABELS[i]}
              </text>
            </g>
          );
        })}
      </svg>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, margin: '8px 0' }}>
        <Grid matrix={ADJ} row={from} col={to} caption={t.matrix} />
        <Grid matrix={POWERS[k - 1]} row={from} col={to} caption={`A^${k}`} />
      </div>
      <label style={{ display: 'inline-block', marginRight: 16 }}>
        {t.start}{' '}
        <select value={from} onChange={event => setFrom(Number(event.target.value))}>
          {LABELS.map((label, i) => <option key={label} value={i}>{label}</option>)}
        </select>
      </label>
      <label style={{ display: 'inline-block' }}>
        {t.end}{' '}
        <select value={to} onChange={event => setTo(Number(event.target.value))}>
          {LABELS.map((label, i) => <option key={label} value={i}>{label}</option>)}
        </select>
      </label>
      <label style={{ display: 'block', marginTop: 8 }}>
        {t.length}: {k}
        <input type="range" min={1} max={MAX_K} step={1} value={k} onChange={event => setK(Number(event.target.value))}
          style={{ width: '100%' }} />
      </label>
      <p style={{ margin: '10px 0 0', lineHeight: 1.6 }}>
        <strong>{t.exact(k, LABELS[from], LABELS[to])}: {exact}</strong>
        <br />
        {t.atMost(k, LABELS[from], LABELS[to])}: {atMost}
      </p>
      <p style={{ fontSize: 13, margin: '4px 0 0', lineHeight: 1.5 }}>{t.note}</p>
    </figure>
  );
}
