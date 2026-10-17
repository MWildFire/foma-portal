import ReadableDiagram from '../readable-diagram';
import { useState } from 'react';
import type { Lang } from '../../contract/types';

// Logistic curve L / (1 + C e^(-kx)) through a fixed dataset, with a logit view of the same points.
// If L is right, z = ln(y / (L - y)) is a straight line in x with gradient k and intercept -ln C,
// so the best-fit line of the transformed points gives estimates of k and C.

const DATA_X = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const DATA_Y = [2, 5, 12, 26, 54, 95, 138, 169, 186];
const X_MAX = 8;
const Y_TOP = 300;
const W = 300;
const H = 180;
const PAD = 26;

function logistic(L: number, C: number, k: number, x: number): number {
  return L / (1 + C * Math.exp(-k * x));
}

// Least-squares line through the points (x, z), with the correlation coefficient r.
function bestFit(xs: number[], zs: number[]) {
  const n = xs.length;
  const mx = xs.reduce((sum, x) => sum + x, 0) / n;
  const mz = zs.reduce((sum, z) => sum + z, 0) / n;
  let sxy = 0;
  let sxx = 0;
  let szz = 0;
  xs.forEach((x, i) => {
    sxy += (x - mx) * (zs[i] - mz);
    sxx += (x - mx) ** 2;
    szz += (zs[i] - mz) ** 2;
  });
  const slope = sxy / sxx;
  return { slope, intercept: mz - slope * mx, r: sxy / Math.sqrt(sxx * szz) };
}

const TEXT = {
  en: {
    left: 'Logistic curve and data points',
    right: 'Logit view: ln(y / (L − y)) against x, with the best-fit line',
    leftTitle: 'Model and data',
    rightTitle: 'Logit view',
    xAxis: 'x',
    yAxis: 'y',
    zAxis: 'ln(y / (L − y))',
    legend: 'Blue: model. Orange dots: data.',
    L: 'Upper limit L',
    C: 'Constant C',
    k: 'Steepness k',
    start: 'Starting value f(0) = L / (1 + C)',
    inflection: 'Inflection point at x = ln C / k, where y = L / 2',
    peak: 'Greatest growth rate kL / 4',
    fitK: 'Gradient of best-fit line (estimate of k)',
    fitC: 'Estimate of C from the intercept',
    r: 'Correlation r',
    note: 'For exact logistic data with the correct L and 0 < y < L, ln(y/(L−y)) = kx − ln C. These are illustrative rounded data, so even a suitable L need not make them exactly collinear. A wrong L can create curvature; a high r is not proof of the model.',
  },
  ru: {
    left: 'Логистическая кривая и точки данных',
    right: 'Логит-вид: ln(y / (L − y)) от x, с прямой наилучшего приближения',
    leftTitle: 'Модель и данные',
    rightTitle: 'Логит-вид',
    xAxis: 'x',
    yAxis: 'y',
    zAxis: 'ln(y / (L − y))',
    legend: 'Синяя линия: модель. Оранжевые точки: данные.',
    L: 'Верхний предел L',
    C: 'Константа C',
    k: 'Крутизна k',
    start: 'Начальное значение f(0) = L / (1 + C)',
    inflection: 'Точка перегиба при x = ln C / k, где y = L / 2',
    peak: 'Наибольшая скорость роста kL / 4',
    fitK: 'Угловой коэффициент прямой (оценка k)',
    fitC: 'Оценка C по отрезку',
    r: 'Коэффициент корреляции r',
    note: 'Для точных логистических данных с верным L и 0 < y < L получаем ln(y/(L−y)) = kx − ln C. Здесь данные учебные и округлённые, поэтому даже подходящее L не обязано дать точную прямую. Неверное L может создать кривизну; высокое r не доказывает модель.',
  },
} as const;

