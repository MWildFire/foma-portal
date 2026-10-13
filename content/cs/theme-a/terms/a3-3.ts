import type { Term } from '../../../../src/contract/types';

// Topic A3.3 Database programming (P1). Definitions are in our own words, based on the key terms and the
// definitions in the Oxford IB DP Computer Science Course Companion (2025), pp. 191-214.
const BOOK = 'Oxford IB DP Computer Science Course Companion (2025)';

export const terms: Term[] = [
  {
    id: 'a3-3-sql',
    term: { en: 'Structured Query Language (SQL)', ru: 'язык структурированных запросов (Structured Query Language, SQL)' },
    def: {
      en: 'A specialised language for creating, changing, querying and controlling the data in a relational database. Its commands are grouped by purpose into DDL, DML, DCL and TCL.',
      ru: 'Специализированный язык для создания, изменения, запроса и управления данными в реляционной базе данных. Его команды по назначению делятся на DDL, DML, DCL и TCL.',
    },
    syllabus: 'A3.3',
    papers: ['P1'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. A3.3, p. 191' },
    example: {
      en: 'SELECT Name FROM STUDENT WHERE Year = 12; asks the database for the names of the Year 12 students only.',
      ru: 'SELECT Name FROM STUDENT WHERE Year = 12; просит базу данных вернуть имена только учеников 12 класса.',
    },
    pitfall: {
      en: 'SQL describes which data to fetch or change; the DBMS decides how to carry out the request.',
      ru: 'SQL описывает, какие данные получить или изменить; как выполнить запрос, решает СУБД.',
    },
  },
  {
    id: 'a3-3-ddl',
    term: { en: 'Data definition language (DDL)', ru: 'язык определения данных (Data Definition Language, DDL)' },
    def: {
      en: 'The part of SQL that defines the structure of a database: its tables, columns and constraints. The main commands are CREATE, ALTER and DROP.',
      ru: 'Часть SQL, которая задаёт структуру базы данных: таблицы, столбцы и ограничения. Основные команды — CREATE, ALTER и DROP.',
    },
    syllabus: 'A3.3',
    papers: ['P1'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. A3.3, p. 191' },
    example: {
      en: 'ALTER TABLE STUDENT ADD Email VARCHAR(100); adds a new column to the structure of the STUDENT table.',
      ru: 'ALTER TABLE STUDENT ADD Email VARCHAR(100); добавляет новый столбец в структуру таблицы STUDENT.',
    },
    pitfall: {
      en: 'DDL changes the shape of the database, not its rows. DROP TABLE removes the table together with all of its data.',
      ru: 'DDL меняет структуру базы, а не строки. DROP TABLE удаляет таблицу вместе со всеми её данными.',
    },
  },
  {
    id: 'a3-3-dml',
    term: { en: 'Data manipulation language (DML)', ru: 'язык манипулирования данными (Data Manipulation Language, DML)' },
    def: {
      en: 'The part of SQL that works with the rows stored in tables: it reads, adds, changes and removes records. The main commands are SELECT, INSERT, UPDATE and DELETE.',
      ru: 'Часть SQL, которая работает со строками, хранящимися в таблицах: читает, добавляет, изменяет и удаляет записи. Основные команды — SELECT, INSERT, UPDATE и DELETE.',
    },
    syllabus: 'A3.3',
    papers: ['P1'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. A3.3, p. 192' },
    example: {
      en: 'DELETE FROM STUDENT WHERE StudentID = 105; removes one record and leaves the STUDENT table in place.',
      ru: 'DELETE FROM STUDENT WHERE StudentID = 105; удаляет одну запись и оставляет таблицу STUDENT на месте.',
    },
    pitfall: {
      en: 'DELETE empties rows but keeps the table. Used without WHERE, it removes every row.',
      ru: 'DELETE удаляет строки, но оставляет таблицу. Без WHERE он удалит все строки.',
    },
  },
  {
    id: 'a3-3-dcl',
    term: { en: 'Data control language (DCL)', ru: 'язык управления доступом (Data Control Language, DCL)' },
    def: {
      en: 'The part of SQL that controls who can access the database and what they are allowed to do. GRANT gives a privilege and REVOKE takes it away.',
      ru: 'Часть SQL, которая определяет, кто может обращаться к базе данных и какие действия ему разрешены. GRANT выдаёт право, а REVOKE его отзывает.',
    },
    syllabus: 'A3.3',
    papers: ['P1'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. A3.3, p. 192' },
    example: {
      en: 'GRANT SELECT ON STUDENT TO teacher; lets the user teacher read the STUDENT table without changing it.',
      ru: 'GRANT SELECT ON STUDENT TO teacher; позволяет пользователю teacher читать таблицу STUDENT, не изменяя её.',
    },
    pitfall: {
      en: 'DCL manages permissions rather than the data itself. It is a separate family even though it works on the same tables.',
      ru: 'DCL управляет правами, а не самими данными. Это отдельное подсемейство, хотя оно работает с теми же таблицами.',
    },
  },
  {
    id: 'a3-3-tcl',
    term: { en: 'Transaction control language (TCL)', ru: 'язык управления транзакциями (Transaction Control Language, TCL)' },
    def: {
      en: 'The part of SQL that controls transactions. COMMIT keeps the changes made in a transaction, and ROLLBACK undoes them.',
      ru: 'Часть SQL, которая управляет транзакциями. COMMIT сохраняет изменения транзакции, а ROLLBACK их отменяет.',
    },
    syllabus: 'A3.3',
    papers: ['P1'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. A3.3, p. 192' },
    example: {
      en: 'After two UPDATE statements that move money between accounts, COMMIT; makes both changes permanent.',
      ru: 'После двух операторов UPDATE, которые переводят деньги между счетами, COMMIT; делает оба изменения постоянными.',
    },
    pitfall: {
      en: 'TCL commands are not the changes themselves; they decide whether the changes made since the transaction began are kept. The full detail is higher level material.',
      ru: 'Команды TCL — это не сами изменения; они решают, сохранить ли изменения, сделанные с начала транзакции. Подробности относятся к HL.',
    },
  },
  {
    id: 'a3-3-query',
    term: { en: 'Query', ru: 'запрос (query)' },
    def: {
      en: 'An SQL instruction, usually a SELECT statement, that retrieves the information a user asks for from one or more tables.',
      ru: 'Инструкция SQL, обычно оператор SELECT, которая извлекает нужную пользователю информацию из одной или нескольких таблиц.',
    },
    syllabus: 'A3.3',
    papers: ['P1'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. A3.3, p. 195' },
    example: {
      en: 'SELECT ItemName FROM MENU_ITEM WHERE Price < 10; returns the names of the items that cost less than 10.',
      ru: 'SELECT ItemName FROM MENU_ITEM WHERE Price < 10; возвращает названия товаров, которые стоят меньше 10.',
    },
    pitfall: {
      en: 'A query only reads data. Changing data requires INSERT, UPDATE or DELETE.',
      ru: 'Запрос только читает данные. Чтобы изменить данные, нужны INSERT, UPDATE или DELETE.',
    },
  },
  {
    id: 'a3-3-join',
    term: { en: 'Join (inner join)', ru: 'соединение таблиц (join)' },
    def: {
      en: 'An operation that combines the rows of two tables when a join condition is met, usually a foreign key in one table equal to the primary key in the other. An inner join keeps only the rows that match in both tables.',
      ru: 'Операция, которая объединяет строки двух таблиц, когда выполняется условие соединения: обычно внешний ключ одной таблицы равен первичному ключу другой. Внутреннее соединение (inner join) оставляет только строки, которые совпали в обеих таблицах.',
    },
    syllabus: 'A3.3',
    papers: ['P1'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. A3.3, p. 200' },
    example: {
      en: 'SELECT MENU_ITEM.ItemName, SALE.Quantity FROM MENU_ITEM INNER JOIN SALE ON MENU_ITEM.ItemID = SALE.ItemID; pairs each sale with its item.',
      ru: 'SELECT MENU_ITEM.ItemName, SALE.Quantity FROM MENU_ITEM INNER JOIN SALE ON MENU_ITEM.ItemID = SALE.ItemID; сопоставляет каждую продажу с её товаром.',
    },
    pitfall: {
      en: 'Leaving out the ON condition pairs every row of one table with every row of the other, so the answer is wrong.',
      ru: 'Если пропустить условие ON, каждая строка одной таблицы сочетается с каждой строкой другой, и ответ будет неверным.',
    },
  },
  {
    id: 'a3-3-index',
    term: { en: 'Index', ru: 'индекс (index)' },
    def: {
      en: 'A structure the DBMS keeps alongside a table so that it can locate rows by a column without checking every row. Each insert, update and delete must also update the index.',
      ru: 'Структура, которую СУБД хранит рядом с таблицей, чтобы находить строки по столбцу, не проверяя каждую строку. Каждая вставка, изменение и удаление должны также обновлять индекс.',
    },
    syllabus: 'A3.3',
    papers: ['P1'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. A3.3, p. 204' },
    example: {
      en: 'An index on StudentID lets a query for one student skip most of a table with two million attendance records.',
      ru: 'Индекс по StudentID позволяет запросу по одному ученику пропустить большую часть таблицы с двумя миллионами записей о посещаемости.',
    },
    pitfall: {
      en: 'An index is not free: it speeds up searches but slows down every write, so indexes on large tables need a reason.',
      ru: 'Индекс не бесплатен: он ускоряет поиск, но замедляет каждую запись, поэтому индексы больших таблиц нужно обосновать.',
    },
  },
  {
    id: 'a3-3-aggregate',
    term: { en: 'Aggregate function', ru: 'агрегатная функция (aggregate function)' },
    def: {
      en: 'A function that calculates one value from a set of rows, such as COUNT, SUM, AVG, MIN or MAX. It cannot appear in a WHERE clause; conditions on its result are written with HAVING.',
      ru: 'Функция, которая вычисляет одно значение по набору строк, например COUNT, SUM, AVG, MIN или MAX. Её нельзя использовать в WHERE; условия на её результат записываются с помощью HAVING.',
    },
    syllabus: 'A3.3',
    papers: ['P1'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. A3.3, p. 206' },
    example: {
      en: 'SELECT AVG(Price) FROM MENU_ITEM; returns one number: the mean price of the items on the menu.',
      ru: 'SELECT AVG(Price) FROM MENU_ITEM; возвращает одно число: среднюю цену товаров в меню.',
    },
    pitfall: {
      en: 'COUNT(*) counts every row, including rows with NULL values, while COUNT(column) counts only the non-NULL values in that column.',
      ru: 'COUNT(*) считает все строки, включая строки со значением NULL, а COUNT(столбец) считает только непустые значения этого столбца.',
    },
  },
  {
    id: 'a3-3-view',
    term: { en: 'View', ru: 'представление (view)' },
    def: {
      en: 'A virtual table defined by a stored SELECT query. It shows selected data from one or more tables, often for users who do not write queries, and holds no data of its own.',
      ru: 'Виртуальная таблица, которая задаётся сохранённым запросом SELECT. Она показывает выбранные данные из одной или нескольких таблиц, часто для пользователей, которые не пишут запросы, и не хранит собственных данных.',
    },
    syllabus: 'A3.3',
    papers: ['P1'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. A3.3, p. 209' },
    example: {
      en: 'A view that joins STUDENT and CLASS but hides the date of birth column lets a clerk see class lists without private details.',
      ru: 'Представление, которое объединяет STUDENT и CLASS, но скрывает столбец с датой рождения, позволяет сотруднику видеть списки классов без личных данных.',
    },
    pitfall: {
      en: 'A view does not store a copy of the data; it runs its query each time it is used. The textbook separately uses the term materialised view for a view whose results have been stored.',
      ru: 'Представление не хранит копию данных: оно выполняет свой запрос при каждом обращении. В учебнике отдельно используется термин материализованное представление (materialised view) — представление, результаты которого сохранены.',
    },
  },
  {
    id: 'a3-3-transaction',
    term: { en: 'Transaction', ru: 'транзакция (transaction)' },
    def: {
      en: 'A single unit of work in a database, made of one or more operations that read, write or modify data. Its changes are either all committed or all rolled back.',
      ru: 'Одна логическая единица работы в базе данных, состоящая из одной или нескольких операций, которые читают, записывают или изменяют данные. Её изменения либо все фиксируются (COMMIT), либо все откатываются (ROLLBACK).',
    },
    syllabus: 'A3.3',
    papers: ['P1'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. A3.3, p. 211' },
    example: {
      en: 'Moving 100 from one account to another is one transaction made of two UPDATE statements.',
      ru: 'Перевод 100 с одного счёта на другой — это одна транзакция из двух операторов UPDATE.',
    },
    pitfall: {
      en: 'A transaction can contain several statements, and the grouping is what matters: they succeed or fail together.',
      ru: 'В транзакции может быть несколько операторов, и важно именно их объединение: они либо все выполняются успешно, либо все не выполняются.',
    },
  },
  {
    id: 'a3-3-acid',
    term: { en: 'ACID properties', ru: 'свойства ACID (ACID properties)' },
    def: {
      en: 'Four guarantees that a DBMS gives to transactions: atomicity (all or nothing), consistency (the data follows every rule before and after), isolation (concurrent transactions do not see each other’s unfinished changes) and durability (committed changes survive a failure).',
      ru: 'Четыре гарантии, которые СУБД даёт транзакциям: атомарность (всё или ничего), согласованность (данные соблюдают все правила до и после транзакции), изолированность (параллельные транзакции не видят незавершённых изменений друг друга) и долговечность (зафиксированные изменения сохраняются при сбое).',
    },
    syllabus: 'A3.3',
    papers: ['P1'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. A3.3, p. 211' },
    example: {
      en: 'In a bank transfer, atomicity makes sure money is never debited from one account without being credited to the other.',
      ru: 'При банковском переводе атомарность гарантирует, что деньги никогда не спишутся с одного счёта без зачисления на другой.',
    },
    pitfall: {
      en: 'ACID is a set of guarantees from the DBMS, not a SQL command. The commands that support it are BEGIN TRANSACTION, COMMIT and ROLLBACK.',
      ru: 'ACID — это набор гарантий СУБД, а не команда SQL. Поддерживают их команды BEGIN TRANSACTION, COMMIT и ROLLBACK.',
    },
  },
];
