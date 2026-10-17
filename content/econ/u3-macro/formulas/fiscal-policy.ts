import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'budget-balance',
    tex: '\\text{Budget balance} = T - G',
    name: { en: 'Budget balance', ru: 'Бюджетный баланс (budget balance)' },
    meaning: {
      en: 'Total government revenue T minus total expenditure G: positive is surplus, negative is deficit. If only taxes are supplied, the toy exercise assumes no other revenues; budget expenditure includes transfers/interest, unlike the purchases-only G in GDP.',
      ru: 'Все доходы бюджета T минус все расходы G: положительный итог — профицит, отрицательный — дефицит. Если даны только налоги, учебная задача предполагает отсутствие других доходов; расходы бюджета включают трансферты и проценты, в отличие от закупок G в ВВП.',
    },
    when: {
      en: 'Any question about the government budget in one year, to find out whether it runs a surplus or a deficit.',
      ru: 'Любой вопрос о государственном бюджете за один год: есть профицит или дефицит.',
    },
    syllabus: '3.6',
    units: 'AED million',
    example: {
      en: 'Tax revenue AED 300 million and spending AED 340 million: budget balance = 300 - 340 = -40, a deficit of AED 40 million.',
      ru: 'Налоговые поступления 300 млн AED и расходы 340 млн AED: баланс = 300 - 340 = -40, дефицит 40 млн AED.',
    },
  },
];
