import type { Lang } from '../../contract/types';
import { StepPlayer, fn, type CurveSpec, type MarkSpec, type Step, type TickSpec } from './_lib/graph';

// AD/AS model. Initial equilibrium E0: AD1 (PL = 13 - Y) meets SRAS1 (PL = 1 + Y) at Y 6, PL 7, on the vertical LRAS (Y 6).
// The Keynesian AS is flat at PL 7 below full employment. AD shifts right to AD2 (PL = 15 - Y): E1 at Y 7, PL 8.
// SRAS shifts left to SRAS2 (PL = 3 + Y): E2 at Y 6, PL 9, where AD2 meets SRAS2.
const AD1 = fn(q => 13 - q, 2, 12, 10);
const AD2 = fn(q => 15 - q, 3, 12, 9);
const SRAS1 = fn(q => 1 + q, 0, 10, 10);
const SRAS2 = fn(q => 3 + q, 1, 9, 8);

const ticks = (values: number[]): TickSpec[] => values.map(value => ({ value, label: { en: String(value), ru: String(value) } }));

const ad1: CurveSpec = { id: 'ad1', points: AD1, tone: 'demand', label: { en: 'AD1', ru: 'AD1' } };
const ad1Old: CurveSpec = { id: 'ad1', points: AD1, tone: 'muted', dashed: true, label: { en: 'AD1', ru: 'AD1' } };
const ad2: CurveSpec = { id: 'ad2', points: AD2, tone: 'demand', label: { en: 'AD2', ru: 'AD2' } };
const sras1: CurveSpec = { id: 'sras1', points: SRAS1, tone: 'supply', label: { en: 'SRAS1', ru: 'SRAS1' } };
const sras1Old: CurveSpec = { id: 'sras1', points: SRAS1, tone: 'muted', dashed: true, label: { en: 'SRAS1', ru: 'SRAS1' } };
const sras2: CurveSpec = { id: 'sras2', points: SRAS2, tone: 'supply', label: { en: 'SRAS2', ru: 'SRAS2' } };
const lras: CurveSpec = { id: 'lras', points: [[6, 0], [6, 11]], tone: 'ink', label: { en: 'LRAS', ru: 'LRAS' } };
// Drawn from the right end to the left end, so the label sits at the left end of the flat part.
const keynes: CurveSpec = { id: 'keynes', points: [[6, 7], [0, 7]], tone: 'alt', dashed: true, label: { en: 'Keynes AS', ru: 'Кейнс AS' } };

const e0: MarkSpec = { id: 'e0', at: [6, 7], tone: 'ink', label: { en: 'E0', ru: 'E0' }, dx: -18, dy: 26 };
const e0Muted: MarkSpec = { id: 'e0', at: [6, 7], tone: 'muted', label: { en: 'E0', ru: 'E0' }, dx: -18, dy: 26 };
const e1: MarkSpec = { id: 'e1', at: [7, 8], tone: 'ink', label: { en: 'E1', ru: 'E1' }, dx: 16, dy: 4 };
const e1Muted: MarkSpec = { id: 'e1', at: [7, 8], tone: 'muted', label: { en: 'E1', ru: 'E1' }, dx: 16, dy: 4 };
const e2: MarkSpec = { id: 'e2', at: [6, 9], tone: 'ink', label: { en: 'E2', ru: 'E2' }, dx: 16, dy: 2 };

const axes = {
  xMax: 14,
  yMax: 13,
  xLabel: { en: 'Real GDP (Y)', ru: 'Реальный ВВП (Y)' },
  yLabel: { en: 'Price level (PL)', ru: 'Уровень цен (PL)' },
};

const steps: Step[] = [
  {
    title: { en: 'Initial equilibrium', ru: 'Исходное равновесие' },
    text: {
      en: 'E0 (Y 6, PL 7) lies on the vertical LRAS, so the economy is at full employment. Keynesian AS is flat when there is spare capacity; SRAS slopes up in the short run.',
      ru: 'Точка E0 (Y 6, PL 7) лежит на вертикальной LRAS: экономика работает при полной занятости. Кейнсианская кривая AS горизонтальна при наличии свободных мощностей; краткосрочная SRAS растёт вверх.',
    },
    graph: {
      ...axes,
      curves: [ad1, sras1, lras, keynes],
      marks: [e0],
      xTicks: ticks([6]),
    },
  },
  {
    title: { en: 'Demand rises: demand-pull inflation', ru: 'Рост спроса: инфляция спроса' },
    text: {
      en: 'Aggregate demand shifts right to AD2. The new short-run equilibrium E1 (Y 7, PL 8) is above full employment (Y 6), and prices rise: demand-pull inflation.',
      ru: 'Совокупный спрос (aggregate demand, AD) сдвигается вправо до AD2. Новое краткосрочное равновесие E1 (Y 7, PL 8) выше полной занятости (Y 6), цены растут: инфляция спроса (demand-pull inflation).',
    },
    graph: {
      ...axes,
      curves: [ad1Old, ad2, sras1, lras],
      guides: [{ id: 'y7', from: [7, 0], to: [7, 8], tone: 'muted' }],
      marks: [e0Muted, e1],
      xTicks: ticks([6, 7]),
    },
  },
  {
    title: { en: 'Long-run adjustment', ru: 'Долгосрочная корректировка' },
    text: {
      en: 'Wages and input costs rise, so SRAS shifts left to SRAS2. Output returns to Y 6 at a higher price level, PL 9. Only the price level stays higher.',
      ru: 'Зарплаты и издержки ресурсов растут, поэтому SRAS сдвигается влево до SRAS2. Выпуск возвращается к Y 6 при более высоком уровне цен, PL 9. Выше остаётся только уровень цен.',
    },
    graph: {
      ...axes,
      curves: [ad2, sras1Old, sras2, lras],
      marks: [e0Muted, e2],
      xTicks: ticks([6]),
    },
  },
  {
    title: { en: 'Complete picture', ru: 'Полная картина' },
    text: {
      en: 'The path runs from E0 to E1 (boom) and then to E2 (long run). Keynesian AS applies only below full employment, and output ends at its potential, Y 6, with the price level raised from 7 to 9.',
      ru: 'Путь идёт от E0 к E1 (подъём) и затем к E2 (долгосрочный период). Кейнсианская кривая AS действует только ниже полной занятости, а выпуск возвращается к потенциальному Y 6, при этом уровень цен поднят с 7 до 9.',
    },
    graph: {
      ...axes,
      curves: [ad1Old, ad2, sras1Old, sras2, lras, keynes],
      marks: [e0Muted, e1Muted, e2],
      xTicks: ticks([6]),
    },
  },
];

export default function AdAs({ lang }: { lang: Lang }) {
  return (
    <StepPlayer
      lang={lang}
      label={{ en: 'AD and AS: from equilibrium to the long run', ru: 'AD и AS: от равновесия к долгосрочному периоду' }}
      steps={steps}
    />
  );
}
