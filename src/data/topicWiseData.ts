import { SectionalTest } from '../types';
import { qa2023Slot1Questions } from './qa2023';
import { qa2023Slot2Questions } from './qa2023Slot2';
import { qa2023Slot3Questions } from './qa2023Slot3';
import { qa2022Slot1Questions } from './qa2022';
import { qa2022Slot2Questions } from './qa2022Slot2';
import { qa2022Slot3Questions } from './qa2022Slot3';
import { qa2021Slot1Questions } from './qa2021';
import { qa2021Slot2Questions } from './qa2021Slot2';
import { qa2020Slot1Questions } from './qa2020Slot1';
import { varc2023Slot2Questions } from './varc2023';
import { varc2022Slot2Questions } from './varc2022';
import { varc2021Slot1Questions } from './varc2021';
import { varc2020Slot1Questions } from './varc2020Slot1';
import { dilr2023Slot1Questions } from './dilr2023';
import { dilr2022Slot3Questions } from './dilr2022';
import { dilr2021Slot1Questions } from './dilr2021';
import { dilr2020Slot1Questions } from './dilr2020Slot1';

// 1. QA Topic-Wise Sets
export const arithmeticMasteryTest: SectionalTest = {
  id: 'tw-qa-arithmetic',
  title: 'Arithmetic Mastery: High-Yield CAT Core',
  year: 'Best PYQs Set',
  slot: 'Topic Test',
  section: 'QA',
  category: 'topic-wise',
  topicTag: 'Arithmetic',
  durationMinutes: 20,
  totalMarks: 30,
  questionsCount: 10,
  difficulty: 'Moderate',
  description: 'Curated collection of the most frequently tested Arithmetic questions from CAT: Time Speed Distance, Time & Work, Profit & Loss, Percentages, and Mixtures.',
  questions: [
    qa2023Slot1Questions[0], // Time and Work (Amal, Bimal, Kamal)
    qa2023Slot1Questions[2], // Averages
    qa2023Slot1Questions[6], // TSD meeting trains
    qa2023Slot1Questions[9], // Profit & Loss
    qa2023Slot1Questions[17], // Simple & Compound Interest
    qa2023Slot1Questions[18], // Mixtures & Alligation
    qa2022Slot1Questions[0], // TSD meeting point theorem
    qa2022Slot1Questions[2], // Mixtures & alcohol
    qa2022Slot1Questions[4], // Petrol percentage
    qa2022Slot1Questions[14], // Escalators
  ].map((q, idx) => ({ ...q, questionNumber: idx + 1, id: `tw-arith-${idx + 1}` }))
};

export const algebraMasteryTest: SectionalTest = {
  id: 'tw-qa-algebra',
  title: 'Algebra & Functions Elite Challenge',
  year: 'Best PYQs Set',
  slot: 'Topic Test',
  section: 'QA',
  category: 'topic-wise',
  topicTag: 'Algebra',
  durationMinutes: 20,
  totalMarks: 30,
  questionsCount: 10,
  difficulty: 'Challenging',
  description: 'Handpicked advanced Algebra questions: Logarithms, Quadratic Equations, Maxima-Minima, Sequences (AP/GP), Functions, and Modulus Inequalities.',
  questions: [
    qa2023Slot1Questions[1], // Logarithms
    qa2023Slot1Questions[4], // Quadratic roots ratio
    qa2023Slot1Questions[8], // AP 20 and 40 terms
    qa2023Slot1Questions[10], // Functions max(2x+1, 3-x)
    qa2023Slot1Questions[13], // Modulus inequality
    qa2023Slot1Questions[19], // Polynomial x^5 + 1/x^5
    qa2022Slot1Questions[1], // Minimum value of sum of squares
    qa2022Slot1Questions[5], // Logarithms base change
    qa2022Slot1Questions[8], // Infinite GP
    qa2022Slot1Questions[15], // AM-GM inequality maxima
  ].map((q, idx) => ({ ...q, questionNumber: idx + 1, id: `tw-alg-${idx + 1}` }))
};

