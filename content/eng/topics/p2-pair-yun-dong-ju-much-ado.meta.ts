import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'p2-pair-yun-dong-ju-much-ado',
  subject: 'eng',
  code: 'P2.YD-MA',
  title: { en: 'Paper 2 pair: Yun Dong-ju poems and Much Ado About Nothing', ru: 'Пара для Paper 2: стихи Юн Дон Джу и «Много шума из ничего»' },
  papers: ['P2'],
  order: 30,
  minutes: 60,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can compare identity and the judgement of others in a poem and in a play, with a location in each text', ru: 'Могу сравнить идентичность (identity) и суждение других в стихотворении и в пьесе, с местом в каждом тексте' },
    { en: 'I can explain how a lyric "I" with no stage directions, and a play with stage directions and overheard talk, each limit or widen what the reader or audience knows', ru: 'Могу объяснить, как лирическое «я» без ремарок и пьеса с ремарками и подслушанным разговором по-своему ограничивают или расширяют то, что знают читатель или зритель' },
    { en: 'I can name a technique of each form, such as apostrophe, imagery or repetition in a poem, and stage directions or overhearing in a play, and say what it does', ru: 'Могу назвать приём каждой формы, например апострофу, образность или повтор в стихотворении и ремарки или подслушивание в пьесе, и сказать, что он делает' },
    { en: 'I can plan a Paper 2 answer in ten minutes: a thesis with a degree, three points, locations in both texts, and the link that earns B2', ru: 'Могу за десять минут спланировать ответ Paper 2: тезис со степенью, три пункта, места в обоих текстах и связь, которая даёт B2' },
    { en: 'I can tell the speaker of a poem from the poet, and say what a poem does not prove about its author', ru: 'Могу отличить говорящего в стихотворении от поэта и сказать, что стихотворение не доказывает о своём авторе' },
  ],
  termIds: ['stage-directions', 'dramatic-irony', 'lyric-persona', 'apostrophe', 'imagery'],
  questionIds: ['p2-pair-yd-ma-1', 'p2-pair-yd-ma-2', 'p2-pair-yd-ma-3', 'p2-q02', 'p2-q06', 'p2-q09', 'p2-q10', 'p2-q11', 'p2-q15'],
  sources: [
    { kind: 'web', title: 'Folger Shakespeare: Much Ado About Nothing (act.scene.line)', url: 'https://www.folger.edu/explore/shakespeares-works/much-ado-about-nothing/read/' },
    { kind: 'web', title: 'Korean Wikisource, Sky, Wind, Star and Poem (1948 edition)', url: 'https://ko.wikisource.org/wiki/%ED%95%98%EB%8A%98%EA%B3%BC_%EB%B0%94%EB%9E%8C%EA%B3%BC_%EB%B3%84%EA%B3%BC_%EC%8B%9C_(1948%EB%85%84)' },
    { kind: 'school', title: 'Sky, Wind and Stars anthology, school file (eng/books)' },
  ],
};

export default topic;
