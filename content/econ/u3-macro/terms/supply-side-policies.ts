import type { Term } from '../../../../src/contract/types';

export const terms: Term[] = [
  {
    id: 'supply-side-policies',
    term: { en: 'supply-side policies', ru: 'политика предложения (supply-side policies)' },
    def: {
      en: 'Government policies that aim to increase the productive capacity of the economy by improving the quantity and efficiency of factors of production, shifting long-run aggregate supply to the right.',
      ru: 'Меры государства, которые повышают производственный потенциал экономики, улучшая количество и эффективность факторов производства; они сдвигают долгосрочное совокупное предложение вправо.',
    },
    example: {
      en: "A AED 2 million training grant that prepares 100 extra engineers raises the economy's potential output over several years.",
      ru: 'Грант 2 млн AED на подготовку 100 дополнительных инженеров со временем повышает потенциальный выпуск экономики.',
    },
    pitfall: {
      en: 'Supply-side policies raise capacity, not demand; on their own they do not raise actual output in a recession caused by low spending.',
      ru: 'Меры политики предложения повышают производственные возможности, а не спрос; сами по себе они не увеличивают фактический выпуск в рецессии, вызванной низкими расходами.',
    },
    syllabus: '3.7',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 3.7' },
  },
  {
    id: 'market-based-supply-side-policies',
    term: { en: 'market-based supply-side policies', ru: 'рыночные меры политики предложения (market-based supply-side policies)' },
    def: {
      en: 'Supply-side measures that work through markets by reducing government intervention and strengthening competition and incentives, such as deregulation, privatisation and tax cuts.',
      ru: 'Меры политики предложения, которые работают через рынок: они сокращают вмешательство государства и усиливают конкуренцию и стимулы, например дерегулирование, приватизацию и снижение налогов.',
    },
    example: {
      en: 'Privatising a state-owned airline that loses AED 100 million a year makes its private owners cut costs and compete.',
      ru: 'Приватизация государственной авиакомпании, которая теряет 100 млн AED в год, заставляет частных владельцев снижать издержки и конкурировать.',
    },
    pitfall: {
      en: 'Market-based does not mean no government role: the government still sets the rules of competition and safety.',
      ru: 'Рыночный подход не означает отсутствия роли государства: государство по-прежнему устанавливает правила конкуренции и безопасности.',
    },
    syllabus: '3.7',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 3.7' },
  },
  {
    id: 'interventionist-supply-side-policies',
    term: { en: 'interventionist supply-side policies', ru: 'интервенционистские меры политики предложения (interventionist supply-side policies)' },
    def: {
      en: 'Supply-side measures in which government takes an active role, spending or directing resources, for example on education, infrastructure, research subsidies and industrial policy.',
      ru: 'Меры политики предложения, в которых государство активно действует, тратя средства или направляя ресурсы, например на образование, инфраструктуру, субсидии на исследования и промышленную политику.',
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
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 3.7' },
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
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 3.7' },
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
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 3.7' },
  },
  {
    id: 'labour-market-flexibility',
    term: { en: 'labour market flexibility', ru: 'гибкость рынка труда (labour market flexibility)' },
    def: {
      en: 'The ease with which firms and workers adjust to changes in demand, through flexible hours, pay, hiring and firing, and the movement of labour between jobs and regions.',
      ru: 'Лёгкость, с которой фирмы и работники приспосабливаются к изменениям спроса: через гибкие часы, оплату, найм и увольнение, а также переход работников между рабочими местами и регионами.',
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
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 3.7' },
  },
  {
    id: 'industrial-policy',
    term: { en: 'industrial policy', ru: 'промышленная политика (industrial policy)' },
    def: {
      en: 'Government action that supports selected industries or sectors, for example with subsidies, public investment or research support, to build capacity in strategic areas.',
      ru: 'Действия государства, которые поддерживают отдельные отрасли или сектора, например субсидиями, государственными инвестициями или поддержкой исследований, чтобы развивать мощности в стратегических областях.',
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
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 3.7' },
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
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 3.7' },
  },
];
