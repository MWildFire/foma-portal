import type { PastPaperRef } from '../../src/contract/types';

// Past IB papers of Economics HL, May 2022 to November 2025: links to the PDFs on ibdocs.re, the session and
// timing, the command terms and topics of each item, and our own answer plans (guide). Question text, resource
// booklets and markschemes are never copied here. Papers from 2023 are split by question (part "question-1"
// and "question-2") and timed as the school's mock, 60 minutes. Calculations in the guides are checked by
// scripts/econ-verify.py (scripts/econ-checks/pastpapers.json).

export const pastPapers: PastPaperRef[] = [
  {
    id: 'econ-p1-m22',
    subject: 'econ',
    paper: 'P1',
    session: 'M22',
    level: 'HL',
    files: [
      {
        kind: 'questions',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2022%20Examination%20Session/May%202022%20Examination%20Session/Individuals%20and%20societies/Economics_paper_1__HL.pdf',
      },
      {
        kind: 'markscheme',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2022%20Examination%20Session/May%202022%20Examination%20Session/Individuals%20and%20societies/Economics_paper_1__HL_markscheme.pdf',
      },
    ],
    minutes: 75,
    marks: 25,
    items: [
      {
        q: '1a',
        marks: 10,
        command: 'Distinguish',
        topicIds: [
          'competitive-market-equilibrium',
          'oligopoly-and-monopolistic-competition',
        ],
      },
      {
        q: '1b',
        marks: 15,
        command: 'Discuss',
        topicIds: [
          'monopoly-and-natural-monopoly',
          'oligopoly-and-monopolistic-competition',
        ],
      },
      {
        q: '2a',
        marks: 10,
        command: 'Explain',
        topicIds: [
          'supply-side-policies',
          'ad-as-model-and-business-cycle',
        ],
      },
      {
        q: '2b',
        marks: 15,
        command: 'Evaluate',
        topicIds: [
          'supply-side-policies',
          'macroeconomic-objectives',
          'fiscal-policy',
        ],
      },
      {
        q: '3a',
        marks: 10,
        command: 'Explain',
        topicIds: [
          'benefits-of-trade',
          'barriers-to-growth-and-development',
        ],
      },
      {
        q: '3b',
        marks: 15,
        command: 'Discuss',
        topicIds: [
          'economic-integration',
          'benefits-of-trade',
        ],
      },
    ],
    guide: {
      en: 'Time: 1 h 15 min. Plan for about five minutes.\n\n**Question 1** (a) 10 marks, (b) 15 marks\n- (a) Plan:\n  - **Definitions:** perfect competition has homogeneous products and free entry; monopolistic competition has differentiated products and free entry.\n  - **Diagram:** two firm diagrams; perfect competition has a horizontal demand curve, monopolistic competition a downward-sloping one. Label price and quantity.\n  - **Chain:** if products are identical, a price rise loses all customers, so the firm earns only normal profit eventually; if products are differentiated, price stays above marginal cost.\n- (b) Plan:\n  - **Example:** a dominant online platform, or a large utility network that is a natural monopoly.\n  - **Arguments:** scale economies and abnormal profits can fund innovation, but high prices and low output cause a welfare loss.\n  - **Evaluation:** harm is greatest without close substitutes; long-run entry and regulation limit the power.\n  - **Judgement:** market power is justified only where scale economies are very large and prices stay near cost.\n\n**Question 2** (a) 10 marks, (b) 15 marks\n- (a) Plan:\n  - **Definitions:** supply-side policies raise productive capacity, for example privatisation or training; international competitiveness is selling abroad at competitive prices and quality.\n  - **Diagram:** AD/AS diagram with LRAS shifting right; label the old and new price level and real output.\n  - **Chain:** more competition lowers costs, so LRAS shifts right and the price level falls; cheaper exports then improve competitiveness. Cover both goals or the mark is capped.\n- (b) Plan:\n  - **Example:** a government funding apprenticeships after a factory closure, aimed at structural unemployment.\n  - **Arguments:** training and infrastructure raise productive capacity and labour demand over time; infrastructure spending also lifts demand now.\n  - **Evaluation:** training takes years to pay off while demand measures act faster; the kind of unemployment decides which policy fits.\n  - **Judgement:** interventionist policy is the best single tool only against structural unemployment, so a mix of policies is usually more effective.\n\n**Question 3** (a) 10 marks, (b) 15 marks\n- (a) Plan:\n  - **Definitions:** comparative advantage is a lower opportunity cost than another country; specialisation means concentrating output on that good.\n  - **Diagram:** PPC for one country; show the economy at a corner after full specialisation and label the slope as opportunity cost.\n  - **Chain:** full specialisation ties an economy to one industry, so falling world demand hurts income; fixed factors and technology also block the structural change needed to move into new industries.\n- (b) Plan:\n  - **Example:** the European Union, a regional bloc with a customs union and a single market.\n  - **Arguments:** trade creation, a bigger market that allows scale economies, freer labour mobility, and stronger bargaining power.\n  - **Evaluation:** trade diversion moves imports to dearer members, and sovereignty over trade policy is lost; the net effect depends on existing trade links.\n  - **Judgement:** membership usually helps when trade creation outweighs diversion and the country keeps policy freedom.',
      ru: 'Время: 1 ч 15 мин. Планируйте около пяти минут.\n\n**Вопрос 1** (a) 10 баллов, (b) 15 баллов\n- (a) План:\n  - **Определения:** совершенная конкуренция (perfect competition) — однородная продукция и свободный вход; монополистическая конкуренция (monopolistic competition) — дифференцированная продукция и свободный вход.\n  - **Диаграмма:** две диаграммы фирмы; у совершенной конкуренции спрос горизонтален, у монополистической — нисходящий. Подпишите цену и объём.\n  - **Цепочка:** если продукция однородна, рост цены теряет всех покупателей, поэтому фирма в итоге получает только нормальную прибыль (normal profit); если продукция дифференцирована, цена остаётся выше предельных издержек (marginal cost).\n- (b) План:\n  - **Пример:** доминирующая онлайн-платформа или крупная сеть коммунальных услуг, являющаяся естественной монополией (natural monopoly).\n  - **Аргументы:** экономия от масштаба (economies of scale) и сверхприбыль (abnormal profit) могут финансировать инновации, но высокие цены и малый выпуск ведут к потерям благосостояния.\n  - **Оценка:** вред наибольший без близких заменителей; вход новых фирм и регулирование в долгосрочном периоде ограничивают власть.\n  - **Суждение:** значительная рыночная власть оправдана только там, где экономия от масштаба очень велика, а цены остаются близкими к издержкам.\n\n**Вопрос 2** (a) 10 баллов, (b) 15 баллов\n- (a) План:\n  - **Определения:** политика предложения (supply-side policies) повышает производственный потенциал, например через приватизацию или обучение; международная конкурентоспособность (international competitiveness) — способность продавать за рубеж по конкурентным ценам и качеству.\n  - **Диаграмма:** диаграмма AD/AS со сдвигом LRAS вправо; подпишите старый и новый уровень цен и реальный выпуск.\n  - **Цепочка:** рост конкуренции снижает издержки, поэтому LRAS сдвигается вправо и уровень цен падает; более дешёвый экспорт затем повышает конкурентоспособность. Раскройте обе цели, иначе балл ограничен.\n- (b) План:\n  - **Пример:** правительство, которое финансирует ученичество после закрытия завода и борется со структурной безработицей (structural unemployment).\n  - **Аргументы:** обучение и инфраструктура повышают производственный потенциал и спрос на труд со временем; инфраструктурные расходы сейчас также поддерживают совокупный спрос (aggregate demand).\n  - **Оценка:** обучение окупается годами, а меры спроса действуют быстрее; тип безработицы определяет, какая политика подходит.\n  - **Суждение:** интервенционистская политика (interventionist supply-side policy) — лучший единственный инструмент только против структурной безработицы, поэтому сочетание мер обычно эффективнее.\n\n**Вопрос 3** (a) 10 баллов, (b) 15 баллов\n- (a) План:\n  - **Определения:** сравнительное преимущество (comparative advantage) — меньшие альтернативные издержки (opportunity cost), чем у другой страны; специализация (specialisation) — концентрация выпуска на этом благе.\n  - **Диаграмма:** кривая производственных возможностей (production possibility curve, PPC) одной страны; покажите экономику в углу кривой после полной специализации и подпишите наклон как альтернативные издержки.\n  - **Цепочка:** полная специализация привязывает экономику к одной отрасли, поэтому падение мирового спроса бьёт по доходу; фиксированные факторы и технологии также блокируют структурные изменения, нужные для перехода в новые отрасли.\n- (b) План:\n  - **Пример:** Европейский союз — региональный торговый блок (trading bloc) с таможенным союзом (customs union) и единым рынком.\n  - **Аргументы:** создание торговли (trade creation), доступ к большему рынку для экономии от масштаба, свободное движение труда и большая сила на переговорах.\n  - **Оценка:** переориентация торговли (trade diversion) переводит импорт к более дорогим членам блока, а суверенитет над торговой политикой теряется; итог зависит от существующих торговых связей.\n  - **Суждение:** членство обычно выгодно, когда создание торговли перевешивает переориентацию и страна сохраняет свободу политики.',
    },
  },
  {
    id: 'econ-p2-m22',
    subject: 'econ',
    paper: 'P2',
    session: 'M22',
    level: 'HL',
    files: [
      {
        kind: 'questions',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2022%20Examination%20Session/May%202022%20Examination%20Session/Individuals%20and%20societies/Economics_paper_2__HL.pdf',
      },
      {
        kind: 'markscheme',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2022%20Examination%20Session/May%202022%20Examination%20Session/Individuals%20and%20societies/Economics_paper_2__HL_markscheme.pdf',
      },
    ],
    minutes: 105,
    marks: 40,
    items: [
      {
        q: '1a(i)',
        marks: 2,
        command: 'Define',
        topicIds: [
          'balance-of-payments',
        ],
      },
      {
        q: '1a(ii)',
        marks: 2,
        command: 'Define',
        topicIds: [
          'inequality-and-poverty',
          'measuring-development',
        ],
      },
      {
        q: '1b(i)',
        marks: 3,
        command: 'Sketch',
        topicIds: [
          'competitive-market-equilibrium',
          'benefits-of-trade',
        ],
      },
      {
        q: '1b(ii)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'balance-of-payments',
        ],
      },
      {
        q: '1c',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'monopoly-and-natural-monopoly',
        ],
      },
      {
        q: '1d',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'benefits-of-trade',
        ],
      },
      {
        q: '1e',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'monetary-policy',
        ],
      },
      {
        q: '1f',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'exchange-rates',
        ],
      },
      {
        q: '1g',
        marks: 15,
        command: 'Discuss',
        topicIds: [
          'benefits-of-trade',
          'policies-for-growth-and-development',
        ],
      },
      {
        q: '2a(i)',
        marks: 2,
        command: 'List',
        topicIds: [
          'sustainable-development',
        ],
      },
      {
        q: '2a(ii)',
        marks: 2,
        command: 'Define',
        topicIds: [
          'trade-protection',
        ],
      },
      {
        q: '2b(i)',
        marks: 3,
        command: 'Sketch',
        topicIds: [
          'economic-models',
          'barriers-to-growth-and-development',
        ],
      },
      {
        q: '2b(ii)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'measuring-economic-activity',
        ],
      },
      {
        q: '2c',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'barriers-to-growth-and-development',
          'policies-for-growth-and-development',
        ],
      },
      {
        q: '2d',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'fiscal-policy',
          'ad-as-model-and-business-cycle',
        ],
      },
      {
        q: '2e',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'exchange-rates',
          'balance-of-payments',
        ],
      },
      {
        q: '2f',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'government-taxes-subsidies-price-controls',
        ],
      },
      {
        q: '2g',
        marks: 15,
        command: 'Evaluate',
        topicIds: [
          'policies-for-growth-and-development',
          'barriers-to-growth-and-development',
        ],
      },
    ],
  },
  {
    id: 'econ-p3-m22',
    subject: 'econ',
    paper: 'P3',
    session: 'M22',
    level: 'HL',
    files: [
      {
        kind: 'questions',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2022%20Examination%20Session/May%202022%20Examination%20Session/Individuals%20and%20societies/Economics_paper_3__HL.pdf',
      },
      {
        kind: 'markscheme',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2022%20Examination%20Session/May%202022%20Examination%20Session/Individuals%20and%20societies/Economics_paper_3__HL_markscheme.pdf',
      },
    ],
    minutes: 60,
    marks: 30,
    items: [
      {
        q: '1a(i)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'macroeconomic-objectives',
        ],
      },
      {
        q: '1a(ii)',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'barriers-to-growth-and-development',
        ],
      },
      {
        q: '1a(iii)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'price-elasticity-of-demand',
        ],
      },
      {
        q: '1a(iv)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'balance-of-payments',
          'price-elasticity-of-demand',
        ],
      },
      {
        q: '1a(v)',
        marks: 2,
        command: 'Define',
        topicIds: [
          'fiscal-policy',
          'inequality-and-poverty',
        ],
      },
      {
        q: '1a(vi)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'government-taxes-subsidies-price-controls',
        ],
      },
      {
        q: '1a(vii)',
        marks: 2,
        command: 'Sketch',
        topicIds: [
          'ad-as-model-and-business-cycle',
          'fiscal-policy',
          'supply-side-policies',
        ],
      },
      {
        q: '1a(viii)',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'barriers-to-growth-and-development',
          'inequality-and-poverty',
        ],
      },
      {
        q: '1b',
        marks: 10,
        command: 'Recommend',
        topicIds: [
          'inequality-and-poverty',
          'fiscal-policy',
        ],
      },
      {
        q: '2a(i)',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'externalities',
          'equity-and-market-failure',
        ],
      },
      {
        q: '2a(ii)',
        marks: 2,
        command: 'Draw',
        topicIds: [
          'government-taxes-subsidies-price-controls',
        ],
      },
      {
        q: '2a(iii)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'government-taxes-subsidies-price-controls',
        ],
      },
      {
        q: '2a(iv)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'government-taxes-subsidies-price-controls',
          'competitive-market-equilibrium',
        ],
      },
      {
        q: '2a(v)',
        marks: 2,
        command: 'Show',
        topicIds: [
          'elasticity-of-supply',
        ],
      },
      {
        q: '2a(vi)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'supply',
          'competitive-market-equilibrium',
        ],
      },
      {
        q: '2a(vii)',
        marks: 2,
        command: 'Define',
        topicIds: [
          'critique-maximizing-behaviour',
        ],
      },
      {
        q: '2a(viii)',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'critique-maximizing-behaviour',
          'externalities',
        ],
      },
      {
        q: '2b',
        marks: 10,
        command: 'Recommend',
        topicIds: [
          'externalities',
          'government-taxes-subsidies-price-controls',
        ],
      },
    ],
  },
  {
    id: 'econ-p1-n22',
    subject: 'econ',
    paper: 'P1',
    session: 'N22',
    level: 'HL',
    files: [
      {
        kind: 'questions',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2022%20Examination%20Session/November%202022%20Examination%20Session/Individuals%20and%20societies/Economics_paper_1__HL.pdf',
      },
      {
        kind: 'markscheme',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2022%20Examination%20Session/November%202022%20Examination%20Session/Individuals%20and%20societies/Economics_paper_1__HL_markscheme.pdf',
      },
    ],
    minutes: 75,
    marks: 25,
    items: [
      {
        q: '1a',
        marks: 10,
        command: 'Explain',
        topicIds: [
          'externalities',
          'equity-and-market-failure',
        ],
      },
      {
        q: '1b',
        marks: 15,
        command: 'Evaluate',
        topicIds: [
          'asymmetric-information',
          'government-taxes-subsidies-price-controls',
        ],
      },
      {
        q: '2a',
        marks: 10,
        command: 'Explain',
        topicIds: [
          'macroeconomic-objectives',
          'fiscal-policy',
        ],
      },
      {
        q: '2b',
        marks: 15,
        command: 'Discuss',
        topicIds: [
          'macroeconomic-objectives',
          'ad-as-model-and-business-cycle',
        ],
      },
      {
        q: '3a',
        marks: 10,
        command: 'Explain',
        topicIds: [
          'economic-integration',
        ],
      },
      {
        q: '3b',
        marks: 15,
        command: 'Evaluate',
        topicIds: [
          'economic-integration',
          'benefits-of-trade',
        ],
      },
    ],
    guide: {
      en: 'Time: 1 h 15 min. Plan for about five minutes.\n\n**Question 1** (a) 10 marks, (b) 15 marks\n- (a) Plan:\n  - **Definitions:** positive consumption externality (benefits to third parties); allocative inefficiency (output where marginal social benefit and marginal social cost differ).\n  - **Diagram:** MSB above demand (MPB), supply as marginal social cost; mark free market and optimal output and shade the welfare loss between them.\n  - **Chain:** if consumption benefits others, society gains more than the buyer, so the free market under-consumes; output falls short of the social optimum, creating a welfare loss.\n- (b) Plan:\n  - **Example:** second-hand car sales, where the seller knows more about quality than the buyer.\n  - **Arguments:** regulation and mandatory information, such as safety standards and quality labels, reduce the information gap; signalling and screening help without government.\n  - **Evaluation:** regulation brings compliance costs and possible government failure; private responses may suffice where the information gap is small.\n  - **Judgement:** intervene only where information gaps are large and private signals fail; otherwise letting markets adjust may be best.\n\n**Question 2** (a) 10 marks, (b) 15 marks\n- (a) Plan:\n  - **Definitions:** government debt is accumulated borrowing; sustainable debt can be serviced without rising to unsustainable levels.\n  - **Diagram:** optional; the AD/AS diagram can show spending, but words are enough.\n  - **Chain:** high debt raises interest costs and can lower credit ratings, so future taxes rise or spending falls; this limits policy choices later.\n- (b) Plan:\n  - **Example:** the 1970s, when many developed economies had both high inflation and high unemployment.\n  - **Arguments:** short-run expansion lowers unemployment but raises inflation along the Phillips curve; the long-run curve is vertical, so no lasting trade-off exists.\n  - **Evaluation:** supply shocks can raise both inflation and unemployment, so the trade-off is not stable; expectations shift the short-run curve.\n  - **Judgement:** the short-run trade-off is real but temporary, so demand policies that only add inflation gain no lasting jobs.\n\n**Question 3** (a) 10 marks, (b) 15 marks\n- (a) Plan:\n  - **Definitions:** free trade area (no tariffs between members, but each keeps its own external tariffs); common market (adds common external barriers and free movement of factors).\n  - **Diagram:** optional Venn diagram to show the extra features of a common market.\n  - **Chain:** if members share one external tariff and let factors move freely, the bloc goes beyond simple free trade; so a common market represents deeper integration.\n- (b) Plan:\n  - **Example:** the European Union, a common market with largely free movement of goods, services and workers.\n  - **Arguments:** trade creation, larger markets with economies of scale, freer labour mobility, and greater stability and cooperation.\n  - **Evaluation:** trade diversion and loss of sovereignty over trade policy can cut the gains; weaker members may face unemployment and weaker bargaining power.\n  - **Judgement:** staying is justified when trade creation outweighs diversion and sovereignty costs; weaker members may conclude otherwise.',
      ru: 'Время: 1 ч 15 мин. Планируйте около пяти минут.\n\n**Вопрос 1** (a) 10 баллов, (b) 15 баллов\n- (a) План:\n  - **Определения:** положительный потребительский внешний эффект (positive consumption externality) — выгоды для третьих лиц; аллокативная неэффективность (allocative inefficiency) — выпуск, при котором предельная общественная выгода и предельные общественные издержки не равны.\n  - **Диаграмма:** предельная общественная выгода (MSB) лежит выше спроса (MPB), предложение — это предельные общественные издержки (MSC); отметьте выпуск свободного рынка и оптимальный выпуск и заштрихуйте потери между ними.\n  - **Цепочка:** если потребление приносит выгоды другим, общество получает больше, чем покупатель, поэтому свободный рынок потребляет слишком мало; выпуск оказывается ниже общественного оптимума, возникают потери благосостояния (welfare loss).\n- (b) План:\n  - **Пример:** продажа подержанных автомобилей, где продавец лучше знает качество товара, чем покупатель.\n  - **Аргументы:** регулирование и обязательная информация, например стандарты безопасности и маркировка качества, сокращают информационный разрыв (information gap); сигналы и скрининг (signalling, screening) помогают и без государства.\n  - **Оценка:** регулирование несёт издержки соблюдения и риск государственного провала (government failure); частные меры могут быть достаточными там, где информационный разрыв мал.\n  - **Суждение:** вмешиваться стоит только там, где информационные разрывы велики и частные сигналы не работают; иначе лучше дать рынку самому приспособиться.\n\n**Вопрос 2** (a) 10 баллов, (b) 15 баллов\n- (a) План:\n  - **Определения:** государственный долг (government debt) — накопленные заимствования; устойчивый долг — тот, который можно обслуживать, не доводя его до неустойчивого уровня.\n  - **Диаграмма:** необязательна; диаграмма AD/AS может показать влияние госрасходов, но словесного объяснения достаточно.\n  - **Цепочка:** высокий долг повышает процентные расходы и может снизить кредитные рейтинги, поэтому будущие налоги растут или расходы сокращаются; это ограничивает политику в дальнейшем.\n- (b) План:\n  - **Пример:** 1970-е годы, когда во многих развитых экономиках одновременно были высокая инфляция и высокая безработица.\n  - **Аргументы:** краткосрочное расширение снижает безработицу, но повышает инфляцию вдоль кривой Филлипса (Phillips curve); долгосрочная кривая вертикальна на уровне естественной нормы безработицы (natural rate).\n  - **Оценка:** шоки предложения могут поднимать и инфляцию, и безработицу, поэтому компромисс нестабилен; ожидания сдвигают краткосрочную кривую.\n  - **Суждение:** краткосрочный компромисс реален, но временен, поэтому меры спроса, которые только добавляют инфляцию, не дают устойчивых рабочих мест.\n\n**Вопрос 3** (a) 10 баллов, (b) 15 баллов\n- (a) План:\n  - **Определения:** зона свободной торговли (free trade area) — нет пошлин между членами, но каждая страна сохраняет собственные внешние тарифы; общий рынок (common market) — добавляет общие внешние барьеры и свободное движение факторов производства.\n  - **Диаграмма:** необязательна; диаграмма Венна может показать дополнительные черты общего рынка.\n  - **Цепочка:** если члены вводят единый внешний тариф и разрешают свободное перемещение факторов, блок выходит за рамки зоны свободной торговли; значит, общий рынок — более глубокая форма интеграции (economic integration).\n- (b) План:\n  - **Пример:** Европейский союз — общий рынок со свободным движением товаров, услуг и работников.\n  - **Аргументы:** создание торговли (trade creation), более крупные рынки с экономией от масштаба, свободная мобильность труда и большая стабильность и сотрудничество.\n  - **Оценка:** переориентация торговли (trade diversion) и потеря суверенитета над торговой политикой могут сократить выгоды; более слабые члены могут столкнуться с безработицей и слабой переговорной позицией.\n  - **Суждение:** членство оправдано, когда создание торговли перевешивает переориентацию и издержки потери суверенитета; более слабые члены могут прийти к другому выводу.',
    },
  },
  {
    id: 'econ-p2-n22',
    subject: 'econ',
    paper: 'P2',
    session: 'N22',
    level: 'HL',
    files: [
      {
        kind: 'questions',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2022%20Examination%20Session/November%202022%20Examination%20Session/Individuals%20and%20societies/Economics_paper_2__HL.pdf',
      },
      {
        kind: 'markscheme',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2022%20Examination%20Session/November%202022%20Examination%20Session/Individuals%20and%20societies/Economics_paper_2__HL_markscheme.pdf',
      },
    ],
    minutes: 105,
    marks: 40,
    items: [
      {
        q: '1a(i)',
        marks: 2,
        command: 'Define',
        topicIds: [
          'demand',
        ],
      },
      {
        q: '1a(ii)',
        marks: 2,
        command: 'Define',
        topicIds: [
          'sustainable-development',
        ],
      },
      {
        q: '1b(i)',
        marks: 3,
        command: 'Calculate',
        topicIds: [
          'income-and-cross-elasticity',
        ],
      },
      {
        q: '1b(ii)',
        marks: 2,
        command: 'Sketch',
        topicIds: [
          'inequality-and-poverty',
        ],
      },
      {
        q: '1c',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'fiscal-policy',
          'ad-as-model-and-business-cycle',
        ],
      },
      {
        q: '1d',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'trade-protection',
          'government-taxes-subsidies-price-controls',
        ],
      },
      {
        q: '1e',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'exchange-rates',
          'balance-of-payments',
        ],
      },
      {
        q: '1f',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'externalities',
        ],
      },
      {
        q: '1g',
        marks: 15,
        command: 'Discuss',
        topicIds: [
          'barriers-to-growth-and-development',
          'inequality-and-poverty',
        ],
      },
      {
        q: '2a(i)',
        marks: 2,
        command: 'Define',
        topicIds: [
          'policies-for-growth-and-development',
        ],
      },
      {
        q: '2a(ii)',
        marks: 2,
        command: 'Define',
        topicIds: [
          'monopoly-and-natural-monopoly',
        ],
      },
      {
        q: '2b(i)',
        marks: 3,
        command: 'Calculate',
        topicIds: [
          'measuring-economic-activity',
        ],
      },
      {
        q: '2b(ii)',
        marks: 2,
        command: 'Sketch',
        topicIds: [
          'government-taxes-subsidies-price-controls',
        ],
      },
      {
        q: '2c',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'economic-models',
          'barriers-to-growth-and-development',
        ],
      },
      {
        q: '2d',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'ad-as-model-and-business-cycle',
        ],
      },
      {
        q: '2e',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'exchange-rates',
          'balance-of-payments',
        ],
      },
      {
        q: '2f',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'monopoly-and-natural-monopoly',
          'critique-maximizing-behaviour',
        ],
      },
      {
        q: '2g',
        marks: 15,
        command: 'Discuss',
        topicIds: [
          'policies-for-growth-and-development',
          'fiscal-policy',
          'supply-side-policies',
        ],
      },
    ],
  },
  {
    id: 'econ-p3-n22',
    subject: 'econ',
    paper: 'P3',
    session: 'N22',
    level: 'HL',
    files: [
      {
        kind: 'questions',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2022%20Examination%20Session/November%202022%20Examination%20Session/Individuals%20and%20societies/Economics_paper_3__HL.pdf',
      },
      {
        kind: 'markscheme',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2022%20Examination%20Session/November%202022%20Examination%20Session/Individuals%20and%20societies/Economics_paper_3__HL_markscheme.pdf',
      },
    ],
    minutes: 60,
    marks: 30,
    items: [
      {
        q: '1a(i)',
        marks: 2,
        command: 'Determine',
        topicIds: [
          'supply',
        ],
      },
      {
        q: '1a(ii)',
        marks: 2,
        command: 'Sketch',
        topicIds: [
          'oligopoly-and-monopolistic-competition',
          'competitive-market-equilibrium',
        ],
      },
      {
        q: '1a(iii)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'government-taxes-subsidies-price-controls',
          'competitive-market-equilibrium',
        ],
      },
      {
        q: '1a(iv)',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'government-taxes-subsidies-price-controls',
          'competitive-market-equilibrium',
          'equity-and-market-failure',
        ],
      },
      {
        q: '1a(v)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'government-taxes-subsidies-price-controls',
        ],
      },
      {
        q: '1a(vi)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'price-elasticity-of-demand',
        ],
      },
      {
        q: '1a(vii)',
        marks: 2,
        command: 'Describe',
        topicIds: [
          'income-and-cross-elasticity',
        ],
      },
      {
        q: '1a(viii)',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'externalities',
          'equity-and-market-failure',
        ],
      },
      {
        q: '1b',
        marks: 10,
        command: 'Recommend',
        topicIds: [
          'externalities',
          'government-taxes-subsidies-price-controls',
        ],
      },
      {
        q: '2a(i)',
        marks: 2,
        command: 'Describe',
        topicIds: [
          'benefits-of-trade',
        ],
      },
      {
        q: '2a(ii)',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'trade-protection',
          'arguments-for-and-against-trade-control',
        ],
      },
      {
        q: '2a(iii)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'trade-protection',
        ],
      },
      {
        q: '2a(iv)',
        marks: 3,
        command: 'Calculate',
        topicIds: [
          'trade-protection',
          'exchange-rates',
        ],
      },
      {
        q: '2a(v)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'fiscal-policy',
        ],
      },
      {
        q: '2a(vi)',
        marks: 2,
        command: 'Construct',
        topicIds: [
          'inequality-and-poverty',
        ],
      },
      {
        q: '2a(vii)',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'fiscal-policy',
          'inequality-and-poverty',
        ],
      },
      {
        q: '2a(viii)',
        marks: 1,
        command: 'Identify',
        topicIds: [
          'measuring-development',
          'inequality-and-poverty',
        ],
      },
      {
        q: '2b',
        marks: 10,
        command: 'Recommend',
        topicIds: [
          'inequality-and-poverty',
          'fiscal-policy',
        ],
      },
    ],
  },
  {
    id: 'econ-p1-m23-tz1',
    subject: 'econ',
    paper: 'P1',
    session: 'M23',
    level: 'HL',
    tz: 'TZ1',
    files: [
      {
        kind: 'questions',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2023%20Examination%20Session/May%202023%20Examination%20Session/Individuals%20and%20societies/Economics_paper_1__TZ1_HL.pdf',
      },
      {
        kind: 'markscheme',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2023%20Examination%20Session/May%202023%20Examination%20Session/Individuals%20and%20societies/Economics_paper_1__TZ1_HL_markscheme.pdf',
      },
    ],
    minutes: 75,
    marks: 25,
    items: [
      {
        q: '1a',
        marks: 10,
        command: 'Explain',
        topicIds: [
          'oligopoly-and-monopolistic-competition',
          'competitive-market-equilibrium',
        ],
      },
      {
        q: '1b',
        marks: 15,
        command: 'Discuss',
        topicIds: [
          'oligopoly-and-monopolistic-competition',
          'monopoly-and-natural-monopoly',
        ],
      },
      {
        q: '2a',
        marks: 10,
        command: 'Explain',
        topicIds: [
          'macroeconomic-objectives',
          'ad-as-model-and-business-cycle',
        ],
      },
      {
        q: '2b',
        marks: 15,
        command: 'Evaluate',
        topicIds: [
          'monetary-policy',
          'ad-as-model-and-business-cycle',
        ],
      },
      {
        q: '3a',
        marks: 10,
        command: 'Explain',
        topicIds: [
          'policies-for-growth-and-development',
          'barriers-to-growth-and-development',
        ],
      },
      {
        q: '3b',
        marks: 15,
        command: 'Discuss',
        topicIds: [
          'barriers-to-growth-and-development',
          'policies-for-growth-and-development',
        ],
      },
    ],
    guide: {
      en: 'Time: 1 h 15 min. Plan for about five minutes.\n\n**Question 1** (a) 10 marks, (b) 15 marks\n- (a) Plan:\n  - **Definitions:** abnormal profit is profit above normal profit; freedom of entry lets new firms join when profits are high.\n  - **Diagram:** short-run diagram with abnormal profit; long-run diagram with demand shifted left until price equals average cost. Label price and quantity.\n  - **Chain:** if abnormal profits attract new firms, each existing firm\'s demand falls and shifts left; so profits are competed away and only normal profit remains eventually.\n- (b) Plan:\n  - **Example:** the high-street clothing or coffee market, where many brands differentiate products and enter freely.\n  - **Arguments:** monopolistic competition offers more variety, weaker market power and normal profit over time; oligopolies risk collusion and higher prices.\n  - **Evaluation:** oligopolies may gain from scale economies and innovation spending, and price wars can cut prices for consumers; the answer depends on barriers to entry.\n  - **Judgement:** monopolistic competition usually suits consumers better, but scale and innovation can justify oligopoly in some markets.\n\n**Question 2** (a) 10 marks, (b) 15 marks\n- (a) Plan:\n  - **Definitions:** the natural rate (NRU) is the unemployment that remains at full capacity; it has three sources: seasonal, frictional and structural unemployment.\n  - **Diagram:** long-run Phillips curve, vertical at the natural rate; or an AD/AS diagram where actual GDP equals potential GDP.\n  - **Chain:** if workers are between jobs or lack the skills that vacancies need, unemployment persists even at full employment; so the economy always has a natural rate.\n- (b) Plan:\n  - **Example:** the 2008–09 downturn, when many central banks cut interest rates sharply.\n  - **Arguments:** lower interest rates and quantitative easing shift AD right and close the recessionary gap; the policy can act quickly and be reversed.\n  - **Evaluation:** the effect weakens when interest rates cannot fall further and confidence is low; monetary policy cannot fix structural unemployment and may later raise inflation.\n  - **Judgement:** monetary policy suits a cyclical gap while rates have room to fall; fiscal policy may be needed otherwise.\n\n**Question 3** (a) 10 marks, (b) 15 marks\n- (a) Plan:\n  - **Definitions:** economic development is a rise in living standards and capabilities; merit goods have external benefits, so people may under-consume them without support.\n  - **Diagram:** LRAS shifting right, or a PPC moving outwards; label the new potential output.\n  - **Chain:** if education and health raise productivity and workforce participation, then LRAS shifts right and output per person rises; cover both programmes, or the mark is capped.\n- (b) Plan:\n  - **Example:** a low-income country with weak courts, unfair tax collection and insecure land rights.\n  - **Arguments:** weak institutions such as poor legal systems and unclear property rights discourage investment and trade, which blocks growth.\n  - **Evaluation:** low savings, poor infrastructure, debt or conflict can matter as much; considering institutions alone caps the mark at 12.\n  - **Judgement:** institutions matter a great deal, yet they may not be the biggest obstacle; the answer depends on the country.',
      ru: 'Время: 1 ч 15 мин. Планируйте около пяти минут.\n\n**Вопрос 1** (a) 10 баллов, (b) 15 баллов\n- (a) План:\n  - **Определения:** сверхприбыль (abnormal profit) — прибыль выше нормальной (normal profit); свободный вход (freedom of entry) — новые фирмы приходят, когда прибыли высоки.\n  - **Диаграмма:** краткосрочная диаграмма со сверхприбылью; долгосрочная диаграмма, где спрос сдвинут влево, пока цена не станет равна средним издержкам. Подпишите цену и объём.\n  - **Цепочка:** если сверхприбыль привлекает новые фирмы, спрос на каждую действующую фирму падает и сдвигается влево; поэтому прибыли конкурируются, и в итоге остаётся только нормальная прибыль.\n- (b) План:\n  - **Пример:** рынок одежды или кофе на торговых улицах, где много брендов дифференцируют продукт и свободно входят на рынок.\n  - **Аргументы:** монополистическая конкуренция (monopolistic competition) даёт больше разнообразия, слабее рыночную власть и со временем нормальную прибыль; олигополии (oligopoly) рискуют сговором и более высокими ценами.\n  - **Оценка:** олигополии могут выигрывать от экономии от масштаба и НИОКР, а ценовые войны способны снизить цены для потребителей; ответ зависит от барьеров входа (barriers to entry).\n  - **Суждение:** монополистическая конкуренция обычно лучше служит потребителям, но масштаб и инновации могут оправдать олигополию на некоторых рынках.\n\n**Вопрос 2** (a) 10 баллов, (b) 15 баллов\n- (a) План:\n  - **Определения:** естественный уровень безработицы (natural rate, NRU) — безработица, которая сохраняется при полной загрузке мощностей; он складывается из структурной, фрикционной и сезонной безработицы (structural, frictional and seasonal unemployment).\n  - **Диаграмма:** долгосрочная кривая Филлипса (long-run Phillips curve), вертикальная на уровне естественного уровня безработицы; или диаграмма AD/AS, где фактический ВВП равен потенциальному.\n  - **Цепочка:** если работники находятся между работами или не имеют навыков, которые требуют вакансии, безработица сохраняется даже при полной занятости; поэтому у экономики всегда есть естественный уровень безработицы.\n- (b) План:\n  - **Пример:** спад 2008–2009 годов, когда многие центральные банки резко снизили процентные ставки.\n  - **Аргументы:** снижение процентных ставок и количественное смягчение (quantitative easing) сдвигают совокупный спрос вправо и закрывают рецессионный разрыв; политику можно быстро проводить и отменять.\n  - **Оценка:** эффект слабеет, когда ставки уже не могут снижаться, а доверие низкое; денежная политика не решает структурную безработицу и позже может поднять инфляцию.\n  - **Суждение:** денежная политика подходит для циклического разрыва, пока у ставок есть место для снижения; в остальных случаях может понадобиться фискальная политика (fiscal policy).\n\n**Вопрос 3** (a) 10 баллов, (b) 15 баллов\n- (a) План:\n  - **Определения:** экономическое развитие (economic development) — рост уровня жизни и возможностей людей; заслуги блага (merit goods) — блага с внешними выгодами, которые без поддержки могут потребляться недостаточно.\n  - **Диаграмма:** сдвиг LRAS вправо или сдвиг кривой производственных возможностей (PPC) наружу; подпишите новый потенциальный выпуск.\n  - **Цепочка:** если образование и здравоохранение повышают производительность и участие в рабочей силе, то LRAS сдвигается вправо и выпуск на человека растёт; раскройте обе программы, иначе балл ограничен.\n- (b) План:\n  - **Пример:** страна с низким доходом, со слабыми судами, несправедливым налогообложением и неустойчивыми правами на землю.\n  - **Аргументы:** слабые институты, такие как плохие правовые системы и неясные права собственности, сдерживают инвестиции и торговлю, что тормозит рост.\n  - **Оценка:** низкие сбережения, слабая инфраструктура, долг или конфликты могут быть не менее важны; если рассматривать только институты, балл ограничен 12.\n  - **Суждение:** институты очень важны, но они не всегда главное препятствие; ответ зависит от страны.',
    },
  },
  {
    id: 'econ-p1-m23-tz2',
    subject: 'econ',
    paper: 'P1',
    session: 'M23',
    level: 'HL',
    tz: 'TZ2',
    files: [
      {
        kind: 'questions',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2023%20Examination%20Session/May%202023%20Examination%20Session/Individuals%20and%20societies/Economics_paper_1__TZ2_HL.pdf',
      },
      {
        kind: 'markscheme',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2023%20Examination%20Session/May%202023%20Examination%20Session/Individuals%20and%20societies/Economics_paper_1__TZ2_HL_markscheme.pdf',
      },
    ],
    minutes: 75,
    marks: 25,
    items: [
      {
        q: '1a',
        marks: 10,
        command: 'Explain',
        topicIds: [
          'income-and-cross-elasticity',
          'demand',
        ],
      },
      {
        q: '1b',
        marks: 15,
        command: 'Discuss',
        topicIds: [
          'critique-maximizing-behaviour',
          'economic-models',
        ],
      },
      {
        q: '2a',
        marks: 10,
        command: 'Explain',
        topicIds: [
          'macroeconomic-objectives',
          'inequality-and-poverty',
        ],
      },
      {
        q: '2b',
        marks: 15,
        command: 'Discuss',
        topicIds: [
          'macroeconomic-objectives',
          'ad-as-model-and-business-cycle',
        ],
      },
      {
        q: '3a',
        marks: 10,
        command: 'Explain',
        topicIds: [
          'barriers-to-growth-and-development',
          'price-elasticity-of-demand',
          'elasticity-of-supply',
        ],
      },
      {
        q: '3b',
        marks: 15,
        command: 'Evaluate',
        topicIds: [
          'supply-side-policies',
          'policies-for-growth-and-development',
        ],
      },
    ],
    guide: {
      en: 'Time: 1 h 15 min. Plan for about five minutes.\n\n**Question 1** (a) 10 marks, (b) 15 marks\n- (a) Plan:\n  - **Definitions:** income elasticity of demand (YED) measures demand\'s response to income; normal goods have positive YED, inferior goods negative YED.\n  - **Diagram:** market diagram; demand shifts right for a normal good and left for an inferior good.\n  - **Chain:** if demand rises faster than income, the good is income elastic (a luxury); if slower, it is inelastic. Cover sign and size, or the mark is capped.\n- (b) Plan:\n  - **Example:** a shopper who buys a cheaper brand under budget pressure, or who buys on impulse during a discount.\n  - **Arguments:** the assumption of rational, fully informed consumers keeps economic models simple and predictive.\n  - **Evaluation:** limited information, bounded rationality and biases such as anchoring mean consumers do not always maximise utility; the claim of always doing so is very strong.\n  - **Judgement:** the assumption simplifies many markets well, but it rarely holds in every case, so behavioural evidence should qualify it.\n\n**Question 2** (a) 10 marks, (b) 15 marks\n- (a) Plan:\n  - **Definitions:** unemployment means people who are willing and able to work but have no job.\n  - **Diagram:** PPC with production inside the frontier; label the gap as lost output.\n  - **Chain:** unemployment cuts output and tax revenue while raising welfare spending, widening the budget deficit; long spells also harm future job prospects. Cover two costs or the mark is capped.\n- (b) Plan:\n  - **Example:** an economy operating close to full employment, where wages and prices rose together.\n  - **Arguments:** falling unemployment raises aggregate demand and can cause demand-pull inflation, as the Phillips curve shows.\n  - **Evaluation:** the kind of unemployment matters, and supply-side policies can cut structural unemployment without extra inflation; over a full cycle the trade-off may disappear.\n  - **Judgement:** low unemployment without inflation is possible when the cause is structural and supply-side policies work, so the claim of a strict trade-off overstates it.\n\n**Question 3** (a) 10 marks, (b) 15 marks\n- (a) Plan:\n  - **Definitions:** primary sector production is farming, mining and fishing; overspecialisation means relying on a few such products.\n  - **Diagram:** supply and demand diagram with steep (inelastic) curves; a small shift in supply causes a large price swing.\n  - **Chain:** unresponsive demand and supply make prices volatile, so farm incomes and export earnings swing; this discourages investment and slows growth.\n- (b) Plan:\n  - **Example:** a low-income economy that privatised utilities and cut trade barriers under reform programmes.\n  - **Arguments:** market-based policies may widen inequality and leave market failures untreated; foreign-owned utilities can send profits abroad.\n  - **Evaluation:** competition, productivity gains and export diversification can raise growth, so the effects depend on institutions and on combining with public investment.\n  - **Judgement:** market-based policies alone are often weak for the poorest countries; they work better alongside investment in health, education and institutions.',
      ru: 'Время: 1 ч 15 мин. Планируйте около пяти минут.\n\n**Вопрос 1** (a) 10 баллов, (b) 15 баллов\n- (a) План:\n  - **Определения:** эластичность спроса по доходу (income elasticity of demand, YED) показывает, как спрос реагирует на доход; у нормальных благ YED положительна, у низших благ (inferior goods) — отрицательна.\n  - **Диаграмма:** диаграмма спроса и предложения; спрос сдвигается вправо для нормального блага и влево для низшего блага.\n  - **Цепочка:** если спрос растёт быстрее дохода, благо эластично по доходу и является роскошью; если медленнее, оно неэластично. Раскройте и знак, и величину YED, иначе балл ограничен.\n- (b) План:\n  - **Пример:** покупатель, который выбирает более дешёвую марку из-за ограниченного бюджета, или тот, кто покупает импульсивно во время скидки.\n  - **Аргументы:** предположение о рациональных и полностью информированных потребителях делает экономические модели простыми и предсказуемыми.\n  - **Оценка:** неполная информация, ограниченная рациональность и предубеждения, например якорение (anchoring), означают, что потребители не всегда максимизируют полезность (utility); утверждение, что они всегда так поступают, очень сильное.\n  - **Суждение:** предположение хорошо упрощает многие рынки, но редко выполняется во всех случаях, поэтому его стоит уточнять поведенческими данными.\n\n**Вопрос 2** (a) 10 баллов, (b) 15 баллов\n- (a) План:\n  - **Определения:** безработица (unemployment) — люди, готовые и способные работать, но без работы.\n  - **Диаграмма:** кривая производственных возможностей (PPC) с производством внутри границы; подпишите разрыв как потерянный выпуск.\n  - **Цепочка:** безработица сокращает выпуск и налоговые поступления и увеличивает социальные расходы, расширяя дефицит бюджета; длительная безработица также ухудшает будущие перспективы работы. Раскройте два вида издержек, иначе балл ограничен.\n- (b) План:\n  - **Пример:** экономика, работающая близко к полной занятости, где зарплаты и цены росли вместе.\n  - **Аргументы:** снижение безработицы повышает совокупный спрос и может вызвать инфляцию спроса (demand-pull inflation), которую показывает краткосрочная кривая Филлипса (short-run Phillips curve).\n  - **Оценка:** важен тип безработицы, а политика предложения может сократить структурную безработицу без дополнительной инфляции; в полном цикле компромисс может исчезнуть.\n  - **Суждение:** низкая безработица без инфляции возможна, если причина структурная и меры предложения работают, поэтому жёсткий компромисс переоценён.\n\n**Вопрос 3** (a) 10 баллов, (b) 15 баллов\n- (a) План:\n  - **Определения:** первичный сектор (primary sector) — сельское хозяйство, добыча и рыболовство; чрезмерная специализация (overspecialisation) — зависимость от нескольких таких продуктов.\n  - **Диаграмма:** диаграмма спроса и предложения с крутыми (неэластичными) кривыми; небольшой сдвиг предложения вызывает большой скачок цены.\n  - **Цепочка:** неэластичные спрос и предложение делают цены нестабильными, поэтому доходы фермеров и экспортная выручка колеблются; это сдерживает инвестиции и замедляет рост.\n- (b) План:\n  - **Пример:** страна с низким доходом, которая приватизировала коммунальные услуги и снизила торговые барьеры в рамках реформ.\n  - **Аргументы:** рыночные меры могут усиливать неравенство и оставлять провалы рынка без решения; иностранные владельцы коммунальных услуг могут отправлять прибыль за границу.\n  - **Оценка:** конкуренция, рост производительности и диверсификация экспорта могут ускорить рост, поэтому результат зависит от институтов и сочетания с государственными инвестициями.\n  - **Суждение:** рыночные меры сами по себе часто слабы для беднейших стран; они работают лучше вместе с инвестициями в здравоохранение, образование и институты.',
    },
  },
  {
    id: 'econ-p2-m23',
    subject: 'econ',
    paper: 'P2',
    session: 'M23',
    level: 'HL',
    files: [
      {
        kind: 'questions',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2023%20Examination%20Session/May%202023%20Examination%20Session/Individuals%20and%20societies/Economics_paper_2__HL.pdf',
      },
      {
        kind: 'markscheme',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2023%20Examination%20Session/May%202023%20Examination%20Session/Individuals%20and%20societies/Economics_paper_2__HL_markscheme.pdf',
      },
    ],
    minutes: 105,
    marks: 40,
    items: [
      {
        q: '1a(i)',
        marks: 2,
        command: 'List',
        topicIds: [
          'policies-for-growth-and-development',
        ],
      },
      {
        q: '1a(ii)',
        marks: 2,
        command: 'Define',
        topicIds: [
          'balance-of-payments',
        ],
      },
      {
        q: '1b(i)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'measuring-economic-activity',
          'measuring-development',
        ],
      },
      {
        q: '1b(ii)',
        marks: 3,
        command: 'Sketch',
        topicIds: [
          'government-taxes-subsidies-price-controls',
        ],
      },
      {
        q: '1c',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'ad-as-model-and-business-cycle',
          'fiscal-policy',
        ],
      },
      {
        q: '1d',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'competitive-market-equilibrium',
          'supply',
          'demand',
        ],
      },
      {
        q: '1e',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'exchange-rates',
          'balance-of-payments',
        ],
      },
      {
        q: '1f',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'barriers-to-growth-and-development',
          'inequality-and-poverty',
        ],
      },
      {
        q: '1g',
        marks: 15,
        command: 'Discuss',
        topicIds: [
          'benefits-of-trade',
          'economic-integration',
        ],
      },
      {
        q: '2a(i)',
        marks: 2,
        command: 'Define',
        topicIds: [
          'critique-maximizing-behaviour',
        ],
      },
      {
        q: '2a(ii)',
        marks: 2,
        command: 'Define',
        topicIds: [
          'common-pool-resources',
        ],
      },
      {
        q: '2b(i)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'measuring-economic-activity',
        ],
      },
      {
        q: '2b(ii)',
        marks: 3,
        command: 'Sketch',
        topicIds: [
          'ad-as-model-and-business-cycle',
          'balance-of-payments',
        ],
      },
      {
        q: '2c',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'government-taxes-subsidies-price-controls',
        ],
      },
      {
        q: '2d',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'exchange-rates',
          'price-elasticity-of-demand',
        ],
      },
      {
        q: '2e',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'trade-protection',
        ],
      },
      {
        q: '2f',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'inequality-and-poverty',
        ],
      },
      {
        q: '2g',
        marks: 15,
        command: 'Discuss',
        topicIds: [
          'sustainable-development',
          'externalities',
        ],
      },
    ],
  },
  {
    id: 'econ-p3-m23-q1',
    subject: 'econ',
    paper: 'P3',
    session: 'M23',
    level: 'HL',
    part: 'question-1',
    files: [
      {
        kind: 'questions',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2023%20Examination%20Session/May%202023%20Examination%20Session/Individuals%20and%20societies/Economics_paper_3__HL.pdf',
      },
      {
        kind: 'markscheme',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2023%20Examination%20Session/May%202023%20Examination%20Session/Individuals%20and%20societies/Economics_paper_3__HL_markscheme.pdf',
      },
    ],
    minutes: 60,
    marks: 28,
    items: [
      {
        q: '1a(i)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'price-elasticity-of-demand',
        ],
      },
      {
        q: '1a(ii)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'competitive-market-equilibrium',
        ],
      },
      {
        q: '1a(iii)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'government-taxes-subsidies-price-controls',
        ],
      },
      {
        q: '1a(iv)',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'price-elasticity-of-demand',
        ],
      },
      {
        q: '1a(v)',
        marks: 2,
        command: 'Define',
        topicIds: [
          'monopoly-and-natural-monopoly',
          'oligopoly-and-monopolistic-competition',
        ],
      },
      {
        q: '1a(vi)',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'oligopoly-and-monopolistic-competition',
          'equity-and-market-failure',
        ],
      },
      {
        q: '1a(vii)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'monopoly-and-natural-monopoly',
        ],
      },
      {
        q: '1b',
        marks: 10,
        command: 'Recommend',
        topicIds: [
          'monopoly-and-natural-monopoly',
          'oligopoly-and-monopolistic-competition',
        ],
      },
    ],
  },
  {
    id: 'econ-p3-m23-q2',
    subject: 'econ',
    paper: 'P3',
    session: 'M23',
    level: 'HL',
    part: 'question-2',
    files: [
      {
        kind: 'questions',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2023%20Examination%20Session/May%202023%20Examination%20Session/Individuals%20and%20societies/Economics_paper_3__HL.pdf',
      },
      {
        kind: 'markscheme',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2023%20Examination%20Session/May%202023%20Examination%20Session/Individuals%20and%20societies/Economics_paper_3__HL_markscheme.pdf',
      },
    ],
    minutes: 60,
    marks: 30,
    items: [
      {
        q: '2a(i)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'macroeconomic-objectives',
        ],
      },
      {
        q: '2a(ii)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'measuring-economic-activity',
        ],
      },
      {
        q: '2a(iii)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'measuring-economic-activity',
          'measuring-development',
        ],
      },
      {
        q: '2a(iv)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'exchange-rates',
        ],
      },
      {
        q: '2a(v)',
        marks: 2,
        command: 'Define',
        topicIds: [
          'exchange-rates',
        ],
      },
      {
        q: '2a(vi)',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'exchange-rates',
        ],
      },
      {
        q: '2a(vii)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'exchange-rates',
        ],
      },
      {
        q: '2a(viii)',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'exchange-rates',
          'ad-as-model-and-business-cycle',
          'macroeconomic-objectives',
        ],
      },
      {
        q: '2b',
        marks: 10,
        command: 'Recommend',
        topicIds: [
          'exchange-rates',
          'monetary-policy',
        ],
      },
    ],
  },
  {
    id: 'econ-p1-n23-tz1',
    subject: 'econ',
    paper: 'P1',
    session: 'N23',
    level: 'HL',
    tz: 'TZ1',
    files: [
      {
        kind: 'questions',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2023%20Examination%20Session/November%202023%20Examination%20Session/Individuals%20and%20societies/Economics_paper_1__TZ1_HL.pdf',
      },
      {
        kind: 'markscheme',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2023%20Examination%20Session/November%202023%20Examination%20Session/Individuals%20and%20societies/Economics_paper_1__TZ1_HL_markscheme.pdf',
      },
    ],
    minutes: 75,
    marks: 25,
    items: [
      {
        q: '1a',
        marks: 10,
        command: 'Explain',
        topicIds: [
          'price-elasticity-of-demand',
        ],
      },
      {
        q: '1b',
        marks: 15,
        command: 'Discuss',
        topicIds: [
          'oligopoly-and-monopolistic-competition',
          'monopoly-and-natural-monopoly',
          'government-taxes-subsidies-price-controls',
        ],
      },
      {
        q: '2a',
        marks: 10,
        command: 'Explain',
        topicIds: [
          'ad-as-model-and-business-cycle',
          'measuring-economic-activity',
        ],
      },
      {
        q: '2b',
        marks: 15,
        command: 'Discuss',
        topicIds: [
          'measuring-economic-activity',
          'measuring-development',
        ],
      },
      {
        q: '3a',
        marks: 10,
        command: 'Explain',
        topicIds: [
          'benefits-of-trade',
        ],
      },
      {
        q: '3b',
        marks: 15,
        command: 'Discuss',
        topicIds: [
          'economic-integration',
          'benefits-of-trade',
        ],
      },
    ],
    guide: {
      en: 'Time: 1 h 15 min. Plan for about five minutes.\n\n**Question 1** (a) 10 marks, (b) 15 marks\n- (a) Plan:\n  - **Definitions:** price elasticity of demand (PED) is responsiveness to price; two determinants are the number of substitutes and whether the good is a necessity.\n  - **Diagram:** demand curve with elasticity varying along its length, or two demand curves of different steepness.\n  - **Chain:** if many close substitutes exist, buyers switch when price rises, so demand is elastic; if the good is a necessity, buyers keep buying, so demand is inelastic. Cover two determinants or the mark is capped.\n- (b) Plan:\n  - **Example:** a competition authority that fines a cartel, or a regulator that caps prices for a dominant utility.\n  - **Arguments:** rules enforced through fines or price regulation can curb the harm from dominant firms, which lowers prices and raises output and choice.\n  - **Evaluation:** nationalisation or price controls can cause inefficiency, while concentration may bring scale benefits or innovation.\n  - **Judgement:** intervention is justified when concentration causes harm, but the right policy depends on scale and innovation.\n\n**Question 2** (a) 10 marks, (b) 15 marks\n- (a) Plan:\n  - **Definitions:** investment is spending on capital goods; two determinants are interest rates and business confidence.\n  - **Diagram:** AD/AS diagram with AD shifting right, and LRAS shifting right if the capital stock grows; label the new real GDP.\n  - **Chain:** lower interest rates or better confidence raise investment, shifting AD right; more capital also shifts LRAS right. Cover two determinants or the mark is capped at 6.\n- (b) Plan:\n  - **Example:** an economy where large foreign-owned firms send much of their profit abroad, so output and national income differ.\n  - **Arguments:** GNI counts incomes earned by residents, so it reflects living standards better than output when large profit flows go abroad.\n  - **Evaluation:** GNI ignores inequality, unpaid work, the informal economy and environmental damage; well-being indices can add these.\n  - **Judgement:** GNI works well as an income measure but not as a full measure of well-being, so it should be paired with inequality and environmental indicators.\n\n**Question 3** (a) 10 marks, (b) 15 marks\n- (a) Plan:\n  - **Definitions:** comparative advantage is a lower opportunity cost than another country; specialisation means focusing production on that good.\n  - **Diagram:** two linear PPCs with different slopes; show the gains from specialisation and trade.\n  - **Chain:** each country specialises where its opportunity cost is lower and trades, so world output rises; consumers gain lower prices and more choice.\n- (b) Plan:\n  - **Example:** the European Union, which has a customs union and a single market.\n  - **Arguments:** trade creation, larger markets for economies of scale, freer labour mobility and greater bargaining strength in talks.\n  - **Evaluation:** trade diversion and loss of sovereignty are real costs; high tariffs can also shut out non-members that have a comparative advantage. Cover both advantages and disadvantages, or the mark is capped at 9.\n  - **Judgement:** membership is worthwhile when the advantages outweigh diversion and sovereignty costs for that country.',
      ru: 'Время: 1 ч 15 мин. Планируйте около пяти минут.\n\n**Вопрос 1** (a) 10 баллов, (b) 15 баллов\n- (a) План:\n  - **Определения:** эластичность спроса по цене (price elasticity of demand, PED) — отклик величины спроса на цену; два фактора — число заменителей и то, является ли благо необходимостью.\n  - **Диаграмма:** кривая спроса, где эластичность меняется вдоль её длины, или две кривые спроса разной крутизны.\n  - **Цепочка:** если есть много близких заменителей, покупатели переходят на них при росте цены, поэтому спрос эластичен; если благо необходимо, покупатели продолжают покупать, поэтому спрос неэластичен. Раскройте два фактора, иначе балл ограничен.\n- (b) План:\n  - **Пример:** конкурентный орган, который штрафует картель, или регулятор, который ограничивает цены доминирующей коммунальной компании.\n  - **Аргументы:** регулирование, законодательство и штрафы могут ограничить злоупотребление рыночной властью, что снижает цены и расширяет выпуск и выбор.\n  - **Оценка:** национализация или ценовое регулирование могут создать неэффективность, а концентрация может давать экономию от масштаба или инновации.\n  - **Суждение:** вмешательство оправдано, когда концентрация наносит вред, но выбор политики зависит от того, что поставлено на карту: масштаб или инновации.\n\n**Вопрос 2** (a) 10 баллов, (b) 15 баллов\n- (a) План:\n  - **Определения:** инвестиции (investment) — расходы на капитальные блага; два фактора — процентные ставки и деловое доверие (business confidence).\n  - **Диаграмма:** диаграмма AD/AS со сдвигом AD вправо и сдвигом LRAS вправо, если капитал растёт; подпишите новый реальный ВВП.\n  - **Цепочка:** более низкие процентные ставки или доверие повышают инвестиции и сдвигают AD вправо; больше капитала также сдвигает LRAS вправо. Раскройте два фактора, иначе балл ограничен 6.\n- (b) План:\n  - **Пример:** экономика, где крупные иностранные компании отправляют значительную часть прибыли за границу, поэтому выпуск и национальный доход различаются.\n  - **Аргументы:** валовой национальный доход (gross national income, GNI) учитывает доходы резидентов, поэтому лучше отражает уровень жизни, чем выпуск, когда крупные потоки прибыли уходят за границу.\n  - **Оценка:** GNI не учитывает неравенство, неоплачиваемый труд, неформальную экономику и ущерб окружающей среде; такие индексы благосостояния, как предлагаемые ОЭСР, могут их добавить.\n  - **Суждение:** GNI — полезная мера дохода, но не полная мера благосостояния, поэтому её стоит дополнять показателями неравенства и окружающей среды.\n\n**Вопрос 3** (a) 10 баллов, (b) 15 баллов\n- (a) План:\n  - **Определения:** сравнительное преимущество (comparative advantage) — меньшие альтернативные издержки (opportunity cost), чем у другой страны; специализация (specialisation) — концентрация производства на этом благе.\n  - **Диаграмма:** две линейные кривые производственных возможностей (PPC) с разным наклоном; покажите выигрыш от специализации и торговли.\n  - **Цепочка:** каждая страна специализируется там, где её альтернативные издержки ниже, и торгует, поэтому мировой выпуск растёт; потребители получают более низкие цены и больший выбор.\n- (b) План:\n  - **Пример:** Европейский союз, в котором есть таможенный союз (customs union) и единый рынок.\n  - **Аргументы:** создание торговли (trade creation), большие рынки для экономии от масштаба, более свободная мобильность труда и сильнее переговорная позиция.\n  - **Оценка:** переориентация торговли (trade diversion) и потеря суверенитета — реальные издержки; высокие тарифы могут также исключать из торговли страны, не входящие в блок, но имеющие сравнительное преимущество. Раскройте и плюсы, и минусы, иначе балл ограничен 9.\n  - **Суждение:** членство оправдано, когда выгоды перевешивают издержки переориентации и потери суверенитета для данной страны.',
    },
  },
  {
    id: 'econ-p1-n23-tz2',
    subject: 'econ',
    paper: 'P1',
    session: 'N23',
    level: 'HL',
    tz: 'TZ2',
    files: [
      {
        kind: 'questions',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2023%20Examination%20Session/November%202023%20Examination%20Session/Individuals%20and%20societies/Economics_paper_1__TZ2_HL.pdf',
      },
      {
        kind: 'markscheme',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2023%20Examination%20Session/November%202023%20Examination%20Session/Individuals%20and%20societies/Economics_paper_1__TZ2_HL_markscheme.pdf',
      },
    ],
    minutes: 75,
    marks: 25,
    items: [
      {
        q: '1a',
        marks: 10,
        command: 'Explain',
        topicIds: [
          'externalities',
          'government-taxes-subsidies-price-controls',
        ],
      },
      {
        q: '1b',
        marks: 15,
        command: 'Discuss',
        topicIds: [
          'government-taxes-subsidies-price-controls',
          'externalities',
        ],
      },
      {
        q: '2a',
        marks: 10,
        command: 'Explain',
        topicIds: [
          'macroeconomic-objectives',
          'measuring-economic-activity',
        ],
      },
      {
        q: '2b',
        marks: 15,
        command: 'Examine',
        topicIds: [
          'macroeconomic-objectives',
          'ad-as-model-and-business-cycle',
        ],
      },
      {
        q: '3a',
        marks: 10,
        command: 'Explain',
        topicIds: [
          'exchange-rates',
        ],
      },
      {
        q: '3b',
        marks: 15,
        command: 'Discuss',
        topicIds: [
          'exchange-rates',
          'balance-of-payments',
          'macroeconomic-objectives',
        ],
      },
    ],
    guide: {
      en: 'Time: 1 h 15 min. Plan for about five minutes.\n\n**Question 1** (a) 10 marks, (b) 15 marks\n- (a) Plan:\n  - **Definitions:** an externality is a cost or benefit to third parties; tradeable permits cap emissions and let firms trade the right to emit.\n  - **Diagram:** market failure diagram for carbon emissions, or a sketch of the permit market; label the permit price.\n  - **Chain:** the government sets a cap and hands out permits; heavy emitters must buy more, so polluters bear a cost; emissions fall to the socially efficient level as the cap tightens.\n- (b) Plan:\n  - **Example:** subsidies for electric vehicles or solar panels, as used in many countries.\n  - **Arguments:** a subsidy lowers the cost of clean technology and increases its use, correcting under-provision caused by the positive externality.\n  - **Evaluation:** subsidies cost taxpayers, and the quantity response depends on elasticities; taxes or permits may target pollution more directly.\n  - **Judgement:** subsidies can help, but they are rarely the best single tool; combining them with carbon pricing is usually more efficient.\n\n**Question 2** (a) 10 marks, (b) 15 marks\n- (a) Plan:\n  - **Definitions:** CPI tracks prices of a fixed basket bought by an average household; inflation is the percentage change in the price level.\n  - **Diagram:** none needed.\n  - **Chain:** if spending differs across households, an average basket misstates their inflation; if weights adjust slowly, new products and substitution are missed; so CPI can mislead.\n- (b) Plan:\n  - **Example:** an economy that cut unemployment through a fast demand boom, then saw wages and prices climb.\n  - **Arguments:** along a short-run Phillips curve, lower unemployment comes with higher inflation, so policymakers may face a choice.\n  - **Evaluation:** once expectations adjust, the curve is vertical at the natural rate, so extra demand adds only inflation; supply shocks can raise both unemployment and inflation.\n  - **Judgement:** the trade-off appears over short periods but fades over longer ones, so the choice depends on the time horizon.\n\n**Question 3** (a) 10 marks, (b) 15 marks\n- (a) Plan:\n  - **Definitions:** under floating rates, demand and supply in the currency market set the price; drivers include trade, capital flows, interest rates and speculation.\n  - **Diagram:** market diagram for the currency; show a shift in demand or supply and the new equilibrium.\n  - **Chain:** if foreign demand for exports or capital inflows rise, demand for the currency rises, so it appreciates until supply matches demand.\n- (b) Plan:\n  - **Example:** a country whose currency falls sharply after capital outflows.\n  - **Arguments:** a lower rate makes exports cheaper and imports dearer, which can cut unemployment; the current account improves if the Marshall-Lerner condition holds.\n  - **Evaluation:** imported inflation raises costs, and the J-curve means the current account may worsen first; firms may use capital instead of labour.\n  - **Judgement:** a lower rate helps unemployment and the current account only if elasticities are high and inflation stays contained; cover both, or the mark is capped at 9.',
      ru: 'Время: 1 ч 15 мин. Планируйте около пяти минут.\n\n**Вопрос 1** (a) 10 баллов, (b) 15 баллов\n- (a) План:\n  - **Определения:** внешний эффект (externality) — издержка или выгода для третьих лиц; торгуемые разрешения (tradeable permits) задают предел выбросов, а фирмы покупают и продают право на выброс.\n  - **Диаграмма:** диаграмма провала рынка для выбросов углерода или схема рынка разрешений; подпишите цену разрешения.\n  - **Цепочка:** государство устанавливает предел и раздаёт разрешения; фирмы, которые выбрасывают больше, должны покупать разрешения, поэтому загрязнители несут издержки; выбросы снижаются к общественно эффективному уровню по мере ужесточения предела.\n- (b) План:\n  - **Пример:** субсидии на электромобили или солнечные панели, которые применяются во многих странах.\n  - **Аргументы:** субсидия снижает стоимость чистых технологий и увеличивает их использование, исправляя недопроизводство, вызванное положительным внешним эффектом (positive externality).\n  - **Оценка:** субсидии выплачиваются из средств налогоплательщиков, а ответ объёма зависит от эластичностей; налоги или разрешения могут точнее нацеливаться на загрязнение.\n  - **Суждение:** субсидии могут помочь, но редко бывают лучшим единственным инструментом; их сочетание с ценой на углерод обычно эффективнее.\n\n**Вопрос 2** (a) 10 баллов, (b) 15 баллов\n- (a) План:\n  - **Определения:** индекс потребительских цен (CPI) отслеживает цены фиксированного набора товаров, который покупает среднее домохозяйство; инфляция — процентное изменение уровня цен.\n  - **Диаграмма:** не требуется.\n  - **Цепочка:** если траты домохозяйств различаются, средняя корзина искажает их инфляцию; если веса меняются медленно, новые товары и замещение упускаются; поэтому CPI может вводить в заблуждение.\n- (b) План:\n  - **Пример:** экономика, которая снизила безработицу за счёт быстрого роста спроса, а затем столкнулась с ростом зарплат и цен.\n  - **Аргументы:** вдоль краткосрочной кривой Филлипса (short-run Phillips curve) меньшая безработица сочетается с более высокой инфляцией, поэтому у политиков может быть выбор.\n  - **Оценка:** когда ожидания адаптируются, кривая становится вертикальной на уровне естественного уровня безработицы (natural rate), поэтому дополнительный спрос добавляет только инфляцию; шоки предложения могут поднимать и безработицу, и инфляцию.\n  - **Суждение:** компромисс проявляется на коротких периодах, но сходит на нет на более длинных, поэтому выбор зависит от горизонта планирования.\n\n**Вопрос 3** (a) 10 баллов, (b) 15 баллов\n- (a) План:\n  - **Определения:** плавающий валютный курс (floating exchange rate) задаётся спросом и предложением на валюту; факторы включают торговлю, потоки капитала, процентные ставки и спекуляции.\n  - **Диаграмма:** рынок валюты; покажите сдвиг спроса или предложения и новое равновесие.\n  - **Цепочка:** если иностранный спрос на экспорт или приток капитала растёт, спрос на валюту увеличивается, и она укрепляется, пока предложение не сравняется со спросом.\n- (b) План:\n  - **Пример:** страна, валюта которой резко падает после оттока капитала.\n  - **Аргументы:** более низкий курс делает экспорт дешевле, а импорт дороже, что может снизить безработицу; счёт текущих операций улучшается, если выполняется условие Маршалла–Лернера (Marshall-Lerner condition).\n  - **Оценка:** импортированная инфляция повышает издержки, а J-кривая (J-curve) означает, что счёт текущих операций может сначала ухудшиться; фирмы могут использовать капитал вместо труда.\n  - **Суждение:** более низкий курс помогает безработице и счёту текущих операций только при достаточно высоких эластичностях и сдерживаемой инфляции; раскройте оба эффекта, иначе балл ограничен 9.',
    },
  },
  {
    id: 'econ-p2-n23',
    subject: 'econ',
    paper: 'P2',
    session: 'N23',
    level: 'HL',
    files: [
      {
        kind: 'questions',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2023%20Examination%20Session/November%202023%20Examination%20Session/Individuals%20and%20societies/Economics_paper_2__HL.pdf',
      },
      {
        kind: 'markscheme',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2023%20Examination%20Session/November%202023%20Examination%20Session/Individuals%20and%20societies/Economics_paper_2__HL_markscheme.pdf',
      },
    ],
    minutes: 105,
    marks: 40,
    items: [
      {
        q: '1a(i)',
        marks: 2,
        command: 'Define',
        topicIds: [
          'policies-for-growth-and-development',
          'trade-protection',
        ],
      },
      {
        q: '1a(ii)',
        marks: 2,
        command: 'List',
        topicIds: [
          'measuring-development',
        ],
      },
      {
        q: '1b(i)',
        marks: 3,
        command: 'Calculate',
        topicIds: [
          'multiplier',
        ],
      },
      {
        q: '1b(ii)',
        marks: 2,
        command: 'Sketch',
        topicIds: [
          'monopoly-and-natural-monopoly',
        ],
      },
      {
        q: '1c',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'inequality-and-poverty',
        ],
      },
      {
        q: '1d',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'government-taxes-subsidies-price-controls',
        ],
      },
      {
        q: '1e',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'exchange-rates',
          'balance-of-payments',
        ],
      },
      {
        q: '1f',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'externalities',
        ],
      },
      {
        q: '1g',
        marks: 15,
        command: 'Evaluate',
        topicIds: [
          'policies-for-growth-and-development',
          'sustainable-development',
        ],
      },
      {
        q: '2a(i)',
        marks: 2,
        command: 'Define',
        topicIds: [
          'barriers-to-growth-and-development',
        ],
      },
      {
        q: '2a(ii)',
        marks: 2,
        command: 'Define',
        topicIds: [
          'asymmetric-information',
        ],
      },
      {
        q: '2b(i)',
        marks: 3,
        command: 'Calculate',
        topicIds: [
          'measuring-economic-activity',
          'measuring-development',
        ],
      },
      {
        q: '2b(ii)',
        marks: 2,
        command: 'Sketch',
        topicIds: [
          'ad-as-model-and-business-cycle',
        ],
      },
      {
        q: '2c',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'trade-protection',
          'benefits-of-trade',
        ],
      },
      {
        q: '2d',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'government-taxes-subsidies-price-controls',
          'equity-and-market-failure',
        ],
      },
      {
        q: '2e',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'externalities',
        ],
      },
      {
        q: '2f',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'measuring-economic-activity',
          'policies-for-growth-and-development',
        ],
      },
      {
        q: '2g',
        marks: 15,
        command: 'Evaluate',
        topicIds: [
          'policies-for-growth-and-development',
          'barriers-to-growth-and-development',
        ],
      },
    ],
  },
  {
    id: 'econ-p3-n23-q1',
    subject: 'econ',
    paper: 'P3',
    session: 'N23',
    level: 'HL',
    part: 'question-1',
    files: [
      {
        kind: 'questions',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2023%20Examination%20Session/November%202023%20Examination%20Session/Individuals%20and%20societies/Economics_paper_3__HL.pdf',
      },
      {
        kind: 'markscheme',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2023%20Examination%20Session/November%202023%20Examination%20Session/Individuals%20and%20societies/Economics_paper_3__HL_markscheme.pdf',
      },
    ],
    minutes: 60,
    marks: 30,
    items: [
      {
        q: '1a(i)',
        marks: 2,
        command: 'Define',
        topicIds: [
          'common-pool-resources',
        ],
      },
      {
        q: '1a(ii)',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'common-pool-resources',
          'externalities',
        ],
      },
      {
        q: '1a(iii)',
        marks: 3,
        command: 'Calculate',
        topicIds: [
          'price-elasticity-of-demand',
        ],
      },
      {
        q: '1a(iv)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'income-and-cross-elasticity',
        ],
      },
      {
        q: '1a(v)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'government-taxes-subsidies-price-controls',
        ],
      },
      {
        q: '1a(vi)',
        marks: 2,
        command: 'Explain',
        topicIds: [
          'fiscal-policy',
          'inequality-and-poverty',
        ],
      },
      {
        q: '1a(vii)',
        marks: 1,
        command: 'State',
        topicIds: [
          'common-pool-resources',
        ],
      },
      {
        q: '1a(viii)',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'common-pool-resources',
        ],
      },
      {
        q: '1b',
        marks: 10,
        command: 'Recommend',
        topicIds: [
          'common-pool-resources',
          'government-taxes-subsidies-price-controls',
        ],
      },
    ],
  },
  {
    id: 'econ-p3-n23-q2',
    subject: 'econ',
    paper: 'P3',
    session: 'N23',
    level: 'HL',
    part: 'question-2',
    files: [
      {
        kind: 'questions',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2023%20Examination%20Session/November%202023%20Examination%20Session/Individuals%20and%20societies/Economics_paper_3__HL.pdf',
      },
      {
        kind: 'markscheme',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2023%20Examination%20Session/November%202023%20Examination%20Session/Individuals%20and%20societies/Economics_paper_3__HL_markscheme.pdf',
      },
    ],
    minutes: 60,
    marks: 30,
    items: [
      {
        q: '2a(i)',
        marks: 3,
        command: 'Distinguish',
        topicIds: [
          'economic-integration',
        ],
      },
      {
        q: '2a(ii)',
        marks: 1,
        command: 'Outline',
        topicIds: [
          'economic-integration',
        ],
      },
      {
        q: '2a(iii)',
        marks: 1,
        command: 'Calculate',
        topicIds: [
          'macroeconomic-objectives',
        ],
      },
      {
        q: '2a(iv)',
        marks: 1,
        command: 'Calculate',
        topicIds: [
          'macroeconomic-objectives',
        ],
      },
      {
        q: '2a(v)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'macroeconomic-objectives',
        ],
      },
      {
        q: '2a(vi)',
        marks: 1,
        command: 'Calculate',
        topicIds: [
          'monetary-policy',
          'macroeconomic-objectives',
        ],
      },
      {
        q: '2a(vii)',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'macroeconomic-objectives',
        ],
      },
      {
        q: '2a(viii)',
        marks: 1,
        command: 'Calculate',
        topicIds: [
          'exchange-rates',
        ],
      },
      {
        q: '2a(ix)',
        marks: 2,
        command: 'Define',
        topicIds: [
          'fiscal-policy',
        ],
      },
      {
        q: '2a(x)',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'barriers-to-growth-and-development',
          'ad-as-model-and-business-cycle',
        ],
      },
      {
        q: '2b',
        marks: 10,
        command: 'Recommend',
        topicIds: [
          'policies-for-growth-and-development',
          'supply-side-policies',
          'barriers-to-growth-and-development',
        ],
      },
    ],
  },
  {
    id: 'econ-p1-m24-tz1',
    subject: 'econ',
    paper: 'P1',
    session: 'M24',
    level: 'HL',
    tz: 'TZ1',
    files: [
      {
        kind: 'questions',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2024%20Examination%20Session/May%202024%20Examination%20Session/Individuals%20and%20societies/Economics_paper_1__TZ1_HL.pdf',
      },
      {
        kind: 'markscheme',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2024%20Examination%20Session/May%202024%20Examination%20Session/Individuals%20and%20societies/Economics_paper_1__TZ1_HL_markscheme.pdf',
      },
    ],
    minutes: 75,
    marks: 25,
    items: [
      {
        q: '1a',
        marks: 10,
        command: 'Explain',
        topicIds: [
          'competitive-market-equilibrium',
        ],
      },
      {
        q: '1b',
        marks: 15,
        command: 'Evaluate',
        topicIds: [
          'critique-maximizing-behaviour',
        ],
      },
      {
        q: '2a',
        marks: 10,
        command: 'Explain',
        topicIds: [
          'multiplier',
          'fiscal-policy',
          'ad-as-model-and-business-cycle',
        ],
      },
      {
        q: '2b',
        marks: 15,
        command: 'Evaluate',
        topicIds: [
          'macroeconomic-objectives',
          'ad-as-model-and-business-cycle',
        ],
      },
      {
        q: '3a',
        marks: 10,
        command: 'Explain',
        topicIds: [
          'inequality-and-poverty',
          'sustainable-development',
          'common-pool-resources',
        ],
      },
      {
        q: '3b',
        marks: 15,
        command: 'Discuss',
        topicIds: [
          'policies-for-growth-and-development',
          'barriers-to-growth-and-development',
        ],
      },
    ],
    guide: {
      en: 'Time: 1 h 15 min. Plan for about five minutes.\n\n**Question 1** (a) 10 marks, (b) 15 marks\n\n- (a) Plan: Definitions: abnormal profit (total revenue above total cost, where total cost includes normal profit), normal profit, barriers to entry. Diagram: perfect competition diagram with a market panel and a firm panel; label price, output and average total cost; shade the abnormal profit area. Chain: if firms earn abnormal profit, then new firms enter; so market supply rises, the price falls and abnormal profit disappears in the long run.\n- (b) Plan: Example: a small family bakery that keeps prices low for loyal customers. Two points: a rational firm produces where $MR = MC$, and owners expect profit. Two evaluation points: managers may pursue market share, growth or satisficing; firms face uncertainty and cannot measure marginal values exactly. Judgement: profit is usually the aim, but the claim that it is always the aim is too strong.\n\n**Question 2** (a) 10 marks, (b) 15 marks\n\n- (a) Plan: Definitions: Keynesian multiplier (total rise in national income relative to the first injection), marginal propensity to consume (MPC) and to withdraw (MPW); formula $k = 1/MPW$. Diagram: AD/AS diagram with AD shifting right after the first rise in government spending and again through the multiplier rounds; label price level and real GDP. Chain: if government spending rises, then incomes rise and part is spent again, so AD rises in rounds; so real GDP grows by more than the first injection.\n- (b) Plan: Example: fiscal stimulus after the 2008 financial crisis, such as the 2009 package in the United States. Two points: faster growth can raise inflation when AD outruns long-run aggregate supply; growth can damage the environment and widen inequality. Two evaluation points: supply-side improvements shift LRAS right, so growth need not raise prices; growth can fund cleaner technology. Judgement: the view holds for demand-led growth near full employment, not for supply-led growth.\n\n**Question 3** (a) 10 marks, (b) 15 marks\n\n- (a) Plan: Definitions: poverty (too little income for basic needs), sustainability (meeting present needs without harming future generations), common pool resources (rival and non-excludable), human capital. Diagram: poverty cycle loop from low income to low saving and investment, then low productivity and back to low income; add overuse of a forest as a negative externality. Chain: if households are poor, then they overuse common forests for fuel; so natural capital falls and future income falls; so poverty persists and sustainability suffers.\n- (b) Plan: Example: a government program building rural roads and primary schools in a developing country. Two strengths: government can provide merit goods and infrastructure that markets under-provide, and redistribution such as cash transfers reduces poverty. Two limitations: government failure (corruption, poor targeting, crowding out of private investment) and budget constraints. Judgement: intervention works best when it fixes clear market failures and is combined with market-friendly reforms.',
      ru: 'Время: 1 ч 15 мин. Планируйте около пяти минут.\n\n**Вопрос 1** (a) 10 баллов, (b) 15 баллов\n\n- (a) План: Определения: сверхнормальная прибыль (abnormal profit) — выручка выше полных издержек, включающих нормальную прибыль; нормальная прибыль (normal profit); барьеры входа (barriers to entry). Диаграмма: диаграмма совершенной конкуренции (perfect competition) с панелью рынка и панелью фирмы; подписать цену, выпуск и средние общие издержки; заштриховать область сверхприбыли. Цепочка: если фирмы получают сверхприбыль, то входят новые фирмы; значит, предложение на рынке растет, цена падает и сверхприбыль исчезает в долгосрочном периоде.\n- (b) План: Пример: небольшая семейная пекарня, которая держит низкие цены для постоянных покупателей. Два аргумента: рациональная фирма выпускает товар, при котором $MR = MC$, а владельцы ожидают прибыль. Два оценочных довода: менеджеры могут стремиться к доле рынка, росту или удовлетворительному результату (satisficing); фирмы работают в условиях неопределенности и не могут точно измерить предельные величины. Суждение: прибыль обычно является целью, но утверждение, что она всегда главная цель, слишком сильное.\n\n**Вопрос 2** (a) 10 баллов, (b) 15 баллов\n\n- (a) План: Определения: мультипликатор Кейнса (Keynesian multiplier) — итоговый рост национального дохода относительно первоначальной инъекции (injection); предельная склонность к потреблению (marginal propensity to consume, MPC) и к изъятиям (marginal propensity to withdraw, MPW); формула $k = 1/MPW$. Диаграмма: диаграмма AD/AS, где AD сдвигается вправо после первоначального роста госрасходов и затем в раундах мультипликатора; подписать уровень цен и реальный ВВП. Цепочка: если госрасходы растут, то доходы растут и часть их тратится снова; значит, AD растет раундами; следовательно, реальный ВВП растет больше первоначальной инъекции.\n- (b) План: Пример: фискальное стимулирование после финансового кризиса 2008 года, например пакет 2009 года в США. Два аргумента: быстрый рост может вызвать инфляцию, когда совокупный спрос (AD) опережает долгосрочное совокупное предложение (long-run aggregate supply, LRAS); рост может ухудшить окружающую среду и усилить неравенство. Два оценочных довода: улучшения предложения сдвигают LRAS вправо, поэтому рост не обязательно повышает цены; рост может финансировать более чистые технологии. Суждение: утверждение верно для роста, движимого спросом, вблизи полной занятости, но не для роста, движимого предложением.\n\n**Вопрос 3** (a) 10 баллов, (b) 15 баллов\n\n- (a) План: Определения: бедность (poverty) — недостаток дохода для базовых потребностей; устойчивость (sustainability) — удовлетворение текущих потребностей без ущерба для будущих поколений; общие ресурсы (common pool resources) — соперничающие и неисключаемые ресурсы; человеческий капитал (human capital). Диаграмма: круг бедности (poverty cycle) в виде петли: низкий доход, низкие сбережения и инвестиции, низкая производительность, снова низкий доход; добавить чрезмерное использование леса как негативный внешний эффект. Цепочка: если домохозяйства бедны, то они чрезмерно используют общие леса для топлива; значит, природный капитал сокращается и будущий доход падает; следовательно, бедность сохраняется, а устойчивость страдает.\n- (b) План: Пример: государственная программа строительства сельских дорог и начальных школ в развивающейся стране. Две сильные стороны: государство может обеспечить мериторные блага (merit goods) и инфраструктуру, которые рынок предоставляет недостаточно; перераспределение, например денежные трансферты, снижает бедность. Два ограничения: провалы государства (government failure) — коррупция, плохой отбор получателей, вытеснение частных инвестиций (crowding out); бюджетные ограничения. Суждение: вмешательство работает лучше всего, когда устраняет явные провалы рынка и сочетается с рыночными реформами.',
    },
  },
  {
    id: 'econ-p1-m24-tz2',
    subject: 'econ',
    paper: 'P1',
    session: 'M24',
    level: 'HL',
    tz: 'TZ2',
    files: [
      {
        kind: 'questions',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2024%20Examination%20Session/May%202024%20Examination%20Session/Individuals%20and%20societies/Economics_paper_1__TZ2_HL.pdf',
      },
      {
        kind: 'markscheme',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2024%20Examination%20Session/May%202024%20Examination%20Session/Individuals%20and%20societies/Economics_paper_1__TZ2_HL_markscheme.pdf',
      },
    ],
    minutes: 75,
    marks: 25,
    items: [
      {
        q: '1a',
        marks: 10,
        command: 'Explain',
        topicIds: [
          'oligopoly-and-monopolistic-competition',
        ],
      },
      {
        q: '1b',
        marks: 15,
        command: 'Evaluate',
        topicIds: [
          'monopoly-and-natural-monopoly',
          'oligopoly-and-monopolistic-competition',
        ],
      },
      {
        q: '2a',
        marks: 10,
        command: 'Explain',
        topicIds: [
          'monetary-policy',
          'ad-as-model-and-business-cycle',
        ],
      },
      {
        q: '2b',
        marks: 15,
        command: 'Evaluate',
        topicIds: [
          'supply-side-policies',
          'macroeconomic-objectives',
        ],
      },
      {
        q: '3a',
        marks: 10,
        command: 'Explain',
        topicIds: [
          'policies-for-growth-and-development',
          'barriers-to-growth-and-development',
        ],
      },
      {
        q: '3b',
        marks: 15,
        command: 'Discuss',
        topicIds: [
          'policies-for-growth-and-development',
          'sustainable-development',
        ],
      },
    ],
    guide: {
      en: 'Time: 1 h 15 min. Plan for about five minutes.\n\n**Question 1** (a) 10 marks, (b) 15 marks\n\n- (a) Plan: Definitions: monopolistic competition (many firms, differentiated products, low barriers), abnormal profit, normal profit. Diagram: monopolistic competition diagram; in the short run price is above average total cost with abnormal profit shaded; in the long run demand shifts left and just touches average total cost. Chain: if firms earn abnormal profit, then new firms enter and take customers; so each firm\'s demand falls; so abnormal profit disappears in the long run.\n- (b) Plan: Example: a supplier of a patented drug or a single water or electricity utility. Two points: a monopoly produces less at a higher price than perfect competition, causing allocative inefficiency and a welfare loss; market power also reduces pressure to cut costs. Two evaluation points: economies of scale and natural monopoly can lower costs; abnormal profit can fund research and innovation. Judgement: power in a market harms welfare when it is unregulated and brings no efficiency gains, so a blanket claim is too strong.\n\n**Question 2** (a) 10 marks, (b) 15 marks\n\n- (a) Plan: Definitions: interest rate (cost of borrowing and reward for saving), consumption, investment, aggregate demand, equilibrium national income. Diagram: AD/AS diagram with AD shifting right after the fall in interest rates; upward-sloping SRAS; label the new equilibrium with higher real GDP and price level. Chain: if interest rates fall, then borrowing is cheaper and saving less rewarding; so consumption and investment rise; so AD increases and equilibrium national income rises.\n- (b) Plan: Example: privatization and labor market reforms in the UK in the 1980s. Two points: supply-side policies such as training, deregulation and tax incentives shift LRAS right, which can lower unemployment and inflation together; potential output and growth rise. Two evaluation points: these policies take years to work and do not fix demand-deficient unemployment; some measures can widen inequality, and in a recession demand-side measures may still be needed. Judgement: supply-side policies are essential for long-run growth but rarely enough alone.\n\n**Question 3** (a) 10 marks, (b) 15 marks\n\n- (a) Plan: Definitions: foreign aid (grants or loans from abroad), savings gap, foreign exchange gap, poverty cycle, developing country. Diagram: poverty cycle loop, with aid filling the savings and investment step; or an AD/AS diagram showing growth. Chain: if aid pays for schools, clinics and roads, then human capital and productive capacity rise; so growth becomes possible and the poverty cycle breaks; so incomes rise and inequality may fall.\n- (b) Plan: Example: a foreign carmaker building a factory in an export processing zone of a developing country. Two benefits: capital, technology and management skills arrive, and jobs and export earnings help close the foreign exchange gap. Two costs: profits are repatriated, so less income stays in the host country, and local firms face competition; workers and the environment may suffer. Judgement: inward FDI helps growth when governments regulate it well and build local links; otherwise the costs can outweigh the benefits.',
      ru: 'Время: 1 ч 15 мин. Планируйте около пяти минут.\n\n**Вопрос 1** (a) 10 баллов, (b) 15 баллов\n\n- (a) План: Определения: монополистическая конкуренция (monopolistic competition) — много фирм, дифференцированные продукты, низкие барьеры; сверхприбыль (abnormal profit); нормальная прибыль (normal profit). Диаграмма: диаграмма монополистической конкуренции; в краткосрочном периоде цена выше средних общих издержек, сверхприбыль заштрихована; в долгосрочном периоде спрос сдвигается влево и касается кривой средних общих издержек. Цепочка: если фирмы получают сверхприбыль, то входят новые фирмы и отбирают покупателей; спрос на продукцию каждой фирмы падает; значит, в долгосрочном периоде сверхприбыль исчезает.\n- (b) План: Пример: производитель запатентованного лекарства или единственный поставщик воды или электроэнергии. Два аргумента: монополия производит меньший выпуск по более высокой цене, чем совершенная конкуренция (perfect competition), что ведет к аллокативной неэффективности (allocative inefficiency) и потерям благосостояния (welfare loss); рыночная власть также снижает давление на сокращение издержек. Два оценочных довода: эффекты масштаба (economies of scale) и естественная монополия (natural monopoly) могут снижать издержки; сверхприбыль может финансировать исследования и инновации. Суждение: рыночная власть вредна, когда она не регулируется и не дает выигрыша в эффективности, поэтому общее утверждение слишком сильное.\n\n**Вопрос 2** (a) 10 баллов, (b) 15 баллов\n\n- (a) План: Определения: процентная ставка (interest rate) — цена заимствования и доход от сбережений; потребление (consumption); инвестиции (investment); совокупный спрос (aggregate demand, AD); равновесный национальный доход (equilibrium national income). Диаграмма: диаграмма AD/AS, где AD сдвигается вправо после снижения процентной ставки; краткосрочное совокупное предложение (SRAS) восходящее; подписать новое равновесие с более высоким реальным ВВП и уровнем цен. Цепочка: если процентная ставка падает, то заимствование дешевеет, а сбережения менее выгодны; значит, потребление и инвестиции растут; следовательно, AD и равновесный национальный доход увеличиваются.\n- (b) План: Пример: приватизация и реформы рынка труда в Великобритании в 1980-х годах. Два аргумента: меры политики предложения (supply-side policies), такие как профессиональное обучение, дерегулирование и налоговые стимулы, сдвигают долгосрочное совокупное предложение (LRAS) вправо; это может одновременно снизить безработицу и инфляцию, а потенциальный выпуск и рост возрастают. Два оценочных довода: эти меры действуют годами и не решают безработицу из-за недостатка спроса (demand-deficient unemployment); некоторые меры могут усилить неравенство, а в рецессии могут понадобиться меры спроса. Суждение: политика предложения необходима для долгосрочного роста, но редко достаточна сама по себе.\n\n**Вопрос 3** (a) 10 баллов, (b) 15 баллов\n\n- (a) План: Определения: иностранная помощь (foreign aid) — гранты или займы из-за рубежа; разрыв в сбережениях (savings gap); разрыв в валютных ресурсах (foreign exchange gap); круг бедности (poverty cycle); развивающаяся страна (developing country). Диаграмма: петля круга бедности, где помощь заполняет разрыв в сбережениях и инвестициях; либо диаграмма AD/AS, показывающая рост. Цепочка: если помощь финансирует школы, клиники и дороги, то растут человеческий капитал и производственные возможности; значит, рост становится возможным и круг бедности разрывается; следовательно, доходы растут, а неравенство может снизиться.\n- (b) План: Пример: иностранный автопроизводитель строит завод в экспортной зоне (export processing zone) развивающейся страны. Два преимущества: приходят капитал, технологии и управленческие навыки; создаются рабочие места, а экспортная выручка помогает закрыть разрыв в валютных ресурсах. Два недостатка: прибыль репатриируется (repatriation of profits), и часть дохода уходит из страны; местные фирмы сталкиваются с конкуренцией, а работники и окружающая среда могут страдать. Суждение: прямые иностранные инвестиции (foreign direct investment, FDI) помогают росту, если государство хорошо их регулирует и создает связи с местной экономикой; иначе издержки могут перевесить выгоды.',
    },
  },
  {
    id: 'econ-p2-m24-tz1',
    subject: 'econ',
    paper: 'P2',
    session: 'M24',
    level: 'SLHL',
    tz: 'TZ1',
    files: [
      {
        kind: 'questions',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2024%20Examination%20Session/May%202024%20Examination%20Session/Individuals%20and%20societies/Economics_paper_2__TZ1_HLSL.pdf',
      },
      {
        kind: 'markscheme',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2024%20Examination%20Session/May%202024%20Examination%20Session/Individuals%20and%20societies/Economics_paper_2__TZ1_HLSL_markscheme.pdf',
      },
    ],
    minutes: 105,
    marks: 40,
    items: [
      {
        q: '1a(i)',
        marks: 2,
        command: 'Define',
        topicIds: [
          'ad-as-model-and-business-cycle',
        ],
      },
      {
        q: '1a(ii)',
        marks: 2,
        command: 'Define',
        topicIds: [
          'balance-of-payments',
        ],
      },
      {
        q: '1b(i)',
        marks: 3,
        command: 'Calculate',
        topicIds: [
          'price-elasticity-of-demand',
        ],
      },
      {
        q: '1b(ii)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'balance-of-payments',
        ],
      },
      {
        q: '1c',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'ad-as-model-and-business-cycle',
          'monetary-policy',
        ],
      },
      {
        q: '1d',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'exchange-rates',
        ],
      },
      {
        q: '1e',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'economic-integration',
          'trade-protection',
        ],
      },
      {
        q: '1f',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'externalities',
          'government-taxes-subsidies-price-controls',
        ],
      },
      {
        q: '1g',
        marks: 15,
        command: 'Discuss',
        topicIds: [
          'exchange-rates',
          'balance-of-payments',
          'macroeconomic-objectives',
        ],
      },
      {
        q: '2a(i)',
        marks: 2,
        command: 'Define',
        topicIds: [
          'balance-of-payments',
        ],
      },
      {
        q: '2a(ii)',
        marks: 2,
        command: 'Define',
        topicIds: [
          'fiscal-policy',
        ],
      },
      {
        q: '2b(i)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'measuring-economic-activity',
        ],
      },
      {
        q: '2b(ii)',
        marks: 1,
        command: 'Calculate',
        topicIds: [
          'measuring-economic-activity',
        ],
      },
      {
        q: '2b(iii)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'income-and-cross-elasticity',
        ],
      },
      {
        q: '2c',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'ad-as-model-and-business-cycle',
        ],
      },
      {
        q: '2d',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'trade-protection',
          'government-taxes-subsidies-price-controls',
        ],
      },
      {
        q: '2e',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'government-taxes-subsidies-price-controls',
          'competitive-market-equilibrium',
        ],
      },
      {
        q: '2f',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'barriers-to-growth-and-development',
          'policies-for-growth-and-development',
        ],
      },
      {
        q: '2g',
        marks: 15,
        command: 'Evaluate',
        topicIds: [
          'inequality-and-poverty',
          'policies-for-growth-and-development',
          'fiscal-policy',
        ],
      },
    ],
    guide: {
      en: 'Time: 1 h 45 min.\n\n**Question 1**\n\n- **Part (b)(i), 3 marks: calculation.** Use $\\%\\Delta Q_d = PED \\times \\%\\Delta P$, then $Revenue = P \\times Q$ for the new price and quantity. Keep the PED sign from the paragraph named: a negative PED means quantity moves opposite to price. Illustrative example (not from the paper): price falls from 20 to 16, quantity 400, PED -0.5. Price change = -20.0%. Quantity change = -0.5 × -20.0 = +10.0%, so new quantity = 440. New revenue = 16 × 440 = 7040 (before: 20 × 400 = 8000). Check: PED = 10.0 / -20.0 = -0.5. Units: UK£, whole numbers. Common mistake: taking the percentage change from the new price.\n\n- **Part (b)(ii), 2 marks: calculation.** Use $CA = Goods + Services + Income + Transfers$ (CA: current account), so $Goods = CA - Services - Income - Transfers$. Read the other three balances from Table 2 with their signs; the shaded cell is the one to derive. Illustrative example: current account -40, services 70, income 8, transfers -6. Steps: -40 - 70 = -110; -110 - 8 = -118; -118 - (-6) = -112, a deficit (UK£ billion, whole numbers). Common mistake: subtracting a negative income or transfer.\n\n- **Part (g), 15 marks: plan.** Supporting point 1: Figure 1 shows the pound weakening overall, so exports become cheaper abroad and imports dearer; the low elasticities in Text A suggest the trade gain may be small. Supporting point 2: Text A expects depreciation to attract FDI and portfolio inflows (Table 2), which can finance the deficit without closing it. Evaluation 1 (short and long run): the J-curve means the balance may worsen first, and in the long run imported inputs raise costs and offset some gains. Evaluation 2 (stakeholders and size): exporters and firms receiving investment gain, while importers and households pay more; a large, lasting fall matters more than a small one. Judgement: the trend helps the balance slowly and partly, and it adds inflation, so the net effect is modest unless the fall is large.\n\n**Question 2**\n\n- **Part (b)(i), 2 marks: calculation.** Use $GDP = C + I + G + (X - M)$, so $M = X - (GDP - C - I - G)$. Read inputs from Table 5; the shaded cell is imports. Illustrative example: GDP 600, consumption 320, investment 90, government spending 110, exports 150. Steps: 600 - 320 = 280; 280 - 90 = 190; 190 - 110 = 80 (net exports); 150 - 80 = 70 (imports, PHP billion). Common mistake: adding net exports to GDP.\n\n- **Part (b)(ii), 1 mark: calculation.** Use $NIA = GNI - GDP$ (net income from abroad), with both values from Table 5. Illustrative example: GNI 540, GDP 500, so 540 - 500 = 40 (PHP billion). A positive value means net receipts from abroad. Common mistake: reversing the subtraction.\n\n- **Part (b)(iii), 2 marks: calculation.** Use $YED = \\%\\Delta Q_d / \\%\\Delta Y$, with both changes measured from the starting values. Read the figures from the stem. Illustrative example: quantity falls from 60 to 57, income rises from 2000 to 2200. $\\%\\Delta Q_d = -5.0\\%$ and $\\%\\Delta Y = 10.0\\%$, so YED = -5.0 / 10.0 = -0.50, rounded to 2 decimal places. A negative YED means an inferior good for this household. Common mistake: using the new value as the base.\n\n- **Part (g), 15 marks: plan.** Supporting point 1: taxes on tobacco and alcohol (Text E) raise revenue, and cash transfers tied to schooling and health checks build human capital; Table 4 shows falling absolute poverty and a lower Gini coefficient. Supporting point 2: ODA-funded training and infrastructure (Text F and Figure 2) link poor households to jobs and services. Evaluation 1 (short and long run): transfers cut poverty quickly but need funding; skills and infrastructure take years; the informal economy and disaster risk (Text D) limit reach. Evaluation 2 (stakeholders and size): the taxes weigh more on low-income consumers; transfers cost little relative to output. Judgement: the mix likely cuts poverty faster than inequality; lasting progress needs formal jobs.',
      ru: 'Время: 1 ч 45 мин.\n\n**Вопрос 1**\n\n- **Часть (b)(i), 3 балла: расчёт.** Используйте $\\%\\Delta Q_d = PED \\times \\%\\Delta P$, затем $Revenue = P \\times Q$ для новой цены и нового количества. Сохраняйте знак эластичности спроса по цене (price elasticity of demand, PED) из абзаца текста, который назван в вопросе: отрицательное значение означает, что количество движется в сторону, противоположную цене. Иллюстративный пример (не из экзамена): цена падает с 20 до 16, количество 400, PED -0.5. Изменение цены = -20.0%. Изменение количества = -0.5 × -20.0 = +10.0%, поэтому новое количество = 440. Новая выручка = 16 × 440 = 7040 (до изменения: 20 × 400 = 8000). Проверка: PED = 10.0 / -20.0 = -0.5. Единицы: UK£, целые числа. Типичная ошибка: брать процентное изменение от новой цены.\n\n- **Часть (b)(ii), 2 балла: расчёт.** Используйте $CA = Goods + Services + Income + Transfers$, откуда $Goods = CA - Services - Income - Transfers$. Остальные три сальдо берите из Table 2 со знаками; заштрихованная ячейка — та, которую нужно найти. Иллюстративный пример: текущий счёт (current account) -40, услуги 70, первичные доходы (income) 8, трансферты (transfers) -6. Шаги: -40 - 70 = -110; -110 - 8 = -118; -118 - (-6) = -112, дефицит (UK£ billion, целые числа). Типичная ошибка: вычитать отрицательный доход или трансферт, что на самом деле их прибавляет.\n\n- **Часть (g), 15 баллов: план.** Опорный довод 1: Figure 1 показывает общее ослабление фунта, поэтому экспорт становится дешевле за рубежом, а импорт дороже; низкие эластичности в Text A говорят, что выигрыш торгового баланса может быть небольшим. Опорный довод 2: Text A ожидает, что обесценение (depreciation) привлечёт прямые иностранные инвестиции (foreign direct investment, FDI) и портфельные инвестиции (portfolio investment); Table 2 показывает эти потоки. Они могут финансировать дефицит, но не устраняют его. Оценка 1 (короткий и длинный периоды): J-кривая (J-curve) означает, что баланс сначала может ухудшиться; в длинном периоде импортные ресурсы повышают издержки и съедают часть выигрыша. Оценка 2 (заинтересованные стороны и масштаб): экспортёры и фирмы, получающие инвестиции, выигрывают, а импортёры и домохозяйства платят больше; большое и устойчивое снижение важнее небольшого. Вывод: тенденция помогает балансу медленно и лишь частично и добавляет инфляцию, поэтому чистый эффект умеренный, если снижение не большое и не устойчивое.\n\n**Вопрос 2**\n\n- **Часть (b)(i), 2 балла: расчёт.** Используйте $GDP = C + I + G + (X - M)$, откуда $M = X - (GDP - C - I - G)$. Значения ВВП (gross domestic product, GDP) и компонентов берите из Table 5; заштрихованная ячейка — импорт. Иллюстративный пример: ВВП 600, потребление (consumption) 320, инвестиции 90, государственные расходы 110, экспорт 150. Шаги: 600 - 320 = 280; 280 - 90 = 190; 190 - 110 = 80 (чистый экспорт); 150 - 80 = 70 (импорт, PHP billion). Проверка: 320 + 90 + 110 + 150 - 70 = 600. Типичная ошибка: прибавлять чистый экспорт к ВВП.\n\n- **Часть (b)(ii), 1 балл: расчёт.** Используйте $NIA = GNI - GDP$, где NIA — чистый доход из-за рубежа (net income from abroad), а GNI — валовой национальный доход (gross national income). Оба значения берите из Table 5. Иллюстративный пример: GNI 540, ВВП 500, поэтому 540 - 500 = 40 (PHP billion). Положительное значение означает, что доход, полученный из-за рубежа, больше дохода, выплаченного за рубеж. Типичная ошибка: вычитание в обратном порядке, которое меняет знак.\n\n- **Часть (b)(iii), 2 балла: расчёт.** Используйте $YED = \\%\\Delta Q_d / \\%\\Delta Y$; оба изменения считаются от исходных значений. Количество и доход до и после изменения берите из условия. Иллюстративный пример (не из экзамена): количество падает с 60 до 57, доход растёт с 2000 до 2200. $\\%\\Delta Q_d = -5.0\\%$ и $\\%\\Delta Y = 10.0\\%$, поэтому YED = -5.0 / 10.0 = -0.50, округлено до двух знаков после запятой. Отрицательная эластичность спроса по доходу (income elasticity of demand, YED) означает товар низшей категории (inferior good) для этого домохозяйства. Типичная ошибка: брать новое значение за базу.\n\n- **Часть (g), 15 баллов: план.** Опорный довод 1: налоги на табак и алкоголь (Text E) и денежные переводы, связанные с посещаемостью школы и медосмотрами, пополняют бюджет и развивают человеческий капитал (human capital); Table 4 показывает снижение абсолютной бедности и более низкий коэффициент Джини (Gini coefficient). Опорный довод 2: обучение и инфраструктура, финансируемые официальной помощью развитию (official development assistance, ODA) (Text F и Figure 2), создают рабочие места и связывают бедные домохозяйства с услугами. Оценка 1 (короткий и длинный периоды): переводы быстро снижают бедность, но требуют постоянного финансирования, а навыки и инфраструктура меняют доходы годами; неформальная экономика (informal economy) и риск стихийных бедствий (Text D) ограничивают охват. Оценка 2 (заинтересованные стороны и масштаб): налоги сильнее бьют по малообеспеченным потребителям, а переводы стоят немного относительно ВВП; правила адресности решают, кто выигрывает. Вывод: сочетание мер, вероятно, быстрее сократит бедность, чем неравенство, а устойчивый прогресс зависит от формальных рабочих мест.',
    },
  },
  {
    id: 'econ-p2-m24-tz2',
    subject: 'econ',
    paper: 'P2',
    session: 'M24',
    level: 'SLHL',
    tz: 'TZ2',
    files: [
      {
        kind: 'questions',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2024%20Examination%20Session/May%202024%20Examination%20Session/Individuals%20and%20societies/Economics_paper_2__TZ2_HLSL.pdf',
      },
      {
        kind: 'markscheme',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2024%20Examination%20Session/May%202024%20Examination%20Session/Individuals%20and%20societies/Economics_paper_2__TZ2_HLSL_markscheme.pdf',
      },
    ],
    minutes: 105,
    marks: 40,
    items: [
      {
        q: '1a(i)',
        marks: 2,
        command: 'Define',
        topicIds: [
          'macroeconomic-objectives',
        ],
      },
      {
        q: '1a(ii)',
        marks: 2,
        command: 'Define',
        topicIds: [
          'balance-of-payments',
        ],
      },
      {
        q: '1b(i)',
        marks: 3,
        command: 'Calculate',
        topicIds: [
          'price-elasticity-of-demand',
        ],
      },
      {
        q: '1b(ii)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'balance-of-payments',
        ],
      },
      {
        q: '1c',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'ad-as-model-and-business-cycle',
          'supply-side-policies',
        ],
      },
      {
        q: '1d',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'exchange-rates',
        ],
      },
      {
        q: '1e',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'economic-integration',
          'trade-protection',
        ],
      },
      {
        q: '1f',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'externalities',
          'government-taxes-subsidies-price-controls',
        ],
      },
      {
        q: '1g',
        marks: 15,
        command: 'Discuss',
        topicIds: [
          'exchange-rates',
          'balance-of-payments',
          'macroeconomic-objectives',
        ],
      },
      {
        q: '2a(i)',
        marks: 2,
        command: 'Define',
        topicIds: [
          'inequality-and-poverty',
        ],
      },
      {
        q: '2a(ii)',
        marks: 2,
        command: 'Define',
        topicIds: [
          'exchange-rates',
        ],
      },
      {
        q: '2b(i)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'measuring-economic-activity',
        ],
      },
      {
        q: '2b(ii)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'income-and-cross-elasticity',
        ],
      },
      {
        q: '2b(iii)',
        marks: 1,
        command: 'Identify',
        topicIds: [
          'income-and-cross-elasticity',
        ],
      },
      {
        q: '2c',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'ad-as-model-and-business-cycle',
        ],
      },
      {
        q: '2d',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'trade-protection',
        ],
      },
      {
        q: '2e',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'exchange-rates',
          'trade-protection',
        ],
      },
      {
        q: '2f',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'government-taxes-subsidies-price-controls',
          'competitive-market-equilibrium',
        ],
      },
      {
        q: '2g',
        marks: 15,
        command: 'Evaluate',
        topicIds: [
          'inequality-and-poverty',
          'policies-for-growth-and-development',
        ],
      },
    ],
    guide: {
      en: 'Time: 1 h 45 min.\n\n**Question 1**\n\n- **Part (b)(i), 3 marks: calculation.** Use $\\%\\Delta Q_d = PED \\times \\%\\Delta P$, then $Revenue = P \\times Q$. Keep the PED sign from the paragraph named, and decide first whether demand is elastic: a price cut raises revenue only when demand is elastic. Illustrative example (not from the paper): price falls from 30 to 24, quantity 100, PED -2.0. Price change = -20.0%. Quantity change = -2.0 × -20.0 = +40.0%, so new quantity = 140. New revenue = 24 × 140 = 3360 (before: 30 × 100 = 3000). Check: PED = 40.0 / -20.0 = -2.0. Units: UK£, whole numbers. Common mistake: taking the percentage change from the new price.\n\n- **Part (b)(ii), 2 marks: calculation.** Use $Services = CA - Goods - Income - Transfers$ (CA: current account), with the balances from Table 2 and their signs. The shaded cell is the one to derive. Illustrative example: current account -40, goods -60, income 10, transfers -8. Steps: -40 - (-60) = 20; 20 - 10 = 10; 10 - (-8) = 18, so services = 18 (UK£ billion). Common mistake: treating a negative goods balance as positive.\n\n- **Part (g), 15 marks: plan.** Supporting point 1: Figure 1 shows an overall weakening of the pound, so exports are cheaper abroad and imports dearer; the low elasticities in Text A suggest the trade gain may be small. Supporting point 2: Text A expects depreciation to draw in FDI and portfolio inflows (Table 2 gives these flows), which can finance the deficit without closing it. Evaluation 1 (short and long run): the J-curve means the balance may worsen first; in the long run, imported components raise costs and offset some gains. Evaluation 2 (stakeholders and size): exporters and firms receiving investment gain, while importers and households pay more; a large, lasting fall matters more than a small one. Judgement: the trend helps the balance slowly and partly, and it adds inflation, so the net effect is modest unless the fall is large and persistent.\n\n**Question 2**\n\n- **Part (b)(i), 2 marks: calculation.** Use $C = GDP - I - G - NX$, where $NX = X - M$. Read GDP and the components from Table 5; the shaded cell is consumption. Illustrative example: GDP 700, investment 120, government spending 130, exports 200, imports 260. Steps: 200 - 260 = -60 (net exports); 700 - 120 = 580; 580 - 130 = 450; 450 - (-60) = 510 (PHP billion). Check: 510 + 120 + 130 + 200 - 260 = 700. Common mistake: subtracting a negative net exports figure, which in fact adds it back.\n\n- **Part (b)(ii), 2 marks: calculation.** Use $YED = \\%\\Delta Q_d / \\%\\Delta Y$. Illustrative example (not from the paper): quantity rises from 50 to 52 (+4.0%), income rises from 1000 to 1100 (+10.0%). YED = 4.0 / 10.0 = 0.40, rounded to 2 decimal places. A positive YED means a normal good, which is the sign you need for the next part. Common mistake: using the new value as the base for the percentage change.\n\n- **Part (g), 15 marks: plan.** Supporting point 1: cash payments made to mothers when children attend school and get health checks (Text E), and the shift of workers from farming into higher-wage jobs (Text D), reduce poverty and build human capital. Supporting point 2: ODA-funded training and infrastructure (Text F) improve access to jobs and services in priority sectors. Evaluation 1 (short and long run): transfers and tax changes work quickly but need funding, while skills and infrastructure take years; disaster risk and the informal economy limit the gains. Evaluation 2 (stakeholders and size): the rice tariff raises food prices for poor households, and a higher minimum fare protects drivers but costs passengers; the design of each policy decides who benefits. Judgement: the policy mix is likely to cut poverty more than inequality for now, and long-run success depends on formal employment.',
      ru: 'Время: 1 ч 45 мин.\n\n**Вопрос 1**\n\n- **Часть (b)(i), 3 балла: расчёт.** Используйте $\\%\\Delta Q_d = PED \\times \\%\\Delta P$, затем $Revenue = P \\times Q$. Сохраняйте знак PED из абзаца текста, который назван в вопросе, и сначала решите, эластичен ли спрос: снижение цены повышает выручку только при эластичном спросе. Иллюстративный пример (не из экзамена): цена падает с 30 до 24, количество 100, PED -2.0. Изменение цены = -20.0%. Изменение количества = -2.0 × -20.0 = +40.0%, поэтому новое количество = 140. Новая выручка = 24 × 140 = 3360 (до изменения: 30 × 100 = 3000). Проверка: PED = 40.0 / -20.0 = -2.0. Единицы: UK£, целые числа. Типичная ошибка: брать процентное изменение от новой цены.\n\n- **Часть (b)(ii), 2 балла: расчёт.** Используйте $Services = CA - Goods - Income - Transfers$, с сальдо из Table 2 и их знаками. Заштрихованная ячейка — та, которую нужно найти. Иллюстративный пример: текущий счёт (current account) -40, товары (goods) -60, доход (income) 10, трансферты (transfers) -8. Шаги: -40 - (-60) = 20; 20 - 10 = 10; 10 - (-8) = 18, поэтому услуги = 18 (UK£ billion). Типичная ошибка: считать отрицательное сальдо товаров положительным.\n\n- **Часть (g), 15 баллов: план.** Опорный довод 1: Figure 1 показывает общее ослабление фунта, поэтому экспорт дешевеет за рубежом, а импорт дорожает; низкие эластичности в Text A говорят, что выигрыш торгового баланса может быть небольшим. Опорный довод 2: Text A ожидает, что обесценение (depreciation) привлечёт прямые иностранные инвестиции (foreign direct investment, FDI) и портфельные притоки (portfolio inflows); Table 2 показывает эти потоки. Они могут финансировать дефицит, но не закрывают его. Оценка 1 (короткий и длинный периоды): J-кривая (J-curve) означает, что баланс может сначала ухудшиться; в длинном периоде импортные компоненты повышают издержки и частично съедают выигрыш. Оценка 2 (заинтересованные стороны и масштаб): экспортёры и фирмы, получающие инвестиции, выигрывают, а импортёры и домохозяйства платят больше; большое и устойчивое снижение важнее небольшого. Вывод: тенденция помогает балансу медленно и частично и добавляет инфляцию, поэтому чистый эффект умеренный, если снижение не большое и не устойчивое.\n\n**Вопрос 2**\n\n- **Часть (b)(i), 2 балла: расчёт.** Используйте $C = GDP - I - G - NX$, где $NX = X - M$. Значения ВВП и компонентов берите из Table 5; заштрихованная ячейка — потребление. Иллюстративный пример: ВВП 700, инвестиции 120, государственные расходы 130, экспорт 200, импорт 260. Шаги: 200 - 260 = -60 (чистый экспорт); 700 - 120 = 580; 580 - 130 = 450; 450 - (-60) = 510 (PHP billion). Проверка: 510 + 120 + 130 + 200 - 260 = 700. Типичная ошибка: вычитать отрицательный чистый экспорт, что на самом деле его прибавляет.\n\n- **Часть (b)(ii), 2 балла: расчёт.** Используйте $YED = \\%\\Delta Q_d / \\%\\Delta Y$. Иллюстративный пример (не из экзамена): количество растёт с 50 до 52 (+4.0%), доход растёт с 1000 до 1100 (+10.0%). YED = 4.0 / 10.0 = 0.40, округлено до двух знаков после запятой. Положительная эластичность означает товар нормальной категории (normal good); именно этот знак нужен в следующей части. Типичная ошибка: брать новое значение за базу процентного изменения.\n\n- **Часть (g), 15 баллов: план.** Опорный довод 1: денежные переводы матерям, связанные с посещаемостью школы и медосмотрами (Text E), и переход работников от сельского хозяйства к более оплачиваемым работам (Text D) снижают бедность и развивают человеческий капитал (human capital). Опорный довод 2: обучение и инфраструктура, финансируемые ODA (Text F), улучшают доступ к работе и услугам в приоритетных секторах. Оценка 1 (короткий и длинный периоды): переводы и налоговые изменения работают быстро, но требуют финансирования, а навыки и инфраструктура меняют доходы годами; риск стихийных бедствий и неформальная экономика (informal economy) ограничивают выгоды. Оценка 2 (заинтересованные стороны и масштаб): пошлина на рис повышает цены на продукты для бедных домохозяйств, а повышенный минимальный тариф защищает водителей, но дорожает для пассажиров; результат каждой меры зависит от её устройства. Вывод: сочетание мер, вероятно, быстрее сократит бедность, чем неравенство, а долгосрочный успех зависит от формальной занятости.',
    },
  },
  {
    id: 'econ-p3-m24-q1',
    subject: 'econ',
    paper: 'P3',
    session: 'M24',
    level: 'HL',
    part: 'question-1',
    files: [
      {
        kind: 'questions',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2024%20Examination%20Session/May%202024%20Examination%20Session/Individuals%20and%20societies/Economics_paper_3__HL.pdf',
      },
      {
        kind: 'markscheme',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2024%20Examination%20Session/May%202024%20Examination%20Session/Individuals%20and%20societies/Economics_paper_3__HL_markscheme.pdf',
      },
    ],
    minutes: 60,
    marks: 30,
    items: [
      {
        q: '1a(i)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'balance-of-payments',
        ],
      },
      {
        q: '1a(ii)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'balance-of-payments',
        ],
      },
      {
        q: '1a(iii)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'price-elasticity-of-demand',
        ],
      },
      {
        q: '1a(iv)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'price-elasticity-of-demand',
        ],
      },
      {
        q: '1a(v)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'competitive-market-equilibrium',
          'benefits-of-trade',
        ],
      },
      {
        q: '1a(vi)',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'trade-protection',
          'government-taxes-subsidies-price-controls',
        ],
      },
      {
        q: '1a(vii)',
        marks: 2,
        command: 'Define',
        topicIds: [
          'common-pool-resources',
        ],
      },
      {
        q: '1a(viii)',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'externalities',
        ],
      },
      {
        q: '1b',
        marks: 10,
        command: 'Recommend',
        topicIds: [
          'externalities',
          'government-taxes-subsidies-price-controls',
        ],
      },
    ],
    guide: {
      en: 'Time for this question in the mock: 60 minutes. The official paper is 1 h 45 min for both questions.\n\n**Question 1**\n\n- **Part (a)(i), 2 marks: calculation.** Formula: $CA = X - M + NI + NT$, where X - M is goods and services, NI net income, NT net transfers. Read Table 1, Q2, keeping printed signs. Units: USD million. Example (illustrative): 1420 - 960 + (-150) + (-20) = 290. Mistake: dropping a minus sign.\n- **Part (a)(ii), 2 marks: calculation.** Formula: $\\Delta R = FA - OB - PI - FDI$, using the financial account balance and Table 1, Q4. Positive means reserves fell; negative means they rose. Example (illustrative): 900 - 300 = 600; 600 - 200 = 400; 400 - (-100) = 500, so reserves fell. Mistake: ignoring a sign.\n- **Part (a)(iii), 2 marks: calculation.** Spending = price × domestic quantity (Figure 1) at each price; change = after minus before. Example (illustrative): 4.0 × 300 = 1200 and 6.0 × 180 = 1080; 1080 - 1200 = -120 USD million. Mistake: reading supply.\n- **Part (a)(iv), 2 marks: calculation.** Formula: $PED = \\%\\Delta Q / \\%\\Delta P$, each change being $(new - old) / old \\times 100$, with values from Figure 1. Example (illustrative): quantity 400 to 340 gives $\\%\\Delta Q = -15.0$; price 20 to 24 gives $\\%\\Delta P = 20.0$; PED = -15.0 / 20.0 = -0.75. Mistake: inverting the fraction.\n- **Part (a)(v), 2 marks: calculation.** Social surplus = consumer plus producer surplus; each is a triangle, base × height / 2, at the new price. Heights: choke price minus new price (consumer); new price minus supply intercept (producer). Example (illustrative): 60 × 4 / 2 = 120; 640 × 5.5 / 2 = 1760. Add them. Mistake: using a rectangle.\n- **Part (b), 10 marks: plan.** Policy: a tax or antibiotic rules for salmon farms. Support 1: farms impose costs on other ocean users and health services (text data). Support 2: the ocean is a common access resource; quotas or property rights address overuse. Evaluate: a tax acts quickly but is hard to size; rules take time to monitor. Judgement: name the policy and its limit.',
      ru: 'Время на этот вопрос в моке: 60 минут. Штатный пейпер — 1 ч 45 мин на оба вопроса.\n\n**Вопрос 1**\n\n- **Часть (a)(i), 2 балла: расчёт.** Счёт текущих операций (current account): $CA = X - M + NI + NT$, где X - M — товары и услуги, NI — чистый доход (net income), NT — чистые трансферты (net transfers). Таблица 1, столбец Q2, знаки как в таблице. Единицы: млн USD. Пример (условный): 1420 - 960 + (-150) + (-20) = 290. Ошибка: потеря знака минус.\n- **Часть (a)(ii), 2 балла: расчёт.** Формула: $\\Delta R = FA - OB - PI - FDI$, где FA — сальдо финансового счёта (financial account balance) из вопроса, OB — официальные заимствования (official borrowing), PI — портфельные инвестиции (portfolio investment), FDI — прямые иностранные инвестиции (foreign direct investment); строки Q4 из таблицы 1. Положительный результат — резервные активы (reserve assets) снизились; отрицательный — выросли. Пример (условный): 900 - 300 = 600; 600 - 200 = 400; 400 - (-100) = 500, значит резервы снизились. Ошибка: игнорирование знака.\n- **Часть (a)(iii), 2 балла: расчёт.** Расходы = цена × количество на кривой внутреннего спроса рисунка 1 при каждой цене; изменение = после минус до. Пример (условный): 4.0 × 300 = 1200 и 6.0 × 180 = 1080, значит изменение 1080 - 1200 = -120 млн USD. Ошибка: взять предложение.\n- **Часть (a)(iv), 2 балла: расчёт.** Формула: $PED = \\%\\Delta Q / \\%\\Delta P$, где каждое изменение равно $(new - old) / old \\times 100$; величины берутся с рисунка 1. Пример (условный): количество 400 → 340 даёт $\\%\\Delta Q = -15.0$; цена 20 → 24 даёт $\\%\\Delta P = 20.0$; PED = -15.0 / 20.0 = -0.75. Ошибка: перевёрнутая дробь.\n- **Часть (a)(v), 2 балла: расчёт.** Общественный излишек (social surplus) = излишек потребителя + излишек производителя; каждый — треугольник: основание × высота / 2, при новой цене. Высоты: цена насыщения (choke price) минус новая цена (потребитель); новая цена минус цена начала предложения (производитель). Пример (условный): 60 × 4 / 2 = 120; 640 × 5.5 / 2 = 1760. Сложите две площади. Ошибка: формула прямоугольника.\n- **Часть (b), 10 баллов: план.** Мера: налог или правила по антибиотикам на фермах. Довод 1: фермы навязывают издержки другим пользователям океана и системе здравоохранения; опирайтесь на данные текста. Довод 2: океан — общий ресурс свободного доступа (common access resource), поэтому квоты или права собственности ограничивают перелов. Оценка: налог действует быстро, но его трудно подобрать; правила требуют времени на контроль. Вывод: назовите меру и условие, при котором лучше другая.',
    },
  },
  {
    id: 'econ-p3-m24-q2',
    subject: 'econ',
    paper: 'P3',
    session: 'M24',
    level: 'HL',
    part: 'question-2',
    files: [
      {
        kind: 'questions',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2024%20Examination%20Session/May%202024%20Examination%20Session/Individuals%20and%20societies/Economics_paper_3__HL.pdf',
      },
      {
        kind: 'markscheme',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2024%20Examination%20Session/May%202024%20Examination%20Session/Individuals%20and%20societies/Economics_paper_3__HL_markscheme.pdf',
      },
    ],
    minutes: 60,
    marks: 30,
    items: [
      {
        q: '2a(i)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'measuring-economic-activity',
        ],
      },
      {
        q: '2a(ii)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'macroeconomic-objectives',
        ],
      },
      {
        q: '2a(iii)',
        marks: 2,
        command: 'Outline',
        topicIds: [
          'measuring-economic-activity',
          'measuring-development',
        ],
      },
      {
        q: '2a(iv)',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'measuring-development',
          'sustainable-development',
          'inequality-and-poverty',
        ],
      },
      {
        q: '2a(v)',
        marks: 2,
        command: 'Outline',
        topicIds: [
          'monetary-policy',
        ],
      },
      {
        q: '2a(vi)',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'exchange-rates',
        ],
      },
      {
        q: '2a(vii)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'exchange-rates',
        ],
      },
      {
        q: '2a(viii)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'government-taxes-subsidies-price-controls',
        ],
      },
      {
        q: '2b',
        marks: 10,
        command: 'Recommend',
        topicIds: [
          'monetary-policy',
          'fiscal-policy',
        ],
      },
    ],
    guide: {
      en: 'Time for this question in the mock: 60 minutes. The official paper is 1 h 45 min for both questions.\n\n**Question 2**\n\n- **Part (a)(i), 2 marks: calculation.** Real GDP = nominal GDP × 100 / deflator; real GDP per capita = real GDP / population, using Table 2 for the year. Billion divided by million gives thousands, so multiply by 1000 for TRY. Example (illustrative): 4680 × 100 / 156.0 = 3000; 3000 / 72.0 = 41.667 thousand; 41.667 × 1000 = 41667 TRY. Mistake: using nominal GDP.\n- **Part (a)(ii), 2 marks: calculation.** Formula: $(I_1 - I_0) / I_0 \\times 100$, where I is the CPI for this year and last year, from Table 2. Example (illustrative): (330.0 - 200.0) / 200.0 × 100 = 65.0, because 330.0 / 200.0 = 1.65. Mistake: writing 1.65 instead of 65.0.\n- **Part (a)(vii), 2 marks: calculation.** Price in EUR = price in TRY / rate (TRY per EUR) for the month in the question, from Table 5. No tax is added. Example (illustrative): 64000 / 15.5 = 4129.03 EUR. Mistake: multiplying by the rate.\n- **Part (a)(viii), 2 marks: calculation.** Tax = price with tax × r / (1 + r), with r as a decimal. Example (illustrative, r = 0.2): 7200 / 1.2 = 6000 before tax; tax = 0.2 × 6000 = 1200 EUR. Mistake: 0.2 × 7200 = 1440 applies the rate to the tax-inclusive price.\n- **Part (b), 10 marks: plan.** Recommend tighter monetary policy (higher interest rates) to support the currency, supported by fiscal restraint. Support 1: a weaker currency raises import prices, and the text links the currency\'s fall to rising prices. Support 2: higher government spending and transfers add to demand, so restraint targets demand-pull inflation. Evaluate: higher rates cut inflation sooner but raise borrowing costs and slow growth; fiscal cuts act more slowly and may hit poorer households. Stakeholders: savers gain, while indebted firms and households lose. Judgement: state the policy and the condition that would change your choice.',
      ru: 'Время на этот вопрос в моке: 60 минут. Штатный пейпер — 1 ч 45 мин на оба вопроса.\n\n**Вопрос 2**\n\n- **Часть (a)(i), 2 балла: расчёт.** Реальный ВВП = номинальный ВВП × 100 / дефлятор (GDP deflator); реальный ВВП на душу = реальный ВВП / население; данные таблицы 2 за нужный год. Миллиарды, делённые на миллионы, дают тысячи, поэтому умножьте на 1000 для TRY. Пример (условный): 4680 × 100 / 156.0 = 3000; 3000 / 72.0 = 41.667 тыс.; 41.667 × 1000 = 41667 TRY. Ошибка: номинальный ВВП вместо реального.\n- **Часть (a)(ii), 2 балла: расчёт.** Формула: $(I_1 - I_0) / I_0 \\times 100$, где I — индекс потребительских цен (consumer price index, CPI) за этот и прошлый год из таблицы 2. Пример (условный): (330.0 - 200.0) / 200.0 × 100 = 65.0, так как 330.0 / 200.0 = 1.65. Ошибка: написать 1.65 вместо 65.0.\n- **Часть (a)(vii), 2 балла: расчёт.** Цена в EUR = цена в TRY / курс (TRY за EUR) за месяц из вопроса, таблица 5. Налог не добавляется. Пример (условный): 64000 / 15.5 = 4129.03 EUR. Ошибка: умножение на курс.\n- **Часть (a)(viii), 2 балла: расчёт.** Налог = цена с налогом × r / (1 + r), где r — ставка в виде десятичной дроби. Пример (условный, r = 0.2): 7200 / 1.2 = 6000 без налога; налог = 0.2 × 6000 = 1200 EUR. Ошибка: 0.2 × 7200 = 1440 применяет ставку к цене с налогом.\n- **Часть (b), 10 баллов: план.** Рекомендуйте более жёсткую денежную политику (повышение процентных ставок), которая поддерживает валюту, с бюджетной сдержанностью как поддержкой. Довод 1: ослабление валюты повышает цены импорта, а текст связывает падение курса с ростом цен. Довод 2: рост госрасходов и трансфертов увеличивает спрос, поэтому сдержанность бьёт по инфляции спроса (demand-pull inflation). Оценка: ставки снижают инфляцию быстрее, но дорожает заимствование и замедляется рост; бюджетные меры действуют медленнее и могут ударить по бедным домохозяйствам. Заинтересованные стороны: вкладчики выигрывают, должники теряют. Вывод: назовите меру и условие, которое изменит ваш выбор.',
    },
  },
  {
    id: 'econ-p1-n24-tz1',
    subject: 'econ',
    paper: 'P1',
    session: 'N24',
    level: 'HL',
    tz: 'TZ1',
    files: [
      {
        kind: 'questions',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2024%20Examination%20Session/November%202024%20Examination%20Session/Individuals%20and%20societies/Economics_paper_1__TZ1_HL.pdf',
      },
      {
        kind: 'markscheme',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2024%20Examination%20Session/November%202024%20Examination%20Session/Individuals%20and%20societies/Economics_paper_1__TZ1_HL_markscheme.pdf',
      },
    ],
    minutes: 75,
    marks: 25,
    items: [
      {
        q: '1a',
        marks: 10,
        command: 'Explain',
        topicIds: [
          'monopoly-and-natural-monopoly',
          'oligopoly-and-monopolistic-competition',
        ],
      },
      {
        q: '1b',
        marks: 15,
        command: 'Evaluate',
        topicIds: [
          'critique-maximizing-behaviour',
        ],
      },
      {
        q: '2a',
        marks: 10,
        command: 'Explain',
        topicIds: [
          'ad-as-model-and-business-cycle',
          'macroeconomic-objectives',
        ],
      },
      {
        q: '2b',
        marks: 15,
        command: 'Discuss',
        topicIds: [
          'macroeconomic-objectives',
          'ad-as-model-and-business-cycle',
        ],
      },
      {
        q: '3a',
        marks: 10,
        command: 'Explain',
        topicIds: [
          'exchange-rates',
          'balance-of-payments',
        ],
      },
      {
        q: '3b',
        marks: 15,
        command: 'Discuss',
        topicIds: [
          'economic-integration',
          'monetary-policy',
        ],
      },
    ],
    guide: {
      en: 'Time: 1 h 15 min. Plan for about five minutes.\n\n**Question 1** (a) 10 marks, (b) 15 marks\n\n- (a) Plan: Definitions: monopoly (single seller protected by barriers to entry), monopolistic competition (many sellers, differentiated products), abnormal profit, normal profit. Diagram: monopoly diagram with a shaded area of abnormal profit that can persist, beside a monopolistic competition firm that just touches average total cost (normal profit). Chain: if barriers block entry, then the monopolist keeps its excess profit; if entry is easy, then new firms take customers, so the competitor earns only normal profit.\n- (b) Plan: Example: a utility with a license, or a patented medicine, against a chain of local restaurants. Two points: profit maximization is the standard assumption, with output where $MR = MC$; owners expect profit as a reward for risk. Two evaluation points: managers may chase growth, market share or satisficing; firms face uncertainty, so profit may be a means rather than the main goal. Judgement: profit is important, but the view that it is the only or main objective is too strong.\n\n**Question 2** (a) 10 marks, (b) 15 marks\n\n- (a) Plan: Definitions: natural rate of unemployment (unemployment in long-run equilibrium), aggregate demand (AD), short-run and long-run aggregate supply (SRAS, LRAS), inflationary gap, flexible wages and prices in the long run. Diagram: AD/AS diagram with vertical LRAS at full-employment output; AD shifts right, then SRAS shifts left until output returns to LRAS at a higher price level. Chain: if AD rises, then unemployment falls below the natural rate; so wages and prices rise and SRAS shifts left until unemployment returns to its natural level.\n- (b) Plan: Example: Zimbabwe in 2008 (hyperinflation) against a deep recession with very high unemployment. Two points: unemployment brings lost income, skill decay and social costs; inflation redistributes income from savers and cuts competitiveness. Two evaluation points: size and duration matter, since moderate inflation may hurt less than long-term unemployment; structural unemployment is harder to fix. Judgement: in recession unemployment is often bigger, but extreme inflation can be worse; size and duration decide.\n\n**Question 3** (a) 10 marks, (b) 15 marks\n\n- (a) Plan: Definitions: relative inflation rates (inflation in one country compared with another), exchange rate, demand for a currency (derived from demand for exports). Diagram: foreign exchange market diagram with demand for and supply of the currency; higher relative inflation shifts demand for that currency to the left, so its exchange rate depreciates. Chain: if country A\'s inflation rises faster than B\'s, then A\'s exports become dearer; so demand for A\'s currency falls; so it depreciates.\n- (b) Plan: Example: Greece, which joined the euro area in 2001 (a monetary union). Two advantages: no currency conversion costs and less exchange-rate uncertainty; greater market access and easier labor mobility within the union. Two disadvantages: no national control of interest rates, since they are set for the whole union; no separate exchange rate to adjust, and limits on fiscal policy. Judgement: the balance depends on how similar the economies are; advantages dominate when trade is large and shocks are shared.',
      ru: 'Время: 1 ч 15 мин. Планируйте около пяти минут.\n\n**Вопрос 1** (a) 10 баллов, (b) 15 баллов\n\n- (a) План: Определения: монополия (monopoly) — единственный продавец, защищенный барьерами входа; монополистическая конкуренция (monopolistic competition) — много продавцов и дифференцированные продукты; сверхприбыль (abnormal profit); нормальная прибыль (normal profit). Диаграмма: диаграмма монополии с заштрихованной сверхприбылью в долгосрочном периоде рядом с фирмой монополистической конкуренции, которая касается кривой средних общих издержек (нормальная прибыль). Цепочка: если барьеры блокируют вход, то монополист сохраняет избыточную прибыль; если вход свободен, то новые фирмы отбирают покупателей, и конкурент получает только нормальную прибыль.\n- (b) План: Пример: коммунальная компания с лицензией или запатентованное лекарство против сети местных ресторанов. Два аргумента: максимизация прибыли — стандартное допущение, при котором выпуск выбирается там, где $MR = MC$; владельцы ожидают прибыль как вознаграждение за риск. Два оценочных довода: менеджеры могут стремиться к росту, доле рынка или удовлетворительному результату (satisficing); фирмы работают в условиях неопределенности, поэтому прибыль может быть средством, а не главной целью. Суждение: прибыль важна, но утверждение, что она единственная или главная цель, слишком сильное.\n\n**Вопрос 2** (a) 10 баллов, (b) 15 баллов\n\n- (a) План: Определения: естественный уровень безработицы (natural rate of unemployment) — безработица в долгосрочном равновесии; совокупный спрос (aggregate demand, AD); краткосрочное и долгосрочное совокупное предложение (SRAS, LRAS); инфляционный разрыв (inflationary gap); гибкие зарплаты и цены в долгосрочном периоде. Диаграмма: диаграмма AD/AS с вертикальной кривой LRAS при полной занятости; AD сдвигается вправо, затем SRAS сдвигается влево, пока выпуск не вернется на LRAS при более высоком уровне цен. Цепочка: если AD растет, то безработица падает ниже естественного уровня; значит, зарплаты и цены растут, SRAS сдвигается влево, и безработица возвращается к естественному уровню.\n- (b) План: Пример: Зимбабве в 2008 году (гиперинфляция) в сравнении с глубокой рецессией и очень высокой безработицей. Два аргумента: безработица ведет к потере дохода, снижению квалификации и социальным издержкам; инфляция перераспределяет доходы от сберегающих и снижает конкурентоспособность (competitiveness). Два оценочных довода: размер и длительность важны, так как умеренная инфляция может вредить меньше, чем длительная безработица; структурную безработицу труднее устранить. Суждение: в рецессии безработица часто серьезнее, но сверхвысокая инфляция может быть хуже; решают размер и длительность.\n\n**Вопрос 3** (a) 10 баллов, (b) 15 баллов\n\n- (a) План: Определения: относительные темпы инфляции (relative inflation rates) — инфляция в одной стране по сравнению с другой; обменный курс (exchange rate); спрос на валюту (demand for a currency), производный от спроса на экспорт. Диаграмма: диаграмма валютного рынка со спросом на валюту и ее предложением; более высокая относительная инфляция сдвигает спрос на валюту этой страны влево, и курс ослабевает (depreciation). Цепочка: если инфляция в стране A растет быстрее, чем в стране B, то экспорт страны A дорожает; значит, спрос на валюту A падает; следовательно, она ослабевает.\n- (b) План: Пример: Греция, которая в 2001 году вступила в еврозону (валютный союз, monetary union). Два преимущества: нет затрат на конвертацию валют и меньше неопределенности курса; больший доступ к рынкам и более легкая мобильность рабочей силы внутри союза. Два недостатка: нет национального контроля над денежно-кредитной политикой (monetary policy), так как процентные ставки задаются для всего союза; нет собственного обменного курса для корректировки, и ограничены возможности фискальной политики. Суждение: баланс зависит от того, насколько похожи экономики; преимущества перевешивают, когда торговля велика, а шоки общие.',
    },
  },
  {
    id: 'econ-p1-n24-tz2',
    subject: 'econ',
    paper: 'P1',
    session: 'N24',
    level: 'HL',
    tz: 'TZ2',
    files: [
      {
        kind: 'questions',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2024%20Examination%20Session/November%202024%20Examination%20Session/Individuals%20and%20societies/Economics_paper_1__TZ2_HL.pdf',
      },
      {
        kind: 'markscheme',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2024%20Examination%20Session/November%202024%20Examination%20Session/Individuals%20and%20societies/Economics_paper_1__TZ2_HL_markscheme.pdf',
      },
    ],
    minutes: 75,
    marks: 25,
    items: [
      {
        q: '1a',
        marks: 10,
        command: 'Explain',
        topicIds: [
          'externalities',
        ],
      },
      {
        q: '1b',
        marks: 15,
        command: 'Evaluate',
        topicIds: [
          'externalities',
          'sustainable-development',
          'government-taxes-subsidies-price-controls',
        ],
      },
      {
        q: '2a',
        marks: 10,
        command: 'Explain',
        topicIds: [
          'macroeconomic-objectives',
        ],
      },
      {
        q: '2b',
        marks: 15,
        command: 'Discuss',
        topicIds: [
          'sustainable-development',
          'macroeconomic-objectives',
        ],
      },
      {
        q: '3a',
        marks: 10,
        command: 'Explain',
        topicIds: [
          'trade-protection',
          'balance-of-payments',
        ],
      },
      {
        q: '3b',
        marks: 15,
        command: 'Discuss',
        topicIds: [
          'exchange-rates',
          'balance-of-payments',
        ],
      },
    ],
    guide: {
      en: 'Time: 1 h 15 min. Plan for about five minutes.\n\n**Question 1** (a) 10 marks, (b) 15 marks\n\n- (a) Plan: Definitions: externality (a cost or benefit to third parties not priced by the market), private cost, social cost, internalize. Diagram: production externality diagram with the private supply curve below the social cost curve; mark the market and socially optimal outputs and shade the welfare loss. Chain: if a firm plans output using only private costs, then it ignores pollution it does not pay for; so it overproduces; so the external cost falls on others unless regulation intervenes.\n- (b) Plan: Example: the EU Emissions Trading System, a cap-and-trade scheme started in 2005. Two points for the view: the cap fixes total emissions, and firms that cut cheaply can sell spare permits. Two evaluation points: measuring emissions and setting the cap is hard; permit prices can be volatile, and carbon taxes or clean-technology subsidies may work too. Judgement: permits are a strong tool but not necessarily the best.\n\n**Question 2** (a) 10 marks, (b) 15 marks\n\n- (a) Plan: Definitions: inflation (a sustained rise in the general price level), purchasing power, competitiveness, low and stable inflation, uncertainty. Diagram: AD/AS diagram showing demand-pull inflation (AD shifts right, price level rises from PL1 to PL2) or cost-push inflation (SRAS shifts left). Chain: if inflation is high and unstable, then the real value of incomes and savings falls and planning gets harder; so firms and households delay spending and investment; so growth slows and exports lose competitiveness.\n- (b) Plan: Example: Japan\'s rapid growth from the 1950s to the 1970s, which came with severe industrial pollution. Two benefits: higher incomes, living standards, jobs and tax revenue that fund health and education. Two costs: environmental damage, depletion of natural resources and rising inequality. Evaluation: short-run and long-run effects, who gains and who pays, and whether growth is green and inclusive. Judgement: growth is usually beneficial overall, but costs can outweigh benefits when it is unsustainable or unequal.\n\n**Question 3** (a) 10 marks, (b) 15 marks\n\n- (a) Plan: Definitions: current account deficit, current account (net trade, income and transfers), quota (a physical limit on imports). Diagram: trade diagram for one imported good; the quota keeps the domestic price above the world price; removing it lowers the price and raises imports; mark the new import quantity. Chain: if the quota is removed, then import prices fall and imports rise; so import spending grows relative to export earnings; so the current account moves into deficit.\n- (b) Plan: Example: Switzerland in January 2015, when the franc surged after the central bank removed its cap on the franc against the euro. Two consequences: imports become cheaper, lowering inflation and raising real incomes; exports become dearer, cutting demand and possibly jobs in export industries. Two evaluation points: the effect depends on price elasticities of demand for exports and imports, and on the cause of the appreciation. Judgement: appreciation is not automatically bad; the cause, elasticities and economic structure decide.',
      ru: 'Время: 1 ч 15 мин. Планируйте около пяти минут.\n\n**Вопрос 1** (a) 10 баллов, (b) 15 баллов\n\n- (a) План: Определения: внешний эффект (externality) — издержки или выгоды третьих лиц, не учтенные рынком; частные издержки (private cost); общественные издержки (social cost); интернализировать (internalize) внешний эффект. Диаграмма: диаграмма производственного внешнего эффекта, где кривая частных издержек (предложения) лежит ниже кривой общественных издержек; отметить рыночный и социально оптимальный выпуск и заштриховать потери благосостояния. Цепочка: если фирма планирует выпуск только по частным издержкам, то она игнорирует загрязнение, за которое не платит; значит, она производит слишком много; следовательно, внешние издержки ложатся на других, пока регулирование не вмешается.\n- (b) План: Пример: Система торговли квотами на выбросы ЕС (EU Emissions Trading System), запущенная в 2005 году, — схема «ограничение и торговля» (cap-and-trade). Два аргумента в пользу: лимит фиксирует общий объем выбросов, а фирмы, которые сокращают выбросы дешевле, могут продавать излишки разрешений. Два оценочных довода: измерить выбросы и установить лимит трудно; цены разрешений могут колебаться, а углеродный налог или субсидии на чистые технологии тоже могут работать. Суждение: разрешения — сильный инструмент, но не обязательно лучший.\n\n**Вопрос 2** (a) 10 баллов, (b) 15 баллов\n\n- (a) План: Определения: инфляция (inflation) — устойчивый рост общего уровня цен; покупательная способность (purchasing power); конкурентоспособность (competitiveness); низкая и стабильная инфляция; неопределенность (uncertainty). Диаграмма: диаграмма AD/AS, показывающая инфляцию спроса (AD сдвигается вправо, уровень цен растет с PL1 до PL2) или инфляцию издержек (SRAS сдвигается влево). Цепочка: если инфляция высокая и нестабильная, то реальная стоимость доходов и сбережений падает и планировать становится труднее; значит, фирмы и домохозяйства откладывают расходы и инвестиции; следовательно, рост замедляется, а экспорт теряет конкурентоспособность.\n- (b) План: Пример: быстрый рост Японии с 1950-х до 1970-х годов, который сопровождался серьезным промышленным загрязнением. Два преимущества: рост доходов, уровня жизни, занятости и налоговых поступлений, которые финансируют здравоохранение и образование. Два недостатка: экологический ущерб, истощение природных ресурсов и рост неравенства. Оценка: краткосрочные и долгосрочные эффекты, кто выигрывает и кто платит, и является ли рост экологичным и инклюзивным. Суждение: в целом рост полезен, но издержки могут перевесить выгоды, когда он неустойчив или неравномерен.\n\n**Вопрос 3** (a) 10 баллов, (b) 15 баллов\n\n- (a) План: Определения: квота (quota) — физическое ограничение импорта; текущий счет (current account) — чистая торговля, доходы и трансферты; дефицит текущего счета (current account deficit). Диаграмма: диаграмма торговли одним импортируемым товаром; квота удерживает внутреннюю цену выше мировой; ее отмена снижает цену и увеличивает импорт; отметить новый объем импорта. Цепочка: если квоту отменяют, то цены импорта падают, а импорт растет; значит, расходы на импорт растут относительно экспортной выручки; следовательно, текущий счет переходит в дефицит.\n- (b) План: Пример: Швейцария в январе 2015 года, когда франк резко вырос после того, как центральный банк отменил ограничение роста франка к евро. Два последствия: импорт дешевеет, что снижает инфляцию и повышает реальные доходы; экспорт дорожает, что снижает спрос и может сократить рабочие места в экспортных отраслях. Два оценочных довода: эффект зависит от ценовых эластичностей спроса на экспорт и импорт и от причины укрепления валюты. Суждение: укрепление валюты не обязательно плохо; решают причина, эластичности и структура экономики.',
    },
  },
  {
    id: 'econ-p2-n24',
    subject: 'econ',
    paper: 'P2',
    session: 'N24',
    level: 'SLHL',
    files: [
      {
        kind: 'questions',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2024%20Examination%20Session/November%202024%20Examination%20Session/Individuals%20and%20societies/Economics_paper_2__HLSL.pdf',
      },
      {
        kind: 'markscheme',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2024%20Examination%20Session/November%202024%20Examination%20Session/Individuals%20and%20societies/Economics_paper_2__HLSL_markscheme.pdf',
      },
    ],
    minutes: 105,
    marks: 40,
    items: [
      {
        q: '1a(i)',
        marks: 2,
        command: 'Define',
        topicIds: [
          'monetary-policy',
        ],
      },
      {
        q: '1a(ii)',
        marks: 2,
        command: 'Define',
        topicIds: [
          'balance-of-payments',
        ],
      },
      {
        q: '1b(i)',
        marks: 3,
        command: 'Calculate',
        topicIds: [
          'measuring-economic-activity',
        ],
      },
      {
        q: '1b(ii)',
        marks: 2,
        command: 'Sketch',
        topicIds: [
          'monetary-policy',
          'ad-as-model-and-business-cycle',
        ],
      },
      {
        q: '1c',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'balance-of-payments',
          'exchange-rates',
        ],
      },
      {
        q: '1d',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'trade-protection',
          'benefits-of-trade',
        ],
      },
      {
        q: '1e',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'externalities',
        ],
      },
      {
        q: '1f',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'ad-as-model-and-business-cycle',
          'inequality-and-poverty',
        ],
      },
      {
        q: '1g',
        marks: 15,
        command: 'Discuss',
        topicIds: [
          'sustainable-development',
          'benefits-of-trade',
          'policies-for-growth-and-development',
        ],
      },
      {
        q: '2a(i)',
        marks: 2,
        command: 'Define',
        topicIds: [
          'fiscal-policy',
        ],
      },
      {
        q: '2a(ii)',
        marks: 2,
        command: 'Define',
        topicIds: [
          'externalities',
        ],
      },
      {
        q: '2b(i)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'measuring-economic-activity',
        ],
      },
      {
        q: '2b(ii)',
        marks: 1,
        command: 'Calculate',
        topicIds: [
          'measuring-economic-activity',
        ],
      },
      {
        q: '2b(iii)',
        marks: 2,
        command: 'Sketch',
        topicIds: [
          'ad-as-model-and-business-cycle',
        ],
      },
      {
        q: '2c',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'fiscal-policy',
          'ad-as-model-and-business-cycle',
        ],
      },
      {
        q: '2d',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'government-taxes-subsidies-price-controls',
        ],
      },
      {
        q: '2e',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'exchange-rates',
          'trade-protection',
        ],
      },
      {
        q: '2f',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'inequality-and-poverty',
          'measuring-development',
        ],
      },
      {
        q: '2g',
        marks: 15,
        command: 'Evaluate',
        topicIds: [
          'macroeconomic-objectives',
          'government-taxes-subsidies-price-controls',
          'inequality-and-poverty',
        ],
      },
    ],
    guide: {
      en: 'Time: 1 h 45 min.\n\n**Question 1**\n\n- **Part (b)(i), 3 marks: calculation.** Real GDP per capita = real GDP / population, in the same units. Table 4 gives GDP in trillions and population in billions, so convert trillions to billions first (× 1000). Then $Change\\,(\\%) = (New - Old) / Old \\times 100$. Illustrative example (not from the paper): GDP 1.5 trillion (1500 billion) and population 0.75 billion give USD 2000 per person; next year GDP 1.62 trillion (1620 billion) and population 0.8 billion give USD 2025. Change = (2025 - 2000) / 2000 × 100 = 1.25%, rounded to 2 decimal places. Common mistake: dividing trillions by billions without converting, which misplaces the answer by a factor of 1000.\n\n- **Part (g), 15 marks: plan.** Supporting point 1 (SDG 3, good health): the deal could bring UK insurance expertise and cheaper medicines, but intellectual property protection could restrict India\'s output of cheap drugs (Text B, paragraph 3); Table 3 shows health progress going the wrong way. Supporting point 2 (SDG 13, climate action): trade growth raises transport emissions (Text B, paragraph 4), and cuts to solar subsidies slow the switch to clean energy; Table 3 gives India\'s climate progress. Evaluation 1 (short and long run): cheaper imports help consumers now while emissions rise first; higher incomes and tax revenue can fund green investment later, if the deal includes environmental rules. Evaluation 2 (stakeholders and assumptions): infant industries and farmers may lose (Text A, paragraph 4), and labour groups want protections (Text A, paragraph 6); the outcome depends on enforcement and on India\'s capacity to fund the programmes. Judgement: the deal is likely to help SDG 3 only if intellectual property rules stay flexible, and it strains SDG 13 unless the clean-energy commitments are kept.\n\n**Question 2**\n\n- **Part (b)(i), 2 marks: calculation.** Real GDP = nominal GDP / GDP deflator × 100. Read nominal GDP and the deflator from Table 5; the deflator is an index, so the × 100 is needed. Illustrative example (not from the paper): nominal GDP 380 USD billion and deflator 115 give real GDP = 380 / 115 × 100 = 330.43 USD billion. Give the answer to 2 places after the decimal point and keep the units. Common mistake: forgetting the × 100, which makes the value about a hundred times too small.\n\n- **Part (b)(ii), 1 mark: calculation.** Real GDP per capita = real GDP / population. Population is in millions, so convert real GDP from billions to millions (× 1000) first. Illustrative example (not from the paper): real GDP 330.43 USD billion and population 22 million: 330.43 × 1000 = 330430 USD million; 330430 / 22 = 15019.55 USD per person, rounded to 2 decimal places. Common mistake: dividing billions by millions without converting, which understates the answer by a factor of 1000.\n\n- **Part (g), 15 marks: plan.** Supporting point 1: the fuel, electricity and flour subsidies and the minimum wage rise (Text C, paragraphs 3 and 4) target inequality; Table 6 shows Malaysia\'s Gini coefficient has fallen. Supporting point 2: the carbon tax and tradable permits (Text D, paragraph 2) correct the externality from power generation and transport, supporting the emissions objective. Evaluation 1 (short and long run): subsidies raise spending now and add to debt (Table 5 shows debt rising as a share of GDP), while carbon taxes change behaviour slowly; a higher minimum wage may cost jobs at first but can lift productivity later. Evaluation 2 (stakeholders and size): high-income households take a large share of energy subsidies (Text C, paragraph 3), so those subsidies fail the equity objective; targeted transfers, or carbon-tax revenue passed back to poorer families, serve equity and efficiency better. Judgement: intervention meets the environmental and inequality objectives in part, but untargeted subsidies undermine the fiscal and equity goals.',
      ru: 'Время: 1 ч 45 мин.\n\n**Вопрос 1**\n\n- **Часть (b)(i), 3 балла: расчёт.** Реальный ВВП на душу населения = реальный ВВП / население, в одинаковых единицах. Table 4 даёт ВВП в триллионах, а население в миллиардах, поэтому сначала переведите триллионы в миллиарды (× 1000). Затем $Change\\,(\\%) = (New - Old) / Old \\times 100$. Иллюстративный пример (не из экзамена): ВВП 1.5 триллиона (1500 миллиардов) и население 0.75 миллиарда дают 2000 USD на человека; в следующем году ВВП 1.62 триллиона (1620 миллиардов) и население 0.8 миллиарда дают 2025 USD. Изменение = (2025 - 2000) / 2000 × 100 = 1.25%, округлено до двух знаков после запятой. Типичная ошибка: деление триллионов на миллиарды без перевода, которое сдвигает ответ в 1000 раз.\n\n- **Часть (g), 15 баллов: план.** Опорный довод 1 (ЦУР 3, здоровье; Цели устойчивого развития, SDG 3): соглашение может принести Индии опыт Великобритании в страховании и более дешёвые лекарства, но правила интеллектуальной собственности (intellectual property) могут ограничить производство недорогих препаратов (Text B, paragraph 3); Table 3 показывает, что прогресс в здравоохранении идёт в неверном направлении. Опорный довод 2 (ЦУР 13, борьба с изменением климата; SDG 13): рост торговли увеличивает выбросы транспорта (Text B, paragraph 4), а сокращение субсидий на солнечную энергию замедляет переход к чистой энергетике; Table 3 показывает прогресс Индии по климату. Оценка 1 (короткий и длинный периоды): более дешёвый импорт помогает потребителям сейчас, хотя выбросы сначала растут; позже более высокие доходы и налоговые поступления могут финансировать зелёные инвестиции, если в соглашении есть экологические правила. Оценка 2 (заинтересованные стороны и допущения): молодые отрасли и фермеры могут проиграть (Text A, paragraph 4), а профсоюзы требуют защиты труда (Text A, paragraph 6); исход зависит от исполнения правил и от способности Индии финансировать программы. Вывод: соглашение, вероятно, поможет ЦУР 3 только при гибких правилах интеллектуальной собственности, а ЦУР 13 будет под давлением, если не сохранить обязательства по чистой энергетике.\n\n**Вопрос 2**\n\n- **Часть (b)(i), 2 балла: расчёт.** Реальный ВВП = номинальный ВВП / дефлятор ВВП × 100. Номинальный ВВП и дефлятор берите из Table 5; дефлятор — индекс, поэтому нужно умножить на 100. Иллюстративный пример (не из экзамена): номинальный ВВП 380 млрд USD и дефлятор 115 дают реальный ВВП = 380 / 115 × 100 = 330.43 млрд USD. Округляйте до двух знаков после запятой и сохраняйте единицы. Типичная ошибка: забыть умножить на 100, из-за чего значение примерно в сто раз меньше.\n\n- **Часть (b)(ii), 1 балл: расчёт.** Реальный ВВП на душу населения = реальный ВВП / население. Население дано в миллионах, поэтому сначала переведите реальный ВВП из миллиардов в миллионы (× 1000). Иллюстративный пример (не из экзамена): реальный ВВП 330.43 млрд USD и население 22 миллиона: 330.43 × 1000 = 330430 млн USD; 330430 / 22 = 15019.55 USD на человека, округлено до двух знаков после запятой. Типичная ошибка: деление миллиардов на миллионы без перевода, которое занижает ответ в 1000 раз.\n\n- **Часть (g), 15 баллов: план.** Опорный довод 1: субсидии на топливо, электроэнергию и муку и повышение минимальной зарплаты (Text C, paragraphs 3 and 4) направлены на неравенство; Table 6 показывает снижение коэффициента Джини (Gini coefficient) в Малайзии. Опорный довод 2: углеродный налог и торгуемые разрешения (tradable permits) (Text D, paragraph 2) исправляют внешний эффект от генерации и транспорта, поддерживая цель по выбросам. Оценка 1 (короткий и длинный периоды): субсидии сейчас увеличивают расходы и долг (Table 5 показывает рост госдолга в процентах ВВП), а углеродные налоги меняют поведение медленно; повышение минимальной зарплаты может сначала стоить рабочих мест, но позже повысить производительность (productivity). Оценка 2 (заинтересованные стороны и масштаб): высокодоходные домохозяйства получают большую долю энергетических субсидий (Text C, paragraph 3), поэтому такие субсидии не отвечают цели справедливости; адресные трансферты или возврат налоговых поступлений бедным домохозяйствам лучше служат справедливости и эффективности. Вывод: вмешательство частично достигает экологических целей и целей по неравенству, но ненаправленные субсидии подрывают бюджетную и социальную цели.',
    },
  },
  {
    id: 'econ-p3-n24-q1',
    subject: 'econ',
    paper: 'P3',
    session: 'N24',
    level: 'HL',
    part: 'question-1',
    files: [
      {
        kind: 'questions',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2024%20Examination%20Session/November%202024%20Examination%20Session/Individuals%20and%20societies/Economics_paper_3__HL.pdf',
      },
      {
        kind: 'markscheme',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2024%20Examination%20Session/November%202024%20Examination%20Session/Individuals%20and%20societies/Economics_paper_3__HL_markscheme.pdf',
      },
    ],
    minutes: 60,
    marks: 30,
    items: [
      {
        q: '1a(i)',
        marks: 2,
        command: 'Define',
        topicIds: [
          'balance-of-payments',
        ],
      },
      {
        q: '1a(ii)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'balance-of-payments',
        ],
      },
      {
        q: '1a(iii)',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'exchange-rates',
        ],
      },
      {
        q: '1a(iv)',
        marks: 1,
        command: 'Describe',
        topicIds: [
          'exchange-rates',
        ],
      },
      {
        q: '1a(v)',
        marks: 3,
        command: 'Calculate',
        topicIds: [
          'exchange-rates',
        ],
      },
      {
        q: '1a(vi)',
        marks: 1,
        command: 'Determine',
        topicIds: [
          'demand',
          'supply',
        ],
      },
      {
        q: '1a(vii)',
        marks: 3,
        command: 'Calculate',
        topicIds: [
          'trade-protection',
          'price-elasticity-of-demand',
        ],
      },
      {
        q: '1a(viii)',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'inequality-and-poverty',
          'barriers-to-growth-and-development',
        ],
      },
      {
        q: '1b',
        marks: 10,
        command: 'Recommend',
        topicIds: [
          'monetary-policy',
          'fiscal-policy',
          'exchange-rates',
        ],
      },
    ],
    guide: {
      en: 'Time for this question in the mock: 60 minutes. The official paper is 1 h 45 min for both questions.\n\n**Question 1**\n\n- **Part (a)(ii), 2 marks: calculation.** Formula: $CAB = X - M + NPI + NCT$, where X - M is the goods and services balance, NPI is net primary income and NCT is net current transfers. Read Table 1 for each year, keeping printed signs. Units: as in the table heading. Example (illustrative): 820 - 950 + (-60) + 25 = -165. Mistake: adding a negative balance as if it were positive.\n- **Part (a)(v), 3 marks: calculation.** USD price = EGP cost / EGP per USD (Figure 2 rates); change = later minus earlier. Example (illustrative): 6600 / 27.5 = 240.0 USD; 6600 / 33.0 = 200.0 USD; change = 200.0 - 240.0 = -40.0 USD. Mistake: dividing by USD per EGP instead of EGP per USD.\n- **Part (a)(vi), 1 mark: calculation.** Consumption = domestic quantity + imports at the original price, both read from Figure 3. Example (illustrative): 400 - (-150) = 550 thousand tons, because adding 150 imports is the same as subtracting -150. Mistake: using domestic output alone.\n- **Part (a)(vii), 3 marks: calculation.** New price = old price × (1 + tariff rate); spending = price × quantity (Figure 3); change = new minus old. Example (illustrative, 10 % tariff, so 1.1): 4.0 × 1.1 = 4.4; 4.0 × 320 = 1280; 4.4 × 290 = 1276; change = 1276 - 1280 = -4 USD million. Mistake: using the old quantity with the new price.\n- **Part (b), 10 marks: plan.** Policy: tighter monetary policy (higher interest rates to attract portfolio inflows), supported by fiscal consolidation. Support 1: a current account deficit means demand for foreign currency exceeds supply, so depreciation follows; cite the text\'s evidence. Support 2: depreciation raises import prices and inflation, which the central bank can counter. Evaluate: in the short run, higher rates raise borrowing costs and slow growth; in the long run, credibility and export competitiveness matter more. Judgement: name the policy and the condition under which supply-side reform would be the better choice.',
      ru: 'Время на этот вопрос в моке: 60 минут. Штатный пейпер — 1 ч 45 мин на оба вопроса.\n\n**Вопрос 1**\n\n- **Часть (a)(ii), 2 балла: расчёт.** Формула: $CAB = X - M + NPI + NCT$, где X - M — баланс товаров и услуг, NPI — чистый первичный доход (net primary income), NCT — чистые текущие трансферты (net current transfers). Возьмите таблицу 1 за каждый год и сохраняйте все знаки, так как минус уменьшает итог. Единицы как в заголовке таблицы. Пример (условный): 820 - 950 + (-60) + 25 = -165. Ошибка: прибавление отрицательного сальдо как положительного.\n- **Часть (a)(v), 3 балла: расчёт.** Цена в USD = стоимость в EGP / курс EGP за USD на каждую дату (рисунок 2). Изменение = поздняя цена в USD минус ранняя. Пример (условный): 6600 / 27.5 = 240.0 USD; 6600 / 33.0 = 200.0 USD; изменение = 200.0 - 240.0 = -40.0 USD. Ошибка: деление на USD за EGP.\n- **Часть (a)(vi), 1 балл: расчёт.** Потребление = внутреннее количество + импорт при исходной цене, оба значения с рисунка 3. Пример (условный): 400 - (-150) = 550 тыс. т, потому что прибавить импорт 150 — то же, что вычесть -150. Ошибка: учёт только внутреннего производства.\n- **Часть (a)(vii), 3 балла: расчёт.** Новая цена = старая цена × (1 + ставка пошлины); расходы = цена × количество с рисунка 3; изменение = новые расходы минус старые. Пример (условный, пошлина 10 %, то есть 1.1): 4.0 × 1.1 = 4.4; 4.0 × 320 = 1280; 4.4 × 290 = 1276; изменение = 1276 - 1280 = -4 млн USD. Ошибка: старое количество при новой цене.\n- **Часть (b), 10 баллов: план.** Мера: более жёсткая денежная политика (повышение процентных ставок для привлечения портфельного капитала), с бюджетной консолидацией как поддержкой. Довод 1: дефицит текущего счёта (current account deficit) означает спрос на иностранную валюту выше предложения, поэтому валюта слабеет; опирайтесь на данные текста. Довод 2: удешевление валюты повышает цены импорта и инфляцию, с которой может бороться центральный банк. Оценка: в краткосрочном периоде ставки повышают стоимость заимствований и замедляют рост; в долгосрочном важнее доверие и конкурентоспособность экспорта. Заинтересованные стороны: импортёры и заёмщики в иностранной валюте выигрывают или теряют. Вывод: назовите меру и условие, при котором лучше структурные реформы.',
    },
  },
  {
    id: 'econ-p3-n24-q2',
    subject: 'econ',
    paper: 'P3',
    session: 'N24',
    level: 'HL',
    part: 'question-2',
    files: [
      {
        kind: 'questions',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2024%20Examination%20Session/November%202024%20Examination%20Session/Individuals%20and%20societies/Economics_paper_3__HL.pdf',
      },
      {
        kind: 'markscheme',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2024%20Examination%20Session/November%202024%20Examination%20Session/Individuals%20and%20societies/Economics_paper_3__HL_markscheme.pdf',
      },
    ],
    minutes: 60,
    marks: 30,
    items: [
      {
        q: '2a(i)',
        marks: 1,
        command: 'Identify',
        topicIds: [
          'monopoly-and-natural-monopoly',
        ],
      },
      {
        q: '2a(ii)',
        marks: 1,
        command: 'Identify',
        topicIds: [
          'monopoly-and-natural-monopoly',
        ],
      },
      {
        q: '2a(iii)',
        marks: 2,
        command: 'Outline',
        topicIds: [
          'monopoly-and-natural-monopoly',
        ],
      },
      {
        q: '2a(iv)',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'price-elasticity-of-demand',
        ],
      },
      {
        q: '2a(v)',
        marks: 1,
        command: 'Identify',
        topicIds: [
          'government-taxes-subsidies-price-controls',
        ],
      },
      {
        q: '2a(vi)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'competitive-market-equilibrium',
          'government-taxes-subsidies-price-controls',
        ],
      },
      {
        q: '2a(vii)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'competitive-market-equilibrium',
          'government-taxes-subsidies-price-controls',
        ],
      },
      {
        q: '2a(viii)',
        marks: 1,
        command: 'Calculate',
        topicIds: [
          'multiplier',
        ],
      },
      {
        q: '2a(ix)',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'fiscal-policy',
        ],
      },
      {
        q: '2a(x)',
        marks: 2,
        command: 'Define',
        topicIds: [
          'critique-maximizing-behaviour',
        ],
      },
      {
        q: '2b',
        marks: 10,
        command: 'Recommend',
        topicIds: [
          'government-taxes-subsidies-price-controls',
          'externalities',
        ],
      },
    ],
    guide: {
      en: 'Time for this question in the mock: 60 minutes. The official paper is 1 h 45 min for both questions.\n\n**Question 2**\n\n- **Part (a)(vi), 2 marks: calculation.** Change in consumer surplus = 1/2 × fall in price × (quantity before + quantity after), with the quantities read from Figure 5. Example (illustrative): 1/2 × 2.0 × (30 + 36) = 1/2 × 2.0 × 66 = 66, so consumer surplus rises by 66 in the figure\'s units. Mistake: forgetting the 1/2 of the trapezoid.\n- **Part (a)(vii), 2 marks: calculation.** Change in producer surplus uses the same trapezoid with the rise in producer price. Example (illustrative): 1/2 × 1.5 × (30 + 36) = 1/2 × 1.5 × 66 = 49.5. Mistake: using the consumer price instead of the producer price.\n- **Part (a)(viii), 1 mark: calculation.** Maximum rise in real GDP = multiplier × investment, where multiplier = 1 / (1 - c) and c is the domestic share of extra income spent. Example (illustrative, c = 0.6): 1 / (1 - 0.6) = 2.5; EUR 3.0 billion of investment raises real GDP by at most 2.5 × 3.0 = 7.5 billion. Mistake: using the share saved instead of the share spent.\n- **Part (b), 10 marks: plan.** Recommend one main policy, such as a subsidy on rail tickets for regular travellers, with a higher fuel tax on car travel in support. Support 1: rail reduces congestion and emissions, so travellers under-use it relative to the social optimum; cite the text\'s data on these effects. Support 2: a lower ticket price shifts demand towards rail, and the size of the shift depends on the price elasticity of demand. Evaluate: the subsidy has a fiscal cost and an opportunity cost; new track takes years, so the short-run and long-run effects differ; subsidies can favour better-off users. Judgement: state the policy and the condition under which investment in new track would be the better choice.',
      ru: 'Время на этот вопрос в моке: 60 минут. Штатный пейпер — 1 ч 45 мин на оба вопроса.\n\n**Вопрос 2**\n\n- **Часть (a)(vi), 2 балла: расчёт.** Изменение излишка потребителя = 1/2 × снижение цены × (количество до + количество после), количества с рисунка 5. Пример (условный): 1/2 × 2.0 × (30 + 36) = 1/2 × 2.0 × 66 = 66, то есть излишек потребителя растёт на 66 (единицы рисунка). Ошибка: забыть множитель 1/2 трапеции.\n- **Часть (a)(vii), 2 балла: расчёт.** Изменение излишка производителя считается той же трапецией с ростом цены производителя. Пример (условный): 1/2 × 1.5 × (30 + 36) = 1/2 × 1.5 × 66 = 49.5. Ошибка: взять цену потребителя вместо цены производителя.\n- **Часть (a)(viii), 1 балл: расчёт.** Максимальный рост реального ВВП = мультипликатор × инвестиции, где мультипликатор = 1 / (1 - c), а c — доля дополнительного дохода, потраченная внутри страны. Пример (условный, c = 0.6): 1 / (1 - 0.6) = 2.5; инвестиции 3.0 млрд EUR дают рост не более 2.5 × 3.0 = 7.5 млрд. Ошибка: использовать долю сбережений вместо доли расходов.\n- **Часть (b), 10 баллов: план.** Рекомендуйте одну основную меру, например субсидию на билеты на поезд для постоянных пассажиров, с повышенным налогом на топливо для автомобилей в поддержку. Довод 1: железная дорога снижает пробки и выбросы, поэтому пассажиры пользуются ею меньше социально оптимального уровня; опирайтесь на данные текста. Довод 2: более низкая цена билета сдвигает спрос к железной дороге, а размер сдвига зависит от ценовой эластичности спроса. Оценка: субсидия имеет бюджетную и альтернативную стоимость; новые пути строятся годами, поэтому краткосрочный и долгосрочный эффекты различаются; субсидии могут быть выгодны более обеспеченным пассажирам. Вывод: назовите меру и условие, при котором лучше инвестиции в новые пути.',
    },
  },
  {
    id: 'econ-p1-m25-tz1',
    subject: 'econ',
    paper: 'P1',
    session: 'M25',
    level: 'HL',
    tz: 'TZ1',
    files: [
      {
        kind: 'questions',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2025%20Examination%20Session/May%202025%20Examination%20Session/Individuals%20and%20societies/Economics_paper_1_TZ1_HL.pdf',
      },
      {
        kind: 'markscheme',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2025%20Examination%20Session/May%202025%20Examination%20Session/Individuals%20and%20societies/Economics_paper_1_TZ1_HL_markscheme.pdf',
      },
    ],
    minutes: 75,
    marks: 25,
    items: [
      {
        q: '1a',
        marks: 10,
        command: 'Explain',
        topicIds: [
          'price-elasticity-of-demand',
        ],
      },
      {
        q: '1b',
        marks: 15,
        command: 'Discuss',
        topicIds: [
          'price-elasticity-of-demand',
          'government-taxes-subsidies-price-controls',
        ],
      },
      {
        q: '2a',
        marks: 10,
        command: 'Explain',
        topicIds: [
          'supply-side-policies',
          'ad-as-model-and-business-cycle',
        ],
      },
      {
        q: '2b',
        marks: 15,
        command: 'Evaluate',
        topicIds: [
          'supply-side-policies',
          'macroeconomic-objectives',
        ],
      },
      {
        q: '3a',
        marks: 10,
        command: 'Explain',
        topicIds: [
          'exchange-rates',
        ],
      },
      {
        q: '3b',
        marks: 15,
        command: 'Discuss',
        topicIds: [
          'exchange-rates',
          'balance-of-payments',
        ],
      },
    ],
    guide: {
      en: 'Time: 1 h 15 min. Plan for about five minutes.\n\n**Question 1** (a) 10 marks, (b) 15 marks\n\n- (a) Plan: Definitions: PED measures how much quantity demanded responds to a price change; inelastic means a small response. Diagram: PED diagram (price vertical, quantity horizontal) with a steep demand curve for primary commodities, while manufactured products get a flatter curve through one point. Chain: if primary commodities have few close substitutes, then buyers cannot switch, so demand is inelastic; if manufactured products have many substitutes, then demand is elastic.\n- (b) Plan: Example: petrol tax (inelastic) against a branded drink discount (elastic). Two points: (1) elastic demand means a firm\'s price cut raises total revenue; (2) a tax on an inelastic good raises more revenue, though consumers bear a larger share. Two evaluation points: (1) PED is hard to measure, since other factors change; (2) firms may prioritise market share, and taxes on necessities hit poorer households hardest. Judgement: PED is a key input, but only one factor in the decision.\n\n**Question 2** (a) 10 marks, (b) 15 marks\n\n- (a) Plan: Definitions: interventionist supply-side policies are state spending on education, health and infrastructure that raises productive capacity. Diagram: AD/AS diagram with AD and LRAS both shifting right; label the old and new equilibria, price level and real GDP. Chain: if state spending rises, then AD rises (demand side); if capacity grows, then LRAS shifts right (supply side), so real GDP rises with a smaller price rise.\n- (b) Plan: Example: UK privatisation and trade union reform in the 1980s. Two points: (1) lower union power and benefits can raise labour supply, cutting structural unemployment; (2) tax cuts and competition raise productivity, shifting LRAS right over time. Two evaluation points: (1) effects take years, and cyclical unemployment needs demand management; (2) cutting benefits and the minimum wage may worsen inequality. Judgement: useful for structural unemployment over time, weaker against cyclical unemployment.\n\n**Question 3** (a) 10 marks, (b) 15 marks\n\n- (a) Plan: Definitions: a floating rate is set by currency demand and supply; a fixed rate is held by the central bank, and changes are devaluation or revaluation. Diagram: exchange rate (currency market) diagram; floating moves to a new equilibrium, fixed needs central bank buying or selling. Chain: if demand for the currency falls under floating rates, then it depreciates; under a fixed rate, reserves are spent buying the currency, so reserves fall.\n- (b) Plan: Example: sterling after the 2016 UK referendum result. Two points: (1) cheaper exports and dearer imports can improve the trade balance if demand responds enough (Marshall-Lerner condition); (2) dearer imports raise prices and cut real household incomes. Two evaluation points: (1) the J-curve means the trade balance may worsen before it improves; (2) the effects depend on how large the currency fall is and on timing. Judgement: depreciation helps only when demand responds and inflation stays under control.',
      ru: 'Время: 1 ч 15 мин. Планируйте около пяти минут.\n\n**Вопрос 1** (a) 10 баллов, (b) 15 баллов\n\n- (a) План: Определения: эластичность спроса по цене (price elasticity of demand, PED) показывает, насколько величина спроса реагирует на изменение цены; неэластичный спрос означает слабую реакцию. Диаграмма: диаграмма PED (цена по вертикали, количество по горизонтали); крутая кривая спроса для сырьевых товаров (primary commodities) и более пологая для промышленных товаров (manufactured products) через одну точку. Цепочка: если у сырьевых товаров мало близких заменителей (substitutes), то покупатели не могут легко переключиться, поэтому спрос неэластичен; если у промышленных товаров много заменителей, то спрос эластичен.\n- (b) План: Пример: налог на бензин (неэластичный спрос) против скидки на брендовый напиток (эластичный спрос). Два аргумента: (1) при эластичном спросе снижение цены фирмы повышает общую выручку (total revenue); (2) налог на неэластичный товар приносит больше доходов, хотя потребители несут большую его часть. Два оценочных пункта: (1) PED трудно измерить, потому что меняются и другие факторы; (2) фирмы могут ставить приоритетом долю рынка, а налоги на товары первой необходимости сильнее бьют по бедным домохозяйствам. Вывод: PED — ключевой фактор, но лишь один из многих при принятии решения.\n\n**Вопрос 2** (a) 10 баллов, (b) 15 баллов\n\n- (a) План: Определения: интервенционистская политика предложения (interventionist supply-side policies) — государственные расходы на образование, здравоохранение и инфраструктуру, которые повышают производственный потенциал. Диаграмма: диаграмма AD/AS; совокупный спрос (aggregate demand, AD) и долгосрочное совокупное предложение (long-run aggregate supply, LRAS) сдвигаются вправо; подпишите старое и новое равновесие, уровень цен и реальный ВВП. Цепочка: если госрасходы растут, то AD растёт (эффект спроса); если потенциал растёт, то LRAS сдвигается вправо (эффект предложения), поэтому реальный ВВП растёт при меньшем росте цен.\n- (b) План: Пример: приватизация и реформа профсоюзов в Великобритании в 1980-х годах. Два аргумента: (1) меньшая власть профсоюзов и более низкие пособия могут увеличить предложение труда и найм, сокращая структурную безработицу (structural unemployment); (2) снижение налогов и рост конкуренции повышают производительность и со временем сдвигают LRAS вправо. Два оценочных пункта: (1) эффекты проявляются годами, а циклическая безработица (cyclical unemployment) требует управления спросом; (2) сокращение пособий и минимальных зарплат может усилить неравенство. Вывод: полезна против структурной безработицы в долгосрочном периоде, слабее против циклической.\n\n**Вопрос 3** (a) 10 баллов, (b) 15 баллов\n\n- (a) План: Определения: плавающий валютный курс (floating exchange rate) задаётся спросом и предложением валюты; фиксированный валютный курс (fixed exchange rate) удерживается центральным банком, а изменения называются девальвацией (devaluation) и ревальвацией. Диаграмма: диаграмма валютного рынка (exchange rate); при плавающем курсе равновесие смещается, при фиксированном центральный банк покупает или продаёт валюту. Цепочка: если спрос на валюту падает при плавающем курсе, то она обесценивается; при фиксированном курсе резервы тратятся на покупку собственной валюты, поэтому резервы падают.\n- (b) План: Пример: фунт стерлингов после результатов референдума 2016 года в Великобритании. Два аргумента: (1) более дешёвый экспорт и более дорогой импорт могут улучшить торговый баланс, если спрос достаточно чувствителен (условие Маршалла–Лернера, Marshall-Lerner condition); (2) более дорогой импорт повышает цены и снижает реальные доходы домохозяйств. Два оценочных пункта: (1) J-кривая (J-curve) означает, что торговый баланс может ухудшиться, прежде чем улучшиться; (2) эффекты зависят от размера обесценивания и временного горизонта. Вывод: обесценивание помогает, только если спрос реагирует и инфляция под контролем.',
    },
  },
  {
    id: 'econ-p1-m25-tz2',
    subject: 'econ',
    paper: 'P1',
    session: 'M25',
    level: 'HL',
    tz: 'TZ2',
    files: [
      {
        kind: 'questions',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2025%20Examination%20Session/May%202025%20Examination%20Session/Individuals%20and%20societies/Economics_paper_1_TZ2_HL.pdf',
      },
      {
        kind: 'markscheme',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2025%20Examination%20Session/May%202025%20Examination%20Session/Individuals%20and%20societies/Economics_paper_1_TZ2_HL_markscheme.pdf',
      },
    ],
    minutes: 75,
    marks: 25,
    items: [
      {
        q: '1a',
        marks: 10,
        command: 'Explain',
        topicIds: [
          'income-and-cross-elasticity',
          'demand',
        ],
      },
      {
        q: '1b',
        marks: 15,
        command: 'Evaluate',
        topicIds: [
          'externalities',
          'government-taxes-subsidies-price-controls',
        ],
      },
      {
        q: '2a',
        marks: 10,
        command: 'Explain',
        topicIds: [
          'fiscal-policy',
          'balance-of-payments',
        ],
      },
      {
        q: '2b',
        marks: 15,
        command: 'Discuss',
        topicIds: [
          'fiscal-policy',
          'macroeconomic-objectives',
        ],
      },
      {
        q: '3a',
        marks: 10,
        command: 'Explain',
        topicIds: [
          'trade-protection',
        ],
      },
      {
        q: '3b',
        marks: 15,
        command: 'Evaluate',
        topicIds: [
          'benefits-of-trade',
          'arguments-for-and-against-trade-control',
        ],
      },
    ],
    guide: {
      en: 'Time: 1 h 15 min. Plan for about five minutes.\n\n**Question 1** (a) 10 marks, (b) 15 marks\n\n- (a) Plan: Definitions: YED is the responsiveness of demand to a change in income; inferior goods have negative YED. Diagram: Engel curve with income on the horizontal axis; a steep rising curve for income-elastic services, a flatter rising curve for income-inelastic primary goods, and a downward curve for inferior goods. Chain: if real incomes rise, then demand for services rises faster, so services grow relative to the primary sector.\n- (b) Plan: Example: England\'s 2007 smoking ban in enclosed public places. Two points: (1) legislation forces compliance, so it can cut demand for demerit goods directly; (2) age limits and warnings are cheap to enforce and need no extra tax revenue. Two evaluation points: (1) enforcement costs and black markets limit success; (2) taxes, education, nudges and subsidies are alternatives, but taxes can hit low incomes hardest. Judgement: legislation is fast and direct, but judging the word best requires comparing it with these alternatives.\n\n**Question 2** (a) 10 marks, (b) 15 marks\n\n- (a) Plan: Definitions: fiscal policy is government spending and taxation; contractionary fiscal policy lowers aggregate demand (AD). Diagram: AD/AS diagram with AD shifting left; label both AD curves and the new price level and real GDP. Chain: if AD falls, then incomes and import demand fall; if prices fall, then exports become more competitive, so the current account deficit narrows.\n- (b) Plan: Example: stimulus packages in several economies after the 2008 financial crisis. Two points: (1) expansionary tax cuts or extra spending raise AD and labour demand, cutting cyclical unemployment; (2) the multiplier amplifies the initial spending, creating more jobs than the first round. Two evaluation points: (1) time lags and political pressure delay the effect, and crowding out may limit it; (2) fiscal policy suits demand-deficient unemployment, while structural unemployment needs supply-side policies. Judgement: fiscal policy is effective against cyclical unemployment, but not the most effective tool in every case.\n\n**Question 3** (a) 10 marks, (b) 15 marks\n\n- (a) Plan: Definitions: a tariff is a tax on imports and a quota is a limit on imports; both are forms of trade protection. Diagram: tariff diagram showing a higher domestic price, more domestic output and fewer imports. Chain: if a tariff raises import prices, then domestic firms face less competition; if a quota caps imports, then prices rise further.\n- (b) Plan: Example: export-led growth in several East Asian economies, without figures. Two points: (1) specialising by comparative advantage raises total output and trade, with cheaper imports for consumers; (2) resources move to where opportunity costs are lowest, so world output can rise (PPC). Two evaluation points: (1) free factor movement, full employment and zero transport costs are unrealistic assumptions; (2) infant industries may need protection, and over-specialisation exposes an economy to commodity shocks. Judgement: specialisation suits most countries, but the word all is too strong a claim.',
      ru: 'Время: 1 ч 15 мин. Планируйте около пяти минут.\n\n**Вопрос 1** (a) 10 баллов, (b) 15 баллов\n\n- (a) План: Определения: эластичность спроса по доходу (income elasticity of demand, YED) — чувствительность спроса к изменению дохода; у товаров низшей категории (inferior goods) YED отрицательна. Диаграмма: кривая Энгеля (Engel curve) с доходом по горизонтали; круто растущая кривая для услуг с высокой эластичностью по доходу, более пологая для первичного сектора (primary sector) и убывающая кривая для товаров низшей категории. Цепочка: если реальные доходы растут, то спрос на услуги растёт быстрее, поэтому сектор услуг растёт относительно первичного сектора.\n- (b) План: Пример: запрет курения в закрытых общественных местах в Англии, закон 2007 года. Два аргумента: (1) законодательство обеспечивает соблюдение и может напрямую сократить спрос на товары-антизаслуги (demerit goods); (2) возрастные ограничения и предупреждения дёшевы в исполнении и не требуют дополнительных налоговых поступлений. Два оценочных пункта: (1) издержки контроля и чёрный рынок ограничивают успех; (2) налоги, образование, подталкивание (nudges) и субсидии на заменители — альтернативы, а налоги могут сильнее всего бить по низким доходам. Вывод: законодательство быстрое и прямое, но оценка «лучшего» требует сравнения с этими альтернативами.\n\n**Вопрос 2** (a) 10 баллов, (b) 15 баллов\n\n- (a) План: Определения: фискальная политика (fiscal policy) — государственные расходы и налоги; сдерживающая фискальная политика (contractionary fiscal policy) снижает совокупный спрос (aggregate demand, AD). Диаграмма: диаграмма AD/AS; AD сдвигается влево, поэтому уровень цен и реальный ВВП падают; подпишите обе кривые AD и равновесия. Цепочка: если AD падает, то доходы и спрос на импорт падают; если цены снижаются, то экспорт становится конкурентнее, поэтому дефицит текущего счёта (current account deficit) сокращается.\n- (b) План: Пример: пакеты стимулирования в нескольких экономиках после финансового кризиса 2008 года. Два аргумента: (1) расширяющие налоговые снижения или дополнительные расходы повышают AD и спрос на труд, сокращая циклическую безработицу (cyclical unemployment); (2) мультипликатор (multiplier) усиливает первоначальные расходы и создаёт больше рабочих мест, чем первый раунд. Два оценочных пункта: (1) временные лаги и политическое давление задерживают эффект, а эффект вытеснения (crowding out) может его ограничить; (2) фискальная политика подходит для безработицы из-за недостатка спроса, а структурная безработица (structural unemployment) требует политики предложения. Вывод: фискальная политика эффективна против циклической безработицы, но не во всех случаях самый эффективный инструмент.\n\n**Вопрос 3** (a) 10 баллов, (b) 15 баллов\n\n- (a) План: Определения: тариф (tariff) — налог на импорт, квота (quota) — ограничение объёма импорта; это формы торговой защиты (trade protection). Диаграмма: диаграмма тарифа; внутренняя цена растёт до мировой плюс тариф, поэтому выпуск растёт, а импорт падает. Цепочка: если тариф повышает цены импорта, то местные фирмы получают меньше конкуренции; если квота ограничивает импорт, то цены растут сильнее.\n- (b) План: Пример: экспортно ориентированный рост в нескольких экономиках Восточной Азии, без цифр. Два аргумента: (1) специализация по сравнительному преимуществу (comparative advantage) повышает общий выпуск и торговлю, давая потребителям более дешёвый импорт; (2) ресурсы перетекают туда, где альтернативные издержки (opportunity costs) ниже, поэтому мировой выпуск может вырасти (кривая производственных возможностей, PPC). Два оценочных пункта: (1) допущения о свободном перемещении факторов, полной занятости и отсутствии транспортных издержек нереалистичны; (2) молодым отраслям (infant industries) может понадобиться защита, а чрезмерная специализация подвергает экономику шокам цен на сырьевые товары. Вывод: специализация подходит большинству стран, но слово «все» (all) — слишком сильное утверждение.',
    },
  },
  {
    id: 'econ-p1-m25-tz3',
    subject: 'econ',
    paper: 'P1',
    session: 'M25',
    level: 'HL',
    tz: 'TZ3',
    files: [
      {
        kind: 'questions',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2025%20Examination%20Session/May%202025%20Examination%20Session/Individuals%20and%20societies/Economics_paper_1_TZ3_HL.pdf',
      },
      {
        kind: 'markscheme',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2025%20Examination%20Session/May%202025%20Examination%20Session/Individuals%20and%20societies/Economics_paper_1_TZ3_HL_markscheme.pdf',
      },
    ],
    minutes: 75,
    marks: 25,
    items: [
      {
        q: '1a',
        marks: 10,
        command: 'Explain',
        topicIds: [
          'elasticity-of-supply',
        ],
      },
      {
        q: '1b',
        marks: 15,
        command: 'Discuss',
        topicIds: [
          'government-taxes-subsidies-price-controls',
          'competitive-market-equilibrium',
        ],
      },
      {
        q: '2a',
        marks: 10,
        command: 'Explain',
        topicIds: [
          'inequality-and-poverty',
        ],
      },
      {
        q: '2b',
        marks: 15,
        command: 'Evaluate',
        topicIds: [
          'inequality-and-poverty',
          'government-taxes-subsidies-price-controls',
        ],
      },
      {
        q: '3a',
        marks: 10,
        command: 'Explain',
        topicIds: [
          'balance-of-payments',
          'exchange-rates',
        ],
      },
      {
        q: '3b',
        marks: 15,
        command: 'Evaluate',
        topicIds: [
          'balance-of-payments',
          'exchange-rates',
        ],
      },
    ],
    guide: {
      en: 'Time: 1 h 15 min. Plan for about five minutes.\n\n**Question 1** (a) 10 marks, (b) 15 marks\n\n- (a) Plan: Definitions: PES is the responsiveness of quantity supplied to a price change; inelastic supply means output changes little. Diagram: PES diagram with a steep supply curve for primary commodities, while manufactured goods get a flatter one. Chain: if extraction or farming cannot expand quickly, then supply is inelastic; if factories can add shifts or hold stock, then supply is elastic.\n- (b) Plan: Example: the UK soft drinks levy introduced in 2018. Two points: (1) the tax shifts supply left, so price rises, quantity falls and the government collects revenue; (2) consumers and producers share the burden, and the split depends on PED and PES. Two evaluation points: (1) indirect taxes are regressive, so low-income households are hit harder; (2) if the tax corrects an externality, allocative efficiency may improve; otherwise deadweight loss may appear. Judgement: the outcome depends on elasticities and on the purpose of the tax.\n\n**Question 2** (a) 10 marks, (b) 15 marks\n\n- (a) Plan: Definitions: the Lorenz curve plots cumulative income against cumulative population; the Gini coefficient summarises it in one number (0 is equality, 1 is maximum inequality). Diagram: Lorenz curve diagram with the diagonal line of equality; shade the area between the curve and the diagonal. Chain: if the curve bows further from the equality line, then income is more unequal, so the shaded area grows, pushing the Gini coefficient closer to 1.\n- (b) Plan: Example: the Nordic countries, with progressive income tax and transfers. Two points: (1) progressive income tax takes a larger share of high incomes; (2) revenue funds transfers and public services, shifting the Lorenz curve towards equality. Two evaluation points: (1) higher taxes on high earners may reduce work, saving and investment; (2) education, minimum wages and transfers also reduce inequality. Judgement: progressive tax is important but not clearly the most effective tool.\n\n**Question 3** (a) 10 marks, (b) 15 marks\n\n- (a) Plan: Definitions: a persistent current account deficit means imports exceed exports every year. Diagram: exchange rate diagram with currency supply shifting right; label the depreciation. Chain: if imports persistently exceed exports, then the currency depreciates, and higher interest rates may attract the foreign funds needed.\n- (b) Plan: Example: Thailand after the 1997 currency crisis. Two points: (1) depreciation makes exports cheaper and imports dearer, so net exports can rise if demand is elastic enough; (2) expenditure switching moves spending to domestic goods. Two evaluation points: (1) the J-curve and the Marshall-Lerner condition may delay the benefit; (2) higher import prices can fuel cost-push inflation; real incomes then fall. Judgement: depreciation helps, but it is rarely the best tool alone; expenditure-reducing policies may also be needed.',
      ru: 'Время: 1 ч 15 мин. Планируйте около пяти минут.\n\n**Вопрос 1** (a) 10 баллов, (b) 15 баллов\n\n- (a) План: Определения: эластичность предложения по цене (price elasticity of supply, PES) — чувствительность величины предложения к изменению цены; неэластичное предложение означает слабое изменение выпуска. Диаграмма: диаграмма PES; крутая кривая предложения для сырьевых товаров (primary commodities) и более пологая для промышленных товаров (manufactured goods) через одну точку. Цепочка: если добыча или сельское хозяйство не могут быстро расшириться, то предложение неэластично; если фабрики могут добавить смены или держать запасы, то предложение эластично.\n- (b) План: Пример: британский налог на сахаросодержащие напитки (soft drinks levy), введённый в 2018 году. Два аргумента: (1) налог сдвигает предложение влево, поэтому цена растёт, объём падает, а государство получает доходы; (2) потребители и производители делят бремя налога, и доля зависит от PED и PES. Два оценочных пункта: (1) косвенные налоги (indirect taxes) регрессивны, поэтому низкодоходные домохозяйства страдают сильнее; (2) если налог исправляет внешний эффект, эффективность распределения (allocative efficiency) может вырасти, а иначе возможна потеря эффективности (deadweight loss). Вывод: результат зависит от эластичностей и от цели налога.\n\n**Вопрос 2** (a) 10 баллов, (b) 15 баллов\n\n- (a) План: Определения: кривая Лоренца (Lorenz curve) показывает накопленную долю дохода против накопленной доли населения; коэффициент Джини (Gini coefficient) суммирует её одним числом (0 — полное равенство, 1 — максимальное неравенство). Диаграмма: кривая Лоренца с диагональю равенства; заштрихуйте площадь между кривой и диагональю. Цепочка: если кривая отходит дальше от линии равенства, то доходы неравнее; поэтому заштрихованная площадь растёт, а коэффициент Джини приближается к 1.\n- (b) План: Пример: северные страны, которые сочетают прогрессивный подоходный налог (progressive income tax) с трансфертами и госуслугами. Два аргумента: (1) прогрессивный налог забирает большую долю высоких доходов; (2) собранные средства финансируют трансферты и госуслуги, сдвигая кривую Лоренца к равенству. Два оценочных пункта: (1) более высокие налоги для высокооплачиваемых могут снизить работу, сбережения и инвестиции; (2) образование, минимальные зарплаты и трансферты тоже сокращают неравенство. Вывод: прогрессивный налог — важный инструмент, но не очевидно самый эффективный.\n\n**Вопрос 3** (a) 10 баллов, (b) 15 баллов\n\n- (a) План: Определения: текущий счёт (current account) — торговля товарами, услугами и доходами; устойчивый дефицит означает, что импорт превышает экспорт каждый год. Диаграмма: диаграмма валютного рынка; предложение валюты сдвигается вправо, и валюта обесценивается. Цепочка: если импорт устойчиво превышает экспорт, то валюта обесценивается, а для привлечения нужного иностранного капитала процентные ставки могут вырасти, поэтому иностранцы владеют всё большей частью внутренних активов.\n- (b) План: Пример: Таиланд после валютного кризиса 1997 года и падения бата. Два аргумента: (1) обесценивание делает экспорт дешевле, а импорт дороже, поэтому чистый экспорт может вырасти, если спрос достаточно эластичен; (2) переключение расходов (expenditure switching) переводит спрос с иностранных товаров на отечественные. Два оценочных пункта: (1) J-кривая (J-curve) и условие Маршалла–Лернера (Marshall-Lerner condition) могут отложить выгоду или сделать её нулевой; (2) более дорогой импорт может вызвать инфляцию издержек (cost-push inflation) и снизить реальные доходы. Вывод: обесценивание помогает, но редко бывает лучшим инструментом само по себе; могут понадобиться сокращение расходов и политика предложения.',
    },
  },
  {
    id: 'econ-p2-m25-tz1',
    subject: 'econ',
    paper: 'P2',
    session: 'M25',
    level: 'SLHL',
    tz: 'TZ1',
    files: [
      {
        kind: 'questions',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2025%20Examination%20Session/May%202025%20Examination%20Session/Individuals%20and%20societies/Economics_paper_2_TZ1_HLSL.pdf',
      },
      {
        kind: 'markscheme',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2025%20Examination%20Session/May%202025%20Examination%20Session/Individuals%20and%20societies/Economics_paper_2_TZ1_HLSL_markscheme.pdf',
      },
    ],
    minutes: 105,
    marks: 40,
    items: [
      {
        q: '1a(i)',
        marks: 2,
        command: 'Define',
        topicIds: [
          'macroeconomic-objectives',
        ],
      },
      {
        q: '1a(ii)',
        marks: 2,
        command: 'Define',
        topicIds: [
          'policies-for-growth-and-development',
        ],
      },
      {
        q: '1b(i)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'elasticity-of-supply',
        ],
      },
      {
        q: '1b(ii)',
        marks: 1,
        command: 'Calculate',
        topicIds: [
          'supply',
        ],
      },
      {
        q: '1b(iii)',
        marks: 2,
        command: 'Sketch',
        topicIds: [
          'competitive-market-equilibrium',
          'demand',
          'supply',
        ],
      },
      {
        q: '1c',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'trade-protection',
        ],
      },
      {
        q: '1d',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'exchange-rates',
          'monetary-policy',
        ],
      },
      {
        q: '1e',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'ad-as-model-and-business-cycle',
          'barriers-to-growth-and-development',
        ],
      },
      {
        q: '1f',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'inequality-and-poverty',
          'measuring-development',
        ],
      },
      {
        q: '1g',
        marks: 15,
        command: 'Discuss',
        topicIds: [
          'sustainable-development',
          'externalities',
        ],
      },
      {
        q: '2a(i)',
        marks: 2,
        command: 'Define',
        topicIds: [
          'macroeconomic-objectives',
        ],
      },
      {
        q: '2a(ii)',
        marks: 2,
        command: 'Define',
        topicIds: [
          'what-is-economics',
        ],
      },
      {
        q: '2b(i)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'measuring-economic-activity',
        ],
      },
      {
        q: '2b(ii)',
        marks: 1,
        command: 'Calculate',
        topicIds: [
          'measuring-economic-activity',
          'measuring-development',
        ],
      },
      {
        q: '2b(iii)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'measuring-economic-activity',
        ],
      },
      {
        q: '2c',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'ad-as-model-and-business-cycle',
          'benefits-of-trade',
        ],
      },
      {
        q: '2d',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'supply',
          'competitive-market-equilibrium',
        ],
      },
      {
        q: '2e',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'exchange-rates',
          'balance-of-payments',
        ],
      },
      {
        q: '2f',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'externalities',
          'government-taxes-subsidies-price-controls',
        ],
      },
      {
        q: '2g',
        marks: 15,
        command: 'Evaluate',
        topicIds: [
          'policies-for-growth-and-development',
          'sustainable-development',
          'measuring-development',
        ],
      },
    ],
    guide: {
      en: 'Time: 1 h 45 min.\n\n**Question 1**\n\n- **Part (b)(i), 2 marks: calculation.** Formula: $PES = (\\Delta Q / Q_1) / (\\Delta P / P_1)$, where $\\Delta$ means new minus old. Read the old and new quantity and price from the tea table (Table 1). Step 1: percentage change in quantity = (new − old) / old × 100. Step 2: the same for price. Step 3: divide one change by the other; the × 100 cancels. Round to two decimal places. Worked example (illustrative): quantity 300 to 350 gives 16.67%; price 40 to 44 gives 10.00%; PES = 16.67 / 10.00 = 1.67. Common mistake: using the new value as the base.\n\n- **Part (b)(ii), 1 mark: calculation.** Formula: total revenue = price × quantity, $TR = P \\times Q$. Use the 2022 price per kilogram and quantity from Table 1 and keep the units: millions of kilograms times KES per kilogram gives millions of KES. Worked example (illustrative): price 50 and quantity 1200 (million units) give 50 × 1200 = 60000 (million currency units). Common mistake: taking the 2021 column.\n\n- **Part (g), 15 marks: plan.** Command term: Discuss means a balanced review with several arguments. Point 1: Table 2 shows real GDP per capita rising, so energy and transport use grow; Text C says transport and manufacturing rely on fossil fuels, so pollution, a negative externality, can rise. Point 2: Text A (paragraph 4) says growth raised tax revenue, which can fund green energy and reforestation (Text C, paragraph 4). Evaluation 1, short and long run: pollution can outpace clean capacity in the short run, while cleaner technology and carbon taxes can cut emissions per unit of output in the long run. Evaluation 2, stakeholders and size: the result depends on the share of renewable energy and on enforcement; farmers and tourism depend on a clean environment. Judgement: high growth harms sustainability only when it relies on fossil fuels and weak regulation.\n\n**Question 2**\n\n- **Part (b)(i), 2 marks: calculation.** Formula: real GDP = nominal GDP / GDP deflator × 100, where the deflator is a price index (base year 100). Take 2021 nominal GDP and the deflator from Table 4. Round to two decimal places. Worked example (illustrative): nominal GDP 1000 and deflator 130 give 1000 / 130 × 100 = 769.23 (USD million). Common mistake: forgetting the × 100 (answer 100 times too small).\n\n- **Part (b)(ii), 1 mark: calculation.** Formula: nominal GDP per capita = nominal GDP / population. Use Table 4 and match units: USD million divided by million people gives USD per person. Worked example (illustrative): nominal GDP 520 (USD million) and population 0.35 million give 520 / 0.35 = 1485.71 USD per person. Common mistake: using real GDP.\n\n- **Part (b)(iii), 2 marks: calculation.** Formula: GNI = nominal GDP + net income from abroad. A negative net income is an outflow, so GNI is below GDP. Work out GNI for both years, then subtract 2008 from 2021 and keep the sign. Worked example (illustrative): GDP 1000 with an outflow of 50 gives GNI = 1000 − 50 = 950; GDP 1200 with an outflow of 40 gives GNI = 1200 − 40 = 1160; the change is 1160 − 950 = 210. Common mistake: adding the outflow as if it were income.\n\n- **Part (g), 15 marks: plan.** Evaluate: weigh strengths against limitations. Point 1 (strength): hydropower income funds health, education and roads (Text D, paragraph 4); Table 5 shows gains in life expectancy. Point 2 (limitation): most trade is with India and the currency is pegged to the Indian rupee (Text F); the private sector creates few jobs (Text D, paragraph 5). Evaluation 1, short and long run: hydropower income is large now but depends on India\'s demand and on water flows. Evaluation 2, stakeholders: rural households gain from cheaper power, young job seekers may not; the sustainability tax assumes tourists respond to price. Judgement: clear welfare gains, but long-run success needs private investment and less dependence on one buyer.',
      ru: 'Время: 1 ч 45 мин.\n\n**Вопрос 1**\n\n- **Часть (b)(i), 2 балла: расчёт.** Формула: $PES = (\\Delta Q / Q_1) / (\\Delta P / P_1)$, где $\\Delta$ означает «новое минус старое». Возьмите старое и новое количество и цену из таблицы по чаю (Table 1). Шаг 1: процентное изменение количества = (новое − старое) / старое × 100. Шаг 2: то же для цены. Шаг 3: разделите одно изменение на другое; множитель × 100 сокращается. Округлите до двух знаков после запятой. Пример (иллюстративный, не из работы): количество с 300 до 350 даёт 16.67%; цена с 40 до 44 даёт 10.00%; эластичность предложения по цене (price elasticity of supply) PES = 16.67 / 10.00 = 1.67. Частая ошибка: брать новое значение за базу.\n\n- **Часть (b)(ii), 1 балл: расчёт.** Формула: общая выручка (total revenue) = цена × количество, $TR = P \\times Q$. Возьмите цену за килограмм и количество за 2022 год из таблицы 1 (Table 1) и сохраняйте единицы: миллионы килограммов, умноженные на KES за килограмм, дают миллионы KES. Пример (иллюстративный): цена 50 и количество 1200 (миллион единиц) дают 50 × 1200 = 60000 (миллион денежных единиц). Частая ошибка: брать колонку 2021 года.\n\n- **Часть (g), 15 баллов: план.** Командный термин «обсудить» (Discuss) означает взвешенный обзор с несколькими аргументами. Довод 1: таблица 2 показывает рост реального ВВП на душу населения, значит, растут потребление энергии и транспорта; текст C говорит, что транспорт и производство опираются на ископаемое топливо, поэтому загрязнение, негативный внешний эффект (negative externality), может расти. Довод 2: текст A (абзац 4) говорит, что рост увеличил налоговые поступления, которые могут финансировать «зелёную» энергетику и лесовосстановление (текст C, абзац 4). Оценка 1, краткосрочный и долгосрочный периоды: в краткосрочном периоде загрязнение может опережать чистые мощности, а в долгосрочном чистые технологии и углеродные налоги могут снизить выбросы на единицу выпуска. Оценка 2, заинтересованные стороны и размер эффекта: результат зависит от доли возобновляемой энергии и от соблюдения правил; фермеры и туризм зависят от чистой среды. Вывод: высокий рост вредит устойчивости только тогда, когда опирается на ископаемое топливо и слабое регулирование.\n\n**Вопрос 2**\n\n- **Часть (b)(i), 2 балла: расчёт.** Формула: реальный ВВП (real GDP) = номинальный ВВП / дефлятор ВВП × 100, где дефлятор — индекс цен (базовый год 100). Возьмите номинальный ВВП за 2021 год (миллион USD) и дефлятор 2021 года из таблицы 4 (Table 4). Округлите до двух знаков после запятой. Пример (иллюстративный): номинальный ВВП 1000 и дефлятор 130 дают 1000 / 130 × 100 = 769.23. Частая ошибка: забыть × 100 (ответ в 100 раз меньше).\n\n- **Часть (b)(ii), 1 балл: расчёт.** Формула: номинальный ВВП на душу населения = номинальный ВВП / население. Используйте таблицу 4 (Table 4) и сверьте единицы: миллионы USD, делённые на миллионы человек, дают USD на человека. Пример (иллюстративный): номинальный ВВП 520 (миллион USD) и население 0.35 миллиона дают 520 / 0.35 = 1485.71 USD на человека. Частая ошибка: брать реальный ВВП.\n\n- **Часть (b)(iii), 2 балла: расчёт.** Формула: ВНД (GNI) = номинальный ВВП + чистый доход из-за рубежа. Отрицательный чистый доход — это отток, поэтому ВНД ниже ВВП. Рассчитайте ВНД за оба года, затем вычтите значение 2008 года из значения 2021 года и сохраните знак. Пример (иллюстративный): ВВП 1000 с оттоком 50 дают ВНД = 1000 − 50 = 950; ВВП 1200 с оттоком 40 дают ВНД = 1200 − 40 = 1160; изменение равно 1160 − 950 = 210. Частая ошибка: прибавлять отток, как будто это доход.\n\n- **Часть (g), 15 баллов: план.** Оценить (Evaluate) — значит взвесить сильные стороны и ограничения. Довод 1 (сильная сторона): доход от гидроэнергетики финансирует здравоохранение, образование и дороги (текст D, абзац 4); таблица развития показывает рост ожидаемой продолжительности жизни и меньшее неравенство. Довод 2 (ограничение): большая часть торговли приходится на Индию, а валюта привязана к рупии (текст F); частный сектор создаёт мало рабочих мест (текст D, абзац 5). Оценка 1, краткосрочный и долгосрочный периоды: доход от гидроэнергетики сейчас велик, но зависит от спроса Индии и водного стока. Оценка 2, заинтересованные стороны и допущения: сельские домохозяйства выигрывают от дешёвой энергии, молодые соискатели работы — нет; налог на устойчивость предполагает, что туристы реагируют на цену. Вывод: явные выгоды для благосостояния, но долгосрочный успех требует частных инвестиций и меньшей зависимости от одного покупателя.',
    },
  },
  {
    id: 'econ-p2-m25-tz2',
    subject: 'econ',
    paper: 'P2',
    session: 'M25',
    level: 'SLHL',
    tz: 'TZ2',
    files: [
      {
        kind: 'questions',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2025%20Examination%20Session/May%202025%20Examination%20Session/Individuals%20and%20societies/Economics_paper_2_TZ2_HLSL.pdf',
      },
      {
        kind: 'markscheme',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2025%20Examination%20Session/May%202025%20Examination%20Session/Individuals%20and%20societies/Economics_paper_2_TZ2_HLSL_markscheme.pdf',
      },
    ],
    minutes: 105,
    marks: 40,
    items: [
      {
        q: '1a(i)',
        marks: 2,
        command: 'Define',
        topicIds: [
          'government-taxes-subsidies-price-controls',
        ],
      },
      {
        q: '1a(ii)',
        marks: 2,
        command: 'Define',
        topicIds: [
          'externalities',
          'government-taxes-subsidies-price-controls',
        ],
      },
      {
        q: '1b(i)',
        marks: 1,
        command: 'Calculate',
        topicIds: [
          'balance-of-payments',
        ],
      },
      {
        q: '1b(ii)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'exchange-rates',
        ],
      },
      {
        q: '1b(iii)',
        marks: 2,
        command: 'Sketch',
        topicIds: [
          'economic-models',
          'what-is-economics',
        ],
      },
      {
        q: '1c',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'exchange-rates',
          'benefits-of-trade',
        ],
      },
      {
        q: '1d',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'price-elasticity-of-demand',
          'competitive-market-equilibrium',
        ],
      },
      {
        q: '1e',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'externalities',
          'equity-and-market-failure',
        ],
      },
      {
        q: '1f',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'ad-as-model-and-business-cycle',
          'balance-of-payments',
        ],
      },
      {
        q: '1g',
        marks: 15,
        command: 'Discuss',
        topicIds: [
          'inequality-and-poverty',
          'measuring-development',
        ],
      },
      {
        q: '2a(i)',
        marks: 2,
        command: 'Define',
        topicIds: [
          'barriers-to-growth-and-development',
        ],
      },
      {
        q: '2a(ii)',
        marks: 2,
        command: 'Define',
        topicIds: [
          'policies-for-growth-and-development',
        ],
      },
      {
        q: '2b(i)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'measuring-economic-activity',
        ],
      },
      {
        q: '2b(ii)',
        marks: 1,
        command: 'Calculate',
        topicIds: [
          'measuring-economic-activity',
          'measuring-development',
        ],
      },
      {
        q: '2b(iii)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'exchange-rates',
        ],
      },
      {
        q: '2c',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'ad-as-model-and-business-cycle',
          'benefits-of-trade',
        ],
      },
      {
        q: '2d',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'supply',
          'competitive-market-equilibrium',
        ],
      },
      {
        q: '2e',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'exchange-rates',
          'balance-of-payments',
        ],
      },
      {
        q: '2f',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'externalities',
          'government-taxes-subsidies-price-controls',
        ],
      },
      {
        q: '2g',
        marks: 15,
        command: 'Evaluate',
        topicIds: [
          'policies-for-growth-and-development',
          'sustainable-development',
          'measuring-development',
        ],
      },
    ],
    guide: {
      en: 'Time: 1 h 45 min.\n\n**Question 1**\n\n- **Part (b)(i), 1 mark: calculation.** Formula: current account = exports of goods and services − imports of goods and services + net income + net current transfers. Read goods exports, goods imports, the services balance, the income line and the current transfers from Table 1 (the 2023 payments table). Add the services balance to goods exports, subtract goods imports, then add the income and transfer lines with their own signs. The answer is in USD billion; a negative value is a deficit. Round to two decimal places. Worked example (illustrative): exports of goods plus net services 10.0, imports 12.5, income -2.0, transfers 1.5 give 10.0 − 12.5 + (-2.0) + 1.5 = -3.00. Common mistakes: subtracting a negative income line; treating imports as an addition.\n\n- **Part (b)(ii), 2 marks: calculation.** Formula: price in USD = price in KES / exchange rate (currency units per USD). Take the price per kilogram given in the question and the 2022 exchange rate from Table 2, then divide. Units: USD per kilogram, two decimal places. Worked example (illustrative): price 250 KES and an exchange rate of 100 KES per USD give 250 / 100 = 2.50 USD. Common mistakes: multiplying by the exchange rate; using the 2015 column.\n\n- **Part (g), 15 marks: plan.** Command term: Discuss means a balanced review. Point 1: growth raises incomes and formal-sector jobs (Text A, paragraph 1), but the gaps between formal and informal work and between cities and the countryside remain (Text B, paragraph 1). Point 2: Table 3 shows the Gini coefficient lower, yet absolute poverty higher, so the gains are uneven. Evaluation 1, short and long run: growth can widen gaps at first and narrow them later through education and credit (Text B, paragraphs 3 and 4). Evaluation 2, stakeholders and reliability: rural farmers and informal workers gain less than urban formal firms, and the 2022 values are estimates, so conclusions are tentative. Judgement: high growth reduces inequality only when rural and informal workers gain access to education, finance and services.\n\n**Question 2**\n\n- **Part (b)(i), 2 marks: calculation.** Formula: GDP deflator = nominal GDP / real GDP × 100. Read 2021 nominal and real GDP from Table 4. Round to two decimal places. Worked example (illustrative): nominal GDP 600 and real GDP 480 give 600 / 480 × 100 = 125.00. Common mistakes: inverting the ratio; forgetting the × 100, which gives 1.25.\n\n- **Part (b)(ii), 1 mark: calculation.** Formula: real GDP per capita = real GDP / population. Take real GDP (USD million) and the 2008 population from Table 4; USD million divided by million people gives USD per person. Worked example (illustrative): real GDP 480 (USD million) and population 0.36 million give 480 / 0.36 = 1333.33 USD per person. Common mistake: using nominal GDP.\n\n- **Part (b)(iii), 2 marks: calculation.** Formula: amount in BTN = amount in USD × exchange rate (BTN for each USD). Use the 2021 exchange rate from Table 4 and the USD amount in the question. Units: USD million × BTN per USD gives BTN million. Worked example (illustrative): 0.5 million USD at 72 BTN per USD gives 0.5 × 72 = 36.00 million BTN. Common mistake: dividing by the rate, which converts in the wrong direction.\n\n- **Part (g), 15 marks: plan.** Evaluate: weigh up strengths and limitations. Point 1 (strength): hydropower income funds healthcare and education (Text D, paragraph 4); Table 5 shows higher life expectancy and better sanitation. Point 2 (limitation): Bhutan depends on India for trade and finance (Text F; Text D, paragraph 3); the private sector creates few jobs and youth unemployment is high (Text D, paragraph 5; Text E). Evaluation 1, short and long run: hydropower revenue is large now but depends on India\'s demand; fertilizer restrictions (Text D, paragraph 7) may slow farm output, while food imports weigh on the balance of payments (Text D, paragraph 6). Evaluation 2, stakeholders and assumptions: rural households gain from electricity, young job seekers and farmers less; the analysis assumes Indian demand and the fixed exchange rate hold. Judgement: strong welfare gains, but long-run success requires diversification.',
      ru: 'Время: 1 ч 45 мин.\n\n**Вопрос 1**\n\n- **Часть (b)(i), 1 балл: расчёт.** Формула: текущий счёт (current account) = экспорт товаров и услуг − импорт товаров и услуг + чистый доход + чистые текущие трансферты. Возьмите экспорт товаров, импорт товаров, баланс услуг, строку доходов и текущие трансферты из таблицы 1 (Table 1, счета платёжного баланса). Прибавьте баланс услуг к экспорту товаров, вычтите импорт, затем прибавьте доход и трансферты с их знаками. Ответ в миллиардах USD; отрицательное значение означает дефицит. Округлите до двух знаков после запятой. Пример (иллюстративный): экспорт товаров с чистыми услугами 10.0, импорт 12.5, доход -2.0, трансферты 1.5 дают 10.0 − 12.5 + (-2.0) + 1.5 = -3.00. Частые ошибки: вычитать отрицательный доход; считать импорт прибавкой.\n\n- **Часть (b)(ii), 2 балла: расчёт.** Формула: цена в USD = цена в KES / обменный курс (KES за USD). Возьмите цену за килограмм из вопроса и курс 2022 года из таблицы 2 (Table 2) и разделите. Единицы: USD за килограмм, два знака после запятой. Пример (иллюстративный): цена 250 KES и курс 100 KES за USD дают 250 / 100 = 2.50 USD. Частые ошибки: умножать на курс; брать колонку 2015 года.\n\n- **Часть (g), 15 баллов: план.** Командный термин «обсудить» (Discuss) означает взвешенный обзор. Довод 1: рост повышает доходы и рабочие места в формальном секторе (текст A, абзац 1), но разрыв между формальным и неформальным трудом и между городом и селом сохраняется (текст B, абзац 1). Довод 2: таблица 3 показывает более низкий коэффициент Джини, но более высокую абсолютную бедность, значит, выгоды распределены неравномерно. Оценка 1, краткосрочный и долгосрочный периоды: рост сначала может расширить разрывы, а затем сократить их через образование и кредиты (текст B, абзацы 3 и 4). Оценка 2, заинтересованные стороны и надёжность данных: фермеры и неформальные работники выигрывают меньше, чем городские формальные фирмы, а значения 2022 года — оценки, поэтому выводы предварительны. Вывод: высокий рост снижает неравенство только тогда, когда сельские и неформальные работники получают доступ к образованию, финансам и услугам.\n\n**Вопрос 2**\n\n- **Часть (b)(i), 2 балла: расчёт.** Формула: дефлятор ВВП (GDP deflator) = номинальный ВВП / реальный ВВП × 100. Возьмите номинальный и реальный ВВП за 2021 год (миллион USD) из таблицы 4 (Table 4). Округлите до двух знаков после запятой. Пример (иллюстративный): номинальный ВВП 600 и реальный ВВП 480 дают 600 / 480 × 100 = 125.00. Частые ошибки: перевернуть отношение; забыть × 100, тогда получится 1.25.\n\n- **Часть (b)(ii), 1 балл: расчёт.** Формула: реальный ВВП на душу населения = реальный ВВП / население. Возьмите реальный ВВП (миллион USD) и население за 2008 год из таблицы 4 и сверьте единицы: миллионы USD, делённые на миллионы человек, дают USD на человека. Пример (иллюстративный): реальный ВВП 480 (миллион USD) и население 0.36 миллиона дают 480 / 0.36 = 1333.33 USD на человека. Частая ошибка: брать номинальный ВВП.\n\n- **Часть (b)(iii), 2 балла: расчёт.** Формула: сумма в BTN = сумма в USD × обменный курс (BTN за USD). Используйте курс 2021 года из таблицы 4 и сумму в USD из вопроса. Единицы: миллионы USD × BTN за USD дают миллионы BTN. Пример (иллюстративный): 0.5 миллиона USD при курсе 72 BTN за USD дают 0.5 × 72 = 36.00 миллиона BTN. Частая ошибка: делить на курс, что переводит в обратном направлении.\n\n- **Часть (g), 15 баллов: план.** Командный термин «оценить» (Evaluate) означает взвешивание сильных сторон и ограничений. Довод 1 (сильная сторона): доход от гидроэнергетики финансирует здравоохранение и образование (текст D, абзац 4); таблица 5 показывает рост ожидаемой продолжительности жизни и лучшие санитарные услуги. Довод 2 (ограничение): Бутан зависит от Индии в торговле и финансировании (текст F; текст D, абзац 3); в частном секторе мало рабочих мест, безработица молодёжи высока (текст D, абзац 5; текст E). Оценка 1, краткосрочный и долгосрочный периоды: доход от гидроэнергетики сейчас велик, но зависит от спроса Индии; ограничения на удобрения (текст D, абзац 7) могут замедлить выпуск сельского хозяйства; импорт продовольствия давит на платёжный баланс (текст D, абзац 6). Оценка 2, заинтересованные стороны и допущения: сельские домохозяйства получают выгоду от электричества, а молодые соискатели работы и фермеры — меньше; анализ предполагает, что спрос Индии и фиксированный курс сохранятся. Вывод: большие выгоды для благосостояния, но долгосрочный успех требует диверсификации.',
    },
  },
  {
    id: 'econ-p2-m25-tz3',
    subject: 'econ',
    paper: 'P2',
    session: 'M25',
    level: 'SLHL',
    tz: 'TZ3',
    files: [
      {
        kind: 'questions',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2025%20Examination%20Session/May%202025%20Examination%20Session/Individuals%20and%20societies/Economics_paper_2_TZ3_HLSL.pdf',
      },
      {
        kind: 'markscheme',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2025%20Examination%20Session/May%202025%20Examination%20Session/Individuals%20and%20societies/Economics_paper_2_TZ3_HLSL_markscheme.pdf',
      },
    ],
    minutes: 105,
    marks: 40,
    items: [
      {
        q: '1a(i)',
        marks: 2,
        command: 'Define',
        topicIds: [
          'trade-protection',
        ],
      },
      {
        q: '1a(ii)',
        marks: 2,
        command: 'List',
        topicIds: [
          'measuring-development',
        ],
      },
      {
        q: '1b(i)',
        marks: 1,
        command: 'Calculate',
        topicIds: [
          'balance-of-payments',
        ],
      },
      {
        q: '1b(ii)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'balance-of-payments',
        ],
      },
      {
        q: '1b(iii)',
        marks: 2,
        command: 'Sketch',
        topicIds: [
          'government-taxes-subsidies-price-controls',
          'competitive-market-equilibrium',
        ],
      },
      {
        q: '1c',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'ad-as-model-and-business-cycle',
          'monetary-policy',
        ],
      },
      {
        q: '1d',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'inequality-and-poverty',
          'policies-for-growth-and-development',
        ],
      },
      {
        q: '1e',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'externalities',
          'government-taxes-subsidies-price-controls',
        ],
      },
      {
        q: '1f',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'exchange-rates',
          'balance-of-payments',
        ],
      },
      {
        q: '1g',
        marks: 15,
        command: 'Discuss',
        topicIds: [
          'sustainable-development',
          'inequality-and-poverty',
        ],
      },
      {
        q: '2a(i)',
        marks: 2,
        command: 'Define',
        topicIds: [
          'balance-of-payments',
        ],
      },
      {
        q: '2a(ii)',
        marks: 2,
        command: 'Define',
        topicIds: [
          'what-is-economics',
        ],
      },
      {
        q: '2b(i)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'measuring-economic-activity',
        ],
      },
      {
        q: '2b(ii)',
        marks: 1,
        command: 'Calculate',
        topicIds: [
          'measuring-economic-activity',
          'measuring-development',
        ],
      },
      {
        q: '2b(iii)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'exchange-rates',
        ],
      },
      {
        q: '2c',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'ad-as-model-and-business-cycle',
          'barriers-to-growth-and-development',
        ],
      },
      {
        q: '2d',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'supply',
          'competitive-market-equilibrium',
        ],
      },
      {
        q: '2e',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'exchange-rates',
          'monetary-policy',
        ],
      },
      {
        q: '2f',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'externalities',
          'government-taxes-subsidies-price-controls',
        ],
      },
      {
        q: '2g',
        marks: 15,
        command: 'Evaluate',
        topicIds: [
          'policies-for-growth-and-development',
          'sustainable-development',
          'measuring-development',
        ],
      },
    ],
    guide: {
      en: 'Time: 1 h 45 min.\n\n**Question 1**\n\n- **Part (b)(i), 1 mark: calculation.** Formula: balance of trade in goods = exports of goods − imports of goods. Read both goods lines from Table 1 (the 2023 payments table). Keep the sign: a negative answer is a deficit. The answer is in USD billion; round to two decimal places. Worked example (illustrative): exports 9.0 and imports 12.0 give 9.0 − 12.0 = -3.00. Common mistake: reversing the subtraction, which turns a deficit into a surplus.\n\n- **Part (b)(ii), 2 marks: calculation.** Formula: balance of trade in services = current account − (balance of trade in goods + income + current transfers). Take the current account balance (Table 1) and the part (b)(i) answer. First add the goods balance, the income line and the transfer line; then subtract that sum from the current account. Worked example (illustrative): goods exports 9.0 and imports 12.0, income -1.5 and transfers 2.5 give 9.0 − 12.0 + (-1.5) + 2.5 = -2.0; with a current account of -1.0, services = -1.0 − (-2.0) = 1.00. Common mistake: dropping the sign of a negative income line.\n\n- **Part (g), 15 marks: plan.** Command term: Discuss means a balanced review with several arguments. Benefit: growth raises incomes, jobs and tax revenue, which fund the programmes in Text A (paragraph 4) and the Hustler Fund (Text B, paragraph 2). Cost: growth adds environmental pressure, creating negative externalities; Table 3 shows the Gini coefficient improving while the share of informal employment is unchanged. Evaluation 1, short and long run: pollution and climate damage can arrive before clean technology spreads; in the long run carbon taxes (Text C, paragraph 3) and renewable energy (Text C, paragraph 1) can reduce the costs. Evaluation 2, stakeholders and size: farmers and tourism bear the climate damage (Text C, paragraph 1), while the benefits flow mainly to urban formal firms; the size depends on how often droughts occur. Judgement: high growth is a benefit only when it is combined with clean energy, carbon pricing and inclusive policies.\n\n**Question 2**\n\n- **Part (b)(i), 2 marks: calculation.** Formula: real GDP = nominal GDP / GDP deflator × 100. Read the 2008 nominal GDP and GDP deflator from Table 4. Round to two decimal places. Worked example (illustrative): nominal GDP 1000 and deflator 120 give 1000 / 120 × 100 = 833.33 (USD million). Common mistake: forgetting the × 100.\n\n- **Part (b)(ii), 1 mark: calculation.** Formula: real GDP per capita = real GDP / population. Use your part (b)(i) answer and the 2008 population in Table 4. USD million divided by million people gives USD per person. Worked example (illustrative): real GDP 833.33 (USD million) and population 0.5 million give 833.33 / 0.5 = 1666.66 USD per person. Common mistake: using nominal GDP.\n\n- **Part (b)(iii), 2 marks: calculation.** Formula: amount in USD = amount in BTN / exchange rate (BTN for each USD). Use the 2008 exchange rate from Table 4 and the BTN amount in the question. Units: BTN divided by BTN per USD gives USD. Worked example (illustrative): 300000 BTN at 60 BTN per USD gives 300000 / 60 = 5000.00 USD. Common mistake: multiplying by the rate, which converts in the wrong direction.\n\n- **Part (g), 15 marks: plan.** Evaluate means weighing up strengths and limitations. Point 1 (strength): hydropower sales fund healthcare and education (Text D, paragraph 4); Table 5 shows higher life expectancy and wider sanitation coverage. Point 2 (limitation): the economy depends on India for trade and finance (Text F; Text D, paragraph 3), and the private sector creates few jobs (Text D, paragraph 5; Text E). Evaluation 1, short and long run: hydropower income is large now but depends on India\'s demand; fertilizer restrictions (Text D, paragraph 7) may hold back farm output in the long run. Evaluation 2, stakeholders and assumptions: rural households gain from electricity, young job seekers and farmers less; the plan assumes India keeps buying and the fixed exchange rate holds. Judgement: strong welfare gains, but the strategy needs more private jobs and less reliance on one partner.',
      ru: 'Время: 1 ч 45 мин.\n\n**Вопрос 1**\n\n- **Часть (b)(i), 1 балл: расчёт.** Формула: торговый баланс товаров = экспорт товаров − импорт товаров. Возьмите обе строки по товарам из таблицы 1 (Table 1, счета платёжного баланса за 2023 год). Сохраняйте знак: отрицательное значение означает дефицит. Ответ в миллиардах USD; округлите до двух знаков после запятой. Пример (иллюстративный): экспорт 9.0 и импорт 12.0 дают 9.0 − 12.0 = -3.00. Частая ошибка: поменять местами вычитаемое, тогда дефицит станет профицитом.\n\n- **Часть (b)(ii), 2 балла: расчёт.** Формула: торговый баланс услуг = текущий счёт − (торговый баланс товаров + доход + текущие трансферты). Возьмите баланс текущего счёта из таблицы 1 и ответ части (b)(i). Сначала сложите баланс товаров, строку дохода и строку трансфертов, затем вычтите сумму из текущего счёта. Пример (иллюстративный): экспорт товаров 9.0 и импорт 12.0, доход -1.5 и трансферты 2.5 дают 9.0 − 12.0 + (-1.5) + 2.5 = -2.0; при текущем счёте -1.0 услуги = -1.0 − (-2.0) = 1.00. Частая ошибка: потерять знак отрицательного дохода.\n\n- **Часть (g), 15 баллов: план.** Командный термин «обсудить» (Discuss) означает взвешенный обзор с несколькими аргументами. Выгода: рост повышает доходы, рабочие места и налоговые поступления, которые финансируют программы из текста A (абзац 4) и фонд Hustler (текст B, абзац 2). Издержка: рост усиливает нагрузку на окружающую среду и создаёт негативные внешние эффекты; таблица 3 показывает, что коэффициент Джини улучшился, а доля неформальной занятости не изменилась. Оценка 1, краткосрочный и долгосрочный периоды: загрязнение и климатический ущерб могут появиться раньше, чем распространятся чистые технологии; в долгосрочном периоде углеродные налоги (текст C, абзац 3) и возобновляемая энергетика (текст C, абзац 1) могут снизить издержки. Оценка 2, заинтересованные стороны и размер эффекта: фермеры и туризм несут климатический ущерб (текст C, абзац 1), а выгоды в основном достаются городским формальным фирмам; размер эффекта зависит от частоты засух. Вывод: высокий рост приносит пользу только в сочетании с чистой энергетикой, ценой на углерод и инклюзивной политикой.\n\n**Вопрос 2**\n\n- **Часть (b)(i), 2 балла: расчёт.** Формула: реальный ВВП = номинальный ВВП / дефлятор ВВП × 100. Возьмите номинальный ВВП и дефлятор ВВП за 2008 год из таблицы 4 (Table 4). Округлите до двух знаков после запятой. Пример (иллюстративный): номинальный ВВП 1000 и дефлятор 120 дают 1000 / 120 × 100 = 833.33 (миллион USD). Частые ошибки: забыть × 100; брать колонку 2021 года.\n\n- **Часть (b)(ii), 1 балл: расчёт.** Формула: реальный ВВП на душу населения = реальный ВВП / население. Используйте ответ части (b)(i) и население 2008 года из таблицы 4. Миллионы USD, делённые на миллионы человек, дают USD на человека. Пример (иллюстративный): реальный ВВП 833.33 (миллион USD) и население 0.5 миллиона дают 833.33 / 0.5 = 1666.66 USD на человека. Частая ошибка: брать номинальный ВВП вместо ответа части (b)(i).\n\n- **Часть (b)(iii), 2 балла: расчёт.** Формула: сумма в USD = сумма в BTN / обменный курс (BTN за USD). Используйте курс 2008 года из таблицы 4 и сумму в BTN из вопроса. Единицы: BTN, делённые на BTN за USD, дают USD. Пример (иллюстративный): 300000 BTN при курсе 60 BTN за USD дают 300000 / 60 = 5000.00 USD. Частая ошибка: умножать на курс, что переводит в обратном направлении.\n\n- **Часть (g), 15 баллов: план.** Командный термин «оценить» (Evaluate) означает взвешивание сильных сторон и ограничений. Довод 1 (сильная сторона): продажи электроэнергии финансируют здравоохранение и образование (текст D, абзац 4); таблица 5 показывает рост ожидаемой продолжительности жизни и больший охват безопасной санитарией. Довод 2 (ограничение): экономика зависит от Индии в торговле и финансировании (текст F; текст D, абзац 3); частный сектор создаёт мало рабочих мест (текст D, абзац 5; текст E). Оценка 1, краткосрочный и долгосрочный периоды: доход от гидроэнергетики сейчас велик, но зависит от спроса Индии; ограничения на удобрения (текст D, абзац 7) могут сдерживать выпуск сельского хозяйства в долгосрочном периоде. Оценка 2, заинтересованные стороны и допущения: сельские домохозяйства получают выгоду от электричества, молодёжь и фермеры — меньше; план предполагает, что Индия продолжит покупать и что фиксированный курс сохранится. Вывод: сильные выгоды для благосостояния, но стратегии нужно больше частных рабочих мест и меньшая зависимость от одного партнёра.',
    },
  },
  {
    id: 'econ-p3-m25-q1',
    subject: 'econ',
    paper: 'P3',
    session: 'M25',
    level: 'HL',
    part: 'question-1',
    files: [
      {
        kind: 'questions',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2025%20Examination%20Session/May%202025%20Examination%20Session/Individuals%20and%20societies/Economics_paper_3_HL.pdf',
      },
      {
        kind: 'markscheme',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2025%20Examination%20Session/May%202025%20Examination%20Session/Individuals%20and%20societies/Economics_paper_3_HL_markscheme.pdf',
      },
    ],
    minutes: 60,
    marks: 30,
    items: [
      {
        q: '1a(i)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'competitive-market-equilibrium',
        ],
      },
      {
        q: '1a(ii)',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'externalities',
        ],
      },
      {
        q: '1a(iii)',
        marks: 2,
        command: 'Define',
        topicIds: [
          'critique-maximizing-behaviour',
        ],
      },
      {
        q: '1a(iv)',
        marks: 2,
        command: 'Sketch',
        topicIds: [
          'monopoly-and-natural-monopoly',
        ],
      },
      {
        q: '1a(v)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'monopoly-and-natural-monopoly',
        ],
      },
      {
        q: '1a(vi)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'monopoly-and-natural-monopoly',
        ],
      },
      {
        q: '1a(vii)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'monopoly-and-natural-monopoly',
        ],
      },
      {
        q: '1a(viii)',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'critique-maximizing-behaviour',
        ],
      },
      {
        q: '1b',
        marks: 10,
        command: 'Recommend',
        topicIds: [
          'externalities',
          'government-taxes-subsidies-price-controls',
        ],
      },
    ],
    guide: {
      en: 'Time for this question in the mock: 60 minutes. The official paper is 1 h 45 min for both questions.\n\n**Question 1**\n\n- **Part (a)(i), 2 marks: calculation.** Consumer surplus = 1/2 × quantity × height, where height = choke price minus equilibrium price, read from Figure 1 before and after the demand rise. Change = after minus before. Example (illustrative): before 1/2 × 60 × 4.0 = 120; after 1/2 × 80 × 5.0 = 200; gain = 200 - 120 = 80. Mistake: forgetting the 1/2.\n- **Part (a)(v), 2 marks: calculation.** Total revenue = price × members; marginal revenue = change in total revenue / change in members, using Table 1. Example (illustrative): 60.0 × 250 = 15000; 55.0 × 350 = 19250; change = 19250 - 15000 = 4250; MR = 4250 / 100 = 42.5. Mistake: dividing by the change in price.\n- **Part (a)(vi), 2 marks: calculation.** Profit = price × members - total cost at each level, from Table 1; change = profit after minus profit before. Example (illustrative): 55.0 × 350 - 17000 = 2250; 50.0 × 450 - 21000 = 1500; change = 1500 - 2250 = -750. Mistake: forgetting to subtract total cost.\n- **Part (a)(vii), 2 marks: calculation.** Total cost after the stated rise = old total cost + rise; average cost = total cost / members. Example (illustrative): 18000 + 3000 = 21000, written as 18000 - (-3000); AC = 21000 / 480 = 43.75 per member. Mistake: dividing old cost by new membership.\n- **Part (b), 10 marks: plan.** Policy: a subsidy or voucher for memberships, or a nudge such as reminders or automatic enrolment. Support 1: exercise creates positive externalities (lower health costs, higher productivity), so the market supplies too little; cite the data on health costs in the text. Support 2: bounded self-control means people know exercise helps but do not act on it, so nudges address the cause directly. Evaluate: a subsidy uses public money (opportunity cost) and its effect depends on demand elasticity; nudges are cheap but their effect fades; access for low-income groups matters. Judgement: name the policy and when another would be better.',
      ru: 'Время на этот вопрос в моке: 60 минут. Штатный пейпер — 1 ч 45 мин на оба вопроса.\n\n**Вопрос 1**\n\n- **Часть (a)(i), 2 балла: расчёт.** Излишек потребителя = 1/2 × количество × высота, где высота = цена насыщения (choke price) минус равновесная цена; данные с рисунка 1 до и после роста спроса. Изменение = после минус до. Пример (условный): до 1/2 × 60 × 4.0 = 120; после 1/2 × 80 × 5.0 = 200; прирост = 200 - 120 = 80. Ошибка: забыть множитель 1/2 треугольника.\n- **Часть (a)(v), 2 балла: расчёт.** Общая выручка = цена × количество членов; предельная выручка (marginal revenue) = изменение выручки / изменение числа членов, данные таблицы 1. Пример (условный): 60.0 × 250 = 15000; 55.0 × 350 = 19250; изменение = 19250 - 15000 = 4250; MR = 4250 / 100 = 42.5. Ошибка: деление на изменение цены.\n- **Часть (a)(vi), 2 балла: расчёт.** Прибыль = цена × члены - общие издержки на каждом уровне, таблица 1; изменение = прибыль после минус до. Пример (условный): 55.0 × 350 - 17000 = 2250; 50.0 × 450 - 21000 = 1500; изменение = 1500 - 2250 = -750. Ошибка: забыть вычесть издержки.\n- **Часть (a)(vii), 2 балла: расчёт.** Издержки после роста = старые издержки + рост; средние издержки (AC) = издержки / число членов. Пример (условный): 18000 + 3000 = 21000, то есть 18000 - (-3000); AC = 21000 / 480 = 43.75. Ошибка: делить старые издержки на новое число членов.\n- **Часть (b), 10 баллов: план.** Мера: субсидия или ваучер на абонементы либо нудж (напоминания, автоматическая запись). Довод 1: физическая активность создаёт положительные внешние эффекты (меньше расходов на здоровье, выше производительность), поэтому рынок производит её недостаточно; опирайтесь на данные текста о затратах на здоровье. Довод 2: ограниченный самоконтроль (bounded self-control) означает, что люди знают о пользе, но не действуют, поэтому нудж действует на причину напрямую. Оценка: субсидия тратит бюджетные средства (альтернативная стоимость), её эффект зависит от эластичности спроса; нуджи дешевле, но эффект со временем слабеет; важен доступ для групп с низкими доходами. Вывод: назовите меру и условие, при котором лучше другая.',
    },
  },
  {
    id: 'econ-p3-m25-q2',
    subject: 'econ',
    paper: 'P3',
    session: 'M25',
    level: 'HL',
    part: 'question-2',
    files: [
      {
        kind: 'questions',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2025%20Examination%20Session/May%202025%20Examination%20Session/Individuals%20and%20societies/Economics_paper_3_HL.pdf',
      },
      {
        kind: 'markscheme',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2025%20Examination%20Session/May%202025%20Examination%20Session/Individuals%20and%20societies/Economics_paper_3_HL_markscheme.pdf',
      },
    ],
    minutes: 60,
    marks: 30,
    items: [
      {
        q: '2a(i)',
        marks: 2,
        command: 'Outline',
        topicIds: [
          'macroeconomic-objectives',
        ],
      },
      {
        q: '2a(ii)',
        marks: 1,
        command: 'Draw',
        topicIds: [
          'macroeconomic-objectives',
        ],
      },
      {
        q: '2a(iii)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'macroeconomic-objectives',
        ],
      },
      {
        q: '2a(iv)',
        marks: 1,
        command: 'Calculate',
        topicIds: [
          'macroeconomic-objectives',
        ],
      },
      {
        q: '2a(v)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'macroeconomic-objectives',
        ],
      },
      {
        q: '2a(vi)',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'macroeconomic-objectives',
        ],
      },
      {
        q: '2a(vii)',
        marks: 1,
        command: 'Identify',
        topicIds: [
          'oligopoly-and-monopolistic-competition',
        ],
      },
      {
        q: '2a(viii)',
        marks: 2,
        command: 'Show',
        topicIds: [
          'oligopoly-and-monopolistic-competition',
        ],
      },
      {
        q: '2a(ix)',
        marks: 1,
        command: 'Calculate',
        topicIds: [
          'monetary-policy',
        ],
      },
      {
        q: '2a(x)',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'monetary-policy',
        ],
      },
      {
        q: '2b',
        marks: 10,
        command: 'Recommend',
        topicIds: [
          'monetary-policy',
          'fiscal-policy',
        ],
      },
    ],
    guide: {
      en: 'Time for this question in the mock: 60 minutes. The official paper is 1 h 45 min for both questions.\n\n**Question 2**\n\n- **Part (a)(iii), 2 marks: calculation.** Basket cost = sum over items of quantity × price, using the weekly quantities in Table 2 and the 2023 prices. Example (illustrative): item A 3 × 135 = 405; item B 2 × 310 = 620; total = 405 + 620 = 1025, written as 405 - (-620). Mistake: using 2020 prices.\n- **Part (a)(iv), 1 mark: calculation.** CPI = basket cost 2023 / basket cost 2020 × 100. Example (illustrative): 1025 / 880 × 100 = 116.48. Mistake: forgetting the × 100.\n- **Part (a)(v), 2 marks: calculation.** Inflation = (CPI this year - CPI last year) / CPI last year × 100. Example (illustrative): (116.48 - 111.20) / 111.20 × 100 = 4.75 %. Mistake: dividing by this year\'s CPI.\n- **Part (a)(ix), 1 mark: calculation.** Real interest rate = nominal interest rate - inflation rate. Example (illustrative): 1.8 - 4.75 = -2.95 %. Mistake: adding inflation instead of subtracting it.\n- **Part (b), 10 marks: plan.** Policy: expansionary monetary policy (lower interest rates and asset purchases) to raise spending and expected inflation, with a weaker currency as support. Support 1: with inflation below target, expansion raises aggregate demand and the price level; cite the text\'s data on past price falls. Support 2: lower rates weaken the currency, which raises import prices; the text\'s evidence on past depreciation supports this. Evaluate: short-run gains depend on credibility; a liquidity trap limits the effect; lags and overshooting are possible; savers bear side effects. Judgement: name the policy and the condition under which fiscal expansion would be the better choice.',
      ru: 'Время на этот вопрос в моке: 60 минут. Штатный пейпер — 1 ч 45 мин на оба вопроса.\n\n**Вопрос 2**\n\n- **Часть (a)(iii), 2 балла: расчёт.** Стоимость набора = сумма по позициям «количество × цена», с недельными количествами таблицы 2 и ценами 2023 года. Пример (условный): позиция A 3 × 135 = 405; позиция B 2 × 310 = 620; итого 405 + 620 = 1025, то есть 405 - (-620). Ошибка: использовать цены 2020 года.\n- **Часть (a)(iv), 1 балл: расчёт.** ИПЦ (CPI) = стоимость набора 2023 / стоимость набора 2020 × 100. Пример (условный): 1025 / 880 × 100 = 116.48. Ошибка: забыть умножение на 100.\n- **Часть (a)(v), 2 балла: расчёт.** Инфляция = (ИПЦ этого года - ИПЦ прошлого года) / ИПЦ прошлого года × 100. Пример (условный): (116.48 - 111.20) / 111.20 × 100 = 4.75 %. Ошибка: делить на ИПЦ текущего года.\n- **Часть (a)(ix), 1 балл: расчёт.** Реальная процентная ставка = номинальная ставка - инфляция. Пример (условный): 1.8 - 4.75 = -2.95 %. Ошибка: прибавлять инфляцию вместо вычитания.\n- **Часть (b), 10 баллов: план.** Мера: экспансионистская денежная политика (снижение ставок и покупка активов) для роста расходов и ожидаемой инфляции, с ослаблением валюты как поддержкой. Довод 1: при инфляции ниже цели расширение повышает совокупный спрос и уровень цен; опирайтесь на данные текста о прошлом снижении цен. Довод 2: снижение ставок ослабляет валюту, что повышает цены импорта; данные текста о прошлом обесценении это подтверждают. Оценка: краткосрочный эффект зависит от доверия; ловушка ликвидности (liquidity trap) ограничивает действие; возможны задержки и перелёт; побочные эффекты несут вкладчики. Вывод: назовите меру и условие, при котором лучше бюджетное расширение.',
    },
  },
  {
    id: 'econ-p1-n25-tz1',
    subject: 'econ',
    paper: 'P1',
    session: 'N25',
    level: 'HL',
    tz: 'TZ1',
    files: [
      {
        kind: 'questions',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2025%20Examination%20Session/November%202025%20Examination%20Session/Individuals%20and%20societies/Economics_paper_1_TZ1_HL.pdf',
      },
      {
        kind: 'markscheme',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2025%20Examination%20Session/November%202025%20Examination%20Session/Individuals%20and%20societies/Economics_paper_1_TZ1_HL_markscheme.pdf',
      },
    ],
    minutes: 75,
    marks: 25,
    items: [
      {
        q: '1a',
        marks: 10,
        command: 'Explain',
        topicIds: [
          'monopoly-and-natural-monopoly',
        ],
      },
      {
        q: '1b',
        marks: 15,
        command: 'Discuss',
        topicIds: [
          'monopoly-and-natural-monopoly',
          'oligopoly-and-monopolistic-competition',
        ],
      },
      {
        q: '2a',
        marks: 10,
        command: 'Explain',
        topicIds: [
          'macroeconomic-objectives',
          'inequality-and-poverty',
        ],
      },
      {
        q: '2b',
        marks: 15,
        command: 'Discuss',
        topicIds: [
          'fiscal-policy',
          'monetary-policy',
          'macroeconomic-objectives',
        ],
      },
      {
        q: '3a',
        marks: 10,
        command: 'Explain',
        topicIds: [
          'barriers-to-growth-and-development',
        ],
      },
      {
        q: '3b',
        marks: 15,
        command: 'Discuss',
        topicIds: [
          'trade-protection',
          'arguments-for-and-against-trade-control',
          'benefits-of-trade',
        ],
      },
    ],
    guide: {
      en: 'Time: 1 h 15 min. Plan for about five minutes.\n\n**Question 1** (a) 10 marks, (b) 15 marks\n\n- (a) Plan: Definitions: a monopoly is one dominant firm; abnormal profit is profit above normal profit. Diagram: monopoly diagram with demand, MR, MC and ATC; output where MR equals MC, price read from demand; shade the abnormal profit above ATC. Chain: if price exceeds average total cost, then the firm earns abnormal profit at once; if barriers to entry block rivals, then this profit can last over the long term.\n- (b) Plan: Example: utility networks (natural monopolies) and a dominant technology platform. Two points: (1) economies of scale lower average costs and can fund research; (2) higher prices and lower output reduce consumer welfare. Two evaluation points: (1) contestable markets, price regulation or state ownership can limit abuse of market power; (2) the answer depends on whether the market is a natural monopoly. Judgement: market power is desirable only when scale economies are large and the power is regulated.\n\n**Question 2** (a) 10 marks, (b) 15 marks\n\n- (a) Plan: Definitions: inflation is a sustained rise in the general price level; redistribution is a shift of income or wealth between groups. Diagram: none required; an optional AD/AS sketch may help. Chain: if prices rise faster than nominal incomes, then fixed-income groups lose real income; if borrowers have fixed-rate debt, then wealth moves towards them.\n- (b) Plan: Example: an economy whose deficit-financed spending fuelled demand-pull inflation (generic, no figures). Two points: (1) fiscal contraction through higher taxes or lower spending cuts AD and reduces demand-pull inflation; (2) automatic stabilisers and the multiplier make the effect quick. Two evaluation points: (1) time lags and political limits slow changes, and cutting demand can reduce real GDP; (2) central banks often act faster and are independent, so monetary policy could work better. Judgement: fiscal policy is not the single most effective tool; it works best alongside monetary policy.\n\n**Question 3** (a) 10 marks, (b) 15 marks\n\n- (a) Plan: Definitions: the primary sector is extraction and farming; cover both growth and development, since one alone earns at most 6 marks. Diagram: supply and demand diagram for a primary product with inelastic curves; label the large price swing. Chain: if supply and demand are both inelastic, then small shocks cause large price swings; if export prices swing, then producer incomes fall, so growth suffers.\n- (b) Plan: Example: US steel tariffs introduced in 2018. Two points: (1) tariffs protect jobs in import-competing industries and support infant industries; (2) comparative advantage raises output and employment, and cheaper imported inputs help exporters. Two evaluation points: (1) retaliation and higher prices may cancel the gains; (2) protection can slow long-run growth, while free trade displaces some workers at first. Judgement: assess both employment and growth; protection may help jobs briefly, while free trade usually supports growth.',
      ru: 'Время: 1 ч 15 мин. Планируйте около пяти минут.\n\n**Вопрос 1** (a) 10 баллов, (b) 15 баллов\n\n- (a) План: Определения: монополия (monopoly) — одна доминирующая фирма; сверхприбыль (abnormal profit) — прибыль выше нормальной. Диаграмма: диаграмма монополии; выпуск там, где MR равно MC, цена берётся по кривой спроса; заштрихуйте сверхприбыль выше средних общих издержек (average total cost, ATC). Цепочка: если цена выше ATC, то фирма сразу получает сверхприбыль; если барьеры для входа (barriers to entry) не пускают конкурентов, то прибыль может сохраниться в долгосрочном периоде.\n- (b) План: Пример: сетевые услуги (водоснабжение, железные дороги), то есть естественные монополии (natural monopolies), и доминирующая технологическая платформа. Два аргумента: (1) эффект масштаба (economies of scale) снижает средние издержки и может финансировать исследования; (2) более высокие цены и меньший выпуск снижают благосостояние потребителей. Два оценочных пункта: (1) рынки с открытым доступом (contestable markets), ценовое регулирование или государственная собственность могут ограничить злоупотребление рыночной властью; (2) ответ зависит от того, является ли рынок естественной монополией. Вывод: рыночная власть желательна, только если эффект масштаба велик и власть регулируется.\n\n**Вопрос 2** (a) 10 баллов, (b) 15 баллов\n\n- (a) План: Определения: инфляция (inflation) — устойчивый рост общего уровня цен; перераспределение (redistribution) — сдвиг дохода или богатства между группами. Диаграмма: не требуется; эскиз AD/AS по желанию. Цепочка: если цены растут быстрее номинальных доходов, то группы с фиксированным доходом теряют; если заёмщики имеют долг с фиксированной ставкой, то его реальная стоимость падает, поэтому богатство переходит к заёмщикам.\n- (b) План: Пример: экономика, где расходы, финансируемые дефицитом, подпитывали инфляцию спроса (demand-pull inflation), обобщённо, без цифр. Два аргумента: (1) сдерживающая фискальная политика (contractionary fiscal policy) через налоги или сокращение расходов напрямую снижает AD и инфляцию спроса; (2) автоматические стабилизаторы (automatic stabilisers) и мультипликатор (multiplier) делают эффект быстрым. Два оценочных пункта: (1) временные лаги и политические ограничения замедляют изменения, а сокращение спроса может снизить реальный ВВП; (2) центральные банки часто действуют быстрее и независимы, поэтому денежная политика (monetary policy) может быть эффективнее. Вывод: фискальная политика не самый эффективный единственный инструмент; она лучше работает вместе с денежной политикой.\n\n**Вопрос 3** (a) 10 баллов, (b) 15 баллов\n\n- (a) План: Определения: первичный сектор (primary sector) — добыча и сельское хозяйство; охватите и экономический рост (economic growth), и экономическое развитие (economic development), иначе ответ ограничен 6 баллами. Диаграмма: диаграмма спроса и предложения (supply and demand) для сырьевого товара с неэластичными кривыми; подпишите большой скачок цены. Цепочка: если спрос и предложение неэластичны, то небольшие шоки вызывают большие колебания цен; если экспортные цены колеблются, то доходы производителей падают, поэтому рост страдает.\n- (b) План: Пример: пошлины США на сталь, введённые в 2018 году. Два аргумента: (1) пошлины защищают рабочие места в отраслях, конкурирующих с импортом, и поддерживают молодые отрасли (infant industries); (2) сравнительное преимущество (comparative advantage) повышает выпуск и занятость, а дешёвые импортные ресурсы помогают экспортёрам. Два оценочных пункта: (1) ответные меры и рост цен могут свести выгоды на нет; (2) защита может замедлить долгосрочный рост, а свободная торговля (free trade) поначалу вытесняет часть работников. Вывод: оцените и занятость, и рост; защита может помочь рабочим местам, а свободная торговля обычно поддерживает рост.',
    },
  },
  {
    id: 'econ-p1-n25-tz3',
    subject: 'econ',
    paper: 'P1',
    session: 'N25',
    level: 'HL',
    tz: 'TZ3',
    files: [
      {
        kind: 'questions',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2025%20Examination%20Session/November%202025%20Examination%20Session/Individuals%20and%20societies/Economics_paper_1_TZ3_HL.pdf',
      },
      {
        kind: 'markscheme',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2025%20Examination%20Session/November%202025%20Examination%20Session/Individuals%20and%20societies/Economics_paper_1_TZ3_HL_markscheme.pdf',
      },
    ],
    minutes: 75,
    marks: 25,
    items: [
      {
        q: '1a',
        marks: 10,
        command: 'Explain',
        topicIds: [
          'oligopoly-and-monopolistic-competition',
        ],
      },
      {
        q: '1b',
        marks: 15,
        command: 'Evaluate',
        topicIds: [
          'monopoly-and-natural-monopoly',
          'oligopoly-and-monopolistic-competition',
          'government-taxes-subsidies-price-controls',
        ],
      },
      {
        q: '2a',
        marks: 10,
        command: 'Explain',
        topicIds: [
          'macroeconomic-objectives',
          'fiscal-policy',
        ],
      },
      {
        q: '2b',
        marks: 15,
        command: 'Discuss',
        topicIds: [
          'fiscal-policy',
          'macroeconomic-objectives',
          'supply-side-policies',
        ],
      },
      {
        q: '3a',
        marks: 10,
        command: 'Explain',
        topicIds: [
          'policies-for-growth-and-development',
          'barriers-to-growth-and-development',
        ],
      },
      {
        q: '3b',
        marks: 15,
        command: 'Discuss',
        topicIds: [
          'economic-integration',
          'exchange-rates',
        ],
      },
    ],
    guide: {
      en: 'Time: 1 h 15 min. Plan for about five minutes.\n\n**Question 1** (a) 10 marks, (b) 15 marks\n\n- (a) Plan: Definitions: an oligopoly is a few large interdependent firms; collusion is an agreement on price or output. Diagram: payoff matrix for two firms choosing high or low prices; joint profit is highest when both keep prices high. Chain: if rivals agree to keep prices high, then joint profit rises; if each firm expects cheating, the agreement is unstable.\n- (b) Plan: Example: EU competition fines on dominant technology platforms (generic, no figures). Two points: (1) competition law bans abuse and cartels, and large fines deter firms; (2) state ownership removes the profit motive, and price regulation caps prices. Two evaluation points: (1) fines can be smaller than the gains from abuse, and enforcement is slow; (2) state firms can be inefficient, and regulators can be captured by the industry. Judgement: intervention works when it is enforced and matched to the type of market power.\n\n**Question 2** (a) 10 marks, (b) 15 marks\n\n- (a) Plan: Definitions: unemployment is people willing and able to work but without a job; revenue is tax income and spending includes benefits. Diagram: AD/AS diagram with falling AD, lower output and higher unemployment. Chain: if unemployment rises, then fewer people pay income tax and consumption falls, so tax revenue falls; if benefits rise, then the budget deficit widens.\n- (b) Plan: Example: temporary tax cuts and public works after the 2008 crisis, in several countries. Two points: (1) expansionary fiscal policy raises AD and labour demand through the multiplier; (2) automatic stabilisers raise benefits and cut taxes as unemployment rises, so support is immediate. Two evaluation points: (1) time lags, crowding out and rising debt limit fiscal policy; (2) fiscal policy suits cyclical, not structural, unemployment, so monetary policy or supply-side measures may help too. Judgement: fiscal policy is powerful against cyclical unemployment but is not the most effective tool in every case.\n\n**Question 3** (a) 10 marks, (b) 15 marks\n\n- (a) Plan: Definitions: FDI is foreign investment in domestic productive assets; the poverty cycle is low income, low saving, low investment, low productivity. Diagram: poverty cycle diagram with FDI entering at the investment stage; an optional AD/AS sketch can show extra investment. Chain: if inward FDI adds capital, then investment and productivity rise, so incomes rise; if saving follows, then the cycle breaks.\n- (b) Plan: Example: the euro area, a monetary union of EU members. Two points: (1) a shared currency lowers transaction costs and exchange rate uncertainty, which supports trade; (2) members gain bargaining power and price stability through a common central bank. Two evaluation points: (1) members lose independent monetary policy and the exchange rate as an adjustment tool; (2) asymmetric shocks and different fiscal positions raise costs for some members. Judgement: membership pays off only when trade links are strong and economic cycles are similar.',
      ru: 'Время: 1 ч 15 мин. Планируйте около пяти минут.\n\n**Вопрос 1** (a) 10 баллов, (b) 15 баллов\n\n- (a) План: Определения: олигополия (oligopoly) — несколько крупных взаимозависимых фирм; сговор (collusion) — соглашение о цене или выпуске. Диаграмма: платёжная матрица (payoff matrix) для двух фирм, выбирающих высокую или низкую цену; совокупная прибыль максимальна, когда обе сохраняют высокие цены. Цепочка: если конкуренты договорились держать высокие цены, то совместная прибыль растёт; если каждая фирма ожидает обмана, то соглашение нестабильно.\n- (b) План: Пример: штрафы Европейской комиссии по конкуренции для доминирующих технологических платформ, обобщённо, без цифр. Два аргумента: (1) законы о конкуренции запрещают злоупотребления и картели, а крупные штрафы сдерживают фирмы; (2) государственная собственность снимает мотив максимизации прибыли, а ценовое регулирование ограничивает цены. Два оценочных пункта: (1) штрафы могут быть меньше выгоды от злоупотреблений, а контроль медленный; (2) государственные фирмы могут быть неэффективны, а регуляторы могут попасть под влияние отрасли (regulatory capture). Вывод: вмешательство работает, когда его обеспечивают и подбирают под тип рыночной власти.\n\n**Вопрос 2** (a) 10 баллов, (b) 15 баллов\n\n- (a) План: Определения: безработица (unemployment) — люди, готовые и способные работать, но без работы; доходы государства — налоговые поступления, расходы — госзатраты, включая пособия. Диаграмма: диаграмма AD/AS, где AD падает, выпуск снижается и безработица растёт. Цепочка: если безработица растёт, то меньше людей платят подоходный налог и потребление падает, поэтому налоговые поступления сокращаются; если пособия растут, то дефицит бюджета увеличивается.\n- (b) План: Пример: временные налоговые снижения и программы общественных работ после кризиса 2008 года в нескольких странах. Два аргумента: (1) расширяющая фискальная политика (expansionary fiscal policy) повышает AD и спрос на труд через мультипликатор (multiplier); (2) автоматические стабилизаторы (automatic stabilisers) увеличивают пособия и сокращают налоги при росте безработицы, поэтому поддержка приходит сразу. Два оценочных пункта: (1) временные лаги, эффект вытеснения (crowding out) и рост долга ограничивают фискальную политику; (2) фискальная политика подходит для циклической, а не структурной безработицы; могут помочь денежная политика (monetary policy) и политика предложения. Вывод: фискальная политика мощна против циклической безработицы, но не во всех случаях самый эффективный инструмент.\n\n**Вопрос 3** (a) 10 баллов, (b) 15 баллов\n\n- (a) План: Определения: ПИИ (foreign direct investment, FDI) — иностранные инвестиции в производственные активы страны; порочный круг бедности (poverty cycle) — низкий доход, низкие сбережения, низкие инвестиции и низкая производительность. Диаграмма: диаграмма порочного круга бедности, где ПИИ входят на стадии инвестиций; по желанию добавьте эскиз AD/AS. Цепочка: если ПИИ добавляют капитал, то инвестиции и производительность растут, а доходы растут; если за этим следуют сбережения, то круг разрывается.\n- (b) План: Пример: еврозона (euro area), валютный союз стран ЕС. Два аргумента: (1) общая валюта снижает транзакционные издержки и неопределённость обменного курса, что поддерживает торговлю; (2) участники получают переговорную силу и ценовую стабильность благодаря общему центральному банку. Два оценочных пункта: (1) участники теряют независимую денежную политику (monetary policy) и обменный курс как инструмент корректировки; (2) асимметричные шоки (asymmetric shocks) и различия в бюджетном положении повышают издержки для некоторых участников. Вывод: членство окупается, только если торговые связи сильны, а экономические циклы схожи.',
    },
  },
  {
    id: 'econ-p2-n25-tz1',
    subject: 'econ',
    paper: 'P2',
    session: 'N25',
    level: 'SLHL',
    tz: 'TZ1',
    files: [
      {
        kind: 'questions',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2025%20Examination%20Session/November%202025%20Examination%20Session/Individuals%20and%20societies/Economics_paper_2_TZ1_HLSL.pdf',
      },
      {
        kind: 'markscheme',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2025%20Examination%20Session/November%202025%20Examination%20Session/Individuals%20and%20societies/Economics_paper_2_TZ1_HLSL_markscheme.pdf',
      },
    ],
    minutes: 105,
    marks: 40,
    items: [
      {
        q: '1a(i)',
        marks: 2,
        command: 'Define',
        topicIds: [
          'inequality-and-poverty',
        ],
      },
      {
        q: '1a(ii)',
        marks: 2,
        command: 'Define',
        topicIds: [
          'exchange-rates',
        ],
      },
      {
        q: '1b(i)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'exchange-rates',
        ],
      },
      {
        q: '1b(ii)',
        marks: 3,
        command: 'Sketch',
        topicIds: [
          'ad-as-model-and-business-cycle',
        ],
      },
      {
        q: '1c',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'government-taxes-subsidies-price-controls',
          'competitive-market-equilibrium',
        ],
      },
      {
        q: '1d',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'exchange-rates',
        ],
      },
      {
        q: '1e',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'inequality-and-poverty',
          'policies-for-growth-and-development',
        ],
      },
      {
        q: '1f',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'inequality-and-poverty',
          'measuring-development',
        ],
      },
      {
        q: '1g',
        marks: 15,
        command: 'Evaluate',
        topicIds: [
          'supply-side-policies',
          'policies-for-growth-and-development',
        ],
      },
      {
        q: '2a(i)',
        marks: 2,
        command: 'Define',
        topicIds: [
          'exchange-rates',
        ],
      },
      {
        q: '2a(ii)',
        marks: 2,
        command: 'Define',
        topicIds: [
          'barriers-to-growth-and-development',
        ],
      },
      {
        q: '2b(i)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'income-and-cross-elasticity',
        ],
      },
      {
        q: '2b(ii)',
        marks: 1,
        command: 'Calculate',
        topicIds: [
          'measuring-economic-activity',
          'measuring-development',
        ],
      },
      {
        q: '2b(iii)',
        marks: 2,
        command: 'Sketch',
        topicIds: [
          'externalities',
        ],
      },
      {
        q: '2c',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'elasticity-of-supply',
          'competitive-market-equilibrium',
        ],
      },
      {
        q: '2d',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'ad-as-model-and-business-cycle',
          'exchange-rates',
        ],
      },
      {
        q: '2e',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'economic-models',
          'barriers-to-growth-and-development',
        ],
      },
      {
        q: '2f',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'trade-protection',
        ],
      },
      {
        q: '2g',
        marks: 15,
        command: 'Discuss',
        topicIds: [
          'policies-for-growth-and-development',
          'barriers-to-growth-and-development',
        ],
      },
    ],
    guide: {
      en: 'Time: 1 h 45 min.\n\n**Question 1**\n\n- **Part (b)(i), 2 marks: calculation.** Formula: cost in ARS = USD value × exchange rate (ARS per USD). Read the exchange rate for each year from Table 1 (2023 before and 2024 after the change) and multiply the USD value of the raw materials by each rate separately. Units: ARS; round to two decimal places. Each year is a separate calculation, so the two answers are not added. Worked example (illustrative): USD 400 at 120.25 ARS per USD gives 400 × 120.25 = 48100.00 ARS; at 240.5 ARS per USD it gives 96200.00 ARS. Common mistakes: dividing by the rate, which converts ARS into USD; using one year\'s rate for both years.\n\n- **Part (g), 15 marks: plan.** Command term: Evaluate means weighing up strengths and limitations. Point 1 (strength): removing currency and price controls and privatising loss-making firms may raise efficiency and restore confidence (Text B, paragraphs 1 and 4); Table 1 records the rate after the restrictions were removed. Point 2 (limitation): inflation rose sharply and real wages fell (Text B, paragraph 2; Text A, paragraph 5), and relative poverty could rise (Text B, paragraph 2). Table 3 shows public debt rising over 2013 to 2022, which limits the room to offset poverty costs with spending. Evaluation 1, short and long run: an initial downturn and higher prices come first, while stability and growth may follow later. Evaluation 2, stakeholders and assumptions: workers and unions lose bargaining power while businesses and lenders gain; the outcome assumes IMF support continues, social spending is protected, and the depreciation passes into prices only slowly. Judgement: the reforms can restore stability, but the poverty cost is a serious risk unless social programmes are funded.\n\n**Question 2**\n\n- **Part (b)(i), 2 marks: calculation.** Formula: expected % change in quantity = YED × % change in income. Take the YED value given in Text E (paragraph 1) and multiply it by the income change in the question. Round to two decimal places. Worked example (illustrative): YED 2.0 and a 4.0% rise in world income give 2.0 × 4.0 = 8.00%. Common mistakes: dividing instead of multiplying; treating a positive YED as a fall in exports.\n\n- **Part (b)(ii), 1 mark: calculation.** Formula: real GDP (USD million) = real GDP per capita (USD) × population (million). Take the 2022 values from Table 4. Multiplying USD per person by millions of people gives millions of USD. Worked example (illustrative): 2000 USD per person and 5.0 million people give 2000 × 5.0 = 10000.00 million USD. Common mistakes: dividing instead of multiplying; using the population in persons instead of millions.\n\n- **Part (g), 15 marks: plan.** Command term: Discuss means a balanced review. For the view: aid can fund infrastructure, health and education, especially for women (Text D, paragraph 4), while FDI is concentrated in mining and energy and falls once projects end (Text F, paragraph 1). Against the view: FDI brings technology, jobs and tax revenue, and special economic zones target tourism and processing (Text F, paragraph 3); IMF aid comes as loans with performance criteria (Text D, paragraph 5). Evaluation 1, short and long run: aid can fund quick infrastructure, while FDI transfers skills over time; long-run gains depend on repayment and governance. Evaluation 2, stakeholders and size: women and minorities gain from targeted aid, while mining communities face land disputes (Text D, paragraph 1); the effect depends on how much aid goes to infrastructure rather than governance (Text D, paragraph 6). Judgement: targeted aid is usually more beneficial for development, while FDI helps growth only when it moves beyond extraction.',
      ru: 'Время: 1 ч 45 мин.\n\n**Вопрос 1**\n\n- **Часть (b)(i), 2 балла: расчёт.** Формула: стоимость в ARS = стоимость в USD × обменный курс (ARS за USD). Возьмите курс для каждого года из таблицы 1 (Table 1): 2023 год — до изменения, 2024 год — после. Умножьте стоимость сырья в USD на каждый курс отдельно. Единицы: ARS; округлите до двух знаков после запятой. Каждый год считается отдельно, поэтому два ответа не складывают. Пример (иллюстративный, не из работы): USD 400 при курсе 120.25 ARS за USD дают 400 × 120.25 = 48100.00 ARS; при курсе 240.5 ARS за USD — 96200.00 ARS. Частые ошибки: делить на курс, что переводит ARS в USD; использовать курс одного года для обоих.\n\n- **Часть (g), 15 баллов: план.** Командный термин «оценить» (Evaluate) означает взвешивание сильных сторон и ограничений. Довод 1 (сильная сторона): отмена валютных и ценовых ограничений и приватизация убыточных фирм могут повысить эффективность и вернуть доверие (текст B, абзацы 1 и 4); таблица 1 фиксирует курс после отмены ограничений. Довод 2 (ограничение): инфляция резко выросла, реальные зарплаты упали (текст B, абзац 2; текст A, абзац 5), а относительная бедность может вырасти (текст B, абзац 2). Таблица 3 показывает рост государственного долга в 2013–2022 годах, что ограничивает возможности компенсировать издержки бедности расходами. Оценка 1, краткосрочный и долгосрочный периоды: сначала идут краткосрочная рецессия и рост цен, а стабильность и рост могут прийти позже. Оценка 2, заинтересованные стороны и допущения: работники и профсоюзы теряют переговорную силу, а бизнес и кредиторы выигрывают; результат предполагает, что поддержка МВФ продолжится, социальные расходы будут защищены и что обесценивание валюты (depreciation) переходит в цены только медленно. Вывод: реформы могут восстановить стабильность, но цена в виде бедности — серьёзный риск, если социальные программы не финансируются.\n\n**Вопрос 2**\n\n- **Часть (b)(i), 2 балла: расчёт.** Формула: ожидаемое процентное изменение количества = YED × процентное изменение дохода. Возьмите значение YED из текста E (абзац 1) и умножьте его на изменение дохода из вопроса. Округлите до двух знаков после запятой. Пример (иллюстративный): YED 2.0 и рост мирового дохода на 4.0% дают 2.0 × 4.0 = 8.00%. Частые ошибки: делить вместо умножения; считать положительный YED падением экспорта.\n\n- **Часть (b)(ii), 1 балл: расчёт.** Формула: реальный ВВП (миллион USD) = реальный ВВП на душу населения (USD) × население (миллион). Возьмите значения 2022 года из таблицы 4 (Table 4). Умножение USD на человека на миллионы человек дает миллионы USD. Пример (иллюстративный): 2000 USD на человека и 5.0 миллиона человек дают 2000 × 5.0 = 10000.00 миллиона USD. Частые ошибки: делить вместо умножения; брать население в людях, а не в миллионах.\n\n- **Часть (g), 15 баллов: план.** Командный термин «обсудить» (Discuss) означает взвешенный обзор. Аргумент «за»: помощь может финансировать инфраструктуру, здравоохранение и образование, особенно для женщин (текст D, абзац 4), а ПИИ сосредоточены в добыче и энергетике и сокращаются после завершения проектов (текст F, абзац 1). Аргумент «против»: ПИИ приносят технологии, рабочие места и налоги, а особые экономические зоны ориентированы на туризм и переработку (текст F, абзац 3); помощь МВФ поступает в виде кредитов с критериями эффективности (текст D, абзац 5). Оценка 1, краткосрочный и долгосрочный периоды: помощь может быстро профинансировать инфраструктуру, а ПИИ передают навыки со временем; долгосрочный эффект зависит от погашения и управления. Оценка 2, заинтересованные стороны и размер эффекта: женщины и меньшинства выигрывают от целевой помощи, а сообщества вокруг добычи сталкиваются с земельными спорами (текст D, абзац 1); эффект зависит от доли помощи, идущей в инфраструктуру, а не в управление (текст D, абзац 6). Вывод: целевая помощь обычно полезнее для развития, а ПИИ помогают росту только тогда, когда выходят за пределы добычи.',
    },
  },
  {
    id: 'econ-p2-n25-tz3',
    subject: 'econ',
    paper: 'P2',
    session: 'N25',
    level: 'SLHL',
    tz: 'TZ3',
    files: [
      {
        kind: 'questions',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2025%20Examination%20Session/November%202025%20Examination%20Session/Individuals%20and%20societies/Economics_paper_2_TZ3_HLSL.pdf',
      },
      {
        kind: 'markscheme',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2025%20Examination%20Session/November%202025%20Examination%20Session/Individuals%20and%20societies/Economics_paper_2_TZ3_HLSL_markscheme.pdf',
      },
    ],
    minutes: 105,
    marks: 40,
    items: [
      {
        q: '1a(i)',
        marks: 2,
        command: 'Define',
        topicIds: [
          'balance-of-payments',
        ],
      },
      {
        q: '1a(ii)',
        marks: 2,
        command: 'Define',
        topicIds: [
          'macroeconomic-objectives',
        ],
      },
      {
        q: '1b(i)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'measuring-economic-activity',
        ],
      },
      {
        q: '1b(ii)',
        marks: 1,
        command: 'Determine',
        topicIds: [
          'measuring-economic-activity',
          'macroeconomic-objectives',
        ],
      },
      {
        q: '1b(iii)',
        marks: 2,
        command: 'Sketch',
        topicIds: [
          'inequality-and-poverty',
          'fiscal-policy',
        ],
      },
      {
        q: '1c',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'supply-side-policies',
          'ad-as-model-and-business-cycle',
        ],
      },
      {
        q: '1d',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'government-taxes-subsidies-price-controls',
          'competitive-market-equilibrium',
        ],
      },
      {
        q: '1e',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'trade-protection',
        ],
      },
      {
        q: '1f',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'economic-models',
          'barriers-to-growth-and-development',
        ],
      },
      {
        q: '1g',
        marks: 15,
        command: 'Discuss',
        topicIds: [
          'exchange-rates',
          'ad-as-model-and-business-cycle',
        ],
      },
      {
        q: '2a(i)',
        marks: 2,
        command: 'Define',
        topicIds: [
          'price-elasticity-of-demand',
        ],
      },
      {
        q: '2a(ii)',
        marks: 2,
        command: 'Define',
        topicIds: [
          'balance-of-payments',
        ],
      },
      {
        q: '2b(i)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'price-elasticity-of-demand',
        ],
      },
      {
        q: '2b(ii)',
        marks: 1,
        command: 'Determine',
        topicIds: [
          'price-elasticity-of-demand',
        ],
      },
      {
        q: '2b(iii)',
        marks: 2,
        command: 'Sketch',
        topicIds: [
          'inequality-and-poverty',
          'policies-for-growth-and-development',
        ],
      },
      {
        q: '2c',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'exchange-rates',
        ],
      },
      {
        q: '2d',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'ad-as-model-and-business-cycle',
          'barriers-to-growth-and-development',
        ],
      },
      {
        q: '2e',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'externalities',
          'government-taxes-subsidies-price-controls',
        ],
      },
      {
        q: '2f',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'fiscal-policy',
          'ad-as-model-and-business-cycle',
        ],
      },
      {
        q: '2g',
        marks: 15,
        command: 'Evaluate',
        topicIds: [
          'trade-protection',
          'benefits-of-trade',
          'policies-for-growth-and-development',
        ],
      },
    ],
    guide: {
      en: 'Time: 1 h 45 min.\n\n**Question 1**\n\n- **Part (b)(i), 2 marks: calculation.** Formula: GDP price deflator = nominal GDP / real GDP × 100. Read nominal and real GDP for 2022 from Table 3 (both in USD billion) and divide. Round to two decimal places. Worked example (illustrative): nominal GDP 550 and real GDP 500 give 550 / 500 × 100 = 110.00. Common mistakes: forgetting the × 100, which gives 1.10; swapping nominal and real GDP.\n\n- **Part (b)(ii), 1 mark: calculation.** Formula: price level change against the base index = (deflator − 100) / 100 × 100. Use your part (b)(i) answer; the base year has an index of 100. Worked example (illustrative): a deflator of 110.00 against a base of 100 gives 10.00%. Common mistake: comparing the deflator with zero instead of with the base of 100.\n\n- **Part (g), 15 marks: plan.** Command term: Discuss means a balanced review with several arguments. Benefit: a weaker peso makes exports cheaper for soybean and beef producers (Text A, paragraph 1), which supports the trade balance (net trade in Table 3). Cost: import prices rise and inflation was already very high (Table 3; Text B, paragraph 2), which cuts real wages (Text A, paragraph 5). Evaluation 1, short and long run: inflation and falling real incomes arrive first, while export gains take longer to show. Evaluation 2, stakeholders and size: exporters and firms with foreign-currency revenue gain, while households on fixed incomes and peso debtors lose; the size depends on how far the depreciation passes into prices and on the government\'s debt position (Table 3). Judgement: depreciation helps the external balance but hurts households unless inflation is controlled and social spending is kept.\n\n**Question 2**\n\n- **Part (b)(i), 2 marks: calculation.** Formula: % change in quantity demanded = PED × % change in price. First find the % change in price = (new price − old price) / old price × 100, then multiply by the PED value given in Text E (paragraph 1). Round to two decimal places. Worked example (illustrative): a price fall from 20 to 18 gives (18 − 20) / 20 × 100 = -10.00%; with a PED of -0.5 the quantity change is -0.5 × -10.00 = 5.00%. Common mistakes: using the new price as the base; losing the sign, since a negative PED times a negative price change gives a positive change in quantity demanded.\n\n- **Part (g), 15 marks: plan.** Command term: Evaluate means weighing up strengths and limitations. Point 1 (strength): the surplus on goods trade shows export earnings (Text E, paragraph 1; Table 5), and special economic zones support processing and tourism (Text F, paragraph 2). Point 2 (limitation): export revenue depends on extraction, export sales are concentrated in a handful of countries (Text E, paragraph 1), and a levy on log shipments closed some logging firms (Text E, paragraph 2); gold and copper exports are growing slowly (Text E, paragraph 4). Evaluation 1, short and long run: planned free trade agreements may raise exports soon, while diversification into agriculture takes longer and faces climate risks (Text E, paragraph 4). Evaluation 2, stakeholders and assumptions: protection helps machinery producers but raises costs for exporters; the plan assumes partners agree and that agricultural market shares recover. Judgement: trade strategies help growth only when they reduce dependence on commodities and spare exporters costly tariffs.',
      ru: 'Время: 1 ч 45 мин.\n\n**Вопрос 1**\n\n- **Часть (b)(i), 2 балла: расчёт.** Формула: дефлятор ВВП = номинальный ВВП / реальный ВВП × 100. Возьмите номинальный и реальный ВВП за 2022 год из таблицы 3 (Table 3; оба в миллиардах USD) и разделите. Округлите до двух знаков после запятой. Пример (иллюстративный): номинальный ВВП 550 и реальный ВВП 500 дают 550 / 500 × 100 = 110.00. Частые ошибки: забыть × 100, тогда получится 1.10; перепутать номинальный и реальный ВВП.\n\n- **Часть (b)(ii), 1 балл: расчёт.** Формула: процентное изменение цен от базового года = (дефлятор − 100) / 100 × 100. Используйте ответ части (b)(i); базовый год имеет индекс 100. Пример (иллюстративный): дефлятор 110.00 при базе 100 дает 10.00%. Частая ошибка: сравнивать дефлятор с нулём, а не с базой 100.\n\n- **Часть (g), 15 баллов: план.** Командный термин «обсудить» (Discuss) означает взвешенный обзор с несколькими аргументами. Выгода: более слабое песо делает экспорт дешевле для производителей сои и говядины (текст A, абзац 1), что поддерживает торговый баланс (чистая торговля в таблице 3). Издержка: импортные цены растут, а инфляция и так очень высока (таблица 3; текст B, абзац 2), что снижает реальные зарплаты (текст A, абзац 5). Оценка 1, краткосрочный и долгосрочный периоды: инфляция и падение реальных доходов проявляются первыми, а выгоды экспорта — позже. Оценка 2, заинтересованные стороны и размер эффекта: экспортёры и фирмы с валютной выручкой выигрывают, а домохозяйства с фиксированными доходами и должники в песо теряют; размер эффекта зависит от того, насколько обесценивание переходит в цены, и от долговой позиции правительства (таблица 3). Вывод: обесценивание помогает внешнему балансу, но бьёт по домохозяйствам, если инфляцию не сдерживать и социальные расходы не сохранять.\n\n**Вопрос 2**\n\n- **Часть (b)(i), 2 балла: расчёт.** Формула: процентное изменение объёма спроса = PED × процентное изменение цены. Сначала найдите процентное изменение цены = (новая цена − старая цена) / старая цена × 100, затем умножьте на значение PED из текста E (абзац 1). Округлите до двух знаков после запятой. Пример (иллюстративный): падение цены с 20 до 18 дает (18 − 20) / 20 × 100 = -10.00%; при PED -0.5 изменение объёма равно -0.5 × -10.00 = 5.00%. Частые ошибки: брать новую цену за базу; терять знак (отрицательный PED умножается на отрицательное изменение цены и дает положительное изменение объёма).\n\n- **Часть (g), 15 баллов: план.** Командный термин «оценить» (Evaluate) означает взвешивание сильных сторон и ограничений. Довод 1 (сильная сторона): профицит по торговле товарами показывает выручку от экспорта (текст E, абзац 1; таблица 5), а особые экономические зоны поддерживают переработку и туризм (текст F, абзац 2). Довод 2 (ограничение): выручка от экспорта зависит от добычи, большая часть экспорта уходит в пять стран (текст E, абзац 1); налог на экспорт бревен закрыл часть фирм (текст E, абзац 2). Оценка 1, краткосрочный и долгосрочный периоды: планируемые соглашения о свободной торговле могут быстро увеличить экспорт, а диверсификация в сельское хозяйство требует времени и сталкивается с климатическими рисками (текст E, абзац 4). Оценка 2, заинтересованные стороны и допущения: защита помогает производителям машин, но повышает издержки экспортёров; план предполагает согласие партнёров и восстановление доли на рынках сельхозпродукции. Вывод: торговые стратегии помогают росту только тогда, когда снижают зависимость от сырьевых товаров и избавляют экспортёров от дорогих тарифов.',
    },
  },
  {
    id: 'econ-p3-n25-q1',
    subject: 'econ',
    paper: 'P3',
    session: 'N25',
    level: 'HL',
    part: 'question-1',
    files: [
      {
        kind: 'questions',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2025%20Examination%20Session/November%202025%20Examination%20Session/Individuals%20and%20societies/Economics_paper_3_HL.pdf',
      },
      {
        kind: 'markscheme',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2025%20Examination%20Session/November%202025%20Examination%20Session/Individuals%20and%20societies/Economics_paper_3_HL_markscheme.pdf',
      },
    ],
    minutes: 60,
    marks: 30,
    items: [
      {
        q: '1a(i)',
        marks: 1,
        command: 'Calculate',
        topicIds: [
          'measuring-economic-activity',
        ],
      },
      {
        q: '1a(ii)',
        marks: 1,
        command: 'Calculate',
        topicIds: [
          'monetary-policy',
        ],
      },
      {
        q: '1a(iii)',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'monetary-policy',
        ],
      },
      {
        q: '1a(iv)',
        marks: 2,
        command: 'Outline',
        topicIds: [
          'monetary-policy',
        ],
      },
      {
        q: '1a(v)',
        marks: 2,
        command: 'Sketch',
        topicIds: [
          'monetary-policy',
        ],
      },
      {
        q: '1a(vi)',
        marks: 1,
        command: 'Calculate',
        topicIds: [
          'balance-of-payments',
        ],
      },
      {
        q: '1a(vii)',
        marks: 3,
        command: 'Calculate',
        topicIds: [
          'balance-of-payments',
        ],
      },
      {
        q: '1a(viii)',
        marks: 2,
        command: 'Calculate',
        topicIds: [
          'exchange-rates',
        ],
      },
      {
        q: '1a(ix)',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'ad-as-model-and-business-cycle',
          'exchange-rates',
        ],
      },
      {
        q: '1b',
        marks: 10,
        command: 'Recommend',
        topicIds: [
          'exchange-rates',
          'fiscal-policy',
          'supply-side-policies',
        ],
      },
    ],
    guide: {
      en: 'Time for this question in the mock: 60 minutes. The official paper is 1 h 45 min for both questions.\n\n**Question 1**\n\n- **Part (a)(i), 1 mark: calculation.** Growth = (real GDP this year - real GDP last year) / real GDP last year × 100, using Table 1. Example (illustrative): (2415.0 - 2300.0) / 2300.0 × 100 = 5.0 %. Mistake: using nominal GDP.\n- **Part (a)(ii), 1 mark: calculation.** Real interest rate = nominal interest rate - inflation rate. Example (illustrative): 6.5 - 3.2 = 3.3 %. Mistake: adding inflation instead of subtracting it.\n- **Part (a)(vi), 1 mark: calculation.** Balance of trade in goods and services = exports - imports, for Quarter 3 in Table 2. Example (illustrative): 540.0 - 610.0 = -70.0 USD billion, a deficit. Mistake: reversing the order of subtraction.\n- **Part (a)(vii), 3 marks: calculation.** Financial account = -(exports - imports + net income + net current transfers + capital account), using the Quarter 4 entries of Table 2. Example (illustrative, net income -25.0, net transfers -40.0, capital account -5.0): 540.0 - 610.0 + (-25.0) + (-40.0) = -135.0; adding the capital account gives -135.0 - 5.0 = -140.0; financial account = -140.0 × (-1) = 140.0 USD billion. Mistake: keeping the sign of the sum instead of reversing it.\n- **Part (a)(viii), 2 marks: calculation.** Percentage change in the USD price in CNY = (trough - peak) / peak × 100, where the price is CNY per USD (Figure 1). Example (illustrative): (6.10 - 6.40) / 6.40 × 100 = -4.69 %. Mistake: using USD per CNY, the inverse price.\n- **Part (b), 10 marks: plan.** Recommend one main policy, without intervening in foreign exchange markets. Options: expenditure switching (tariffs or export support), expenditure reduction (contractionary fiscal policy) or supply-side reform (training and tax incentives). Support 1: a current account deficit means imports exceed exports, so the currency weakens; use the text\'s data on the deficit. Support 2: lower demand for imports cuts the outflow of currency directly. Evaluate: tariffs may invite retaliation and raise prices; contractionary policy slows growth in the short run; supply-side reform takes years. Judgement: name the policy and the condition under which another would be better.',
      ru: 'Время на этот вопрос в моке: 60 минут. Штатный пейпер — 1 ч 45 мин на оба вопроса.\n\n**Вопрос 1**\n\n- **Часть (a)(i), 1 балл: расчёт.** Рост = (реальный ВВП этого года - реальный ВВП прошлого года) / реальный ВВП прошлого года × 100, таблица 1. Пример (условный): (2415.0 - 2300.0) / 2300.0 × 100 = 5.0 %. Ошибка: использовать номинальный ВВП.\n- **Часть (a)(ii), 1 балл: расчёт.** Реальная процентная ставка = номинальная ставка - инфляция. Пример (условный): 6.5 - 3.2 = 3.3 %. Ошибка: прибавлять инфляцию вместо вычитания.\n- **Часть (a)(vi), 1 балл: расчёт.** Баланс товаров и услуг = экспорт - импорт, 3-й квартал таблицы 2. Пример (условный): 540.0 - 610.0 = -70.0 млрд USD, дефицит. Ошибка: поменять порядок вычитания.\n- **Часть (a)(vii), 3 балла: расчёт.** Финансовый счёт = -(экспорт - импорт + чистый доход + чистые текущие трансферты + счёт капитала), данные 4-го квартала таблицы 2. Пример (условный; чистый доход -25.0, трансферты -40.0, счёт капитала -5.0): 540.0 - 610.0 + (-25.0) + (-40.0) = -135.0; с учётом счёта капитала -135.0 - 5.0 = -140.0; финансовый счёт = -140.0 × (-1) = 140.0 млрд USD. Ошибка: сохранить знак суммы вместо его смены.\n- **Часть (a)(viii), 2 балла: расчёт.** Процентное изменение цены USD в CNY = (минимум - максимум) / максимум × 100, цена — CNY за USD (рисунок 1). Пример (условный): (6.10 - 6.40) / 6.40 × 100 = -4.69 %. Ошибка: использовать USD за CNY, то есть обратную цену.\n- **Часть (b), 10 баллов: план.** Рекомендуйте одну основную меру без валютных интервенций. Варианты: переключение расходов (пошлины или поддержка экспорта), сокращение расходов (сдержанная фискальная политика) или структурная реформа (обучение и налоговые стимулы). Довод 1: дефицит текущего счёта означает, что импорт превышает экспорт, поэтому валюта слабеет; используйте данные текста о дефиците. Довод 2: снижение спроса на импорт сокращает отток валюты напрямую. Оценка: пошлины могут вызвать ответные меры и повысить цены; сдержанная политика замедляет рост в краткосрочном периоде; структурные реформы требуют лет. Вывод: назовите меру и условие, при котором лучше другая.',
    },
  },
  {
    id: 'econ-p3-n25-q2',
    subject: 'econ',
    paper: 'P3',
    session: 'N25',
    level: 'HL',
    part: 'question-2',
    files: [
      {
        kind: 'questions',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2025%20Examination%20Session/November%202025%20Examination%20Session/Individuals%20and%20societies/Economics_paper_3_HL.pdf',
      },
      {
        kind: 'markscheme',
        url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2025%20Examination%20Session/November%202025%20Examination%20Session/Individuals%20and%20societies/Economics_paper_3_HL_markscheme.pdf',
      },
    ],
    minutes: 60,
    marks: 30,
    items: [
      {
        q: '2a(i)',
        marks: 2,
        command: 'Determine',
        topicIds: [
          'benefits-of-trade',
        ],
      },
      {
        q: '2a(ii)',
        marks: 2,
        command: 'Sketch',
        topicIds: [
          'benefits-of-trade',
        ],
      },
      {
        q: '2a(iii)',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'benefits-of-trade',
          'arguments-for-and-against-trade-control',
        ],
      },
      {
        q: '2a(iv)',
        marks: 2,
        command: 'Outline',
        topicIds: [
          'monopoly-and-natural-monopoly',
        ],
      },
      {
        q: '2a(v)',
        marks: 1,
        command: 'Calculate',
        topicIds: [
          'monopoly-and-natural-monopoly',
        ],
      },
      {
        q: '2a(vi)',
        marks: 1,
        command: 'Calculate',
        topicIds: [
          'monopoly-and-natural-monopoly',
        ],
      },
      {
        q: '2a(vii)',
        marks: 1,
        command: 'Identify',
        topicIds: [
          'externalities',
          'equity-and-market-failure',
        ],
      },
      {
        q: '2a(viii)',
        marks: 2,
        command: 'Construct',
        topicIds: [
          'inequality-and-poverty',
        ],
      },
      {
        q: '2a(ix)',
        marks: 4,
        command: 'Explain',
        topicIds: [
          'inequality-and-poverty',
        ],
      },
      {
        q: '2a(x)',
        marks: 1,
        command: 'Calculate',
        topicIds: [
          'government-taxes-subsidies-price-controls',
        ],
      },
      {
        q: '2b',
        marks: 10,
        command: 'Recommend',
        topicIds: [
          'externalities',
          'government-taxes-subsidies-price-controls',
        ],
      },
    ],
    guide: {
      en: 'Time for this question in the mock: 60 minutes. The official paper is 1 h 45 min for both questions.\n\n**Question 2**\n\n- **Part (a)(i), 2 marks: calculation.** Opportunity cost of coffee = palm oil given up / coffee gained, for each country (Table 3). The lower opportunity cost has the comparative advantage. Example (illustrative): Country X 40 / 20 = 2.0; Country Y 30 / 10 = 3.0; X has the lower cost. Mistake: comparing absolute outputs.\n- **Part (a)(v), 1 mark: calculation.** Profit = price × output - total cost (Table 4). Example (illustrative): 8.0 × 3 - 15.0 = 9.0. Mistake: using average cost.\n- **Part (a)(vi), 1 mark: calculation.** Marginal private cost = change in total cost / change in output (rows one kg apart, Table 4). Example (illustrative): (60.0 - 52.0) / 1 = 8.0. Mistake: dividing by total cost.\n- **Part (a)(viii), 2 marks: calculation.** Lorenz curve: plot cumulative income share against cumulative population share (Table 5). Cumulative shares add the quintile shares so far. Example (illustrative): 5 - (-10) = 15 % for the first two quintiles; 15 - (-15) = 30 % for the first three. Mistake: plotting single-quintile shares.\n- **Part (a)(x), 1 mark: calculation.** Welfare loss = 1/2 × base × height; base = quantity gap between the subsidised and unsubsidised quantities; height = vertical demand-supply gap at the subsidised quantity (Figure 3). Units: million litres × thousand IDR = billion IDR. Example (illustrative): base = 150.0 - 120.0 = 30.0 million litres; height = 2.0 thousand IDR; welfare loss = 1/2 × 30.0 × 2.0 = 30.0 billion IDR. Mistake: forgetting the 1/2.\n- **Part (b), 10 marks: plan.** Recommend one main policy, such as a fuel tax on private vehicles with revenue spent on public transport. Support 1: transport and land-use emissions are negative externalities, so the market produces too much; use the text\'s data on emissions. Support 2: a price signal changes behaviour without bans, and the revenue can offset the cost to poorer households. Evaluate: a tax hits low-income families harder unless revenue is returned; infrastructure takes years. Judgement: name the policy and when another would be better.',
      ru: 'Время на этот вопрос в моке: 60 минут. Штатный пейпер — 1 ч 45 мин на оба вопроса.\n\n**Вопрос 2**\n\n- **Часть (a)(i), 2 балла: расчёт.** Альтернативная стоимость кофе = отказ от пальмового масла / полученный кофе, для каждой страны (таблица 3). У кого ниже альтернативная стоимость, у того сравнительное преимущество (comparative advantage). Пример (условный): страна X 40 / 20 = 2.0 масла за единицу кофе; страна Y 30 / 10 = 3.0; у страны X ниже альтернативная стоимость. Ошибка: сравнивать абсолютные объёмы.\n- **Часть (a)(v), 1 балл: расчёт.** Прибыль = цена × объём - общие издержки, таблица 4 при указанном объёме. Пример (условный): 8.0 × 3 - 15.0 = 9.0. Ошибка: использовать средние издержки.\n- **Часть (a)(vi), 1 балл: расчёт.** Предельные частные издержки = изменение общих издержек / изменение объёма между двумя строками таблицы 4 на 1 кг. Пример (условный): (60.0 - 52.0) / 1 = 8.0. Ошибка: делить на общие издержки.\n- **Часть (a)(viii), 2 балла: расчёт.** Кривая Лоренца: отложите накопленную долю дохода против накопленной доли населения, таблица 5. Накопленная доля = сумма долей квинтилей до этого момента. Пример (условный): 5 - (-10) = 15 % для первых двух квинтилей; 15 - (-15) = 30 % для первых трёх. Ошибка: откладывать доли отдельных квинтилей.\n- **Часть (a)(x), 1 балл: расчёт.** Потери благосостояния = 1/2 × основание × высота. Основание = разрыв объёмов между субсидированным и исходным; высота = вертикальный разрыв между спросом и предложением при субсидированном объёме (рисунок 3). Единицы: млн литров × тыс. IDR = млрд IDR. Пример (условный): основание = 150.0 - 120.0 = 30.0 млн литров; высота = 2.0 тыс. IDR; потери = 1/2 × 30.0 × 2.0 = 30.0 млрд IDR. Ошибка: забыть 1/2.\n- **Часть (b), 10 баллов: план.** Рекомендуйте одну основную меру: налог на топливо или выбросы для личного транспорта с расходом выручки на общественный транспорт; или отмену субсидий на топливо с адресными трансфертами; или субсидии низкоуглеродному транспорту. Довод 1: выбросы транспорта и землепользования — негативные внешние эффекты, поэтому рынок производит их слишком много; используйте данные текста о выбросах. Довод 2: ценовой сигнал меняет поведение без прямых запретов, а выручка может компенсировать удар по бедным домохозяйствам. Оценка: налог бьёт сильнее по семьям с низкими доходами, если выручка не возвращается; инфраструктура строится годами, поэтому краткосрочный эффект меньше; затраты на контроль. Вывод: назовите меру и условие, при котором лучше другая.',
    },
  },
];
