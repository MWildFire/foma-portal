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
    { en: 'I can separate the attitude conveyed (tone) from the atmosphere invited (mood)', ru: 'Могу отличить выраженное отношение (тон) от предлагаемой атмосферы (настроение)' },
    { en: 'I can explain the connotation of a word and how it differs from its denotation', ru: 'Могу объяснить коннотацию слова и её отличие от денотации' },
    { en: 'I can trace how juxtaposition, a motif or foreshadowing shapes what the reader expects', ru: 'Могу проследить, как сопоставление, мотив или предзнаменование меняют ожидания читателя' },
  ],
  termIds: ['tone', 'mood', 'imagery', 'symbol', 'metaphor', 'simile', 'personification', 'verbal-irony', 'situational-irony', 'understatement', 'diction', 'connotation', 'denotation', 'foreshadowing', 'symbolism', 'allegory', 'suspense'],
  questionIds: ['chk-techniques-general-1', 'chk-techniques-general-2'],
  sources: [
    { kind: 'ib-guide', title: 'IB 2026 English A: Literature examiner instructions, Paper 1 criterion B and Paper 2 A/B1/B2/C/D', url: 'https://ibpublishing.ibo.org/exinst/apps/exinst/index.html?chapter=1&doc=EX_instructions_2026_e&part=8' },
    { kind: 'web', title: 'КЛЭ, т. 1 (1962), стб. 160–161: «Аллегория»', url: 'https://feb-web.ru/feb/kle/kle-abc/ke1/ke1-1603.htm?cmd=p&istext=1' },
    { kind: 'web', title: 'Г. Е. Бен, «Парадокс», КЛЭ, т. 5 (1968), стб. 591–592', url: 'https://feb-web.ru/feb/kle/kle-abc/ke5/ke5-5911.htm?cmd=p&istext=1' },
    { kind: 'web', title: 'В. И. Корольков, «Оксиморон», КЛЭ, т. 5 (1968), стб. 410–411', url: 'https://feb-web.ru/feb/kle/kle-abc/ke5/ke5-4103.htm?cmd=p&istext=1' },
    { kind: 'own', title: 'Original illustrative paragraph and checks; symbolic absence is not proof of bereavement' },
  ],
};

export default topic;
