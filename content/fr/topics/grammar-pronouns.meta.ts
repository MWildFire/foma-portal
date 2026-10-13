import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'grammar-pronouns',
  subject: 'fr',
  code: 'G5.pronouns',
  title: { en: 'Grammar: object pronouns, y and en', ru: 'Грамматика: местоимения COD, COI, y и en' },
  papers: ['P1', 'P2'],
  order: 28,
  minutes: 35,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: "I can replace a direct object with le, la, l' or les and an indirect object with lui or leur", ru: "Могу заменить прямое дополнение на le, la, l' или les, а косвенное на lui или leur" },
    { en: 'I can use y for a place, a thing or an idea, and en for a noun after de or a quantity', ru: 'Могу использовать y для места, предмета или идеи, а en для существительного после de и для количества' },
    { en: 'I can put two pronouns in the right order before a verb in the present', ru: 'Могу правильно расставить два местоимения перед глаголом в настоящем времени' },
    { en: 'I can order pronouns after an affirmative imperative, as in donne-le-moi', ru: 'Могу расставить местоимения после утвердительного повелительного наклонения, например donne-le-moi' },
    { en: 'I can make the past participle agree with a direct object placed before avoir', ru: 'Могу согласовать причастие с прямым дополнением, которое стоит перед avoir' },
  ],
  termIds: ['gr-cod', 'gr-coi', 'gr-y', 'gr-en', 'gr-pronoun-order', 'gr-imperative-pronoun-order', 'gr-pronoun-agreement'],
  questionIds: ['grammar-pronouns-q1', 'grammar-pronouns-q2'],
  sources: [{ kind: 'thinkib', title: 'ThinkIB, French B SL: Grammaire (page 47789)', locator: 'Les pronoms personnels compléments' }],
};

export default topic;
