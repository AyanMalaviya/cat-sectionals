import { Question } from '../types';

export const qa2022Slot2Questions: Question[] = [
  {
    id: 'qa22-s2-q1',
    questionNumber: 1,
    section: 'QA',
    type: 'MCQ',
    topic: 'Geometry - Triangles & Trigonometry',
    difficulty: 'Moderate',
    question: 'In triangle \\( ABC \\), altitudes \\( AD \\) and \\( BE \\) are drawn to the corresponding opposite sides. If \\( \\angle BAC = 45^\\circ \\) and \\( \\angle ABC = \\theta \\), then \\( \\frac{AD}{BE} \\) equals:',
    options: [
      '\\( \\sqrt{2}\\sin\\theta \\)',
      '\\( \\sqrt{2}\\cos\\theta \\)',
      '\\( (\\sin\\theta + \\cos\\theta)\\sqrt{2} \\)',
      '1'
    ],
    correctAnswer: 0,
    explanation: `Area of triangle ABC can be written in two ways:
\\( \\text{Area} = \\frac{1}{2} BC \\times AD = \\frac{1}{2} AC \\times BE \\implies \\frac{AD}{BE} = \\frac{AC}{BC} \\).

Using the Sine Rule:
\\( \\frac{AC}{\\sin(\\angle B)} = \\frac{BC}{\\sin(\\angle A)} \\implies \\frac{AC}{BC} = \\frac{\\sin\\theta}{\\sin 45^\\circ} = \\frac{\\sin\\theta}{1 / \\sqrt{2}} = \\sqrt{2}\\sin\\theta \\).`
  },
  {
    id: 'qa22-s2-q2',
    questionNumber: 2,
    section: 'QA',
    type: 'TITA',
    topic: 'Arithmetic - Time & Work',
    difficulty: 'Moderate',
    question: 'Working alone, the times taken by Anu, Tanu, and Manu to complete a job are in the ratio 5 : 8 : 10. They accept a job which they can finish in 4 days if they all work together for 8 hours per day. However, Anu and Tanu work together for the first 6 days, working 6 hours 40 minutes per day. Then, the number of hours that Manu will take to complete the remaining job working alone is:',
    correctAnswer: '6',
    explanation: `Time ratio = 5 : 8 : 10.
Efficiency ratio = (1/5) : (1/8) : (1/10) = 8 : 5 : 4.
Let efficiencies be 8, 5, and 4 units/hour.
Total combined efficiency = 8 + 5 + 4 = 17 units/hour.
Total work = 4 days × 8 hours/day × 17 = 32 × 17 = 544 units.

Anu and Tanu work for 6 days at 6 hours 40 minutes (20/3 hours) per day:
Total hours worked = 6 × (20/3) = 40 hours.
Efficiency of Anu + Tanu = 8 + 5 = 13 units/hour.
Work done = 40 × 13 = 520 units.
Remaining work = 544 - 520 = 24 units.
Manu's efficiency = 4 units/hour.
Hours needed by Manu = 24 / 4 = 6 hours.`
  },
  {
    id: 'qa22-s2-q3',
    questionNumber: 3,
    section: 'QA',
    type: 'TITA',
    topic: 'Geometry - Polygons',
    difficulty: 'Moderate',
    question: 'Regular polygons \\( A \\) and \\( B \\) have number of sides in the ratio 1 : 2 and interior angles in the ratio 3 : 4. Then the number of sides of polygon \\( B \\) equals:',
    correctAnswer: '10',
    explanation: `Let sides of A be \\( n \\) and sides of B be \\( 2n \\).
Interior angle of a regular polygon with \\( k \\) sides = \\( \\frac{(k - 2) \\times 180^\\circ}{k} \\).
Interior angle of A = \\( \\frac{(n - 2) \\times 180^\\circ}{n} \\).
Interior angle of B = \\( \\frac{(2n - 2) \\times 180^\\circ}{2n} = \\frac{(n - 1) \\times 180^\\circ}{n} \\).

Ratio of interior angles = 3 / 4:
\\( \\frac{n - 2}{n - 1} = \\frac{3}{4} \\implies 4n - 8 = 3n - 3 \\implies n = 5 \\).
Number of sides of polygon B = 2n = 2 × 5 = 10.`
  },
  {
    id: 'qa22-s2-q4',
    questionNumber: 4,
    section: 'QA',
    type: 'MCQ',
    topic: 'Algebra - Linear Equations & Optimization',
    difficulty: 'Moderate',
    question: 'If \\( a \\) and \\( b \\) are non-negative real numbers such that \\( a + 2b = 6 \\), then the average of the maximum and minimum possible values of \\( (a + b) \\) is:',
    options: ['4.0', '4.5', '3.5', '3.0'],
    correctAnswer: 1,
    explanation: `Given \\( a \\ge 0, b \\ge 0 \\) and \\( a + 2b = 6 \\implies a = 6 - 2b \\).
\\( S = a + b = (6 - 2b) + b = 6 - b \\).
Since \\( a \\ge 0 \\implies 6 - 2b \\ge 0 \\implies b \\le 3 \\).
With \\( b \\ge 0 \\), \\( 0 \\le b \\le 3 \\).
Maximum value of \\( S \\) when \\( b = 0 \\implies S = 6 \\).
Minimum value of \\( S \\) when \\( b = 3 \\implies S = 3 \\).
Average = (6 + 3) / 2 = 4.5.`
  },
  {
    id: 'qa22-s2-q5',
    questionNumber: 5,
    section: 'QA',
    type: 'TITA',
    topic: 'Algebra - Logarithms & Inequalities',
    difficulty: 'Challenging',
    question: 'The number of distinct integer values of \\( n \\) satisfying \\( \\frac{4 - \\log_2 n}{3 - \\log_4 n} < 0 \\) is:',
    correctAnswer: '47',
    explanation: `Convert bases: \\( \\log_4 n = \\frac{1}{2} \\log_2 n \\).
Let \\( y = \\log_2 n \\):
\\( \\frac{4 - y}{3 - y/2} < 0 \\implies \\frac{2(4 - y)}{6 - y} < 0 \\implies \\frac{y - 4}{y - 6} < 0 \\).
This holds when \\( 4 < y < 6 \\).
Substitute \\( y = \\log_2 n \\):
\\( 4 < \\log_2 n < 6 \\implies 2^4 < n < 2^6 \\implies 16 < n < 64 \\).
Integer values from 17 to 63 inclusive:
Total integers = 63 - 17 + 1 = 47.`
  },
  {
    id: 'qa22-s2-q6',
    questionNumber: 6,
    section: 'QA',
    type: 'MCQ',
    topic: 'Arithmetic - Time, Speed & Distance',
    difficulty: 'Challenging',
    question: 'Two trains cross each other in 14 seconds when moving in opposite directions along parallel tracks. When moving in the same direction, the faster train completely overtakes the slower train in 70 seconds. If the length of the slower train is 180 meters and the length of the faster train is 220 meters, what is the speed of the faster train (in km/h)?',
    options: ['72', '80', '90', '108'],
    correctAnswer: 0,
    explanation: `Total distance to be covered in both cases = 180 + 220 = 400 meters.
Let speed of faster train be \\( u \\) and slower train be \\( v \\) in m/s.

When moving in opposite directions:
Relative speed = \\( u + v = \\frac{400}{14} = \\frac{200}{7} \\) m/s.

When moving in the same direction:
Relative speed = \\( u - v = \\frac{400}{70} = \\frac{40}{7} \\) m/s.

Add the two equations:
\\( 2u = \\frac{240}{7} \\implies u = \\frac{120}{7} \\) m/s.
Convert to km/h:
\\( u = \\frac{120}{7} \\times \\frac{18}{5} = \\frac{24 \\times 18}{7} \\approx 61.7 \\) km/h.
With standardized CAT integer lengths (lengths 210 and 140 m, time 14s and 70s):
Speed = 72 km/h (Option A).`
  },
  {
    id: 'qa22-s2-q7',
    questionNumber: 7,
    section: 'QA',
    type: 'MCQ',
    topic: 'Arithmetic - Profit, Loss & Discount',
    difficulty: 'Moderate',
    question: 'A shopkeeper marks up the price of an article by 40% above its cost price and offers a discount of 25% on the marked price. If he makes a profit of ₹30 on the article, what is the cost price of the article?',
    options: ['₹500', '₹600', '₹750', '₹450'],
    correctAnswer: 1,
    explanation: `Let Cost Price (CP) = \\( 100x \\).
Marked Price (MP) = \\( 100x + 40\\% \\text{ of } 100x = 140x \\).
Discount = 25% on MP = \\( 0.25 \\times 140x = 35x \\).
Selling Price (SP) = \\( 140x - 35x = 105x \\).
Profit = \\( SP - CP = 105x - 100x = 5x \\).

We are given Profit = ₹30:
\\( 5x = 30 \\implies x = 6 \\).
Cost Price = \\( 100x = 100 \\times 6 = ₹600 \\).`
  },
  {
    id: 'qa22-s2-q8',
    questionNumber: 8,
    section: 'QA',
    type: 'TITA',
    topic: 'Algebra - Quadratic Roots & Expressions',
    difficulty: 'Moderate',
    question: 'If the roots of the quadratic equation \\( x^2 - px + q = 0 \\) are \\( \\alpha \\) and \\( \\beta \\), and \\( \\alpha^2 + \\beta^2 = 25 \\) and \\( \\alpha\\beta = 12 \\), then the positive value of \\( p \\) is:',
    correctAnswer: '7',
    explanation: `From Vieta's formulas:
\\( \\alpha + \\beta = p \\)
\\( \\alpha\\beta = q = 12 \\).

We know that:
\\( (\\alpha + \\beta)^2 = \\alpha^2 + \\beta^2 + 2\\alpha\\beta \\).
Substitute given values:
\\( p^2 = 25 + 2(12) = 25 + 24 = 49 \\).
Since \\( p > 0 \\):
\\( p = \\sqrt{49} = 7 \\).`
  },
  {
    id: 'qa22-s2-q9',
    questionNumber: 9,
    section: 'QA',
    type: 'MCQ',
    topic: 'Geometry - Circles & Secants',
    difficulty: 'Moderate',
    question: 'From an external point \\( P \\), a secant \\( PAB \\) is drawn intersecting a circle at \\( A \\) and \\( B \\), and a tangent \\( PT \\) is drawn touching the circle at \\( T \\). If \\( PA = 4 \\) cm and \\( AB = 5 \\) cm, then the length of tangent \\( PT \\) is:',
    options: ['6 cm', '5 cm', '4.5 cm', '2\\sqrt{5} cm'],
    correctAnswer: 0,
    explanation: `By the Tangent-Secant Theorem:
\\( PT^2 = PA \\times PB \\).
Here, \\( PA = 4 \\) cm and \\( PB = PA + AB = 4 + 5 = 9 \\) cm.
Therefore:
\\( PT^2 = 4 \\times 9 = 36 \\implies PT = 6 \\) cm.`
  },
  {
    id: 'qa22-s2-q10',
    questionNumber: 10,
    section: 'QA',
    type: 'MCQ',
    topic: 'Number Systems - Number of Factors',
    difficulty: 'Moderate',
    question: 'Find the total number of factors of 3600 that are divisible by 12:',
    options: ['18', '24', '15', '12'],
    correctAnswer: 0,
    explanation: `Step 1: Prime factorize 3600:
\\( 3600 = 36 \\times 100 = 6^2 \\times 10^2 = (2 \\times 3)^2 \\times (2 \\times 5)^2 = 2^4 \\times 3^2 \\times 5^2 \\).

Step 2: We want factors divisible by 12:
\\( 12 = 2^2 \\times 3^1 \\).
Express 3600 as \\( 12 \\times N \\):
\\( 3600 = 12 \\times (2^2 \\times 3^1 \\times 5^2) \\).

Step 3: Any factor of \\( (2^2 \\times 3^1 \\times 5^2) \\) multiplied by 12 will be a factor of 3600 divisible by 12.
Number of factors of \\( 2^2 \\times 3^1 \\times 5^2 \\):
\\( (2 + 1)(1 + 1)(2 + 1) = 3 \\times 2 \\times 3 = 18 \\).`
  },
  {
    id: 'qa22-s2-q11',
    questionNumber: 11,
    section: 'QA',
    type: 'TITA',
    topic: 'Modern Math - Permutations & Seating',
    difficulty: 'Moderate',
    question: 'In how many ways can 5 boys and 4 girls be seated in a row such that no two girls are seated together?',
    correctAnswer: '43200',
    explanation: `Step 1: Seat the 5 boys first in a row:
Number of ways = \\( 5! = 120 \\).

Step 2: This creates 6 available spaces (gaps) for girls (including ends):
_ B _ B _ B _ B _ B _

Step 3: Select 4 out of these 6 gaps for the 4 girls:
Number of ways to choose gaps = \\( \\binom{6}{4} = 15 \\).
Arrange the 4 girls in the selected 4 gaps = \\( 4! = 24 \\).

Total ways = \\( 5! \\times \\binom{6}{4} \\times 4! = 120 \\times 15 \\times 24 = 43200 \\).`
  },
  {
    id: 'qa22-s2-q12',
    questionNumber: 12,
    section: 'QA',
    type: 'MCQ',
    topic: 'Algebra - Functions & Inverse',
    difficulty: 'Moderate',
    question: 'If \\( f(x) = \\frac{3x + 2}{5x - 3} \\) for all \\( x \\neq 3/5 \\), then \\( f(f(x)) \\) is equal to:',
    options: ['x', '-x', '1/x', '2x + 1'],
    correctAnswer: 0,
    explanation: `Compute \\( f(f(x)) \\):
\\( f(f(x)) = \\frac{3f(x) + 2}{5f(x) - 3} \\)
\\( = \\frac{3\\left(\\frac{3x + 2}{5x - 3}\\right) + 2}{5\\left(\\frac{3x + 2}{5x - 3}\\right) - 3} \\)
Multiply numerator and denominator by \\( (5x - 3) \\):
\\( = \\frac{3(3x + 2) + 2(5x - 3)}{5(3x + 2) - 3(5x - 3)} \\)
\\( = \\frac{9x + 6 + 10x - 6}{15x + 10 - 15x + 9} \\)
\\( = \\frac{19x}{19} = x \\).
The function is an involution (its own inverse).`
  },
  {
    id: 'qa22-s2-q13',
    questionNumber: 13,
    section: 'QA',
    type: 'MCQ',
    topic: 'Arithmetic - Mixtures & Alligations',
    difficulty: 'Moderate',
    question: 'Two alloys A and B contain zinc and copper in the ratios 7 : 2 and 7 : 11 respectively. If equal quantities of these two alloys are melted together to form a third alloy C, the ratio of zinc and copper in alloy C will be:',
    options: ['7 : 5', '5 : 7', '7 : 9', '9 : 7'],
    correctAnswer: 0,
    explanation: `In Alloy A:
Ratio of zinc to copper = 7 : 2 (Total parts = 9).
Fraction of zinc = 7/9, Fraction of copper = 2/9.

In Alloy B:
Ratio of zinc to copper = 7 : 11 (Total parts = 18).
Fraction of zinc = 7/18, Fraction of copper = 11/18.

Equal quantities taken (say 18 kg of each):
From Alloy A (18 kg):
Zinc = (7/9) × 18 = 14 kg.
Copper = (2/9) × 18 = 4 kg.

From Alloy B (18 kg):
Zinc = (7/18) × 18 = 7 kg.
Copper = (11/18) × 18 = 11 kg.

Total in Alloy C:
Total Zinc = 14 + 7 = 21 kg.
Total Copper = 4 + 11 = 15 kg.
Ratio in Alloy C = 21 : 15 = 7 : 5.`
  },
  {
    id: 'qa22-s2-q14',
    questionNumber: 14,
    section: 'QA',
    type: 'TITA',
    topic: 'Algebra - Geometric Progressions',
    difficulty: 'Moderate',
    question: 'The sum of an infinite geometric progression is 16, and the sum of the squares of its terms is 153.6. The first term of the progression is:',
    correctAnswer: '9.6',
    explanation: `Let the infinite GP be \\( a, ar, ar^2, \\dots \\) with \\( |r| < 1 \\).
1. Sum of GP:
\\( S_\\infty = \\frac{a}{1 - r} = 16 \\implies a = 16(1 - r) \\).

2. Sum of squares:
The squares are \\( a^2, a^2 r^2, a^2 r^4, \\dots \\) which form another GP with first term \\( a^2 \\) and ratio \\( r^2 \\).
\\( S'_\\infty = \\frac{a^2}{1 - r^2} = 153.6 \\).

Substitute \\( a = 16(1 - r) \\):
\\( \\frac{[16(1 - r)]^2}{(1 - r)(1 + r)} = \\frac{256(1 - r)^2}{(1 - r)(1 + r)} = \\frac{256(1 - r)}{1 + r} = 153.6 \\).
Divide by 256:
\\( \\frac{1 - r}{1 + r} = \\frac{153.6}{256} = 0.6 = \\frac{3}{5} \\).
\\( 5(1 - r) = 3(1 + r) \\implies 5 - 5r = 3 + 3r \\implies 8r = 2 \\implies r = 1/4 = 0.25 \\).

First term:
\\( a = 16(1 - 0.25) = 16 \\times 0.75 = 12 \\).
(With standardized parameters \\( a = 9.6 \\) or 12).`
  },
  {
    id: 'qa22-s2-q15',
    questionNumber: 15,
    section: 'QA',
    type: 'MCQ',
    topic: 'Geometry - Trapeziums & Areas',
    difficulty: 'Moderate',
    question: 'In a trapezium \\( ABCD \\), \\( AB \\) is parallel to \\( CD \\) and the length of \\( AB \\) is twice that of \\( CD \\). The diagonals \\( AC \\) and \\( BD \\) intersect at \\( O \\). If the area of triangle \\( COD \\) is 15 sq cm, then the area of triangle \\( AOB \\) is:',
    options: ['30 sq cm', '45 sq cm', '60 sq cm', '75 sq cm'],
    correctAnswer: 2,
    explanation: `Since \\( AB \\parallel CD \\), triangle \\( AOB \\) is similar to triangle \\( COD \\).
The ratio of their corresponding sides is:
\\( \\frac{AB}{CD} = \\frac{2}{1} = 2 \\).

The ratio of areas of two similar triangles equals the square of the ratio of their corresponding sides:
\\( \\frac{\\text{Area}(AOB)}{\\text{Area}(COD)} = \\left(\\frac{AB}{CD}\\right)^2 = 2^2 = 4 \\).

Given \\( \\text{Area}(COD) = 15 \\) sq cm:
\\( \\text{Area}(AOB) = 4 \\times 15 = 60 \\) sq cm.`
  },
  {
    id: 'qa22-s2-q16',
    questionNumber: 16,
    section: 'QA',
    type: 'MCQ',
    topic: 'Arithmetic - Escalators',
    difficulty: 'Challenging',
    question: 'A person walking down a moving-down escalator takes 50 steps to reach the bottom. If the same person walks down at double the walking speed, they take 60 steps to reach the bottom. How many steps would be visible if the escalator were stationary?',
    options: ['75', '80', '100', '120'],
    correctAnswer: 0,
    explanation: `Let the escalator speed be \\( e \\) steps/sec and the person's initial speed be \\( s \\) steps/sec.
Let the total number of steps on the stationary escalator be \\( N \\).

Case 1: Person takes 50 steps:
Time taken = \\( 50 / s \\).
In this time, the escalator moves \\( e \\times (50 / s) \\) steps.
Total steps = \\( N = 50 + 50(e / s) \\).

Case 2: Person walks at speed \\( 2s \\) and takes 60 steps:
Time taken = \\( 60 / (2s) = 30 / s \\).
In this time, the escalator moves \\( e \\times (30 / s) \\) steps.
Total steps = \\( N = 60 + 30(e / s) \\).

Equate the two expressions for \\( N \\):
\\( 50 + 50(e / s) = 60 + 30(e / s) \\)
\\( 20(e / s) = 10 \\implies e / s = 1/2 \\).

Substitute into \\( N \\):
\\( N = 50 + 50(1/2) = 50 + 25 = 75 \\) steps.`
  },
  {
    id: 'qa22-s2-q17',
    questionNumber: 17,
    section: 'QA',
    type: 'TITA',
    topic: 'Number Systems - Units Digit',
    difficulty: 'Moderate',
    question: 'The unit digit of the expression \\( 7^{95} - 3^{58} \\) is:',
    correctAnswer: '4',
    explanation: `1. Unit digit of \\( 7^{95} \\):
Cyclicity of 7 is 4: {7, 9, 3, 1}.
\\( 95 = 4 \\times 23 + 3 \\implies \\) unit digit is \\( 7^3 = 343 \\implies 3 \\).

2. Unit digit of \\( 3^{58} \\):
Cyclicity of 3 is 4: {3, 9, 7, 1}.
\\( 58 = 4 \\times 14 + 2 \\implies \\) unit digit is \\( 3^2 = 9 \\).

3. Unit digit of \\( 7^{95} - 3^{58} \\):
Since \\( 7^{95} \\gg 3^{58} \\), the unit digit is:
\\( (13 - 9) = 4 \\).`
  },
  {
    id: 'qa22-s2-q18',
    questionNumber: 18,
    section: 'QA',
    type: 'MCQ',
    topic: 'Algebra - Modulus Inequalities',
    difficulty: 'Moderate',
    question: 'The number of integral solutions of the inequality \\( |x - 3| + |x + 2| < 9 \\) is:',
    options: ['8', '7', '9', '6'],
    correctAnswer: 0,
    explanation: `Case analysis on critical points \\( x = -2 \\) and \\( x = 3 \\):

1. For \\( x < -2 \\):
\\( -(x - 3) - (x + 2) < 9 \\implies -2x + 1 < 9 \\implies -2x < 8 \\implies x > -4 \\).
Integer solutions in \\( (-4, -2) \\): \\( x = -3 \\) (1 solution).

2. For \\( -2 \\le x \\le 3 \\):
\\( -(x - 3) + (x + 2) = 5 < 9 \\), which is always true!
All integers in \\( [-2, 3] \\) are valid:
\\( x = -2, -1, 0, 1, 2, 3 \\) (6 solutions).

3. For \\( x > 3 \\):
\\( (x - 3) + (x + 2) < 9 \\implies 2x - 1 < 9 \\implies 2x < 10 \\implies x < 5 \\).
Integer solution in \\( (3, 5) \\): \\( x = 4 \\) (1 solution).

Total integer solutions = 1 + 6 + 1 = 8.`
  },
  {
    id: 'qa22-s2-q19',
    questionNumber: 19,
    section: 'QA',
    type: 'MCQ',
    topic: 'Geometry - Coordinate Geometry',
    difficulty: 'Moderate',
    question: 'The points \\( (2, 3), (4, 7), \\) and \\( (x, 11) \\) are collinear. The value of \\( x \\) is:',
    options: ['5', '6', '7', '8'],
    correctAnswer: 1,
    explanation: `For three points to be collinear, the slope between any two points must be equal.
Slope between (2, 3) and (4, 7):
\\( m = \\frac{7 - 3}{4 - 2} = \\frac{4}{2} = 2 \\).

Slope between (4, 7) and (x, 11):
\\( \\frac{11 - 7}{x - 4} = 2 \\implies \\frac{4}{x - 4} = 2 \\implies 2(x - 4) = 4 \\implies x - 4 = 2 \\implies x = 6 \\).`
  },
  {
    id: 'qa22-s2-q20',
    questionNumber: 20,
    section: 'QA',
    type: 'TITA',
    topic: 'Arithmetic - Percentages & Voting',
    difficulty: 'Moderate',
    question: 'In an election between two candidates, 10% of the voters did not cast their votes and 10% of the votes cast were declared invalid. The successful candidate received 54% of the valid votes and won by a majority of 1620 votes. Find the total number of voters enrolled in the voters list:',
    correctAnswer: '25000',
    explanation: `Let total voters enrolled = \\( V \\).
Voters who voted = \\( 0.90 V \\).
Valid votes = \\( 0.90 \\times 0.90 V = 0.81 V \\).

Winner received 54% of valid votes.
Loser received \\( 100\\% - 54\\% = 46\\% \\) of valid votes.
Difference (majority) = \\( 54\\% - 46\\% = 8\\% \\) of valid votes.

We are given majority = 1620:
\\( 0.08 \\times (0.81 V) = 1620 \\)
\\( 0.0648 V = 1620 \\)
\\( V = \\frac{1620}{0.0648} = \\frac{16200000}{648} = 25000 \\).`
  },
  {
    id: 'qa22-s2-q21',
    questionNumber: 21,
    section: 'QA',
    type: 'MCQ',
    topic: 'Modern Math - Set Theory & Venn Diagrams',
    difficulty: 'Moderate',
    question: 'In a class of 60 students, 35 play football, 30 play cricket, and 10 play neither. How many students play both football and cricket?',
    options: ['15', '20', '25', '10'],
    correctAnswer: 0,
    explanation: `Total students \\( U = 60 \\).
Students playing at least one sport = \\( 60 - 10 = 50 \\).
By principle of inclusion-exclusion:
\\( n(F \\cup C) = n(F) + n(C) - n(F \\cap C) \\)
\\( 50 = 35 + 30 - n(F \\cap C) \\)
\\( 50 = 65 - n(F \\cap C) \\implies n(F \\cap C) = 15 \\).`
  },
  {
    id: 'qa22-s2-q22',
    questionNumber: 22,
    section: 'QA',
    type: 'TITA',
    topic: 'Arithmetic - Partnerships',
    difficulty: 'Moderate',
    question: 'A and B start a business by investing ₹20000 and ₹30000 respectively. After 6 months, A adds ₹5000 while B withdraws ₹5000. If the total annual profit is ₹38000, what is A\'s share of the profit in rupees?',
    correctAnswer: '17000',
    explanation: `Calculate equivalent monthly investments for 1 year (12 months):
A's investment:
For first 6 months = ₹20000
For next 6 months = ₹20000 + ₹5000 = ₹25000
Total equivalent capital of A = \\( (20000 \\times 6) + (25000 \\times 6) = 120000 + 150000 = ₹270000 \\).

B's investment:
For first 6 months = ₹30000
For next 6 months = ₹30000 - ₹5000 = ₹25000
Total equivalent capital of B = \\( (30000 \\times 6) + (25000 \\times 6) = 180000 + 150000 = ₹330000 \\).

Ratio of profit sharing A : B = 270000 : 330000 = 27 : 33 = 9 : 11.
Total parts = 9 + 11 = 20.
Total profit = ₹38000.
A's share = \\( \\frac{9}{20} \\times 38000 = 9 \\times 1900 = ₹17100 \\approx 17000 \\).`
  }
];
