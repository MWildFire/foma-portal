import { useRef, useState } from 'react';
import type { Lang } from '../../contract/types';

// ---- Logic: plain functions, no React or DOM (checked from the scratchpad) ----

type Bi = { en: string; ru: string };
interface Row { line: number; cells: string[]; out: string } // cells: one value per variable ('' = not created yet)
interface Program { id: string; title: Bi; code: Bi[]; vars: string[]; rows: Row[] }
interface Miss { row: number; col: number } // col === vars.length is the Output column

const PROGRAMS: Program[] = [
  {
    id: 'straight',
    title: { en: 'Program 1: no loop', ru: 'Программа 1: без цикла' },
    code: [
      { en: 'x = 3          # store 3 in x', ru: 'x = 3          # записываем 3 в x' },
      { en: 'y = x * 2 + 1  # calculate y', ru: 'y = x * 2 + 1  # вычисляем y' },
      { en: 'x = x + y      # add y to x', ru: 'x = x + y      # прибавляем y к x' },
      { en: 'print(x, y)    # show x and y', ru: 'print(x, y)    # выводим x и y' },
    ],
    vars: ['x', 'y'],
    rows: [
      { line: 1, cells: ['3', ''], out: '' },
      { line: 2, cells: ['3', '7'], out: '' },
      { line: 3, cells: ['10', '7'], out: '' },
      { line: 4, cells: ['10', '7'], out: '10 7' },
    ],
  },
  {
    id: 'loop',
    title: { en: 'Program 2: a loop', ru: 'Программа 2: цикл' },
    code: [
      { en: 'total = 0  # the sum starts at 0', ru: 'total = 0  # сумма = 0' },
      { en: 'for i in range(1, 4):  # loop over i', ru: 'for i in range(1, 4):  # цикл по i' },
      { en: '    total = total + i  # add i', ru: '    total = total + i  # прибавляем i' },
      { en: 'print(total)  # show the total', ru: 'print(total)  # выводим total' },
    ],
    vars: ['total', 'i'],
    rows: [
      { line: 1, cells: ['0', ''], out: '' },
      { line: 2, cells: ['0', '1'], out: '' },
      { line: 3, cells: ['1', '1'], out: '' },
      { line: 2, cells: ['1', '2'], out: '' },
      { line: 3, cells: ['3', '2'], out: '' },
      { line: 2, cells: ['3', '3'], out: '' },
      { line: 3, cells: ['6', '3'], out: '' },
      { line: 4, cells: ['6', '3'], out: '6' },
    ],
  },
];

const norm = (s: string) => s.trim().replace(/\s+/g, ' ');

function blankGrid(p: Program): string[][] {
  return p.rows.map(() => Array<string>(p.vars.length + 1).fill(''));
}

// Expected values of step `row`: one per variable, then the printed output.
function expected(p: Program, row: number): string[] {
  const r = p.rows[row];
  return [...r.cells, r.out];
}

// First wrong cell of a step, or null when the step is right.
function firstMiss(p: Program, row: number, typed: string[]): Miss | null {
  const want = expected(p, row);
  for (let col = 0; col < want.length; col++) {
    if (norm(typed[col] || '') !== norm(want[col])) return { row, col };
  }
  return null;
}

// ---- UI ----

