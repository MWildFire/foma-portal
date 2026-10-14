import type { Term } from '../../../../src/contract/types';
import { BOOK_TITLE } from '../../book';

export const terms: Term[] = [
  {
    id: 'markov-transition-matrix',
    term: { en: 'transition matrix', ru: 'матрица переходов (transition matrix)' },
    def: {
      en: 'A square matrix whose entries are the probabilities of moving between states in one step. In this course each column sums to 1; the column for a state gives its next-step probabilities.',
      ru: 'Квадратная матрица, элементы которой — вероятности перехода между состояниями за один шаг. В этом курсе сумма каждого столбца равна 1; столбец состояния даёт вероятности следующего шага.',
    },
    syllabus: '4.19',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 9.5, p. 404' },
    pitfall: {
      en: 'Some sources put the current state in the rows. Read the convention in the question and transpose the matrix if needed before multiplying.',
      ru: 'В некоторых источниках текущее состояние записано в строках. Прочитайте условие и при необходимости транспонируйте матрицу перед умножением.',
    },
    sim: 'math.markov-lab',
  },
  {
    id: 'markov-regular-chain',
    term: { en: 'regular Markov chain', ru: 'регулярная цепь Маркова (regular Markov chain)' },
    def: {
      en: 'A Markov chain is regular when some power of its transition matrix has only positive entries. A regular chain has exactly one steady state, reached from any starting state.',
      ru: 'Цепь Маркова регулярна, если некоторая степень её матрицы переходов имеет только положительные элементы. У регулярной цепи ровно одно установившееся распределение, к которому приходят из любого начального состояния.',
    },
    syllabus: '4.19',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 9.6, p. 408' },
    pitfall: {
      en: 'A zero entry in T does not rule out regularity. Check T squared, T cubed and so on.',
      ru: 'Нулевой элемент в T ещё не исключает регулярность. Проверьте T², T³ и так далее.',
    },
  },
  {
    id: 'markov-steady-state',
    term: { en: 'steady state', ru: 'установившееся распределение (steady state)' },
    def: {
      en: 'For a regular chain, the long-run state matrix S that satisfies TS = S, with its entries summing to 1. It does not depend on the starting state.',
      ru: 'Долгосрочная матрица состояний S регулярной цепи, которая удовлетворяет TS = S, а сумма её элементов равна 1. Она не зависит от начального состояния.',
    },
    syllabus: '4.19',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 9.6, p. 409' },
    pitfall: {
      en: 'TS = S on its own has infinitely many solutions. Add the condition that the probabilities sum to 1.',
      ru: 'Одно лишь уравнение TS = S имеет бесконечно много решений. Добавьте условие, что вероятности в сумме дают 1.',
    },
  },
];
