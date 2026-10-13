import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '1-7-amortisation-annuities',
  subject: 'math',
  code: '1.7',
  title: { en: 'Amortisation and annuities', ru: 'Амортизация (погашение долга) и аннуитеты (Amortisation and annuities)' },
  papers: ['P1', 'P2', 'P3'],
  order: 7,
  minutes: 35,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    {
      en: 'I can calculate the equal payment for a loan, with the rate and the number of periods matched to the payment frequency',
      ru: 'Могу найти равный платёж по кредиту, согласовав ставку и число периодов с частотой платежей',
    },
    {
      en: 'I can find the balance of a loan after a given number of payments, and the interest in each payment',
      ru: 'Могу найти остаток долга после заданного числа платежей и проценты в каждом платеже',
    },
    {
      en: 'I can find the value of a savings annuity after regular deposits, and explain what the result means',
      ru: 'Могу найти стоимость накопительного аннуитета после регулярных взносов и объяснить смысл результата',
    },
  ],
  termIds: ['amortisation-loan', 'annuity', 'outstanding-balance'],
  formulaIds: ['annuity-payment', 'annuity-future-value', 'outstanding-balance-formula'],
  sims: ['math.tvm-lab'],
  questionIds: ['q-1-7-01', 'q-1-7-02', 'q-1-7-03'],
  sources: [
    {
      kind: 'web',
      title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
      locator: 'sub-topic 1.7',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
