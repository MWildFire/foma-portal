import { useState } from 'react';
import type { Lang } from '../../contract/types';

// Least-squares fits to two small data sets: c0 + c1 f(x) + c2 g(x), with coefficients from the normal equations, so the
// sum of squared residuals (SSR) is the smallest possible for each model. The sliders draw a hand-chosen line for comparison.

type Model = 'linear' | 'log' | 'quad';
type DataSet = 'plants' | 'revision';

const W = 320;
const H = 220;

const DATA: Record<DataSet, { x: number[]; y: number[]; xMax: number; yMax: number }> = {
  plants: { x: [2, 4, 6, 8, 10], y: [5, 9, 10, 14, 18], xMax: 12, yMax: 20 },
  revision: { x: [1, 2, 3, 4, 6, 8, 9, 10], y: [38, 52, 58, 63, 70, 72, 76, 77], xMax: 11, yMax: 90 },
};

const BASIS: Record<Model, (x: number) => number[]> = {
  linear: x => [1, x],
  log: x => [1, Math.log(x)],
  quad: x => [1, x, x * x],
};

// Names of the coefficients in the order of the basis functions: linear is y = ax + b, so c0 is b and c1 is a.
const NAMES: Record<Model, string[]> = { linear: ['b', 'a'], log: ['a', 'b'], quad: ['a', 'b', 'c'] };

function predict(model: Model, c: number[], x: number): number {
  return BASIS[model](x).reduce((sum, b, i) => sum + b * c[i], 0);
}

// Normal equations (B'B) c = B'y, solved by Gaussian elimination.
function leastSquares(model: Model, xs: number[], ys: number[]): number[] {
  const rows = xs.map(x => BASIS[model](x));
  const k = rows[0].length;
  const m = Array.from({ length: k }, (_, i) => [
    ...Array.from({ length: k }, (_, j) => rows.reduce((sum, row) => sum + row[i] * row[j], 0)),
    rows.reduce((sum, row, n) => sum + row[i] * ys[n], 0),
  ]);
  for (let i = 0; i < k; i++) {
    for (let r = i + 1; r < k; r++) {
      const f = m[r][i] / m[i][i];
      for (let col = i; col <= k; col++) m[r][col] -= f * m[i][col];
    }
  }
  const c = new Array<number>(k).fill(0);
  for (let i = k - 1; i >= 0; i--) {
    let s = m[i][k];
    for (let j = i + 1; j < k; j++) s -= m[i][j] * c[j];
    c[i] = s / m[i][i];
  }
  return c;
}

const TEXT = {
  en: {
    label: 'Scatter diagram with a least-squares model, its residuals and a hand-drawn line',
    data: 'Data set',
    plants: 'Plants: fertiliser (g) and height (cm)',
    revision: 'Revision: hours and mock score (%)',
    model: 'Model',
    linear: 'Linear: y = ax + b',
    log: 'Logarithmic: y = a + b ln x',
    quad: 'Quadratic: y = a + bx + cx²',
    coef: 'Coefficients',
    r2: 'R²',
    r: 'r (linear model)',
    ssr: 'Sum of squared residuals',
    slope: 'Your gradient',
    icpt: 'Your intercept',
    yours: 'Your line: sum of squared residuals',
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
    quad: 'Квадратичная: y = a + bx + cx²',
    coef: 'Коэффициенты',
    r2: 'R²',
    r: 'r (линейная модель)',
    ssr: 'Сумма квадратов остатков',
    slope: 'Ваш угловой коэффициент',
    icpt: 'Ваш свободный член',
    yours: 'Ваша прямая: сумма квадратов остатков',
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
  const coef = leastSquares(model, d.x, d.y);
  const fitted = d.x.map(x => predict(model, coef, x));
  const mean = d.y.reduce((sum, y) => sum + y, 0) / d.y.length;
  const ssr = d.y.reduce((sum, y, i) => sum + (y - fitted[i]) ** 2, 0);
  const sst = d.y.reduce((sum, y) => sum + (y - mean) ** 2, 0);
  const r2 = 1 - ssr / sst;
  const r = Math.sign(coef[1]) * Math.sqrt(r2);
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
      </svg>
      <figcaption style={{ fontSize: 13, lineHeight: 1.6 }}>
        {t.coef}: {coef.map((v, i) => `${NAMES[model][i]} = ${v.toFixed(2)}`).join(', ')} · {t.r2}: {r2.toFixed(3)} · {t.ssr}: {ssr.toFixed(2)}
        {model === 'linear' ? <> · {t.r}: {r.toFixed(3)}</> : null}
        <br />
        {t.yours}: {yours.toFixed(2)}
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
