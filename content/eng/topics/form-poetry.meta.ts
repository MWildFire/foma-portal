import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'form-poetry',
  subject: 'eng',
  code: 'F.POE',
  title: { en: 'Poetry: sound, rhythm, form and voice', ru: 'Поэзия: звук, ритм, форма и голос' },
  papers: ['P1', 'P2'],
  order: 6,
  minutes: 50,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can name the rhyme scheme and the metre of a poem, and show both in one line', ru: 'Могу назвать схему рифмовки и метр стихотворения и показать их на одной строке' },
    { en: 'I can explain what an enjambment or a caesura does to the pace of a line', ru: 'Могу объяснить, что анжамбеман или цезура делают с темпом строки' },
    { en: 'I can tell a quatrain, a couplet, a stanza and a sonnet apart by length and rhyme', ru: 'Могу отличить четверостишие, двустишие, строфу и сонет по длине и рифме' },
    { en: 'I can say who speaks in a poem and how the voice changes the mood', ru: 'Могу сказать, кто говорит в стихотворении, и как голос меняет настроение' },
    { en: 'I can link a sound device to a meaning, not only name it', ru: 'Могу связать звуковой приём со смыслом, а не только назвать его' },
  ],
  termIds: ['alliteration', 'onomatopoeia', 'metre', 'iamb', 'enjambment', 'stanza', 'rhyme-scheme', 'quatrain', 'couplet', 'sonnet', 'volta', 'ballad', 'conceit', 'lyric-persona'],
  questionIds: ['p1-dickinson-fly', 'p1-keats-nightingale', 'p1-hardy-thrush', 'p1-owen-dulce', 'p1-hopkins-pied', 'chk-form-poetry-1', 'chk-form-poetry-2'],
  sources: [{ kind: 'own', title: 'Own wording; check against the course textbook (chapter and page to be added)' }],
};

export default topic;
