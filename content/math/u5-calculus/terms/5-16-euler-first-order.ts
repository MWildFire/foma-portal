import type { Term } from '../../../../src/contract/types';
import { BOOK_TITLE } from '../../book';

export const terms: Term[] = [
  {
    id: 'euler-method-first-order',
    term: { en: "Euler's method", ru: "метод Эйлера (Euler's method)" },
    def: {
      en: 'A numerical method that approximates the solution of $dy/dx = f(x, y)$ from a starting point by repeating the step $y_{n+1} = y_n + h\\,f(x_n, y_n)$. Each step moves along the tangent at the start of the step.',
      ru: 'Численный метод, который приближает решение $dy/dx = f(x, y)$ от заданной начальной точки, повторяя шаг $y_{n+1} = y_n + h\\,f(x_n, y_n)$. Каждый шаг идёт вдоль касательной в начале шага.',
    },
    syllabus: '5.16',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 11.5, p. 522' },
    sim: 'math.direction-field-lab',
  },
  {
    id: 'euler-step-length-first-order',
    term: { en: 'step length h', ru: 'шаг h (step length h)' },
    def: {
      en: 'The fixed increase in x at each step of Euler’s method. Reaching the same x with a smaller h needs more steps.',
      ru: 'Фиксированное приращение x на каждом шаге метода Эйлера. Чтобы прийти к тому же x при меньшем h, нужно больше шагов.',
    },
    syllabus: '5.16',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 11.5, p. 522' },
    pitfall: {
      en: 'h is the change in x, not in y. Keep it the same for every step, and count the steps from the length of the interval.',
      ru: 'h — это изменение x, а не y. Оставляйте его одинаковым на каждом шаге и считайте шаги по длине отрезка.',
    },
  },
  {
    id: 'euler-coupled-system',
    term: { en: "Euler's method for a coupled system", ru: 'метод Эйлера для связанной системы (Euler\'s method for a coupled system)' },
    def: {
      en: 'Euler’s method applied to $dx/dt = f_1(x, y, t)$ and $dy/dt = f_2(x, y, t)$ at the same time. Both new values are found from the values at the start of the step.',
      ru: 'Метод Эйлера, применённый одновременно к $dx/dt = f_1(x, y, t)$ и $dy/dt = f_2(x, y, t)$. Оба новых значения находятся по значениям в начале шага.',
    },
    syllabus: '5.16',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 12.4, p. 556' },
    pitfall: {
      en: 'Do not use the new x when you calculate the new y in the same step.',
      ru: 'Не используйте новое значение x при вычислении нового y на том же шаге.',
    },
  },
];
