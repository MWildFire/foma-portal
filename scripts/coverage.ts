import fs from 'node:fs';
import path from 'node:path';
import { parseArgs } from 'node:util';
import { groupTopicBodies, hasBothBodies, readSubjectFiles } from './lib/files.ts';
import { loadPack, openContentServer } from './lib/load.ts';
import { computeCoverage, formatPercent, renderCoverage } from './lib/syllabus-coverage.ts';

// npm run coverage -- <subject>: compares the syllabus codes of content/<subject>/ with its topics and writes the
// table to ops/coverage/<subject>.md (that file only). It is not part of `npm run check`, so that parallel streams
// never produce competing writes; each subject commits its own file.
//
//   node --experimental-strip-types scripts/coverage.ts <subject> [--root <repository root>]

const USAGE = 'usage: npm run coverage -- <subject>   (for example: npm run coverage -- geo)';

async function main(): Promise<number> {
  let subject: string | undefined;
  let rootOption: string | undefined;
  try {
    const parsed = parseArgs({ options: { root: { type: 'string' } }, allowPositionals: true });
    subject = parsed.positionals[0];
    rootOption = parsed.values.root;
  } catch (error) {
    console.error(`${(error as Error).message}\n${USAGE}`);
    return 2;
  }
  if (!subject || !/^[A-Za-z0-9_-]+$/.test(subject)) {
    console.error(USAGE);
    return 2;
  }
  const root = path.resolve(rootOption || path.join(import.meta.dirname, '..'));
  if (!fs.existsSync(path.join(root, 'content', subject))) {
    console.error(`coverage: there is no folder content/${subject}`);
    return 1;
  }

  const server = await openContentServer(root);
  let loaded;
  try {
    loaded = await loadPack(server, root, subject);
  } finally {
    await server.close();
  }
  if (!loaded.ok) {
    const where = loaded.failure.file ? `${loaded.failure.file}${loaded.failure.line ? `:${loaded.failure.line}` : ''}: ` : '';
    console.error(`coverage: cannot load content/${subject}: ${where}${loaded.failure.message}`);
    return 1;
  }

  const bodies = groupTopicBodies(readSubjectFiles(root, subject, false), subject);
  const coverage = computeCoverage(loaded.loaded.pack, topicId => hasBothBodies(bodies, topicId));
  const outFile = path.join(root, 'ops', 'coverage', `${subject}.md`);
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, renderCoverage(subject, coverage));

  const detail = coverage.percent === null ? 'no syllabus codes yet' : `${coverage.coveredInScope} of ${coverage.inScope} codes in scope`;
  console.log(`coverage ${subject}: ${formatPercent(coverage.percent)} (${detail}) -> ${path.relative(root, outFile)}`);
  return 0;
}

main().then(
  code => { process.exitCode = code; },
  error => {
    console.error(error);
    process.exitCode = 1;
  },
);
