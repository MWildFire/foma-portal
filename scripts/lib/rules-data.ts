import { matchExam, type ExamPaper } from './duration.ts';
import { simProblem, type SimFile } from './files.ts';
import { describePositions, type ItemKind, type Locator } from './locator.ts';
import { scanMath, texError } from './math.ts';
import { isRecord, list, textOf, type Pack, type SourceRef } from './model.ts';
import type { Pos, Report } from './report.ts';
import { excerpt, looksUntranslated, quoted, scanCyrillic } from './text.ts';

// Rules that read the loaded content (the SubjectPack of content/<s>/index.ts).

export interface DataCtx {
  subject: string;                 // folder name under content/
  pack: Pack;
  where: Locator;
  sims: Map<string, SimFile>;      // src/sims/<subject>/*.tsx
  exams: ExamPaper[] | null;       // null when data/exams.json could not be read
}

export function findDuplicates(values: string[]): string[] {
  const counts = new Map<string, number>();
  const order: string[] = [];
  values.forEach(value => {
    const seen = counts.get(value) || 0;
    if (seen === 0) order.push(value);
    counts.set(value, seen + 1);
  });
  return order.filter(value => (counts.get(value) || 0) > 1);
}

export interface IdSets {
  codes: Set<string>;
  topics: Set<string>;
  terms: Set<string>;
  formulas: Set<string>;
  questions: Set<string>;
  cases: Set<string>;
}

export function idSets(pack: Pack): IdSets {
  const ids = (items: { id: string }[]): Set<string> => new Set(items.map(item => textOf(item.id)));
  return {
    codes: new Set(pack.syllabus.map(item => textOf(item.code))),
    topics: ids(pack.topics),
    terms: ids(pack.terms),
    formulas: ids(pack.formulas),
    questions: ids(pack.questions),
    cases: ids(pack.cases),
  };
}

// ---- rule 1: unique ids ----

export function checkIds(r: Report, ctx: DataCtx): void {
  const { subject, pack, where } = ctx;
  const groups: { noun: string; kind: ItemKind; ids: string[] }[] = [
    { noun: 'syllabus code', kind: 'syllabus', ids: pack.syllabus.map(item => textOf(item.code)) },
    { noun: 'topic', kind: 'topic', ids: pack.topics.map(item => textOf(item.id)) },
    { noun: 'term', kind: 'term', ids: pack.terms.map(item => textOf(item.id)) },
    { noun: 'formula', kind: 'formula', ids: pack.formulas.map(item => textOf(item.id)) },
    { noun: 'question', kind: 'question', ids: pack.questions.map(item => textOf(item.id)) },
    { noun: 'case', kind: 'case', ids: pack.cases.map(item => textOf(item.id)) },
    {
      noun: 'timed set',
      kind: 'timedSet',
      ids: pack.papers.reduce((all: string[], guide) => all.concat(list(guide.timedSets).map(set => textOf(set.id))), []),
    },
  ];
  groups.forEach(group => {
    group.ids.forEach((id, index) => {
      if (id === '') r.error(subject, 'ids', `${group.noun} number ${index + 1} has no id`);
    });
    findDuplicates(group.ids.filter(id => id !== '')).forEach(id => {
      const spots = where.all(group.kind, id);
      const others = spots.length > 1 ? ` (defined at ${describePositions(spots)})` : '';
      r.error(subject, 'ids', `duplicate ${group.noun} id "${id}"${others}; ids must be unique within a subject`, spots[1] || spots[0]);
    });
  });

  // A sim id is the file name, so duplicates can only differ in letter case (possible on Linux, not on macOS).
  const byLowerCase = new Map<string, string[]>();
  ctx.sims.forEach((_sim, id) => byLowerCase.set(id.toLowerCase(), (byLowerCase.get(id.toLowerCase()) || []).concat([id])));
  byLowerCase.forEach(ids => {
    if (ids.length > 1) {
      const second = ctx.sims.get(ids[1]);
      r.error(subject, 'ids', `sim ids differ only in letter case: ${ids.join(', ')}`, second ? { file: second.rel } : undefined);
    }
  });
  pack.topics.forEach(topic => {
    findDuplicates(list(topic.sims)).forEach(sim => {
      r.error(subject, 'ids', `topic "${topic.id}" lists sim "${sim}" more than once`, where.within(where.find('topic', topic.id), quoted(sim)));
    });
  });
}

// ---- rule 2: references resolve (meta side; MDX references are in rules-mdx.ts) ----

