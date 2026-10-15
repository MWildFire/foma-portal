import ReadableDiagram from '../readable-diagram';
import { useEffect, useId, useState, type ReactElement } from 'react';
import type { Lang } from '../../contract/types';
import { HEAD, LINE, NARROW_W, WIDE_W, comp, edge, layoutBoxes, type Box } from './uml-builder-logic';

// ---- logic (pure) ----
type Msg = { en: string; ru: string };
type Vis = '+' | '-' | '#';
type Member = { vis: Vis; text: string };
type Cls = { name: string; attrs: Member[]; methods: Member[] };
type Kind = 'inheritance' | 'composition' | 'aggregation' | 'association';
type Rel = { kind: Kind; from: string; to: string; fromMult: string; toMult: string };
type Diagram = { classes: Cls[]; rels: Rel[] };

const KIND: Record<Kind, Msg> = {
  inheritance: { en: 'inheritance', ru: 'наследование' }, composition: { en: 'composition', ru: 'композиция' },
  aggregation: { en: 'aggregation', ru: 'агрегация' }, association: { en: 'association', ru: 'ассоциация' },
};
const mem = (vis: Vis, text: string): Member => ({ vis, text });
const EXAMPLE: Diagram = {
  classes: [
    { name: 'Vehicle', attrs: [mem('-', 'id: int')], methods: [mem('+', 'start(): void')] },
    { name: 'Car', attrs: [mem('-', 'plate: String')], methods: [mem('+', 'drive(): void')] },
    { name: 'Engine', attrs: [mem('-', 'power: int')], methods: [] },
  ],
  rels: [
    { kind: 'inheritance', from: 'Car', to: 'Vehicle', fromMult: '', toMult: '' },
    { kind: 'composition', from: 'Car', to: 'Engine', fromMult: '1', toMult: '1' },
  ],
};
const MULT = /^(\d+|\*)(\.\.(\d+|\*))?$/;

// One member per line. A leading + - or # sets the visibility; otherwise the default is used.
function parseMembers(text: string, def: Vis): Member[] {
  const out: Member[] = [];
  for (const raw of text.split('\n')) {
    const line = raw.trim();
    const sign = line[0];
    const isSign = sign === '+' || sign === '-' || sign === '#';
    const body = isSign ? line.slice(1).trim() : line;
    if (body !== '') out.push({ vis: isSign ? (sign as Vis) : def, text: body });
  }
  return out;
}

// Problems for the check list. An empty array means no problems.
function check(d: Diagram): Msg[] {
  const out: Msg[] = [];
  const names = d.classes.map((c) => c.name.trim());
  names.forEach((n, i) => n === '' && out.push({ en: `Class ${i + 1} has no name.`, ru: `Класс №${i + 1} без имени.` }));
  const known = new Set(names.filter((n) => n !== ''));
  for (const n of known) if (names.indexOf(n) !== names.lastIndexOf(n)) out.push({ en: `Duplicate class name "${n}".`, ru: `Имя класса «${n}» повторяется.` });
  for (const r of d.rels) {
    const a = r.from.trim();
    const b = r.to.trim();
    if (a !== '' && a === b) out.push({ en: `"${a}" cannot be related to itself.`, ru: `Класс «${a}» нельзя связать с самим собой.` });
    for (const end of [a, b]) if (!known.has(end)) out.push({ en: `Relationship ${a} → ${b}: class "${end}" does not exist.`, ru: `Связь ${a} → ${b}: класса «${end}» нет.` });
    for (const x of [r.fromMult.trim(), r.toMult.trim()]) {
      if (x !== '' && !MULT.test(x)) out.push({ en: `Multiplicity "${x}" is not valid (use 1, 0..1, 1..*, *).`, ru: `Кратность «${x}» не подходит (примеры: 1, 0..1, 1..*, *).` });
    }
  }
  // Inheritance cycles, e.g. A extends B and B extends A.
  const parents = new Map<string, string[]>();
  for (const r of d.rels) {
    const a = r.from.trim();
    if (r.kind === 'inheritance' && a !== r.to.trim()) parents.set(a, [...(parents.get(a) ?? []), r.to.trim()]);
  }
  for (const n of known) {
    const seen = new Set<string>();
    const stack = [...(parents.get(n) ?? [])];
    while (stack.length > 0) {
      const x = stack.pop()!;
      if (x === n) {
        out.push({ en: `Inheritance cycle through "${n}".`, ru: `Цикл наследования через «${n}».` });
        break;
      }
      if (!seen.has(x)) {
        seen.add(x);
        stack.push(...(parents.get(x) ?? []));
      }
    }
  }
  return out;
}

