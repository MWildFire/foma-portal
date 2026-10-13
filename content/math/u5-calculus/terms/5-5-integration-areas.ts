import type { Term } from '../../../../src/contract/types';

const source = {
  kind: 'ib-guide' as const,
  title: 'IB Mathematics: applications and interpretation guide (first assessment 2021)',
  locator: 'sub-topic 5.5',
  url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
};

export const terms: Term[] = [
  {
    id: 'indefinite-integral',
    term: { en: 'indefinite integral', ru: 'неопределённый интеграл (indefinite integral)' },
    def: {
      en: 'An anti-derivative of a function $f(x)$: a function $F(x)$ whose derivative is $f(x)$. It is written $\\int f(x)\\,dx = F(x) + C$, where $C$ is an arbitrary constant.',
      ru: 'Первообразная функции $f(x)$: функция $F(x)$, производная которой равна $f(x)$. Записывается как $\\int f(x)\\,dx = F(x) + C$, где $C$ — произвольная постоянная.',
    },
    syllabus: '5.5',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'Every indefinite integral needs the constant $+ C$. Leaving it out loses the marks for a boundary condition later.',
      ru: 'В каждом неопределённом интеграле нужна постоянная $+ C$. Если её пропустить, позже теряются баллы за граничное условие.',
    },
  },
  {
    id: 'boundary-condition',
    term: { en: 'boundary condition', ru: 'граничное условие (boundary condition)' },
    def: {
      en: 'A known point $(x_0, y_0)$ that the curve must pass through. Substituting it into the anti-derivative gives the value of the constant of integration $C$.',
      ru: 'Известная точка $(x_0, y_0)$, через которую должна проходить кривая. Подстановка этой точки в первообразную даёт значение постоянной интегрирования $C$.',
    },
    syllabus: '5.5',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'Substitute the point into the anti-derivative including $C$, then solve for $C$ before you use the curve.',
      ru: 'Подставляйте точку в первообразную вместе с $C$, затем найдите $C$ и только после этого используйте кривую.',
    },
  },
  {
    id: 'definite-integral-as-area',
    term: { en: 'definite integral', ru: 'определённый интеграл (definite integral)' },
    def: {
      en: 'The number $\\int_a^b f(x)\\,dx = F(b) - F(a)$, where $F$ is an anti-derivative of $f$. When $f(x) > 0$ on $[a, b]$ it equals the area between the curve, the x-axis, $x = a$ and $x = b$.',
      ru: 'Число $\\int_a^b f(x)\\,dx = F(b) - F(a)$, где $F$ — первообразная $f$. Если $f(x) > 0$ на отрезке $[a, b]$, оно равно площади между кривой, осью $x$, прямыми $x = a$ и $x = b$.',
    },
    syllabus: '5.5',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'A definite integral is negative when the region lies below the x-axis, so check the sign of $f(x)$ before you call the value an area.',
      ru: 'Определённый интеграл отрицателен, если область лежит под осью $x$, поэтому перед тем как назвать значение площадью, проверьте знак $f(x)$.',
    },
  },
];
