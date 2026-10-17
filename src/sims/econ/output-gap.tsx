import type { Lang } from '../../contract/types';
import { StepPlayer, fn, type CurveSpec, type MarkSpec, type Step, type TickSpec } from './_lib/graph';

// Output gap. Potential output (LRAS) is Y 8. E0 (Y 8, PL 6) lies on AD1 (PL = 14 - Y) and SRAS (PL = Y - 2).
// AD2 (PL = 18 - Y): E1 at Y 10, PL 8, an inflationary gap of +2. AD3 (PL = 10 - Y): E2 at Y 6, PL 4, a deflationary gap of -2.
// Output gap = actual - potential (Tragakes ch.8 p.261): +2 at E1 and -2 at E2. As a share of potential output: +25% and -25%.
const SRAS = fn(q => q - 2, 3, 11, 8);
const AD1 = fn(q => 14 - q, 4, 11, 7);
const AD2 = fn(q => 18 - q, 6, 12, 6);
const AD3 = fn(q => 10 - q, 2, 8, 6);

const ticks = (values: number[]): TickSpec[] => values.map(value => ({ value, label: { en: String(value), ru: String(value) } }));

const sras: CurveSpec = { id: 'sras', points: SRAS, tone: 'supply', label: { en: 'SRAS', ru: 'SRAS' } };
const lras: CurveSpec = { id: 'lras', points: [[8, 0], [8, 13]], tone: 'ink', label: { en: 'LRAS', ru: 'LRAS' } };
const ad1: CurveSpec = { id: 'ad1', points: AD1, tone: 'demand', label: { en: 'AD1', ru: 'AD1' } };
const ad1Old: CurveSpec = { id: 'ad1', points: AD1, tone: 'muted', dashed: true, label: { en: 'AD1', ru: 'AD1' } };
const ad2: CurveSpec = { id: 'ad2', points: AD2, tone: 'demand', label: { en: 'AD2', ru: 'AD2' } };
const ad3: CurveSpec = { id: 'ad3', points: AD3, tone: 'demand', label: { en: 'AD3', ru: 'AD3' } };

// Gap arrows along the bottom of the graph (PL 0.5), from potential output to actual output.
const upShaft: CurveSpec = { id: 'up', points: [[8, 0.5], [10, 0.5]], tone: 'loss', width: 2 };
const upHead: CurveSpec = { id: 'up-head', points: [[9.6, 0.9], [10, 0.5], [9.6, 0.1]], tone: 'loss', width: 2 };
const downShaft: CurveSpec = { id: 'down', points: [[8, 0.5], [6, 0.5]], tone: 'alt', width: 2 };
const downHead: CurveSpec = { id: 'down-head', points: [[6.4, 0.9], [6, 0.5], [6.4, 0.1]], tone: 'alt', width: 2 };
const upMark: MarkSpec = { id: 'gap-up', dot: false, at: [9, 0.5], tone: 'loss', label: { en: 'gap +2', ru: 'разрыв +2' }, dx: 8, dy: -12 };
const downMark: MarkSpec = { id: 'gap-down', dot: false, at: [6.5, 0.5], tone: 'alt', label: { en: 'gap -2', ru: 'разрыв -2' }, dx: -40, dy: -12 };

const e0: MarkSpec = { id: 'e0', at: [8, 6], tone: 'ink', label: { en: 'E0', ru: 'E0' }, dx: 20, dy: 4 };
const e0Muted: MarkSpec = { id: 'e0', at: [8, 6], tone: 'muted', label: { en: 'E0', ru: 'E0' }, dx: 20, dy: 4 };
const e1: MarkSpec = { id: 'e1', at: [10, 8], tone: 'loss', label: { en: 'E1', ru: 'E1' }, dx: 18, dy: 2 };
const e2: MarkSpec = { id: 'e2', at: [6, 4], tone: 'alt', label: { en: 'E2', ru: 'E2' }, dx: -6, dy: 18 };

