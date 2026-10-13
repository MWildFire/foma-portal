import fs, { type Dirent } from 'node:fs';
import path from 'node:path';
import type { Lang } from './model.ts';

export interface SubjectFile {
  rel: string;     // path from the repository root with forward slashes, e.g. content/geo/terms/a.ts
  abs: string;
  text?: string;   // only read for text files
}

const TEXT_EXTENSIONS = ['.ts', '.tsx', '.mdx', '.md', '.json', '.svg', '.txt'];

// Navigation order of the portal (PLAN.md section 1); anything else, such as the _example folder, comes after.
const SUBJECT_ORDER = ['geo', 'math', 'econ', 'cs', 'eng', 'fr'];
export const KNOWN_SUBJECTS = SUBJECT_ORDER.concat(['_example']);

export function toPosix(file: string): string {
  return file.split(path.sep).join('/');
}

function byName(a: Dirent, b: Dirent): number {
  return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
}

// Every file below a directory (sorted, absolute), skipping node_modules and dot folders. A missing folder is empty.
function walkFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  const found: string[] = [];
  fs.readdirSync(dir, { withFileTypes: true })
    .sort(byName)
    .forEach(entry => {
      if (entry.name === 'node_modules' || entry.name.charAt(0) === '.') return;
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walkFiles(full).forEach(file => found.push(file));
      else if (entry.isFile()) found.push(full);
    });
  return found;
}

// Subject folders: the directories of content/. Plain files and node_modules are not subjects.
export function listSubjectDirs(root: string): string[] {
  const contentDir = path.join(root, 'content');
  if (!fs.existsSync(contentDir)) return [];
  const names = fs.readdirSync(contentDir, { withFileTypes: true })
    .filter(entry => entry.isDirectory() && entry.name !== 'node_modules' && entry.name.charAt(0) !== '.')
    .map(entry => entry.name);
  const rank = (name: string): number => {
    const position = SUBJECT_ORDER.indexOf(name);
    return position === -1 ? SUBJECT_ORDER.length : position;
  };
  return names.sort((a, b) => rank(a) - rank(b) || (a < b ? -1 : a > b ? 1 : 0));
}

export function readSubjectFiles(root: string, subject: string, withText: boolean): SubjectFile[] {
  return walkFiles(path.join(root, 'content', subject)).map(abs => {
    const file: SubjectFile = { rel: toPosix(path.relative(root, abs)), abs };
    if (withText && TEXT_EXTENSIONS.indexOf(path.extname(abs)) !== -1) file.text = fs.readFileSync(abs, 'utf8');
    return file;
  });
}

// What a file under content/<s>/ is, using the same patterns as the import.meta.glob calls in content/<s>/index.ts.
export type FileKind = 'syllabus' | 'topic-meta' | 'topic-mdx' | 'terms' | 'formulas' | 'questions' | 'cases' | 'papers' | 'other';

export function classifyFile(relInSubject: string): FileKind {
  const parts = relInSubject.split('/');
  const base = parts[parts.length - 1];
  const parent = parts.length > 1 ? parts[parts.length - 2] : '';
  if (base === 'syllabus.ts') return 'syllabus';
  if (base === 'papers.ts') return 'papers';
  if (parent === 'topics' && /\.meta\.ts$/.test(base)) return 'topic-meta';
  if (parent === 'topics' && /\.(en|ru)\.mdx$/.test(base)) return 'topic-mdx';
  if (base.slice(-3) === '.ts') {
    if (parent === 'terms') return 'terms';
    if (parent === 'formulas') return 'formulas';
    if (parent === 'questions') return 'questions';
    if (parent === 'cases') return 'cases';
  }
  return 'other';
}

export function fileKind(file: SubjectFile, subject: string): FileKind {
  const prefix = `content/${subject}/`;
  return classifyFile(file.rel.indexOf(prefix) === 0 ? file.rel.slice(prefix.length) : file.rel);
}

export interface TopicBodies { en: SubjectFile[]; ru: SubjectFile[] }

// The MDX bodies of a subject, grouped by topic id (the file name without .en.mdx / .ru.mdx).
export function groupTopicBodies(files: SubjectFile[], subject: string): Map<string, TopicBodies> {
  const bodies = new Map<string, TopicBodies>();
  files.forEach(file => {
    if (fileKind(file, subject) !== 'topic-mdx') return;
    const match = /([^/]+)\.(en|ru)\.mdx$/.exec(file.rel);
    if (!match) return;
    const entry = bodies.get(match[1]) || { en: [], ru: [] };
    entry[match[2] as Lang].push(file);
    bodies.set(match[1], entry);
  });
  return bodies;
}

export function hasBothBodies(bodies: Map<string, TopicBodies>, topicId: string): boolean {
  const entry = bodies.get(topicId);
  return !!entry && entry.en.length > 0 && entry.ru.length > 0;
}

// ---- simulations: src/sims/<subject>/<name>.tsx has the id <subject>.<name> ----

export interface SimFile {
  id: string;
  rel: string;
  hasDefaultExport: boolean;
}

export function stripComments(code: string): string {
  return code.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/[^\n]*/g, '');
}

// True for `export default ...`, `export { X as default }` and `export { default } from '...'`; comments are ignored.
export function hasDefaultExport(code: string): boolean {
  const body = stripComments(code);
  return /\bexport\s+default\b/.test(body)
    || /\bexport\s*\{[^}]*\bas\s+default\b[^}]*\}/.test(body)
    || /\bexport\s*\{\s*default\b[^}]*\}\s*from\b/.test(body);
}

export function readSims(root: string, subject: string): Map<string, SimFile> {
  const sims = new Map<string, SimFile>();
  const dir = path.join(root, 'src', 'sims', subject);
  if (!fs.existsSync(dir)) return sims;
  fs.readdirSync(dir, { withFileTypes: true })
    .sort(byName)
    .forEach(entry => {
      if (!entry.isFile() || path.extname(entry.name) !== '.tsx') return;
      const id = `${subject}.${entry.name.slice(0, -'.tsx'.length)}`;
      const abs = path.join(dir, entry.name);
      sims.set(id, { id, rel: toPosix(path.relative(root, abs)), hasDefaultExport: hasDefaultExport(fs.readFileSync(abs, 'utf8')) });
    });
  return sims;
}

// Why a sim id cannot be used by this subject (rule 2), or null when it can.
export function simProblem(subject: string, id: string, sims: Map<string, SimFile>): string | null {
  const name = id.slice(subject.length + 1);
  if (id.indexOf(`${subject}.`) !== 0 || name === '') return `sim "${id}" is not a ${subject} sim (ids look like "${subject}.<name>")`;
  const sim = sims.get(id);
  if (!sim) return `sim "${id}" has no file src/sims/${subject}/${name}.tsx`;
  if (!sim.hasDefaultExport) return `sim "${id}": ${sim.rel} has no "export default" (a sim must default-export its component)`;
  return null;
}
