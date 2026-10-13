import type { Term } from '../../../../src/contract/types';

// Topic B3.2 Fundamentals of OOP for multiple classes (P2, HL). Definitions are in our own words, based on the key terms
// and definitions of the Oxford IB DP Computer Science Course Companion (2025), pp. 473-548.
const BOOK = 'Oxford IB DP Computer Science Course Companion (2025)';

export const terms: Term[] = [
  {
    id: 'b3-2-inheritance',
    term: { en: 'Inheritance', ru: 'наследование (inheritance)' },
    def: {
      en: 'A way to build a subclass from a superclass, so that the subclass automatically gets the attributes and methods of the superclass. Common code is written once in the superclass, and each subclass adds its own attributes and methods.',
      ru: 'Способ построить подкласс на основе суперкласса: подкласс автоматически получает атрибуты и методы суперкласса. Общий код пишется один раз в суперклассе, а каждый подкласс добавляет собственные атрибуты и методы.',
    },
    syllabus: 'B3.2',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B3.2, p. 473' },
    example: {
      en: '`class Student(Person):` Student gets the name and birth year from Person and adds its own form attribute.',
      ru: '`class Student(Person):` класс Student получает имя и год рождения от Person и добавляет собственный атрибут form.',
    },
    pitfall: {
      en: 'A subclass uses the superclass code; it does not copy it. A private attribute of the superclass cannot be read directly in the subclass, so the subclass needs a public getter method.',
      ru: 'Подкласс использует код суперкласса, а не копирует его. Приватный атрибут суперкласса нельзя прочитать напрямую в подклассе, поэтому нужен публичный метод-геттер.',
    },
  },
  {
    id: 'b3-2-polymorphism',
    term: { en: 'Polymorphism', ru: 'полиморфизм (polymorphism)' },
    def: {
      en: 'The ability of one method name to take many forms: the version that runs depends on the type of the object, or on the number and types of the parameters passed in. The same call can therefore be used with different objects.',
      ru: 'Способность одного имени метода принимать разные формы: выполняемая версия зависит от типа объекта или от количества и типов переданных параметров. Поэтому один и тот же вызов можно использовать с разными объектами.',
    },
    syllabus: 'B3.2',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B3.2, p. 480' },
    example: {
      en: 'A loop calls `move()` on a Bus, a Car and a Ship; each object runs its own version of `move()`.',
      ru: 'Цикл вызывает `move()` у объектов Bus, Car и Ship; каждый объект выполняет свою версию метода `move()`.',
    },
    pitfall: {
      en: 'Polymorphism is not only inheritance. The book also describes static polymorphism, where the parameters choose the version (method overloading), and Python does not support overloading in the Java style.',
      ru: 'Полиморфизм — это не только наследование. В учебнике описан и статический полиморфизм, где версию выбирают параметры (перегрузка методов), но в Python перегрузки в стиле Java нет.',
    },
  },
  {
    id: 'b3-2-method-overriding',
    term: { en: 'Method overriding', ru: 'переопределение метода (method overriding)' },
    def: {
      en: 'A subclass defines a method with the same name and parameters as a method in its superclass. When the method is called on an object of the subclass, the subclass version runs.',
      ru: 'Подкласс определяет метод с тем же именем и теми же параметрами, что и метод суперкласса. Когда метод вызывается у объекта подкласса, выполняется версия подкласса.',
    },
    syllabus: 'B3.2',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B3.2, p. 484' },
    example: {
      en: 'SavingsAccount overrides `withdraw()` from Account and adds a fee of 5 when the amount is above 100.',
      ru: 'SavingsAccount переопределяет метод `withdraw()` из Account и добавляет комиссию 5, если сумма больше 100.',
    },
    pitfall: {
      en: 'Static methods cannot be overridden. A method with the same name in the subclass replaces the inherited version only for objects of that subclass, not for the superclass itself.',
      ru: 'Статические методы переопределить нельзя. Метод с тем же именем в подклассе заменяет унаследованную версию только для объектов этого подкласса, а не для самого суперкласса.',
    },
  },
  {
    id: 'b3-2-duck-typing',
    term: { en: 'Duck typing', ru: 'утиная типизация (duck typing)' },
    def: {
      en: 'A Python approach in which code uses an object only through the methods and attributes it has, not through its class. A call works if the object has the method; otherwise an error happens while the program runs.',
      ru: 'Подход Python, при котором код работает с объектом только через его методы и атрибуты, а не через класс. Вызов работает, если у объекта есть нужный метод; если его нет, ошибка возникает во время выполнения программы.',
    },
    syllabus: 'B3.2',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B3.2, p. 491' },
    example: {
      en: 'A function that calls `item.speak()` accepts a Dog object and a Robot object, as long as both have a `speak()` method.',
      ru: 'Функция, которая вызывает `item.speak()`, принимает объекты Dog и Robot, если у каждого из них есть метод `speak()`.',
    },
    pitfall: {
      en: 'Duck typing is checked while the program runs. Python does not warn before the program starts, so a missing method is found only when the line that calls it runs.',
      ru: 'Утиная типизация проверяется во время выполнения программы. Python не предупреждает до запуска, поэтому отсутствующий метод обнаруживается только тогда, когда выполняется строка с вызовом.',
    },
  },
  {
    id: 'b3-2-abstraction',
    term: { en: 'Abstraction', ru: 'абстракция (abstraction)' },
    def: {
      en: 'Hiding the implementation details that the user of a class does not need, so that only the essential features are visible. The user knows what an object does, but not how it does it.',
      ru: 'Скрытие деталей реализации, которые пользователю класса не нужны, чтобы были видны только существенные возможности. Пользователь знает, что делает объект, но не знает, как он это делает.',
    },
    syllabus: 'B3.2',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B3.2, p. 492' },
    example: {
      en: 'A bank customer uses the ATM menu to take out cash and does not see how the account balance is stored.',
      ru: 'Клиент банка пользуется меню банкомата, чтобы снять наличные, и не видит, как хранится баланс счёта.',
    },
    pitfall: {
      en: 'Abstraction does not mean deleting methods. An abstract class lists the methods that users need, and the concrete subclasses supply the code behind them.',
      ru: 'Абстракция не означает удаление методов. Абстрактный класс перечисляет методы, которые нужны пользователю, а конкретные подклассы пишут код, который за ними стоит.',
    },
  },
  {
    id: 'b3-2-abstract-class',
    term: { en: 'Abstract class', ru: 'абстрактный класс (abstract class)' },
    def: {
      en: 'A class from which objects cannot be created, and which declares abstract methods. An abstract method has no implementation, so every concrete subclass must provide one.',
      ru: 'Класс, из которого нельзя создать объекты и который объявляет абстрактные методы. У абстрактного метода нет реализации, поэтому каждый конкретный подкласс обязан её написать.',
    },
    syllabus: 'B3.2',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B3.2, p. 493' },
    example: {
      en: 'Shape is an abstract class with an abstract `area()` method; Rectangle is a concrete subclass that implements `area()`, and Square inherits it.',
      ru: 'Shape — абстрактный класс с абстрактным методом `area()`; Rectangle — конкретный подкласс, который реализует `area()`, а Square наследует этот метод.',
    },
    pitfall: {
      en: 'An abstract class is not a superclass with working code. A subclass that leaves an abstract method unimplemented cannot be instantiated either.',
      ru: 'Абстрактный класс — это не суперкласс с рабочим кодом. Подкласс, который не реализует абстрактный метод, тоже нельзя создать.',
    },
  },
  {
    id: 'b3-2-class-relationship',
    term: { en: 'Class relationship (is_a, has_a, part_of)', ru: 'связь между классами (class relationship)' },
    def: {
      en: 'A link between two classes. An is_a link is inheritance, a has_a link means one object holds others (aggregation, if they can exist separately), and a part_of link is composition, in which the parts cannot exist without the whole.',
      ru: 'Связь между двумя классами. Связь is_a — это наследование, связь has_a — когда один объект хранит другие (это агрегация, если они могут существовать отдельно), а связь part_of — композиция, при которой части не могут существовать без целого.',
    },
    syllabus: 'B3.2',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B3.2, p. 500' },
    example: {
      en: 'Student is_a Person; Playlist has_a Song (aggregation); Chapter part_of Book (composition).',
      ru: 'Student is_a Person; Playlist has_a Song (агрегация); Chapter part_of Book (композиция).',
    },
    pitfall: {
      en: 'Only is_a means inheritance. Aggregation and composition mean that one class holds objects of another class, usually in an attribute such as a list; they do not make one class a subclass of the other.',
      ru: 'Только is_a означает наследование. Агрегация и композиция означают, что один класс хранит объекты другого класса, обычно в атрибуте, например в списке; они не делают один класс подклассом другого.',
    },
  },
  {
    id: 'b3-2-aggregation',
    term: { en: 'Aggregation', ru: 'агрегация (aggregation)' },
    def: {
      en: 'A has_a relationship in which one object holds references to other objects, but each object can still exist on its own. Deleting the holder does not delete the objects it refers to.',
      ru: 'Связь has_a, при которой один объект хранит ссылки на другие объекты, но каждый объект может существовать самостоятельно. Удаление объекта-владельца не удаляет объекты, на которые он ссылается.',
    },
    syllabus: 'B3.2',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B3.2, p. 501' },
    example: {
      en: 'A Playlist keeps references to Song objects that were created elsewhere; removing the playlist leaves the songs intact.',
      ru: 'Playlist хранит ссылки на объекты Song, созданные в другом месте; при удалении плейлиста песни остаются.',
    },
    pitfall: {
      en: 'Aggregation does not require the holder to contain anything. A playlist with no songs is still a valid playlist.',
      ru: 'Агрегация не требует, чтобы объект-владелец что-то содержал. Плейлист без песен остаётся корректным плейлистом.',
    },
  },
  {
    id: 'b3-2-composition',
    term: { en: 'Composition', ru: 'композиция (composition)' },
    def: {
      en: 'A stronger has_a relationship, also called part_of, in which the parts cannot exist without the whole. The whole usually creates its parts, and deleting the whole also removes them.',
      ru: 'Более сильная связь has_a, которую также называют part_of, при которой части не могут существовать без целого. Целое обычно создаёт свои части, и при удалении целого части удаляются тоже.',
    },
    syllabus: 'B3.2',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B3.2, p. 506' },
    example: {
      en: 'A Book creates its Chapter objects inside its own `add_chapter()` method, so the chapters belong only to that book.',
      ru: 'Book создаёт свои объекты Chapter внутри собственного метода `add_chapter()`, поэтому главы принадлежат только этой книге.',
    },
    pitfall: {
      en: 'Composition is about ownership and lifetime, not about holding a list. A list that stores objects created elsewhere is aggregation.',
      ru: 'Композиция связана с владением и временем жизни объектов, а не с наличием списка. Список, который хранит объекты, созданные в другом месте, — это агрегация.',
    },
  },
  {
    id: 'b3-2-singleton',
    term: { en: 'Singleton design pattern', ru: 'паттерн «одиночка» (singleton design pattern)' },
    def: {
      en: 'A design pattern that ensures a class has only one instance, which all parts of a program can access. The class controls its own creation, usually through a private constructor and a static method that returns the one instance.',
      ru: 'Паттерн проектирования, который гарантирует, что у класса есть только один экземпляр, доступный всем частям программы. Класс сам управляет своим созданием, обычно через закрытый конструктор и статический метод, который возвращает этот единственный экземпляр.',
    },
    syllabus: 'B3.2',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B3.2, p. 523' },
    example: {
      en: 'One settings object that stores the game options and is shared by every screen of the game.',
      ru: 'Один объект настроек, который хранит параметры игры и используется всеми её экранами.',
    },
    pitfall: {
      en: 'A singleton is more than a global variable, because the class also controls how its instance is created. The book notes that singletons are hard to test and that many items can change the same shared data.',
      ru: 'Одиночка — это больше, чем глобальная переменная: класс ещё и управляет созданием своего экземпляра. В учебнике отмечено, что одиночку трудно тестировать, а общие данные могут менять многие части программы.',
    },
  },
  {
    id: 'b3-2-factory',
    term: { en: 'Factory design pattern', ru: 'паттерн «фабрика» (factory design pattern)' },
    def: {
      en: 'A design pattern in which a common interface is used for a group of related objects, and a factory decides which concrete class to create. New types can be added as new subclasses without changing the code that uses the interface.',
      ru: 'Паттерн проектирования, в котором для группы связанных объектов используется общий интерфейс, а фабрика решает, какой конкретный класс создать. Новые типы добавляются как новые подклассы, без изменения кода, который работает с интерфейсом.',
    },
    syllabus: 'B3.2',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B3.2, p. 527' },
    example: {
      en: 'A delivery app asks a factory for a courier. The factory returns a Bike, a Car or a Drone object, and all three share one common Courier interface.',
      ru: 'Приложение доставки просит фабрику выдать курьера. Фабрика возвращает объект Bike, Car или Drone, и у всех трёх общий интерфейс Courier.',
    },
    pitfall: {
      en: 'The factory is not the product. Every product must share the same base class or interface, otherwise the common code cannot treat them in the same way.',
      ru: 'Фабрика — это не продукт. Все продукты должны иметь общий базовый класс или интерфейс, иначе общий код не сможет работать с ними одинаково.',
    },
  },
  {
    id: 'b3-2-observer',
    term: { en: 'Observer design pattern', ru: 'паттерн «наблюдатель» (observer design pattern)' },
    def: {
      en: 'A design pattern in which a publisher object keeps a list of subscriber objects. Subscribers can add themselves to the list or remove themselves, and the publisher notifies every subscriber when its data changes.',
      ru: 'Паттерн проектирования, в котором объект-издатель хранит список объектов-подписчиков. Подписчики могут добавлять себя в список или удалять себя из него, а издатель уведомляет всех подписчиков, когда меняются его данные.',
    },
    syllabus: 'B3.2',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B3.2, p. 535' },
    example: {
      en: 'A weather station (publisher) notifies three phone apps (subscribers) each time the temperature changes.',
      ru: 'Метеостанция (издатель) уведомляет три приложения на телефонах (подписчики) при каждом изменении температуры.',
    },
    pitfall: {
      en: 'The publisher does not need to know what each subscriber does with an update; it calls only the methods that all subscribers share. A subscriber that has removed itself from the list receives no more updates.',
      ru: 'Издателю не нужно знать, что подписчик делает с обновлением; он вызывает только общие методы всех подписчиков. Подписчик, который удалил себя из списка, больше не получает обновлений.',
    },
  },
];
