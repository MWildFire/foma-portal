import type { Question } from '../../../../src/contract/types';

// B2.2 questions: original Paper 2 questions. Every printed output was checked by running the Python code with python3.
export const questions: Question[] = [
  {
    id: 'b2-2-q01',
    subject: 'cs',
    topicIds: ['b2-2-data-structures'],
    paper: 'P2',
    marks: 4,
    command: 'Distinguish',
    prompt: {
      en: 'Distinguish between a static data structure and a dynamic data structure. In your answer, refer to how each one handles its size, its memory and its speed of access.',
      ru: 'Проведите различие между статической структурой данных (static data structure) и динамической структурой данных (dynamic data structure). В ответе опишите, как каждая из них работает с размером, памятью и скоростью доступа.',
    },
    markscheme: {
      en: '[1] a static structure has a size that is fixed when it is declared; a dynamic structure does not need its size set in advance and can grow or shrink. [1] a static structure reserves memory for its full size even if some elements are empty; a dynamic structure is given memory as items are added and releases it when they are removed. [1] a dynamic structure is more memory efficient when the number of items is unknown. [1] a static structure is usually slightly quicker to access by index, because the memory of a dynamic structure may be fragmented.',
      ru: '[1] размер статической структуры задаётся при объявлении и не меняется; у динамической структуры размер заранее не задаётся, и она может расти или уменьшаться. [1] статическая структура резервирует память под весь размер, даже если часть элементов пуста; динамическая получает память по мере добавления элементов и освобождает её при удалении. [1] динамическая структура экономнее расходует память, когда число элементов неизвестно. [1] статическая структура обычно немного быстрее при доступе по индексу, потому что память динамической структуры может быть фрагментирована.',
    },
    origin: 'original',
  },
  {
    id: 'b2-2-q02',
    subject: 'cs',
    topicIds: ['b2-2-data-structures'],
    paper: 'P2',
    marks: 3,
    command: 'Justify',
    prompt: {
      en: 'A quiz app stores the answers to a fixed set of 12 questions. A second list stores the names of players on a leaderboard, and the number of players is not known in advance. Justify, for each list, whether a static or a dynamic data structure is more suitable.',
      ru: 'Приложение-викторина хранит ответы на фиксированный набор из 12 вопросов. Второй список хранит имена игроков в таблице результатов, и заранее неизвестно, сколько будет игроков. Обоснуйте для каждого списка, какая структура данных подходит лучше: статическая или динамическая.',
    },
    markscheme: {
      en: '[1] a static structure suits the 12 answers, because their number is known and will not change. [1] a dynamic structure suits the leaderboard, because the number of players is unknown and can grow. [1] a valid reason, for example: a dynamic list uses only the memory it needs, while a static list of the wrong size either wastes memory or cannot hold every player.',
      ru: '[1] статическая структура подходит для 12 ответов, потому что их число известно и не меняется. [1] динамическая структура подходит для таблицы результатов, потому что число игроков неизвестно и может расти. [1] верное обоснование, например: динамический список занимает только нужную память, а статический список неподходящего размера либо тратит память зря, либо не вмещает всех игроков.',
    },
    origin: 'original',
  },
  {
    id: 'b2-2-q03',
    subject: 'cs',
    topicIds: ['b2-2-data-structures'],
    paper: 'P2',
    marks: 3,
    command: 'Sketch',
    prompt: {
      en: 'Starting from an empty stack, these operations are carried out in this order: push(4), push(9), pop(), push(2), push(6). Sketch the stack after the last operation and label the top of the stack.',
      ru: 'Начиная с пустого стека, выполняются операции в таком порядке: push(4), push(9), pop(), push(2), push(6). Нарисуйте стек после последней операции и подпишите его вершину (top).',
    },
    markscheme: {
      en: '[1] 4 is drawn at the bottom; 9 is not in the stack because pop() removed it. [1] 2 is drawn directly above 4. [1] 6 is drawn at the top and labelled as the top item, so the stack holds three items.',
      ru: '[1] 4 нарисовано внизу стека; 9 в стеке нет, потому что pop() его удалил. [1] 2 нарисовано сразу над 4. [1] 6 нарисовано наверху и подписано как вершина (top), поэтому в стеке три элемента.',
    },
    origin: 'original',
  },
  {
    id: 'b2-2-q04',
    subject: 'cs',
    topicIds: ['b2-2-data-structures'],
    paper: 'P2',
    marks: 2,
    command: 'Define',
    prompt: {
      en: 'Define the term queue as a data structure.',
      ru: 'Дайте определение термину «очередь» (queue) как структуры данных.',
    },
    markscheme: {
      en: '[1] a first in, first out (FIFO) structure in which the first item added is the first item removed. [1] items join at the back of the queue and are removed from the front.',
      ru: '[1] структура «первым пришёл — первым ушёл» (FIFO), в которой первый добавленный элемент первым же и удаляется. [1] новые элементы встают в конец очереди, а удаляются из её начала.',
    },
    origin: 'original',
  },
  {
    id: 'b2-2-q05',
    subject: 'cs',
    topicIds: ['b2-2-data-structures'],
    paper: 'P2',
    marks: 4,
    command: 'Trace',
    prompt: {
      en: 'Complete the trace table for the program below. For each pass through the loop, record i, values[i] and total after any change made in that pass. Then state the value that the program prints.',
      ru: 'Заполните таблицу трассировки для программы ниже. Для каждого прохода цикла запишите i, values[i] и total после изменения, которое произошло в этом проходе. Затем укажите значение, которое напечатает программа.',
    },
    stimulus: {
      en: 'The program below uses a list and a loop.\n\n```python\nvalues = [4, 9, 2, 7, 5]\ntotal = 0\nfor i in range(len(values)):\n    if values[i] % 2 == 1:\n        total = total + values[i]\nprint(total)\n```',
      ru: 'В программе ниже используются список и цикл.\n\n```python\nvalues = [4, 9, 2, 7, 5]\ntotal = 0\nfor i in range(len(values)):\n    if values[i] % 2 == 1:\n        total = total + values[i]\nprint(total)\n```',
    },
    markscheme: {
      en: '[1] pass 1: i = 0, value 4, total = 0; pass 2: i = 1, value 9, total = 9. [1] pass 3: i = 2, value 2, total = 9; pass 4: i = 3, value 7, total = 16. [1] pass 5: i = 4, value 5, total = 21. [1] the program prints 21.',
      ru: '[1] проход 1: i = 0, значение 4, total = 0; проход 2: i = 1, значение 9, total = 9. [1] проход 3: i = 2, значение 2, total = 9; проход 4: i = 3, значение 7, total = 16. [1] проход 5: i = 4, значение 5, total = 21. [1] программа печатает 21.',
    },
    answer: '21',
    origin: 'original',
  },
  {
    id: 'b2-2-q06',
    subject: 'cs',
    topicIds: ['b2-2-data-structures'],
    paper: 'P2',
    marks: 3,
    command: 'State',
    prompt: {
      en: 'State the three lines printed by the program.',
      ru: 'Укажите три строки, которые напечатает программа.',
    },
    stimulus: {
      en: 'The list is changed in three steps before it is printed.\n\n```python\nnames = ["Ada", "Ben", "Cy"]\nnames.append("Dee")\nnames.remove("Ben")\ndel names[0]\nfor name in names:\n    print(name)\nprint(len(names))\n```',
      ru: 'Перед печатью список меняется в три шага.\n\n```python\nnames = ["Ada", "Ben", "Cy"]\nnames.append("Dee")\nnames.remove("Ben")\ndel names[0]\nfor name in names:\n    print(name)\nprint(len(names))\n```',
    },
    markscheme: {
      en: '[1] Cy. [1] Dee. [1] 2 (the list ends as ["Cy", "Dee"]).',
      ru: '[1] Cy. [1] Dee. [1] 2 (в конце список равен ["Cy", "Dee"]).',
    },
    answer: 'Cy\nDee\n2',
    origin: 'original',
  },
  {
    id: 'b2-2-q07',
    subject: 'cs',
    topicIds: ['b2-2-data-structures'],
    paper: 'P2',
    marks: 3,
    command: 'Explain',
    prompt: {
      en: 'The function below uses a list as a stack to check that every opening bracket has a closing one. State the two lines printed by the program, and explain why the second line is False.',
      ru: 'Функция ниже использует список как стек, чтобы проверить, что у каждой открывающей скобки есть закрывающая. Укажите две строки, которые напечатает программа, и объясните, почему вторая строка — False.',
    },
    stimulus: {
      en: 'The function returns True when the brackets in the text are matched.\n\n```python\ndef is_balanced(text):\n    stack = []\n    for ch in text:\n        if ch == "(":\n            stack.append(ch)\n        elif ch == ")":\n            if len(stack) == 0:\n                return False\n            stack.pop()\n    return len(stack) == 0\n\nprint(is_balanced("(a(b)c)"))\nprint(is_balanced("(()"))\n```',
      ru: 'Функция возвращает True, когда скобки в тексте сбалансированы.\n\n```python\ndef is_balanced(text):\n    stack = []\n    for ch in text:\n        if ch == "(":\n            stack.append(ch)\n        elif ch == ")":\n            if len(stack) == 0:\n                return False\n            stack.pop()\n    return len(stack) == 0\n\nprint(is_balanced("(a(b)c)"))\nprint(is_balanced("(()"))\n```',
    },
    markscheme: {
      en: '[1] True. [1] False. [1] the second text has an opening bracket that is never closed, so one item is still on the stack at the end and len(stack) is not 0.',
      ru: '[1] True. [1] False. [1] во второй строке есть открывающая скобка, которая не закрыта: в конце в стеке остаётся один элемент, поэтому len(stack) не равно 0.',
    },
    answer: 'True\nFalse',
    origin: 'original',
  },
  {
    id: 'b2-2-q08',
    subject: 'cs',
    topicIds: ['b2-2-data-structures'],
    paper: 'P2',
    marks: 4,
    command: 'State',
    prompt: {
      en: '(a) State the three lines printed by the program. (b) State the Big O notation for the operation that removes the first job from the queue.',
      ru: '(a) Укажите три строки, которые напечатает программа. (b) Укажите обозначение Big O для операции, которая удаляет первое задание из очереди.',
    },
    stimulus: {
      en: 'The program below uses the deque class from the standard library as a queue.\n\n```python\nfrom collections import deque\n\njobs = deque()\njobs.append("report")\njobs.append("poster")\njobs.append("photo")\nfirst = jobs.popleft()\nprint(first)\nprint(jobs[0])\nprint(len(jobs))\n```',
      ru: 'Программа ниже использует класс deque из стандартной библиотеки как очередь.\n\n```python\nfrom collections import deque\n\njobs = deque()\njobs.append("report")\njobs.append("poster")\njobs.append("photo")\nfirst = jobs.popleft()\nprint(first)\nprint(jobs[0])\nprint(len(jobs))\n```',
    },
    markscheme: {
      en: '[1] report. [1] poster. [1] 2. [1] O(1): removing the front item takes the same time however many jobs are waiting in the queue.',
      ru: '[1] report. [1] poster. [1] 2. [1] O(1): удаление первого элемента занимает одинаково много времени, сколько бы заданий ни стояло в очереди.',
    },
    answer: 'report\nposter\n2',
    origin: 'original',
  },
  {
    id: 'b2-2-q09',
    subject: 'cs',
    topicIds: ['b2-2-data-structures'],
    paper: 'P2',
    marks: 4,
    command: 'Construct',
    prompt: {
      en: 'The function below is a stub: it always returns an empty string. Construct the body of reverse_word(word) so that it uses a stack (a list with append() and pop()) to return the characters of word in reverse order. The call on the last line should then print kcats. Write the code, not only a description.',
      ru: 'Функция ниже — заготовка: она всегда возвращает пустую строку. Напишите тело функции reverse_word(word) так, чтобы она с помощью стека (списка с методами append() и pop()) возвращала символы слова в обратном порядке. Тогда вызов в последней строке напечатает kcats. Напишите код, а не только описание.',
    },
    stimulus: {
      en: 'The stub is part of an unfinished program.\n\n```python\ndef reverse_word(word):\n    # stub: the stack method is not written yet\n    return ""\n\nprint(reverse_word("stack"))\n```',
      ru: 'Заготовка является частью незаконченной программы.\n\n```python\ndef reverse_word(word):\n    # заготовка: метод со стеком ещё не написан\n    return ""\n\nprint(reverse_word("stack"))\n```',
    },
    markscheme: {
      en: '[1] an empty list is created to act as the stack, and a loop goes through each character of word. [1] each character is added to the stack with append(). [1] the characters are removed one by one with pop() while the stack is not empty, and joined into a new string. [1] the function returns the new string with return (it does not print it), so the call prints kcats.',
      ru: '[1] создаётся пустой список как стек, и цикл перебирает все символы слова. [1] каждый символ добавляется в стек методом append(). [1] символы по одному извлекаются методом pop(), пока стек не пуст, и собираются в новую строку. [1] функция возвращает новую строку оператором return (а не печатает её), поэтому вызов печатает kcats.',
    },
    origin: 'original',
  },
  {
    id: 'b2-2-q10',
    subject: 'cs',
    topicIds: ['b2-2-data-structures'],
    paper: 'P2',
    marks: 4,
    command: 'Calculate',
    prompt: {
      en: 'Calculate the two values printed by the program. Show the total and the count of values before the division.',
      ru: 'Вычислите два значения, которые напечатает программа. Покажите сумму и количество значений до деления.',
    },
    stimulus: {
      en: 'The program below works with a two-dimensional list.\n\n```python\ngrid = [[3, 5, 1], [4, 0, 2]]\ntotal = 0\ncount = 0\nfor row in grid:\n    for value in row:\n        total = total + value\n        count = count + 1\nprint(total / count)\nprint(grid[1][2])\n```',
      ru: 'Программа ниже работает с двумерным списком.\n\n```python\ngrid = [[3, 5, 1], [4, 0, 2]]\ntotal = 0\ncount = 0\nfor row in grid:\n    for value in row:\n        total = total + value\n        count = count + 1\nprint(total / count)\nprint(grid[1][2])\n```',
    },
    markscheme: {
      en: '[1] total = 3 + 5 + 1 + 4 + 0 + 2 = 15. [1] count = 6, one for each value in the two rows. [1] the first line printed is 15 / 6 = 2.5. [1] the second line printed is the element in row 1, column 2, which is 2.',
      ru: '[1] сумма total = 3 + 5 + 1 + 4 + 0 + 2 = 15. [1] count = 6, по одному на каждое значение в двух строках. [1] первая напечатанная строка: 15 / 6 = 2.5. [1] вторая напечатанная строка: элемент в строке 1 и столбце 2, то есть 2.',
    },
    answer: '2.5\n2',
    origin: 'original',
  },
];