export const geometryMasteryTest: SectionalTest = {
  id: 'tw-qa-geometry',
  title: 'Geometry & Mensuration Benchmark Set',
  year: 'Best PYQs Set',
  slot: 'Topic Test',
  section: 'QA',
  category: 'topic-wise',
  topicTag: 'Geometry',
  durationMinutes: 20,
  totalMarks: 30,
  questionsCount: 10,
  difficulty: 'Challenging',
  description: 'High-yield Geometry set: Incircle of right triangle, Direct Common Tangents, Coordinate Circumcenter, Sphere-cone recasting, Chords, and Angle-Sector areas.',
  questions: [
    qa2023Slot1Questions[3], // Inradius of right triangle
    qa2023Slot1Questions[12], // Direct common tangent
    qa2023Slot1Questions[16], // Coordinate circumcenter
    qa2023Slot1Questions[20], // Metallic sphere recast
    qa2022Slot1Questions[3], // Chord of circle
    qa2022Slot1Questions[10], // Circumscribed circle
    qa2022Slot1Questions[16], // Acute angled triangle sides
    qa2021Slot1Questions[3], // Tangent and circle
    qa2021Slot1Questions[10], // Area enclosed by lines
    qa2021Slot1Questions[15], // Triangle inradius (13, 14, 15)
  ].map((q, idx) => ({ ...q, questionNumber: idx + 1, id: `tw-geom-${idx + 1}` }))
};

export const numbersModernMathTest: SectionalTest = {
  id: 'tw-qa-modern-math',
  title: 'Numbers, P&C and Probability Challenge',
  year: 'Best PYQs Set',
  slot: 'Topic Test',
  section: 'QA',
  category: 'topic-wise',
  topicTag: 'Numbers & PnC',
  durationMinutes: 20,
  totalMarks: 30,
  questionsCount: 10,
  difficulty: 'Challenging',
  description: 'Curated problems on Euler totient remainders, highest power in factorials, gap method permutations, dice probability, unit digit cyclicity, and square divisors.',
  questions: [
    qa2023Slot1Questions[5], // Remainder 7^104 mod 25
    qa2023Slot1Questions[7], // 5 red 4 blue gap method
    qa2023Slot1Questions[11], // 2 aces probability
    qa2023Slot1Questions[15], // Highest power of 12 in 100!
    qa2022Slot1Questions[7], // Unit digit 3^65 * 6^59 * 7^71
    qa2022Slot1Questions[9], // 4-digit numbers divisible by 5
    qa2022Slot1Questions[13], // Even factors of 360
    qa2021Slot1Questions[7], // Permutations at least 3 women
    qa2021Slot1Questions[14], // Divisors of 1440 perfect squares
    qa2021Slot1Questions[16], // Three dice sum 5 probability
  ].map((q, idx) => ({ ...q, questionNumber: idx + 1, id: `tw-num-${idx + 1}` }))
};

export const arithmeticAdvancedTest: SectionalTest = {
  id: 'tw-qa-arith-adv',
  title: 'Arithmetic Advanced: TSD, Work, Pipes & Escalators',
  year: 'Best PYQs Set',
  slot: 'Topic Test',
  section: 'QA',
  category: 'topic-wise',
  topicTag: 'Arithmetic',
  durationMinutes: 20,
  totalMarks: 30,
  questionsCount: 10,
  difficulty: 'Challenging',
  description: 'Advanced problems from recent CAT papers covering relative speed, moving escalators, multi-person work shifts, replacement mixtures, and compound interest.',
  questions: [
    qa2023Slot2Questions[1], // Profit & loss sunglasses
    qa2023Slot2Questions[3], // TSD Ravi Vijay Ashok relative speed
    qa2023Slot2Questions[7], // Time & work Anu Tanu Manu
    qa2023Slot2Questions[12], // Mixture 20L replacement
    qa2023Slot2Questions[14], // Compound interest 8000 to 10000
    qa2022Slot2Questions[5], // Trains crossing in 14s and 70s
    qa2022Slot2Questions[6], // Markup and discount
    qa2022Slot2Questions[12], // Zinc copper alloy
    qa2022Slot2Questions[15], // Escalators moving down
    qa2021Slot2Questions[2], // 100m race A beats B beats C
  ].map((q, idx) => ({ ...q, questionNumber: idx + 1, id: `tw-arith-adv-${idx + 1}` }))
};

