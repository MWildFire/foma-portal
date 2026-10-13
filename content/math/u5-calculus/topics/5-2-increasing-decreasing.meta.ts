import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '5-2-increasing-decreasing',
  subject: 'math',
  code: '5.2',
  title: { en: 'Increasing and decreasing functions', ru: 'Возрастание и убывание функций' },
  papers: ['P1', 'P2', 'P3'],
  order: 62,
  minutes: 30,
  priority: 1,
  inMockScope: 'unknown',
  outcomes: [
    {
      en: 'I can read the sign of f′(x) from a graph and say where f is increasing, decreasing or stationary',
      ru: 'Могу определить знак f′(x) по графику и сказать, где f возрастает, убывает или стационарна',
    },
    {
      en: 'I can find the x-values where f′(x) = 0 and build a sign diagram on a number line',
      ru: 'Могу найти значения x, где f′(x) = 0, и построить диаграмму знаков на числовой прямой',
    },
    {
      en: 'I can state the intervals of increase and decrease with correct inequality signs and a reason',
      ru: 'Могу записать промежутки возрастания и убывания с верными знаками неравенств и обосновать их',
    },
  ],
  termIds: ['increasing-function-derivative', 'decreasing-function-derivative', 'sign-diagram-derivative'],
  formulaIds: ['increasing-test-derivative', 'decreasing-test-derivative'],
  sims: ['math.tangent-optimisation-lab'],
  questionIds: ['q-5-2-01', 'q-5-2-02', 'q-5-2-03'],
  sources: [
    {
      kind: 'ib-guide',
      title: 'IB Mathematics: applications and interpretation guide (first assessment 2021)',
      locator: 'sub-topic 5.2',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
