import { useId, useState, type PointerEvent as RPointerEvent } from 'react';
import type { Lang } from '../../contract/types';
import { CLASSES, CURVES, H, NMAX, W, X0, X1, Y0, Y1, YMAX, Y_TICKS, fmtCount, ops, xAt, yAt } from './big-o-logic';

const X_TICKS = [1, 10, 20, 30, 40, 50];
const SIZES = [10, 100, 1000];
// Series colours from the validated categorical palette (dataviz skill, reference palette), per theme.
const CSS = `
.bo-root { --bo-1: #2a78d6; --bo-2: #eb6834; --bo-3: #1baf7a; --bo-4: #eda100; --bo-5: #e87ba4; --bo-6: #008300; }
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) .bo-root { --bo-1: #3987e5; --bo-2: #d95926; --bo-3: #199e70; --bo-4: #c98500; --bo-5: #d55181; --bo-6: #008300; }
}
:root[data-theme="dark"] .bo-root { --bo-1: #3987e5; --bo-2: #d95926; --bo-3: #199e70; --bo-4: #c98500; --bo-5: #d55181; --bo-6: #008300; }
`;

export default function BigO(p: { lang: Lang }) {
  const lang = p.lang;
  const t =(en: string, ru: string) => (lang === 'ru' ? ru : en);
  const pick = (text: { en: string; ru: string }) => text[lang];
  const fmt = (v: number) => fmtCount(v, lang === 'ru' ? 'ru-RU' : 'en-US');
  const uid = useId();
  const idN = `${uid}-n`;
  const [n, setN] = useState(10);
  const [hoverN, setHoverN] = useState<number | null>(null);
  const focus = hoverN ?? n;
  const clipX = CURVES[CLASSES.length - 1].clipX;

  const onMove = (e: RPointerEvent<SVGSVGElement>) => {
    const box = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - box.left) / box.width) * W;
    const raw = Math.round(1 + ((x - X0) / (X1 - X0)) * (NMAX - 1));
    setHoverN(Math.min(NMAX, Math.max(1, raw)));
  };

  return (
    <div className="bo-root space-y-4">
      <style>{CSS}</style>
      <div role="img" aria-label={t('Growth of the number of operations for six complexity classes, n from 1 to 50', 'Рост числа операций для шести классов сложности, n от 1 до 50')}>
        <svg viewBox={`0 0 ${W} ${H}`} width="100%" className="block max-w-[30rem] overflow-visible" onPointerMove={onMove} onPointerLeave={() => setHoverN(null)}>
          {Y_TICKS.map(v => (
            <g key={v}>
              <line x1={X0} x2={X1} y1={yAt(v)} y2={yAt(v)} stroke={v === 0 ? 'var(--color-muted)' : 'var(--color-border)'} strokeWidth={1} />
              <text x={X0 - 6} y={yAt(v) + 4} textAnchor="end" fontSize="11" fill="var(--color-muted)">{v}</text>
            </g>
          ))}
          {X_TICKS.map(k => (
            <text key={k} x={xAt(k)} y={Y1 + 14} textAnchor="middle" fontSize="11" fill="var(--color-muted)">{k}</text>
          ))}
          <line x1={X0} x2={X0} y1={Y0} y2={Y1} stroke="var(--color-muted)" strokeWidth={1} />
          {CLASSES.map((c, k) => (
            <path key={c.id} d={CURVES[k].d} fill="none" strokeWidth={2} strokeLinejoin="round" strokeDasharray={c.dash} style={{ stroke: `var(--bo-${k + 1})` }} />
          ))}
          {clipX !== null && (
            <text x={clipX + 4} y={Y0 - 4} fontSize="10" fill="var(--color-muted)">{t('2ⁿ clipped', '2ⁿ обрезано')}</text>
          )}
          {n <= NMAX && <line x1={xAt(n)} x2={xAt(n)} y1={Y0} y2={Y1} stroke="var(--color-fg)" strokeWidth={1} strokeDasharray="3 3" />}
          {hoverN !== null && <line x1={xAt(hoverN)} x2={xAt(hoverN)} y1={Y0} y2={Y1} stroke="var(--color-muted)" strokeWidth={1} />}
          <text x={(X0 + X1) / 2} y={H - 4} textAnchor="middle" fontSize="11" fill="var(--color-muted)">{t('n (input size)', 'n (размер входа)')}</text>
          <text transform={`translate(12 ${(Y0 + Y1) / 2}) rotate(-90)`} textAnchor="middle" fontSize="11" fill="var(--color-muted)">{t('operations', 'операции')}</text>
        </svg>
      </div>
      <p className="m-0 text-xs text-[var(--color-muted)]">
        {t(`Curves above ${YMAX} stop at the top edge: n² and 2ⁿ.`, `Кривые выше ${YMAX} обрываются у верхнего края: n² и 2ⁿ.`)}
      </p>

      <ul className="m-0 grid list-none grid-cols-1 gap-1 p-0 text-sm sm:grid-cols-2">
        {CLASSES.map((c, k) => (
          <li key={c.id} className="flex items-center gap-2">
            <svg width="28" height="8" aria-hidden="true" className="shrink-0 overflow-visible">
              <line x1="0" x2="28" y1="4" y2="4" strokeWidth={2} strokeDasharray={c.dash} style={{ stroke: `var(--bo-${k + 1})` }} />
            </svg>
            <span>{c.label} · {pick(c.name)}</span>
          </li>
        ))}
      </ul>

      <div className="space-y-1">
        <label htmlFor={idN} className="block text-sm font-medium">
          {t('Input size n', 'Размер входа n')}: <output htmlFor={idN} className="font-mono">{n}</output>
        </label>
        <input id={idN} type="range" min={1} max={100} step={1} value={n} onChange={e => setN(Number(e.target.value))} className="w-full accent-[var(--color-accent)]" />
      </div>

      <div>
        <p className="m-0 text-sm font-medium">
          {t(`Operations at n = ${focus}`, `Операции при n = ${focus}`)}
          {hoverN !== null && <span className="font-normal text-[var(--color-muted)]"> {t('(pointer on the chart)', '(курсор на графике)')}</span>}
        </p>
        {focus > NMAX && (
          <p className="m-0 text-xs text-[var(--color-muted)]">{t('n is above 50, so this point is not on the chart.', 'n больше 50, поэтому этой точки на графике нет.')}</p>
        )}
        <dl className="m-0 mt-2 grid grid-cols-1 gap-x-4 text-sm min-[400px]:grid-cols-2">
          {CLASSES.map(c => (
            <div key={c.id} className="flex justify-between gap-2 border-b border-[var(--color-border)] py-1">
              <dt className="font-mono">{c.label}</dt>
              <dd className="m-0 text-right font-mono">{fmt(ops(c, focus))}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[20rem] border-collapse text-sm">
          <caption className="mb-1 text-left text-xs text-[var(--color-muted)]">
            {t('Number of operations for three input sizes', 'Количество операций для трёх размеров входа')}
          </caption>
          <thead>
            <tr>
              <th scope="col" className="py-1 text-left font-medium">{t('Class', 'Класс')}</th>
              {SIZES.map(s => (
                <th key={s} scope="col" className="py-1 text-right font-mono font-medium">n = {s}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {CLASSES.map(c => (
              <tr key={c.id} className="border-t border-[var(--color-border)]">
                <th scope="row" className="py-1 text-left font-mono font-normal">{c.label}</th>
                {SIZES.map(s => (
                  <td key={s} className="py-1 text-right font-mono">{fmt(ops(c, s))}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="m-0 text-xs text-[var(--color-muted)]">
        {t(
          'Whole numbers are exact up to 10^9. O(log n) and O(n log n) are rounded to the nearest whole number (log base 2). Larger values are rounded to three significant figures.',
          'Целые числа точны до 10^9. O(log n) и O(n log n) округлены до ближайшего целого (логарифм по основанию 2). Большие значения округлены до трёх значащих цифр.',
        )}
      </p>
    </div>
  );
}
