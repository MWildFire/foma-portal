import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'composite-function-definition',
    tex: '(f\\circ g)(x)=f\\bigl(g(x)\\bigr)',
    name: { en: 'Composite function', ru: 'Сложная функция (композиция) (Composite function)' },
    meaning: {
      en: 'Apply g first, then f; require x in the domain of g and g(x) in the domain of f.',
      ru: 'Сначала применяем g, затем f; нужно, чтобы x входил в область определения g, а g(x) — в область определения f.',
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
      en: 'For a one-to-one f on its stated domain, applying f and then f^(-1), or the other way round, returns the original value.',
      ru: 'Для взаимно однозначной f на указанной области применение f, затем f^(-1), или наоборот, возвращает исходное значение.',
    },
    when: {
      en: 'For the first identity x belongs to D(f); for the second x belongs to R(f). Check these domains when undoing a composition.',
      ru: 'В первом тождестве x принадлежит D(f), во втором — R(f). Проверяй эти области, отменяя композицию.',
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
      en: 'First ensure f is one-to-one, restricting its domain if needed; state the inverse function’s domain as the range of the restricted f.',
      ru: 'Сначала проверь взаимную однозначность f и при необходимости сузь область определения; область определения обратной функции — область значений ограниченной f.',
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
      en: 'Stating the allowed inputs and outputs of an inverse, including any restriction used to make f one-to-one.',
      ru: 'Указание допустимых аргументов и значений обратной функции с учётом ограничения, которое делает f взаимно однозначной.',
    },
    syllabus: '2.7',
    inBooklet: false,
  },
];
