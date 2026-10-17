import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'p1-language',
  subject: 'eng',
  code: 'P1.D',
  title: { en: 'Language: literary vocabulary and quotations', ru: 'Язык: литературная лексика и цитаты' },
  papers: ['P1'],
  order: 5,
  minutes: 30,
  priority: 2,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can write about the text in the present tense, for example "the poet presents"', ru: 'Могу писать о тексте в настоящем времени, например «the poet presents»' },
    { en: 'I can replace vague words such as good, very, shows and nice with an exact word or term', ru: 'Могу заменить размытые слова, например good, very, shows и nice, точным словом или термином' },
    { en: 'I can use suggests, implies, reinforces and undercuts with their exact meanings', ru: 'Могу точно использовать глаголы suggests, implies, reinforces и undercuts' },
    { en: 'I can build a short quotation into my own sentence so that the grammar works', ru: 'Могу вплести короткую цитату в своё предложение так, чтобы работала грамматика' },
    { en: 'I can identify a figurative comparison and explain how irony can overlap with sarcasm', ru: 'Могу распознать образное сравнение и объяснить возможное пересечение иронии и сарказма' },
  ],
  termIds: ['denotation', 'connotation', 'diction', 'register', 'syntax', 'hyperbole', 'understatement', 'euphemism', 'assonance', 'caesura', 'rhythm'],
  questionIds: ['chk-p1-language-1', 'chk-p1-language-2'],
  sources: [{ kind: 'web', title: 'П. И. Шпагин, Ирония, КЛЭ т. 3 (1966), стб. 179–182: контекст, сарказм и драматическая ирония', url: 'https://feb-web.ru/feb/kle/kle-abc/ke3/ke3-1791.htm?cmd=p&istext=1' }, { kind: 'web', title: 'IB public examiner instructions 2026, Language A: Paper 1 criterion D; Paper 2 general considerations and criteria (closed-book references; flexible structures)', url: 'https://ibpublishing.ibo.org/exinst/apps/exinst/index.html?chapter=1&doc=EX_instructions_2026_e&part=8' }, { kind: 'own', title: 'Original explanations and practice examples; school allocation retained' }],
};

export default topic;
