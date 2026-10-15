import type { Lang } from '../../contract/types';
import { StepPlayer, fn, type CurveSpec, type MarkSpec, type Step, type TickSpec } from './_lib/graph';
import { POTENTIAL_OUTPUT, ad1Price, ad2Price, ad3Price, pointA, pointB, pointC, srasPrice } from './fiscal-policy-logic';

// AD/AS with an upward-sloping SRAS (P = Y - 1, Tragakes Fig 13.2a) and LRAS vertical at potential output 10. The numbers are in
// fiscal-policy-logic.ts.
// AD1: P = 15 - Y meets SRAS at A = (8, 7), below potential output, so there is spare capacity.
// Government spending rises by 2: AD2: P = 17 - Y (first round), C = (9, 8).
// Multiplier 2 (MPC 0.5): the induced rounds add another 2, so AD3: P = 19 - Y and B = (10, 9) on LRAS.
// Total AD shift 4 = 2 x 2 at every price level, but output rises by only 2 because the price level rises from 7 to 9.
const AD1 = fn(ad1Price, 4, 12, 8);
const AD2 = fn(ad2Price, 4, 12, 8);
const AD3 = fn(ad3Price, 4, 12, 8);
const SRAS = fn(srasPrice, 2, 12, 10);

const ticks = (values: number[]): TickSpec[] => values.map(value => ({ value, label: { en: String(value), ru: String(value) } }));

const axes = {
  xMax: 14,
  yMax: 16,
  xLabel: { en: 'Real output (Y)', ru: 'Реальный выпуск (Y)' },
  yLabel: { en: 'Price level (P)', ru: 'Уровень цен (P)' },
  xTicks: ticks([pointA[0], pointC[0], pointB[0]]),
  yTicks: ticks([pointA[1], pointC[1], pointB[1]]),
};

const ad1: CurveSpec = { id: 'ad1', points: AD1, tone: 'demand', label: { en: 'AD1', ru: 'AD1' } };
const ad1Muted: CurveSpec = { id: 'ad1-muted', points: AD1, tone: 'muted', dashed: true, label: { en: 'AD1', ru: 'AD1' } };
const ad2Muted: CurveSpec = { id: 'ad2-muted', points: AD2, tone: 'muted', dashed: true, label: { en: 'AD2', ru: 'AD2' } };
const ad2: CurveSpec = { id: 'ad2', points: AD2, tone: 'policy', label: { en: 'AD2', ru: 'AD2' } };
const ad3: CurveSpec = { id: 'ad3', points: AD3, tone: 'policy', label: { en: 'AD3', ru: 'AD3' } };
const sras: CurveSpec = { id: 'sras', points: SRAS, tone: 'supply', label: { en: 'SRAS', ru: 'SRAS' } };
const lras: CurveSpec = { id: 'lras', points: [[POTENTIAL_OUTPUT, 0], [POTENTIAL_OUTPUT, 15]], tone: 'ink', label: { en: 'LRAS', ru: 'LRAS' } };

// The label of A sits below the point, clear of AD1, AD2 and SRAS. The labels of C and B sit above the point, in the gap
// between the curves that rise and fall from it.
const markA: MarkSpec = { id: 'A', at: pointA, tone: 'ink', label: { en: 'A', ru: 'A' }, dx: -4, dy: 18 };
const markAMuted: MarkSpec = { id: 'A', at: pointA, tone: 'muted', label: { en: 'A', ru: 'A' }, dx: -4, dy: 18 };
const markC: MarkSpec = { id: 'C', at: pointC, tone: 'policy', label: { en: 'C', ru: 'C' }, dx: -3, dy: -12 };
const markB: MarkSpec = { id: 'B', at: pointB, tone: 'policy', label: { en: 'B', ru: 'B' }, dx: 6, dy: -17 };

const steps: Step[] = [
  {
    title: { en: 'Starting point', ru: 'Исходная точка' },
    text: {
      en: 'Aggregate demand AD1 meets the short-run aggregate supply (SRAS) at A: real output 8 and price level 7. SRAS slopes up, and output is below potential output (LRAS at 10), so there is spare capacity.',
      ru: 'Совокупный спрос (aggregate demand, AD1) пересекает краткосрочное совокупное предложение (short-run aggregate supply, SRAS) в точке A: реальный выпуск 8, уровень цен 7. SRAS идёт вверх, а выпуск ниже потенциального (LRAS = 10), поэтому есть свободные мощности.',
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
      en: 'Government spending (G) rises by 2, so AD shifts right by 2 to AD2. In the first round output rises from 8 to 9 and the price level from 7 to 8 (point C), because SRAS slopes up.',
      ru: 'Государственные расходы (government spending, G) растут на 2, поэтому AD сдвигается вправо на 2 (AD2). В первом раунде выпуск растёт с 8 до 9, а уровень цен — с 7 до 8 (точка C), потому что SRAS идёт вверх.',
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
      en: 'Induced spending in the later rounds doubles the first-round rise (multiplier 2, MPC 0.5). AD shifts right by 4 in total to AD3. Output rises from 8 to 10 and the price level from 7 to 9 (point B). Output rises by less than the shift of AD (2 against 4) because part of the extra demand goes into higher prices.',
      ru: 'Наведённые расходы (induced spending) в последующих раундах удваивают первоначальный рост (мультипликатор 2, предельная склонность к потреблению MPC = 0.5). AD сдвигается вправо на 4 в целом, до AD3. Выпуск растёт с 8 до 10, а уровень цен — с 7 до 9 (точка B). Выпуск растёт меньше, чем сдвиг AD (2 против 4), потому что часть дополнительного спроса уходит в рост цен.',
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
      en: 'Output now equals potential output (LRAS at 10) at price level 9, so the spare capacity is used up. Further rises in government spending would mainly raise the price level, because output cannot stay above potential output.',
      ru: 'Выпуск теперь равен потенциальному (LRAS = 10) при уровне цен 9, свободные мощности исчерпаны. Дальнейший рост госрасходов в основном поднимет уровень цен, потому что выпуск не может оставаться выше потенциального.',
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