export const higherAlgebraTest: SectionalTest = {
  id: 'tw-qa-algebra-adv',
  title: 'Higher Algebra: Quadratics, AM-GM & Modulus Inequalities',
  year: 'Best PYQs Set',
  slot: 'Topic Test',
  section: 'QA',
  category: 'topic-wise',
  topicTag: 'Algebra',
  durationMinutes: 20,
  totalMarks: 30,
  questionsCount: 10,
  difficulty: 'Challenging',
  description: 'Master quadratic roots, AM-GM optimization, exponential roots, functional equations, and modulus domain analysis from official CAT papers.',
  questions: [
    qa2023Slot2Questions[5], // Quadratic AM-GM min value
    qa2023Slot2Questions[6], // Exponential equation 2^(4x^2)
    qa2023Slot2Questions[9], // Max-min a + 2b = 6
    qa2023Slot2Questions[15], // AP S_10 = S_15 => S_25 = 0
    qa2023Slot2Questions[19], // Function f(x) = 4^x / (4^x + 2)
    qa2022Slot2Questions[3], // Linear optimization average 4.5
    qa2022Slot2Questions[7], // Quadratic roots alpha^2 + beta^2 = 25
    qa2022Slot2Questions[11], // Function f(f(x)) = x involution
    qa2022Slot2Questions[17], // Modulus inequality |x-3| + |x+2| < 9
    qa2021Slot2Questions[0], // Function range [3/7, 1/2)
  ].map((q, idx) => ({ ...q, questionNumber: idx + 1, id: `tw-alg-adv-${idx + 1}` }))
};

export const logarithmsIndicesTest: SectionalTest = {
  id: 'tw-qa-log-indices',
  title: 'Logarithms, Indices & Exponents Mastery',
  year: 'Best PYQs Set',
  slot: 'Topic Test',
  section: 'QA',
  category: 'topic-wise',
  topicTag: 'Algebra',
  durationMinutes: 20,
  totalMarks: 30,
  questionsCount: 10,
  difficulty: 'Moderate',
  description: 'Intensive set on base change theorem, logarithmic inequalities, prime factor power analysis, and multi-base logarithm systems.',
  questions: [
    qa2023Slot1Questions[1], // Nested log 4x = 5
    qa2023Slot2Questions[0], // Indices 144^145 => n - m = 579
    qa2023Slot2Questions[10], // Log inequality (4-log2 n)/(3-log4 n) < 0
    qa2022Slot1Questions[5], // Log base change
    qa2022Slot2Questions[4], // Log inequality integers = 47
    qa2021Slot1Questions[1], // log2(x+y)=3 and log2 x + log2 y = 2+log2 3
    qa2021Slot2Questions[5], // log3 x + log9 x + log27 x = 11/2 => x = 27
    qa2023Slot1Questions[19], // Polynomial x^5 + 1/x^5
    qa2022Slot1Questions[1], // Min sum of squares
    qa2021Slot2Questions[18], // System 3x + 2y = 12, xy = 3 => 9x^2 + 4y^2 = 108
  ].map((q, idx) => ({ ...q, questionNumber: idx + 1, id: `tw-log-${idx + 1}` }))
};

