import type { Lang } from '../../contract/types';
import { StepPlayer, type CurveSpec, type GraphSpec, type GuideSpec, type MarkSpec, type Point, type Step, type TickSpec } from './_lib/graph';

// Terms of trade (TOT) with illustrative price indices, year 0 = 100.
// Export prices Px: 100, 120, 125, 110, 115. Import prices Pm: 100, 105, 115, 120, 115.
// TOT = Px / Pm × 100: 100, 114.3, 108.7, 91.7, 100.0 (120/105, 125/115, 110/120, 115/115).
const PX: Point[] = [[0, 100], [1, 120], [2, 125], [3, 110], [4, 115]];
const PM: Point[] = [[0, 100], [1, 105], [2, 115], [3, 120], [4, 115]];
const TOT: Point[] = [[0, 100], [1, 114.3], [2, 108.7], [3, 91.7], [4, 100]];

const tick = (value: number, text: string): TickSpec => ({ value, label: { en: text, ru: text } });

const axes = {
  xMax: 4,
  yMax: 130,
  xLabel: { en: 'Time (years)', ru: 'Время (годы)' },
  yLabel: { en: 'Index (year 0 = 100)', ru: 'Индекс (год 0 = 100)' },
  xTicks: [tick(1, '1'), tick(2, '2'), tick(3, '3'), tick(4, '4')],
  yTicks: [tick(80, '80'), tick(100, '100'), tick(120, '120')],
};

const curves: CurveSpec[] = [
  { id: 'px', points: PX, tone: 'demand', width: 2 },
  { id: 'pm', points: PM, tone: 'supply', width: 2 },
  { id: 'tot', points: TOT, tone: 'ink', width: 3 },
];

const baseLine: GuideSpec = { id: 'base', from: [0, 100], to: [4, 100], tone: 'muted' };

// Permanent names of the three lines, placed where the lines are clear of each other. Each name is a guide of zero length: it
// draws no line and no dot, only the text, so it cannot be mistaken for the marker of the year in question.
const legend: GuideSpec[] = [
  { id: 'l-px', from: [1.86, 127.6], to: [1.86, 127.6], tone: 'demand', label: { en: 'Px', ru: 'Px' } },
  { id: 'l-pm', from: [3.03, 121.3], to: [3.03, 121.3], tone: 'supply', label: { en: 'Pm', ru: 'Pm' } },
  { id: 'l-tot', from: [3.03, 79.5], to: [3.03, 79.5], tone: 'ink', label: { en: 'TOT', ru: 'TOT' } },
];

// The year in question: circles on the three lines and a dashed guide down to the axis.
function yearMarks(year: number): { marks: MarkSpec[]; guides: GuideSpec[] } {
  const marks: MarkSpec[] = [
    { id: 'px-' + year, at: [year, PX[year][1]], tone: 'demand' },
    { id: 'pm-' + year, at: [year, PM[year][1]], tone: 'supply' },
    { id: 'tot-' + year, at: [year, TOT[year][1]], tone: 'ink' },
  ];
  const guides: GuideSpec[] = year === 0 ? [] : [{ id: 'year-' + year, from: [year, 0], to: [year, TOT[year][1]], tone: 'muted' }];
  return { marks, guides };
}

function stepGraph(year: number): GraphSpec {
  const { marks, guides } = yearMarks(year);
  return { ...axes, curves, guides: [baseLine, ...legend, ...guides], marks };
}

const steps: Step[] = [
  {
    title: { en: 'Year 0: both indices at 100', ru: 'Год 0: оба индекса равны 100' },
    text: {
      en: 'Both indices start at 100 in year 0. Terms of trade (TOT) = export index / import index × 100 = 100 / 100 × 100 = 100.',
      ru: 'Оба индекса стартуют со 100 в году 0. Условия торговли (terms of trade, TOT) = индекс экспорта / индекс импорта × 100 = 100 / 100 × 100 = 100.',
    },
    graph: stepGraph(0),
  },
  {
    title: { en: 'Year 1: export prices rise faster', ru: 'Год 1: экспортные цены растут быстрее' },
    text: {
      en: 'Export prices rise 20% (100 to 120) and import prices 5% (100 to 105): TOT = 120 / 105 × 100 = 114.3, so the terms of trade improve.',
      ru: 'Цены экспорта выросли на 20% (с 100 до 120), цены импорта на 5% (до 105): TOT = 120 / 105 × 100 = 114.3, условия торговли улучшились.',
    },
    graph: stepGraph(1),
  },
  {
    title: { en: 'Year 2: import prices catch up', ru: 'Год 2: цены импорта догоняют' },
    text: {
      en: 'Import prices catch up: they rise to 115 and export prices reach 125, so TOT = 125 / 115 × 100 = 108.7. The gain is smaller but the index stays above 100.',
      ru: 'Цены импорта догоняют: 115, цены экспорта 125, поэтому TOT = 125 / 115 × 100 = 108.7. Выигрыш меньше, но индекс остаётся выше 100.',
    },
    graph: stepGraph(2),
  },
  {
    title: { en: 'Year 3: terms of trade worsen', ru: 'Год 3: условия торговли ухудшаются' },
    text: {
      en: 'Export prices fall to 110 while import prices rise to 120, so TOT = 110 / 120 × 100 = 91.7: exports buy fewer imports.',
      ru: 'Цены экспорта падают до 110, цены импорта растут до 120, поэтому TOT = 110 / 120 × 100 = 91.7: экспорт покупает меньше импорта.',
    },
    graph: stepGraph(3),
  },
  {
    title: { en: 'Year 4: back to 100 (complete picture)', ru: 'Год 4: снова 100 (полная картина)' },
    text: {
      en: 'In year 4 both indices reach 115, so TOT = 115 / 115 × 100 = 100 again. The index moves with the gap between export and import prices.',
      ru: 'В году 4 оба индекса равны 115, поэтому TOT = 115 / 115 × 100 = 100 снова. Индекс движется вслед за разрывом между ценами экспорта и импорта.',
    },
    graph: stepGraph(4),
  },
];

export default function TermsOfTrade({ lang }: { lang: Lang }) {
  return (
    <StepPlayer
      lang={lang}
      label={{
        en: 'Terms of trade: export and import price indices (illustrative)',
        ru: 'Условия торговли: индексы цен экспорта и импорта (условно)',
      }}
      steps={steps}
    />
  );
}
