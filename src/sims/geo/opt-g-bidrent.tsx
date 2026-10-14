import { useState } from 'react';
import type { Lang } from '../../contract/types';

// Illustrative bid-rent model (a teaching model, not data for any real city). Each land use can pay a rent that falls in a
// straight line with distance from the CBD. The intercepts and slopes are invented to show the mechanism.

type Use = 'office' | 'retail' | 'housing';
type Intercepts = Record<Use, number>;
interface Zone { use: Use; from: number; to: number }

const USES: Use[] = ['office', 'retail', 'housing'];
const NAME: Record<Use, { en: string; ru: string }> = {
  office: { en: 'Offices', ru: 'Офисы' },
  retail: { en: 'Retail', ru: 'Торговля' },
  housing: { en: 'Housing', ru: 'Жильё' },
};
const COLOUR: Record<Use, string> = { office: '#2f5d8a', retail: '#c2652a', housing: '#3c7d4f' };

// Rent lost per km when transport cost is 1. Offices depend most on central access, so their curve is the steepest.
const SLOPE: Record<Use, number> = { office: 30, retail: 20, housing: 8 };

const MAX_KM = 10;
const MAX_RENT = 500;
const SAMPLE_KM = 0.05;

// Plot area inside the 340 x 236 viewBox.
const PLOT = { left: 44, right: 330, top: 26, bottom: 196 };

function rentOf(use: Use, km: number, intercepts: Intercepts, transport: number): number {
  return Math.max(0, intercepts[use] - SLOPE[use] * transport * km);
}

// The use that can pay the most at this distance, or null when no use can pay anything.
function winnerAt(km: number, intercepts: Intercepts, transport: number): Use | null {
  let winner: Use | null = null;
  let top = 0;
  for (const use of USES) {
    const value = rentOf(use, km, intercepts, transport);
    if (value > top) {
      top = value;
      winner = use;
    }
  }
  return winner;
}

// Contiguous distance ranges in which one use is the highest bidder, sampled every SAMPLE_KM.
function zonesOf(intercepts: Intercepts, transport: number): Zone[] {
  const zones: Zone[] = [];
  const steps = Math.round(MAX_KM / SAMPLE_KM);
  for (let i = 0; i <= steps; i++) {
    const km = Math.round(i * SAMPLE_KM * 100) / 100;
    const use = winnerAt(km, intercepts, transport);
    if (use === null) continue;
    const last = zones[zones.length - 1];
    if (last && last.use === use && last.to >= km - SAMPLE_KM - 1e-9) {
      last.to = km;
    } else {
      zones.push({ use, from: km, to: km });
    }
  }
  return zones;
}