const mems = (ms: Member[], none: string) => (ms.length ? ms.map((x) => `${x.vis}${x.text}`).join('; ') : none);

// Plain-text list: each class with its attributes and methods, then the relationships.
function exportText(d: Diagram, t: (en: string, ru: string) => string): string {
  const lines: string[] = [];
  for (const c of d.classes) {
    lines.push(`${t('Class', 'Класс')} ${c.name.trim() || t('(no name)', '(без имени)')}`);
    lines.push(`  ${t('attributes', 'атрибуты')}: ${mems(c.attrs, t('none', 'нет'))}`);
    lines.push(`  ${t('methods', 'методы')}: ${mems(c.methods, t('none', 'нет'))}`);
  }
  if (d.rels.length > 0) lines.push(t('Relationships', 'Связи'));
  for (const r of d.rels) {
    const fm = r.fromMult.trim() ? ` [${r.fromMult.trim()}]` : '';
    const tm = r.toMult.trim() ? ` [${r.toMult.trim()}]` : '';
    lines.push(`  ${r.from.trim()}${fm} --${t(KIND[r.kind].en, KIND[r.kind].ru)}--> ${r.to.trim()}${tm}`);
  }
  return lines.join('\n');
}

// ---- component ----
const INK = 'var(--color-fg)';
const CARD = 'var(--color-card)';
const clip = (s: string, n = 30) => (s.length > n ? `${s.slice(0, n - 1)}…` : s);
const btn = 'rounded-md border border-[var(--color-border)] bg-[var(--color-card)] px-3 py-1.5 text-sm text-[var(--color-fg)] hover:border-[var(--color-accent)]';
const inp = 'w-full rounded-md border border-[var(--color-border)] bg-[var(--color-card)] px-2 py-1.5 text-[var(--color-fg)]';
const lab = 'mb-1 block text-xs text-[var(--color-muted)]';
const LEGEND: Msg = {
  en: 'Inheritance: hollow triangle at the superclass (To). Composition: filled diamond at the whole (From). Aggregation: hollow diamond at the whole (From). Association: plain line.',
  ru: 'Наследование: пустой треугольник у суперкласса (To). Композиция: закрашенный ромб у целого (From). Агрегация: пустой ромб у целого (From). Ассоциация: простая линия.',
};

