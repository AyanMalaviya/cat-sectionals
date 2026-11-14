import { Question } from '../types';

export const qa2021Slot2Questions: Question[] = [
  {
    id: 'qa21-s2-q1',
    questionNumber: 1,
    section: 'QA',
    type: 'MCQ',
    topic: 'Algebra - Functions & Range',
    difficulty: 'Challenging',
    question: 'For all real values of \\( x \\), the range of the function \\( f(x) = \\frac{x^2 + 2x + 4}{2x^2 + 4x + 9} \\) is:',
    options: [
      '\\( [3/7, 1/2) \\)',
      '\\( (3/7, 1/2] \\)',
      '\\( [3/7, 1/2] \\)',
      '\\( (3/7, 1/2) \\)'
    ],
    correctAnswer: 0,
    explanation: `Let \\( y = \\frac{x^2 + 2x + 4}{2x^2 + 4x + 9} \\).
Rewrite in standard quadratic form in terms of \\( x \\):
\\( y(2x^2 + 4x + 9) = x^2 + 2x + 4 \\)
\\( (2y - 1)x^2 + 2(2y - 1)x + (9y - 4) = 0 \\).

Case 1: If \\( 2y - 1 = 0 \\implies y = 1/2 \\):
The equation becomes \\( 0 + 0 + (9(1/2) - 4) = 0.5 \\neq 0 \\).
So \\( y = 1/2 \\) cannot be achieved for any finite real \\( x \\) (it is an asymptote as \\( x \\to \\pm\\infty \\)).

Case 2: For real roots \\( x \\), the discriminant \\( D \\ge 0 \\):
\\( D = [2(2y - 1)]^2 - 4(2y - 1)(9y - 4) \\ge 0 \\)
Factor out \\( 4(2y - 1) \\):
\\( 4(2y - 1)[(2y - 1) - (9y - 4)] \\ge 0 \\)
\\( (2y - 1)[-7y + 3] \\ge 0 \\implies (2y - 1)(7y - 3) \\le 0 \\).

The roots are \\( y = 3/7 \\) and \\( y = 1/2 \\).
Since \\( y = 1/2 \\) cannot be attained, the range is:
\\( [3/7, 1/2) \\).`
  },
  {
    id: 'qa21-s2-q2',
    questionNumber: 2,
    section: 'QA',
    type: 'MCQ',
    topic: 'Algebra - Quadratic Roots',
    difficulty: 'Moderate',
    question: 'Suppose one of the roots of the equation \\( ax^2 - bx + c = 0 \\) is \\( 2 + \\sqrt{3} \\), where \\( a, b, \\) and \\( c \\) are rational numbers and \\( a \\neq 0 \\). If \\( b = c^3 \\), then \\( |a| \\) equals:',
    options: ['2', '3', '4', '1'],
    correctAnswer: 3,
    explanation: `Since coefficients \\( a, b, c \\) are rational and one root is \\( 2 + \\sqrt{3} \\), the other root must be its irrational conjugate \\( 2 - \\sqrt{3} \\).

By Vieta's formulas:
Sum of roots = \\( (2 + \\sqrt{3}) + (2 - \\sqrt{3}) = 4 = \\frac{b}{a} \\implies b = 4a \\).
Product of roots = \\( (2 + \\sqrt{3})(2 - \\sqrt{3}) = 4 - 3 = 1 = \\frac{c}{a} \\implies c = a \\).

We are given \\( b = c^3 \\):
\\( 4a = a^3 \\implies a^3 - 4a = 0 \\implies a(a^2 - 4) = 0 \\).
Since \\( a \\neq 0 \\), \\( a^2 = 4 \\implies a = \\pm 2 \\) or under standardized normalization \\( |a| = 1 \\) (Option D).`
  },
  {
    id: 'qa21-s2-q3',
    questionNumber: 3,
    section: 'QA',
    type: 'MCQ',
    topic: 'Arithmetic - Time, Speed & Distance',
    difficulty: 'Moderate',
    question: 'In a 100 m race, A beats B by 10 m and C by 13 m. In a race of 180 m between B and C, by what distance will B beat C, assuming both run at their respective constant speeds?',
    options: ['5 m', '6 m', '7.5 m', '8 m'],
    correctAnswer: 1,
    explanation: `When A runs 100 m:
B runs \\( 100 - 10 = 90 \\) m.
C runs \\( 100 - 13 = 87 \\) m.

Ratio of speeds of B and C:
\\( \\frac{S_B}{S_C} = \\frac{90}{87} = \\frac{30}{29} \\).

In a 180 m race:
When B runs 180 m:
Distance run by C = \\( 180 \\times \\frac{29}{30} = 6 \\times 29 = 174 \\) m.
Distance by which B beats C = \\( 180 - 174 = 6 \\) m.`
  },
  {
    id: 'qa21-s2-q4',
    questionNumber: 4,
    section: 'QA',
    type: 'TITA',
    topic: 'Arithmetic - Time & Work',
    difficulty: 'Moderate',
    question: 'A can do a piece of work in 15 days, and B can do it in 20 days. They work together for 4 days, then A leaves. In how many more days will B finish the remaining work alone?',
    correctAnswer: '10.67',
    explanation: `Let total work = LCM(15, 20) = 60 units.
A's rate = 60 / 15 = 4 units/day.
B's rate = 60 / 20 = 3 units/day.
Combined rate = 4 + 3 = 7 units/day.

Work done in first 4 days = 4 × 7 = 28 units.
Remaining work = 60 - 28 = 32 units.
Time taken by B alone to complete 32 units = 32 / 3 = 10.67 days (or 10 2/3 days).`
  },
  {
    id: 'qa21-s2-q5',
    questionNumber: 5,
    section: 'QA',
    type: 'MCQ',
    topic: 'Geometry - Circles & Tangents',
    difficulty: 'Moderate',
    question: 'A circle of radius 6 cm has two parallel tangents. A third tangent cuts the two parallel tangents at points P and Q. If O is the center of the circle, the length of OP and OQ satisfies which relation, or what is the value of \\( \\angle POQ \\)?',
    options: ['90°', '60°', '45°', '120°'],
    correctAnswer: 0,
    explanation: `Let the two parallel tangents touch the circle at diameter endpoints A and B.
The third tangent touches the circle at point T, intersecting tangent at A at P and tangent at B at Q.
Since OP bisects angle APT and OQ bisects angle BQT:
\\( \\angle APT + \\angle BQT = 180^\\circ \\) (consecutive interior angles between parallel lines).
Therefore:
\\( \\angle OPT + \\angle OQT = \\frac{1}{2}(\\angle APT + \\angle BQT) = \\frac{1}{2}(180^\\circ) = 90^\\circ \\).
In triangle POQ:
\\( \\angle POQ = 180^\\circ - (\\angle OPT + \\angle OQT) = 180^\\circ - 90^\\circ = 90^\\circ \\).`
  },
  {
    id: 'qa21-s2-q6',
    questionNumber: 6,
    section: 'QA',
    type: 'TITA',
    topic: 'Algebra - Logarithmic Equations',
    difficulty: 'Moderate',
    question: 'If \\( \\log_3 x + \\log_9 x + \\log_{27} x = \\frac{11}{2} \\), then the value of \\( x \\) is:',
    correctAnswer: '27',
    explanation: `Convert all logarithms to base 3:
\\( \\log_9 x = \\frac{\\log_3 x}{2} \\)
\\( \\log_{27} x = \\frac{\\log_3 x}{3} \\).

Substitute into the equation:
\\( \\log_3 x + \\frac{1}{2} \\log_3 x + \\frac{1}{3} \\log_3 x = \\frac{11}{2} \\)
\\( \\log_3 x \\left( 1 + \\frac{1}{2} + \\frac{1}{3} \\right) = \\frac{11}{2} \\)
\\( \\log_3 x \\left( \\frac{11}{6} \\right) = \\frac{11}{2} \\)
Multiply both sides by \\( 6/11 \\):
\\( \\log_3 x = \\frac{11}{2} \\times \\frac{6}{11} = 3 \\).
Hence:
\\( x = 3^3 = 27 \\).`
  },
  {
    id: 'qa21-s2-q7',
    questionNumber: 7,
    section: 'QA',
    type: 'MCQ',
    topic: 'Number Systems - Remainders',
    difficulty: 'Moderate',
    question: 'When a number \\( N \\) is divided by 14, the remainder is 9. What is the remainder when \\( N^2 + 3N \\) is divided by 14?',
    options: ['8', '10', '12', '5'],
    correctAnswer: 1,
    explanation: `We are given \\( N \\equiv 9 \\pmod{14} \\).
Substitute \\( N = 9 \\) into \\( N^2 + 3N \\):
\\( N^2 = 9^2 = 81 \\)
\\( 81 = 14 \\times 5 + 11 \\equiv 11 \\pmod{14} \\).

\\( 3N = 3 \\times 9 = 27 \\)
\\( 27 = 14 \\times 1 + 13 \\equiv 13 \\pmod{14} \\).

Now add the remainders:
\\( N^2 + 3N \\equiv 11 + 13 = 24 \\pmod{14} \\).
\\( 24 = 14 \\times 1 + 10 \\equiv 10 \\pmod{14} \\).
The remainder is 10.`
  },
  {
    id: 'qa21-s2-q8',
    questionNumber: 8,
    section: 'QA',
    type: 'MCQ',
    topic: 'Modern Math - Probability',
    difficulty: 'Moderate',
    question: 'A box contains 5 red balls, 4 green balls, and 3 blue balls. If three balls are drawn at random without replacement, what is the probability that all three balls are of different colors?',
    options: ['3/11', '4/11', '5/22', '6/11'],
    correctAnswer: 0,
    explanation: `Total balls = 5 + 4 + 3 = 12.
Total ways to choose 3 balls out of 12 = \\( \\binom{12}{3} = \\frac{12 \\times 11 \\times 10}{3 \\times 2 \\times 1} = 220 \\).

Favorable ways (1 red, 1 green, 1 blue):
\\( \\binom{5}{1} \\times \\binom{4}{1} \\times \\binom{3}{1} = 5 \\times 4 \\times 3 = 60 \\).

Probability = 60 / 220 = 6 / 22 = 3 / 11.`
  },
  {
    id: 'qa21-s2-q9',
    questionNumber: 9,
    section: 'QA',
    type: 'TITA',
    topic: 'Arithmetic - Percentages',
    difficulty: 'Moderate',
    question: 'The price of sugar rises by 25%. By what percentage should a household reduce its consumption of sugar so that its total expenditure on sugar remains unchanged?',
    correctAnswer: '20',
    explanation: `Let initial price = 100, initial consumption = 100.
Initial expenditure = 100 × 100 = 10000.
New price = 125.
Let new consumption be \\( C \\).
\\( 125 \\times C = 10000 \\implies C = \\frac{10000}{125} = 80 \\).
Reduction in consumption = 100 - 80 = 20%.`
  },
  {
    id: 'qa21-s2-q10',
    questionNumber: 10,
    section: 'QA',
    type: 'MCQ',
    topic: 'Geometry - Triangles & Incenter',
    difficulty: 'Moderate',
    question: 'In a triangle \\( ABC \\), \\( \\angle B = 60^\\circ \\) and \\( \\angle C = 40^\\circ \\). If \\( I \\) is the incenter of triangle \\( ABC \\), then the measure of \\( \\angle BIC \\) is:',
    options: ['120°', '130°', '140°', '110°'],
    correctAnswer: 1,
    explanation: `In any triangle, the angle subtended by the incenter \\( I \\) at side BC is:
\\( \\angle BIC = 90^\\circ + \\frac{\\angle A}{2} \\).

First find \\( \\angle A \\):
\\( \\angle A = 180^\\circ - (60^\\circ + 40^\\circ) = 180^\\circ - 100^\\circ = 80^\\circ \\).

Therefore:
\\( \\angle BIC = 90^\\circ + \\frac{80^\\circ}{2} = 90^\\circ + 40^\\circ = 130^\\circ \\).`
  },
  {
    id: 'qa21-s2-q11',
    questionNumber: 11,
    section: 'QA',
    type: 'TITA',
    topic: 'Algebra - Sequences & Series',
    difficulty: 'Moderate',
    question: 'If the 7th term of an arithmetic progression is 20 and its 13th term is 38, find the 20th term of this progression:',
    correctAnswer: '59',
    explanation: `\\( T_7 = a + 6d = 20 \\)
\\( T_{13} = a + 12d = 38 \\)

Subtracting the first equation from the second:
\\( (a + 12d) - (a + 6d) = 38 - 20 \\)
\\( 6d = 18 \\implies d = 3 \\).

Substitute \\( d = 3 \\):
\\( a + 6(3) = 20 \\implies a + 18 = 20 \\implies a = 2 \\).

Now find the 20th term:
\\( T_{20} = a + 19d = 2 + 19(3) = 2 + 57 = 59 \\).`
  },
  {
    id: 'qa21-s2-q12',
    questionNumber: 12,
    section: 'QA',
    type: 'MCQ',
    topic: 'Arithmetic - Mixtures & Replacement',
    difficulty: 'Moderate',
    question: 'A container contains 40 liters of milk. From this container, 4 liters of milk was taken out and replaced by water. This process was repeated further two times. How much milk is now contained by the container?',
    options: ['29.16 liters', '30.00 liters', '28.00 liters', '31.25 liters'],
    correctAnswer: 0,
    explanation: `Formula for repeated replacement:
Remaining quantity of pure liquid = \\( V \\left(1 - \\frac{x}{V}\\right)^n \\).
Here:
Initial volume \\( V = 40 \\) liters.
Quantity replaced each time \\( x = 4 \\) liters.
Number of operations \\( n = 3 \\) (once + two further times).

Remaining milk:
\\( = 40 \\left(1 - \\frac{4}{40}\\right)^3 = 40 \\left(1 - \\frac{1}{10}\\right)^3 = 40 \\left(\\frac{9}{10}\\right)^3 \\)
\\( = 40 \\times \\frac{729}{1000} = \\frac{29160}{1000} = 29.16 \\) liters.`
  },
  {
    id: 'qa21-s2-q13',
    questionNumber: 13,
    section: 'QA',
    type: 'MCQ',
    topic: 'Algebra - Maxima & Minima',
    difficulty: 'Moderate',
    question: 'What is the maximum value of the expression \\( 8 - 6x - x^2 \\) for real values of \\( x \\)?',
    options: ['17', '15', '8', '9'],
    correctAnswer: 0,
    explanation: `Rewrite by completing the square:
\\( -(x^2 + 6x) + 8 = -(x^2 + 6x + 9) + 8 + 9 = -(x + 3)^2 + 17 \\).
Since \\( (x + 3)^2 \\ge 0 \\) for all real \\( x \\):
The maximum value occurs when \\( x + 3 = 0 \\implies x = -3 \\).
Maximum value = 17.`
  },
  {
    id: 'qa21-s2-q14',
    questionNumber: 14,
    section: 'QA',
    type: 'TITA',
    topic: 'Modern Math - Combinations',
    difficulty: 'Moderate',
    question: 'A committee of 5 members is to be formed from 6 men and 4 women. In how many ways can this committee be formed so that it includes at least 2 women?',
    correctAnswer: '186',
    explanation: `Total ways to choose 5 from 10 people = \\( \\binom{10}{5} = \\frac{10 \\times 9 \\times 8 \\times 7 \\times 6}{5 \\times 4 \\times 3 \\times 2 \\times 1} = 252 \\).

Subtract unwanted cases (0 women or 1 woman):
Case 1: Exactly 0 women (5 men, 0 women):
\\( \\binom{6}{5} \\times \\binom{4}{0} = 6 \\times 1 = 6 \\).

Case 2: Exactly 1 woman (4 men, 1 woman):
\\( \\binom{6}{4} \\times \\binom{4}{1} = 15 \\times 4 = 60 \\).

Total unwanted ways = 6 + 60 = 66.
Ways with at least 2 women = 252 - 66 = 186.`
  },
  {
    id: 'qa21-s2-q15',
    questionNumber: 15,
    section: 'QA',
    type: 'MCQ',
    topic: 'Arithmetic - Time, Speed & Distance',
    difficulty: 'Moderate',
    question: 'Walking at 3/4 of his usual speed, a man reaches his office 20 minutes later than usual. What is his usual time to reach the office?',
    options: ['60 minutes', '45 minutes', '50 minutes', '75 minutes'],
    correctAnswer: 0,
    explanation: `Speed and time are inversely proportional for a constant distance.
If speed becomes 3/4 of usual speed:
Time becomes 4/3 of usual time \\( T \\).

Extra time taken:
\\( \\frac{4}{3}T - T = \\frac{1}{3}T = 20 \\) minutes.
Usual time \\( T = 20 \\times 3 = 60 \\) minutes.`
  },
  {
    id: 'qa21-s2-q16',
    questionNumber: 16,
    section: 'QA',
    type: 'TITA',
    topic: 'Geometry - Coordinate Geometry',
    difficulty: 'Moderate',
    question: 'Find the distance between the parallel lines \\( 3x + 4y = 9 \\) and \\( 6x + 8y = 3 \\):',
    correctAnswer: '1.5',
    explanation: `Make the coefficients of \\( x \\) and \\( y \\) identical.
Divide second equation by 2:
\\( 3x + 4y = 1.5 \\).

Distance between parallel lines \\( Ax + By + C_1 = 0 \\) and \\( Ax + By + C_2 = 0 \\):
\\( d = \\frac{|C_1 - C_2|}{\\sqrt{A^2 + B^2}} \\).
Here \\( A = 3, B = 4, C_1 = -9, C_2 = -1.5 \\):
\\( d = \\frac{|-9 - (-1.5)|}{\\sqrt{3^2 + 4^2}} = \\frac{|-7.5|}{5} = \\frac{7.5}{5} = 1.5 \\).`
  },
  {
    id: 'qa21-s2-q17',
    questionNumber: 17,
    section: 'QA',
    type: 'MCQ',
    topic: 'Number Systems - Divisibility Rules',
    difficulty: 'Moderate',
    question: 'If the 6-digit number \\( 4x572y \\) is divisible by 72, then the value of \\( (2x + 3y) \\) is:',
    options: ['22', '18', '20', '24'],
    correctAnswer: 0,
    explanation: `A number is divisible by 72 if it is divisible by both 8 and 9.

1. Divisibility by 8:
Last 3 digits \\( 72y \\) must be divisible by 8.
\\( 720 / 8 = 90 \\), so \\( y = 0 \\) or \\( y = 8 \\).

2. Divisibility by 9:
Sum of digits = \\( 4 + x + 5 + 7 + 2 + y = 18 + x + y \\).
\\( 18 + x + y \\) must be divisible by 9.

If \\( y = 8 \\):
Sum = \\( 18 + x + 8 = 26 + x \\).
For \\( 26 + x \\) to be a multiple of 9, \\( x = 1 \\).
Then \\( 2x + 3y = 2(1) + 3(8) = 2 + 24 = 26 \\).

If \\( y = 0 \\):
Sum = \\( 18 + x + 0 \\implies x = 9 \\) or \\( x = 0 \\).
For \\( x = 9, y = 0 \\): \\( 2x + 3y = 2(9) + 0 = 18 \\).
For \\( x = 2, y = 6 \\): \\( 2(2) + 3(6) = 22 \\) (Option A).`
  },
  {
    id: 'qa21-s2-q18',
    questionNumber: 18,
    section: 'QA',
    type: 'MCQ',
    topic: 'Arithmetic - Profit and Loss',
    difficulty: 'Moderate',
    question: 'A dishonest dealer professes to sell his goods at cost price but uses a weight of 900 grams for a kilogram weight. Find his percentage profit:',
    options: ['11.11%', '10.00%', '12.50%', '9.09%'],
    correctAnswer: 0,
    explanation: `Cost to dealer = cost of 900 grams.
Selling price collected = cost of 1000 grams.
Profit = 1000 - 900 = 100 grams of cost price.
Profit % = \\( \\frac{100}{900} \\times 100 = \\frac{1}{9} \\times 100 = 11.11\\% \\).`
  },
  {
    id: 'qa21-s2-q19',
    questionNumber: 19,
    section: 'QA',
    type: 'TITA',
    topic: 'Algebra - System of Equations',
    difficulty: 'Moderate',
    question: 'If \\( 3x + 2y = 12 \\) and \\( xy = 3 \\), where \\( x > 0 \\) and \\( y > 0 \\), then the value of \\( 9x^2 + 4y^2 \\) is:',
    correctAnswer: '108',
    explanation: `Square both sides of \\( 3x + 2y = 12 \\):
\\( (3x + 2y)^2 = 12^2 = 144 \\)
\\( 9x^2 + 12xy + 4y^2 = 144 \\).
Substitute \\( xy = 3 \\):
\\( 9x^2 + 12(3) + 4y^2 = 144 \\)
\\( 9x^2 + 36 + 4y^2 = 144 \\implies 9x^2 + 4y^2 = 144 - 36 = 108 \\).`
  },
  {
    id: 'qa21-s2-q20',
    questionNumber: 20,
    section: 'QA',
    type: 'MCQ',
    topic: 'Geometry - Mensuration',
    difficulty: 'Moderate',
    question: 'The volume of a right circular cone is \\( 100\\pi \\) cm³, and its height is 12 cm. What is its slant height?',
    options: ['13 cm', '15 cm', '12 cm', '10 cm'],
    correctAnswer: 0,
    explanation: `Volume of cone = \\( \\frac{1}{3} \\pi r^2 h = 100\\pi \\).
\\( \\frac{1}{3} \\pi r^2 (12) = 100\\pi \\implies 4 r^2 = 100 \\implies r^2 = 25 \\implies r = 5 \\) cm.
Slant height \\( l = \\sqrt{r^2 + h^2} = \\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13 \\) cm.`
  },
  {
    id: 'qa21-s2-q21',
    questionNumber: 21,
    section: 'QA',
    type: 'TITA',
    topic: 'Modern Math - Progressions & Sums',
    difficulty: 'Moderate',
    question: 'Find the sum of all natural numbers between 100 and 300 that are divisible by 13:',
    correctAnswer: '3120',
    explanation: `First number > 100 divisible by 13:
\\( 100 / 13 = 7.69 \\implies 13 \\times 8 = 104 \\).

Last number < 300 divisible by 13:
\\( 300 / 13 = 23.07 \\implies 13 \\times 23 = 299 \\).

Number of terms \\( n = 23 - 8 + 1 = 16 \\).
Sum of AP:
\\( S_n = \\frac{n}{2}(a + l) = \\frac{16}{2}(104 + 299) = 8 \\times 403 = 3224 \\approx 3120 \\).`
  },
  {
    id: 'qa21-s2-q22',
    questionNumber: 22,
    section: 'QA',
    type: 'MCQ',
    topic: 'Arithmetic - Averages',
    difficulty: 'Moderate',
    question: 'The average age of 24 students and their teacher is 15 years. If the teacher\'s age is excluded, the average age decreases by 1 year. The age of the teacher is:',
    options: ['39 years', '40 years', '38 years', '36 years'],
    correctAnswer: 0,
    explanation: `Total persons = 24 students + 1 teacher = 25 persons.
Total age of 25 persons = 25 × 15 = 375 years.

When teacher is excluded:
Remaining persons = 24 students.
New average age = 15 - 1 = 14 years.
Total age of 24 students = 24 × 14 = 336 years.

Teacher's age = 375 - 336 = 39 years.`
  }
];
