import type { L, Lang } from '../../contract/types';
import { StepFrame, type StepText } from './_lib/graph';

// Balance of payments, USD bn, illustrative. Every entry is a net receipt of foreign currency: plus = money in, minus = money out.
// Current account: goods -50, services +20, primary income +10, secondary income -5, so -25 (a deficit).
// Capital account +1, financial account +20 (net inflow of investment and loans). Balance before reserves: -25 + 1 + 20 = -4.
// The central bank covers the gap by selling 4 of reserves (reserves used +4). Total: 0.

type Tone = 'gain' | 'loss' | 'policy' | 'ink';

interface Row { label: L; value: number; tone: Tone; bold?: boolean }

const ROWS: Row[] = [
  { label: { en: 'goods (trade)', ru: 'товары' }, value: -50, tone: 'loss' },
  { label: { en: 'services', ru: 'услуги' }, value: 20, tone: 'gain' },
  { label: { en: 'primary income', ru: 'первичные доходы' }, value: 10, tone: 'gain' },
  { label: { en: 'secondary income', ru: 'вторичные доходы' }, value: -5, tone: 'loss' },
  { label: { en: 'current account', ru: 'счёт текущих операций' }, value: -25, tone: 'ink', bold: true },
  { label: { en: 'capital account', ru: 'счёт капитала' }, value: 1, tone: 'gain' },
  { label: { en: 'financial account', ru: 'финансовый счёт' }, value: 20, tone: 'gain' },
  { label: { en: 'balance before reserves', ru: 'баланс до резервов' }, value: -4, tone: 'ink', bold: true },
  { label: { en: 'reserves used', ru: 'резервы (расход)' }, value: 4, tone: 'policy' },
  { label: { en: 'total', ru: 'итого' }, value: 0, tone: 'ink', bold: true },
];

// How many rows are shown at each step (rows are drawn in this order, from the top).
const SHOWN = [2, 5, 8, 10];

const COLOUR: Record<Tone, string> = { gain: '#22c55e', loss: '#ef4444', policy: '#a855f7', ink: 'currentColor' };
const TOP = 14;
const ROW_H = 22;
const LABEL_X = 4;
const ZERO_X = 264;
const SCALE = 2;
const VALUE_X = 352;

const rowY = (i: number): number => TOP + i * ROW_H;
const fmt = (value: number): string => (value > 0 ? '+' + value : value < 0 ? '−' + Math.abs(value) : '0');

function chart(index: number, lang: Lang) {
  const shown = SHOWN[index];
  return (
    <svg
      role="img"
      aria-label={lang === 'en' ? 'Bar chart of the balance of payments accounts' : 'Столбчатая диаграмма счетов платёжного баланса'}
      viewBox="0 0 360 250"
      width="100%"
      style={{ maxWidth: 420, display: 'block', color: 'var(--color-fg)' }}
    >
      <line x1={ZERO_X} y1={TOP} x2={ZERO_X} y2={rowY(ROWS.length)} stroke="currentColor" strokeWidth={1} />
      {ROWS.map((row, i) => {
        const active = i < shown;
        const y = rowY(i);
        const x = row.value >= 0 ? ZERO_X : ZERO_X + row.value * SCALE;
        const width = Math.abs(row.value) * SCALE;
        return (
          <g key={i} opacity={active ? 1 : 0.3}>
            <text x={LABEL_X} y={y + 15} fontSize={11} fontWeight={row.bold ? 600 : 400} fill="currentColor">{row.label[lang]}</text>
            {active && width > 0 && <rect x={x} y={y + 4} width={width} height={14} fill={COLOUR[row.tone]} />}
            {active && <text x={VALUE_X} y={y + 15} textAnchor="end" fontSize={11} fontWeight={600} fill="currentColor">{fmt(row.value)}</text>}
          </g>
        );
      })}
    </svg>
  );
}

const steps: StepText[] = [
  {
    title: { en: 'Goods and services', ru: 'Товары и услуги' },
    text: {
      en: 'Goods are −50 (imports are more than exports) and services are +20. A plus is money coming in, a minus is money going out.',
      ru: 'Товары дают −50 (импорт больше экспорта), услуги +20. Плюс — деньги поступают в страну, минус — уходят из неё.',
    },
  },
  {
    title: { en: 'Current account', ru: 'Счёт текущих операций' },
    text: {
      en: 'Primary income (+10, for example interest and profits from abroad) and secondary income (−5, for example transfers) complete the current account: −25, a deficit.',
      ru: 'Первичные доходы (+10, например проценты и прибыль из-за границы) и вторичные доходы (−5, например переводы) завершают счёт текущих операций (current account): −25, дефицит.',
    },
  },
  {
    title: { en: 'Capital and financial accounts', ru: 'Счёт капитала и финансовый счёт' },
    text: {
      en: 'The capital account (+1) and the financial account (+20, net foreign investment and loans coming in) bring the balance before reserves to −25 + 1 + 20 = −4.',
      ru: 'Счёт капитала (+1) и финансовый счёт (+20, чистый приток иностранных инвестиций и кредитов) дают баланс до резервов: −25 + 1 + 20 = −4.',
    },
  },
  {
    title: { en: 'Reserves: the total is zero', ru: 'Резервы: итог равен нулю' },
    text: {
      en: 'The central bank covers the gap by selling 4 of its reserves (+4). Once reserve changes are included, the accounts sum to zero (errors and omissions ignored).',
      ru: 'Центральный банк покрывает разрыв, продав 4 единицы резервов (+4). С учётом изменения резервов счета в сумме дают ноль (ошибки и пропуски не учитываем).',
    },
  },
];

export default function BopAccounts({ lang }: { lang: Lang }) {
  return (
    <StepFrame
      lang={lang}
      label={{
        en: 'Balance of payments: current, capital and financial accounts (USD bn, illustrative)',
        ru: 'Платёжный баланс: текущий, капитальный и финансовый счета (млрд USD, условно)',
      }}
      steps={steps}
    >
      {index => chart(index, lang)}
    </StepFrame>
  );
}
