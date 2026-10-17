import type { Lang } from '../../contract/types';
import { StepPlayer, fn, type CurveSpec, type Step, type TickSpec } from './_lib/graph';

// Short-run Phillips curve with natural rate u* = 5 and slope -1: inflation = expected inflation + (5 - u).
// SRPC1 (expected inflation 3%): inflation = 8 - u. At u = 5 inflation equals expected inflation (3%).
// SRPC2 (expected inflation 5%): inflation = 10 - u. The whole curve moves up by 2 points at every u.
const SRPC1 = fn(u => 8 - u, 0, 8, 8);
const SRPC2 = fn(u => 10 - u, 0, 8, 8);

const ticks = (values: number[]): TickSpec[] => values.map(value => ({ value, label: { en: String(value), ru: String(value) } }));

const axes = {
  xMax: 10,
  yMax: 12,
  xLabel: { en: 'Unemployment (%)', ru: 'Безработица (%)' },
  yLabel: { en: 'Inflation (%)', ru: 'Инфляция (%)' },
  xTicks: [...ticks([2, 8]), { value: 5, label: { en: '5 (NRU)', ru: '5 (ЕУ)' } }],
  yTicks: ticks([2, 4, 6, 8, 10]),
};

const srpc1: CurveSpec = { id: 'srpc1', points: SRPC1, tone: 'demand', label: { en: 'SRPC1', ru: 'SRPC1' } };
const srpc1Old: CurveSpec = { id: 'srpc1-old', points: SRPC1, tone: 'muted', dashed: true, label: { en: 'SRPC1', ru: 'SRPC1' } };
const srpc2: CurveSpec = { id: 'srpc2', points: SRPC2, tone: 'alt', label: { en: 'SRPC2', ru: 'SRPC2' } };

const steps: Step[] = [
  {
    title: { en: 'Trade-off in the short run', ru: 'Компромисс в краткосрочном периоде' },
    text: {
      en: 'The short-run Phillips curve (SRPC1, expected inflation 3%) slopes down: lower unemployment comes with higher inflation. At 4% unemployment inflation is 4% (A); at 6% it is 2% (B).',
      ru: 'Краткосрочная кривая Филлипса (short-run Phillips curve, SRPC1, ожидаемая инфляция 3%) идёт вниз; ЕУ — естественный уровень безработицы (5% в модели). При более низкой безработице инфляция выше. При безработице 4% инфляция равна 4% (A); при 6% она равна 2% (B).',
    },
    graph: {
      ...axes,
      curves: [srpc1],
      guides: [
        { id: 'a-h', from: [0, 4], to: [4, 4], tone: 'muted' },
        { id: 'a-v', from: [4, 0], to: [4, 4], tone: 'muted' },
        { id: 'b-h', from: [0, 2], to: [6, 2], tone: 'muted' },
        { id: 'b-v', from: [6, 0], to: [6, 2], tone: 'muted' },
      ],
      marks: [
        { id: 'A', at: [4, 4], tone: 'ink', label: { en: 'A', ru: 'A' } },
        { id: 'B', at: [6, 2], tone: 'ink', label: { en: 'B', ru: 'B' } },
      ],
    },
  },
  {
    title: { en: 'Rise in expected inflation', ru: 'Рост ожидаемой инфляции' },
    text: {
      en: 'If expected inflation rises from 3% to 5%, the whole curve shifts up by 2 points (SRPC2). At 5% unemployment, inflation rises from 3% (D) to 5% (C).',
      ru: 'Если ожидаемая инфляция вырастет с 3% до 5%, вся кривая сдвинется вверх на 2 процентных пункта (SRPC2). При безработице 5% инфляция вырастет с 3% (D) до 5% (C).',
    },
    graph: {
      ...axes,
      curves: [srpc1Old, srpc2],
      guides: [{ id: 'shift', from: [5, 3], to: [5, 5], tone: 'muted' }],
      marks: [
        { id: 'D', at: [5, 3], tone: 'muted', label: { en: 'D', ru: 'D' } },
        { id: 'C', at: [5, 5], tone: 'alt', label: { en: 'C', ru: 'C' } },
      ],
    },
  },
  {
    title: { en: 'Summary', ru: 'Итог' },
    text: {
      en: 'Both curves slope down. A rise in expected inflation shifts the short-run curve up, so the same unemployment rate now comes with higher inflation. The trade-off remains, at a higher inflation rate.',
      ru: 'Обе кривые идут вниз. Рост ожидаемой инфляции сдвигает краткосрочную кривую вверх, поэтому при той же безработице инфляция выше. Компромисс сохраняется, но на более высоком уровне инфляции.',
    },
    graph: {
      ...axes,
      curves: [srpc1, srpc2],
      guides: [{ id: 'shift', from: [5, 3], to: [5, 5], tone: 'muted' }],
      marks: [
        { id: 'A', at: [4, 4], tone: 'ink', label: { en: 'A', ru: 'A' } },
        { id: 'B', at: [6, 2], tone: 'ink', label: { en: 'B', ru: 'B' } },
        { id: 'D', at: [5, 3], tone: 'demand', label: { en: 'D', ru: 'D' } },
        { id: 'C', at: [5, 5], tone: 'alt', label: { en: 'C', ru: 'C' } },
      ],
    },
  },
];

export default function PhillipsSr({ lang }: { lang: Lang }) {
  return (
    <StepPlayer
      lang={lang}
      label={{ en: 'Short-run Phillips curve: trade-off and shift', ru: 'Краткосрочная кривая Филлипса: компромисс и сдвиг' }}
      steps={steps}
    />
  );
}
