import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'addition-rule-two-events',
    tex: 'P(A\\cup B)=P(A)+P(B)-P(A\\cap B)',
    name: { en: 'Addition rule for two events', ru: 'Правило сложения для двух событий (Addition rule for two events)' },
    meaning: {
      en: 'The probability that A or B or both occur. The overlap is subtracted so that it is counted once.',
      ru: 'Вероятность того, что произойдёт A, B или оба события. Пересечение вычитается, чтобы учесть его один раз.',
    },
    when: {
      en: 'Combined events that can overlap. For mutually exclusive events the last term is zero.',
      ru: 'Составные события, которые могут пересекаться. Для несовместных событий последнее слагаемое равно нулю.',
    },
    syllabus: '4.6',
    inBooklet: true,
  },
  {
    id: 'conditional-probability-formula',
    tex: 'P(A\\mid B)=\\dfrac{P(A\\cap B)}{P(B)}',
    name: { en: 'Conditional probability', ru: 'Условная вероятность (Conditional probability)' },
    meaning: {
      en: 'The probability of A given that B has occurred.',
      ru: 'Вероятность события A при условии, что событие B произошло.',
    },
    when: {
      en: 'The question says "given", "knowing that" or "if", or it restricts the outcomes to B.',
      ru: 'В вопросе стоят слова «при условии», «зная, что» или «если», либо исходы ограничиваются событием B.',
    },
    syllabus: '4.6',
    inBooklet: true,
    example: {
      en: 'Of 24 students who study German, 12 also study French, so P(French | German) = 12/24 = 0.500.',
      ru: 'Из 24 учеников, изучающих немецкий, 12 изучают также французский, поэтому P(французский | немецкий) = 12/24 = 0,500.',
    },
  },
  {
    id: 'independence-product-rule',
    tex: 'P(A\\cap B)=P(A)\\,P(B)',
    name: { en: 'Test for independent events', ru: 'Проверка независимых событий (Test for independent events)' },
    meaning: {
      en: 'For independent events, the probability that both occur is the product of their probabilities.',
      ru: 'Для независимых событий вероятность того, что произойдут оба, равна произведению их вероятностей.',
    },
    when: {
      en: 'Checking whether two events are independent, or finding the probability that both occur when independence is given.',
      ru: 'Проверка, независимы ли два события, или нахождение вероятности того, что произойдут оба, когда независимость дана.',
    },
    syllabus: '4.6',
    inBooklet: true,
  },
  {
    id: 'multiplication-rule-tree',
    tex: 'P(A\\cap B)=P(B)\\,P(A\\mid B)',
    name: { en: 'Multiplication rule (tree diagram)', ru: 'Правило умножения (дерево вероятностей) (Multiplication rule (tree diagram))' },
    meaning: {
      en: 'Along a branch of a tree diagram, the probability of both events is the first probability times the conditional probability of the second.',
      ru: 'По ветви дерева вероятностей вероятность обоих событий равна первой вероятности, умноженной на условную вероятность второго события.',
    },
    when: {
      en: 'Two-stage experiments, such as drawing two counters one after the other without replacement.',
      ru: 'Двухэтапные опыты, например вытаскивание двух фишек одна за другой без возвращения.',
    },
    syllabus: '4.6',
    inBooklet: true,
  },
];
