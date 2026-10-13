// Small Markdown reader for the L fields of the content contract: short text, inline Markdown, formulas in $...$.
// Supported inline: **bold**, *italic* / _italic_, `code`, $math$ and $$display math$$, [text](url), \-escapes.
// Supported blocks: paragraphs (single line breaks kept), "- " bullet lists, "1. " numbered lists and GFM tables
// ("| a | b |" with a "|:--|--:|" row under the header; a pipe inside $...$ or `...` does not split a cell).
// Pure functions only. The React side lives in src/components/content/RichText.tsx.

export type Inline =
  | { type: 'text'; value: string }
  | { type: 'strong'; children: Inline[] }
  | { type: 'em'; children: Inline[] }
  | { type: 'code'; value: string }
  | { type: 'math'; value: string; display: boolean }
  | { type: 'link'; href: string; children: Inline[] }
  | { type: 'br' };

// Column alignment from the row under a table header: ":--" left, ":-:" center, "--:" right, "--" not set.
export type Align = 'left' | 'center' | 'right' | null;

export type Block =
  | { type: 'p'; children: Inline[] }
  | { type: 'ul'; items: Inline[][] }
  | { type: 'ol'; items: Inline[][] }
  | { type: 'table'; align: Align[]; header: Inline[][]; rows: Inline[][][] };

const ESCAPABLE = '\\`*_$[]';

const isSpace = (ch: string | undefined): boolean => ch === undefined || /\s/.test(ch);
const isWord = (ch: string | undefined): boolean => ch !== undefined && /[\p{L}\p{N}]/u.test(ch);
const isDigit = (ch: string | undefined): boolean => ch !== undefined && ch >= '0' && ch <= '9';

// Link targets: public http(s) pages, mailto, and in-app hash routes. Anything else (javascript:, data:) is refused.
export function safeLinkTarget(href: string): string | null {
  const value = href.trim();
  if (value.startsWith('#/')) return value;
  try {
    const url = new URL(value);
    return url.protocol === 'https:' || url.protocol === 'http:' || url.protocol === 'mailto:' ? value : null;
  } catch {
    return null;
  }
}

interface MathSpan { value: string; display: boolean; end: number }

// Pandoc rule for single dollars: the opening $ is followed by a non-space, the closing $ is preceded by a
// non-space and not followed by a digit. So "$5 and $10" stays plain text. "\$" inside a formula is skipped.
function readMath(text: string, start: number): MathSpan | null {
  if (text[start] !== '$') return null;
  if (text.startsWith('$$', start)) {
    const close = text.indexOf('$$', start + 2);
    const value = close > start + 2 ? text.slice(start + 2, close).trim() : '';
    return value ? { value, display: true, end: close + 2 } : null;
  }
  const first = text[start + 1];
  if (isSpace(first) || first === '$') return null;
  for (let j = start + 1; j < text.length; j += 1) {
    const ch = text[j];
    if (ch === '\\') {
      j += 1;
      continue;
    }
    if (ch === '$' && !isSpace(text[j - 1]) && !isDigit(text[j + 1])) {
      return { value: text.slice(start + 1, j), display: false, end: j + 1 };
    }
  }
  return null;
}

// Index after a code span or a math span that starts at `at`; `at` itself when none starts there.
function spanEnd(text: string, at: number): number {
  if (text[at] === '`') {
    const end = text.indexOf('`', at + 1);
    return end > at + 1 ? end + 1 : at;
  }
  if (text[at] === '$') {
    const math = readMath(text, at);
    return math ? math.end : at;
  }
  return at;
}

// First index >= from where accept() holds, not looking inside code spans, math spans or escapes. -1 if none.
function scanFor(text: string, from: number, accept: (index: number) => boolean): number {
  let j = from;
  while (j < text.length) {
    if (text[j] === '\\' && j + 1 < text.length && ESCAPABLE.includes(text[j + 1])) {
      j += 2;
      continue;
    }
    const after = spanEnd(text, j);
    if (after > j) {
      j = after;
      continue;
    }
    if (accept(j)) return j;
    j += 1;
  }
  return -1;
}

