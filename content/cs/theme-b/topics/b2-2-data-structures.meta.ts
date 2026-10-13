import type { TopicMeta } from '../../../../src/contract/types';

const meta: TopicMeta = {
  id: 'b2-2-data-structures',
  subject: 'cs',
  code: 'B2.2',
  title: { en: 'Data structures', ru: 'Структуры данных' },
  papers: ['P2'],
  order: 20,
  minutes: 45,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    {
      en: 'I can compare static and dynamic data structures by size, memory use and speed of access.',
      ru: 'Умею сравнивать статические и динамические структуры данных по размеру, использованию памяти и скорости доступа.',
    },
    {
      en: 'I can choose a suitable data structure for a described situation and justify my choice.',
      ru: 'Умею выбрать подходящую структуру данных для описанной ситуации и обосновать свой выбор.',
    },
    {
      en: 'I can write Python code that creates a list, adds and removes items, and traverses the list.',
      ru: 'Умею писать код на Python, который создаёт список, добавляет и удаляет элементы и обходит список.',
    },
    {
      en: 'I can access and change the items of a two-dimensional list using row and column indexes.',
      ru: 'Умею обращаться к элементам двумерного списка по индексам строки и столбца и менять их.',
    },
    {
      en: 'I can explain a stack as a last in, first out structure and trace its push, pop and peek operations.',
      ru: 'Умею объяснять стек как структуру «последним пришёл — первым ушёл» и прослеживать операции push, pop и peek.',
    },
    {
      en: 'I can explain a queue as a first in, first out structure and trace its enqueue, dequeue and front operations.',
      ru: 'Умею объяснять очередь как структуру «первым пришёл — первым ушёл» и прослеживать операции enqueue, dequeue и front.',
    },
    {
      en: 'I can state the time efficiency of stack and queue operations in Big O notation.',
      ru: 'Умею называть эффективность операций стека и очереди в обозначении Big O.',
    },
  ],
  termIds: [
    'b2-2-static-data-structure',
    'b2-2-dynamic-data-structure',
    'b2-2-array',
    'b2-2-list',
    'b2-2-index',
    'b2-2-two-dimensional-list',
    'b2-2-traversal',
    'b2-2-stack',
    'b2-2-queue',
    'b2-2-tuple',
  ],
  sims: ['cs.python-runner'],
  questionIds: [
    'b2-2-q01',
    'b2-2-q02',
    'b2-2-q03',
    'b2-2-q04',
    'b2-2-q05',
    'b2-2-q06',
    'b2-2-q07',
    'b2-2-q08',
    'b2-2-q09',
    'b2-2-q10',
  ],
  sources: [
    { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. B2.2, pp. 350–361' },
  ],
};

export default meta;
