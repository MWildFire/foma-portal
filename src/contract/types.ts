export type Lang = 'en' | 'ru';
export type L = { en: string; ru: string };   // короткий текст; inline Markdown; формулы $...$
export type SubjectId = 'geo' | 'math' | 'econ' | 'cs' | 'eng' | 'fr';
export type PaperId = 'P1' | 'P2' | 'P3';
export type SimId = `${SubjectId}.${string}`; // 'econ.supply-demand' = src/sims/econ/supply-demand.tsx

export interface SourceRef {
  kind: 'textbook' | 'ib-guide' | 'thinkib' | 'school' | 'web' | 'own';
  title: string;              // 'Hodder Economics for the IB Diploma (2020)'
  locator?: string;           // 'ch. 2.8, p. 113' — обязателен для textbook
  url?: string;               // только публичные страницы и ThinkIB; никаких ссылок Classlink/Drive/Toddle
}

export interface SyllabusItem { code: string; title: L; papers: PaperId[]; hl?: boolean; option?: string; }

export interface TopicMeta {
  id: string;                 // kebab, уникален в предмете, = имя файла
  subject: SubjectId;
  code: string;               // '4.18' | '2.8' | 'A3.2' | 'B2.4' | 'core-2.1' | 'G.3' | 'p1-method'
  title: L;
  papers: PaperId[];
  hl?: boolean; option?: string;
  order: number;              // порядок внутри предмета
  minutes: number;            // первое прохождение, 25–60
  priority: 1 | 2 | 3;        // 1 = обязательно к моку
  inMockScope: 'yes' | 'no' | 'unknown';
  outcomes: L[];              // 3–8 пунктов «умею …»
  termIds: string[]; formulaIds?: string[]; sims?: SimId[];
  questionIds: string[]; caseIds?: string[];
  sources: SourceRef[];
  links?: { title: string; url: string }[];   // ThinkIB, ibcshub, публичные ресурсы
}

export interface Term { id: string; term: L; def: L; syllabus: string; papers: PaperId[]; src: SourceRef; example?: L; pitfall?: L; sim?: SimId; }
export interface Formula { id: string; tex: string; name: L; meaning: L; when: L; syllabus: string; inBooklet?: boolean; gdc?: L; units?: string; example?: L; }
export interface Question {
  id: string; subject: SubjectId; topicIds: string[]; paper: PaperId; section?: string;
  marks: number; command: string;            // IB command term
  prompt: L; stimulus?: L; markscheme: L; model?: L; hints?: L[];
  answer?: string;                           // машинно проверяемый ответ (math/econ/cs)
  minutes?: number; origin: 'original' | 'adapted';
}
export interface CaseStudy { id: string; subject: 'geo' | 'econ'; title: L; place: string; scale: 'local' | 'national' | 'regional' | 'global'; years: string; lat?: number; lng?: number; facts: L; usedFor: string[]; src: SourceRef[]; }
export interface PaperGuide {
  subject: SubjectId; paper: PaperId; part?: string; title: L; minutes: number; marks: number;
  structure: L; strategy: L; criteria?: L; commandTerms?: string[];
  timedSets: { id: string; title: L; questionIds: string[]; minutes: number }[];
}
