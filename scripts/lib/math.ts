import katex from 'katex';

export interface MathSegment {
  tex: string;
  display: boolean;   // $$...$$ is display math, $...$ is inline math
  start: number;      // index of the opening delimiter
  end: number;        // index just after the closing delimiter
}

export interface MathScan {
  segments: MathSegment[];
  unbalanced: number[];   // indexes of `$` runs that never close
  code: { start: number; end: number }[];   // Markdown code spans, which are never math
}

function runLength(text: string, index: number, char: string): number {
  let length = 0;
  while (text.charAt(index + length) === char) length++;
  return length;
}

// Index of the next run of exactly `length` copies of `char`, or -1. In math a backslash escapes the next character
// (`\$` is a literal dollar sign); in a Markdown code span backslashes are plain characters.
function findClosingRun(text: string, from: number, char: string, length: number, escapes: boolean): number {
  let index = from;
  while (index < text.length) {
    if (escapes && text.charAt(index) === '\\') {
      index += 2;
    } else if (text.charAt(index) === char) {
      const run = runLength(text, index, char);
      if (run === length) return index;
      index += run;
    } else {
      index++;
    }
  }
  return -1;
}

// Finds the $...$ and $$...$$ formulas in an L string or a string prop. Rules (the same ones remark-math follows):
//   - `\$` is a literal dollar sign;
//   - text inside Markdown code spans (`...`) is not math;
//   - a run of N dollar signs closes at the next run of exactly N, like a code span;
//   - a run that never closes is reported in `unbalanced` (currency must be written \$5).
export function scanMath(text: string): MathScan {
  const segments: MathSegment[] = [];
  const unbalanced: number[] = [];
  const code: { start: number; end: number }[] = [];
  let index = 0;
  while (index < text.length) {
    const char = text.charAt(index);
    if (char === '\\') {
      index += 2;
    } else if (char === '`') {
      const run = runLength(text, index, '`');
      const close = findClosingRun(text, index + run, '`', run, false);
      if (close !== -1) code.push({ start: index, end: close + run });
      index = close === -1 ? index + run : close + run;
    } else if (char === '$') {
      const run = runLength(text, index, '$');
      const close = findClosingRun(text, index + run, '$', run, true);
      if (close === -1) {
        unbalanced.push(index);
        index += run;
      } else {
        segments.push({ tex: text.slice(index + run, close), display: run >= 2, start: index, end: close + run });
        index = close + run;
      }
    } else {
      index++;
    }
  }
  return { segments, unbalanced, code };
}

// The text with every formula and every code span cut out: what is left is the prose a reader reads as words.
export function stripLiterals(text: string): string {
  const scan = scanMath(text);
  const cuts = scan.segments.map(segment => ({ start: segment.start, end: segment.end })).concat(scan.code).sort((a, b) => a.start - b.start);
  let result = '';
  let cursor = 0;
  cuts.forEach(cut => {
    result += text.slice(cursor, cut.start);
    cursor = cut.end;
  });
  return result + text.slice(cursor);
}

export interface TexError { message: string; position?: number }

// Same call the site makes (react-katex / rehype-katex use KaTeX's defaults), but throwing on bad input. `strict`
// only controls console warnings in KaTeX, never whether a formula compiles, so it is silenced here.
export function texError(tex: string, display: boolean): TexError | null {
  try {
    katex.renderToString(tex, { throwOnError: true, displayMode: display, strict: 'ignore' });
    return null;
  } catch (error) {
    const found = error as { rawMessage?: unknown; message?: unknown; position?: unknown };
    const message = typeof found.rawMessage === 'string' ? found.rawMessage : String(found.message).split('\n')[0];
    return { message, position: typeof found.position === 'number' ? found.position : undefined };
  }
}
