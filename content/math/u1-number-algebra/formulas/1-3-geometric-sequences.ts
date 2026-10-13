import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'geometric-nth-term',
    tex: 'u_n=u_1 r^{\\,n-1}',
    name: { en: 'nth term of a geometric sequence', ru: 'n-й член геометрической последовательности (nth term of a geometric sequence)' },
    meaning: {
      en: 'The nth term is the first term multiplied by $r$ a total of (n − 1) times.',
      ru: 'n-й член равен первому члену, умноженному на $r$ в степени (n − 1).',
    },
    when: {
      en: 'Finding a particular term, or the number of steps needed to reach a given value.',
      ru: 'Поиск конкретного члена или числа шагов, нужных для достижения заданного значения.',
    },
    syllabus: '1.3',
    inBooklet: true, // not checked against the IB formula booklet
    example: {
      en: 'With u_1 = 8 and r = 0.5, the 4th term is u_4 = 8 × 0.5^3 = 1.',
      ru: 'При u_1 = 8 и r = 0.5 четвёртый член равен u_4 = 8 × 0.5^3 = 1.',
    },
  },
  {
    id: 'geometric-sum',
    tex: 'S_n=\\dfrac{u_1(r^{n}-1)}{r-1}=\\dfrac{u_1(1-r^{n})}{1-r},\\quad r\\ne 1',
    name: { en: 'Sum of the first n terms of a geometric series', ru: 'Сумма первых n членов геометрического ряда (Sum of the first n terms of a geometric series)' },
    meaning: {
      en: 'The sum is the first term times (1 − r^n), divided by (1 − r), for r not equal to 1.',
      ru: 'Сумма равна первому члену, умноженному на (1 − r^n) и делённому на (1 − r), при r не равном 1.',
    },
    when: {
      en: 'Adding n terms of a geometric sequence, for example a total over several periods.',
      ru: 'Суммирование n членов геометрической последовательности, например общего итога за несколько периодов.',
    },
    syllabus: '1.3',
    inBooklet: true, // not checked against the IB formula booklet
    example: {
      en: 'With u_1 = 8 and r = 0.5, S_4 = 8 × (1 − 0.5^4) / (1 − 0.5) = 15.',
      ru: 'При u_1 = 8 и r = 0.5 имеем S_4 = 8 × (1 − 0.5^4) / (1 − 0.5) = 15.',
    },
  },
  {
    id: 'geometric-common-ratio',
    tex: 'r=\\dfrac{u_{n+1}}{u_n}',
    name: { en: 'Common ratio', ru: 'Знаменатель геометрической последовательности (Common ratio)' },
    meaning: {
      en: 'Each term is r times the previous term, so dividing a term by the term before it gives r.',
      ru: 'Каждый член в r раз больше предыдущего, поэтому деление члена на предыдущий даёт r.',
    },
    when: {
      en: 'Testing whether a sequence is geometric, and finding r from two consecutive terms.',
      ru: 'Проверка, является ли последовательность геометрической, и поиск r по двум соседним членам.',
    },
    syllabus: '1.3',
    inBooklet: false,
    example: {
      en: 'For 2, 1.2, 0.72 the common ratio is 1.2 / 2 = 0.6.',
      ru: 'Для последовательности 2, 1,2, 0,72 знаменатель равен 1,2 / 2 = 0,6.',
    },
  },
];
