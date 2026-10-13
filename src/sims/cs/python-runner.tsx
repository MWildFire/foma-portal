import { useId, useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';
import type { Lang } from '../../contract/types';

// ---- Logic: plain functions, no React or DOM (checked from the scratchpad) ----

type Bi = { en: string; ru: string };
type PyValue = number | PyValue[];
interface Task {
  fn: string; // the function the learner writes
  title: Bi;
  text: Bi;
  starter: string;
  banned: string[]; // built-ins hidden for this task
  tests: [PyValue, string][]; // [input, str() of the expected result]
}
interface Graded { label: string; want: string; got: string; pass: boolean }

const PYODIDE_INDEX = 'https://cdn.jsdelivr.net/pyodide/v0.27.7/full/';
const TIME_LIMIT_S = 3;

const TASKS: Task[] = [
  {
    fn: 'sum_list', banned: ['sum'],
    title: { en: 'Sum of a list', ru: 'Сумма списка' },
    text: { en: 'Write sum_list(numbers): return the sum of the numbers, using a for loop. sum() is not allowed.', ru: 'Напишите sum_list(numbers): верните сумму чисел, используя цикл for. sum() нельзя.' },
    starter: 'def sum_list(numbers):\n    total = 0\n    for n in numbers:\n        pass  # add n to total\n    return total\n\nif __name__ == "__main__":\n    print(sum_list([1, 2, 3]))',
    tests: [[[], '0'], [[5], '5'], [[1, 2, 3, 4], '10'], [[-3, 7, 2], '6'], [[10, 20, 30, 40, 50], '150']],
  },
  {
    fn: 'largest', banned: ['max'],
    title: { en: 'Largest value', ru: 'Наибольшее значение' },
    text: { en: 'Write largest(numbers): return the biggest number of a non-empty list. Compare in a loop. max() is not allowed.', ru: 'Напишите largest(numbers): верните наибольшее число непустого списка. Сравнивайте в цикле. max() нельзя.' },
    starter: 'def largest(numbers):\n    best = numbers[0]\n    for n in numbers:\n        pass  # if n > best, update best\n    return best\n\nif __name__ == "__main__":\n    print(largest([3, 9, 2]))',
    tests: [[[3, 9, 2], '9'], [[-5, -2, -8], '-2'], [[7], '7'], [[4, 4, 1], '4'], [[0, 12, 12, 3], '12']],
  },
  {
    fn: 'is_prime', banned: [],
    title: { en: 'Prime test', ru: 'Проверка на простоту' },
    text: { en: 'Write is_prime(n) for n >= 2: return True if no number from 2 to n - 1 divides n, otherwise False.', ru: 'Напишите is_prime(n) для n >= 2: верните True, если ни одно число от 2 до n − 1 не делит n, иначе False.' },
    starter: 'def is_prime(n):\n    # check the divisors from 2 to n - 1\n    return True\n\nif __name__ == "__main__":\n    print(is_prime(7))',
    tests: [[2, 'True'], [4, 'False'], [9, 'False'], [13, 'True'], [91, 'False'], [97, 'True']],
  },
];

function pyLiteral(v: PyValue): string {
  return Array.isArray(v) ? `[${v.map(pyLiteral).join(', ')}]` : String(v);
}

// Appended to the learner's code: calls the function on each fixed input and returns JSON [[index, str(result)], ...].
function buildHarness(task: Task): string {
  const cases = task.tests.map(([input]) => pyLiteral(input)).join(', ');
  return `
import json as _json
_cases = [${cases}]
_fn = globals().get(${JSON.stringify(task.fn)})
_rows = []
for _i, _inp in enumerate(_cases):
    if not callable(_fn):
        _got = "NameError: ${task.fn} is not defined"
    else:
        try:
            _got = str(_fn(_inp))
        except Exception as _e:
            _got = type(_e).__name__ + ": " + str(_e)
    _rows.append([_i, _got])
_json.dumps(_rows)
`;
}

function grade(task: Task, rows: [number, string][]): Graded[] {
  return rows.map(([i, got]) => {
    const [input, want] = task.tests[i];
    return { label: `${task.fn}(${pyLiteral(input)})`, want, got, pass: got === want };
  });
}

// A fresh namespace for each run. Banned built-ins are simply absent from __builtins__.
function scopeCode(banned: string[]): string {
  return `{"__name__": "__main__", "__builtins__": {k: v for k, v in vars(__import__("builtins")).items() if k not in ${JSON.stringify(banned)}}}`;
}

// Time limit: a trace hook raises TimeLimitExceeded. It is a BaseException, so `except Exception` cannot hide it.
const GUARD_ON = `import sys as _sys, time as _time
class TimeLimitExceeded(BaseException):
    pass
_deadline = _time.perf_counter() + ${TIME_LIMIT_S}
def _guard(frame, event, arg):
    if _time.perf_counter() > _deadline:
        raise TimeLimitExceeded("time limit")
    return _guard
_sys.settrace(_guard)`;
// The batched callback fires only on a newline, so this final newline completes a last partial line.
const GUARD_OFF = 'import sys as _sys\n_sys.settrace(None)\n_sys.stdout.write("\\n")';

// Tab inserts four spaces at the caret (Shift+Tab is left to the browser, so keyboard users can leave the editor).
function insertTab(value: string, start: number, end: number) {
  return { value: `${value.slice(0, start)}    ${value.slice(end)}`, pos: start + 4 };
}

// ---- Browser: Pyodide loader and runner ----

interface PyProxy { destroy(): void }
interface PyodideApi {
  runPython(code: string, options?: { globals?: PyProxy }): unknown;
  setStdout(options: { batched: (line: string) => void }): void;
}
interface RunResult { out: string; error?: string; timedOut: boolean; value: string | null }

let pyPromise: Promise<PyodideApi> | null = null;
let pyReady = false;
let outLines: string[] = [];

// The script tag is added once. A failed load clears the cache, so the next click can retry.
function loadPyodideOnce(): Promise<PyodideApi> {
  if (!pyPromise) {
    pyPromise = (async () => {
      const w = window as unknown as { loadPyodide?: (o: { indexURL: string }) => Promise<PyodideApi> };
      if (!w.loadPyodide) {
        await new Promise<void>((resolve, reject) => {
          const script = document.createElement('script');
          script.src = `${PYODIDE_INDEX}pyodide.js`;
          script.onload = () => resolve();
          script.onerror = () => { script.remove(); reject(new Error('pyodide.js failed to load')); };
          document.head.appendChild(script);
        });
      }
      if (!w.loadPyodide) throw new Error('loadPyodide is missing');
      const py = await w.loadPyodide({ indexURL: PYODIDE_INDEX });
      py.setStdout({ batched: (line) => { outLines.push(line); } });
      pyReady = true;
      return py;
    })();
    pyPromise.catch(() => { pyPromise = null; });
  }
  return pyPromise;
}

async function runPython(source: string, banned: string[]): Promise<RunResult> {
  const py = await loadPyodideOnce();
  outLines = [];
  const scope = py.runPython(scopeCode(banned)) as PyProxy;
  let value: unknown = null;
  let error: string | undefined;
  try {
    py.runPython(GUARD_ON);
    value = py.runPython(source, { globals: scope });
  } catch (e) {
    error = e instanceof Error ? e.message : String(e);
  } finally {
    py.runPython(GUARD_OFF);
  }
  if (value && typeof value === 'object') (value as PyProxy).destroy();
  scope.destroy();
  const lines = outLines; if (lines[lines.length - 1] === '') lines.pop(); // drop the newline added by GUARD_OFF
  return {
    out: lines.join('\n'),
    error,
    timedOut: error?.includes('TimeLimitExceeded') ?? false,
    value: typeof value === 'string' ? value : null,
  };
}

// ---- UI ----

const panel = 'm-0 max-h-56 overflow-auto whitespace-pre-wrap break-words rounded-md border border-[var(--color-border)] bg-[var(--color-bg)] p-2 font-mono text-sm leading-6';

export default function PythonRunner(p: { lang: Lang }) {
  const t = (en: string, ru: string) => (p.lang === 'ru' ? ru : en);
  const uid = useId();
  const [index, setIndex] = useState(0);
  const [codes, setCodes] = useState<string[]>(() => TASKS.map((x) => x.starter));
  const [busy, setBusy] = useState(false);
  const [out, setOut] = useState('');
  const [error, setError] = useState('');
  const [results, setResults] = useState<Graded[] | null>(null);
  const [status, setStatus] = useState('');
  const runRef = useRef<HTMLButtonElement>(null);

  const task = TASKS[index];
  const code = codes[index];
  const setCode = (value: string) => setCodes((prev) => prev.map((c, i) => (i === index ? value : c)));

  function pickTask(i: number) {
    setIndex(i); setOut(''); setError(''); setResults(null); setStatus('');
  }

  function onEditorKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Escape') { runRef.current?.focus(); return; }
    if (e.key !== 'Tab' || e.shiftKey || e.ctrlKey || e.metaKey || e.altKey) return;
    e.preventDefault();
    const el = e.currentTarget;
    const next = insertTab(el.value, el.selectionStart, el.selectionEnd);
    setCode(next.value);
    requestAnimationFrame(() => el.setSelectionRange(next.pos, next.pos));
  }

  async function execute(check: boolean) {
    setBusy(true);
    setOut('');
    setError('');
    setResults(null);
    setStatus(pyReady ? t('Running...', 'Выполняю...') : t('Loading Python (first run only)...', 'Загружаю Python (только при первом запуске)...'));
    await new Promise((done) => requestAnimationFrame(() => setTimeout(done, 0))); // let the status paint first
    try {
      const res = await runPython(check ? `${code}\n${buildHarness(task)}` : code, task.banned);
      setOut(res.out);
      if (res.timedOut) {
        setError(t(`Stopped after ${TIME_LIMIT_S} seconds. Is there an endless loop?`, `Остановлено через ${TIME_LIMIT_S} с. Возможно, бесконечный цикл?`));
        setStatus(t('The code was stopped.', 'Код остановлен.'));
      } else if (res.error !== undefined) {
        setError(res.error);
        setStatus(t('The code stopped with an error.', 'Код остановился с ошибкой.'));
      } else if (check && res.value !== null) {
        const graded = grade(task, JSON.parse(res.value) as [number, string][]);
        const passed = graded.filter((g) => g.pass).length;
        setResults(graded);
        setStatus(passed === graded.length
          ? t('All tests passed.', 'Все тесты пройдены.')
          : t(`Passed ${passed} of ${graded.length} tests.`, `Пройдено тестов: ${passed} из ${graded.length}.`));
      } else {
        setStatus(t('Done.', 'Готово.'));
      }
    } catch {
      setStatus(t('Python could not run. Check the internet connection and try again.', 'Python не запустился. Проверьте интернет и попробуйте ещё раз.'));
    } finally {
      setBusy(false);
    }
  }

  const codeId = `${uid}-code`;
  const hintId = `${uid}-hint`;
  const outId = `${uid}-out`;
  const btn = 'foma-btn';

  return (
    <div className="flex min-w-0 flex-col gap-3 text-[var(--color-fg)]">
      <div role="group" aria-label={t('Task', 'Задание')} className="foma-btn-row">
        {TASKS.map((x, i) => (
          <button key={x.fn} type="button" className={btn} aria-pressed={i === index} disabled={busy} onClick={() => pickTask(i)}>
            {t(x.title.en, x.title.ru)}
          </button>
        ))}
      </div>
      <div className="min-w-0">
        <p className="m-0 font-semibold">{t(task.title.en, task.title.ru)}</p>
        <p className="m-0 mt-1 text-[15px] leading-6">{t(task.text.en, task.text.ru)}</p>
      </div>

      <div className="flex min-w-0 flex-col gap-1">
        <label htmlFor={codeId} className="text-sm font-semibold">{t('Python code', 'Код на Python')}</label>
        <textarea
          id={codeId}
          aria-describedby={hintId}
          value={code}
          onChange={(e) => setCode(e.target.value)}
          onKeyDown={onEditorKeyDown}
          rows={10}
          spellCheck={false}
          autoCapitalize="off"
          autoCorrect="off"
          className="w-full min-w-0 resize-y rounded-md border border-[var(--color-border)] bg-[var(--color-bg)] p-2 font-mono text-[16px] leading-6 text-[var(--color-fg)]"
        />
        <p id={hintId} className="m-0 text-sm text-[var(--color-muted)]">
          {t('Tab inserts 4 spaces. Press Esc to leave the editor.', 'Tab вставляет 4 пробела. Esc — выйти из редактора.')}
        </p>
      </div>

      <div className="foma-btn-row">
        <button ref={runRef} type="button" className={btn} disabled={busy} onClick={() => execute(false)}>{t('Run', 'Запустить')}</button>
        <button type="button" className={`${btn} foma-btn--primary`} disabled={busy} onClick={() => execute(true)}>{t('Check', 'Проверить')}</button>
        <button type="button" className={btn} disabled={busy} onClick={() => setCode(task.starter)}>{t('Reset code', 'Исходный код')}</button>
      </div>
      <p aria-live="polite" className="m-0 text-sm">{status}</p>

      <div className="flex min-w-0 flex-col gap-1">
        <h3 id={outId} className="m-0 text-sm font-semibold">{t('Output', 'Вывод')}</h3>
        <pre tabIndex={0} aria-labelledby={outId} className={panel}>{out || t('No output.', 'Вывода нет.')}</pre>
      </div>
      {error && (
        <div className="flex min-w-0 flex-col gap-1">
          <h3 className="m-0 text-sm font-semibold">{t('Error', 'Ошибка')}</h3>
          <pre tabIndex={0} className={panel}>{error}</pre>
        </div>
      )}

      {results && (
        <ul aria-label={t('Tests', 'Тесты')} className="m-0 flex list-none flex-col gap-1 p-0 text-sm">
          {results.map((r, i) => (
            <li key={i} className="break-words rounded-md border border-[var(--color-border)] bg-[var(--color-card)] px-2 py-1">
              <strong>{r.pass ? t('Pass', 'Верно') : t('Fail', 'Неверно')}</strong>{': '}
              <code>{r.label}</code>{`: ${t('got', 'получено')} `}<code>{r.got}</code>
              {!r.pass && <>{`, ${t('expected', 'ожидалось')} `}<code>{r.want}</code></>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
