import { fileKind, type FileKind, type SubjectFile } from './files.ts';
import type { Pos } from './report.ts';

// Content reaches the validator as loaded objects, so it no longer knows which file an item came from. The locator
// recovers that from the TypeScript source: it looks for `id: '...'` (or `code: '...'`) lines in the files the
// index.ts globs read. It only makes error messages more precise; rules never depend on it.

export type ItemKind = 'syllabus' | 'topic' | 'term' | 'formula' | 'question' | 'case' | 'timedSet' | 'paper' | 'pastPaper' | 'assignment';

export interface Locator {
  // Every line that defines this item, in file order.
  all(kind: ItemKind, id: string): Pos[];
  find(kind: ItemKind, id: string): Pos | undefined;
  // The first line at or after `pos` that contains one of the strings; falls back to `pos` itself.
  within(pos: Pos | undefined, needles: string[]): Pos | undefined;
}

const DEFINES: { [kind in FileKind]?: { kind: ItemKind; key: string }[] } = {
  syllabus: [{ kind: 'syllabus', key: 'code' }],
  'topic-meta': [{ kind: 'topic', key: 'id' }],
  terms: [{ kind: 'term', key: 'id' }],
  formulas: [{ kind: 'formula', key: 'id' }],
  questions: [{ kind: 'question', key: 'id' }],
  cases: [{ kind: 'case', key: 'id' }],
  papers: [{ kind: 'timedSet', key: 'id' }, { kind: 'paper', key: 'paper' }],
  'past-papers': [{ kind: 'pastPaper', key: 'id' }],
  assignments: [{ kind: 'assignment', key: 'id' }],
};

export function createLocator(files: SubjectFile[], subject: string): Locator {
  const found = new Map<string, Pos[]>();
  const lines = new Map<string, string[]>();
  const keyOf = (kind: ItemKind, id: string): string => `${kind}\u0000${id}`;

  files.forEach(file => {
    const defines = DEFINES[fileKind(file, subject)];
    if (!defines || file.text === undefined) return;
    const fileLines = file.text.split('\n');
    lines.set(file.rel, fileLines);
    defines.forEach(({ kind, key }) => {
      const pattern = new RegExp(`\\b${key}['"]?\\s*:\\s*(['"\`])((?:\\\\.|(?!\\1)[^\\\\\\n])*)\\1`, 'g');
      fileLines.forEach((text, index) => {
        pattern.lastIndex = 0;
        let match = pattern.exec(text);
        while (match !== null) {
          const entry = keyOf(kind, match[2]);
          found.set(entry, (found.get(entry) || []).concat([{ file: file.rel, line: index + 1 }]));
          match = pattern.exec(text);
        }
      });
    });
  });

  return {
    all: (kind, id) => found.get(keyOf(kind, id)) || [],
    find: (kind, id) => (found.get(keyOf(kind, id)) || [])[0],
    within: (pos, needles) => {
      const source = pos && pos.file ? lines.get(pos.file) : undefined;
      if (!pos || !pos.file || !source) return pos;
      for (let index = (pos.line || 1) - 1; index < source.length; index++) {
        if (needles.some(needle => source[index].indexOf(needle) !== -1)) return { file: pos.file, line: index + 1 };
      }
      return pos;
    },
  };
}

// "a.ts:12, b.ts:40" for messages that point at several places.
export function describePositions(positions: Pos[]): string {
  return positions.map(pos => `${pos.file}${pos.line ? `:${pos.line}` : ''}`).join(', ');
}
