import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'gini',
    tex: 'G = \\dfrac{A}{A + B}',
    name: { en: 'Gini coefficient', ru: 'Коэффициент Джини' },
    meaning: {
      en: 'Area A (between the line of equality and the Lorenz curve) divided by the total area under the line of equality, A + B. Zero denotes equality; one is the ideal limit of concentration. For N equally weighted observations, the uncorrected finite-sample maximum is (N−1)/N.',
      ru: 'Площадь A (между линией равенства и кривой Лоренца), делённая на общую площадь под линией равенства, A + B. Ноль означает равенство, единица — идеальный предел концентрации. Для N наблюдений с равными весами максимум Джини без поправки равен (N−1)/N.',
    },
    when: {
      en: 'The school Lorenz model assumes nonnegative incomes and a positive total. Use a common population and definition for policy comparisons; crossing curves can have different Ginis without Lorenz dominance.',
      ru: 'Школьная модель Лоренца предполагает неотрицательные доходы и положительную общую сумму. Для сравнения политики нужны общая совокупность и определение дохода; при пересечении кривых различие Джини не доказывает доминирования по Лоренцу.',
    },
    syllabus: '3.4',
    units: 'ratio (0 to 1)',
    example: {
      en: 'With A = 1000 and B = 4000, G = 1000 / 5000 = 0.20.',
      ru: 'При A = 1000 и B = 4000 коэффициент G = 1000 / 5000 = 0,20.',
    },
  },
];
