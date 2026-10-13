import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: 'b4-1-abstract-data-types',
  subject: 'cs',
  code: 'B4.1',
  title: { en: 'Fundamentals of abstract data types', ru: 'Основы абстрактных типов данных' },
  papers: ['P2'],
  hl: true,
  order: 26,
  minutes: 45,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    {
      en: 'I can explain what an abstract data type (ADT) is, and describe its interface, abstraction, encapsulation and modularity',
      ru: 'Умею объяснить, что такое абстрактный тип данных (ADT), и описать его интерфейс, абстракцию, инкапсуляцию и модульность',
    },
    {
      en: 'I can evaluate a linked list against an array, using dynamic size, the cost of insertion and deletion, the memory used by pointers and the access time',
      ru: 'Умею сравнить связный список с массивом, учитывая динамический размер, стоимость вставки и удаления, память под указатели и время доступа',
    },
    {
      en: 'I can construct and trace singly, doubly and circular linked lists, including insertion, deletion and search, and state which pointers change at each step',
      ru: 'Умею построить и проследить односвязный, двусвязный и циклический списки, включая вставку, удаление и поиск, и назвать указатели, которые меняются на каждом шаге',
    },
    {
      en: 'I can explain the structure and properties of a binary search tree (BST), and insert keys and search for them in the correct order',
      ru: 'Умею объяснить структуру и свойства бинарного дерева поиска (BST), вставлять в него ключи и искать их по правилам порядка',
    },
    {
      en: 'I can construct and apply a set as an ADT, using add, remove, membership testing, union, intersection and difference',
      ru: 'Умею построить и применить множество как ADT: добавление, удаление, проверку принадлежности, объединение, пересечение и разность',
    },
    {
      en: 'I can explain how a hash table stores key–value pairs, and how the hashing function, collisions and the load factor affect its speed',
      ru: 'Умею объяснить, как хеш-таблица хранит пары «ключ–значение», и как на её скорость влияют хеш-функция, коллизии и коэффициент заполнения',
    },
    {
      en: 'I can trace stack and queue operations and state the contents of the stack or queue after each operation',
      ru: 'Умею проследить операции со стеком и очередью и назвать содержимое стека или очереди после каждой операции',
    },
  ],
  termIds: [
    'b4-1-adt',
    'b4-1-abstraction',
    'b4-1-encapsulation',
    'b4-1-linked-list',
    'b4-1-doubly-linked-list',
    'b4-1-circular-linked-list',
    'b4-1-bst',
    'b4-1-set',
    'b4-1-hash-table',
    'b4-1-insertion',
    'b4-1-deletion',
    'b4-1-search',
  ],
  questionIds: [
    'b4-1-q01',
    'b4-1-q02',
    'b4-1-q03',
    'b4-1-q04',
    'b4-1-q05',
    'b4-1-q06',
    'b4-1-q07',
    'b4-1-q08',
    'b4-1-q09',
    'b4-1-q10',
  ],
  sims: ['cs.stack-queue', 'cs.linked-list', 'cs.bst'],
  sources: [
    { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. B4.1, pp. 549–581' },
  ],
};

export default topic;