export function checkRefs(r: Report, ctx: DataCtx): void {
  const { subject, pack, where, sims } = ctx;
  const known = idSets(pack);
  const hasSyllabus = known.codes.size > 0;   // without a syllabus.ts there is no code to resolve against

  const fail = (kind: ItemKind, id: string, noun: string, message: string, value?: string): void => {
    const start = where.find(kind, id);
    r.error(subject, 'refs', `${noun} "${id}": ${message}`, value === undefined ? start : where.within(start, quoted(value)));
  };
  const missingFrom = (target: string): string => `but ${subject} has no ${target} with that id`;

  pack.topics.forEach(topic => {
    const id = textOf(topic.id);
    if (topic.subject !== subject) fail('topic', id, 'topic', `subject is "${topic.subject}" but the file is in content/${subject}`);
    if (hasSyllabus && !known.codes.has(textOf(topic.code))) {
      fail('topic', id, 'topic', `code "${topic.code}" is not a code in syllabus.ts`, textOf(topic.code));
    }
    const lists: { field: string; values: string[]; ids: Set<string>; target: string }[] = [
      { field: 'termIds', values: list(topic.termIds), ids: known.terms, target: 'term' },
      { field: 'formulaIds', values: list(topic.formulaIds), ids: known.formulas, target: 'formula' },
      { field: 'questionIds', values: list(topic.questionIds), ids: known.questions, target: 'question' },
      { field: 'caseIds', values: list(topic.caseIds), ids: known.cases, target: 'case' },
    ];
    lists.forEach(entry => entry.values.forEach(value => {
      if (!entry.ids.has(value)) fail('topic', id, 'topic', `${entry.field} lists "${value}", ${missingFrom(entry.target)}`, value);
    }));
    list(topic.sims).forEach(sim => {
      const problem = simProblem(subject, sim, sims);
      if (problem) fail('topic', id, 'topic', `sims: ${problem}`, sim);
    });
  });

  pack.terms.forEach(term => {
    const id = textOf(term.id);
    if (hasSyllabus && !known.codes.has(textOf(term.syllabus))) {
      fail('term', id, 'term', `syllabus "${term.syllabus}" is not a code in syllabus.ts`, textOf(term.syllabus));
    }
    if (term.sim !== undefined) {
      const problem = simProblem(subject, term.sim, sims);
      if (problem) fail('term', id, 'term', `sim: ${problem}`, term.sim);
    }
  });

  pack.formulas.forEach(formula => {
    if (hasSyllabus && !known.codes.has(textOf(formula.syllabus))) {
      fail('formula', textOf(formula.id), 'formula', `syllabus "${formula.syllabus}" is not a code in syllabus.ts`, textOf(formula.syllabus));
    }
  });

  pack.questions.forEach(question => {
    const id = textOf(question.id);
    if (question.subject !== subject) fail('question', id, 'question', `subject is "${question.subject}" but the file is in content/${subject}`);
    list(question.topicIds).forEach(topicId => {
      if (!known.topics.has(topicId)) fail('question', id, 'question', `topicIds lists "${topicId}", ${missingFrom('topic')}`, topicId);
    });
  });

  pack.cases.forEach(item => {
    list(item.usedFor).forEach(topicId => {
      if (!known.topics.has(topicId)) fail('case', textOf(item.id), 'case', `usedFor lists "${topicId}", ${missingFrom('topic')}`, topicId);
    });
  });

  pack.papers.forEach(guide => {
    const name = `${textOf(guide.paper)}${guide.part ? ` (${guide.part})` : ''}`;
    if (guide.subject !== subject) {
      r.error(subject, 'refs', `paper guide ${name}: subject is "${guide.subject}" but the file is in content/${subject}`, where.find('paper', textOf(guide.paper)));
    }
    list(guide.timedSets).forEach(set => list(set.questionIds).forEach(questionId => {
      if (!known.questions.has(questionId)) {
        const start = where.within(where.find('timedSet', textOf(set.id)), quoted(questionId));
        r.error(subject, 'refs', `paper guide ${name}, timed set "${set.id}": questionIds lists "${questionId}", ${missingFrom('question')}`, start);
      }
    }));
  });
}

// ---- rule 6: a textbook source needs a locator ----

export function checkSources(r: Report, ctx: DataCtx): void {
  const { subject, pack, where } = ctx;
  const check = (kind: ItemKind, id: string, noun: string, ref: SourceRef | undefined): void => {
    if (!ref || ref.kind !== 'textbook' || textOf(ref.locator).trim() !== '') return;
    const start = where.within(where.find(kind, id), quoted('textbook'));
    r.error(subject, 'source', `${noun} "${id}": textbook source "${textOf(ref.title)}" has no locator; add the chapter and page, for example "ch. 2.8, p. 113"`, start);
  };
  pack.terms.forEach(term => check('term', textOf(term.id), 'term', term.src));
  pack.topics.forEach(topic => list(topic.sources).forEach(ref => check('topic', textOf(topic.id), 'topic', ref)));
  pack.cases.forEach(item => list(item.src).forEach(ref => check('case', textOf(item.id), 'case', ref)));
}

