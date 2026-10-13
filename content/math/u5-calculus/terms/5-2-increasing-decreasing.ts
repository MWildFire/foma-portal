import type { Term } from '../../../../src/contract/types';

const source = {
  kind: 'web' as const,
  title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
  locator: 'sub-topic 5.2',
  url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
};

export const terms: Term[] = [
  {
    id: 'increasing-function-derivative',
    term: { en: 'increasing function', ru: 'возрастающая функция (increasing function)' },
    def: {
      en: 'A function $f$ is increasing on an interval when $f\'(x) > 0$ for every $x$ in the interval, except possibly at isolated points where $f\'(x) = 0$. Its graph rises from left to right.',
      ru: 'Функция $f$ возрастает на промежутке, если $f\'(x) > 0$ для каждого $x$ этого промежутка, за исключением, возможно, изолированных точек, где $f\'(x) = 0$. График поднимается слева направо.',
    },
    syllabus: '5.2',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'Increasing describes an interval, not a single point. A function can be increasing while its values are still negative.',
      ru: 'Возрастание описывает промежуток, а не одну точку. Функция может возрастать, оставаясь отрицательной.',
    },
  },
  {
    id: 'decreasing-function-derivative',
    term: { en: 'decreasing function', ru: 'убывающая функция (decreasing function)' },
    def: {
      en: 'A function $f$ is decreasing on an interval when $f\'(x) < 0$ for every $x$ in the interval, except possibly at isolated points where $f\'(x) = 0$. Its graph falls from left to right.',
      ru: 'Функция $f$ убывает на промежутке, если $f\'(x) < 0$ для каждого $x$ этого промежутка, за исключением, возможно, изолированных точек, где $f\'(x) = 0$. График опускается слева направо.',
    },
    syllabus: '5.2',
    papers: ['P1', 'P2', 'P3'],
    src: source,
  },
  {
    id: 'sign-diagram-derivative',
    term: { en: 'sign diagram for f′(x)', ru: 'диаграмма знаков f′(x) (sign diagram)' },
    def: {
      en: 'A number line on which the zeros of $f\'(x)$ are marked, and the sign of $f\'(x)$ is written in each section between them. It shows at a glance where $f$ is increasing and where it is decreasing.',
      ru: 'Числовая прямая, на которой отмечены нули $f\'(x)$ и записан знак $f\'(x)$ на каждом промежутке между ними. Она показывает, где $f$ возрастает, а где убывает.',
    },
    syllabus: '5.2',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    sim: 'math.tangent-optimisation-lab',
  },
];
