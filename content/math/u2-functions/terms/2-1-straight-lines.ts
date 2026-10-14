import type { Term } from '../../../../src/contract/types';
import { BOOK_TITLE } from '../../book';

export const terms: Term[] = [
  {
    id: 'gradient-straight-line',
    term: { en: 'gradient of a straight line', ru: 'угловой коэффициент прямой (gradient of a straight line)' },
    def: {
      en: 'The ratio of the change in y to the change in x between any two points of the line: $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$. It gives both the steepness and the direction of the line.',
      ru: 'Отношение изменения y к изменению x между любыми двумя точками прямой: $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$. Показывает и крутизну, и направление прямой.',
    },
    syllabus: '2.1',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 3.2, p. 87' },
    pitfall: {
      en: 'The gradient is rise over run, so the change in y goes on top. A vertical line has no gradient.',
      ru: 'Угловой коэффициент — это подъём над горизонтальным смещением, поэтому изменение по y пишется в числителе. У вертикальной прямой углового коэффициента нет.',
    },
  },
  {
    id: 'gradient-intercept-form',
    term: { en: 'gradient–intercept form', ru: 'уравнение в виде y = mx + c (gradient–intercept form)' },
    def: {
      en: 'The form $y = mx + c$ of a straight line, where $m$ is the gradient and $c$ is the y-intercept, the value of $y$ when $x = 0$.',
      ru: 'Вид уравнения прямой $y = mx + c$, где $m$ — угловой коэффициент, а $c$ — пересечение с осью y, то есть значение $y$ при $x = 0$.',
    },
    syllabus: '2.1',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 3.2, p. 87' },
    pitfall: {
      en: 'The constant c is where the line meets the y-axis. It is not the x-intercept.',
      ru: 'Свободный член c — точка пересечения с осью y, а не с осью x.',
    },
  },
  {
    id: 'perpendicular-lines',
    term: { en: 'perpendicular lines', ru: 'перпендикулярные прямые (perpendicular lines)' },
    def: {
      en: 'Two lines that meet at a right angle. For two non-vertical lines this happens exactly when $m_1 \\times m_2 = -1$, so each gradient is the negative reciprocal of the other.',
      ru: 'Две прямые, пересекающиеся под прямым углом. Для двух невертикальных прямых это выполняется тогда и только тогда, когда $m_1 \\times m_2 = -1$, то есть каждый угловой коэффициент — отрицательная обратная величина другого.',
    },
    syllabus: '2.1',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 3.2, p. 93' },
    pitfall: {
      en: 'The perpendicular gradient is the negative reciprocal, not just the opposite sign: $-m$ is wrong unless $m = \\pm 1$.',
      ru: 'Перпендикулярный угловой коэффициент — отрицательная обратная величина, а не просто противоположный знак: $-m$ неверно, если только $m = \\pm 1$.',
    },
  },
];
