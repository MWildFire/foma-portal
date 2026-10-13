import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'listening-strategy',
  subject: 'fr',
  code: 'P2L.strategy',
  title: { en: 'Listening (P2): two listenings, notes and answers', ru: 'Аудирование (P2): два прослушивания, заметки и ответы' },
  papers: ['P2'],
  order: 23,
  minutes: 40,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can read the questions before a recording and underline the key words', ru: 'Могу прочитать вопросы до записи и подчеркнуть ключевые слова' },
    { en: 'I can tell vrai, faux and non mentionné apart, and quote the evidence', ru: 'Могу отличить vrai, faux и non mentionné и привести доказательство цитатой' },
    { en: 'I can recognise the same idea when the recording uses other words', ru: 'Могу узнать ту же мысль, когда запись использует другие слова' },
    { en: 'I can use the second listening to check the answers I am not sure of', ru: 'Могу использовать второе прослушивание, чтобы проверить сомнительные ответы' },
    { en: 'I can write a short answer in the form the question asks for', ru: 'Могу написать краткий ответ в той форме, которую просит вопрос' },
  ],
  termIds: [],
  questionIds: ['listening-strategy-q1', 'listening-strategy-q2'],
  sims: ['fr.listening-player'],
  sources: [{ kind: 'own', title: "Authors' French B material (2026)" }],
};

export default topic;
