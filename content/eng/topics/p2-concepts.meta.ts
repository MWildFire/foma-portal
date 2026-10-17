import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'p2-concepts',
  subject: 'eng',
  code: 'P2.A',
  title: { en: 'Concepts in Paper 2 prompts', ru: 'Концепты в заданиях Paper 2' },
  papers: ['P2'],
  order: 24,
  minutes: 35,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can use course concepts as optional lenses without replacing the actual question', ru: 'Могу использовать концепты курса, сохраняя фокус на конкретном вопросе' },
    { en: 'I can distinguish author-assigned archive tags from IB requirements and predictions', ru: 'Могу отличить авторские теги архива от требований IB и прогнозов' },
    { en: 'I can turn a useful concept into a question about how both works create meaning', ru: 'Могу превратить концепт в вопрос о том, как оба произведения создают смысл' },
  ],
  termIds: ['argument', 'theme', 'literary-device', 'juxtaposition'],
  questionIds: ['chk-p2-concepts-1', 'chk-p2-concepts-2'],
  sources: [{ kind: 'web', title: 'IB Language A: literature guide, first assessment 2026, PDF34–35 / printed28–29: seven concepts, actual text read through the official examiner link', url: 'https://xmltwo.ibo.org/publications/EAD/2026_EN/GR1/GR1-A-Lit_EN_24.pdf' }, { kind: 'web', title: 'IB Examiner Instructions 2026, Language A, Paper 2: General guidance and criteria A–D; actual public text', url: 'https://ibpublishing.ibo.org/exinst/apps/exinst/index.html?chapter=1&doc=EX_instructions_2026_e&part=8' }, { kind: 'own', title: 'Verified school Paper 2 Revision Booklet: overview and final Mark Scheme pages; author practice methods are not additional criteria' }, { kind: 'own', title: 'Own analysis of 52 Paper 2 prompts (May 2023 – November 2025)' }],
};

export default topic;
