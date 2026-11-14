export type ExamType = 'CAT' | 'XAT' | 'SNAP';

export type SectionType = 
  // Common
  | 'FULL'
  // CAT Sections
  | 'VARC' | 'DILR' | 'QA'
  // XAT Sections
  | 'VALR' | 'DM' | 'QA-DI'
  // SNAP Sections
  | 'GE' | 'LR' | 'QA-DS';

export type TestCategory = 'sectional-pyq' | 'topic-wise' | 'national-mock' | 'full-mock';

export type QuestionType = 'MCQ' | 'TITA';

export type QuestionStatus = 
  | 'not-visited'
  | 'not-answered'
  | 'answered'
  | 'marked'
  | 'marked-answered';

export interface Question {
  id: string;
  questionNumber: number;
  section: SectionType;
  type: QuestionType;
  topic: string;
  difficulty: 'Easy' | 'Moderate' | 'Hard' | 'Challenging';
  passageTitle?: string;
  passage?: string; // For RC, DILR context, or XAT Decision Making Caselets
  context?: string; // Direction or set context
  tableData?: Array<Record<string, string | number>>;
  question: string;
  options?: string[]; // 4 options for CAT/SNAP, 5 options for XAT (A-E)
  correctAnswer: number | string; // Index (0-4) for MCQ, or string for TITA
  explanation: string;
  year?: string;
  examType?: ExamType;
  marksPerCorrect?: number;
  negativeMarks?: number;
}

export interface SectionalTest {
  id: string;
  title: string;
  year: string;
  slot: string;
  section: SectionType;
  category: TestCategory;
  examType?: ExamType; // 'CAT' | 'XAT' | 'SNAP'
  marksPerCorrect?: number;
  negativeMarks?: number;
  topicTag?: string; // e.g. "Arithmetic", "Algebra", "Decision Making", etc.
  durationMinutes: number; // 40m for CAT sectionals, 55m for XAT, 60m for SNAP, 120/175m for full mocks
  totalMarks: number;
  questionsCount: number;
  description: string;
  difficulty: 'Moderate' | 'Challenging' | 'Very High';
  questions: Question[];
  isFullMock?: boolean;
  sectionsList?: Array<{
    section: SectionType;
    title: string;
    durationMinutes: number;
    questionsCount: number;
    startIndex: number;
    endIndex: number;
  }>;
}

export interface UserAnswer {
  questionId: string;
  response: number | string | null;
  status: QuestionStatus;
  timeSpentSeconds: number;
  isCorrect?: boolean;
  marksAwarded?: number;
}

export interface TestResult {
  id: string;
  testId: string;
  testTitle: string;
  section: SectionType;
  category?: TestCategory;
  examType?: ExamType;
  year: string;
  timestamp: number;
  totalTimeSeconds: number;
  totalMarks: number;
  maxMarks: number;
  correctCount: number;
  incorrectCount: number;
  unattemptedCount: number;
  accuracy: number;
  estimatedPercentile: number;
  answers: Record<string, UserAnswer>;
  sectionScores?: Partial<Record<SectionType, {
    marks: number;
    maxMarks: number;
    correct: number;
    incorrect: number;
    unattempted: number;
    accuracy: number;
    percentile: number;
  }>>;
}

export interface ActiveSession {
  testId: string;
  examType?: ExamType;
  startTime: number;
  remainingSeconds: number;
  currentQuestionIndex: number;
  currentSectionIndex?: number; // 0, 1, 2 for multi-section full mocks
  completedSections?: Array<SectionType>;
  answers: Record<string, UserAnswer>;
  visitedQuestions: string[];
  sectionBreakPromptEnabled?: boolean;
}
