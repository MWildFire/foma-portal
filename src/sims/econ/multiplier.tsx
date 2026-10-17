import type { L, Lang } from '../../contract/types';
import { GraphViewport, StepFrame, type StepText } from './_lib/graph';

// Multiplier with MPC 0.8 (closed economy, no tax): k = 1 / (1 - 0.8) = 5.
// An injection of 100 raises income by 100 in round 1, then 80, 64, 51, 41 ... Each round is 0.8 of the one before.
// After 8 rounds the total is 416 (rounded values); in the limit it is 500 = 5 x 100.
// Step 5 sets a larger leakage against it: MPC 0.5, k = 1 / (1 - 0.5) = 2. The rounds are 100, 50, 25, 12.5, 6.25 (rounded
// below) and the limit is 200 = 2 x 100. The outlines show the rounds of MPC 0.8.
const ROUNDS = [100, 80, 64, 51, 41, 33, 26, 21];
const ROUNDS_MPC_05 = [100, 50, 25, 13, 6];
const BASE = 200;
const SCALE = 0.36;
const X0 = 56;
const SLOT = 32;
const BAR_W = 20;
const TOTAL_TOP = 500;
const LIMIT_MPC_05 = 200;
const LEGEND_TOP = 70;
const LEGEND_STEP = 14;

const INJECTION = '#16a34a';
const INDUCED = '#3b82f6';
const TOTAL = '#a855f7';
const SAVED = '#64748b';

// What each step draws: the rounds shown, the share saved in every round (the grey top of a bar), whether the total after 8
// rounds is shown, and whether the rounds of MPC 0.8 are drawn as outlines behind the bars.
interface Scene { values: number[]; saved: number; total?: boolean; compare?: boolean }
const SCENES: Scene[] = [
  { values: ROUNDS.slice(0, 1), saved: 0.2 },
  { values: ROUNDS.slice(0, 2), saved: 0.2 },
  { values: ROUNDS.slice(0, 5), saved: 0.2 },
  { values: ROUNDS, saved: 0.2, total: true },
  { values: ROUNDS_MPC_05, saved: 0.5, compare: true },
];

const yOf = (value: number): number => BASE - value * SCALE;
const xOf = (slot: number): number => X0 + SLOT * slot + (SLOT - BAR_W) / 2;

const TEXT = {
  yAxis: { en: 'Change in income', ru: 'Изменение дохода' } as L,
  xAxis: { en: 'Round of spending', ru: 'Раунд расходов' } as L,
  total: { en: 'total', ru: 'итого' } as L,
  limit: { en: 'limit 500', ru: 'предел 500' } as L,
  limitBefore: { en: 'MPC 0.8: limit 500', ru: 'MPC 0,8: предел 500' } as L,
  limitAfter: { en: 'MPC 0.5: limit 200', ru: 'MPC 0,5: предел 200' } as L,
  formula: { en: 'k = 1 / (1 - 0.8) = 5', ru: 'k = 1 / (1 - 0,8) = 5' } as L,
  formulaAfter: { en: 'k = 1 / (1 - 0.5) = 2', ru: 'k = 1 / (1 - 0,5) = 2' } as L,
};

// The legend names the colours of the bars; it stands in the empty part of the plot, above the bars.
interface LegendItem { key: string; colour: string; text: L; outline?: boolean }
const LEGEND: Record<'injection' | 'induced' | 'saved' | 'total' | 'before', LegendItem> = {
  injection: { key: 'injection', colour: INJECTION, text: { en: 'round 1: the injection', ru: 'раунд 1: инъекция' } },
  induced: { key: 'induced', colour: INDUCED, text: { en: 'induced spending, later rounds', ru: 'наведённые расходы, следующие раунды' } },
  saved: { key: 'saved', colour: SAVED, text: { en: 'saved: a leakage', ru: 'сбережения: изъятие' } },
  total: { key: 'total', colour: TOTAL, text: { en: 'total after 8 rounds', ru: 'итого за 8 раундов' } },
  before: { key: 'before', colour: SAVED, outline: true, text: { en: 'outline: rounds with MPC 0.8', ru: 'контур: раунды при MPC 0,8' } },
};

function legendItems(scene: Scene): LegendItem[] {
  return [
    LEGEND.injection,
    ...(scene.values.length > 1 ? [LEGEND.induced] : []),
    LEGEND.saved,
    ...(scene.total ? [LEGEND.total] : []),
    ...(scene.compare ? [LEGEND.before] : []),
  ];
}

