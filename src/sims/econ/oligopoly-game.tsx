import type { L, Lang } from '../../contract/types';
import { GraphViewport, StepFrame, type StepText } from './_lib/graph';

// Price war (oligopoly game). Profit of firm A and firm B (AED million a year) for each pair of prices.
// Rows: firm A high or low. Columns: firm B high or low. Each cell is [profit of A, profit of B].
// Low is the best reply for A to either price of B, and for B to either price of A, so (low, low) = (4, 4) is the Nash equilibrium.
// (high, high) = (10, 10) pays both more, but it is not stable: a firm that cuts its price to low gets 12 instead of 10.
const CELLS: [number, number][][] = [
  [[10, 10], [2, 12]],
  [[12, 2], [4, 4]],
];

const BLUE = '#3b82f6';
const PURPLE = '#a855f7';
const GREEN = '#22c55e';
const RED = '#ef4444';

const COL_X = [92, 222];
const ROW_Y = [52, 144];
const CELL_W = 130;
const CELL_H = 84;

type Highlight = { row: number; col: number; colour: string; tag: L; width: number; dash?: boolean; fill?: boolean };

const A_BEST: L = { en: 'A: best reply', ru: 'A: лучший ответ' };
const B_BEST: L = { en: 'B: best reply', ru: 'B: лучший ответ' };
const NASH: L = { en: 'Nash equilibrium', ru: 'равновесие Нэша' };
const UNSTABLE: L = { en: 'not stable', ru: 'неустойчиво' };

// Highlights per step: the picture builds up to the complete picture in the last step.
const HIGHLIGHTS: Highlight[][] = [
  [
    { row: 1, col: 0, colour: BLUE, tag: A_BEST, width: 2.5 },
    { row: 1, col: 1, colour: BLUE, tag: A_BEST, width: 2.5 },
  ],
  [
    { row: 0, col: 1, colour: PURPLE, tag: B_BEST, width: 2.5 },
    { row: 1, col: 1, colour: PURPLE, tag: B_BEST, width: 2.5 },
  ],
  [{ row: 1, col: 1, colour: GREEN, tag: NASH, width: 3, fill: true }],
  [
    { row: 1, col: 1, colour: GREEN, tag: NASH, width: 3, fill: true },
    { row: 0, col: 0, colour: RED, tag: UNSTABLE, width: 2.5, dash: true },
  ],
];

const LOW: L = { en: 'low price', ru: 'низкая цена' };
const HIGH: L = { en: 'high price', ru: 'высокая цена' };
const FIRM_A: L = { en: 'Firm A', ru: 'Фирма A' };
const FIRM_B: L = { en: 'Firm B', ru: 'Фирма B' };

function matrix(index: number, lang: Lang) {
  const marks = HIGHLIGHTS[index];
  const rowName = [HIGH, LOW];
  const colName = [HIGH, LOW];

  return (
    <GraphViewport lang={lang}><svg role="img" aria-label={lang === 'en' ? 'Payoff matrix of the two firms' : 'Матрица выплат двух фирм'} viewBox="0 0 360 240" width="100%" style={{ maxWidth: 420, display: 'block', color: 'var(--color-fg)' }}>
      <text x={(COL_X[0] + COL_X[1] + CELL_W) / 2} y={22} textAnchor="middle" fontSize={12} fontWeight={600} fill="currentColor">{FIRM_B[lang]}</text>
      {colName.map((name, j) => (
        <text key={`c${j}`} x={COL_X[j] + CELL_W / 2} y={38} textAnchor="middle" fontSize={11} fill="currentColor">{name[lang]}</text>
      ))}
      {rowName.map((name, i) => (
        <g key={`r${i}`}>
          <text x={46} y={ROW_Y[i] + CELL_H / 2 - 4} textAnchor="middle" fontSize={12} fontWeight={600} fill="currentColor">{FIRM_A[lang]}</text>
          <text x={46} y={ROW_Y[i] + CELL_H / 2 + 12} textAnchor="middle" fontSize={11} fill="currentColor">{name[lang]}</text>
        </g>
      ))}

      {CELLS.map((row, i) =>
        row.map(([a, b], j) => {
          const x = COL_X[j];
          const y = ROW_Y[i];
          const cx = x + CELL_W / 2;
          const cy = y + CELL_H / 2;
          const mark = marks.find(m => m.row === i && m.col === j);
          return (
            <g key={`cell${i}${j}`}>
              <rect x={x} y={y} width={CELL_W} height={CELL_H} rx={6} stroke="currentColor" strokeWidth={1} style={{ fill: 'var(--color-card)' }} />
              {mark && (
                <rect
                  x={x + 1.5}
                  y={y + 1.5}
                  width={CELL_W - 3}
                  height={CELL_H - 3}
                  rx={5}
                  fill={mark.fill ? mark.colour : 'none'}
                  fillOpacity={0.18}
                  stroke={mark.colour}
                  strokeWidth={mark.width}
                  strokeDasharray={mark.dash ? '6 4' : undefined}
                />
              )}
              {mark && (
                <text x={cx} y={y + 18} textAnchor="middle" fontSize={11} fontWeight={600} fill="currentColor">{mark.tag[lang]}</text>
              )}
              <text x={cx} y={cy - 2} textAnchor="middle" fontSize={14} fontWeight={600} fill="currentColor">{`A: ${a}`}</text>
              <text x={cx} y={cy + 18} textAnchor="middle" fontSize={14} fontWeight={600} fill="currentColor">{`B: ${b}`}</text>
            </g>
          );
        }),
      )}
    </svg></GraphViewport>
  );
}

