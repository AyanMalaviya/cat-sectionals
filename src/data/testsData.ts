import { SectionalTest, ExamType } from '../types';
import { qa2026MockQuestions } from './qa2026Mock';
import { dilr2026MockQuestions } from './dilr2026Mock';
import { qa2025Slot1Questions } from './qa2025Slot1';
import { dilr2025Slot1Questions } from './dilr2025Slot1';
import { varc2025Slot1Questions } from './varc2025Slot1';
import { qa2025Slot2Questions } from './qa2025Slot2';
import { dilr2025Slot2Questions } from './dilr2025Slot2';
import { varc2025Slot2Questions } from './varc2025Slot2';
import { qa2025Slot3Questions } from './qa2025Slot3';
import { dilr2025Slot3Questions } from './dilr2025Slot3';
import { varc2025Slot3Questions } from './varc2025Slot3';
import { qa2024Slot1Questions } from './qa2024Slot1';
import { dilr2024Slot1Questions } from './dilr2024Slot1';
import { varc2024Slot1Questions } from './varc2024Slot1';
import { qa2023Slot1Questions } from './qa2023';
import { qa2023Slot2Questions } from './qa2023Slot2';
import { qa2023Slot3Questions } from './qa2023Slot3';
import { varc2023Slot1Questions, varc2023Slot2Questions } from './varc2023';
import { dilr2023Slot1Questions } from './dilr2023';
import { qa2022Slot1Questions } from './qa2022';
import { qa2022Slot2Questions } from './qa2022Slot2';
import { qa2022Slot3Questions } from './qa2022Slot3';
import { varc2022Slot2Questions } from './varc2022';
import { dilr2022Slot1Questions, dilr2022Slot3Questions } from './dilr2022';
import { qa2021Slot1Questions } from './qa2021';
import { qa2021Slot2Questions } from './qa2021Slot2';
import { varc2021Slot1Questions } from './varc2021';
import { dilr2021Slot1Questions } from './dilr2021';
import { qa2020Slot1Questions } from './qa2020Slot1';
import { dilr2020Slot1Questions } from './dilr2020Slot1';
import { varc2020Slot1Questions } from './varc2020Slot1';
import { allTopicWiseTests } from './topicWiseData';
import { officialFullMockTests } from './fullMocksData';
import { xatFullMockTests, xatSectionalTests, xatTopicWiseTests } from './xat/xatTestsData';
import { snapFullMockTests, snapSectionalTests, snapTopicWiseTests } from './snap/snapTestsData';

export { officialFullMockTests, xatFullMockTests, snapFullMockTests };

