import type { Question } from '../../../../src/contract/types';

export const questions: (Question & { inMockScope?: 'yes' | 'no' })[] = [
  {
    id: 'econ-barriers-to-growth-and-development-01',
    inMockScope: 'no',
    subject: 'econ',
    topicIds: ['barriers-to-growth-and-development'],
    paper: 'P2',
    marks: 4,
    command: 'Explain',
    prompt: {
      en: 'Explain how low saving can lead to a vicious circle of poverty in a low-income country.',
      ru: 'Объясните, как низкие сбережения могут привести к порочному кругу бедности в стране с низким доходом.',
    },
    markscheme: {
      en: '1 mark: low income leaves little money for saving. 1 mark: low saving means banks and the economy have few funds to lend, so investment is low. 1 mark: low investment means little capital per worker and low productivity. 1 mark: low productivity keeps incomes low, so saving stays low, which completes the circle.',
      ru: '1 балл: низкий доход оставляет мало денег для сбережений. 1 балл: низкие сбережения означают мало средств для кредитования, поэтому инвестиции низкие. 1 балл: низкие инвестиции означают мало капитала на одного работника и низкую производительность. 1 балл: низкая производительность удерживает доходы на низком уровне, поэтому сбережения остаются низкими, и круг замыкается.',
    },
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'econ-barriers-to-growth-and-development-02',
    inMockScope: 'no',
    subject: 'econ',
    topicIds: ['barriers-to-growth-and-development'],
    paper: 'P2',
    marks: 4,
    command: 'Explain',
    prompt: {
      en: 'Explain how dependence on primary commodities can slow economic development in a country that exports mainly oil.',
      ru: 'Объясните, как зависимость от первичных товаров может замедлить экономическое развитие страны, которая экспортирует в основном нефть.',
    },
    markscheme: {
      en: '1 mark: export earnings depend on one commodity whose price is volatile, so investment plans are hard to finance. 1 mark: a fall in the oil price cuts foreign currency and government revenue, which reduces spending on education and infrastructure. 1 mark: little processing means little value added and few jobs in more productive sectors. 1 mark: when export prices fall relative to import prices, the country can buy fewer imports for each unit it exports, which lowers its real income.',
      ru: '1 балл: экспортная выручка зависит от одного товара с нестабильной ценой, поэтому инвестиционные планы трудно финансировать. 1 балл: падение цены нефти сокращает валютные поступления и доходы государства, а значит, и расходы на образование и инфраструктуру. 1 балл: малая переработка означает малую добавленную стоимость и мало рабочих мест в более производительных секторах. 1 балл: когда экспортные цены падают относительно импортных, страна может купить меньше импорта на каждую единицу экспорта, что снижает её реальный доход.',
    },
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'econ-barriers-to-growth-and-development-03',
    inMockScope: 'no',
    subject: 'econ',
    topicIds: ['barriers-to-growth-and-development'],
    paper: 'P1',
    marks: 10,
    command: 'Discuss',
    prompt: {
      en: 'Discuss whether weak economic institutions or low human capital is the more important barrier to growth in low-income countries.',
      ru: 'Обсудите, что является более важным барьером роста в странах с низким доходом: слабые экономические институты или низкий человеческий капитал.',
    },
    markscheme: {
      en: '1 mark: defines economic institutions as the rules and organisations that shape economic activity. 1 mark: defines human capital as the skills and health of workers that raise productivity. 1 mark: explains how weak property rights and contract enforcement reduce investment. 1 mark: explains how corruption adds costs and deters honest firms and foreign investors. 1 mark: explains how low education and poor health reduce productivity and the return to investment. 1 mark: explains that weak institutions can waste human capital, for example when schools are built but not staffed or funded. 1 mark: explains that low human capital can make institutional reform harder to design and enforce. 1 mark: uses an example of a country to show which barrier binds. 1 mark: makes a judgement on which barrier is more important, with reasons. 1 mark: states a limitation of the judgement, such as the links between the two barriers or the quality of data.',
      ru: '1 балл: определяет экономические институты как правила и организации, которые формируют экономическую деятельность. 1 балл: определяет человеческий капитал как навыки и здоровье работников, которые повышают производительность. 1 балл: объясняет, как слабые права собственности и исполнение контрактов снижают инвестиции. 1 балл: объясняет, как коррупция добавляет издержки и отпугивает честные фирмы и иностранных инвесторов. 1 балл: объясняет, как низкое образование и плохое здоровье снижают производительность и отдачу от инвестиций. 1 балл: объясняет, что слабые институты могут растрачивать человеческий капитал, например когда школы построены, но не укомплектованы учителями или не финансируются. 1 балл: объясняет, что низкий человеческий капитал может затруднить разработку и проведение институциональных реформ. 1 балл: использует пример страны, чтобы показать, какой барьер является сдерживающим. 1 балл: делает суждение о том, какой барьер важнее, с обоснованием. 1 балл: называет ограничение суждения, например связь между двумя барьерами или качество данных.',
    },
    origin: 'original',
    minutes: 15,
  },
];
