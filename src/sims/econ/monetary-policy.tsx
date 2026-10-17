import type { Lang } from '../../contract/types';
import { StepPlayer, fn, type CurveSpec, type GuideSpec, type MarkSpec, type Step, type TickSpec } from './_lib/graph';

// Step 1, money market: money demand MD: i = 12 - 0.5M. MS1 = 8 gives i = 8 (E1).
// A central bank purchase of bonds raises the money supply to MS2 = 12, so i = 12 - 6 = 6 (E2).
// Steps 2-3, AD/AS: AD1: P = 16 - Y and SRAS: P = 2 + Y give A = (7, 9), below potential output 10 (LRAS).
// Lower interest rates raise investment, so AD shifts right by 4 at each price: AD2: P = 20 - Y, B = (9, 11).
const MD = fn(m => 12 - 0.5 * m, 0, 20, 10);

const moneyAxes = {
  xMax: 24,
  yMax: 14,
  xLabel: { en: 'Quantity of money (M)', ru: 'Количество денег (M)' },
  yLabel: { en: 'Nominal interest rate (%)', ru: 'Номинальная ставка (%)' },
  xTicks: [8, 12].map(value => ({ value, label: { en: String(value), ru: String(value) } })),
  yTicks: [6, 8].map(value => ({ value, label: { en: String(value), ru: String(value) } })),
};

const md: CurveSpec = { id: 'md', points: MD, tone: 'demand', label: { en: 'MD', ru: 'MD' } };
const ms1Muted: CurveSpec = { id: 'ms1-muted', points: [[8, 0], [8, 13]], tone: 'muted', dashed: true, label: { en: 'MS1', ru: 'MS1' } };
const ms2: CurveSpec = { id: 'ms2', points: [[12, 0], [12, 13]], tone: 'policy', label: { en: 'MS2', ru: 'MS2' } };

const moneyGuides: GuideSpec[] = [
  { id: 'e1-h', from: [0, 8], to: [8, 8], tone: 'muted' },
  { id: 'e1-v', from: [8, 0], to: [8, 8], tone: 'muted' },
  { id: 'e2-h', from: [0, 6], to: [12, 6], tone: 'muted' },
  { id: 'e2-v', from: [12, 0], to: [12, 6], tone: 'muted' },
];

const adAxes = {
  xMax: 14,
  yMax: 20,
  xLabel: { en: 'Real output (Y)', ru: 'Реальный выпуск (Y)' },
  yLabel: { en: 'Price level (P)', ru: 'Уровень цен (P)' },
  xTicks: [7, 9, 10].map(value => ({ value, label: { en: String(value), ru: String(value) } })),
  yTicks: [9, 11].map(value => ({ value, label: { en: String(value), ru: String(value) } })),
};

const AD1 = fn(y => 16 - y, 2, 12, 10);
const AD2 = fn(y => 20 - y, 2, 12, 10);
const SRAS = fn(y => 2 + y, 0, 12, 12);

const ad1: CurveSpec = { id: 'ad1', points: AD1, tone: 'demand', label: { en: 'AD1', ru: 'AD1' } };
const ad1Muted: CurveSpec = { id: 'ad1-muted', points: AD1, tone: 'muted', dashed: true, label: { en: 'AD1', ru: 'AD1' } };
const ad2: CurveSpec = { id: 'ad2', points: AD2, tone: 'alt', label: { en: 'AD2', ru: 'AD2' } };
const srasCurve: CurveSpec = { id: 'sras', points: SRAS, tone: 'supply', label: { en: 'SRAS', ru: 'SRAS' } };
const lras: CurveSpec = { id: 'lras', points: [[10, 0], [10, 19]], tone: 'ink', label: { en: 'LRAS', ru: 'LRAS' } };

// Labels sit just below each equilibrium, clear of the AD and AS lines.
const markA: MarkSpec = { id: 'A', at: [7, 9], tone: 'ink', label: { en: 'A', ru: 'A' }, dx: -4, dy: 18 };
const markAMuted: MarkSpec = { id: 'A', at: [7, 9], tone: 'muted', label: { en: 'A', ru: 'A' }, dx: -4, dy: 18 };
const markB: MarkSpec = { id: 'B', at: [9, 11], tone: 'alt', label: { en: 'B', ru: 'B' }, dx: -4, dy: 18 };

const steps: Step[] = [
  {
    title: { en: 'Money market: central bank cuts the rate', ru: 'Денежный рынок: центральный банк снижает ставку' },
    text: {
      en: 'This is a simplified money-market example, holding money demand fixed. Expansionary monetary policy: the central bank buys bonds, so the money supply rises from MS1 (8) to MS2 (12), and the interest rate falls from 8% (E1) to 6% (E2).',
      ru: 'Это упрощённый пример денежного рынка с неизменным спросом на деньги. Расширительная монетарная политика (expansionary monetary policy): центральный банк покупает облигации, предложение денег растёт с MS1 (8) до MS2 (12), и процентная ставка падает с 8% (E1) до 6% (E2).',
    },
    graph: {
      ...moneyAxes,
      curves: [md, ms1Muted, ms2],
      guides: moneyGuides,
      marks: [
        { id: 'E1', at: [8, 8], tone: 'muted', label: { en: 'E1', ru: 'E1' } },
        { id: 'E2', at: [12, 6], tone: 'ink', label: { en: 'E2', ru: 'E2' } },
      ],
    },
  },
  {
    title: { en: 'AD and AS: starting point', ru: 'AD и AS: исходная точка' },
    text: {
      en: 'In the AD/AS model the starting equilibrium A is at real output 7 and price level 9. Output is below the potential level 10 (LRAS), so there is spare capacity in the economy.',
      ru: 'В модели AD/AS исходное равновесие A находится при реальном выпуске 7 и уровне цен 9. Выпуск ниже потенциального уровня 10 (LRAS), поэтому в экономике есть свободные мощности.',
    },
    graph: {
      ...adAxes,
      curves: [ad1, srasCurve, lras],
      marks: [markA],
    },
  },
  {
    title: { en: 'Investment rises: AD shifts right', ru: 'Инвестиции растут: AD сдвигается вправо' },
    text: {
      en: 'Assuming confidence and credit conditions permit a response, the lower rate makes borrowing cheaper and stimulates investment (I). AD shifts right by 4 at each price level (AD2). The new equilibrium B is at output 9 and price level 11: output rises but stays below potential (10).',
      ru: 'Если доверие и условия кредитования позволяют отреагировать, более низкая ставка удешевляет заимствование и стимулирует инвестиции (I). AD сдвигается вправо на 4 при каждом уровне цен (AD2). Новое равновесие B: выпуск 9, уровень цен 11. Выпуск растёт, но остаётся ниже потенциального (10).',
    },
    graph: {
      ...adAxes,
      curves: [ad1Muted, ad2, srasCurve, lras],
      marks: [markAMuted, markB],
    },
  },
];

export default function MonetaryPolicy({ lang }: { lang: Lang }) {
  return (
    <StepPlayer
      lang={lang}
      label={{ en: 'Monetary policy: money market and AD/AS', ru: 'Монетарная политика: денежный рынок и AD/AS' }}
      steps={steps}
    />
  );
}
