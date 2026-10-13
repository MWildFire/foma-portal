import type { Term } from '../../../../src/contract/types';

const source = {
  kind: 'web' as const,
  title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
  locator: 'sub-topic 2.7',
  url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
};

export const terms: Term[] = [
  {
    id: 'composite-function-fg',
    term: { en: 'composite function', ru: 'сложная функция (composite function)' },
    def: {
      en: 'The function $(f \\circ g)(x) = f(g(x))$: the output of $g$ becomes the input of $f$. Its domain is the set of $x$ in the domain of $g$ for which $g(x)$ lies in the domain of $f$.',
      ru: 'Функция $(f \\circ g)(x) = f(g(x))$: результат $g$ становится аргументом $f$. Её область определения — множество таких $x$ из области определения $g$, для которых $g(x)$ лежит в области определения $f$.',
    },
    syllabus: '2.7',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'Read a composite from right to left, because $g$ acts first. In general $(f \\circ g)(x) \\neq (g \\circ f)(x)$.',
      ru: 'Читайте композицию справа налево: сначала действует $g$. В общем случае $(f \\circ g)(x) \\neq (g \\circ f)(x)$.',
    },
  },
  {
    id: 'inverse-function-one-to-one',
    term: { en: 'inverse function', ru: 'обратная функция (inverse function)' },
    def: {
      en: 'The function $f^{-1}$ that reverses $f$, so that $f^{-1}(f(x)) = x$. It exists only when $f$ is one-to-one, that is, when different inputs always give different outputs.',
      ru: 'Функция $f^{-1}$, которая отменяет действие $f$, так что $f^{-1}(f(x)) = x$. Она существует только тогда, когда $f$ взаимно однозначна, то есть разные аргументы всегда дают разные значения.',
    },
    syllabus: '2.7',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'The superscript $-1$ denotes the inverse function, not a reciprocal: $f^{-1}(x) \\neq \\dfrac{1}{f(x)}$.',
      ru: 'Надстрочный индекс $-1$ обозначает обратную функцию, а не обратное число: $f^{-1}(x) \\neq \\dfrac{1}{f(x)}$.',
    },
  },
  {
    id: 'restricted-domain-inverse',
    term: { en: 'restricted domain', ru: 'ограниченная область определения (restricted domain)' },
    def: {
      en: 'A smaller domain chosen for a many-to-one function so that it becomes one-to-one. On this domain the inverse exists, and its domain is the range of the restricted function.',
      ru: 'Меньшая область определения, выбранная для функции, которая не является взаимно однозначной, чтобы она стала взаимно однозначной. На ней существует обратная функция, и её область определения — это область значений ограниченной функции.',
    },
    syllabus: '2.7',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'Choose the branch that the restricted domain allows: for $x^2$ on $x \\ge 0$ the inverse is $\\sqrt{x}$, not $-\\sqrt{x}$.',
      ru: 'Выбирайте ветвь, которую допускает ограничение: для $x^2$ при $x \\ge 0$ обратная функция равна $\\sqrt{x}$, а не $-\\sqrt{x}$.',
    },
  },
];
