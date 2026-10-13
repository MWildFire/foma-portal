import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '5-11-integration-techniques',
  subject: 'math',
  code: '5.11',
  title: { en: 'Integration of standard functions and substitution', ru: 'Интегрирование стандартных функций и подстановка' },
  papers: ['P1', 'P2', 'P3'],
  hl: true,
  order: 71,
  minutes: 45,
  priority: 2,
  inMockScope: 'unknown',
  outcomes: [
    {
      en: 'I can integrate x^n (n rational, including n = -1), sin x, cos x, 1/cos^2 x and e^x, and add the constant C',
      ru: 'Могу интегрировать x^n (n рационально, включая n = -1), sin x, cos x, 1/cos^2 x и e^x и добавлять постоянную C',
    },
    {
      en: 'I can recognise an integrand of the form f(g(x)) g\'(x) and integrate it by substitution',
      ru: 'Могу распознать подынтегральную функцию вида f(g(x)) g\'(x) и проинтегрировать её подстановкой',
    },
    {
      en: 'I can change the limits of a definite integral when I substitute, and check the value',
      ru: 'Могу сменить пределы определённого интеграла при подстановке и проверить найденное значение',
    },
  ],
  termIds: ['integration-by-inspection', 'integration-by-substitution', 'constant-of-integration'],
  formulaIds: ['integral-power-rule', 'integral-substitution-rule', 'definite-integral-substitution'],
  sims: [],
  questionIds: ['q-5-11-01', 'q-5-11-02', 'q-5-11-03'],
  sources: [
    {
      kind: 'ib-guide',
      title: 'IB Mathematics: applications and interpretation guide (first assessment 2021)',
      locator: 'sub-topic 5.11',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
