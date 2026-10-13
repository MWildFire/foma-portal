import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '1-1-standard-form',
  subject: 'math',
  code: '1.1',
  title: { en: 'Standard form (a × 10^k)', ru: 'Стандартный вид (a × 10^k)' },
  papers: ['P1', 'P2', 'P3'],
  order: 1,
  minutes: 25,
  priority: 1,
  inMockScope: 'unknown',
  outcomes: [
    {
      en: 'I can write very large and very small numbers in standard form a × 10^k with 1 ≤ a < 10',
      ru: 'Могу записать очень большие и очень малые числа в стандартном виде a × 10^k при 1 ≤ a < 10',
    },
    {
      en: 'I can multiply, divide and add numbers in standard form and give the answer in standard form',
      ru: 'Могу умножать, делить и складывать числа в стандартном виде и записывать ответ в стандартном виде',
    },
    {
      en: 'I can use standard form in context and check that the power of ten is sensible',
      ru: 'Могу использовать стандартный вид в прикладных задачах и проверять, разумна ли степень десятки',
    },
  ],
  termIds: ['standard-form', 'standard-form-mantissa', 'standard-form-order'],
  formulaIds: ['standard-form-representation', 'standard-form-product-quotient'],
  questionIds: ['q-1-1-01', 'q-1-1-02', 'q-1-1-03'],
  sources: [
    {
      kind: 'ib-guide',
      title: 'IB Mathematics: applications and interpretation guide (first assessment 2021)',
      locator: 'sub-topic 1.1',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
