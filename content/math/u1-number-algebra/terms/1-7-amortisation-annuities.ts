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
      "en": "Equal payments at equal intervals. For an ordinary savings annuity with deposit M at each period end, constant decimal rate i > 0 and N whole periods, FV = M((1+i)^N − 1)/i. A quoted period rate of r% means i = r/100, not i = r. At i = 0, FV = MN; beginning-period deposits have an extra factor (1+i).",
      "ru": "Равные платежи через равные промежутки времени. Для накопительного аннуитета со взносом M в конце каждого периода, постоянной ставкой i > 0 в долях единицы и целым числом периодов N: FV = M((1+i)^N − 1)/i. Если за период указано r%, то i = r/100, а не r. При i = 0 получаем FV = MN; взносы в начале периода дают дополнительный множитель (1+i)."
},
    syllabus: '1.7',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 7.2, p. 307' },
  },
  {
    id: 'outstanding-balance',
    term: { en: 'outstanding balance', ru: 'остаток долга (outstanding balance)' },
    def: {
      "en": "The amount still owed at a stated point in a loan. In this end-period model, add interest to the previous balance, then subtract the payment: B_next = (1+i)B − M. The balance decreases only when the payment exceeds that period’s interest; full repayment by the final period requires the appropriate payment and rounding convention.",
      "ru": "Сумма долга на указанный момент. В модели с платежом в конце периода сначала начисляют проценты на прежний остаток, затем вычитают платёж: B_next = (1+i)B − M. Остаток уменьшается, только если платёж больше процентов за период; для погашения к последнему периоду нужны подходящий платёж и согласованное округление."
},
    syllabus: '1.7',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 7.2, p. 308' },
  },
];
