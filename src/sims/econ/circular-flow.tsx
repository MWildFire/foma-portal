import type { L, Lang } from '../../contract/types';
import { StepFrame, type StepText } from './_lib/graph';

// Circular flow of income with five sectors. Inner loop (blue): income from firms to households and spending from households
// to firms. Leakages or withdrawals (red): savings to banks, taxes to government, imports to the rest of the world.
// Injections (green): investment from banks, government spending and exports from the rest of the world.
// Equilibrium: S + T + M = I + G + X, so national income Y = C + I + G + (X - M).

const INNER = '#3b82f6';
const LEAK = '#ef4444';
const INJECT = '#22c55e';
const OFF = '#94a3b8';

type Pt = [number, number];
type Box = { x: number; y: number; w: number; h: number };
type NodeKey = 'gov' | 'hh' | 'firm' | 'bank' | 'row';

const BOX: Record<NodeKey, Box> = {
  gov: { x: 122, y: 6, w: 116, h: 34 },
  hh: { x: 8, y: 100, w: 104, h: 40 },
  firm: { x: 248, y: 100, w: 104, h: 40 },
  bank: { x: 122, y: 196, w: 116, h: 34 },
  row: { x: 8, y: 246, w: 104, h: 34 },
};

const NAME: Record<NodeKey, L> = {
  gov: { en: 'Government', ru: 'Государство' },
  hh: { en: 'Households', ru: 'Домохозяйства' },
  firm: { en: 'Firms', ru: 'Фирмы' },
  bank: { en: 'Banks', ru: 'Банки' },
  row: { en: 'Rest of world', ru: 'Остальной мир' },
};

const FLOW_NAME = {
  income: { en: 'income', ru: 'доходы' },
  spending: { en: 'spending', ru: 'расходы' },
  savings: { en: 'savings', ru: 'сбережения' },
  taxes: { en: 'taxes', ru: 'налоги' },
  imports: { en: 'imports', ru: 'импорт' },
  investment: { en: 'investment', ru: 'инвестиции' },
  govSpend: { en: 'gov. spending', ru: 'госрасходы' },
  exports: { en: 'exports', ru: 'экспорт' },
};

