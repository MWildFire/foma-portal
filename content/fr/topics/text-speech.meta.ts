import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'text-speech',
  subject: 'fr',
  code: 'P1.speech',
  title: { en: 'Writing: speech', ru: 'Письмо: речь (speech)' },
  papers: ['P1'],
  order: 13,
  minutes: 40,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can open a speech to an audience with a greeting and an attention-grabbing question', ru: 'Могу начать речь перед аудиторией с обращения и вопроса, который привлекает внимание' },
    { en: 'I can announce the plan of a speech with Premièrement, Deuxièmement and Enfin', ru: 'Могу объявить план речи словами Premièrement, Deuxièmement и Enfin' },
    { en: 'I can use rhetorical questions, repetition and the conditional to persuade', ru: 'Могу использовать риторические вопросы, повторы и условное наклонение, чтобы убедить' },
    { en: 'I can end a speech with a clear call to action and thanks', ru: 'Могу закончить речь понятным призывом к действию и благодарностью' },
  ],
  termIds: [],
  questionIds: ['p1-speech', 'p1-speech-q1', 'p1-speech-q2'],
  sources: [{ kind: 'thinkib', title: 'ThinkIB, French B SL: Les types de textes (page 71138)', locator: 'Discours / exposé / débat (page 37003)' }],
};

export default topic;