// One column of boxes on narrow screens, so that the whole diagram fits without sideways scrolling.
const NARROW_QUERY = '(max-width: 600px)';
function useNarrow(): boolean {
  const [narrow, setNarrow] = useState(() => typeof window !== 'undefined' && window.matchMedia(NARROW_QUERY).matches);
  useEffect(() => {
    const query = window.matchMedia(NARROW_QUERY);
    const update = () => setNarrow(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);
  return narrow;
}

function ClassBox({ c, b, noName }: { c: Cls; b: Box; noName: string }) {
  const t1 = b.y + HEAD; // top of the attributes compartment
  const t2 = t1 + comp(c.attrs.length); // top of the methods compartment
  const name = c.name.trim();
  const rows = (ms: Member[], top: number) => ms.map((x, j) => <text key={j} x={b.x + 8} y={top + 13 + j * LINE} fontSize={12} fontFamily="ui-monospace, monospace" style={{ fill: INK }}>{clip(`${x.vis}${x.text}`)}</text>);
  return (
    <g>
      <rect x={b.x} y={b.y} width={b.w} height={b.h} strokeWidth={1.5} style={{ fill: CARD, stroke: INK }} />
      <path d={`M${b.x} ${t1}H${b.x + b.w}M${b.x} ${t2}H${b.x + b.w}`} strokeWidth={1.5} style={{ stroke: INK }} />
      <text x={b.x + b.w / 2} y={b.y + 18} textAnchor="middle" fontSize={13} fontWeight="bold" fontStyle={name ? 'normal' : 'italic'} style={{ fill: INK }}>{name ? clip(name) : noName}</text>
      {rows(c.attrs, t1)}
      {rows(c.methods, t2)}
    </g>
  );
}

function RelShape({ r, a, b }: { r: Rel; a: Box; b: Box }) {
  const [ax, ay] = edge(a, b.x + b.w / 2, b.y + b.h / 2);
  const [bx, by] = edge(b, a.x + a.w / 2, a.y + a.h / 2);
  const len = Math.hypot(bx - ax, by - ay) || 1;
  const ux = (bx - ax) / len;
  const uy = (by - ay) / len;
  // Point at distance s along the line from (x, y), offset o sideways.
  const pt = (x: number, y: number, s: number, o: number): [number, number] => [x + ux * s - uy * o, y + uy * s + ux * o];
  const at = (x: number, y: number, s: number, o: number) => pt(x, y, s, o).join(',');
  const whole = r.kind === 'composition' || r.kind === 'aggregation';
  const [x1, y1] = whole ? pt(ax, ay, 20, 0) : [ax, ay];
  const [x2, y2] = r.kind === 'inheritance' ? pt(bx, by, -14, 0) : [bx, by];
  const [fx, fy] = pt(ax, ay, 26, 12);
  const [tx, ty] = pt(bx, by, -26, 12);
  const diamond = `${at(ax, ay, 0, 0)} ${at(ax, ay, 10, 6)} ${at(ax, ay, 20, 0)} ${at(ax, ay, 10, -6)}`;
  const triangle = `${at(bx, by, 0, 0)} ${at(bx, by, -14, 7)} ${at(bx, by, -14, -7)}`;
  return (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth={1.5} style={{ stroke: INK }} />
      {whole && <polygon points={diamond} strokeWidth={1.5} style={{ fill: r.kind === 'composition' ? INK : CARD, stroke: INK }} />}
      {r.kind === 'inheritance' && <polygon points={triangle} strokeWidth={1.5} style={{ fill: CARD, stroke: INK }} />}
      {r.fromMult.trim() !== '' && <text x={fx} y={fy} textAnchor="middle" fontSize={11} style={{ fill: INK }}>{r.fromMult.trim()}</text>}
      {r.toMult.trim() !== '' && <text x={tx} y={ty} textAnchor="middle" fontSize={11} style={{ fill: INK }}>{r.toMult.trim()}</text>}
    </g>
  );
}

const Field = (text: string, el: ReactElement) => (
  <label className="block"><span className={lab}>{text}</span>{el}</label>
);

export default function UmlBuilderSim(p: { lang: Lang }) {
  const t = (en: string, ru: string) => (p.lang === 'ru' ? ru : en);
  const dl = `${useId()}l`;
  const [d, setD] = useState<Diagram>(EXAMPLE);
  const [name, setName] = useState('');
  const [attrText, setAttrText] = useState('');
  const [methText, setMethText] = useState('');
  const [rel, setRel] = useState<Rel>({ kind: 'association', from: '', to: '', fromMult: '', toMult: '' });
  const [msg, setMsg] = useState<Msg | null>(null);
  const narrow = useNarrow();
  const W = narrow ? NARROW_W : WIDE_W; // drawing width in SVG units
  const boxes = layoutBoxes(d.classes.map((c) => ({ attrs: c.attrs.length, methods: c.methods.length })), narrow ? 1 : 2);
  const byName = new Map<string, Box>();
  d.classes.forEach((c, i) => {
    const n = c.name.trim();
    if (n !== '' && !byName.has(n)) byName.set(n, boxes[i]);
  });
  const problems = check(d);
  const text = exportText(d, t);
  const height = Math.max(120, ...boxes.map((b) => b.y + b.h + 20));

  function addClass() {
    setD({ ...d, classes: [...d.classes, { name: name.trim(), attrs: parseMembers(attrText, '-'), methods: parseMembers(methText, '+') }] });
    setName(''); setAttrText(''); setMethText(''); setMsg(null);
  }

  function addRel() {
    if (rel.from.trim() === '' || rel.to.trim() === '') {
      setMsg({ en: 'Enter both class names for the relationship.', ru: 'Введите имена обоих классов для связи.' });
      return;
    }
    setD({ ...d, rels: [...d.rels, { ...rel, from: rel.from.trim(), to: rel.to.trim(), fromMult: rel.fromMult.trim(), toMult: rel.toMult.trim() }] });
    setRel({ ...rel, from: '', to: '' }); setMsg(null);
  }

  return (
    <div className="space-y-5 text-sm">
      <p className="text-[var(--color-muted)]">{t('Add classes, then relationships between them. The check list shows problems in the diagram.', 'Добавьте классы, затем связи между ними. Список проверки покажет проблемы диаграммы.')}</p>
      <div className="flex flex-wrap gap-2">
        <button type="button" onClick={() => setD(EXAMPLE)} className={btn}>{t('Load example', 'Загрузить пример')}</button>
        <button type="button" onClick={() => setD({ classes: [], rels: [] })} className={btn}>{t('Clear all', 'Очистить всё')}</button>
      </div>

      <fieldset className="space-y-3 rounded-md border border-[var(--color-border)] p-3">
        <legend className="px-1 font-medium">{t('Add a class', 'Добавить класс')}</legend>
        {Field(t('Class name', 'Имя класса'), <input value={name} onChange={(e) => setName(e.target.value)} className={inp} />)}
        {Field(t('Attributes, one per line: + public, - private, # protected (default -)', 'Атрибуты, по одному в строке: + public, - private, # protected (по умолчанию -)'), <textarea rows={3} value={attrText} onChange={(e) => setAttrText(e.target.value)} className={`${inp} font-mono text-xs`} />)}
        {Field(t('Methods, one per line (default +)', 'Методы, по одному в строке (по умолчанию +)'), <textarea rows={3} value={methText} onChange={(e) => setMethText(e.target.value)} className={`${inp} font-mono text-xs`} />)}
        <button type="button" onClick={addClass} className={btn}>{t('Add class', 'Добавить класс')}</button>
      </fieldset>

      <fieldset className="grid gap-3 rounded-md border border-[var(--color-border)] p-3 sm:grid-cols-2">
        <legend className="px-1 font-medium">{t('Add a relationship', 'Добавить связь')}</legend>
        {Field(t('From class (whole, subclass or owner)', 'Из класса (целое, подкласс или владелец)'), <input list={dl} value={rel.from} onChange={(e) => setRel({ ...rel, from: e.target.value })} className={inp} />)}
        {Field(t('To class (superclass or part)', 'В класс (суперкласс или часть)'), <input list={dl} value={rel.to} onChange={(e) => setRel({ ...rel, to: e.target.value })} className={inp} />)}
        {Field(t('Type', 'Тип'), <select value={rel.kind} onChange={(e) => setRel({ ...rel, kind: e.target.value as Kind })} className={inp}>{(Object.keys(KIND) as Kind[]).map((k) => <option key={k} value={k}>{KIND[k][p.lang]}</option>)}</select>)}
        <div className="grid grid-cols-2 gap-2">
          {Field(t('Multiplicity at From', 'Кратность у From'), <input placeholder="1" value={rel.fromMult} onChange={(e) => setRel({ ...rel, fromMult: e.target.value })} className={inp} />)}
          {Field(t('Multiplicity at To', 'Кратность у To'), <input placeholder="0..*" value={rel.toMult} onChange={(e) => setRel({ ...rel, toMult: e.target.value })} className={inp} />)}
        </div>
        <div><button type="button" onClick={addRel} className={btn}>{t('Add relationship', 'Добавить связь')}</button></div>
      </fieldset>
      <datalist id={dl}>{d.classes.map((c, i) => <option key={i} value={c.name.trim()} />)}</datalist>
      <p aria-live="polite" className="min-h-[1.5rem]">{msg && msg[p.lang]}</p>

      <div>
        <p className="font-medium">{t('Diagram', 'Диаграмма')}</p>
        <div className="overflow-x-auto rounded-md border border-[var(--color-border)] bg-[var(--color-card)]">
          <ReadableDiagram lang={p.lang} smallestFont={11}><svg viewBox={`0 0 ${W} ${height}`} width="100%" style={{ maxWidth: W, height: 'auto' }} role="img" className="block" aria-label={t(`Class diagram: ${d.classes.length} classes, ${d.rels.length} relationships`, `Диаграмма классов: классов ${d.classes.length}, связей ${d.rels.length}`)}>
            {d.classes.length === 0 && <text x={20} y={40} fontSize={13} style={{ fill: 'var(--color-muted)' }}>{t('No classes yet.', 'Классов пока нет.')}</text>}
            {d.rels.map((r, i) => {
              const a = byName.get(r.from.trim());
              const b = byName.get(r.to.trim());
              return a && b && a !== b ? <RelShape key={i} r={r} a={a} b={b} /> : null;
            })}
            {d.classes.map((c, i) => <ClassBox key={i} c={c} b={boxes[i]} noName={t('(no name)', '(без имени)')} />)}
          </svg></ReadableDiagram>
        </div>
        <p className="mt-2 text-xs text-[var(--color-muted)]">{LEGEND[p.lang]}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <p className="font-medium">{t('Classes', 'Классы')}</p>
          {d.classes.map((c, i) => (
            <div key={i} className="flex justify-between gap-2">
              <span className="font-mono">{c.name.trim() || t('(no name)', '(без имени)')}</span>
              <button type="button" aria-label={t(`Remove class ${c.name.trim() || '(no name)'}`, `Удалить класс ${c.name.trim() || '(без имени)'}`)} onClick={() => setD({ ...d, classes: d.classes.filter((_, j) => j !== i) })} className={btn}>{t('Remove', 'Удалить')}</button>
            </div>
          ))}
        </div>
        <div>
          <p className="font-medium">{t('Relationships', 'Связи')}</p>
          {d.rels.map((r, i) => (
            <div key={i} className="flex justify-between gap-2">
              <span>{`${r.from.trim()} → ${r.to.trim()} (${KIND[r.kind][p.lang]})`}</span>
              <button type="button" aria-label={t(`Remove relationship ${i + 1}`, `Удалить связь ${i + 1}`)} onClick={() => setD({ ...d, rels: d.rels.filter((_, j) => j !== i) })} className={btn}>{t('Remove', 'Удалить')}</button>
            </div>
          ))}
        </div>
      </div>

      <div aria-live="polite">
        <p className="font-medium">{t('Check', 'Проверка')}</p>
        {problems.length > 0
          ? <ul className="mt-1 list-disc space-y-1 pl-5">{problems.map((m, i) => <li key={i}>{m[p.lang]}</li>)}</ul>
          : <p className="text-[var(--color-muted)]">{d.classes.length + d.rels.length === 0 ? t('Nothing to check yet.', 'Пока нечего проверять.') : t('No problems found.', 'Проблем не найдено.')}</p>}
      </div>

      <div>
        <p className="font-medium">{t('Text export', 'Текстовый экспорт')}</p>
        <textarea readOnly rows={Math.min(12, text.split('\n').length + 1)} value={text} aria-label={t('Text export of the diagram', 'Текстовый экспорт диаграммы')} className={`${inp} mt-1 font-mono text-xs`} />
      </div>
    </div>
  );
}
