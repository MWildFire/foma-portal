import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'markov-state-after-n-steps',
    tex: 'S_{n+1}=T\\,S_{n},\\qquad S_{n}=T^{n}\\,S_{0}',
    name: { en: 'State after n steps', ru: 'Состояние после n шагов (State after n steps)' },
    meaning: {
      en: 'S_n is the column of state probabilities after n steps, S_0 the initial state matrix and T the transition matrix (columns sum to 1).',
      ru: 'S_n — столбец вероятностей состояний после n шагов, S_0 — начальная матрица состояний, T — матрица переходов (суммы столбцов равны 1).',
    },
    when: {
      en: 'Predicting the distribution of states after a given number of steps.',
      ru: 'Прогноз распределения состояний через заданное число шагов.',
    },
    syllabus: '4.19',
    inBooklet: false,
    example: {
      en: 'With T = [0.8 0.3; 0.2 0.7] and S_0 = (1, 0): S_1 = (0.80, 0.20) and S_2 = (0.70, 0.30).',
      ru: 'При T = [0,8 0,3; 0,2 0,7] и S_0 = (1; 0): S_1 = (0,80; 0,20) и S_2 = (0,70; 0,30).',
    },
  },
  {
    id: 'markov-regular-condition',
    tex: 'T^{k}\\,\\text{has only positive entries for some integer }k\\ge 1',
    name: { en: 'Regularity condition', ru: 'Условие регулярности (Regularity condition)' },
    meaning: {
      en: 'A chain is regular if some power T^k, with k at least 1, has only positive entries.',
      ru: 'Цепь регулярна, если некоторая степень T^k при k не меньше 1 имеет только положительные элементы.',
    },
    when: {
      en: 'Before using a steady state: a zero entry in T does not rule out regularity, so check T squared and higher powers.',
      ru: 'Перед использованием установившегося распределения: нулевой элемент в T ещё не исключает регулярность, поэтому проверьте T² и более высокие степени.',
    },
    syllabus: '4.19',
    inBooklet: false,
  },
  {
    id: 'markov-steady-state-equation',
    tex: 'TS=S,\\qquad \\sum_{i} s_{i}=1',
    name: { en: 'Steady state equations', ru: 'Уравнения установившегося распределения (Steady state equations)' },
    meaning: {
      en: 'The steady state column S satisfies TS = S, and its entries s_i sum to 1.',
      ru: 'Столбец установившегося распределения S удовлетворяет TS = S, а его элементы s_i в сумме дают 1.',
    },
    when: {
      en: 'Finding the long-run distribution exactly, by solving a system of linear equations.',
      ru: 'Точный поиск долгосрочного распределения решением системы линейных уравнений.',
    },
    syllabus: '4.19',
    inBooklet: false,
    example: {
      en: 'With T = [0.8 0.3; 0.2 0.7]: 0.8a + 0.3b = a and a + b = 1 give a = 0.60 and b = 0.40.',
      ru: 'При T = [0,8 0,3; 0,2 0,7]: 0,8a + 0,3b = a и a + b = 1 дают a = 0,60 и b = 0,40.',
    },
  },
];
