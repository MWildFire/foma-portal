import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'linear-system-2d',
    tex: '\\dfrac{dx}{dt}=ax+by,\\qquad \\dfrac{dy}{dt}=cx+dy',
    name: { en: 'Coupled linear system', ru: 'Связанная линейная система (Coupled linear system)' },
    meaning: {
      en: 'The rates of change of x and y are linear combinations of x and y. In matrix form, the derivative of the vector (x, y) equals A times (x, y), where A has entries a, b, c and d.',
      ru: 'Скорости изменения x и y — линейные комбинации x и y. В матричной записи производная вектора (x, y) равна A, умноженной на (x, y), где A содержит элементы a, b, c и d.',
    },
    when: {
      en: 'Two quantities change at rates that depend linearly on both of them, for example close to an equilibrium point.',
      ru: 'Две величины меняются со скоростями, линейно зависящими от обеих, например вблизи точки равновесия.',
    },
    syllabus: '5.17',
    inBooklet: false,
  },
  {
    id: 'trace-determinant-2d',
    tex: 'T=a+d,\\qquad D=ad-bc',
    name: { en: 'Trace and determinant of a 2 × 2 matrix', ru: 'След и определитель матрицы 2 × 2 (Trace and determinant of a 2 × 2 matrix)' },
    meaning: {
      en: 'T is the sum of the diagonal entries and D is the determinant of the coefficient matrix. Together they decide the type of the origin.',
      ru: 'T — сумма диагональных элементов, а D — определитель матрицы коэффициентов. Вместе они определяют тип начала координат.',
    },
    when: {
      en: 'Classifying the equilibrium point at the origin, before or instead of finding the eigenvalues.',
      ru: 'Классификация точки равновесия в начале координат до вычисления собственных значений или вместо него.',
    },
    syllabus: '5.17',
    inBooklet: false,
    example: {
      en: 'For a = 1, b = 2, c = 3 and d = 2: T = 3 and D = -4.',
      ru: 'При a = 1, b = 2, c = 3 и d = 2: T = 3 и D = -4.',
    },
  },
  {
    id: 'eigenvalues-trace-determinant',
    tex: '\\lambda^{2}-T\\lambda+D=0,\\qquad \\lambda=\\dfrac{T\\pm\\sqrt{T^{2}-4D}}{2}',
    name: { en: 'Eigenvalues of a 2 × 2 matrix', ru: 'Собственные значения матрицы 2 × 2 (Eigenvalues of a 2 × 2 matrix)' },
    meaning: {
      en: 'The characteristic equation and its roots. A negative value of T² − 4D gives complex eigenvalues.',
      ru: 'Характеристическое уравнение и его корни. Отрицательное значение T² − 4D даёт комплексные собственные значения.',
    },
    when: {
      en: 'Finding the eigenvalues, and with them the type and the stability of the equilibrium point.',
      ru: 'Нахождение собственных значений, а по ним — типа и устойчивости точки равновесия.',
    },
    syllabus: '5.17',
    inBooklet: false,
    example: {
      en: 'For T = -2 and D = 5: the eigenvalues are -1 plus or minus 2i.',
      ru: 'При T = -2 и D = 5 собственные значения равны -1 плюс-минус 2i.',
    },
  },
];
