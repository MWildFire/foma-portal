import ReadableDiagram from '../readable-diagram';
import { useState } from 'react';
import { independenceTable } from './chi-squared-logic';
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
    caption: 'Illustrative year-group / usual-travel counts. Edit the observed counts; the total updates below.',
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
    invalid: 'The table has an empty row or column, or no observations. The displayed 2×3 test is undefined. Remove empty categories and reconsider the degrees of freedom before choosing a reference distribution; no statistic, p-value or decision is given.',
    small: 'At least one expected count is below 5. The usual chi-square approximation is unreliable here; combine categories appropriately or use another justified test. No test decision is displayed.',
    note: 'This test also assumes independent observations and mutually exclusive categories. Shading is limited to the displayed 0–14 window; the reported p-value uses the full reference tail.',
    total: 'Total observations',
  },
  ru: {
    label: 'Распределение χ² с 2 степенями свободы; заштрихована площадь p-значения',
    caption: 'Учебные числа: класс и обычный способ добраться до школы. Меняйте наблюдаемые частоты; сумма обновляется ниже.',
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
    invalid: 'В таблице есть пустая строка или столбец либо нет наблюдений. Показанный тест для 2×3 не определён. Исключите пустые категории и пересчитайте степени свободы перед выбором распределения; статистика, p-значение и решение не выводятся.',
    small: 'Хотя бы одна ожидаемая частота меньше 5. Обычное приближение χ² здесь ненадёжно; осмысленно объедините категории или обоснуйте другой тест. Решение по тесту не выводится.',
    note: 'Нужны также независимые наблюдения и непересекающиеся категории. Закрашена часть хвоста в окне 0–14; показанное p-значение рассчитано для всего хвоста эталонного распределения.',
    total: 'Всего наблюдений',
  },
} as const;

export default function ChiSquaredLab({ lang }: { lang: Lang }) {
  const t = TEXT[lang];
  const [obs, setObs] = useState(START);
  const [alpha, setAlpha] = useState(0.05);

  const { total, expected, statistic: stat, valid, adequate } = independenceTable(obs);
  const p = stat === null ? null : tailP(stat);
  const shownStat = stat === null ? null : Math.min(stat, X_MAX);
  const critical = -2 * Math.log(alpha);

  const grid = Array.from({ length: 141 }, (_, k) => k / 10);
  const curve = 'M' + grid.map(x => `${xPos(x).toFixed(1)} ${yPos(density(x)).toFixed(1)}`).join(' L');
  const tail = shownStat === null ? [] : [shownStat, ...grid.filter(x => x > shownStat)];
  const shade =
    shownStat === null ? null : `M${xPos(shownStat).toFixed(1)} ${BASE} L` +
    tail.map(x => `${xPos(x).toFixed(1)} ${yPos(density(x)).toFixed(1)}`).join(' L') +
    ` L${WIDTH} ${BASE} Z`;

  const setCell = (i: number, j: number, text: string) =>
    setObs(obs.map((row, r) => row.map((v, c) => (r === i && c === j ? Math.min(10000, Math.max(0, Math.round(Number(text) || 0))) : v))));

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
                min={0}
                max={10000}
                step={1}
                value={value}
                onChange={event => setCell(i, j, event.target.value)}
                style={{ width: '100%' }}
              />
              <span style={{ color: 'currentColor', opacity: 0.8 }}>
                {t.expected} = {expected[i][j]?.toFixed(1) ?? '—'}
              </span>
            </label>
          )),
        )}
      </div>
      {valid && <ReadableDiagram lang={lang}><svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} width="100%" style={{ maxWidth: WIDTH, marginTop: 10 }} role="img" aria-label={t.label}>
        <line x1={0} y1={BASE} x2={WIDTH} y2={BASE} stroke="currentColor" strokeWidth={1} />
        {shade !== null && <path d={shade} fill="#e0883a" fillOpacity={0.45} />}
        <path d={curve} fill="none" stroke="#4f6fd8" strokeWidth={2} />
        <line x1={xPos(critical)} y1={10} x2={xPos(critical)} y2={BASE} stroke="currentColor" strokeDasharray="4 3" />
        {shownStat !== null && <line x1={xPos(shownStat)} y1={10} x2={xPos(shownStat)} y2={BASE} stroke="#e0883a" strokeWidth={2} />}
        <text x={xPos(critical) + 4} y={22} fontSize={11} fill="currentColor">
          {t.crit} {critical.toFixed(3)}
        </text>
        {shownStat !== null && stat !== null && <text x={Math.min(WIDTH - 3, xPos(shownStat) + 4)} y={36} textAnchor={shownStat > 10 ? 'end' : 'start'} fontSize={11} fill="#e0883a">
          χ² = {stat.toFixed(3)}{stat > X_MAX ? ' →' : ''}
        </text>}
      </svg></ReadableDiagram>}
      <div style={{ fontSize: 13, lineHeight: 1.6, marginTop: 6 }}>
        {t.total}: {total} · {t.stat}: {stat?.toFixed(3) ?? '—'} · {valid ? t.df : 'df: —'} · {t.p}: {p === null ? '—' : p < 0.001 ? '< 0.001' : p.toFixed(3)}
        <br />
        <strong>{!valid ? t.invalid : adequate && p !== null ? (p < alpha ? t.reject : t.keep) : t.small}</strong>
        <br />{t.note}
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
