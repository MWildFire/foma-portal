import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'a4-1-q01',
    subject: 'cs',
    topicIds: ['a4-1-ml-fundamentals'],
    paper: 'P1',
    section: 'A',
    marks: 3,
    command: 'Describe',
    prompt: {
      en: 'A small clinic wants a model that sorts photos of skin lesions into two classes. It has only a few hundred labelled photos, but a model pre-trained on millions of general images is available. Describe how transfer learning could be used, and why it helps when the labelled data set is small.',
      ru: 'Небольшая клиника хочет модель, которая сортирует фотографии кожных образований по двум классам. У клиники есть лишь несколько сотен размеченных фотографий, но доступна модель, предобученная на миллионах общих изображений. Опишите, как можно использовать перенос обучения и почему он помогает, когда размеченный набор данных маленький.',
    },
    markscheme: {
      en: '[1] The pre-trained model, which has already learned general visual features such as edges and textures, is used as the starting point. [1] Its layers are then fine-tuned on the clinic’s labelled photos for the two classes. [1] Because the basic features are already learned, the model needs less labelled data to reach good accuracy than a model trained from scratch.',
      ru: '[1] Предобученная модель, которая уже выучила общие визуальные признаки, например края и текстуры, берётся в качестве отправной точки. [1] Затем её дообучают (fine-tuning) на размеченных фотографиях клиники для двух классов. [1] Поскольку базовые признаки уже выучены, модели нужно меньше размеченных данных, чтобы достичь хорошей точности, чем модели, обучаемой с нуля.',
    },
    origin: 'original',
  },
  {
    id: 'a4-1-q02',
    subject: 'cs',
    topicIds: ['a4-1-ml-fundamentals'],
    paper: 'P1',
    section: 'A',
    marks: 4,
    command: 'Suggest',
    prompt: {
      en: 'A weather research team trains a deep learning model on decades of satellite images in its own data centre. Separately, a small weather station in a remote area must classify cloud types on the spot. It runs on battery power and has no reliable network connection. Suggest a suitable hardware configuration for each scenario, giving a reason for each choice.',
      ru: 'Команда метеорологов обучает модель глубокого обучения на многолетних спутниковых снимках в собственном дата-центре. Отдельно небольшая метеостанция в отдалённом районе должна на месте классифицировать типы облаков. Она работает от батареи и не имеет надёжного сетевого соединения. Предложите подходящую аппаратную конфигурацию для каждого сценария и объясните выбор.',
    },
    markscheme: {
      en: '[1] Training: GPU servers with several high-end GPUs (or a cloud platform with GPUs), because training deep models needs many calculations at the same time. [1] Reason: GPUs carry out many calculations concurrently, and high-capacity storage holds the large image set, which shortens training. [1] Weather station: an edge device with an energy-efficient processor, such as an ARM-based CPU or a small accelerator, and flash storage. [1] Reason: the data is processed where it is produced, with low latency and low power use, so the station can run on battery without a network (accept an ASIC or FPGA with low power as the reason).',
      ru: '[1] Обучение: выделенные GPU-серверы с одним или несколькими мощными GPU (или облачная платформа с GPU), потому что обучение глубоких моделей требует множества одновременных вычислений. [1] Причина: GPU выполняют много вычислений параллельно, а хранилище большой ёмкости вмещает большой набор снимков, что сокращает время обучения. [1] Метеостанция: периферийное устройство с энергоэффективным процессором, например на базе ARM, или небольшим ускорителем, и флеш-память. [1] Причина: данные обрабатываются там, где возникают, с малой задержкой и малым энергопотреблением, поэтому станция работает от батареи без сети (принимаются ASIC или FPGA с обоснованием низкого энергопотребления).',
    },
    origin: 'original',
  },
];
