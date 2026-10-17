import type { Term } from '../../../../src/contract/types';
import { BOOK_TITLE } from '../../book';

export const terms: Term[] = [
  {
    id: 'modulus-argument-form',
    term: { en: 'modulus–argument form', ru: 'тригонометрическая форма (modulus–argument form)' },
    def: {
      en: 'For nonzero z, the form $z = r(\\cos\\theta + i\\sin\\theta)$, written $r\\,\\text{cis}\\,\\theta$, where $r = |z|$ and $\\theta = \\arg z$. Here $\\text{cis}\\,\\theta = \\cos\\theta + i\\sin\\theta$.',
      ru: 'Для ненулевого z форма $z = r(\\cos\\theta + i\\sin\\theta)$, записываемая как $r\\,\\text{cis}\\,\\theta$, где $r = |z|$ и $\\theta = \\arg z$. Здесь $\\text{cis}\\,\\theta = \\cos\\theta + i\\sin\\theta$.',
    },
    syllabus: '1.13',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 8.4, p. 359' },
    sim: 'math.complex-plane-lab',
    pitfall: {
      en: 'Keep θ in one unit throughout. The exponential form needs radians, so convert degrees first.',
      ru: 'Держите θ в одной единице. Показательная форма требует радианов, поэтому сначала переведите градусы.',
    },
  },
  {
    id: 'complex-argument',
    term: { en: 'argument of a complex number', ru: 'аргумент комплексного числа (argument of a complex number)' },
    def: {
      en: 'The angle $\\theta = \\arg z$ from the positive real axis to the line from the origin to $z$, with positive angles anticlockwise and negative angles clockwise. Zero has no defined argument. For nonzero z, the principal argument satisfies $-\\pi < \\theta \\le \\pi$.',
      ru: 'Угол $\\theta = \\arg z$ от положительной действительной оси до отрезка от начала координат к $z$, с положительным направлением против часовой стрелки и отрицательным — по часовой. У нуля аргумент не определён. Для ненулевого z главное значение удовлетворяет $-\\pi < \\theta \\le \\pi$.',
    },
    syllabus: '1.13',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 8.4, p. 357' },
    pitfall: {
      en: 'When $a < 0$, arctan(b/a) lies in the wrong half-plane. Add $\\pi$ for a point in the second quadrant and subtract $\\pi$ for one in the third.',
      ru: 'При $a < 0$ значение arctan(b/a) попадает в неверную полуплоскость. Для точки во второй четверти прибавьте $\\pi$, для точки в третьей — вычтите $\\pi$.',
    },
  },
  {
    id: 'exponential-form',
    term: { en: 'exponential form of a complex number', ru: 'показательная форма комплексного числа (exponential form of a complex number)' },
    def: {
      en: 'For nonzero z, the form $z = re^{i\\theta}$, where $r = |z|$ and $\\theta = \\arg z$ in radians. It follows from Euler’s relation $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$.',
      ru: 'Для ненулевого z форма $z = re^{i\\theta}$, где $r = |z|$, а $\\theta = \\arg z$ в радианах. Она следует из формулы Эйлера $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$.',
    },
    syllabus: '1.13',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 8.4, p. 360' },
    pitfall: {
      en: 'The angle in $e^{i\\theta}$ is in radians. Writing $e^{30i}$ for an angle of 30 degrees is wrong.',
      ru: 'Угол в $e^{i\\theta}$ берётся в радианах. Запись $e^{30i}$ для угла в 30 градусов неверна.',
    },
  },
  {
    id: 'de-moivre-theorem',
    term: { en: 'de Moivre’s theorem', ru: 'теорема Муавра (de Moivre’s theorem)' },
    def: {
      en: 'For an integer $n$ and a nonzero base, $(r\\,\\text{cis}\\,\\theta)^{n} = r^{n}\\,\\text{cis}\\,(n\\theta)$: the power raises the modulus to the power $n$ and multiplies the argument by $n$.',
      ru: 'Для целого $n$ и ненулевого основания выполняется $(r\\,\\text{cis}\\,\\theta)^{n} = r^{n}\\,\\text{cis}\\,(n\\theta)$: модуль возводится в степень $n$, а аргумент умножается на $n$.',
    },
    syllabus: '1.13',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 8.4, p. 361' },
    pitfall: {
      en: 'The argument is multiplied by $n$, not added to $n$. The modulus is raised to the power $n$, not multiplied by $n$.',
      ru: 'Аргумент умножается на $n$, а не складывается с $n$. Модуль возводится в степень $n$, а не умножается на $n$.',
    },
  },
];