export default function LogisticLoglogLab({ lang }: { lang: Lang }) {
  const t = TEXT[lang];
  const [L, setL] = useState(200);
  const [C, setC] = useState(99);
  const [k, setK] = useState(0.9);

  // Left panel: the curve and the points, with y running from 0 to Y_TOP.
  const sx = (x: number) => PAD + (x / X_MAX) * (W - 2 * PAD);
  const sy = (y: number) => H - PAD - (y / Y_TOP) * (H - 2 * PAD);
  const curve = Array.from({ length: 81 }, (_, i) => {
    const x = i / 10;
    return `${i === 0 ? 'M' : 'L'}${sx(x).toFixed(1)},${sy(logistic(L, C, k, x)).toFixed(1)}`;
  }).join(' ');

  // Right panel: z = ln(y / (L - y)) for the chosen L, with its best-fit line.
  const zs = DATA_Y.map(y => Math.log(y / (L - y)));
  const fit = bestFit(DATA_X, zs);
  const zEnd = fit.intercept + fit.slope * X_MAX;
  const zLow = Math.min(...zs, fit.intercept, zEnd) - 0.3;
  const zHigh = Math.max(...zs, fit.intercept, zEnd) + 0.3;
  const sz = (z: number) => H - PAD - ((z - zLow) / (zHigh - zLow)) * (H - 2 * PAD);

  return (
    <figure style={{ margin: 0 }}>
      <ReadableDiagram lang={lang}><svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ maxWidth: W }} role="img" aria-label={t.left}>
        <line x1={PAD} y1={H - PAD} x2={W - PAD} y2={H - PAD} stroke="currentColor" />
        <line x1={PAD} y1={PAD} x2={PAD} y2={H - PAD} stroke="currentColor" />
        <line x1={PAD} y1={sy(L)} x2={W - PAD} y2={sy(L)} stroke="#888" strokeDasharray="4 3" />
        <text x={PAD} y={12} fontSize={10} fill="currentColor">{t.leftTitle}</text>
        <text x={W - PAD} y={H - PAD + 12} fontSize={10} textAnchor="end" fill="currentColor">{t.xAxis}</text>
        <text x={PAD - 4} y={PAD - 6} fontSize={10} textAnchor="end" fill="currentColor">{t.yAxis}</text>
        <path d={curve} fill="none" stroke="#4f6fd8" strokeWidth={2} />
        {DATA_X.map((x, i) => (
          <circle key={x} cx={sx(x)} cy={sy(DATA_Y[i])} r={3} fill="#e0883a" />
        ))}
      </svg></ReadableDiagram>
      <ReadableDiagram lang={lang}><svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ maxWidth: W }} role="img" aria-label={t.right}>
        <line x1={PAD} y1={H - PAD} x2={W - PAD} y2={H - PAD} stroke="currentColor" />
        <line x1={PAD} y1={PAD} x2={PAD} y2={H - PAD} stroke="currentColor" />
        <line x1={sx(0)} y1={sz(fit.intercept)} x2={sx(X_MAX)} y2={sz(zEnd)} stroke="#4f6fd8" strokeWidth={2} />
        <text x={PAD} y={12} fontSize={10} fill="currentColor">{t.rightTitle}</text>
        <text x={W - PAD} y={H - PAD + 12} fontSize={10} textAnchor="end" fill="currentColor">{t.xAxis}</text>
        <text x={PAD + 4} y={PAD - 6} fontSize={10} fill="currentColor">{t.zAxis}</text>
        {DATA_X.map((x, i) => (
          <circle key={x} cx={sx(x)} cy={sz(zs[i])} r={3} fill="#e0883a" />
        ))}
      </svg></ReadableDiagram>
      <figcaption style={{ fontSize: 13, lineHeight: 1.6 }}>
        {t.legend}
        <br />
        {t.start}: {(L / (1 + C)).toFixed(2)} · {t.inflection}: {(Math.log(C) / k).toFixed(2)}, {(L / 2).toFixed(1)} · {t.peak}: {(k * L / 4).toFixed(2)}
        <br />
        {t.fitK}: {fit.slope.toFixed(3)} · {t.fitC}: {Math.exp(-fit.intercept).toFixed(1)} · {t.r}: {fit.r.toFixed(4)}
        <br />
        {t.note}
      </figcaption>
      <label style={{ display: 'block', marginTop: 8 }}>
        {t.L}: {L}
        <input type="range" min={190} max={300} step={1} value={L} onChange={event => setL(Number(event.target.value))} style={{ width: '100%' }} />
      </label>
      <label style={{ display: 'block', marginTop: 4 }}>
        {t.C}: {C}
        <input type="range" min={10} max={200} step={1} value={C} onChange={event => setC(Number(event.target.value))} style={{ width: '100%' }} />
      </label>
      <label style={{ display: 'block', marginTop: 4 }}>
        {t.k}: {k.toFixed(2)}
        <input type="range" min={0.2} max={2} step={0.05} value={k} onChange={event => setK(Number(event.target.value))} style={{ width: '100%' }} />
      </label>
    </figure>
  );
}
