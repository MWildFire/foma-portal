import type { TopicMeta } from '../../../../src/contract/types';

const meta: TopicMeta = {
  id: 'b3-2-oop-multiple-classes',
  subject: 'cs',
  code: 'B3.2',
  title: { en: 'Fundamentals of OOP for multiple classes', ru: 'Основы ООП для нескольких классов' },
  papers: ['P2'],
  hl: true,
  order: 25,
  minutes: 50,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    {
      en: 'I can explain inheritance and build a subclass that reuses the attributes and methods of its superclass, including the call to the superclass constructor.',
      ru: 'Умею объяснять наследование и создавать подкласс, который повторно использует атрибуты и методы суперкласса, включая вызов конструктора суперкласса.',
    },
    {
      en: 'I can explain polymorphism and method overriding, and predict which version of a method runs for a given object.',
      ru: 'Умею объяснять полиморфизм и переопределение метода и определять, какая версия метода выполнится для данного объекта.',
    },
    {
      en: 'I can explain abstraction and write an abstract class whose subclasses must implement its abstract methods.',
      ru: 'Умею объяснять абстракцию и писать абстрактный класс, подклассы которого обязаны реализовать его абстрактные методы.',
    },
    {
      en: 'I can explain duck typing in Python, and why a missing method causes an error only when the code runs.',
      ru: 'Умею объяснять утиную типизацию в Python и то, почему отсутствующий метод вызывает ошибку только во время выполнения кода.',
    },
    {
      en: 'I can describe the is_a, has_a and part_of relationships between two classes, and distinguish aggregation from composition.',
      ru: 'Умею описывать связи is_a, has_a и part_of между двумя классами и отличать агрегацию от композиции.',
    },
    {
      en: 'I can describe a UML relationship between two classes in words, including its symbol and the multiplicity at each end.',
      ru: 'Умею описать словами связь между двумя классами в UML, включая её символ и кратность на каждом конце.',
    },
    {
      en: 'I can explain the purpose of the singleton, factory and observer design patterns.',
      ru: 'Умею объяснять назначение паттернов проектирования «одиночка», «фабрика» и «наблюдатель».',
    },
  ],
  termIds: [
    'b3-2-inheritance',
    'b3-2-polymorphism',
    'b3-2-method-overriding',
    'b3-2-duck-typing',
    'b3-2-abstraction',
    'b3-2-abstract-class',
    'b3-2-class-relationship',
    'b3-2-aggregation',
    'b3-2-composition',
    'b3-2-singleton',
    'b3-2-factory',
    'b3-2-observer',
  ],
  sims: ['cs.uml-builder'],
  questionIds: [
    'b3-2-q01',
    'b3-2-q02',
    'b3-2-q03',
    'b3-2-q04',
    'b3-2-q05',
    'b3-2-q06',
    'b3-2-q07',
    'b3-2-q08',
    'b3-2-q09',
    'b3-2-q10',
  ],
  sources: [
    { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. B3.2, pp. 473–548' },
  ],
};

export default meta;
