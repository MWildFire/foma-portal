import path from 'node:path';
import { loadPack, openContentServer } from './lib/load.ts';
import { textOf } from './lib/model.ts';

// Prints the math questions as JSON (id, answer, marks, paper) for scripts/math-verify.py. It uses the loader of
// npm run validate, so the answers it reports are the ones the site builds.
//
//   node --experimental-strip-types scripts/math-export.ts

const root = path.resolve(import.meta.dirname, '..');

async function main(): Promise<number> {
  const server = await openContentServer(root);
  try {
    const result = await loadPack(server, root, 'math');
    if (!result.ok) {
      console.error(`math-export: cannot load content/math: ${result.failure.message}`);
      return 1;
    }
    const rows = result.loaded.pack.questions.map(question => {
      const fields = question as unknown as Record<string, unknown>;
      return {
        id: textOf(fields.id),
        answer: typeof fields.answer === 'string' ? fields.answer : null,
        marks: fields.marks,
        paper: textOf(fields.paper),
      };
    });
    console.log(JSON.stringify(rows));
    return 0;
  } finally {
    await server.close();
  }
}

main().then(
  code => { process.exitCode = code; },
  error => {
    console.error(error);
    process.exitCode = 1;
  },
);
