import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'p2-concepts',
  subject: 'eng',
  code: 'P2.A',
  title: { en: 'Concepts in Paper 2 prompts', ru: 'Концепты в заданиях Paper 2' },
  papers: ['P2'],
  order: 24,
  minutes: 35,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can name the main and the second concept of a Paper 2 prompt', ru: 'Могу назвать главный и второй концепт задания Paper 2' },
    { en: 'I know which concepts led and supported the prompts of 2023–2025, and why representation leads most often', ru: 'Знаю, какие концепты вели и поддерживали задания 2023–2025 годов, и почему чаще всего ведёт репрезентация' },
    { en: 'For each concept, I can say what a point must show to earn criterion B marks', ru: 'Для каждого концепта могу сказать, что пункт должен показать, чтобы получить баллы по критерию B' },
    { en: 'I can join two concepts in one thesis, so that the second one supports the first', ru: 'Могу соединить два концепта в одном тезисе так, чтобы второй поддерживал первый' },
  ],
  termIds: ['argument', 'theme', 'literary-device', 'juxtaposition'],
  questionIds: ['chk-p2-concepts-1', 'chk-p2-concepts-2'],
  sources: [{ kind: 'own', title: 'Own analysis of 52 Paper 2 prompts (May 2023 – November 2025)' }],
};

export default topic;
