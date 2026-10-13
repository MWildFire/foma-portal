import type { Lang } from '../../contract/types';
import { StepPlayer, fn, type AreaSpec, type CurveSpec, type GuideSpec, type MarkSpec, type Step, type TickSpec } from './_lib/graph';

// Monopoly with linear demand. D (AR): P = 20 - Q. MR = 20 - 2Q. MC = 4. ATC = 4 + 8 / Q.
// Monopoly: MR = MC at Q 8; price from D: P 12. Average cost 5, so profit = (12 - 5) x 8 = 56.
// Perfect competition: P = MC at Q 16 (D meets MC, P 4). Deadweight loss = 0.5 x (16 - 8) x (12 - 4) = 32.
const D = fn(q => 20 - q, 0, 18, 18).reverse();
const MR = fn(q => 20 - 2 * q, 0, 9.5, 19);
const ATC = fn(q => 4 + 8 / q, 2, 16, 28);

const ticks = (values: number[]): TickSpec[] => values.map(value => ({ value, label: { en: String(value), ru: String(value) } }));

const curves: CurveSpec[] = [
  { id: 'd', points: D, tone: 'demand', label: { en: 'D (AR)', ru: 'D (AR)' } },
  { id: 'mr', points: MR, tone: 'policy', label: { en: 'MR', ru: 'MR' } },
  { id: 'mc', points: [[17, 4], [0, 4]], tone: 'supply', label: { en: 'MC', ru: 'MC' } },
  { id: 'atc', points: ATC, tone: 'alt', label: { en: 'ATC', ru: 'ATC' } },
];

const profitArea: AreaSpec = { id: 'profit', points: [[0, 5], [8, 5], [8, 12], [0, 12]], tone: 'gain' };
const dwlArea: AreaSpec = { id: 'dwl', points: [[8, 12], [8, 4], [16, 4]], tone: 'loss' };
const profitGuide: GuideSpec = { id: 'profit-g', from: [0, 8], to: [8, 8], tone: 'gain', label: { en: 'profit 56', ru: 'прибыль 56' }, labelAt: 'start' };
const dwlGuide: GuideSpec = { id: 'dwl-g', from: [8, 6], to: [10.5, 6], tone: 'loss', label: { en: 'DWL 32', ru: 'DWL 32' }, labelAt: 'start' };
const monopolyPoint: MarkSpec = { id: 'a', at: [8, 12], tone: 'ink', label: { en: 'monopoly', ru: 'монополия' }, dx: 6, dy: -12 };
const mrMcPoint: MarkSpec = { id: 'b', at: [8, 4], tone: 'ink', label: { en: 'MR = MC', ru: 'MR = MC' }, dx: -70, dy: 20 };
const competitivePoint: MarkSpec = { id: 'c', at: [16, 4], tone: 'ink', label: { en: 'competitive', ru: 'конкуренция' }, dx: -66, dy: 17 };

const axes = {
  xMax: 20,
  yMax: 22,
  xLabel: { en: 'Quantity (Q)', ru: 'Количество (Q)' },
  yLabel: { en: 'Price and cost (P)', ru: 'Цена и издержки (P)' },
};

const steps: Step[] = [
  {
    title: { en: 'Demand, MR and costs', ru: 'Спрос, MR и издержки' },
    text: {
      en: 'The monopolist faces the whole market demand D, which is also its average revenue (AR). MR lies below D, because selling one more unit needs a lower price on all units.',
      ru: 'Монополист сталкивается со всем рыночным спросом D, который также является его средним доходом (AR). Предельный доход (marginal revenue, MR) лежит ниже D: чтобы продать ещё одну единицу, нужно снизить цену на все единицы.',
    },
    graph: { ...axes, curves },
  },
  {
    title: { en: 'MR = MC sets the output', ru: 'MR = MC задаёт объём' },
    text: {
      en: 'The firm produces where MR = MC: Q 8. It charges the price on D for that quantity: P 12, well above MC (4).',
      ru: 'Фирма производит там, где MR = MC: Q 8. Цену она берёт по кривой D для этого объёма: P 12, заметно выше MC (4).',
    },
    graph: {
      ...axes,
      curves,
      guides: [
        { id: 'q8', from: [8, 0], to: [8, 12], tone: 'muted' },
        { id: 'p12', from: [0, 12], to: [8, 12], tone: 'muted' },
      ],
      marks: [monopolyPoint, mrMcPoint],
      xTicks: ticks([8]),
      yTicks: ticks([4, 12]),
    },
  },
  {
    title: { en: 'Supernormal profit', ru: 'Сверхприбыль (supernormal profit)' },
    text: {
      en: 'At Q 8 average total cost (ATC) is 5. Profit per unit is 12 - 5 = 7, so supernormal profit is 7 x 8 = 56. Barriers to entry stop rivals from competing it away.',
      ru: 'При Q 8 средние общие издержки (ATC) равны 5. Прибыль на единицу: 12 - 5 = 7, поэтому сверхприбыль (supernormal profit) равна 7 × 8 = 56. Барьеры входа не дают конкурентам её уничтожить.',
    },
    graph: {
      ...axes,
      curves,
      areas: [profitArea],
      guides: [profitGuide],
      marks: [monopolyPoint, mrMcPoint],
      xTicks: ticks([8]),
      yTicks: ticks([5, 12]),
    },
  },
  {
    title: { en: 'Competitive benchmark and deadweight loss', ru: 'Эталон конкуренции и чистые потери' },
    text: {
      en: 'Perfect competition would produce where P = MC: Q 16 at P 4. The monopoly output of 8 leaves the red triangle unproduced: a deadweight loss of 0.5 x 8 x 8 = 32.',
      ru: 'Совершенная конкуренция (perfect competition) производила бы там, где P = MC: Q 16 при P 4. Выпуск монополии в 8 единиц оставляет красный треугольник невыпущенным: чистые потери общества (deadweight loss) равны 0.5 × 8 × 8 = 32.',
    },
    graph: {
      ...axes,
      curves,
      areas: [profitArea, dwlArea],
      guides: [profitGuide, dwlGuide],
      marks: [monopolyPoint, mrMcPoint, competitivePoint],
      xTicks: ticks([8, 16]),
      yTicks: ticks([4, 12]),
    },
  },
];

export default function Monopoly({ lang }: { lang: Lang }) {
  return (
    <StepPlayer
      lang={lang}
      label={{ en: 'Monopoly: output, price and welfare loss', ru: 'Монополия: объём, цена и потери благосостояния' }}
      steps={steps}
    />
  );
}
