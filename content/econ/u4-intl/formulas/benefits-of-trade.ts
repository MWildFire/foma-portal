import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'opportunity-cost',
    tex: '\\text{OC} = \\dfrac{\\text{units of good Y given up}}{\\text{units of good X gained}}',
    name: { en: 'Opportunity cost of good X in terms of good Y', ru: 'Альтернативные издержки товара X в единицах товара Y (opportunity cost)' },
    meaning: {
      en: 'The units of good Y given up to gain one unit of good X, found by dividing the units of Y given up by the units of X gained.',
      ru: 'Количество товара Y, от которого отказываются, чтобы получить одну единицу товара X; находится делением количества Y, от которого отказались, на количество полученного X.',
    },
    when: {
      en: 'Comparing two producers in the cost of the same good, using their output combinations, to find the comparative advantage.',
      ru: 'Сравнение двух производителей по издержкам одного и того же товара по их комбинациям выпуска, чтобы найти сравнительное преимущество.',
    },
    syllabus: '4.1',
    units: 'units of Y per unit of X',
    example: {
      en: 'Country A can make 90 wheat or 60 cloth, so 60 cloth cost 90 wheat: the opportunity cost of one unit of cloth is 90 / 60 = 1.5 wheat.',
      ru: 'Страна A может произвести 90 единиц пшеницы или 60 единиц ткани, значит 60 единиц ткани стоят 90 единиц пшеницы: альтернативные издержки одной единицы ткани равны 90 / 60 = 1,5 пшеницы.',
    },
  },
];
