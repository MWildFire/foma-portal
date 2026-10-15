import ReadableDiagram from '../readable-diagram';
import { useState } from 'react';
import type { Lang } from '../../contract/types';
import { USES, MAX_KM, interceptsOf, rentOf, zonesOf, type Use } from './opt-g-bidrent-logic';

// Illustrative bid-rent model (a teaching model, not data for any real city). Each land use can pay a rent that falls in a
// straight line with distance from the CBD. The intercepts and slopes are invented to show the mechanism.

const NAME: Record<Use, { en: string; ru: string }> = {
  commercial: { en: 'Retail and offices', ru: 'Торговля и офисы' },
  industry: { en: 'Industry', ru: 'Промышленность' },
  housing: { en: 'Housing', ru: 'Жильё' },
  farming: { en: 'Farming', ru: 'Сельское хозяйство' },
};
const COLOUR: Record<Use, string> = { commercial: '#2f5d8a', industry: '#c2652a', housing: '#3c7d4f', farming: '#8c6d31' };
const MAX_RENT = 650;
const PLOT = { left: 44, right: 330, top: 26, bottom: 196 };

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

  const intercepts = interceptsOf(demand, access);

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
          'Teaching adaptation of bid-rent theory: retail and offices → industry → housing → farming. Rents and slopes are illustrative; farming is a constant outside option. The controls can change or remove zones.',
          'Учебная адаптация теории бид-ренты: торговля и офисы → промышленность → жильё → сельское хозяйство. Рента и наклоны условные; сельское хозяйство — постоянная внешняя альтернатива. Ползунки могут менять или убирать зоны.',
        )}
      </p>
      <ReadableDiagram lang={lang}><svg
        viewBox="0 0 340 236"
        width="100%"
        role="img"
        aria-label={text(
          'Rent curves for retail and offices, industry, housing and farming against distance from the CBD',
          'Кривые ренты торговли и офисов, промышленности, жилья и сельского хозяйства в зависимости от расстояния до CBD',
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
        {[0, 100, 200, 300, 400, 500, 600].map(rent => (
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
      </svg></ReadableDiagram>

      <p style={{ fontSize: 13 }}>{text('Urban ordering: Rodrigue et al., The Geography of Transport Systems, 3rd ed., chapter 6, pp. 202–203. Grouping retail with offices and adding farming are assumptions of this teaching adaptation.', 'Городской порядок: Rodrigue и др., The Geography of Transport Systems, 3-е изд., глава 6, с. 202–203. Объединение торговли с офисами и добавление сельского хозяйства — допущения этой учебной адаптации.')}</p>
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
