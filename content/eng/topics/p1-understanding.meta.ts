import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'p1-understanding',
  subject: 'eng',
  code: 'P1.A',
  title: { en: 'Understanding the extract: what, who, how it sounds', ru: 'Понимание отрывка: что, кто, как звучит' },
  papers: ['P1'],
  order: 2,
  minutes: 35,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can say what is happening in an extract and where and when it takes place', ru: 'Могу сказать, что происходит в отрывке и где и когда это происходит' },
    { en: 'I can name the speaker, the listener and the relationship between them, with a quotation', ru: 'Могу назвать говорящего, слушателя и связь между ними, с цитатой' },
    { en: 'I can separate the literal meaning of a phrase from what it suggests', ru: 'Могу отделить буквальный смысл фразы от того, что она подразумевает' },
    { en: 'I can name the tone of a passage and prove it with a quotation', ru: 'Могу назвать тон отрывка и подтвердить его цитатой' },
    { en: 'I can find the turn in an extract and say what changes at that point', ru: 'Могу найти поворот в отрывке и сказать, что меняется в этой точке' },
  ],
  termIds: ['lyric-persona', 'tone', 'mood', 'theme', 'connotation', 'denotation', 'verbal-irony', 'subtext'],
  questionIds: ['p1-dickinson-fly', 'chk-p1-understanding-1', 'chk-p1-understanding-2'],
  sources: [{ kind: 'own', title: 'Original practice explanation; suggested method, not a mandatory template' }, { kind: 'ib-guide', title: 'IB English A: literature SL Paper 1, November 2025; May 2025 Paper 1 marking notes', locator: 'November candidate instructions (cover); May general marking instructions, printed p. 3' }],
};

export default topic;
