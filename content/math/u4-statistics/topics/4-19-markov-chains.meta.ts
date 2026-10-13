import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '4-19-markov-chains',
  subject: 'math',
  code: '4.19',
  title: { en: 'Markov chains', ru: 'Цепи Маркова' },
  papers: ['P1', 'P2', 'P3'],
  hl: true,
  order: 60,
  minutes: 50,
  priority: 2,
  inMockScope: 'unknown',
  outcomes: [
    {
      en: 'I can write a transition matrix from a description and check that its columns sum to 1',
      ru: 'Могу записать матрицу переходов по описанию и проверить, что суммы столбцов равны 1',
    },
    {
      en: 'I can find the state after several steps by repeated multiplication, on the GDC or by hand',
      ru: 'Могу найти состояние после нескольких шагов повторным умножением: на калькуляторе или вручную',
    },
    {
      en: 'I can show that a chain is regular and find its steady state by repeated multiplication or by solving linear equations',
      ru: 'Могу показать, что цепь регулярна, и найти установившееся распределение повторным умножением или решением линейных уравнений',
    },
  ],
  termIds: ['markov-transition-matrix', 'markov-regular-chain', 'markov-steady-state'],
  formulaIds: ['markov-state-after-n-steps', 'markov-regular-condition', 'markov-steady-state-equation'],
  sims: ['math.markov-lab'],
  questionIds: ['q-4-19-01', 'q-4-19-02', 'q-4-19-03'],
  sources: [
    {
      kind: 'ib-guide',
      title: 'IB Mathematics: applications and interpretation guide (first assessment 2021)',
      locator: 'sub-topic 4.19',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