export const geometryCirclesTrianglesTest: SectionalTest = {
  id: 'tw-qa-geom-circles',
  title: 'Geometry & Mensuration: Circles, Tangents & Polygons',
  year: 'Best PYQs Set',
  slot: 'Topic Test',
  section: 'QA',
  category: 'topic-wise',
  topicTag: 'Geometry',
  durationMinutes: 20,
  totalMarks: 30,
  questionsCount: 10,
  difficulty: 'Challenging',
  description: 'Circles inscribed in right triangles, tangent-secant properties, concentric circle chords, regular polygon angle ratios, and coordinate geometry.',
  questions: [
    qa2023Slot2Questions[2], // Triangle diameter in circle area 2abr^2/(a^2+b^2)
    qa2023Slot2Questions[8], // Polygon sides ratio 1:2, angles 3:4 => 10 sides
    qa2023Slot2Questions[11], // Altitudes AD/BE = sqrt(2)sin theta
    qa2023Slot2Questions[16], // Coordinate square area |x| + |y| = 4 => 32
    qa2023Slot2Questions[20], // Concentric circles chord 24 cm
    qa2022Slot2Questions[8], // Tangent secant PT^2 = PA * PB = 36
    qa2022Slot2Questions[14], // Similar triangles in trapezium area 60
    qa2021Slot2Questions[4], // Parallel tangents angle POQ = 90
    qa2021Slot2Questions[9], // Incenter angle BIC = 130
    qa2021Slot2Questions[19], // Cone slant height = 13
  ].map((q, idx) => ({ ...q, questionNumber: idx + 1, id: `tw-geom-circ-${idx + 1}` }))
};

export const numberSystemsRemaindersTest: SectionalTest = {
  id: 'tw-qa-num-remainders',
  title: 'Number Systems: Divisibility, Factors & Remainders',
  year: 'Best PYQs Set',
  slot: 'Topic Test',
  section: 'QA',
  category: 'topic-wise',
  topicTag: 'Numbers & PnC',
  durationMinutes: 20,
  totalMarks: 30,
  questionsCount: 10,
  difficulty: 'Moderate',
  description: 'High-yield Number Systems collection: common divisor logic, power remainders modulo prime, number of factors, cyclicity of unit digits, and divisibility rules.',
  questions: [
    qa2023Slot2Questions[4], // k divides m+2n and 3m+4n => k divides m and 2n
    qa2023Slot2Questions[21], // Remainder 2^100 mod 7 = 2
    qa2022Slot2Questions[9], // Factors of 3600 divisible by 12 = 18
    qa2022Slot2Questions[16], // Unit digit 7^95 - 3^58 = 4
    qa2021Slot2Questions[6], // Remainder N mod 14 = 9 => N^2 + 3N mod 14 = 10
    qa2021Slot2Questions[16], // Divisibility by 72: 4x572y
    qa2021Slot2Questions[20], // Sum between 100 and 300 div by 13
    qa2023Slot1Questions[5], // Remainder 7^104 mod 25
    qa2022Slot1Questions[7], // Unit digit 3^65 * 6^59 * 7^71
    qa2021Slot1Questions[8], // Highest power of 3 in 50!
  ].map((q, idx) => ({ ...q, questionNumber: idx + 1, id: `tw-num-rem-${idx + 1}` }))
};

export const permutationsProbabilityTest: SectionalTest = {
  id: 'tw-qa-pnc-prob',
  title: 'Modern Math: P&C, Arrangements & Probability',
  year: 'Best PYQs Set',
  slot: 'Topic Test',
  section: 'QA',
  category: 'topic-wise',
  topicTag: 'Numbers & PnC',
  durationMinutes: 20,
  totalMarks: 30,
  questionsCount: 10,
  difficulty: 'Challenging',
  description: 'Comprehensive Modern Math challenge: gap method arrangements, committee selection with conditions, colored ball probabilities, and two-dice prime outcomes.',
  questions: [
    qa2023Slot2Questions[13], // 4-digit numbers > 3000 without repetition = 180
    qa2023Slot2Questions[17], // Two fair dice sum is prime = 5/12
    qa2022Slot2Questions[10], // 5 boys 4 girls no two girls together = 43200
    qa2022Slot2Questions[20], // Venn diagram football and cricket = 15
    qa2021Slot2Questions[7], // 3 balls drawn of different colors = 3/11
    qa2021Slot2Questions[13], // Committee of 5 with at least 2 women = 186
    qa2023Slot1Questions[7], // 5 red 4 blue gap method
    qa2023Slot1Questions[11], // 2 aces probability
    qa2021Slot1Questions[7], // Permutations at least 3 women
    qa2021Slot1Questions[16], // Three dice sum 5 probability
  ].map((q, idx) => ({ ...q, questionNumber: idx + 1, id: `tw-pnc-prob-${idx + 1}` }))
};