const axes = {
  xMax: 14,
  yMax: 14,
  xLabel: { en: 'Real GDP (Y)', ru: 'Реальный ВВП (Y)' },
  yLabel: { en: 'Price level (PL)', ru: 'Уровень цен (PL)' },
  yTicks: ticks([4, 6, 8]),
};

const steps: Step[] = [
  {
    title: { en: 'Potential output', ru: 'Потенциальный выпуск' },
    text: {
      en: 'Potential output (Yp) is the full-employment level of real GDP, shown by the vertical LRAS at Y 8. At E0 actual output equals potential, so there is no output gap.',
      ru: 'Потенциальный выпуск (Yp) — это уровень реального ВВП при полной занятости, показанный вертикальной LRAS при Y 8. В точке E0 фактический выпуск равен потенциальному, поэтому разрыва выпуска (output gap) нет.',
    },
    graph: {
      ...axes,
      curves: [sras, lras, ad1],
      marks: [e0],
      xTicks: ticks([8]),
    },
  },
  {
    title: { en: 'Inflationary gap', ru: 'Инфляционный разрыв' },
    text: {
      en: 'Demand rises to AD2. Actual output 10 is above potential 8: a positive (inflationary) output gap. Prices rise from 6 to 8.',
      ru: 'Спрос растёт до AD2. Фактический выпуск 10 выше потенциального 8: положительный (инфляционный) разрыв выпуска. Цены растут с 6 до 8.',
    },
    graph: {
      ...axes,
      curves: [sras, lras, ad1Old, ad2, upShaft, upHead],
      marks: [e0Muted, e1, upMark],
      xTicks: ticks([8, 10]),
    },
  },
  {
    title: { en: 'Deflationary gap', ru: 'Дефляционный разрыв' },
    text: {
      en: 'Demand falls to AD3. Actual output 6 is below potential 8: a negative (deflationary) output gap, with spare capacity and cyclical unemployment; the price level is 4 in this illustrative comparison. A negative output gap creates downward inflation pressure, but does not by itself imply that observed inflation is negative.',
      ru: 'Спрос падает до AD3. Фактический выпуск 6 ниже потенциального 8: отрицательный (дефляционный) разрыв выпуска, есть незанятые ресурсы и циклическая безработица; в этом учебном сравнении уровень цен равен 4. Отрицательный разрыв создаёт понижательное давление на инфляцию, но сам по себе не означает, что наблюдаемая инфляция отрицательна.',
    },
    graph: {
      ...axes,
      curves: [sras, lras, ad1Old, ad3, downShaft, downHead],
      marks: [e0Muted, e2, downMark],
      xTicks: ticks([6, 8]),
    },
  },
  {
    title: { en: 'Complete picture', ru: 'Полная картина' },
    text: {
      en: 'Output gap = actual GDP - potential GDP. At E1 it is 10 - 8 = +2 (gap +2), at E2 it is 6 - 8 = -2 (gap -2). A positive gap is inflationary, a negative gap is deflationary. As a share of potential GDP: +2 / 8 x 100 = +25% and -2 / 8 x 100 = -25%.',
      ru: 'Разрыв выпуска = фактический ВВП - потенциальный ВВП. В точке E1 он равен 10 - 8 = +2 (разрыв +2), в точке E2 — 6 - 8 = -2 (разрыв -2). Положительный разрыв — инфляционный, отрицательный — дефляционный. В процентах от потенциального ВВП: +2 / 8 × 100 = +25% и -2 / 8 × 100 = -25%.',
    },
    graph: {
      ...axes,
      curves: [sras, lras, ad1Old, ad2, ad3, upShaft, upHead, downShaft, downHead],
      marks: [e0Muted, e1, e2, upMark, downMark],
      xTicks: ticks([6, 8, 10]),
      yTicks: ticks([4, 6, 8]),
    },
  },
];

export default function OutputGap({ lang }: { lang: Lang }) {
  return (
    <StepPlayer
      lang={lang}
      label={{ en: 'Output gap: inflationary and deflationary gaps', ru: 'Разрыв выпуска: инфляционный и дефляционный разрывы' }}
      steps={steps}
    />
  );
}
