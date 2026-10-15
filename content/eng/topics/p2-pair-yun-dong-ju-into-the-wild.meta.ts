import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'p2-pair-yun-dong-ju-into-the-wild',
  subject: 'eng',
  code: 'P2.YD-IW',
  title: { en: 'Paper 2 pair: Yun Dong-ju poems and Into the Wild', ru: 'Пара для Paper 2: стихи Юн Дон Джу и «Into the Wild»' },
  papers: ['P2'],
  order: 31,
  minutes: 60,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
  {
    "en": "I can compare a lyric observer with retrospective authorial judgement",
    "ru": "Могу сравнить лирического наблюдателя с ретроспективной авторской оценкой"
  },
  {
    "en": "I can use the school extracts from chapters 4, 15 and 17 without claiming a verified book edition",
    "ru": "Могу использовать школьные отрывки глав 4, 15 и 17, не выдавая их за проверку издания книги"
  },
  {
    "en": "I can compare independence, risk and suffering without equating risk with a wish to die",
    "ru": "Могу сравнить независимость, риск и страдание, не приравнивая риск к желанию смерти"
  },
  {
    "en": "I can plan a P2 answer with a thesis, three comparisons and a qualified conclusion",
    "ru": "Могу спланировать ответ P2 с тезисом, тремя сравнениями и выводом с оговорками"
  }
],
  termIds: ['lyric-persona', 'apostrophe', 'imagery', 'narrator', 'theme', 'metaphor', 'symbol', 'motif', 'juxtaposition'],
  questionIds: ['p2-pair-yd-iw-1', 'p2-pair-yd-iw-2', 'p2-pair-yd-iw-3', 'p2-q02', 'p2-q06', 'p2-q09', 'p2-q10', 'p2-q11', 'p2-q15'],
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
    "kind": "school",
    "title": "Into the Wild: Summer Reading Work",
    "locator": "pp. 8–9 (structure and voice), 11–12 (chapter 4, 15 and 17 extracts)"
  },
  {
    "kind": "school",
    "title": "Into the Wild: Harkness Preparation",
    "locator": "p. 2 (perspective, evidence and interpretation)"
  }
],
};

export default topic;
