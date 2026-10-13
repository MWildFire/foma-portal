import type { Term } from '../../../../src/contract/types';

// Key terms for topic B4.1 Fundamentals of abstract data types (P2). Definitions are in our own words, based on the
// textbook key-term boxes and the text on the printed pages given in src.locator (ch. B4.1, p. N).
const BOOK = 'Oxford IB DP Computer Science Course Companion (2025)';

export const terms: Term[] = [
  {
    id: 'b4-1-adt',
    term: { en: 'Abstract data type (ADT)', ru: 'абстрактный тип данных (abstract data type, ADT)' },
    def: {
      en: 'A data type defined by the operations allowed on its data, which together form its interface. How the data is stored and how each operation works are not part of the definition.',
      ru: 'Тип данных, который задаётся набором операций, разрешённых над его данными; вместе эти операции образуют интерфейс. Способ хранения данных и устройство каждой операции в определение не входят.',
    },
    syllabus: 'B4.1',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B4.1, p. 551' },
    example: {
      en: 'A queue ADT offers enqueue, dequeue, peek and isEmpty. It has no sort operation, so the stored items cannot be sorted through the queue.',
      ru: 'У очереди как ADT есть операции enqueue, dequeue, peek и isEmpty. Операции сортировки нет, поэтому отсортировать элементы через очередь нельзя.',
    },
    pitfall: {
      en: 'An ADT is a specification, not one program. An array and a linked list can both implement the same ADT, and code that uses the ADT does not change when the implementation does.',
      ru: 'ADT — это спецификация, а не одна программа. И массив, и связный список могут реализовать один и тот же ADT, а код, который использует ADT, не меняется при смене реализации.',
    },
  },
  {
    id: 'b4-1-abstraction',
    term: { en: 'Abstraction', ru: 'абстракция (abstraction)' },
    def: {
      en: 'The principle that a user of an ADT needs to know what its operations do, not how they are implemented or how the data is stored.',
      ru: 'Принцип, по которому пользователю ADT нужно знать, что делают операции, а не как они реализованы и как устроено хранение данных.',
    },
    syllabus: 'B4.1',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B4.1, p. 550' },
    example: {
      en: 'A programmer can call enqueue and dequeue on a queue without knowing whether the items are kept in an array or in a linked list.',
      ru: 'Программист может вызывать enqueue и dequeue у очереди, не зная, хранятся ли элементы в массиве или в связном списке.',
    },
    pitfall: {
      en: 'Abstraction is not the same as encapsulation. Abstraction hides how the operations work; encapsulation stops other code from touching the stored data directly.',
      ru: 'Абстракция — не то же самое, что инкапсуляция. Абстракция скрывает, как работают операции; инкапсуляция не даёт другому коду напрямую трогать хранимые данные.',
    },
  },
  {
    id: 'b4-1-encapsulation',
    term: { en: 'Encapsulation', ru: 'инкапсуляция (encapsulation)' },
    def: {
      en: 'Keeping the data inside an ADT, so that it can be read or changed only through the operations defined for that ADT.',
      ru: 'Скрытие данных внутри ADT: их можно читать или менять только через операции, которые определены для этого типа.',
    },
    syllabus: 'B4.1',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B4.1, p. 550' },
    example: {
      en: 'A stack ADT keeps its items in a private list. A program can call push and pop, but it cannot insert an item into the middle of the list.',
      ru: 'Стек как ADT хранит элементы в закрытом списке. Программа может вызвать push и pop, но не может вставить элемент в середину списка.',
    },
    pitfall: {
      en: 'Encapsulation controls which code can use the data. It does not make the operations faster, and it does not stop errors inside the operations themselves.',
      ru: 'Инкапсуляция определяет, какой код может обращаться к данным. Она не ускоряет операции и не защищает от ошибок внутри самих операций.',
    },
  },
  {
    id: 'b4-1-linked-list',
    term: { en: 'Linked list', ru: 'связный список (linked list)' },
    def: {
      en: 'A sequence of nodes, each holding a data value and a pointer to the next node, so that the nodes form a chain.',
      ru: 'Структура данных из последовательности узлов; каждый узел хранит значение и указатель на следующий узел, поэтому узлы образуют цепочку.',
    },
    syllabus: 'B4.1',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B4.1, p. 552' },
    example: {
      en: 'A playlist in which each song holds a pointer to the next song. Adding a song in the middle changes two pointers, and no other song moves.',
      ru: 'Плейлист, в котором каждая песня хранит указатель на следующую. Добавление песни в середину меняет два указателя, и остальные песни не перемещаются.',
    },
    pitfall: {
      en: 'Nodes are not stored side by side in memory. The list is followed through pointers, so reaching the tenth node means following nine pointers from the head.',
      ru: 'Узлы не обязательно лежат рядом в памяти. По списку идут по указателям, поэтому чтобы дойти до десятого узла, нужно пройти девять указателей от головы.',
    },
  },
  {
    id: 'b4-1-doubly-linked-list',
    term: { en: 'Doubly linked list', ru: 'двусвязный список (doubly linked list)' },
    def: {
      en: 'A linked list in which each node also points back to the previous node, so the list can be followed forwards and backwards.',
      ru: 'Связный список, в котором каждый узел, кроме указателя на следующий узел, хранит указатель на предыдущий, поэтому список можно обходить в обе стороны.',
    },
    syllabus: 'B4.1',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B4.1, p. 558' },
    example: {
      en: 'A music player that moves to the previous or next track. With head and tail references, a track can be added at either end in O(1) time.',
      ru: 'Музыкальный проигрыватель, который переходит к предыдущему или следующему треку. Благодаря ссылкам на голову и хвост трек можно добавить в любой конец за время O(1).',
    },
    pitfall: {
      en: 'Inserting a node between two others changes four pointers, two in each direction. Updating only the next pointers breaks the backward traversal.',
      ru: 'Вставка узла между двумя другими меняет четыре указателя: по два в каждом направлении. Если менять только указатели next, обход назад сломается.',
    },
  },
  {
    id: 'b4-1-circular-linked-list',
    term: { en: 'Circular linked list', ru: 'циклический связный список (circular linked list)' },
    def: {
      en: 'A linked list in which the final node links back to the head instead of to None, so the nodes form a loop.',
      ru: 'Связный список, в котором последний узел ссылается на первый, а не на None, поэтому узлы образуют замкнутый круг.',
    },
    syllabus: 'B4.1',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B4.1, p. 563' },
    example: {
      en: 'Round-robin scheduling: each process gets a turn, and after the last process the scheduler returns to the first one.',
      ru: 'Планирование round-robin: каждый процесс получает свой отрезок времени, а после последнего процесса планировщик возвращается к первому.',
    },
    pitfall: {
      en: 'A loop that runs while the current node is not None never stops on a circular list. Stop when the traversal returns to the head, after one full pass.',
      ru: 'Цикл, который работает, пока текущий узел не равен None, на циклическом списке никогда не остановится. Остановись, когда обход вернётся к голове, то есть после одного полного круга.',
    },
  },
  {
    id: 'b4-1-bst',
    term: { en: 'Binary search tree (BST)', ru: 'двоичное дерево поиска (binary search tree, BST)' },
    def: {
      en: 'A binary tree of nodes with unique keys, in which every node has at most two children. Keys in the left subtree of a node are smaller than its key, and keys in the right subtree are larger.',
      ru: 'Двоичное дерево поиска из узлов с уникальными ключами; у каждого узла не больше двух потомков. Ключи в левом поддереве узла меньше его ключа, а ключи в правом поддереве больше.',
    },
    syllabus: 'B4.1',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B4.1, p. 568' },
    example: {
      en: 'Inserting 40, then 20, then 60 gives a root of 40 with 20 on the left and 60 on the right. Searching for 60 starts at the root and goes right once.',
      ru: 'Вставка 40, затем 20 и 60 даёт корень 40, слева от него 20, справа 60. Поиск 60 начинается с корня и один раз уходит вправо.',
    },
    pitfall: {
      en: 'Inserting keys in sorted order builds a chain that behaves like a linked list, so search takes O(n) instead of O(log n).',
      ru: 'Если вставлять ключи в отсортированном порядке, получается цепочка, которая ведёт себя как связный список: поиск занимает O(n) вместо O(log n).',
    },
  },
  {
    id: 'b4-1-set',
    term: { en: 'Set', ru: 'множество (set)' },
    def: {
      en: 'An ADT that stores a collection of distinct elements with no particular order. Adding an element that is already present changes nothing.',
      ru: 'ADT, который хранит набор различных элементов без определённого порядка. Добавление уже имеющегося элемента ничего не меняет.',
    },
    syllabus: 'B4.1',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B4.1, p. 572' },
    example: {
      en: 'A set of email addresses for a newsletter. An address that is added twice is stored only once.',
      ru: 'Множество адресов электронной почты подписчиков рассылки. Адрес, добавленный дважды, хранится один раз.',
    },
    pitfall: {
      en: 'A set has no order, so its items cannot be read by position. Print sorted(...) of the set when you need a predictable order.',
      ru: 'У множества нет порядка, поэтому его элементы нельзя взять по позиции. Если нужен предсказуемый вывод, печатай sorted(...) от множества.',
    },
  },
  {
    id: 'b4-1-hash-table',
    term: { en: 'Hash table', ru: 'хеш-таблица (hash table)' },
    def: {
      en: 'A structure that stores key–value pairs and uses a hashing function to turn each key into an index, so lookup, insertion and deletion are usually O(1).',
      ru: 'Структура, которая хранит пары «ключ–значение»; хеш-функция превращает каждый ключ в индекс, поэтому поиск, вставка и удаление обычно выполняются за время O(1).',
    },
    syllabus: 'B4.1',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B4.1, p. 576' },
    example: {
      en: 'A Python dict is a hash table. After `dict["Ann"] = 18`, the lookup `dict["Ann"]` returns 18 without checking every key.',
      ru: 'Словарь dict в Python — это хеш-таблица. После присваивания `dict["Ann"] = 18` запрос `dict["Ann"]` возвращает 18, не проверяя все ключи подряд.',
    },
    pitfall: {
      en: 'O(1) is an average, not a guarantee. With many collisions and a high load factor, operations can slow down towards O(n).',
      ru: 'O(1) — это среднее время, а не гарантия. При большом числе коллизий и высоком коэффициенте заполнения операции могут замедлиться почти до O(n).',
    },
  },
  {
    id: 'b4-1-insertion',
    term: { en: 'Insertion', ru: 'вставка (insertion)' },
    def: {
      en: 'The operation that adds a new element to an ADT. How it is carried out depends on the type of ADT.',
      ru: 'Операция, которая добавляет новый элемент в ADT; способ её выполнения зависит от типа ADT.',
    },
    syllabus: 'B4.1',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B4.1, p. 554' },
    example: {
      en: 'Adding a node at the head of a singly linked list takes O(1) time, because only the head pointer and the new node change.',
      ru: 'Добавление узла в начало односвязного списка занимает время O(1), потому что меняются только указатель головы и новый узел.',
    },
    pitfall: {
      en: 'The same word can hide different costs. Adding at the end of a singly linked list without a tail pointer takes O(n), because the list must be traversed first.',
      ru: 'Одно и то же слово может скрывать разные затраты. Добавление в конец односвязного списка без указателя на хвост занимает O(n), потому что сначала нужно пройти весь список.',
    },
  },
  {
    id: 'b4-1-deletion',
    term: { en: 'Deletion', ru: 'удаление (deletion)' },
    def: {
      en: 'The operation that removes an element from an ADT. How the removal works varies with the type of ADT.',
      ru: 'Операция, которая удаляет элемент из ADT; способ удаления зависит от типа ADT.',
    },
    syllabus: 'B4.1',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B4.1, p. 554' },
    example: {
      en: 'Deleting the head node of a singly linked list takes O(1) time: the head pointer moves to the second node.',
      ru: 'Удаление головного узла односвязного списка занимает время O(1): указатель головы переходит ко второму узлу.',
    },
    pitfall: {
      en: 'To delete a node from the middle of a singly linked list, link the node before it to the node after it. Changing only the deleted node leaves it in the chain.',
      ru: 'Чтобы удалить узел из середины односвязного списка, свяжи узел перед ним с узлом после него. Если менять только сам удаляемый узел, он останется в цепочке.',
    },
  },
  {
    id: 'b4-1-search',
    term: { en: 'Search', ru: 'поиск (search)' },
    def: {
      en: 'The operation of locating an element in an ADT that meets a given condition.',
      ru: 'Операция поиска элемента в ADT, который удовлетворяет заданному условию.',
    },
    syllabus: 'B4.1',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B4.1, p. 554' },
    example: {
      en: 'Finding 30 in a binary search tree: compare with the root, go left or right at each node, and stop when the key matches.',
      ru: 'Поиск 30 в бинарном дереве поиска: сравниваем с корнем, на каждом узле уходим влево или вправо и останавливаемся, когда ключ совпал.',
    },
    pitfall: {
      en: 'Searching a linked list takes O(n) in the worst case, because the nodes must be visited one by one, even when the list is sorted.',
      ru: 'Поиск в связном списке занимает O(n) в худшем случае: узлы нужно проходить по одному, даже если список отсортирован.',
    },
  },
];
