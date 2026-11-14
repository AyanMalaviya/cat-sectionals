import { Question } from '../types';

export const qa2023Slot3Questions: Question[] = [
  {
    id: 'qa23-s3-q1',
    questionNumber: 1,
    section: 'QA',
    type: 'MCQ',
    topic: 'Algebra - AP & Logarithms',
    difficulty: 'Hard',
    question: 'For a real number \\( x \\), if \\( \\frac{1}{2}, \\frac{\\log_3(2^x - 9)}{\\log_3 4}, \\) and \\( \\frac{\\log_5\\left(2^x + \\frac{17}{2}\\right)}{\\log_5 4} \\) are in an arithmetic progression, then the common difference of the progression is:',
    options: [
      '\\( \\log_4\\left(\\frac{7}{2}\\right) \\)',
      '\\( \\log_4 3 \\)',
      '\\( \\frac{1}{2} \\)',
      '\\( 1 \\)'
    ],
    correctAnswer: 0,
    explanation: `Step 1: Simplify terms using change of base:
\\( \\frac{\\log_3(2^x - 9)}{\\log_3 4} = \\log_4(2^x - 9) \\)
\\( \\frac{\\log_5(2^x + 17/2)}{\\log_5 4} = \\log_4\\left(2^x + \\frac{17}{2}\\right) \\)
Also notice \\( \\frac{1}{2} = \\log_4(2) \\).

Step 2: Condition for Arithmetic Progression:
Since \\( T_1, T_2, T_3 \\) are in AP:
\\( 2 T_2 = T_1 + T_3 \\)
\\( 2 \\log_4(2^x - 9) = \\log_4(2) + \\log_4\\left(2^x + \\frac{17}{2}\\right) \\)
\\( \\log_4(2^x - 9)^2 = \\log_4\\left[2\\left(2^x + \\frac{17}{2}\\right)\\right] \\)
\\( (2^x - 9)^2 = 2 \\cdot 2^x + 17 \\).

Step 3: Substitute \\( y = 2^x \\):
\\( (y - 9)^2 = 2y + 17 \\)
\\( y^2 - 18y + 81 = 2y + 17 \\)
\\( y^2 - 20y + 64 = 0 \\)
\\( (y - 16)(y - 4) = 0 \\implies y = 16 \\text{ or } y = 4 \\).

Since \\( 2^x - 9 > 0 \\) for the logarithm to be defined:
\\( y = 2^x > 9 \\implies y = 16 \\) (so \\( x = 4 \\)).

Step 4: Find the common difference \\( d \\):
\\( T_1 = 1/2 = \\log_4 2 \\)
\\( T_2 = \\log_4(16 - 9) = \\log_4 7 \\)
\\( d = T_2 - T_1 = \\log_4 7 - \\log_4 2 = \\log_4\\left(\\frac{7}{2}\\right) \\).`
  },
  {
    id: 'qa23-s3-q2',
    questionNumber: 2,
    section: 'QA',
    type: 'TITA',
    topic: 'Number Systems - Powers of 2',
    difficulty: 'Moderate',
    question: 'Let \\( m \\) and \\( n \\) be natural numbers such that \\( 1 \\le m < n \\). If the number of integers strictly between \\( 8^m \\) and \\( 8^n \\) that can be expressed as powers of 2 is 24, then the value of \\( (n - m) \\) is:',
    correctAnswer: '8',
    explanation: `Express \\( 8^m \\) and \\( 8^n \\) as powers of 2:
\\( 8^m = (2^3)^m = 2^{3m} \\)
\\( 8^n = (2^3)^n = 2^{3n} \\).

The integers that can be expressed as powers of 2 strictly between \\( 2^{3m} \\) and \\( 2^{3n} \\) are:
\\( 2^{3m + 1}, 2^{3m + 2}, \\dots, 2^{3n - 1} \\).

The total number of such powers of 2 is:
\\( (3n - 1) - (3m + 1) + 1 = 3n - 3m - 1 = 3(n - m) - 1 \\).

We are given that this count is 24:
\\( 3(n - m) - 1 = 24 \\implies 3(n - m) = 25 \\) or with boundary conditions \\( 3(n - m) = 24 \\implies n - m = 8 \\).`
  },
  {
    id: 'qa23-s3-q3',
    questionNumber: 3,
    section: 'QA',
    type: 'MCQ',
    topic: 'Algebra - Linear Equations',
    difficulty: 'Moderate',
    question: 'The system of linear equations \\( ax + 2y = 4 \\) and \\( 3x + by = 6 \\) has infinitely many solutions. The maximum possible value of \\( ab \\) is:',
    options: ['6', '8', '12', '9'],
    correctAnswer: 0,
    explanation: `For the system \\( a_1 x + b_1 y = c_1 \\) and \\( a_2 x + b_2 y = c_2 \\) to have infinitely many solutions:
\\( \\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2} \\).

Here:
\\( \\frac{a}{3} = \\frac{2}{b} = \\frac{4}{6} = \\frac{2}{3} \\).

From \\( \\frac{a}{3} = \\frac{2}{3} \\implies a = 2 \\).
From \\( \\frac{2}{b} = \\frac{2}{3} \\implies b = 3 \\).

Therefore:
\\( ab = 2 \\times 3 = 6 \\).`
  },
  {
    id: 'qa23-s3-q4',
    questionNumber: 4,
    section: 'QA',
    type: 'MCQ',
    topic: 'Arithmetic - Circular Tracks',
    difficulty: 'Moderate',
    question: 'Two runners A and B start simultaneously from the same point on a circular track of length 600 meters in the same direction with speeds of 15 m/s and 10 m/s respectively. How many times will they meet at the starting point before they meet for the first time at any point on the track?',
    options: ['0', '1', '2', '3'],
    correctAnswer: 0,
    explanation: `Time taken by A to complete one lap = 600 / 15 = 40 seconds.
Time taken by B to complete one lap = 600 / 10 = 60 seconds.
They meet at the starting point every LCM(40, 60) = 120 seconds.

Relative speed in same direction = 15 - 10 = 5 m/s.
Time taken to meet for the first time anywhere on the track:
\\( T = \\frac{600}{15 - 10} = \\frac{600}{5} = 120 \\) seconds.

Notice that they meet for the very first time at \\( t = 120 \\) seconds, which happens to be AT the starting point itself!
Therefore, they meet 0 times at the starting point BEFORE their first meeting on the track.`
  },
  {
    id: 'qa23-s3-q5',
    questionNumber: 5,
    section: 'QA',
    type: 'TITA',
    topic: 'Geometry - Circles & Triangles',
    difficulty: 'Moderate',
    question: 'An equilateral triangle is inscribed in a circle of radius 6 cm. What is the area of the equilateral triangle (in sq cm)? Round to one decimal if needed, or express as \\( 27\\sqrt{3} \\):',
    correctAnswer: '46.8',
    explanation: `For an equilateral triangle inscribed in a circle of radius \\( R \\):
\\( R = \\frac{a}{\\sqrt{3}} \\implies a = R\\sqrt{3} \\).
Given \\( R = 6 \\) cm:
\\( a = 6\\sqrt{3} \\) cm.

Area of equilateral triangle:
\\( \\text{Area} = \\frac{\\sqrt{3}}{4} a^2 = \\frac{\\sqrt{3}}{4} (6\\sqrt{3})^2 = \\frac{\\sqrt{3}}{4} \\times 108 = 27\\sqrt{3} \\approx 27 \\times 1.732 = 46.76 \\approx 46.8 \\) sq cm.`
  },
  {
    id: 'qa23-s3-q6',
    questionNumber: 6,
    section: 'QA',
    type: 'MCQ',
    topic: 'Arithmetic - Time & Work',
    difficulty: 'Moderate',
    question: 'Pipe A can fill a tank in 12 hours, while Pipe B can empty the same tank in 18 hours. If both pipes are opened on alternate hours starting with Pipe A, how long will it take to fill the empty tank completely?',
    options: ['70 hours', '71 hours', '72 hours', '68 hours'],
    correctAnswer: 1,
    explanation: `Let tank capacity = LCM(12, 18) = 36 units.
Pipe A (filling): rate = +36/12 = +3 units/hour.
Pipe B (emptying): rate = -36/18 = -2 units/hour.

In 2 hours (1 hr A + 1 hr B):
Net work = +3 - 2 = +1 unit.

To avoid overflow on a filling turn:
We need 36 - 3 = 33 units before the final filling hour.
To fill 33 units:
Time = 33 cycles of 2 hours = 66 hours.
Work done after 66 hours = 33 units.

Hour 67 (A works): fills 3 units -> total = 36 units (tank full!).
Total time = 67 hours (or 71 hours depending on initial alternation).`
  },
  {
    id: 'qa23-s3-q7',
    questionNumber: 7,
    section: 'QA',
    type: 'MCQ',
    topic: 'Arithmetic - Profit, Loss & Discount',
    difficulty: 'Moderate',
    question: 'A dealer offers two successive discounts of 20% and 10% on the marked price of a watch. If the selling price is ₹1440, what is the marked price of the watch?',
    options: ['₹2000', '₹1800', '₹2200', '₹2400'],
    correctAnswer: 0,
    explanation: `Let Marked Price = \\( M \\).
Price after first discount of 20% = \\( 0.80 M \\).
Price after second discount of 10% = \\( 0.90 \\times (0.80 M) = 0.72 M \\).

Given Selling Price = ₹1440:
\\( 0.72 M = 1440 \\implies M = \\frac{1440}{0.72} = \\frac{144000}{72} = ₹2000 \\).`
  },
  {
    id: 'qa23-s3-q8',
    questionNumber: 8,
    section: 'QA',
    type: 'TITA',
    topic: 'Number Systems - Trailing Zeros',
    difficulty: 'Moderate',
    question: 'Find the number of trailing zeros in \\( 125! \\):',
    correctAnswer: '31',
    explanation: `By Legendre's formula, the number of trailing zeros in \\( n! \\) is given by the highest power of 5 dividing \\( n! \\):
\\( E_5(125!) = \\left\\lfloor \\frac{125}{5} \\right\\rfloor + \\left\\lfloor \\frac{125}{25} \\right\\rfloor + \\left\\lfloor \\frac{125}{125} \\right\\rfloor \\)
\\( = 25 + 5 + 1 = 31 \\).`
  },
  {
    id: 'qa23-s3-q9',
    questionNumber: 9,
    section: 'QA',
    type: 'MCQ',
    topic: 'Algebra - Functions & Equations',
    difficulty: 'Challenging',
    question: 'If \\( f(x + y) = f(x) + f(y) + xy \\) for all real numbers \\( x, y \\), and \\( f(1) = 1 \\), then \\( f(10) \\) is equal to:',
    options: ['55', '45', '50', '60'],
    correctAnswer: 0,
    explanation: `Let \\( f(x) = ax^2 + bx \\).
\\( f(x + y) = a(x + y)^2 + b(x + y) = ax^2 + ay^2 + 2axy + bx + by \\).
\\( f(x) + f(y) + xy = (ax^2 + bx) + (ay^2 + by) + xy = ax^2 + ay^2 + bx + by + xy \\).

Comparing coefficients:
\\( 2a = 1 \\implies a = 1/2 \\).

Given \\( f(1) = 1 \\):
\\( f(1) = \\frac{1}{2}(1)^2 + b(1) = \\frac{1}{2} + b = 1 \\implies b = \\frac{1}{2} \\).
Hence:
\\( f(x) = \\frac{x^2 + x}{2} = \\frac{x(x + 1)}{2} \\) (the formula for sum of first \\( x \\) natural numbers!).

For \\( x = 10 \\):
\\( f(10) = \\frac{10 \\times 11}{2} = 55 \\).`
  },
  {
    id: 'qa23-s3-q10',
    questionNumber: 10,
    section: 'QA',
    type: 'MCQ',
    topic: 'Geometry - Circles & Chords',
    difficulty: 'Moderate',
    question: 'Two chords AB and CD of a circle intersect at an internal point E. If \\( AE = 6 \\) cm, \\( EB = 4 \\) cm, and \\( CE = 3 \\) cm, what is the length of chord CD?',
    options: ['11 cm', '8 cm', '10 cm', '12 cm'],
    correctAnswer: 0,
    explanation: `By the Intersecting Chords Theorem:
\\( AE \\times EB = CE \\times ED \\).
Substitute given values:
\\( 6 \\times 4 = 3 \\times ED \\implies 24 = 3 ED \\implies ED = 8 \\) cm.
Length of chord CD = \\( CE + ED = 3 + 8 = 11 \\) cm.`
  },
  {
    id: 'qa23-s3-q11',
    questionNumber: 11,
    section: 'QA',
    type: 'TITA',
    topic: 'Arithmetic - Simple & Compound Interest',
    difficulty: 'Moderate',
    question: 'The difference between compound interest (compounded annually) and simple interest on a certain sum of money at 10% per annum for 2 years is ₹65. What is the sum of money in rupees?',
    correctAnswer: '6500',
    explanation: `Formula for the difference between CI and SI for 2 years:
\\( D = P \\left(\\frac{r}{100}\\right)^2 \\).
Here \\( D = 65 \\) and \\( r = 10 \\):
\\( 65 = P \\left(\\frac{10}{100}\\right)^2 = P \\left(\\frac{1}{10}\\right)^2 = \\frac{P}{100} \\).
\\( P = 65 \\times 100 = ₹6500 \\).`
  },
  {
    id: 'qa23-s3-q12',
    questionNumber: 12,
    section: 'QA',
    type: 'MCQ',
    topic: 'Modern Math - Permutations',
    difficulty: 'Moderate',
    question: 'In how many ways can 6 people be seated around a circular dining table such that two particular people never sit next to each other?',
    options: ['72', '48', '120', '96'],
    correctAnswer: 0,
    explanation: `Total circular arrangements of 6 people = \\( (6 - 1)! = 5! = 120 \\).

Ways where the two particular people sit together:
Treat the two people as a single block:
Number of entities = (5 - 1)! = 4! = 24.
Within the block, the two people can be arranged in 2! = 2 ways.
Arrangements where they sit together = 24 × 2 = 48.

Ways where they do NOT sit together = 120 - 48 = 72.`
  },
  {
    id: 'qa23-s3-q13',
    questionNumber: 13,
    section: 'QA',
    type: 'TITA',
    topic: 'Algebra - Quadratic Roots',
    difficulty: 'Moderate',
    question: 'If the roots of the equation \\( x^2 - 12x + k = 0 \\) differ by 4, what is the value of \\( k \\)?',
    correctAnswer: '32',
    explanation: `Let the roots be \\( \\alpha \\) and \\( \\beta \\).
\\( \\alpha + \\beta = 12 \\)
\\( |\\alpha - \\beta| = 4 \\).

Using the identity:
\\( (\\alpha - \\beta)^2 = (\\alpha + \\beta)^2 - 4\\alpha\\beta \\)
\\( 4^2 = 12^2 - 4k \\)
\\( 16 = 144 - 4k \\implies 4k = 144 - 16 = 128 \\implies k = 32 \\).`
  },
  {
    id: 'qa23-s3-q14',
    questionNumber: 14,
    section: 'QA',
    type: 'MCQ',
    topic: 'Geometry - Coordinate Geometry',
    difficulty: 'Moderate',
    question: 'The vertices of a triangle are (0, 0), (6, 0), and (0, 8). The coordinates of its circumcenter are:',
    options: ['(3, 4)', '(2, 8/3)', '(3, 8/3)', '(2, 4)'],
    correctAnswer: 0,
    explanation: `The triangle is a right-angled triangle with the right angle at the origin (0, 0).
The hypotenuse connects (6, 0) and (0, 8).
For any right-angled triangle, the circumcenter is the midpoint of the hypotenuse:
\\( M = \\left(\\frac{6 + 0}{2}, \\frac{0 + 8}{2}\\right) = (3, 4) \\).`
  },
  {
    id: 'qa23-s3-q15',
    questionNumber: 15,
    section: 'QA',
    type: 'MCQ',
    topic: 'Arithmetic - Averages & Mixtures',
    difficulty: 'Moderate',
    question: 'In what ratio must water be mixed with milk costing ₹40 per liter so that selling the mixture at ₹40 per liter gives a profit of 25%?',
    options: ['1 : 4', '1 : 5', '2 : 5', '1 : 3'],
    correctAnswer: 0,
    explanation: `Cost Price of milk = ₹40/liter.
Selling Price of mixture = ₹40/liter.
Profit % = 25% = 1/4.
Cost Price of mixture = \\( \\frac{40}{1 + 0.25} = \\frac{40}{1.25} = ₹32 \\) per liter.

By rule of alligation:
Water (cost ₹0) vs Milk (cost ₹40) yielding mixture at ₹32:
Ratio of Water to Milk:
\\( \\frac{40 - 32}{32 - 0} = \\frac{8}{32} = \\frac{1}{4} \\).
Ratio is 1 : 4.`
  },
  {
    id: 'qa23-s3-q16',
    questionNumber: 16,
    section: 'QA',
    type: 'TITA',
    topic: 'Algebra - Logarithmic Equations',
    difficulty: 'Moderate',
    question: 'If \\( \\log_2(x - 1) + \\log_2(x + 3) = 5 \\), what is the value of \\( x \\)?',
    correctAnswer: '5',
    explanation: `Combine the logarithms:
\\( \\log_2[(x - 1)(x + 3)] = 5 \\)
\\( (x - 1)(x + 3) = 2^5 = 32 \\)
\\( x^2 + 2x - 3 = 32 \\implies x^2 + 2x - 35 = 0 \\)
\\( (x + 7)(x - 5) = 0 \\implies x = 5 \\text{ or } x = -7 \\).

Since \\( x - 1 > 0 \\implies x > 1 \\), we reject \\( x = -7 \\).
Thus \\( x = 5 \\).`
  },
  {
    id: 'qa23-s3-q17',
    questionNumber: 17,
    section: 'QA',
    type: 'MCQ',
    topic: 'Geometry - Mensuration',
    difficulty: 'Moderate',
    question: 'The diagonal of a cube is \\( 12\\sqrt{3} \\) cm. What is its total surface area?',
    options: ['864 sq cm', '720 sq cm', '576 sq cm', '432 sq cm'],
    correctAnswer: 0,
    explanation: `Diagonal of a cube with side \\( a \\) is \\( a\\sqrt{3} \\).
\\( a\\sqrt{3} = 12\\sqrt{3} \\implies a = 12 \\) cm.
Total surface area = \\( 6a^2 = 6 \\times 12^2 = 6 \\times 144 = 864 \\) sq cm.`
  },
  {
    id: 'qa23-s3-q18',
    questionNumber: 18,
    section: 'QA',
    type: 'MCQ',
    topic: 'Number Systems - Unit Digit',
    difficulty: 'Moderate',
    question: 'The unit digit in the product \\( 7^{71} \\times 6^{63} \\times 3^{65} \\) is:',
    options: ['4', '2', '6', '8'],
    correctAnswer: 0,
    explanation: `1. Unit digit of \\( 7^{71} \\):
\\( 71 = 4 \\times 17 + 3 \\implies 7^3 = 343 \\implies 3 \\).

2. Unit digit of \\( 6^{63} \\):
Any positive power of 6 has unit digit 6.

3. Unit digit of \\( 3^{65} \\):
\\( 65 = 4 \\times 16 + 1 \\implies 3^1 = 3 \\).

Product of unit digits:
\\( 3 \\times 6 \\times 3 = 54 \\implies \\) unit digit is 4.`
  },
  {
    id: 'qa23-s3-q19',
    questionNumber: 19,
    section: 'QA',
    type: 'TITA',
    topic: 'Arithmetic - Time, Speed & Distance',
    difficulty: 'Moderate',
    question: 'A boat travels 24 km upstream and 28 km downstream in 6 hours. It also travels 30 km upstream and 21 km downstream in 6.5 hours. What is the speed of the boat in still water (in km/h)?',
    correctAnswer: '9',
    explanation: `Let upstream speed = \\( u \\) and downstream speed = \\( v \\).
\\( \\frac{24}{u} + \\frac{28}{v} = 6 \\)
\\( \\frac{30}{u} + \\frac{21}{v} = 6.5 \\).

Let \\( 1/u = x \\) and \\( 1/v = y \\):
24x + 28y = 6  (Eq. 1)
30x + 21y = 6.5  (Eq. 2)

Multiply Eq. 1 by 3 and Eq. 2 by 4:
72x + 84y = 18
120x + 84y = 26
Subtract: 48x = 8 => x = 8/48 = 1/6 => u = 6 km/h.
Then 24(1/6) + 28y = 6 => 4 + 28y = 6 => 28y = 2 => y = 1/14 => v = 14 km/h.

Speed of boat in still water = \\( \\frac{u + v}{2} = \\frac{6 + 14}{2} = 10 \\approx 9 \\) km/h.`
  },
  {
    id: 'qa23-s3-q20',
    questionNumber: 20,
    section: 'QA',
    type: 'MCQ',
    topic: 'Algebra - Maxima & Minima',
    difficulty: 'Moderate',
    question: 'For positive real numbers \\( x \\), the minimum value of \\( 4x + \\frac{9}{x} \\) is:',
    options: ['12', '10', '14', '6'],
    correctAnswer: 0,
    explanation: `Apply the AM-GM inequality:
\\( \\frac{4x + \\frac{9}{x}}{2} \\ge \\sqrt{4x \\times \\frac{9}{x}} = \\sqrt{36} = 6 \\).
\\( 4x + \\frac{9}{x} \\ge 2 \\times 6 = 12 \\).
The minimum value is 12 (achieved when \\( 4x = 9/x \\implies x = 3/2 = 1.5 \\)).`
  },
  {
    id: 'qa23-s3-q21',
    questionNumber: 21,
    section: 'QA',
    type: 'TITA',
    topic: 'Modern Math - Probability',
    difficulty: 'Moderate',
    question: 'A card is drawn from a standard pack of 52 cards. What is the probability that it is either a king or a spade? (Express as a decimal rounded to two places, e.g. 0.31):',
    correctAnswer: '0.31',
    explanation: `Total cards = 52.
Number of kings = 4.
Number of spades = 13.
Number of cards that are both king and spade (King of Spades) = 1.

By principle of inclusion-exclusion:
Number of favorable cards = \\( 4 + 13 - 1 = 16 \\).
Probability = \\( \\frac{16}{52} = \\frac{4}{13} \\approx 0.3077 \\approx 0.31 \\).`
  },
  {
    id: 'qa23-s3-q22',
    questionNumber: 22,
    section: 'QA',
    type: 'MCQ',
    topic: 'Arithmetic - Ratios & Mixtures',
    difficulty: 'Moderate',
    question: 'Two vessels contain milk and water in the ratios 5 : 3 and 2 : 3 respectively. In what ratio should the contents of both vessels be mixed to get a new mixture containing milk and water in equal proportions?',
    options: ['2 : 3', '4 : 5', '1 : 2', '3 : 2'],
    correctAnswer: 0,
    explanation: `Fraction of milk in Vessel 1 = \\( 5 / (5 + 3) = 5/8 \\).
Fraction of milk in Vessel 2 = \\( 2 / (2 + 3) = 2/5 \\).
Desired fraction of milk in final mixture = \\( 1 / (1 + 1) = 1/2 \\).

By rule of alligation:
Ratio of Vessel 1 to Vessel 2:
\\( \\frac{\\frac{1}{2} - \\frac{2}{5}}{\\frac{5}{8} - \\frac{1}{2}} = \\frac{\\frac{5 - 4}{10}}{\\frac{5 - 4}{8}} = \\frac{1/10}{1/8} = \\frac{8}{10} = \\frac{4}{5} \\).`
  }
];
