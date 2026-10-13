import type { L, Lang } from '../contract/types';
import type { GlobalState } from './storage';

// The plain-text report for the teacher. It is built only from progress counts and topic titles: no notes, no
// settings, no personal data. Pure functions, so it can be tested without a browser. This file may import types
// only (the unit tests run it as plain TypeScript, without a bundler).

// Text comes from the `report` namespace (src/i18n/<lang>/report.json): t('text.topics', { done, total }).
export type ReportT = (key: string, vars?: Record<string, string | number>) => string;

// The parts of a subject pack the report reads. A SubjectPack fits.
export interface ReportPackLike {
  meta: { id: string; title: L };
  topics: readonly { id: string; title: L; order?: number }[];
  questions: readonly { id: string }[];
  terms: readonly { id: string }[];
}

export interface ReportInput {
  state: Pick<GlobalState, 'topics' | 'terms' | 'questions'>;
  packs: readonly ReportPackLike[];
  /** The report date in Dubai, YYYY-MM-DD. */
  today: string;
  lang: Lang;
  t: ReportT;
}

export interface SubjectSummary {
  id: string;
  title: string;
  topics: { done: number; total: number; red: number; amber: number; green: number; unrated: number };
  questions: { total: number; rated: number; right: number; partial: number; wrong: number };
  cards: { total: number; fresh: number; boxes: [number, number, number, number] };
  /** Titles of the topics marked done most recently, newest first (at most three). */
  recent: string[];
  /** The pack has no topics, no questions and no terms yet. */
  empty: boolean;
}

export const RECENT_TOPICS = 3;

const text = (value: L, lang: Lang): string => {
  const first = lang === 'ru' ? value.ru : value.en;
  return first.trim() ? first : (lang === 'ru' ? value.en : value.ru);
};

const unique = <T extends { id: string }>(items: readonly T[]): T[] => {
  const seen = new Set<string>();
  return items.filter(item => (seen.has(item.id) ? false : (seen.add(item.id), true)));
};

export function summarizeSubject(pack: ReportPackLike, state: ReportInput['state'], lang: Lang): SubjectSummary {
  const subject = pack.meta.id;
  const topics = unique(pack.topics);
  const questions = unique(pack.questions);
  const terms = unique(pack.terms);

  const summary: SubjectSummary = {
    id: subject,
    title: text(pack.meta.title, lang).trim() || subject,
    topics: { done: 0, total: topics.length, red: 0, amber: 0, green: 0, unrated: 0 },
    questions: { total: questions.length, rated: 0, right: 0, partial: 0, wrong: 0 },
    cards: { total: terms.length, fresh: 0, boxes: [0, 0, 0, 0] },
    recent: [],
    empty: topics.length === 0 && questions.length === 0 && terms.length === 0,
  };

  const finished: { title: string; done: string; order: number; id: string }[] = [];
  for (const topic of topics) {
    const progress = state.topics[`${subject}/${topic.id}`];
    if (progress?.done) {
      summary.topics.done += 1;
      finished.push({ title: text(topic.title, lang).trim() || topic.id, done: String(progress.done), order: topic.order ?? 0, id: topic.id });
    }
    const rag = progress?.rag;
    if (rag === 'red' || rag === 'amber' || rag === 'green') summary.topics[rag] += 1;
    else summary.topics.unrated += 1;
  }
  // Newest first. Topics finished on the same day: the later one in the teaching order first.
  finished.sort((a, b) => (a.done < b.done ? 1 : a.done > b.done ? -1 : b.order - a.order || (a.id < b.id ? -1 : 1)));
  summary.recent = finished.slice(0, RECENT_TOPICS).map(item => item.title);

  for (const question of questions) {
    const rating = state.questions[`${subject}/${question.id}`]?.rating;
    if (rating === 'right' || rating === 'partial' || rating === 'wrong') {
      summary.questions[rating] += 1;
      summary.questions.rated += 1;
    }
  }

  for (const term of terms) {
    const entry = state.terms[`${subject}/${term.id}`];
    if (!entry) {
      summary.cards.fresh += 1;
      continue;
    }
    const box = Number.isFinite(entry.box) ? Math.min(4, Math.max(1, Math.round(entry.box))) : 1;
    summary.cards.boxes[box - 1] += 1;
  }

  return summary;
}

// The whole report as plain text. One block per subject, in the order of the packs.
export function buildReport({ state, packs, today, lang, t }: ReportInput): string {
  const lines: string[] = [t('text.heading'), t('text.date', { date: today }), ''];
  for (const pack of packs) {
    const s = summarizeSubject(pack, state, lang);
    lines.push(s.title);
    if (s.empty) {
      lines.push(`- ${t('text.noMaterial')}`, '');
      continue;
    }
    lines.push(
      `- ${t('text.topics', { done: s.topics.done, total: s.topics.total })}`,
      `- ${t('text.rag', { red: s.topics.red, amber: s.topics.amber, green: s.topics.green, unrated: s.topics.unrated })}`,
      `- ${t('text.questions', { rated: s.questions.rated, total: s.questions.total, right: s.questions.right, partial: s.questions.partial, wrong: s.questions.wrong })}`,
      `- ${t('text.cards', { b1: s.cards.boxes[0], b2: s.cards.boxes[1], b3: s.cards.boxes[2], b4: s.cards.boxes[3], fresh: s.cards.fresh })}`,
    );
    if (s.recent.length === 0) {
      lines.push(`- ${t('text.recentNone')}`);
    } else {
      lines.push(`- ${t('text.recent')}`);
      s.recent.forEach((title, index) => lines.push(`  ${index + 1}. ${title}`));
    }
    lines.push('');
  }
  return lines.join('\n').trimEnd();
}
