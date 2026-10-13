// Checking a progress code before it replaces the progress on this device.
// The code itself is made and read by src/lib/transfer.ts; this file only decides what to tell the student.
import type { ProgressPack } from '../lib/transfer.ts';
// The .ts extensions are what Node's test runner needs; tsconfig.json does not allow them for value imports, hence the ignores.
// @ts-ignore TS5097
import { decodeProgress } from '../lib/transfer.ts';
// @ts-ignore TS5097
import { STORAGE_KEY } from '../lib/storage.ts';

export type ImportProblem = 'empty' | 'invalid' | 'no-progress' | 'damaged';

export type ImportCheck =
  | { ok: false; problem: ImportProblem }
  | { ok: true; pack: ProgressPack; items: number; madeAt: string };

const STATE_KEY: string = STORAGE_KEY;

export function checkImport(text: string): ImportCheck {
  if (text.trim() === '') return { ok: false, problem: 'empty' };
  const pack = decodeProgress(text);
  if (!pack) return { ok: false, problem: 'invalid' };
  const items = Object.keys(pack.data).length;
  if (items === 0) return { ok: false, problem: 'no-progress' };
  const state = pack.data[STATE_KEY];
  if (state !== undefined) {
    try {
      const parsed: unknown = JSON.parse(state);
      if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) return { ok: false, problem: 'damaged' };
    } catch {
      return { ok: false, problem: 'damaged' };
    }
  }
  return { ok: true, pack, items, madeAt: pack.at };
}