export default function BidRentSim({ lang }: { lang: Lang }) {
  const ru = lang === 'ru';
  const text = (en: string, russian: string): string => (ru ? russian : en);
  const num = (value: number, digits: number): string => {
    const fixed = value.toFixed(digits);
    return ru ? fixed.replace('.', ',') : fixed;
  };

  const [transport, setTransport] = useState(1);   // transport cost multiplier
  const [access, setAccess] = useState(50);        // accessibility of the CBD, 0 to 100
  const [demand, setDemand] = useState(1);         // demand for central land, multiplier

  const intercepts: Intercepts = {
    office: 300 * demand + (access - 50),
    retail: 240 + (access - 50) * 0.5,
    housing: 150,
  };

  const zones = zonesOf(intercepts, transport);
  // Each zone runs from the midpoint with the previous zone to the midpoint with the next one.
  const edges = zones.map((zone, index) => ({
    use: zone.use,
    start: index === 0 ? 0 : (zones[index - 1].to + zone.from) / 2,
    end: index === zones.length - 1 ? zone.to : (zone.to + zones[index + 1].from) / 2,
  }));

  const xOf = (km: number): number => PLOT.left + (km / MAX_KM) * (PLOT.right - PLOT.left);
  const yOf = (rent: number): number => PLOT.bottom - (rent / MAX_RENT) * (PLOT.bottom - PLOT.top);

  const curvePoints = (use: Use): string => {
    const points: string[] = [];
    for (let km = 0; km <= MAX_KM + 1e-9; km += 0.25) {
      points.push(`${xOf(km).toFixed(1)},${yOf(rentOf(use, km, intercepts, transport)).toFixed(1)}`);
    }
    return points.join(' ');
  };

  const rangesOf = (use: Use): string => {
    const own = edges.filter(edge => edge.use === use);
    if (own.length === 0) return text('no zone within 10 km', 'нет зоны в пределах 10 км');
    return own.map(edge => `${num(edge.start, 1)}–${num(edge.end, 1)} ${text('km', 'км')}`).join(', ');
  };

  const rowStyle = { display: 'flex', flexDirection: 'column' as const, gap: 4, fontSize: 14 };

  return (
    <section style={{ maxWidth: 420 }}>
      <p style={{ margin: '0 0 8px', fontWeight: 600 }}>
        {text(
          'This is a teaching model with illustrative parameters, not data for any real city.',
          'Это учебная модель с условными параметрами, а не данные о каком-либо реальном городе.',
        )}
      </p>
      <p style={{ margin: '0 0 12px', fontSize: 13, lineHeight: 1.5 }}>
        {text(
          'The starting rents at the CBD and the slopes are invented to show the mechanism.',
          'Базовая рента в центре и наклоны кривых заданы условно, чтобы показать механизм.',
        )}
      </p>
      <svg
        viewBox="0 0 340 236"
        width="100%"
        role="img"
        aria-label={text(
          'Rent curves for offices, retail and housing against distance from the CBD',
          'Кривые ренты офисов, торговли и жилья в зависимости от расстояния до CBD',
        )}
        style={{ display: 'block' }}
      >
        {edges.map((edge, index) => (
          <rect
            key={`zone-${index}`}
            x={xOf(edge.start)}
            y={PLOT.top}
            width={Math.max(0, xOf(edge.end) - xOf(edge.start))}
            height={PLOT.bottom - PLOT.top}
            fill={COLOUR[edge.use]}
            fillOpacity={0.08}
          />
        ))}
        {[0, 100, 200, 300, 400, 500].map(rent => (
          <g key={`rent-${rent}`}>
            <line x1={PLOT.left} x2={PLOT.right} y1={yOf(rent)} y2={yOf(rent)} stroke="currentColor" strokeOpacity={0.12} />
            <text x={PLOT.left - 4} y={yOf(rent) + 3} fontSize="9" textAnchor="end" fill="currentColor">{rent}</text>
          </g>
        ))}
        {[0, 2, 4, 6, 8, 10].map(km => (
          <text key={`km-${km}`} x={xOf(km)} y={PLOT.bottom + 12} fontSize="9" textAnchor="middle" fill="currentColor">{km}</text>
        ))}
        {edges.slice(0, -1).map((edge, index) => (
          <line
            key={`boundary-${index}`}
            x1={xOf(edge.end)}
            x2={xOf(edge.end)}
            y1={PLOT.top}
            y2={PLOT.bottom}
            stroke="currentColor"
            strokeDasharray="4 3"
            strokeWidth={1}
          />
        ))}
        <line x1={PLOT.left} x2={PLOT.right} y1={PLOT.bottom} y2={PLOT.bottom} stroke="currentColor" strokeWidth={1.5} />
        <line x1={PLOT.left} x2={PLOT.left} y1={PLOT.top} y2={PLOT.bottom} stroke="currentColor" strokeWidth={1.5} />
        {USES.map(use => (
          <polyline
            key={use}
            points={curvePoints(use)}
            fill="none"
            stroke={COLOUR[use]}
            strokeWidth={2.5}
            strokeLinejoin="round"
          />
        ))}
        <text x={PLOT.left} y={PLOT.top - 9} fontSize="9" fill="currentColor">{text('Rent, units', 'Рента, усл. ед.')}</text>
        <text x={(PLOT.left + PLOT.right) / 2} y={PLOT.bottom + 26} fontSize="9" textAnchor="middle" fill="currentColor">
          {text('Distance from the CBD, km', 'Расстояние от CBD, км')}
        </text>
      </svg>

      <ul style={{ display: 'flex', flexWrap: 'wrap', gap: 12, listStyle: 'none', padding: 0, margin: '8px 0', fontSize: 14 }}>
        {USES.map(use => (
          <li key={use} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span aria-hidden="true" style={{ display: 'inline-block', width: 14, height: 4, background: COLOUR[use] }} />
            {NAME[use][lang]}
          </li>
        ))}
      </ul>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, margin: '12px 0' }}>
        <label style={rowStyle}>
          <span>
            {text('Transport cost per km', 'Стоимость транспорта на км')}: <strong>{num(transport, 1)}</strong>
          </span>
          <input
            type="range"
            min={0.5}
            max={2}
            step={0.1}
            value={transport}
            onChange={event => setTransport(Number(event.target.value))}
            style={{ width: '100%' }}
          />
        </label>
        <label style={rowStyle}>
          <span>
            {text('Accessibility of the CBD', 'Доступность центра')}: <strong>{access}</strong>
          </span>
          <input
            type="range"
            min={0}
            max={100}
            step={5}
            value={access}
            onChange={event => setAccess(Number(event.target.value))}
            style={{ width: '100%' }}
          />
        </label>
        <label style={rowStyle}>
          <span>
            {text('Demand for central land', 'Спрос на центральную землю')}: <strong>{num(demand, 1)}</strong>
          </span>
          <input
            type="range"
            min={0.5}
            max={1.5}
            step={0.1}
            value={demand}
            onChange={event => setDemand(Number(event.target.value))}
            style={{ width: '100%' }}
          />
        </label>
      </div>

      <ul style={{ fontSize: 14, paddingLeft: 18, margin: 0 }}>
        {USES.map(use => (
          <li key={use}>
            {NAME[use][lang]}: {rangesOf(use)}
          </li>
        ))}
      </ul>
      <p style={{ fontSize: 13, margin: '8px 0 0' }}>
        {text(
          'Each curve shows the rent a use can pay at each distance. The highest curve wins the land, so the crossing points are the zone boundaries.',
          'Каждая кривая показывает, какую ренту вид использования может заплатить на данном расстоянии. Выше всего кривая, которая побеждает в торгах за участок, поэтому точки пересечения — это границы зон.',
        )}
      </p>
    </section>
  );
}
