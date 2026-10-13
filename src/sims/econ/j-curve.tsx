import type { Lang } from '../../contract/types';
import { StepPlayer, fn, type CurveSpec, type GuideSpec, type MarkSpec, type Step, type TickSpec } from './_lib/graph';

// J-curve: trade balance after a depreciation. The shape is illustrative, not measured data.
// Balance B(t) = 3.3 × (7 × (1 − e^(−t/12)) − t × e^(−t/12)): 0 at month 0, a trough of about −3 at month 5,
// back to about 0 at month 12, then a surplus that keeps growing. The plot value is B + 5, so the zero line is at 5.
const balance = (t: number): number => 3.3 * (7 * (1 - Math.exp(-t / 12)) - t * Math.exp(-t / 12)) + 5;

const tick = (value: number, text: string): TickSpec => ({ value, label: { en: text, ru: text } });
const curve = (to: number): CurveSpec => ({ id: 'b-' + to, points: fn(balance, 0, to, to * 4), tone: 'demand', width: 3 });

const axes = {
  xMax: 24,
  yMax: 15,
  xLabel: { en: 'Months after depreciation', ru: 'Месяцы после удешевления валюты' },
  yLabel: { en: 'Trade balance', ru: 'Торговый баланс' },
  xTicks: [tick(6, '6'), tick(12, '12'), tick(18, '18'), tick(24, '24')],
  yTicks: [tick(2, '−3'), tick(5, '0'), tick(8, '+3'), tick(11, '+6'), tick(14, '+9')],
};

const zeroLine: GuideSpec = { id: 'zero', from: [0, 5], to: [24, 5], tone: 'muted' };

const start: MarkSpec = { id: 'start', at: [0, 5], tone: 'ink', label: { en: 'start', ru: 'начало' }, dx: 8, dy: -8 };
const trough: MarkSpec = { id: 'trough', at: [5, balance(5)], tone: 'loss', label: { en: 'trough', ru: 'минимум' }, dx: 8, dy: 16 };
const back: MarkSpec = { id: 'back', at: [12, balance(12)], tone: 'ink', label: { en: 'back to 0', ru: 'возврат к 0' }, dx: 6, dy: 16 };
const surplus: MarkSpec = { id: 'surplus', at: [24, balance(24)], tone: 'gain', label: { en: 'surplus', ru: 'профицит' }, dx: -60, dy: -8 };

const steps: Step[] = [
  {
    title: { en: 'Depreciation at month 0', ru: 'Удешевление валюты в месяце 0' },
    text: {
      en: 'Imports cost more in home currency as soon as the currency depreciates. At month 0 the trade balance is zero: the middle line, with deficits below it and surpluses above.',
      ru: 'Импорт дорожает в национальной валюте сразу после удешевления валюты (depreciation). В месяце 0 торговый баланс равен нулю: ниже средней линии дефицит, выше — профицит.',
    },
    graph: { ...axes, guides: [zeroLine], marks: [start] },
  },
  {
    title: { en: 'Short run: the deficit grows', ru: 'Короткий срок: дефицит растёт' },
    text: {
      en: 'Import prices rise at once, but volumes adjust slowly because demand is inelastic in the short run, so the deficit grows. By month 5 the balance has fallen to about −3 (illustrative).',
      ru: 'Цены импорта растут сразу, а объёмы меняются медленно: в краткосрочном периоде спрос неэластичен (inelastic), поэтому дефицит растёт. К 5-му месяцу баланс падает примерно до −3 (условно).',
    },
    graph: { ...axes, curves: [curve(5)], guides: [zeroLine], marks: [start, trough] },
  },
  {
    title: { en: 'Volumes adjust: the balance recovers', ru: 'Объёмы подстраиваются: баланс восстанавливается' },
    text: {
      en: 'Export and import volumes now respond: exports are cheaper abroad and imports are replaced by home goods. The balance is back to zero at about month 12.',
      ru: 'Объёмы теперь реагируют: экспорт дешевле для иностранцев, импорт вытесняется отечественными товарами. Баланс возвращается к нулю примерно на 12-м месяце.',
    },
    graph: { ...axes, curves: [curve(12)], guides: [zeroLine], marks: [start, trough, back] },
  },
  {
    title: { en: 'Later: a surplus', ru: 'Позже: профицит' },
    text: {
      en: 'After about a year the balance is positive and keeps rising as export volumes grow. The line now has the J shape: a fall, then a rise above the starting level.',
      ru: 'Примерно через год баланс положителен и продолжает расти вместе с объёмами экспорта. Линия приобретает форму J: падение, затем рост выше исходного уровня.',
    },
    graph: { ...axes, curves: [curve(24)], guides: [zeroLine], marks: [start, back, surplus] },
  },
  {
    title: { en: 'Complete J-curve', ru: 'Полная J-кривая' },
    text: {
      en: 'The balance worsens to a trough near month 5, is back at zero near month 12 and ends above its start. The shape is illustrative, not measured data.',
      ru: 'Полная J-кривая (J-curve): баланс ухудшается до минимума около 5-го месяца, возвращается к нулю около 12-го и заканчивается выше исходного уровня. Форма условная, это не измеренные данные.',
    },
    graph: { ...axes, curves: [curve(24)], guides: [zeroLine], marks: [start, trough, back, surplus] },
  },
];

export default function JCurve({ lang }: { lang: Lang }) {
  return (
    <StepPlayer
      lang={lang}
      label={{ en: 'J-curve: trade balance after a depreciation', ru: 'J-кривая: торговый баланс после удешевления валюты' }}
      steps={steps}
    />
  );
}
