import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'techniques-general',
  subject: 'eng',
  code: 'F.GEN',
  title: { en: 'Techniques common to all forms', ru: 'Приёмы, общие для всех форм' },
  papers: ['P1', 'P2'],
  order: 10,
  minutes: 45,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can name a device such as metaphor, irony or understatement and quote the words it applies to', ru: 'Могу назвать приём (метафора, ирония, преуменьшение) и привести слова, к которым он относится' },
    { en: 'I can separate tone (the attitude of the writer) from mood (the feeling of the reader)', ru: 'Могу отличить тон, отношение автора, от настроения, чувства читателя' },
    { en: 'I can explain the connotation of a word and how it differs from its denotation', ru: 'Могу объяснить коннотацию слова и её отличие от денотации' },
    { en: 'I can trace how juxtaposition, a motif or foreshadowing shapes what the reader expects', ru: 'Могу проследить, как сопоставление, мотив или предзнаменование меняют ожидания читателя' },
  ],
  termIds: ['tone', 'mood', 'imagery', 'symbol', 'metaphor', 'simile', 'personification', 'verbal-irony', 'situational-irony', 'understatement', 'diction', 'connotation', 'denotation', 'foreshadowing', 'symbolism', 'allegory', 'suspense'],
  questionIds: ['chk-techniques-general-1', 'chk-techniques-general-2'],
  sources: [{ kind: 'own', title: 'Own wording' }],
};

export default topic;
