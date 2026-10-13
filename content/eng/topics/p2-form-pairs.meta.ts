import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'p2-form-pairs',
  subject: 'eng',
  code: 'P2.PL',
  title: { en: 'Pairs of forms: planning a comparison', ru: 'Пары форм: план сравнения' },
  papers: ['P2'],
  order: 25,
  minutes: 40,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can list the levers of poetry, prose, drama and non-fiction and say what each one allows', ru: 'Могу перечислить рычаги поэзии, прозы, драмы и нон-фикшн и сказать, что каждый из них позволяет' },
    { en: 'I can turn the levers of two forms into comparison axes for a plan', ru: 'Могу превратить рычаги двух форм в оси сравнения для плана' },
    { en: 'I can write a thesis for a pair of forms that names an effect and does not retell the plot', ru: 'Могу написать тезис для пары форм, который называет эффект и не пересказывает сюжет' },
    { en: 'I can plan a pair of works in one form by choosing one device and two different effects', ru: 'Могу спланировать пару произведений одной формы: выбрать один приём и два разных эффекта' },
  ],
  termIds: ['imagery', 'narrator', 'focalisation', 'flashback', 'direct-characterisation', 'indirect-characterisation', 'subtext', 'stage-directions', 'mise-en-scene', 'dramatic-irony', 'ethos', 'pathos', 'logos', 'direct-address', 'purpose', 'audience', 'aside', 'soliloquy'],
  questionIds: ['chk-p2-form-pairs-1', 'chk-p2-form-pairs-2'],
  sources: [{ kind: 'own', title: 'Own planning method, with invented examples' }],
};

export default topic;