// 2. VARC Topic-Wise Sets
export const varcPhilosophyTechRcTest: SectionalTest = {
  id: 'tw-varc-rc-philosophy',
  title: 'Philosophy & Technology Reading Comprehension Masterset',
  year: 'Best RC Set',
  slot: 'Topic Test',
  section: 'VARC',
  category: 'topic-wise',
  topicTag: 'RC Deep Dives',
  durationMinutes: 20,
  totalMarks: 24,
  questionsCount: 8,
  difficulty: 'Very High',
  description: 'Two dense, intellectually rigorous CAT Reading Comprehension passages: AI & the Illusion of Autonomy, and Hellenistic Stoic Virtue vs Cynicism.',
  questions: [
    ...varc2023Slot2Questions.slice(0, 4), // RC 1: AI & Autonomy
    ...varc2022Slot2Questions.slice(0, 4), // RC 1: Hellenistic Philosophy
  ].map((q, idx) => ({ ...q, questionNumber: idx + 1, id: `tw-rc-phil-${idx + 1}` }))
};

export const varcEcologyScienceRcTest: SectionalTest = {
  id: 'tw-varc-rc-science',
  title: 'Science, Ecology & Anthropology RC Masterset',
  year: 'Best RC Set',
  slot: 'Topic Test',
  section: 'VARC',
  category: 'topic-wise',
  topicTag: 'RC Deep Dives',
  durationMinutes: 20,
  totalMarks: 24,
  questionsCount: 8,
  difficulty: 'Challenging',
  description: 'Two high-yield scientific and social sciences passages: Biomimetic Architecture (Termite Convection) and Marcel Mauss Gift Economies (Total Social Phenomenon).',
  questions: [
    ...varc2022Slot2Questions.slice(4, 8), // Biomimetic Architecture
    ...varc2022Slot2Questions.slice(8, 12), // Marcel Mauss Gift Economy
  ].map((q, idx) => ({ ...q, questionNumber: idx + 1, id: `tw-rc-sci-${idx + 1}` }))
};

export const varcVerbalAbilityPowerPack: SectionalTest = {
  id: 'tw-varc-va-powerpack',
  title: 'Verbal Ability Power Pack (Speed & Accuracy Drill)',
  year: 'Best VA Set',
  slot: 'Topic Test',
  section: 'VARC',
  category: 'topic-wise',
  topicTag: 'Verbal Ability',
  durationMinutes: 16,
  totalMarks: 24,
  questionsCount: 8,
  difficulty: 'Moderate',
  description: 'Rapid-fire Verbal Ability practice: 2 Para Summaries, 2 TITA Para Jumbles, 2 TITA Odd Sentence Out questions, and 2 Sentence Placement items.',
  questions: [
    varc2023Slot2Questions[16], // Para Summary Homo Economicus
    varc2023Slot2Questions[17], // Para Summary Quantum Biology
    varc2023Slot2Questions[18], // Para Jumble Tibetan EPAS1
    varc2023Slot2Questions[19], // Para Jumble Generative Urbanism
    varc2023Slot2Questions[20], // Odd Sentence EUV Lithography
    varc2023Slot2Questions[21], // Odd Sentence Music neuroscience
    varc2023Slot2Questions[22], // Sentence Placement Halophytic plants
    varc2022Slot2Questions[22], // Sentence Placement Magnetosphere
  ].map((q, idx) => ({ ...q, questionNumber: idx + 1, id: `tw-va-drill-${idx + 1}` }))
};

// 3. DILR Topic-Wise Sets
export const dilrMatrixArrangementsTest: SectionalTest = {
  id: 'tw-dilr-matrix',
  title: 'Matrix & Constraint Satisfaction Puzzles (DILR)',
  year: 'Best DILR Set',
  slot: 'Topic Test',
  section: 'DILR',
  category: 'topic-wise',
  topicTag: 'Matrix & Arrangements',
  durationMinutes: 20,
  totalMarks: 30,
  questionsCount: 10,
  difficulty: 'Challenging',
  description: 'Two full 5-question matrix puzzles: AI Project Evaluation Matrix (4 teams × 4 modules) and Hospital Resident Doctor Night Shift Rosters.',
  questions: [
    ...dilr2023Slot1Questions.slice(0, 5), // Set 1: AI Project Matrix
    ...dilr2022Slot3Questions.slice(0, 5), // Set 1: Hospital Resident Doctors
  ].map((q, idx) => ({ ...q, questionNumber: idx + 1, id: `tw-dilr-matrix-${idx + 1}` }))
};

