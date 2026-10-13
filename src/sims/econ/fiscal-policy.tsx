import type { Lang } from '../../contract/types';
import { StepPlayer, fn, type CurveSpec, type MarkSpec, type Step, type TickSpec } from './_lib/graph';

// AD/AS with a horizontal SRAS below full employment (price level 9) and LRAS vertical at potential output 10.
// AD1: P = 15 - Y, so A = (6, 9). Government spending rises by 2: AD2: P = 17 - Y (first round, C = (8, 9)).
// Multiplier 2 (MPC 0.5): the induced rounds add another 2, so AD3: P = 19 - Y and B = (10, 9).
// Total AD shift 4 = 2 x 2, and output rises by 4 at a constant price level.
const AD1 = fn(y => 15 - y, 2, 12, 10);
const AD2 = fn(y => 17 - y, 2, 12, 10);
const AD3 = fn(y => 19 - y, 2, 12, 10);

const ticks = (values: number[]): TickSpec[] => values.map(value => ({ value, label: { en: String(value), ru: String(value) } }));

const axes = {
  xMax: 14,
  yMax: 20,
  xLabel: { en: 'Real output (Y)', ru: 'Реальный выпуск (Y)' },
  yLabel: { en: 'Price level (P)', ru: 'Уровень цен (P)' },
  xTicks: ticks([6, 8, 10]),
  yTicks: ticks([9, 11]),
};

const ad1: CurveSpec = { id: 'ad1', points: AD1, tone: 'demand', label: { en: 'AD1', ru: 'AD1' } };
const ad1Muted: CurveSpec = { id: 'ad1-muted', points: AD1, tone: 'muted', dashed: true, label: { en: 'AD1', ru: 'AD1' } };
const ad2Muted: CurveSpec = { id: 'ad2-muted', points: AD2, tone: 'muted', dashed: true, label: { en: 'AD2', ru: 'AD2' } };
const ad2: CurveSpec = { id: 'ad2', points: AD2, tone: 'policy', label: { en: 'AD2', ru: 'AD2' } };
const ad3: CurveSpec = { id: 'ad3', points: AD3, tone: 'policy', label: { en: 'AD3', ru: 'AD3' } };
const sras: CurveSpec = { id: 'sras', points: [[0, 9], [10, 9], [12, 11]], tone: 'supply', label: { en: 'SRAS', ru: 'SRAS' } };
const lras: CurveSpec = { id: 'lras', points: [[10, 0], [10, 19]], tone: 'ink', label: { en: 'LRAS', ru: 'LRAS' } };

// The label of A sits below the point, clear of AD1, AD2 and SRAS.
const markA: MarkSpec = { id: 'A', at: [6, 9], tone: 'ink', label: { en: 'A', ru: 'A' }, dx: -4, dy: 18 };
const markAMuted: MarkSpec = { id: 'A', at: [6, 9], tone: 'muted', label: { en: 'A', ru: 'A' }, dx: -4, dy: 18 };
const markC: MarkSpec = { id: 'C', at: [8, 9], tone: 'policy', label: { en: 'C', ru: 'C' } };
const markB: MarkSpec = { id: 'B', at: [10, 9], tone: 'policy', label: { en: 'B', ru: 'B' }, dx: 6, dy: -12 };

const steps: Step[] = [
  {
    title: { en: 'Starting point', ru: 'Исходная точка' },
    text: {
      en: 'Aggregate demand AD1 meets the short-run aggregate supply (SRAS) at A: real output 6 and price level 9. SRAS is horizontal below full employment, so the price level stays at 9 while there is spare capacity.',
      ru: 'Совокупный спрос (aggregate demand, AD1) пересекает краткосрочное совокупное предложение (short-run aggregate supply, SRAS) в точке A: реальный выпуск 6, уровень цен 9. SRAS горизонтальна ниже полной занятости, поэтому уровень цен остаётся 9, пока есть свободные мощности.',
    },
    graph: {
      ...axes,
      curves: [ad1, sras, lras],
      marks: [markA],
    },
  },
  {
    title: { en: 'Government spending rises', ru: 'Рост государственных расходов' },
    text: {
      en: 'Government spending (G) rises by 2, so AD shifts right by 2 to AD2. In the first round output rises from 6 to 8 at the same price level 9 (point C).',
      ru: 'Государственные расходы (government spending, G) растут на 2, поэтому AD сдвигается вправо на 2 (AD2). В первом раунде выпуск растёт с 6 до 8 при том же уровне цен 9 (точка C).',
    },
    graph: {
      ...axes,
      curves: [ad1Muted, ad2, sras, lras],
      marks: [markAMuted, markC],
    },
  },
  {
    title: { en: 'Multiplier effect', ru: 'Эффект мультипликатора (multiplier effect)' },
    text: {
      en: 'Induced spending in the later rounds doubles the first-round rise (multiplier 2, MPC 0.5). AD shifts right by 4 in total to AD3, and output rises from 6 to 10 at price level 9 (point B). The output change (4) is larger than the first-round change in AD (2).',
      ru: 'Наведённые расходы (induced spending) в последующих раундах удваивают первоначальный рост (мультипликатор 2, предельная склонность к потреблению MPC = 0.5). AD сдвигается вправо на 4 в целом, до AD3, и выпуск растёт с 6 до 10 при уровне цен 9 (точка B). Рост выпуска (4) больше первоначального сдвига AD (2).',
    },
    graph: {
      ...axes,
      curves: [ad1Muted, ad2Muted, ad3, sras, lras],
      marks: [markAMuted, markB],
    },
  },
  {
    title: { en: 'Full employment reached', ru: 'Полная занятость достигнута' },
    text: {
      en: 'Output now equals potential output (LRAS at 10) at price level 9. Further rises in government spending would mainly raise the price level, because SRAS slopes up beyond potential output.',
      ru: 'Выпуск теперь равен потенциальному (LRAS = 10) при уровне цен 9. Дальнейший рост госрасходов в основном поднимет уровень цен, потому что SRAS за пределами потенциального выпуска идёт вверх.',
    },
    graph: {
      ...axes,
      curves: [ad1Muted, ad3, sras, lras],
      marks: [markA, markB],
    },
  },
];

export default function FiscalPolicy({ lang }: { lang: Lang }) {
  return (
    <StepPlayer
      lang={lang}
      label={{ en: 'Fiscal policy: government spending and the multiplier', ru: 'Фискальная политика: госрасходы и мультипликатор' }}
      steps={steps}
    />
  );
}
