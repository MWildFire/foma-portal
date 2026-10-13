import fs from 'node:fs';
import path from 'node:path';
import { parseArgs } from 'node:util';
import { readExamPapers, type ExamPaper } from './lib/duration.ts';
import { listSubjectDirs, readSims, readSubjectFiles } from './lib/files.ts';
import { loadPack, openContentServer } from './lib/load.ts';
import type { Pack } from './lib/model.ts';
import { countBySeverity, createReport, plural, renderReport, type Report } from './lib/report.ts';
import { termIdsByFolder } from './lib/term-ids.ts';
import { checkSubjects, validateSubject } from './lib/validate-subject.ts';
import type { ViteDevServer } from 'vite';

// npm run validate: checks every subject folder of content/ against the content contract (PLAN.md section 2).
// Errors make the exit code 1; warnings and information lines do not. Rules are in scripts/lib/rules-*.ts.
//
//   node --experimental-strip-types scripts/validate-content.ts [--root <repository root>]
//
// --root points the validator at another tree with the same layout (content/, src/sims/, data/exams.json).

function readExams(root: string, report: Report): ExamPaper[] | null {
  const file = 'data/exams.json';
  const absolute = path.join(root, file);
  if (!fs.existsSync(absolute)) {
    report.warn('', 'duration', `${file} not found, so paper guide durations were not checked`, { file });
    return null;
  }
  try {
    const read = readExamPapers(JSON.parse(fs.readFileSync(absolute, 'utf8')));
    read.problems.forEach(problem => report.error('', 'duration', problem, { file }));
    return read.papers;
  } catch (error) {
    report.error('', 'duration', `cannot read ${file}: ${(error as Error).message}`, { file });
    return null;
  }
}

const isFile = (absolute: string): boolean => fs.existsSync(absolute) && fs.statSync(absolute).isFile();

// The planner and the simulation gallery read content/<s>/topic-index.ts and the term ids (scripts/lib/term-ids.ts)
// without loading the pack. Both must list what the pack lists, or the planner would plan from other content.
async function checkPlannerIndex(server: ViteDevServer, root: string, folder: string, pack: Pack, termIds: string[], report: Report): Promise<void> {
  const file = `content/${folder}/topic-index.ts`;
  if (!isFile(path.join(root, file))) {
    report.error(folder, 'planner', `${file} is missing; the planner and the simulation gallery read it`, { file });
    return;
  }
  let index: { topics: { id: string }[]; pastPapers: { id: string }[] };
  try {
    index = (await server.ssrLoadModule(`/${file}`)).default;
  } catch (error) {
    report.error(folder, 'planner', `cannot load ${file}: ${(error as Error).message}`, { file });
    return;
  }
  const sameIds = (label: string, fromIndex: string[], fromPack: string[], message: string, where: string): void => {
    const sorted = (ids: string[]): string => Array.from(new Set(ids)).sort().join('\n');
    if (sorted(fromIndex) !== sorted(fromPack)) report.error(folder, 'planner', message, { file: where });
  };
  sameIds('topics', index.topics.map(topic => topic.id), pack.topics.map(topic => topic.id), `${file} does not list the same topics as index.ts`, file);
  sameIds(
    'past papers',
    index.pastPapers.map(paper => paper.id),
    pack.pastPapers.map(paper => paper.id),
    `${file} does not list the same past papers as index.ts`,
    file,
  );
  sameIds(
    'term ids',
    termIds,
    pack.terms.map(term => term.id),
    'the term ids read from the term files (scripts/lib/term-ids.ts) differ from the terms index.ts loads; write each term as an object literal in an array literal',
    `content/${folder}`,
  );
}

async function main(): Promise<number> {
  let rootOption: string | undefined;
  try {
    rootOption = parseArgs({ options: { root: { type: 'string' } }, allowPositionals: false }).values.root;
  } catch (error) {
    console.error(`${(error as Error).message}\nusage: node --experimental-strip-types scripts/validate-content.ts [--root <repository root>]`);
    return 2;
  }
  const root = path.resolve(rootOption || path.join(import.meta.dirname, '..'));
  const folders = listSubjectDirs(root);
  if (folders.length === 0) {
    console.log('validate-content: no subject folders in content/, nothing to validate');
    return 0;
  }

  const report = createReport();
  const exams = readExams(root, report);
  const loaded: { folder: string; pack: Pack }[] = [];

  const server = await openContentServer(root);
  const termIds = termIdsByFolder(path.join(root, 'content'));
  try {
    for (const folder of folders) {
      const result = await loadPack(server, root, folder);
      if (!result.ok) {
        report.error(folder, 'load', `cannot load the subject: ${result.failure.message}`, { file: result.failure.file, line: result.failure.line });
        continue;
      }
      result.loaded.dropped.forEach(entry => {
        const expected = entry.collection === 'topics' ? 'a default-exported TopicMeta' : `"${entry.collection}" as an array`;
        report.error(folder, 'load', `index.ts collected ${plural(entry.count, 'non-object entry', 'non-object entries')} for "${entry.collection}"; a file of that kind probably does not export ${expected}`);
      });
      loaded.push({ folder, pack: result.loaded.pack });
      await checkPlannerIndex(server, root, folder, result.loaded.pack, termIds[folder] ?? [], report);
    }
  } finally {
    await server.close();
  }

  checkSubjects(report, loaded.map(entry => ({ folder: entry.folder, metaId: entry.pack.meta.id })));
  loaded.forEach(entry => {
    validateSubject(report, {
      folder: entry.folder,
      pack: entry.pack,
      files: readSubjectFiles(root, entry.folder, true),
      sims: readSims(root, entry.folder),
      exams,
      fileExists: isFile,
    });
  });

  renderReport(report.issues, folders).forEach(line => console.log(line));
  const { errors, warnings } = countBySeverity(report.issues);
  console.log(`\nvalidate-content: ${plural(folders.length, 'subject')} (${folders.join(', ')}), ${plural(errors, 'error')}, ${plural(warnings, 'warning')}: ${errors > 0 ? 'FAILED' : 'OK'}`);
  return errors > 0 ? 1 : 0;
}

main().then(
  code => { process.exitCode = code; },
  error => {
    console.error(error);
    process.exitCode = 1;
  },
);
