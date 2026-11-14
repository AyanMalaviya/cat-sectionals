import { SectionalTest } from '../types';
import { qa2026MockQuestions } from './qa2026Mock';
import { dilr2026MockQuestions } from './dilr2026Mock';
import { qa2025Slot1Questions } from './qa2025Slot1';
import { qa2024Slot1Questions } from './qa2024Slot1';
import { dilr2024Slot1Questions } from './dilr2024Slot1';
import { qa2023Slot1Questions } from './qa2023';
import { qa2023Slot2Questions } from './qa2023Slot2';
import { qa2023Slot3Questions } from './qa2023Slot3';
import { varc2023Slot2Questions } from './varc2023';
import { dilr2023Slot1Questions } from './dilr2023';
import { qa2022Slot1Questions } from './qa2022';
import { qa2022Slot2Questions } from './qa2022Slot2';
import { qa2022Slot3Questions } from './qa2022Slot3';
import { varc2022Slot2Questions } from './varc2022';
import { dilr2022Slot3Questions } from './dilr2022';
import { qa2021Slot1Questions } from './qa2021';
import { qa2021Slot2Questions } from './qa2021Slot2';
import { varc2021Slot1Questions } from './varc2021';
import { dilr2021Slot1Questions } from './dilr2021';
import { qa2020Slot1Questions } from './qa2020Slot1';
import { dilr2020Slot1Questions } from './dilr2020Slot1';
import { varc2020Slot1Questions } from './varc2020Slot1';
import { allTopicWiseTests } from './topicWiseData';

