import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'p1-focus',
  subject: 'eng',
  code: 'P1.C',
  title: { en: 'Focus and organisation: thesis, paragraphs, links', ru: 'Фокус и организация: тезис, абзацы, связки' },
  papers: ['P1'],
  order: 4,
  minutes: 35,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can write a one-sentence thesis that answers the guiding question and makes a claim about effect', ru: 'Могу написать тезис в одном предложении: он отвечает на направляющий вопрос и утверждает что-то об эффекте' },
    { en: 'I can open each paragraph with a topic sentence that links back to the thesis', ru: 'Могу начать каждый абзац с тематического предложения, которое связано с тезисом' },
    { en: 'I can link paragraphs with phrases such as "by contrast" and "this suggests"', ru: 'Могу связывать абзацы фразами вроде «by contrast» и «this suggests»' },
    { en: 'I can spot retelling and rewrite it as an answer to the guiding question', ru: 'Могу заметить пересказ и переписать его как ответ на направляющий вопрос' },
    { en: 'I can write a conclusion that develops an insight instead of repeating the introduction', ru: 'Могу написать вывод, который развивает мысль, а не повторяет введение' },
  ],
  termIds: ['antithesis', 'anaphora', 'rhetorical-question', 'exposition', 'climax', 'denouement'],
  questionIds: ['chk-p1-focus-1', 'chk-p1-focus-2'],
  sources: [{ kind: 'own', title: 'Own wording' }],
};

export default topic;
