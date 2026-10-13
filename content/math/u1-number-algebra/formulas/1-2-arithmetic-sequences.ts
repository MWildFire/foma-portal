import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'arithmetic-nth-term',
    tex: 'u_n=u_1+(n-1)d',
    name: { en: 'nth term of an arithmetic sequence', ru: 'n-й член арифметической последовательности' },
    meaning: {
      en: 'The nth term is the first term plus (n − 1) common differences.',
      ru: 'n-й член равен первому члену плюс (n − 1) разностей d.',
    },
    when: {
      en: 'Finding a particular term, or the term number at which a given value occurs.',
      ru: 'Поиск конкретного члена или номера члена, при котором появляется нужное значение.',
    },
    syllabus: '1.2',
    inBooklet: true, // not checked against the IB formula booklet
    example: {
      en: 'With u_1 = 5 and d = 3, the 10th term is u_10 = 5 + 9 × 3 = 32.',
      ru: 'При u_1 = 5 и d = 3 десятый член равен u_10 = 5 + 9 × 3 = 32.',
    },
  },
  {
    id: 'arithmetic-sum',
    tex: 'S_n=\\dfrac{n}{2}\\,(2u_1+(n-1)d)=\\dfrac{n}{2}\\,(u_1+u_n)',
    name: { en: 'Sum of the first n terms of an arithmetic series', ru: 'Сумма первых n членов арифметического ряда' },
    meaning: {
      en: 'The sum is the number of terms divided by 2, times the sum of the first and last terms.',
      ru: 'Сумма равна половине числа членов, умноженной на сумму первого и последнего членов.',
    },
    when: {
      en: 'Adding n terms when the first term and the common difference, or the last term, are known.',
      ru: 'Суммирование n членов, когда известны первый член и разность d (или последний член).',
    },
    syllabus: '1.2',
    inBooklet: true, // not checked against the IB formula booklet
    example: {
      en: 'With u_1 = 5, d = 3 and n = 10: S_10 = 10/2 × (2 × 5 + 9 × 3) = 185.',
      ru: 'При u_1 = 5, d = 3 и n = 10: S_10 = 10/2 × (2 × 5 + 9 × 3) = 185.',
    },
  },
  {
    id: 'arithmetic-common-difference',
    tex: 'd=u_{n+1}-u_n',
    name: { en: 'Common difference', ru: 'Разность арифметической последовательности' },
    meaning: {
      en: 'The same constant is added at each step, so subtracting any term from the next one gives d.',
      ru: 'На каждом шаге прибавляется одно и то же число, поэтому разность любого члена и следующего за ним равна d.',
    },
    when: {
      en: 'Testing whether a sequence is arithmetic, and finding d from two consecutive terms.',
      ru: 'Проверка, является ли последовательность арифметической, и поиск d по двум соседним членам.',
    },
    syllabus: '1.2',
    inBooklet: false,
    example: {
      en: 'For 7, 11, 15, 19 the common difference is 11 − 7 = 4.',
      ru: 'Для последовательности 7, 11, 15, 19 разность равна 11 − 7 = 4.',
    },
  },
];
