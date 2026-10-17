import type { Term } from '../../../../src/contract/types';

// Definitions are in our own words. Terms the textbook defines (Tragakes, Economics for the IB Diploma:
// Coursebook) carry a textbook locator: chapter, section and printed page. Terms the book does not define
// keep the IB DP Economics subject guide (2020) as their source.
const book = 'Tragakes, Economics for the IB Diploma: Coursebook (Cambridge University Press, 3rd ed.)';

export const terms: Term[] = [
  {
    id: 'supply-side-policies',
    term: { en: 'supply-side policies', ru: 'политика предложения (supply-side policies)' },
    def: {
      en: "Government policies that aim to raise the economy's productive potential by improving the quantity and quality of the factors of production, or through institutional changes, shifting long-run aggregate supply to the right.",
      ru: 'Меры государства, которые повышают производственный потенциал экономики, улучшая количество и качество факторов производства или проводя институциональные изменения; они сдвигают долгосрочное совокупное предложение вправо.',
    },
    example: {
      en: 'Hypothetical example: an AED 2 million grant trains 100 additional engineers. Effective training and suitable jobs could raise productive capacity over several years.',
      ru: 'Условный пример: грант 2 млн AED позволяет подготовить 100 дополнительных инженеров. Качественное обучение и подходящие рабочие места могут со временем повысить производственный потенциал.',
    },
    pitfall: {
      en: 'The defining objective is productive capacity. Infrastructure or education spending also enters G, and tax cuts may raise C or I. Distinguish these demand effects from the later LRAS shift; capacity growth alone need not overcome deficient AD.',
      ru: 'Определяющая цель — производственный потенциал. Расходы на инфраструктуру или образование также входят в G, а снижение налогов может увеличить C или I. Отделяй эти эффекты спроса от позднейшего сдвига LRAS: один рост потенциала не обязательно устранит недостаток AD.',
    },
    syllabus: '3.7',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'printed pp. 413, 417 (PDF pp. 431, 435): goals and demand/supply overlaps' },
  },
  {
    id: 'market-based-supply-side-policies',
    term: { en: 'market-based supply-side policies', ru: 'рыночные меры политики предложения (market-based supply-side policies)' },
    def: {
      en: 'Supply-side measures that work through competition and incentives, such as deregulation, privatisation and tax cuts. Some reduce intervention; maintaining competition can also require regulation.',
      ru: 'Меры политики предложения, которые действуют через конкуренцию и стимулы: например дерегулирование, приватизация и снижение налогов. Часть мер сокращает вмешательство, но поддержание конкуренции может требовать регулирования.',
    },
    example: {
      en: 'Hypothetical example: selling a state airline with annual losses of AED 100 million may strengthen incentives to cut costs. Competitive pressure and regulation affect the result.',
      ru: 'Условный пример: продажа государственной авиакомпании с ежегодным убытком 100 млн AED может усилить стимулы снижать издержки. Результат зависит от конкуренции и регулирования.',
    },
    pitfall: {
      en: 'Market-based does not mean no government role: the government still sets the rules of competition and safety.',
      ru: 'Рыночный подход не означает отсутствия роли государства: государство по-прежнему устанавливает правила конкуренции и безопасности.',
    },
    syllabus: '3.7',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 13.6, p. 413' },
  },
  {
    id: 'interventionist-supply-side-policies',
    term: { en: 'interventionist supply-side policies', ru: 'интервенционистские меры политики предложения (interventionist supply-side policies)' },
    def: {
      en: 'Supply-side measures in which government takes an active role, spending or directing resources, for example on education, infrastructure, research subsidies and industrial policy, to raise potential output.',
      ru: 'Меры политики предложения, в которых государство активно действует, тратя средства или направляя ресурсы, например на образование, инфраструктуру, субсидии на исследования и промышленную политику, чтобы повысить потенциальный выпуск.',
    },
    example: {
      en: 'A government spends AED 90 million on a port that cuts shipping costs for local exporters.',
      ru: 'Государство тратит 90 млн AED на порт, который снижает расходы на перевозки для местных экспортёров.',
    },
    pitfall: {
      en: 'Interventionist does not mean the government produces everything: it may fund or direct spending, while firms still make most goods.',
      ru: 'Интервенционизм не означает, что государство производит всё: оно может финансировать или направлять расходы, а большую часть товаров по-прежнему делают фирмы.',
    },
    syllabus: '3.7',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 13.6, p. 413' },
  },
  {
    id: 'deregulation',
    term: { en: 'deregulation', ru: 'дерегулирование (deregulation)' },
    def: {
      en: 'Removing or reducing laws and rules that restrict competition or raise the costs of doing business, such as licensing and entry requirements.',
      ru: 'Отмена или смягчение законов и правил, которые ограничивают конкуренцию или повышают издержки ведения бизнеса, например требования к лицензиям и входу на рынок.',
    },
    example: {
      en: 'Cutting the licence fee for a new business from AED 20 thousand to AED 5 thousand lets more firms enter the market.',
      ru: 'Снижение лицензионного сбора для нового бизнеса с 20 тыс. AED до 5 тыс. AED позволяет большему числу фирм выйти на рынок.',
    },
    pitfall: {
      en: 'Deregulation does not remove all rules: safety, environmental and consumer protection rules usually stay.',
      ru: 'Дерегулирование не отменяет все правила: правила безопасности, охраны окружающей среды и защиты потребителей обычно сохраняются.',
    },
    syllabus: '3.7',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 13.6, p. 413' },
  },
  {
    id: 'privatisation',
    term: { en: 'privatisation', ru: 'приватизация (privatisation)' },
    def: {
      en: 'The transfer of a state-owned firm or asset to private ownership, intended to increase competition, efficiency and investment.',
      ru: 'Передача государственной фирмы или актива в частную собственность, призванная усилить конкуренцию, эффективность и инвестиции.',
    },
    example: {
      en: 'The government sells a state-owned telecom firm for AED 3 billion, and its private owners invest in new networks.',
      ru: 'Государство продаёт государственную телекоммуникационную компанию за 3 млрд AED, и её частные владельцы инвестируют в новые сети.',
    },
    pitfall: {
      en: 'Privatisation can create a private monopoly if the market is not competitive, so competition policy or regulation may still be needed.',
      ru: 'Приватизация может создать частную монополию, если рынок не конкурентен, поэтому по-прежнему может понадобиться политика защиты конкуренции или регулирование.',
    },
    syllabus: '3.7',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 13, p. 398' },
  },
  {
    id: 'labour-market-flexibility',
    term: { en: 'labour market flexibility', ru: 'гибкость рынка труда (labour market flexibility)' },
    def: {
      en: 'The ease with which firms and workers adjust to changes in demand and supply, through flexible hours, pay, hiring and firing, and the movement of labour between jobs and regions, so as to reduce unemployment and labour costs.',
      ru: 'Лёгкость, с которой фирмы и работники приспосабливаются к изменениям спроса и предложения: через гибкие часы, оплату, найм и увольнение, а также переход работников между рабочими местами и регионами, чтобы снизить безработицу и издержки на труд.',
    },
    example: {
      en: 'A firm uses part-time and fixed-term contracts to hire 20 extra workers for a busy month and release them afterwards.',
      ru: 'Фирма использует неполную занятость и срочные контракты, чтобы нанять 20 дополнительных работников на напряжённый месяц и затем расстаться с ними.',
    },
    pitfall: {
      en: 'Flexibility is not the same as insecurity, but flexible rules can reduce job security, so workers with little protection may bear the costs.',
      ru: 'Гибкость — не то же самое, что нестабильность, но гибкие правила могут снизить защищённость работы, и издержки могут лечь на работников с малой защитой.',
    },
    syllabus: '3.7',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 13.6, p. 413' },
  },
  {
    id: 'industrial-policy',
    term: { en: 'industrial policy', ru: 'промышленная политика (industrial policy)' },
    def: {
      en: 'Government support for the growth of selected industries or sectors, for example with subsidies, public investment or research support, to build capacity in strategic areas.',
      ru: 'Поддержка государством роста отдельных отраслей или секторов, например субсидиями, государственными инвестициями или поддержкой исследований, чтобы развивать мощности в стратегических областях.',
    },
    example: {
      en: 'The government gives AED 40 million of research support to a new solar-panel maker so that it can compete in export markets.',
      ru: 'Государство выделяет 40 млн AED на поддержку исследований новому производителю солнечных панелей, чтобы тот мог конкурировать на экспортных рынках.',
    },
    pitfall: {
      en: 'Industrial policy risks government failure: officials may back the wrong industries, and temporary subsidies can become permanent.',
      ru: 'Промышленная политика рискует вызвать провал государства: чиновники могут поддержать не те отрасли, а временные субсидии могут стать постоянными.',
    },
    syllabus: '3.7',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 13.6, p. 416' },
  },
  {
    id: 'trade-liberalisation',
    term: { en: 'trade liberalisation', ru: 'либерализация торговли (trade liberalisation)' },
    def: {
      en: 'Reducing government barriers to trade, such as tariffs, quotas and export subsidies, so that goods and services move more freely between countries.',
      ru: 'Снижение государственных барьеров для торговли, таких как тарифы, квоты и экспортные субсидии, чтобы товары и услуги свободнее перемещались между странами.',
    },
    example: {
      en: 'A country cuts its tariff on imported machinery from 10% to 0%, so local manufacturers can buy cheaper inputs.',
      ru: 'Страна снижает тариф на импортное оборудование с 10% до 0%, и местные производители могут покупать более дешёвые ресурсы.',
    },
    pitfall: {
      en: 'Liberalisation raises efficiency over time, but producers that compete with imports can lose in the short run.',
      ru: 'Либерализация повышает эффективность в долгосрочном периоде, но производители, конкурирующие с импортом, могут проиграть в краткосрочном.',
    },
    syllabus: '3.7',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 15.2, p. 473' },
  },
];