function chart(index: number, lang: Lang) {
  const scene = SCENES[index];
  const yValues = [0, 100, 200, 300, 400, 500];

  return (
    <GraphViewport lang={lang}><svg role="img" aria-label={lang === 'en' ? 'Bar chart of the rounds of spending' : 'Столбчатая диаграмма раундов расходов'} viewBox="0 0 360 260" width="100%" style={{ maxWidth: 420, display: 'block', color: 'var(--color-fg)' }}>
      <line x1={X0} y1={BASE} x2={344} y2={BASE} stroke="currentColor" strokeWidth={1.5} />
      <line x1={X0} y1={BASE} x2={X0} y2={20} stroke="currentColor" strokeWidth={1.5} />
      {yValues.map(value => (
        <g key={`y${value}`}>
          <line x1={X0 - 4} y1={yOf(value)} x2={X0} y2={yOf(value)} stroke="currentColor" strokeWidth={1} />
          <text x={X0 - 7} y={yOf(value) + 4} textAnchor="end" fontSize={11} fill="currentColor">{value}</text>
        </g>
      ))}
      <text transform="translate(14 110) rotate(-90)" textAnchor="middle" fontSize={12} fill="currentColor">{TEXT.yAxis[lang]}</text>
      <text x={344} y={246} textAnchor="end" fontSize={12} fill="currentColor">{TEXT.xAxis[lang]}</text>

      {legendItems(scene).map((item, row) => (
        <g key={item.key}>
          <rect
            x={64}
            y={LEGEND_TOP + LEGEND_STEP * row - 8}
            width={9}
            height={9}
            fill={item.outline ? 'none' : item.colour}
            stroke={item.outline ? item.colour : 'none'}
            strokeDasharray={item.outline ? '3 2' : undefined}
          />
          <text x={78} y={LEGEND_TOP + LEGEND_STEP * row} fontSize={11} fill="currentColor">{item.text[lang]}</text>
        </g>
      ))}

      {scene.total && (
        <g>
          <line x1={X0} y1={yOf(TOTAL_TOP)} x2={344} y2={yOf(TOTAL_TOP)} stroke="currentColor" strokeWidth={1} strokeDasharray="5 4" />
          <text x={340} y={yOf(TOTAL_TOP) - 5} textAnchor="end" fontSize={11} fill="currentColor">{TEXT.limit[lang]}</text>
          <text x={X0 + 8} y={44} textAnchor="start" fontSize={13} fontWeight={600} fill="currentColor">{TEXT.formula[lang]}</text>
        </g>
      )}

      {scene.compare && (
        <g>
          <line x1={X0} y1={yOf(TOTAL_TOP)} x2={344} y2={yOf(TOTAL_TOP)} stroke={SAVED} strokeWidth={1} strokeDasharray="5 4" />
          <text x={340} y={yOf(TOTAL_TOP) - 5} textAnchor="end" fontSize={11} fill="currentColor">{TEXT.limitBefore[lang]}</text>
          <line x1={X0} y1={yOf(LIMIT_MPC_05)} x2={344} y2={yOf(LIMIT_MPC_05)} stroke="currentColor" strokeWidth={1} strokeDasharray="5 4" />
          <text x={340} y={yOf(LIMIT_MPC_05) - 5} textAnchor="end" fontSize={11} fill="currentColor">{TEXT.limitAfter[lang]}</text>
          <text x={X0 + 8} y={44} textAnchor="start" fontSize={13} fontWeight={600} fill="currentColor">{TEXT.formulaAfter[lang]}</text>
        </g>
      )}

      {scene.compare && scene.values.map((_, i) => (
        <rect key={`before${i}`} x={xOf(i)} y={yOf(ROUNDS[i])} width={BAR_W} height={ROUNDS[i] * SCALE} fill="none" stroke={SAVED} strokeWidth={1} strokeDasharray="3 2" />
      ))}

      {scene.values.map((value, i) => {
        const colour = i === 0 ? INJECTION : INDUCED;
        const x = xOf(i);
        // With the outlines of MPC 0.8 the number stands above the taller of the two, so no outline cuts through it.
        const top = scene.compare ? Math.max(value, ROUNDS[i]) : value;
        return (
          <g key={`r${i}`}>
            <rect x={x} y={yOf(value)} width={BAR_W} height={value * SCALE} fill={colour} />
            <rect x={x} y={yOf(value)} width={BAR_W} height={value * scene.saved * SCALE} fill={SAVED} />
            <text x={x + BAR_W / 2} y={yOf(top) - 4} textAnchor="middle" fontSize={11} fill="currentColor">{value}</text>
            <text x={x + BAR_W / 2} y={BASE + 14} textAnchor="middle" fontSize={11} fill="currentColor">{i + 1}</text>
          </g>
        );
      })}

      {scene.total && (
        <g>
          <rect x={xOf(8)} y={yOf(416)} width={BAR_W} height={416 * SCALE} fill={TOTAL} />
          <text x={xOf(8) + BAR_W / 2} y={yOf(416) - 4} textAnchor="middle" fontSize={11} fill="currentColor">416</text>
          <text x={xOf(8) + BAR_W / 2} y={BASE + 14} textAnchor="middle" fontSize={11} fill="currentColor">{TEXT.total[lang]}</text>
        </g>
      )}
    </svg></GraphViewport>
  );
}

