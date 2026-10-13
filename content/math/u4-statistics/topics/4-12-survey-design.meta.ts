import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '4-12-survey-design',
  subject: 'math',
  code: '4.12',
  title: {
    en: 'Survey design, categorising data, reliability and validity',
    ru: 'Планирование опросов, категоризация данных, надёжность и валидность (Survey design, categorising data, reliability and validity)',
  },
  papers: ['P1', 'P2', 'P3'],
  hl: true,
  order: 53,
  minutes: 45,
  priority: 2,
  inMockScope: 'unknown',
  outcomes: [
    {
      en: 'I can judge whether a survey is valid: sampling method, question wording, pilot test and bias',
      ru: 'Могу оценить, валиден ли опрос: способ выборки, формулировка вопросов, пилотный опрос и смещение',
    },
    {
      en: 'I can group numerical data into classes, combine classes until every expected frequency is at least 5, and find the degrees of freedom',
      ru: 'Могу разбить числовые данные на классы, объединять их, пока каждая ожидаемая частота не станет не меньше 5, и найти степени свободы',
    },
    {
      en: 'I can test the reliability of a questionnaire from two sets of answers and explain what evidence validity needs',
      ru: 'Могу проверить надёжность анкеты по двум наборам ответов и объяснить, какие данные нужны для валидности',
    },
  ],
  termIds: ['reliability-of-questionnaire', 'validity-of-questionnaire', 'categorising-numerical-data'],
  formulaIds: ['df-estimated-parameters', 'expected-fitted-poisson', 'expected-fitted-normal', 'z-score-class-boundary'],
  questionIds: ['q-4-12-01', 'q-4-12-02', 'q-4-12-03'],
  sources: [
    {
      kind: 'web',
      title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
      locator: 'sub-topic 4.12',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
