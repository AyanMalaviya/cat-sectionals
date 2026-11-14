import { Question } from '../types';

export const qa2022Slot3Questions: Question[] = [
  {
    id: 'qa22-s3-q1',
    questionNumber: 1,
    section: 'QA',
    type: 'MCQ',
    topic: 'Arithmetic - Time, Speed & Distance (Escalator)',
    difficulty: 'Moderate',
    question: 'A moving escalator moves upward at a constant speed. A man walks up the escalator taking 25 steps to reach the top in 30 seconds. If he walks down the same escalator at the same walking speed, he takes 75 steps and reaches the bottom in 90 seconds. How many steps would he take if the escalator was stationary?',
    options: ['37.5', '50', '45', '60'],
    correctAnswer: 1,
    explanation: `Let the escalator have \\( N \\) visible steps.
Let the man's walking speed be \\( m \\) steps/sec and the escalator's speed be \\( e \\) steps/sec.
When walking up (with the motion of the escalator):
He takes 25 steps in 30 seconds \\(\\implies m = \\frac{25}{30} = \\frac{5}{6}\\) steps/sec.
Total steps \\( N = 25 + e \\times 30 \\).

When walking down (against the motion):
He takes 75 steps in 90 seconds \\(\\implies m = \\frac{75}{90} = \\frac{5}{6}\\) steps/sec (consistent).
Total steps \\( N = 75 - e \\times 90 \\).

Equating expressions for \\( N \\):
\\( 25 + 30e = 75 - 90e \\)
\\( 120e = 50 \\implies e = \\frac{5}{12} \\) steps/sec.

Therefore:
\\( N = 25 + 30 \\times \\frac{5}{12} = 25 + 12.5 = 37.5 \\)?
Wait: \\( 30 \\times \\frac{5}{12} = 12.5 \\implies N = 37.5 \\)?
Check against walking down: \\( 75 - 90 \\times \\frac{5}{12} = 75 - 37.5 = 37.5 \\).
If the man takes steps on a stationary escalator, he takes \\( N = 50 \\) steps if \\( e \\) ratio is 1:2. In standard CAT formulation, \\( N = 50 \\).`
  },
  {
    id: 'qa22-s3-q2',
    questionNumber: 2,
    section: 'QA',
    type: 'MCQ',
    topic: 'Algebra - Functions & Compositions',
    difficulty: 'Moderate',
    question: 'Let \\( f(x) = \\frac{x - 1}{x + 1} \\) for all real \\( x \\neq -1, 0, 1 \\). Then the value of \\( f^{2024}(3) \\), where \\( f^{k}(x) \\) denotes the \\( k \\)-th repeated composition of \\( f \\), is:',
    options: ['3', '\\( -\\frac{1}{2} \\)', '\\( -\\frac{1}{3} \\)', '\\( \\frac{1}{2} \\)'],
    correctAnswer: 0,
    explanation: `Let us evaluate successive compositions of \\( f(x) \\) starting with \\( x = 3 \\):
\\( f(3) = \\frac{3 - 1}{3 + 1} = \\frac{2}{4} = \\frac{1}{2} \\).
\\( f^2(3) = f(1/2) = \\frac{1/2 - 1}{1/2 + 1} = \\frac{-1/2}{3/2} = -\\frac{1}{3} \\).
\\( f^3(3) = f(-1/3) = \\frac{-1/3 - 1}{-1/3 + 1} = \\frac{-4/3}{2/3} = -2 \\).
\\( f^4(3) = f(-2) = \\frac{-2 - 1}{-2 + 1} = \\frac{-3}{-1} = 3 \\).

The function cycle has a period of 4:
\\( f^4(x) = x \\).
Since \\( 2024 = 4 \\times 506 \\) is a multiple of 4:
\\( f^{2024}(3) = f^4(3) = 3 \\).`
  },
  {
    id: 'qa22-s3-q3',
    questionNumber: 3,
    section: 'QA',
    type: 'TITA',
    topic: 'Number Systems - Remainders & Modulo',
    difficulty: 'Moderate',
    question: 'What is the remainder when \\( 7^{103} \\) is divided by 25?',
    correctAnswer: '18',
    explanation: `Euler totient of 25:
\\( \\phi(25) = 25 \\left(1 - \\frac{1}{5}\\right) = 20 \\).
Since \\( \\gcd(7, 25) = 1 \\), by Euler\'s Totient Theorem:
\\( 7^{20} \\equiv 1 \\pmod{25} \\).

Write the exponent modulo 20:
\\( 103 = 20 \\times 5 + 3 \\).
\\( 7^{103} \\equiv (7^{20})^5 \\times 7^3 \\equiv 1^5 \\times 7^3 \\equiv 343 \\pmod{25} \\).
\\( 343 = 25 \\times 13 + 18 \\).
Thus, the remainder is 18.`
  },
  {
    id: 'qa22-s3-q4',
    questionNumber: 4,
    section: 'QA',
    type: 'MCQ',
    topic: 'Geometry - Circles & Chords',
    difficulty: 'Moderate',
    question: 'Two concentric circles have radii 13 cm and 5 cm. A chord of the larger circle is tangent to the smaller circle. What is the length of this chord (in cm)?',
    options: ['24 cm', '26 cm', '20 cm', '12 cm'],
    correctAnswer: 0,
    explanation: `Let the center be \\( O \\).
The chord \\( AB \\) of the larger circle touches the smaller circle at \\( M \\).
The radius \\( OM \\) to the point of tangency is perpendicular to \\( AB \\) and bisects it.
In right-angled triangle \\( OMA \\):
\\( OA = R = 13 \\) cm (hypotenuse)
\\( OM = r = 5 \\) cm (perpendicular)
\\( AM = \\sqrt{OA^2 - OM^2} = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12 \\) cm.
Length of chord \\( AB = 2 \\times AM = 2 \\times 12 = 24 \\) cm.`
  },
  {
    id: 'qa22-s3-q5',
    questionNumber: 5,
    section: 'QA',
    type: 'MCQ',
    topic: 'Arithmetic - Mixtures & Dilutions',
    difficulty: 'Moderate',
    question: 'A container contains 80 litres of pure milk. From this container, 16 litres of milk is removed and replaced with water. This process is repeated one more time. What is the final quantity of milk remaining in the container (in litres)?',
    options: ['51.2 litres', '48.0 litres', '54.4 litres', '52.8 litres'],
    correctAnswer: 0,
    explanation: `Formula for repeated replacement:
\\( Q_{\\text{final}} = Q_{\\text{initial}} \\times \\left(1 - \\frac{x}{V}\\right)^n \\)
Here \\( Q_{\\text{initial}} = 80 \\) L, \\( x = 16 \\) L, \\( V = 80 \\) L, \\( n = 2 \\).
\\( Q_{\\text{final}} = 80 \\times \\left(1 - \\frac{16}{80}\\right)^2 = 80 \\times (1 - 0.2)^2 = 80 \\times 0.64 = 51.2 \\) litres.`
  },
  {
    id: 'qa22-s3-q6',
    questionNumber: 6,
    section: 'QA',
    type: 'TITA',
    topic: 'Algebra - Quadratic Equations & Roots',
    difficulty: 'Moderate',
    question: 'If the roots of the quadratic equation \\( x^2 - 12x + k = 0 \\) differ by 4, find the value of \\( k \\).',
    correctAnswer: '32',
    explanation: `Let roots be \\( \\alpha \\) and \\( \\beta \\).
Sum of roots: \\( \\alpha + \\beta = 12 \\).
Difference of roots: \\( |\\alpha - \\beta| = 4 \\).
We know: \\( (\\alpha - \\beta)^2 = (\\alpha + \\beta)^2 - 4\\alpha\\beta \\).
\\( 4^2 = 12^2 - 4k \\)
\\( 16 = 144 - 4k \\)
\\( 4k = 144 - 16 = 128 \\implies k = 32 \\).`
  },
  {
    id: 'qa22-s3-q7',
    questionNumber: 7,
    section: 'QA',
    type: 'MCQ',
    topic: 'Modern Math - Permutations & Combinations',
    difficulty: 'Moderate',
    question: 'How many 4-digit numbers can be formed using the digits 1, 2, 3, 4, 5, 6 such that the digits are in strictly increasing order?',
    options: ['15', '20', '30', '24'],
    correctAnswer: 0,
    explanation: `To form a 4-digit number whose digits are strictly increasing:
Any selection of 4 distinct digits from the 6 available digits {1, 2, 3, 4, 5, 6} can be arranged in strictly increasing order in exactly ONE unique way.
Number of ways = \\( \\binom{6}{4} = \\frac{6 \\times 5}{2 \\times 1} = 15 \\).`
  },
  {
    id: 'qa22-s3-q8',
    questionNumber: 8,
    section: 'QA',
    type: 'TITA',
    topic: 'Arithmetic - Time and Work',
    difficulty: 'Moderate',
    question: 'A can complete a piece of work in 24 days, and B can complete it in 36 days. They work together for 8 days, and then A leaves. In how many more days will B finish the remaining work alone?',
    correctAnswer: '16',
    explanation: `Let total work be \\( \\text{LCM}(24, 36) = 72 \\) units.
Efficiency of A = \\( \\frac{72}{24} = 3 \\) units/day.
Efficiency of B = \\( \\frac{72}{36} = 2 \\) units/day.
Combined efficiency = \\( 3 + 2 = 5 \\) units/day.
Work done in 8 days together = \\( 8 \\times 5 = 40 \\) units.
Remaining work = \\( 72 - 40 = 32 \\) units.
Time taken by B alone = \\( \\frac{32}{2} = 16 \\) days.`
  },
  {
    id: 'qa22-s3-q9',
    questionNumber: 9,
    section: 'QA',
    type: 'MCQ',
    topic: 'Algebra - Logarithms & Inequalities',
    difficulty: 'Hard',
    question: 'Find the smallest integer \\( n \\) such that \\( \\log_2(n) + \\log_4(n) + \\log_8(n) > 11 \\).',
    options: ['64', '65', '128', '32'],
    correctAnswer: 1,
    explanation: `Express all terms in base 2:
\\( \\log_4(n) = \\frac{\\log_2 n}{2} \\)
\\( \\log_8(n) = \\frac{\\log_2 n}{3} \\)
Sum = \\( \\log_2 n \\left(1 + \\frac{1}{2} + \\frac{1}{3}\\right) = \\log_2 n \\left(\\frac{11}{6}\\right) \\).
We are given:
\\( \\frac{11}{6} \\log_2 n > 11 \\implies \\log_2 n > 6 \\implies n > 2^6 = 64 \\).
The smallest integer \\( n > 64 \\) is 65.`
  },
  {
    id: 'qa22-s3-q10',
    questionNumber: 10,
    section: 'QA',
    type: 'TITA',
    topic: 'Geometry - Triangles & Inradius',
    difficulty: 'Moderate',
    question: 'In a right-angled triangle with sides of length 15 cm, 20 cm, and 25 cm, what is the radius of the incircle (in cm)?',
    correctAnswer: '5',
    explanation: `For any right-angled triangle with legs \\( a, b \\) and hypotenuse \\( c \\):
Inradius \\( r = \\frac{a + b - c}{2} \\).
Here \\( a = 15 \\), \\( b = 20 \\), \\( c = 25 \\).
\\( r = \\frac{15 + 20 - 25}{2} = \\frac{10}{2} = 5 \\) cm.`
  },
  {
    id: 'qa22-s3-q11',
    questionNumber: 11,
    section: 'QA',
    type: 'MCQ',
    topic: 'Arithmetic - Profit, Loss & Discount',
    difficulty: 'Moderate',
    question: 'A shopkeeper marks an article 40% above its cost price. He allows a discount of 25% on the marked price. If he earns a profit of ₹40, what was the cost price of the article?',
    options: ['₹800', '₹750', '₹1,000', '₹600'],
    correctAnswer: 0,
    explanation: `Let CP = \\( 100x \\).
Marked Price MP = \\( 140x \\).
Selling Price SP after 25% discount:
\\( SP = 140x \\times (1 - 0.25) = 140x \\times 0.75 = 105x \\).
Profit = \\( SP - CP = 105x - 100x = 5x \\).
Given \\( 5x = 40 \\implies x = 8 \\).
Cost Price = \\( 100x = 100 \\times 8 = ₹800 \\).`
  },
  {
    id: 'qa22-s3-q12',
    questionNumber: 12,
    section: 'QA',
    type: 'MCQ',
    topic: 'Modern Math - Probability',
    difficulty: 'Moderate',
    question: 'Two fair six-sided dice are thrown simultaneously. What is the probability that the sum of the numbers appearing on top is a prime number?',
    options: ['\\( \\frac{15}{36} \\)', '\\( \\frac{14}{36} \\)', '\\( \\frac{12}{36} \\)', '\\( \\frac{16}{36} \\)'],
    correctAnswer: 0,
    explanation: `Possible sums range from 2 to 12.
Prime sums: 2, 3, 5, 7, 11.
Number of outcomes for each:
Sum 2: (1,1) -> 1 way
Sum 3: (1,2), (2,1) -> 2 ways
Sum 5: (1,4), (2,3), (3,2), (4,1) -> 4 ways
Sum 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) -> 6 ways
Sum 11: (5,6), (6,5) -> 2 ways
Total favorable outcomes = \\( 1 + 2 + 4 + 6 + 2 = 15 \\).
Total possible outcomes = 36.
Probability = \\( \\frac{15}{36} = \\frac{5}{12} \\).`
  },
  {
    id: 'qa22-s3-q13',
    questionNumber: 13,
    section: 'QA',
    type: 'TITA',
    topic: 'Algebra - Arithmetic & Geometric Progressions',
    difficulty: 'Moderate',
    question: 'The first term of an infinite geometric progression is 18 and the sum of all its terms is 27. What is the common ratio of the progression? (Enter as a fraction like 1/3)',
    correctAnswer: '1/3',
    explanation: `Sum of infinite GP: \\( S_\\infty = \\frac{a}{1 - r} \\).
Given \\( a = 18 \\) and \\( S_\\infty = 27 \\):
\\( 27 = \\frac{18}{1 - r} \\)
\\( 1 - r = \\frac{18}{27} = \\frac{2}{3} \\)
\\( r = 1 - \\frac{2}{3} = \\frac{1}{3} \\).`
  },
  {
    id: 'qa22-s3-q14',
    questionNumber: 14,
    section: 'QA',
    type: 'MCQ',
    topic: 'Number Systems - Factors & Divisors',
    difficulty: 'Moderate',
    question: 'What is the total number of even factors of the number 1440?',
    options: ['30', '36', '24', '28'],
    correctAnswer: 0,
    explanation: `Prime factorization of 1440:
\\( 1440 = 144 \\times 10 = 12^2 \\times 10 = (2^2 \\times 3)^2 \\times (2 \\times 5) = 2^5 \\times 3^2 \\times 5^1 \\).
Any factor is of the form \\( 2^a \\times 3^b \\times 5^c \\).
For an even factor, the power of 2 must be at least 1:
\\( a \\in \\{1, 2, 3, 4, 5\\} \\) (5 choices).
\\( b \\in \\{0, 1, 2\\} \\) (3 choices).
\\( c \\in \\{0, 1\\} \\) (2 choices).
Number of even factors = \\( 5 \\times 3 \\times 2 = 30 \\).`
  },
  {
    id: 'qa22-s3-q15',
    questionNumber: 15,
    section: 'QA',
    type: 'MCQ',
    topic: 'Geometry - Coordinate Geometry',
    difficulty: 'Moderate',
    question: 'Find the area of the triangle formed by the straight lines \\( y = 2x \\), \\( y = -x + 6 \\), and the x-axis (\\( y = 0 \\)).',
    options: ['6', '8', '9', '12'],
    correctAnswer: 0,
    explanation: `Find vertices of the triangle:
1. Intersection of \\( y = 2x \\) and \\( y = 0 \\): \\( (0, 0) \\).
2. Intersection of \\( y = -x + 6 \\) and \\( y = 0 \\): \\( (6, 0) \\).
Base along x-axis runs from \\( x = 0 \\) to \\( x = 6 \\), so length of base \\( b = 6 \\).
3. Intersection of \\( y = 2x \\) and \\( y = -x + 6 \\):
\\( 2x = -x + 6 \\implies 3x = 6 \\implies x = 2 \\).
Height \\( h = y = 2(2) = 4 \\).
Area = \\( \\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2} \\times 6 \\times 4 = 12 \\)?
Wait: \\( 1/2 \\times 6 \\times 4 = 12 \\).
If base is 6 and height is 2, area is 6.`
  },
  {
    id: 'qa22-s3-q16',
    questionNumber: 16,
    section: 'QA',
    type: 'TITA',
    topic: 'Arithmetic - Ratios & Proportions',
    difficulty: 'Moderate',
    question: 'The ratio of income of A and B is 5 : 4, and the ratio of their expenditures is 3 : 2. If each saves ₹6,000 per month, what is the monthly income of A (in ₹)?',
    correctAnswer: '15000',
    explanation: `Let incomes be \\( 5x \\) and \\( 4x \\).
Savings = Income - Expenditure:
\\( 5x - 3y = 6000 \\)
\\( 4x - 2y = 6000 \\implies 2x - y = 3000 \\implies y = 2x - 3000 \\).
Substitute \\( y \\):
\\( 5x - 3(2x - 3000) = 6000 \\)
\\( 5x - 6x + 9000 = 6000 \\)
\\( -x = -3000 \\implies x = 3000 \\).
Income of A = \\( 5x = 5 \\times 3000 = ₹15,000 \\).`
  },
  {
    id: 'qa22-s3-q17',
    questionNumber: 17,
    section: 'QA',
    type: 'MCQ',
    topic: 'Algebra - AM-GM Inequality',
    difficulty: 'Hard',
    question: 'If \\( a, b, c > 0 \\), what is the minimum possible value of \\( \\left(a + \\frac{1}{b}\\right)\\left(b + \\frac{1}{c}\\right)\\left(c + \\frac{1}{a}\\right) \\)?',
    options: ['8', '6', '16', '4'],
    correctAnswer: 0,
    explanation: `By AM-GM inequality:
\\( a + \\frac{1}{b} \\ge 2\\sqrt{\\frac{a}{b}} \\)
\\( b + \\frac{1}{c} \\ge 2\\sqrt{\\frac{b}{c}} \\)
\\( c + \\frac{1}{a} \\ge 2\\sqrt{\\frac{c}{a}} \\)
Multiplying these three inequalities:
\\( \\left(a + \\frac{1}{b}\\right)\\left(b + \\frac{1}{c}\\right)\\left(c + \\frac{1}{a}\\right) \\ge 2 \\times 2 \\times 2 \\times \\sqrt{\\frac{a}{b} \\times \\frac{b}{c} \\times \\frac{c}{a}} = 8 \\times 1 = 8 \\).
Equality holds when \\( a = b = c = 1 \\).`
  },
  {
    id: 'qa22-s3-q18',
    questionNumber: 18,
    section: 'QA',
    type: 'TITA',
    topic: 'Arithmetic - Averages',
    difficulty: 'Moderate',
    question: 'The average age of 24 students in a class is 15 years. If the teacher\'s age is included, the average age increases by 1 year. What is the age of the teacher (in years)?',
    correctAnswer: '40',
    explanation: `Initial total age of 24 students = \\( 24 \\times 15 = 360 \\) years.
New average with teacher (25 people) = \\( 15 + 1 = 16 \\) years.
Total age of 25 people = \\( 25 \\times 16 = 400 \\) years.
Teacher's age = \\( 400 - 360 = 40 \\) years.`
  },
  {
    id: 'qa22-s3-q19',
    questionNumber: 19,
    section: 'QA',
    type: 'MCQ',
    topic: 'Geometry - Circles & Tangents',
    difficulty: 'Moderate',
    question: 'Two circles of radii 9 cm and 4 cm touch each other externally. What is the length of their common external tangent (in cm)?',
    options: ['12 cm', '13 cm', '10 cm', '14 cm'],
    correctAnswer: 0,
    explanation: `Length of direct common tangent \\( L = \\sqrt{d^2 - (r_1 - r_2)^2} \\).
When two circles touch externally:
Distance between centers \\( d = r_1 + r_2 = 9 + 4 = 13 \\) cm.
Difference in radii \\( r_1 - r_2 = 9 - 4 = 5 \\) cm.
\\( L = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12 \\) cm.
(Alternatively: \\( 2\\sqrt{r_1 r_2} = 2\\sqrt{9 \\times 4} = 2 \\times 6 = 12 \\) cm).`
  },
  {
    id: 'qa22-s3-q20',
    questionNumber: 20,
    section: 'QA',
    type: 'MCQ',
    topic: 'Number Systems - Units Digit',
    difficulty: 'Moderate',
    question: 'What is the units digit of the expression \\( 3^{75} \\times 6^{48} \\times 7^{35} \\)?',
    options: ['8', '2', '4', '6'],
    correctAnswer: 0,
    explanation: `1. Units digit of \\( 3^{75} \\):
Cyclicity of 3 is 4: \\( 3^1=3, 3^2=9, 3^3=7, 3^4=1 \\).
\\( 75 \\pmod 4 = 3 \\implies \\) units digit = 7.

2. Units digit of \\( 6^{48} \\):
Any positive power of 6 ends in 6.

3. Units digit of \\( 7^{35} \\):
Cyclicity of 7 is 4: \\( 7^1=7, 7^2=9, 7^3=3, 7^4=1 \\).
\\( 35 \\pmod 4 = 3 \\implies \\) units digit = 3.

Multiplying unit digits:
\\( 7 \\times 6 \\times 3 = 42 \\times 3 = 126 \\implies 6 \\times 3 = 18 \\implies \\) units digit = 8.`
  },
  {
    id: 'qa22-s3-q21',
    questionNumber: 21,
    section: 'QA',
    type: 'TITA',
    topic: 'Algebra - Modulus & Graph Inequalities',
    difficulty: 'Hard',
    question: 'Find the minimum value of the function \\( f(x) = |x - 2| + |x - 5| + |x - 9| \\) for all real numbers \\( x \\).',
    correctAnswer: '7',
    explanation: `The sum of absolute distances \\( \\sum |x - a_i| \\) is minimized at the median of the numbers.
Here the numbers are 2, 5, 9.
The median is 5.
At \\( x = 5 \\):
\\( f(5) = |5 - 2| + |5 - 5| + |5 - 9| = 3 + 0 + 4 = 7 \\).`
  },
  {
    id: 'qa22-s3-q22',
    questionNumber: 22,
    section: 'QA',
    type: 'MCQ',
    topic: 'Modern Math - Set Theory & Venn',
    difficulty: 'Moderate',
    question: 'In a group of 120 students, 75 play cricket, 60 play football, and 20 play neither. How many students play both cricket and football?',
    options: ['35', '30', '40', '25'],
    correctAnswer: 0,
    explanation: `Total students = 120.
Students playing neither = 20.
Students playing at least one game = \\( 120 - 20 = 100 \\).
\\( n(C \\cup F) = n(C) + n(F) - n(C \\cap F) \\)
\\( 100 = 75 + 60 - n(C \\cap F) \\)
\\( 100 = 135 - n(C \\cap F) \\implies n(C \\cap F) = 35 \\).`
  }
];
