import type { Term } from '../../../../src/contract/types';
import { BOOK_TITLE } from '../../book';

export const terms: Term[] = [
  {
    id: 'normal-bell-curve',
    term: { en: 'normal curve', ru: 'нормальная кривая (normal curve)' },
    def: {
      en: 'The symmetric, bell-shaped curve of a normal distribution $X \\sim N(\\mu, \\sigma^2)$. It is centred on the mean $\\mu$, the standard deviation $\\sigma$ sets its spread, and the total area under it is 1.',
      ru: 'Симметричная колоколообразная кривая нормального распределения $X \\sim N(\\mu, \\sigma^2)$. Она центрирована на среднем $\\mu$, стандартное отклонение $\\sigma$ задаёт её ширину, а полная площадь под ней равна 1.',
    },
    syllabus: '4.9',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 13.4, p. 596' },
    pitfall: {
      en: 'For a continuous variable $P(X = a) = 0$, so a probability is an area between two values, not the height of the curve at one point.',
      ru: 'Для непрерывной величины $P(X = a) = 0$, поэтому вероятность — это площадь между двумя значениями, а не высота кривой в одной точке.',
    },
    sim: 'math.normal-lab',
  },
  {
    id: 'normal-standardised-score',
    term: { en: 'standardised score z', ru: 'стандартизованная величина z (standardised score z)' },
    def: {
      en: 'The number of standard deviations by which a value lies away from the mean: $z = \\dfrac{x - \\mu}{\\sigma}$. If $X$ is normal with $\\sigma>0$, the standardised variable follows $Z \\sim N(0, 1)$.',
      ru: 'Число стандартных отклонений, на которое значение отстоит от среднего: $z = \\dfrac{x - \\mu}{\\sigma}$. Если $X$ нормальна и $\\sigma>0$, стандартизованная величина распределена как $Z \\sim N(0, 1)$.',
    },
    syllabus: '4.9',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'web', title: 'Н.А. Ярушкина, О.В. Килина. Теория вероятностей и математическая статистика, ТУСУР, 2022', locator: 'printed/PDF p. 17: standard normal and X0=(X−a)/σ; p. 18 interval probability', url: 'https://edu.study.tusur.ru/publications/10408/download' },
  },
  {
    id: 'normal-inverse-calculation',
    term: { en: 'inverse normal calculation', ru: 'обратный расчёт для нормального распределения (inverse normal calculation)' },
    def: {
      en: 'Finding the value $x$ for a given area to its left, that is for a given probability $P(X \\le x) = p$. The GDC inverse normal function does this directly.',
      ru: 'Нахождение значения $x$ по заданной площади слева, то есть по вероятности $P(X \\le x) = p$. Функция inverse normal на калькуляторе выполняет этот расчёт напрямую.',
    },
    syllabus: '4.9',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 13.4, p. 598' },
  },
];
