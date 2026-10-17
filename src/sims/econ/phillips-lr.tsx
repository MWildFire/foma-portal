import type { Lang } from '../../contract/types';
import { StepPlayer, fn, type CurveSpec, type Step, type TickSpec } from './_lib/graph';

// Natural rate of unemployment u* = 5. Short-run curves: inflation = expected inflation + (5 - u).
// SRPC1 (expected inflation 2%): inflation = 7 - u, so A = (5, 2).
// SRPC2 (expected inflation 4%): inflation = 9 - u, so C = (5, 4).
// LRPC: vertical at u = 5 for every inflation rate.
// Demand expansion: unemployment 3%, so inflation rises to 4% on SRPC1 at B = (3, 4).
const SRPC1 = fn(u => 7 - u, 0, 7, 7);
const SRPC2 = fn(u => 9 - u, 0, 7, 7);
const LRPC: CurveSpec = { id: 'lrpc', points: [[5, 0], [5, 11]], tone: 'ink', label: { en: 'LRPC', ru: 'LRPC' } };

const ticks = (values: number[]): TickSpec[] => values.map(value => ({ value, label: { en: String(value), ru: String(value) } }));

const axes = {
  xMax: 10,
  yMax: 12,
  xLabel: { en: 'Unemployment (%)', ru: 'Безработица (%)' },
  yLabel: { en: 'Inflation (%)', ru: 'Инфляция (%)' },
  // 5 is the natural rate of unemployment, where LRPC stands; it is named on the axis in both languages.
  xTicks: [...ticks([2]), { value: 5, label: { en: '5 (NRU)', ru: '5 (ЕУ)' } }, ...ticks([8])],
  yTicks: ticks([2, 4, 6, 8, 10]),
};

const srpc1: CurveSpec = { id: 'srpc1', points: SRPC1, tone: 'demand', label: { en: 'SRPC1', ru: 'SRPC1' } };
const srpc1Muted: CurveSpec = { id: 'srpc1-muted', points: SRPC1, tone: 'muted', dashed: true, label: { en: 'SRPC1', ru: 'SRPC1' } };
const srpc2: CurveSpec = { id: 'srpc2', points: SRPC2, tone: 'alt', label: { en: 'SRPC2', ru: 'SRPC2' } };
const srpc2Muted: CurveSpec = { id: 'srpc2-muted', points: SRPC2, tone: 'muted', dashed: true, label: { en: 'SRPC2', ru: 'SRPC2' } };

const steps: Step[] = [
  {
    title: { en: 'Short-run curves', ru: 'Краткосрочные кривые' },
    text: {
      en: 'Each short-run Phillips curve slopes down. SRPC1 is drawn for expected inflation of 2%, SRPC2 for 4%. Each curve crosses the natural rate (5%) at its expected inflation: A is 2% and C is 4%.',
      ru: 'Каждая краткосрочная кривая Филлипса (short-run Phillips curve) идёт вниз. SRPC1 построена для ожидаемой инфляции 2%, SRPC2 для 4%. Каждая кривая пересекает естественный уровень безработицы (5%) при своей ожидаемой инфляции: в точке A это 2%, в точке C это 4%.',
    },
    graph: {
      ...axes,
      curves: [srpc1, srpc2],
      marks: [
        { id: 'A', at: [5, 2], tone: 'ink', label: { en: 'A', ru: 'A' } },
        { id: 'C', at: [5, 4], tone: 'alt', label: { en: 'C', ru: 'C' } },
      ],
    },
  },
  {
    title: { en: 'Long-run curve', ru: 'Долгосрочная кривая' },
    text: {
      en: 'The long-run Phillips curve (LRPC) is vertical at the natural rate of unemployment (NRU), 5%. The model assumes a fixed natural rate of 5%; it is not an observed universal constant. Structural changes can move that rate. With expectations adjusted, the model has no permanent inflation–unemployment trade-off.',
      ru: 'Долгосрочная кривая Филлипса (long-run Phillips curve, LRPC) вертикальна на естественном уровне безработицы (ЕУ), 5%. В модели естественный уровень принят постоянным и равным 5%; это не наблюдаемая универсальная константа. Структурные изменения могут его сдвинуть. После приспособления ожиданий постоянного компромисса инфляции и безработицы в модели нет.',
    },
    graph: {
      ...axes,
      curves: [LRPC, srpc1Muted, srpc2Muted],
      marks: [
        { id: 'A', at: [5, 2], tone: 'ink', label: { en: 'A', ru: 'A' } },
        { id: 'C', at: [5, 4], tone: 'alt', label: { en: 'C', ru: 'C' } },
      ],
    },
  },
  {
    title: { en: 'Demand expansion in the short run', ru: 'Расширение спроса в краткосрочном периоде' },
    text: {
      en: 'Demand expansion lowers unemployment to 3%, below the natural rate. The economy moves along SRPC1 from A to B: inflation rises from 2% to 4%.',
      ru: 'Расширение спроса (demand expansion) снижает безработицу до 3%, ниже естественного уровня. Экономика движется по SRPC1 из точки A в точку B: инфляция растёт с 2% до 4%.',
    },
    graph: {
      ...axes,
      curves: [LRPC, srpc1],
      guides: [
        { id: 'b-h', from: [0, 4], to: [3, 4], tone: 'muted' },
        { id: 'b-v', from: [3, 0], to: [3, 4], tone: 'muted' },
      ],
      marks: [
        { id: 'A', at: [5, 2], tone: 'muted', label: { en: 'A', ru: 'A' } },
        { id: 'B', at: [3, 4], tone: 'ink', label: { en: 'B', ru: 'B' } },
      ],
    },
  },
  {
    title: { en: 'Back to the natural rate', ru: 'Возврат к естественной безработице' },
    text: {
      en: 'Expected inflation rises to 4%, so SRPC2 applies. Nominal wages adjust to the higher expected inflation, removing the temporary real-wage advantage; in this model unemployment returns to 5% at C. Inflation stays at 4%: the lower unemployment was only temporary.',
      ru: 'Ожидаемая инфляция растёт до 4%, и теперь действует SRPC2. Номинальная зарплата приспосабливается к более высокой ожидаемой инфляции, устраняя временное снижение реальной зарплаты; в этой модели безработица возвращается к 5% (точка C). Инфляция остаётся на уровне 4%: снижение безработицы было лишь временным.',
    },
    graph: {
      ...axes,
      curves: [LRPC, srpc1Muted, srpc2],
      guides: [{ id: 'temp', from: [3, 4], to: [5, 4], tone: 'policy' }],
      marks: [
        { id: 'B', at: [3, 4], tone: 'policy', label: { en: 'B', ru: 'B' } },
        { id: 'C', at: [5, 4], tone: 'alt', label: { en: 'C', ru: 'C' } },
        { id: 'A', at: [5, 2], tone: 'ink', label: { en: 'A', ru: 'A' } },
      ],
    },
  },
];

export default function PhillipsLr({ lang }: { lang: Lang }) {
  return (
    <StepPlayer
      lang={lang}
      label={{ en: 'Long-run Phillips curve: natural rate and temporary gain', ru: 'Долгосрочная кривая Филлипса: естественный уровень и временный эффект' }}
      steps={steps}
    />
  );
}
