import type { L, Lang } from '../../contract/types';
import { StepFrame, type StepText } from './_lib/graph';

// Multiplier with MPC 0.8 (closed economy, no tax): k = 1 / (1 - 0.8) = 5.
// An injection of 100 raises income by 100 in round 1, then 80, 64, 51, 41 ... Each round is 0.8 of the one before.
// After 8 rounds the total is 416 (rounded values); in the limit it is 500 = 5 x 100.
const ROUNDS = [100, 80, 64, 51, 41, 33, 26, 21];
const SHOWN = [1, 2, 5, 8];
const SAVED_SHARE = 0.2;
const BASE = 200;
const SCALE = 0.36;
const X0 = 56;
const SLOT = 32;
const BAR_W = 20;
const TOTAL_TOP = 500;

const INJECTION = '#22c55e';
const INDUCED = '#3b82f6';
const TOTAL = '#a855f7';
const SAVED = '#94a3b8';

const yOf = (value: number): number => BASE - value * SCALE;
const xOf = (slot: number): number => X0 + SLOT * slot + (SLOT - BAR_W) / 2;

const TEXT = {
  yAxis: { en: 'Change in income', ru: 'Изменение дохода' } as L,
  xAxis: { en: 'Round of spending', ru: 'Раунд расходов' } as L,
  total: { en: 'total', ru: 'итого' } as L,
  limit: { en: 'limit 500', ru: 'предел 500' } as L,
  formula: { en: 'k = 1 / (1 - 0.8) = 5', ru: 'k = 1 / (1 - 0.8) = 5' } as L,
};

function chart(index: number, lang: Lang) {
  const shown = SHOWN[index];
  const showTotal = index === 3;
  const yValues = [0, 100, 200, 300, 400, 500];

  return (
    <svg role="img" aria-label={lang === 'en' ? 'Bar chart of the rounds of spending' : 'Столбчатая диаграмма раундов расходов'} viewBox="0 0 360 260" width="100%" style={{ maxWidth: 420, display: 'block', color: 'var(--color-fg)' }}>
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

      {showTotal && (
        <g>
          <line x1={X0} y1={yOf(TOTAL_TOP)} x2={344} y2={yOf(TOTAL_TOP)} stroke="currentColor" strokeWidth={1} strokeDasharray="5 4" />
          <text x={340} y={yOf(TOTAL_TOP) - 5} textAnchor="end" fontSize={11} fill="currentColor">{TEXT.limit[lang]}</text>
          <text x={X0 + 8} y={44} textAnchor="start" fontSize={13} fontWeight={600} fill={INDUCED}>{TEXT.formula[lang]}</text>
        </g>
      )}

      {ROUNDS.slice(0, shown).map((value, i) => {
        const colour = i === 0 ? INJECTION : INDUCED;
        const x = xOf(i);
        return (
          <g key={`r${i}`}>
            <rect x={x} y={yOf(value)} width={BAR_W} height={value * SCALE} fill={colour} />
            <rect x={x} y={yOf(value)} width={BAR_W} height={value * SAVED_SHARE * SCALE} fill={SAVED} />
            <text x={x + BAR_W / 2} y={yOf(value) - 4} textAnchor="middle" fontSize={11} fill="currentColor">{value}</text>
            <text x={x + BAR_W / 2} y={BASE + 14} textAnchor="middle" fontSize={11} fill="currentColor">{i + 1}</text>
          </g>
        );
      })}

      {showTotal && (
        <g>
          <rect x={xOf(8)} y={yOf(416)} width={BAR_W} height={416 * SCALE} fill={TOTAL} />
          <text x={xOf(8) + BAR_W / 2} y={yOf(416) - 4} textAnchor="middle" fontSize={11} fill="currentColor">416</text>
          <text x={xOf(8) + BAR_W / 2} y={BASE + 14} textAnchor="middle" fontSize={11} fill="currentColor">{TEXT.total[lang]}</text>
        </g>
      )}
    </svg>
  );
}

const steps: StepText[] = [
  {
    title: { en: 'Injection', ru: 'Инъекция (injection)' },
    text: {
      en: 'A new injection of 100 (for example investment, government spending or exports) raises income by 100 in the first round.',
      ru: 'Новая инъекция (injection) в 100 (например, инвестиции, госрасходы или экспорт) повышает доход на 100 в первом раунде.',
    },
  },
  {
    title: { en: 'Second round', ru: 'Второй раунд' },
    text: {
      en: 'Households spend 80% of the extra income (MPC 0.8). The grey top, 20%, is saved: a leakage. So round 2 adds 80.',
      ru: 'Домохозяйства тратят 80% дополнительного дохода (MPC 0.8). Серая часть, 20%, сберегается: это утечка (leakage). Поэтому второй раунд добавляет 80.',
    },
  },
  {
    title: { en: 'Further rounds', ru: 'Следующие раунды' },
    text: {
      en: 'Each round is 0.8 times the one before: 64, then 51, then 41. The grey leakages take 20% each round, so the rounds get smaller.',
      ru: 'Каждый раунд равен 0.8 от предыдущего: 64, затем 51, затем 41. Серые утечки забирают 20% в каждом раунде, поэтому раунды становятся меньше.',
    },
  },
  {
    title: { en: 'Total change in income', ru: 'Итоговое изменение дохода' },
    text: {
      en: 'The total tends to 500 = 5 x 100, because k = 1 / (1 - 0.8) = 5. After 8 rounds the sum is already 416.',
      ru: 'Сумма стремится к 500 = 5 × 100, потому что k = 1 / (1 - 0.8) = 5. После 8 раундов сумма уже равна 416.',
    },
  },
];

export default function Multiplier({ lang }: { lang: Lang }) {
  return (
    <StepFrame
      lang={lang}
      label={{ en: 'Multiplier: rounds of spending (MPC 0.8, injection 100)', ru: 'Мультипликатор: раунды расходов (MPC 0.8, инъекция 100)' }}
      steps={steps}
    >
      {index => chart(index, lang)}
    </StepFrame>
  );
}
