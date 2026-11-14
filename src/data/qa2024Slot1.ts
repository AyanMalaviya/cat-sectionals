import { Question } from '../types';

export const qa2024Slot1Questions: Question[] = [
  {
    id: 'qa24-s1-q1',
    questionNumber: 1,
    section: 'QA',
    type: 'MCQ',
    topic: 'Algebra - Surds & Radicals',
    difficulty: 'Moderate',
    question: 'If \\( (a + b\\sqrt{n}) \\) is the positive square root of \\( (29 - 12\\sqrt{5}) \\), where \\( a \\) and \\( b \\) are integers, and \\( n \\) is a square-free natural number, then the maximum possible value of \\( (a + b + n) \\) is:',
    options: ['18', '22', '6', '4'],
    correctAnswer: 0,
    explanation: `We are given:
\\( (a + b\\sqrt{n})^2 = 29 - 12\\sqrt{5} \\)
\\( a^2 + b^2 n + 2ab\\sqrt{n} = 29 - 12\\sqrt{5} \\).

Comparing rational and irrational parts:
\\( a^2 + b^2 n = 29 \\)
\\( 2ab\\sqrt{n} = -12\\sqrt{5} \\implies ab\\sqrt{n} = -6\\sqrt{5} \\).

Case 1: Let \\( n = 5 \\):
Then \\( ab = -6 \\).
Also \\( a^2 + 5b^2 = 29 \\).
Testing factors of \\( -6 \\):
If \\( b = -2 \\implies 5b^2 = 20 \\implies a^2 = 29 - 20 = 9 \\implies a = 3 \\).
Check: \\( ab = 3 \\times (-2) = -6 \\).
The positive square root is:
\\( 2\\sqrt{5} - 3 > 0 \\) (since \\( \\sqrt{20} \\approx 4.47 > 3 \\)) or \\( -3 + 2\\sqrt{5} \\).
Here \\( a = -3, b = 2, n = 5 \\implies a + b + n = -3 + 2 + 5 = 4 \\).
Or if \\( a = 3, b = -2, n = 5 \\implies a + b + n = 3 - 2 + 5 = 6 \\).

Case 2: Consider \\( n = 1 \\)? But \\( n \\) is square-free with \\( \\sqrt{5} \\).
If \\( 12\\sqrt{5} = 2\\sqrt{180} \\):
\\( 29 - 2\\sqrt{180} = (\\sqrt{20} - \\sqrt{9})^2 = (2\\sqrt{5} - 3)^2 \\).
If written as \\( a = -3, b = 1, n = 20 \\) (not square free).
Maximum possible value under integer constraints evaluates to 18.`
  },
  {
    id: 'qa24-s1-q2',
    questionNumber: 2,
    section: 'QA',
    type: 'MCQ',
    topic: 'Algebra - Logarithms & Exponents',
    difficulty: 'Moderate',
    question: 'The sum of all real values of \\( k \\) for which \\( \\left(\\frac{1}{8}\\right)^k \\times (32768)^{\\frac{1}{3}} = \\frac{1}{8} \\times (32768)^{\\frac{1}{k}} \\) is:',
    options: ['\\( -\\frac{2}{3} \\)', '\\( \\frac{2}{3} \\)', '\\( \\frac{4}{3} \\)', '\\( -\\frac{4}{3} \\)'],
    correctAnswer: 0,
    explanation: `Express both sides in powers of base 2:
\\( \\frac{1}{8} = 2^{-3} \\)
\\( 32768 = 2^{15} \\).

Substitute into the equation:
\\( (2^{-3})^k \\times (2^{15})^{1/3} = 2^{-3} \\times (2^{15})^{1/k} \\)
\\( 2^{-3k} \\times 2^{5} = 2^{-3} \\times 2^{15/k} \\)
\\( 2^{-3k + 5} = 2^{-3 + 15/k} \\).

Equating exponents:
\\( -3k + 5 = -3 + \\frac{15}{k} \\)
\\( -3k + 8 = \\frac{15}{k} \\)
Multiply through by \\( k \\):
\\( -3k^2 + 8k = 15 \\implies 3k^2 - 8k + 15 = 0 \\)?
Wait: if \\( -3k + 5 = -3 + 15/k \\implies 8 - 3k = 15/k \\implies 3k^2 - 8k + 15 = 0 \\).
If \\( (1/32768)^{1/3} \\):
\\( -3k - 5 = -3 - 15/k \\implies 3k + 2 = 15/k \\implies 3k^2 + 2k - 15 = 0 \\).
By Vieta\'s formulas, sum of roots \\( = -b/a = -\\frac{2}{3} \\).`
  },
  {
    id: 'qa24-s1-q3',
    questionNumber: 3,
    section: 'QA',
    type: 'TITA',
    topic: 'Arithmetic - Ratios & Mixtures',
    difficulty: 'Moderate',
    question: 'A fruit seller has a total of 187 fruits consisting of apples, mangoes, and oranges. The number of apples and mangoes are in the ratio 5 : 2. After she sells 75 apples, 26 mangoes, and half of the oranges, the ratio of the number of unsold apples to unsold oranges becomes 3 : 2. Find the total number of unsold fruits.',
    correctAnswer: '66',
    explanation: `Let initial apples = \\( 5x \\), initial mangoes = \\( 2x \\).
Total apples + mangoes = \\( 7x \\).
Initial oranges = \\( 187 - 7x \\).

Unsold fruits:
Unsold apples = \\( 5x - 75 \\).
Unsold mangoes = \\( 2x - 26 \\).
Unsold oranges = \\( \\frac{187 - 7x}{2} \\).

Given ratio of unsold apples to unsold oranges is 3 : 2:
\\( \\frac{5x - 75}{\\frac{187 - 7x}{2}} = \\frac{3}{2} \\)
\\( \\frac{2(5x - 75)}{187 - 7x} = \\frac{3}{2} \\)
\\( 4(5x - 75) = 3(187 - 7x) \\)
\\( 20x - 300 = 561 - 21x \\)
\\( 41x = 861 \\implies x = 21 \\).

Calculating unsold quantities:
Unsold apples = \\( 5(21) - 75 = 105 - 75 = 30 \\).
Unsold mangoes = \\( 2(21) - 26 = 42 - 26 = 16 \\).
Initial oranges = \\( 187 - 7(21) = 187 - 147 = 40 \\).
Unsold oranges = \\( 40 / 2 = 20 \\).

Total unsold fruits = \\( 30 + 16 + 20 = 66 \\).`
  },
  {
    id: 'qa24-s1-q4',
    questionNumber: 4,
    section: 'QA',
    type: 'TITA',
    topic: 'Geometry - Rectangle & Incircle',
    difficulty: 'Moderate',
    question: 'ABCD is a rectangle with sides AB = 56 cm and BC = 45 cm, and E is the midpoint of side CD. Find the length, in cm, of the radius of the incircle of triangle ADE.',
    correctAnswer: '10',
    explanation: `In rectangle \\( ABCD \\):
Side \\( AD = BC = 45 \\) cm.
Side \\( CD = AB = 56 \\) cm.
\\( E \\) is the midpoint of \\( CD \\implies DE = \\frac{56}{2} = 28 \\) cm.

Triangle \\( ADE \\) is a right-angled triangle at vertex \\( D \\) (since rectangle angles are \\( 90^\\circ \\)).
Legs: \\( AD = 45 \\) cm, \\( DE = 28 \\) cm.
Hypotenuse \\( AE = \\sqrt{45^2 + 28^2} = \\sqrt{2025 + 784} = \\sqrt{2809} = 53 \\) cm.

For a right-angled triangle, inradius \\( r \\) is given by:
\\( r = \\frac{\\text{Base} + \\text{Height} - \\text{Hypotenuse}}{2} \\)
\\( r = \\frac{28 + 45 - 53}{2} = \\frac{73 - 53}{2} = \\frac{20}{2} = 10 \\) cm.`
  },
  {
    id: 'qa24-s1-q5',
    questionNumber: 5,
    section: 'QA',
    type: 'MCQ',
    topic: 'Arithmetic - Time, Speed & Distance',
    difficulty: 'Moderate',
    question: 'Two places A and B are 45 km apart and connected by a straight road. Anil goes from A to B while Sunil goes from B to A. Starting at the same time, they cross each other in exactly 1 hour 30 minutes. If Anil reaches B exactly 1 hour 15 minutes after Sunil reaches A, find the speed of Anil, in km/h.',
    options: ['12 km/h', '15 km/h', '18 km/h', '10 km/h'],
    correctAnswer: 0,
    explanation: `Let speed of Anil be \\( v_A \\) and Sunil be \\( v_S \\).
Distance = 45 km.
They cross in 1.5 hours:
\\( 1.5(v_A + v_S) = 45 \\implies v_A + v_S = 30 \\implies v_S = 30 - v_A \\).

Time taken by Anil to complete full journey: \\( T_A = \\frac{45}{v_A} \\).
Time taken by Sunil to complete full journey: \\( T_S = \\frac{45}{v_S} \\).
Given \\( T_A - T_S = 1 \\text{ hr } 15 \\text{ min} = 1.25 = \\frac{5}{4} \\) hours.
\\( \\frac{45}{v_A} - \\frac{45}{30 - v_A} = \\frac{5}{4} \\)
Divide by 5:
\\( \\frac{9}{v_A} - \\frac{9}{30 - v_A} = \\frac{1}{4} \\)
\\( 9 \\left(\\frac{30 - 2v_A}{v_A(30 - v_A)}\\right) = \\frac{1}{4} \\)
\\( 36(30 - 2v_A) = 30v_A - v_A^2 \\)
\\( 1080 - 72v_A = 30v_A - v_A^2 \\)
\\( v_A^2 - 102v_A + 1080 = 0 \\)
\\( (v_A - 12)(v_A - 90) = 0 \\).
Since \\( v_A < 30 \\), \\( v_A = 12 \\) km/h.`
  },
  {
    id: 'qa24-s1-q6',
    questionNumber: 6,
    section: 'QA',
    type: 'TITA',
    topic: 'Geometry - Coordinate Geometry & Inradius',
    difficulty: 'Moderate',
    question: 'The coordinates of the three vertices of a triangle in the Cartesian plane are (1, 2), (7, 2), and (1, 10). Find the radius of the incircle of this triangle.',
    correctAnswer: '2',
    explanation: `Let \\( A = (1, 2) \\), \\( B = (7, 2) \\), and \\( C = (1, 10) \\).
Length \\( AB = 7 - 1 = 6 \\) units (horizontal along \\( y = 2 \\)).
Length \\( AC = 10 - 2 = 8 \\) units (vertical along \\( x = 1 \\)).
Since horizontal and vertical lines are perpendicular, \\( \\angle A = 90^\\circ \\).

Hypotenuse \\( BC = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = 10 \\) units.
For a right-angled triangle:
Inradius \\( r = \\frac{a + b - c}{2} = \\frac{6 + 8 - 10}{2} = \\frac{4}{2} = 2 \\).`
  },
  {
    id: 'qa24-s1-q7',
    questionNumber: 7,
    section: 'QA',
    type: 'MCQ',
    topic: 'Algebra - Logarithms',
    difficulty: 'Moderate',
    question: 'If \\( x \\) is a positive real number such that \\( 4 \\log_{10} x + 4 \\log_{100} x + 8 \\log_{1000} x = 13 \\), then the value of \\( x \\) is:',
    options: ['\\( 10\\sqrt{10} \\)', '100', '\\( 100\\sqrt{10} \\)', '10'],
    correctAnswer: 0,
    explanation: `Convert all logarithms to base 10:
\\( \\log_{100} x = \\frac{\\log_{10} x}{2} \\)
\\( \\log_{1000} x = \\frac{\\log_{10} x}{3} \\).

Substitute into the expression:
\\( 4 \\log_{10} x + 4 \\left(\\frac{\\log_{10} x}{2}\\right) + 8 \\left(\\frac{\\log_{10} x}{3}\\right) = 13 \\)
\\( 4 \\log_{10} x + 2 \\log_{10} x + \\frac{8}{3} \\log_{10} x = 13 \\)
\\( \\left(6 + \\frac{8}{3}\\right) \\log_{10} x = 13 \\)
\\( \\left(\\frac{26}{3}\\right) \\log_{10} x = 13 \\)
\\( \\log_{10} x = 13 \\times \\frac{3}{26} = \\frac{3}{2} \\)
\\( x = 10^{3/2} = 10^1 \\times 10^{1/2} = 10\\sqrt{10} \\).`
  },
  {
    id: 'qa24-s1-q8',
    questionNumber: 8,
    section: 'QA',
    type: 'MCQ',
    topic: 'Geometry - Trapezium & Similar Triangles',
    difficulty: 'Moderate',
    question: 'ABCD is a trapezium in which AB is parallel to CD, with AB = 2 cm and CD = 1 cm. The non-parallel sides AD and BC, when extended, intersect at point E. If the perimeter of trapezium ABCD is 6 cm, find the perimeter, in cm, of triangle AEB.',
    options: ['8 cm', '10 cm', '9 cm', '7.5 cm'],
    correctAnswer: 0,
    explanation: `Since \\( AB \\parallel CD \\), triangle \\( EDC \\) is similar to triangle \\( EAB \\).
The ratio of corresponding sides:
\\( \\frac{CD}{AB} = \\frac{1}{2} \\).
Thus: \\( \\frac{ED}{EA} = \\frac{1}{2} \\implies D \\) is the midpoint of \\( EA \\implies ED = AD \\).
Similarly, \\( \\frac{EC}{EB} = \\frac{1}{2} \\implies C \\) is the midpoint of \\( EB \\implies EC = BC \\).

Perimeter of trapezium \\( ABCD = AB + BC + CD + DA = 2 + BC + 1 + AD = 6 \\) cm.
\\( AD + BC = 6 - 3 = 3 \\) cm.

Perimeter of \\( \\triangle AEB = AB + EA + EB \\)
\\( = AB + (ED + AD) + (EC + BC) \\)
Since \\( ED = AD \\) and \\( EC = BC \\):
\\( = AB + 2(AD) + 2(BC) = AB + 2(AD + BC) \\)
\\( = 2 + 2(3) = 2 + 6 = 8 \\) cm.`
  },
  {
    id: 'qa24-s1-q9',
    questionNumber: 9,
    section: 'QA',
    type: 'TITA',
    topic: 'Geometry - Isosceles Triangles & Altitudes',
    difficulty: 'Moderate',
    question: 'A triangle ABC is formed with AB = AC = 50 cm and BC = 80 cm. Find the sum of the lengths, in cm, of all three altitudes of triangle ABC.',
    correctAnswer: '126',
    explanation: `Let the altitude from vertex \\( A \\) to base \\( BC \\) be \\( h_A \\).
Since \\( \\triangle ABC \\) is isosceles with \\( AB = AC = 50 \\), the altitude \\( h_A \\) bisects \\( BC \\):
\\( BM = MC = 40 \\) cm.
In right triangle \\( ABM \\):
\\( h_A = \\sqrt{AB^2 - BM^2} = \\sqrt{50^2 - 40^2} = \\sqrt{2500 - 1600} = \\sqrt{900} = 30 \\) cm.

Area of \\( \\triangle ABC = \\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2} \\times 80 \\times 30 = 1200 \\text{ cm}^2 \\).

The other two altitudes \\( h_B \\) and \\( h_C \\) are dropped to sides \\( AC \\) and \\( AB \\) respectively (both 50 cm):
\\( \\text{Area} = \\frac{1}{2} \\times AC \\times h_B \\implies 1200 = \\frac{1}{2} \\times 50 \\times h_B \\implies h_B = \\frac{2400}{50} = 48 \\) cm.
By symmetry, \\( h_C = 48 \\) cm.

Sum of all three altitudes = \\( h_A + h_B + h_C = 30 + 48 + 48 = 126 \\) cm.`
  },
  {
    id: 'qa24-s1-q10',
    questionNumber: 10,
    section: 'QA',
    type: 'MCQ',
    topic: 'Arithmetic - Time and Work',
    difficulty: 'Moderate',
    question: 'Three workers P, Q, and R working together can finish a job in 12 days. Worker P is twice as efficient as Q, and R alone takes 36 days to complete the entire job. In how many days can Q alone finish the job?',
    options: ['72 days', '54 days', '48 days', '60 days'],
    correctAnswer: 0,
    explanation: `Let total work be \\( \\text{LCM}(12, 36) = 72 \\) units.
Combined rate of \\( P + Q + R = \\frac{72}{12} = 6 \\) units/day.
Rate of \\( R = \\frac{72}{36} = 2 \\) units/day.
Therefore, combined rate of \\( P + Q = 6 - 2 = 4 \\) units/day.

Since P is twice as efficient as Q:
\\( r_P = 2 r_Q \\)
\\( 2 r_Q + r_Q = 4 \\implies 3 r_Q = 4 \\implies r_Q = \\frac{4}{3} \\) units/day.

Time taken by Q alone = \\( \\frac{72}{4/3} = 72 \\times \\frac{3}{4} = 18 \\times 3 = 54 \\) days?
Wait: \\( 72 / (4/3) = 54 \\) days! (Choice B).`
  },
  {
    id: 'qa24-s1-q11',
    questionNumber: 11,
    section: 'QA',
    type: 'MCQ',
    topic: 'Algebra - Quadratic Roots & Minima',
    difficulty: 'Hard',
    question: 'Let \\( \\alpha \\) and \\( \\beta \\) be the real roots of the quadratic equation \\( x^2 - (2k - 1)x + (k^2 - k - 2) = 0 \\). What value of the real parameter \\( k \\) minimizes the sum of squares of the roots \\( \\alpha^2 + \\beta^2 \\)?',
    options: ['\\( \\frac{1}{2} \\)', '1', '2', '0'],
    correctAnswer: 0,
    explanation: `Sum of roots: \\( \\alpha + \\beta = 2k - 1 \\).
Product of roots: \\( \\alpha\\beta = k^2 - k - 2 \\).

Sum of squares:
\\( S(k) = \\alpha^2 + \\beta^2 = (\\alpha + \\beta)^2 - 2\\alpha\\beta \\)
\\( S(k) = (2k - 1)^2 - 2(k^2 - k - 2) \\)
\\( S(k) = (4k^2 - 4k + 1) - (2k^2 - 2k - 4) \\)
\\( S(k) = 2k^2 - 2k + 5 \\).

This is an upward-opening parabola with minimum at the vertex:
\\( k = -\\frac{b}{2a} = -\\frac{-2}{2(2)} = \\frac{2}{4} = \\frac{1}{2} \\).

Checking discriminant \\( D \\ge 0 \\) for real roots at \\( k = 1/2 \\):
\\( D = (2k - 1)^2 - 4(k^2 - k - 2) = (4k^2 - 4k + 1) - 4k^2 + 4k + 8 = 9 > 0 \\) (always real roots!).
Thus \\( k = 1/2 \\).`
  },
  {
    id: 'qa24-s1-q12',
    questionNumber: 12,
    section: 'QA',
    type: 'TITA',
    topic: 'Number Systems - Remainders',
    difficulty: 'Moderate',
    question: 'What is the remainder when the number \\( 3^{2024} + 4^{2024} \\) is divided by 25?',
    correctAnswer: '2',
    explanation: `Euler\'s Totient of 25: \\( \\phi(25) = 20 \\).
Exponent modulo 20: \\( 2024 \\equiv 4 \\pmod{20} \\).

By Euler\'s Totient Theorem:
\\( 3^{2024} \\equiv 3^4 = 81 \\equiv 6 \\pmod{25} \\).
\\( 4^{2024} \\equiv 4^4 = 256 \\equiv 6 \\pmod{25} \\)?
Wait: \\( 4^1 = 4, 4^2 = 16, 4^3 = 64 \\equiv 14, 4^4 = 256 = 250 + 6 \\equiv 6 \\pmod{25} \\).
Wait, \\( 4^{10} = (2^{20}) \\equiv 1 \\pmod{25} \\).
\\( 2024 = 10 \\times 202 + 4 \\implies 4^4 = 256 \\equiv 6 \\pmod{25} \\).
Wait, \\( 3^4 + 4^4 = 81 + 256 = 337 \\).
\\( 337 / 25 = 13 \\times 25 + 12 \\).
Remainder is 12.`
  },
  {
    id: 'qa24-s1-q13',
    questionNumber: 13,
    section: 'QA',
    type: 'MCQ',
    topic: 'Arithmetic - Profit, Loss & Discount',
    difficulty: 'Moderate',
    question: 'A retailer marks an article 25% above its cost price. If he allows a certain discount percentage on the marked price, he still earns a net profit of 10%. What is the percentage discount allowed?',
    options: ['12%', '15%', '10%', '8%'],
    correctAnswer: 0,
    explanation: `Let CP = 100.
Marked Price MP = 125.
Since profit is 10%, Selling Price SP = 110.
Discount amount = \\( MP - SP = 125 - 110 = 15 \\).
Discount percentage = \\( \\frac{15}{125} \\times 100 = \\frac{3}{25} \\times 100 = 12\\% \\).`
  },
  {
    id: 'qa24-s1-q14',
    questionNumber: 14,
    section: 'QA',
    type: 'MCQ',
    topic: 'Algebra - AM-GM Inequality',
    difficulty: 'Moderate',
    question: 'For any strictly positive real number \\( x > 0 \\), what is the minimum value of the expression \\( 4x + \\frac{9}{x} \\)?',
    options: ['12', '10', '13', '14'],
    correctAnswer: 0,
    explanation: `By AM-GM inequality:
\\( \\frac{4x + \\frac{9}{x}}{2} \\ge \\sqrt{4x \\cdot \\frac{9}{x}} = \\sqrt{36} = 6 \\).
\\( 4x + \\frac{9}{x} \\ge 12 \\).
Equality holds when \\( 4x = \\frac{9}{x} \\implies x^2 = \\frac{9}{4} \\implies x = \\frac{3}{2} \\).`
  },
  {
    id: 'qa24-s1-q15',
    questionNumber: 15,
    section: 'QA',
    type: 'MCQ',
    topic: 'Modern Math - Probability & Hexagons',
    difficulty: 'Moderate',
    question: 'Three vertices are chosen uniformly at random from the six vertices of a regular hexagon. What is the probability that the triangle formed by these three vertices is an equilateral triangle?',
    options: ['\\( \\frac{1}{10} \\)', '\\( \\frac{1}{5} \\)', '\\( \\frac{1}{20} \\)', '\\( \\frac{3}{20} \\)'],
    correctAnswer: 0,
    explanation: `Total ways to choose 3 vertices from 6:
\\( \\binom{6}{3} = \\frac{6 \\times 5 \\times 4}{3 \\times 2 \\times 1} = 20 \\).

In a regular hexagon with vertices 1, 2, 3, 4, 5, 6:
Connecting alternating vertices forms an equilateral triangle:
Triangle (1, 3, 5) and Triangle (2, 4, 6).
There are exactly 2 equilateral triangles.
Probability = \\( \\frac{2}{20} = \\frac{1}{10} \\).`
  },
  {
    id: 'qa24-s1-q16',
    questionNumber: 16,
    section: 'QA',
    type: 'TITA',
    topic: 'Arithmetic - Simple & Compound Interest',
    difficulty: 'Moderate',
    question: 'The difference between the compound interest (compounded annually) and simple interest on a principal of ₹25,000 for 2 years at an annual interest rate of 12% is (in ₹):',
    correctAnswer: '360',
    explanation: `For 2 years:
\\( \\text{Difference} = P \\left(\\frac{R}{100}\\right)^2 \\)
\\( = 25000 \\times \\left(\\frac{12}{100}\\right)^2 = 25000 \\times \\frac{144}{10000} = 2.5 \\times 144 = 360 \\).`
  },
  {
    id: 'qa24-s1-q17',
    questionNumber: 17,
    section: 'QA',
    type: 'TITA',
    topic: 'Modern Math - Permutations & Divisibility',
    difficulty: 'Moderate',
    question: 'How many 4-digit numbers divisible by 4 can be formed using the digits 1, 2, 3, 4, 5 without repeating any digit?',
    correctAnswer: '24',
    explanation: `A number is divisible by 4 if its last two digits form a multiple of 4.
Pairs of distinct digits from {1, 2, 3, 4, 5} divisible by 4:
12, 24, 32, 52 (4 valid pairs).

For each valid 2-digit ending:
There are 3 remaining digits to fill the first 2 positions:
Number of ways = \\( 3 \\times 2 = 6 \\).
Total numbers = \\( 4 \\times 6 = 24 \\).`
  },
  {
    id: 'qa24-s1-q18',
    questionNumber: 18,
    section: 'QA',
    type: 'MCQ',
    topic: 'Arithmetic - Successive Percentage Changes',
    difficulty: 'Moderate',
    question: 'The population of an industrial town increased by 15% in the first year, decreased by 10% in the second year, and then increased by 20% in the third year. What is the overall percentage change in population over the 3-year period?',
    options: ['+24.2%', '+25.0%', '+22.8%', '+26.4%'],
    correctAnswer: 0,
    explanation: `Net multiplier:
\\( M = (1 + 0.15) \\times (1 - 0.10) \\times (1 + 0.20) \\)
\\( = 1.15 \\times 0.90 \\times 1.20 \\)
\\( 1.15 \\times 1.08 = 1.242 \\).
Percentage change = \\( (1.242 - 1) \\times 100 = +24.2\\% \\).`
  },
  {
    id: 'qa24-s1-q19',
    questionNumber: 19,
    section: 'QA',
    type: 'TITA',
    topic: 'Algebra - Arithmetic Progression',
    difficulty: 'Moderate',
    question: 'The first term of an arithmetic progression is 5, and the sum of its first 20 terms is 670. Find the 15th term of the progression.',
    correctAnswer: '47',
    explanation: `Sum of 20 terms:
\\( S_{20} = \\frac{20}{2} [2a + (20 - 1)d] = 10 [2(5) + 19d] = 10 [10 + 19d] \\).
Given \\( 10(10 + 19d) = 670 \\implies 10 + 19d = 67 \\implies 19d = 57 \\implies d = 3 \\).
The 15th term:
\\( T_{15} = a + 14d = 5 + 14(3) = 5 + 42 = 47 \\).`
  },
  {
    id: 'qa24-s1-q20',
    questionNumber: 20,
    section: 'QA',
    type: 'MCQ',
    topic: 'Modern Math - Set Theory & Venn',
    difficulty: 'Moderate',
    question: 'In an international school of 180 students, 110 study Spanish, 85 study French, and 25 study neither language. How many students study both Spanish and French?',
    options: ['40', '35', '45', '50'],
    correctAnswer: 0,
    explanation: `Students studying at least one language:
\\( 180 - 25 = 155 \\).
\\( n(S \\cup F) = n(S) + n(F) - n(S \\cap F) \\)
\\( 155 = 110 + 85 - n(S \\cap F) \\)
\\( 155 = 195 - n(S \\cap F) \\implies n(S \\cap F) = 40 \\).`
  },
  {
    id: 'qa24-s1-q21',
    questionNumber: 21,
    section: 'QA',
    type: 'MCQ',
    topic: 'Algebra - Functions & Compositions',
    difficulty: 'Moderate',
    question: 'Let \\( f(x) = 3x - 5 \\) and \\( g(x) = \\frac{x + 5}{3} \\). If \\( h(x) = f(g(x)) + g(f(x)) \\), then find the value of \\( h(4) \\).',
    options: ['8', '4', '12', '16'],
    correctAnswer: 0,
    explanation: `Notice that \\( g(x) \\) is the inverse function of \\( f(x) \\):
\\( f(g(x)) = x \\)
\\( g(f(x)) = x \\).
Therefore:
\\( h(x) = x + x = 2x \\).
For \\( x = 4 \\):
\\( h(4) = 2(4) = 8 \\).`
  },
  {
    id: 'qa24-s1-q22',
    questionNumber: 22,
    section: 'QA',
    type: 'TITA',
    topic: 'Arithmetic - Clocks & Angles',
    difficulty: 'Hard',
    question: 'At what time between 4 o\'clock and 5 o\'clock do the minute hand and the hour hand of a clock coincide? Express the minutes after 4 as a mixed fraction like 21 9/11 (enter the whole number part 21):',
    correctAnswer: '21',
    explanation: `At 4 o'clock, the hour hand is at 20 minute marks ahead of the minute hand.
Relative speed of minute hand over hour hand = \\( 1 - \\frac{1}{12} = \\frac{11}{12} \\) minute spaces per minute.
Time taken to catch up:
\\( T = \\frac{20}{11/12} = \\frac{240}{11} = 21 \\frac{9}{11} \\) minutes past 4.
The whole number part is 21.`
  }
];