// Full 40-Minute Sectional Tests for CAT
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

  // CAT 2025 Full Sectionals (from Cracku Downloads 22846, 22847, 22845)
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
    description: 'Official Slot 1 QA paper: Quadratic functions min/max f(x)=x^2-4cx+8c, Shruti 224 km travel, 3-digit number distinct digits, Greatest integer [x^2]=[x]^2, Stocks A, B, C share price, Smallest natural 3^k, Log inequalities, Arun-Varun-Tarun work, and Rhombus area.',
    questions: qa2025Slot1Questions,
  },
  {
    id: 'cat-2025-dilr-s1',
    title: 'CAT 2025 Slot 1 - Data Interpretation & Logical Reasoning',
    year: 'CAT 2025',
    slot: 'Slot 1',
    section: 'DILR',
    category: 'sectional-pyq',
    durationMinutes: 40,
    totalMarks: 66,
    questionsCount: 22,
    difficulty: 'Moderate',
    description: 'Official Slot 1 DILR section: Round Table 7-chair dynamic shifts, InnovateX employee quarterly ratings, International Trade radar & bar charts, Train segment booking occupancy, and Feet tapping binary/ternary logic.',
    questions: dilr2025Slot1Questions,
  },
  {
    id: 'cat-2025-varc-s1',
    title: 'CAT 2025 Slot 1 - Verbal Ability & Reading Comprehension',
    year: 'CAT 2025',
    slot: 'Slot 1',
    section: 'VARC',
    category: 'sectional-pyq',
    durationMinutes: 40,
    totalMarks: 72,
    questionsCount: 24,
    difficulty: 'Moderate',
    description: 'Official Slot 1 VARC section: Criminal responsibility & medical jurisprudence, Economic growth & investment indivisibility, Electronic music aesthetics, and Digital contact-tracing apps.',
    questions: varc2025Slot1Questions,
  },
  {
    id: 'cat-2025-qa-s2',
    title: 'CAT 2025 Slot 2 - Quantitative Aptitude',
    year: 'CAT 2025',
    slot: 'Slot 2',
    section: 'QA',
    category: 'sectional-pyq',
    durationMinutes: 40,
    totalMarks: 66,
    questionsCount: 22,
    difficulty: 'Moderate',
    description: 'Official Slot 2 QA paper: Integer equations (m+2n)(m-3n)=-17, Logarithms, Arithmetic progression terms, Mixture replacements, Speed-time-distance, Geometry diagonals, and Profit-loss discounts.',
    questions: qa2025Slot2Questions,
  },
  {
    id: 'cat-2025-dilr-s2',
    title: 'CAT 2025 Slot 2 - Data Interpretation & Logical Reasoning',
    year: 'CAT 2025',
    slot: 'Slot 2',
    section: 'DILR',
    category: 'sectional-pyq',
    durationMinutes: 40,
    totalMarks: 66,
    questionsCount: 22,
    difficulty: 'Challenging',
    description: 'Official Slot 2 DILR section: Whimshire and Fogglia NUR Population Index, 6 spherical balls & 4 hoops pings game, 4 musicians training timeline (Ananya, Bhaskar, Charu, Devendra), Country Sustainability Index (SI), and Multi-author research papers.',
    questions: dilr2025Slot2Questions,
  },
  {
    id: 'cat-2025-varc-s2',
    title: 'CAT 2025 Slot 2 - Verbal Ability & Reading Comprehension',
    year: 'CAT 2025',
    slot: 'Slot 2',
    section: 'VARC',
    category: 'sectional-pyq',
    durationMinutes: 40,
    totalMarks: 72,
    questionsCount: 24,
    difficulty: 'Moderate',
    description: 'Official Slot 2 VARC section: Mexican Tetra Cavefish eye evolution & metabolism, Evolutionary psychology & trade-offs, Behavioral ecology, Philosophy of aesthetics, and Verbal Ability parajumbles & summaries.',
    questions: varc2025Slot2Questions,
  },
  {
    id: 'cat-2025-qa-s3',
    title: 'CAT 2025 Slot 3 - Quantitative Aptitude',
    year: 'CAT 2025',
    slot: 'Slot 3',
    section: 'QA',
    category: 'sectional-pyq',
    durationMinutes: 40,
    totalMarks: 66,
    questionsCount: 22,
    difficulty: 'Challenging',
    description: 'Official Slot 3 QA paper: Isosceles triangle AB=AC=50, BC=80 inradius & area, Quadratic polynomials, Distinct integer solutions, Logarithms, Work-time efficiency cycles, and Geometric progression sequences.',
    questions: qa2025Slot3Questions,
  },
  {
    id: 'cat-2025-dilr-s3',
    title: 'CAT 2025 Slot 3 - Data Interpretation & Logical Reasoning',
    year: 'CAT 2025',
    slot: 'Slot 3',
    section: 'DILR',
    category: 'sectional-pyq',
    durationMinutes: 40,
    totalMarks: 66,
    questionsCount: 22,
    difficulty: 'Challenging',
    description: 'Official Slot 3 DILR section: Mobile operator incoming & outgoing call matrix, Image puzzle grid reconstruction, Team project scores, and Multi-parameter ranking tournament.',
    questions: dilr2025Slot3Questions,
  },
  {
    id: 'cat-2025-varc-s3',
    title: 'CAT 2025 Slot 3 - Verbal Ability & Reading Comprehension',
    year: 'CAT 2025',
    slot: 'Slot 3',
    section: 'VARC',
    category: 'sectional-pyq',
    durationMinutes: 40,
    totalMarks: 72,
    questionsCount: 24,
    difficulty: 'Moderate',
    description: 'Official Slot 3 VARC section: Philosophy of scientific models, Historical linguistics & phonetic shifts, Cognitive bias in archaeology, and Verbal Ability parajumbles, sentence insertion & summaries.',
    questions: varc2025Slot3Questions,
  },

  // CAT 2024 Full Sectionals (Separate Authentic Year)
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
    description: 'Official Slot 1 QA paper: Fruit seller ratio mixtures (187 fruits), Surds positive square root of (29-12sqrt(5)), Acid-water replacements, Renu-Seema time & work, Kamal-Amal-Vimal rent percentage, Onto functions from A to B, Coordinate quadratic system, Remainder modulo, and Box in sphere.',
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
    description: 'Official Slot 1 DILR section: Six web surfers M-Y blog star ratings, QUIET two-team match tournament, Seven shares price data and daily SPV, and Amiya-Ramya student council election logic.',
    questions: dilr2024Slot1Questions,
  },
  {
    id: 'cat-2024-varc-s1',
    title: 'CAT 2024 Slot 1 - Verbal Ability & Reading Comprehension',
    year: 'CAT 2024',
    slot: 'Slot 1',
    section: 'VARC',
    category: 'sectional-pyq',
    durationMinutes: 40,
    totalMarks: 72,
    questionsCount: 24,
    difficulty: 'Moderate',
    description: 'Official Slot 1 VARC section: Central Asia missing sentence, 4 multi-paragraph Reading Comprehension passages, and Verbal Ability parajumbles and paragraph summaries.',
    questions: varc2024Slot1Questions,
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
    id: 'cat-2023-varc-s1',
    title: 'CAT 2023 Slot 1 - Verbal Ability & Reading Comprehension',
    year: 'CAT 2023',
    slot: 'Slot 1',
    section: 'VARC',
    category: 'sectional-pyq',
    durationMinutes: 40,
    totalMarks: 72,
    questionsCount: 24,
    difficulty: 'Challenging',
    description: 'Official 2023 Slot 1 VARC section: Inuit and Aboriginal Australian geographic vs cultural causality, Sahlins Stone Age Economics & affluence, French wolves and Lozère environmental history, and Verbal Ability.',
    questions: varc2023Slot1Questions,
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
    description: 'Official 2023 Slot 1 DILR section: Faculty members departmental election votes (Pakrasi, Qureshi, Ramaswamy, Samuel), Five restaurants gig workers ratings matrix, Visa Processing Office (VPO) scheduling, and Housing colony schematic layout.',
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
    id: 'cat-2022-dilr-s1',
    title: 'CAT 2022 Slot 1 - Data Interpretation & Logical Reasoning',
    year: 'CAT 2022',
    slot: 'Slot 1',
    section: 'DILR',
    category: 'sectional-pyq',
    durationMinutes: 40,
    totalMarks: 60,
    questionsCount: 20,
    difficulty: 'Challenging',
    description: 'Official 2022 Slot 1 DILR section: Graduating students (15 girls and boys), Metro line token counter queues, University hockey performance scoring, and Six friends (Adhara, Bithi, Chhaya, Dhanavi, Esther, Fathima) sequence matrix.',
    questions: dilr2022Slot1Questions,
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
    description: 'Official 2021 Slot 1 DILR section: Four friends smoothie café bar diagram, Seven friends (Amudha, Bharatan, Chandran, Dhinesh, Ezhil, Fani, Gowtham) arrangement, Three women raw materials purchases (Ganga, Kaveri, Narmada), and Journal publication 18 research papers.',
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

// Aggregate Full Mocks across CAT, XAT, and SNAP
export const allFullMocks: SectionalTest[] = [
  ...officialFullMockTests.map((t) => ({ ...t, examType: (t.examType || 'CAT') as ExamType })),
  ...xatFullMockTests,
  ...snapFullMockTests,
];

// Aggregate Sectionals across CAT, XAT, and SNAP
export const allSectionals: SectionalTest[] = [
  ...fullSectionalTests.map((t) => ({ ...t, examType: (t.examType || 'CAT') as ExamType })),
  ...xatSectionalTests,
  ...snapSectionalTests,
];

// Aggregate Topic-Wise Sets across CAT, XAT, and SNAP
export const allTopicWise: SectionalTest[] = [
  ...allTopicWiseTests.map((t) => ({ ...t, examType: (t.examType || 'CAT') as ExamType })),
  ...xatTopicWiseTests,
  ...snapTopicWiseTests,
];

// All available tests combined across all competitive exams
export const sectionalTests: SectionalTest[] = [
  ...allFullMocks,
  ...allSectionals,
  ...allTopicWise,
];

export const getTestById = (id: string): SectionalTest | undefined => {
  return sectionalTests.find((t) => t.id === id);
};

export const getTestsByExam = (exam: ExamType): SectionalTest[] => {
  return sectionalTests.filter((t) => (t.examType || 'CAT') === exam);
};

export const getFullMocksByExam = (exam: ExamType): SectionalTest[] => {
  return allFullMocks.filter((t) => (t.examType || 'CAT') === exam);
};

export const getSectionalsByExam = (exam: ExamType): SectionalTest[] => {
  return allSectionals.filter((t) => (t.examType || 'CAT') === exam);
};

export const getTopicTestsByExam = (exam: ExamType): SectionalTest[] => {
  return allTopicWise.filter((t) => (t.examType || 'CAT') === exam);
};
