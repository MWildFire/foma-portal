import type { TopicMeta } from '../../../../src/contract/types';

// Exam technique for the extended answer of option G (Paper 1). It has no programme code of its own: see syllabus.ts (G-essay).
const topic: TopicMeta = {
  id: 'g-essay-option',
  subject: 'geo',
  code: 'G-essay',
  title: { en: 'Extended answers in Option G', ru: 'Развёрнутые ответы по опции G' },
  papers: ['P1'],
  option: 'G',
  order: 5,
  minutes: 30,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    {
      en: 'I can read the command word and say what the answer must do',
      ru: 'Умею прочитать командное слово и сказать, что должен сделать ответ',
    },
    {
      en: 'I can plan and write a complete 10-mark answer addressing the exact comparison',
      ru: 'Умею спланировать и написать полный ответ на 10 баллов по точному сравнению из вопроса',
    },
    {
      en: 'I can use relevant evidence and distinguish area-wide outputs from outcomes for original residents',
      ru: 'Умею использовать уместные доказательства и отличать результаты района от последствий для исходных жителей',
    },
    {
      en: 'I can finish with a judgement that answers the command word and states its conditions',
      ru: 'Умею закончить суждением, которое отвечает на командное слово, и назвать его условия',
    },
  ],
  termIds: [],
  questionIds: ['g3-eq1', 'g2-eq2'],
  caseIds: [],
  sims: [],
  sources: [{ kind: 'web', title: 'Nicholas Falk, Capital Gains: A Better Land Assembly Model for London (February 2018), GLA-commissioned', url: 'https://www.london.gov.uk/sites/default/files/gla_capital_gains_report_.pdf', locator: 'p. 23, London Docklands case' }, { kind: 'ib-guide', title: 'Geography guide (2017), Option G: Urban environments' }],
  links: [
    { title: 'ThinkIB eBook: Option G - Urban Environments (option page, Paper 1 essay)', url: 'https://student.thinkib.net/geography/page/37516/option-g-urban-environments' },
  ],
};

export default topic;
