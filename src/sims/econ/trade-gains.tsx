import type { Lang } from '../../contract/types';
import { StepPlayer, type CurveSpec, type MarkSpec, type Step, type TickSpec } from './_lib/graph';

// Two countries with straight PPCs (constant opportunity cost). Units: cloth (x) and food (y).
// Country A: 12 cloth or 6 food, PPC A: food = 6 - 0.5 cloth. One cloth costs 0.5 food.
// Country B: 4 cloth or 8 food, PPC B: food = 8 - 2 cloth. One cloth costs 2 food.
// No trade: A makes 6 cloth + 3 food (on PPC A), B makes 2 cloth + 4 food (on PPC B). Total: 8 cloth, 7 food.
// Specialised: A makes 12 cloth, B makes 8 food. Trade at 1 cloth for 1 food (between 0.5 and 2):
// A consumes 6 cloth + 6 food (A*), B consumes 6 cloth + 2 food (B*). Total: 12 cloth, 8 food.
const PPC_A: CurveSpec = { id: 'ppc-a', points: [[0, 6], [12, 0]], tone: 'demand', label: { en: 'PPC A', ru: 'PPC A' } };
const PPC_B: CurveSpec = { id: 'ppc-b', points: [[0, 8], [4, 0]], tone: 'alt', label: { en: 'PPC B', ru: 'PPC B' } };
const PPC_AMuted: CurveSpec = { id: 'ppc-a-muted', points: [[0, 6], [12, 0]], tone: 'muted', dashed: true, label: { en: 'PPC A', ru: 'PPC A' } };
const PPC_BMuted: CurveSpec = { id: 'ppc-b-muted', points: [[0, 8], [4, 0]], tone: 'muted', dashed: true, label: { en: 'PPC B', ru: 'PPC B' } };

const ticks = (values: number[]): TickSpec[] => values.map(value => ({ value, label: { en: String(value), ru: String(value) } }));

const axes = {
  xMax: 14,
  yMax: 10,
  xLabel: { en: 'Cloth (units)', ru: 'Ткань (ед.)' },
  yLabel: { en: 'Food (units)', ru: 'Продукты (ед.)' },
  xTicks: ticks([4, 8, 12]),
  yTicks: ticks([4, 8]),
};

const markA: MarkSpec = { id: 'A', at: [6, 3], tone: 'muted', label: { en: 'A', ru: 'A' } };
const markB: MarkSpec = { id: 'B', at: [2, 4], tone: 'alt', label: { en: 'B', ru: 'B' }, dx: -14, dy: 16 };

