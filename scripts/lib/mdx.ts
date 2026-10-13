import { createProcessor } from '@mdx-js/mdx';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import type { Lang } from './model.ts';
import { excerpt } from './text.ts';

// Topic MDX is parsed with the same syntax plugins as the mdx() call in vite.config.ts (frontmatter, GFM tables,
// math), so a file the validator accepts parses on the site as well. Math is rendered separately by rule 7.
const processor = createProcessor({
  remarkPlugins: [remarkFrontmatter, remarkGfm, remarkMath],
  providerImportSource: '@mdx-js/react',
});

// Section titles of a topic, in order (PLAN.md section 2).
export const EXPECTED_HEADINGS: Record<Lang, string[]> = {
  en: ['Big idea', 'Explanation', 'Worked example', 'Visual', 'How it is examined', 'Common mistakes', 'Check yourself', 'Summary'],
  ru: ['Суть', 'Объяснение', 'Разбор примера', 'Визуально', 'Как это спрашивают', 'Типичные ошибки', 'Проверь себя', 'Коротко'],
};

// The MDX components of PLAN.md section 2 and the props each one needs (all props are strings).
export const REQUIRED_PROPS: Record<string, string[]> = {
  Sim: ['id'],
  Term: ['id'],
  Formula: ['id'],
  Case: ['id'],
  Question: ['id'],
  CaseMap: ['ids'],
  Callout: ['kind'],
  Reveal: ['title'],
  Steps: [],
  Step: [],
  Figure: ['src'],
};
export const CALLOUT_KINDS = ['exam', 'mistake', 'tip', 'gdc', 'define'];

// String props that carry words for the reader (translated in the RU file, checked for math).
const TEXT_PROPS = ['title', 'caption'];

export interface MdxHeading { text: string; line: number }
export interface MdxComponent { name: string; line: number; props: Record<string, string>; invalid: string[] }   // invalid: props that are not plain strings
export interface MdxMath { tex: string; display: boolean; line: number }
export interface MdxProblem { line: number; message: string }
export interface MdxSection { title: string | null; line: number; text: string }   // text: words outside math and code
export interface MdxPropText { component: string; prop: string; value: string; line: number }

export interface MdxAnalysis {
  headings: MdxHeading[];        // top-level `##` headings in order
  components: MdxComponent[];    // every JSX element in document order
  math: MdxMath[];               // $...$ and $$...$$ found by the parser
  problems: MdxProblem[];        // "<" or "{" in plain text, expressions, imports, props that are not strings
  sections: MdxSection[];        // one per `##` heading
  propTexts: MdxPropText[];
}

export interface MdxSyntaxError { reason: string; line?: number; column?: number }
export type MdxResult = { ok: true; analysis: MdxAnalysis } | { ok: false; error: MdxSyntaxError };

interface MdAttribute { type: string; name?: string; value?: unknown }
interface MdNode {
  type: string;
  value?: string;
  depth?: number;
  name?: string | null;
  attributes?: MdAttribute[];
  children?: MdNode[];
  position?: { start: { line: number } };
}

function lineOf(node: MdNode): number {
  return node.position ? node.position.start.line : 0;
}

function plainText(node: MdNode): string {
  if (node.type === 'text' || node.type === 'inlineCode') return node.value || '';
  return (node.children || []).map(plainText).join('');
}

function describeSyntaxError(error: unknown): MdxSyntaxError {
  const found = error as { reason?: unknown; message?: unknown; line?: unknown; column?: unknown };
  return {
    reason: typeof found.reason === 'string' ? found.reason : String(found.message),
    line: typeof found.line === 'number' ? found.line : undefined,
    column: typeof found.column === 'number' ? found.column : undefined,
  };
}

function walkElement(node: MdNode, analysis: MdxAnalysis, section: MdxSection): void {
  const name = node.name || '';
  const line = lineOf(node);
  const props: Record<string, string> = {};
  const invalid: string[] = [];
  (node.attributes || []).forEach(attribute => {
    if (attribute.type !== 'mdxJsxAttribute' || attribute.name === undefined) {
      analysis.problems.push({ line, message: `<${name}> uses a {...spread}; props must be plain strings like id="..."` });
    } else if (typeof attribute.value === 'string') {
      props[attribute.name] = attribute.value;
    } else {
      const shape = attribute.value === null || attribute.value === undefined ? 'a bare attribute' : 'a {expression}';
      analysis.problems.push({ line, message: `<${name}> prop "${attribute.name}" must be a plain string like ${attribute.name}="...", not ${shape}` });
      invalid.push(attribute.name);
    }
  });
  if (name !== '') analysis.components.push({ name, line, props, invalid });
  TEXT_PROPS.forEach(prop => {
    if (props[prop] === undefined) return;
    analysis.propTexts.push({ component: name, prop, value: props[prop], line });
    section.text += `${props[prop]}\n`;
  });
}

