import type { Assignment, CaseStudy, Formula, PaperGuide, PastPaperRef, Question, SyllabusItem, Term, TopicMeta } from '../../src/contract/types';
import type { SimComponent, TopicBodyModule } from '../../src/contract/pack';
import { buildPack } from '../../src/content/build-pack';
import meta from './meta';

// Same glob layout for every subject (PLAN.md §2). An empty folder is valid.
export default buildPack(meta, {
  syllabus: import.meta.glob<{ syllabus: SyllabusItem[] }>('./**/syllabus.ts', { eager: true }),
  topicMeta: import.meta.glob<{ default: TopicMeta }>('./**/topics/*.meta.ts', { eager: true }),
  topicBody: import.meta.glob<TopicBodyModule>('./**/topics/*.{en,ru}.mdx'),
  terms: import.meta.glob<{ terms: Term[] }>('./**/terms/*.ts', { eager: true }),
  formulas: import.meta.glob<{ formulas: Formula[] }>('./**/formulas/*.ts', { eager: true }),
  questions: import.meta.glob<{ questions: Question[] }>('./**/questions/*.ts', { eager: true }),
  cases: import.meta.glob<{ cases: CaseStudy[] }>('./**/cases/*.ts', { eager: true }),
  papers: import.meta.glob<{ papers: PaperGuide[] }>('./**/papers.ts', { eager: true }),
  pastPapers: import.meta.glob<{ pastPapers: PastPaperRef[] }>('./**/pastpapers.ts', { eager: true }),
  assignments: import.meta.glob<{ assignments: Assignment[] }>('./**/assignments.ts', { eager: true }),
  sims: import.meta.glob<{ default: SimComponent }>('../../src/sims/*/*.tsx'),
});
