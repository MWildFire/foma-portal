import type { Term } from '../../../../src/contract/types';
import { BOOK_TITLE } from '../../book';

export const terms: Term[] = [
  {
    id: 'complex-cartesian-form',
    term: { en: 'Cartesian form of a complex number', ru: 'алгебраическая (декартова) форма комплексного числа (Cartesian form of a complex number)' },
    def: {
      en: 'Writing a complex number as $z = a + bi$, where $a$ and $b$ are real and $i^{2} = -1$. The real part is $\\text{Re}\\,z = a$ and the imaginary part is $\\text{Im}\\,z = b$.',
      ru: 'Запись комплексного числа в виде $z = a + bi$, где $a$ и $b$ действительны и $i^{2} = -1$. Действительная часть равна $\\text{Re}\\,z = a$, мнимая часть равна $\\text{Im}\\,z = b$.',
    },
    syllabus: '1.12',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 8.4, p. 358' },
    pitfall: {
      en: 'The imaginary part is the real number b, not bi. For z = 2 + 3i, Im z = 3.',
      ru: 'Мнимая часть — это действительное число b, а не bi. Для z = 2 + 3i имеем Im z = 3.',
    },
  },
  {
    id: 'argand-diagram',
    term: { en: 'Argand diagram', ru: 'диаграмма Аргана (Argand diagram)' },
    def: {
      en: 'A plane in which the complex number $a + bi$ is plotted as the point $(a, b)$, with the real axis horizontal and the imaginary axis vertical.',
      ru: 'Плоскость, на которой комплексное число $a + bi$ отмечено точкой $(a, b)$: действительная ось горизонтальна, мнимая ось вертикальна.',
    },
    syllabus: '1.12',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 8.4, p. 356' },
    sim: 'math.complex-plane-lab',
    pitfall: {
      en: 'Plot the imaginary part on the vertical axis: z = 2 + 3i is the point (2, 3), not (3, 2).',
      ru: 'Мнимая часть откладывается по вертикали: z = 2 + 3i соответствует точке (2, 3), а не (3, 2).',
    },
  },
  {
    id: 'complex-conjugate',
    term: { en: 'complex conjugate', ru: 'сопряжённое комплексное число (complex conjugate)' },
    def: {
      en: 'For $z = a + bi$, the complex conjugate is $\\bar{z} = a - bi$. Multiplying $z$ by $\\bar{z}$ gives the real number $a^{2} + b^{2}$.',
      ru: 'Для $z = a + bi$ сопряжённое число равно $\\bar{z} = a - bi$. Произведение $z\\bar{z}$ равно действительному числу $a^{2} + b^{2}$.',
    },
    syllabus: '1.12',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 8.3, p. 354' },
    pitfall: {
      en: 'Only the sign of the imaginary part changes. The real part stays the same.',
      ru: 'Меняется только знак мнимой части, действительная часть остаётся прежней.',
    },
  },
  {
    id: 'complex-modulus',
    term: { en: 'modulus of a complex number', ru: 'модуль комплексного числа (modulus of a complex number)' },
    def: {
      en: 'The distance from the origin to $z$ on the Argand diagram: $|z| = \\sqrt{a^{2} + b^{2}}$ for $z = a + bi$. The modulus is never negative.',
      ru: 'Расстояние от начала координат до точки $z$ на диаграмме Аргана: $|z| = \\sqrt{a^{2} + b^{2}}$ для $z = a + bi$. Модуль никогда не бывает отрицательным.',
    },
    syllabus: '1.12',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 8.4, p. 357' },
    pitfall: {
      en: 'The modulus is not a + b. Square each part, add the squares, then take the square root.',
      ru: 'Модуль — это не a + b. Возведите каждую часть в квадрат, сложите квадраты и извлеките корень.',
    },
  },
];
