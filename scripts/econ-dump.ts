import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Prints every Question and every PastPaperRef of content/econ/ as one JSON array, for scripts/econ-verify.py, which
// recomputes the answers and the calculations written in the past-paper guides. Each row has a "kind": "question"
// or "pastpaper".
//
//   node --experimental-strip-types scripts/econ-dump.ts

const root = path.resolve(import.meta.dirname, '..');
const econDir = path.join(root, 'content', 'econ');

// Every .ts file below the econ folder whose name passes the test, the same layout content/econ/index.ts reads.
function tsFiles(dir: string, keep: (file: string, parent: string) => boolean): string[] {
  if (!fs.existsSync(dir)) return [];
  const found: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      found.push(...tsFiles(full, keep));
    } else if (entry.isFile() && entry.name.endsWith('.ts') && keep(entry.name, path.basename(dir))) {
      found.push(full);
    }
  }
  return found.sort();
}

async function main(): Promise<void> {
  const rows: Record<string, unknown>[] = [];
  // Questions live in a folder called "questions" and are exported as "questions".
  for (const file of tsFiles(econDir, (_name, parent) => parent === 'questions')) {
    const loaded = (await import(pathToFileURL(file).href)) as { questions?: Record<string, unknown>[] };
    for (const question of loaded.questions ?? []) {
      rows.push({ ...question, kind: 'question', file: path.relative(root, file) });
    }
  }
  // Past papers live in pastpapers.ts and are exported as "pastPapers".
  for (const file of tsFiles(econDir, name => name === 'pastpapers.ts')) {
    const loaded = (await import(pathToFileURL(file).href)) as { pastPapers?: Record<string, unknown>[] };
    for (const paper of loaded.pastPapers ?? []) {
      rows.push({ ...paper, kind: 'pastpaper', file: path.relative(root, file) });
    }
  }
  process.stdout.write(JSON.stringify(rows));
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
