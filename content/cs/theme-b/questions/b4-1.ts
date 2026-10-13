import type { Question } from '../../../../src/contract/types';

// Original questions for topic B4.1 Fundamentals of abstract data types (P2). Every Python block was run with python3
// and every answer is the exact printed output. Code in stimulus is identical in EN and RU. Sets are written with
// set([...]) as in the textbook. The code uses no files, no input() and only the standard language features.
export const questions: Question[] = [
  {
    id: 'b4-1-q01',
    subject: 'cs',
    topicIds: ['b4-1-abstract-data-types'],
    paper: 'P2',
    marks: 4,
    command: 'Explain',
    prompt: {
      en: `A programmer uses a queue ADT to hold print jobs for a school printer. The queue supports enqueue, dequeue, peek and isEmpty. Explain how the abstraction of the queue ADT separates what the programmer needs to know from how the queue is implemented. Give one change to the implementation that would not require any change to the programmer's code.`,
      ru: `Программист использует очередь (queue ADT) для хранения заданий на печать в школьном принтере. Очередь поддерживает операции enqueue, dequeue, peek и isEmpty. Объясните, как абстракция очереди как ADT отделяет то, что программисту нужно знать, от того, как очередь реализована. Приведите одно изменение реализации, которое не потребовало бы никаких изменений в коде программиста.`,
    },
    markscheme: {
      en: `[1] The programmer needs to know the operations and what they do: enqueue adds a job at the rear, dequeue removes the job at the front, peek reads the front job and isEmpty tests whether the queue is empty. [1] The programmer does not need to know how the jobs are stored, for example in an array or a linked list, or how the operations move the items internally. [1] The operations form the interface, so the implementation can change behind it while the calls stay the same. [1] A valid change, such as storing the jobs in a linked list instead of an array, with no change to the code that calls the operations.`,
      ru: `[1] Программисту нужно знать операции и то, что они делают: enqueue добавляет задание в конец, dequeue удаляет задание из начала, peek читает первое задание, а isEmpty проверяет, пуста ли очередь. [1] Программисту не нужно знать, как хранятся задания, например в массиве или в связном списке, и как операции внутри перемещают элементы. [1] Операции образуют интерфейс, поэтому реализацию можно менять за ним, а вызовы остаются прежними. [1] Допустимое изменение, например хранение заданий в связном списке вместо массива, без изменений в коде, который вызывает операции.`,
    },
    origin: 'original',
  },
  {
    id: 'b4-1-q02',
    subject: 'cs',
    topicIds: ['b4-1-abstract-data-types'],
    paper: 'P2',
    marks: 3,
    command: 'Describe',
    prompt: {
      en: `A drawing app keeps its last ten actions in a stack ADT so that the user can undo them. Describe how encapsulation protects the stored actions from being changed directly by other parts of the program.`,
      ru: `Приложение для рисования хранит последние десять действий в стеке (stack ADT), чтобы пользователь мог их отменить. Опишите, как инкапсуляция защищает сохранённые действия от прямого изменения другими частями программы.`,
    },
    markscheme: {
      en: `[1] Encapsulation means the actions can only be reached through the defined operations, such as push, pop and peek. [1] Other parts of the program cannot change the internal storage directly, for example by inserting an action in the middle or deleting one, so the last in, first out order is kept. [1] Because the storage is hidden, it can later be changed, for example to a linked list, without affecting the rest of the program.`,
      ru: `[1] Инкапсуляция означает, что к действиям можно обратиться только через определённые операции, например push, pop и peek. [1] Другие части программы не могут менять внутреннее хранилище напрямую, например вставить действие в середину или удалить его, поэтому порядок «последним пришёл — первым ушёл» сохраняется. [1] Поскольку хранилище скрыто, его можно позже заменить, например на связный список, не затрагивая остальную программу.`,
    },
    origin: 'original',
  },
  {
    id: 'b4-1-q03',
    subject: 'cs',
    topicIds: ['b4-1-abstract-data-types'],
    paper: 'P2',
    marks: 5,
    command: 'Trace',
    prompt: {
      en: `The program below uses a stack ADT. Trace the program: write down the contents of the stack after each push and pop, then state each of the five lines the program prints.`,
      ru: `Программа ниже использует стек (stack ADT). Проследите программу: запишите содержимое стека после каждой операции push и pop, затем укажите каждую из пяти строк, которые программа выводит.`,
    },
    stimulus: {
      en: `Study the class and the statements below.

\`\`\`python
class Stack:
    def __init__(self):
        self.items = []

    def push(self, value):
        self.items.append(value)

    def pop(self):
        return self.items.pop()


stack = Stack()
stack.push(4)
stack.push(9)
stack.push(2)
print(stack.items)
stack.pop()
stack.push(7)
print(stack.items)
stack.pop()
stack.pop()
print(stack.items)
print(stack.pop())
print(stack.items)
\`\`\``,
      ru: `Изучите класс и операторы ниже.

\`\`\`python
class Stack:
    def __init__(self):
        self.items = []

    def push(self, value):
        self.items.append(value)

    def pop(self):
        return self.items.pop()


stack = Stack()
stack.push(4)
stack.push(9)
stack.push(2)
print(stack.items)
stack.pop()
stack.push(7)
print(stack.items)
stack.pop()
stack.pop()
print(stack.items)
print(stack.pop())
print(stack.items)
\`\`\``,
    },
    markscheme: {
      en: `[1] Line 1: [4, 9, 2]. [1] Line 2: [4, 9, 7], after the pop removes 2 and the push adds 7. [1] Line 3: [4], after two pops remove 7 and 9. [1] Line 4: 4, the value removed by the last pop. [1] Line 5: [], because the stack is empty.`,
      ru: `[1] Строка 1: [4, 9, 2]. [1] Строка 2: [4, 9, 7], после того как pop удаляет 2, а push добавляет 7. [1] Строка 3: [4], после двух операций pop, которые удаляют 7 и 9. [1] Строка 4: 4, значение, которое сняла последняя операция pop. [1] Строка 5: [], потому что стек пуст.`,
    },
    answer: `[4, 9, 2]\n[4, 9, 7]\n[4]\n4\n[]`,
    origin: 'original',
  },
  {
    id: 'b4-1-q04',
    subject: 'cs',
    topicIds: ['b4-1-abstract-data-types'],
    paper: 'P2',
    marks: 4,
    command: 'Trace',
    prompt: {
      en: `The program below uses a queue ADT for customers at a counter. (a) Trace the program and state the three lines it prints. (b) Outline how a queue can serve customers in the order they arrive. Use the output of the program to support your answer.`,
      ru: `Программа ниже использует очередь (queue ADT) для покупателей у прилавка. (а) Проследите программу и укажите три строки, которые она выводит. (б) Кратко опишите, как очередь может обслуживать покупателей в порядке прихода. Подкрепите ответ выводом программы.`,
    },
    stimulus: {
      en: `Study the class and the statements below.

\`\`\`python
class Queue:
    def __init__(self):
        self.items = []

    def enqueue(self, value):
        self.items.append(value)

    def dequeue(self):
        return self.items.pop(0)

    def is_empty(self):
        return len(self.items) == 0


queue = Queue()
queue.enqueue("ann")
queue.enqueue("ben")
queue.enqueue("cy")
first = queue.dequeue()
print(first, queue.items)
queue.enqueue("dan")
second = queue.dequeue()
print(second, queue.items)
queue.dequeue()
queue.dequeue()
print(queue.is_empty(), queue.items)
\`\`\``,
      ru: `Изучите класс и операторы ниже.

\`\`\`python
class Queue:
    def __init__(self):
        self.items = []

    def enqueue(self, value):
        self.items.append(value)

    def dequeue(self):
        return self.items.pop(0)

    def is_empty(self):
        return len(self.items) == 0


queue = Queue()
queue.enqueue("ann")
queue.enqueue("ben")
queue.enqueue("cy")
first = queue.dequeue()
print(first, queue.items)
queue.enqueue("dan")
second = queue.dequeue()
print(second, queue.items)
queue.dequeue()
queue.dequeue()
print(queue.is_empty(), queue.items)
\`\`\``,
    },
    markscheme: {
      en: `[1] Line 1: ann ['ben', 'cy']. [1] Line 2: ben ['cy', 'dan']. [1] Line 3: True []. [1] Outline: customers join at the rear with enqueue and are served from the front with dequeue, so the first customer to arrive is the first served (first in, first out). The output shows ann and then ben leaving in their arrival order.`,
      ru: `[1] Строка 1: ann ['ben', 'cy']. [1] Строка 2: ben ['cy', 'dan']. [1] Строка 3: True []. [1] Кратко: покупатели встают в конец очереди через enqueue и обслуживаются с её начала через dequeue, поэтому первым обслуживается тот, кто пришёл первым (первым пришёл — первым ушёл). Вывод показывает, что ann и затем ben уходят в порядке прихода.`,
    },
    answer: `ann ['ben', 'cy']\nben ['cy', 'dan']\nTrue []`,
    origin: 'original',
  },
  {
    id: 'b4-1-q05',
    subject: 'cs',
    topicIds: ['b4-1-abstract-data-types'],
    paper: 'P2',
    marks: 4,
    command: 'Trace',
    prompt: {
      en: `The program below uses a singly linked list. (a) Trace the program and state the three lines it prints. (b) Explain why insert_at_head takes the same time whatever the length of the list.`,
      ru: `Программа ниже использует односвязный список. (а) Проследите программу и укажите три строки, которые она выводит. (б) Объясните, почему insert_at_head занимает одно и то же время, какой бы длины ни был список.`,
    },
    stimulus: {
      en: `Study the classes and the statements below.

\`\`\`python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList:
    def __init__(self):
        self.head = None

    def insert_at_head(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node

    def insert_after(self, target, data):
        current = self.head
        while current is not None:
            if current.data == target:
                new_node = Node(data)
                new_node.next = current.next
                current.next = new_node
                return
            current = current.next

    def remove_first(self):
        if self.head is not None:
            self.head = self.head.next

    def to_list(self):
        values = []
        current = self.head
        while current is not None:
            values.append(current.data)
            current = current.next
        return values


items = LinkedList()
items.insert_at_head(3)
items.insert_at_head(8)
items.insert_at_head(5)
print(items.to_list())
items.insert_after(8, 6)
print(items.to_list())
items.remove_first()
print(items.to_list())
\`\`\``,
      ru: `Изучите классы и операторы ниже.

\`\`\`python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList:
    def __init__(self):
        self.head = None

    def insert_at_head(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node

    def insert_after(self, target, data):
        current = self.head
        while current is not None:
            if current.data == target:
                new_node = Node(data)
                new_node.next = current.next
                current.next = new_node
                return
            current = current.next

    def remove_first(self):
        if self.head is not None:
            self.head = self.head.next

    def to_list(self):
        values = []
        current = self.head
        while current is not None:
            values.append(current.data)
            current = current.next
        return values


items = LinkedList()
items.insert_at_head(3)
items.insert_at_head(8)
items.insert_at_head(5)
print(items.to_list())
items.insert_after(8, 6)
print(items.to_list())
items.remove_first()
print(items.to_list())
\`\`\``,
    },
    markscheme: {
      en: `[1] Line 1: [5, 8, 3]. [1] Line 2: [5, 8, 6, 3], after 6 is inserted after the node holding 8. [1] Line 3: [8, 6, 3], after the head node is removed. [1] Explanation: insert_at_head creates one node and changes the head pointer, a fixed number of steps, so it is O(1). It does not need to traverse the list.`,
      ru: `[1] Строка 1: [5, 8, 3]. [1] Строка 2: [5, 8, 6, 3], после того как 6 вставлено за узел со значением 8. [1] Строка 3: [8, 6, 3], после удаления головного узла. [1] Объяснение: insert_at_head создаёт один узел и меняет указатель головы, то есть выполняет фиксированное число шагов, поэтому время O(1). Список обходить не нужно.`,
    },
    answer: `[5, 8, 3]\n[5, 8, 6, 3]\n[8, 6, 3]`,
    origin: 'original',
  },
  {
    id: 'b4-1-q06',
    subject: 'cs',
    topicIds: ['b4-1-abstract-data-types'],
    paper: 'P2',
    marks: 5,
    command: 'Construct',
    prompt: {
      en: `The stimulus shows a singly linked list with insert_at_head and to_list. Construct the method remove(value) for the LinkedList class. It must remove the first node that holds value and keep the rest of the list linked. It must work when the node to remove is the head, and it must do nothing, without an error, when value is not in the list. For example, after items.remove(8), to_list() returns [5, 6].`,
      ru: `В условии показан односвязный список с методами insert_at_head и to_list. Постройте метод remove(value) для класса LinkedList. Он должен удалить первый узел, в котором хранится value, и сохранить связность остальной части списка. Метод должен работать, когда удаляемый узел является головой, и ничего не делать без ошибки, если value нет в списке. Например, после items.remove(8) метод to_list() возвращает [5, 6].`,
    },
    stimulus: {
      en: `Study the classes and the statements below. The method remove is not written yet.

\`\`\`python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList:
    def __init__(self):
        self.head = None

    def insert_at_head(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node

    def to_list(self):
        values = []
        current = self.head
        while current is not None:
            values.append(current.data)
            current = current.next
        return values


items = LinkedList()
items.insert_at_head(6)
items.insert_at_head(8)
items.insert_at_head(5)
print(items.to_list())
\`\`\``,
      ru: `Изучите классы и операторы ниже. Метод remove ещё не написан.

\`\`\`python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList:
    def __init__(self):
        self.head = None

    def insert_at_head(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node

    def to_list(self):
        values = []
        current = self.head
        while current is not None:
            values.append(current.data)
            current = current.next
        return values


items = LinkedList()
items.insert_at_head(6)
items.insert_at_head(8)
items.insert_at_head(5)
print(items.to_list())
\`\`\``,
    },
    markscheme: {
      en: `[1] Starts a current node at the head and moves it with current = current.next until the value is found. [1] Handles the head: if head.data equals value, sets head to head.next and stops. [1] Keeps a reference to the previous node, so that when the value is found, previous.next is set to current.next and the node is unlinked. [1] Stops after the first match, so only one node is removed. [1] Does nothing, without an error, when the value is not in the list, for example by checking that current is not None before using it.`,
      ru: `[1] Ставит текущий узел на голову и перемещает его через current = current.next, пока не найдёт значение. [1] Обрабатывает голову: если head.data равно value, присваивает head значение head.next и завершает работу. [1] Хранит ссылку на предыдущий узел, чтобы при нахождении значения присвоить previous.next значение current.next и отсоединить узел. [1] Останавливается после первого совпадения, поэтому удаляется только один узел. [1] Ничего не делает, без ошибки, если значения нет в списке, например проверяя, что current не равен None, прежде чем обратиться к нему.`,
    },
    origin: 'original',
  },
  {
    id: 'b4-1-q07',
    subject: 'cs',
    topicIds: ['b4-1-abstract-data-types'],
    paper: 'P2',
    marks: 4,
    command: 'Trace',
    prompt: {
      en: `The program below builds a binary search tree and prints two traversals. (a) Trace the program and state the two lines it prints. (b) Explain why an inorder traversal of any binary search tree prints the keys in ascending order.`,
      ru: `Программа ниже строит бинарное дерево поиска и выводит два обхода. (а) Проследите программу и укажите две строки, которые она выводит. (б) Объясните, почему симметричный обход (inorder) любого бинарного дерева поиска выводит ключи в порядке возрастания.`,
    },
    stimulus: {
      en: `Study the classes and the statements below.

\`\`\`python
class Node:
    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None


class BinarySearchTree:
    def __init__(self):
        self.root = None

    def insert(self, key):
        new_node = Node(key)
        if self.root is None:
            self.root = new_node
            return
        current = self.root
        while True:
            if key < current.key:
                if current.left is None:
                    current.left = new_node
                    return
                current = current.left
            else:
                if current.right is None:
                    current.right = new_node
                    return
                current = current.right

    def preorder(self, node, result):
        if node is not None:
            result.append(node.key)
            self.preorder(node.left, result)
            self.preorder(node.right, result)
        return result

    def inorder(self, node, result):
        if node is not None:
            self.inorder(node.left, result)
            result.append(node.key)
            self.inorder(node.right, result)
        return result


tree = BinarySearchTree()
for key in [25, 12, 40, 8, 18, 33, 45, 30]:
    tree.insert(key)
print(tree.preorder(tree.root, []))
print(tree.inorder(tree.root, []))
\`\`\``,
      ru: `Изучите классы и операторы ниже.

\`\`\`python
class Node:
    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None


class BinarySearchTree:
    def __init__(self):
        self.root = None

    def insert(self, key):
        new_node = Node(key)
        if self.root is None:
            self.root = new_node
            return
        current = self.root
        while True:
            if key < current.key:
                if current.left is None:
                    current.left = new_node
                    return
                current = current.left
            else:
                if current.right is None:
                    current.right = new_node
                    return
                current = current.right

    def preorder(self, node, result):
        if node is not None:
            result.append(node.key)
            self.preorder(node.left, result)
            self.preorder(node.right, result)
        return result

    def inorder(self, node, result):
        if node is not None:
            self.inorder(node.left, result)
            result.append(node.key)
            self.inorder(node.right, result)
        return result


tree = BinarySearchTree()
for key in [25, 12, 40, 8, 18, 33, 45, 30]:
    tree.insert(key)
print(tree.preorder(tree.root, []))
print(tree.inorder(tree.root, []))
\`\`\``,
    },
    markscheme: {
      en: `[1] Line 1, preorder: [25, 12, 8, 18, 40, 33, 30, 45]. [1] Line 2, inorder: [8, 12, 18, 25, 30, 33, 40, 45]. [1] In a binary search tree every node has smaller keys in its left subtree and larger keys in its right subtree. [1] Inorder visits the left subtree, then the node, then the right subtree, so the keys come out in ascending order.`,
      ru: `[1] Строка 1, прямой обход (preorder): [25, 12, 8, 18, 40, 33, 30, 45]. [1] Строка 2, симметричный обход (inorder): [8, 12, 18, 25, 30, 33, 40, 45]. [1] В бинарном дереве поиска у каждого узла в левом поддереве ключи меньше, а в правом больше. [1] Симметричный обход посещает сначала левое поддерево, затем узел, затем правое, поэтому ключи выходят в порядке возрастания.`,
    },
    answer: `[25, 12, 8, 18, 40, 33, 30, 45]\n[8, 12, 18, 25, 30, 33, 40, 45]`,
    origin: 'original',
  },
  {
    id: 'b4-1-q08',
    subject: 'cs',
    topicIds: ['b4-1-abstract-data-types'],
    paper: 'P2',
    marks: 4,
    command: 'To what extent',
    prompt: {
      en: `A scheduler gives each process a short turn in round-robin order, and the processes are held in a circular linked list. To what extent is a circular linked list a suitable ADT for this task? Support your judgement with both benefits and drawbacks.`,
      ru: `Планировщик даёт каждому процессу короткий отрезок времени по кругу (round-robin), а процессы хранятся в циклическом связном списке. В какой степени циклический связный список подходит в качестве ADT для этой задачи? Подкрепите вывод и преимуществами, и недостатками.`,
    },
    markscheme: {
      en: `[1] Benefit: the last process links back to the first, which matches the repeating cycle of round-robin, so the scheduler moves on without a special case at the end of the list. [1] Benefit: a reference to the tail lets a new process be added after the last one in O(1) time. [1] Drawback: adding or removing a process means updating the pointers that close the circle, which is more complex than changing an array index. [1] Judgement with reasons: suitable to a large extent, because the cycle matches the task, provided the traversal stops after one full turn; otherwise the loop never ends.`,
      ru: `[1] Преимущество: последний процесс ссылается на первый, что совпадает с повторяющимся циклом round-robin, поэтому планировщик переходит дальше без особого случая в конце списка. [1] Преимущество: ссылка на хвост позволяет добавить новый процесс после последнего за время O(1). [1] Недостаток: при добавлении или удалении процесса нужно обновить указатели, которые замыкают круг, а это сложнее, чем изменить индекс массива. [1] Вывод с обоснованием: в значительной степени подходит, потому что цикл совпадает с задачей, при условии что обход останавливается после одного полного круга; иначе цикл не закончится.`,
    },
    origin: 'original',
  },
  {
    id: 'b4-1-q09',
    subject: 'cs',
    topicIds: ['b4-1-abstract-data-types'],
    paper: 'P2',
    marks: 5,
    command: 'Trace',
    prompt: {
      en: `The program below uses sets for the attendees of a club and for a backup list. Trace the program and state the five lines it prints.`,
      ru: `Программа ниже использует множества (set) для участников клуба и для резервного списка. Проследите программу и укажите пять строк, которые она выводит.`,
    },
    stimulus: {
      en: `Study the statements below.

\`\`\`python
attendees = set(["Ana", "Ben", "Cara", "Dev"])
backup = set(["Cara", "Dev", "Eli"])
print(sorted(attendees.union(backup)))
print(sorted(attendees.intersection(backup)))
print(sorted(attendees.difference(backup)))
attendees.add("Ana")
attendees.add("Fay")
print(len(attendees))
print(set(["Cara", "Dev"]).issubset(attendees))
\`\`\``,
      ru: `Изучите операторы ниже.

\`\`\`python
attendees = set(["Ana", "Ben", "Cara", "Dev"])
backup = set(["Cara", "Dev", "Eli"])
print(sorted(attendees.union(backup)))
print(sorted(attendees.intersection(backup)))
print(sorted(attendees.difference(backup)))
attendees.add("Ana")
attendees.add("Fay")
print(len(attendees))
print(set(["Cara", "Dev"]).issubset(attendees))
\`\`\``,
    },
    markscheme: {
      en: `[1] Line 1, the union: ['Ana', 'Ben', 'Cara', 'Dev', 'Eli']. [1] Line 2, the intersection: ['Cara', 'Dev']. [1] Line 3, the difference: ['Ana', 'Ben']. [1] Line 4: 5, because adding Ana again changes nothing and adding Fay adds one new element. [1] Line 5: True, because Cara and Dev are both in attendees.`,
      ru: `[1] Строка 1, объединение: ['Ana', 'Ben', 'Cara', 'Dev', 'Eli']. [1] Строка 2, пересечение: ['Cara', 'Dev']. [1] Строка 3, разность: ['Ana', 'Ben']. [1] Строка 4: 5, потому что повторное добавление Ana ничего не меняет, а добавление Fay даёт один новый элемент. [1] Строка 5: True, потому что Cara и Dev есть в attendees.`,
    },
    answer: `['Ana', 'Ben', 'Cara', 'Dev', 'Eli']\n['Cara', 'Dev']\n['Ana', 'Ben']\n5\nTrue`,
    origin: 'original',
  },
  {
    id: 'b4-1-q10',
    subject: 'cs',
    topicIds: ['b4-1-abstract-data-types'],
    paper: 'P2',
    marks: 3,
    command: 'Calculate',
    prompt: {
      en: `A hash table has 10 buckets and stores 8 key–value pairs. The table is resized when its load factor is greater than 0.7. (a) Calculate the load factor. (b) State whether the table must be resized. (c) Explain how a high load factor affects the time needed to search the table.`,
      ru: `Хеш-таблица имеет 10 ячеек (buckets) и хранит 8 пар «ключ–значение». Таблицу перестраивают, когда коэффициент заполнения (load factor) больше 0,7. (а) Вычислите коэффициент заполнения. (б) Укажите, нужно ли перестраивать таблицу. (в) Объясните, как высокий коэффициент заполнения влияет на время поиска в таблице.`,
    },
    markscheme: {
      en: `[1] (a) Load factor = 8 / 10 = 0.8. [1] (b) Yes: 0.8 is greater than 0.7, so the table is resized and every entry is rehashed. [1] (c) More keys share the same index, so collisions increase and a search checks more entries in each bucket. The average time rises above O(1), towards O(n) in the worst case.`,
      ru: `[1] (а) Коэффициент заполнения = 8 / 10 = 0,8. [1] (б) Да: 0,8 больше 0,7, поэтому таблицу перестраивают и все записи заново хешируют. [1] (в) Больше ключей попадают в один индекс, коллизий становится больше, и поиск проверяет больше записей в каждой ячейке. Среднее время растёт выше O(1), в худшем случае почти до O(n).`,
    },
    answer: '0.8',
    origin: 'original',
  },
];
