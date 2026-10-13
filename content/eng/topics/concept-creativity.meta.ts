import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'concept-creativity',
  subject: 'eng',
  code: 'C.CR',
  title: { en: 'Key concept: creativity', ru: 'Ключевое понятие: творчество' },
  papers: ['P1', 'P2'],
  order: 19,
  minutes: 30,
  priority: 2,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can explain creativity as an effect on the reader, not as praise for the writer', ru: 'Могу объяснить творчество как эффект на читателя, а не как похвалу автору' },
    { en: 'I can name a convention that a text uses or breaks, and say what the reader expects', ru: 'Могу назвать конвенцию (convention), которую текст использует или нарушает, и сказать, чего ждёт читатель' },
    { en: 'I can explain defamiliarisation with a short example from a text', ru: 'Могу объяснить остранение (defamiliarisation) на коротком примере из текста' },
    { en: 'I can explain how an allusion, a paradox or an oxymoron changes what the reader understands', ru: 'Могу объяснить, как аллюзия (allusion), парадокс (paradox) или оксюморон (oxymoron) меняют понимание читателя' },
  ],
  termIds: ['defamiliarisation', 'literary-device', 'allusion', 'motif', 'symbol', 'paradox', 'oxymoron'],
  questionIds: ['chk-concept-creativity-1', 'chk-concept-creativity-2'],
  sources: [{ kind: 'own', title: 'Own wording' }],
};

export default topic;
