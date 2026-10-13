import { useState } from 'react';
import type { Lang } from '../../contract/types';

// Voronoi cells for three sites on a 10 x 10 map. Each grid square takes the colour of its nearest site.
// The dashed lines are the perpendicular bisectors of the site pairs (the cell edges). The red dot is the
// circumcentre of the three sites, which is a Voronoi vertex.

const UNITS = 10;
const SIZE = 300;
const SCALE = SIZE / UNITS;
const GRID = 30;
const CELL = SIZE / GRID;
const COLOURS = ['#4f6fd8', '#e0883a', '#3f9c6b'];
const NAMES = ['A', 'B', 'C'];
const PAIRS: [number, number][] = [[0, 1], [0, 2], [1, 2]];

interface Point {
  x: number;
  y: number;
}

const distance = (p: Point, q: Point) => Math.hypot(p.x - q.x, p.y - q.y);
const toSvg = (p: Point) => ({ x: p.x * SCALE, y: SIZE - p.y * SCALE });

function nearestIndex(p: Point, sites: Point[]): number {
  let best = 0;
  sites.forEach((site, i) => {
    if (distance(p, site) < distance(p, sites[best])) best = i;
  });
  return best;
}

// Centre of the circle through three sites: the Voronoi vertex. Null when the sites lie on one line.
function circumcentre(a: Point, b: Point, c: Point): Point | null {
  const d = 2 * (a.x * (b.y - c.y) + b.x * (c.y - a.y) + c.x * (a.y - b.y));
  if (Math.abs(d) < 1e-9) return null;
  const a2 = a.x * a.x + a.y * a.y;
  const b2 = b.x * b.x + b.y * b.y;
  const c2 = c.x * c.x + c.y * c.y;
  return {
    x: (a2 * (b.y - c.y) + b2 * (c.y - a.y) + c2 * (a.y - b.y)) / d,
    y: (a2 * (c.x - b.x) + b2 * (a.x - c.x) + c2 * (b.x - a.x)) / d,
  };
}

// Perpendicular bisector of p and q, drawn 30 units either side of the midpoint; the SVG clips the rest.
function bisector(p: Point, q: Point): [Point, Point] {
  const mid = { x: (p.x + q.x) / 2, y: (p.y + q.y) / 2 };
  const length = distance(p, q) || 1;
  const dir = { x: -(q.y - p.y) / length, y: (q.x - p.x) / length };
  return [
    toSvg({ x: mid.x - 30 * dir.x, y: mid.y - 30 * dir.y }),
    toSvg({ x: mid.x + 30 * dir.x, y: mid.y + 30 * dir.y }),
  ];
}

const TEXT = {
  en: {
    label: 'Voronoi cells of three sites with their perpendicular bisectors',
    site: 'Site',
    probe: 'Probe point P',
    nearest: 'Nearest site',
    distance: 'distance',
    vertex: 'Voronoi vertex (circumcentre)',
    radius: 'radius',
    none: 'the sites lie on one line, so there is no vertex',
    note: 'Shaded: nearest site. Dashed: perpendicular bisectors (edges). Red dot: vertex.',
  },
  ru: {
    label: 'Ячейки Вороного для трёх пунктов и их серединные перпендикуляры',
    site: 'Пункт',
    probe: 'Пробная точка P',
    nearest: 'Ближайший пункт',
    distance: 'расстояние',
    vertex: 'Вершина Вороного (центр описанной окружности)',
    radius: 'радиус',
    none: 'пункты лежат на одной прямой, вершины нет',
    note: 'Закрашено: ближайший пункт. Пунктир: серединные перпендикуляры (рёбра). Красная точка: вершина.',
  },
} as const;

