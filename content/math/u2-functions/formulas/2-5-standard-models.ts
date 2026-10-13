import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'standard-quadratic-vertex-form',
    tex: 'y=a(x-h)^2+k',
    name: { en: 'Vertex form of a quadratic model', ru: 'Вершинный вид квадратичной модели (Vertex form of a quadratic model)' },
    meaning: {
      en: 'The vertex is (h, k) and the axis of symmetry is x = h. A positive a gives a minimum; a negative a gives a maximum.',
      ru: 'Вершина — (h, k), ось симметрии — x = h. При положительном a график имеет минимум, при отрицательном a — максимум.',
    },
    when: {
      en: 'A parabolic model in which the turning point, the maximum or the minimum is needed directly.',
      ru: 'Параболическая модель, в которой нужна точка поворота — максимум или минимум.',
    },
    syllabus: '2.5',
    inBooklet: false,
  },
  {
    id: 'standard-exponential-model',
    tex: 'y=k\\cdot a^{x}+c',
    name: { en: 'Exponential model with a horizontal asymptote', ru: 'Экспоненциальная модель с горизонтальной асимптотой (Exponential model with a horizontal asymptote)' },
    meaning: {
      en: 'The graph approaches the line y = c. The y-intercept is k + c. It grows when a > 1 and decays when 0 < a < 1 (with k > 0).',
      ru: 'График приближается к прямой y = c. Точка пересечения с осью y равна k + c. При a > 1 модель растёт, при 0 < a < 1 убывает (при k > 0).',
    },
    when: {
      en: 'A quantity that changes by a constant percentage for each unit of x and moves towards a limit c.',
      ru: 'Величина, которая меняется на постоянный процент за каждую единицу x и стремится к предельному значению c.',
    },
    syllabus: '2.5',
    inBooklet: false,
  },
  {
    id: 'standard-power-variation',
    tex: 'y=a\\,x^{n}',
    name: { en: 'Power model: direct and inverse variation', ru: 'Степенная модель: прямая и обратная пропорциональность (Power model: direct and inverse variation)' },
    meaning: {
      en: 'With n = 1 the model is direct variation, y = ax. With n = -1 it is inverse variation, y = a/x, where x is not 0.',
      ru: 'При n = 1 модель описывает прямую пропорциональность, y = ax. При n = -1 — обратную пропорциональность, y = a/x, где x не равно 0.',
    },
    when: {
      en: 'Two quantities vary in a fixed ratio (direct variation) or in a fixed inverse ratio (inverse variation).',
      ru: 'Две величины меняются в постоянном отношении (прямая пропорциональность) или в постоянном обратном отношении (обратная пропорциональность).',
    },
    syllabus: '2.5',
    inBooklet: false,
  },
  {
    id: 'standard-sinusoidal-model',
    tex: 'y=a\\sin(bx)+d',
    name: { en: 'Sinusoidal model', ru: 'Синусоидальная модель (Sinusoidal model)' },
    meaning: {
      en: 'The amplitude is |a|, the period is 2π/b and the midline is y = d. The maximum is d + |a| and the minimum is d - |a|.',
      ru: 'Амплитуда равна |a|, период — 2π/b, средняя линия — y = d. Наибольшее значение равно d + |a|, наименьшее — d - |a|.',
    },
    when: {
      en: 'A quantity that repeats in a cycle, such as the number of daylight hours over a year.',
      ru: 'Величина, которая повторяется циклически, например число часов дневного света за год.',
    },
    syllabus: '2.5',
    inBooklet: false,
  },
];
