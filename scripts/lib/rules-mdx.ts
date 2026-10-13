import path from 'node:path';
import type { SimFile, SubjectFile, TopicBodies } from './files.ts';
import { simProblem } from './files.ts';
import type { Locator } from './locator.ts';
import { texError } from './math.ts';
import {
  CALLOUT_KINDS,
  REQUIRED_PROPS,
  componentSequence,
  firstSequenceDifference,
  headingProblems,
  tagLabel,
  type MdxComponent,
  type MdxResult,
  type SequenceTag,
} from './mdx.ts';
import { LANGS, hasOwn, list, textOf, type Lang, type Pack, type TopicMeta } from './model.ts';
import type { Pos, Report } from './report.ts';
import { checkMathText, type IdSets } from './rules-data.ts';
import { excerpt, looksUntranslated, positionOf, scanCyrillic } from './text.ts';

// Rules for the topic bodies (<id>.en.mdx and <id>.ru.mdx).

export interface TopicDoc {
  topicId: string;
  lang: Lang;
  file: SubjectFile;   // with text
  result: MdxResult;
}

export interface MdxCtx {
  subject: string;
  pack: Pack;
  where: Locator;
  sims: Map<string, SimFile>;
  ids: IdSets;
  fileExists: (absolutePath: string) => boolean;
}

// ---- rule 3, first part: both bodies exist ----

export function checkTopicFiles(r: Report, ctx: MdxCtx, bodies: Map<string, TopicBodies>): void {
  const { subject, pack, where } = ctx;
  const topicIds = new Set(pack.topics.map(topic => textOf(topic.id)));

  const checked = new Set<string>();
  pack.topics.forEach(topic => {
    const id = textOf(topic.id);
    if (checked.has(id)) return;   // a duplicate id is reported by the ids rule
    checked.add(id);
    const start = where.find('topic', id);
    where.all('topic', id).forEach(spot => {
      const base = path.posix.basename(spot.file || '');
      if (base !== '' && base !== `${id}.meta.ts`) {
        r.error(subject, 'ids', `topic id "${id}" is defined in ${base}; a topic file is named after its id (${id}.meta.ts)`, spot);
      }
    });
    const entry = bodies.get(id);
    LANGS.forEach(lang => {
      const found = entry ? entry[lang] : [];
      if (found.length === 0) {
        const dir = start && start.file ? path.posix.dirname(start.file) : `content/${subject}/**/topics`;
        r.error(subject, 'mdx-files', `topic "${id}" has no ${lang.toUpperCase()} body; create ${dir}/${id}.${lang}.mdx (every topic needs both .en.mdx and .ru.mdx)`, start);
      } else if (found.length > 1) {
        r.error(subject, 'mdx-files', `topic "${id}" has ${found.length} ${lang.toUpperCase()} bodies (${found.map(file => file.rel).join(', ')}); keep exactly one`, { file: found[1].rel });
      }
    });
  });

  bodies.forEach((entry, id) => {
    if (topicIds.has(id)) return;
    LANGS.forEach(lang => entry[lang].forEach(file => {
      r.warn(subject, 'mdx-files', `no topic has the id "${id}", so this body is never shown; create ${id}.meta.ts or rename the file`, { file: file.rel });
    }));
  });
}

// ---- one body: syntax, structure, references, formulas, language ----

function checkComponent(r: Report, ctx: MdxCtx, doc: TopicDoc, component: MdxComponent): void {
  const { subject, ids } = ctx;
  const at: Pos = { file: doc.file.rel, line: component.line };
  const required = hasOwn(REQUIRED_PROPS, component.name) ? REQUIRED_PROPS[component.name] : undefined;
  if (!required) {
    if (/^[A-Z]/.test(component.name) || component.name.indexOf('.') !== -1) {
      const known = Object.keys(REQUIRED_PROPS).map(name => `<${name}>`).join(', ');
      r.error(subject, 'mdx-structure', `unknown component <${component.name}>; topic MDX can use ${known}`, at);
    }
    return;
  }
  const props = component.props;
  const missing = required.filter(name => component.invalid.indexOf(name) === -1 && (props[name] === undefined || props[name].trim() === ''));
  if (missing.length > 0) {
    r.error(subject, 'mdx-structure', `<${component.name}> needs ${missing.map(name => `${name}="..."`).join(' and ')}`, at);
    return;
  }
  if (required.some(name => component.invalid.indexOf(name) !== -1)) return;   // already reported as a non-string prop
  const fail = (message: string): void => r.error(subject, 'refs', message, at);
  const id = props.id;
  switch (component.name) {
    case 'Term':
      if (!ids.terms.has(id)) fail(`<Term id="${id}"> refers to a term that does not exist in ${subject}`);
      break;
    case 'Formula':
      if (!ids.formulas.has(id)) fail(`<Formula id="${id}"> refers to a formula that does not exist in ${subject}`);
      break;
    case 'Question':
      if (!ids.questions.has(id)) fail(`<Question id="${id}"> refers to a question that does not exist in ${subject}`);
      break;
    case 'Case':
      if (!ids.cases.has(id)) fail(`<Case id="${id}"> refers to a case that does not exist in ${subject}`);
      break;
    case 'CaseMap':
      props.ids.split(',').forEach(raw => {
        const caseId = raw.trim();
        if (caseId === '') fail(`<CaseMap ids="${props.ids}"> has an empty id; check the commas`);
        else if (!ids.cases.has(caseId)) fail(`<CaseMap ids="${props.ids}">: "${caseId}" is not a case of ${subject}`);
      });
      break;
    case 'Sim': {
      const problem = simProblem(subject, id, ctx.sims);
      if (problem) fail(`<Sim id="${id}">: ${problem}`);
      break;
    }
    case 'Figure': {
      const src = props.src;
      if (/^[a-z][a-z0-9+.-]*:/i.test(src) || src.charAt(0) === '/') {
        fail(`<Figure src="${src}"> must be a relative path to a file in the subject folder, for example ./assets/diagram.svg`);
      } else if (!ctx.fileExists(path.resolve(path.dirname(doc.file.abs), src))) {
        fail(`<Figure src="${src}"> points to a file that does not exist (paths are relative to ${path.posix.dirname(doc.file.rel)}/)`);
      }
      break;
    }
    case 'Callout':
      if (CALLOUT_KINDS.indexOf(props.kind) === -1) {
        r.error(subject, 'mdx-structure', `<Callout kind="${props.kind}"> is not a callout kind; use one of ${CALLOUT_KINDS.join(', ')}`, at);
      }
      break;
    default:
      break;
  }
}

