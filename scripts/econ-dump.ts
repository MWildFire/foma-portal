import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Prints every Question of content/econ/ as one JSON array, for scripts/econ-verify.py, which recomputes the answers.
//
//   node --experimental-strip-types scripts/econ-dump.ts

const root = path.resolve(import.meta.dirname, '..');
const econDir = path.join(root, 'content', 'econ');

// Every .ts file below a folder called "questions" (the same layout content/econ/index.ts reads).
function questionFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  const found: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      found.push(...questionFiles(full));
    } else if (entry.isFile() && entry.name.endsWith('.ts') && path.basename(dir) === 'questions') {
      found.push(full);
    }
  }
  return found.sort();
}

async function main(): Promise<void> {
  const rows: Record<string, unknown>[] = [];
  for (const file of questionFiles(econDir)) {
    const loaded = (await import(pathToFileURL(file).href)) as { questions?: Record<string, unknown>[] };
    for (const question of loaded.questions ?? []) {
      rows.push({ ...question, file: path.relative(root, file) });
    }
  }
  process.stdout.write(JSON.stringify(rows));
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
