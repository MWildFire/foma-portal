import type { Lang } from '../../contract/types';
import { StepPlayer, fn, type AreaSpec, type CurveSpec, type MarkSpec, type Step, type TickSpec } from './_lib/graph';

// Lorenz curve (illustrative): the bottom p% of people earn p^2 / 100 % of income.
// So 20% of people earn 4%, 50% earn 25%, 80% earn 64%. The line of equality is the diagonal.
// Area A (between the diagonal and the curve) = 5000 - 3333 = 1667; area B (under the curve) = 3333;
// A + B = 100 x 100 / 2 = 5000. Gini G = A / (A + B) = 1667 / 5000 = 0.33.
const LORENZ = fn(p => (p * p) / 100, 0, 100, 40);

const ticks = (values: number[]): TickSpec[] => values.map(value => ({ value, label: { en: String(value), ru: String(value) } }));

const axes = {
  xMax: 100,
  yMax: 100,
  xLabel: { en: 'Cumulative % of population', ru: 'Накопленный % населения' },
  yLabel: { en: 'Cumulative % of income', ru: 'Накопленный % дохода' },
  xTicks: ticks([20, 40, 60, 80, 100]),
  yTicks: ticks([20, 40, 60, 80, 100]),
};

const equality: CurveSpec = { id: 'equality', points: [[0, 0], [100, 100]], tone: 'muted', dashed: true };
const lorenz: CurveSpec = { id: 'lorenz', points: LORENZ, tone: 'demand' };
const areaA: AreaSpec = { id: 'area-a', points: LORENZ, tone: 'alt' };
const areaB: AreaSpec = { id: 'area-b', points: [...LORENZ, [100, 0]], tone: 'demand' };

const equalityMark: MarkSpec = { id: 'equality', at: [40, 40], tone: 'muted', label: { en: 'Equality', ru: 'Равенство' }, dx: -62, dy: -12 };
const lorenzMark: MarkSpec = { id: 'lorenz', at: [60, 36], tone: 'demand', label: { en: 'Lorenz curve', ru: 'Кривая Лоренца' }, dx: 6, dy: 16 };
const p50Mark: MarkSpec = { id: 'p50', at: [50, 25], tone: 'demand', label: { en: '50%: 25%', ru: '50%: 25%' }, dx: 6, dy: 16 };
const markA: MarkSpec = { id: 'A', at: [50, 38], tone: 'alt', label: { en: 'A', ru: 'A' } };
const markB: MarkSpec = { id: 'B', at: [80, 15], tone: 'demand', label: { en: 'B', ru: 'B' } };

const steps: Step[] = [
  {
    title: { en: 'Line of equality', ru: 'Линия равенства (line of equality)' },
    text: {
      en: 'The dashed line is perfect equality: each share of the population earns the same share of income. For example, 40% of people would earn 40% of income.',
      ru: 'Пунктирная линия показывает полное равенство (line of equality): каждая доля населения получает такую же долю дохода. Например, 40% людей получали бы 40% дохода.',
    },
    graph: {
      ...axes,
      curves: [equality],
      marks: [equalityMark],
    },
  },
  {
    title: { en: 'Lorenz curve', ru: 'Кривая Лоренца (Lorenz curve)' },
    text: {
      en: 'The Lorenz curve shows the share of income earned by the poorest people. The bottom 50% of people earn 25% of income. The further the curve sags below the line, the more unequal the income.',
      ru: 'Кривая Лоренца показывает, какую долю дохода получают самые бедные. Нижние 50% людей получают 25% дохода. Чем сильнее кривая опускается ниже линии, тем неравномернее доходы.',
    },
    graph: {
      ...axes,
      curves: [equality, lorenz],
      guides: [
        { id: 'p-h', from: [0, 25], to: [50, 25], tone: 'muted' },
        { id: 'p-v', from: [50, 0], to: [50, 25], tone: 'muted' },
      ],
      marks: [p50Mark, lorenzMark],
    },
  },
  {
    title: { en: 'Areas A and B', ru: 'Площади A и B' },
    text: {
      en: 'Area A lies between the line of equality and the Lorenz curve: the bigger A, the more unequal the income. Area B lies under the Lorenz curve. A + B is the triangle under the line of equality: 100 x 100 / 2 = 5000, so A = 1667 and B = 3333.',
      ru: 'Площадь A лежит между линией равенства и кривой Лоренца: чем больше A, тем неравномернее доходы. Площадь B лежит под кривой Лоренца. A + B — треугольник под линией равенства: 100 x 100 / 2 = 5000, поэтому A = 1667 и B = 3333.',
    },
    graph: {
      ...axes,
      curves: [equality, lorenz],
      areas: [areaA, areaB],
      marks: [markA, markB],
    },
  },
  {
    title: { en: 'Gini coefficient', ru: 'Коэффициент Джини (Gini coefficient)' },
    text: {
      en: 'G = A / (A + B) = 1667 / 5000 = 0.33. G is 0 when income is perfectly equal and 1 when one person has all the income.',
      ru: 'G = A / (A + B) = 1667 / 5000 = 0.33. G равен 0 при полном равенстве доходов и 1, когда весь доход принадлежит одному человеку.',
    },
    graph: {
      ...axes,
      curves: [equality, lorenz],
      areas: [areaA, areaB],
      marks: [equalityMark, lorenzMark, markA, markB],
    },
  },
];

export default function Lorenz({ lang }: { lang: Lang }) {
  return (
    <StepPlayer
      lang={lang}
      label={{ en: 'Lorenz curve: inequality of income', ru: 'Кривая Лоренца: неравенство доходов' }}
      steps={steps}
    />
  );
}
