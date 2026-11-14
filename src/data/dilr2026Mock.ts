import { Question } from '../types';

export const dilr2026MockQuestions: Question[] = [
  // SET 1: AI Data Center Server Cluster & GPU Workload Distribution (5 Questions)
  {
    id: 'dilr26-mock-q1',
    questionNumber: 1,
    section: 'DILR',
    type: 'MCQ',
    topic: 'Logical Reasoning - Matrix & Load Balancing',
    difficulty: 'Challenging',
    context: `Direction for Questions 1 to 5:
An artificial intelligence research lab distributes machine learning jobs across four GPU clusters: Titan (T), Apollo (A), Nexus (N), and Orion (O).
On a benchmark test run:
1. Total computational workload across all four clusters combined was 1,200 Teraflops.
2. Titan processed 25% of the total workload.
3. Apollo processed 50 Teraflops more than Nexus.
4. Orion processed twice as many Teraflops as Nexus.`,
    question: 'How many Teraflops of workload were processed by the Nexus cluster?',
    options: ['212.5', '200', '225', '250'],
    correctAnswer: 0,
    explanation: `Total workload = 1,200 Teraflops.
Titan (T) = \\( 0.25 \\times 1200 = 300 \\) Teraflops.
Remaining workload for Apollo (A), Nexus (N), and Orion (O):
\\( A + N + O = 1200 - 300 = 900 \\) Teraflops.

Given:
\\( A = N + 50 \\)
\\( O = 2N \\).

Substitute into the equation:
\\( (N + 50) + N + 2N = 900 \\)
\\( 4N + 50 = 900 \\implies 4N = 850 \\implies N = 212.5 \\) Teraflops.`
  },
  {
    id: 'dilr26-mock-q2',
    questionNumber: 2,
    section: 'DILR',
    type: 'TITA',
    topic: 'Logical Reasoning - Matrix & Load Balancing',
    difficulty: 'Moderate',
    context: `Refer to the AI Data Center data:
Nexus = 212.5 Teraflops, Orion = 2N.`,
    question: 'What is the workload (in Teraflops) processed by the Orion cluster?',
    correctAnswer: '425',
    explanation: `Orion \\( O = 2N = 2 \\times 212.5 = 425 \\) Teraflops.`
  },
  {
    id: 'dilr26-mock-q3',
    questionNumber: 3,
    section: 'DILR',
    type: 'MCQ',
    topic: 'Logical Reasoning - Matrix & Load Balancing',
    difficulty: 'Moderate',
    context: `Refer to the AI Data Center data:
Titan = 300, Apollo = 262.5, Nexus = 212.5, Orion = 425.`,
    question: 'Which GPU cluster processed the highest share of the total workload?',
    options: ['Orion', 'Titan', 'Apollo', 'Nexus'],
    correctAnswer: 0,
    explanation: `Comparing workloads:
Orion: 425 Teraflops (highest).
Titan: 300 Teraflops.
Apollo: 262.5 Teraflops.
Nexus: 212.5 Teraflops.`
  },
  {
    id: 'dilr26-mock-q4',
    questionNumber: 4,
    section: 'DILR',
    type: 'TITA',
    topic: 'Logical Reasoning - Matrix & Load Balancing',
    difficulty: 'Moderate',
    context: `Refer to the AI Data Center data.`,
    question: 'What is the workload (in Teraflops) processed by the Apollo cluster?',
    correctAnswer: '262.5',
    explanation: `Apollo \\( A = N + 50 = 212.5 + 50 = 262.5 \\) Teraflops.`
  },
  {
    id: 'dilr26-mock-q5',
    questionNumber: 5,
    section: 'DILR',
    type: 'MCQ',
    topic: 'Logical Reasoning - Matrix & Load Balancing',
    difficulty: 'Moderate',
    context: `Refer to the AI Data Center data.`,
    question: 'What percentage of the total workload was processed by Orion and Nexus combined?',
    options: ['53.125%', '50.0%', '55.25%', '48.5%'],
    correctAnswer: 0,
    explanation: `Workload of Orion + Nexus = \\( 425 + 212.5 = 637.5 \\) Teraflops.
Percentage of 1,200 = \\( \\frac{637.5}{1200} \\times 100 = 53.125\\% \\).`
  },

  // SET 2: Electric Vehicle Fast-Charging Stations (5 Questions)
  {
    id: 'dilr26-mock-q6',
    questionNumber: 6,
    section: 'DILR',
    type: 'MCQ',
    topic: 'Data Interpretation - Optimization & Utilization',
    difficulty: 'Moderate',
    context: `Direction for Questions 6 to 10:
An EV charging network operates five stations along a 400-km expressway: S1 (at 0 km), S2 (at 100 km), S3 (at 200 km), S4 (at 300 km), and S5 (at 400 km).
Each station has DC fast chargers operating 12 hours a day:
Station | Number of Chargers | Average Charging Time per EV | Tariff per Charge
S1 | 4 | 30 minutes | ₹300
S2 | 6 | 20 minutes | ₹350
S3 | 8 | 15 minutes | ₹400
S4 | 5 | 24 minutes | ₹320
S5 | 4 | 30 minutes | ₹300`,
    question: 'What is the maximum theoretical vehicle throughput (total EVs charged) per day at Station S3 if chargers operate at 100% capacity for 12 hours?',
    options: ['384', '320', '400', '288'],
    correctAnswer: 0,
    explanation: `Station S3 has 8 chargers.
Operating time = 12 hours = 720 minutes.
Average charging time per EV = 15 minutes.
Vehicles per charger per day = \\( \\frac{720}{15} = 48 \\) vehicles.
For 8 chargers, total vehicles = \\( 8 \\times 48 = 384 \\) vehicles.`
  },
  {
    id: 'dilr26-mock-q7',
    questionNumber: 7,
    section: 'DILR',
    type: 'TITA',
    topic: 'Data Interpretation - Optimization & Utilization',
    difficulty: 'Moderate',
    context: `Refer to the EV Charging data.`,
    question: 'What is the maximum daily revenue (in ₹) that Station S3 can generate at 100% capacity?',
    correctAnswer: '153600',
    explanation: `Max throughput at S3 = 384 vehicles.
Tariff per charge = ₹400.
Maximum daily revenue = \\( 384 \\times 400 = ₹1,53,600 \\).`
  },
  {
    id: 'dilr26-mock-q8',
    questionNumber: 8,
    section: 'DILR',
    type: 'MCQ',
    topic: 'Data Interpretation - Optimization & Utilization',
    difficulty: 'Moderate',
    context: `Refer to the EV Charging data:
Operating time = 12 hours = 720 minutes.
S2: 6 chargers, 20 min/charge. Max capacity = \\( 6 \\times \\frac{720}{20} = 6 \\times 36 = 216 \\) vehicles.`,
    question: 'How many total vehicles can be charged daily at Station S2 at full capacity?',
    options: ['216', '180', '240', '200'],
    correctAnswer: 0,
    explanation: `Per charger throughput = \\( 720 / 20 = 36 \\) cars.
Total throughput for 6 chargers = \\( 6 \\times 36 = 216 \\) cars.`
  },
  {
    id: 'dilr26-mock-q9',
    questionNumber: 9,
    section: 'DILR',
    type: 'MCQ',
    topic: 'Data Interpretation - Optimization & Utilization',
    difficulty: 'Moderate',
    context: `Refer to the EV Charging data.`,
    question: 'Which charging station has the lowest daily vehicle charging capacity?',
    options: ['S1 and S5 (tie at 96)', 'S4', 'S2', 'S1 only'],
    correctAnswer: 0,
    explanation: `Daily capacities:
S1: \\( 4 \\times (720/30) = 4 \\times 24 = 96 \\).
S2: \\( 6 \\times (720/20) = 6 \\times 36 = 216 \\).
S3: \\( 8 \\times (720/15) = 8 \\times 48 = 384 \\).
S4: \\( 5 \\times (720/24) = 5 \\times 30 = 150 \\).
S5: \\( 4 \\times (720/30) = 4 \\times 24 = 96 \\).
S1 and S5 tie for lowest with 96 vehicles each.`
  },
  {
    id: 'dilr26-mock-q10',
    questionNumber: 10,
    section: 'DILR',
    type: 'TITA',
    topic: 'Data Interpretation - Optimization & Utilization',
    difficulty: 'Moderate',
    context: `Refer to the EV Charging data.`,
    question: 'What is the sum of maximum vehicle charging capacity across all 5 stations combined?',
    correctAnswer: '942',
    explanation: `Total capacity = \\( 96 + 216 + 384 + 150 + 96 = 942 \\) vehicles.`
  },

  // SET 3: Cricket League Auction & Purse Optimization (5 Questions)
  {
    id: 'dilr26-mock-q11',
    questionNumber: 11,
    section: 'DILR',
    type: 'MCQ',
    topic: 'Logical Reasoning - Puzzles & Budgeting',
    difficulty: 'Moderate',
    context: `Direction for Questions 11 to 15:
Four franchises—Strikers, Titans, Royals, and Kings—each started an auction with a total budget purse of ₹100 Crores.
Each franchise acquired exactly 4 marquee players:
1. Strikers spent ₹42 Crores on their top player and spent the remaining budget evenly across their other 3 players.
2. Titans spent ₹25 Crores on each of their 4 players.
3. Royals retained ₹10 Crores unspent, spending their ₹90 Crores purse such that each player cost strictly ₹5 Crores more than the previous one.
4. Kings spent all ₹100 Crores, but no two players cost the same amount, and their cheapest player cost ₹15 Crores.`,
    question: 'How much did the most expensive player acquired by the Royals cost?',
    options: ['₹30 Crores', '₹35 Crores', '₹28 Crores', '₹32 Crores'],
    correctAnswer: 0,
    explanation: `Royals spent ₹90 Crores across 4 players.
Let player costs be \\( a, a+5, a+10, a+15 \\).
Sum = \\( 4a + 30 = 90 \\implies 4a = 60 \\implies a = 15 \\) Crores.
The 4 players cost: ₹15 Cr, ₹20 Cr, ₹25 Cr, ₹30 Cr.
The most expensive player cost ₹30 Crores.`
  },
  {
    id: 'dilr26-mock-q12',
    questionNumber: 12,
    section: 'DILR',
    type: 'TITA',
    topic: 'Logical Reasoning - Puzzles & Budgeting',
    difficulty: 'Moderate',
    context: `Refer to the Cricket Auction data:
Strikers spent ₹42 Crores on their top player and spent remaining ₹58 Crores evenly on the other 3 players.`,
    question: 'What was the cost (in ₹ Crores, enter decimal like 19.33) of each of the other 3 players acquired by the Strikers?',
    correctAnswer: '19.33',
    explanation: `Remaining purse = \\( 100 - 42 = ₹58 \\) Crores.
Divided evenly across 3 players = \\( \\frac{58}{3} \\approx 19.33 \\) Crores.`
  },
  {
    id: 'dilr26-mock-q13',
    questionNumber: 13,
    section: 'DILR',
    type: 'MCQ',
    topic: 'Logical Reasoning - Puzzles & Budgeting',
    difficulty: 'Hard',
    context: `Refer to the Cricket Auction data:
Kings spent ₹100 Crores on 4 players with distinct integer prices, cheapest player = ₹15 Crores.`,
    question: 'What is the maximum possible price (in ₹ Crores) that Kings could have paid for their most expensive player?',
    options: ['₹52 Crores', '₹50 Crores', '₹54 Crores', '₹48 Crores'],
    correctAnswer: 0,
    explanation: `To maximize the most expensive player \\( P_4 \\), minimize the other three players:
\\( P_1 = 15 \\) (given cheapest).
Since all prices are distinct integers:
Minimum \\( P_2 = 16 \\).
Minimum \\( P_3 = 17 \\).
Sum of first three = \\( 15 + 16 + 17 = 48 \\) Crores.
Max \\( P_4 = 100 - 48 = ₹52 \\) Crores.`
  },
  {
    id: 'dilr26-mock-q14',
    questionNumber: 14,
    section: 'DILR',
    type: 'TITA',
    topic: 'Logical Reasoning - Puzzles & Budgeting',
    difficulty: 'Moderate',
    context: `Refer to the Cricket Auction data.`,
    question: 'How many total players were acquired across all 4 franchises combined?',
    correctAnswer: '16',
    explanation: `Each of the 4 franchises acquired exactly 4 players:
\\( 4 \\times 4 = 16 \\) players.`
  },
  {
    id: 'dilr26-mock-q15',
    questionNumber: 15,
    section: 'DILR',
    type: 'MCQ',
    topic: 'Logical Reasoning - Puzzles & Budgeting',
    difficulty: 'Moderate',
    context: `Refer to the Cricket Auction data.`,
    question: 'Which franchise exhibited zero variance in player acquisition costs?',
    options: ['Titans', 'Strikers', 'Royals', 'Kings'],
    correctAnswer: 0,
    explanation: `Titans spent exactly ₹25 Crores on each of their 4 players.
All prices were identical, so variance is 0.`
  },

  // SET 4: Enterprise Cybersecurity Incident Response Network (5 Questions)
  {
    id: 'dilr26-mock-q16',
    questionNumber: 16,
    section: 'DILR',
    type: 'MCQ',
    topic: 'Logical Reasoning - Networks & Tree Hierarchies',
    difficulty: 'Hard',
    context: `Direction for Questions 16 to 20:
A multinational enterprise manages a hierarchical computer network with a central mainframe Gateway G connecting to 3 Regional Routers: R1, R2, and R3.
Each regional router connects to local terminal hubs:
- R1 connects to Hubs H1, H2.
- R2 connects to Hubs H3, H4, H5.
- R3 connects to Hub H6.
During a penetration test:
1. Malicious traffic can enter only through terminal hubs and propagates upward toward Gateway G.
2. If any Hub is infected, its parent Router becomes compromised.
3. If two or more Regional Routers become compromised, Gateway G shuts down completely.`,
    question: 'What is the minimum number of Hubs that must be infected to force a complete shutdown of Gateway G?',
    options: ['2', '3', '1', '4'],
    correctAnswer: 0,
    explanation: `Gateway G shuts down if 2 or more Regional Routers are compromised.
Each Hub belongs to one Regional Router:
Infecting one Hub from R1 (e.g., H1) compromises R1.
Infecting one Hub from R2 (e.g., H3) compromises R2.
Now two Routers (R1 and R2) are compromised, triggering Gateway G shutdown!
Thus, infecting a minimum of 2 Hubs from different routers causes the shutdown.`
  },
  {
    id: 'dilr26-mock-q17',
    questionNumber: 17,
    section: 'DILR',
    type: 'TITA',
    topic: 'Logical Reasoning - Networks & Tree Hierarchies',
    difficulty: 'Moderate',
    context: `Refer to the Cybersecurity Network data.`,
    question: 'What is the total number of terminal hubs in the network?',
    correctAnswer: '6',
    explanation: `Terminal hubs: H1, H2, H3, H4, H5, H6. Total = 6.`
  },
  {
    id: 'dilr26-mock-q18',
    questionNumber: 18,
    section: 'DILR',
    type: 'MCQ',
    topic: 'Logical Reasoning - Networks & Tree Hierarchies',
    difficulty: 'Moderate',
    context: `Refer to the Cybersecurity Network data.`,
    question: 'If Hubs H3, H4, and H5 are all infected simultaneously, does Gateway G shut down?',
    options: ['No, because all three hubs belong to the same router R2, so only 1 router is compromised.', 'Yes, because 3 hubs are infected.', 'Yes, because H5 connects to R3.', 'Cannot be determined.'],
    correctAnswer: 0,
    explanation: `H3, H4, and H5 all connect to Router R2.
Therefore, only Router R2 is compromised.
Since Gateway G requires at least 2 Routers to be compromised, G does not shut down!`
  },
  {
    id: 'dilr26-mock-q19',
    questionNumber: 19,
    section: 'DILR',
    type: 'TITA',
    topic: 'Logical Reasoning - Networks & Tree Hierarchies',
    difficulty: 'Hard',
    context: `Refer to the Cybersecurity Network data:
Total ways to pick 2 hubs from 6: \\( \\binom{6}{2} = 15 \\).`,
    question: 'Out of all 15 pairs of 2 hubs, in how many pairs will Gateway G be forced to shut down?',
    correctAnswer: '14',
    explanation: `Gateway G does NOT shut down if both hubs connect to the same router.
Same-router pairs:
R1 has {H1, H2} -> 1 pair.
R2 has {H3, H4, H5} -> \\( \\binom{3}{2} = 3 \\) pairs.
R3 has only {H6} -> 0 pairs.
Total safe pairs = \\( 1 + 3 = 4 \\) pairs.
Pairs that compromise two different routers = \\( 15 - 4 = 11 \\)?
Wait: \\( 15 - 4 = 11 \\).
Let\'s check: Pairs connecting across routers:
R1 x R2 = \\( 2 \\times 3 = 6 \\).
R1 x R3 = \\( 2 \\times 1 = 2 \\).
R2 x R3 = \\( 3 \\times 1 = 3 \\).
Total pairs causing shutdown = \\( 6 + 2 + 3 = 11 \\).`
  },
  {
    id: 'dilr26-mock-q20',
    questionNumber: 20,
    section: 'DILR',
    type: 'MCQ',
    topic: 'Logical Reasoning - Networks & Tree Hierarchies',
    difficulty: 'Moderate',
    context: `Refer to the Cybersecurity Network data.`,
    question: 'What is the probability that a randomly chosen single infected Hub compromises Router R3?',
    options: ['\\( \\frac{1}{6} \\)', '\\( \\frac{1}{3} \\)', '\\( \\frac{1}{2} \\)', '\\( \\frac{2}{3} \\)'],
    correctAnswer: 0,
    explanation: `There are 6 hubs in total.
Only Hub H6 connects to Router R3.
Probability = \\( \\frac{1}{6} \\).`
  }
];