export const dilrTournamentsTest: SectionalTest = {
  id: 'tw-dilr-tournaments',
  title: 'Games & Tournaments Master Set (DILR)',
  year: 'Best DILR Set',
  slot: 'Topic Test',
  section: 'DILR',
  category: 'topic-wise',
  topicTag: 'Games & Tournaments',
  durationMinutes: 20,
  totalMarks: 30,
  questionsCount: 10,
  difficulty: 'Challenging',
  description: 'Two comprehensive tournament sets: Round-Robin Football League (Goals For / Goals Against deduction) and Grandmaster Blitz Chess Invitational Points Table.',
  questions: [
    ...dilr2023Slot1Questions.slice(10, 15), // Set 3: Football Round Robin
    ...dilr2022Slot3Questions.slice(10, 15), // Set 3: Grandmaster Blitz Chess
  ].map((q, idx) => ({ ...q, questionNumber: idx + 1, id: `tw-dilr-tourn-${idx + 1}` }))
};

export const dilrDataInterpretationTest: SectionalTest = {
  id: 'tw-dilr-di-tables',
  title: 'Data Interpretation: Growth, Ratios & Revenue (DILR)',
  year: 'Best DILR Set',
  slot: 'Topic Test',
  section: 'DILR',
  category: 'topic-wise',
  topicTag: 'Data Interpretation',
  durationMinutes: 20,
  totalMarks: 30,
  questionsCount: 10,
  difficulty: 'Moderate',
  description: 'Two calculation-heavy Data Interpretation sets: Semiconductor Quarterly Shipments & Operating Profit Margins, and CleanTech Power Grid Generation.',
  questions: [
    ...dilr2023Slot1Questions.slice(5, 10), // Set 2: Semiconductor ASP & Revenue
    ...dilr2022Slot3Questions.slice(5, 10), // Set 2: CleanTech Power Grids
  ].map((q, idx) => ({ ...q, questionNumber: idx + 1, id: `tw-dilr-di-${idx + 1}` }))
};

export const dilrRoutesNetworksTest: SectionalTest = {
  id: 'tw-dilr-routes',
  title: 'Routes, Networks & Optimization Flows (DILR)',
  year: 'Best DILR Set',
  slot: 'Topic Test',
  section: 'DILR',
  category: 'topic-wise',
  topicTag: 'Routes & Flow',
  durationMinutes: 20,
  totalMarks: 30,
  questionsCount: 10,
  difficulty: 'Challenging',
  description: 'Two graph and network flow sets: Inter-City Cargo Routing Network (Fuel + Toll optimization) and Cloud CDN Edge Relay Maximum Throughput (Max-Flow Min-Cut).',
  questions: [
    ...dilr2023Slot1Questions.slice(15, 20), // Set 4: Inter-city cargo toll
    ...dilr2022Slot3Questions.slice(15, 20), // Set 4: CDN Network Flow
  ].map((q, idx) => ({ ...q, questionNumber: idx + 1, id: `tw-dilr-routes-${idx + 1}` }))
};

