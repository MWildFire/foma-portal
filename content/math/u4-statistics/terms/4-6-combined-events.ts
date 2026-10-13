import type { Term } from '../../../../src/contract/types';

const source = {
  kind: 'web' as const,
  title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
  locator: 'sub-topic 4.6',
  url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
};

export const terms: Term[] = [
  {
    id: 'venn-diagram-events',
    term: { en: 'Venn diagram', ru: 'диаграмма Венна (Venn diagram)' },
    def: {
      en: 'A diagram of overlapping circles inside the sample space $U$. The regions show A only, B only, both A and B (the intersection $A \\cap B$), and neither.',
      ru: 'Диаграмма из перекрывающихся кругов внутри пространства выборки $U$. Области показывают: только $A$, только $B$, одновременно $A$ и $B$ (пересечение $A \\cap B$) и ни $A$, ни $B$.',
    },
    syllabus: '4.6',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'Fill the overlap first. The part of A outside B is $n(A) - n(A \\cap B)$, not $n(A)$.',
      ru: 'Сначала заполните пересечение. Часть A вне B равна $n(A) - n(A \\cap B)$, а не $n(A)$.',
    },
  },
  {
    id: 'mutually-exclusive-events',
    term: { en: 'mutually exclusive events', ru: 'несовместные события (mutually exclusive events)' },
    def: {
      en: 'Events A and B that cannot occur together, so $A \\cap B$ is empty and $P(A \\cup B) = P(A) + P(B)$.',
      ru: 'События A и B, которые не могут произойти вместе: $A \\cap B$ пусто, и $P(A \\cup B) = P(A) + P(B)$.',
    },
    syllabus: '4.6',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'Mutually exclusive events are not independent when both have non-zero probability: $P(A \\cap B) = 0$ is not equal to $P(A)\\,P(B)$.',
      ru: 'Несовместные события не являются независимыми, если у обоих ненулевая вероятность: $P(A \\cap B) = 0$ не равно $P(A)\\,P(B)$.',
    },
  },
  {
    id: 'conditional-probability',
    term: { en: 'conditional probability', ru: 'условная вероятность (conditional probability)' },
    def: {
      en: 'The probability of A given that B has occurred: $P(A \\mid B) = \\dfrac{P(A \\cap B)}{P(B)}$. The sample space is reduced to B.',
      ru: 'Вероятность события A при условии, что B произошло: $P(A \\mid B) = \\dfrac{P(A \\cap B)}{P(B)}$. Пространство выборки сужается до B.',
    },
    syllabus: '4.6',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'The given event B goes in the denominator. $P(A \\mid B)$ and $P(B \\mid A)$ are usually different.',
      ru: 'Заданное событие B стоит в знаменателе. $P(A \\mid B)$ и $P(B \\mid A)$, как правило, различны.',
    },
  },
  {
    id: 'independent-events',
    term: { en: 'independent events', ru: 'независимые события (independent events)' },
    def: {
      en: 'Events A and B for which knowing that B occurred does not change the probability of A: $P(A \\cap B) = P(A)\\,P(B)$, or equivalently $P(A \\mid B) = P(A)$.',
      ru: 'События A и B, для которых известие о том, что B произошло, не меняет вероятность A: $P(A \\cap B) = P(A)\\,P(B)$, или, что то же самое, $P(A \\mid B) = P(A)$.',
    },
    syllabus: '4.6',
    papers: ['P1', 'P2', 'P3'],
    src: source,
  },
];
