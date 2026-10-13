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
  inMockScope: 'unknown',
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
      en: 'I can use nearest-neighbour interpolation to estimate a value, and place a toxic waste dump at a Voronoi vertex',
      ru: 'Могу применить интерполяцию по ближайшему соседу для оценки значения и выбрать место для свалки токсичных отходов в вершине диаграммы',
    },
  ],
  termIds: ['voronoi-diagram', 'voronoi-edge', 'voronoi-vertex', 'nearest-neighbour-interpolation'],
  formulaIds: ['voronoi-nearest-site-rule', 'site-distance-formula', 'voronoi-edge-equation', 'nearest-neighbour-estimate'],
  sims: ['math.voronoi-lab'],
  questionIds: ['q-3-6-01', 'q-3-6-02', 'q-3-6-03'],
  sources: [
    {
      kind: 'web',
      title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
      locator: 'sub-topic 3.6',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
