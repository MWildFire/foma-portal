import type { SyllabusItem } from '../../src/contract/types';

// French B SL: the five prescribed themes, the P1 writing skills and the P2 reading and listening skills, and the
// grammar groups. Every code needs one topic with both EN and RU bodies before G2 (coverage 100%).
export const syllabus: SyllabusItem[] = [
  { code: 'T1', title: { en: 'Theme 1: Identities', ru: 'Тема 1: Идентичность (Identities)' }, papers: ['P1', 'P2'] },
  { code: 'T2', title: { en: 'Theme 2: Experiences', ru: 'Тема 2: Опыт и впечатления (Experiences)' }, papers: ['P1', 'P2'] },
  { code: 'T3', title: { en: 'Theme 3: Human ingenuity', ru: 'Тема 3: Человеческая изобретательность (Human ingenuity)' }, papers: ['P1', 'P2'] },
  { code: 'T4', title: { en: 'Theme 4: Social organization', ru: 'Тема 4: Общественная организация (Social organization)' }, papers: ['P1', 'P2'] },
  { code: 'T5', title: { en: 'Theme 5: Sharing the planet', ru: 'Тема 5: Общая планета (Sharing the planet)' }, papers: ['P1', 'P2'] },

  { code: 'P1.method', title: { en: 'Writing (P1): choosing a task, planning, criteria A to C, timing', ru: 'Письмо (P1): выбор задания, план, критерии A–C, тайминг' }, papers: ['P1'] },
  { code: 'P1.connectors', title: { en: 'Writing (P1): connectors and fixed phrases', ru: 'Письмо (P1): связки и устойчивые обороты' }, papers: ['P1'] },

  { code: 'P1.blog', title: { en: 'Writing (P1): blog post', ru: 'Письмо (P1): пост для блога (blog)' }, papers: ['P1'] },
  { code: 'P1.diary', title: { en: 'Writing (P1): diary entry', ru: 'Письмо (P1): запись в дневнике (diary)' }, papers: ['P1'] },
  { code: 'P1.email-informal', title: { en: 'Writing (P1): informal e-mail or letter', ru: 'Письмо (P1): неофициальное письмо или e-mail (e-mail informal)' }, papers: ['P1'] },
  { code: 'P1.letter-formal', title: { en: 'Writing (P1): formal letter', ru: 'Письмо (P1): официальное письмо (letter formal)' }, papers: ['P1'] },
  { code: 'P1.article', title: { en: 'Writing (P1): article', ru: 'Письмо (P1): статья (article)' }, papers: ['P1'] },
  { code: 'P1.speech', title: { en: 'Writing (P1): speech', ru: 'Письмо (P1): речь (speech)' }, papers: ['P1'] },
  { code: 'P1.interview', title: { en: 'Writing (P1): interview', ru: 'Письмо (P1): интервью (interview)' }, papers: ['P1'] },
  { code: 'P1.review', title: { en: 'Writing (P1): review', ru: 'Письмо (P1): рецензия (review)' }, papers: ['P1'] },
  { code: 'P1.brochure', title: { en: 'Writing (P1): brochure', ru: 'Письмо (P1): брошюра (brochure)' }, papers: ['P1'] },
  { code: 'P1.report', title: { en: 'Writing (P1): report', ru: 'Письмо (P1): доклад и отчёт (report)' }, papers: ['P1'] },
  { code: 'P1.proposal', title: { en: 'Writing (P1): proposal', ru: 'Письмо (P1): предложение (proposal)' }, papers: ['P1'] },
  { code: 'P1.essay', title: { en: 'Writing (P1): essay', ru: 'Письмо (P1): эссе (essay)' }, papers: ['P1'] },
  { code: 'P1.social-post', title: { en: 'Writing (P1): social media post', ru: 'Письмо (P1): пост в соцсетях (social media post)' }, papers: ['P1'] },
  { code: 'P1.instructions', title: { en: 'Writing (P1): instructions', ru: 'Письмо (P1): инструкция (instructions)' }, papers: ['P1'] },

  { code: 'P2R.strategy', title: { en: 'Reading (P2): question types and method', ru: 'Чтение (P2): типы вопросов и метод' }, papers: ['P2'] },
  { code: 'P2L.strategy', title: { en: 'Listening (P2): two listenings, notes and answers', ru: 'Аудирование (P2): два прослушивания, заметки и ответы' }, papers: ['P2'] },

  { code: 'G1.present', title: { en: 'Grammar: présent and reflexive verbs', ru: 'Грамматика: présent (настоящее время) и местоименные глаголы' }, papers: ['P1', 'P2'] },
  { code: 'G2.past', title: { en: 'Grammar: passé composé, imparfait, plus-que-parfait', ru: 'Грамматика: passé composé, imparfait, plus-que-parfait' }, papers: ['P1', 'P2'] },
  { code: 'G3.future-conditional', title: { en: 'Grammar: futur proche, futur simple, conditionnel, si-clauses', ru: 'Грамматика: futur proche, futur simple, conditionnel, фразы со si' }, papers: ['P1', 'P2'] },
  { code: 'G4.subjunctive-imperative', title: { en: 'Grammar: subjonctif présent and impératif', ru: 'Грамматика: subjonctif présent (сослагательное наклонение) и impératif (повелительное)' }, papers: ['P1', 'P2'] },
  { code: 'G5.pronouns', title: { en: 'Grammar: COD, COI, y and en', ru: 'Грамматика: местоимения COD, COI, y и en' }, papers: ['P1', 'P2'] },
  { code: 'G6.relatives-connectors', title: { en: 'Grammar: relative pronouns qui, que, dont, où and logical connectors', ru: 'Грамматика: относительные местоимения qui, que, dont, où и логические связки' }, papers: ['P1', 'P2'] },
  { code: 'G7.comparison-negation-agreement', title: { en: 'Grammar: comparatif, superlatif, négation and agreement of the past participle', ru: 'Грамматика: comparatif, superlatif, négation и согласование participe passé' }, papers: ['P1', 'P2'] },
];
