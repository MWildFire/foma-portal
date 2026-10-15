import type { Question } from '../../../../src/contract/types';

// Common pool resources questions. The calculation (econ-common-pool-resources-01) is checked by scripts/econ-checks/common-pool-resources.json.
export const questions: (Question & { inMockScope?: 'yes' | 'no' })[] = [
  {
    id: 'econ-common-pool-resources-01',
    subject: 'econ',
    topicIds: ['common-pool-resources'],
    paper: 'P2',
    marks: 2,
    command: 'Calculate',
    prompt: {
      en: 'The sustainable catch of a bay is 1200 tonnes a year. Under a quota, this catch is shared equally among 40 boats. Calculate the quota for each boat in tonnes a year. Give your answer to one decimal place. [2 marks]',
      ru: 'Устойчивый улов бухты составляет 1200 тонн в год. При квоте этот улов делится поровну между 40 лодками. Рассчитайте квоту на одну лодку в тоннах в год. Дайте ответ с одним знаком после запятой. [2 балла]',
    },
    markscheme: {
      en: '1 mark: quota per boat = 1200 / 40 tonnes. 1 mark: 30.0 tonnes per boat a year.',
      ru: '1 балл: квота на лодку = 1200 / 40 тонн. 1 балл: 30,0 тонн на лодку в год.',
    },
    answer: '30.0',
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'econ-common-pool-resources-02',
    subject: 'econ',
    topicIds: ['common-pool-resources'],
    paper: 'P2',
    marks: 4,
    command: 'Explain',
    prompt: {
      en: 'Explain why a common pool resource, such as a fishing bay, is overused under open access. Refer to rivalry and non-excludability in your answer. [4 marks]',
      ru: 'Объясните, почему общий ресурс, например рыбная бухта, перегружается при открытом доступе. В ответе сошлитесь на соперничество в потреблении и неисключаемость. [4 балла]',
    },
    markscheme: {
      en: "1 mark: rivalry: one boat's catch reduces the fish left for other boats. 1 mark: non-excludability: no owner can keep boats out, so anyone can enter the fishery. 1 mark: each boat compares only its private benefit with its private cost and ignores the cost of depletion that falls on all boats. 1 mark: entry continues until total revenue equals total cost, which means zero economic profit and more effort than the socially optimal level.",
      ru: '1 балл: соперничество: улов одной лодки уменьшает рыбу, оставшуюся для других лодок. 1 балл: неисключаемость: ни один владелец не может не допустить лодки, поэтому вход свободный. 1 балл: каждая лодка сравнивает только свою частную выгоду с частными издержками и не учитывает издержки истощения, которые падают на все лодки. 1 балл: вход продолжается, пока совокупный доход не станет равен совокупным издержкам; экономическая прибыль нулевая, а усилие больше общественно оптимального.',
    },
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'econ-common-pool-resources-03',
    subject: 'econ',
    topicIds: ['common-pool-resources'],
    paper: 'P2',
    marks: 8,
    command: 'Evaluate',
    prompt: {
      en: 'Evaluate the use of quotas and tradable permits to limit overfishing in a common pool resource. [8 marks]',
      ru: 'Оцените использование квот и торгуемых разрешений для ограничения перелова в общем ресурсе. [8 баллов]',
    },
    markscheme: {
      en: '1 mark: a quota caps the total catch at the sustainable level, which limits overfishing directly. 1 mark: quotas shared out as individual shares give boats a stake in conserving the stock. 1 mark: tradable permits let the most efficient boats catch the fish at the lowest total cost. 1 mark: the regulator needs reliable data on the stock; a quota set too high on poor data still depletes it. 1 mark: enforcement is costly, and illegal fishing or a race to catch the quota can undermine it. 1 mark: quotas and permits may concentrate rights in a few large firms and raise prices for consumers. 1 mark: evaluation: effectiveness depends on monitoring, on the size of the stock and on how easily the rights can be traded. 1 mark: a supported judgement with reference to the Atlantic cod case, where open access led to a collapse of the stock.',
      ru: '1 балл: квота ограничивает общий улов устойчивым уровнем, что напрямую сдерживает перелов. 1 балл: квоты, распределённые как индивидуальные доли, дают лодкам интерес сохранять запас. 1 балл: торгуемые разрешения позволяют наиболее эффективным лодкам ловить рыбу с наименьшими общими издержками. 1 балл: регулятору нужны надёжные данные о запасах; квота, установленная слишком высоко по плохим данным, всё равно истощит запас. 1 балл: контроль стоит дорого, а нелегальный лов или гонка за квотой могут свести её на нет. 1 балл: квоты и разрешения могут сосредоточить права в руках нескольких крупных фирм и поднять цены для потребителей. 1 балл: оценка: эффективность зависит от контроля, размера запаса и того, насколько легко права передаются. 1 балл: обоснованное суждение со ссылкой на кейс атлантической трески, где открытый доступ привёл к коллапсу запаса.',
    },
    origin: 'original',
    minutes: 15,
  },
];
