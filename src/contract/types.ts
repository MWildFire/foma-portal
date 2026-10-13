export type Lang = 'en' | 'ru';
// `fr` (French text) is set only for the French subject; every other subject leaves it out.
export type L = { en: string; ru: string; fr?: string };   // короткий текст; inline Markdown; формулы $...$
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
  codes?: string[];          // more syllabus codes this topic covers (grouping); `code` stays the main one
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
  asked?: L;                     // what the exam asks: frequent topics, typical calculations, diagrams (shown on past papers)
  timedSets: { id: string; title: L; questionIds: string[]; minutes: number }[];
}
// A past IB paper the portal links to (content/<s>/**/pastpapers.ts, export const pastPapers). Links and our own guide
// only: question text, resource booklets and markschemes are never copied here.
export interface PastPaperRef {
  id: string;                    // 'geo-p2-m24-tz1'
  subject: SubjectId; paper: PaperId; part?: string;  // part: 'reading' | 'listening' | 'option-G'
  session: string;               // 'M24' | 'N23' | 'SPEC27' (specimen paper, not a past session)
  level: 'SL' | 'HL' | 'SLHL'; tz?: string;
  files: { kind: 'questions' | 'resources' | 'markscheme' | 'audio'; url: string }[];   // url: https://ibdocs.re/... only
  minutes: number;               // time printed on the paper cover for that session (sections carry their own); +25% is added by the portal
  marks: number;
  items: { q: string; marks: number; topicIds: string[]; command?: string; option?: string; inMockScope?: boolean }[];
  guide?: L;                     // our own write-up: how to answer, what earns marks, where marks are lost
}

// A task the teacher set, with its due date (content/<s>/**/assignments.ts, export const assignments). Shown on the
// subject page. Links are public pages only: never Classlink, Google Drive or Toddle.
export interface Assignment {
  id: string;                    // kebab, unique within the subject
  title: L;
  due: string;                   // 'YYYY-MM-DD'
  url?: string;                  // https:// public page
  topicIds: string[];            // topics this task practises
}

// A listening recording of a subject (content/<s>/listening/*.ts, export const track): the audio and the questions it is
// for. The script stays in the content file; the pack keeps only what the player needs.
export interface ListeningTrack {
  id: string;
  audio: string;                 // public path, for example /audio/fr/l1-racines.mp3
  questionIds: string[];
}