export function parseInline(text: string): Inline[] {
  const out: Inline[] = [];
  let buffer = '';
  const flush = (): void => {
    if (buffer) {
      out.push({ type: 'text', value: buffer });
      buffer = '';
    }
  };

  let i = 0;
  while (i < text.length) {
    const ch = text[i];

    if (ch === '\\' && i + 1 < text.length && ESCAPABLE.includes(text[i + 1])) {
      buffer += text[i + 1];
      i += 2;
      continue;
    }

    if (ch === '`') {
      const end = text.indexOf('`', i + 1);
      if (end > i + 1) {
        flush();
        out.push({ type: 'code', value: text.slice(i + 1, end) });
        i = end + 1;
        continue;
      }
    }

    if (ch === '$') {
      const math = readMath(text, i);
      if (math) {
        flush();
        out.push({ type: 'math', value: math.value, display: math.display });
        i = math.end;
        continue;
      }
    }

    if (ch === '*' && text[i + 1] === '*' && !isSpace(text[i + 2])) {
      const end = scanFor(text, i + 2, j => text.startsWith('**', j) && j > i + 2 && !isSpace(text[j - 1]));
      if (end > 0) {
        flush();
        out.push({ type: 'strong', children: parseInline(text.slice(i + 2, end)) });
        i = end + 2;
        continue;
      }
    }

    if (ch === '*' && text[i + 1] !== '*' && !isSpace(text[i + 1])) {
      const end = scanFor(
        text,
        i + 1,
        j => text[j] === '*' && j > i + 1 && text[j - 1] !== '*' && text[j + 1] !== '*' && !isSpace(text[j - 1]),
      );
      if (end > 0) {
        flush();
        out.push({ type: 'em', children: parseInline(text.slice(i + 1, end)) });
        i = end + 1;
        continue;
      }
    }

    if (ch === '_' && !isWord(text[i - 1]) && text[i + 1] !== '_' && !isSpace(text[i + 1])) {
      const end = scanFor(text, i + 1, j => text[j] === '_' && j > i + 1 && !isSpace(text[j - 1]) && !isWord(text[j + 1]));
      if (end > 0) {
        flush();
        out.push({ type: 'em', children: parseInline(text.slice(i + 1, end)) });
        i = end + 1;
        continue;
      }
    }

    if (ch === '[') {
      const close = scanFor(text, i + 1, j => text[j] === ']');
      if (close > i + 1 && text[close + 1] === '(') {
        const urlEnd = text.indexOf(')', close + 2);
        const target = urlEnd > close + 2 ? safeLinkTarget(text.slice(close + 2, urlEnd)) : null;
        if (target) {
          flush();
          out.push({ type: 'link', href: target, children: parseInline(text.slice(i + 1, close)) });
          i = urlEnd + 1;
          continue;
        }
      }
    }

    buffer += ch;
    i += 1;
  }

  flush();
  return out;
}

const BULLET = /^\s*[-*•]\s+(\S.*)$/;
const ORDERED = /^\s*\d{1,2}[.)]\s+(\S.*)$/;

interface Run { kind: 'p' | 'ul' | 'ol'; lines: string[] }
interface TableEntry { kind: 'table'; align: Align[]; header: string[]; rows: string[][] }
type Entry = Run | TableEntry;

