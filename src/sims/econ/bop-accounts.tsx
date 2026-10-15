import type { L, Lang } from '../../contract/types';
import { StepFrame, type StepText } from './_lib/graph';

// Balance of payments, USD bn, illustrative. Every entry is a net receipt of foreign currency: plus = money in, minus = money out.
// Current account: goods -50, services +20, primary income +10, secondary income -5, so -25 (a deficit).
// Capital account +1. Financial account +24: net investment and loans +20 and official reserves +4 (the central bank sells 4 of
// its reserves; Tragakes ch.16 Table 16.3 puts the reserve assets inside the financial account).
// The three accounts add up to zero: -25 + 1 + 24 = 0 (errors and omissions ignored).

type Tone = 'gain' | 'loss' | 'policy' | 'ink';

// part: the last stretch of the bar, drawn in its own colour (the official reserves inside the financial account).
// note: a short text left of the zero line, in the colour of the part.
interface Row { label: L; value: number; tone: Tone; bold?: boolean; part?: { value: number; tone: Tone }; note?: L }

const ROWS: Row[] = [
  { label: { en: 'goods (trade)', ru: 'товары' }, value: -50, tone: 'loss' },
  { label: { en: 'services', ru: 'услуги' }, value: 20, tone: 'gain' },
  { label: { en: 'primary income', ru: 'первичные доходы' }, value: 10, tone: 'gain' },
  { label: { en: 'secondary income', ru: 'вторичные доходы' }, value: -5, tone: 'loss' },
  { label: { en: 'current account', ru: 'счёт текущих операций' }, value: -25, tone: 'ink', bold: true },
  { label: { en: 'capital account', ru: 'счёт капитала' }, value: 1, tone: 'gain' },
  {
    label: { en: 'financial account', ru: 'финансовый счёт' },
    value: 24,
    tone: 'gain',
    bold: true,
    part: { value: 4, tone: 'policy' },
    note: { en: 'incl. official reserves +4', ru: 'вкл. официальные резервы +4' },
  },
  { label: { en: 'sum of the three accounts', ru: 'сумма трёх счетов' }, value: 0, tone: 'ink', bold: true },
];

// How many rows are shown at each step (rows are drawn in this order, from the top).
const SHOWN = [2, 5, 7, 8];

const COLOUR: Record<Tone, string> = { gain: '#22c55e', loss: '#ef4444', policy: '#a855f7', ink: 'currentColor' };
const TOP = 14;
const ROW_H = 22;
const LABEL_X = 4;
const ZERO_X = 264;
const SCALE = 2;
const VALUE_X = 352;
// A row with a note shows it on a second line under its label (baseline NOTE_DY below the top of the row), so it cannot run
// into the label; the rows below that row move down by NOTE_GAP to make room.
const NOTE_DY = 28;
const NOTE_GAP = 8;
const NOTE_ROW = ROWS.findIndex(row => row.note !== undefined);

const rowY = (i: number): number => TOP + i * ROW_H + (NOTE_ROW >= 0 && i > NOTE_ROW ? NOTE_GAP : 0);
const HEIGHT = rowY(ROWS.length) + 16;
const fmt = (value: number): string => (value > 0 ? '+' + value : value < 0 ? '−' + Math.abs(value) : '0');

function chart(index: number, lang: Lang) {
  const shown = SHOWN[index];
  return (
    <svg
      role="img"
      aria-label={lang === 'en' ? 'Bar chart of the balance of payments accounts' : 'Столбчатая диаграмма счетов платёжного баланса'}
      viewBox={`0 0 360 ${HEIGHT}`}
      width="100%"
      style={{ maxWidth: 420, display: 'block', color: 'var(--color-fg)' }}
    >
      <line x1={ZERO_X} y1={TOP} x2={ZERO_X} y2={rowY(ROWS.length)} stroke="currentColor" strokeWidth={1} />
      {ROWS.map((row, i) => {
        const active = i < shown;
        const y = rowY(i);
        const x = row.value >= 0 ? ZERO_X : ZERO_X + row.value * SCALE;
        const width = Math.abs(row.value) * SCALE;
        const part = row.part;
        return (
          <g key={i} opacity={active ? 1 : 0.3}>
            <text x={LABEL_X} y={y + 15} fontSize={11} fontWeight={row.bold ? 600 : 400} fill="currentColor">{row.label[lang]}</text>
            {active && width > 0 && <rect x={x} y={y + 4} width={width} height={14} fill={COLOUR[row.tone]} />}
            {active && part && <rect x={ZERO_X + (row.value - part.value) * SCALE} y={y + 4} width={part.value * SCALE} height={14} fill={COLOUR[part.tone]} />}
            {active && row.note && <text x={ZERO_X - 6} y={y + NOTE_DY} textAnchor="end" fontSize={11} fill={COLOUR[part ? part.tone : 'ink']}>{row.note[lang]}</text>}
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
      en: 'The capital account (+1) and the financial account (+24) follow. The financial account holds net foreign investment and loans (+20) and official reserves (+4): the central bank sells 4 of its reserves.',
      ru: 'Далее идут счёт капитала (+1) и финансовый счёт (+24). В финансовый счёт входят чистый приток иностранных инвестиций и кредитов (+20) и официальные резервы (+4): центральный банк продаёт 4 единицы резервов.',
    },
  },
  {
    title: { en: 'The three accounts sum to zero', ru: 'Три счёта в сумме дают ноль' },
    text: {
      en: 'The three accounts add up to zero: −25 + 1 + 24 = 0 (errors and omissions ignored). A deficit on the current account is financed by net inflows on the capital and financial accounts, including the use of official reserves.',
      ru: 'Три счёта в сумме дают ноль: −25 + 1 + 24 = 0 (ошибки и пропуски не учитываем). Дефицит счёта текущих операций финансируется чистым притоком по счёту капитала и финансовому счёту, в том числе за счёт официальных резервов.',
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
