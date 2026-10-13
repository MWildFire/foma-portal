import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '1-4-financial-sequences',
  subject: 'math',
  code: '1.4',
  title: { en: 'Financial applications of sequences', ru: 'Финансовые применения прогрессий (Financial applications of sequences)' },
  papers: ['P1', 'P2', 'P3'],
  order: 4,
  minutes: 40,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    {
      en: 'I can find the future value of a deposit with compound interest, including interest added monthly',
      ru: 'Могу найти будущую стоимость вклада при сложных процентах, включая ежемесячное начисление',
    },
    {
      en: 'I can model reducing-balance depreciation as a geometric sequence and find the value after n years',
      ru: 'Могу описать амортизацию по остаточной стоимости геометрической последовательностью и найти стоимость через n лет',
    },
    {
      en: 'I can find an unknown rate or number of years from a given value, and round the answer as the question asks',
      ru: 'Могу найти неизвестную ставку или число лет по заданной стоимости и округлить ответ так, как просит вопрос',
    },
  ],
  termIds: ['compound-interest', 'compounding-period', 'reducing-balance-depreciation'],
  formulaIds: ['compound-interest-periods', 'reducing-balance-value', 'depreciation-rate'],
  sims: ['math.tvm-lab'],
  questionIds: ['q-1-4-01', 'q-1-4-02', 'q-1-4-03'],
  sources: [
    {
      kind: 'web',
      title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
      locator: 'sub-topic 1.4',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
