import type { Term } from '../../../../src/contract/types';

const source = {
  kind: 'web' as const,
  title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
  locator: 'sub-topic 5.7',
  url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
};

export const terms: Term[] = [
  {
    id: 'optimisation-in-context',
    term: { en: 'optimisation in context', ru: 'оптимизация в контексте (optimisation in context)' },
    def: {
      en: 'Finding the largest or smallest value of a quantity in a practical situation, by writing the quantity as a function and using calculus. The context also sets which values of the variable are allowed.',
      ru: 'Поиск наибольшего или наименьшего значения величины в практической ситуации: величина записывается как функция, и далее используется дифференцирование. Контекст также задаёт, какие значения переменной допустимы.',
    },
    syllabus: '5.7',
    papers: ['P1', 'P2', 'P3'],
    src: source,
  },
  {
    id: 'objective-function',
    term: { en: 'objective function', ru: 'целевая функция (objective function)' },
    def: {
      en: 'The function of one variable that is to be maximised or minimised. Other variables are removed from it using the constraints.',
      ru: 'Функция одной переменной, которую нужно максимизировать или минимизировать. Остальные переменные исключаются из неё с помощью ограничений.',
    },
    syllabus: '5.7',
    papers: ['P1', 'P2', 'P3'],
    src: source,
  },
  {
    id: 'optimisation-constraint',
    term: { en: 'constraint', ru: 'ограничение (constraint)' },
    def: {
      en: 'A condition that links the variables of a problem, such as a fixed length of fencing or a fixed size of sheet. It lets you write one variable in terms of another.',
      ru: 'Условие, которое связывает переменные задачи, например фиксированная длина ограждения или фиксированный размер листа. Оно позволяет выразить одну переменную через другую.',
    },
    syllabus: '5.7',
    papers: ['P1', 'P2', 'P3'],
    src: source,
  },
  {
    id: 'feasible-domain',
    term: { en: 'feasible domain', ru: 'допустимая область (feasible domain)' },
    def: {
      en: 'The set of values of the variable that make sense in the context, for example lengths that must be positive. A stationary point outside this set is rejected.',
      ru: 'Множество значений переменной, которые имеют смысл в контексте, например положительные длины. Стационарная точка вне этого множества отбрасывается.',
    },
    syllabus: '5.7',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'A stationary value outside the feasible domain is not an answer, even though the gradient is zero there.',
      ru: 'Стационарное значение вне допустимой области не является ответом, даже если градиент в нём равен нулю.',
    },
  },
];
