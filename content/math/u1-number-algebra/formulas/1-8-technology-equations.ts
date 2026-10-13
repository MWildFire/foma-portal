import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'linear-system-three-unknowns',
    tex: '\\begin{cases}a_{1}x+b_{1}y+c_{1}z=d_{1}\\\\a_{2}x+b_{2}y+c_{2}z=d_{2}\\\\a_{3}x+b_{3}y+c_{3}z=d_{3}\\end{cases}',
    name: { en: 'System of three linear equations', ru: 'Система трёх линейных уравнений (System of three linear equations)' },
    meaning: {
      en: 'Three linear equations in the unknowns x, y and z. A solution gives values of x, y and z that satisfy all three equations at once.',
      ru: 'Три линейных уравнения с неизвестными x, y и z. Решение — значения x, y и z, которые одновременно удовлетворяют всем трём уравнениям.',
    },
    when: {
      en: 'A context gives three conditions on three unknowns, such as three prices or three amounts.',
      ru: 'В задаче заданы три условия для трёх неизвестных, например три цены или три количества.',
    },
    syllabus: '1.8',
    inBooklet: false,
  },
  {
    id: 'polynomial-degree-roots',
    tex: 'p(x)=a_{n}x^{n}+a_{n-1}x^{n-1}+\\cdots+a_{1}x+a_{0}=0,\\qquad a_{n}\\neq 0',
    name: { en: 'Polynomial equation of degree n', ru: 'Многочленное уравнение степени n (Polynomial equation of degree n)' },
    meaning: {
      en: 'A polynomial equation of degree n has at most n real roots. These are the x-intercepts of the graph of $y=p(x)$.',
      ru: 'Многочленное уравнение степени n имеет не более n действительных корней. Это точки пересечения графика $y=p(x)$ с осью x.',
    },
    when: {
      en: 'Before using technology, to decide how many roots to look for, and to check that a list of roots is complete.',
      ru: 'До использования технологии — чтобы понять, сколько корней искать, и проверить, что список корней полный.',
    },
    syllabus: '1.8',
    inBooklet: false,
  },
  {
    id: 'quadratic-formula-roots',
    tex: 'x=\\dfrac{-b\\pm\\sqrt{b^{2}-4ac}}{2a},\\qquad a\\neq 0',
    name: { en: 'Quadratic formula', ru: 'Формула корней квадратного уравнения (Quadratic formula)' },
    meaning: {
      en: 'The roots of $ax^{2}+bx+c=0$. When $b^{2}-4ac$ is negative, the roots are not real.',
      ru: 'Корни уравнения $ax^{2}+bx+c=0$. Если $b^{2}-4ac$ отрицательно, корни не действительные.',
    },
    when: {
      en: 'Solving a quadratic polynomial equation exactly, or checking a root found with technology.',
      ru: 'Точное решение квадратного уравнения или проверка корня, найденного с помощью технологии.',
    },
    syllabus: '1.8',
    inBooklet: false,
    example: {
      en: 'Example: for x^2 - 5x + 2 = 0, a = 1, b = -5 and c = 2, so x = (5 ± √17)/2.',
      ru: 'Пример: для x^2 - 5x + 2 = 0 имеем a = 1, b = -5, c = 2, поэтому x = (5 ± √17)/2.',
    },
  },
];
