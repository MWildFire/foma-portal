import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'p1-analysis',
  subject: 'eng',
  code: 'P1.B',
  title: { en: 'Analysis: from a device to its effect', ru: 'Анализ: от приёма к эффекту' },
  papers: ['P1'],
  order: 3,
  minutes: 45,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can name a technique exactly, and I can tell a simile from a metaphor', ru: 'Могу точно назвать приём и отличить сравнение от метафоры' },
    { en: 'I can explain the effect of a technique on the reader, not only that the technique is there', ru: 'Могу объяснить эффект приёма для читателя, а не только то, что приём есть' },
    { en: 'I can apply the so-what test until the effect says something about the text', ru: 'Могу применить тест «так что?», пока эффект не скажет что-то о тексте' },
    { en: 'I can judge how well a technique works, for whom and in which context, and give a reason', ru: 'Могу оценить, насколько хорошо работает приём, для кого и в каком контексте, и привести причину' },
    { en: 'I can choose three or four techniques from sound, image, structure, perspective, dialogue, syntax and diction', ru: 'Могу выбрать три–четыре приёма из звука, образа, структуры, перспективы, диалога, синтаксиса и выбора слов' },
  ],
  termIds: ['simile', 'metaphor', 'juxtaposition', 'syntax', 'diction', 'connotation', 'imagery', 'tone', 'pace', 'foreshadowing', 'symbol'],
  questionIds: ['p1-dickinson-fly', 'p1-joyce-araby', 'chk-p1-analysis-1', 'chk-p1-analysis-2'],
  sims: ['eng.annotate'],
  sources: [{ kind: 'own', title: 'Written for this portal; criterion B (analysis and evaluation) of Paper 1, 0–5 marks' }],
};

export default topic;