// 4. Elite Cross-Year Master Sets
export const quantHardestClassicsTest: SectionalTest = {
  id: 'tw-qa-hardest-classics',
  title: 'CAT Quant Hardest Benchmark Classics',
  year: 'Elite Master Set',
  slot: 'Topic Test',
  section: 'QA',
  category: 'topic-wise',
  topicTag: 'Challenging Quant',
  durationMinutes: 25,
  totalMarks: 30,
  questionsCount: 10,
  difficulty: 'Challenging',
  description: 'Curated 10 highest-differentiator Quant questions from CAT 2020-2023: Logarithm AP, Powers of 2 Bounds, Rational Function Compositions, Meeting Point Speeds, Rhombus Inscribed Circles, and AM-GM Minima.',
  questions: [
    qa2023Slot3Questions[0], // AP in logarithms
    qa2023Slot3Questions[1], // Powers of 2 between 8^m and 8^n
    qa2023Slot2Questions[12], // Logarithm quadratic
    qa2022Slot3Questions[1], // Rational function cycle f^2024(3)
    qa2022Slot3Questions[8], // Logarithm base inequality
    qa2022Slot3Questions[16], // AM-GM product minimum
    qa2020Slot1Questions[1], // Car 1 & Car 2 meeting point theorem
    qa2020Slot1Questions[2], // Logarithm base equation y = 36
    qa2020Slot1Questions[4], // Rhombus inscribed circle
    qa2020Slot1Questions[5], // Train emergency halt
  ].map((q, idx) => ({ ...q, questionNumber: idx + 1, id: `tw-qa-hardest-${idx + 1}` }))
};

export const dilrClinicalTrialVennTest: SectionalTest = {
  id: 'tw-dilr-clinical-puzzles',
  title: 'Clinical Trials & Cryptarithmetic Puzzles (DILR)',
  year: 'Elite Master Set',
  slot: 'Topic Test',
  section: 'DILR',
  category: 'topic-wise',
  topicTag: 'Set Theory & Puzzles',
  durationMinutes: 25,
  totalMarks: 30,
  questionsCount: 10,
  difficulty: 'Challenging',
  description: 'Two analytical puzzle sets from CAT 2020: 100-Patient Clinical Trial 3-Way Overlap Matrix, and 4-Digit ATM PIN Cryptarithmetic Deductions.',
  questions: [
    ...dilr2020Slot1Questions.slice(0, 6), // Set 1: Clinical Trials (6 Qs)
    ...dilr2020Slot1Questions.slice(16, 20), // Set 4: ATM PIN & Cryptarithmetic (4 Qs)
  ].map((q, idx) => ({ ...q, questionNumber: idx + 1, id: `tw-dilr-clin-${idx + 1}` }))
};

export const varcAnthropologyPhilosophyTest: SectionalTest = {
  id: 'tw-varc-anthro-philosophy',
  title: 'Critical Philosophy & Crop Ecology (VARC)',
  year: 'Elite Master Set',
  slot: 'Topic Test',
  section: 'VARC',
  category: 'topic-wise',
  topicTag: 'Philosophy & Anthropology RC',
  durationMinutes: 20,
  totalMarks: 24,
  questionsCount: 8,
  difficulty: 'Challenging',
  description: 'Two dense academic reading comprehension passages: Philosophical Anarchism & Moral Autonomy, and Neolithic Crop Ecology & Historical Inequality.',
  questions: [
    ...varc2020Slot1Questions.slice(0, 4), // RC 1: Anarchism & Authority (4 Qs)
    ...varc2020Slot1Questions.slice(8, 12), // RC 3: Neolithic Revolution & Crops (4 Qs)
  ].map((q, idx) => ({ ...q, questionNumber: idx + 1, id: `tw-varc-anthro-${idx + 1}` }))
};

export const allTopicWiseTests: SectionalTest[] = [
  // Quant Topic Sets
  arithmeticMasteryTest,
  arithmeticAdvancedTest,
  algebraMasteryTest,
  higherAlgebraTest,
  logarithmsIndicesTest,
  geometryMasteryTest,
  geometryCirclesTrianglesTest,
  numbersModernMathTest,
  numberSystemsRemaindersTest,
  permutationsProbabilityTest,
  quantHardestClassicsTest,

  // VARC Topic Sets
  varcPhilosophyTechRcTest,
  varcEcologyScienceRcTest,
  varcVerbalAbilityPowerPack,
  varcAnthropologyPhilosophyTest,

  // DILR Topic Sets
  dilrMatrixArrangementsTest,
  dilrTournamentsTest,
  dilrDataInterpretationTest,
  dilrRoutesNetworksTest,
  dilrClinicalTrialVennTest,
];
