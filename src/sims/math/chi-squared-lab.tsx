import ReadableDiagram from '../readable-diagram';
import { useState } from 'react';
import type { Lang } from '../../contract/types';

// Chi-squared test of independence for a 2 x 3 table, so df = (2 - 1)(3 - 1) = 2. For 2 degrees of freedom the
// upper tail is exact: P(chi-squared > x) = e^(-x/2), and the critical value at level alpha is -2 ln(alpha).

const START = [
  [28, 9, 23],
  [22, 6, 32],
];
const WIDTH = 320;
const HEIGHT = 170;
const BASE = HEIGHT - 24;
const X_MAX = 14;
const Y_MAX = 0.5; // the density of chi-squared with 2 df peaks at 0.5, at x = 0

const tailP = (x: number) => Math.exp(-x / 2);
const density = (x: number) => 0.5 * Math.exp(-x / 2);
const xPos = (x: number) => (x / X_MAX) * WIDTH;
const yPos = (y: number) => BASE - (y / Y_MAX) * (BASE - 14);

const TEXT = {
  en: {
    label: 'Chi-squared distribution with 2 degrees of freedom, with the p-value shaded',
    caption: 'Year group by usual travel to school (120 students). Edit the observed counts.',
    rows: ['IB1', 'IB2'],
    cols: ['Bus', 'Walk', 'Car'],
    expected: 'expected E',
    stat: 'Chi-squared statistic',
    df: 'df = (2 − 1)(3 − 1) = 2',
    p: 'p-value (shaded area)',
    alpha: 'Significance level α',
    crit: 'Critical value',
    reject: 'p < α: reject H0',
    keep: 'p ≥ α: do not reject H0',
  },
  ru: {
    label: 'Распределение χ² с 2 степенями свободы; заштрихована площадь p-значения',
    caption: 'Класс и обычный способ добраться до школы (120 учеников). Меняйте наблюдаемые числа.',
    rows: ['IB1', 'IB2'],
    cols: ['Автобус', 'Пешком', 'Машина'],
    expected: 'ожид. E',
    stat: 'Статистика χ²',
    df: 'df = ν = (2 − 1)(3 − 1) = 2',
    p: 'p-значение (заштрихованная площадь)',
    alpha: 'Уровень значимости α',
    crit: 'Критическое значение',
    reject: 'p < α: отклоняем H0',
    keep: 'p ≥ α: H0 не отклоняем',
  },
} as const;

export default function ChiSquaredLab({ lang }: { lang: Lang }) {
  const t = TEXT[lang];
  const [obs, setObs] = useState(START);
  const [alpha, setAlpha] = useState(0.05);

  const rowTotals = obs.map(row => row.reduce((sum, v) => sum + v, 0));
  const colTotals = obs[0].map((_, j) => obs.reduce((sum, row) => sum + row[j], 0));
  const total = rowTotals.reduce((sum, v) => sum + v, 0);
  const expected = obs.map((_, i) => colTotals.map(col => (rowTotals[i] * col) / total));
  const stat = obs.reduce(
    (sum, row, i) => sum + row.reduce((s, o, j) => s + (o - expected[i][j]) ** 2 / expected[i][j], 0),
    0,
  );
  const p = tailP(stat);
  const critical = -2 * Math.log(alpha);

  const grid = Array.from({ length: 141 }, (_, k) => k / 10);
  const curve = 'M' + grid.map(x => `${xPos(x).toFixed(1)} ${yPos(density(x)).toFixed(1)}`).join(' L');
  const tail = [stat, ...grid.filter(x => x > stat)];
  const shade =
    `M${xPos(stat).toFixed(1)} ${BASE} L` +
    tail.map(x => `${xPos(x).toFixed(1)} ${yPos(density(x)).toFixed(1)}`).join(' L') +
    ` L${WIDTH} ${BASE} Z`;

  const setCell = (i: number, j: number, text: string) =>
    setObs(obs.map((row, r) => row.map((v, c) => (r === i && c === j ? Math.max(1, Math.round(Number(text) || 1)) : v))));

  return (
    <figure style={{ margin: 0 }}>
      <figcaption style={{ fontSize: 13, marginBottom: 6 }}>{t.caption}<br />{lang === 'en' ? 'H0: year group and travel mode are independent. H1: they are associated.' : 'H0: класс и способ поездки независимы. H1: между ними есть связь.'}</figcaption>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
        {obs.map((row, i) =>
          row.map((value, j) => (
            <label key={`${i}-${j}`} style={{ fontSize: 13 }}>
              {t.rows[i]} · {t.cols[j]}
              <input
                type="number"
                min={1}
                step={1}
                value={value}
                onChange={event => setCell(i, j, event.target.value)}
                style={{ width: '100%' }}
              />
              <span style={{ color: '#666' }}>
                {t.expected} = {expected[i][j].toFixed(1)}
              </span>
            </label>
          )),
        )}
      </div>
      <ReadableDiagram lang={lang}><svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} width="100%" style={{ maxWidth: WIDTH, marginTop: 10 }} role="img" aria-label={t.label}>
        <line x1={0} y1={BASE} x2={WIDTH} y2={BASE} stroke="currentColor" strokeWidth={1} />
        <path d={shade} fill="#e0883a" fillOpacity={0.45} />
        <path d={curve} fill="none" stroke="#4f6fd8" strokeWidth={2} />
        <line x1={xPos(critical)} y1={10} x2={xPos(critical)} y2={BASE} stroke="currentColor" strokeDasharray="4 3" />
        <line x1={xPos(stat)} y1={10} x2={xPos(stat)} y2={BASE} stroke="#e0883a" strokeWidth={2} />
        <text x={xPos(critical) + 4} y={22} fontSize={11} fill="currentColor">
          {t.crit} {critical.toFixed(3)}
        </text>
        <text x={xPos(stat) + 4} y={36} fontSize={11} fill="#e0883a">
          χ² = {stat.toFixed(3)}
        </text>
      </svg></ReadableDiagram>
      <div style={{ fontSize: 13, lineHeight: 1.6, marginTop: 6 }}>
        {t.stat}: {stat.toFixed(3)} · {t.df} · {t.p}: {p.toFixed(3)}
        <br />
        <strong>{p < alpha ? t.reject : t.keep}</strong>
      </div>
      <label style={{ display: 'block', marginTop: 8 }}>
        {t.alpha}: {alpha.toFixed(2)}
        <input
          type="range"
          min={0.01}
          max={0.1}
          step={0.01}
          value={alpha}
          onChange={event => setAlpha(Number(event.target.value))}
          style={{ width: '100%' }}
        />
      </label>
    </figure>
  );
}
