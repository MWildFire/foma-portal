import type { SyllabusItem } from '../../src/contract/types';

// Computer science HL. Codes follow the IB guide as printed in the Oxford 2025 companion (external assessment, pp. 600-611):
// paper 1 = theme A (section A) + the case study (section B); paper 2 = theme B. HL-only codes carry hl: true.
export const syllabus: SyllabusItem[] = [
  { code: 'A1.1', title: { en: 'Computer hardware and operation', ru: 'Аппаратное обеспечение и работа компьютера' }, papers: ['P1'] },
  { code: 'A1.2', title: { en: 'Data representation and computer logic', ru: 'Представление данных и логика компьютера' }, papers: ['P1'] },
  { code: 'A1.3', title: { en: 'Operating systems and control systems', ru: 'Операционные системы и системы управления' }, papers: ['P1'] },
  { code: 'A1.4', title: { en: 'Translation', ru: 'Трансляция программ' }, papers: ['P1'], hl: true },
  { code: 'A2.1', title: { en: 'Network fundamentals', ru: 'Основы сетей' }, papers: ['P1'] },
  { code: 'A2.2', title: { en: 'Network architecture', ru: 'Архитектура сетей' }, papers: ['P1'] },
  { code: 'A2.3', title: { en: 'Data transmission', ru: 'Передача данных' }, papers: ['P1'] },
  { code: 'A2.4', title: { en: 'Network security', ru: 'Безопасность сетей' }, papers: ['P1'] },
  { code: 'A3.1', title: { en: 'Database fundamentals', ru: 'Основы баз данных' }, papers: ['P1'] },
  { code: 'A3.2', title: { en: 'Database design', ru: 'Проектирование баз данных' }, papers: ['P1'] },
  { code: 'A3.3', title: { en: 'Database programming', ru: 'Программирование баз данных' }, papers: ['P1'] },
  { code: 'A3.4', title: { en: 'Alternative databases and data warehouses', ru: 'Альтернативные базы данных и хранилища данных' }, papers: ['P1'], hl: true },
  { code: 'A4.1', title: { en: 'Machine learning fundamentals', ru: 'Основы машинного обучения' }, papers: ['P1'] },
  { code: 'A4.2', title: { en: 'Data preprocessing', ru: 'Предобработка данных' }, papers: ['P1'], hl: true },
  { code: 'A4.3', title: { en: 'Machine learning approaches', ru: 'Подходы машинного обучения' }, papers: ['P1'], hl: true },
  { code: 'A4.4', title: { en: 'Ethical considerations', ru: 'Этические аспекты' }, papers: ['P1'] },
  { code: 'p1-case', title: { en: 'Case study (section B of paper 1)', ru: 'Кейс (раздел B, работа 1)' }, papers: ['P1'] },
  { code: 'B1.1', title: { en: 'Computational thinking', ru: 'Компьютерное мышление' }, papers: ['P2'] },
  { code: 'B2.1', title: { en: 'Programming fundamentals', ru: 'Основы программирования' }, papers: ['P2'] },
  { code: 'B2.2', title: { en: 'Data structures', ru: 'Структуры данных' }, papers: ['P2'] },
  { code: 'B2.3', title: { en: 'Programming constructs', ru: 'Конструкции программирования' }, papers: ['P2'] },
  { code: 'B2.4', title: { en: 'Programming algorithms', ru: 'Алгоритмы' }, papers: ['P2'] },
  { code: 'B2.5', title: { en: 'File processing', ru: 'Обработка файлов' }, papers: ['P2'] },
  { code: 'B3.1', title: { en: 'Fundamentals of OOP for a single class', ru: 'Основы ООП для одного класса' }, papers: ['P2'] },
  { code: 'B3.2', title: { en: 'Fundamentals of OOP for multiple classes', ru: 'Основы ООП для нескольких классов' }, papers: ['P2'], hl: true },
  { code: 'B4.1', title: { en: 'Fundamentals of abstract data types', ru: 'Основы абстрактных типов данных' }, papers: ['P2'], hl: true },
];
