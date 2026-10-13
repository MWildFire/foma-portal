import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: 'b2-4-algorithms',
  subject: 'cs',
  code: 'B2.4',
  title: { en: 'Programming algorithms', ru: 'Алгоритмы' },
  papers: ['P2'],
  order: 22,
  minutes: 60,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    {
      en: 'I can count the operations of a short algorithm and give its Big O efficiency in the worst case, such as O(1), O(n) or O(n^2)',
      ru: 'Умею подсчитать операции короткого алгоритма и назвать его эффективность по Big O в худшем случае, например O(1), O(n) или O(n^2)',
    },
    {
      en: 'I can construct and trace a linear search and a binary search, and explain why binary search needs sorted data',
      ru: 'Умею написать и проследить линейный и двоичный поиск и объяснить, почему двоичному поиску нужны отсортированные данные',
    },
    {
      en: 'I can construct and trace bubble sort and selection sort, counting the comparisons and swaps in each pass',
      ru: 'Умею написать и проследить пузырьковую сортировку и сортировку выбором, подсчитывая сравнения и обмены в каждом проходе',
    },
    {
      en: 'I can evaluate the time and space complexity of bubble sort and selection sort for a data set of a given size',
      ru: 'Умею оценить временную и пространственную сложность пузырьковой сортировки и сортировки выбором для набора данных заданного размера',
    },
    {
      en: 'I can explain recursion, including the base case and the recursive case',
      ru: 'Умею объяснить рекурсию, включая базовый случай и рекурсивный случай',
    },
    {
      en: 'I can construct and trace a recursive function with a trace table, and explain the call stack and stack overflow',
      ru: 'Умею написать и проследить рекурсивную функцию с помощью таблицы трассировки и объяснить стек вызовов и переполнение стека',
    },
  ],
  termIds: [
    'b2-4-big-o',
    'b2-4-linear-search',
    'b2-4-binary-search',
    'b2-4-sort',
    'b2-4-bubble-sort',
    'b2-4-selection-sort',
    'b2-4-space-complexity',
    'b2-4-recursion',
    'b2-4-base-case',
    'b2-4-call-stack',
    'b2-4-stack-overflow',
    'b2-4-trace-table',
  ],
  formulaIds: ['cs-sort-comparisons', 'cs-binary-worst-case'],
  questionIds: [
    'b2-4-q01',
    'b2-4-q02',
    'b2-4-q03',
    'b2-4-q04',
    'b2-4-q05',
    'b2-4-q06',
    'b2-4-q07',
    'b2-4-q08',
    'b2-4-q09',
    'b2-4-q10',
    'b2-4-q11',
    'b2-4-q12',
  ],
  sims: ['cs.sort-steps', 'cs.binary-search', 'cs.big-o', 'cs.recursion-stack', 'cs.python-runner'],
  sources: [
    { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. B2.4, pp. 376–406' },
  ],
};

export default topic;
