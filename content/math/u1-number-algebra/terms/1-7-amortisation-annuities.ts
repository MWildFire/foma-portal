import type { Term } from '../../../../src/contract/types';

const source = {
  kind: 'web' as const,
  title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
  locator: 'sub-topic 1.7',
  url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
};

export const terms: Term[] = [
  {
    id: 'amortisation-loan',
    term: { en: 'amortisation (loan repayment)', ru: 'погашение долга (amortisation (loan repayment))' },
    def: {
      en: 'Repaying a loan with equal regular payments. Each payment covers the interest due for that period, and the rest reduces the balance until it reaches zero at the end of the term.',
      ru: 'Погашение кредита равными регулярными платежами. Каждый платёж покрывает проценты за период, а остальная часть уменьшает остаток до нуля к концу срока.',
    },
    syllabus: '1.7',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'Interest is charged on the balance first. The balance after a payment is not simply the previous balance minus the payment.',
      ru: 'Сначала начисляются проценты на остаток. Остаток после платежа — это не просто предыдущий остаток минус платёж.',
    },
  },
  {
    id: 'annuity',
    term: { en: 'annuity', ru: 'аннуитет (annuity)' },
    def: {
      en: 'A sequence of equal payments made at regular intervals, with compound interest added between payments. It describes loan repayments and savings plans with regular deposits.',
      ru: 'Последовательность равных платежей через равные промежутки времени, между которыми начисляются сложные проценты. Описывает погашение кредита и накопления с регулярными взносами.',
    },
    syllabus: '1.7',
    papers: ['P1', 'P2', 'P3'],
    src: source,
  },
  {
    id: 'outstanding-balance',
    term: { en: 'outstanding balance', ru: 'остаток долга (outstanding balance)' },
    def: {
      en: 'The amount still owed on a loan after some payments have been made. It equals the loan compounded forward for those periods, less the value of the payments made.',
      ru: 'Сумма, которая всё ещё причитается по кредиту после нескольких платежей. Равна кредиту, начисленному вперёд за эти периоды, за вычетом стоимости выплаченных платежей.',
    },
    syllabus: '1.7',
    papers: ['P1', 'P2', 'P3'],
    src: source,
  },
];
