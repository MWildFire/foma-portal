import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'standard-quadratic-vertex-form',
    tex: 'y=a(x-h)^2+k',
    name: { en: 'Vertex form of a quadratic model', ru: 'Вершинный вид квадратичной модели (Vertex form of a quadratic model)' },
    meaning: {
      en: 'For a≠0, the vertex is (h, k) and the axis of symmetry is x = h. A positive a gives a minimum; a negative a gives a maximum.',
      ru: 'При a≠0 вершина — (h, k), ось симметрии — x = h. При положительном a график имеет минимум, при отрицательном a — максимум.',
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
      en: 'For a>0, a≠1 and k≠0, the difference y−c changes by a constant factor per unit x. The horizontal asymptote y=c is approached in the appropriate direction of x.',
      ru: 'При a>0, a≠1 и k≠0 разность y−c меняется в постоянное число раз при изменении x на единицу. К асимптоте y=c график приближается в соответствующем направлении x.',
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
      en: 'The amplitude is |a|, the period is 2π/|b| (a and b nonzero) and the midline is y = d. The maximum is d + |a| and the minimum is d - |a|.',
      ru: 'Амплитуда равна |a|, период — 2π/|b| (a и b ненулевые), средняя линия — y = d. Наибольшее значение равно d + |a|, наименьшее — d - |a|.',
    },
    when: {
      en: 'Use radian input for the period 2π/|b|. With degree input it is 360°/|b|. A sinusoid can model cyclical data such as daylight hours, within stated limits.',
      ru: 'Для периода 2π/|b| аргумент берут в радианах; при градусном аргументе период равен 360°/|b|. Синусоида может моделировать циклические данные, например длину дня, в указанных пределах.',
    },
    syllabus: '2.5',
    inBooklet: false,
  },
];
