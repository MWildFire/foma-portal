import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'pythagoras-theorem',
    tex: 'c^{2}=a^{2}+b^{2}',
    name: { en: 'Pythagoras theorem', ru: 'Теорема Пифагора (Pythagoras theorem)' },
    meaning: {
      en: 'In a right-angled triangle, the square of the hypotenuse c equals the sum of the squares of the two other sides a and b.',
      ru: 'В прямоугольном треугольнике квадрат гипотенузы c равен сумме квадратов катетов a и b.',
    },
    when: {
      en: 'A right-angled triangle with two sides known, to find the third side.',
      ru: 'Прямоугольный треугольник, в котором известны две стороны, а нужно найти третью.',
    },
    syllabus: '3.3',
    inBooklet: false,
    example: {
      en: 'A ladder of length 5 with its foot 1.5 from the wall: height squared = 5^2 - 1.5^2 = 22.75, so the height is 4.77 (3 significant figures).',
      ru: 'Лестница длиной 5 с основанием в 1,5 от стены: высота в квадрате = 5² − 1,5² = 22,75, поэтому высота равна 4,77 (с точностью до 3 значащих цифр).',
    },
  },
  {
    id: 'elevation-depression-tan',
    tex: '\\tan\\theta=\\dfrac{h}{d}',
    name: { en: 'Tangent of an angle of elevation or depression', ru: 'Тангенс угла возвышения или понижения (Tangent of an angle of elevation or depression)' },
    meaning: {
      en: 'theta is the angle of elevation or depression, h is the vertical height difference and d is the horizontal distance.',
      ru: 'θ — угол возвышения или понижения, h — разность высот (вертикальный катет), d — горизонтальное расстояние.',
    },
    when: {
      en: 'The height difference and the horizontal distance are known, or one of them is to be found.',
      ru: 'Известны разность высот и горизонтальное расстояние, либо нужно найти одну из этих величин.',
    },
    syllabus: '3.3',
    inBooklet: false,
    example: {
      en: 'Observer 80 m from a tower, angle of elevation 28 degrees: h = 80 tan 28 = 42.5 (1 decimal place).',
      ru: 'Наблюдатель в 80 м от башни, угол возвышения 28°: h = 80 tan 28° = 42,5 (с одним знаком после запятой).',
    },
  },
];