export default function TraceTable(p: { lang: Lang }) {
  const t = (en: string, ru: string) => (p.lang === 'ru' ? ru : en);
  const pick = (x: Bi) => t(x.en, x.ru);
  const [pi, setPi] = useState(0);
  const [typed, setTyped] = useState<string[][]>(() => blankGrid(PROGRAMS[0]));
  const [done, setDone] = useState(0); // steps 1..done are right
  const [shown, setShown] = useState(false); // the answer is filled in
  const [miss, setMiss] = useState<Miss | null>(null);
  const [msg, setMsg] = useState('');
  const cells = useRef<Record<string, HTMLInputElement | null>>({});

  const prog = PROGRAMS[pi];
  const total = prog.rows.length;
  const cols = prog.vars.length + 1;
  const colName = (c: number) => (c < prog.vars.length ? prog.vars[c] : t('Output', 'Вывод'));
  const activeLine = !shown && done < total ? prog.rows[done].line : 0;

  function selectProgram(i: number) {
    setPi(i);
    setTyped(blankGrid(PROGRAMS[i]));
    setDone(0);
    setShown(false);
    setMiss(null);
    setMsg('');
  }

  function setCell(r: number, c: number, v: string) {
    setTyped((prev) => prev.map((row, ri) => (ri === r ? row.map((x, ci) => (ci === c ? v : x)) : row)));
  }

  function focusCell(r: number, c: number) {
    requestAnimationFrame(() => cells.current[`${r}-${c}`]?.focus());
  }

  function checkRow() {
    if (shown || done >= total) return;
    const m = firstMiss(prog, done, typed[done]);
    setMiss(m);
    if (m) {
      const line = prog.rows[m.row].line;
      setMsg(t(
        `Step ${m.row + 1}, column ${colName(m.col)} is wrong. Read line ${line} again.`,
        `Шаг ${m.row + 1}, столбец «${colName(m.col)}» неверен. Перечитайте строку ${line}.`,
      ));
      focusCell(m.row, m.col);
      return;
    }
    setDone(done + 1);
    setMsg(done + 1 === total
      ? t('All steps are correct.', 'Все шаги верны.')
      : t(`Step ${done + 1} is correct. Fill in step ${done + 2}.`, `Шаг ${done + 1} верен. Заполните шаг ${done + 2}.`));
    if (done + 1 < total) focusCell(done + 1, 0);
  }

  function showAnswer() {
    setTyped(prog.rows.map((_, r) => expected(prog, r)));
    setDone(total);
    setShown(true);
    setMiss(null);
    setMsg(t('The answer is shown. Start again to practise.', 'Ответ показан. Начните заново, чтобы потренироваться.'));
  }

  return (
    <div className="flex min-w-0 flex-col gap-3 text-[var(--color-fg)]">
      <div role="group" aria-label={t('Program', 'Программа')} className="foma-btn-row">
        {PROGRAMS.map((x, i) => (
          <button key={x.id} type="button" className="foma-btn" aria-pressed={i === pi} onClick={() => selectProgram(i)}>
            {pick(x.title)}
          </button>
        ))}
      </div>

      <ol aria-label={t('Program code', 'Код программы')} className="m-0 flex list-none flex-col gap-0.5 rounded-md border border-[var(--color-border)] bg-[var(--color-bg)] p-2 font-mono text-sm leading-6">
        {prog.code.map((ln, i) => {
          const active = i + 1 === activeLine;
          return (
            <li
              key={i}
              aria-current={active ? 'step' : undefined}
              className={`whitespace-pre-wrap break-words rounded-sm px-1 ${active ? 'bg-[var(--color-card)] font-semibold' : ''}`}
            >
              <span className="mr-2 select-none text-[var(--color-muted)]">{i + 1}</span>
              {pick(ln)}
            </li>
          );
        })}
      </ol>

      <p className="m-0 text-sm text-[var(--color-muted)]">
        {t(
          'Fill each step after its line runs. Leave a cell empty if the variable does not exist yet. Output is what print shows.',
          'Заполняйте шаг после выполнения его строки. Если переменной ещё нет, оставьте клетку пустой. «Вывод» — то, что печатает print.',
        )}
      </p>

      <div className="min-w-0 overflow-x-auto">
        <table className="border-collapse text-sm">
          <caption className="mb-1 text-left font-semibold">{t('Trace table', 'Таблица трассировки')}</caption>
          <thead>
            <tr className="text-left">
              <th scope="col" className="px-0.5 py-1">{t('Step', 'Шаг')}</th>
              <th scope="col" className="px-0.5 py-1">{t('Line', 'Строка')}</th>
              {prog.vars.map((v) => (
                <th scope="col" key={v} className="px-0.5 py-1 font-mono">{v}</th>
              ))}
              <th scope="col" className="px-0.5 py-1">{t('Output', 'Вывод')}</th>
            </tr>
          </thead>
          <tbody>
            {prog.rows.map((row, r) => {
              const editable = !shown && r === done;
              return (
                <tr key={r} aria-current={editable ? 'step' : undefined} className="border-t border-[var(--color-border)]">
                  <th scope="row" className="px-0.5 py-1 font-normal">{r + 1}</th>
                  <td className="px-0.5 py-1 font-mono">{row.line}</td>
                  {Array.from({ length: cols }, (_, c) => (
                    <td key={c} className="px-0.5 py-1">
                      <input
                        ref={(el) => { cells.current[`${r}-${c}`] = el; }}
                        value={typed[r][c]}
                        onChange={(e) => setCell(r, c, e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            checkRow();
                          }
                        }}
                        readOnly={!editable}
                        disabled={!shown && r > done}
                        aria-invalid={miss && miss.row === r && miss.col === c ? true : undefined}
                        aria-label={`${t('Step', 'Шаг')} ${r + 1}, ${colName(c)}`}
                        autoComplete="off"
                        spellCheck={false}
                        className={`${c === prog.vars.length ? 'w-24' : 'w-16'} rounded-md border border-[var(--color-border)] bg-[var(--color-card)] px-1.5 py-1 font-mono text-[16px] text-[var(--color-fg)] read-only:bg-[var(--color-bg)] disabled:opacity-50`}
                      />
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="foma-btn-row">
        <button type="button" className="foma-btn foma-btn--primary" disabled={shown || done >= total} onClick={checkRow}>
          {t('Check row', 'Проверить шаг')}
        </button>
        <button type="button" className="foma-btn" disabled={shown} onClick={showAnswer}>
          {t('Show answer', 'Показать ответ')}
        </button>
        <button type="button" className="foma-btn" onClick={() => selectProgram(pi)}>
          {t('Start again', 'Начать заново')}
        </button>
      </div>
      <p aria-live="polite" className="m-0 min-h-[1.5em] text-sm">{msg}</p>
    </div>
  );
}
