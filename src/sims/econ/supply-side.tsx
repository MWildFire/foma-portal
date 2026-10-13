import type { Lang } from '../../contract/types';
import { StepPlayer, fn, type CurveSpec, type MarkSpec, type Step, type TickSpec } from './_lib/graph';

// AD/AS. AD1: P = 16 - Y. SRAS1: P = 2 + Y. LRAS1 at potential output 7, so E1 = (7, 9).
// Supply-side reforms raise potential output to 9 (LRAS2). Lower costs move SRAS to P = Y - 2,
// which passes the new long-run equilibrium E3 = (9, 7) where AD1 meets LRAS2.
const AD1 = fn(y => 16 - y, 2, 12, 10);
const SRAS1 = fn(y => 2 + y, 0, 12, 12);
const SRAS2 = fn(y => y - 2, 2, 12, 10);

const ticks = (values: number[]): TickSpec[] => values.map(value => ({ value, label: { en: String(value), ru: String(value) } }));

const axes = {
  xMax: 14,
  yMax: 20,
  xLabel: { en: 'Real output (Y)', ru: 'Реальный выпуск (Y)' },
  yLabel: { en: 'Price level (P)', ru: 'Уровень цен (P)' },
  xTicks: ticks([7, 9]),
  yTicks: ticks([7, 9]),
};

const ad1: CurveSpec = { id: 'ad1', points: AD1, tone: 'demand', label: { en: 'AD1', ru: 'AD1' } };
const sras1: CurveSpec = { id: 'sras1', points: SRAS1, tone: 'supply', label: { en: 'SRAS1', ru: 'SRAS1' } };
const sras1Muted: CurveSpec = { id: 'sras1-muted', points: SRAS1, tone: 'muted', dashed: true, label: { en: 'SRAS1', ru: 'SRAS1' } };
const sras2: CurveSpec = { id: 'sras2', points: SRAS2, tone: 'supply', label: { en: 'SRAS2', ru: 'SRAS2' } };
// The LRAS1 label runs to the right, so LRAS1 is drawn higher (top at 14) and LRAS2 lower (top at 13):
// the LRAS1 label then sits above the LRAS2 line instead of running into it.
const lras1: CurveSpec = { id: 'lras1', points: [[7, 0], [7, 14]], tone: 'muted', dashed: true, label: { en: 'LRAS1', ru: 'LRAS1' } };
const lras1Ink: CurveSpec = { id: 'lras1-ink', points: [[7, 0], [7, 14]], tone: 'ink', label: { en: 'LRAS1', ru: 'LRAS1' } };
const lras2: CurveSpec = { id: 'lras2', points: [[9, 0], [9, 13]], tone: 'ink', label: { en: 'LRAS2', ru: 'LRAS2' } };

// Labels are placed clear of the lines: E1 sits under the AD1 / SRAS1 crossing, E3 below-right of its point.
const e1: MarkSpec = { id: 'E1', at: [7, 9], tone: 'ink', label: { en: 'E1', ru: 'E1' }, dx: 6, dy: 22 };
const e1Muted: MarkSpec = { id: 'E1', at: [7, 9], tone: 'muted', label: { en: 'E1', ru: 'E1' }, dx: 6, dy: 22 };
const e3: MarkSpec = { id: 'E3', at: [9, 7], tone: 'alt', label: { en: 'E3', ru: 'E3' }, dx: 6, dy: 20 };

const steps: Step[] = [
  {
    title: { en: 'Starting point', ru: 'Исходная точка' },
    text: {
      en: 'The economy starts at E1: AD1 meets SRAS1 at output 7 and price level 9. This is also full employment, because LRAS1 is at potential output 7.',
      ru: 'Экономика начинает в точке E1: AD1 пересекает SRAS1 при выпуске 7 и уровне цен 9. Это также полная занятость, потому что LRAS1 проходит через потенциальный выпуск 7.',
    },
    graph: {
      ...axes,
      curves: [ad1, sras1, lras1Ink],
      marks: [e1],
    },
  },
  {
    title: { en: 'Supply-side policies', ru: 'Политика предложения (supply-side policies)' },
    text: {
      en: 'Supply-side policies such as education and deregulation raise productivity, so potential output rises and LRAS shifts right from 7 to 9. At first the economy stays at E1, now below potential output.',
      ru: 'Политика предложения (supply-side policies), например образование и дерегулирование, повышает производительность: потенциальный выпуск растёт, и LRAS сдвигается вправо с 7 до 9. Сначала экономика остаётся в E1, теперь ниже потенциального выпуска.',
    },
    graph: {
      ...axes,
      curves: [ad1, sras1, lras1, lras2],
      marks: [e1],
    },
  },
  {
    title: { en: 'Long run: price level falls', ru: 'Долгосрочный период: уровень цен падает' },
    text: {
      en: 'Lower costs shift SRAS right as well, to SRAS2. The new long-run equilibrium E3 is at output 9 and price level 7: output rises and the price level falls. Demand (AD1) has not changed.',
      ru: 'Снижение издержек тоже сдвигает SRAS вправо, до SRAS2. Новое долгосрочное равновесие E3: выпуск 9, уровень цен 7. Выпуск растёт, уровень цен падает. Совокупный спрос (AD1) не изменился.',
    },
    graph: {
      ...axes,
      curves: [ad1, sras1Muted, sras2, lras1, lras2],
      marks: [e1Muted, e3],
    },
  },
  {
    title: { en: 'Complete picture', ru: 'Итоговая картина' },
    text: {
      en: 'Compared with E1, the long-run equilibrium E3 has more output (7 to 9) and a lower price level (9 to 7). Supply-side policies shift the supply curves (LRAS and SRAS), not AD.',
      ru: 'По сравнению с E1 долгосрочное равновесие E3 имеет больший выпуск (с 7 до 9) и более низкий уровень цен (с 9 до 7). Политика предложения сдвигает кривые предложения (LRAS и SRAS), а не AD.',
    },
    graph: {
      ...axes,
      curves: [ad1, sras1Muted, sras2, lras1, lras2],
      marks: [e1Muted, e3],
    },
  },
];

export default function SupplySide({ lang }: { lang: Lang }) {
  return (
    <StepPlayer
      lang={lang}
      label={{ en: 'Supply-side policies: LRAS shifts right', ru: 'Политика предложения: LRAS сдвигается вправо' }}
      steps={steps}
    />
  );
}
