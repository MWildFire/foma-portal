import type { Term } from '../../../../src/contract/types';

const source = {
  kind: 'web' as const,
  title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
  locator: 'sub-topic 4.13',
  url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
};

export const terms: Term[] = [
  {
    id: 'least-squares-curve',
    term: {
      en: 'least-squares curve',
      ru: 'кривая наименьших квадратов (least-squares curve)',
    },
    def: {
      en: 'A model curve, such as a logarithmic or quadratic curve, whose parameters are chosen to make the sum of squared residuals as small as possible. A GDC finds the parameters for you.',
      ru: 'Модельная кривая, например логарифмическая или квадратичная, параметры которой выбраны так, чтобы сумма квадратов остатков была наименьшей. Калькулятор находит параметры за вас.',
    },
    syllabus: '4.13',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    sim: 'math.regression-lab',
  },
  {
    id: 'regression-residual',
    term: {
      en: 'residual',
      ru: 'остаток регрессии (residual)',
    },
    def: {
      en: 'The difference between an observed value and the value predicted by the model, $y_i - \\hat{y}_i$. On a scatter diagram it is the vertical distance from a point to the curve.',
      ru: 'Разность между наблюдаемым значением и значением, предсказанным моделью: $y_i - \\hat{y}_i$. На диаграмме рассеяния это вертикальное расстояние от точки до кривой.',
    },
    syllabus: '4.13',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'A residual is observed minus predicted. Keep that order in your working, even though squaring removes the sign.',
      ru: 'Остаток — это наблюдаемое значение минус предсказанное. Сохраняйте этот порядок в решении, хотя при возведении в квадрат знак исчезает.',
    },
  },
  {
    id: 'coefficient-of-determination',
    term: {
      en: 'coefficient of determination R²',
      ru: 'коэффициент детерминации R² (coefficient of determination R²)',
    },
    def: {
      en: 'The proportion of the variation in $y$ that the model explains: $R^2 = 1 - \\dfrac{\\text{SSR}}{\\text{SST}}$. Values closer to 1 mean a better fit.',
      ru: 'Доля вариации $y$, которую объясняет модель: $R^2 = 1 - \\dfrac{\\text{SSR}}{\\text{SST}}$. Значения ближе к 1 означают лучшее соответствие.',
    },
    syllabus: '4.13',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'A model with more parameters, such as a quadratic instead of a line, always fits the same data at least as well, so a higher R² alone cannot settle the choice.',
      ru: 'Модель с большим числом параметров, например квадратичная вместо прямой, на тех же данных подходит не хуже, поэтому один только больший R² не решает выбор модели.',
    },
  },
];