const steps: Step[] = [
  {
    title: { en: 'Country A: production possibilities', ru: 'Страна A: производственные возможности (production possibilities)' },
    text: {
      en: 'PPC A is a straight line: Country A can make 12 cloth or 6 food. Giving up 1 cloth always costs 0.5 food, so the opportunity cost of cloth is constant. A produces 6 cloth and 3 food.',
      ru: 'PPC A (кривая производственных возможностей) — прямая: страна A может выпустить 12 единиц ткани или 6 единиц продуктов. Отказ от 1 единицы ткани всегда стоит 0.5 единицы продуктов, поэтому альтернативная стоимость (opportunity cost) постоянна. A производит 6 ткани и 3 продукта.',
    },
    graph: {
      ...axes,
      curves: [PPC_A],
      marks: [{ id: 'A', at: [6, 3], tone: 'demand', label: { en: 'A', ru: 'A' } }],
    },
  },
  {
    title: { en: 'Country B: a different slope', ru: 'Страна B: другой наклон' },
    text: {
      en: 'PPC B is steeper: B can make 4 cloth or 8 food. One cloth costs B 2 food, but one food costs B only 0.5 cloth, so B has a comparative advantage in food. B produces 2 cloth and 4 food.',
      ru: 'PPC B круче: страна B может выпустить 4 единицы ткани или 8 единиц продуктов. Одна единица ткани стоит B 2 единицы продуктов, а одна единица продуктов — всего 0.5 единицы ткани, поэтому у B сравнительное преимущество (comparative advantage) в продуктах. B производит 2 ткани и 4 продукта.',
    },
    graph: {
      ...axes,
      curves: [PPC_AMuted, PPC_B],
      marks: [markA, markB],
    },
  },
  {
    title: { en: 'Each country specialises', ru: 'Каждая страна специализируется' },
    text: {
      en: 'Each country specialises where its comparative advantage lies: A makes only cloth (12) and B only food (8). Together they produce 12 cloth and 8 food.',
      ru: 'Каждая страна специализируется там, где у неё сравнительное преимущество: A производит только ткань (12), B только продукты (8). Вместе они производят 12 ткани и 8 продуктов.',
    },
    graph: {
      ...axes,
      curves: [PPC_A, PPC_B],
      marks: [
        { id: 'A', at: [12, 0], tone: 'demand', label: { en: 'A', ru: 'A' }, dx: -10, dy: -12 },
        { id: 'B', at: [0, 8], tone: 'alt', label: { en: 'B', ru: 'B' } },
      ],
    },
  },
  {
    title: { en: 'Trade lets both consume beyond their PPC', ru: 'Торговля: потребление за пределами PPC' },
    text: {
      en: 'With trade at 1 cloth for 1 food, A exports 6 cloth and imports 6 food, and B does the reverse. The consumption points A* (6 cloth, 6 food) and B* (6 cloth, 2 food) lie outside the PPC of each country.',
      ru: 'При торговле по курсу 1 ткань за 1 продукт страна A экспортирует 6 ткани и импортирует 6 продуктов, а B делает наоборот. Точки потребления A* (6 ткани, 6 продуктов) и B* (6 ткани, 2 продукта) лежат за пределами собственной PPC каждой страны.',
    },
    graph: {
      ...axes,
      curves: [PPC_AMuted, PPC_BMuted],
      marks: [
        { id: 'A*', at: [6, 6], tone: 'demand', label: { en: 'A*', ru: 'A*' } },
        { id: 'B*', at: [6, 2], tone: 'alt', label: { en: 'B*', ru: 'B*' }, dx: 6, dy: 16 },
      ],
    },
  },
  {
    title: { en: 'Combined output rises', ru: 'Совокупный выпуск растёт' },
    text: {
      en: 'Without trade the two countries produce 8 cloth and 7 food (A 6 cloth and 3 food, B 2 cloth and 4 food). Specialised, they produce 12 cloth and 8 food: a gain of 4 cloth and 1 food.',
      ru: 'Без торговли страны производят 8 ткани и 7 продуктов (A: 6 ткани и 3 продукта, B: 2 ткани и 4 продукта). Специализировавшись, они производят 12 ткани и 8 продуктов: прирост 4 ткани и 1 продукт.',
    },
    graph: {
      ...axes,
      guides: [
        { id: 'nt-v', from: [8, 0], to: [8, 7], tone: 'muted' },
        { id: 'nt-h', from: [0, 7], to: [8, 7], tone: 'muted' },
        { id: 'tr-v', from: [12, 0], to: [12, 8], tone: 'muted' },
        { id: 'tr-h', from: [0, 8], to: [12, 8], tone: 'muted' },
        { id: 'gain', from: [8, 7], to: [12, 8], tone: 'gain' },
      ],
      marks: [
        // The no-trade label sits to the left of its point, so the dashed guide at Q = 12 does not cut through it.
        { id: 'nt', at: [8, 7], tone: 'muted', label: { en: 'No trade (8, 7)', ru: 'Без торговли (8, 7)' }, dx: -112, dy: 16 },
        { id: 'tr', at: [12, 8], tone: 'gain', label: { en: 'Trade (12, 8)', ru: 'С торговлей (12, 8)' }, dx: -84, dy: -8 },
      ],
    },
  },
];

export default function TradeGains({ lang }: { lang: Lang }) {
  return (
    <StepPlayer
      lang={lang}
      label={{ en: 'Benefits of trade: comparative advantage', ru: 'Выгоды торговли: сравнительное преимущество' }}
      steps={steps}
    />
  );
}
