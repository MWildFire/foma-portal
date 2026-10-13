import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '2-5-standard-models',
  subject: 'math',
  code: '2.5',
  title: { en: 'Modelling with standard functions', ru: 'Моделирование стандартными функциями (Modelling with standard functions)' },
  papers: ['P1', 'P2', 'P3'],
  order: 20,
  minutes: 45,
  priority: 1,
  inMockScope: 'unknown',
  outcomes: [
    {
      en: 'I can choose a linear, quadratic, exponential, power or sinusoidal model from the shape of the data and the context',
      ru: 'Могу выбрать линейную, квадратичную, экспоненциальную, степенную или синусоидальную модель по форме данных и контексту',
    },
    {
      en: 'I can read the parameters of a standard model: gradient, vertex, asymptote, amplitude and period',
      ru: 'Могу читать параметры стандартной модели: угловой коэффициент, вершину, асимптоту, амплитуду и период',
    },
    {
      en: 'I can use a model to answer questions about a context, including when a quantity reaches a given value',
      ru: 'Могу использовать модель, чтобы отвечать на вопросы о контексте, включая момент, когда величина достигает заданного значения',
    },
  ],
  termIds: [
    'standard-quadratic-vertex',
    'standard-exponential-asymptote',
    'standard-direct-inverse-variation',
    'standard-sinusoidal-amplitude',
  ],
  formulaIds: [
    'standard-quadratic-vertex-form',
    'standard-exponential-model',
    'standard-power-variation',
    'standard-sinusoidal-model',
  ],
  sims: [],
  questionIds: ['q-2-5-01', 'q-2-5-02', 'q-2-5-03'],
  sources: [
    {
      kind: 'web',
      title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
      locator: 'sub-topic 2.5',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
