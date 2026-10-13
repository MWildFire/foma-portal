import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'gni-per-capita',
    tex: '\\text{GNI per capita} = \\dfrac{\\text{GNI}}{\\text{population}}',
    name: { en: 'GNI per capita', ru: 'валовой национальный доход на душу населения (GNI per capita)' },
    meaning: {
      en: 'Gross national income divided by the population: the average income per person.',
      ru: 'Валовой национальный доход, делённый на численность населения: средний доход одного человека.',
    },
    when: {
      en: 'Comparing average incomes between countries, or turning a national income into a figure per person.',
      ru: 'Сравнение средних доходов между странами или пересчёт национального дохода в показатель на одного человека.',
    },
    syllabus: '4.8',
    units: 'currency per person, for example USD',
    example: {
      en: 'GNI of USD 45000 million and a population of 3.1 million: 45000 / 3.1 = USD 14516 per person.',
      ru: 'ВНД 45000 млн USD и население 3,1 млн человек: 45000 / 3,1 = 14516 USD на человека.',
    },
  },
];