export function checkMdxDoc(r: Report, ctx: MdxCtx, doc: TopicDoc): void {
  const { subject, where } = ctx;
  const at = (line?: number): Pos => ({ file: doc.file.rel, line });
  const text = doc.file.text || '';

  // Rule 4 for the English body: no Cyrillic anywhere in the file (also when the file does not parse).
  if (doc.lang === 'en') {
    const cyrillic = scanCyrillic(text);
    if (cyrillic.count > 0) {
      r.error(subject, 'language', `EN body contains ${cyrillic.count} Cyrillic characters (first: "${excerpt(text, cyrillic.index)}"); the .en.mdx file must be English only`, at(positionOf(text, cyrillic.index).line));
    }
  }

  if (!doc.result.ok) {
    const error = doc.result.error;
    const column = error.column ? `, column ${error.column}` : '';
    r.error(subject, 'mdx-syntax', `MDX does not parse${column}: ${error.reason}. ("<" and "{" are reserved for components and math: put x < 5 inside $...$ or write it in words)`, at(error.line));
    return;
  }
  const analysis = doc.result.analysis;

  headingProblems(analysis.headings, doc.lang).forEach(problem => r.error(subject, 'mdx-structure', problem.message, at(problem.line)));
  analysis.problems.forEach(problem => r.error(subject, 'mdx-structure', problem.message, at(problem.line)));
  analysis.components.forEach(component => checkComponent(r, ctx, doc, component));

  // Rule 7 for the formulas of the body.
  analysis.math.forEach(math => {
    const problem = texError(math.tex, math.display);
    if (!problem) return;
    const extraLines = problem.position === undefined ? 0 : math.tex.slice(0, problem.position).split('\n').length - 1;
    r.error(subject, 'katex', `TeX "${excerpt(math.tex, 0, 40)}" does not compile in KaTeX: ${problem.message}`, at(math.line + extraLines));
  });
  analysis.propTexts.forEach(prop => checkMathText(r, subject, `<${prop.component}> ${prop.prop}`, prop.value, at(prop.line), where));

  // Rule 4 for the Russian body: every section that has words must have Russian words. A whole-file check would pass
  // after one translated sentence, and a per-paragraph check would reject French or English quotations.
  if (doc.lang === 'ru') {
    analysis.sections.forEach(section => {
      if (looksUntranslated(section.text)) {
        r.error(subject, 'language', `RU section "## ${section.title}" has no Cyrillic text; it looks untranslated`, at(section.line));
      }
    });
  }
}

// ---- rule 3, second part: the same component ids in EN and RU ----

export function checkParity(r: Report, subject: string, en: TopicDoc, ru: TopicDoc): void {
  if (!en.result.ok || !ru.result.ok) return;
  const enTags = componentSequence(en.result.analysis.components);
  const ruTags = componentSequence(ru.result.analysis.components);
  const difference = firstSequenceDifference(enTags, ruTags);
  if (!difference) return;
  const describe = (tag?: SequenceTag): string => (tag ? `${tagLabel(tag)} (line ${tag.line})` : 'no tag');
  const lastRu = ruTags.length > 0 ? ruTags[ruTags.length - 1].line : 1;
  r.error(
    subject,
    'mdx-parity',
    `EN and RU use different components at tag ${difference.index + 1} of ${enTags.length} (EN) / ${ruTags.length} (RU): ${path.posix.basename(en.file.rel)} has ${describe(difference.en)}, this file has ${describe(difference.ru)}; both bodies need the same <Name id|ids|kind> tags in the same order`,
    { file: ru.file.rel, line: difference.ru ? difference.ru.line : lastRu },
  );
}

// ---- rule 12 (warning): meta.sims and <Sim> in the body agree ----

export function checkSimUsage(r: Report, subject: string, topic: TopicMeta, docs: TopicDoc[]): void {
  const used = new Map<string, Pos>();
  docs.forEach(doc => {
    if (!doc.result.ok) return;
    doc.result.analysis.components.forEach(component => {
      if (component.name === 'Sim' && component.props.id && !used.has(component.props.id)) {
        used.set(component.props.id, { file: doc.file.rel, line: component.line });
      }
    });
  });
  if (docs.every(doc => !doc.result.ok)) return;
  const listed = list(topic.sims);
  listed.forEach(sim => {
    if (!used.has(sim)) r.warn(subject, 'sims', `topic "${topic.id}" lists sim "${sim}" in meta.sims but its MDX never uses <Sim id="${sim}"/>`);
  });
  used.forEach((pos, sim) => {
    if (listed.indexOf(sim) === -1) r.warn(subject, 'sims', `<Sim id="${sim}"/> is used in the MDX of topic "${topic.id}" but meta.sims does not list it`, pos);
  });
}
