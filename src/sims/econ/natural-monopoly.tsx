import type { Lang } from '../../contract/types';
import { StepPlayer, fn, type AreaSpec, type CurveSpec, type GuideSpec, type MarkSpec, type Step, type TickSpec } from './_lib/graph';

// Natural monopoly. Long-run average cost falls over the whole market: LRAC = 12 - 0.25Q. MC = 12 - 0.5Q lies below it.
// Demand D: P = 18 - Q. D meets LRAC at Q 8, P 10 (one firm serves the market at the lowest cost).
// Marginal cost pricing: P = MC gives Q 12, P 6. LRAC at Q 12 is 9, so the firm loses 3 x 12 = 36 and needs a subsidy.
// Average cost pricing: P = LRAC gives Q 8, P 10: normal profit, no subsidy, but Q 8 is below the efficient Q 12.
const D = fn(q => 18 - q, 0, 16, 16);
const LRAC = fn(q => 12 - 0.25 * q, 0, 16, 16);
const MC = fn(q => 12 - 0.5 * q, 0, 16, 16);

const ticks = (values: number[]): TickSpec[] => values.map(value => ({ value, label: { en: String(value), ru: String(value) } }));

const curves: CurveSpec[] = [
  { id: 'd', points: D, tone: 'demand', label: { en: 'D', ru: 'D' } },
  { id: 'lrac', points: LRAC, tone: 'alt', label: { en: 'LRAC', ru: 'LRAC' } },
  { id: 'mc', points: MC, tone: 'supply', label: { en: 'MC', ru: 'MC' } },
];

const lossArea: AreaSpec = { id: 'loss', points: [[0, 6], [12, 6], [12, 9], [0, 9]], tone: 'loss' };
const lossGuide: GuideSpec = { id: 'loss-g', from: [0, 7.5], to: [12, 7.5], tone: 'loss', label: { en: 'loss 36', ru: 'убыток 36' }, labelAt: 'start' };
const mcPoint: MarkSpec = { id: 'a', at: [12, 6], tone: 'ink', label: { en: 'P = MC', ru: 'P = MC' }, dx: 6, dy: -7 };
const acPoint: MarkSpec = { id: 'b', at: [8, 10], tone: 'ink', label: { en: 'P = AC', ru: 'P = AC' }, dx: 6, dy: -7 };

const axes = {
  xMax: 20,
  yMax: 20,
  xLabel: { en: 'Quantity (Q)', ru: 'Количество (Q)' },
  yLabel: { en: 'Price and cost (P)', ru: 'Цена и издержки (P)' },
};

const steps: Step[] = [
  {
    title: { en: 'Falling average cost', ru: 'Падающие средние издержки' },
    text: {
      en: 'Long-run average cost (LRAC) falls as output rises, from 12 at Q 0 to 8 at Q 16. Marginal cost (MC) lies below LRAC, so each extra unit pulls the average down.',
      ru: 'Долгосрочные средние издержки (LRAC) падают с ростом выпуска: с 12 при Q 0 до 8 при Q 16. Предельные издержки (MC) лежат ниже LRAC, поэтому каждая дополнительная единица снижает среднее значение.',
    },
    graph: { ...axes, curves },
  },
  {
    title: { en: 'Demand meets LRAC', ru: 'Спрос пересекает LRAC' },
    text: {
      en: 'Market demand (D) cuts LRAC at Q 8, P 10. One firm can serve the whole market at the lowest cost; two firms would each produce less at a higher average cost.',
      ru: 'Рыночный спрос (D) пересекает LRAC при Q 8, P 10. Одна фирма может обслужить весь рынок с наименьшими издержками; две фирмы выпускали бы меньше, и их средние издержки были бы выше.',
    },
    graph: {
      ...axes,
      curves,
      guides: [
        { id: 'q8', from: [8, 0], to: [8, 10], tone: 'muted' },
        { id: 'p10', from: [0, 10], to: [8, 10], tone: 'muted' },
      ],
      marks: [{ id: 'b', at: [8, 10], tone: 'ink', label: { en: 'D = LRAC', ru: 'D = LRAC' }, dx: 6, dy: -7 }],
      xTicks: ticks([8]),
      yTicks: ticks([10]),
    },
  },
  {
    title: { en: 'Marginal cost pricing', ru: 'Ценообразование по предельным издержкам' },
    text: {
      en: 'Setting P = MC (6) gives the efficient output Q 12. But at Q 12 LRAC is 9, so the firm loses 3 per unit: 3 x 12 = 36. A subsidy would be needed.',
      ru: 'Установка P = MC (6) даёт эффективный выпуск Q 12. Но при Q 12 LRAC равен 9, поэтому фирма теряет 3 на каждой единице: 3 × 12 = 36. Понадобится субсидия (subsidy).',
    },
    graph: {
      ...axes,
      curves,
      areas: [lossArea],
      guides: [lossGuide],
      marks: [mcPoint],
      xTicks: ticks([12]),
      yTicks: ticks([6, 9]),
    },
  },
  {
    title: { en: 'Average cost pricing', ru: 'Ценообразование по средним издержкам' },
    text: {
      en: 'Setting P = LRAC (10) gives output Q 8 and normal profit, with no subsidy. But Q 8 is below the efficient Q 12, so some efficiency is lost.',
      ru: 'Установка P = LRAC (10) даёт выпуск Q 8 и нормальную прибыль без субсидии. Но Q 8 ниже эффективного Q 12, поэтому часть эффективности теряется.',
    },
    graph: {
      ...axes,
      curves,
      areas: [lossArea],
      guides: [
        lossGuide,
        { id: 'q8', from: [8, 0], to: [8, 10], tone: 'muted' },
        { id: 'p10', from: [0, 10], to: [8, 10], tone: 'muted' },
      ],
      marks: [mcPoint, acPoint],
      xTicks: ticks([8, 12]),
      yTicks: ticks([6, 10]),
    },
  },
];

export default function NaturalMonopoly({ lang }: { lang: Lang }) {
  return (
    <StepPlayer
      lang={lang}
      label={{ en: 'Natural monopoly: two pricing rules', ru: 'Естественная монополия: два правила ценообразования' }}
      steps={steps}
    />
  );
}
