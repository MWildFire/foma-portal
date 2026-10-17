import type { Lang } from '../../contract/types';
import { StepPlayer, fn, type CurveSpec, type MarkSpec, type Step, type TickSpec } from './_lib/graph';
import { POTENTIAL_OUTPUT, ad1Price, ad2Price, ad3Price, pointA, pointB, pointC, srasPrice } from './fiscal-policy-logic';

// AD/AS with an upward-sloping SRAS (P = Y - 1, Tragakes Fig 13.2a) and LRAS vertical at potential output 10. The numbers are in
// fiscal-policy-logic.ts.
// AD1: P = 15 - Y meets SRAS at A = (8, 7), below potential output, so there is spare capacity.
// Government spending rises by 2: AD2: P = 17 - Y is a direct-shift comparison, C = (9, 8), not a modelled chronological first round.
// Multiplier 2 (MPC 0.5): the full fixed-price AD shift is 4, so AD3: P = 19 - Y and B = (10, 9) on LRAS.
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
      en: 'Government spending (G) rises by 2, so AD shifts right by 2 to AD2. AD2 and C (9, 8) illustrate the direct horizontal shift before the full fixed-price multiplier is included. This is a graphical comparison, not a calculated chronological first-round path.',
      ru: 'Государственные расходы (government spending, G) растут на 2, поэтому AD сдвигается вправо на 2 (AD2). AD2 и C (9; 8) иллюстрируют прямой горизонтальный сдвиг до включения полного мультипликатора при фиксированных ценах. Это графическое сравнение, а не рассчитанная временная траектория первого раунда.',
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
      en: 'The fixed-price multiplier is 2 when MPC = 0.5 and there are no other marginal leakages. One consistent illustrative spending model is AE = 0.5Y + 7.5 − 0.5P + ΔG. Setting Y = AE gives AD: Y = 15 − P + 2ΔG. Thus ΔG = 2 shifts AD right by 4 to AD3. Output rises from 8 to 10 and the price level from 7 to 9 (point B). Output rises by less than the shift of AD (2 against 4) because P also changes. The realised output multiplier here is ΔY/ΔG = 2/2 = 1, not the fixed-price value 2.',
      ru: 'При MPC = 0,5 и отсутствии других предельных изъятий мультипликатор с фиксированными ценами равен 2. Согласованная учебная модель расходов: AE = 0,5Y + 7,5 − 0,5P + ΔG. Из Y = AE получаем AD: Y = 15 − P + 2ΔG. Поэтому ΔG = 2 сдвигает AD вправо на 4, до AD3. Выпуск растёт с 8 до 10, а уровень цен — с 7 до 9 (точка B). Выпуск растёт меньше, чем сдвиг AD (2 против 4), поскольку меняется и P. Фактический мультипликатор выпуска здесь ΔY/ΔG = 2/2 = 1, а не величина 2 при фиксированных ценах.',
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
      en: 'Output now equals potential output (LRAS at 10) at price level 9, at the assumed natural unemployment rate, which need not be zero. Potential output is a sustainable level, not a hard short-run maximum: the rising SRAS allows a temporary positive gap. A return to potential after further demand expansion requires the stated long-run wage/price adjustment assumption.',
      ru: 'Выпуск теперь равен потенциальному (LRAS = 10) при уровне цен 9, при принятом естественном уровне безработицы, который не обязан равняться нулю. Потенциальный выпуск — устойчивый уровень, а не жёсткий краткосрочный максимум: восходящая SRAS допускает временный положительный разрыв. Возврат к потенциалу после дальнейшего расширения спроса требует принятого предположения о долгосрочной корректировке зарплат и цен.',
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
