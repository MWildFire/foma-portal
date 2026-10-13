import type { Formula } from '../../../../src/contract/types';

// Formulas defined in the competitive market equilibrium topic (IB DP Economics section 2.3).
export const formulas: Formula[] = [
  {
    id: 'linear-equilibrium',
    tex: 'P^* = \\dfrac{a - c}{b + d}, \\quad Q^* = a - bP^*',
    name: { en: 'Linear market equilibrium', ru: 'Линейное рыночное равновесие' },
    meaning: {
      en: 'Equilibrium price when demand is Qd = a - bP and supply is Qs = c + dP; substitute P* into demand to find Q*.',
      ru: 'Равновесная цена при спросе Qd = a - bP и предложении Qs = c + dP; чтобы найти Q*, подставьте P* в функцию спроса.',
    },
    when: {
      en: 'Demand and supply are given as linear equations in price, and you need the equilibrium price or quantity.',
      ru: 'Спрос и предложение заданы линейными уравнениями относительно цены, и нужны равновесная цена или количество.',
    },
    syllabus: '2.3',
    units: 'AED per unit (P*); units (Q*)',
    example: {
      en: 'With Qd = 40 - 2P and Qs = 4 + 3P: P* = (40 - 4) / (2 + 3) = 7.20 AED and Q* = 40 - 2 x 7.20 = 25.6 thousand units.',
      ru: 'При Qd = 40 - 2P и Qs = 4 + 3P: P* = (40 - 4) / (2 + 3) = 7,20 AED, Q* = 40 - 2 x 7,20 = 25,6 тыс. единиц.',
    },
  },
  {
    id: 'triangle-area',
    tex: '\\text{Area} = \\tfrac{1}{2} \\times \\text{base} \\times \\text{height}',
    name: { en: 'Area of a triangle (surplus)', ru: 'Площадь треугольника (излишек)' },
    meaning: {
      en: 'Area of the triangle that shows consumer or producer surplus on a linear diagram.',
      ru: 'Площадь треугольника, которым на линейной диаграмме изображают излишек потребителя или производителя.',
    },
    when: {
      en: 'The surplus is a triangle between a straight demand or supply curve and the price line; the base is the quantity traded and the height is the gap in price.',
      ru: 'Излишек — треугольник между прямой кривой спроса или предложения и линией цены; основание — количество, высота — разрыв в цене.',
    },
    syllabus: '2.3',
    units: 'AED',
    example: {
      en: 'A base of 25 units and a height of AED 13.50 give an area of 1/2 x 25 x 13.50 = AED 168.75.',
      ru: 'Основание 25 единиц и высота 13,50 AED дают площадь 1/2 x 25 x 13,50 = 168,75 AED.',
    },
  },
];
