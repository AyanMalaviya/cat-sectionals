import { SectionalTest } from '../types';

// Import Sectional Question Banks
import { varc2025Slot1Questions } from './varc2025Slot1';
import { dilr2025Slot1Questions } from './dilr2025Slot1';
import { qa2025Slot1Questions } from './qa2025Slot1';

import { varc2025Slot2Questions } from './varc2025Slot2';
import { dilr2025Slot2Questions } from './dilr2025Slot2';
import { qa2025Slot2Questions } from './qa2025Slot2';

import { varc2025Slot3Questions } from './varc2025Slot3';
import { dilr2025Slot3Questions } from './dilr2025Slot3';
import { qa2025Slot3Questions } from './qa2025Slot3';

import { varc2024Slot1Questions } from './varc2024Slot1';
import { dilr2024Slot1Questions } from './dilr2024Slot1';
import { qa2024Slot1Questions } from './qa2024Slot1';

import { varc2020Slot1Questions } from './varc2020Slot1';
import { dilr2020Slot1Questions } from './dilr2020Slot1';
import { qa2020Slot1Questions } from './qa2020Slot1';

import { varc2021Slot1Questions } from './varc2021';
import { dilr2021Slot1Questions } from './dilr2021';
import { qa2021Slot1Questions } from './qa2021';

import { varc2022Slot2Questions } from './varc2022';
import { dilr2022Slot3Questions } from './dilr2022';
import { qa2022Slot2Questions } from './qa2022Slot2';

import { varc2023Slot2Questions } from './varc2023';
import { dilr2023Slot1Questions } from './dilr2023';
import { qa2023Slot1Questions } from './qa2023';

import { varc2026MockQuestions } from './varc2026Mock';
import { dilr2026MockQuestions } from './dilr2026Mock';
import { qa2026MockQuestions } from './qa2026Mock';

// Standard 3-Section Mapping helper
const createFullMockSectionsList = (varcCount: number, dilrCount: number, qaCount: number) => [
  {
    section: 'VARC' as const,
    title: 'Verbal Ability & Reading Comprehension',
    durationMinutes: 40,
    questionsCount: varcCount,
    startIndex: 0,
    endIndex: varcCount - 1,
  },
  {
    section: 'DILR' as const,
    title: 'Data Interpretation & Logical Reasoning',
    durationMinutes: 40,
    questionsCount: dilrCount,
    startIndex: varcCount,
    endIndex: varcCount + dilrCount - 1,
  },
  {
    section: 'QA' as const,
    title: 'Quantitative Aptitude',
    durationMinutes: 40,
    questionsCount: qaCount,
    startIndex: varcCount + dilrCount,
    endIndex: varcCount + dilrCount + qaCount - 1,
  },
];