const steps: StepText[] = [
  {
    title: { en: 'Injection', ru: 'Инъекция (injection)' },
    text: {
      en: 'In this illustrative fixed-price model with spare capacity, an autonomous injection of 100 raises real income by 100 in round 1. The later rounds assume a closed economy, no taxes and a constant MPC; bar labels are rounded.',
      ru: 'В этой учебной модели с постоянными ценами и свободными мощностями автономная инъекция в 100 повышает реальный доход на 100 в первом раунде. Последующие раунды предполагают закрытую экономику без налогов и постоянную MPC; подписи столбиков округлены.',
    },
  },
  {
    title: { en: 'Second round', ru: 'Второй раунд' },
    text: {
      en: 'Households spend 80% of the extra income (MPC 0.8). The grey top, 20%, is saved: a leakage. So round 2 adds 80.',
      ru: 'Домохозяйства тратят 80% дополнительного дохода (MPC 0,8). Серая часть, 20%, сберегается: это изъятие (leakage). Поэтому второй раунд добавляет 80.',
    },
  },
  {
    title: { en: 'Further rounds', ru: 'Следующие раунды' },
    text: {
      en: 'Each unrounded round is 0.8 times the one before: 64, then 51.2, then 40.96 (bar labels rounded to 64, 51, 41). The grey leakages take 20% each round, so the rounds get smaller.',
      ru: 'Каждый неокруглённый раунд равен 0,8 от предыдущего: 64, затем 51,2, затем 40,96 (подписи округлены до 64, 51, 41). Серые изъятия забирают 20% в каждом раунде, поэтому раунды становятся меньше.',
    },
  },
  {
    title: { en: 'Total change in income', ru: 'Итоговое изменение дохода' },
    text: {
      en: 'The total tends to 500 = 5 x 100, because k = 1 / (1 - 0.8) = 5. After 8 rounds the sum is approximately 416.11, displayed as 416.',
      ru: 'Сумма стремится к 500 = 5 × 100, потому что k = 1 / (1 - 0,8) = 5. После 8 раундов сумма примерно равна 416,11; на графике показано 416.',
    },
  },
  {
    title: { en: 'A larger leakage: MPC 0.5', ru: 'Большее изъятие: MPC 0,5' },
    text: {
      en: 'Now MPC is 0.5, so half of each round is saved (grey). The rounds shrink faster: 100, 50, 25, 13, 6 (the outlines show the rounds for MPC 0.8). Numbers label the filled bars at MPC 0.5. The multiplier is smaller: k = 1 / (1 - 0.5) = 2, so the total tends to 200, not 500.',
      ru: 'Теперь MPC равна 0,5, поэтому половина каждого раунда сберегается (серая часть). Раунды уменьшаются быстрее: 100, 50, 25, 13, 6 (контуры показывают раунды при MPC 0,8). Числа относятся к закрашенным столбцам при MPC 0,5. Мультипликатор меньше: k = 1 / (1 - 0,5) = 2, поэтому сумма стремится к 200, а не к 500.',
    },
  },
];

export default function Multiplier({ lang }: { lang: Lang }) {
  return (
    <StepFrame
      lang={lang}
      label={{ en: 'Multiplier: rounds of spending (injection 100; MPC 0.8, then 0.5)', ru: 'Мультипликатор: раунды расходов (инъекция 100; MPC 0,8, затем 0,5)' }}
      steps={steps}
    >
      {index => chart(index, lang)}
    </StepFrame>
  );
}
