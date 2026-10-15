import type { MDXComponents } from 'mdx/types';
import './mdx.css';
import { Callout } from './Callout';
import { Case } from './Case';
import { CaseMap } from './CaseMap';
import { Figure } from './Figure';
import { Formula } from './Formula';
import { Question } from './Question';
import { Reveal } from './Reveal';
import { Sim } from './Sim';
import { Step, Steps } from './Steps';
import { Term } from './Term';
import { Anchor, Code, H2, H3, Hr, Li, Ol, P, Pre, Span, Quote, Table, Td, Th, Ul } from './elements';

// The component map passed to <MDXProvider>. Names and props are the contract of PLAN.md section 2; props are
// strings only. Everything else a component needs (subject, topic, pack, languages) comes from the topic context.
export const mdxComponents: MDXComponents = {
  Term,
  Formula,
  Question,
  Sim,
  Case,
  CaseMap,
  Callout,
  Reveal,
  Steps,
  Step,
  Figure,
  // Plain Markdown elements with the reading styles.
  p: P,
  span: Span,
  h2: H2,
  h3: H3,
  ul: Ul,
  ol: Ol,
  li: Li,
  blockquote: Quote,
  hr: Hr,
  code: Code,
  pre: Pre,
  table: Table,
  th: Th,
  td: Td,
  a: Anchor,
};

export { TopicContextProvider, useTopicContext, useBodyT } from './context';
export type { TopicContextValue } from './context';
export { SafeContent } from './SafeContent';
