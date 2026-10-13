import type { Term } from '../../../../src/contract/types';

// B2.2 Data structures. Definitions are written in our own words from the textbook's key terms and syllabus text.
export const terms: Term[] = [
  {
    id: 'b2-2-static-data-structure',
    term: { en: 'Static data structure', ru: 'статическая структура данных (static data structure)' },
    def: {
      en: 'A data structure whose size is fixed when it is declared, at compile time, and cannot change while the program runs.',
      ru: 'Структура данных, размер которой задаётся при объявлении, на этапе компиляции, и не может меняться, пока программа работает.',
    },
    syllabus: 'B2.2',
    papers: ['P2'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. B2.2, p. 350' },
    example: {
      en: 'A Python tuple of four seat numbers keeps exactly four places from the moment it is created.',
      ru: 'Кортеж из четырёх номеров мест в Python содержит ровно четыре элемента с момента создания.',
    },
    pitfall: {
      en: 'Static refers to the size only. The elements of a Java array can still be changed, but the array cannot grow.',
      ru: 'Статичность относится только к размеру. Элементы массива в Java можно менять, но сам массив нельзя увеличить.',
    },
  },
  {
    id: 'b2-2-dynamic-data-structure',
    term: { en: 'Dynamic data structure', ru: 'динамическая структура данных (dynamic data structure)' },
    def: {
      en: 'A data structure that does not need its size set in advance: memory is allocated as items are added and released when they are removed.',
      ru: 'Структура данных, размер которой не нужно задавать заранее: память выделяется по мере добавления элементов и освобождается при их удалении.',
    },
    syllabus: 'B2.2',
    papers: ['P2'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. B2.2, p. 350' },
    example: {
      en: 'A Python list that grows by one item each time `append()` is called.',
      ru: 'Список в Python, который увеличивается на один элемент при каждом вызове `append()`.',
    },
    pitfall: {
      en: 'Dynamic does not mean unlimited: the computer still needs enough free memory for the items that are stored.',
      ru: 'Динамическая структура не значит неограниченная: компьютеру всё равно нужно достаточно свободной памяти для хранимых элементов.',
    },
  },
  {
    id: 'b2-2-array',
    term: { en: 'Array', ru: 'массив (array)' },
    def: {
      en: 'A static structure that stores several values of the same data type and gives direct access to each element through its index.',
      ru: 'Статическая структура, которая хранит несколько значений одного типа и даёт прямой доступ к каждому элементу по его индексу.',
    },
    syllabus: 'B2.2',
    papers: ['P2'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. B2.2, p. 350' },
    example: {
      en: 'In Java, int[] scores = new int[5]; reserves room for five integers, with indexes 0 to 4.',
      ru: 'В Java строка int[] scores = new int[5]; резервирует место для пяти целых чисел с индексами от 0 до 4.',
    },
    pitfall: {
      en: 'An array has a fixed number of slots. Adding a sixth value to an array of five needs a new, larger array.',
      ru: 'У массива фиксированное число ячеек. Чтобы добавить шестое значение в массив из пяти, нужен новый, больший массив.',
    },
  },
  {
    id: 'b2-2-list',
    term: { en: 'List', ru: 'список (list)' },
    def: {
      en: 'A data structure that stores several items under one variable name. In Java a list holds one data type; in Python one list can hold items of different types.',
      ru: 'Структура данных, которая хранит несколько элементов под одним именем переменной. В Java список хранит значения одного типа; в Python в одном списке могут быть значения разных типов.',
    },
    syllabus: 'B2.2',
    papers: ['P2'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. B2.2, p. 351' },
    example: {
      en: '`names = ["Ada", "Ben"]` creates a Python list with two items.',
      ru: '`names = ["Ada", "Ben"]` создаёт список в Python из двух элементов.',
    },
    pitfall: {
      en: 'A list is dynamic, so its size changes when items are added or removed. Do not confuse it with a static array.',
      ru: 'Список динамический, поэтому его размер меняется при добавлении и удалении элементов. Не путайте его со статическим массивом.',
    },
  },
  {
    id: 'b2-2-index',
    term: { en: 'Index', ru: 'индекс (index)' },
    def: {
      en: 'The position number of an item in a list or an array. In programming the first item has index 0.',
      ru: 'Номер позиции элемента в списке или массиве. В программировании первый элемент имеет индекс 0.',
    },
    syllabus: 'B2.2',
    papers: ['P2'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. B2.2, p. 351' },
    example: {
      en: 'In the list ["red", "green", "blue"], the index 1 gives "green".',
      ru: 'В списке ["red", "green", "blue"] индекс 1 даёт "green".',
    },
    pitfall: {
      en: 'Counting from 1 causes off-by-one errors. For a list of n items the last index is n - 1.',
      ru: 'Счёт с 1 приводит к ошибке на единицу. Для списка из n элементов последний индекс равен n - 1.',
    },
  },
  {
    id: 'b2-2-two-dimensional-list',
    term: { en: 'Two-dimensional list', ru: 'двумерный список (two-dimensional list)' },
    def: {
      en: 'A list whose items are themselves lists, arranged in rows and columns, so each element is found by a row index and a column index.',
      ru: 'Список, элементы которого сами являются списками, расположенными в строках и столбцах; каждый элемент находится по индексу строки и индексу столбца.',
    },
    syllabus: 'B2.2',
    papers: ['P2'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. B2.2, p. 351' },
    example: {
      en: '`grid = [[3, 5, 1], [4, 0, 2]]` has two rows and three columns, and `grid[1][2]` is 2.',
      ru: '`grid = [[3, 5, 1], [4, 0, 2]]` имеет две строки и три столбца, а `grid[1][2]` равно 2.',
    },
    pitfall: {
      en: 'The row index comes first: grid[row][column]. Swapping them gives a different item or an index error.',
      ru: 'Сначала указывается индекс строки: grid[строка][столбец]. Если поменять их местами, получится другой элемент или ошибка индекса.',
    },
  },
  {
    id: 'b2-2-traversal',
    term: { en: 'Traversal', ru: 'обход (traversal)' },
    def: {
      en: 'Visiting every item of a list in turn, either with a loop that uses the index or with an iterator or enumerator that moves from the first item to the last.',
      ru: 'Последовательный просмотр всех элементов списка: циклом с индексом либо итератором (iterator) или перечислителем (enumerator), который переходит от первого элемента к последнему.',
    },
    syllabus: 'B2.2',
    papers: ['P2'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. B2.2, p. 353' },
    example: {
      en: '`for name in names: print(name)` visits each name in the list, in order.',
      ru: 'Код `for name in names: print(name)` по порядку обходит все имена в списке.',
    },
    pitfall: {
      en: 'Adding or removing items while a loop is traversing the same list can make it skip items or repeat them.',
      ru: 'Добавление или удаление элементов во время обхода того же списка может привести к пропуску или повтору элементов.',
    },
  },
  {
    id: 'b2-2-stack',
    term: { en: 'Stack', ru: 'стек (stack)' },
    def: {
      en: 'A last in, first out (LIFO) data structure: items are added (push) and removed (pop) only at the top, and peek reads the top item without removing it.',
      ru: 'Структура данных «последним пришёл — первым ушёл» (last in, first out, LIFO): элементы добавляются (push) и удаляются (pop) только сверху, а peek читает верхний элемент, не удаляя его.',
    },
    syllabus: 'B2.2',
    papers: ['P2'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. B2.2, p. 358' },
    example: {
      en: 'The undo history of an editor works as a stack: the most recent action is the first one that is undone.',
      ru: 'История отмены действий в редакторе работает как стек: первым отменяется самое последнее действие.',
    },
    pitfall: {
      en: 'The item at the bottom cannot be reached until every item above it is removed, so reaching it takes O(n) time.',
      ru: 'До элемента на дне нельзя добраться, пока не удалены все элементы над ним, поэтому доступ к нему занимает O(n) времени.',
    },
  },
  {
    id: 'b2-2-queue',
    term: { en: 'Queue', ru: 'очередь (queue)' },
    def: {
      en: 'A first in, first out (FIFO) data structure: items join at the back (enqueue) and leave from the front (dequeue); front() looks at the front item without removing it.',
      ru: 'Структура данных «первым пришёл — первым ушёл» (first in, first out, FIFO): элементы встают в конец (enqueue) и уходят из начала (dequeue); операция front() читает первый элемент, не удаляя его.',
    },
    syllabus: 'B2.2',
    papers: ['P2'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. B2.2, p. 359' },
    example: {
      en: 'In a print queue, the first document sent to the printer is the first one printed.',
      ru: 'В очереди печати первый документ, отправленный на принтер, печатается первым.',
    },
    pitfall: {
      en: 'Removing the last item of a queue takes O(n) time, because every item in front of it must leave first.',
      ru: 'Удаление последнего элемента очереди занимает O(n) времени, потому что сначала должны уйти все элементы перед ним.',
    },
  },
  {
    id: 'b2-2-tuple',
    term: { en: 'Tuple', ru: 'кортеж (tuple)' },
    def: {
      en: 'A fixed-size Python structure whose elements cannot be changed once it is created. It is the Python example of a static data structure.',
      ru: 'Структура в Python фиксированного размера, элементы которой нельзя изменить после создания. Это пример статической структуры данных в Python.',
    },
    syllabus: 'B2.2',
    papers: ['P2'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. B2.2, p. 357' },
    example: {
      en: '`point = (3, 5)` can be read as `point[0]`, but the statement `point[0] = 4` raises a TypeError.',
      ru: '`point = (3, 5)`: значение `point[0]` можно прочитать, но присваивание `point[0] = 4` вызовет TypeError.',
    },
    pitfall: {
      en: 'Use a list when the items must change and a tuple when the data must stay the same.',
      ru: 'Используйте список, если элементы должны меняться, и кортеж, если данные должны оставаться неизменными.',
    },
  },
];
