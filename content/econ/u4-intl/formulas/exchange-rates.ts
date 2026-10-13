import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'convert',
    tex: '\\text{Amount in B} = \\text{Amount in A} \\times \\text{exchange rate}',
    name: { en: 'Currency conversion', ru: 'пересчёт валюты (currency conversion)' },
    meaning: {
      en: 'Multiply the amount in currency A by the exchange rate, which is the number of units of currency B per unit of currency A.',
      ru: 'Умножьте сумму в валюте A на обменный курс, то есть на число единиц валюты B за одну единицу валюты A.',
    },
    when: {
      en: 'Any question that changes an amount from one currency into another at a given rate.',
      ru: 'Любой вопрос, в котором сумма переводится из одной валюты в другую по заданному курсу.',
    },
    syllabus: '4.5',
    units: 'currency units',
    example: {
      en: 'USD 500 at 3.6725 AED per USD: 500 x 3.6725 = AED 1836.25.',
      ru: 'USD 500 при курсе 3,6725 AED за USD: 500 x 3,6725 = AED 1836,25.',
    },
  },
];
