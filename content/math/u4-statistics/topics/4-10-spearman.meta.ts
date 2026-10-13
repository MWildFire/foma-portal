import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '4-10-spearman',
  subject: 'math',
  code: '4.10',
  title: { en: 'Spearman\'s rank correlation', ru: 'Ранговая корреляция Спирмена (Spearman\'s rank correlation)' },
  papers: ['P1', 'P2', 'P3'],
  order: 51,
  minutes: 40,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    {
      en: 'I can rank data and calculate Spearman\'s rank correlation coefficient r_s',
      ru: 'Могу ранжировать данные и вычислить коэффициент ранговой корреляции Спирмена r_s',
    },
    {
      en: 'I can say when r_s is more appropriate than Pearson\'s r, for example for ranked or monotonic data',
      ru: 'Могу сказать, когда r_s уместнее коэффициента Пирсона, например для ранговых или монотонных данных',
    },
    {
      en: 'I can explain why one outlier changes Pearson\'s r much more than Spearman\'s r_s',
      ru: 'Могу объяснить, почему один выброс меняет коэффициент Пирсона гораздо сильнее, чем r_s',
    },
  ],
  termIds: ['spearman-rank-correlation', 'monotonic-association', 'outlier-effect-on-correlation'],
  formulaIds: ['spearman-rs-d-formula', 'spearman-rs-as-ranks'],
  questionIds: ['q-4-10-01', 'q-4-10-02', 'q-4-10-03'],
  sources: [
    {
      kind: 'web',
      title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
      locator: 'sub-topic 4.10',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