export const officialFullMockTests: SectionalTest[] = [
  // 1. CAT 2026 National Specimen Full Mock
  {
    id: 'cat-2026-national-full-mock',
    title: 'CAT 2026 National All-India Specimen Full Mock Test',
    year: 'CAT 2026',
    slot: 'National Specimen Full Mock',
    section: 'FULL',
    category: 'full-mock',
    isFullMock: true,
    durationMinutes: 120,
    totalMarks: 198,
    questionsCount: 66,
    difficulty: 'Challenging',
    description: 'Comprehensive 120-minute premier CAT 2026 All-India Specimen Mock: Section 1 VARC (AI Governance & Behavioral Economics) → Section 2 DILR (Server Loads & EV Charging) → Section 3 QA (AM-GM Limits & Hexagons). Features real TCS iON sectional pacing, calculator, and transition breaks.',
    questions: [
      ...varc2026MockQuestions,
      ...dilr2026MockQuestions,
      ...qa2026MockQuestions,
    ],
    sectionsList: createFullMockSectionsList(
      varc2026MockQuestions.length,
      dilr2026MockQuestions.length,
      qa2026MockQuestions.length
    ),
  },

  // 1a. CAT 2025 Slot 1 Official Full Mock (from Cracku downloads/22846)
  {
    id: 'cat-2025-slot1-full-mock',
    title: 'CAT 2025 Slot 1 - Official Full Mock Test',
    year: 'CAT 2025',
    slot: 'Slot 1 Official Full Mock',
    section: 'FULL',
    category: 'full-mock',
    isFullMock: true,
    durationMinutes: 120,
    totalMarks: 204,
    questionsCount: 68,
    difficulty: 'Challenging',
    description: 'Complete 120-minute authentic CAT 2025 Slot 1 Full Mock Test: Section 1 VARC (Alienists & Criminal Responsibility, Economic Inequality, Electronic Music Ontology) → Section 2 DILR (Round Table Shift, InnovateX Matrix, Trade Radar Chart, Train Routes) → Section 3 QA (Functions Min/Max, Shruti Travel, Arithmetic & Geometry). Real TCS iON interface.',
    questions: [
      ...varc2025Slot1Questions,
      ...dilr2025Slot1Questions,
      ...qa2025Slot1Questions,
    ],
    sectionsList: createFullMockSectionsList(
      varc2025Slot1Questions.length,
      dilr2025Slot1Questions.length,
      qa2025Slot1Questions.length
    ),
  },

  // 1b. CAT 2025 Slot 2 Official Full Mock (from Cracku downloads/22847)
  {
    id: 'cat-2025-slot2-full-mock',
    title: 'CAT 2025 Slot 2 - Official Full Mock Test',
    year: 'CAT 2025',
    slot: 'Slot 2 Official Full Mock',
    section: 'FULL',
    category: 'full-mock',
    isFullMock: true,
    durationMinutes: 120,
    totalMarks: 204,
    questionsCount: 68,
    difficulty: 'Challenging',
    description: 'Complete 120-minute authentic CAT 2025 Slot 2 Full Mock Test: Section 1 VARC (Mexican Tetra Cavefish, Evolution, Behavioral Ecology) → Section 2 DILR (Whimshire NUR Population, Spherical Balls, Musicians Training, Sustainability Index) → Section 3 QA (Logarithms, Functions, Sequences, Geometry).',
    questions: [
      ...varc2025Slot2Questions,
      ...dilr2025Slot2Questions,
      ...qa2025Slot2Questions,
    ],
    sectionsList: createFullMockSectionsList(
      varc2025Slot2Questions.length,
      dilr2025Slot2Questions.length,
      qa2025Slot2Questions.length
    ),
  },

  // 1c. CAT 2025 Slot 3 Official Full Mock (from Cracku downloads/22845)
  {
    id: 'cat-2025-slot3-full-mock',
    title: 'CAT 2025 Slot 3 - Official Full Mock Test',
    year: 'CAT 2025',
    slot: 'Slot 3 Official Full Mock',
    section: 'FULL',
    category: 'full-mock',
    isFullMock: true,
    durationMinutes: 120,
    totalMarks: 204,
    questionsCount: 68,
    difficulty: 'Very High',
    description: 'Complete 120-minute authentic CAT 2025 Slot 3 Full Mock Test: Section 1 VARC (Philosophy of Science, Linguistics, Archaeology) → Section 2 DILR (Phone Operator Calls, Image Puzzles, Matrix Rankings) → Section 3 QA (Triangle 50-50-80, Equations, Arithmetic).',
    questions: [
      ...varc2025Slot3Questions,
      ...dilr2025Slot3Questions,
      ...qa2025Slot3Questions,
    ],
    sectionsList: createFullMockSectionsList(
      varc2025Slot3Questions.length,
      dilr2025Slot3Questions.length,
      qa2025Slot3Questions.length
    ),
  },

  // 1d. CAT 2024 Slot 1 Official Full Mock
  {
    id: 'cat-2024-slot1-full-mock',
    title: 'CAT 2024 Slot 1 - Official Full Mock Test',
    year: 'CAT 2024',
    slot: 'Slot 1 Official Full Mock',
    section: 'FULL',
    category: 'full-mock',
    isFullMock: true,
    durationMinutes: 120,
    totalMarks: 204,
    questionsCount: 68,
    difficulty: 'Moderate',
    description: 'Complete 120-minute authentic CAT 2024 Slot 1 Full Mock Test: Section 1 VARC Slot 1 (Central Asia, Reading Comprehension & Parajumbles) → Section 2 DILR Slot 1 (Web Surfers Blog Stars, QUIET Game, Share Price SPV, Election) → Section 3 QA Slot 1 (Fruit seller 187 fruits, Surds, Coordinate Area, Work). Real TCS iON interface.',
    questions: [
      ...varc2024Slot1Questions,
      ...dilr2024Slot1Questions,
      ...qa2024Slot1Questions,
    ],
    sectionsList: createFullMockSectionsList(
      varc2024Slot1Questions.length,
      dilr2024Slot1Questions.length,
      qa2024Slot1Questions.length
    ),
  },

  // 2. CAT 2023 Official Full Mock
  {
    id: 'cat-2023-official-full-mock',
    title: 'CAT 2023 Official All-India Full Mock Test',
    year: 'CAT 2023',
    slot: 'Official All-India Full Mock',
    section: 'FULL',
    category: 'full-mock',
    isFullMock: true,
    durationMinutes: 120,
    totalMarks: 198,
    questionsCount: 66,
    difficulty: 'Very High',
    description: 'Complete 120-minute authentic CAT 2023 full mock simulation combining official past papers: Section 1 VARC Slot 2 (Anthropology & Philosophy) → Section 2 DILR Slot 1 (Semiconductor Market & Cargo Routing) → Section 3 QA Slot 1 (Radical Equations & Arithmetic).',
    questions: [
      ...varc2023Slot2Questions,
      ...dilr2023Slot1Questions,
      ...qa2023Slot1Questions,
    ],
    sectionsList: createFullMockSectionsList(
      varc2023Slot2Questions.length,
      dilr2023Slot1Questions.length,
      qa2023Slot1Questions.length
    ),
  },

  // 3. CAT 2022 Official Full Mock
  {
    id: 'cat-2022-official-full-mock',
    title: 'CAT 2022 Official All-India Full Mock Test',
    year: 'CAT 2022',
    slot: 'Official All-India Full Mock',
    section: 'FULL',
    category: 'full-mock',
    isFullMock: true,
    durationMinutes: 120,
    totalMarks: 198,
    questionsCount: 66,
    difficulty: 'Challenging',
    description: 'Complete 120-minute authentic CAT 2022 full mock simulation: Section 1 VARC Slot 2 (Hellenistic Philosophy & Biomimetics) → Section 2 DILR Slot 3 (Hospital Rosters & CleanTech Grids) → Section 3 QA Slot 2 (Geometry Altitudes & Escalators).',
    questions: [
      ...varc2022Slot2Questions,
      ...dilr2022Slot3Questions,
      ...qa2022Slot2Questions,
    ],
    sectionsList: createFullMockSectionsList(
      varc2022Slot2Questions.length,
      dilr2022Slot3Questions.length,
      qa2022Slot2Questions.length
    ),
  },

  // 4. CAT 2021 Slot 1 Full Mock
  {
    id: 'cat-2021-slot1-full-mock',
    title: 'CAT 2021 Slot 1 - Official Full Mock Test',
    year: 'CAT 2021',
    slot: 'Slot 1 Official Full Mock',
    section: 'FULL',
    category: 'full-mock',
    isFullMock: true,
    durationMinutes: 120,
    totalMarks: 198,
    questionsCount: 66,
    difficulty: 'Moderate',
    description: 'Complete authentic CAT 2021 Slot 1 Full Mock Test: Section 1 VARC Slot 1 (Mayan Collapse & Wabi-Sabi) → Section 2 DILR Slot 1 (Tech Hiring Matrix & EV Fleet) → Section 3 QA Slot 1 (Foundational Algebra & Geometry). Real TCS iON interface.',
    questions: [
      ...varc2021Slot1Questions,
      ...dilr2021Slot1Questions,
      ...qa2021Slot1Questions,
    ],
    sectionsList: createFullMockSectionsList(
      varc2021Slot1Questions.length,
      dilr2021Slot1Questions.length,
      qa2021Slot1Questions.length
    ),
  },

  // 5. CAT 2020 Slot 1 Full Mock
  {
    id: 'cat-2020-slot1-full-mock',
    title: 'CAT 2020 Slot 1 - Official Full Mock Test',
    year: 'CAT 2020',
    slot: 'Slot 1 Official Full Mock',
    section: 'FULL',
    category: 'full-mock',
    isFullMock: true,
    durationMinutes: 120,
    totalMarks: 198,
    questionsCount: 66,
    difficulty: 'Moderate',
    description: 'Complete authentic CAT 2020 Slot 1 Full Mock Test: Section 1 VARC Slot 1 (Anarchism & Vocal Plasticity) → Section 2 DILR Slot 1 (Clinical Drug Overlaps & Cab Driver Routes) → Section 3 QA Slot 1 (Veeru & Joy SI & Rhombus Circles).',
    questions: [
      ...varc2020Slot1Questions,
      ...dilr2020Slot1Questions,
      ...qa2020Slot1Questions,
    ],
    sectionsList: createFullMockSectionsList(
      varc2020Slot1Questions.length,
      dilr2020Slot1Questions.length,
      qa2020Slot1Questions.length
    ),
  },
];
