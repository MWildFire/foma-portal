import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'text-brochure',
  subject: 'fr',
  code: 'P1.brochure',
  title: { en: 'Writing: brochure', ru: 'Письмо: брошюра (brochure)' },
  papers: ['P1'],
  order: 16,
  minutes: 40,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can write a title, a slogan and subtitles for a tourist brochure', ru: 'Могу написать заголовок, слоган и подзаголовки для туристической брошюры' },
    { en: 'I can address the reader with vous and the imperative', ru: 'Могу обращаться к читателю на «vous» и в повелительном наклонении' },
    { en: 'I can give practical information: opening times, a rough price and the way to get there', ru: 'Могу дать практичную информацию: часы работы, примерную цену и способ добраться' },
    { en: 'I can explain why an experience is worth the journey', ru: 'Могу объяснить, почему поездка стоит того' },
  ],
  termIds: [],
  questionIds: ['p1-brochure', 'p1-brochure-q1', 'p1-brochure-q2'],
  sources: [{ kind: 'own', title: "Authors' French B material (2026)" }],
};

export default topic;
