import type { SyllabusItem } from '../../src/contract/types';

// English A: Literature SL, as used in the portal for the school mocks (26.10–05.11.2026, exam 29.10 for both papers).
// Codes are local to this subject. Course works (one code per work, "W.<slug>") are added when the reading list
// from the school arrives (ops/requests.md).
export const syllabus: SyllabusItem[] = [
  // Paper 1: guided literary analysis (75 min, 20 marks, four criteria of 5 marks each)
  { code: 'P1.M', title: { en: 'Guided analysis method (Paper 1)', ru: 'Метод направленного анализа (Paper 1)' }, papers: ['P1'] },
  { code: 'P1.A', title: { en: 'Criterion A: understanding and interpretation of the extract', ru: 'Критерий A: понимание и интерпретация отрывка' }, papers: ['P1'] },
  { code: 'P1.B', title: { en: 'Criterion B: analysis and evaluation of literary techniques', ru: 'Критерий B: анализ и оценка литературных приёмов' }, papers: ['P1'] },
  { code: 'P1.C', title: { en: 'Criterion C: focus on the guiding question and organisation', ru: 'Критерий C: фокус на направляющем вопросе и организация' }, papers: ['P1'] },
  { code: 'P1.D', title: { en: 'Criterion D: language and literary vocabulary', ru: 'Критерий D: язык и литературная лексика' }, papers: ['P1'] },

  // Forms and techniques that appear in both papers
  { code: 'F.POE', title: { en: 'Poetry: form, sound, imagery, voice', ru: 'Поэзия: форма, звук, образность, голос' }, papers: ['P1', 'P2'] },
  { code: 'F.PRO', title: { en: 'Prose fiction: narration, character, structure', ru: 'Художественная проза: повествование, персонаж, структура' }, papers: ['P1', 'P2'] },
  { code: 'F.DRA', title: { en: 'Drama: dialogue, stage, performance', ru: 'Драма: диалог, сцена, постановка' }, papers: ['P1', 'P2'] },
  { code: 'F.NFI', title: { en: 'Non-fiction and speeches: argument and rhetoric', ru: 'Нон-фикшн и речи: аргументация и риторика' }, papers: ['P1', 'P2'] },
  { code: 'F.GEN', title: { en: 'Techniques common to all forms', ru: 'Приёмы, общие для всех форм' }, papers: ['P1', 'P2'] },

  // Key concepts of the course (each one is a topic of its own)
  { code: 'C.ID', title: { en: 'Key concept: identity', ru: 'Ключевое понятие: идентичность (identity)' }, papers: ['P1', 'P2'] },
  { code: 'C.CU', title: { en: 'Key concept: culture', ru: 'Ключевое понятие: культура (culture)' }, papers: ['P1', 'P2'] },
  { code: 'C.CR', title: { en: 'Key concept: creativity', ru: 'Ключевое понятие: творчество (creativity)' }, papers: ['P1', 'P2'] },
  { code: 'C.CO', title: { en: 'Key concept: communication', ru: 'Ключевое понятие: коммуникация (communication)' }, papers: ['P1', 'P2'] },
  { code: 'C.PE', title: { en: 'Key concept: perspective', ru: 'Ключевое понятие: перспектива (perspective)' }, papers: ['P1', 'P2'] },
  { code: 'C.TR', title: { en: 'Key concept: transformation', ru: 'Ключевое понятие: трансформация (transformation)' }, papers: ['P1', 'P2'] },
  { code: 'C.RE', title: { en: 'Key concept: representation', ru: 'Ключевое понятие: репрезентация (representation)' }, papers: ['P1', 'P2'] },

  // Paper 2: comparative essay (105 min, 25 marks: A, B1, B2, C, D of 5 marks each)
  { code: 'P2.PL', title: { en: 'Planning a comparative essay in 10 minutes', ru: 'Планирование сравнительного эссе за 10 минут' }, papers: ['P2'] },
  { code: 'P2.A', title: { en: 'Criterion A: understanding of the prompt and of both works', ru: 'Критерий A: понимание задания и обоих произведений' }, papers: ['P2'] },
  { code: 'P2.B1', title: { en: 'Criterion B1: analysis of authorial choices', ru: 'Критерий B1: анализ авторских решений' }, papers: ['P2'] },
  { code: 'P2.B2', title: { en: 'Criterion B2: comparison of the two works', ru: 'Критерий B2: сравнение двух произведений' }, papers: ['P2'] },
  { code: 'P2.C', title: { en: 'Criterion C: focus and organisation of the essay', ru: 'Критерий C: фокус и организация эссе' }, papers: ['P2'] },
  { code: 'P2.D', title: { en: 'Criterion D: language of the essay', ru: 'Критерий D: язык эссе' }, papers: ['P2'] },
];