function walk(node: MdNode, analysis: MdxAnalysis, section: MdxSection): void {
  const line = lineOf(node);
  switch (node.type) {
    case 'text': {
      const value = node.value || '';
      section.text += `${value}\n`;
      const at = value.search(/[<{]/);
      if (at !== -1) {
        const lineInNode = value.slice(0, at).split('\n').length - 1;
        analysis.problems.push({
          line: line + lineInNode,
          message: `plain text contains "${value.charAt(at)}" near "${excerpt(value, at)}"; write comparisons inside math ($x < 5$) or in words, "<" and "{" are reserved for components`,
        });
      }
      return;
    }
    case 'math':
      // Block math keeps its fences on their own lines, so the formula itself starts one line below the node.
      analysis.math.push({ tex: node.value || '', display: true, line: line + 1 });
      return;
    case 'inlineMath':
      analysis.math.push({ tex: node.value || '', display: false, line });
      return;
    case 'code':
    case 'inlineCode':
    case 'yaml':
      return;
    case 'mdxFlowExpression':
    case 'mdxTextExpression':
      analysis.problems.push({ line, message: `JavaScript expression {${excerpt(node.value || '', 0, 20)}} is not allowed in topic MDX; math goes inside $...$` });
      return;
    case 'mdxjsEsm':
      analysis.problems.push({ line, message: 'import/export statements are not allowed in topic MDX' });
      return;
    case 'mdxJsxFlowElement':
    case 'mdxJsxTextElement':
      walkElement(node, analysis, section);
      break;
    default:
      break;
  }
  (node.children || []).forEach(child => walk(child, analysis, section));
}

// Parses one topic body. Syntax errors (for example `a<b` in plain text) come back as `ok: false`.
export function analyzeMdx(source: string): MdxResult {
  let root: MdNode;
  try {
    root = processor.parse(source) as unknown as MdNode;
  } catch (error) {
    return { ok: false, error: describeSyntaxError(error) };
  }
  const analysis: MdxAnalysis = { headings: [], components: [], math: [], problems: [], sections: [], propTexts: [] };
  let section: MdxSection = { title: null, line: 1, text: '' };
  (root.children || []).forEach(child => {
    if (child.type === 'heading' && child.depth === 2) {
      const text = plainText(child).trim();
      analysis.headings.push({ text, line: lineOf(child) });
      section = { title: text, line: lineOf(child), text: '' };
      analysis.sections.push(section);
      return;
    }
    walk(child, analysis, section);
  });
  return { ok: true, analysis };
}

// ---- rule 3: the eight headings ----

export function headingProblems(actual: MdxHeading[], lang: Lang): MdxProblem[] {
  const expected = EXPECTED_HEADINGS[lang];
  const titles = actual.map(heading => heading.text);
  const problems: MdxProblem[] = [];
  const missing = expected.filter(title => titles.indexOf(title) === -1);
  const unexpected = actual.filter(heading => expected.indexOf(heading.text) === -1);
  const hinted: string[] = [];

  actual.forEach((heading, index) => {
    if (expected.indexOf(heading.text) !== -1) {
      if (titles.indexOf(heading.text) !== index) {
        problems.push({ line: heading.line, message: `heading "## ${heading.text}" appears more than once; each of the 8 sections appears exactly once` });
      }
      return;
    }
    // Suggest the required title when it differs only in case, or when this is the one wrong heading of the file.
    const lower = heading.text.toLowerCase();
    const near = missing.filter(title => title.toLowerCase() === lower)[0]
      || (missing.length === 1 && unexpected.length === 1 ? missing[0] : undefined);
    if (near) hinted.push(near);
    problems.push({
      line: heading.line,
      message: near
        ? `unexpected heading "## ${heading.text}"; the required title is "## ${near}"`
        : `unexpected heading "## ${heading.text}"; a topic has exactly these ## headings: ${expected.join(' / ')}`,
    });
  });

  missing.filter(title => hinted.indexOf(title) === -1).forEach(title => {
    const place = actual[expected.indexOf(title)] || actual[actual.length - 1];
    problems.push({ line: place ? place.line : 1, message: `missing heading "## ${title}" (section ${expected.indexOf(title) + 1} of 8)` });
  });

  if (problems.length === 0) {
    const wrong = actual.map((heading, index) => ({ heading, index })).filter(entry => entry.heading.text !== expected[entry.index])[0];
    if (wrong) {
      problems.push({
        line: wrong.heading.line,
        message: `heading #${wrong.index + 1} is "## ${wrong.heading.text}" but the order must be: ${expected.join(' / ')}`,
      });
    }
  }
  return problems;
}

// ---- rule 3: identical component ids in EN and RU ----

export interface SequenceTag { name: string; prop: string; value: string; line: number }

const ID_PROPS = ['id', 'ids', 'kind'];

// The ordered list of <Name id|ids|kind="..."> tags of a document.
export function componentSequence(components: MdxComponent[]): SequenceTag[] {
  const tags: SequenceTag[] = [];
  components.forEach(component => {
    const prop = ID_PROPS.filter(candidate => component.props[candidate] !== undefined)[0];
    if (prop) tags.push({ name: component.name, prop, value: component.props[prop], line: component.line });
  });
  return tags;
}

export function tagLabel(tag: SequenceTag): string {
  return `<${tag.name} ${tag.prop}="${tag.value}">`;
}

export interface SequenceDifference { index: number; en?: SequenceTag; ru?: SequenceTag }

export function firstSequenceDifference(en: SequenceTag[], ru: SequenceTag[]): SequenceDifference | null {
  const length = Math.max(en.length, ru.length);
  for (let index = 0; index < length; index++) {
    if (!en[index] || !ru[index] || tagLabel(en[index]) !== tagLabel(ru[index])) return { index, en: en[index], ru: ru[index] };
  }
  return null;
}
