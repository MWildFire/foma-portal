import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'p2-language',
  subject: 'eng',
  code: 'P2.D',
  title: { en: 'Language of the essay: precision and accurate references', ru: 'Язык эссе: точность и достоверные отсылки' },
  papers: ['P2'],
  order: 16,
  minutes: 30,
  priority: 2,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can replace vague words such as "good", "nice", "shows" and "very" with precise vocabulary', ru: 'Могу заменить расплывчатые слова вроде «good», «nice», «shows» и «very» точной лексикой' },
    { en: 'I can write my analysis in the present tense and keep the tense steady within a sentence', ru: 'Могу писать анализ в настоящем времени и не менять время внутри предложения' },
    { en: 'I can use accurate references without treating quotations as compulsory; if quoting, I preserve and integrate the wording', ru: 'Могу точно сослаться на произведение без обязательной цитаты; если цитирую, сохраняю и грамматически встраиваю слова' },
    { en: 'I can use a literary term accurately and say what it does in the same sentence', ru: 'Могу точно употребить литературный термин и сказать, что он делает, в том же предложении' },
  ],
  termIds: ['diction', 'connotation', 'register', 'understatement', 'syntax'],
  questionIds: ['p2-q16', 'p2-q17', 'p2-q18', 'p2-q19', 'p2-q20', 'chk-p2-language-1', 'chk-p2-language-2'],
  sources: [{ kind: 'web', title: 'IB public examiner instructions 2026, Language A: Paper 1 criterion D; Paper 2 general considerations and criteria (closed-book references; flexible structures)', url: 'https://ibpublishing.ibo.org/exinst/apps/exinst/index.html?chapter=1&doc=EX_instructions_2026_e&part=8' }, { kind: 'own', title: 'Original explanations and practice examples; school allocation retained' }],
};

export default topic;
