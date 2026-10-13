import type { PastPaperRef } from '../../src/contract/types';

// Past and specimen papers linked from the portal. Links go to the IB PDFs on ibdocs.re; the guides are our own analysis.
export const pastPapers: PastPaperRef[] = [
  {
    id: 'cs-p1-m24-tz1-old',
    subject: 'cs',
    paper: 'P1',
    session: 'M24',
    level: 'HL',
    tz: 'TZ1',
    files: [
      {
        kind: 'questions',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2024%20Examination%20Session/May%202024%20Examination%20Session/Experimental%20sciences/Computer_science_paper_1__TZ1_HL.pdf',
      },
      {
        kind: 'markscheme',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2024%20Examination%20Session/May%202024%20Examination%20Session/Experimental%20sciences/Computer_science_paper_1__TZ1_HL_markscheme.pdf',
      },
    ],
    minutes: 130,
    marks: 100,
    items: [
      {
        marks: 3,
        q: '12b',
        topicIds: ['a2-4-security', 'a2-3-transmissions'],
        command: 'Describe',
      },
      {
        marks: 5,
        q: '12c',
        topicIds: ['a2-3-transmissions'],
        command: 'Explain',
      },
      {
        marks: 5,
        q: '15b',
        topicIds: ['b2-2-data-structures'],
        command: 'Describe',
      },
      {
        marks: 5,
        q: '16b',
        topicIds: ['b2-3-programming-constructs', 'b2-4-algorithms'],
        command: 'Copy',
      },
      {
        marks: 8,
        q: '16c',
        topicIds: ['b2-4-algorithms', 'b2-3-programming-constructs'],
        command: 'Construct',
      },
    ],
    guide: {
      en: 'Old programme (before 2027): May 2024 Paper 1 (HL, time zone 1) is worth 100 marks in 2 hours 10 minutes. It has two answer-all sections: Section A (eleven short questions, 25 marks) and Section B (five questions, 75 marks). The five parts below cover data transmission, network security, linked lists and string algorithms, all of which carry over to the new programme.\n\n**Q12(b), Describe (3 marks): encryption during transmission.** Cover three points: plain text is turned into cipher text by an algorithm using a key; the cipher text cannot be read if it is intercepted; the receiver decrypts it with a key.\n- Mistakes: calling encryption compression; describing only one side; confusing encryption with authentication.\n\n**Q12(c), Explain (5 marks): packet switching.** Explain the full sequence: the data is split into fixed-size packets, each with a header and payload (and a trailer); packets travel independently and may take different routes; they can arrive out of order, so they are reordered at the destination; missing packets are re-sent. Examiners credit more points than the cap, so five well-developed points are enough.\n- Mistakes: describing circuit switching (one dedicated path); listing packet fields without explaining how packets are handled; one-sentence answers.\n\n**Q15(b), Describe (5 marks): deleting a node from a linked list.** Describe the traversal: start at the head, keep a pointer to the previous node, move forward until the target is found or the end is reached, then point the previous node at the node after the target and clear the deleted node. Each step earns a mark, up to five.\n- Mistakes: not keeping the previous pointer, so the list cannot be relinked; relinking to the wrong node; no case for a target that is not found; forgetting to release the memory.\n\n**Q16(b), Copy (5 marks): complete a trace table.** Copy the table and fill in each column group, which earns one mark: the J column, the counter and input columns, the Y and Z columns, R, and S. Strings are zero-indexed, so the start index is Y and Z is the length. R is reversed to give S, and S is joined in front of J.\n- Mistakes: treating Z as an end position; reversing before extracting; joining in the wrong order; not updating the counter.\n\n**Q16(c), Construct (8 marks): password algorithm.** Write the full procedure in pseudocode using the given string functions. Marks come from the length check with lenString; a loop with subString that compares each character with the next and stops one character before the end; a flag that skips later checks after a failure; the repeat entry and match check; messages at each stage; and re-running the procedure after a failure.\n- Mistakes: an off-by-one error that skips the last pair; checks still running after a failure; a repeat entry that is never compared; no messages; a loop that does not restart after a rejection.\n\n**Time and mark strategy.** At 130 minutes for 100 marks, budget about 1.3 minutes per mark. Section B holds 75 of the 100 marks, so give the 8-mark pseudocode about 12 minutes and plan its stages before writing. The trace table is quick if you work column by column. Leave time at the end to check zero-indexing and loop bounds, because one such error can cost several marks.',
      ru: '«Старая программа (до 2027):» работа 1 (HL), часовой пояс 1 (TZ1), май 2024 года, 100 баллов за 2 часа 10 минут. Два раздела, все задания обязательны: раздел A (одиннадцать коротких вопросов, 25 баллов) и раздел B (пять вопросов, 75 баллов). Пять частей ниже относятся к передаче данных, безопасности сетей, связным спискам и строковым алгоритмам — всё это переходит в новую программу.\n\n**Вопрос 12(b), Опишите (Describe), 3 балла: шифрование при передаче.** Нужно указать три момента: открытый текст превращается в шифротекст с помощью алгоритма и ключа; шифротекст нельзя прочитать при перехвате; получатель расшифровывает его ключом.\n- Ошибки: шифрование названо сжатием; описана только одна сторона; шифрование смешано с аутентификацией.\n\n**Вопрос 12(c), Объясните (Explain), 5 баллов: коммутация пакетов.** Объясните весь порядок: данные делятся на пакеты фиксированного размера, у каждого есть заголовок и полезная нагрузка (и концевик); пакеты идут независимо и могут выбирать разные маршруты; они могут прийти не по порядку, поэтому в пункте назначения их собирают в правильной последовательности; потерянные пакеты передаются заново. Учитывается больше пунктов, чем нужно, поэтому достаточно пяти хорошо раскрытых.\n- Ошибки: описана коммутация каналов (один выделенный путь); перечислены поля пакета без объяснения, как с ними работают; ответ в одно предложение.\n\n**Вопрос 15(b), Опишите, 5 баллов: удаление узла из связного списка.** Опишите обход: начните с головы списка, держите указатель на предыдущий узел, двигайтесь вперёд, пока не найдёте цель или не дойдёте до конца, затем направьте указатель предыдущего узла на узел за целевым и освободите память удаляемого узла. Каждый шаг даёт балл, но не больше пяти.\n- Ошибки: нет указателя на предыдущий узел, поэтому связь не восстановить; связь направлена не на тот узел; не предусмотрен случай, когда цель не найдена; память не освобождается.\n\n**Вопрос 16(b), Скопируйте и заполните (Copy), 5 баллов: таблица трассировки.** Скопируйте таблицу и заполните её; каждая группа столбцов даёт один балл: столбец J, столбцы счётчика и входных данных, столбцы Y и Z, R и S. Строки индексируются с нуля: начальный индекс — Y, а Z — длина фрагмента. R переворачивают, получая S, и S добавляют перед J.\n- Ошибки: Z принято за конечную позицию; переворот до извлечения; неверный порядок при соединении; не обновлён счётчик.\n\n**Вопрос 16(c), Постройте (Construct), 8 баллов: алгоритм проверки пароля.** Запишите всю процедуру на псевдокоде с использованием данных строковых функций. Баллы: проверка длины через lenString; цикл с subString, который сравнивает каждый символ со следующим и останавливается на один символ раньше конца; флаг, который пропускает следующие проверки после ошибки; повторный ввод и проверка совпадения; сообщения на каждом этапе; повторный запуск процедуры после ошибки.\n- Ошибки: смещение на единицу, из-за которого пропущена последняя пара; проверки продолжаются после ошибки; повторный ввод не сравнивается; нет сообщений; цикл не начинается заново после отказа.\n\n**Время и баллы.** 130 минут на 100 баллов — около 1,3 минуты на балл. Большая часть баллов (75 из 100) — в разделе B, поэтому на псевдокод на 8 баллов уйдёт около 12 минут; сначала распишите этапы. Таблицу трассировки проще заполнять по столбцам. В конце оставьте время, чтобы проверить индексы и границы циклов: одна такая ошибка может стоить сразу нескольких баллов.',
    },
  },
  {
    id: 'cs-p2-m24-old',
    subject: 'cs',
    paper: 'P2',
    session: 'M24',
    level: 'HL',
    files: [
      {
        kind: 'questions',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2024%20Examination%20Session/May%202024%20Examination%20Session/Experimental%20sciences/Computer_science_paper_2__HL.pdf',
      },
      {
        kind: 'markscheme',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2024%20Examination%20Session/May%202024%20Examination%20Session/Experimental%20sciences/Computer_science_paper_2__HL_markscheme.pdf',
      },
    ],
    minutes: 80,
    marks: 65,
    items: [
      {
        marks: 4,
        q: '1e',
        option: 'A',
        topicIds: ['a3-3-sql'],
        command: 'Identify',
      },
      {
        marks: 5,
        q: '3c',
        option: 'A',
        topicIds: ['a3-2-design'],
        command: 'Construct',
      },
      {
        marks: 4,
        q: '9f',
        option: 'C',
        topicIds: ['a2-1-fundamentals'],
        command: 'Describe',
      },
      {
        marks: 3,
        q: '14g',
        option: 'D',
        topicIds: ['b3-2-oop-multiple-classes'],
        command: 'Construct',
      },
      {
        marks: 8,
        q: '16b',
        option: 'D',
        topicIds: ['b2-2-data-structures', 'b2-4-algorithms'],
        command: 'Construct',
      },
      {
        marks: 5,
        q: '19d',
        option: 'D',
        topicIds: ['b2-2-data-structures', 'b2-4-algorithms'],
        command: 'Construct',
      },
    ],
    guide: {
      en: 'Old programme (before 2027): May 2024 Paper 2 (HL) is worth 65 marks in 1 hour 20 minutes. Students answer all the questions from one of four options: A (databases), B (modelling and simulation), C (web science) or D (object-oriented programming). The six parts below come from options A, C and D because they match the new topics. In the exam, answer one option only.\n\n**Option A, Q1(e), Identify (4 marks): steps for a query.** The query counts the sites where one plant was found on one date, using the plant and distribution tables. Marks are for the two correct tables, counting the site identifiers, the species and date conditions, and the join on the plant key. A plain COUNT is accepted; DISTINCT is a safe habit where a site could repeat.\n- Mistakes: no join condition, which pairs every row with every row; filtering on the wrong table; counting plants rather than sites; a date format that does not match the data.\n\n**Option A, Q3(c), Construct (5 marks): second normal form.** Convert the unnormalised athletics data into 2NF. Marks: a primary key for the athletics table (composite or a new ID), a split into two tables, a primary key for the new table, a foreign key in the athletics table, and correct fields in both tables. Type and subtype depend only on the event, not on the gender, so they move to their own table.\n- Mistakes: leaving type and subtype in the athletics table; forgetting the foreign key; skipping the first step, which makes every value atomic.\n\n**Option C, Q9(f), Describe (4 marks): DNS lookup.** Describe the steps from typing a web address to loading the page: DNS servers turn the domain name into an IP address; then the browser looks in its local cache; if there is no record, the query moves up through the resolver to the top-level domain servers; the address returns to the browser, which connects; an error comes back if no address is found.\n- Mistakes: describing page loading without the translation step; saying DNS stores web pages; leaving out the cache check.\n\n**Option D, Q14(g), Construct (3 marks): inherited Car class.** Write Car as a subclass of Rental with its own numberOfDoors attribute and a no-argument constructor that sets it to four. A getter and setter are allowed, but they add nothing to the three marks.\n- Mistakes: copying Rental\'s attributes into Car; leaving out the inheritance keyword; no constructor, so the value is never set.\n\n**Option D, Q16(b), Construct (8 marks): unique brand-model array.** Write a method that takes the car array, builds a result array (size 100), and adds each car only if its brand and model are not already in the result. Points: the method signature, the result array, an outer loop with a length check, a found flag reset for each car, an inner check loop, a null check, the correct string comparison, adding the car, and returning the result. An array is required; an ArrayList is not accepted.\n- Mistakes: comparing strings with ==; not resetting the found flag; ignoring the empty slots in the result array; forgetting to return the array.\n\n**Option D, Q19(d), Construct (5 marks): recursive storage method.** Write a recursive method that adds the current customer first, then recurses to the left child, then to the right child. The five marks are the signature, the null test, adding the current node before the recursive calls, the left call and the right call. The root-left-right order keeps the tree shape when the collection is read back in order.\n- Mistakes: adding after the recursive calls, which changes the order and so the rebuilt tree; a wrong null test; calling the wrong child.\n\n**Time and mark strategy.** Pick the option you know best before you start, because all answers must come from one option. At 80 minutes for 65 marks, budget about 1.2 minutes per mark. The 8-mark array method and the 5-mark recursion need about 10 minutes each; the short identify and describe parts take a minute or two. Plan longer answers in steps first, then write them out, and check loop bounds and null handling in any code.',
      ru: '«Старая программа (до 2027):» работа 2 (HL), май 2024 года, 65 баллов за 1 час 20 минут. Нужно ответить на все вопросы одного из четырёх вариантов: A (базы данных), B (моделирование и симуляция), C (веб-наука) или D (объектно-ориентированное программирование). Шесть частей ниже взяты из вариантов A, C и D, потому что они совпадают с новыми темами. На экзамене отвечайте только один вариант.\n\n**Вариант A, вопрос 1(e), Укажите (Identify), 4 балла: шаги запроса.** Запрос считает, на скольких участках найдено одно растение в одну дату, и использует таблицы растений и распределения. Баллы за две нужные таблицы, подсчёт идентификаторов участков, условия по виду и дате и соединение по ключу растения. Обычный COUNT засчитывается; DISTINCT — безопасная привычка, если участок может повторяться.\n- Ошибки: нет условия соединения, и каждая строка сочетается с каждой; фильтр по неверной таблице; подсчёт растений вместо участков; формат даты не совпадает с данными.\n\n**Вариант A, вопрос 3(c), Постройте (Construct), 5 баллов: вторая нормальная форма.** Преобразуйте ненормализованные данные о легкоатлетических дисциплинах во 2НФ. Баллы: первичный ключ таблицы дисциплин (составной или новый идентификатор), разбиение на две таблицы, первичный ключ новой таблицы, внешний ключ в основной таблице и правильные поля в обеих таблицах. Тип и подтип зависят только от дисциплины, а не от пола, поэтому их переносят в отдельную таблицу.\n- Ошибки: тип и подтип оставлены в основной таблице; нет внешнего ключа; пропущен шаг с атомарными значениями (первая нормальная форма).\n\n**Вариант C, вопрос 9(f), Опишите (Describe), 4 балла: поиск по DNS.** Опишите путь от ввода адреса до загрузки страницы: DNS-серверы переводят доменное имя в IP-адрес; браузер сначала проверяет собственный кэш; если записи нет, запрос идёт через резолвер к серверам доменов верхнего уровня; адрес возвращается браузеру, который устанавливает соединение; при отсутствии адреса приходит ошибка.\n- Ошибки: описана загрузка страницы без шага перевода адреса; сказано, что DNS хранит страницы; пропущена проверка кеша.\n\n**Вариант D, вопрос 14(g), Постройте, 3 балла: класс Car с наследованием.** Напишите класс Car как подкласс Rental с собственным атрибутом numberOfDoors и конструктором без аргументов, который задаёт значение 4. Геттер и сеттер разрешены, но к трём баллам они ничего не добавляют.\n- Ошибки: атрибуты Rental скопированы в Car; нет ключевого слова наследования; нет конструктора, поэтому значение не задаётся.\n\n**Вариант D, вопрос 16(b), Постройте, 8 баллов: массив уникальных моделей.** Напишите метод, который принимает массив автомобилей, создаёт массив результата (размер 100) и добавляет машину, только если её марка и модель ещё не в результате. Баллы: заголовок метода, массив результата, внешний цикл с проверкой длины, сброс флага «найдено» для каждой машины, внутренний цикл проверки, проверка на null, правильное сравнение строк, добавление машины и возврат результата. Нужен массив; ArrayList не засчитывается.\n- Ошибки: строки сравниваются через ==; флаг не сбрасывается; пустые ячейки результата не учитываются; массив не возвращается.\n\n**Вариант D, вопрос 19(d), Постройте, 5 баллов: рекурсивный метод сохранения.** Напишите рекурсивный метод, который сначала добавляет текущего клиента, затем рекурсивно обходит левого потомка, затем правого. Пять баллов: заголовок, проверка на null, добавление текущего узла до рекурсивных вызовов, вызов левого и вызов правого потомка. Порядок «корень, левый, правый» сохраняет форму дерева при последующем чтении коллекции по порядку.\n- Ошибки: добавление после рекурсивных вызовов меняет порядок и восстанавливаемое дерево; неверная проверка на null; вызван не тот потомок.\n\n**Время и баллы.** 65 баллов за 80 минут — около 1,2 минуты на балл. Выберите вариант, который знаете лучше всего, до начала. На метод с массивом на 8 баллов и рекурсию на 5 баллов уходит примерно по 10 минут; короткие «укажите» и «опишите» — минуту-две. Сначала распишите длинный ответ по шагам, затем оформите его, а в коде проверьте границы циклов и обработку null.',
    },
  },
  {
    id: 'cs-p1-n23-old',
    subject: 'cs',
    paper: 'P1',
    session: 'N23',
    level: 'HL',
    files: [
      {
        kind: 'questions',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2023%20Examination%20Session/November%202023%20Examination%20Session/Experimental%20sciences/Computer_science_paper_1__HL.pdf',
      },
      {
        kind: 'markscheme',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2023%20Examination%20Session/November%202023%20Examination%20Session/Experimental%20sciences/Computer_science_paper_1__HL_markscheme.pdf',
      },
    ],
    minutes: 130,
    marks: 100,
    items: [
      {
        marks: 3,
        q: '4',
        topicIds: ['a2-1-fundamentals', 'a2-3-transmissions'],
        command: 'State',
      },
      {
        marks: 3,
        q: '5',
        topicIds: ['b2-2-data-structures'],
        command: 'Sketch',
      },
      {
        marks: 4,
        q: '9a',
        topicIds: ['b2-4-algorithms'],
        command: 'Determine',
      },
      {
        marks: 4,
        q: '10d',
        topicIds: ['a2-4-security'],
        command: 'Outline',
      },
      {
        marks: 4,
        q: '13d',
        topicIds: ['b2-2-data-structures'],
        command: 'Describe',
      },
      {
        marks: 10,
        q: '14c',
        topicIds: ['b2-4-algorithms', 'b2-2-data-structures'],
        command: 'Construct',
      },
    ],
    guide: {
      en: 'Old programme (before 2027): November 2023 Paper 1 (HL) is worth 100 marks in 2 hours 10 minutes. It has two answer-all sections: Section A has nine short questions (25 marks) and Section B has five questions of 15 marks each. The six parts below test networks, data structures and algorithms, which carry over to the new programme; the hardware, operating-system and machine-learning parts are left out.\n\n**Q4, State (3 marks): packet contents.** This tests recall of what every data packet carries. Any three distinct fields from the usual list earn one mark each, for example the payload, the protocol, the packet number, the total number of packets, the sender and receiver addresses, or a check or control field.\n- Plan: write three named fields, one per line, with no explanation.\n- Mistakes: writing "address" without saying whose; two fields that are really the same; naming a protocol instead of a field.\n\n**Q5, Sketch (3 marks): binary search tree.** Insert the five items in the given order so that an in-order traversal lists them alphabetically. Marks are for the root, the left subtree and the right subtree; a mirror image is accepted.\n- Plan: the first item is the root; each later item goes left if it is alphabetically earlier and right if later; then check the in-order list.\n- Mistakes: drawing a list instead of a tree; putting a left child on the right; not checking the traversal order.\n\n**Q9(a), Determine (4 marks): recursive function.** Show each recursive call and its partial result, then the final value. The function adds the decimal digits of N, so the answer can be checked by hand. Marks come from the working and the final value.\n- Mistakes: stopping before the base case that returns zero; giving only the final number, which loses most of the marks.\n\n**Q10(d), Outline (4 marks): two VPN reasons.** Each reason earns two marks: one for a valid reason and one for explaining how it helps this doctor, who works from patients\' homes. Good reasons include encryption on public networks, user authentication, hiding the real IP address and location, and access as if on the practice network.\n- Mistakes: two versions of the same idea (encryption and confidentiality count once); a general description of VPNs with no link to the doctor.\n\n**Q13(d), Describe (4 marks): inserting into a linked list.** This tests the order of pointer changes. Marks go to creating the new node with its data, locating the place by comparing severity, traversing to the node before that place, setting the new node\'s pointer, and then setting the previous node\'s pointer.\n- Mistakes: changing the previous node\'s pointer first, which loses the rest of the list; no traversal; describing insertion at the head instead of the middle.\n\n**Q14(c), Construct (10 marks): pseudocode algorithm.** Use an outer loop over competitors and an inner loop over judges. For each competitor, reset the sum, highest and lowest; track the highest and lowest scores; subtract both from the sum; divide by six; output the name and the score. Count the marks by stage: loops, initialisation, highest, lowest, total and average, and output.\n- Mistakes: starting the lowest at zero, so it never changes when every score is above zero; adding the highest and lowest instead of subtracting them; dividing by eight; resetting the sum outside the outer loop.\n\n**Time and mark strategy.** At 130 minutes for 100 marks, budget about 1.3 minutes per mark. Section A is mainly short answers, so about 30 minutes should cover it. Each 15-mark question in Section B needs about 20 minutes. Spend about 15 minutes on the 10-mark algorithm: plan the loops first, write the pseudocode, then trace one competitor to check the average. Keep a few minutes at the end to check signs and the divisor, because those small slips cost the most marks.',
      ru: '«Старая программа (до 2027):» работа 1 (HL), ноябрь 2023 года, 100 баллов за 2 часа 10 минут. Работа состоит из двух разделов, все задания обязательны: раздел A — девять коротких вопросов (25 баллов), раздел B — пять вопросов по 15 баллов. Шесть частей ниже проверяют сети, структуры данных и алгоритмы, которые переходят в новую программу; части про аппаратуру, операционные системы и машинное обучение не взяты.\n\n**Вопрос 4, Назовите (State), 3 балла: содержимое пакета данных.** Проверяется знание того, что есть в каждом пакете. За каждое из трёх разных полей из обычного списка даётся один балл: сами данные, протокол, номер пакета, общее число пакетов, IP-адреса отправителя и получателя, контрольное или служебное поле.\n- План: назовите три поля, каждое с новой строки, без пояснений.\n- Ошибки: «адрес» без указания, чей он; два поля, которые по сути одно и то же; название протокола вместо поля.\n\n**Вопрос 5, Нарисуйте (Sketch), 3 балла: двоичное дерево поиска.** Вставьте пять элементов в заданном порядке так, чтобы обход в порядке «левое поддерево, корень, правое поддерево» давал алфавитный список. Баллы: за корень, левое поддерево и правое поддерево; зеркальное отражение засчитывается.\n- План: первый элемент — корень; каждый следующий идёт влево, если он раньше по алфавиту, и вправо, если позже; затем проверьте порядок обхода.\n- Ошибки: нарисован список вместо дерева; левый потомок поставлен справа; обход не проверен.\n\n**Вопрос 9(a), Определите (Determine), 4 балла: рекурсивная функция.** Запишите каждый рекурсивный вызов и промежуточный результат, затем итоговое значение. Функция складывает десятичные цифры числа N, поэтому ответ легко проверить вручную. Баллы даются за ход вычислений и итоговое значение.\n- Ошибки: остановка раньше базового случая, где функция возвращает ноль; только итоговое число без вычислений — тогда теряется большая часть баллов.\n\n**Вопрос 10(d), Кратко опишите (Outline), 4 балла: две причины использовать VPN.** За каждую причину два балла: один за верный довод и один за объяснение, как он помогает этому врачу, который работает у пациентов дома. Подходят: шифрование в открытых сетях, аутентификация пользователя, скрытие реального IP-адреса и местоположения, доступ к данным так, как будто врач находится в клинике.\n- Ошибки: два варианта одной идеи (шифрование и конфиденциальность — это один довод); общее описание VPN без связи с ситуацией врача.\n\n**Вопрос 13(d), Опишите (Describe), 4 балла: вставка в связный список.** Проверяется порядок изменения указателей. Баллы за создание нового узла с данными, поиск места по степени тяжести, проход до узла перед этим местом, установку указателя нового узла и затем указателя предыдущего узла.\n- Ошибки: сначала меняется указатель предыдущего узла, и остаток списка теряется; нет прохода по списку; описана вставка в начало вместо середины.\n\n**Вопрос 14(c), Постройте (Construct), 10 баллов: алгоритм на псевдокоде.** Внешний цикл проходит по участникам, внутренний — по судьям. Для каждого участника заново обнуляются сумма, максимум и минимум; затем отслеживаются максимум и минимум, из суммы вычитаются оба, сумма делится на шесть, выводятся имя и балл. Баллы считайте по этапам: циклы, инициализация, максимум, минимум, сумма и среднее, вывод.\n- Ошибки: минимум начат с нуля, поэтому он не меняется, если все оценки выше нуля; максимум и минимум прибавляются вместо вычитания; деление на восемь вместо шести; сумма не сбрасывается внутри внешнего цикла.\n\n**Время и баллы.** На работу из 100 баллов отводится 130 минут, то есть около 1,3 минуты на балл. Раздел A в основном из коротких ответов, на него хватит примерно 30 минут. На каждый вопрос раздела B по 15 баллов уходит около 20 минут. На алгоритм на 10 баллов — около 15 минут: сначала продумайте циклы, затем пишите псевдокод и проверьте среднее на одном участнике. В конце оставьте несколько минут на знаки и делитель: такие ошибки стоят больше всего баллов.',
    },
  },
  {
    id: 'cs-p2-n23-old',
    subject: 'cs',
    paper: 'P2',
    session: 'N23',
    level: 'HL',
    files: [
      {
        kind: 'questions',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2023%20Examination%20Session/November%202023%20Examination%20Session/Experimental%20sciences/Computer_science_paper_2__HL.pdf',
      },
      {
        kind: 'markscheme',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2023%20Examination%20Session/November%202023%20Examination%20Session/Experimental%20sciences/Computer_science_paper_2__HL_markscheme.pdf',
      },
    ],
    minutes: 80,
    marks: 65,
    items: [
      {
        marks: 4,
        q: '1e',
        option: 'A',
        topicIds: ['a3-3-sql'],
        command: 'Identify',
      },
      {
        marks: 8,
        q: '3c',
        option: 'A',
        topicIds: ['a3-2-design'],
        command: 'Construct',
      },
      {
        marks: 2,
        q: '9b',
        option: 'C',
        topicIds: ['a2-1-fundamentals'],
        command: 'Identify',
      },
      {
        marks: 4,
        q: '15a',
        option: 'D',
        topicIds: ['b3-1-oop-single-class'],
        command: 'Construct',
      },
      {
        marks: 5,
        q: '16c(ii)',
        option: 'D',
        topicIds: ['b3-2-oop-multiple-classes'],
        command: 'Explain',
      },
      {
        marks: 6,
        q: '18b',
        option: 'D',
        topicIds: ['b2-2-data-structures'],
        command: 'Explain',
      },
    ],
    guide: {
      en: 'Old programme (before 2027): November 2023 Paper 2 (HL) is worth 65 marks in 1 hour 20 minutes. Students answer all the questions from one of four options: A (databases), B (modelling and simulation), C (web science) or D (object-oriented programming). The six parts below come from options A, C and D because they match the new topics. In the exam, answer one option only.\n\n**Option A, Q1(e), Identify (4 marks): steps for a query.** This tests whether you can turn a request into the tables, fields, join and filter of a query. Marks are for selecting the fields, naming the two tables, the join between the primary and foreign keys, and the filter on first and last name. Steps can be given as structured English or as SQL.\n- Plan: list the fields, name both tables, write the join condition, then add the filter.\n- Mistakes: no join, which pairs every row with every row; filtering on only one name; field or table names that differ from the schema; a sentence in place of steps.\n\n**Option A, Q3(c), Construct (8 marks): third normal form.** Turn the pet passport and vaccination data into normalised tables, using the same notation as the given VET table. Marks: four entities (3), primary keys (1), foreign keys (1), and the correct fields in each of the four tables (4). Each table should hold facts about its own key only; a vaccine\'s manufacturer depends on the vaccine, not on the vaccination record.\n- Plan: separate the pet, the passport, the vaccine and the vaccination event; then mark the keys and check that each non-key field depends on the whole key and nothing else.\n- Mistakes: keeping vaccine details in the vaccination table; no foreign key linking the tables; leaving the vet out; changing the notation.\n\n**Option C, Q9(b), Identify (2 marks): HTTP characteristics.** Any two correct characteristics of the protocol earn full marks. Examples: stateless, connectionless, text-based and unencrypted; request methods such as GET and POST; status codes; client-server communication; TCP/IP on the default port 80.\n- Mistakes: naming features of a web page (links, images) rather than of the protocol; vague answers such as "fast".\n\n**Option D, Q15(a), Construct (4 marks): attack method.** The method reduces the defender\'s health by a dice roll, prints a message if the defender survives, and sets health to zero if it would fall below zero. It should reuse the existing static methods. Five points can earn a mark, but the cap is four: calling both static methods, subtracting the damage, the message for a surviving monster, the message for a defeated one, and clamping negative health to zero.\n- Mistakes: subtracting from the attacker\'s health; forgetting to clamp health at zero; printing the right message in the wrong branch; rewriting the dice roll instead of calling it.\n\n**Option D, Q16(c)(ii), Explain (5 marks): inheritance and polymorphism for reuse.** Describe the hierarchy: each specific monster extends its type class, which extends the base class. Shared behaviour is written once in the base class and inherited. Behaviour that varies is declared in the base class and overridden in the subclasses, so one call works for every type. Explain both mechanisms clearly and link them to the three ability methods.\n- Mistakes: general definitions with no link to the monsters; calling polymorphism overloading; not saying how this reduces repeated code.\n\n**Option D, Q18(b), Explain (6 marks): rewinding with a linked list.** Explain how the method works on the gameLog list: check that the requested number of turns does not exceed the list length and output an error if it does; find the earliest turn to undo, which is awkward because the list is easiest to reach from the front; loop through the remaining turns; restore health only where the rewinder was the defender. The list itself must not change.\n- Mistakes: traversing from the wrong end; no error case; restoring damage when the rewinder attacked; changing the list while rewinding.\n\n**Time and mark strategy.** Pick the option you know best before you start, because all answers must come from one option. At 80 minutes for 65 marks, budget about 1.2 minutes per mark. The 8-mark design and the 5- and 6-mark explanations need about 10 minutes each; the identify and short-definition parts take a minute or two. Plan longer answers in bullet points first, then write them out, and check loop bounds and null handling in any code.',
      ru: '«Старая программа (до 2027):» работа 2 (HL), ноябрь 2023 года, 65 баллов за 1 час 20 минут. Нужно ответить на все вопросы одного из четырёх вариантов: A (базы данных), B (моделирование и симуляция), C (веб-наука) или D (объектно-ориентированное программирование). Шесть частей ниже взяты из вариантов A, C и D, потому что они совпадают с новыми темами. На экзамене отвечайте только один вариант.\n\n**Вариант A, вопрос 1(e), Укажите (Identify), 4 балла: шаги запроса.** Проверяется умение перевести задачу в таблицы, поля, соединение и фильтр. Баллы даются за нужные поля, за обе таблицы, за условие соединения по первичному и внешнему ключу и за фильтр по имени и фамилии. Шаги можно записать на SQL или на структурированном английском.\n- План: перечислите поля, назовите обе таблицы, напишите условие соединения, затем добавьте фильтр.\n- Ошибки: нет соединения, и каждая строка одной таблицы сочетается с каждой строкой другой; фильтр только по одному из двух полей; имена полей и таблиц не совпадают со схемой; вместо шагов написано одно предложение.\n\n**Вариант A, вопрос 3(c), Постройте (Construct), 8 баллов: третья нормальная форма.** Превратите данные о паспорте питомца и прививках в нормализованные таблицы в той же системе обозначений, что и таблица VET. Баллы: четыре сущности (3), первичные ключи (1), внешние ключи (1) и правильные поля в каждой из четырёх таблиц (4). В каждой таблице должны храниться факты только о её ключе: производитель вакцины зависит от самой вакцины, а не от записи о прививке.\n- План: выделите питомца, паспорт, вакцину и событие прививки; затем отметьте ключи и проверьте, что каждое неключевое поле зависит от всего ключа и ни от чего другого.\n- Ошибки: данные о вакцине остаются в таблице прививок; нет внешнего ключа, связывающего таблицы; таблица ветеринара пропущена; обозначения отличаются от заданной таблицы.\n\n**Вариант C, вопрос 9(b), Укажите, 2 балла: характеристики HTTP.** Полный балл дают любые две верные характеристики протокола. Примеры: без сохранения состояния, без установления соединения, с текстовыми сообщениями и без шифрования; запросы методами GET и POST; коды состояния; клиент-серверное взаимодействие; работа поверх TCP/IP через порт 80 по умолчанию.\n- Ошибки: названы свойства веб-страницы (ссылки, картинки), а не протокола; расплывчатые ответы вроде «быстро».\n\n**Вариант D, вопрос 15(a), Постройте, 4 балла: метод атаки.** Метод уменьшает здоровье защищающегося на результат броска кубика, выводит сообщение, если монстр остался жив, и ставит ноль, если здоровье стало бы отрицательным. Нужно использовать готовые статические методы. Пунктов может быть пять, но засчитывается максимум четыре: вызов обоих статических методов, вычитание урона, сообщение для живого монстра, сообщение для выбывшего монстра и обнуление отрицательного здоровья.\n- Ошибки: урон вычитается из здоровья атакующего; здоровье не обнуляется; сообщение выведено не в той ветке; бросок кубика написан заново вместо вызова готового метода.\n\n**Вариант D, вопрос 16(c)(ii), Объясните (Explain), 5 баллов: наследование и полиморфизм для повторного использования кода.** Опишите иерархию: каждый конкретный монстр расширяет класс своего типа, а тот расширяет базовый класс. Общее поведение записывается один раз в базовом классе и наследуется. Различающееся поведение объявляется в базовом классе и переопределяется в подклассах, поэтому один и тот же вызов работает для всех типов. Ясно объясните оба механизма и свяжите их с тремя методами способностей.\n- Ошибки: общие определения без связи с монстрами; полиморфизм назван перегрузкой методов; не сказано, как это уменьшает повтор кода.\n\n**Вариант D, вопрос 18(b), Объясните, 6 баллов: отмена ходов со связным списком.** Объясните, как метод работает со списком gameLog: проверьте, что число ходов не больше длины списка, и выведите ошибку, если больше; найдите самый ранний ход, который нужно отменить (список удобнее всего читать с начала); пройдите по остальным ходам; возвращайте здоровье только тогда, когда отменяющий был защищающимся. Сам список при этом не меняется.\n- Ошибки: обход с неправильного конца; нет обработки ошибки; урон возвращается, когда отменяющий атаковал; список меняется во время отмены.\n\n**Время и баллы.** 65 баллов за 80 минут — около 1,2 минуты на балл. Выберите вариант, который знаете лучше всего, до начала: все ответы должны относиться к одному варианту. На задание на 8 баллов и на объяснения на 5 и 6 баллов уходит примерно по 10 минут; короткие «укажите» и «опишите» — минуту-две. Сначала распишите длинный ответ пунктами, затем оформите его, а в коде проверьте границы циклов и обработку пустых значений.',
    },
  },
];
