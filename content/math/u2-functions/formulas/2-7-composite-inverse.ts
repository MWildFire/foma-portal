import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'composite-function-definition',
    tex: '(f\\circ g)(x)=f\\bigl(g(x)\\bigr)',
    name: { en: 'Composite function', ru: 'Сложная функция (композиция) (Composite function)' },
    meaning: {
      en: 'Apply g first, then apply f to the result.',
      ru: 'Сначала применяем g, затем f к результату.',
    },
    when: {
      en: 'The output of one function is used as the input of another.',
      ru: 'Результат одной функции служит аргументом другой.',
    },
    syllabus: '2.7',
    inBooklet: false,
    example: {
      en: 'f(x) = 3x - 1 and g(x) = x^2 + 2: (f ∘ g)(2) = f(6) = 17, but (g ∘ f)(2) = g(5) = 27.',
      ru: 'f(x) = 3x - 1 и g(x) = x^2 + 2: (f ∘ g)(2) = f(6) = 17, а (g ∘ f)(2) = g(5) = 27.',
    },
  },
  {
    id: 'inverse-undo-identities',
    tex: 'f^{-1}\\bigl(f(x)\\bigr)=x,\\qquad f\\bigl(f^{-1}(x)\\bigr)=x',
    name: { en: 'Inverse function identities', ru: 'Тождества обратной функции (Inverse function identities)' },
    meaning: {
      en: 'Applying f and then f^(-1), or the other way round, returns the original value.',
      ru: 'Применение f, затем f^(-1), или наоборот, возвращает исходное значение.',
    },
    when: {
      en: 'Checking an inverse, or solving a composite equation by undoing the functions one at a time.',
      ru: 'Проверка обратной функции или решение уравнения с композицией, когда функции отменяются по одной.',
    },
    syllabus: '2.7',
    inBooklet: false,
  },
  {
    id: 'inverse-by-swapping',
    tex: 'y=f(x)\\;\\Longrightarrow\\;x=f(y)\\;\\Longrightarrow\\;y=f^{-1}(x)',
    name: { en: 'Finding an inverse by swapping x and y', ru: 'Нахождение обратной функции перестановкой x и y (Finding an inverse by swapping x and y)' },
    meaning: {
      en: 'Write y = f(x), swap x and y, then solve for y. The result is f^(-1)(x).',
      ru: 'Запишите y = f(x), поменяйте местами x и y и выразите y. Результат — f^(-1)(x).',
    },
    when: {
      en: 'Every time an inverse function is asked for; state its domain as the range of f.',
      ru: 'Каждый раз, когда нужна обратная функция; её область определения — область значений f.',
    },
    syllabus: '2.7',
    inBooklet: false,
  },
  {
    id: 'inverse-domain-range-swap',
    tex: '\\operatorname{D}(f^{-1})=\\operatorname{R}(f),\\qquad \\operatorname{R}(f^{-1})=\\operatorname{D}(f)',
    name: { en: 'Domain and range of an inverse', ru: 'Область определения и область значений обратной функции (Domain and range of an inverse)' },
    meaning: {
      en: 'The domain of the inverse is the range of f, and the range of the inverse is the domain of f (both on the restricted domain).',
      ru: 'Область определения обратной функции — это область значений f, а её область значений — это область определения f (на ограниченной области).',
    },
    when: {
      en: 'Stating the domain of an inverse function, which is often the step where marks are lost.',
      ru: 'Указание области определения обратной функции, где чаще всего теряются баллы.',
    },
    syllabus: '2.7',
    inBooklet: false,
  },
];
