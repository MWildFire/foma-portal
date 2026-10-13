import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-1-7-01',
    subject: 'math',
    topicIds: ['1-7-amortisation-annuities'],
    paper: 'P1',
    marks: 4,
    command: 'Find',
    prompt: {
      en: 'A savings plan requires a deposit of AED 500 at the end of each month. The account pays 4.2% per year, compounded monthly. Find the value of the account after 10 years, giving your answer to the nearest dirham.',
      ru: 'По плану накоплений в конце каждого месяца вносится 500 AED. Счёт выплачивает 4,2% годовых с ежемесячным начислением. Найдите стоимость счёта через 10 лет, ответ округлите до ближайшего дирхама.',
    },
    markscheme: {
      en: 'M1: rate per month i = 4.2/1200. M1: N = 120 deposits, so use the future value of an annuity. M1: value = 500 × ((1 + i)^120 − 1) / i. A1: AED 74407 (to the nearest dirham).',
      ru: 'M1: ставка за месяц i = 4,2/1200. M1: N = 120 взносов, значит, используется будущая стоимость аннуитета. M1: стоимость = 500 × ((1 + i)^120 − 1) / i. A1: 74407 AED (до ближайшего дирхама).',
    },
    answer: '74407',
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'q-1-7-02',
    subject: 'math',
    topicIds: ['1-7-amortisation-annuities'],
    paper: 'P1',
    marks: 3,
    command: 'Calculate',
    prompt: {
      en: 'A car loan of AED 120,000 is repaid by 36 equal monthly instalments. The interest rate is 4.8% per year, compounded monthly. Calculate the outstanding balance of the loan after 12 instalments, giving your answer to the nearest dirham.',
      ru: 'Автокредит 120 000 AED погашается 36 равными ежемесячными платежами. Процентная ставка составляет 4,8% годовых с ежемесячным начислением. Вычислите остаток долга после 12 платежей, ответ округлите до ближайшего дирхама.',
    },
    markscheme: {
      en: 'M1: instalment M = 120000 × i / (1 − (1 + i)^(−36)), with i = 4.8/1200. M1: balance = 120000 × (1 + i)^12 − M × ((1 + i)^12 − 1) / i. A1: AED 81900 (to the nearest dirham).',
      ru: 'M1: платёж M = 120000 × i / (1 − (1 + i)^(−36)), где i = 4,8/1200. M1: остаток = 120000 × (1 + i)^12 − M × ((1 + i)^12 − 1) / i. A1: 81900 AED (до ближайшего дирхама).',
    },
    answer: '81900',
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'q-1-7-03',
    subject: 'math',
    topicIds: ['1-7-amortisation-annuities'],
    paper: 'P2',
    marks: 14,
    command: 'Find',
    prompt: {
      en: 'A flat in Dubai is bought with a loan of AED 850,000, repaid by 300 equal monthly instalments over 25 years. The interest rate is 3.6% per year, compounded monthly.\n\n(a) Find the monthly instalment, giving your answer to 2 decimal places. [3]\n\n(b) Find the interest charged in the first instalment, and the outstanding balance after the first instalment, giving each answer to 2 decimal places. [3]\n\n(c) Find the outstanding balance after 10 years (120 instalments), giving your answer to 2 decimal places. [3]\n\n(d) Find the percentage of the first instalment that pays the interest, giving your answer to 1 decimal place. [2]\n\n(e) Comment on how the share of each instalment that pays interest changes over the life of the loan, and explain why the balance falls slowly at first. [3]',
      ru: 'Квартира в Дубае покупается с кредитом 850 000 AED, который погашается 300 равными ежемесячными платежами в течение 25 лет. Процентная ставка составляет 3,6% годовых с ежемесячным начислением.\n\n(a) Найдите ежемесячный платёж, ответ запишите с 2 знаками после запятой. [3]\n\n(b) Найдите проценты, начисленные по первому платежу, и остаток долга после первого платежа; каждый ответ запишите с 2 знаками после запятой. [3]\n\n(c) Найдите остаток долга через 10 лет (после 120 платежей), ответ запишите с 2 знаками после запятой. [3]\n\n(d) Найдите процент первого платежа, который идёт на проценты, ответ запишите с точностью до 1 знака после запятой. [2]\n\n(e) Прокомментируйте, как меняется доля каждого платежа, идущая на проценты, в течение срока кредита, и объясните, почему остаток вначале уменьшается медленно. [3]',
    },
    markscheme: {
      en: '(a) M1: rate per month i = 3.6/1200 and N = 300. M1: M = 850000 × i / (1 − (1 + i)^(−300)). A1: 4301.02 (to 2 decimal places).\n(b) M1: interest = 850000 × i. A1: 2550.00. A1: balance = 850000 − (M − 2550) = 848248.98 (to 2 decimal places).\n(c) M1: rate per month i = 3.6/1200 and 120 instalments paid. M1: balance = 850000 × (1 + i)^120 − M × ((1 + i)^120 − 1) / i, with M from part (a). A1: 597527.47 (to 2 decimal places).\n(d) M1: percentage = 2550 / M × 100. A1: 59.3 (to 1 decimal place).\n(e) R1: the interest share falls each month, because each payment reduces the balance and so reduces the interest charged on it. R1: early payments are mostly interest on a large balance, so the balance falls slowly at first. A1: a clear comment that links these points to the loan.',
      ru: '(a) M1: ставка за месяц i = 3,6/1200, N = 300. M1: M = 850000 × i / (1 − (1 + i)^(−300)). A1: 4301,02 (с точностью до 2 знаков после запятой).\n(b) M1: проценты = 850000 × i. A1: 2550,00. A1: остаток = 850000 − (M − 2550) = 848248,98 (с точностью до 2 знаков после запятой).\n(c) M1: ставка за месяц i = 3,6/1200 и 120 выплаченных платежей. M1: остаток = 850000 × (1 + i)^120 − M × ((1 + i)^120 − 1) / i, где M — платёж из части (a). A1: 597527,47 (с точностью до 2 знаков после запятой).\n(d) M1: процент = 2550 / M × 100. A1: 59,3 (с точностью до 1 знака после запятой).\n(e) R1: доля процентов в платеже снижается каждый месяц, потому что каждый платёж уменьшает остаток и, значит, проценты на него. R1: ранние платежи в основном идут на проценты с большого остатка, поэтому остаток вначале уменьшается медленно. A1: ясный комментарий, связывающий эти моменты с кредитом.',
    },
    answer: '4301.02; 2550.00; 848248.98; 597527.47; 59.3',
    origin: 'original',
    minutes: 14,
  },
];