// The cells of one table row. A pipe inside $...$ or `...` does not split a cell, "\|" is a pipe, and any other
// escape is kept for the inline reader. Leading and trailing pipes are optional.
function splitRow(line: string): string[] {
  let text = line.trim();
  if (text.startsWith('|')) text = text.slice(1);
  if (text.endsWith('|') && !text.endsWith('\\|')) text = text.slice(0, -1);
  const cells: string[] = [];
  let cell = '';
  let i = 0;
  while (i < text.length) {
    const ch = text[i];
    if (ch === '\\' && i + 1 < text.length) {
      cell += text[i + 1] === '|' ? '|' : ch + text[i + 1];
      i += 2;
      continue;
    }
    const end = spanEnd(text, i);
    if (end > i) {
      cell += text.slice(i, end);
      i = end;
      continue;
    }
    if (ch === '|') {
      cells.push(cell.trim());
      cell = '';
    } else {
      cell += ch;
    }
    i += 1;
  }
  cells.push(cell.trim());
  return cells;
}

const DELIMITER_CELL = /^:?-+:?$/;

// The row under a header: one cell per column, each a run of dashes with optional colons. Null when the line is not one.
function alignmentsOf(line: string): Align[] | null {
  if (!line.includes('|')) return null;
  const align: Align[] = [];
  for (const cell of splitRow(line)) {
    if (!DELIMITER_CELL.test(cell)) return null;
    const left = cell.startsWith(':');
    const right = cell.endsWith(':');
    align.push(left && right ? 'center' : right ? 'right' : left ? 'left' : null);
  }
  return align;
}

// A table starts at a line with pipes that is followed by an alignment row with the same number of cells. Its body
// is the lines with pipes after that; a blank line or a line without a pipe ends it. Short rows are padded with empty
// cells, long rows are cut to the number of columns.
function readTable(lines: string[], start: number): { entry: TableEntry; next: number } | null {
  if (!lines[start].includes('|') || start + 1 >= lines.length) return null;
  const align = alignmentsOf(lines[start + 1]);
  if (!align) return null;
  const header = splitRow(lines[start]);
  if (header.length !== align.length) return null;
  const rows: string[][] = [];
  let next = start + 2;
  while (next < lines.length && lines[next].includes('|')) {
    const cells = splitRow(lines[next]);
    rows.push(Array.from({ length: align.length }, (_, column) => cells[column] ?? ''));
    next += 1;
  }
  return { entry: { kind: 'table', align, header, rows }, next };
}

function withBreaks(lines: string[]): Inline[] {
  const out: Inline[] = [];
  lines.forEach((line, index) => {
    if (index > 0) out.push({ type: 'br' });
    out.push(...parseInline(line));
  });
  return out;
}

export function parseBlocks(text: string): Block[] {
  const entries: Entry[] = [];
  let last: Run | undefined;
  const lines = text.replace(/\r\n?/g, '\n').split('\n');

  for (let index = 0; index < lines.length; index += 1) {
    const source = lines[index];
    const line = source.trimEnd();
    if (!line.trim()) {
      last = undefined;
      continue;
    }

    const table = readTable(lines, index);
    if (table) {
      entries.push(table.entry);
      last = undefined;
      index = table.next - 1;
      continue;
    }

    const bullet = BULLET.exec(line);
    const item = bullet ?? ORDERED.exec(line);
    if (item) {
      const kind = bullet ? 'ul' : 'ol';
      if (!last || last.kind !== kind) {
        last = { kind, lines: [] };
        entries.push(last);
      }
      last.lines.push(item[1].trim());
      continue;
    }

    if (last && last.kind !== 'p' && /^\s{2,}/.test(source)) {
      last.lines[last.lines.length - 1] += ` ${line.trim()}`;
      continue;
    }

    if (!last || last.kind !== 'p') {
      last = { kind: 'p', lines: [] };
      entries.push(last);
    }
    last.lines.push(line.trim());
  }

  return entries.map((entry): Block => {
    if (entry.kind === 'table') {
      return {
        type: 'table',
        align: entry.align,
        header: entry.header.map(cell => parseInline(cell)),
        rows: entry.rows.map(row => row.map(cell => parseInline(cell))),
      };
    }
    return entry.kind === 'p'
      ? { type: 'p', children: withBreaks(entry.lines) }
      : { type: entry.kind, items: entry.lines.map(parseInline) };
  });
}
