import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'optimisation-power-derivative',
    tex: '\\dfrac{d}{dx}\\left(a x^{n}\\right)=a n x^{n-1}',
    name: { en: 'Derivative of a power term (for optimisation)', ru: 'Производная степенного слагаемого (для оптимизации)' },
    meaning: {
      en: 'For an integer $n$, the derivative of $a x^{n}$ is $a n x^{n-1}$. Each power term of an objective function is differentiated in this way.',
      ru: 'Для целого $n$ производная $a x^{n}$ равна $a n x^{n-1}$. Каждое степенное слагаемое целевой функции дифференцируется таким образом.',
    },
    when: {
      en: 'Writing the gradient of an objective function before solving for its zeros.',
      ru: 'Запись градиента целевой функции перед поиском его нулей.',
    },
    syllabus: '5.7',
    inBooklet: true, // not checked against the IB formula booklet
    example: {
      en: 'For V(x) = 4x^3 - 100x^2 + 600x, the gradient is 12x^2 - 200x + 600.',
      ru: 'Для V(x) = 4x^3 - 100x^2 + 600x градиент равен 12x^2 - 200x + 600.',
    },
  },
  {
    id: 'open-box-volume',
    tex: 'V(x)=x(a-2x)(b-2x)',
    name: { en: 'Volume of an open box made from a sheet', ru: 'Объём открытой коробки из листа' },
    meaning: {
      en: 'Volume of an open box made from an $a$ by $b$ sheet, after squares of side $x$ are cut from the corners and the sides are folded up.',
      ru: 'Объём открытой коробки из листа размером $a$ на $b$, после того как из углов вырезаны квадраты со стороной $x$ и стенки подняты.',
    },
    when: {
      en: 'Cutting equal squares from the corners of a rectangular sheet to maximise the volume.',
      ru: 'Вырезание равных квадратов из углов прямоугольного листа для максимизации объёма.',
    },
    syllabus: '5.7',
    inBooklet: false,
  },
  {
    id: 'average-cost-function',
    tex: '\\bar{C}(x)=\\dfrac{C(x)}{x}',
    name: { en: 'Average cost per unit', ru: 'Средняя стоимость одной единицы' },
    meaning: {
      en: 'The cost per unit: the total cost $C(x)$ divided by the number of units $x$.',
      ru: 'Стоимость одной единицы: общие издержки $C(x)$, делённые на число единиц $x$.',
    },
    when: {
      en: 'Minimising the cost per unit of producing $x$ units.',
      ru: 'Минимизация стоимости одной единицы при выпуске $x$ единиц.',
    },
    syllabus: '5.7',
    inBooklet: false,
  },
  {
    id: 'wall-enclosure-area',
    tex: 'A=x(P-2x)',
    name: { en: 'Area of a rectangular enclosure against a wall', ru: 'Площадь прямоугольного загона у стены' },
    meaning: {
      en: 'Area $A$ of a rectangle enclosed on three sides by $P$ metres of fencing, where the two sides at right angles to the wall have length $x$.',
      ru: 'Площадь $A$ прямоугольника, огороженного с трёх сторон $P$ метрами ограждения; две стороны длиной $x$ перпендикулярны стене.',
    },
    when: {
      en: 'A pen built against a straight wall, so that no fencing is needed along the wall.',
      ru: 'Загон у прямой стены, поэтому вдоль стены ограждение не нужно.',
    },
    syllabus: '5.7',
    inBooklet: false,
  },
];
