import type { TopicMeta } from '../../../../src/contract/types';

const meta: TopicMeta = {
  id: 'b3-1-oop-single-class',
  subject: 'cs',
  code: 'B3.1',
  title: { en: 'Fundamentals of OOP for a single class', ru: 'Основы ООП для одного класса' },
  papers: ['P2'],
  order: 24,
  minutes: 45,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    {
      en: 'I can evaluate the fundamentals of OOP, including when its benefits (reuse, encapsulation, security) outweigh its overhead in a short program.',
      ru: 'Умею оценивать основы ООП, включая то, когда его преимущества (повторное использование, инкапсуляция, безопасность) перевешивают накладные расходы в короткой программе.',
    },
    {
      en: 'I can design a class by choosing its attributes and methods from a description of a problem.',
      ru: 'Умею спроектировать класс: выбрать его атрибуты и методы по описанию задачи.',
    },
    {
      en: 'I can write a UML class diagram with visibility signs, attribute types, method signatures and a relationship between two classes.',
      ru: 'Умею записать UML-диаграмму классов со знаками видимости, типами атрибутов, сигнатурами методов и связью между двумя классами.',
    },
    {
      en: 'I can distinguish static (class-level) variables and methods from non-static (object-level) ones, and access each one correctly.',
      ru: 'Умею различать статические (классовые) переменные и методы и нестатические (объектные) и правильно обращаться к каждым из них.',
    },
    {
      en: 'I can write Python code that defines a class with a constructor, creates objects from it and calls their methods.',
      ru: 'Умею написать на Python класс с конструктором, создать объекты этого класса и вызвать их методы.',
    },
    {
      en: 'I can explain encapsulation and information hiding, and apply private attributes with public getter and setter methods.',
      ru: 'Умею объяснять инкапсуляцию и сокрытие информации и применять приватные атрибуты с публичными геттерами и сеттерами.',
    },
  ],
  termIds: [
    'b3-1-class',
    'b3-1-object',
    'b3-1-attribute',
    'b3-1-method',
    'b3-1-constructor',
    'b3-1-instantiation',
    'b3-1-uml-class-diagram',
    'b3-1-static',
    'b3-1-encapsulation',
    'b3-1-access-modifier',
  ],
  sims: ['cs.uml-builder'],
  questionIds: [
    'b3-1-q01',
    'b3-1-q02',
    'b3-1-q03',
    'b3-1-q04',
    'b3-1-q05',
    'b3-1-q06',
    'b3-1-q07',
    'b3-1-q08',
    'b3-1-q09',
    'b3-1-q10',
  ],
  sources: [
    { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. B3.1, pp. 417–472' },
  ],
};

export default meta;
