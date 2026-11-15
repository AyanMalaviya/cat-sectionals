import { Question } from '../types';

export const qa2025Slot1Questions: Question[] = [
  {
    id: 'qa25-s1-q1',
    questionNumber: 1,
    section: 'QA',
    type: 'TITA',
    topic: 'Arithmetic - Ratios & Mixtures',
    difficulty: 'Moderate',
    question: 'A fruit seller has a total of 187 fruits consisting of apples, mangoes, and oranges. The number of apples and mangoes are in the ratio 5 : 2. After she sells 75 apples, 26 mangoes, and half of the oranges, the ratio of the number of unsold apples to the number of unsold oranges becomes 3 : 2. The total number of unsold fruits is',
    correctAnswer: '66',
    explanation: `Let the initial number of apples be \\( 5x \\) and mangoes be \\( 2x \\).
Total apples and mangoes = \\( 7x \\).
Initial number of oranges = \\( 187 - 7x \\).

After sales:
- Unsold apples = \\( 5x - 75 \\)
- Unsold mangoes = \\( 2x - 26 \\)
- Unsold oranges = \\( \\frac{187 - 7x}{2} \\)

We are given:
\\[
\\frac{\\text{Unsold Apples}}{\\text{Unsold Oranges}} = \\frac{5x - 75}{\\frac{187 - 7x}{2}} = \\frac{3}{2}
\\]
\\[
\\frac{2(5x - 75)}{187 - 7x} = \\frac{3}{2}
\\]
\\[
4(5x - 75) = 3(187 - 7x)
\\]
\\[
20x - 300 = 561 - 21x
\\]
\\[
41x = 861 \\implies x = 21
\\]

Now substitute \\( x = 21 \\):
- Unsold apples = \\( 5(21) - 75 = 105 - 75 = 30 \\)
- Unsold mangoes = \\( 2(21) - 26 = 42 - 26 = 16 \\)
- Unsold oranges = \\( \\frac{187 - 7(21)}{2} = \\frac{187 - 147}{2} = \\frac{40}{2} = 20 \\)

Total number of unsold fruits:
\\[
30 + 16 + 20 = 66
\\]`
  },
  {
    id: 'qa25-s1-q2',
    questionNumber: 2,
    section: 'QA',
    type: 'MCQ',
    topic: 'Algebra - Surds & Radicals',
    difficulty: 'Moderate',
    question: 'If \\( (a + b\\sqrt{n}) \\) is the positive square root of \\( (29 - 12\\sqrt{5}) \\), where \\( a \\) and \\( b \\) are integers and \\( n \\) is a natural number, then the maximum possible value of \\( (a + b + n) \\) is',
    options: ['18', '22', '6', '4'],
    correctAnswer: 0,
    explanation: `We are given:
\\[
(a + b\\sqrt{n})^2 = 29 - 12\\sqrt{5}
\\]
\\[
a^2 + b^2 n + 2ab\\sqrt{n} = 29 - 12\\sqrt{5}
\\]
where \\( a + b\\sqrt{n} > 0 \\), \\( a, b \\in \\mathbb{Z} \\), and \\( n \\in \\mathbb{N} \\).

Comparing the irrational parts:
\\[
2ab\\sqrt{n} = -12\\sqrt{5} \\implies ab\\sqrt{n} = -6\\sqrt{5}
\\]
Also, \\( a^2 + b^2 n = 29 \\).

Case 1: Let \\( n = 5 \\):
Then \\( ab = -6 \\) and \\( a^2 + 5b^2 = 29 \\).
Testing factors: if \\( b = 2, a = -3 \\), then \\( (-3)^2 + 5(2)^2 = 9 + 20 = 29 \\).
The square root is \\( -3 + 2\\sqrt{5} \\approx -3 + 4.47 > 0 \\) (positive root).
Here, \\( a + b + n = -3 + 2 + 5 = 4 \\).

Case 2: Notice we can absorb factors into \\( \\sqrt{n} \\):
Rewrite \\( -6\\sqrt{5} = -3\\sqrt{20} \\).
Here \\( a = -3, b = 1, n = 20 \\).
Check: \\( a^2 + b^2 n = (-3)^2 + (1)^2(20) = 9 + 20 = 29 \\).
And \\( 2ab\\sqrt{n} = 2(-3)(1)\\sqrt{20} = -6(2\\sqrt{5}) = -12\\sqrt{5} \\).
The positive root is \\( -3 + \\sqrt{20} > 0 \\).
Here, \\( a + b + n = -3 + 1 + 20 = 18 \\).

Checking other cases yields no larger sum.
Hence, the maximum possible value is 18.`
  },
  {
    id: 'qa25-s1-q3',
    questionNumber: 3,
    section: 'QA',
    type: 'MCQ',
    topic: 'Algebra - Logarithms & Exponents',
    difficulty: 'Moderate',
    question: 'The sum of all real values of \\( k \\) for which \\( \\left(\\frac{1}{8}\\right)^k \\times \\left(\\frac{1}{32768}\\right)^{\\frac{1}{3}} = \\frac{1}{8} \\times \\left(\\frac{1}{32768}\\right)^{\\frac{1}{k}} \\) is',
    options: ['\\( -\\frac{2}{3} \\)', '\\( \\frac{2}{3} \\)', '\\( \\frac{4}{3} \\)', '\\( -\\frac{4}{3} \\)'],
    correctAnswer: 0,
    explanation: `Express all terms as powers of base 2:
\\[
\\frac{1}{8} = 2^{-3}
\\]
\\[
\\frac{1}{32768} = \\frac{1}{2^{15}} = 2^{-15}
\\]

Substitute these into the equation:
\\[
(2^{-3})^k \\times (2^{-15})^{1/3} = 2^{-3} \\times (2^{-15})^{1/k}
\\]
\\[
2^{-3k} \\times 2^{-5} = 2^{-3} \\times 2^{-15/k}
\\]
\\[
2^{-3k - 5} = 2^{-3 - 15/k}
\\]

Equate the exponents:
\\[
-3k - 5 = -3 - \\frac{15}{k}
\\]
\\[
-3k - 2 = -\\frac{15}{k}
\\]
Multiply both sides by \\( -1 \\):
\\[
3k + 2 = \\frac{15}{k}
\\]
Multiply through by \\( k \\):
\\[
3k^2 + 2k - 15 = 0
\\]

Discriminant \\( D = b^2 - 4ac = 4 - 4(3)(-15) = 4 + 180 = 184 > 0 \\).
Since \\( D > 0 \\), both roots are real.
By Vieta\'s formulas, the sum of the roots is:
\\[
\\text{Sum of roots} = -\\frac{b}{a} = -\\frac{2}{3}
\\]`
  },
  {
    id: 'qa25-s1-q4',
    questionNumber: 4,
    section: 'QA',
    type: 'MCQ',
    topic: 'Arithmetic - Mixtures & Replacements',
    difficulty: 'Moderate',
    question: 'A container holds 200 litres of a solution of acid and water, having 30% acid by volume. Atul replaces 20% of this solution with water, then replaces 10% of the resulting solution with acid, and finally replaces 15% of the solution thus obtained with water. The percentage of acid by volume in the final solution obtained after these three replacements is nearest to',
    options: ['27%', '25%', '29%', '23%'],
    correctAnswer: 0,
    explanation: `Initial total volume = 200 litres.
Initial volume of acid = \\( 30\\% \\times 200 = 60 \\) litres.

Replacement 1: Replace 20% with water
- 20% of the solution is removed, so 80% remains.
- Acid remaining = \\( 60 \\times 0.80 = 48 \\) litres.

Replacement 2: Replace 10% with pure acid
- 10% of the solution is removed, so 90% of the acid remains:
  \\( 48 \\times 0.90 = 43.2 \\) litres.
- 10% of 200 L = 20 L of pure acid is added:
  New acid = \\( 43.2 + 20 = 63.2 \\) litres.

Replacement 3: Replace 15% with water
- 15% of the solution is removed, so 85% of the acid remains:
  Final acid = \\( 63.2 \\times 0.85 = 53.72 \\) litres.

Final percentage of acid in the 200-litre container:
\\[
\\text{Percentage} = \\frac{53.72}{200} \\times 100 = 26.86\\% \\approx 27\\%
\\]`
  },
  {
    id: 'qa25-s1-q5',
    questionNumber: 5,
    section: 'QA',
    type: 'TITA',
    topic: 'Arithmetic - Time & Work',
    difficulty: 'Moderate',
    question: 'Renu would take 15 days working 4 hours per day to complete a certain task whereas Seema would take 8 days working 5 hours per day to complete the same task. They decide to work together to complete this task. Seema agrees to work for double the number of hours per day as Renu, while Renu agrees to work for double the number of days as Seema. If Renu works 2 hours per day, then the number of days Seema will work, is',
    correctAnswer: '6',
    explanation: `Total work required:
- Renu: \\( 15 \\times 4 = 60 \\) hours.
- Seema: \\( 8 \\times 5 = 40 \\) hours.

Let total work = \\( \\text{LCM}(60, 40) = 120 \\) units.
- Renu\'s rate = \\( \\frac{120}{60} = 2 \\) units/hour.
- Seema\'s rate = \\( \\frac{120}{40} = 3 \\) units/hour.

Given conditions:
- Renu works 2 hours per day.
- Seema works double the hours/day as Renu \\( \\implies 2 \\times 2 = 4 \\) hours per day.
- Let Seema work for \\( d \\) days.
- Renu works for double the number of days as Seema \\( \\implies 2d \\) days.

Total work completed:
- By Renu = \\( (2d \\text{ days}) \\times (2 \\text{ hours/day}) \\times (2 \\text{ units/hour}) = 8d \\) units.
- By Seema = \\( (d \\text{ days}) \\times (4 \\text{ hours/day}) \\times (3 \\text{ units/hour}) = 12d \\) units.

Total work:
\\[
8d + 12d = 120 \\implies 20d = 120 \\implies d = 6 \\text{ days}
\\]`
  },
  {
    id: 'qa25-s1-q6',
    questionNumber: 6,
    section: 'QA',
    type: 'MCQ',
    topic: 'Arithmetic - Percentages & Ratios',
    difficulty: 'Moderate',
    question: 'In September, the incomes of Kamal, Amal, and Vimal are in the ratio 8 : 6 : 5. They rent a house together, and Kamal pays 15%, Amal pays 12%, and Vimal pays 18% of their respective incomes to cover the total house rent in that month. In October, the house rent remains unchanged while their incomes increase by 10%, 12%, and 15%, respectively. In October, the percentage of their total income that will be paid as house rent, is nearest to',
    options: ['13.26%', '14.50%', '12.80%', '15.10%'],
    correctAnswer: 0,
    explanation: `Assume September incomes are:
- Kamal = Rs. 800
- Amal = Rs. 600
- Vimal = Rs. 500
Total September income = \\( 800 + 600 + 500 = 1900 \\).

Total house rent:
- Kamal pays \\( 15\\% \\times 800 = 120 \\)
- Amal pays \\( 12\\% \\times 600 = 72 \\)
- Vimal pays \\( 18\\% \\times 500 = 90 \\)
Total rent = \\( 120 + 72 + 90 = 282 \\).

In October:
- Kamal\'s income = \\( 800 \\times 1.10 = 880 \\)
- Amal\'s income = \\( 600 \\times 1.12 = 672 \\)
- Vimal\'s income = \\( 500 \\times 1.15 = 575 \\)
Total October income = \\( 880 + 672 + 575 = 2127 \\).

Rent remains 282.
Percentage of October total income paid as rent:
\\[
\\frac{282}{2127} \\times 100 = 13.258\\% \\approx 13.26\\%
\\]`
  },
  {
    id: 'qa25-s1-q7',
    questionNumber: 7,
    section: 'QA',
    type: 'TITA',
    topic: 'Modern Math - Functions & Sets',
    difficulty: 'Challenging',
    question: 'Consider two sets A = {2, 3, 5, 7, 11, 13} and B = {1, 8, 27}. Let f be a function from A to B such that for every element b in B, there is at least one element a in A such that f(a) = b. Then, the total number of such functions f is',
    correctAnswer: '540',
    explanation: `The condition says that every element in \\( B \\) has at least one pre-image in \\( A \\).
This is the standard definition of an onto (surjective) function.

Set \\( A \\) has \\( m = 6 \\) elements.
Set \\( B \\) has \\( n = 3 \\) elements.

Using the Principle of Inclusion-Exclusion (PIE):
Total onto functions:
\\[
N = n^m - \\binom{n}{1}(n - 1)^m + \\binom{n}{2}(n - 2)^m - \\binom{n}{3}(n - 3)^m
\\]
Substitute \\( m = 6, n = 3 \\):
\\[
N = 3^6 - \\binom{3}{1} 2^6 + \\binom{3}{2} 1^6 - \\binom{3}{3} 0^6
\\]
\\[
N = 729 - 3(64) + 3(1) - 0
\\]
\\[
N = 729 - 192 + 3 = 540
\\]`
  },
  {
    id: 'qa25-s1-q8',
    questionNumber: 8,
    section: 'QA',
    type: 'MCQ',
    topic: 'Algebra - Systems of Equations',
    difficulty: 'Moderate',
    question: 'Let x, y, and z be real numbers satisfying 4(x^2 + y^2 + z^2) = a and 4(x - y - z) = 3 + a. Then a equals',
    options: ['3', '4', '6', '2'],
    correctAnswer: 0,
    explanation: `From the second equation:
\\[
a = 4(x - y - z) - 3 = 4x - 4y - 4z - 3
\\]

Substitute \\( a \\) into the first equation:
\\[
4(x^2 + y^2 + z^2) = 4x - 4y - 4z - 3
\\]
\\[
4x^2 + 4y^2 + 4z^2 - 4x + 4y + 4z + 3 = 0
\\]

Group the terms by variables:
\\[
(4x^2 - 4x + 1) + (4y^2 + 4y + 1) + (4z^2 + 4z + 1) = 0
\\]
Notice that each group is a perfect square:
\\[
(2x - 1)^2 + (2y + 1)^2 + (2z + 1)^2 = 0
\\]

Since \\( x, y, z \\in \\mathbb{R} \\), the sum of real squares is 0 if and only if each term is 0:
\\[
2x - 1 = 0 \\implies x = \\frac{1}{2}
\\]
\\[
2y + 1 = 0 \\implies y = -\\frac{1}{2}
\\]
\\[
2z + 1 = 0 \\implies z = -\\frac{1}{2}
\\]

Now calculate \\( a \\):
\\[
a = 4(x^2 + y^2 + z^2) = 4\\left(\\frac{1}{4} + \\frac{1}{4} + \\frac{1}{4}\\right) = 4\\left(\\frac{3}{4}\\right) = 3
\\]`
  },
  {
    id: 'qa25-s1-q9',
    questionNumber: 9,
    section: 'QA',
    type: 'TITA',
    topic: 'Modern Math - Permutations & Place Values',
    difficulty: 'Challenging',
    question: 'The sum of all four-digit numbers that can be formed with the distinct non-zero digits a, b, c, and d, with each digit appearing exactly once in every number, is 153310 + n, where n is a single-digit natural number. Then, the value of (a + b + c + d + n) is',
    correctAnswer: '31',
    explanation: `Total number of 4-digit numbers formed with 4 distinct digits = \\( 4! = 24 \\).
In each place value (thousands, hundreds, tens, units), each digit appears \\( \\frac{24}{4} = 6 \\) times.

The sum of all 24 numbers is:
\\[
\\text{Sum} = 6(a + b + c + d) \\times (1000 + 100 + 10 + 1) = 6666(a + b + c + d)
\\]

We are given:
\\[
6666(a + b + c + d) = 153310 + n
\\]
where \\( n \\in \\{1, 2, \\dots, 9\\} \\).

Divide 153310 by 6666:
\\[
6666 \\times 23 = 153318
\\]
Thus:
\\[
153310 + n = 153318 \\implies n = 8
\\]
Since 8 is a single-digit natural number, this holds!
Then:
\\[
a + b + c + d = 23
\\]

Therefore:
\\[
(a + b + c + d + n) = 23 + 8 = 31
\\]`
  },
  {
    id: 'qa25-s1-q10',
    questionNumber: 10,
    section: 'QA',
    type: 'MCQ',
    topic: 'Number Systems - Remainders',
    difficulty: 'Easy',
    question: 'When 10^100 is divided by 7, the remainder is',
    options: ['4', '1', '3', '6'],
    correctAnswer: 0,
    explanation: `Using modular arithmetic modulo 7:
\\[
10 \\equiv 3 \\pmod 7
\\]
Now find the powers of 3 modulo 7:
\\[
3^1 \\equiv 3
\\]
\\[
3^2 = 9 \\equiv 2
\\]
\\[
3^3 = 6 \\equiv -1
\\]
\\[
3^6 \\equiv 1 \\pmod 7
\\]

The cyclicity is 6.
Divide the exponent 100 by 6:
\\[
100 = 6 \\times 16 + 4
\\]

Therefore:
\\[
10^{100} \\equiv 3^{100} \\equiv 3^4 \\pmod 7
\\]
Since \\( 3^4 = 81 = 7 \\times 11 + 4 \\):
\\[
81 \\equiv 4 \\pmod 7
\\]
The remainder is 4.`
  },
  {
    id: 'qa25-s1-q11',
    questionNumber: 11,
    section: 'QA',
    type: 'MCQ',
    topic: 'Arithmetic - Time, Work & Cost Optimization',
    difficulty: 'Challenging',
    question: 'Arun, Varun, and Tarun, if working alone, can complete a task in 24, 21, and 15 days, respectively. They charge Rs 2160, Rs 2400, and Rs 2160 per day, respectively, even if they are employed for a partial day. On any given day, any of the workers may or may not be employed to work. If the task needs to be completed in 10 days or less, then the minimum possible amount, in rupees, required to be paid for the entire task is',
    options: ['38400', '38880', '34400', '47040'],
    correctAnswer: 0,
    explanation: `Let total work = \\( \\text{LCM}(24, 21, 15) = 840 \\) units.

Daily work and cost per unit:
- Arun: \\( 840 / 24 = 35 \\) units/day @ Rs. 2160/day \\( \\implies \\frac{2160}{35} \\approx 61.71 \\) Rs/unit.
- Varun: \\( 840 / 21 = 40 \\) units/day @ Rs. 2400/day \\( \\implies \\frac{2400}{40} = 60.00 \\) Rs/unit.
- Tarun: \\( 840 / 15 = 56 \\) units/day @ Rs. 2160/day \\( \\implies \\frac{2160}{56} \\approx 38.57 \\) Rs/unit (Most economical!).

Constraint: Task must be completed in \\( \\le 10 \\) days.
To minimize total cost:
1. Maximize Tarun\'s employment (up to 10 days):
   - Tarun works 10 days:
   - Work done = \\( 10 \\times 56 = 560 \\) units.
   - Cost = \\( 10 \\times 2160 = \\text{Rs. } 21600 \\).

2. Remaining work = \\( 840 - 560 = 280 \\) units.
   The next most cost-effective worker is Varun (Rs. 60/unit vs Arun\'s Rs. 61.71/unit).
   - Number of days for Varun = \\( \\frac{280}{40} = 7 \\) days.
   - Since Varun works alongside Tarun within the same 10-day window, total elapsed time = 10 days (valid!).
   - Cost for Varun = \\( 7 \\times 2400 = \\text{Rs. } 16800 \\).

Total minimum cost:
\\[
21600 + 16800 = 38400 \\text{ rupees}
\\]`
  },
  {
    id: 'qa25-s1-q12',
    questionNumber: 12,
    section: 'QA',
    type: 'TITA',
    topic: 'Algebra - Optimization',
    difficulty: 'Moderate',
    question: 'If a, b, c, and d are integers such that their sum is 46, then the minimum possible value of (a - b)^2 + (a - c)^2 + (a - d)^2 is',
    correctAnswer: '2',
    explanation: `We are given \\( a + b + c + d = 46 \\) with \\( a, b, c, d \\in \\mathbb{Z} \\).
We wish to minimize:
\\[
E = (a - b)^2 + (a - c)^2 + (a - d)^2
\\]

To minimize squared differences among integers summing to 46, the four numbers must be distributed as close to the average \\( \\frac{46}{4} = 11.5 \\) as possible.
The closest integers are two 11s and two 12s:
\\[
\\{11, 11, 12, 12\\}
\\]

To minimize deviations from \\( a \\), choose \\( a = 11 \\) (or \\( 12 \\)):
Let \\( a = 11 \\), and the other three variables be \\( \\{11, 12, 12\\} \\).
Then:
\\[
(11 - 11)^2 + (11 - 12)^2 + (11 - 12)^2 = 0^2 + (-1)^2 + (-1)^2 = 0 + 1 + 1 = 2
\\]

If \\( a = 12 \\), and the other three are \\( \\{12, 11, 11\\} \\):
\\[
(12 - 12)^2 + (12 - 11)^2 + (12 - 11)^2 = 0 + 1 + 1 = 2
\\]
Minimum possible value = 2.`
  },
  {
    id: 'qa25-s1-q13',
    questionNumber: 13,
    section: 'QA',
    type: 'TITA',
    topic: 'Arithmetic - Averages',
    difficulty: 'Moderate',
    question: 'The average number of copies of a book sold per day by a shopkeeper is 60 in the initial seven days and 63 in the initial eight days, after the book launch. On the ninth day, she sells 11 copies fewer than on the eighth day, and the average number of copies sold per day from the second day to the ninth day becomes 66. The number of copies sold on the first day of the book launch is',
    correctAnswer: '49',
    explanation: `Let copies sold on day \\( i \\) be \\( D_i \\).
- Total sold in first 7 days:
  \\( D_1 + D_2 + \\dots + D_7 = 7 \\times 60 = 420 \\).
- Total sold in first 8 days:
  \\( D_1 + D_2 + \\dots + D_8 = 8 \\times 63 = 504 \\).

Copies sold on Day 8:
\\[
D_8 = 504 - 420 = 84
\\]

On Day 9, she sells 11 copies fewer than on Day 8:
\\[
D_9 = D_8 - 11 = 84 - 11 = 73
\\]

Total copies sold from Day 1 to Day 9:
\\[
504 + D_9 = 504 + 73 = 577
\\]

We are given that the average from Day 2 to Day 9 (8 days) is 66:
\\[
D_2 + D_3 + \\dots + D_9 = 8 \\times 66 = 528
\\]

Copies sold on Day 1:
\\[
D_1 = (D_1 + \\dots + D_9) - (D_2 + \\dots + D_9) = 577 - 528 = 49
\\]`
  },
  {
    id: 'qa25-s1-q14',
    questionNumber: 14,
    section: 'QA',
    type: 'MCQ',
    topic: 'Algebra - Arithmetic Progression',
    difficulty: 'Moderate',
    question: 'Suppose x1, x2, x3, ..., x100 are in arithmetic progression such that x5 = -4 and 2x6 + 2x9 = x11 + x13. Then, x100 equals',
    options: ['-194', '204', '-196', '206'],
    correctAnswer: 0,
    explanation: `Let the first term be \\( a \\) and the common difference be \\( d \\).
The \\( n \\)-th term is \\( x_n = a + (n - 1)d \\).

Given:
\\[
x_5 = a + 4d = -4
\\]

From the relation \\( 2x_6 + 2x_9 = x_{11} + x_{13} \\):
\\[
2(a + 5d) + 2(a + 8d) = (a + 10d) + (a + 12d)
\\]
\\[
2a + 10d + 2a + 16d = 2a + 22d
\\]
\\[
4a + 26d = 2a + 22d
\\]
\\[
2a + 4d = 0 \\implies a = -2d
\\]

Substitute \\( a = -2d \\) into \\( x_5 = -4 \\):
\\[
-2d + 4d = -4 \\implies 2d = -4 \\implies d = -2
\\]
Then:
\\[
a = -2(-2) = 4
\\]

Now find \\( x_{100} \\):
\\[
x_{100} = a + 99d = 4 + 99(-2) = 4 - 198 = -194
\\]`
  },
  {
    id: 'qa25-s1-q15',
    questionNumber: 15,
    section: 'QA',
    type: 'TITA',
    topic: 'Arithmetic - Linear Equations & Portfolio',
    difficulty: 'Easy',
    question: 'Stocks A, B, and C are priced at rupees 120, 90, and 150 per share, respectively. A trader holds a portfolio consisting of 10 shares of stock A, and 20 shares of stocks B and C put together. If the total value of her portfolio is rupees 3300, then the number of shares of stock B that she holds is',
    correctAnswer: '15',
    explanation: `Value of 10 shares of stock A:
\\[
10 \\times 120 = 1200 \\text{ rupees}
\\]

Total portfolio value = Rs. 3300.
Value of stocks B and C combined:
\\[
3300 - 1200 = 2100 \\text{ rupees}
\\]

Let \\( b \\) be the number of shares of stock B.
Since she holds 20 shares of B and C put together, shares of C = \\( 20 - b \\).

Setting up the value equation:
\\[
90b + 150(20 - b) = 2100
\\]
\\[
90b + 3000 - 150b = 2100
\\]
\\[
-60b = 2100 - 3000 = -900
\\]
\\[
b = \\frac{900}{60} = 15
\\]

She holds 15 shares of stock B.`
  },
  {
    id: 'qa25-s1-q16',
    questionNumber: 16,
    section: 'QA',
    type: 'MCQ',
    topic: 'Arithmetic - Time, Speed & Distance',
    difficulty: 'Moderate',
    question: 'Two places A and B are 45 km apart and connected by a straight road. Anil goes from A to B while Sunil goes from B to A. Starting at the same time, they cross each other in exactly 1 hour 30 minutes. If Anil reaches B exactly 1 hour 15 minutes after Sunil reaches A, the speed of Anil, in km per hour, is',
    options: ['12', '18', '14', '16'],
    correctAnswer: 0,
    explanation: `Total distance = 45 km.
They cross each other in 1.5 hours:
\\[
S_A + S_S = \\frac{45}{1.5} = 30 \\text{ km/h} \\implies S_S = 30 - S_A
\\]

Total time taken:
- Anil to reach B: \\( T_A = \\frac{45}{S_A} \\) hours.
- Sunil to reach A: \\( T_S = \\frac{45}{S_S} = \\frac{45}{30 - S_A} \\) hours.

Anil reaches B 1 hour 15 minutes (\\( 1.25 = \\frac{5}{4} \\) hours) after Sunil reaches A:
\\[
T_A - T_S = \\frac{5}{4}
\\]
\\[
\\frac{45}{S_A} - \\frac{45}{30 - S_A} = \\frac{5}{4}
\\]
Divide by 5:
\\[
\\frac{9}{S_A} - \\frac{9}{30 - S_A} = \\frac{1}{4}
\\]
\\[
9\\left(\\frac{30 - S_A - S_A}{S_A(30 - S_A)}\\right) = \\frac{1}{4}
\\]
\\[
36(30 - 2S_A) = 30S_A - S_A^2
\\]
\\[
1080 - 72S_A = 30S_A - S_A^2
\\]
\\[
S_A^2 - 102S_A + 1080 = 0
\\]

Factoring the quadratic:
\\[
(S_A - 12)(S_A - 90) = 0
\\]
Since \\( S_A + S_S = 30 \\), \\( S_A < 30 \\).
Thus, \\( S_A = 12 \\) km/h.`
  },
  {
    id: 'qa25-s1-q17',
    questionNumber: 17,
    section: 'QA',
    type: 'MCQ',
    topic: 'Geometry - Solid Mensuration',
    difficulty: 'Moderate',
    question: 'The surface area of a closed rectangular box, which is inscribed in a sphere, is 846 sq cm, and the sum of the lengths of all its edges is 144 cm. The volume, in cubic cm, of the sphere is',
    options: ['$1125\\pi\\sqrt{2}$', '$750\\pi$', '$1125\\pi$', '$750\\pi\\sqrt{2}$'],
    correctAnswer: 0,
    explanation: `Let the dimensions of the rectangular box be \\( l, b, h \\).
1. Sum of all 12 edges:
\\[
4(l + b + h) = 144 \\implies l + b + h = 36
\\]

2. Total surface area:
\\[
2(lb + bh + hl) = 846
\\]

3. The space diagonal \\( D \\) of the box is given by:
\\[
D^2 = l^2 + b^2 + h^2 = (l + b + h)^2 - 2(lb + bh + hl)
\\]
\\[
D^2 = 36^2 - 846 = 1296 - 846 = 450
\\]

4. Since the box is inscribed in the sphere, the space diagonal equals the diameter \\( 2R \\) of the sphere:
\\[
(2R)^2 = 450 \\implies 4R^2 = 450 \\implies R^2 = \\frac{225}{2}
\\]
\\[
R = \\frac{15}{\\sqrt{2}} \\text{ cm}
\\]

5. Volume of the sphere:
\\[
V = \\frac{4}{3}\\pi R^3 = \\frac{4}{3}\\pi \\left(\\frac{15}{\\sqrt{2}}\\right)^3 = \\frac{4}{3}\\pi \\cdot \\frac{3375}{2\\sqrt{2}} = \\frac{4500}{2\\sqrt{2}}\\pi = 1125\\pi\\sqrt{2} \\text{ cm}^3
\\]`
  },
  {
    id: 'qa25-s1-q18',
    questionNumber: 18,
    section: 'QA',
    type: 'MCQ',
    topic: 'Arithmetic - Mixtures & Dilution',
    difficulty: 'Easy',
    question: 'A glass is filled with milk. Two-thirds of its content is poured out and replaced with water. If this process of pouring out two-thirds the content and replacing with water is repeated three more times, then the final ratio of milk to water in the glass, is',
    options: ['1 : 80', '1 : 81', '1 : 27', '1 : 26'],
    correctAnswer: 0,
    explanation: `In each operation, \\( \\frac{2}{3} \\) of the liquid is removed and replaced with water.
Fraction of milk remaining after 1 operation = \\( 1 - \\frac{2}{3} = \\frac{1}{3} \\).

The operation is done once, and then repeated 3 more times:
Total number of operations = \\( 1 + 3 = 4 \\).

Fraction of milk remaining in the glass:
\\[
\\left(\\frac{1}{3}\\right)^4 = \\frac{1}{81}
\\]

Fraction of water in the glass:
\\[
1 - \\frac{1}{81} = \\frac{80}{81}
\\]

Therefore, the ratio of milk to water is:
\\[
\\frac{1/81}{80/81} = 1 : 80
\\]`
  },
  {
    id: 'qa25-s1-q19',
    questionNumber: 19,
    section: 'QA',
    type: 'TITA',
    topic: 'Geometry - Rectangles & Incircles',
    difficulty: 'Moderate',
    question: 'ABCD is a rectangle with sides AB = 56 cm and BC = 45 cm, and E is the midpoint of side CD. Then, the length, in cm, of the radius of the incircle of triangle ADE is',
    correctAnswer: '10',
    explanation: `In rectangle ABCD:
- \\( AD = BC = 45 \\) cm
- \\( CD = AB = 56 \\) cm
- \\( E \\) is the midpoint of \\( CD \\), so \\( DE = \\frac{56}{2} = 28 \\) cm.

Triangle ADE is a right-angled triangle at vertex \\( D \\):
- Legs are \\( AD = 45 \\) cm and \\( DE = 28 \\) cm.
- Hypotenuse \\( AE \\):
\\[
AE = \\sqrt{AD^2 + DE^2} = \\sqrt{45^2 + 28^2} = \\sqrt{2025 + 784} = \\sqrt{2809} = 53 \\text{ cm}
\\]

For a right-angled triangle with perpendicular legs \\( a, b \\) and hypotenuse \\( c \\), the inradius \\( r \\) is:
\\[
r = \\frac{a + b - c}{2}
\\]
Substitute \\( a = 45, b = 28, c = 53 \\):
\\[
r = \\frac{45 + 28 - 53}{2} = \\frac{73 - 53}{2} = \\frac{20}{2} = 10 \\text{ cm}
\\]`
  },
  {
    id: 'qa25-s1-q20',
    questionNumber: 20,
    section: 'QA',
    type: 'MCQ',
    topic: 'Arithmetic - Reverse Percentage & Fractions',
    difficulty: 'Moderate',
    question: 'A shop wants to sell a certain quantity (in kg) of grains. It sells half the quantity and an additional 3 kg of these grains to the first customer. Then, it sells half of the remaining quantity and an additional 3 kg of these grains to the second customer. Finally, when the shop sells half of the remaining quantity and an additional 3 kg of these grains to the third customer, there are no grains left. The initial quantity, in kg, of grains is',
    options: ['42', '50', '36', '18'],
    correctAnswer: 0,
    explanation: `We can work backwards from the final customer:

1. After the 3rd customer, 0 kg remains.
   Let the quantity before the 3rd customer be \\( x_3 \\):
   \\[
   x_3 - \\left(\\frac{x_3}{2} + 3\\right) = 0 \\implies \\frac{x_3}{2} = 3 \\implies x_3 = 6 \\text{ kg}
   \\]

2. After the 2nd customer, \\( x_3 = 6 \\) kg remained.
   Let the quantity before the 2nd customer be \\( x_2 \\):
   \\[
   x_2 - \\left(\\frac{x_2}{2} + 3\\right) = 6 \\implies \\frac{x_2}{2} = 9 \\implies x_2 = 18 \\text{ kg}
   \\]

3. After the 1st customer, \\( x_2 = 18 \\) kg remained.
   Let the initial quantity be \\( x_1 \\):
   \\[
   x_1 - \\left(\\frac{x_1}{2} + 3\\right) = 18 \\implies \\frac{x_1}{2} = 21 \\implies x_1 = 42 \\text{ kg}
   \\]

Initial quantity of grains was 42 kg.`
  },
  {
    id: 'qa25-s1-q21',
    questionNumber: 21,
    section: 'QA',
    type: 'MCQ',
    topic: 'Modern Math - Floor Function & Sequences',
    difficulty: 'Moderate',
    question: 'For any natural number n, let a_n be the largest integer not exceeding sqrt(n). Then the value of a_1 + a_2 + ... + a_50 is',
    options: ['217', '215', '225', '210'],
    correctAnswer: 0,
    explanation: `By definition, \\( a_n = \\lfloor\\sqrt{n}\\rfloor \\).
Determine the ranges of \\( n \\) for each integer value of \\( a_n \\):
- For \\( n = 1 \\text{ to } 3 \\): \\( a_n = 1 \\) (\\( 3 \\) terms, sum = \\( 3 \\times 1 = 3 \\))
- For \\( n = 4 \\text{ to } 8 \\): \\( a_n = 2 \\) (\\( 5 \\) terms, sum = \\( 5 \\times 2 = 10 \\))
- For \\( n = 9 \\text{ to } 15 \\): \\( a_n = 3 \\) (\\( 7 \\) terms, sum = \\( 7 \\times 3 = 21 \\))
- For \\( n = 16 \\text{ to } 24 \\): \\( a_n = 4 \\) (\\( 9 \\) terms, sum = \\( 9 \\times 4 = 36 \\))
- For \\( n = 25 \\text{ to } 35 \\): \\( a_n = 5 \\) (\\( 11 \\) terms, sum = \\( 11 \\times 5 = 55 \\))
- For \\( n = 36 \\text{ to } 48 \\): \\( a_n = 6 \\) (\\( 13 \\) terms, sum = \\( 13 \\times 6 = 78 \\))
- For \\( n = 49 \\text{ to } 50 \\): \\( a_n = 7 \\) (\\( 2 \\) terms, sum = \\( 2 \\times 7 = 14 \\))

Summing all values from \\( n = 1 \\) to 50:
\\[
\\sum_{n=1}^{50} a_n = 3 + 10 + 21 + 36 + 55 + 78 + 14 = 217
\\]`
  },
  {
    id: 'qa25-s1-q22',
    questionNumber: 22,
    section: 'QA',
    type: 'TITA',
    topic: 'Arithmetic - Simple Interest',
    difficulty: 'Moderate',
    question: 'An amount of Rs 10000 is deposited in bank A for a certain number of years at a simple interest of 5% per annum. On maturity, the total amount received is deposited in bank B for another 5 years at a simple interest of 6% per annum. If the interests received from bank A and bank B are in the ratio 10 : 13, then the investment period, in years, in bank A is',
    correctAnswer: '6',
    explanation: `Let the investment period in Bank A be \\( T \\) years.
1. Simple interest from Bank A:
\\[
I_A = \\frac{10000 \\times 5 \\times T}{100} = 500T
\\]

2. Maturity amount from Bank A:
\\[
A_1 = 10000 + 500T
\\]

3. Simple interest from Bank B on principal \\( A_1 \\) for 5 years at 6% p.a.:
\\[
I_B = \\frac{(10000 + 500T) \\times 6 \\times 5}{100} = \\frac{30(10000 + 500T)}{100} = 3000 + 150T
\\]

4. Given ratio:
\\[
\\frac{I_A}{I_B} = \\frac{10}{13}
\\]
\\[
\\frac{500T}{3000 + 150T} = \\frac{10}{13}
\\]
Divide numerator and denominator by 50:
\\[
\\frac{10T}{60 + 3T} = \\frac{10}{13}
\\]
Cancel 10 from both sides:
\\[
\\frac{T}{60 + 3T} = \\frac{1}{13}
\\]
\\[
13T = 60 + 3T \\implies 10T = 60 \\implies T = 6 \\text{ years}
\\]`
  }
];
