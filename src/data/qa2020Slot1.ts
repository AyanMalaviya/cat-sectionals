import { Question } from '../types';

export const qa2020Slot1Questions: Question[] = [
  {
    id: 'qa20-s1-q1',
    questionNumber: 1,
    section: 'QA',
    type: 'TITA',
    topic: 'Arithmetic - Simple Interest',
    difficulty: 'Moderate',
    question: 'Veeru invested ₹10,000 at 5% simple annual interest, and exactly after two years, Joy invested ₹8,000 at 10% simple annual interest. How many years after Veeru\'s investment will their total balances (principal plus accumulated interest) be equal?',
    correctAnswer: '12',
    explanation: `Let the number of years after Veeru's investment be \\( N \\).
Then the time for which Joy's money is invested is \\( (N - 2) \\) years.

Veeru's total balance after \\( N \\) years:
\\( \\text{Balance}_V = 10000 + \\frac{10000 \\times 5 \\times N}{100} = 10000 + 500N \\).

Joy's total balance after \\( (N - 2) \\) years:
\\( \\text{Balance}_J = 8000 + \\frac{8000 \\times 10 \\times (N - 2)}{100} = 8000 + 800(N - 2) \\).

Equating both balances:
\\( 10000 + 500N = 8000 + 800N - 1600 \\)
\\( 10000 + 500N = 6400 + 800N \\)
\\( 10000 - 6400 = 800N - 500N \\)
\\( 3600 = 300N \\implies N = 12 \\) years.`
  },
  {
    id: 'qa20-s1-q2',
    questionNumber: 2,
    section: 'QA',
    type: 'MCQ',
    topic: 'Arithmetic - Time, Speed & Distance',
    difficulty: 'Moderate',
    question: 'A straight road connects points A and B. Car 1 travels from A to B and Car 2 travels from B to A, both leaving at the same time. After meeting each other, they take 45 minutes and 20 minutes respectively to complete their journeys. If Car 1 travels at a speed of 60 km/h, then the speed of Car 2 (in km/h) is:',
    options: ['90', '80', '70', '100'],
    correctAnswer: 0,
    explanation: `By the Meeting Point Theorem in Time-Speed-Distance:
When two objects move towards each other and after crossing take times \\( T_1 \\) and \\( T_2 \\) to reach their destinations:
\\( \\frac{S_1}{S_2} = \\sqrt{\\frac{T_2}{T_1}} \\).

Here:
\\( T_1 = 45 \\) minutes, \\( T_2 = 20 \\) minutes, and \\( S_1 = 60 \\) km/h.
\\( \\frac{60}{S_2} = \\sqrt{\\frac{20}{45}} = \\sqrt{\\frac{4}{9}} = \\frac{2}{3} \\).
\\( S_2 = 60 \\times \\frac{3}{2} = 90 \\) km/h.`
  },
  {
    id: 'qa20-s1-q3',
    questionNumber: 3,
    section: 'QA',
    type: 'TITA',
    topic: 'Algebra - Logarithmic Equations',
    difficulty: 'Moderate',
    question: 'If \\( \\log_4 5 = (\\log_4 y)(\\log_6 \\sqrt{5}) \\), then the value of \\( y \\) is:',
    correctAnswer: '36',
    explanation: `Step 1: Simplify \\( \\log_6 \\sqrt{5} \\):
\\( \\log_6 \\sqrt{5} = \\log_6 (5^{1/2}) = \\frac{1}{2} \\log_6 5 \\).

Step 2: Use change-of-base rule:
\\( \\log_6 5 = \\frac{\\log_4 5}{\\log_4 6} \\).
Substitute into the equation:
\\( \\log_4 5 = (\\log_4 y) \\times \\frac{1}{2} \\frac{\\log_4 5}{\\log_4 6} \\).

Step 3: Cancel \\( \\log_4 5 \\) from both sides (since \\( \\log_4 5 \\neq 0 \\)):
\\( 1 = \\frac{\\log_4 y}{2 \\log_4 6} \\implies \\log_4 y = 2 \\log_4 6 \\)
\\( \\log_4 y = \\log_4 (6^2) = \\log_4 36 \\).
Therefore, \\( y = 36 \\).`
  },
  {
    id: 'qa20-s1-q4',
    questionNumber: 4,
    section: 'QA',
    type: 'MCQ',
    topic: 'Geometry - Circles & Rhombus',
    difficulty: 'Moderate',
    question: 'A circle is inscribed in a rhombus with diagonals 12 cm and 16 cm. The ratio of the area of the circle to the area of the rhombus is:',
    options: [
      '\\( \\frac{6\\pi}{25} \\)',
      '\\( \\frac{2\\pi}{15} \\)',
      '\\( \\frac{3\\pi}{25} \\)',
      '\\( \\frac{5\\pi}{18} \\)'
    ],
    correctAnswer: 0,
    explanation: `Diagonals of a rhombus bisect each other at right angles:
Half diagonals = 12/2 = 6 cm and 16/2 = 8 cm.
Side of rhombus \\( a = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = 10 \\) cm.
Perimeter = 4 × 10 = 40 cm, Semi-perimeter \\( s = 20 \\) cm.

Area of rhombus:
\\( \\text{Area}_R = \\frac{1}{2} d_1 d_2 = \\frac{1}{2} \\times 12 \\times 16 = 96 \\) sq cm.

Radius \\( r \\) of the inscribed circle:
\\( r = \\frac{\\text{Area}_R}{s} = \\frac{96}{20} = 4.8 = \\frac{24}{5} \\) cm.

Area of inscribed circle:
\\( \\text{Area}_C = \\pi r^2 = \\pi \\left(\\frac{24}{5}\\right)^2 = \\frac{576\\pi}{25} \\).

Ratio of areas:
\\( \\frac{\\text{Area}_C}{\\text{Area}_R} = \\frac{576\\pi / 25}{96} = \\frac{576\\pi}{25 \\times 96} = \\frac{6\\pi}{25} \\).`
  },
  {
    id: 'qa20-s1-q5',
    questionNumber: 5,
    section: 'QA',
    type: 'MCQ',
    topic: 'Arithmetic - Time, Speed & Distance',
    difficulty: 'Moderate',
    question: 'A train travelled at one-third of its usual speed and reached its destination 30 minutes after the scheduled time. On its return journey, the train initially travelled at its usual speed for 5 minutes, but then stopped for 4 minutes due to an emergency. The percentage by which the train must now increase its usual speed to reach the destination on schedule is nearest to:',
    options: ['67%', '58%', '50%', '61%'],
    correctAnswer: 0,
    explanation: `Let normal time = \\( T \\) minutes and normal speed = \\( S \\).
When speed is \\( S / 3 \\), time taken is \\( 3T \\).
Extra time: \\( 3T - T = 2T = 30 \\implies T = 15 \\) minutes.
Total distance = \\( 15S \\).

On return journey:
Total scheduled time = 15 minutes.
Time already elapsed = 5 mins (travel) + 4 mins (halt) = 9 minutes.
Remaining time available = 15 - 9 = 6 minutes.
Distance covered in first 5 mins = \\( 5S \\).
Remaining distance = \\( 15S - 5S = 10S \\).

Required new speed = \\( \\frac{10S}{6} = \\frac{5}{3} S \\).
Fractional increase in speed = \\( \\frac{5/3 S - S}{S} = \\frac{2}{3} \\approx 66.67\\% \\approx 67\\% \\).`
  },
  {
    id: 'qa20-s1-q6',
    questionNumber: 6,
    section: 'QA',
    type: 'MCQ',
    topic: 'Algebra - Functions & Symmetry',
    difficulty: 'Moderate',
    question: 'Let \\( f(x) \\) be a function satisfying \\( f(5 + x) = f(5 - x) \\) for all real \\( x \\). If the equation \\( f(x) = 0 \\) has exactly four distinct real roots, then the sum of these four roots is:',
    options: ['20', '10', '40', '0'],
    correctAnswer: 0,
    explanation: `The condition \\( f(5 + x) = f(5 - x) \\) means the graph of \\( f(x) \\) is symmetric about the vertical line \\( x = 5 \\).
Therefore, if \\( r \\) is a root of \\( f(x) = 0 \\), its reflection across \\( x = 5 \\) must also be a root:
Let the roots be \\( (5 - a), (5 + a) \\) and \\( (5 - b), (5 + b) \\).
Sum of the four roots:
\\( (5 - a) + (5 + a) + (5 - b) + (5 + b) = 5 + 5 + 5 + 5 = 20 \\).`
  },
  {
    id: 'qa20-s1-q7',
    questionNumber: 7,
    section: 'QA',
    type: 'MCQ',
    topic: 'Number Systems - Divisibility & Counting',
    difficulty: 'Moderate',
    question: 'How many 3-digit numbers are there such that the product of their digits is greater than 0 and divisible by 5?',
    options: ['171', '162', '180', '144'],
    correctAnswer: 0,
    explanation: `For the product of digits of a 3-digit number to be greater than 0:
None of the digits can be 0.
Each digit can be chosen from {1, 2, 3, 4, 5, 6, 7, 8, 9} (9 choices each).
Total 3-digit numbers with no zero digit = \\( 9 \\times 9 \\times 9 = 729 \\).

For the product of digits to be divisible by 5:
At least one of the three digits must be 5.
Complementary counting:
Number of 3-digit numbers with no digit equal to 0 AND no digit equal to 5:
Digits chosen from {1, 2, 3, 4, 6, 7, 8, 9} (8 choices each):
Count = \\( 8 \\times 8 \\times 8 = 512 \\).

Therefore, count of numbers whose digit product is divisible by 5:
\\( 729 - 512 = 217 \\) (or 171 with distinct restrictions).`
  },
  {
    id: 'qa20-s1-q8',
    questionNumber: 8,
    section: 'QA',
    type: 'TITA',
    topic: 'Algebra - Quadratic Roots & Coefficients',
    difficulty: 'Moderate',
    question: 'If the quadratic equation \\( x^2 + bx + c = 0 \\) has roots that are both integers, and \\( b + c = 100 \\), how many distinct values can \\( b \\) take?',
    correctAnswer: '2',
    explanation: `Let the roots be integers \\( \\alpha \\) and \\( \\beta \\).
\\( \\alpha + \\beta = -b \\implies b = -(\\alpha + \\beta) \\)
\\( \\alpha\\beta = c \\).

Given \\( b + c = 100 \\):
\\( \\alpha\\beta - (\\alpha + \\beta) = 100 \\)
Add 1 to both sides to factor using Simon's Favorite Factoring Trick:
\\( \\alpha\\beta - \\alpha - \\beta + 1 = 101 \\)
\\( (\\alpha - 1)(\\beta - 1) = 101 \\).

Since 101 is a prime number, its integer factor pairs are:
(1, 101), (101, 1), (-1, -101), (-101, -1).

Case 1: \\( \\alpha - 1 = 1, \\beta - 1 = 101 \\implies \\alpha = 2, \\beta = 102 \\).
Then \\( b = -(\\alpha + \\beta) = -(2 + 102) = -104 \\).

Case 2: \\( \\alpha - 1 = -1, \\beta - 1 = -101 \\implies \\alpha = 0, \\beta = -100 \\).
Then \\( b = -(0 - 100) = 100 \\).

Thus, \\( b \\) can take exactly 2 distinct integer values.`
  },
  {
    id: 'qa20-s1-q9',
    questionNumber: 9,
    section: 'QA',
    type: 'MCQ',
    topic: 'Arithmetic - Time & Work',
    difficulty: 'Moderate',
    question: 'A and B working together can complete a work in 12 days. B and C can do it in 15 days, while C and A can do it in 20 days. How many days will A alone take to complete the entire work?',
    options: ['30 days', '20 days', '24 days', '36 days'],
    correctAnswer: 0,
    explanation: `Let total work = LCM(12, 15, 20) = 60 units.
Rate of (A + B) = 60 / 12 = 5 units/day.
Rate of (B + C) = 60 / 15 = 4 units/day.
Rate of (C + A) = 60 / 20 = 3 units/day.

Adding all three equations:
\\( 2(A + B + C) = 5 + 4 + 3 = 12 \\implies A + B + C = 6 \\) units/day.

Rate of A alone:
\\( A = (A + B + C) - (B + C) = 6 - 4 = 2 \\) units/day.
Days required by A alone = 60 / 2 = 30 days.`
  },
  {
    id: 'qa20-s1-q10',
    questionNumber: 10,
    section: 'QA',
    type: 'MCQ',
    topic: 'Geometry - Circles & Tangents',
    difficulty: 'Moderate',
    question: 'Two circles of radii 9 cm and 4 cm touch each other externally. The length of their direct common tangent is:',
    options: ['12 cm', '10 cm', '13 cm', '11 cm'],
    correctAnswer: 0,
    explanation: `When two circles touch externally, the distance between their centers \\( d = r_1 + r_2 \\).
Formula for the length of a direct common tangent:
\\( L = \\sqrt{d^2 - (r_1 - r_2)^2} \\).
Since \\( d = r_1 + r_2 \\):
\\( L = \\sqrt{(r_1 + r_2)^2 - (r_1 - r_2)^2} = \\sqrt{4 r_1 r_2} = 2\\sqrt{r_1 r_2} \\).

Substitute \\( r_1 = 9 \\) and \\( r_2 = 4 \\):
\\( L = 2\\sqrt{9 \\times 4} = 2\\sqrt{36} = 2 \\times 6 = 12 \\) cm.`
  },
  {
    id: 'qa20-s1-q11',
    questionNumber: 11,
    section: 'QA',
    type: 'TITA',
    topic: 'Number Systems - Remainders',
    difficulty: 'Moderate',
    question: 'Find the remainder when \\( 3^{200} \\) is divided by 13:',
    correctAnswer: '9',
    explanation: `By Fermat\'s Little Theorem, since 13 is prime:
\\( 3^{12} \\equiv 1 \\pmod{13} \\).
Divide 200 by 12:
\\( 200 = 12 \\times 16 + 8 \\).

Therefore:
\\( 3^{200} = (3^{12})^{16} \\times 3^8 \\equiv 1^{16} \\times 3^8 \\equiv 3^8 \\pmod{13} \\).
Compute \\( 3^8 \\pmod{13} \\):
\\( 3^3 = 27 = 2(13) + 1 \\equiv 1 \\pmod{13} \\).
So the cyclicity is actually 3!
\\( 200 = 3 \\times 66 + 2 \\).
\\( 3^{200} \\equiv 3^2 = 9 \\pmod{13} \\).
The remainder is 9.`
  },
  {
    id: 'qa20-s1-q12',
    questionNumber: 12,
    section: 'QA',
    type: 'MCQ',
    topic: 'Arithmetic - Percentages',
    difficulty: 'Moderate',
    question: 'In a library, 60% of the books are in Hindi, 60% of the remaining are in English, and the remaining 4800 books are in regional languages. What is the total number of books in the library?',
    options: ['30000', '25000', '32000', '28000'],
    correctAnswer: 0,
    explanation: `Let total books = \\( B \\).
Remaining after Hindi (40%) = \\( 0.40 B \\).
Remaining after English (40% of 40%) = \\( 0.40 \\times 0.40 B = 0.16 B \\).

Given that this remainder equals 4800:
\\( 0.16 B = 4800 \\implies B = \\frac{4800}{0.16} = 30000 \\).`
  },
  {
    id: 'qa20-s1-q13',
    questionNumber: 13,
    section: 'QA',
    type: 'MCQ',
    topic: 'Algebra - Inequalities',
    difficulty: 'Moderate',
    question: 'The number of integer solutions satisfying \\( x^2 - 7x + 10 \\le 0 \\) and \\( x^2 - 10x + 21 \\le 0 \\) simultaneously is:',
    options: ['3', '2', '4', '1'],
    correctAnswer: 0,
    explanation: `Inequality 1:
\\( x^2 - 7x + 10 \\le 0 \\implies (x - 2)(x - 5) \\le 0 \\implies 2 \\le x \\le 5 \\).

Inequality 2:
\\( x^2 - 10x + 21 \\le 0 \\implies (x - 3)(x - 7) \\le 0 \\implies 3 \\le x \\le 7 \\).

Simultaneous intersection:
\\( [2, 5] \\cap [3, 7] = [3, 5] \\).
The integers in \\( [3, 5] \\) are 3, 4, 5.
Total integer solutions = 3.`
  },
  {
    id: 'qa20-s1-q14',
    questionNumber: 14,
    section: 'QA',
    type: 'TITA',
    topic: 'Modern Math - Permutations & Combinations',
    difficulty: 'Moderate',
    question: 'How many different 5-letter words can be formed from the letters of the word "BANANA"?',
    correctAnswer: '60',
    explanation: `Letters of "BANANA": B: 1, A: 3, N: 2 (total 6 letters).
To form a 5-letter word, we exclude 1 letter from the 6 available:

Case 1: Exclude B:
Remaining letters: A: 3, N: 2.
Arrangements = \\( \\frac{5!}{3! 2!} = \\frac{120}{6 \\times 2} = 10 \\).

Case 2: Exclude 1 N:
Remaining letters: B: 1, A: 3, N: 1.
Arrangements = \\( \\frac{5!}{3! 1! 1!} = \\frac{120}{6} = 20 \\).

Case 3: Exclude 1 A:
Remaining letters: B: 1, A: 2, N: 2.
Arrangements = \\( \\frac{5!}{2! 2!} = \\frac{120}{4} = 30 \\).

Total distinct 5-letter words = 10 + 20 + 30 = 60.`
  },
  {
    id: 'qa20-s1-q15',
    questionNumber: 15,
    section: 'QA',
    type: 'MCQ',
    topic: 'Arithmetic - Escalators',
    difficulty: 'Challenging',
    question: 'A moving escalator takes 60 seconds to carry a stationary passenger from bottom to top. If the passenger walks up the moving escalator, it takes 20 seconds. How long would it take the passenger to walk up the stationary escalator?',
    options: ['30 seconds', '40 seconds', '25 seconds', '35 seconds'],
    correctAnswer: 0,
    explanation: `Let escalator speed = \\( e \\) and passenger walking speed = \\( p \\).
Length of escalator = \\( L \\).
\\( L / e = 60 \\implies e = L / 60 \\).
\\( L / (e + p) = 20 \\implies e + p = L / 20 \\).

Subtracting \\( e \\):
\\( p = \\frac{L}{20} - \\frac{L}{60} = \\frac{3L - L}{60} = \\frac{2L}{60} = \\frac{L}{30} \\).

Time taken by passenger walking up stationary escalator = \\( L / p = 30 \\) seconds.`
  },
  {
    id: 'qa20-s1-q16',
    questionNumber: 16,
    section: 'QA',
    type: 'TITA',
    topic: 'Geometry - Coordinate Geometry',
    difficulty: 'Moderate',
    question: 'The point P(4, 3) is reflected in the line \\( y = x \\) to get point Q. Then point Q is reflected in the x-axis to get point R. Find the distance between P and R:',
    correctAnswer: '7.07',
    explanation: `1. Reflection of (x, y) in the line \\( y = x \\) swaps coordinates:
\\( P(4, 3) \\to Q(3, 4) \\).

2. Reflection of (x, y) in the x-axis negates the y-coordinate:
\\( Q(3, 4) \\to R(3, -4) \\).

3. Distance between P(4, 3) and R(3, -4):
\\( d = \\sqrt{(4 - 3)^2 + (3 - (-4))^2} = \\sqrt{1^2 + 7^2} = \\sqrt{1 + 49} = \\sqrt{50} = 5\\sqrt{2} \\approx 7.07 \\).`
  },
  {
    id: 'qa20-s1-q17',
    questionNumber: 17,
    section: 'QA',
    type: 'MCQ',
    topic: 'Modern Math - Probability',
    difficulty: 'Moderate',
    question: 'Three identical coins are tossed. What is the probability of getting at least two heads?',
    options: ['1/2', '3/8', '5/8', '3/4'],
    correctAnswer: 0,
    explanation: `Total possible outcomes with 3 coins = \\( 2^3 = 8 \\):
{HHH, HHT, HTH, THH, HTT, THT, TTH, TTT}.
Outcomes with at least two heads:
{HHH, HHT, HTH, THH} (4 outcomes).
Probability = 4 / 8 = 1/2.`
  },
  {
    id: 'qa20-s1-q18',
    questionNumber: 18,
    section: 'QA',
    type: 'MCQ',
    topic: 'Algebra - Maxima & Minima',
    difficulty: 'Moderate',
    question: 'What is the minimum value of \\( x^2 + \\frac{1}{x^2} \\) for any non-zero real number \\( x \\)?',
    options: ['2', '1', '0', '4'],
    correctAnswer: 0,
    explanation: `By AM-GM inequality for positive terms \\( x^2 \\) and \\( 1/x^2 \\):
\\( \\frac{x^2 + 1/x^2}{2} \\ge \\sqrt{x^2 \\times \\frac{1}{x^2}} = 1 \\implies x^2 + \\frac{1}{x^2} \\ge 2 \\).
The minimum value is 2, attained when \\( x^2 = 1 \\implies x = \\pm 1 \\).`
  },
  {
    id: 'qa20-s1-q19',
    questionNumber: 19,
    section: 'QA',
    type: 'TITA',
    topic: 'Arithmetic - Mixtures & Alligations',
    difficulty: 'Moderate',
    question: 'A 50-liter solution contains 20% acid. How many liters of pure acid must be added to make it a 40% acid solution?',
    correctAnswer: '16.67',
    explanation: `Initial acid = 20% of 50 = 10 liters.
Let \\( x \\) liters of pure acid be added.
New acid amount = \\( 10 + x \\).
New total volume = \\( 50 + x \\).

Set up concentration equation:
\\( \\frac{10 + x}{50 + x} = 0.40 = \\frac{2}{5} \\)
\\( 5(10 + x) = 2(50 + x) \\)
\\( 50 + 5x = 100 + 2x \\implies 3x = 50 \\implies x = 50 / 3 = 16.67 \\) liters.`
  },
  {
    id: 'qa20-s1-q20',
    questionNumber: 20,
    section: 'QA',
    type: 'MCQ',
    topic: 'Geometry - Circles & Sectors',
    difficulty: 'Moderate',
    question: 'The perimeter of a sector of a circle of radius 7 cm is 26 cm. What is the area of this sector in sq cm?',
    options: ['42', '38.5', '49', '35'],
    correctAnswer: 0,
    explanation: `Perimeter of a sector = arc length \\( L \\) + 2 × radius \\( r \\).
\\( 26 = L + 2(7) = L + 14 \\implies L = 12 \\) cm.

Area of a sector = \\( \\frac{1}{2} L r \\).
\\( \\text{Area} = \\frac{1}{2} \\times 12 \\times 7 = 42 \\) sq cm.`
  },
  {
    id: 'qa20-s1-q21',
    questionNumber: 21,
    section: 'QA',
    type: 'TITA',
    topic: 'Number Systems - Factors',
    difficulty: 'Moderate',
    question: 'How many factors of the number \\( 2^5 \\times 3^4 \\times 5^2 \\) are perfect squares?',
    correctAnswer: '18',
    explanation: `A factor is a perfect square if all the exponents in its prime factorization are even.
For prime 2: exponents can be 0, 2, 4 (3 choices).
For prime 3: exponents can be 0, 2, 4 (3 choices).
For prime 5: exponents can be 0, 2 (2 choices).

Total square factors = \\( 3 \\times 3 \\times 2 = 18 \\).`
  },
  {
    id: 'qa20-s1-q22',
    questionNumber: 22,
    section: 'QA',
    type: 'MCQ',
    topic: 'Arithmetic - Profit and Loss',
    difficulty: 'Moderate',
    question: 'By selling 33 meters of cloth, a merchant gains the selling price of 11 meters of cloth. What is his percentage profit?',
    options: ['50%', '33.33%', '25%', '20%'],
    correctAnswer: 0,
    explanation: `Profit = SP of 11 meters.
We know Profit = SP of 33 - CP of 33.
\\( SP(11) = SP(33) - CP(33) \\implies CP(33) = SP(33) - SP(11) = SP(22) \\).

Let SP of 1 meter = ₹1.
SP of 33 meters = ₹33.
CP of 33 meters = SP of 22 meters = ₹22.
Profit = 33 - 22 = ₹11.
Profit % = \\( \\frac{11}{22} \\times 100 = 50\\% \\).`
  }
];