// ---- rule 8: questions ----

export function checkQuestions(r: Report, ctx: DataCtx): void {
  const { subject, pack, where } = ctx;
  pack.questions.forEach(question => {
    const id = textOf(question.id);
    const start = where.find('question', id);
    const fail = (message: string, needle: string): void => {
      r.error(subject, 'question', `question "${id}": ${message}`, where.within(start, [needle]));
    };
    if (!Number.isInteger(question.marks) || (question.marks as number) <= 0) {
      fail(`marks must be a whole number greater than 0 (got ${JSON.stringify(question.marks)})`, 'marks');
    }
    const markscheme = question.markscheme;
    (['en', 'ru'] as const).forEach(lang => {
      if (textOf(markscheme ? markscheme[lang] : undefined).trim() === '') fail(`markscheme.${lang} is empty; every question needs a markscheme in both languages`, 'markscheme');
    });
    if (question.minutes !== undefined && !(typeof question.minutes === 'number' && question.minutes > 0)) {
      fail(`minutes must be greater than 0 when present (got ${JSON.stringify(question.minutes)})`, 'minutes');
    }
  });
}

// ---- rules 9 and 10: paper guides ----

// Rule 10 is checked per timed set. A timed set is one sitting (the full paper, half of it, a single option), and a
// guide offers several of them as alternatives, so their minutes are not added up: each one must be positive and may
// not be longer than the paper itself.
export function checkPapers(r: Report, ctx: DataCtx): void {
  const { subject, pack, where, exams } = ctx;
  pack.papers.forEach(guide => {
    const paper = textOf(guide.paper);
    const name = `${paper}${guide.part ? ` (${guide.part})` : ''}`;
    const start = where.find('paper', paper);
    const minutes = guide.minutes;
    if (typeof minutes !== 'number' || !(minutes > 0)) {
      r.error(subject, 'duration', `paper guide ${name}: minutes must be greater than 0 (got ${JSON.stringify(minutes)})`, where.within(start, ['minutes']));
    } else if (exams) {
      const match = matchExam(exams, { subject, paper, part: guide.part });
      if (match.kind === 'single' && match.exam.minutes !== minutes) {
        r.error(subject, 'duration', `paper guide ${name} has ${minutes} minutes but data/exams.json (${match.exam.id}) says ${match.exam.minutes}`, where.within(start, ['minutes']));
      } else if (match.kind === 'parts' && match.total !== minutes) {
        const parts = match.exams.map(exam => `${exam.part || exam.id} ${exam.minutes}`).join(' + ');
        r.error(subject, 'duration', `paper guide ${name} has ${minutes} minutes, but data/exams.json sits ${paper} in parts (${parts} = ${match.total}); set "part" to one of them, or use ${match.total}`, where.within(start, ['minutes']));
      } else if (match.kind === 'none') {
        const known = match.known.length > 0 ? ` (listed parts: ${match.known.join(', ')})` : '';
        r.warn(subject, 'duration', `paper guide ${name} is not listed in data/exams.json${known}, so its duration was not checked`, start);
      }
    }
    list(guide.timedSets).forEach(set => {
      const setStart = where.find('timedSet', textOf(set.id)) || start;
      if (typeof set.minutes !== 'number' || !(set.minutes > 0)) {
        r.error(subject, 'timed-set', `paper guide ${name}, timed set "${set.id}": minutes must be greater than 0 (got ${JSON.stringify(set.minutes)})`, setStart);
      } else if (typeof minutes === 'number' && set.minutes > minutes) {
        r.error(subject, 'timed-set', `paper guide ${name}, timed set "${set.id}" lasts ${set.minutes} minutes, longer than the ${minutes}-minute paper`, setStart);
      }
    });
  });
}

// ---- rules 4 and 7 for the L objects ({ en, ru }) of the content ----

export interface LField { path: string; en: unknown; ru: unknown }

// Every { en, ru } object inside a value, with its path (for example "outcomes[1]" or "timedSets[0].title").
export function collectLTexts(value: unknown, path: string, out: LField[], depth: number): void {
  if (depth > 10) return;
  if (Array.isArray(value)) {
    value.forEach((entry, index) => collectLTexts(entry, `${path}[${index}]`, out, depth + 1));
  } else if (isRecord(value)) {
    if ('en' in value || 'ru' in value) {
      out.push({ path, en: value.en, ru: value.ru });
    } else {
      Object.keys(value).forEach(key => collectLTexts(value[key], path === '' ? key : `${path}.${key}`, out, depth + 1));
    }
  }
}

