import type { Question } from '../../../../src/contract/types';

export const questions: (Question & { inMockScope?: 'yes' | 'no' })[] = [
  {
    id: 'econ-economic-integration-01',
    inMockScope: 'no',
    subject: 'econ',
    topicIds: ['economic-integration'],
    paper: 'P2',
    marks: 2,
    command: 'Define',
    prompt: {
      en: 'Define a customs union.',
      ru: 'Определите таможенный союз.',
    },
    markscheme: {
      en: '1 mark: a group of countries that removes tariffs and quotas on trade among its members. 1 mark: and applies a common external tariff to imports from non-member countries.',
      ru: '1 балл: группа стран, которая отменяет пошлины и квоты в торговле между своими участниками. 1 балл: и применяет общий внешний тариф к импорту из стран, не входящих в союз.',
    },
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'econ-economic-integration-02',
    inMockScope: 'no',
    subject: 'econ',
    topicIds: ['economic-integration'],
    paper: 'P2',
    marks: 4,
    command: 'Distinguish',
    prompt: {
      en: 'Distinguish between a free trade area and a customs union.',
      ru: 'Проведите различие между зоной свободной торговли и таможенным союзом.',
    },
    markscheme: {
      en: '1 mark: both remove tariffs and quotas on trade among their members. 1 mark: in a free trade area each member keeps its own tariffs on imports from non-members. 1 mark: a customs union applies one common external tariff to imports from non-members. 1 mark: a free trade area needs rules of origin to stop goods entering through the member with the lowest tariff; a customs union does not.',
      ru: '1 балл: и то, и другое отменяет пошлины и квоты в торговле между участниками. 1 балл: в зоне свободной торговли каждый участник сохраняет собственные пошлины на импорт из стран, не входящих в зону. 1 балл: таможенный союз применяет единый общий внешний тариф к импорту из стран, не входящих в союз. 1 балл: зоне свободной торговли нужны правила происхождения, чтобы товары не ввозились через участника с самой низкой пошлиной; таможенному союзу они не нужны.',
    },
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'econ-economic-integration-03',
    inMockScope: 'no',
    subject: 'econ',
    topicIds: ['economic-integration'],
    paper: 'P2',
    marks: 4,
    command: 'Explain',
    prompt: {
      en: 'Before a customs union is formed, a member country buys a good from a non-member at AED 8 per unit. With the tariff, the imported good costs AED 14 per unit in the member country, the same price as domestic producers charge. After the union, a partner country supplies the same good at AED 11 per unit with no tariff, while the non-member still pays the common external tariff. Explain the difference between trade creation and trade diversion, using these prices.',
      ru: 'До создания таможенного союза страна-участница покупает товар у страны, не входящей в союз, по 8 AED за единицу. С учётом пошлины импортный товар стоит в стране-участнице 14 AED за единицу, столько же, сколько берут местные производители. После создания союза страна-партнёр поставляет тот же товар по 11 AED за единицу без пошлины, а страна, не входящая в союз, по-прежнему платит общий внешний тариф. Объясните различие между торговым созданием и торговым отклонением, используя эти цены.',
    },
    markscheme: {
      en: '1 mark: trade creation: imports from the partner (AED 11) replace domestic production at the higher cost (AED 14), so consumption rises at the lower price and production moves to the more efficient source. 1 mark: trade diversion: imports switch from the non-member (AED 8 per unit before the tariff) to the partner (AED 11 per unit), a higher-cost source. 1 mark: diversion happens because removing the tariff on the partner makes it cheaper than the non-member, which still pays the common external tariff (AED 14 with the tariff). 1 mark: the net welfare effect depends on whether the gains from trade creation are larger than the cost of diversion.',
      ru: '1 балл: торговое создание: импорт от партнёра (11 AED) замещает местное производство с более высокими издержками (14 AED), поэтому потребление растёт при более низкой цене, а производство переходит к более эффективному поставщику. 1 балл: торговое отклонение: импорт переходит от страны, не входящей в союз (8 AED за единицу до пошлины), к партнёру (11 AED за единицу), то есть к более дорогому поставщику. 1 балл: отклонение происходит потому, что отмена пошлины для партнёра делает его дешевле страны, не входящей в союз, которая по-прежнему платит общий внешний тариф (14 AED с пошлиной). 1 балл: чистый эффект для благосостояния зависит от того, превышают ли выгоды торгового создания издержки торгового отклонения.',
    },
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'econ-economic-integration-04',
    inMockScope: 'no',
    subject: 'econ',
    topicIds: ['economic-integration'],
    paper: 'P1',
    marks: 6,
    command: 'Discuss',
    prompt: {
      en: 'Discuss whether joining a customs union always improves the welfare of a member country.',
      ru: 'Обсудите, всегда ли вступление в таможенный союз повышает благосостояние страны-участницы.',
    },
    markscheme: {
      en: '1 mark: trade creation can raise welfare, because cheaper imports from members replace higher-cost supply and lower prices increase consumption. 1 mark: trade diversion can reduce welfare, because imports switch from a lower-cost non-member to a higher-cost member. 1 mark: the net effect depends on the size of trade creation compared with trade diversion, which depends on the costs of the partners and on the level of the common external tariff. 1 mark: the country loses tariff revenue and some control over its external trade policy when it joins. 1 mark: long-run benefits, such as economies of scale, more competition and foreign investment, can add to welfare over time. 1 mark: a justified judgement: joining is not always beneficial; it depends on whether the partner is an efficient supplier and whether the union stays open to outside trade.',
      ru: '1 балл: торговое создание может повысить благосостояние: более дешёвый импорт от участников заменяет более дорогое предложение, а низкие цены увеличивают потребление. 1 балл: торговое отклонение может снизить благосостояние: импорт переходит от более дешёвого поставщика из страны, не входящей в союз, к более дорогому участнику. 1 балл: итоговый эффект зависит от соотношения торгового создания и торгового отклонения, а также от издержек партнёров и уровня общего внешнего тарифа. 1 балл: при вступлении страна теряет тарифную выручку и часть контроля над внешней торговой политикой. 1 балл: долгосрочные выгоды, например эффект масштаба, большая конкуренция и иностранные инвестиции, могут повысить благосостояние со временем. 1 балл: обоснованный вывод: вступление не всегда выгодно; это зависит от того, является ли партнёр эффективным поставщиком и остаётся ли союз открытым для внешней торговли.',
    },
    origin: 'original',
    minutes: 6,
  },
];
