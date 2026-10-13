import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'annuity-payment',
    tex: 'M=\\dfrac{PV\\,i}{1-(1+i)^{-N}}',
    name: { en: 'Loan repayment (equal instalment)', ru: 'Платёж по кредиту (равный платёж)' },
    meaning: {
      en: '$M$ is the equal payment per period that repays a loan $PV$ over $N$ periods, at interest rate $i$ per period.',
      ru: '$M$ — равный платёж за период, который погашает кредит $PV$ за $N$ периодов при ставке $i$ за период.',
    },
    when: {
      en: 'Finding the equal instalment for a loan, with $i = \\frac{r}{100k}$ and $N = kn$.',
      ru: 'Поиск равного платежа по кредиту при $i = \\frac{r}{100k}$ и $N = kn$.',
    },
    syllabus: '1.7',
    inBooklet: false,
    example: {
      en: 'With PV = 60000, i = 6/1200 and N = 60: M = 1159.97, to 2 decimal places.',
      ru: 'При PV = 60000, i = 6/1200 и N = 60: M = 1159,97 с точностью до 2 знаков.',
    },
  },
  {
    id: 'annuity-future-value',
    tex: 'FV=M\\,\\dfrac{(1+i)^{N}-1}{i}',
    name: { en: 'Future value of regular deposits', ru: 'Будущая стоимость регулярных взносов' },
    meaning: {
      en: '$FV$ is the value after $N$ periods of equal deposits $M$ made at the end of each period, with interest $i$ per period.',
      ru: '$FV$ — стоимость через $N$ периодов при равных взносах $M$ в конце каждого периода и ставке $i$ за период.',
    },
    when: {
      en: 'A savings plan with equal deposits made at the end of each period.',
      ru: 'Накопительный план с равными взносами в конце каждого периода.',
    },
    syllabus: '1.7',
    inBooklet: false,
    example: {
      en: 'With M = 500, i = 4.2/1200 and N = 120: FV = 74407, to the nearest dirham.',
      ru: 'При M = 500, i = 4,2/1200 и N = 120: FV = 74407 с округлением до ближайшего дирхама.',
    },
  },
  {
    id: 'outstanding-balance-formula',
    tex: 'B_j=PV\\,(1+i)^{j}-M\\,\\dfrac{(1+i)^{j}-1}{i}',
    name: { en: 'Balance after j payments', ru: 'Остаток долга после j платежей' },
    meaning: {
      en: '$B_j$ is the balance after $j$ equal payments $M$ on a loan $PV$, at interest rate $i$ per period.',
      ru: '$B_j$ — остаток долга после $j$ равных платежей $M$ по кредиту $PV$ при ставке $i$ за период.',
    },
    when: {
      en: 'Finding the balance part-way through the term, without writing out the whole amortisation table.',
      ru: 'Поиск остатка долга в середине срока без построения полной таблицы погашения.',
    },
    syllabus: '1.7',
    inBooklet: false,
    example: {
      en: 'With PV = 60000, i = 6/1200, M = 1159.97 and j = 24: B24 = 38129.33, to 2 decimal places.',
      ru: 'При PV = 60000, i = 6/1200, M = 1159,97 и j = 24: B24 = 38129,33 с точностью до 2 знаков.',
    },
  },
];
