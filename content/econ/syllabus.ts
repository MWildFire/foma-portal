import type { SyllabusItem } from '../../src/contract/types';

// IB DP Economics (guide 2020), every syllabus code. HL-only codes are marked hl: true.
// Papers: P1 extended response, P2 data response, P3 policy paper (mock versions, see papers.ts).
const CORE: SyllabusItem['papers'] = ['P1', 'P2'];
const ALL: SyllabusItem['papers'] = ['P1', 'P2', 'P3'];

export const syllabus: SyllabusItem[] = [
  // Unit 1: introduction to economics
  { code: '1.1', title: { en: 'What is economics?', ru: 'Что такое экономика?' }, papers: CORE },
  { code: '1.2', title: { en: 'How do economists approach the world?', ru: 'Как экономисты подходят к миру?' }, papers: CORE },

  // Unit 2: microeconomics
  { code: '2.1', title: { en: 'Demand', ru: 'Спрос' }, papers: ALL },
  { code: '2.2', title: { en: 'Supply', ru: 'Предложение' }, papers: ALL },
  { code: '2.3', title: { en: 'Competitive market equilibrium', ru: 'Равновесие на конкурентном рынке' }, papers: ALL },
  { code: '2.4', title: { en: 'Critique of the maximizing behaviour of consumers and producers', ru: 'Критика максимизирующего поведения потребителей и производителей' }, papers: ALL, hl: true },
  { code: '2.5', title: { en: 'Elasticity of demand', ru: 'Эластичность спроса' }, papers: ALL },
  { code: '2.6', title: { en: 'Elasticity of supply', ru: 'Эластичность предложения' }, papers: ALL },
  { code: '2.7', title: { en: 'Role of government in microeconomics', ru: 'Роль государства в микроэкономике' }, papers: ALL },
  { code: '2.8', title: { en: 'Market failure: externalities and common pool resources', ru: 'Провалы рынка: экстерналии и общие ресурсы (common pool resources)' }, papers: ALL },
  { code: '2.9', title: { en: 'Market failure: public goods', ru: 'Провалы рынка: общественные блага (public goods)' }, papers: ALL },
  { code: '2.10', title: { en: 'Market failure: asymmetric information', ru: 'Провалы рынка: асимметричная информация (asymmetric information)' }, papers: ALL, hl: true },
  { code: '2.11', title: { en: 'Market failure: market power', ru: 'Провалы рынка: рыночная власть (market power)' }, papers: ALL, hl: true },
  { code: '2.12', title: { en: "The market's inability to achieve equity", ru: 'Неспособность рынка обеспечить справедливость (equity)' }, papers: ALL, hl: true },

  // Unit 3: macroeconomics
  { code: '3.1', title: { en: 'Measuring economic activity', ru: 'Измерение экономической активности' }, papers: ALL },
  { code: '3.2', title: { en: 'Variations in economic activity: AD and AS', ru: 'Колебания экономической активности: AD и AS' }, papers: ALL },
  { code: '3.3', title: { en: 'Macroeconomic objectives', ru: 'Макроэкономические цели' }, papers: ALL },
  { code: '3.4', title: { en: 'Economics of inequality and poverty', ru: 'Экономика неравенства и бедности' }, papers: ALL },
  { code: '3.5', title: { en: 'Monetary policy', ru: 'Монетарная политика' }, papers: ALL },
  { code: '3.6', title: { en: 'Fiscal policy', ru: 'Фискальная политика' }, papers: ALL },
  { code: '3.7', title: { en: 'Supply-side policies', ru: 'Политика предложения' }, papers: ALL },

  // Unit 4: international economics and development
  { code: '4.1', title: { en: 'Benefits of international trade', ru: 'Выгоды международной торговли' }, papers: ALL },
  { code: '4.2', title: { en: 'Types of trade protection', ru: 'Виды торговой защиты' }, papers: ALL },
  { code: '4.3', title: { en: 'Arguments for and against trade control', ru: 'Аргументы за и против торговых ограничений' }, papers: ALL },
  { code: '4.4', title: { en: 'Economic integration', ru: 'Экономическая интеграция' }, papers: ALL },
  { code: '4.5', title: { en: 'Exchange rates', ru: 'Обменные курсы' }, papers: ALL },
  { code: '4.6', title: { en: 'Balance of payments', ru: 'Платёжный баланс' }, papers: ALL },
  { code: '4.7', title: { en: 'Sustainable development', ru: 'Устойчивое развитие' }, papers: ALL },
  { code: '4.8', title: { en: 'Measuring development', ru: 'Измерение развития' }, papers: ALL },
  { code: '4.9', title: { en: 'Barriers to economic growth and development', ru: 'Барьеры экономического роста и развития' }, papers: ALL },
  { code: '4.10', title: { en: 'Policies for growth and development', ru: 'Политика роста и развития' }, papers: ALL },
  { code: 'mock-method', title: { en: 'School mock checklist and paper method', ru: 'Чек-лист и формат школьного мока' }, papers: ['P1', 'P2', 'P3'] },
];
