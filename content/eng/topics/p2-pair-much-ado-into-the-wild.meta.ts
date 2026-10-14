import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'p2-pair-much-ado-into-the-wild',
  subject: 'eng',
  code: 'W.much-ado',
  title: { en: 'Paper 2 pair: Much Ado About Nothing and Into the Wild', ru: 'Пара для Paper 2: «Много шума из ничего» и «Into the Wild»' },
  papers: ['P2'],
  order: 28,
  minutes: 60,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can compare one theme across a play and a non-fiction book, with a location in each text', ru: 'Могу сравнить одну тему в пьесе и в документальной книге, с местом в каждом тексте' },
    { en: 'I can name the technique of each form, such as stage directions and overhearing, or narration and documents, and say what it does', ru: 'Могу назвать приём каждой формы, например ремарки и подслушивание или повествование и документы, и сказать, что он делает' },
    { en: 'I can plan a Paper 2 answer in ten minutes: a thesis, three points, locations, and the link that earns B2', ru: 'Могу за десять минут спланировать ответ Paper 2: тезис, три пункта, места в текстах и связь, которая даёт B2' },
    { en: 'I can tell a strong pair point from a summary of two works placed side by side', ru: 'Могу отличить сильный пункт пары от пересказа двух произведений, поставленных рядом' },
  ],
  termIds: ['stage-directions', 'dramatic-irony', 'narrator', 'theme', 'juxtaposition', 'symbol', 'motif', 'foil'],
  questionIds: ['p2-pair-1', 'p2-pair-2', 'p2-pair-3', 'p2-q02', 'p2-q06', 'p2-q09', 'p2-q10', 'p2-q11', 'p2-q15'],
  sources: [
    { kind: 'web', title: 'Folger Shakespeare: Much Ado About Nothing (act.scene.line)', url: 'https://www.folger.edu/explore/shakespeares-works/much-ado-about-nothing/read/' },
    { kind: 'web', title: 'Into the Wild by Jon Krakauer, Penguin Random House', url: 'https://www.penguinrandomhouse.com/books/95440/into-the-wild-by-jon-krakauer/9780385486804' },
    { kind: 'web', title: 'Into the Wild, SparkNotes: Chapter 3', url: 'https://www.sparknotes.com/lit/into-the-wild/section2/' },
    { kind: 'web', title: 'Into the Wild, SparkNotes: Chapters 6 & 7', url: 'https://www.sparknotes.com/lit/into-the-wild/section4/' },
    { kind: 'web', title: 'Into the Wild, SparkNotes: Chapters 12 & 13', url: 'https://www.sparknotes.com/lit/into-the-wild/section7/' },
    { kind: 'web', title: 'Into the Wild, SparkNotes: Chapters 14 & 15', url: 'https://www.sparknotes.com/lit/into-the-wild/section8/' },
    { kind: 'web', title: 'Into the Wild, SparkNotes: Chapter 18 & Epilogue', url: 'https://www.sparknotes.com/lit/into-the-wild/section11/' },
  ],
};

export default topic;
