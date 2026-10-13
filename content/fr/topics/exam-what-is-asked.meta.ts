import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'exam-what-is-asked',
  subject: 'fr',
  code: 'P1.method',
  codes: ['P2R.strategy', 'P2L.strategy'],
  title: { en: 'What the past papers ask (N20 to N25)', ru: 'Что спрашивают в прошлых экзаменах (N20–N25)' },
  papers: ['P1', 'P2'],
  order: 0,
  minutes: 25,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can name the text types that Paper 1 offers most often, and check my plan against them', ru: 'Могу назвать типы текста (text type), которые Часть 1 предлагает чаще всего, и сверить с ними свой план' },
    { en: 'I can name the question types of Paper 2 reading and say what earns each mark', ru: 'Могу назвать типы вопросов чтения (Paper 2) и объяснить, за что даётся балл в каждом' },
    { en: 'I can name the question types of Paper 2 listening and say what each one asks me to write', ru: 'Могу назвать типы вопросов аудирования (Paper 2) и объяснить, что нужно записать в каждом' },
    { en: 'I can say which of the five themes come up most in each paper', ru: 'Могу назвать, какие из пяти тем чаще всего встречаются в каждом пейпере' },
  ],
  termIds: [],
  questionIds: ['exam-pattern-q1', 'exam-pattern-q2'],
  sims: ['fr.what-is-asked'],
  sources: [
    { kind: 'web', title: 'IB past papers, French B SL, November 2020–2025 (ibdocs.re)', url: 'https://ibdocs.re/past-papers-by-subject/french-b' },
    { kind: 'own', title: "Authors' analysis of the French B SL papers (2026)" },
  ],
};

export default topic;
