import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '4-7-discrete-random-variables',
  subject: 'math',
  code: '4.7',
  title: { en: 'Discrete random variables', ru: 'Дискретные случайные величины' },
  papers: ['P1', 'P2', 'P3'],
  order: 48,
  minutes: 40,
  priority: 1,
  inMockScope: 'unknown',
  outcomes: [
    {
      en: 'I can write a probability distribution as a table and check that its probabilities add to 1',
      ru: 'Могу записать распределение вероятностей в виде таблицы и проверить, что вероятности в сумме дают 1',
    },
    {
      en: 'I can calculate the expected value $E(X) = \\sum x\\,P(X = x)$ from a table or from a rule',
      ru: 'Могу вычислить математическое ожидание $E(X) = \\sum x\\,P(X = x)$ по таблице или по правилу',
    },
    {
      en: 'I can apply E(X) to a game or a decision, and say whether the game is fair',
      ru: 'Могу применить E(X) к игре или решению и сказать, является ли игра честной',
    },
  ],
  termIds: ['discrete-random-variable', 'discrete-probability-distribution', 'expected-value-discrete'],
  formulaIds: ['discrete-expected-value', 'probability-distribution-sum', 'expected-gain-game'],
  sims: [],
  questionIds: ['q-4-7-01', 'q-4-7-02', 'q-4-7-03'],
  sources: [
    {
      kind: 'ib-guide',
      title: 'IB Mathematics: applications and interpretation guide (first assessment 2021)',
      locator: 'sub-topic 4.7',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
