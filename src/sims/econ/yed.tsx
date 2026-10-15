import type { Lang } from '../../contract/types';
import { StepPlayer, fn, type CurveSpec, type GuideSpec, type MarkSpec, type Step, type TickSpec } from './_lib/graph';

// Income elasticity of demand (YED) as a shift of the demand curve on the P-Q axes (Tragakes ch.3 p.99, Fig 3.9).
// D1: P = 18 - 0.5Q (Q = 36 - 2P) at income Y 10. At P 6, Q = 24 (point A). Income then doubles, from Y 10 to Y 20 (+100%).
// Normal good: demand shifts right by 16 at every price, to D3: P = 26 - 0.5Q. At P 6, Q = 40 (+66.7%): YED = 66.7% / 100% = 0.67.
// Inferior good: demand shifts left by 12 at every price, to D2: P = 12 - 0.5Q. At P 6, Q = 12 (-50%): YED = -50% / 100% = -0.5.
// The shifts are large on purpose: the three curve labels stand right of the curve ends and must not touch the next curve.
const D1 = fn(q => 18 - 0.5 * q, 0, 36, 1);
const D2 = fn(q => 12 - 0.5 * q, 0, 24, 1);
const D3 = fn(q => 26 - 0.5 * q, 0, 52, 1);

const ticks = (values: number[]): TickSpec[] => values.map(value => ({ value, label: { en: String(value), ru: String(value) } }));

const axes = {
  xMax: 58,
  yMax: 30,
  xLabel: { en: 'Quantity (Q)', ru: 'Количество (Q)' },
  yLabel: { en: 'Price (P)', ru: 'Цена (P)' },
  xTicks: ticks([12, 24, 40]),
  yTicks: ticks([6, 12, 18, 24]),
};

const d1: CurveSpec = { id: 'd1', points: D1, tone: 'demand', label: { en: 'D1', ru: 'D1' } };
const d1Old: CurveSpec = { id: 'd1', points: D1, tone: 'muted', dashed: true, label: { en: 'D1', ru: 'D1' } };
const d2: CurveSpec = { id: 'd2', points: D2, tone: 'loss', label: { en: 'D2', ru: 'D2' } };
const d3: CurveSpec = { id: 'd3', points: D3, tone: 'gain', label: { en: 'D3', ru: 'D3' } };

const toB: GuideSpec = { id: 'to-b', from: [24, 6], to: [40, 6], tone: 'gain' };
const toC: GuideSpec = { id: 'to-c', from: [12, 6], to: [24, 6], tone: 'loss' };

const startA: MarkSpec = { id: 'A', at: [24, 6], tone: 'ink', label: { en: 'A (P 6, Q 24)', ru: 'A (P 6, Q 24)' }, dx: 8, dy: -10 };
const oldA: MarkSpec = { id: 'A', at: [24, 6], tone: 'muted' };
const markA: MarkSpec = { id: 'A', at: [24, 6], tone: 'ink', label: { en: 'A', ru: 'A' }, dx: -4, dy: 17 };
const normalB: MarkSpec = { id: 'B', at: [40, 6], tone: 'gain', label: { en: 'B (Q 40)', ru: 'B (Q 40)' }, dx: 8, dy: -10 };
const inferiorC: MarkSpec = { id: 'C', at: [12, 6], tone: 'loss', label: { en: 'C (Q 12)', ru: 'C (Q 12)' }, dx: -50, dy: 16 };
const markB: MarkSpec = { id: 'B', at: [40, 6], tone: 'gain', label: { en: 'B', ru: 'B' }, dx: 8, dy: -10 };
const markC: MarkSpec = { id: 'C', at: [12, 6], tone: 'loss', label: { en: 'C', ru: 'C' }, dx: -16, dy: 16 };

const steps: Step[] = [
  {
    title: { en: 'Demand D1 at income Y 10', ru: 'Спрос D1 при доходе Y 10' },
    text: {
      en: 'D1 is demand for a good when income is Y 10: at P 6 buyers want 24 units (point A). Income elasticity of demand (YED) = % change in Qd / % change in Y, measured at the same price.',
      ru: 'D1 — спрос на благо при доходе Y 10: при P = 6 покупатели хотят 24 единицы (точка A). Доходная эластичность спроса (income elasticity of demand, YED) = % изменения Qd / % изменения Y при той же цене.',
    },
    graph: { ...axes, curves: [d1], marks: [startA] },
  },
  {
    title: { en: 'Normal good: demand shifts right', ru: 'Нормальное благо: спрос сдвигается вправо' },
    text: {
      en: 'Income doubles, from Y 10 to Y 20 (+100%). For a normal good demand rises at every price: D1 shifts right to D3. At P 6 quantity demanded rises from 24 to 40 (+66.7%): YED = 66.7% / 100% = 0.67. The sign is positive, so the good is normal; a value between 0 and 1 means a necessity.',
      ru: 'Доход удваивается: с Y 10 до Y 20 (+100%). Для нормального блага спрос растёт при каждой цене: D1 сдвигается вправо, в D3. При P = 6 величина спроса растёт с 24 до 40 (+66,7%): YED = 66,7% / 100% = 0,67. Знак положительный, значит благо нормальное; значение между 0 и 1 означает товар первой необходимости.',
    },
    graph: { ...axes, curves: [d1Old, d3], guides: [toB], marks: [oldA, normalB] },
  },
  {
    title: { en: 'Inferior good: demand shifts left', ru: 'Товар низшей категории: спрос сдвигается влево' },
    text: {
      en: 'Income doubles, from Y 10 to Y 20 (+100%). For an inferior good demand falls at every price: D1 shifts left to D2. At P 6 quantity demanded falls from 24 to 12 (-50%): YED = -50% / 100% = -0.5. The sign is negative, so the good is inferior.',
      ru: 'Доход удваивается: с Y 10 до Y 20 (+100%). Для товара низшей категории спрос падает при каждой цене: D1 сдвигается влево, в D2. При P = 6 величина спроса падает с 24 до 12 (-50%): YED = -50% / 100% = -0,5. Знак отрицательный, значит это товар низшей категории.',
    },
    graph: { ...axes, curves: [d1Old, d2], guides: [toC], marks: [oldA, inferiorC] },
  },
  {
    title: { en: 'Summary: sign of YED and shift', ru: 'Итог: знак YED и сдвиг спроса' },
    text: {
      en: 'A normal good has a positive YED (0.67): when income rises, demand shifts right to D3. An inferior good has a negative YED (-0.5): demand shifts left to D2. The sign of YED shows the type of good.',
      ru: 'У нормального блага YED положительна (0,67): при росте дохода спрос сдвигается вправо, в D3. У товара низшей категории YED отрицательна (-0,5): спрос сдвигается влево, в D2. Знак YED показывает тип блага.',
    },
    graph: { ...axes, curves: [d1, d3, d2], marks: [markA, markB, markC] },
  },
];

export default function Yed({ lang }: { lang: Lang }) {
  return (
    <StepPlayer
      lang={lang}
      label={{ en: 'Income elasticity of demand: normal and inferior goods', ru: 'Доходная эластичность спроса: нормальное благо и товар низшей категории' }}
      steps={steps}
    />
  );
}
