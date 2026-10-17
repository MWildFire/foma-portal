import type { Question } from '../../../../src/contract/types';
// Original bridging work for school-listed skills; no matrices, calculus, kinematics or graph theory.
export const questions: Question[] = [
  {
    "id": "r06-functions",
    "subject": "math",
    "topicIds": [
      "2-2-functions-inverse",
      "2-7-composite-inverse",
      "2-3-graphs-sketching",
      "2-5-standard-models"
    ],
    "paper": "P2",
    "marks": 18,
    "command": "Calculate / Sketch / Explain",
    "prompt": {
      "en": "Let f(x)=2x+3 and g(x)=x², both with real domain. (a) Find f⁻¹ and verify both compositions give the identity. On labelled axes plot (0,3),(1,5) and their reflected points on f⁻¹; explain the reflection line. [5]\n(b) Use your GDC to graph f, g, f+g and f−g on −4≤x≤4. Transfer a sketch to paper: label intercepts, turning points and both intersections of f and g (3 d.p.). Explain why a screen image alone is not the requested sketch. [6]\n(c) Data I: x=1,2,4; y=3,6,12. Data II: x=1,2,4; y=24,12,6. Fit a direct model and an inverse-variation model; state each domain if x denotes a positive length, and predict y at x=3. [4]\n(d) Sketch f(−x) and −f(x); identify the reflection axis in EACH case and map the point(1,5). [3]",
      "ru": "Пусть f(x)=2x+3, g(x)=x², области определения — все действительные числа. (a) Найди f⁻¹ и проверь, что обе композиции дают тождественную функцию. Построй (0;3), (1;5) и отражённые точки графика f⁻¹, подпиши оси и прямую отражения. [5]\n(b) На GDC построй f, g, f+g и f−g при −4≤x≤4. Перенеси эскиз на бумагу: пересечения с осями, вершины, обе точки пересечения f и g (3 знака после запятой). Объясни, почему снимок экрана не заменяет эскиз. [6]\n(c) Набор I: x=1,2,4; y=3,6,12. Набор II: x=1,2,4; y=24,12,6. Подбери прямую и обратную пропорциональности, укажи области при положительной длине x и найди y при x=3. [4]\n(d) Построй f(−x) и −f(x): ось отражения в КАЖДОМ случае, образ точки(1;5). [3]"
    },
    "markscheme": {
      "en": "(a) Solve y=2x+3 for x: f⁻¹(x)=(x−3)/2. f(f⁻¹(x))=x and f⁻¹(f(x))=x. Reflection in y=x sends (0,3)→(3,0) and (1,5)→(5,1). [5]\n(b) f+g=x²+2x+3=(x+1)²+2: vertex(−1,2), y-intercept3, no real roots. f−g=−x²+2x+3=4−(x−1)²: vertex(1,4), roots−1,3, y-intercept3. f=g gives x²−2x−3=0: x=−1,3, so intersections(−1,1),(3,9). Label scales and these features on the paper sketch; GDC is a tool for finding/checking them. [6]\n(c) I has constant y/x=3, so y=3x; II has constant xy=24, so y=24/x. In the stated length context x>0; predictions9 and8. [4]\n(d) f(−x)=−2x+3 reflects in the y-axis,(1,5)→(−1,5);−f(x)=−2x−3 reflects in the x-axis,(1,5)→(1,−5). Label axes and intercepts. [3]",
      "ru": "(a) Из y=2x+3: f⁻¹(x)=(x−3)/2. Подстановка в обоих порядках даёт x. Отражение относительно y=x переводит (0;3) в (3;0), (1;5) в (5;1). [5]\n(b) f+g=(x+1)²+2: вершина(−1;2), пересечение с Oy —3, действительных нулей нет. f−g=4−(x−1)²: вершина(1;4), нули−1 и3, с Oy —3. Уравнение f=g даёт x²−2x−3=0: точки(−1;1),(3;9). На бумаге нужны оси, масштаб и найденные особенности; GDC помогает их найти и проверить. [6]\n(c) I: y/x=3, значит y=3x. II: xy=24, значит y=24/x. Для положительной длины x>0. При x=3 ответы9 и8. [4]\n(d) f(−x)=−2x+3: отражение относительно Oy,(1;5)→(−1;5);−f(x)=−2x−3: относительно Ox,(1;5)→(1;−5). Подпиши оси/пересечения. [3]"
    },
    "origin": "original",
    "minutes": 18
  },
  {
    "id": "r06-sigma",
    "subject": "math",
    "topicIds": [
      "1-2-arithmetic-sequences",
      "1-3-geometric-sequences"
    ],
    "paper": "P2",
    "marks": 10,
    "command": "Calculate / Sketch / Explain",
    "prompt": {
      "en": "(a) Write 120+128+…+208 in sigma notation, identify the number of terms and calculate its sum using a series formula. Explain why this is an arithmetic model, and name a real-life limitation of an unlimited continuation. [5]\n(b) Write 500+350+245+… (n terms) in sigma notation, derive its finite sum and calculate the infinite sum, stating its convergence condition. Find n=3 as a check. [5]",
      "ru": "(a) Запиши 120+128+…+208 через знак суммы, найди число слагаемых и сумму по формуле. Почему модель арифметическая? Назови ограничение неограниченного продолжения в реальном контексте. [5]\n(b) Запиши 500+350+245+… (n членов) через знак суммы, получи конечную сумму и сумму бесконечного ряда с условием сходимости. Проверь случай n=3. [5]"
    },
    "markscheme": {
      "en": "(a) Σ(k=1 to12)[120+8(k−1)]; 120+8(n−1)=208 gives n=12. S=12(120+208)/2=1968. Constant difference8 defines the model. A real weekly-borrowing series cannot rise indefinitely because capacity/demand is finite. [5]\n(b) Σ(j=0 to n−1)500(0.7)^j=500(1−0.7^n)/(1−0.7). For |r|<1, r^n→0, so S∞=500/0.3=1666.67 (2 d.p.). S3=500+350+245=1095. [5]",
      "ru": "(a) Σ(k=1…12)[120+8(k−1)]. Из 120+8(n−1)=208 следует n=12; S=12(120+208)/2=1968. Разность постоянна и равна8. Реальное число выдаваемых книг не может расти бесконечно: ограничены спрос и возможности библиотеки. [5]\n(b) Σ(j=0…n−1)500·0,7^j=500(1−0,7^n)/0,3. При |r|<1 степень r^n стремится к нулю, поэтому S∞=1666,67 (2 знака). Проверка S3=500+350+245=1095. [5]"
    },
    "origin": "original",
    "minutes": 10
  },
  {
    "id": "r06-piecewise",
    "subject": "math",
    "topicIds": [
      "2-9-extended-models"
    ],
    "paper": "P2",
    "marks": 8,
    "command": "Calculate / Sketch / Explain",
    "prompt": {
      "en": "(a) Sketch f(x)=0 for x<0 and f(x)=1 for x≥0 with open/filled endpoints. Is f a function? Is it continuous at0? [3]\n(b) Explain the error in assigning g(x)=0 for x≤0 and g(x)=1 for x≥0. Repair the definition. [2]\n(c) A tank volume is 2t for 0≤t<3 and t+c for 3≤t≤5. There is no instantaneous addition/removal of water. Find c and V(3), explaining the condition you used. [3]",
      "ru": "(a) Построй f(x)=0 при x<0, f(x)=1 при x≥0; отметь пустой и закрашенный концы. Это функция? Непрерывна ли она в0? [3]\n(b) В чём ошибка g(x)=0 при x≤0 и g(x)=1 при x≥0? Исправь определение. [2]\n(c) Объём воды равен2t при 0≤t<3 и t+c при 3≤t≤5. Мгновенного добавления/удаления воды нет. Найди c и V(3), объяснив условие. [3]"
    },
    "markscheme": {
      "en": "(a) Open(0,0), filled(0,1); every input has one output, so it is a function, but it jumps at0. [3] (b) Two outputs at0; replace one ≤/≥ by a strict inequality (or make both rules agree there). [2] (c) The physical condition requires continuity: 6=3+c, so c=3 and V(3)=6. A piecewise definition alone does not impose this equality. [3]",
      "ru": "(a) Пустая(0;0), закрашенная(0;1); каждому аргументу соответствует одно значение, значит это функция, но в0 есть скачок. [3] (b) В0 заданы два разных значения; сделай одно из неравенств строгим либо согласуй значения. [2] (c) Физическое условие требует непрерывности: 6=3+c, откуда c=3, V(3)=6. Само кусочное задание такого равенства не требует. [3]"
    },
    "origin": "original",
    "minutes": 8
  },
  {
    "id": "r06-data-design",
    "subject": "math",
    "topicIds": [
      "4-1-sampling",
      "4-3-central-dispersion",
      "4-4-correlation-regression",
      "4-12-survey-design"
    ],
    "paper": "P2",
    "marks": 17,
    "command": "Calculate / Sketch / Explain",
    "prompt": {
      "en": "(a) For 1,2,2,4,6,7,10,12, draw a labelled box plot using medians of the lower/upper halves; give median, quartiles, range, IQR and mode. [5]\n(b) Plot (1,2),(2,5),(3,5), calculate the mean point, and draw a sensible line through it. Use y=1.5x+1 to interpret both parameters, predict y at2.5 and explain why x=20 is risky. [4]\n(c) To estimate G12 study time, a teacher repeatedly surveys the first five volunteers about their exam grades. Define population/sample, classify study duration versus number of sessions, and distinguish reliability from validity. Propose a random/stratified design, relevant variables, a pilot and a repeatability check. Can highly consistent answers still be invalid? [4]\n(d) Grouped times0–10:12,10–20:18,20–30:15,30–50:10. Produce the frequency table and a histogram with frequency-density axis,using all bars;explain why the last bar is not height10. [4]",
      "ru": "(a) Для 1,2,2,4,6,7,10,12 построй ящик с усами, используя медианы нижней и верхней половин; найди медиану, квартили, размах, IQR и моду. [5]\n(b) Построй (1;2),(2;5),(3;5), найди точку средних и проведи разумную прямую через неё. Для y=1,5x+1 истолкуй оба параметра, спрогнозируй y при2,5 и объясни риск x=20. [4]\n(c) Для оценки учебного времени G12 учитель снова и снова опрашивает первых пять добровольцев об оценках за экзамен. Определи совокупность/выборку, различи длительность и число занятий, надёжность и валидность. Предложи случайный/стратифицированный отбор, нужные переменные, пилот и проверку повторяемости. Могут ли устойчивые ответы быть невалидными? [4]\n(d) Время по группам0–10:12,10–20:18,20–30:15,30–50:10. Таблица частот и гистограмма с осью плотности,все столбцы;почему высота последнего не10? [4]"
    },
    "markscheme": {
      "en": "(a) Five-number summary1,2,5,8.5,12; range12−1=11; IQR6.5; mode2. Label the number axis and whiskers. [5] (b) Mean point(2,4). The given line passes through it; slope1.5 is predicted y increase per unit x, intercept1 is predicted y at0 (outside observed x and not necessarily physically meaningful). At2.5:4.75; x20 is extrapolation with no evidence the relationship persists. [4] (c) Population all G12 students, sample five volunteers; duration continuous, session count discrete. Reliability is consistency under comparable repetitions; validity is measuring the intended study-time construct. Grades alone do not measure duration; repeating that question cannot repair validity. Sample from the full register, stratify known groups proportionally if useful; record defined self-study minutes/day, date and group, pilot neutral wording, repeat on comparable days and check against logs with consent. Selection and recall bias remain limitations. [4]\n(d) Class widths10,10,10,20;density1.2,1.8,1.5,0.5. Histogram areas,not heights,represent frequencies;label time(minutes) and students/minute. Use non-overlapping endpoint conventions. [4]",
      "ru": "(a) Пять опорных чисел:1;2;5;8,5;12, размах12−1=11, IQR6,5, мода2. Подпиши числовую ось и усы. [5] (b) Точка средних(2;4), данная прямая проходит через неё.1,5 — прогноз прироста y на единицу x;1 — прогноз при x=0, вне наблюдений и не обязательно осмысленный физически. При2,5 ответ4,75; x=20 — экстраполяция без проверки сохранения связи. [4] (c) Совокупность — весь G12, выборка — пять добровольцев; длительность непрерывна, число занятий дискретно. Надёжность — согласованность сопоставимых повторений, валидность — измерение нужного свойства. Оценки не измеряют длительность; повторение неверного вопроса этого не исправляет. Отбирай по полному списку, при необходимости пропорционально по стратам; задай самостоятельные минуты/день, дату и группу, проведи пилот нейтрального вопроса и сравни повторы на сопоставимых днях с журналами по согласию. Остаются риски отбора и памяти. [4]\n(d) Ширины10,10,10,20;плотности1,2;1,8;1,5;0,5. Частота равна площади,не высоте. Оси:минуты и учеников/минуту,границы классов без двойного учёта. [4]"
    },
    "origin": "original",
    "minutes": 16
  },
  {
    "id": "r06-probability-diagrams",
    "subject": "math",
    "topicIds": [
      "4-5-probability-basics",
      "4-6-combined-events"
    ],
    "paper": "P2",
    "marks": 12,
    "command": "Calculate / Sketch / Explain",
    "prompt": {
      "en": "(a) Among100 students,30 study A,40 study B and10 both. Draw a Venn diagram including the universal set and all four regions. Calculate P(not A), P(A∪B), P(A|B); decide whether A/B are mutually exclusive or independent. [6]\n(b) A bag has5 red and3 blue counters. Draw the complete labelled probability tree for two draws without replacement. Use it to find P(BB), P(at least one red) and P(first blue|second red); explain why the draws are not independent. [4]\n(c) Draw the 36-cell sample-space table for two fair dice. Define a trial, outcome and event; use the table to find P(sum7) and the expected number of sum7 outcomes in120 independent rounds. [2]\nIf120 trials actually produced17 sums of7,calculate the relative frequency and distinguish it from the theoretical probability and expected count.",
      "ru": "(a) Из100 учеников30 изучают A,40 — B,10 — оба. Нарисуй диаграмму Венна с универсальным множеством и четырьмя областями. Найди P(не A), P(A∪B), P(A|B); проверь несовместность и независимость. [6]\n(b) В мешке5 красных и3 синих жетона. Построй полное подписанное дерево двух извлечений без возвращения. Найди P(BB), P(хотя бы один красный) и P(первый синий|второй красный); почему извлечения зависимы? [4]\n(c) Составь таблицу36 исходов двух честных кубиков. Дай определения испытанию, исходу и событию; найди P(сумма7) и ожидаемое число таких исходов за120 независимых бросков пары. [2]\nЕсли за120 испытаний сумма7 выпала17 раз,найди относительную частоту и отличи её от теоретической вероятности/ожидаемого числа."
    },
    "markscheme": {
      "en": "(a) A only20, both10, B only30, neither40. P(not A)=0.7; union0.6; conditional10/40=0.25. Not mutually exclusive because intersection0.1>0; not independent because0.1≠0.3×0.4. [6]\n(b) First R5/8,B3/8; after R: R4/7,B3/7; after B:R5/7,B2/7. BB=(3/8)(2/7)=3/28; at least R=25/28; P(first B and second R)=15/56, P(second R)=5/8, so conditional3/7. Probabilities on the second draw depend on the first result. [4]\n(c) The table is ordered pairs(1,1)…(6,6); six give sum7, so probability1/6 and expectation20. Trial: one pair of throws; outcome: one ordered pair; event: specified subset of pairs. [2]\nRelative frequency17/120≈0.1417;theory1/6≈0.1667;expected count20. Random variation does not force observed count to equal expectation.",
      "ru": "(a) Только A20, оба10, только B30, ни один40. P(не A)=0,7; объединение0,6; условная10/40=0,25. События совместны: пересечение0,1>0; зависимы:0,1≠0,3·0,4. [6]\n(b) Первый R5/8,B3/8; после R — R4/7,B3/7; после B — R5/7,B2/7. BB=3/28; хотя бы R=25/28. P(B затем R)=15/56, P(второй R)=5/8, условная3/7. Вероятность второго результата зависит от первого. [4]\n(c) Таблица упорядоченных пар от(1;1) до(6;6), шесть дают7: вероятность1/6, ожидание20. Испытание — бросок пары, исход — конкретная упорядоченная пара, событие — заданное подмножество пар. [2]\nОтносительная частота17/120≈0,1417;теоретическая1/6≈0,1667;ожидаемое число20. Случайность не требует совпадения наблюдения и ожидания."
    },
    "origin": "original",
    "minutes": 12
  },
  {
    "id": "r06-normal-poisson",
    "subject": "math",
    "topicIds": [
      "4-9-normal",
      "4-17-poisson"
    ],
    "paper": "P2",
    "marks": 8,
    "command": "Calculate / Sketch / Explain",
    "prompt": {
      "en": "(a) Sketch the density of X~N(50,5²), labelling the mean, symmetry, inflection positions and the shaded event45<X<55. Give P(X<50), approximate the shaded probability with a GDC and explain why P(X=50)=0. [5]\n(b) Independent counters record arrivals in the SAME ten-minute period: A~Poisson(2), B~Poisson(3). State the distribution, mean and variance of A+B and find P(A+B=0). Explain why simply adding means does not establish a Poisson sum without independence. [3]",
      "ru": "(a) Построй плотность X~N(50;5²): среднее, симметрия, точки перегиба, область45<X<55. Найди P(X<50), вычисли площадь выделенной области на GDC и объясни P(X=50)=0. [5]\n(b) Независимые счётчики за ОДИН И ТОТ ЖЕ десятиминутный период дают A~Poisson(2), B~Poisson(3). Укажи распределение, среднее и дисперсию суммы, найди P(A+B=0). Почему сложения средних без независимости недостаточно для пуассоновского распределения суммы? [3]"
    },
    "markscheme": {
      "en": "(a) Symmetric bell about50, inflections45 and55; both tails approach the axis. P(X<50)=0.5, shaded probability≈0.682689. A continuous distribution assigns zero probability to a single point, not to an interval. [5] (b) A+B~Poisson(5), mean5 and variance5; P(0)=e^−5≈0.006738. Independence is the condition for this Poisson-sum result; means add more generally without guaranteeing the distribution. [3]",
      "ru": "(a) Симметричный колокол относительно50, перегибы45 и55, хвосты приближаются к оси. P(X<50)=0,5, выделенная площадь≈0,682689. У непрерывного распределения вероятность отдельной точки нулевая; это не относится к интервалу. [5] (b) A+B~Poisson(5), среднее и дисперсия5; P(0)=e^−5≈0,006738. Независимость нужна именно для пуассоновского закона суммы; средние складываются и без гарантии такого закона. [3]"
    },
    "origin": "original",
    "minutes": 8
  },
  {
    "id": "r06-binomial-two-means",
    "subject": "math",
    "topicIds": [
      "4-11-hypothesis-tests",
      "4-18-hypothesis-errors"
    ],
    "paper": "P2",
    "marks": 15,
    "command": "Calculate / Sketch / Explain",
    "prompt": {
      "en": "(a) A process has defect probability p=0.1. Test whether p has increased using20 independent items and reject when X≥5. State H0/H1 and the model. Use a GDC to calculate the actual significance P(X≥5|p=.1), check why X≥4 would not be a5% critical region, and find Type-II probability when p=.25. Explain both error types in this setting. [8]\n(b) Two independent random samples from normal populations, with equal unknown variances, have n1=n2=10, means12 and10, sample standard deviations2 and2. At5%, test whether their population means differ. State the assumptions/hypotheses BEFORE calculating the pooled t-statistic, degrees of freedom and two-tailed p-value. Does rejection prove a causal effect? [7]",
      "ru": "(a) Вероятность брака p=0,1. По20 независимым изделиям проверяется рост p, H0 отвергается при X≥5. Задай гипотезы и модель. На GDC найди фактическую значимость P(X≥5|p=0,1), проверь, почему X≥4 не подходит для5%-го теста, и найди вероятность ошибки II рода при p=0,25. Объясни обе ошибки в контексте. [8]\n(b) Две независимые случайные выборки из нормальных совокупностей с равными неизвестными дисперсиями: n1=n2=10, средние12 и10, выборочные стандартные отклонения2 и2. При5% проверь различие средних совокупностей. ДО расчёта запиши допущения/гипотезы; найди объединённую t-статистику, степени свободы и двустороннее p-значение. Доказывает ли отвержение причинность? [7]"
    },
    "markscheme": {
      "en": "(a) H0:p=.1, H1:p>.1; X~B(20,p). Actual alpha=1−binomCDF(20,.1,4)=.0431745. For threshold4, alpha=.132953> .05, so reject region starts at5. Under p=.25, Type-II means not rejecting (X≤4): beta=binomCDF(20,.25,4)=.414842. Type I falsely declares an increase when p=.1; Type II misses the true increase to .25. [8]\n(b) H0:μ1=μ2, H1:μ1≠μ2; pooled s²=((9)(4)+(9)(4))/18=4. SE=√(4/10+4/10)=√.8. t=2/√.8=2.23607, df18, two-tailed p≈.038250. Reject at5%; evidence of unequal means, not proof of a causal treatment effect without an appropriate experimental design. [7]",
      "ru": "(a) H0:p=0,1, H1:p>0,1; X~B(20;p). Фактическая alpha=1−binomCDF(20;0,1;4)=0,0431745. При пороге4 alpha=0,132953>0,05, поэтому критическая область начинается с5. При p=0,25 ошибка II рода — не отвергнуть H0 (X≤4): beta=0,414842. Ошибка I рода — ложно объявить рост при p=0,1; II рода — пропустить реальный рост до0,25. [8]\n(b) H0:μ1=μ2, H1:μ1≠μ2; объединённая s²=(9·4+9·4)/18=4. SE=√(4/10+4/10)=√0,8; t=2,23607, df18, двустороннее p≈0,038250. При5% H0 отвергается: есть свидетельство различия средних, но причинный эффект без соответствующего эксперимента не доказан. [7]"
    },
    "origin": "original",
    "minutes": 15
  },
  {
    "id": "r06-unit-circle",
    "subject": "math",
    "topicIds": [
      "3-8-unit-circle",
      "1-12-complex-cartesian"
    ],
    "paper": "P2",
    "marks": 12,
    "command": "Calculate / Sketch / Explain",
    "prompt": {
      "en": "(a) Draw the unit circle, define sinθ,cosθ,tanθ by coordinates, and give exact values at θ=5π/6. Convert that angle to degrees. Sketch y=sinx and solve sinx=1/2 on0≤x≤2π using the graph and exact angles. [6]\n(b) State i². For z=3+4i and w=1−2i, find z+w,z−w,zw,z/w, the conjugate and modulus of z. Plot z and iz and describe the geometric action of multiplication by i. Verify one product with your GDC. [6]\nDefine one radian using arc length/radius before converting.",
      "ru": "(a) Нарисуй единичную окружность, задай sinθ,cosθ,tanθ через координаты точки, найди точные значения при θ=5π/6. Переведи угол в градусы. Построй y=sinx и реши sinx=1/2 на0≤x≤2π по графику и точным углам. [6]\n(b) Укажи i². Для z=3+4i, w=1−2i найди z+w,z−w,zw,z/w, сопряжённое и модуль z. Отметь z и iz; опиши геометрию умножения на i. Проверь одно произведение на GDC. [6]\nПеред переводом определи радиан через длину дуги и радиус."
    },
    "markscheme": {
      "en": "(a) Point(cosθ,sinθ); tanθ=sinθ/cosθ when cosθ≠0. At150°=5π/6: sin=1/2,cos=−√3/2,tan=−1/√3. Sine sketch through0,π/2,π,3π/2,2π with heights0,1,0,−1,0; intersections with y=.5 atπ/6 and5π/6. [6]\n(b) i²=−1; sum4+2i,difference2+6i,product11−2i,quotient−1+2i (multiply numerator/denominator by1+2i), conjugate3−4i, modulus5. iz=−4+3i: rotation90° anticlockwise about0, modulus unchanged. GDC check records both input and output. [6]\nOne radian subtends an arc equal in length to the radius;θ=s/r,soπr on a semicircle corresponds toπ radians=180°.",
      "ru": "(a) Координаты(cosθ;sinθ), tanθ=sinθ/cosθ при cosθ≠0. Для150°=5π/6: sin=1/2,cos=−√3/2,tan=−1/√3. Синусоида проходит через0,π/2,π,3π/2,2π с ординатами0,1,0,−1,0; с y=0,5 пересекается приπ/6 и5π/6. [6]\n(b) i²=−1; сумма4+2i, разность2+6i, произведение11−2i, частное−1+2i (домножение на1+2i), сопряжённое3−4i, модуль5. iz=−4+3i — поворот на90° против часовой стрелки вокруг0 с сохранением модуля. Для проверки на GDC запиши ввод и результат. [6]\nОдин радиан стягивает дугу длиной в радиус;θ=s/r,полуокружностьπr соответствуетπ радианам=180°."
    },
    "origin": "original",
    "minutes": 12
  },
  {
    "id": "r06-pyramid",
    "subject": "math",
    "topicIds": [
      "3-1-3d-volumes"
    ],
    "paper": "P2",
    "marks": 11,
    "command": "Calculate / Sketch / Explain",
    "prompt": {
      "en": "A right square pyramid has base side10cm and vertical height12cm. Draw and label the base centre, a vertex, the apex and the midpoint of a base edge. Calculate its volume, slant height, total surface area and the angle a slant edge makes with the base plane. Explain which projected line belongs in the final right triangle. [8]\nAlso find the volume and total surface area of a sphere of radius6cm and of a separate solid hemisphere of radius6cm,including its base. Explain the different exposed surfaces. [3]",
      "ru": "У правильной четырёхугольной пирамиды сторона основания10см, высота12см. Нарисуй и подпиши центр основания, вершину основания, вершину пирамиды и середину стороны основания. Найди объём, апофему, полную площадь поверхности и угол бокового ребра с плоскостью основания. Объясни, какая проекция нужна в последнем прямоугольном треугольнике. [8]\nТакже найди объём/полную площадь сферы радиуса6см и отдельного сплошного полушария радиуса6см с основанием. Объясни,какие поверхности открыты. [3]"
    },
    "markscheme": {
      "en": "Volume=(1/3)·100·12=400cm³. Slant height to midpoint=√(12²+5²)=13cm. Area=100+4(1/2·10·13)=360cm². The slant EDGE projects to centre→vertex, length√(5²+5²)=√50, not5. Thus tanθ=12/√50 and θ≈59.49°. Label the vertical right angle and the base projection; do not confuse an edge with the slant height of a triangular face. [8]\nSphere:V=4π6³/3=288πcm³,A=4π6²=144πcm². Solid hemisphere:V=144πcm³,total A=2π6²+π6²=108πcm²;its flat disc is exposed when separate,but hidden when joined to another solid along the whole disc. [3]",
      "ru": "V=100·12/3=400см³. Апофема до середины стороны:√(12²+5²)=13см. S=100+4·(10·13/2)=360см². Проекция бокового РЕБРА — от центра к вершине основания:√(5²+5²)=√50, а не5. Поэтому tanθ=12/√50, θ≈59,49°. Подпиши прямой угол при высоте и проекцию; ребро не совпадает с апофемой грани. [8]\nСфера:V=288πсм³,A=144πсм². Полушарие:V=144πсм³,полная A=2π6²+π6²=108πсм². У отдельного тела основание открыто;при соединении по всему диску оно внутри. [3]"
    },
    "origin": "original",
    "minutes": 11
  },
  {
    "id": "r06-foundations",
    "subject": "math",
    "topicIds": [
      "1-5-exponents-logarithms",
      "1-6-approximation-errors",
      "3-10-vectors"
    ],
    "paper": "P2",
    "marks": 8,
    "command": "Calculate / Explain / Sketch",
    "prompt": {
      "en": "(a) Simplify x³x⁻⁵ and (2x²)³,stating the restriction for the negative power. Evaluate log10(1000),ln(e²) and ln7 on a GDC(3 s.f.). [4]\n(b) Estimate19.8×5.12 by rounding to one significant figure;compare with the exact product and round that to2 decimal places and3 significant figures. [2]\n(c) Sketch O,A(2,−1,3),B(5,3,−2) on labelled3D axes. Draw directed OA,OB and AB;show i,j,k as unit-axis arrows and explain AB=b−a. [2]",
      "ru": "(a) Упрости x³x⁻⁵ и(2x²)³,ограничение отрицательной степени. Найди log10(1000),ln(e²),ln7 наGDC(3 значащие). [4]\n(b) Оцени19,8·5,12 округлением до одной значащей;сравни с точным произведением,округли его до сотых и3 значащих. [2]\n(c) На подписанных3D осях отметь O,A(2;−1;3),B(5;3;−2),направленные OA,OB,AB,единичные i,j,k;объясни AB=b−a. [2]"
    },
    "markscheme": {
      "en": "(a)x⁻²=1/x²,x≠0;8x⁶. Logs3,2,1.95 respectively:logs undo powers of their bases. [4] (b)20×5=100;exact101.376;101.38 to2 d.p.,101 to3 s.f. An estimate is a scale check,not the rounded exact result. [2] (c)OA ends at A,OB at B,AB starts at A and ends at B;OA+AB=OB hence AB=(3,4,−5). i=(1,0,0),j=(0,1,0),k=(0,0,1),all length1. [2]",
      "ru": "(a)x⁻²=1/x²,x≠0;8x⁶. Логарифмы3,2,1,95:обратное действие к степени основания. [4] (b)20·5=100;точно101,376;до сотых101,38;до3 значащих101. Оценка проверяет порядок,не заменяет округлённый точный ответ. [2] (c)OA заканчивается в A,OB в B,AB идёт из A в B;OA+AB=OB,поэтому AB=(3;4;−5). i=(1;0;0),j=(0;1;0),k=(0;0;1),длины1. [2]"
    },
    "origin": "original",
    "minutes": 8
  }
];
