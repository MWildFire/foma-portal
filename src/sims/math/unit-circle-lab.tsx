import { useState } from 'react';
import type { Lang } from '../../contract/types';

// Unit circle with an angle control in degrees or radians. The point (cos θ, sin θ) gives sine and cosine; the line
// from the centre through x = 1 reaches height tan θ; the table marks the signs of the quadrant the angle is in.

const SIZE = 300;
const CENTRE = 150;
const RADIUS = 110; // pixels for one unit
const ROMAN = ['I', 'II', 'III', 'IV'];

// Signs of sin, cos and tan in quadrants I to IV.
const SIGNS = [
  [true, true, true],
  [true, false, false],
  [false, false, true],
  [false, true, false],
];

const TEXT = {
  en: {
    label: 'Unit circle showing cos, sin and tan of an angle',
    unit: 'Angle unit',
    degrees: 'degrees',
    radians: 'radians',
    rad: 'rad',
    angle: 'Angle θ',
    quadrant: 'Quadrant',
    onAxis: 'on an axis',
    undefinedTan: 'undefined (cos θ = 0)',
    table: 'Signs by quadrant',
    headers: ['Quadrant', 'sin θ', 'cos θ', 'tan θ'],
    cos: 'cos θ',
    sin: 'sin θ',
    tan: 'tan θ',
  },
  ru: {
    label: 'Единичная окружность с cos, sin и tan угла',
    unit: 'Единица угла',
    degrees: 'градусы',
    radians: 'радианы',
    rad: 'рад',
    angle: 'Угол θ',
    quadrant: 'Четверть',
    onAxis: 'на оси',
    undefinedTan: 'не определён (cos θ = 0)',
    table: 'Знаки по четвертям',
    headers: ['Четверть', 'sin θ', 'cos θ', 'tan θ'],
    cos: 'cos θ',
    sin: 'sin θ',
    tan: 'tan θ',
  },
} as const;

const CELL = { padding: '2px 8px', textAlign: 'center' as const };
const fix = (value: number) => (Math.abs(value) < 0.0005 ? 0 : value).toFixed(3);
const px = (x: number) => CENTRE + x * RADIUS;
const py = (y: number) => CENTRE - y * RADIUS; // SVG y grows downwards

export default function UnitCircleLab({ lang }: { lang: Lang }) {
  const t = TEXT[lang];
  const [inRadians, setInRadians] = useState(false);
  const [degrees, setDegrees] = useState(120);

  const theta = (degrees * Math.PI) / 180;
  const cos = Math.cos(theta);
  const sin = Math.sin(theta);
  const tan = Math.abs(cos) < 0.0005 ? null : sin / cos; // cos shows as 0.000, so tan is undefined
  const turn = ((degrees % 360) + 360) % 360;
  const part = turn % 90;
  const onAxis = Math.min(part, 90 - part) < 0.5;
  const quadrant = Math.floor(turn / 90);
  const value = inRadians ? theta : degrees;

  const pointX = px(cos);
  const pointY = py(sin);
  const tanY = tan === null ? null : py(Math.max(-1.4, Math.min(1.4, tan)));

  return (
    <figure style={{ margin: 0 }}>
      <svg viewBox={`0 0 ${SIZE} ${SIZE}`} width="100%" style={{ maxWidth: SIZE }} role="img" aria-label={t.label}>
        <line x1={0} y1={CENTRE} x2={SIZE} y2={CENTRE} stroke="#999" />
        <line x1={CENTRE} y1={0} x2={CENTRE} y2={SIZE} stroke="#999" />
        <circle cx={CENTRE} cy={CENTRE} r={RADIUS} fill="none" stroke="currentColor" strokeWidth={1.5} />
        {degrees > 0 && degrees < 360 && (
          <path d={`M ${px(1)} ${py(0)} A ${RADIUS} ${RADIUS} 0 ${theta > Math.PI ? 1 : 0} 0 ${pointX} ${pointY}`} fill="none" stroke="#3a9d6a" strokeWidth={3} />
        )}
        {tanY !== null && <line x1={CENTRE} y1={CENTRE} x2={px(1)} y2={tanY} stroke="#3a9d6a" strokeDasharray="4 3" />}
        {tanY !== null && <text x={px(1) + 4} y={tanY} fontSize={12}>{t.tan}</text>}
        <line x1={CENTRE} y1={CENTRE} x2={pointX} y2={pointY} stroke="#4f6fd8" strokeWidth={2} />
        <line x1={pointX} y1={pointY} x2={pointX} y2={CENTRE} stroke="#e0883a" strokeDasharray="4 3" />
        <line x1={pointX} y1={pointY} x2={CENTRE} y2={pointY} stroke="#e0883a" strokeDasharray="4 3" />
        <circle cx={pointX} cy={pointY} r={4} fill="#e0883a" />
        <text x={pointX} y={CENTRE + 16} textAnchor="middle" fontSize={12}>{t.cos}</text>
        <text x={CENTRE - 8} y={pointY + 4} textAnchor="end" fontSize={12}>{t.sin}</text>
      </svg>
      <figcaption style={{ fontSize: 13, lineHeight: 1.6 }}>
        {t.angle}: {inRadians ? `${value.toFixed(2)} ${t.rad}` : `${value}°`} · {t.quadrant}:{' '}
        {onAxis ? t.onAxis : ROMAN[quadrant]}
        <br />
        {t.cos} = {fix(cos)} · {t.sin} = {fix(sin)} · {t.tan} = {tan === null ? t.undefinedTan : fix(tan)}
      </figcaption>
      <table style={{ marginTop: 8, borderCollapse: 'collapse', fontSize: 13 }}>
        <caption style={{ textAlign: 'left' }}>{t.table}</caption>
        <thead>
          <tr>
            {t.headers.map(header => <th key={header} style={CELL}>{header}</th>)}
          </tr>
        </thead>
        <tbody>
          {SIGNS.map((signs, index) => {
            const active = !onAxis && index === quadrant;
            return (
              <tr key={ROMAN[index]} style={{ fontWeight: active ? 700 : 400, background: active ? '#dfe6fb' : 'transparent' }}>
                <td style={CELL}>{ROMAN[index]}</td>
                {signs.map((positive, column) => <td key={column} style={CELL}>{positive ? '+' : '−'}</td>)}
              </tr>
            );
          })}
        </tbody>
      </table>
      <label style={{ display: 'block', marginTop: 8 }}>
        {t.unit}:{' '}
        <select
          value={inRadians ? 'rad' : 'deg'}
          onChange={event => {
            const next = event.target.value === 'rad';
            setInRadians(next);
            if (!next) setDegrees(Math.round(degrees));
          }}
        >
          <option value="deg">{t.degrees}</option>
          <option value="rad">{t.radians}</option>
        </select>
      </label>
      <label style={{ display: 'block', marginTop: 4 }}>
        {t.angle}: {inRadians ? value.toFixed(2) : value}
        <input
          type="range"
          min={0}
          max={inRadians ? 2 * Math.PI : 360}
          step={inRadians ? 0.01 : 1}
          value={value}
          onChange={event => {
            const next = Number(event.target.value);
            setDegrees(inRadians ? (next * 180) / Math.PI : next);
          }}
          style={{ width: '100%' }}
        />
      </label>
    </figure>
  );
}
