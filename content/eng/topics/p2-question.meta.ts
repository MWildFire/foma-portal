import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'p2-question',
  subject: 'eng',
  code: 'P2.A',
  title: { en: 'Reading the prompt and knowing both works', ru: 'Разбор задания и знание обоих произведений' },
  papers: ['P2'],
  order: 12,
  minutes: 40,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can name the command term of a prompt and say what it asks me to do', ru: 'Могу назвать командное слово задания и сказать, что оно требует' },
    { en: 'I can explain that "to what extent" and "how far" ask for a judgement of degree', ru: 'Могу объяснить, что «to what extent» и «how far» требуют суждения о степени' },
    { en: 'I can define the key words of a prompt in my first paragraph', ru: 'Могу определить ключевые слова задания в первом абзаце' },
    { en: 'I can prepare each work as a card: its shape, its characters and two exact references', ru: 'Могу подготовить карточку каждого произведения: форма, персонажи и два точных примера' },
    { en: 'I can tell an answer to the prompt from an answer to a different question', ru: 'Могу отличить ответ на задание от ответа на другой вопрос' },
  ],
  termIds: ['theme', 'motif', 'literary-device', 'tone', 'symbol', 'connotation', 'argument', 'purpose', 'juxtaposition'],
  questionIds: ['p2-q01', 'p2-q02', 'p2-q03', 'p2-q04', 'p2-q05', 'chk-p2-question-1', 'chk-p2-question-2'],
  sources: [{ kind: 'own', title: 'Own wording' }],
};

export default topic;
