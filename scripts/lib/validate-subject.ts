import type { ExamPaper } from './duration.ts';
import { groupTopicBodies, hasBothBodies, KNOWN_SUBJECTS, type SimFile, type SubjectFile } from './files.ts';
import { createLocator } from './locator.ts';
import { analyzeMdx } from './mdx.ts';
import { LANGS, textOf, type Pack } from './model.ts';
import type { Report } from './report.ts';
import { checkFormulas, checkIds, checkPapers, checkQuestions, checkRefs, checkSources, checkTexts, findDuplicates, idSets } from './rules-data.ts';
import { checkAssignments } from './rules-assignments.ts';
import { checkPastPapers } from './rules-past-papers.ts';
import { checkExports, checkPlaceholders } from './rules-files.ts';
import { checkMdxDoc, checkParity, checkSimUsage, checkTopicFiles, type MdxCtx, type TopicDoc } from './rules-mdx.ts';
import { computeStats, isEmptySubject, statsLine, statsWarnings } from './stats.ts';
import { computeCoverage } from './syllabus-coverage.ts';

export interface SubjectInput {
  folder: string;                     // directory name under content/
  pack: Pack;
  files: SubjectFile[];               // every file of content/<folder>/, text files with their text
  sims: Map<string, SimFile>;         // src/sims/<folder>/*.tsx
  exams: ExamPaper[] | null;
  fileExists: (absolutePath: string) => boolean;
}

// Everything the validator checks for one subject. Pure: all input is passed in, all findings go to the report.
export function validateSubject(r: Report, input: SubjectInput): void {
  const { folder, pack, files, sims, exams } = input;
  const where = createLocator(files, folder);
  const bodies = groupTopicBodies(files, folder);

  // A rule that throws on unexpected content is reported as an error instead of stopping the whole run.
  const guard = (name: string, run: () => void): void => {
    try {
      run();
    } catch (error) {
      r.error(folder, 'internal', `rule "${name}" stopped on unexpected content (${(error as Error).message})`);
    }
  };

  guard('files', () => {
    checkPlaceholders(r, folder, files);
    checkExports(r, folder, files);
  });

  const coverage = computeCoverage(pack, topicId => hasBothBodies(bodies, topicId));
  const stats = computeStats(pack, coverage, sims.size);
  let bodyFiles = 0;
  bodies.forEach(entry => { bodyFiles += entry.en.length + entry.ru.length; });
  if (isEmptySubject(stats, bodyFiles)) {
    r.info(folder, 'stats', 'empty subject (no content yet), nothing to check');
    return;
  }
  r.info(folder, 'stats', statsLine(stats));

  const data = { subject: folder, pack, where, sims, exams };
  guard('ids', () => checkIds(r, data));
  guard('refs', () => checkRefs(r, data));
  guard('sources', () => checkSources(r, data));
  guard('questions', () => checkQuestions(r, data));
  guard('papers', () => checkPapers(r, data));
  guard('past papers', () => checkPastPapers(r, data));
  guard('assignments', () => checkAssignments(r, data));
  guard('formulas', () => checkFormulas(r, data));
  guard('texts', () => checkTexts(r, data));

  const mdx: MdxCtx = { subject: folder, pack, where, sims, ids: idSets(pack), fileExists: input.fileExists };
  guard('topic files', () => checkTopicFiles(r, mdx, bodies));
  pack.topics.forEach(topic => guard(`topic ${textOf(topic.id)}`, () => {
    const entry = bodies.get(textOf(topic.id));
    const docs: TopicDoc[] = [];
    LANGS.forEach(lang => {
      const file = entry ? entry[lang][0] : undefined;   // a second body is already reported by checkTopicFiles
      if (file) docs.push({ topicId: textOf(topic.id), lang, file, result: analyzeMdx(file.text || '') });
    });
    docs.forEach(doc => checkMdxDoc(r, mdx, doc));
    const en = docs.filter(doc => doc.lang === 'en')[0];
    const ru = docs.filter(doc => doc.lang === 'ru')[0];
    if (en && ru) checkParity(r, folder, en, ru);
    if (docs.length > 0) checkSimUsage(r, folder, topic, docs);
  }));

  // The authors' example subject (folder names starting with "_") uses invented sources by design.
  statsWarnings(pack, stats, folder.charAt(0) !== '_').forEach(message => r.warn(folder, 'stats', message));
}

// Checks across subject folders: the id in meta.ts is the folder name, and ids are unique.
export function checkSubjects(r: Report, entries: { folder: string; metaId: unknown }[]): void {
  entries.forEach(entry => {
    if (entry.metaId !== entry.folder) {
      r.error(entry.folder, 'ids', `meta.ts has id ${JSON.stringify(entry.metaId)} but the folder is named "${entry.folder}"; the id must equal the folder name`, { file: `content/${entry.folder}/meta.ts` });
    }
    if (KNOWN_SUBJECTS.indexOf(entry.folder) === -1) {
      r.warn(entry.folder, 'ids', `"${entry.folder}" is not one of the subject folders (${KNOWN_SUBJECTS.join(', ')}), so the portal does not list it`, { file: `content/${entry.folder}` });
    }
  });
  findDuplicates(entries.map(entry => String(entry.metaId))).forEach(id => {
    const folders = entries.filter(entry => String(entry.metaId) === id).map(entry => entry.folder);
    r.error('', 'ids', `subject id "${id}" is declared by more than one folder (${folders.join(', ')}); subject ids must be unique`);
  });
}