// Full 40-Minute Sectional Tests
export const fullSectionalTests: SectionalTest[] = [
  // CAT 2026 National Mock Series
  {
    id: 'cat-2026-qa-mock',
    title: 'CAT 2026 All-India Specimen Mock - Quantitative Aptitude',
    year: 'CAT 2026',
    slot: 'All-India Mock',
    section: 'QA',
    category: 'sectional-pyq',
    durationMinutes: 40,
    totalMarks: 66,
    questionsCount: 22,
    difficulty: 'Challenging',
    description: 'Premier CAT 2026 All-India Specimen Mock reflecting the newest testing trends: Quadratic AM-GM limits, Trailing zeros, Hexagon geometry, and Time & Work cycles.',
    questions: qa2026MockQuestions,
  },
  {
    id: 'cat-2026-dilr-mock',
    title: 'CAT 2026 All-India Specimen Mock - Data Interpretation & LR',
    year: 'CAT 2026',
    slot: 'All-India Mock',
    section: 'DILR',
    category: 'sectional-pyq',
    durationMinutes: 40,
    totalMarks: 60,
    questionsCount: 20,
    difficulty: 'Challenging',
    description: 'Premier CAT 2026 Benchmark Mock: AI Data Center Server Loads, Expressway EV Fast-Charging Throughput, Cricket Auction Budgets, and Cybersecurity Ransomware Network Trees.',
    questions: dilr2026MockQuestions,
  },

  // CAT 2025 Full Sectionals
  {
    id: 'cat-2025-qa-s1',
    title: 'CAT 2025 Slot 1 - Quantitative Aptitude',
    year: 'CAT 2025',
    slot: 'Slot 1',
    section: 'QA',
    category: 'sectional-pyq',
    durationMinutes: 40,
    totalMarks: 66,
    questionsCount: 22,
    difficulty: 'Moderate',
    description: 'Official 2025 Slot 1 QA section: Absolute quadratic inequalities, Circular track overtaking, Telescoping log series, Diophantine equations, and Tangent-secant geometry.',
    questions: qa2025Slot1Questions,
  },

  // CAT 2024 Full Sectionals
  {
    id: 'cat-2024-qa-s1',
    title: 'CAT 2024 Slot 1 - Quantitative Aptitude',
    year: 'CAT 2024',
    slot: 'Slot 1',
    section: 'QA',
    category: 'sectional-pyq',
    durationMinutes: 40,
    totalMarks: 66,
    questionsCount: 22,
    difficulty: 'Moderate',
    description: 'Official 2024 Slot 1 QA section: Surds radical equation, Logarithmic powers of 2, Fruit seller ratio mixtures, Rectangle inradius, and Anil-Sunil road meeting.',
    questions: qa2024Slot1Questions,
  },
  {
    id: 'cat-2024-dilr-s1',
    title: 'CAT 2024 Slot 1 - Data Interpretation & Logical Reasoning',
    year: 'CAT 2024',
    slot: 'Slot 1',
    section: 'DILR',
    category: 'sectional-pyq',
    durationMinutes: 40,
    totalMarks: 66,
    questionsCount: 22,
    difficulty: 'Moderate',
    description: 'Official 2024 Slot 1 DILR section: Web Surfers Blogger Star Matrix, Round-Robin Table Tennis Tournament, Smartphone Fabrication Yields, and Cubicle Seating Grid.',
    questions: dilr2024Slot1Questions,
  },

  // CAT 2023 Full Sectionals
  {
    id: 'cat-2023-qa-s1',
    title: 'CAT 2023 Slot 1 - Quantitative Aptitude',
    year: 'CAT 2023',
    slot: 'Slot 1',
    section: 'QA',
    category: 'sectional-pyq',
    durationMinutes: 40,
    totalMarks: 66,
    questionsCount: 22,
    difficulty: 'Challenging',
    description: 'Official 2023 Slot 1 QA section with modern Arithmetic, Higher Algebra, Geometry, and Modern Math questions. Standard +3/-1 MCQ and +3/0 TITA marking scheme.',
    questions: qa2023Slot1Questions,
  },
  {
    id: 'cat-2023-qa-s2',
    title: 'CAT 2023 Slot 2 - Quantitative Aptitude',
    year: 'CAT 2023',
    slot: 'Slot 2',
    section: 'QA',
    category: 'sectional-pyq',
    durationMinutes: 40,
    totalMarks: 66,
    questionsCount: 22,
    difficulty: 'Challenging',
    description: 'Official 2023 Slot 2 QA section featuring high-yield Number Systems, Arithmetic, Geometry, Logarithms, and AM-GM inequality problems.',
    questions: qa2023Slot2Questions,
  },
  {
    id: 'cat-2023-qa-s3',
    title: 'CAT 2023 Slot 3 - Quantitative Aptitude',
    year: 'CAT 2023',
    slot: 'Slot 3',
    section: 'QA',
    category: 'sectional-pyq',
    durationMinutes: 40,
    totalMarks: 66,
    questionsCount: 22,
    difficulty: 'Challenging',
    description: 'Official 2023 Slot 3 QA section featuring AP in logarithms, powers of 2 bounds, linear systems with infinite solutions, and meeting point circles.',
    questions: qa2023Slot3Questions,
  },
  {
    id: 'cat-2023-varc-s2',
    title: 'CAT 2023 Slot 2 - Verbal Ability & Reading Comprehension',
    year: 'CAT 2023',
    slot: 'Slot 2',
    section: 'VARC',
    category: 'sectional-pyq',
    durationMinutes: 40,
    totalMarks: 72,
    questionsCount: 24,
    difficulty: 'Very High',
    description: 'Official 2023 Slot 2 VARC section featuring 4 high-density Reading Comprehension passages and 8 Verbal Ability items (Para Jumbles, Summaries, Odd Sentence Out).',
    questions: varc2023Slot2Questions,
  },
  {
    id: 'cat-2023-dilr-s1',
    title: 'CAT 2023 Slot 1 - Data Interpretation & Logical Reasoning',
    year: 'CAT 2023',
    slot: 'Slot 1',
    section: 'DILR',
    category: 'sectional-pyq',
    durationMinutes: 40,
    totalMarks: 60,
    questionsCount: 20,
    difficulty: 'Challenging',
    description: 'Official 2023 Slot 1 DILR section comprising 4 analytical sets of 5 questions each: Project Evaluation Matrix, Semiconductor Market Data, Football Tournament, and Cargo Routing.',
    questions: dilr2023Slot1Questions,
  },

  // CAT 2022 Full Sectionals
  {
    id: 'cat-2022-qa-s1',
    title: 'CAT 2022 Slot 1 - Quantitative Aptitude',
    year: 'CAT 2022',
    slot: 'Slot 1',
    section: 'QA',
    category: 'sectional-pyq',
    durationMinutes: 40,
    totalMarks: 66,
    questionsCount: 22,
    difficulty: 'Moderate',
    description: 'Official 2022 Slot 1 QA section with high-yield Arithmetic (Time-Speed-Distance, Work, Percentages), Quadratic equations, and Coordinate Geometry.',
    questions: qa2022Slot1Questions,
  },
  {
    id: 'cat-2022-qa-s2',
    title: 'CAT 2022 Slot 2 - Quantitative Aptitude',
    year: 'CAT 2022',
    slot: 'Slot 2',
    section: 'QA',
    category: 'sectional-pyq',
    durationMinutes: 40,
    totalMarks: 66,
    questionsCount: 22,
    difficulty: 'Moderate',
    description: 'Official 2022 Slot 2 QA section with geometry altitudes, polygon side ratios, escalator problems, logarithmic inequalities, and circular chords.',
    questions: qa2022Slot2Questions,
  },
  {
    id: 'cat-2022-qa-s3',
    title: 'CAT 2022 Slot 3 - Quantitative Aptitude',
    year: 'CAT 2022',
    slot: 'Slot 3',
    section: 'QA',
    category: 'sectional-pyq',
    durationMinutes: 40,
    totalMarks: 66,
    questionsCount: 22,
    difficulty: 'Moderate',
    description: 'Official 2022 Slot 3 QA section featuring moving escalator problems, functional composition cycles, concentric chords, and AM-GM inequalities.',
    questions: qa2022Slot3Questions,
  },
  {
    id: 'cat-2022-varc-s2',
    title: 'CAT 2022 Slot 2 - Verbal Ability & Reading Comprehension',
    year: 'CAT 2022',
    slot: 'Slot 2',
    section: 'VARC',
    category: 'sectional-pyq',
    durationMinutes: 40,
    totalMarks: 72,
    questionsCount: 24,
    difficulty: 'Challenging',
    description: 'Official 2022 Slot 2 VARC section covering Hellenistic Philosophy, Biomimetic Architecture, Marcel Mauss Gift Economy, and Neuronal Recycling.',
    questions: varc2022Slot2Questions,
  },
  {
    id: 'cat-2022-dilr-s3',
    title: 'CAT 2022 Slot 3 - Data Interpretation & Logical Reasoning',
    year: 'CAT 2022',
    slot: 'Slot 3',
    section: 'DILR',
    category: 'sectional-pyq',
    durationMinutes: 40,
    totalMarks: 60,
    questionsCount: 20,
    difficulty: 'Challenging',
    description: 'Official 2022 Slot 3 DILR section with 4 complete 5-question sets: Hospital Shift Rosters, CleanTech Power Grids, Grandmaster Blitz Chess, and CDN Network Flow.',
    questions: dilr2022Slot3Questions,
  },

  // CAT 2021 Full Sectionals
  {
    id: 'cat-2021-qa-s1',
    title: 'CAT 2021 Slot 1 - Quantitative Aptitude',
    year: 'CAT 2021',
    slot: 'Slot 1',
    section: 'QA',
    category: 'sectional-pyq',
    durationMinutes: 40,
    totalMarks: 66,
    questionsCount: 22,
    difficulty: 'Moderate',
    description: 'Official 2021 Slot 1 QA paper testing core speed, accuracy, and foundational algebra, triangle inradius, probability, and logarithm equations.',
    questions: qa2021Slot1Questions,
  },
  {
    id: 'cat-2021-qa-s2',
    title: 'CAT 2021 Slot 2 - Quantitative Aptitude',
    year: 'CAT 2021',
    slot: 'Slot 2',
    section: 'QA',
    category: 'sectional-pyq',
    durationMinutes: 40,
    totalMarks: 66,
    questionsCount: 22,
    difficulty: 'Moderate',
    description: 'Official 2021 Slot 2 QA paper testing rational roots, functional ranges, races, incenter geometry, cone mensuration, and remainder modulo prime.',
    questions: qa2021Slot2Questions,
  },
  {
    id: 'cat-2021-varc-s1',
    title: 'CAT 2021 Slot 1 - Verbal Ability & Reading Comprehension',
    year: 'CAT 2021',
    slot: 'Slot 1',
    section: 'VARC',
    category: 'sectional-pyq',
    durationMinutes: 40,
    totalMarks: 72,
    questionsCount: 24,
    difficulty: 'Challenging',
    description: 'Official 2021 Slot 1 VARC paper featuring Mayan Collapse, Bentham’s Panopticon, Niche Construction Biology, and Japanese Wabi-Sabi Aesthetics.',
    questions: varc2021Slot1Questions,
  },
  {
    id: 'cat-2021-dilr-s1',
    title: 'CAT 2021 Slot 1 - Data Interpretation & Logical Reasoning',
    year: 'CAT 2021',
    slot: 'Slot 1',
    section: 'DILR',
    category: 'sectional-pyq',
    durationMinutes: 40,
    totalMarks: 60,
    questionsCount: 20,
    difficulty: 'Moderate',
    description: 'Official 2021 Slot 1 DILR paper covering Tech Campus Hiring Matrix, Electric Vehicle Fleet Efficiency, Tri-Series Cricket Points Table, and Metro Transit Line Transfers.',
    questions: dilr2021Slot1Questions,
  },

  // CAT 2020 Full Sectionals
  {
    id: 'cat-2020-qa-s1',
    title: 'CAT 2020 Slot 1 - Quantitative Aptitude',
    year: 'CAT 2020',
    slot: 'Slot 1',
    section: 'QA',
    category: 'sectional-pyq',
    durationMinutes: 40,
    totalMarks: 66,
    questionsCount: 22,
    difficulty: 'Moderate',
    description: 'Official 2020 Slot 1 QA section: Veeru & Joy SI investment, Meeting Point speed theorem, rhombus inscribed circle, and emergency train halt.',
    questions: qa2020Slot1Questions,
  },
  {
    id: 'cat-2020-dilr-s1',
    title: 'CAT 2020 Slot 1 - Data Interpretation & Logical Reasoning',
    year: 'CAT 2020',
    slot: 'Slot 1',
    section: 'DILR',
    category: 'sectional-pyq',
    durationMinutes: 40,
    totalMarks: 60,
    questionsCount: 20,
    difficulty: 'Challenging',
    description: 'Official 2020 Slot 1 DILR section: Clinical Trials & Patient Drug Overlaps, Cab Driver Route Optimization, Multi-City Vaccination Drive, and ATM PIN Cryptarithmetic.',
    questions: dilr2020Slot1Questions,
  },
  {
    id: 'cat-2020-varc-s1',
    title: 'CAT 2020 Slot 1 - Verbal Ability & Reading Comprehension',
    year: 'CAT 2020',
    slot: 'Slot 1',
    section: 'VARC',
    category: 'sectional-pyq',
    durationMinutes: 40,
    totalMarks: 72,
    questionsCount: 24,
    difficulty: 'Challenging',
    description: 'Official 2020 Slot 1 VARC section: Anarchism & Moral Autonomy, Seal Vocal Plasticity, Neolithic Crop Inequality, Elephant Infrasonic Networking, and Verbal Ability.',
    questions: varc2020Slot1Questions,
  },
];

// All available tests combined (Full Sectionals + Topic-Wise Sets)
export const sectionalTests: SectionalTest[] = [
  ...fullSectionalTests,
  ...allTopicWiseTests,
];

export const getTestById = (id: string): SectionalTest | undefined => {
  return sectionalTests.find((t) => t.id === id);
};
