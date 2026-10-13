import type { TopicMeta } from '../../../../src/contract/types';

const meta: TopicMeta = {
  id: 'a1-3-os',
  subject: 'cs',
  code: 'A1.3',
  title: { en: 'Operating systems and control systems', ru: 'Операционные системы и системы управления' },
  papers: ['P1'],
  order: 3,
  minutes: 40,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can explain the role of an operating system as an interface and resource manager, including abstraction.', ru: 'Умею объяснить роль операционной системы как посредника и распределителя ресурсов, включая абстракцию.' },
    { en: 'I can describe the main functions of an OS: process, memory, file, device and security management.', ru: 'Умею описать основные функции ОС: управление процессами, памятью, файлами, устройствами и безопасностью.' },
    { en: 'I can compare FCFS, round robin, multilevel queue and priority scheduling by fairness, efficiency and starvation.', ru: 'Умею сравнивать FCFS, round robin, многоуровневую очередь и приоритетное планирование по справедливости, эффективности и голоданию.' },
    { en: 'I can calculate the average waiting time for FCFS and show every stage of the working.', ru: 'Умею рассчитать среднее время ожидания для FCFS и показать каждый этап решения.' },
    { en: 'I can evaluate polling against interrupts for a given device, using power, CPU overhead, event frequency and latency.', ru: 'Умею оценивать опрос и прерывания для конкретного устройства по энергопотреблению, нагрузке на ЦП, частоте событий и задержке.' },
    { en: 'I can explain multitasking, context switching, resource contention and deadlock, and how the OS handles them.', ru: 'Умею объяснить многозадачность, переключение контекста, конкуренцию за ресурсы и взаимоблокировку, а также способы их решения ОС.' },
    { en: 'I can describe the IPO model, feedback, and open-loop and closed-loop control, with the main components.', ru: 'Умею описать модель IPO, обратную связь, разомкнутый и замкнутый контуры управления и основные компоненты.' },
    { en: 'I can explain how control systems are used in real life, for example in thermostats, traffic signals and autonomous vehicles.', ru: 'Умею объяснить, как системы управления применяются в жизни, например в термостатах, светофорах и автономных автомобилях.' },
  ],
  termIds: [
    'a1-3-os',
    'a1-3-process',
    'a1-3-scheduling',
    'a1-3-preemption',
    'a1-3-starvation',
    'a1-3-polling',
    'a1-3-interrupt',
    'a1-3-multitasking',
    'a1-3-control-system',
    'a1-3-feedback',
    'a1-3-sensor',
  ],
  questionIds: [
    'a1-3-q01',
    'a1-3-q02',
    'a1-3-q03',
    'a1-3-q04',
    'a1-3-q05',
    'a1-3-q06',
    'a1-3-q07',
    'a1-3-q08',
  ],
  sources: [
    { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A1.3, pp. 66–89' },
  ],
};

export default meta;
