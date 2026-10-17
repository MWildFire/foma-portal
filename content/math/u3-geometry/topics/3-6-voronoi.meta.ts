import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '3-6-voronoi',
  subject: 'math',
  code: '3.6',
  title: { en: 'Voronoi diagrams', ru: 'Диаграммы Вороного (Voronoi diagrams)' },
  papers: ['P1', 'P2', 'P3'],
  order: 31,
  minutes: 45,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    {
      en: 'I can explain the sites, cells, edges and vertices of a Voronoi diagram, and find the site a point belongs to',
      ru: 'Могу объяснить опорные пункты, ячейки, рёбра и вершины диаграммы Вороного и определить, к какому пункту относится точка',
    },
    {
      en: 'I can find the edge between two sites and the vertex shared by three sites, and add a new site to a diagram',
      ru: 'Могу найти ребро между двумя пунктами и вершину, общую для трёх пунктов, и добавить новый пункт в диаграмму',
    },
    {
      en: 'I can use nearest-neighbour interpolation and compare permitted locations for a waste dump by maximising distance to the nearest site, including boundary candidates when the allowed region requires them',
      ru: 'Могу применить интерполяцию по ближайшему соседу и сравнить допустимые места для свалки по наибольшему расстоянию до ближайшего пункта, учитывая кандидатов на границе разрешённой области',
    },
  ],
  termIds: ['voronoi-diagram', 'voronoi-edge', 'voronoi-vertex', 'nearest-neighbour-interpolation'],
  formulaIds: ['voronoi-nearest-site-rule', 'site-distance-formula', 'voronoi-edge-equation', 'nearest-neighbour-estimate'],
  sims: ['math.voronoi-lab'],
  questionIds: ['q-3-6-01', 'q-3-6-02', 'q-3-6-03'],
  sources: [
    { kind: 'web', title: 'F. Aurenhammer and R. Klein — Voronoi Diagrams', locator: '§2, printed pp. 2–3; §5.1.3, printed p. 64 (PDF p. 66): boundaries and constrained location candidates', url: 'https://www.cs.upc.edu/~robert/teaching/master/sessions/voronoi-A-K.pdf' },
    { kind: 'web', title: 'ИТМО — Диаграмма Вороного, Викиконспекты', locator: 'Определения; Связь с пересечением полуплоскостей; Связь с триангуляцией Делоне: леммы о пустой окружности', url: 'https://neerc.ifmo.ru/wiki/index.php?title=Диаграмма_Вороного' },
    {
      kind: 'web',
      title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
      locator: 'sub-topic 3.6',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
