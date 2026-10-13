// Types shared by the planner modules. Types only, so every `import type` of this file is erased at run time.
import type { L, PaperId, PastPaperRef, SubjectId } from '../contract/types.ts';
import type { GlobalState, Rag, Weekday } from '../lib/storage.ts';

export type { GlobalState, Rag, Weekday };

// ---------------------------------------------------------------------------------------------
// Calendar data: parsed from data/exams.json and data/plan-quotas.json (see calendar.ts)
// ---------------------------------------------------------------------------------------------

export interface ExamPaper {
  id: string;                     // 'math-p1', 'fr-p2l'
  subject: SubjectId;
  paper: PaperId;
  part?: string;                  // 'reading' | 'listening'
  title: string;
  date: string;                   // YYYY-MM-DD, Dubai
  start: string;                  // HH:MM, Dubai, main hall
  acc2Start?: string;             // start in the access-arrangements room
  minutes: number;
  room: string;                   // kept exactly as written in the file
  note?: string;                  // in English, as the printout's notes are
  noteRu?: string;                // the same note in Russian; shown in the Russian interface when present
}

export interface ExamAccess {
  extraTime: number;              // 0.25 = 25% on top of the printed length
  room: string;                   // the student's room as the school gives it ('tbd' until it is known)
  noExtraTime: string[];          // ids of papers without extra time (the French listening)
}

export interface ExamsFile {
  timezone: string;
  defaultRoom: string;
  papers: ExamPaper[];            // sorted by date, then start time
  accessMinutes: Record<string, number>;   // paper minutes -> minutes with extra time (the school's table)
  access: ExamAccess;
}

export interface TimedEntry {
  subject: SubjectId;
  paper: PaperId;
  part?: string;                  // 'reading' | 'listening' for French P2; without it the entry is the whole paper
  set?: string;                   // a timed set of the paper's guide ('diagnostic') instead of the whole paper; no past paper
  title?: L;                      // the block title for a set, in both languages
  minutes: number;                // the timed sitting itself; the rest of the quota is review
  note?: string;
}

export interface QuotaDay {
  date: string;
  capacity: number;               // recall + sum of quotas
  recall: number;
  examDay: boolean;
  focus: L | null;                // the focus of the day, in both languages
  quota: Partial<Record<SubjectId, number>>;
  subjectOrder: SubjectId[];      // order of the keys in the file: the day's priority
  timed: TimedEntry[];
}

export interface QuotasFile {
  start: string;
  end: string;
  recallMinutesDefault: number;
  unitMinutes: number;            // one Pomodoro, 25
  days: QuotaDay[];               // sorted by date
}

// ---------------------------------------------------------------------------------------------
// Content the planner reads (built from the subject packs by data.ts, or by hand in tests)
// ---------------------------------------------------------------------------------------------

export interface PlannerTopic {
  id: string;
  subject: SubjectId;
  title: L;
  order: number;
  minutes: number;
  priority: 1 | 2 | 3;
  inMockScope: 'yes' | 'no' | 'unknown';
  papers: PaperId[];
  termIds: string[];
  questionCount: number;
  links: { title: string; url: string }[];
  ready: { en: boolean; ru: boolean };   // does an MDX body exist for the language?
}

export interface PlannerSubject {
  id: SubjectId;
  topics: PlannerTopic[];
  termIds: string[] | null;       // ids of the subject's flashcard terms; null = unknown, count every card in the progress store
}

export interface PlannerInput {
  today: string;                  // YYYY-MM-DD in Asia/Dubai
  exams: ExamsFile;
  quotas: QuotasFile;
  subjects: PlannerSubject[];
  state: GlobalState;
  pastPapers?: readonly PastPaperRef[];   // every subject's past papers (SubjectPack.pastPapers); none = no links
}

// ---------------------------------------------------------------------------------------------
// Output
// ---------------------------------------------------------------------------------------------

export type BlockKind = 'recall' | 'topic' | 'practice' | 'timed' | 'paper' | 'study';
export type BlockStatus = 'planned' | 'moved' | 'done';

// The past IB paper a timed or practice block works on (PastPaperRef in the contract; the planner keeps only the link).
export interface PastPaperLink {
  id: string;                     // 'geo-p2-m24-tz1'
  session: string;                // 'M24'
  paper: PaperId;
  part?: string;
}

export interface PlanBlock {
  id: string;                     // stable between recalculations; also the key in `state.blocks`
  kind: BlockKind;
  subject: SubjectId | null;      // null for the all-subject recall block
  date: string;                   // the day the block is planned on
  minutes: number;
  status: BlockStatus;
  route: string;                  // portal route, e.g. '/s/geo/t/urban-systems'
  doneOn?: string;
  movedFrom?: string;             // the day it was originally planned on (timed papers)
  topicId?: string;
  title?: L;
  start?: number;                 // first-pass slice: minutes already covered before this block
  last?: boolean;                 // first-pass slice that finishes the topic
  totalMinutes?: number;          // first-pass: planned minutes of the whole topic
  paper?: PaperId;
  part?: string;                  // 'reading' | 'listening' for French P2
  examId?: string;
  note?: string;                  // text from plan-quotas.json (English)
  pastPaper?: PastPaperLink;      // timed sitting or practice on a past IB paper
  pastItems?: string[];           // practice on a past paper: the ids of the questions to do (a section or a set of questions)
  rag?: Rag;                      // current confidence of the topic
  ready?: { en: boolean; ru: boolean };
  links?: { title: string; url: string }[];
  hasQuestions?: boolean;
}

export interface RecallSubject {
  subject: SubjectId;
  due: number;                    // Leitner cards due on the day
  redTerms: number;               // key terms of red topics (not already due)
  suggested: number;              // cards to do today (weighted, within the recall time)
}

export interface RecallInfo {
  date: string;
  minutes: number;
  capacityCards: number;
  dueTotal: number;
  redTotal: number;
  subjects: RecallSubject[];      // only subjects that have cards, heavier-weighted languages first
}

export interface PlanDay {
  date: string;
  weekday: Weekday;
  isToday: boolean;
  kind: 'study' | 'exam' | 'rest';   // exam = an exam sits that day, so only the evening is planned
  capacity: number;               // minutes, settings applied
  baseCapacity: number;           // minutes in plan-quotas.json
  minutes: number;                // sum of the blocks
  doneMinutes: number;
  moved: number;                  // minutes of work moved here from earlier days (debt and timed papers)
  focus: L | null;
  exams: ExamPaper[];
  eveOf: ExamPaper[];             // exams that sit the next day
  blocks: PlanBlock[];            // recall first
  recall: RecallInfo | null;      // only for today
}

export interface Unplaced {
  subject: SubjectId;
  minutes: number;                // regular work that did not fit before the subject's last exam
  timed: { paper: PaperId; from: string }[];
}

export interface Plan {
  today: string;
  firstDate: string;
  lastDate: string;
  days: PlanDay[];                // from today (or the first plan day) to the last exam
  debt: { subject: SubjectId; minutes: number }[];   // work left over from earlier days, before it was placed
  unplaced: Unplaced[];
  activeSubjects: SubjectId[];    // subjects whose last exam is still ahead
}
