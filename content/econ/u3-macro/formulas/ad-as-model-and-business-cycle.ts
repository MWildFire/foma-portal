import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'output-gap',
    tex: '\\text{Output gap} = \\dfrac{Y_{actual} - Y_{potential}}{Y_{potential}} \\times 100',
    name: { en: 'Output gap (%)', ru: 'Разрыв выпуска, % (output gap)' },
    meaning: {
      en: 'The percentage difference between actual real GDP and potential output. Positive means an inflationary gap; negative means a deflationary gap.',
      ru: 'Процентная разница между фактическим реальным ВВП и потенциальным выпуском. Положительное значение означает инфляционный разрыв, отрицательное дефляционный.',
    },
    when: {
      en: 'Judging whether the economy is above or below its potential output, and by how much.',
      ru: 'Чтобы определить, выше или ниже потенциального выпуска находится экономика и насколько.',
    },
    syllabus: '3.2',
    units: '%',
    example: {
      en: 'Actual output AED 420 bn and potential output AED 400 bn: output gap = (420 - 400) / 400 x 100 = +5.0%.',
      ru: 'Фактический выпуск 420 млрд AED и потенциальный выпуск 400 млрд AED: разрыв выпуска = (420 - 400) / 400 x 100 = +5,0%.',
    },
  },
];
