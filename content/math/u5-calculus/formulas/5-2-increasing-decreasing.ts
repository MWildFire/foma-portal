import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'increasing-test-derivative',
    tex: "f'(x)>0 \\Rightarrow f \\text{ is increasing}",
    name: { en: 'Increasing test', ru: 'Признак возрастания' },
    meaning: {
      en: 'If the gradient is positive for every x in an interval, then f is increasing on that interval.',
      ru: 'Если градиент положителен при всех x промежутка, то f возрастает на этом промежутке.',
    },
    when: {
      en: 'Deciding where a graph rises, from the sign of f′(x).',
      ru: 'Определение участков роста графика по знаку f′(x).',
    },
    syllabus: '5.2',
    inBooklet: false,
  },
  {
    id: 'decreasing-test-derivative',
    tex: "f'(x)<0 \\Rightarrow f \\text{ is decreasing}",
    name: { en: 'Decreasing test', ru: 'Признак убывания' },
    meaning: {
      en: 'If the gradient is negative for every x in an interval, then f is decreasing on that interval.',
      ru: 'Если градиент отрицателен при всех x промежутка, то f убывает на этом промежутке.',
    },
    when: {
      en: 'Deciding where a graph falls, from the sign of f′(x).',
      ru: 'Определение участков убывания графика по знаку f′(x).',
    },
    syllabus: '5.2',
    inBooklet: false,
  },
];
