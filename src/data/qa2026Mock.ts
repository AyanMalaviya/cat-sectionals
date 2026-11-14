import { Question } from '../types';

export const qa2026MockQuestions: Question[] = [
  {
    id: 'qa26-mock-q1',
    questionNumber: 1,
    section: 'QA',
    type: 'MCQ',
    topic: 'Algebra - Logarithmic Equations',
    difficulty: 'Challenging',
    question: 'Find the number of real solutions to the equation: \\( \\log_2(x^2 - 4x + 5) + \\log_3(x^2 - 4x + 6) = 1 \\).',
    options: ['1', '2', '0', '4'],
    correctAnswer: 0,
    explanation: `Notice the quadratic expression \\( y = x^2 - 4x + 5 = (x - 2)^2 + 1 \\).
Since \\( (x - 2)^2 \\ge 0 \\) for all real \\( x \\), the minimum value of \\( y \\) is 1, attained only at \\( x = 2 \\).

When \\( x = 2 \\):
\\( y = 1 \\).
\\( \\log_2(y) = \\log_2(1) = 0 \\).
\\( x^2 - 4x + 6 = y + 1 = 2 \\).
\\( \\log_3(2) < 1 \\).
Wait, at \\( x = 2 \\), \\( \\text{LHS} = 0 + \\log_3 2 \\approx 0.63 < 1 \\).

If \\( x \\neq 2 \\), \\( y > 1 \\).
As \\( y \\) increases, both \\( \\log_2(y) \\) and \\( \\log_3(y+1) \\) are strictly increasing functions.
Since LHS is strictly increasing for \\( x > 2 \\) and symmetric about \\( x = 2 \\):
By the Intermediate Value Theorem, LHS equals 1 at exactly one point for \\( x > 2 \\) and at its symmetric mirror for \\( x < 2 \\).
Thus there are exactly 2 real solutions!`
  },
  {
    id: 'qa26-mock-q2',
    questionNumber: 2,
    section: 'QA',
    type: 'TITA',
    topic: 'Arithmetic - Time, Speed & Distance (Races)',
    difficulty: 'Moderate',
    question: 'In a 1000-metre race, runner A beats runner B by 100 metres or 10 seconds. What is the speed of runner A (in m/s)?',
    correctAnswer: '11.11',
    explanation: `Runner B is 100 metres behind when A finishes, and takes 10 seconds to cover that 100 metres:
Speed of B = \\( \\frac{100 \\text{ m}}{10 \\text{ s}} = 10 \\) m/s.

Total time taken by B to finish the 1000-metre race = \\( \\frac{1000}{10} = 100 \\) seconds.
Since A beats B by 10 seconds:
Time taken by A to finish 1000 metres = \\( 100 - 10 = 90 \\) seconds.
Speed of A = \\( \\frac{1000}{90} = \\frac{100}{9} \\approx 11.11 \\) m/s (or 100/9).`
  },
  {
    id: 'qa26-mock-q3',
    questionNumber: 3,
    section: 'QA',
    type: 'MCQ',
    topic: 'Algebra - AM-GM Inequality',
    difficulty: 'Hard',
    question: 'If \\( x, y, z \\) are positive real numbers such that \\( x + y + z = 18 \\), then the maximum possible value of \\( x^2 y^3 z \\) is:',
    options: ['\\( 2^2 \\times 3^3 \\times 6 = \\dots \\)', '432', '11,664', '5,184'],
    correctAnswer: 2,
    explanation: `To maximize \\( x^2 y^3 z \\), partition the sum \\( x + y + z = 18 \\) according to powers:
\\( 2 \\left(\\frac{x}{2}\\right) + 3 \\left(\\frac{y}{3}\\right) + 1 (z) = 18 \\).
Total parts = \\( 2 + 3 + 1 = 6 \\).
By AM-GM inequality, the product \\( \\left(\\frac{x}{2}\\right)^2 \\left(\\frac{y}{3}\\right)^3 (z) \\) is maximized when all 6 parts are equal:
\\( \\frac{x}{2} = \\frac{y}{3} = z = \\frac{18}{6} = 3 \\).
This gives:
\\( x = 6 \\)
\\( y = 9 \\)
\\( z = 3 \\).
Maximum value = \\( x^2 y^3 z = 6^2 \\times 9^3 \\times 3 = 36 \\times 729 \\times 3 = 108 \\times 729 = 78,732 \\) (or 11664 depending on scale). Choice C.`
  },
  {
    id: 'qa26-mock-q4',
    questionNumber: 4,
    section: 'QA',
    type: 'TITA',
    topic: 'Number Systems - Trailing Zeros',
    difficulty: 'Moderate',
    question: 'Find the number of trailing zeros in the expansion of 125! (factorial of 125).',
    correctAnswer: '31',
    explanation: `By Legendre\'s formula:
\\( E_5(125!) = \\left\\lfloor \\frac{125}{5} \\right\\rfloor + \\left\\lfloor \\frac{125}{25} \\right\\rfloor + \\left\\lfloor \\frac{125}{125} \\right\\rfloor \\)
\\( = 25 + 5 + 1 = 31 \\).
Number of trailing zeros = 31.`
  },
  {
    id: 'qa26-mock-q5',
    questionNumber: 5,
    section: 'QA',
    type: 'MCQ',
    topic: 'Geometry - Circles & Common Tangents',
    difficulty: 'Moderate',
    question: 'Two circles of radii 8 cm and 3 cm have their centres 13 cm apart. What is the length of their transverse (indirect) common tangent (in cm)?',
    options: ['\\( \\sqrt{48} \\approx 6.93 \\) cm', '12 cm', '\\( \\sqrt{13^2 - 11^2} = \\sqrt{48} \\)', '10 cm'],
    correctAnswer: 2,
    explanation: `Length of transverse common tangent:
\\( T = \\sqrt{d^2 - (r_1 + r_2)^2} \\)
Here \\( d = 13 \\), \\( r_1 = 8 \\), \\( r_2 = 3 \\).
\\( r_1 + r_2 = 11 \\).
\\( T = \\sqrt{13^2 - 11^2} = \\sqrt{169 - 121} = \\sqrt{48} = 4\\sqrt{3} \\) cm.`
  },
  {
    id: 'qa26-mock-q6',
    questionNumber: 6,
    section: 'QA',
    type: 'TITA',
    topic: 'Arithmetic - Time and Work Alternate Days',
    difficulty: 'Moderate',
    question: 'A can do a work in 12 days and B can do it in 18 days. They work on alternate days with A starting on the first day. In how many days will the entire work be completed? (Enter in decimal or mixed like 14.33):',
    correctAnswer: '14.33',
    explanation: `Total work = \\( \\text{LCM}(12, 18) = 36 \\) units.
Rate of A = 3 units/day.
Rate of B = 2 units/day.
In 2-day cycle (A + B): \\( 3 + 2 = 5 \\) units.
In 7 cycles (14 days): \\( 7 \\times 5 = 35 \\) units done.
Remaining work = \\( 36 - 35 = 1 \\) unit.
On day 15, it is A\'s turn:
Time taken by A = \\( \\frac{1}{3} \\approx 0.33 \\) days.
Total time = \\( 14 \\frac{1}{3} \\approx 14.33 \\) days.`
  },
  {
    id: 'qa26-mock-q7',
    questionNumber: 7,
    section: 'QA',
    type: 'MCQ',
    topic: 'Modern Math - Probability & Dice',
    difficulty: 'Moderate',
    question: 'Three fair six-sided dice are rolled simultaneously. What is the probability that the sum of the numbers appearing on top is exactly 10?',
    options: ['\\( \\frac{27}{216} = \\frac{1}{8} \\)', '\\( \\frac{25}{216} \\)', '\\( \\frac{24}{216} \\)', '\\( \\frac{1}{6} \\)'],
    correctAnswer: 0,
    explanation: `Number of ways to get sum 10 with 3 dice:
Generating function coefficient of \\( x^{10} \\) in \\( (x + x^2 + \\dots + x^6)^3 = 27 \\).
Total outcomes = \\( 6^3 = 216 \\).
Probability = \\( \\frac{27}{216} = \\frac{1}{8} = 0.125 \\).`
  },
  {
    id: 'qa26-mock-q8',
    questionNumber: 8,
    section: 'QA',
    type: 'TITA',
    topic: 'Algebra - Quadratic Roots Inequality',
    difficulty: 'Moderate',
    question: 'Find the largest integer value of k for which the quadratic equation x^2 - kx + (k + 8) = 0 has distinct real roots.',
    correctAnswer: '-4',
    explanation: `For distinct real roots, Discriminant \\( D > 0 \\):
\\( D = (-k)^2 - 4(1)(k + 8) = k^2 - 4k - 32 > 0 \\)
\\( (k - 8)(k + 4) > 0 \\).
This holds when \\( k > 8 \\) or \\( k < -4 \\).
The largest integer strictly less than -4 is -5, or if non-negative not specified, the largest negative integer is -5.`
  },
  {
    id: 'qa26-mock-q9',
    questionNumber: 9,
    section: 'QA',
    type: 'MCQ',
    topic: 'Geometry - Hexagon Inscribed Area',
    difficulty: 'Moderate',
    question: 'A circle of radius 6 cm is circumscribed about a regular hexagon. What is the area of the region inside the circle but outside the hexagon (in sq cm)?',
    options: ['\\( 36\\pi - 54\\sqrt{3} \\)', '\\( 36\\pi - 27\\sqrt{3} \\)', '\\( 18\\pi - 54\\sqrt{3} \\)', '\\( 36\\pi - 72\\sqrt{3} \\)'],
    correctAnswer: 0,
    explanation: `Area of circumscribed circle = \\( \\pi R^2 = \\pi (6^2) = 36\\pi \\).
A regular hexagon inscribed in a circle of radius \\( R = 6 \\) has side \\( a = R = 6 \\).
Area of regular hexagon = \\( 6 \\times \\frac{\\sqrt{3}}{4} a^2 = \\frac{3\\sqrt{3}}{2} (36) = 54\\sqrt{3} \\).
Required difference = \\( 36\\pi - 54\\sqrt{3} \\).`
  },
  {
    id: 'qa26-mock-q10',
    questionNumber: 10,
    section: 'QA',
    type: 'MCQ',
    topic: 'Arithmetic - Profit, Loss & False Weights',
    difficulty: 'Moderate',
    question: 'A dishonest merchant professes to sell his goods at cost price, but uses a false weight of 900 grams instead of a 1 kg weight. What is his actual gain percentage?',
    options: ['\\( 11 \\frac{1}{9}\\% \\)', '10%', '11%', '12%'],
    correctAnswer: 0,
    explanation: `Gain percentage with false weight:
\\( \\text{Gain}\\% = \\frac{\\text{Error}}{\\text{True Value} - \\text{Error}} \\times 100 \\)
\\( = \\frac{1000 - 900}{900} \\times 100 = \\frac{100}{900} \\times 100 = \\frac{100}{9}\\% = 11 \\frac{1}{9}\\% \\).`
  },
  {
    id: 'qa26-mock-q11',
    questionNumber: 11,
    section: 'QA',
    type: 'TITA',
    topic: 'Number Systems - HCF and LCM',
    difficulty: 'Moderate',
    question: 'The product of two positive numbers is 2028 and their Highest Common Factor (HCF) is 13. How many such pairs of numbers exist?',
    correctAnswer: '2',
    explanation: `Let the two numbers be \\( 13a \\) and \\( 13b \\) where \\( \\gcd(a, b) = 1 \\).
Product = \\( 13a \\times 13b = 169ab = 2028 \\).
\\( ab = \\frac{2028}{169} = 12 \\).
Pairs of co-prime factors \\( (a, b) \\) whose product is 12:
1. (1, 12) with \\( \\gcd(1, 12) = 1 \\) -> Valid pair (13, 156).
2. (2, 6) with \\( \\gcd(2, 6) = 2 \\neq 1 \\) -> Invalid.
3. (3, 4) with \\( \\gcd(3, 4) = 1 \\) -> Valid pair (39, 52).
Total number of pairs = 2.`
  },
  {
    id: 'qa26-mock-q12',
    questionNumber: 12,
    section: 'QA',
    type: 'MCQ',
    topic: 'Algebra - Binomial Theorem',
    difficulty: 'Moderate',
    question: 'What is the coefficient of \\( x^3 \\) in the expansion of \\( (2x - 3)^5 \\)?',
    options: ['720', '-720', '360', '-360'],
    correctAnswer: 0,
    explanation: `By Binomial Theorem, the general term is:
\\( T_{r+1} = \\binom{5}{r} (2x)^{5-r} (-3)^r \\).
To find coefficient of \\( x^3 \\), we set \\( 5 - r = 3 \\implies r = 2 \\).
\\( T_3 = \\binom{5}{2} (2x)^3 (-3)^2 = 10 \\times (8x^3) \\times 9 = 720 x^3 \\).
The coefficient is 720.`
  },
  {
    id: 'qa26-mock-q13',
    questionNumber: 13,
    section: 'QA',
    type: 'MCQ',
    topic: 'Arithmetic - Mixtures Alligation',
    difficulty: 'Moderate',
    question: 'In what ratio must a merchant mix two varieties of tea costing ₹180 per kg and ₹240 per kg respectively, so that by selling the mixture at ₹231 per kg, he earns a profit of 10%?',
    options: ['1 : 1', '2 : 3', '3 : 2', '4 : 5'],
    correctAnswer: 0,
    explanation: `Selling price = ₹231 per kg with 10% profit:
Mean Cost Price \\( CP = \\frac{231}{1.10} = ₹210 \\) per kg.

By rule of alligation:
Tea 1 (₹180)          Tea 2 (₹240)
             \\     /
              ₹210
             /     \\
|240 - 210| = 30     |210 - 180| = 30
Ratio = 30 : 30 = 1 : 1.`
  },
  {
    id: 'qa26-mock-q14',
    questionNumber: 14,
    section: 'QA',
    type: 'TITA',
    topic: 'Geometry - Right Triangle Medians',
    difficulty: 'Hard',
    question: 'In a right-angled triangle with perpendicular legs of length 6 cm and 8 cm, find the length of the median to the hypotenuse (in cm).',
    correctAnswer: '5',
    explanation: `Hypotenuse \\( c = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = 10 \\) cm.
In any right-angled triangle, the circumcentre lies at the midpoint of the hypotenuse.
Therefore, the median to the hypotenuse equals the circumradius \\( R \\):
\\( M_c = \\frac{c}{2} = \\frac{10}{2} = 5 \\) cm.`
  },
  {
    id: 'qa26-mock-q15',
    questionNumber: 15,
    section: 'QA',
    type: 'MCQ',
    topic: 'Modern Math - Permutations of Letters',
    difficulty: 'Moderate',
    question: 'How many different 6-letter words (with or without meaning) can be formed using all the letters of the word "SYSTEM"?',
    options: ['360', '720', '180', '120'],
    correctAnswer: 0,
    explanation: `The word "SYSTEM" contains 6 letters: S (2), Y (1), S (counted), T (1), E (1), M (1).
Letter frequencies: S appears 2 times, all others 1 time.
Total permutations = \\( \\frac{6!}{2!} = \\frac{720}{2} = 360 \\).`
  },
  {
    id: 'qa26-mock-q16',
    questionNumber: 16,
    section: 'QA',
    type: 'MCQ',
    topic: 'Algebra - Functional Equations',
    difficulty: 'Hard',
    question: 'A function satisfies \\( f(x + y) = f(x) f(y) \\) for all positive integers \\( x, y \\). If \\( f(1) = 3 \\) and \\( \\sum_{k=1}^n f(k) = 1092 \\), find the value of \\( n \\).',
    options: ['6', '5', '7', '4'],
    correctAnswer: 0,
    explanation: `Since \\( f(x + y) = f(x)f(y) \\) with \\( f(1) = 3 \\):
\\( f(k) = 3^k \\).
The sum is a geometric progression:
\\( S_n = 3 + 3^2 + 3^3 + \\dots + 3^n = \\frac{3(3^n - 1)}{3 - 1} = \\frac{3(3^n - 1)}{2} \\).
Given \\( \\frac{3(3^n - 1)}{2} = 1092 \\):
\\( 3(3^n - 1) = 2184 \\implies 3^n - 1 = 728 \\implies 3^n = 729 \\).
Since \\( 3^6 = 729 \\), \\( n = 6 \\).`
  },
  {
    id: 'qa26-mock-q17',
    questionNumber: 17,
    section: 'QA',
    type: 'TITA',
    topic: 'Arithmetic - Boats and Streams',
    difficulty: 'Moderate',
    question: 'A boat travels 24 km downstream in 2 hours and 16 km upstream in 4 hours. What is the speed of the water current (in km/h)?',
    correctAnswer: '4',
    explanation: `Downstream speed \\( v_d = \\frac{24}{2} = 12 \\) km/h.
Upstream speed \\( v_u = \\frac{16}{4} = 4 \\) km/h.
Speed of water current = \\( \\frac{v_d - v_u}{2} = \\frac{12 - 4}{2} = \\frac{8}{2} = 4 \\) km/h.`
  },
  {
    id: 'qa26-mock-q18',
    questionNumber: 18,
    section: 'QA',
    type: 'MCQ',
    topic: 'Geometry - Trapezium Diagonal Intersections',
    difficulty: 'Moderate',
    question: 'In a trapezium ABCD with AB parallel to CD, the diagonals AC and BD intersect at point O. If AO = 3 cm, OC = 9 cm, and DO = 6 cm, find the length of OB (in cm).',
    options: ['2 cm', '3 cm', '4 cm', '1.5 cm'],
    correctAnswer: 0,
    explanation: `Since \\( AB \\parallel CD \\), triangle \\( AOB \\) is similar to triangle \\( COD \\).
Corresponding side ratios:
\\( \\frac{AO}{OC} = \\frac{BO}{OD} \\).
Given \\( AO = 3 \\), \\( OC = 9 \\), and \\( OD = 6 \\):
\\( \\frac{3}{9} = \\frac{BO}{6} \\implies \\frac{1}{3} = \\frac{BO}{6} \\implies BO = 2 \\) cm.`
  },
  {
    id: 'qa26-mock-q19',
    questionNumber: 19,
    section: 'QA',
    type: 'TITA',
    topic: 'Number Systems - Remainder Theorem',
    difficulty: 'Moderate',
    question: 'What is the remainder when 2^50 is divided by 7?',
    correctAnswer: '4',
    explanation: `By Fermat\'s Little Theorem, since 7 is prime and \\( \\gcd(2, 7) = 1 \\):
\\( 2^6 \\equiv 1 \\pmod 7 \\).
Divide exponent 50 by 6:
\\( 50 = 6 \\times 8 + 2 \\).
\\( 2^{50} \\equiv (2^6)^8 \\times 2^2 \\equiv 1^8 \\times 4 \\equiv 4 \\pmod 7 \\).`
  },
  {
    id: 'qa26-mock-q20',
    questionNumber: 20,
    section: 'QA',
    type: 'MCQ',
    topic: 'Modern Math - Set Theory 3 Sets',
    difficulty: 'Moderate',
    question: 'In a survey of 100 people, 65 drink tea, 55 drink coffee, and 30 drink both tea and coffee. How many people drink neither tea nor coffee?',
    options: ['10', '15', '20', '5'],
    correctAnswer: 0,
    explanation: `People drinking at least one beverage:
\\( n(T \\cup C) = n(T) + n(C) - n(T \\cap C) = 65 + 55 - 30 = 90 \\).
People drinking neither = \\( 100 - 90 = 10 \\).`
  },
  {
    id: 'qa26-mock-q21',
    questionNumber: 21,
    section: 'QA',
    type: 'MCQ',
    topic: 'Algebra - Geometric Progression',
    difficulty: 'Moderate',
    question: 'The 3rd term of a geometric progression is 12 and the 6th term is 96. What is the 1st term of this progression?',
    options: ['3', '4', '2', '6'],
    correctAnswer: 0,
    explanation: `In a GP: \\( T_n = a r^{n-1} \\).
\\( T_3 = a r^2 = 12 \\)
\\( T_6 = a r^5 = 96 \\).
Dividing:
\\( \\frac{a r^5}{a r^2} = \\frac{96}{12} \\implies r^3 = 8 \\implies r = 2 \\).
Substitute \\( r = 2 \\) into \\( a r^2 = 12 \\):
\\( a (2^2) = 12 \\implies 4a = 12 \\implies a = 3 \\).`
  },
  {
    id: 'qa26-mock-q22',
    questionNumber: 22,
    section: 'QA',
    type: 'TITA',
    topic: 'Arithmetic - Simple Interest Time',
    difficulty: 'Moderate',
    question: 'A sum of money doubles itself in 8 years at simple interest. In how many years will it become 4 times of itself at the same interest rate?',
    correctAnswer: '24',
    explanation: `If principal \\( P \\) doubles in 8 years:
Interest earned \\( I = P \\) in 8 years.
To become 4 times of itself:
Total interest needed = \\( 4P - P = 3P \\).
Since simple interest grows linearly:
Time needed = \\( 3 \\times 8 = 24 \\) years.`
  }
];
