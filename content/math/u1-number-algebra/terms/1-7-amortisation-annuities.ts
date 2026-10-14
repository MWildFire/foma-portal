import type { Term } from '../../../../src/contract/types';
import { BOOK_TITLE } from '../../book';

export const terms: Term[] = [
  {
    id: 'amortisation-loan',
    term: { en: 'amortisation (loan repayment)', ru: 'погашение долга (amortisation (loan repayment))' },
    def: {
      en: 'Repaying a loan with a constant payment $P$ in each of $n$ periods, with interest compounded at a fixed rate $r\\%$ per period. Each payment covers the interest due for that period, and the rest reduces the balance until it reaches zero at the end of the term.',
      ru: 'Погашение кредита постоянным платежом $P$, который вносится в каждом из $n$ периодов при начислении процентов по фиксированной ставке $r\\%$ за период. Каждый платёж покрывает проценты за период, а остальная часть уменьшает остаток до нуля к концу срока.',
    },
    syllabus: '1.7',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 7.2, p. 307' },
    pitfall: {
      en: 'Interest is charged on the balance first. The balance after a payment is not simply the previous balance minus the payment.',
      ru: 'Сначала начисляются проценты на остаток. Остаток после платежа — это не просто предыдущий остаток минус платёж.',
    },
  },
  {
    id: 'annuity',
    term: { en: 'annuity', ru: 'аннуитет (annuity)' },
    def: {
      en: 'A constant investment $P$ made in each of $n$ periods, with interest compounded at a fixed rate $r\\%$ per period. Its future value is $FV = A\\dfrac{(1+r)^{n}-1}{r}$, where $A$ is the amount invested in each period.',
      ru: 'Постоянный вклад $P$, который делается в каждом из $n$ периодов при начислении процентов по фиксированной ставке $r\\%$ за период. Его будущая стоимость равна $FV = A\\dfrac{(1+r)^{n}-1}{r}$, где $A$ — сумма, вносимая в каждом периоде.',
    },
    syllabus: '1.7',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 7.2, p. 307' },
  },
  {
    id: 'outstanding-balance',
    term: { en: 'outstanding balance', ru: 'остаток долга (outstanding balance)' },
    def: {
      en: 'The amount still owed on a loan after some payments have been made. Each period interest is added to the amount owed and the payment is then subtracted, so the remaining loan falls step by step to zero at the end of the term.',
      ru: 'Сумма, которая всё ещё причитается по кредиту после нескольких платежей. В каждом периоде к сумме долга прибавляются проценты, затем из неё вычитается платёж, поэтому остаток долга уменьшается шаг за шагом и становится нулём к концу срока.',
    },
    syllabus: '1.7',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 7.2, p. 308' },
  },
];
