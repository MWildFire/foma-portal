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
  {
    "en": "I can compare inward and public judgement with a precise reference in both works",
    "ru": "Могу сравнить внутренний и публичный суд с точными ссылками на оба произведения"
  },
  {
    "en": "I can explain how repeated observation and staged overhearing shape judgement",
    "ru": "Могу объяснить, как повтор наблюдения и подстроенное подслушивание формируют оценку"
  },
  {
    "en": "I can discuss costly loyalty without assuming that suffering proves virtue",
    "ru": "Могу обсудить дорого обходящуюся верность, не считая страдание доказательством добродетели"
  },
  {
    "en": "I can plan an original P2 question with a thesis, three comparisons and a conclusion",
    "ru": "Могу спланировать ответ на оригинальный вопрос P2: тезис, три сравнения и вывод"
  }
],
  termIds: ['stage-directions', 'dramatic-irony', 'lyric-persona', 'apostrophe', 'imagery'],
  questionIds: ['p2-pair-yd-ma-1', 'p2-pair-yd-ma-2', 'p2-pair-yd-ma-3', 'p2-q02', 'p2-q06', 'p2-q09', 'p2-q10', 'p2-q11', 'p2-q15'],
  sources: [
  {
    "kind": "web",
    "title": "Korean Wikisource: Sky, Wind and Stars, 1948 text (explicit Korean lines)",
    "url": "https://ko.wikisource.org/wiki/하늘과_바람과_별과_시_(1948년)"
  },
  {
    "kind": "school",
    "title": "Sky, Wind and Stars anthology (class translation; translator uncredited)",
    "locator": "Poem title and explicit English line; no printed page numbers"
  },
  {
    "kind": "web",
    "title": "Folger Shakespeare: Much Ado About Nothing",
    "locator": "2.3.223–230; 4.1.25–33, 84–95, 225–250, 302–350; 5.4.65–68",
    "url": "https://www.folger.edu/explore/shakespeares-works/much-ado-about-nothing/read/"
  }
],
};

export default topic;
