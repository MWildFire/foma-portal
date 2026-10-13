import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '4-18-hypothesis-errors',
  subject: 'math',
  code: '4.18',
  title: {
    en: 'Hypothesis tests for means and correlation; Type I and II errors',
    ru: 'Проверка гипотез о средних и корреляции; ошибки I и II рода',
  },
  papers: ['P1', 'P2', 'P3'],
  hl: true,
  order: 59,
  minutes: 45,
  priority: 2,
  inMockScope: 'unknown',
  outcomes: [
    {
      en: 'I can test a population mean with a t-test or a Poisson test, state H0 and H1, and give a conclusion in context',
      ru: 'Могу проверить среднее генеральной совокупности t-тестом или тестом Пуассона, записать H0 и H1 и сделать вывод в контексте',
    },
    {
      en: 'I can test whether the population correlation is zero for bivariate normal data, using the p-value from technology',
      ru: 'Могу проверить, равен ли нулю коэффициент корреляции генеральной совокупности для двумерно нормальных данных, по p-значению с калькулятора',
    },
    {
      en: 'I can define Type I and Type II errors and find the probability of a Type II error for a stated value under H1',
      ru: 'Могу определить ошибки I и II рода и найти вероятность ошибки II рода для заданного значения при H1',
    },
  ],
  termIds: ['population-mean-t-test', 'type-i-error-probability', 'type-ii-error-probability'],
  formulaIds: ['population-mean-t-statistic', 'correlation-t-statistic', 'poisson-total-count-test'],
  sims: ['math.t-test-lab'],
  questionIds: ['q-4-18-01', 'q-4-18-02', 'q-4-18-03'],
  sources: [
    {
      kind: 'ib-guide',
      title: 'IB Mathematics: applications and interpretation guide (first assessment 2021)',
      locator: 'sub-topic 4.18',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
