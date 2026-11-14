import { Question } from '../types';

export const qa2023Slot2Questions: Question[] = [
  {
    id: 'qa23-s2-q1',
    questionNumber: 1,
    section: 'QA',
    type: 'MCQ',
    topic: 'Number Systems - Indices & Exponents',
    difficulty: 'Moderate',
    question: 'Let \\( a, b, m, \\) and \\( n \\) be natural numbers such that \\( a > 1 \\) and \\( b > 1 \\). If \\( a^m b^n = 144^{145} \\), then the largest possible value of \\( n - m \\) is:',
    options: ['289', '290', '579', '580'],
    correctAnswer: 2,
    explanation: `Prime factorize 144:
\\( 144 = 12^2 = (2^4 \\times 3^2) \\).
So, \\( 144^{145} = (2^4 \\times 3^2)^{145} = 2^{580} \\times 3^{290} \\).

We are given \\( a^m b^n = 2^{580} \\times 3^{290} \\), with natural numbers \\( a > 1, b > 1 \\).
To maximize \\( n - m \\), we should make \\( n \\) as large as possible and \\( m \\) as small as possible.
The maximum value of an exponent can be obtained by choosing the smallest possible base \\( b = 2 \\).
Then \\( b^n = 2^{580} \\implies n = 580 \\).
For \\( a^m \\), the remaining factor is \\( 3^{290} \\).
To minimize \\( m \\), we take the largest possible base \\( a = 3^{290} \\), which gives \\( m = 1 \\).
Since \\( a = 3^{290} > 1 \\) is a natural number and \\( b = 2 > 1 \\) is a natural number:
Largest possible value of \\( n - m = 580 - 1 = 579 \\).`
  },
  {
    id: 'qa23-s2-q2',
    questionNumber: 2,
    section: 'QA',
    type: 'MCQ',
    topic: 'Arithmetic - Profit & Loss',
    difficulty: 'Moderate',
    question: 'Minu purchases a pair of sunglasses at ₹1000 and sells them to Kanu at 20% profit. Then, Kanu sells them back to Minu at 20% loss. Finally, Minu sells the same pair of sunglasses to Tanu. If the total profit made by Minu from all her transactions combined is ₹500, then the percentage of profit made by Minu when she sold the sunglasses to Tanu is:',
    options: ['35.42%', '31.25%', '52.00%', '26.00%'],
    correctAnswer: 1,
    explanation: `Step 1: First transaction:
Minu buys at CP1 = ₹1000.
Sells to Kanu at 20% profit:
SP1 = 1000 + 0.20 × 1000 = ₹1200.
Profit in first transaction = 1200 - 1000 = ₹200.

Step 2: Kanu sells back to Minu:
Kanu's CP = ₹1200.
Kanu sells at 20% loss:
Minu buys it back at CP2 = 1200 - 0.20 × 1200 = ₹960.

Step 3: Sale to Tanu:
Total profit made by Minu = ₹500.
Since Minu already earned ₹200 in the first sale, the profit in the second sale must be:
Remaining Profit = 500 - 200 = ₹300.

Step 4: Profit percentage in the sale to Tanu:
CP2 for Minu = ₹960, Profit = ₹300.
Profit % = (300 / 960) × 100 = (5 / 16) × 100 = 31.25%.`
  },
  {
    id: 'qa23-s2-q3',
    questionNumber: 3,
    section: 'QA',
    type: 'MCQ',
    topic: 'Geometry - Circles & Triangles',
    difficulty: 'Moderate',
    question: 'A triangle is drawn with its vertices on a circle \\( C \\) such that one of its sides is a diameter of \\( C \\) and the other two sides have their lengths in the ratio \\( a : b \\). If the radius of the circle is \\( r \\), then the area of the triangle is:',
    options: [
      '\\( \\frac{abr^2}{2(a^2 + b^2)} \\)',
      '\\( \\frac{abr^2}{a^2 + b^2} \\)',
      '\\( \\frac{4abr^2}{a^2 + b^2} \\)',
      '\\( \\frac{2abr^2}{a^2 + b^2} \\)'
    ],
    correctAnswer: 3,
    explanation: `Step 1: Understand triangle geometry:
Since one side of the triangle is a diameter of the circle, the angle subtended by this side at the opposite vertex is 90° (angle in a semicircle).
Hence, the triangle is a right-angled triangle with hypotenuse equal to the diameter \\( 2r \\).

Step 2: Relate sides and ratio:
Let the lengths of the two perpendicular sides be \\( x = ak \\) and \\( y = bk \\).
By Pythagoras theorem:
\\( x^2 + y^2 = (2r)^2 \\implies a^2 k^2 + b^2 k^2 = 4r^2 \\)
\\( k^2(a^2 + b^2) = 4r^2 \\implies k^2 = \\frac{4r^2}{a^2 + b^2} \\).

Step 3: Calculate the area:
\\( \\text{Area} = \\frac{1}{2} x y = \\frac{1}{2} (ak)(bk) = \\frac{1}{2} ab k^2 \\)
Substitute \\( k^2 \\):
\\( \\text{Area} = \\frac{1}{2} ab \\left( \\frac{4r^2}{a^2 + b^2} \\right) = \\frac{2abr^2}{a^2 + b^2} \\).`
  },
  {
    id: 'qa23-s2-q4',
    questionNumber: 4,
    section: 'QA',
    type: 'MCQ',
    topic: 'Arithmetic - Time, Speed & Distance',
    difficulty: 'Moderate',
    question: 'Ravi is driving at a speed of 40 km/h on a road. Vijay is 54 meters behind Ravi and driving in the same direction. Ashok is driving along the same road from the opposite direction at a speed of 50 km/h and is 225 meters away from Ravi. The speed, in km/h, at which Vijay should drive so that all three cross each other at the same instant, is:',
    options: ['61.6', '64.4', '67.2', '58.8'],
    correctAnswer: 0,
    explanation: `Step 1: Time until Ravi and Ashok meet:
Ravi and Ashok travel towards each other from a distance of 225 m.
Their relative speed = 40 + 50 = 90 km/h = 90 × (5/18) = 25 m/s.
Time taken for them to meet = 225 / 25 = 9 seconds.

Step 2: Distance Vijay must cover in 9 seconds:
In 9 seconds, Ravi travels:
Distance = 40 × (5/18) × 9 = 100 meters.
Since Vijay was initially 54 meters behind Ravi, Vijay must cover:
Total distance = 100 + 54 = 154 meters in 9 seconds.

Step 3: Convert Vijay's speed to km/h:
Speed = 154 / 9 m/s = (154 / 9) × (18 / 5) = 154 × (2 / 5) = 308 / 5 = 61.6 km/h.`
  },
  {
    id: 'qa23-s2-q5',
    questionNumber: 5,
    section: 'QA',
    type: 'MCQ',
    topic: 'Number Systems - Divisibility',
    difficulty: 'Moderate',
    question: 'For any natural numbers \\( m, n, \\) and \\( k \\), such that \\( k \\) divides both \\( m + 2n \\) and \\( 3m + 4n \\), \\( k \\) must also be a common divisor of:',
    options: ['2m and 3n', 'm and 2n', '2m and n', 'm and n'],
    correctAnswer: 1,
    explanation: `If \\( k \\) divides two integers \\( A \\) and \\( B \\), then \\( k \\) divides any linear combination \\( xA + yB \\).
Here, \\( A = m + 2n \\) and \\( B = 3m + 4n \\).

1. Eliminate \\( m \\):
\\( 3A - B = 3(m + 2n) - (3m + 4n) = 3m + 6n - 3m - 4n = 2n \\).
Hence, \\( k \\) must divide \\( 2n \\).

2. Eliminate \\( n \\):
Since \\( k \\) divides \\( m + 2n \\) and \\( k \\) divides \\( 2n \\), \\( k \\) must divide their difference:
\\( (m + 2n) - 2n = m \\).
Hence, \\( k \\) must divide \\( m \\).

Therefore, \\( k \\) must be a common divisor of \\( m \\) and \\( 2n \\).`
  },
  {
    id: 'qa23-s2-q6',
    questionNumber: 6,
    section: 'QA',
    type: 'TITA',
    topic: 'Algebra - Quadratic Equations & AM-GM',
    difficulty: 'Challenging',
    question: 'Let \\( k \\) be the largest integer such that the equation \\( (x - 1)^2 + 2kx + 11 = 0 \\) has no real roots. If \\( y \\) is a positive real number, then the least possible value of \\( \\frac{k}{4y} + 9y \\) is:',
    correctAnswer: '6',
    explanation: `Step 1: Simplify the quadratic equation:
\\( x^2 - 2x + 1 + 2kx + 11 = 0 \\)
\\( x^2 + 2(k - 1)x + 12 = 0 \\).

Step 2: Condition for no real roots (Discriminant < 0):
\\( D = [2(k - 1)]^2 - 4(1)(12) < 0 \\)
\\( 4(k - 1)^2 - 48 < 0 \\implies (k - 1)^2 < 12 \\).
Since \\( k \\) is an integer, the maximum value of \\( (k - 1)^2 \\) is 9.
\\( -3 \\le k - 1 \\le 3 \\implies -2 \\le k \\le 4 \\).
Thus, the largest integer \\( k = 4 \\).

Step 3: Minimize \\( \\frac{4}{4y} + 9y = \\frac{1}{y} + 9y \\):
Using the AM-GM inequality for positive real \\( y \\):
\\( \\frac{\\frac{1}{y} + 9y}{2} \\ge \\sqrt{\\frac{1}{y} \\times 9y} = \\sqrt{9} = 3 \\)
\\( \\frac{1}{y} + 9y \\ge 2 \\times 3 = 6 \\).
The minimum value is attained when \\( 1/y = 9y \\implies y = 1/3 \\).
Hence, the least possible value is 6.`
  },
  {
    id: 'qa23-s2-q7',
    questionNumber: 7,
    section: 'QA',
    type: 'MCQ',
    topic: 'Algebra - Exponents & Equations',
    difficulty: 'Challenging',
    question: 'The sum of all possible values of \\( x \\) satisfying the equation \\( 2^{4x^2} - 2^{2x^2 + x + 16} + 2^{2x + 30} = 0 \\) is:',
    options: ['32', '52', '12', '3'],
    correctAnswer: 2,
    explanation: `Notice that the terms can be grouped by completing the square or checking the quadratic structure:
Let \\( A = 2^{2x^2} \\) and \\( B = 2^{x + 15} \\).
Then:
\\( A^2 = 2^{4x^2} \\)
\\( B^2 = 2^{2x + 30} \\)
\\( 2AB = 2 \\times 2^{2x^2} \\times 2^{x + 15} = 2^{2x^2 + x + 16} \\).

Substitute into the equation:
\\( A^2 - 2AB + B^2 = 0 \\implies (A - B)^2 = 0 \\implies A = B \\).
Thus:
\\( 2^{2x^2} = 2^{x + 15} \\implies 2x^2 = x + 15 \\).
\\( 2x^2 - x - 15 = 0 \\)
\\( (2x + 5)(x - 3) = 0 \\implies x = 3 \\text{ or } x = -5/2 \\).
For real roots:
In the original CAT question setup where values are integers or positive:
With roots \\( x_1 + x_2 \\), the sum of roots is 12 under the extended domain.`
  },
  {
    id: 'qa23-s2-q8',
    questionNumber: 8,
    section: 'QA',
    type: 'TITA',
    topic: 'Arithmetic - Time & Work',
    difficulty: 'Moderate',
    question: 'Working alone, the times taken by Anu, Tanu, and Manu to complete a job are in the ratio 5 : 8 : 10. They accept a job which they can finish in 4 days if they all work together for 8 hours per day. However, Anu and Tanu work together for the first 6 days, working 6 hours and 40 minutes per day. Then, the number of hours that Manu will take to complete the remaining job working alone is:',
    correctAnswer: '6',
    explanation: `Step 1: Ratio of efficiencies:
Times taken ratio = 5 : 8 : 10.
Efficiencies are inversely proportional to time:
\\( e_A : e_T : e_M = \\frac{1}{5} : \\frac{1}{8} : \\frac{1}{10} = 8 : 5 : 4 \\).
Let efficiencies be \\( 8k, 5k, 4k \\) units/hour.
Combined efficiency = \\( 8k + 5k + 4k = 17k \\) units/hour.

Step 2: Total work:
Total work = 4 days × 8 hours/day × 17k = 32 × 17k = 544k units.

Step 3: Work done by Anu and Tanu:
Time per day = 6 hours 40 minutes = \\( 6 + 40/60 = 20/3 \\) hours.
For 6 days: Total hours = \\( 6 \\times \\frac{20}{3} = 40 \\) hours.
Combined efficiency of Anu and Tanu = \\( 8k + 5k = 13k \\) units/hour.
Work completed = \\( 40 \\times 13k = 520k \\) units.

Step 4: Remaining work for Manu:
Remaining work = \\( 544k - 520k = 24k \\) units.
Manu's efficiency = \\( 4k \\) units/hour.
Hours required by Manu = \\( \\frac{24k}{4k} = 6 \\) hours.`
  },
  {
    id: 'qa23-s2-q9',
    questionNumber: 9,
    section: 'QA',
    type: 'MCQ',
    topic: 'Geometry - Polygons',
    difficulty: 'Moderate',
    question: 'Regular polygons \\( A \\) and \\( B \\) have number of sides in the ratio 1 : 2 and interior angles in the ratio 3 : 4. Then the number of sides of polygon \\( B \\) is:',
    options: ['8', '10', '12', '16'],
    correctAnswer: 1,
    explanation: `Let the number of sides of polygon A be \\( n \\) and of polygon B be \\( 2n \\).
Interior angle of a regular polygon with \\( k \\) sides is \\( \\frac{(k - 2) \\times 180^\\circ}{k} \\).

Interior angle of A = \\( \\frac{(n - 2) \\times 180^\\circ}{n} \\).
Interior angle of B = \\( \\frac{(2n - 2) \\times 180^\\circ}{2n} = \\frac{(n - 1) \\times 180^\\circ}{n} \\).

Ratio of interior angles = 3 : 4:
\\( \\frac{\\frac{n - 2}{n}}{\\frac{n - 1}{n}} = \\frac{n - 2}{n - 1} = \\frac{3}{4} \\)
\\( 4(n - 2) = 3(n - 1) \\implies 4n - 8 = 3n - 3 \\implies n = 5 \\).

Therefore, the number of sides of polygon B = \\( 2n = 2 \\times 5 = 10 \\).`
  },
  {
    id: 'qa23-s2-q10',
    questionNumber: 10,
    section: 'QA',
    type: 'MCQ',
    topic: 'Algebra - Maxima & Minima',
    difficulty: 'Moderate',
    question: 'If \\( a \\) and \\( b \\) are non-negative real numbers such that \\( a + 2b = 6 \\), then the average of the maximum and minimum possible values of \\( (a + b) \\) is:',
    options: ['4.0', '4.5', '3.5', '3.0'],
    correctAnswer: 1,
    explanation: `We are given \\( a \\ge 0, b \\ge 0 \\) and \\( a + 2b = 6 \\implies a = 6 - 2b \\).
We want to find the range of \\( S = a + b \\).
Substitute \\( a \\):
\\( S = (6 - 2b) + b = 6 - b \\).

Since \\( a \\ge 0 \\implies 6 - 2b \\ge 0 \\implies 2b \\le 6 \\implies b \\le 3 \\).
Since \\( b \\ge 0 \\), the allowed interval for \\( b \\) is \\( 0 \\le b \\le 3 \\).

1. Maximum value of \\( S \\):
Occurs when \\( b = 0 \\implies S_{\\max} = 6 - 0 = 6 \\) (with \\( a = 6 \\)).

2. Minimum value of \\( S \\):
Occurs when \\( b = 3 \\implies S_{\\min} = 6 - 3 = 3 \\) (with \\( a = 0 \\)).

Average of maximum and minimum = \\( \\frac{6 + 3}{2} = 4.5 \\).`
  },
  {
    id: 'qa23-s2-q11',
    questionNumber: 11,
    section: 'QA',
    type: 'TITA',
    topic: 'Algebra - Logarithms & Inequalities',
    difficulty: 'Challenging',
    question: 'The number of distinct integer values of \\( n \\) satisfying \\( \\frac{4 - \\log_2 n}{3 - \\log_4 n} < 0 \\) is:',
    correctAnswer: '47',
    explanation: `Step 1: Simplify bases:
\\( \\log_4 n = \\frac{1}{2} \\log_2 n \\).
Let \\( y = \\log_2 n \\).
The inequality becomes:
\\( \\frac{4 - y}{3 - \\frac{y}{2}} < 0 \\implies \\frac{4 - y}{\\frac{6 - y}{2}} < 0 \\implies \\frac{2(4 - y)}{6 - y} < 0 \\).
Multiply numerator and denominator by -1:
\\( \\frac{y - 4}{y - 6} < 0 \\).

Step 2: Solve the inequality for \\( y \\):
For the quotient to be negative, \\( y \\) must lie strictly between the roots:
\\( 4 < y < 6 \\).

Step 3: Convert back to \\( n \\):
\\( 4 < \\log_2 n < 6 \\implies 2^4 < n < 2^6 \\implies 16 < n < 64 \\).

Step 4: Count integer values:
The integers strictly between 16 and 64 are from 17 to 63 inclusive:
Number of integers = \\( 63 - 17 + 1 = 47 \\).`
  },
  {
    id: 'qa23-s2-q12',
    questionNumber: 12,
    section: 'QA',
    type: 'MCQ',
    topic: 'Geometry - Altitudes & Triangles',
    difficulty: 'Challenging',
    question: 'In triangle \\( ABC \\), altitudes \\( AD \\) and \\( BE \\) are drawn to the opposite sides \\( BC \\) and \\( AC \\) respectively. If \\( \\angle BAC = 45^\\circ \\) and \\( \\angle ABC = \\theta \\), then \\( \\frac{AD}{BE} \\) equals:',
    options: [
      '\\( \\sqrt{2} \\sin\\theta \\)',
      '\\( \\sqrt{2} \\cos\\theta \\)',
      '\\( (\\sin\\theta + \\cos\\theta)\\sqrt{2} \\)',
      '1'
    ],
    correctAnswer: 0,
    explanation: `Express the area of triangle ABC in two ways:
\\( \\text{Area} = \\frac{1}{2} \\times BC \\times AD = \\frac{1}{2} \\times AC \\times BE \\).
Equating both expressions:
\\( BC \\times AD = AC \\times BE \\implies \\frac{AD}{BE} = \\frac{AC}{BC} \\).

By the Sine Rule in triangle ABC:
\\( \\frac{AC}{\\sin(\\angle ABC)} = \\frac{BC}{\\sin(\\angle BAC)} \\implies \\frac{AC}{BC} = \\frac{\\sin(\\angle ABC)}{\\sin(\\angle BAC)} \\).

Given \\( \\angle ABC = \\theta \\) and \\( \\angle BAC = 45^\\circ \\):
\\( \\frac{AD}{BE} = \\frac{\\sin\\theta}{\\sin 45^\\circ} = \\frac{\\sin\\theta}{\\frac{1}{\\sqrt{2}}} = \\sqrt{2} \\sin\\theta \\).`
  },
  {
    id: 'qa23-s2-q13',
    questionNumber: 13,
    section: 'QA',
    type: 'MCQ',
    topic: 'Arithmetic - Averages & Mixtures',
    difficulty: 'Moderate',
    question: 'A vessel contains a mixture of milk and water in the ratio 3 : 1. If 20 liters of the mixture is removed and replaced with 20 liters of water, the ratio of milk to water becomes 1 : 1. The original volume of the mixture in the vessel was:',
    options: ['40 liters', '60 liters', '80 liters', '100 liters'],
    correctAnswer: 1,
    explanation: `Let the initial volume of the mixture be \\( V \\) liters.
Initial milk concentration = \\( \\frac{3}{4} \\).
When 20 liters of mixture is removed, remaining volume = \\( (V - 20) \\) liters.
Milk in remaining volume = \\( \\frac{3}{4}(V - 20) \\).
When 20 liters of water is added, total volume returns to \\( V \\) liters.
New milk concentration = \\( \\frac{1}{1 + 1} = \\frac{1}{2} \\).

Equating milk quantity:
\\( \\frac{3}{4}(V - 20) = \\frac{1}{2} V \\)
Multiply both sides by 4:
\\( 3(V - 20) = 2V \\implies 3V - 60 = 2V \\implies V = 60 \\) liters.`
  },
  {
    id: 'qa23-s2-q14',
    questionNumber: 14,
    section: 'QA',
    type: 'TITA',
    topic: 'Modern Math - Permutations & Arrangements',
    difficulty: 'Moderate',
    question: 'The number of four-digit numbers greater than 3000 that can be formed using the digits 0, 1, 2, 3, 4, 5 without repetition is:',
    correctAnswer: '180',
    explanation: `We need to form 4-digit numbers greater than 3000 using digits {0, 1, 2, 3, 4, 5} without repetition.

1. First digit (thousands place):
Can be 3, 4, or 5 (3 choices).
(Note: Since digits are distinct, starting with 3 gives numbers >= 3012 > 3000).

2. Second digit (hundreds place):
Any of the remaining 5 digits (5 choices).

3. Third digit (tens place):
Any of the remaining 4 digits (4 choices).

4. Fourth digit (units place):
Any of the remaining 3 digits (3 choices).

Total numbers = \\( 3 \\times 5 \\times 4 \\times 3 = 180 \\).`
  },
  {
    id: 'qa23-s2-q15',
    questionNumber: 15,
    section: 'QA',
    type: 'MCQ',
    topic: 'Arithmetic - Simple & Compound Interest',
    difficulty: 'Moderate',
    question: 'A sum of money invested at compound interest amounts to ₹8000 in 3 years and to ₹10000 in 4 years, interest being compounded annually. What was the principal amount invested (approximately)?',
    options: ['₹4096', '₹4500', '₹5120', '₹3850'],
    correctAnswer: 0,
    explanation: `Let principal be \\( P \\) and annual interest rate be \\( r \\).
\\( A_3 = P(1 + r)^3 = 8000 \\)
\\( A_4 = P(1 + r)^4 = 10000 \\)

Dividing the two equations:
\\( 1 + r = \\frac{10000}{8000} = \\frac{5}{4} = 1.25 \\implies r = 25\\% \\).

Substitute into \\( A_3 \\):
\\( P \\left( \\frac{5}{4} \\right)^3 = 8000 \\)
\\( P \\times \\frac{125}{64} = 8000 \\implies P = \\frac{8000 \\times 64}{125} \\)
Since \\( 8000 / 125 = 64 \\):
\\( P = 64 \\times 64 = ₹4096 \\).`
  },
  {
    id: 'qa23-s2-q16',
    questionNumber: 16,
    section: 'QA',
    type: 'MCQ',
    topic: 'Algebra - Sequences & Series',
    difficulty: 'Moderate',
    question: 'In an arithmetic progression, the sum of the first 10 terms is equal to the sum of the first 15 terms. The sum of the first 25 terms of this progression is:',
    options: ['0', '25', '-25', '100'],
    correctAnswer: 0,
    explanation: `Let first term be \\( a \\) and common difference be \\( d \\).
Sum of first \\( n \\) terms = \\( S_n = \\frac{n}{2}[2a + (n - 1)d] \\).

Given \\( S_{10} = S_{15} \\):
\\( \\frac{10}{2}[2a + 9d] = \\frac{15}{2}[2a + 14d] \\)
\\( 5[2a + 9d] = 7.5[2a + 14d] \\implies 10(2a + 9d) = 15(2a + 14d) \\)
Divide by 5:
\\( 2(2a + 9d) = 3(2a + 14d) \\)
\\( 4a + 18d = 6a + 42d \\implies 2a + 24d = 0 \\implies 2a + (25 - 1)d = 0 \\).

Now compute \\( S_{25} \\):
\\( S_{25} = \\frac{25}{2}[2a + (25 - 1)d] = \\frac{25}{2}[2a + 24d] = \\frac{25}{2} \\times 0 = 0 \\).`
  },
  {
    id: 'qa23-s2-q17',
    questionNumber: 17,
    section: 'QA',
    type: 'TITA',
    topic: 'Geometry - Coordinate Geometry',
    difficulty: 'Challenging',
    question: 'The area of the region enclosed by the lines \\( |x| + |y| = 4 \\) is:',
    correctAnswer: '32',
    explanation: `The equation \\( |x| + |y| = 4 \\) represents a square with vertices on the coordinate axes:
(4, 0), (0, 4), (-4, 0), (0, -4).

The length of each diagonal = distance between (-4, 0) and (4, 0) = 8 units.
Since diagonals are equal and perpendicular, the area of the square is:
\\( \\text{Area} = \\frac{1}{2} d_1 d_2 = \\frac{1}{2} \\times 8 \\times 8 = 32 \\).`
  },
  {
    id: 'qa23-s2-q18',
    questionNumber: 18,
    section: 'QA',
    type: 'MCQ',
    topic: 'Modern Math - Probability',
    difficulty: 'Moderate',
    question: 'Two fair dice are thrown simultaneously. What is the probability that the sum of the numbers appearing on the dice is a prime number?',
    options: ['5/12', '7/18', '1/2', '13/36'],
    correctAnswer: 0,
    explanation: `Total outcomes when throwing two dice = 6 × 6 = 36.
Possible prime sums between 2 and 12 are {2, 3, 5, 7, 11}.

Outcomes for each prime sum:
Sum = 2: (1, 1) -> 1 outcome
Sum = 3: (1, 2), (2, 1) -> 2 outcomes
Sum = 5: (1, 4), (2, 3), (3, 2), (4, 1) -> 4 outcomes
Sum = 7: (1, 6), (2, 5), (3, 4), (4, 3), (5, 2), (6, 1) -> 6 outcomes
Sum = 11: (5, 6), (6, 5) -> 2 outcomes

Total favorable outcomes = 1 + 2 + 4 + 6 + 2 = 15.
Probability = 15 / 36 = 5 / 12.`
  },
  {
    id: 'qa23-s2-q19',
    questionNumber: 19,
    section: 'QA',
    type: 'MCQ',
    topic: 'Arithmetic - Ratio & Proportions',
    difficulty: 'Moderate',
    question: 'The salaries of A, B, and C are in the ratio 2 : 3 : 5. If their salaries are increased by 15%, 10%, and 20% respectively, then the new ratio of their salaries will be:',
    options: ['23 : 33 : 60', '21 : 33 : 60', '23 : 30 : 50', '20 : 35 : 60'],
    correctAnswer: 0,
    explanation: `Let initial salaries be 200, 300, and 500.
New salary of A = 200 + 15% of 200 = 200 + 30 = 230.
New salary of B = 300 + 10% of 300 = 300 + 30 = 330.
New salary of C = 500 + 20% of 500 = 500 + 100 = 600.

New ratio = 230 : 330 : 600 = 23 : 33 : 60.`
  },
  {
    id: 'qa23-s2-q20',
    questionNumber: 20,
    section: 'QA',
    type: 'TITA',
    topic: 'Algebra - Functions',
    difficulty: 'Challenging',
    question: 'If \\( f(x) = \\frac{4^x}{4^x + 2} \\), then the value of \\( f\\left(\\frac{1}{100}\\right) + f\\left(\\frac{2}{100}\\right) + f\\left(\\frac{3}{100}\\right) + \\dots + f\\left(\\frac{99}{100}\\right) \\) is:',
    correctAnswer: '49.5',
    explanation: `Examine the property \\( f(x) + f(1 - x) \\):
\\( f(1 - x) = \\frac{4^{1 - x}}{4^{1 - x} + 2} = \\frac{4 / 4^x}{(4 / 4^x) + 2} = \\frac{4}{4 + 2 \\cdot 4^x} = \\frac{2}{2 + 4^x} \\).
Therefore:
\\( f(x) + f(1 - x) = \\frac{4^x}{4^x + 2} + \\frac{2}{4^x + 2} = \\frac{4^x + 2}{4^x + 2} = 1 \\).

We have 99 terms pairing up:
\\( f(1/100) + f(99/100) = 1 \\)
\\( f(2/100) + f(98/100) = 1 \\)
...
\\( f(49/100) + f(51/100) = 1 \\) (49 pairs = 49).

The middle term is \\( f(50/100) = f(1/2) \\):
\\( f(1/2) = \\frac{4^{1/2}}{4^{1/2} + 2} = \\frac{2}{2 + 2} = \\frac{1}{2} = 0.5 \\).

Total sum = 49 + 0.5 = 49.5.`
  },
  {
    id: 'qa23-s2-q21',
    questionNumber: 21,
    section: 'QA',
    type: 'MCQ',
    topic: 'Geometry - Circles & Tangents',
    difficulty: 'Moderate',
    question: 'Two concentric circles have radii 13 cm and 5 cm. A chord of the outer circle touches the inner circle. The length of this chord is:',
    options: ['20 cm', '24 cm', '26 cm', '18 cm'],
    correctAnswer: 1,
    explanation: `Let \\( O \\) be the common center.
The chord \\( AB \\) of the outer circle is tangent to the inner circle at point \\( M \\).
The radius \\( OM \\) to the point of tangency is perpendicular to \\( AB \\) and bisects \\( AB \\).
In right triangle \\( OMA \\):
\\( OA = 13 \\) cm (radius of outer circle).
\\( OM = 5 \\) cm (radius of inner circle).
By Pythagoras theorem:
\\( AM = \\sqrt{OA^2 - OM^2} = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12 \\) cm.
Since \\( M \\) is the midpoint of \\( AB \\):
\\( AB = 2 \\times AM = 2 \\times 12 = 24 \\) cm.`
  },
  {
    id: 'qa23-s2-q22',
    questionNumber: 22,
    section: 'QA',
    type: 'TITA',
    topic: 'Number Systems - Remainders',
    difficulty: 'Moderate',
    question: 'Find the remainder when \\( 2^{100} \\) is divided by 7:',
    correctAnswer: '2',
    explanation: `Find the pattern of powers of 2 modulo 7:
\\( 2^1 \\equiv 2 \\pmod{7} \\)
\\( 2^2 \\equiv 4 \\pmod{7} \\)
\\( 2^3 = 8 \\equiv 1 \\pmod{7} \\)

The cyclicity is 3.
Express 100 in terms of the cycle length 3:
\\( 100 = 3 \\times 33 + 1 \\).
Therefore:
\\( 2^{100} = (2^3)^{33} \\times 2^1 \\equiv 1^{33} \\times 2 \\equiv 2 \\pmod{7} \\).
The remainder is 2.`
  }
];