// Arrow head: a small triangle at the tip, pointing along the last segment.
function arrowHead(from: Pt, to: Pt): string {
  const angle = Math.atan2(to[1] - from[1], to[0] - from[0]);
  const bx = to[0] - 7 * Math.cos(angle);
  const by = to[1] - 7 * Math.sin(angle);
  const left: Pt = [bx - 4 * Math.sin(angle), by + 4 * Math.cos(angle)];
  const right: Pt = [bx + 4 * Math.sin(angle), by - 4 * Math.cos(angle)];
  return [to, left, right].map(p => `${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
}

function Flow({ path, colour }: { path: Pt[]; colour: string }) {
  const tip = path[path.length - 1];
  const before = path[path.length - 2];
  return (
    <g>
      <polyline points={path.map(p => `${p[0]},${p[1]}`).join(' ')} fill="none" stroke={colour} strokeWidth={2} />
      <polygon points={arrowHead(before, tip)} fill={colour} />
    </g>
  );
}

function Tag({ x, y, anchor, colour, text }: { x: number; y: number; anchor: 'start' | 'middle' | 'end'; colour: string; text: string }) {
  return (
    <text x={x} y={y} textAnchor={anchor} fontSize={11} fontWeight={500} fill={colour}>{text}</text>
  );
}

function Node({ box, text }: { box: Box; text: string }) {
  return (
    <g>
      <rect x={box.x} y={box.y} width={box.w} height={box.h} rx={6} strokeWidth={1.5} stroke="currentColor" style={{ fill: 'var(--color-card)' }} />
      <text x={box.x + box.w / 2} y={box.y + box.h / 2 + 4} textAnchor="middle" fontSize={11} fontWeight={600} fill="currentColor">{text}</text>
    </g>
  );
}

function diagram(index: number, lang: Lang) {
  // Step 1: inner loop. Step 2: leakages shown. Step 3: leakages muted, injections shown. Step 4: complete picture.
  const leakColour = index === 2 ? OFF : LEAK;
  const showLeaks = index >= 1;
  const showInjections = index >= 2;
  const leakText = index === 2 ? OFF : LEAK;

  return (
    <svg role="img" aria-label={lang === 'en' ? 'Circular flow of income' : 'Круговой поток дохода'} viewBox="0 0 360 290" width="100%" style={{ maxWidth: 420, display: 'block', color: 'var(--color-fg)' }}>
      <Flow path={[[248, 116], [112, 116]]} colour={INNER} />
      <Flow path={[[112, 134], [248, 134]]} colour={INNER} />
      <Tag x={180} y={110} anchor="middle" colour={INNER} text={FLOW_NAME.income[lang]} />
      <Tag x={180} y={150} anchor="middle" colour={INNER} text={FLOW_NAME.spending[lang]} />

      {showLeaks && (
        <g>
          <Flow path={[[96, 140], [122, 212]]} colour={leakColour} />
          <Flow path={[[60, 140], [60, 246]]} colour={leakColour} />
          <Flow path={[[40, 100], [122, 22]]} colour={leakColour} />
          <Flow path={[[290, 100], [238, 22]]} colour={leakColour} />
          <Tag x={118} y={170} anchor="start" colour={leakText} text={FLOW_NAME.savings[lang]} />
          <Tag x={54} y={196} anchor="end" colour={leakText} text={FLOW_NAME.imports[lang]} />
          <Tag x={76} y={52} anchor="end" colour={leakText} text={FLOW_NAME.taxes[lang]} />
          <Tag x={270} y={52} anchor="start" colour={leakText} text={FLOW_NAME.taxes[lang]} />
        </g>
      )}

      {showInjections && (
        <g>
          <Flow path={[[226, 196], [266, 140]]} colour={INJECT} />
          <Flow path={[[226, 40], [270, 100]]} colour={INJECT} />
          <Flow path={[[112, 263], [330, 263], [330, 140]]} colour={INJECT} />
          <Tag x={256} y={175} anchor="start" colour={INJECT} text={FLOW_NAME.investment[lang]} />
          <Tag x={212} y={62} anchor="end" colour={INJECT} text={FLOW_NAME.govSpend[lang]} />
          <Tag x={221} y={256} anchor="middle" colour={INJECT} text={FLOW_NAME.exports[lang]} />
        </g>
      )}

      {(Object.keys(BOX) as NodeKey[]).map(key => (
        <Node key={key} box={BOX[key]} text={NAME[key][lang]} />
      ))}
    </svg>
  );
}

const steps: StepText[] = [
  {
    title: { en: 'Inner loop', ru: 'Внутренний круг' },
    text: {
      en: 'Money circulates in the inner loop. Firms pay households income for the factors of production, and households spend it on goods and services, which returns the money to firms.',
      ru: 'Деньги движутся по внутреннему кругу. Фирмы платят домохозяйствам доходы за факторы производства, а домохозяйства тратят их на товары и услуги, и деньги возвращаются фирмам.',
    },
  },
  {
    title: { en: 'Leakages (withdrawals)', ru: 'Утечки (leakages)' },
    text: {
      en: 'Part of income leaks out (red): savings go to banks, taxes to government and imports to the rest of the world. Spending in the inner loop falls.',
      ru: 'Часть дохода уходит из круга (красные стрелки): сбережения идут в банки, налоги — государству, импорт — остальному миру. Расходы во внутреннем круге падают.',
    },
  },
  {
    title: { en: 'Injections', ru: 'Инъекции (injections)' },
    text: {
      en: 'Money is added back (green): investment from banks, government spending and exports paid by the rest of the world raise spending on firms.',
      ru: 'Деньги возвращаются в круг (зелёные стрелки): инвестиции из банков, госрасходы и экспорт, который оплачивает остальной мир, увеличивают расходы на фирмы.',
    },
  },
  {
    title: { en: 'Equilibrium', ru: 'Равновесие' },
    text: {
      en: 'Income is stable when leakages equal injections: S + T + M = I + G + X. Then national income is Y = C + I + G + (X - M).',
      ru: 'Доход стабилен, когда утечки равны инъекциям: S + T + M = I + G + X. Тогда национальный доход равен Y = C + I + G + (X - M).',
    },
  },
];

export default function CircularFlow({ lang }: { lang: Lang }) {
  return (
    <StepFrame
      lang={lang}
      label={{ en: 'Circular flow of income', ru: 'Круговой поток дохода' }}
      steps={steps}
    >
      {index => diagram(index, lang)}
    </StepFrame>
  );
}