// Rule 7 for one string: the formulas in $...$ and $$...$$ must compile, and every `$` must be part of a pair.
export function checkMathText(r: Report, subject: string, label: string, text: string, start: Pos | undefined, where: Locator): void {
  const scan = scanMath(text);
  scan.unbalanced.forEach(index => {
    r.error(subject, 'katex', `${label}: "$" near "${excerpt(text, index)}" has no closing "$"; close the formula, or write a literal dollar sign as \\\\$ (two backslashes inside a TypeScript string)`, start);
  });
  scan.segments.forEach(segment => {
    const problem = texError(segment.tex, segment.display);
    if (problem) {
      r.error(subject, 'katex', `${label}: TeX "${excerpt(segment.tex, 0, 40)}" does not compile in KaTeX: ${problem.message}`, where.within(start, [segment.tex.trim().slice(0, 20)]));
    }
  });
}

// Formula.tex is shown as a display formula (a formula card), so it is compiled in display mode, where environments
// such as align are allowed. Change `true` below to `false` if the site ever renders formula cards inline.
export function checkFormulas(r: Report, ctx: DataCtx): void {
  const { subject, pack, where } = ctx;
  pack.formulas.forEach(formula => {
    const id = textOf(formula.id);
    const start = where.find('formula', id);
    const tex = textOf(formula.tex);
    if (tex.trim() === '') {
      r.error(subject, 'katex', `formula "${id}": tex is empty`, where.within(start, ['tex']));
      return;
    }
    const problem = texError(tex, true);
    if (problem) r.error(subject, 'katex', `formula "${id}": tex does not compile in KaTeX: ${problem.message}`, where.within(start, ['tex']));
  });
}

type Item = Record<string, unknown>;
const records = (items: object[]): Item[] => items as unknown as Item[];

// A question's stimulus can be a source text (a poem, a French article) that both language views show in its original
// language, so a stimulus whose ru is identical to its en is not "untranslated". Every other field has to be translated.
const VERBATIM_FIELDS = ['stimulus'];

// Rule 4 (English fields have no Cyrillic, Russian fields have Cyrillic) and rule 7 (formulas in text compile)
// for every { en, ru } object of the subject.
export function checkTexts(r: Report, ctx: DataCtx): void {
  const { subject, pack, where } = ctx;
  const owners: { noun: string; kind: ItemKind | null; items: Item[]; idOf: (item: Item) => string }[] = [
    { noun: 'subject meta', kind: null, items: records([pack.meta]), idOf: () => subject },
    { noun: 'syllabus code', kind: 'syllabus', items: records(pack.syllabus), idOf: item => textOf(item.code) },
    { noun: 'topic', kind: 'topic', items: records(pack.topics), idOf: item => textOf(item.id) },
    { noun: 'term', kind: 'term', items: records(pack.terms), idOf: item => textOf(item.id) },
    { noun: 'formula', kind: 'formula', items: records(pack.formulas), idOf: item => textOf(item.id) },
    { noun: 'question', kind: 'question', items: records(pack.questions), idOf: item => textOf(item.id) },
    { noun: 'case', kind: 'case', items: records(pack.cases), idOf: item => textOf(item.id) },
    { noun: 'paper guide', kind: 'paper', items: records(pack.papers), idOf: item => textOf(item.paper) },
  ];
  owners.forEach(owner => owner.items.forEach(item => {
    const id = owner.idOf(item);
    const start: Pos | undefined = owner.kind ? where.find(owner.kind, id) : { file: `content/${subject}/meta.ts` };
    const fields: LField[] = [];
    collectLTexts(item, '', fields, 0);
    fields.forEach(field => {
      const label = `${owner.noun} "${id}" ${field.path}`;
      const { en, ru } = field;
      if (typeof en !== 'string' || typeof ru !== 'string') {
        r.error(subject, 'language', `${label}: needs both "en" and "ru" as strings`, start);
        return;
      }
      const cyrillic = scanCyrillic(en);
      if (cyrillic.count > 0) {
        r.error(subject, 'language', `${label}.en contains Cyrillic text ("${excerpt(en, cyrillic.index)}"); the en text must be English`, where.within(start, [en.slice(cyrillic.index, cyrillic.index + 12)]));
      }
      if (looksUntranslated(ru, en) && !(VERBATIM_FIELDS.indexOf(field.path) !== -1 && ru === en)) {
        r.error(subject, 'language', `${label}.ru has no Cyrillic letters ("${excerpt(ru, 0, 40)}"); it looks untranslated`, where.within(start, [ru.slice(0, 24)]));
      }
      checkMathText(r, subject, `${label}.en`, en, start, where);
      checkMathText(r, subject, `${label}.ru`, ru, start, where);
    });
  }));
}
