import type { Term } from '../../../../src/contract/types';
import { BOOK_TITLE } from '../../book';

export const terms: Term[] = [
  {
    id: 'limit-of-function',
    term: { en: 'limit of a function', ru: 'предел функции (limit of a function)' },
    def: {
      en: 'The value that $f(x)$ gets arbitrarily close to as $x$ gets arbitrarily close to $a$, written $\\lim_{x \\to a} f(x)$. The value of the function at $x = a$ itself may be different, or undefined.',
      ru: 'Значение, к которому $f(x)$ приближается сколь угодно близко, когда $x$ приближается к $a$. Записывается $\\lim_{x \\to a} f(x)$. Значение самой функции при $x = a$ может быть другим или не определено.',
    },
    syllabus: '5.1',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 10.1, p. 430' },
    pitfall: {
      en: 'A limit describes what happens near a value. Substituting the value directly can give 0/0, which says nothing about the limit.',
      ru: 'Предел описывает поведение рядом со значением. Прямая подстановка может дать 0/0, и это ничего не говорит о пределе.',
    },
  },
  {
    id: 'derivative-gradient-function',
    term: { en: 'gradient function (derivative)', ru: 'функция градиента, производная (gradient function (derivative))' },
    def: {
      en: 'The function $f\'(x)$ that returns the slope of the curve $y = f(x)$ at each $x$. It is found as the limit of the slope of a chord when the chord\'s horizontal width shrinks to zero.',
      ru: 'Функция $f\'(x)$, которая даёт градиент кривой $y = f(x)$ в каждой точке $x$. Это предел градиента хорды, когда ширина хорды стремится к нулю.',
    },
    syllabus: '5.1',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 10.1, p. 430' },
    sim: 'math.tangent-optimisation-lab',
  },
  {
    id: 'derivative-rate-of-change',
    term: { en: 'derivative as a rate of change', ru: 'производная как скорость изменения (derivative as a rate of change)' },
    def: {
      en: 'The instantaneous rate of change of one quantity with respect to another, which is the gradient of the curve that links them. It is found as the limit of the average rate of change over an interval that shrinks to a point. Its units are the units of $y$ divided by the units of $x$.',
      ru: 'Мгновенная скорость изменения одной величины относительно другой, равная градиенту кривой, которая их связывает. Находится как предел средней скорости изменения на промежутке, стягивающемся в точку. Её единицы равны единицам $y$, делённым на единицы $x$.',
    },
    syllabus: '5.1',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 10.1, p. 428' },
    pitfall: {
      en: 'Always give the units with a rate, for example litres per minute, not just a number.',
      ru: 'Всегда указывайте единицы скорости, например литры в минуту, а не только число.',
    },
  },
];
