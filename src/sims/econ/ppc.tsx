import type { Lang } from '../../contract/types';
import { StepPlayer, fn, type Step, type TickSpec } from './_lib/graph';

// Production possibility curve (PPC): consumer goods on x, capital goods on y.
// PPC1 is the quarter circle x^2 + y^2 = 100^2. It bows outwards, so each extra capital good costs more consumer goods.
// PPC2 is the same shape scaled by 1.2 (x^2 + y^2 = 120^2): more resources or better technology move the whole curve outwards.
const PPC1 = fn(x => Math.sqrt(100 * 100 - x * x), 0, 100, 200);
const PPC2 = fn(x => Math.sqrt(120 * 120 - x * x), 0, 120, 240);
// Arcs of PPC1 between B (80, 60), A (60, 80) and C (0, 100), used to show the opportunity cost.
const ARC_BA = fn(x => Math.sqrt(100 * 100 - x * x), 60, 80, 40);
const ARC_AC = fn(x => Math.sqrt(100 * 100 - x * x), 0, 60, 120);

const ticks: TickSpec[] = [20, 40, 60, 80, 100, 120].map(value => ({ value, label: { en: String(value), ru: String(value) } }));

const axes = {
  xMax: 120,
  yMax: 120,
  xLabel: { en: 'Consumer goods', ru: 'Потребительские товары' },
  yLabel: { en: 'Capital goods', ru: 'Капитальные товары' },
  xTicks: ticks,
  yTicks: ticks,
};

const steps: Step[] = [
  {
    title: { en: 'Point inside the curve', ru: 'Точка внутри кривой' },
    text: {
      en: 'Point U (40 consumer, 60 capital goods) lies inside the PPC. Some resources are unemployed or badly used, so output is below the maximum possible.',
      ru: 'Точка U (40 потребительских и 60 капитальных товаров) лежит внутри кривой производственных возможностей (PPC). Часть ресурсов простаивает или используется плохо, поэтому выпуск ниже максимально возможного.',
    },
    graph: {
      ...axes,
      curves: [{ id: 'ppc1', points: PPC1, tone: 'ink', label: { en: 'PPC1', ru: 'КПВ1' } }],
      guides: [
        { id: 'u-h', from: [0, 60], to: [40, 60], tone: 'muted' },
        { id: 'u-v', from: [40, 0], to: [40, 60], tone: 'muted' },
      ],
      marks: [{ id: 'U', at: [40, 60], tone: 'loss', label: { en: 'U (idle)', ru: 'U (простой)' } }],
    },
  },
  {
    title: { en: 'Point on the curve', ru: 'Точка на кривой' },
    text: {
      en: 'Point A (60 consumer, 80 capital goods) lies on the PPC. Resources are fully and efficiently used: to get more of one good, the economy must give up some of the other.',
      ru: 'Точка A (60 потребительских и 80 капитальных товаров) лежит на кривой. Ресурсы используются полностью и эффективно: чтобы получить больше одного товара, экономика должна отказаться от части другого.',
    },
    graph: {
      ...axes,
      curves: [{ id: 'ppc1', points: PPC1, tone: 'ink', label: { en: 'PPC1', ru: 'КПВ1' } }],
      guides: [
        { id: 'a-h', from: [0, 80], to: [60, 80], tone: 'muted' },
        { id: 'a-v', from: [60, 0], to: [60, 80], tone: 'muted' },
      ],
      marks: [{ id: 'A', at: [60, 80], tone: 'ink', label: { en: 'A (efficient)', ru: 'A (эффективно)' } }],
    },
  },
  {
    title: { en: 'Opportunity cost of capital goods', ru: 'Альтернативные издержки капитальных товаров' },
    text: {
      en: 'Moving from B (80, 60) to A (60, 80) gives 20 more capital goods and costs 20 consumer goods. Moving from A to C (0, 100) gives 20 more capital goods but costs 60 consumer goods: the more capital goods are made, the higher the cost of each one.',
      ru: 'Переход из B (80, 60) в A (60, 80) даёт на 20 капитальных товаров больше и стоит 20 потребительских. Переход из A в C (0, 100) даёт ещё 20 капитальных товаров, но стоит 60 потребительских: чем больше выпускается капитальных товаров, тем выше альтернативные издержки (opportunity cost) каждого из них.',
    },
    graph: {
      ...axes,
      curves: [
        { id: 'ppc1', points: PPC1, tone: 'ink', label: { en: 'PPC1', ru: 'КПВ1' } },
        { id: 'arc-ba', points: ARC_BA, tone: 'alt', width: 4 },
        { id: 'arc-ac', points: ARC_AC, tone: 'policy', width: 4 },
      ],
      marks: [
        { id: 'B', at: [80, 60], tone: 'ink', label: { en: 'B', ru: 'B' } },
        { id: 'A', at: [60, 80], tone: 'ink', label: { en: 'A', ru: 'A' } },
        { id: 'C', at: [0, 100], tone: 'ink', label: { en: 'C', ru: 'C' } },
      ],
    },
  },
  {
    title: { en: 'Outward shift', ru: 'Сдвиг кривой наружу' },
    text: {
      en: 'More resources or better technology shift the whole curve outwards, from PPC1 to PPC2. Output such as A2 (72 consumer, 96 capital goods) becomes possible.',
      ru: 'Больше ресурсов или лучшая технология сдвигают всю кривую наружу: от КПВ1 к КПВ2. Становится возможным выпуск, например точка A2 (72 потребительских и 96 капитальных товара).',
    },
    graph: {
      ...axes,
      curves: [
        { id: 'ppc1', points: PPC1, tone: 'muted', dashed: true, label: { en: 'PPC1', ru: 'КПВ1' } },
        { id: 'ppc2', points: PPC2, tone: 'gain', width: 3 },
      ],
      guides: [{ id: 'shift', from: [60, 80], to: [72, 96], tone: 'gain' }],
      marks: [
        { id: 'U', at: [40, 60], tone: 'loss', label: { en: 'U (idle)', ru: 'U (простой)' } },
        { id: 'A', at: [60, 80], tone: 'muted', label: { en: 'A', ru: 'A' }, dx: 12, dy: 26 },
        { id: 'A2', at: [72, 96], tone: 'gain', label: { en: 'A2 (PPC2)', ru: 'A2 (КПВ2)' } },
      ],
    },
  },
];

export default function Ppc({ lang }: { lang: Lang }) {
  return (
    <StepPlayer
      lang={lang}
      label={{ en: 'Production possibility curve: inside, on the curve, outward shift', ru: 'Кривая производственных возможностей: внутри, на кривой, сдвиг наружу' }}
      steps={steps}
    />
  );
}
