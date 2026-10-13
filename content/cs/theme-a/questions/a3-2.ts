import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'a3-2-q01',
    subject: 'cs',
    topicIds: ['a3-2-design'],
    paper: 'P1',
    section: 'A',
    marks: 4,
    command: 'Construct',
    prompt: {
      en: 'A cycling club records its members, bikes and rides. Each ride is led by exactly one member, but a member may lead many rides or none. Each ride uses exactly one bike, and a bike may be used on many rides or on none. Construct an entity relationship diagram for these three entities. Label the cardinality and the modality of each relationship.',
      ru: 'Велоклуб ведёт учёт участников, велосипедов и поездок. Каждую поездку возглавляет ровно один участник, но участник может возглавить много поездок или ни одной. В каждой поездке используется ровно один велосипед, а велосипед может участвовать во многих поездках или ни в одной. Постройте диаграмму «сущность-связь» для этих трёх сущностей. Укажите кардинальность и модальность каждой связи.',
    },
    markscheme: {
      en: '[1] Three entities drawn and named MEMBER, BIKE and RIDE, with each relationship labelled by a verb such as "leads" or "uses". [1] MEMBER to RIDE is one-to-many (one member leads many rides). [1] BIKE to RIDE is one-to-many (one bike is used on many rides). [1] Modality: the RIDE end is mandatory for both relationships (every ride needs a leader and a bike), while the MEMBER and BIKE ends are optional.',
      ru: '[1] Нарисованы три сущности MEMBER, BIKE и RIDE, и каждая связь подписана глаголом, например «ведёт» или «использует». [1] MEMBER — RIDE: «один ко многим» (один участник возглавляет много поездок). [1] BIKE — RIDE: «один ко многим» (один велосипед используется во многих поездках). [1] Модальность: со стороны RIDE связь обязательна в обоих случаях (у каждой поездки есть руководитель и велосипед), а со стороны MEMBER и BIKE она необязательна.',
    },
    origin: 'original',
  },
  {
    id: 'a3-2-q02',
    subject: 'cs',
    topicIds: ['a3-2-design'],
    paper: 'P1',
    section: 'A',
    marks: 5,
    command: 'Construct',
    prompt: {
      en: 'A school club keeps all its data in one table, ENROLMENT, with the fields StudentID, StudentName, CourseID, CourseName, Teacher, TeacherRoom and Grade. The primary key is the composite (StudentID, CourseID). Each course has one teacher, each teacher works in one room, and teacher names are unique. Construct a database normalized to third normal form from this table. Show each table with its primary key and foreign keys.',
      ru: 'Школьный клуб хранит все данные в одной таблице ENROLMENT с полями StudentID, StudentName, CourseID, CourseName, Teacher, TeacherRoom и Grade. Первичный ключ — составной (StudentID, CourseID). У каждого курса один преподаватель, каждый преподаватель работает в одном кабинете, а имена преподавателей уникальны. Постройте из этой таблицы базу, приведённую к третьей нормальной форме. Покажите каждую таблицу с её первичным и внешними ключами.',
    },
    markscheme: {
      en: '[1] StudentName depends only on StudentID, a partial dependency, so it moves to a STUDENT table. [1] CourseName and Teacher depend only on CourseID, a partial dependency, so they move to a COURSE table. [1] TeacherRoom depends on Teacher rather than on the key, a transitive dependency, so it moves to a TEACHER table with Teacher as its primary key. [1] Grade depends on the whole composite key, so it stays in ENROLMENT, whose composite primary key is (StudentID, CourseID) with both fields as foreign keys. [1] The final tables are correct: STUDENT(StudentID, StudentName); COURSE(CourseID, CourseName, Teacher (FK)); TEACHER(Teacher, TeacherRoom); ENROLMENT(StudentID (FK), CourseID (FK), Grade).',
      ru: '[1] StudentName зависит только от StudentID — частичная зависимость, поэтому переносим его в таблицу STUDENT. [1] CourseName и Teacher зависят только от CourseID — частичная зависимость, поэтому переносим их в таблицу COURSE. [1] TeacherRoom зависит от Teacher, а не от ключа — транзитивная зависимость, поэтому переносим его в таблицу TEACHER с первичным ключом Teacher. [1] Grade зависит от всего составного ключа, поэтому остаётся в ENROLMENT, где составной первичный ключ (StudentID, CourseID), а оба поля — внешние ключи. [1] Итоговые таблицы верны: STUDENT(StudentID, StudentName); COURSE(CourseID, CourseName, Teacher (FK)); TEACHER(Teacher, TeacherRoom); ENROLMENT(StudentID (FK), CourseID (FK), Grade).',
    },
    origin: 'original',
  },
];
