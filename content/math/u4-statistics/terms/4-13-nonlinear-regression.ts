import type { Term } from '../../../../src/contract/types';
import { BOOK_TITLE } from '../../book';

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
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 6.2, p. 248' },
    sim: 'math.regression-lab',
  },
  {
    id: 'regression-residual',
    term: {
      en: 'residual',
      ru: 'остаток регрессии (residual)',
    },
    def: {
      en: 'The difference between an observed value and the value predicted by the model, $y_i - \\hat{y}_i$. On a scatter diagram its magnitude is the vertical distance from a point to the curve; the residual itself is signed.',
      ru: 'Разность между наблюдаемым значением и значением, предсказанным моделью: $y_i - \\hat{y}_i$. На диаграмме рассеяния его модуль — вертикальное расстояние от точки до кривой; сам остаток имеет знак.',
    },
    syllabus: '4.13',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 4.5, p. 190' },
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
      en: 'A fit score defined by $R^2 = 1 - \\dfrac{\\text{SSR}}{\\text{SST}}$. For ordinary linear least squares with an intercept it is the accounted-for fraction of variation. For nonconstant y, values closer to 1 mean a better fit on the same data and response scale; arbitrary predictors can give negative R².',
      ru: 'Показатель соответствия, определяемый как $R^2 = 1 - \\dfrac{\\text{SSR}}{\\text{SST}}$. В обычной линейной регрессии по методу наименьших квадратов со свободным членом это объяснённая доля вариации. При непостоянных y значения ближе к 1 означают лучшее соответствие на тех же данных и в той же шкале отклика; для произвольного прогноза R² может быть отрицательным.',
    },
    syllabus: '4.13',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 6.2, p. 248' },
    pitfall: {
      en: 'For nested least-squares models on the same data, adding parameters cannot worsen the minimum squared-residual fit, so a higher R² alone cannot settle the choice.',
      ru: 'Если одна модель — частный случай другой, дополнительные параметры при подгонке методом наименьших квадратов к тем же данным не увеличивают минимальную сумму квадратов остатков, поэтому один только больший R² не решает выбор модели.',
    },
  },
];
