import type { Term } from '../../../../src/contract/types';

// Key terms of topic A3.1 Database fundamentals. Definitions are own wording based on the
// key-term boxes of the textbook (pages 167 to 170).
export const terms: Term[] = [
  {
    id: 'a3-1-entity',
    term: { en: 'Entity', ru: 'сущность (entity)' },
    def: {
      en: 'A table in a database that stores data about one type of object or event, where each row is one instance of that type.',
      ru: 'Таблица в базе данных, которая хранит данные об одном типе объектов или событий; каждая строка — один экземпляр этого типа.',
    },
    syllabus: 'A3.1',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A3.1, p. 167' },
    example: { en: 'A MEMBER table in a sports club holds one row for each member.', ru: 'Таблица MEMBER в спортивном клубе хранит одну строку на каждого участника.' },
    pitfall: { en: 'The entity is the whole table, not one row. A single row is one instance (record) of the entity.', ru: 'Сущность — это вся таблица, а не одна строка. Одна строка — это один экземпляр (запись) сущности.' },
  },
  {
    id: 'a3-1-anomaly',
    term: { en: 'Anomaly', ru: 'аномалия (anomaly)' },
    def: {
      en: 'A problem that arises when data is handled incorrectly in a database. In a flat file the main types are insert, deletion and update anomalies.',
      ru: 'Проблема, которая возникает при неверной обработке данных в базе. В плоском файле основные виды — аномалии вставки, удаления и обновления.',
    },
    syllabus: 'A3.1',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A3.1, p. 168' },
    example: { en: 'If the only hire record of a bike is deleted, the bike’s model and price are lost too: a deletion anomaly.', ru: 'Если удалить единственную запись о прокате велосипеда, пропадут и его модель, и цена: это аномалия удаления.' },
    pitfall: { en: 'Name the operation that goes wrong (insert, update or deletion). Saying only that the data is wrong does not show which anomaly occurred.', ru: 'Назови операцию, при которой возникает проблема (вставка, обновление или удаление). Фраза «данные неверны» не показывает, какая именно аномалия возникла.' },
  },
  {
    id: 'a3-1-normalization',
    term: { en: 'Normalization', ru: 'нормализация (normalization)' },
    def: {
      en: 'A process of reorganizing the data in a database into linked entities, which removes repeated data and minimizes the risk of anomalies.',
      ru: 'Процесс реорганизации данных в базе: их разбивают на связанные сущности, чтобы убрать повторяющиеся данные и свести к минимуму риск аномалий.',
    },
    syllabus: 'A3.1',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A3.1, p. 169' },
    example: { en: 'A flat timetable that repeats each teacher’s room number on every lesson row is split into TEACHER and LESSON tables linked by Teacher_ID.', ru: 'Плоское расписание, где номер кабинета учителя повторяется в каждой строке урока, разбивается на таблицы TEACHER и LESSON, связанные полем Teacher_ID.' },
    pitfall: { en: 'Normalization does not delete data. The same facts are moved into linked tables so that each fact is stored once.', ru: 'Нормализация не удаляет данные. Те же факты переносятся в связанные таблицы, чтобы каждый из них хранился один раз.' },
  },
  {
    id: 'a3-1-primary-key',
    term: { en: 'Primary key', ru: 'первичный ключ (primary key)' },
    def: {
      en: 'A field whose value is different for every row of its table, so that each row can be identified without ambiguity.',
      ru: 'Поле, значение которого различно для каждой строки своей таблицы, поэтому каждая строка определяется однозначно.',
    },
    syllabus: 'A3.1',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A3.1, p. 169' },
    example: { en: 'StudentID 2187 identifies one student, even when two students share the same name.', ru: 'StudentID 2187 однозначно определяет одного ученика, даже если двух учеников зовут одинаково.' },
    pitfall: { en: 'A name is a poor primary key because two rows can share it. Use an ID number instead.', ru: 'Имя плохо подходит в роли первичного ключа: его могут иметь две строки. Лучше использовать номер (ID).' },
  },
  {
    id: 'a3-1-foreign-key',
    term: { en: 'Foreign key', ru: 'внешний ключ (foreign key)' },
    def: {
      en: 'A field in one table that stores the primary key value of a row in another table, creating a relationship between the two tables.',
      ru: 'Поле в одной таблице, в котором хранится значение первичного ключа строки другой таблицы; так создаётся связь между таблицами.',
    },
    syllabus: 'A3.1',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A3.1, p. 169' },
    example: { en: 'The Customer_ID column in an ORDER table links each order to one row of the CUSTOMER table.', ru: 'Столбец Customer_ID в таблице ORDER связывает каждый заказ с одной строкой таблицы CUSTOMER.' },
    pitfall: { en: 'A foreign key is not unique in its own table. One customer can place many orders, so the same Customer_ID repeats.', ru: 'Внешний ключ не обязан быть уникальным в своей таблице. Один покупатель может сделать много заказов, поэтому его Customer_ID повторяется.' },
  },
  {
    id: 'a3-1-attribute',
    term: { en: 'Attribute', ru: 'атрибут (attribute)' },
    def: {
      en: 'A property of an entity that captures one feature of the stored data; in a table it is shown as a column.',
      ru: 'Свойство сущности, которое описывает один признак хранимых данных; в таблице оно показано как столбец.',
    },
    syllabus: 'A3.1',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A3.1, p. 170' },
    example: { en: 'In a MEMBER table, Member_Name, Phone and Join_Date are attributes.', ru: 'В таблице MEMBER атрибутами являются Member_Name, Phone и Join_Date.' },
    pitfall: { en: 'An attribute is a column, not a row. Each row holds one value for every attribute.', ru: 'Атрибут — это столбец, а не строка. Каждая строка содержит по одному значению для каждого атрибута.' },
  },
  {
    id: 'a3-1-relationship',
    term: { en: 'Relationship', ru: 'связь (relationship)' },
    def: {
      en: 'A connection between two entities, created with keys, so that rows in one table can be matched with rows in the other.',
      ru: 'Связь между двумя сущностями, которая создаётся с помощью ключей, чтобы строки одной таблицы можно было сопоставить со строками другой.',
    },
    syllabus: 'A3.1',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A3.1, p. 170' },
    example: { en: 'The link between the CUSTOMER and ORDER tables, created by Customer_ID, is a relationship.', ru: 'Связь между таблицами CUSTOMER и ORDER, которую создаёт поле Customer_ID.' },
    pitfall: { en: 'The relationship is the link itself. How many rows it joins on each side is the cardinality.', ru: 'Связь — это сама ссылка между таблицами. Сколько строк с каждой стороны она соединяет, называется кардинальностью.' },
  },
  {
    id: 'a3-1-cardinality',
    term: { en: 'Cardinality', ru: 'кардинальность (cardinality)' },
    def: {
      en: 'The kind of relationship between two entities, given as one-to-one, one-to-many or many-to-many, which shows how many rows on each side can be linked.',
      ru: 'Тип связи между двумя сущностями: «один-к-одному», «один-ко-многим» или «многие-ко-многим». Показывает, сколько строк с каждой стороны может быть связано.',
    },
    syllabus: 'A3.1',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A3.1, p. 170' },
    example: { en: 'One customer can place many orders, so the link between CUSTOMER and ORDER is one-to-many.', ru: 'Один покупатель может сделать много заказов, поэтому связь между CUSTOMER и ORDER — «один-ко-многим».' },
    pitfall: { en: 'Cardinality answers the question how many. Modality, which says whether a link must exist, is a separate idea.', ru: 'Кардинальность отвечает на вопрос «сколько». Модальность, которая показывает, обязана ли связь существовать, — отдельное понятие.' },
  },
];
