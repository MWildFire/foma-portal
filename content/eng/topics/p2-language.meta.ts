import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'p2-language',
  subject: 'eng',
  code: 'P2.D',
  title: { en: 'Language of the essay: precise, literary, integrated quotes', ru: 'Язык эссе: точный, литературный, с вплетёнными цитатами' },
  papers: ['P2'],
  order: 16,
  minutes: 30,
  priority: 2,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can replace vague words such as "good", "nice", "shows" and "very" with precise vocabulary', ru: 'Могу заменить расплывчатые слова вроде «good», «nice», «shows» и «very» точной лексикой' },
    { en: 'I can write my analysis in the present tense and keep the tense steady within a sentence', ru: 'Могу писать анализ в настоящем времени и не менять время внутри предложения' },
    { en: 'I can build a short, exact quotation into my own sentence so that it reads as one grammatical unit', ru: 'Могу встроить короткую точную цитату в собственное предложение так, чтобы оно читалось как одна грамматическая единица' },
    { en: 'I can use a literary term accurately and say what it does in the same sentence', ru: 'Могу точно употребить литературный термин и сказать, что он делает, в том же предложении' },
  ],
  termIds: ['diction', 'connotation', 'register', 'understatement', 'syntax'],
  questionIds: ['p2-q16', 'p2-q17', 'p2-q18', 'p2-q19', 'p2-q20', 'chk-p2-language-1', 'chk-p2-language-2'],
  sources: [{ kind: 'own', title: 'Own wording' }],
};

export default topic;
