import type { Term } from '../../../../src/contract/types';

export const terms: Term[] = [
  {
    id: 'a3-2-schema',
    term: { en: 'Database schema', ru: 'схема базы данных (database schema)' },
    def: {
      en: 'The blueprint of a database. It names the tables (entities), fields (attributes) and links (relationships), plus the rules the data must follow, but it holds no actual records.',
      ru: 'План базы данных: в нём перечислены таблицы (сущности), поля (атрибуты) и связи между таблицами, а также правила, которым должны подчиняться данные. Сами записи в схеме не хранятся.',
    },
    syllabus: 'A3.2',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A3.2, p. 173' },
    example: {
      en: 'The schema records that a LESSON table has a TeacherID link, but it contains no lesson rows.',
      ru: 'Схема фиксирует, что в таблице LESSON есть связь TeacherID, но самих строк занятий в ней нет.',
    },
    pitfall: {
      en: 'Treating the schema as the data. Two databases can share one schema and hold completely different records.',
      ru: 'Считать схему данными. Две базы могут иметь одну схему и совсем разные записи.',
    },
  },
  {
    id: 'a3-2-conceptual-schema',
    term: { en: 'Conceptual schema', ru: 'концептуальная схема (conceptual schema)' },
    def: {
      en: 'The most general level of a database schema. It shows the entities and the links between them, without attributes, data types or constraints.',
      ru: 'Самый общий уровень схемы базы данных: показывает сущности и связи между ними, но без атрибутов, типов данных и ограничений.',
    },
    syllabus: 'A3.2',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A3.2, p. 173' },
    example: {
      en: 'A diagram stating that one customer places many orders and that each order belongs to one customer, with no fields listed.',
      ru: 'Диаграмма, которая говорит, что один покупатель делает много заказов, а каждый заказ принадлежит одному покупателю, без перечисления полей.',
    },
  },
  {
    id: 'a3-2-logical-schema',
    term: { en: 'Logical schema', ru: 'логическая схема (logical schema)' },
    def: {
      en: 'The middle level of a database schema. It lists the attributes of each entity and marks the primary and foreign keys that connect the entities, but it gives no data types or storage details.',
      ru: 'Средний уровень схемы базы данных: перечисляет атрибуты каждой сущности и отмечает первичные и внешние ключи, которые связывают сущности. Типы данных и детали хранения здесь не указываются.',
    },
    syllabus: 'A3.2',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A3.2, p. 174' },
    pitfall: {
      en: 'Adding data types at this level. Data types belong to the physical schema.',
      ru: 'Добавление типов данных на этом уровне. Типы данных относятся к физической схеме.',
    },
  },
  {
    id: 'a3-2-physical-schema',
    term: { en: 'Physical schema', ru: 'физическая схема (physical schema)' },
    def: {
      en: 'The most detailed level of a database schema. It gives each attribute its data type, marks the keys and describes how the data is stored, for example in files, indexes and storage structures.',
      ru: 'Самый подробный уровень схемы базы данных: для каждого атрибута указан тип данных, отмечены ключи и описано, как данные хранятся, например в файлах, индексах и структурах хранения.',
    },
    syllabus: 'A3.2',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A3.2, p. 175' },
    example: {
      en: 'A Postcode field stored as CHAR(6) with an index on it, so that searches by postcode run faster.',
      ru: 'Поле Postcode типа CHAR(6) с индексом, чтобы поиск по почтовому индексу работал быстрее.',
    },
  },
  {
    id: 'a3-2-erd',
    term: { en: 'Entity relationship diagram (ERD)', ru: 'диаграмма «сущность-связь» (entity relationship diagram, ERD)' },
    def: {
      en: 'A standard diagram that shows the entities of a database and the relationships between them; attributes can be added at the logical level. Designers use it to plan the schema before the database is built.',
      ru: 'Стандартная диаграмма, которая показывает сущности базы данных и связи между ними; атрибуты можно добавить на логическом уровне. По ней планируют схему до создания базы.',
    },
    syllabus: 'A3.2',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A3.2, p. 173' },
    pitfall: {
      en: 'Drawing relationships without cardinality or modality. Every link needs both.',
      ru: 'Рисование связей без кардинальности и модальности. Каждой связи нужны оба свойства.',
    },
  },
  {
    id: 'a3-2-cardinality',
    term: { en: 'Cardinality', ru: 'кардинальность (cardinality)' },
    def: {
      en: 'How many records of one entity can be linked to records of the other entity: one-to-many, one-to-one or many-to-many. Whether a link must exist (mandatory) or may be absent (optional) is a separate property called modality.',
      ru: 'Сколько записей одной сущности может быть связано с записями другой: «один к одному», «один ко многим» или «многие ко многим». Обязательна ли связь или она может отсутствовать, показывает модальность — отдельное свойство связи.',
    },
    syllabus: 'A3.2',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A3.2, p. 176' },
    example: {
      en: 'A class has many pupils, and each pupil belongs to exactly one class: one-to-many from CLASS to PUPIL.',
      ru: 'В классе учится много учеников, а каждый ученик относится ровно к одному классу: связь «один ко многим» от CLASS к PUPIL.',
    },
    pitfall: {
      en: 'Reading a relationship in both directions. A relationship is read one way only, so state the direction clearly.',
      ru: 'Читать связь в обе стороны. Связь читается только в одном направлении, поэтому направление нужно явно указывать.',
    },
  },
  {
    id: 'a3-2-data-type',
    term: { en: 'Data type', ru: 'тип данных (data type)' },
    def: {
      en: 'The category given to a field, such as string, numeric or date/time. It sets the kind of value the field can hold and which operations are valid on it.',
      ru: 'Категория поля: строка, число или дата/время. Она задаёт, какие значения поле может хранить и какие операции с ним допустимы.',
    },
    syllabus: 'A3.2',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A3.2, p. 179' },
    example: {
      en: 'A price stored as INT cannot hold cents, and a postcode stored as INT loses its leading zeros.',
      ru: 'Цена, записанная как INT, не может хранить центы, а почтовый индекс как INT теряет ведущие нули.',
    },
    pitfall: {
      en: 'Using a numeric type for a code that has letters or leading zeros. Such codes belong in CHAR or VARCHAR.',
      ru: 'Выбирать числовой тип для кода с буквами или ведущими нулями. Такие коды относятся к CHAR или VARCHAR.',
    },
  },
  {
    id: 'a3-2-anomaly',
    term: { en: 'Anomaly (insert, update, deletion)', ru: 'аномалия (anomaly): вставки, обновления, удаления' },
    def: {
      en: 'A fault in a poorly designed table that appears on insert, update or deletion: a record cannot be added without unrelated data, a change must be repeated in every copy, or deleting one row erases facts that were stored only there.',
      ru: 'Ошибка плохо спроектированной таблицы, которая проявляется при вставке, обновлении или удалении: нельзя добавить запись без несвязанных данных, изменение нужно повторить в каждой копии, а удаление строки стирает факты, которые хранились только в ней.',
    },
    syllabus: 'A3.2',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A3.2, p. 181' },
    example: {
      en: 'The address of a customer is repeated in every order row. Changing it in only some rows leaves the customer with two addresses.',
      ru: 'Адрес покупателя повторяется в каждой строке заказа. Если изменить его не во всех строках, у покупателя окажутся два адреса.',
    },
  },
  {
    id: 'a3-2-normalization',
    term: { en: 'Normalization', ru: 'нормализация (normalization)' },
    def: {
      en: 'A design method that splits an unnormalized table into smaller linked tables so that every non-key attribute depends on the whole primary key and on nothing else. It minimises the risk of anomalies.',
      ru: 'Метод проектирования, при котором таблица разбивается на меньшие связанные таблицы так, чтобы каждый неключевой атрибут зависел от всего первичного ключа и ни от чего другого. Метод сводит к минимуму риск аномалий.',
    },
    syllabus: 'A3.2',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A3.2, p. 181' },
    pitfall: {
      en: 'Stopping at 1NF. The syllabus requires 3NF, and each step removes a different kind of dependency.',
      ru: 'Остановиться на 1НФ. Программа требует 3НФ, и каждый шаг убирает свой вид зависимости.',
    },
  },
  {
    id: 'a3-2-partial-dependency',
    term: { en: 'Partial dependency (partial key dependency)', ru: 'частичная зависимость (partial key dependency)' },
    def: {
      en: 'A non-key attribute that depends on only part of a composite primary key. Second normal form (2NF) moves such attributes into their own table.',
      ru: 'Неключевой атрибут, который зависит только от части составного первичного ключа. Вторая нормальная форма (2НФ) выносит такие атрибуты в отдельную таблицу.',
    },
    syllabus: 'A3.2',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A3.2, p. 184' },
    example: {
      en: 'In a table keyed by (ProductID, StoreID), ProductName depends on ProductID alone, so it is a partial dependency.',
      ru: 'В таблице с ключом (ProductID, StoreID) атрибут ProductName зависит только от ProductID, значит это частичная зависимость.',
    },
  },
  {
    id: 'a3-2-transitive-dependency',
    term: { en: 'Transitive dependency (non-key dependency)', ru: 'транзитивная зависимость (transitive dependency)' },
    def: {
      en: 'A non-key attribute whose value is determined by another non-key attribute rather than by the primary key itself. Third normal form (3NF) moves such attributes into their own table.',
      ru: 'Неключевой атрибут, значение которого определяется другим неключевым атрибутом, а не самим первичным ключом. Третья нормальная форма (3НФ) выносит такие атрибуты в отдельную таблицу.',
    },
    syllabus: 'A3.2',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A3.2, p. 184' },
    example: {
      en: 'A table keyed by OrderID holds PostcodeArea and CityName, and CityName depends on PostcodeArea rather than on OrderID.',
      ru: 'В таблице с ключом OrderID есть PostcodeArea и CityName; CityName зависит от PostcodeArea, а не от OrderID.',
    },
    pitfall: {
      en: 'Calling every non-key dependency partial. A partial dependency needs a composite key; a transitive one goes through another non-key attribute.',
      ru: 'Называть любую зависимость от неключевого атрибута частичной. Частичная зависимость возможна только у составного ключа, а транзитивная идёт через другой неключевой атрибут.',
    },
  },
  {
    id: 'a3-2-denormalization',
    term: { en: 'Denormalization', ru: 'денормализация (denormalization)' },
    def: {
      en: 'Deliberately storing related data together again, so some values repeat. Queries need fewer joins and run faster, but updates become harder and the risk of inconsistent copies rises.',
      ru: 'Намеренное возвращение связанных данных в одну таблицу, из-за чего часть значений повторяется. Запросам нужно меньше соединений и они работают быстрее, но обновления усложняются и растёт риск несогласованных копий.',
    },
    syllabus: 'A3.2',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A3.2, p. 189' },
    example: {
      en: 'A news feed stores the author name with each post, so the feed loads without joining the authors table.',
      ru: 'Лента новостей хранит имя автора с каждым постом, поэтому загружается без соединения с таблицей авторов.',
    },
    pitfall: {
      en: 'Treating denormalization as a shortcut for careless designers. The book presents it as a deliberate choice made after normalization.',
      ru: 'Считать денормализацию уловкой небрежного проектировщика. В учебнике это осознанное решение, которое принимают после нормализации.',
    },
  },
];
