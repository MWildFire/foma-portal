import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '4-11-hypothesis-tests',
  subject: 'math',
  code: '4.11',
  title: { en: 'Hypothesis tests: chi-squared and t-tests', ru: 'Проверка гипотез: критерии χ² и t (Hypothesis tests: chi-squared and t-tests)' },
  papers: ['P1', 'P2', 'P3'],
  order: 52,
  minutes: 60,
  priority: 1,
  inMockScope: 'unknown',
  outcomes: [
    {
      en: 'I can state null and alternative hypotheses and choose a one-tailed or a two-tailed test',
      ru: 'Могу сформулировать нулевую и альтернативную гипотезы и выбрать одностороннюю или двустороннюю проверку',
    },
    {
      en: 'I can find expected frequencies, the chi-squared statistic and its degrees of freedom for a test of independence or goodness of fit',
      ru: 'Могу найти ожидаемые частоты, статистику χ² и число степеней свободы для проверки независимости или согласия',
    },
    {
      en: 'I can decide with a p-value or a critical value at a stated significance level, and write the conclusion in context',
      ru: 'Могу принять решение по p-значению или критическому значению при заданном уровне значимости и записать вывод в контексте',
    },
  ],
  termIds: ['null-hypothesis-h0', 'significance-level-alpha', 'p-value-of-a-test', 'chi-squared-independence-test'],
  formulaIds: ['chi-squared-statistic', 'expected-frequency-independence', 'df-contingency-table', 't-statistic-one-sample'],
  sims: ['math.chi-squared-lab'],
  questionIds: ['q-4-11-01', 'q-4-11-02', 'q-4-11-03'],
  sources: [
    {
      kind: 'web',
      title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
      locator: 'sub-topic 4.11',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
