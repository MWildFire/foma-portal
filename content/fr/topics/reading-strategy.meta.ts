import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'reading-strategy',
  subject: 'fr',
  code: 'P2R.strategy',
  title: { en: 'Reading (P2): question types and method', ru: 'Чтение (P2): типы вопросов и метод' },
  papers: ['P2'],
  order: 22,
  minutes: 40,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can tell vrai, faux and non mentionné apart, and quote the sentence that proves my answer', ru: 'Могу отличить vrai, faux и non mentionné и привести фразу, которая доказывает ответ' },
    { en: 'I can answer a short question in English with the key words, in any order', ru: 'Могу ответить на короткий вопрос по-английски, назвав ключевые слова в любом порядке' },
    { en: 'I can match a statement to the paragraph (A to E) that has the same idea', ru: 'Могу сопоставить утверждение с абзацем (от A до E), в котором та же мысль' },
    { en: 'I can find a French word in the text from its English meaning and copy it exactly', ru: 'Могу найти французское слово в тексте по английскому значению и переписать его точно' },
    { en: 'I can work through a set of three texts in 56 minutes (with extra time)', ru: 'Могу пройти набор из трёх текстов за 56 минут (с доп. временем)' },
  ],
  termIds: [],
  questionIds: ['reading-strategy-q1', 'reading-strategy-q2'],
  sims: ['fr.reading-practice'],
  sources: [{ kind: 'own', title: "Authors' French B material (2026)" }],
};

export default topic;
