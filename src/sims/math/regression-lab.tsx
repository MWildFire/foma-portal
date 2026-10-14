import { useState } from 'react';
import type { Lang } from '../../contract/types';
import { DATA, NAMES, leastSquares, predict } from './regression-logic';
import type { DataSet, Model } from './regression-logic';

// Least-squares fits to two small data sets, with coefficients from the normal equations (see regression-logic.ts),
// so the sum of squared residuals (SSR) is the smallest possible for each model. The sliders draw a hand-chosen line
// for comparison.

const W = 320;
const H = 220;

// Axis titles take their units from the data set names: x first, then y.
const AXES: Record<DataSet, Record<Lang, [string, string]>> = {
  plants: { en: ['fertiliser (g)', 'height (cm)'], ru: ['удобрение (г)', 'высота (см)'] },
  revision: { en: ['hours', 'mock score (%)'], ru: ['часы', 'пробный балл (%)'] },
};

const TEXT = {
  en: {
    label: 'Scatter diagram with a least-squares model, its residuals and a hand-drawn line',
    data: 'Data set',
    plants: 'Plants: fertiliser (g) and height (cm)',
    revision: 'Revision: hours and mock score (%)',
    model: 'Model',
    linear: 'Linear: y = ax + b',
    log: 'Logarithmic: y = a + b ln x',
    quad: 'Quadratic: y = ax² + bx + c',
    coef: 'Coefficients',
    r2: 'R²',
    r: 'r (linear model)',
    ssr: 'Sum of squared residuals',
    slope: 'Your gradient',
    icpt: 'Your intercept',
    yours: 'Your line: sum of squared residuals',
    legend: 'Blue: model. Orange dots: data. Red bars: residuals. Grey dashed: your line.',
    note: 'Red bars are residuals. Least squares makes the sum of their squares as small as possible.',
  },
  ru: {
    label: 'Диаграмма рассеяния с моделью наименьших квадратов, остатками и прямой, проведённой вручную',
    data: 'Набор данных',
    plants: 'Растения: удобрение (г) и высота (см)',
    revision: 'Подготовка: часы и пробный балл (%)',
    model: 'Модель',
    linear: 'Линейная: y = ax + b',
    log: 'Логарифмическая: y = a + b ln x',
    quad: 'Квадратичная: y = ax² + bx + c',
    coef: 'Коэффициенты',
    r2: 'R²',
    r: 'r (линейная модель)',
    ssr: 'Сумма квадратов остатков',
    slope: 'Ваш угловой коэффициент',
    icpt: 'Ваш свободный член',
    yours: 'Ваша прямая: сумма квадратов остатков',
    legend: 'Синим: модель. Оранжевые точки: данные. Красные отрезки: остатки. Серый пунктир: ваша прямая.',
    note: 'Красные отрезки — остатки. Метод наименьших квадратов делает сумму их квадратов как можно меньше.',
  },
} as const;

export default function RegressionLab({ lang }: { lang: Lang }) {
  const t = TEXT[lang];
  const [set, setSet] = useState<DataSet>('plants');
  const [model, setModel] = useState<Model>('linear');
  const [slope, setSlope] = useState(1);
  const [icpt, setIcpt] = useState(0);

  const d = DATA[set];
  const [xTitle, yTitle] = AXES[set][lang];
  const coef = leastSquares(model, d.x, d.y);
  const fitted = d.x.map(x => predict(model, coef, x));
  const mean = d.y.reduce((sum, y) => sum + y, 0) / d.y.length;
  const ssr = d.y.reduce((sum, y, i) => sum + (y - fitted[i]) ** 2, 0);
  const sst = d.y.reduce((sum, y) => sum + (y - mean) ** 2, 0);
  const r2 = 1 - ssr / sst;
  const r = Math.sign(coef[0]) * Math.sqrt(r2); // the linear basis is [x, 1], so coef[0] is the slope
  const yours = d.y.reduce((sum, y, i) => sum + (y - (slope * d.x[i] + icpt)) ** 2, 0);

  const sx = (x: number) => 30 + (x / d.xMax) * (W - 40);
  const sy = (y: number) => H - 24 - (y / d.yMax) * (H - 40);
  const curve = Array.from({ length: 41 }, (_, i) => 1 + (i / 40) * (d.xMax - 1));
  const path = curve.map(x => `${sx(x)},${sy(predict(model, coef, x))}`).join(' ');

  return (
    <figure style={{ margin: 0 }}>
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ maxWidth: W, overflow: 'hidden' }} role="img" aria-label={t.label}>
        <line x1={sx(0)} y1={sy(0)} x2={sx(d.xMax)} y2={sy(0)} stroke="currentColor" strokeWidth={1} />
        <line x1={sx(0)} y1={sy(0)} x2={sx(0)} y2={sy(d.yMax)} stroke="currentColor" strokeWidth={1} />
        {d.x.map((x, i) => <line key={`e${i}`} x1={sx(x)} y1={sy(d.y[i])} x2={sx(x)} y2={sy(fitted[i])} stroke="#d64545" strokeWidth={2} />)}
        <line x1={sx(0)} y1={sy(icpt)} x2={sx(d.xMax)} y2={sy(slope * d.xMax + icpt)} stroke="#888" strokeDasharray="4 3" />
        <polyline points={path} fill="none" stroke="#4f6fd8" strokeWidth={2} />
        {d.x.map((x, i) => <circle key={`p${i}`} cx={sx(x)} cy={sy(d.y[i])} r={3.5} fill="#e0883a" />)}
        <text x={W / 2} y={H - 4} textAnchor="middle" fontSize={11} fill="currentColor">{xTitle}</text>
        <text x={sx(0) + 4} y={10} fontSize={11} fill="currentColor">{yTitle}</text>
      </svg>
      <figcaption style={{ fontSize: 13, lineHeight: 1.6 }}>
        {t.coef}: {coef.map((v, i) => `${NAMES[model][i]} = ${v.toFixed(2)}`).join(', ')} · {t.r2}: {r2.toFixed(3)} · {t.ssr}: {ssr.toFixed(2)}
        {model === 'linear' ? <> · {t.r}: {r.toFixed(3)}</> : null}
        <br />
        {t.yours}: {yours.toFixed(2)}
        <br />
        {t.legend}
        <br />
        {t.note}
      </figcaption>
      <label style={{ display: 'block', marginTop: 8 }}>
        {t.data}{' '}
        <select value={set} onChange={event => setSet(event.target.value as DataSet)}>
          <option value="plants">{t.plants}</option>
          <option value="revision">{t.revision}</option>
        </select>
      </label>
      <label style={{ display: 'block', marginTop: 4 }}>
        {t.model}{' '}
        <select value={model} onChange={event => setModel(event.target.value as Model)}>
          <option value="linear">{t.linear}</option>
          <option value="log">{t.log}</option>
          <option value="quad">{t.quad}</option>
        </select>
      </label>
      <label style={{ display: 'block', marginTop: 8 }}>
        {t.slope}: {slope.toFixed(2)}
        <input type="range" min={0} max={10} step={0.05} value={slope} onChange={event => setSlope(Number(event.target.value))} style={{ width: '100%' }} />
      </label>
      <label style={{ display: 'block', marginTop: 4 }}>
        {t.icpt}: {icpt}
        <input type="range" min={-50} max={100} step={1} value={icpt} onChange={event => setIcpt(Number(event.target.value))} style={{ width: '100%' }} />
      </label>
    </figure>
  );
}
