import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '1-1-standard-form',
  subject: 'math',
  code: '1.1',
  title: { en: 'Standard form (a × 10^k)', ru: 'Стандартный вид (standard form, a × 10^k)' },
  papers: ['P1', 'P2', 'P3'],
  order: 1,
  minutes: 25,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    {
      en: 'I can write very large and very small numbers in standard form a × 10^k with 1 ≤ a < 10',
      ru: 'Могу записать очень большие и очень малые числа в стандартном виде a × 10^k при 1 ≤ a < 10',
    },
    {
      en: 'I can multiply, divide and add numbers in standard form and give the answer in standard form',
      ru: 'Могу умножать, делить и складывать числа в стандартном виде и записывать ответ в стандартном виде',
    },
    {
      en: 'I can use standard form in context and check that the power of ten is sensible',
      ru: 'Могу использовать стандартный вид в прикладных задачах и проверять, разумна ли степень десятки',
    },
  ],
  termIds: ['standard-form', 'standard-form-mantissa', 'standard-form-order'],
  formulaIds: ['standard-form-representation', 'standard-form-product-quotient'],
  questionIds: ['q-1-1-01', 'q-1-1-02', 'q-1-1-03'],
  sources: [
    {kind:'web',title:'BIPM, SI base unit metre: exact speed of light in vacuum 299792458m/s; formula example uses rounded3×10^8',url:'https://www.bipm.org/en/si-base-units/metre'},
    { kind: 'textbook', title: 'Oxford IB Diploma Programme: Mathematics: Applications and Interpretation HL, OUP2019, ISBN9780198427056', locator: 'ch.1.1, printed pp.9–10 (PDF20–21): coefficient/exponent and arithmetic; p.10 inequality has a printed lower-bound inconsistency, not adopted' },
    { kind: 'web', title: 'Т.А.Новикова, Физика. Введение в предмет (УлГТУ,2013), §1.9, printed p.34, standard-form definition and examples', url: 'https://lib.ulstu.ru/venec/2014/60.pdf' },
    { kind: 'web', title: 'NASA NSSDCA Earth Fact Sheet, orbital parameters', url: 'https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html', locator: 'Semimajor axis149.598, perihelion147.095 and aphelion152.100, all in10^6km; supplied exercise values rounded, not new measurements' },
    { kind: 'school', title: 'Topic list for Mock Oct 26 — Applications and Interpretation HL (9 October 2026)', locator: 'Oxford chapters 1–8, 13, 14; mapped to the syllabus in G2-math R03' },
    {
      kind: 'web',
      title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
      locator: 'sub-topic 1.1',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