const steps: StepText[] = [
  {
    title: { en: 'Best reply of firm A', ru: 'Лучший ответ фирмы A' },
    text: {
      en: 'Compare A profit in each column. If B charges a high price, A gets 10 at high and 12 at low. If B charges a low price, A gets 2 at high and 4 at low. Low is the best reply for A either way.',
      ru: 'Сравните прибыль A в каждом столбце. Если B назначает высокую цену, A получает 10 при высокой и 12 при низкой цене. Если B назначает низкую цену, A получает 2 при высокой и 4 при низкой. Низкая цена — лучший ответ A в любом случае.',
    },
  },
  {
    title: { en: 'Best reply of firm B', ru: 'Лучший ответ фирмы B' },
    text: {
      en: 'Now compare B profit in each row. If A charges a high price, B gets 10 at high and 12 at low. If A charges a low price, B gets 2 at high and 4 at low. Low is the best reply for B too.',
      ru: 'Теперь сравните прибыль B в каждой строке. Если A назначает высокую цену, B получает 10 при высокой и 12 при низкой. Если A назначает низкую цену, B получает 2 при высокой и 4 при низкой. Низкая цена — лучший ответ и для B.',
    },
  },
  {
    title: { en: 'Nash equilibrium', ru: 'Равновесие Нэша (Nash equilibrium)' },
    text: {
      en: 'Both firms choose low. Neither gains by changing its price alone, so (low, low) with profit 4 each is the Nash equilibrium. Low is a dominant strategy here.',
      ru: 'Обе фирмы выбирают низкую цену. Ни одна не выигрывает, меняя только свою цену, поэтому (низкая, низкая) с прибылью 4 у каждой — равновесие Нэша (Nash equilibrium). Здесь низкая цена — доминирующая стратегия (dominant strategy).',
    },
  },
  {
    title: { en: 'Collusion is not stable', ru: 'Сговор неустойчив' },
    text: {
      en: 'High prices (10 each) would give both firms more profit, but that collusion is not stable. If A cheats and charges low while B stays high, its profit rises from 10 to 12, so the deal breaks down.',
      ru: 'Высокие цены (по 10 каждой) дали бы обеим фирмам больше прибыли, но такой сговор (collusion) неустойчив. Если A обманет и назначит низкую цену, а B останется с высокой, её прибыль вырастет с 10 до 12, и договорённость распадётся.',
    },
  },
];

export default function OligopolyGame({ lang }: { lang: Lang }) {
  return (
    <StepFrame
      lang={lang}
      label={{ en: 'Price war: profit of each firm (AED million a year)', ru: 'Ценовая война: прибыль каждой фирмы (млн AED в год)' }}
      steps={steps}
    >
      {index => matrix(index, lang)}
    </StepFrame>
  );
}
