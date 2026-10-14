import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'discrete-expected-value',
    tex: 'E(X)=\\sum x\\,P(X=x)',
    name: { en: 'Expected value of a discrete random variable', ru: 'Математическое ожидание дискретной случайной величины (Expected value of a discrete random variable)' },
    meaning: {
      en: 'Add up each value of X multiplied by its probability.',
      ru: 'Сложите каждое значение X, умноженное на его вероятность.',
    },
    when: {
      en: 'Finding the long-run average of a random outcome, such as the average prize in a game.',
      ru: 'Поиск среднего значения случайного исхода в длительной серии испытаний, например среднего выигрыша в игре.',
    },
    syllabus: '4.7',
    inBooklet: true,
  },
  {
    id: 'probability-distribution-sum',
    tex: 'P(X=x_1)+P(X=x_2)+\\cdots+P(X=x_n)=1',
    name: { en: 'Probabilities of a distribution add to 1', ru: 'Вероятности распределения в сумме дают 1 (Probabilities of a distribution add to 1)' },
    meaning: {
      en: 'The probabilities of all possible values of X add to 1, because one of those values must occur.',
      ru: 'Вероятности всех возможных значений X в сумме дают 1, так как одно из этих значений обязательно наступит.',
    },
    when: {
      en: 'Checking that a table is a valid probability distribution, or finding a missing probability.',
      ru: 'Проверка, что таблица является распределением вероятностей, или нахождение недостающей вероятности.',
    },
    syllabus: '4.7',
    inBooklet: false,
  },
  {
    id: 'expected-gain-game',
    tex: 'E(G)=E(X)-c',
    name: { en: 'Expected net gain of a game', ru: 'Ожидаемый чистый выигрыш в игре (Expected net gain of a game)' },
    meaning: {
      en: 'G is the net gain: the prize X minus the cost c of playing. The game is fair when E(G) = 0.',
      ru: 'G — чистый выигрыш: приз X минус стоимость игры c. Игра честная, когда E(G) = 0.',
    },
    when: {
      en: 'Deciding whether a game or a decision is worth taking on average.',
      ru: 'Решение, стоит ли в среднем участвовать в игре или принимать данное решение.',
    },
    syllabus: '4.7',
    inBooklet: false,
  },
];
