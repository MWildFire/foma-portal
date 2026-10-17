import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'w-much-ado',
  subject: 'eng',
  code: 'W.much-ado',
  title: { en: 'Much Ado About Nothing (Shakespeare)', ru: 'Много шума из ничего (Much Ado About Nothing, У. Шекспир)' },
  papers: ['P2'],
  order: 26,
  minutes: 50,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can name the act, scene and line of each overhearing scene and say what the listener believes', ru: 'Могу назвать акт, сцену и строку каждой сцены подслушивания и сказать, во что верит слушающий' },
    { en: 'I can analyse how the church scene shows the power of public reputation', ru: 'Могу проанализировать, как сцена в церкви показывает силу общественной репутации' },
    { en: 'I can explain how Beatrice and Hero are defined by the names and roles the community gives them', ru: 'Могу объяснить, как Беатриче и Геро определяются именами и ролями, которые даёт им общество' },
    { en: 'I can evaluate how far the Watch scenes present truth as something found by chance', ru: 'Могу оценить, насколько сцены с дозором (Watch) показывают, что истина находится по воле случая' },
    { en: 'I can compare one moment where identity meets expectation in this play with the same tension in my second work, using an exact reference from each', ru: 'Могу сравнить момент, где идентичность сталкивается с ожиданиями, в этой пьесе и во втором произведении, и привести точный пример из каждого' },
  ],
  termIds: ['theme', 'motif', 'dramatic-irony', 'foil', 'juxtaposition', 'stage-directions', 'comedy', 'setting'],
  questionIds: ['w-much-ado-1', 'w-much-ado-2', 'w-much-ado-3'],
  sources: [
    { kind: 'web', title: 'David and Ben Crystal, Shakespeare’s Words: Much Ado 1.3.25, canker = wild rose (glossary in context)', url: 'https://www.shakespeareswords.com/Public/Play.aspx?WorkId=23&Act=1&Scene=3' },
    { kind: 'web', title: 'Folger Shakespeare: Much Ado About Nothing (act.scene.line)', url: 'https://www.folger.edu/explore/shakespeares-works/much-ado-about-nothing/read/' },
    { kind: 'web', title: 'Folger Shakespeare: Much Ado About Nothing, introduction', url: 'https://www.folger.edu/explore/shakespeares-works/much-ado-about-nothing/' },
  ],
};

export default topic;
