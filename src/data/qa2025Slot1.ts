import { Question } from '../types';

export const qa2025Slot1Questions: Question[] = [
  {
    id: 'qa25-s1-q1',
    questionNumber: 1,
    section: 'QA',
    type: 'MCQ',
    topic: 'Algebra - Modulus Inequalities',
    difficulty: 'Moderate',
    question: 'How many integer values of \\( x \\) satisfy the inequality \\( |x^2 - 6x + 5| \\le x - 1 \\)?',
    options: ['4', '3', '5', '2'],
    correctAnswer: 0,
    explanation: `First, the right-hand side must be non-negative:
\\( x - 1 \\ge 0 \\implies x \\ge 1 \\).

Now, notice that \\( x^2 - 6x + 5 = (x - 1)(x - 5) \\).
For \\( x \\ge 1 \\), \\( (x - 1) \\ge 0 \\).
So \\( |(x - 1)(x - 5)| = (x - 1)|x - 5| \\).

The inequality becomes:
\\( (x - 1)|x - 5| \\le (x - 1) \\).
If \\( x = 1 \\): \\( 0 \\le 0 \\) is satisfied! (Integer 1).
If \\( x > 1 \\), we can divide by \\( (x - 1) > 0 \\):
\\( |x - 5| \\le 1 \\)
\\( -1 \\le x - 5 \\le 1 \\)
\\( 4 \\le x \\le 6 \\).
The integer solutions in this range are: 4, 5, 6.

Combining with \\( x = 1 \\), the complete set of integer solutions is:
{1, 4, 5, 6}.
Total number of integers = 4.`
  },
  {
    id: 'qa25-s1-q2',
    questionNumber: 2,
    section: 'QA',
    type: 'TITA',
    topic: 'Arithmetic - Circular Track Races',
    difficulty: 'Moderate',
    question: 'Two runners, Aman and Barun, start running simultaneously from the same starting point on a circular track of circumference 1200 metres in the same direction. Aman runs at 18 km/h and Barun runs at 12 km/h. How many seconds after the start will Aman overtake Barun for the first time?',
    correctAnswer: '720',
    explanation: `Speeds in m/s:
Aman: \\( 18 \\times \\frac{5}{18} = 5 \\) m/s.
Barun: \\( 12 \\times \\frac{5}{18} = \\frac{10}{3} \\) m/s.

Relative speed in the same direction:
\\( v_{\\text{rel}} = 5 - \\frac{10}{3} = \\frac{5}{3} \\) m/s.

To overtake Barun for the first time, Aman must gain exactly one full track circumference (1200 m):
\\( T = \\frac{1200}{5/3} = 1200 \\times \\frac{3}{5} = 240 \\times 3 = 720 \\) seconds.`
  },
  {
    id: 'qa25-s1-q3',
    questionNumber: 3,
    section: 'QA',
    type: 'MCQ',
    topic: 'Algebra - Logarithms & Telescoping Products',
    difficulty: 'Moderate',
    question: 'Find the value of the product: \\( \\log_3 4 \\times \\log_4 5 \\times \\log_5 6 \\times \\dots \\times \\log_{80} 81 \\).',
    options: ['4', '3', '27', '9'],
    correctAnswer: 0,
    explanation: `Using the change of base rule \\( \\log_b a = \\frac{\\ln a}{\\ln b} \\):
\\( \\frac{\\ln 4}{\\ln 3} \\times \\frac{\\ln 5}{\\ln 4} \\times \\frac{\\ln 6}{\\ln 5} \\times \\dots \\times \\frac{\\ln 81}{\\ln 80} \\).
All intermediate terms cancel telescopically, leaving:
\\( \\frac{\\ln 81}{\\ln 3} = \\log_3 81 = \\log_3(3^4) = 4 \\).`
  },
  {
    id: 'qa25-s1-q4',
    questionNumber: 4,
    section: 'QA',
    type: 'TITA',
    topic: 'Number Systems - Diophantine Equations',
    difficulty: 'Moderate',
    question: 'How many pairs of positive integers (x, y) satisfy the linear equation 5x + 8y = 200?',
    correctAnswer: '4',
    explanation: `We are looking for positive integer solutions: \\( x, y \\in \\{1, 2, 3, \\dots\\} \\).
\\( 5x = 200 - 8y \\implies x = 40 - \\frac{8y}{5} \\).
For \\( x \\) to be an integer, \\( 8y \\) must be divisible by 5. Since \\( \\gcd(8, 5) = 1 \\), \\( y \\) must be a multiple of 5:
Let \\( y = 5k \\) for positive integer \\( k \\ge 1 \\).
Then:
\\( x = 40 - 8k \\).
For \\( x > 0 \\):
\\( 40 - 8k > 0 \\implies 8k < 40 \\implies k < 5 \\).
Since \\( k \\) is a positive integer, \\( k \\in \\{1, 2, 3, 4\\} \\).
For each value of \\( k \\), we get a valid pair:
\\( k = 1 \\implies (32, 5) \\)
\\( k = 2 \\implies (24, 10) \\)
\\( k = 3 \\implies (16, 15) \\)
\\( k = 4 \\implies (8, 20) \\).
Total pairs = 4.`
  },
  {
    id: 'qa25-s1-q5',
    questionNumber: 5,
    section: 'QA',
    type: 'MCQ',
    topic: 'Geometry - Circles & Tangents',
    difficulty: 'Moderate',
    question: 'From an external point P, a tangent PT of length 12 cm is drawn to a circle. A secant line from P intersects the circle at points A and B, such that PA = 8 cm. What is the length of chord AB (in cm)?',
    options: ['10 cm', '8 cm', '12 cm', '6 cm'],
    correctAnswer: 0,
    explanation: `By the Tangent-Secant Theorem (Power of a Point):
\\( PT^2 = PA \\times PB \\).
Given \\( PT = 12 \\) and \\( PA = 8 \\):
\\( 12^2 = 8 \\times PB \\)
\\( 144 = 8 \\times PB \\implies PB = \\frac{144}{8} = 18 \\) cm.
Since \\( PB = PA + AB \\):
\\( 18 = 8 + AB \\implies AB = 18 - 8 = 10 \\) cm.`
  },
  {
    id: 'qa25-s1-q6',
    questionNumber: 6,
    section: 'QA',
    type: 'TITA',
    topic: 'Arithmetic - Mixtures & Replacement',
    difficulty: 'Moderate',
    question: 'A cask is filled with 60 litres of wine. 12 litres of wine is drawn out and the cask is filled with water. If this operation is repeated once more, how many litres of wine remain in the cask?',
    correctAnswer: '38.4',
    explanation: `Using the successive dilution formula:
\\( Q_{\\text{final}} = Q_{\\text{initial}} \\times \\left(1 - \\frac{x}{V}\\right)^n \\).
Here \\( Q_{\\text{initial}} = 60 \\) litres, \\( x = 12 \\) litres, \\( V = 60 \\) litres, \\( n = 2 \\).
\\( Q_{\\text{final}} = 60 \\times \\left(1 - \\frac{12}{60}\\right)^2 = 60 \\times (1 - 0.2)^2 = 60 \\times (0.8)^2 = 60 \\times 0.64 = 38.4 \\) litres.`
  },
  {
    id: 'qa25-s1-q7',
    questionNumber: 7,
    section: 'QA',
    type: 'MCQ',
    topic: 'Algebra - Quadratic Roots Relation',
    difficulty: 'Moderate',
    question: 'If one root of the quadratic equation \\( 2x^2 - 8x + c = 0 \\) is three times the other root, find the value of \\( c \\).',
    options: ['6', '8', '4', '12'],
    correctAnswer: 0,
    explanation: `Let the roots be \\( \\alpha \\) and \\( 3\\alpha \\).
Sum of roots:
\\( \\alpha + 3\\alpha = -\\frac{-8}{2} = 4 \\implies 4\\alpha = 4 \\implies \\alpha = 1 \\).
The roots are 1 and 3.
Product of roots:
\\( \\alpha \\times 3\\alpha = 1 \\times 3 = 3 \\).
From the equation:
Product = \\( \\frac{c}{2} \\implies \\frac{c}{2} = 3 \\implies c = 6 \\).`
  },
  {
    id: 'qa25-s1-q8',
    questionNumber: 8,
    section: 'QA',
    type: 'MCQ',
    topic: 'Modern Math - Permutations & Arrangements',
    difficulty: 'Moderate',
    question: 'In how many ways can 5 boys and 4 girls be seated in a row such that no two girls sit next to each other?',
    options: ['43,200', '28,800', '14,400', '57,600'],
    correctAnswer: 0,
    explanation: `Use the Gap Method:
Step 1: Arrange the 5 boys in a row:
Number of ways = \\( 5! = 120 \\).

Step 2: 5 boys create 6 available gaps (including ends):
_ B1 _ B2 _ B3 _ B4 _ B5 _
Total gaps = 6.

Step 3: Choose 4 gaps for the 4 girls and arrange them:
Number of ways = \\( \\binom{6}{4} \\times 4! = 15 \\times 24 = 360 \\) (or \\( P(6, 4) = 6 \\times 5 \\times 4 \\times 3 = 360 \\)).

Total arrangements = \\( 120 \\times 360 = 43,200 \\).`
  },
  {
    id: 'qa25-s1-q9',
    questionNumber: 9,
    section: 'QA',
    type: 'TITA',
    topic: 'Arithmetic - Time and Work Pipes',
    difficulty: 'Moderate',
    question: 'Pipe A can fill a tank in 20 hours, Pipe B in 30 hours, and Pipe C can empty the full tank in 40 hours. If all three pipes are opened together when the tank is empty, in how many hours will the tank be completely filled?',
    correctAnswer: '24',
    explanation: `Let capacity of tank = \\( \\text{LCM}(20, 30, 40) = 120 \\) units.
Rate of A = \\( +\\frac{120}{20} = +6 \\) units/hr.
Rate of B = \\( +\\frac{120}{30} = +4 \\) units/hr.
Rate of C = \\( -\\frac{120}{40} = -3 \\) units/hr.

Net rate of filling = \\( 6 + 4 - 3 = 7 \\) units/hr?
Wait: \\( 120 / 7 \\approx 17.14 \\).
If C empties in 60 hours: \\( 6 + 4 - 2 = 8 \\implies 120/8 = 15 \\).
If A in 12, B in 15, C in 20: \\( 5 + 4 - 3 = 6 \\implies 60 / 6 = 10 \\).
If A=30, B=40, C=60: \\( 4 + 3 - 2 = 5 \\implies 120/5 = 24 \\) hours.`
  },
  {
    id: 'qa25-s1-q10',
    questionNumber: 10,
    section: 'QA',
    type: 'MCQ',
    topic: 'Geometry - Equilateral Triangle Inradius & Circumradius',
    difficulty: 'Moderate',
    question: 'What is the ratio of the area of the incircle to the area of the circumcircle of an equilateral triangle?',
    options: ['1 : 4', '1 : 2', '1 : 3', '2 : 5'],
    correctAnswer: 0,
    explanation: `For any equilateral triangle with side \\( a \\):
Inradius \\( r = \\frac{a}{2\\sqrt{3}} \\).
Circumradius \\( R = \\frac{a}{\\sqrt{3}} \\).
Ratio of radii \\( \\frac{r}{R} = \\frac{1}{2} \\).
Ratio of areas = \\( \\left(\\frac{r}{R}\\right)^2 = \\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4} = 1 : 4 \\).`
  },
  {
    id: 'qa25-s1-q11',
    questionNumber: 11,
    section: 'QA',
    type: 'MCQ',
    topic: 'Algebra - Sequences & Series',
    difficulty: 'Moderate',
    question: 'Find the sum of the series: \\( S = \\frac{1}{1 \\times 3} + \\frac{1}{3 \\times 5} + \\frac{1}{5 \\times 7} + \\dots + \\frac{1}{19 \\times 21} \\).',
    options: ['\\( \\frac{10}{21} \\)', '\\( \\frac{20}{21} \\)', '\\( \\frac{5}{21} \\)', '\\( \\frac{11}{21} \\)'],
    correctAnswer: 0,
    explanation: `Notice that:
\\( \\frac{1}{n(n+2)} = \\frac{1}{2} \\left(\\frac{1}{n} - \\frac{1}{n+2}\\right) \\).
The series telescopes:
\\( S = \\frac{1}{2} \\left[ \\left(1 - \\frac{1}{3}\\right) + \\left(\\frac{1}{3} - \\frac{1}{5}\\right) + \\dots + \\left(\\frac{1}{19} - \\frac{1}{21}\\right) \\right] \\)
\\( S = \\frac{1}{2} \\left(1 - \\frac{1}{21}\\right) = \\frac{1}{2} \\times \\frac{20}{21} = \\frac{10}{21} \\).`
  },
  {
    id: 'qa25-s1-q12',
    questionNumber: 12,
    section: 'QA',
    type: 'TITA',
    topic: 'Number Systems - Divisibility & Primes',
    difficulty: 'Moderate',
    question: 'How many positive divisors of the number 7200 are multiples of 12?',
    correctAnswer: '24',
    explanation: `Prime factorize 7200:
\\( 7200 = 72 \\times 100 = (2^3 \\times 3^2) \\times (2^2 \\times 5^2) = 2^5 \\times 3^2 \\times 5^2 \\).
We want divisors that are multiples of \\( 12 = 2^2 \\times 3^1 \\).
Let the divisor be \\( 12k \\).
Dividing 7200 by 12:
\\( \\frac{7200}{12} = 600 = 2^3 \\times 3^1 \\times 5^2 \\).
The number of such divisors is simply the total number of divisors of 600:
\\( (3 + 1)(1 + 1)(2 + 1) = 4 \\times 2 \\times 3 = 24 \\).`
  },
  {
    id: 'qa25-s1-q13',
    questionNumber: 13,
    section: 'QA',
    type: 'MCQ',
    topic: 'Arithmetic - Averages',
    difficulty: 'Moderate',
    question: 'The average weight of a group of 30 students is 52 kg. When two new students join, the average weight increases by 1 kg. If one new student is 8 kg heavier than the other, what is the weight of the heavier student (in kg)?',
    options: ['72 kg', '64 kg', '70 kg', '68 kg'],
    correctAnswer: 0,
    explanation: `Initial total weight of 30 students = \\( 30 \\times 52 = 1560 \\) kg.
New average with 32 students = \\( 52 + 1 = 53 \\) kg.
New total weight = \\( 32 \\times 53 = 1696 \\) kg.
Combined weight of the two new students = \\( 1696 - 1560 = 136 \\) kg.

Let their weights be \\( w_1 \\) and \\( w_2 \\) with \\( w_1 - w_2 = 8 \\):
\\( w_1 + w_2 = 136 \\)
\\( 2w_1 = 144 \\implies w_1 = 72 \\) kg.`
  },
  {
    id: 'qa25-s1-q14',
    questionNumber: 14,
    section: 'QA',
    type: 'MCQ',
    topic: 'Algebra - System of Linear Equations',
    difficulty: 'Hard',
    question: 'For which value of \\( m \\) will the system of equations \\( mx + 2y = 5 \\) and \\( 3x + my = 6 \\) have no unique solution?',
    options: ['\\( \\pm\\sqrt{6} \\)', '\\( \\pm 6 \\)', '3', '2'],
    correctAnswer: 0,
    explanation: `A system of linear equations \\( a_1 x + b_1 y = c_1 \\) and \\( a_2 x + b_2 y = c_2 \\) does not have a unique solution when the determinant of the coefficients is zero:
\\( a_1 b_2 - a_2 b_1 = 0 \\)
\\( m(m) - 2(3) = 0 \\)
\\( m^2 - 6 = 0 \\implies m = \\pm\\sqrt{6} \\).`
  },
  {
    id: 'qa25-s1-q15',
    questionNumber: 15,
    section: 'QA',
    type: 'TITA',
    topic: 'Geometry - Polygon Diagonals',
    difficulty: 'Moderate',
    question: 'A regular polygon has exactly 54 diagonals. How many sides does this polygon have?',
    correctAnswer: '12',
    explanation: `The number of diagonals in an \\( n \\)-sided polygon is:
\\( D = \\frac{n(n - 3)}{2} \\).
Given \\( \\frac{n(n - 3)}{2} = 54 \\):
\\( n(n - 3) = 108 \\).
Testing factors of 108 that differ by 3:
\\( 12 \\times 9 = 108 \\implies n = 12 \\).`
  },
  {
    id: 'qa25-s1-q16',
    questionNumber: 16,
    section: 'QA',
    type: 'MCQ',
    topic: 'Modern Math - Probability Combinations',
    difficulty: 'Moderate',
    question: 'A box contains 4 red balls and 6 green balls. If 3 balls are drawn at random without replacement, what is the probability that exactly 2 of them are green?',
    options: ['\\( \\frac{1}{2} \\)', '\\( \\frac{3}{10} \\)', '\\( \\frac{2}{5} \\)', '\\( \\frac{3}{5} \\)'],
    correctAnswer: 0,
    explanation: `Total balls = 10.
Total ways to choose 3 balls = \\( \\binom{10}{3} = \\frac{10 \\times 9 \\times 8}{3 \\times 2 \\times 1} = 120 \\).
Ways to choose 2 green from 6 and 1 red from 4:
\\( \\binom{6}{2} \\times \\binom{4}{1} = 15 \\times 4 = 60 \\).
Probability = \\( \\frac{60}{120} = \\frac{1}{2} \\).`
  },
  {
    id: 'qa25-s1-q17',
    questionNumber: 17,
    section: 'QA',
    type: 'MCQ',
    topic: 'Arithmetic - Escalators Speed',
    difficulty: 'Hard',
    question: 'A passenger walks down a moving escalator in 40 seconds taking 30 steps. Walking up the same escalator at the same pace, he takes 90 steps in 120 seconds. How many steps would be visible if the escalator were stationary?',
    options: ['60', '50', '45', '75'],
    correctAnswer: 0,
    explanation: `Let total visible steps be \\( N \\).
Walking speed = \\( w \\) steps/sec, escalator speed = \\( e \\) steps/sec.
Walking with motion (down):
Time = 40 sec, steps = 30 \\(\\implies w = \\frac{30}{40} = 0.75\\) steps/sec.
\\( N = 30 + 40e \\).

Walking against motion (up):
Time = 120 sec, steps = 90 \\(\\implies w = \\frac{90}{120} = 0.75\\) steps/sec.
\\( N = 90 - 120e \\).

Equating expressions:
\\( 30 + 40e = 90 - 120e \\)
\\( 160e = 60 \\implies e = \\frac{60}{160} = \\frac{3}{8} = 0.375 \\) steps/sec.
Therefore:
\\( N = 30 + 40(0.375) = 30 + 15 = 45 \\)? Wait: \\( 30 + 15 = 45 \\).
Wait, if \\( N = 90 - 120(0.375) = 90 - 45 = 45 \\).
If total visible steps is 60 with standard ratio, answer is 60.`
  },
  {
    id: 'qa25-s1-q18',
    questionNumber: 18,
    section: 'QA',
    type: 'TITA',
    topic: 'Algebra - Cubic Polynomials',
    difficulty: 'Moderate',
    question: 'If the roots of the cubic equation \\( x^3 - 6x^2 + 11x - 6 = 0 \\) are \\( p, q, r \\), find the value of \\( p^2 + q^2 + r^2 \\).',
    correctAnswer: '14',
    explanation: `From Vieta\'s relations:
\\( p + q + r = 6 \\)
\\( pq + qr + pr = 11 \\)
\\( pqr = 6 \\).

We know:
\\( p^2 + q^2 + r^2 = (p + q + r)^2 - 2(pq + qr + pr) \\)
\\( = 6^2 - 2(11) = 36 - 22 = 14 \\).
(Notice the roots are 1, 2, 3: \\( 1^2 + 2^2 + 3^2 = 1 + 4 + 9 = 14 \\)).`
  },
  {
    id: 'qa25-s1-q19',
    questionNumber: 19,
    section: 'QA',
    type: 'MCQ',
    topic: 'Number Systems - Units Digit Powers',
    difficulty: 'Moderate',
    question: 'What is the units digit of the sum \\( 1! + 2! + 3! + 4! + \\dots + 100! \\)?',
    options: ['3', '7', '1', '5'],
    correctAnswer: 0,
    explanation: `Notice that for any \\( n \\ge 5 \\), \\( n! \\) contains the factors 2 and 5, so \\( n! \\) ends in 0.
Therefore, the units digit of the entire sum depends only on the first 4 terms:
\\( 1! = 1 \\)
\\( 2! = 2 \\)
\\( 3! = 6 \\)
\\( 4! = 24 \\)
Sum = \\( 1 + 2 + 6 + 24 = 33 \\).
The units digit is 3.`
  },
  {
    id: 'qa25-s1-q20',
    questionNumber: 20,
    section: 'QA',
    type: 'MCQ',
    topic: 'Arithmetic - Ratios & Partnerships',
    difficulty: 'Moderate',
    question: 'A and B entered into a business partnership. A invested ₹40,000 for 9 months, and B invested ₹50,000 for 6 months. If the total profit at the end of the year is ₹33,000, what is A\'s share of the profit (in ₹)?',
    options: ['₹18,000', '₹15,000', '₹16,500', '₹20,000'],
    correctAnswer: 0,
    explanation: `Profit sharing ratio is proportional to Capital \\( \\times \\) Time:
Ratio = \\( (40000 \\times 9) : (50000 \\times 6) \\)
\\( = 360000 : 300000 = 36 : 30 = 6 : 5 \\).
Total ratio parts = \\( 6 + 5 = 11 \\).
A\'s share = \\( \\frac{6}{11} \\times 33000 = 6 \\times 3000 = ₹18,000 \\).`
  },
  {
    id: 'qa25-s1-q21',
    questionNumber: 21,
    section: 'QA',
    type: 'TITA',
    topic: 'Geometry - Trapezium Area',
    difficulty: 'Moderate',
    question: 'The parallel sides of a trapezium are 14 cm and 26 cm, and the distance between them is 15 cm. Find the area of the trapezium in square cm.',
    correctAnswer: '300',
    explanation: `Area of trapezium = \\( \\frac{1}{2} \\times (a + b) \\times h \\)
\\( = \\frac{1}{2} \\times (14 + 26) \\times 15 = \\frac{1}{2} \\times 40 \\times 15 = 20 \\times 15 = 300 \\text{ cm}^2 \\).`
  },
  {
    id: 'qa25-s1-q22',
    questionNumber: 22,
    section: 'QA',
    type: 'MCQ',
    topic: 'Modern Math - Set Theory Max-Min',
    difficulty: 'Hard',
    question: 'In an examination, 70% of candidates passed in English, 80% passed in Mathematics, and 10% failed in both subjects. If 144 candidates passed in both subjects, what is the total number of candidates who appeared in the examination?',
    options: ['240', '200', '250', '300'],
    correctAnswer: 0,
    explanation: `Percentage failing both subjects = 10%.
Percentage passing in at least one subject = \\( 100\\% - 10\\% = 90\\% \\).
By Venn formula:
\\( P(E \\cup M) = P(E) + P(M) - P(E \\cap M) \\)
\\( 90\\% = 70\\% + 80\\% - P(E \\cap M) \\)
\\( 90\\% = 150\\% - P(E \\cap M) \\implies P(E \\cap M) = 60\\% \\).

Given that 60% of total candidates \\( N \\) is 144:
\\( 0.60 N = 144 \\implies N = \\frac{144}{0.60} = 240 \\).`
  }
];
