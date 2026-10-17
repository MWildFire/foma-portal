import type { Term } from '../../../../src/contract/types';
import { BOOK_TITLE } from '../../book';

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
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 4.3, p. 174' },
    pitfall: {
      en: 'Read a composite from right to left, because $g$ acts first. In general $(f \\circ g)(x) \\neq (g \\circ f)(x)$.',
      ru: 'Читайте композицию справа налево: сначала действует $g$. В общем случае $(f \\circ g)(x) \\neq (g \\circ f)(x)$.',
    },
  },
  {
    id: 'inverse-function-one-to-one',
    term: { en: 'inverse function', ru: 'обратная функция (inverse function)' },
    def: {
      en: 'For a one-to-one function f:D→R, where R is its range, the inverse f^(-1):R→D reverses f: f^(-1)(f(x))=x for x∈D and f(f^(-1)(y))=y for y∈R. One-to-one means that different inputs have different outputs.',
      ru: 'Для взаимно однозначной функции f:D→R, где R — её область значений, обратная функция f^(-1):R→D отменяет действие f: f^(-1)(f(x))=x при x∈D и f(f^(-1)(y))=y при y∈R. Взаимная однозначность означает, что разные аргументы дают разные значения.',
    },
    syllabus: '2.7',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 6.1, p. 242' },
    pitfall: {
      en: 'The superscript $-1$ denotes the inverse function, not the reciprocal operation (although particular values or functions can coincide): in general $f^{-1}(x)$ differs from $1/f(x)$.',
      ru: 'Надстрочный индекс $-1$ обозначает обратную функцию, а не операцию взятия обратного числа (хотя отдельные значения или функции могут совпасть): в общем случае $f^{-1}(x)$ отличается от $1/f(x)$.',
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
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 6.1, p. 243' },
    pitfall: {
      en: 'Choose the branch that the restricted domain allows: for $x^2$ on $x \\ge 0$ the inverse is $\\sqrt{x}$, not $-\\sqrt{x}$.',
      ru: 'Выбирайте ветвь, которую допускает ограничение: для $x^2$ при $x \\ge 0$ обратная функция равна $\\sqrt{x}$, а не $-\\sqrt{x}$.',
    },
  },
];