export default function VoronoiLab({ lang }: { lang: Lang }) {
  const t = TEXT[lang];
  const [sites, setSites] = useState<Point[]>([
    { x: 2, y: 2 },
    { x: 7, y: 3 },
    { x: 4, y: 8 },
  ]);
  const [probe, setProbe] = useState<Point>({ x: 5, y: 5 });

  const moveSite = (index: number, axis: 'x' | 'y', value: number) =>
    setSites(list => list.map((site, i) => (i === index ? { ...site, [axis]: value } : site)));

  const cells = Array.from({ length: GRID * GRID }, (_, k) => {
    const col = k % GRID;
    const row = Math.floor(k / GRID);
    const centre = { x: (col + 0.5) * (UNITS / GRID), y: UNITS - (row + 0.5) * (UNITS / GRID) };
    return { col, row, owner: nearestIndex(centre, sites) };
  });
  const owner = nearestIndex(probe, sites);
  const vertex = circumcentre(sites[0], sites[1], sites[2]);
  const probeAt = toSvg(probe);
  const nearestAt = toSvg(sites[owner]);

  return (
    <figure style={{ margin: 0 }}>
      <svg viewBox={`0 0 ${SIZE} ${SIZE}`} width="100%" style={{ maxWidth: SIZE }} role="img" aria-label={t.label}>
        {cells.map(cell => (
          <rect key={`${cell.col}-${cell.row}`} x={cell.col * CELL} y={cell.row * CELL} width={CELL} height={CELL} fill={COLOURS[cell.owner]} fillOpacity={0.2} />
        ))}
        {PAIRS.map(([i, j]) => {
          const [from, to] = bisector(sites[i], sites[j]);
          return <line key={`${i}${j}`} x1={from.x} y1={from.y} x2={to.x} y2={to.y} stroke="#222" strokeDasharray="5 4" />;
        })}
        <line x1={probeAt.x} y1={probeAt.y} x2={nearestAt.x} y2={nearestAt.y} stroke="#777" strokeDasharray="2 3" />
        {vertex && <circle cx={toSvg(vertex).x} cy={toSvg(vertex).y} r={4} fill="#c0392b" />}
        {sites.map((site, i) => (
          <g key={i}>
            <circle cx={toSvg(site).x} cy={toSvg(site).y} r={5} fill={COLOURS[i]} stroke="#fff" strokeWidth={1.5} />
            <text x={toSvg(site).x + 7} y={toSvg(site).y - 7} fontSize={13}>{NAMES[i]}</text>
          </g>
        ))}
        <circle cx={probeAt.x} cy={probeAt.y} r={3} fill="#111" />
      </svg>
      <figcaption style={{ fontSize: 13, lineHeight: 1.5, marginTop: 6 }}>
        {t.nearest}: {NAMES[owner]}, {t.distance} {distance(probe, sites[owner]).toFixed(2)}
        <br />
        {t.vertex}: {vertex ? `(${vertex.x.toFixed(2)}, ${vertex.y.toFixed(2)}), ${t.radius} ${distance(vertex, sites[0]).toFixed(2)}` : t.none}
        <br />
        {t.note}
      </figcaption>
      {sites.map((site, i) => (
        <div key={i} style={{ display: 'flex', gap: 8, marginTop: 4 }}>
          {(['x', 'y'] as const).map(axis => (
            <label key={axis} style={{ flex: 1, fontSize: 13 }}>
              {t.site} {NAMES[i]} {axis}: {site[axis].toFixed(1)}
              <input type="range" min={0} max={10} step={0.1} value={site[axis]} onChange={event => moveSite(i, axis, Number(event.target.value))} style={{ width: '100%' }} />
            </label>
          ))}
        </div>
      ))}
      <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
        {(['x', 'y'] as const).map(axis => (
          <label key={axis} style={{ flex: 1, fontSize: 13 }}>
            {t.probe} {axis}: {probe[axis].toFixed(1)}
            <input type="range" min={0} max={10} step={0.1} value={probe[axis]} onChange={event => setProbe({ ...probe, [axis]: Number(event.target.value) })} style={{ width: '100%' }} />
          </label>
        ))}
      </div>
    </figure>
  );
}
