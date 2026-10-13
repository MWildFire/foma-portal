import type { Lang } from '../../contract/types';
import { StepPlayer, fn, type CurveSpec, type GuideSpec, type MarkSpec, type Step, type TickSpec } from './_lib/graph';

// Income elasticity of demand (YED). Income Y on x, quantity demanded Qd on y.
// Normal good: Qd = 10 + 2Y. Inferior good: Qd = 60 - 2Y.
// From Y 10 to Y 15 (+50%) the normal good goes from 30 to 40 (+33.3%): YED = 33.3% / 50% = 0.67.
// The inferior good goes from 40 to 30 (-25%): YED = -25% / 50% = -0.5.
const NORMAL = fn(y => 10 + 2 * y, 0, 20, 1);
const INFERIOR = fn(y => 60 - 2 * y, 0, 20, 1);

const ticks = (values: number[]): TickSpec[] => values.map(value => ({ value, label: { en: String(value), ru: String(value) } }));

const axes = {
  xMax: 24,
  yMax: 70,
  xLabel: { en: 'Income (Y)', ru: 'Доход (Y)' },
  yLabel: { en: 'Quantity demanded (Qd)', ru: 'Величина спроса (Qd)' },
  xTicks: ticks([5, 10, 15, 20]),
  yTicks: ticks([20, 40, 60]),
};

const normal: CurveSpec = { id: 'normal', points: NORMAL, tone: 'demand', label: { en: 'Normal', ru: 'Норм.' } };
const inferior: CurveSpec = { id: 'inferior', points: INFERIOR, tone: 'alt', label: { en: 'Inferior', ru: 'Низш.' } };

// Points: A (Y 10, Q 30) and B (Y 15, Q 40) on the normal good; C (Y 10, Q 40) and D (Y 15, Q 30) on the inferior good.
const guidesA: GuideSpec[] = [
  { id: 'a-h', from: [0, 30], to: [10, 30], tone: 'muted' },
  { id: 'a-v', from: [10, 0], to: [10, 30], tone: 'muted' },
];
const guidesB: GuideSpec[] = [
  { id: 'b-h', from: [0, 40], to: [15, 40], tone: 'muted' },
  { id: 'b-v', from: [15, 0], to: [15, 40], tone: 'muted' },
];
const guidesC: GuideSpec[] = [
  { id: 'c-h', from: [0, 40], to: [10, 40], tone: 'muted' },
  { id: 'c-v', from: [10, 0], to: [10, 40], tone: 'muted' },
];
const guidesD: GuideSpec[] = [
  { id: 'd-h', from: [0, 30], to: [15, 30], tone: 'muted' },
  { id: 'd-v', from: [15, 0], to: [15, 30], tone: 'muted' },
];

// Single letters, placed clear of the lines (A and D sit at Qd 30, B and C at Qd 40).
const markA: MarkSpec = { id: 'A', at: [10, 30], tone: 'demand', label: { en: 'A', ru: 'A' }, dx: 6, dy: 14 };
const markB: MarkSpec = { id: 'B', at: [15, 40], tone: 'demand', label: { en: 'B', ru: 'B' }, dx: 6, dy: -8 };
const markC: MarkSpec = { id: 'C', at: [10, 40], tone: 'alt', label: { en: 'C', ru: 'C' }, dx: -12, dy: -8 };
const markD: MarkSpec = { id: 'D', at: [15, 30], tone: 'alt', label: { en: 'D', ru: 'D' }, dx: -12, dy: 14 };

const steps: Step[] = [
  {
    title: { en: 'Axes: income and quantity', ru: 'Оси: доход и величина спроса' },
    text: {
      en: 'Income (Y) is on the x-axis and quantity demanded (Qd) on the y-axis. Income elasticity of demand (YED) = % change in Qd / % change in Y.',
      ru: 'Доход (Y) отложен по горизонтальной оси, величина спроса (Qd) — по вертикальной. Доходная эластичность спроса (income elasticity of demand, YED) = % изменения Qd / % изменения Y.',
    },
    graph: { ...axes, curves: [] },
  },
  {
    title: { en: 'Normal good', ru: 'Нормальное благо' },
    text: {
      en: 'For a normal good quantity rises as income rises. From Y 10 to Y 15 (+50%), Qd rises from 30 to 40 (+33.3%): YED = 33.3% / 50% = 0.67. The sign is positive, so the good is normal; a value between 0 and 1 means a necessity.',
      ru: 'Для нормального блага величина спроса растёт с ростом дохода. При росте Y с 10 до 15 (+50%) Qd растёт с 30 до 40 (+33,3%): YED = 33,3% / 50% = 0,67. Знак положительный, значит благо нормальное; значение между 0 и 1 означает товар первой необходимости.',
    },
    graph: {
      ...axes,
      curves: [normal],
      guides: [...guidesA, ...guidesB],
      marks: [markA, markB],
    },
  },
  {
    title: { en: 'Inferior good', ru: 'Низшее благо' },
    text: {
      en: 'For an inferior good quantity falls as income rises. From Y 10 to Y 15 (+50%), Qd falls from 40 to 30 (-25%): YED = -25% / 50% = -0.5. The sign is negative, so the good is inferior.',
      ru: 'Для низшего блага величина спроса падает с ростом дохода. При росте Y с 10 до 15 (+50%) Qd падает с 40 до 30 (-25%): YED = -25% / 50% = -0,5. Знак отрицательный, значит благо низшее.',
    },
    graph: {
      ...axes,
      curves: [inferior],
      guides: [...guidesC, ...guidesD],
      marks: [markC, markD],
    },
  },
  {
    title: { en: 'Both goods in one graph', ru: 'Оба блага на одном графике' },
    text: {
      en: 'The normal good slopes up (YED = 0.67) and the inferior good slopes down (YED = -0.5). Both are measured between Y 10 and Y 15. The sign of YED shows the type of good.',
      ru: 'Нормальное благо идёт вверх (YED = 0,67), низшее благо — вниз (YED = -0,5). Оба значения измерены между Y 10 и Y 15. Знак YED показывает тип блага.',
    },
    graph: {
      ...axes,
      curves: [normal, inferior],
      marks: [markA, markB, markC, markD],
    },
  },
];

export default function Yed({ lang }: { lang: Lang }) {
  return (
    <StepPlayer
      lang={lang}
      label={{ en: 'Income elasticity of demand: normal and inferior goods', ru: 'Доходная эластичность спроса: нормальное и низшее благо' }}
      steps={steps}
    />
  );
}
