import type { Term } from '../../../../src/contract/types';
import { BOOK_TITLE } from '../../book';

export const terms: Term[] = [
  {
    id: 'mathematical-model',
    term: { en: 'mathematical model', ru: 'математическая модель (mathematical model)' },
    def: {
      en: 'A simplified description of a real situation, using variables, parameters and a rule. It is used to describe, predict or decide, and it is only as reliable as its assumptions.',
      ru: 'Упрощённое описание реальной ситуации с помощью переменных, параметров и правила. Модель используют, чтобы описывать, предсказывать или принимать решения; её надёжность зависит от допущений.',
    },
    syllabus: '2.6',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 4.2, p. 160' },
    pitfall: {
      en: 'A model that fits the data well can still be wrong for a question it was not built to answer.',
      ru: 'Модель, которая хорошо описывает данные, всё же может быть неверной для вопроса, для которого её не строили.',
    },
  },
  {
    id: 'least-squares-fit',
    term: { en: 'least-squares fit', ru: 'подгонка по методу наименьших квадратов (least-squares fit)' },
    def: {
      en: 'Choosing the parameters of a model so that the sum of the squared residuals is as small as possible. For a linear model this gives the least squares regression line, $f(x) = mx + c$.',
      ru: 'Выбор параметров модели так, чтобы сумма квадратов остатков была как можно меньше. Для линейной модели это даёт прямую регрессии, найденную методом наименьших квадратов: $f(x) = mx + c$.',
    },
    syllabus: '2.6',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 4.5, p. 197' },
  },
  {
    id: 'model-residual',
    term: { en: 'residual', ru: 'остаток (residual)' },
    def: {
      en: 'The observed value minus the value the model predicts: residual = observed - predicted. A positive residual means the model underestimates that observation.',
      ru: 'Наблюдаемое значение минус значение, которое предсказывает модель: остаток = наблюдаемое - предсказанное. Положительный остаток означает, что модель занижает это наблюдение.',
    },
    syllabus: '2.6',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 4.5, p. 190' },
    pitfall: {
      en: 'Always subtract in the order observed minus predicted, otherwise the sign is reversed.',
      ru: 'Всегда вычитайте в порядке «наблюдаемое минус предсказанное», иначе знак поменяется.',
    },
  },
  {
    id: 'model-extrapolation',
    term: { en: 'extrapolation', ru: 'экстраполяция (extrapolation)' },
    def: {
      en: 'Using a model to predict a value outside the range of the data it was fitted to. Predictions inside that range are called interpolation and are usually more reliable.',
      ru: 'Использование модели для предсказания значения вне диапазона данных, по которым её подогнали. Предсказания внутри этого диапазона называют интерполяцией; они обычно надёжнее.',
    },
    syllabus: '2.6',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 4.5, p. 197' },
  },
];
