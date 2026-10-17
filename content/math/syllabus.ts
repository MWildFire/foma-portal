import type { SyllabusItem } from '../../src/contract/types';

// Mathematics: applications and interpretation, HL (first assessment 2021). All 78 sub-topic codes:
// SL 1.1-1.8, 2.1-2.6, 3.1-3.6, 4.1-4.11, 5.1-5.8 and the HL extension 1.9-1.15, 2.7-2.10, 3.7-3.16, 4.12-4.19, 5.9-5.18.
// Codes and sub-topic titles were cross-checked against two public syllabus summaries (Clastify, TS Tutoring) because the
// IB guide itself is not reachable from the build environment. Re-check against the IB guide when S1 delivers the PACK.
// Every paper can use any sub-topic, so each code lists all three papers. HL-only codes carry hl: true.

const P = ['P1', 'P2', 'P3'] as const;

export const syllabus: SyllabusItem[] = [
  // Topic 1 - Number and algebra (SL)
  { code: '1.1', title: { en: 'Standard form (a × 10^k)', ru: 'Стандартный вид (a × 10^k)' }, papers: [...P] },
  { code: '1.2', title: { en: 'Arithmetic sequences and series', ru: 'Арифметические последовательности и ряды' }, papers: [...P] },
  { code: '1.3', title: { en: 'Geometric sequences and series', ru: 'Геометрические последовательности и ряды' }, papers: [...P] },
  { code: '1.4', title: { en: 'Financial applications of sequences (compound interest, depreciation)', ru: 'Финансовые применения прогрессий (сложные проценты, амортизация)' }, papers: [...P] },
  { code: '1.5', title: { en: 'Laws of exponents; logarithms with base 10 and e', ru: 'Законы степеней; логарифмы по основанию 10 и e' }, papers: [...P] },
  { code: '1.6', title: { en: 'Approximation, significant figures and errors', ru: 'Приближения, значащие цифры и погрешности' }, papers: [...P] },
  { code: '1.7', title: { en: 'Amortisation and annuities', ru: 'Амортизация (погашение долга) и аннуитеты' }, papers: [...P] },
  { code: '1.8', title: { en: 'Solving equations with technology', ru: 'Решение уравнений с помощью технологий' }, papers: [...P] },
  // Topic 1 - Number and algebra (HL)
  { code: '1.9', title: { en: 'Laws of logarithms', ru: 'Законы логарифмов' }, papers: [...P], hl: true },
  { code: '1.10', title: { en: 'Rational exponents', ru: 'Рациональные показатели степени' }, papers: [...P], hl: true },
  { code: '1.11', title: { en: 'Sum of an infinite geometric sequence', ru: 'Сумма бесконечной геометрической прогрессии' }, papers: [...P], hl: true },
  { code: '1.12', title: { en: 'Complex numbers: Cartesian form and the complex plane', ru: 'Комплексные числа: декартова форма и комплексная плоскость' }, papers: [...P], hl: true },
  { code: '1.13', title: { en: 'Complex numbers: polar and exponential form', ru: 'Комплексные числа: полярная и показательная формы' }, papers: [...P], hl: true },
  { code: '1.14', title: { en: 'Matrices: algebra, determinants, inverses, systems', ru: 'Матрицы: действия, определители, обратные матрицы, системы' }, papers: [...P], hl: true },
  { code: '1.15', title: { en: 'Eigenvalues, eigenvectors and diagonalisation of 2 × 2 matrices', ru: 'Собственные значения и векторы, диагонализация матриц 2 × 2' }, papers: [...P], hl: true },
  // Topic 2 - Functions (SL)
  { code: '2.1', title: { en: 'Equations and properties of straight lines', ru: 'Уравнения и свойства прямых' }, papers: [...P] },
  { code: '2.2', title: { en: 'Functions, domain, range and inverse functions', ru: 'Функции, область определения, область значений, обратные функции' }, papers: [...P] },
  { code: '2.3', title: { en: 'Graphs of functions and sketching', ru: 'Графики функций и эскизы' }, papers: [...P] },
  { code: '2.4', title: { en: 'Key features of graphs and points of intersection', ru: 'Ключевые точки графиков и точки пересечения' }, papers: [...P] },
  { code: '2.5', title: { en: 'Modelling with standard functions', ru: 'Моделирование стандартными функциями' }, papers: [...P] },
  { code: '2.6', title: { en: 'The modelling process: create, fit and use a model', ru: 'Процесс моделирования: построение, подгонка и использование модели' }, papers: [...P] },
  // Topic 2 - Functions (HL)
  { code: '2.7', title: { en: 'Composite functions and inverse functions', ru: 'Композиция функций и обратные функции' }, papers: [...P], hl: true },
  { code: '2.8', title: { en: 'Transformations of graphs', ru: 'Преобразования графиков' }, papers: [...P], hl: true },
  { code: '2.9', title: { en: 'Extended models: half-life, logarithmic, sinusoidal, logistic, piecewise', ru: 'Расширенные модели: период полураспада, логарифмические, синусоидальные, логистические, кусочные' }, papers: [...P], hl: true },
  { code: '2.10', title: { en: 'Logarithmic linearisation: log-log and semi-log graphs', ru: 'Линеаризация логарифмами: графики log-log и semi-log' }, papers: [...P], hl: true },
  // Topic 3 - Geometry and trigonometry (SL)
  { code: '3.1', title: { en: '3D distance, volume and surface area; angles between lines and planes', ru: 'Расстояние в 3D, объём и площадь поверхности; углы между прямыми и плоскостями' }, papers: [...P] },
  { code: '3.2', title: { en: 'Right-angled trigonometry, sine and cosine rules, area of a triangle', ru: 'Тригонометрия прямоугольного треугольника, теоремы синусов и косинусов, площадь' }, papers: [...P] },
  { code: '3.3', title: { en: 'Applications of trigonometry: elevation, depression, labelled diagrams', ru: 'Применения тригонометрии: углы возвышения и понижения, чертежи' }, papers: [...P] },
  { code: '3.4', title: { en: 'Arc length and sector area of a circle', ru: 'Длина дуги и площадь сектора круга' }, papers: [...P] },
  { code: '3.5', title: { en: 'Perpendicular bisectors', ru: 'Серединные перпендикуляры' }, papers: [...P] },
  { code: '3.6', title: { en: 'Voronoi diagrams and nearest-neighbour interpolation', ru: 'Диаграммы Вороного и интерполяция по ближайшему соседу' }, papers: [...P] },
  // Topic 3 - Geometry and trigonometry (HL)
  { code: '3.7', title: { en: 'Radians', ru: 'Радианы' }, papers: [...P], hl: true },
  { code: '3.8', title: { en: 'Unit circle, Pythagorean identity and trigonometric equations', ru: 'Единичная окружность, тождество Пифагора и тригонометрические уравнения' }, papers: [...P], hl: true },
  { code: '3.9', title: { en: 'Geometric transformations with 2 × 2 matrices', ru: 'Геометрические преобразования с помощью матриц 2 × 2' }, papers: [...P], hl: true },
  { code: '3.10', title: { en: 'Vectors: components, unit vectors, position vectors', ru: 'Векторы: координаты, единичные векторы, радиус-векторы' }, papers: [...P], hl: true },
  { code: '3.11', title: { en: 'Vector equation of a line', ru: 'Векторное уравнение прямой' }, papers: [...P], hl: true },
  { code: '3.12', title: { en: 'Vectors in kinematics', ru: 'Векторы в кинематике' }, papers: [...P], hl: true },
  { code: '3.13', title: { en: 'Scalar product and vector product', ru: 'Скалярное и векторное произведения' }, papers: [...P], hl: true },
  { code: '3.14', title: { en: 'Graph theory: vertices, edges, degree, directed and weighted graphs', ru: 'Теория графов: вершины, рёбра, степень, ориентированные и взвешенные графы' }, papers: [...P], hl: true },
  { code: '3.15', title: { en: 'Adjacency matrices and walks', ru: 'Матрицы смежности и маршруты' }, papers: [...P], hl: true },
  { code: '3.16', title: { en: 'Trees, Euler and Hamilton paths, minimum spanning trees, Chinese postman, travelling salesman', ru: 'Деревья, эйлеровы и гамильтоновы пути, минимальные остовы, задача почтальона, коммивояжёр' }, papers: [...P], hl: true },
  // Topic 4 - Statistics and probability (SL)
  { code: '4.1', title: { en: 'Samples, populations, data types and sampling', ru: 'Выборки, генеральная совокупность, типы данных и отбор' }, papers: [...P] },
  { code: '4.2', title: { en: 'Presenting data: tables, histograms, cumulative frequency, box plots', ru: 'Представление данных: таблицы, гистограммы, кумулятивные частоты, диаграммы размаха' }, papers: [...P] },
  { code: '4.3', title: { en: 'Measures of central tendency and dispersion', ru: 'Меры центральной тенденции и разброса' }, papers: [...P] },
  { code: '4.4', title: { en: 'Correlation and linear regression', ru: 'Корреляция и линейная регрессия' }, papers: [...P] },
  { code: '4.5', title: { en: 'Probability of events and complementary events', ru: 'Вероятность событий и противоположных событий' }, papers: [...P] },
  { code: '4.6', title: { en: 'Combined events, conditional probability, independence', ru: 'Составные события, условная вероятность, независимость' }, papers: [...P] },
  { code: '4.7', title: { en: 'Discrete random variables and expected value', ru: 'Дискретные случайные величины и математическое ожидание' }, papers: [...P] },
  { code: '4.8', title: { en: 'Binomial distribution', ru: 'Биномиальное распределение' }, papers: [...P] },
  { code: '4.9', title: { en: 'Normal distribution', ru: 'Нормальное распределение' }, papers: [...P] },
  { code: '4.10', title: { en: 'Spearman rank correlation and correlation limitations', ru: 'Ранговая корреляция Спирмена и ограничения корреляции' }, papers: [...P] },
  { code: '4.11', title: { en: 'Hypothesis tests: chi-squared and t-tests, p-values', ru: 'Проверка гипотез: критерии χ² и t, p-значения' }, papers: [...P] },
  // Topic 4 - Statistics and probability (HL)
  { code: '4.12', title: { en: 'Survey design, categorising data, reliability and validity', ru: 'Планирование опросов, категоризация данных, надёжность и валидность' }, papers: [...P], hl: true },
  { code: '4.13', title: { en: 'Non-linear regression and the coefficient of determination R²', ru: 'Нелинейная регрессия и коэффициент детерминации R²' }, papers: [...P], hl: true },
  { code: '4.14', title: { en: 'Linear transformations of random variables', ru: 'Линейные преобразования случайных величин' }, papers: [...P], hl: true },
  { code: '4.15', title: { en: 'Sums of normal variables and the central limit theorem', ru: 'Суммы нормальных величин и центральная предельная теорема' }, papers: [...P], hl: true },
  { code: '4.16', title: { en: 'Confidence intervals for a normal mean', ru: 'Доверительные интервалы для среднего нормальной совокупности' }, papers: [...P], hl: true },
  { code: '4.17', title: { en: 'Poisson distribution', ru: 'Распределение Пуассона' }, papers: [...P], hl: true },
  { code: '4.18', title: { en: 'Hypothesis tests for means, Poisson and correlation; Type I and II errors', ru: 'Проверка гипотез о средних, Пуассоне и корреляции; ошибки I и II рода' }, papers: [...P], hl: true },
  { code: '4.19', title: { en: 'Markov chains: transition matrices and steady state', ru: 'Цепи Маркова: матрицы переходов и стационарное распределение' }, papers: [...P], hl: true },
  // Topic 5 - Calculus (SL)
  { code: '5.1', title: { en: 'Limits and the derivative as a rate of change', ru: 'Предел и производная как скорость изменения' }, papers: [...P] },
  { code: '5.2', title: { en: 'Increasing and decreasing functions', ru: 'Возрастание и убывание функций' }, papers: [...P] },
  { code: '5.3', title: { en: 'Differentiating power functions', ru: 'Дифференцирование степенных функций' }, papers: [...P] },
  { code: '5.4', title: { en: 'Tangents and normals at a point', ru: 'Касательные и нормали в точке' }, papers: [...P] },
  { code: '5.5', title: { en: 'Integration, boundary conditions and areas under curves', ru: 'Интегрирование, начальные условия и площади под кривыми' }, papers: [...P] },
  { code: '5.6', title: { en: 'Stationary points and maxima and minima', ru: 'Стационарные точки, максимумы и минимумы' }, papers: [...P] },
  { code: '5.7', title: { en: 'Optimisation in context', ru: 'Оптимизация в прикладных задачах' }, papers: [...P] },
  { code: '5.8', title: { en: 'Trapezoidal rule', ru: 'Формула трапеций' }, papers: [...P] },
  // Topic 5 - Calculus (HL)
  { code: '5.9', title: { en: 'Derivatives of sin, cos, tan, exp, ln; chain, product and quotient rules; related rates', ru: 'Производные sin, cos, tan, exp, ln; правила цепочки, произведения и частного; связанные скорости' }, papers: [...P], hl: true },
  { code: '5.10', title: { en: 'Second derivative and the second derivative test', ru: 'Вторая производная и признак второй производной' }, papers: [...P], hl: true },
  { code: '5.11', title: { en: 'Integration of standard functions and substitution', ru: 'Интегрирование стандартных функций и подстановка' }, papers: [...P], hl: true },
  { code: '5.12', title: { en: 'Areas between curves and volumes of revolution', ru: 'Площади между кривыми и объёмы тел вращения' }, papers: [...P], hl: true },
  { code: '5.13', title: { en: 'Kinematics with calculus: displacement, velocity, acceleration', ru: 'Кинематика с дифференцированием и интегрированием: перемещение, скорость, ускорение' }, papers: [...P], hl: true },
  { code: '5.14', title: { en: 'Differential equations: modelling and separation of variables', ru: 'Дифференциальные уравнения: построение модели и разделение переменных' }, papers: [...P], hl: true },
  { code: '5.15', title: { en: 'Slope fields', ru: 'Поля направлений' }, papers: [...P], hl: true },
  { code: '5.16', title: { en: "Euler's method for first-order equations and coupled systems", ru: 'Метод Эйлера для уравнений первого порядка и связанных систем' }, papers: [...P], hl: true },
  { code: '5.17', title: { en: 'Phase portraits of coupled linear differential equations', ru: 'Фазовые портреты связанных линейных дифференциальных уравнений' }, papers: [...P], hl: true },
  { code: '5.18', title: { en: "Euler's method for second-order differential equations", ru: 'Метод Эйлера для дифференциальных уравнений второго порядка' }, papers: [...P], hl: true },
];
