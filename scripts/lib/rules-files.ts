import { fileKind, hasDefaultExport, stripComments, type FileKind, type SubjectFile } from './files.ts';
import type { Report } from './report.ts';
import { findPlaceholders } from './text.ts';

// Rules that read the raw files of content/<s>/.

// Rule 5: no TODO, TBD, lorem or ??? anywhere in the subject's files (TypeScript, MDX, SVG, notes).
export function checkPlaceholders(r: Report, subject: string, files: SubjectFile[]): void {
  files.forEach(file => {
    if (file.text === undefined) return;
    findPlaceholders(file.text).forEach(hit => {
      r.error(subject, 'placeholder', `placeholder text "${hit.marker}"; replace it with real content or remove it`, { file: file.rel, line: hit.line });
    });
  });
}

// The name each file kind must export, because content/<s>/index.ts reads exactly that (see its import.meta.glob calls).
const EXPORT_NAME: Partial<Record<FileKind, string>> = {
  syllabus: 'syllabus',
  terms: 'terms',
  formulas: 'formulas',
  questions: 'questions',
  cases: 'cases',
  papers: 'papers',
  'past-papers': 'pastPapers',
  assignments: 'assignments',
};

export function hasNamedExport(code: string, name: string): boolean {
  const body = stripComments(code);
  return new RegExp(`\\bexport\\s+(?:const|let|var|function|async\\s+function)\\s+${name}\\b`).test(body)
    || new RegExp(`\\bexport\\s*\\{[^}]*\\b${name}\\b[^}]*\\}`).test(body);
}

// TypeScript cannot see through import.meta.glob, so a file with the wrong export name type-checks and then silently
// contributes `undefined` to the subject. Catch it here, with the file name.
export function checkExports(r: Report, subject: string, files: SubjectFile[]): void {
  files.forEach(file => {
    if (file.text === undefined) return;
    const kind = fileKind(file, subject);
    if (kind === 'topic-meta' && !hasDefaultExport(file.text)) {
      r.error(subject, 'load', 'topic meta file has no "export default"; index.ts reads the default export as the TopicMeta', { file: file.rel });
      return;
    }
    const name = EXPORT_NAME[kind];
    if (name && !hasNamedExport(file.text, name)) {
      r.error(subject, 'load', `file has no "export const ${name}"; index.ts reads the export named "${name}" from every file of this kind`, { file: file.rel });
    }
  });
}
