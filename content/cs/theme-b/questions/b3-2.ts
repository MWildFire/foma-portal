import type { Question } from '../../../../src/contract/types';

// Topic B3.2 Fundamentals of OOP for multiple classes (P2, HL). All scenarios, code and markschemes are original.
// Code answers were produced by running the stimulus code with python3 (exact printed lines, joined with \n).

export const questions: Question[] = [
  {
    id: 'b3-2-q01',
    subject: 'cs',
    topicIds: ['b3-2-oop-multiple-classes'],
    paper: 'P2',
    marks: 4,
    command: 'Identify',
    prompt: {
      en: 'A zoo program needs classes for Lion, Penguin and Elephant. All three animals have a name, an age and a diet, and each one makes its own sound. (a) Identify one attribute that should be placed in a superclass, and one method that should be declared in the superclass but implemented differently in each subclass. (b) Explain how inheritance reduces repetition in this program.',
      ru: 'Программе зоопарка нужны классы Lion, Penguin и Elephant. У всех трёх животных есть имя, возраст и рацион, и каждое издаёт свой звук. (a) Укажите один атрибут, который стоит поместить в суперкласс, и один метод, который объявлен в суперклассе, но реализуется по-разному в каждом подклассе. (b) Объясните, как наследование уменьшает повторение кода в этой программе.',
    },
    markscheme: {
      en: '[1] An attribute such as name, age or diet is placed in the superclass. [1] A method such as make_sound() is declared in the superclass and overridden in each subclass. [1] Common attributes and methods are written once, in the superclass, instead of being repeated in each class. [1] A change to shared code needs to be made in only one place, and every subclass uses it.',
      ru: '[1] Атрибут, например name, age или diet, помещён в суперкласс. [1] Метод, например make_sound(), объявлен в суперклассе и переопределён в каждом подклассе. [1] Общие атрибуты и методы написаны один раз, в суперклассе, а не повторяются в каждом классе. [1] Изменение общего кода нужно внести только в одном месте, и его используют все подклассы.',
    },
    origin: 'original',
  },
  {
    id: 'b3-2-q02',
    subject: 'cs',
    topicIds: ['b3-2-oop-multiple-classes'],
    paper: 'P2',
    marks: 3,
    command: 'Identify',
    prompt: {
      en: 'A school timetable program has a Timetable class and a Lesson class. A Timetable holds zero or more Lesson objects. Each Lesson belongs to exactly one Timetable, and a Lesson cannot exist without its Timetable. Identify the UML relationship between Timetable and Lesson, and state the multiplicity at each end of the line. Justify your choice using the description.',
      ru: 'Программа школьного расписания содержит классы Timetable и Lesson. Объект Timetable хранит ноль или больше объектов Lesson. Каждый Lesson принадлежит ровно одному Timetable, и Lesson не может существовать без своего Timetable. Укажите UML-связь между Timetable и Lesson и запишите кратность (multiplicity) на каждом конце линии. Обоснуйте выбор, опираясь на описание.',
    },
    markscheme: {
      en: '[1] Composition (part_of): the link is shown by a filled diamond at the Timetable end. [1] Justification: a Lesson cannot exist without its Timetable, so the parts depend on the whole. [1] Multiplicity: 1 at the Timetable end and 0..* (zero or more) at the Lesson end.',
      ru: '[1] Композиция (part_of): связь обозначается закрашенным ромбом на стороне Timetable. [1] Обоснование: Lesson не может существовать без своего Timetable, то есть части зависят от целого. [1] Кратность: 1 на стороне Timetable и 0..* (ноль или больше) на стороне Lesson.',
    },
    origin: 'original',
  },
  {
    id: 'b3-2-q03',
    subject: 'cs',
    topicIds: ['b3-2-oop-multiple-classes'],
    paper: 'P2',
    marks: 3,
    command: 'Distinguish',
    prompt: {
      en: 'Distinguish between composition and aggregation as relationships between two classes. Give one example of each.',
      ru: 'Различите композицию и агрегацию как связи между двумя классами. Приведите по одному примеру каждой.',
    },
    markscheme: {
      en: '[1] Aggregation: the two objects can exist separately (has_a), for example a playlist holds songs that also exist without it. [1] Composition: the parts cannot exist without the whole (part_of), for example a book and its chapters. [1] Contrast: deleting the whole in composition also removes its parts, while in aggregation the other objects remain.',
      ru: '[1] Агрегация: два объекта могут существовать отдельно (has_a), например плейлист хранит песни, которые существуют и без него. [1] Композиция: части не могут существовать без целого (part_of), например книга и её главы. [1] Различие: при удалении целого в композиции его части тоже удаляются, а в агрегации связанные объекты остаются.',
    },
    origin: 'original',
  },
  {
    id: 'b3-2-q04',
    subject: 'cs',
    topicIds: ['b3-2-oop-multiple-classes'],
    paper: 'P2',
    marks: 3,
    command: 'Outline',
    prompt: {
      en: 'A weather station is the publisher in an observer design pattern. Three phone apps subscribe to it. Outline how the observer pattern works in this program, including how an app starts and stops receiving updates.',
      ru: 'Метеостанция выступает издателем (publisher) в паттерне «наблюдатель». Три приложения на телефоне подписаны на неё. Опишите в общих чертах, как паттерн «наблюдатель» работает в этой программе, включая то, как приложение начинает и прекращает получать обновления.',
    },
    markscheme: {
      en: '[1] The publisher (the weather station) stores a list of subscriber objects, which are the apps. [1] Public methods let an app add itself to the list and remove itself from the list. [1] When the weather changes, the publisher goes through the list and notifies each subscriber.',
      ru: '[1] Издатель (метеостанция) хранит список объектов-подписчиков, то есть приложений. [1] Публичные методы позволяют приложению добавить себя в список и удалить себя из него. [1] При изменении погоды издатель проходит по списку и уведомляет каждого подписчика.',
    },
    origin: 'original',
  },
  {
    id: 'b3-2-q05',
    subject: 'cs',
    topicIds: ['b3-2-oop-multiple-classes'],
    paper: 'P2',
    marks: 3,
    command: 'Explain',
    prompt: {
      en: 'A game must store one settings object that every screen of the game uses. Explain how the singleton design pattern makes sure that only one settings object exists. Identify one disadvantage of using the singleton pattern.',
      ru: 'Игре нужен один объект настроек, которым пользуется каждый экран игры. Объясните, как паттерн «одиночка» гарантирует, что объект настроек существует только в одном экземпляре. Укажите один недостаток использования паттерна «одиночка».',
    },
    markscheme: {
      en: '[1] The constructor is hidden (or the class controls its own creation), so other code cannot create a new object. [1] One private instance is created once, and a static getInstance() method returns that same object to every screen. [1] One disadvantage, for example: the singleton is hard to test, or many parts of the program change the same data, so changes are hard to track.',
      ru: '[1] Конструктор закрыт (или класс сам управляет созданием объекта), поэтому другой код не может создать новый объект. [1] Закрытый экземпляр создаётся один раз, а статический метод getInstance() возвращает этот же объект каждому экрану. [1] Один недостаток, например: одиночку трудно тестировать, или многие части программы меняют одни и те же данные, поэтому изменения трудно отследить.',
    },
    origin: 'original',
  },
  {
    id: 'b3-2-q06',
    subject: 'cs',
    topicIds: ['b3-2-oop-multiple-classes'],
    paper: 'P2',
    marks: 4,
    command: 'Deduce',
    prompt: {
      en: 'The program creates two accounts, withdraws 150 from each one and prints a summary line for each. Deduce the output of the program. Explain which withdraw() method runs for the SavingsAccount object and why.',
      ru: 'Программа создаёт два счёта, снимает с каждого по 150 и выводит сводку по каждому. Определите вывод программы. Объясните, какой метод withdraw() выполняется для объекта SavingsAccount и почему.',
    },
    stimulus: {
      en: `Study the program below.

\`\`\`python
class Account:
    def __init__(self, owner, balance):
        self.owner = owner
        self.balance = balance

    def withdraw(self, amount):
        self.balance = self.balance - amount
        return self.balance

    def describe(self):
        return self.owner + ": " + str(self.balance)


class SavingsAccount(Account):
    def __init__(self, owner, balance, rate):
        super().__init__(owner, balance)
        self.rate = rate

    def withdraw(self, amount):
        if amount > 100:
            amount = amount + 5
        return super().withdraw(amount)


accounts = [Account("Ali", 500), SavingsAccount("Bea", 300, 2)]
for acc in accounts:
    acc.withdraw(150)
    print(acc.describe())
\`\`\``,
      ru: `Изучите программу ниже.

\`\`\`python
class Account:
    def __init__(self, owner, balance):
        self.owner = owner
        self.balance = balance

    def withdraw(self, amount):
        self.balance = self.balance - amount
        return self.balance

    def describe(self):
        return self.owner + ": " + str(self.balance)


class SavingsAccount(Account):
    def __init__(self, owner, balance, rate):
        super().__init__(owner, balance)
        self.rate = rate

    def withdraw(self, amount):
        if amount > 100:
            amount = amount + 5
        return super().withdraw(amount)


accounts = [Account("Ali", 500), SavingsAccount("Bea", 300, 2)]
for acc in accounts:
    acc.withdraw(150)
    print(acc.describe())
\`\`\``,
    },
    markscheme: {
      en: '[1] First line Ali: 350, because the Account version of withdraw() subtracts 150 from 500. [1] Second line Bea: 145, because the SavingsAccount version adds a fee of 5 to the amount (150 is above 100, so 155 is taken from 300). [1] The SavingsAccount object runs its own withdraw() because the subclass method overrides the superclass method with the same name and parameters. [1] super().withdraw(amount) runs the Account version, so the balance is reduced once, by the adjusted amount.',
      ru: '[1] Первая строка Ali: 350, потому что версия withdraw() класса Account вычитает 150 из 500. [1] Вторая строка Bea: 145, потому что версия SavingsAccount добавляет комиссию 5 к сумме (150 больше 100, поэтому со счёта списывается 155 из 300). [1] Для объекта SavingsAccount выполняется собственный withdraw(), потому что метод подкласса переопределяет метод суперкласса с тем же именем и параметрами. [1] Вызов super().withdraw(amount) выполняет версию Account, поэтому баланс уменьшается один раз, на скорректированную сумму.',
    },
    answer: 'Ali: 350\nBea: 145',
    origin: 'original',
  },
  {
    id: 'b3-2-q07',
    subject: 'cs',
    topicIds: ['b3-2-oop-multiple-classes'],
    paper: 'P2',
    marks: 4,
    command: 'Deduce',
    prompt: {
      en: 'Deduce the output of the program. Explain what would happen if the program tried to create an object with Shape() directly.',
      ru: 'Определите вывод программы. Объясните, что произойдёт, если программа попытается создать объект напрямую с помощью Shape().',
    },
    stimulus: {
      en: `The program below stores three shapes in one list. It prints the area of each shape and then the total.

\`\`\`python
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

class Square(Rectangle):
    def __init__(self, side):
        super().__init__(side, side)

shapes = [Rectangle(3, 4), Square(5), Rectangle(2, 10)]
total = 0
for shape in shapes:
    print(shape.area())
    total = total + shape.area()
print(total)
\`\`\``,
      ru: `Программа ниже хранит три фигуры в одном списке. Она выводит площадь каждой фигуры и затем общую сумму.

\`\`\`python
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

class Square(Rectangle):
    def __init__(self, side):
        super().__init__(side, side)

shapes = [Rectangle(3, 4), Square(5), Rectangle(2, 10)]
total = 0
for shape in shapes:
    print(shape.area())
    total = total + shape.area()
print(total)
\`\`\``,
    },
    markscheme: {
      en: '[1] The first three lines are 12, 25 and 20: the areas of Rectangle(3, 4), Square(5) and Rectangle(2, 10), in list order. [1] The last line is 57, the total of the three areas, printed after the loop ends. [1] Shape() raises a TypeError, because Shape is an abstract class and cannot be instantiated. [1] Rectangle implements the abstract area() method and Square inherits it, so their objects can be created, but Shape cannot be.',
      ru: '[1] Первые три строки: 12, 25 и 20 — площади объектов Rectangle(3, 4), Square(5) и Rectangle(2, 10) в порядке списка. [1] Последняя строка: 57, сумма трёх площадей, которая выводится после окончания цикла. [1] Shape() вызывает ошибку TypeError, потому что Shape — абстрактный класс и из него нельзя создать объект. [1] Rectangle реализует абстрактный метод area(), а Square наследует его, поэтому объекты этих классов можно создать, а объект Shape — нельзя.',
    },
    answer: '12\n25\n20\n57',
    origin: 'original',
  },
  {
    id: 'b3-2-q08',
    subject: 'cs',
    topicIds: ['b3-2-oop-multiple-classes'],
    paper: 'P2',
    marks: 5,
    command: 'Trace',
    prompt: {
      en: 'Trace the program and state the output. Explain why the relationship between Book and Chapter is composition rather than aggregation.',
      ru: 'Проследите выполнение программы и укажите её вывод. Объясните, почему связь между Book и Chapter является композицией, а не агрегацией.',
    },
    stimulus: {
      en: `A book object stores its chapters in a list.

\`\`\`python
class Chapter:
    def __init__(self, title, pages):
        self.title = title
        self.pages = pages

class Book:
    def __init__(self, title):
        self.title = title
        self.chapters = []

    def add_chapter(self, title, pages):
        self.chapters.append(Chapter(title, pages))

    def total_pages(self):
        total = 0
        for chapter in self.chapters:
            total = total + chapter.pages
        return total

book = Book("Python Basics")
book.add_chapter("Variables", 12)
book.add_chapter("Loops", 20)
book.add_chapter("Classes", 18)
print(book.total_pages())
print(len(book.chapters))
print(book.chapters[1].title)
\`\`\``,
      ru: `Объект книги хранит свои главы в списке.

\`\`\`python
class Chapter:
    def __init__(self, title, pages):
        self.title = title
        self.pages = pages

class Book:
    def __init__(self, title):
        self.title = title
        self.chapters = []

    def add_chapter(self, title, pages):
        self.chapters.append(Chapter(title, pages))

    def total_pages(self):
        total = 0
        for chapter in self.chapters:
            total = total + chapter.pages
        return total

book = Book("Python Basics")
book.add_chapter("Variables", 12)
book.add_chapter("Loops", 20)
book.add_chapter("Classes", 18)
print(book.total_pages())
print(len(book.chapters))
print(book.chapters[1].title)
\`\`\``,
    },
    markscheme: {
      en: '[1] 50: the total of 12, 20 and 18 pages. [1] 3: the chapters list holds three Chapter objects. [1] Loops: the chapter at index 1 is the second chapter added. [1] Book creates each Chapter inside add_chapter(), so the chapters belong to that book and are not created elsewhere. [1] A chapter cannot exist without its book, and deleting the book removes its chapters, so the relationship is composition (part_of).',
      ru: '[1] 50: сумма 12, 20 и 18 страниц. [1] 3: в списке chapters три объекта Chapter. [1] Loops: глава с индексом 1 — вторая добавленная глава. [1] Book создаёт каждый объект Chapter внутри метода add_chapter(), поэтому главы принадлежат этой книге и не создаются где-то ещё. [1] Глава не может существовать без своей книги, а при удалении книги её главы удаляются тоже; значит, это композиция (part_of).',
    },
    answer: '50\n3\nLoops',
    origin: 'original',
  },
  {
    id: 'b3-2-q09',
    subject: 'cs',
    topicIds: ['b3-2-oop-multiple-classes'],
    paper: 'P2',
    marks: 4,
    command: 'State',
    prompt: {
      en: 'State the output of the program. Explain why the Song object still exists after it is removed from the playlist, and name the relationship between Playlist and Song.',
      ru: 'Укажите вывод программы. Объясните, почему объект Song продолжает существовать после удаления из плейлиста, и назовите связь между Playlist и Song.',
    },
    stimulus: {
      en: `A playlist stores references to song objects. The program below creates two songs, adds them to a playlist and removes one of them.

\`\`\`python
class Song:
    def __init__(self, title, seconds):
        self.title = title
        self.seconds = seconds


class Playlist:
    def __init__(self, name):
        self.name = name
        self.songs = []

    def add(self, song):
        self.songs.append(song)

    def length(self):
        total = 0
        for song in self.songs:
            total = total + song.seconds
        return total


morning = Song("Sunrise", 210)
night = Song("Moon", 185)
mix = Playlist("Mix")
mix.add(morning)
mix.add(night)
print(mix.length())
mix.songs.remove(night)
print(mix.length())
print(night.title)
\`\`\``,
      ru: `Плейлист хранит ссылки на объекты песен. Программа ниже создаёт две песни, добавляет их в плейлист и удаляет одну из них.

\`\`\`python
class Song:
    def __init__(self, title, seconds):
        self.title = title
        self.seconds = seconds


class Playlist:
    def __init__(self, name):
        self.name = name
        self.songs = []

    def add(self, song):
        self.songs.append(song)

    def length(self):
        total = 0
        for song in self.songs:
            total = total + song.seconds
        return total


morning = Song("Sunrise", 210)
night = Song("Moon", 185)
mix = Playlist("Mix")
mix.add(morning)
mix.add(night)
print(mix.length())
mix.songs.remove(night)
print(mix.length())
print(night.title)
\`\`\``,
    },
    markscheme: {
      en: '[1] 395: the lengths of the two songs, 210 + 185, are added together. [1] 210: after the night song is removed, only the morning song is counted. [1] Moon: the night object still exists, because the Song was created outside the playlist and the playlist held only a reference to it. [1] Aggregation (has_a): the playlist keeps references to songs that can exist separately.',
      ru: '[1] 395: складываются длительности двух песен, 210 + 185. [1] 210: после удаления песни night учитывается только песня morning. [1] Moon: объект night продолжает существовать, потому что объект Song создан вне плейлиста, а плейлист хранил только ссылку на него. [1] Агрегация (has_a): плейлист хранит ссылки на песни, которые могут существовать отдельно.',
    },
    answer: '395\n210\nMoon',
    origin: 'original',
  },
  {
    id: 'b3-2-q10',
    subject: 'cs',
    topicIds: ['b3-2-oop-multiple-classes'],
    paper: 'P2',
    marks: 4,
    command: 'Construct',
    prompt: {
      en: 'Construct a Python class Manager that inherits from Employee. Manager has an extra attribute salary. Its constructor takes a name and a salary and calls the superclass constructor for the name. Its pay() method overrides the superclass method and returns the salary. Do not change the Employee class.',
      ru: 'Напишите на Python класс Manager, который наследует класс Employee. У Manager есть дополнительный атрибут salary. Его конструктор принимает имя и зарплату и вызывает конструктор суперкласса для имени. Метод pay() переопределяет метод суперкласса и возвращает зарплату. Класс Employee не меняйте.',
    },
    stimulus: {
      en: `The Employee class below already exists.

\`\`\`python
class Employee:
    def __init__(self, name):
        self.name = name

    def pay(self):
        return 0


staff = Employee("Ada")
print(staff.name, staff.pay())
\`\`\``,
      ru: `Класс Employee ниже уже написан.

\`\`\`python
class Employee:
    def __init__(self, name):
        self.name = name

    def pay(self):
        return 0


staff = Employee("Ada")
print(staff.name, staff.pay())
\`\`\``,
    },
    markscheme: {
      en: '[1] class Manager(Employee) is declared, so Manager inherits from Employee. [1] The constructor takes self, name and salary as parameters. [1] super().__init__(name) (or Employee.__init__(self, name)) sets the name. [1] self.salary is set, and pay(self) has the same name as the superclass method and returns self.salary.',
      ru: '[1] Объявлен class Manager(Employee), то есть Manager наследует Employee. [1] Конструктор принимает параметры self, name и salary. [1] Вызывается super().__init__(name) (или Employee.__init__(self, name)), который задаёт имя. [1] Задаётся self.salary, а метод pay(self) имеет то же имя, что и метод суперкласса, и возвращает self.salary.',
    },
    origin: 'original',
  },
];
