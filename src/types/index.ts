export type SectionType = 'VARC' | 'DILR' | 'QA' | 'FULL';

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
  passage?: string; // For RC or DILR context
  context?: string; // Direction or set context
  tableData?: Array<Record<string, string | number>>;
  question: string;
  options?: string[]; // 4 options for MCQ
  correctAnswer: number | string; // Index (0-3) for MCQ, or string for TITA
  explanation: string;
  year?: string;
}

export interface SectionalTest {
  id: string;
  title: string;
  year: string;
  slot: string;
  section: SectionType;
  category: TestCategory;
  topicTag?: string; // e.g. "Arithmetic", "Algebra", "RC Masterset", etc.
  durationMinutes: number; // 40 minutes for standard CAT sectionals, or 20-30 for topic sets, 120 for full mocks
  totalMarks: number;
  questionsCount: number;
  description: string;
  difficulty: 'Moderate' | 'Challenging' | 'Very High';
  questions: Question[];
  isFullMock?: boolean;
  sectionsList?: Array<{
    section: 'VARC' | 'DILR' | 'QA';
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
  sectionScores?: Partial<Record<'VARC' | 'DILR' | 'QA', {
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
  startTime: number;
  remainingSeconds: number;
  currentQuestionIndex: number;
  currentSectionIndex?: number; // 0 for VARC, 1 for DILR, 2 for QA
  completedSections?: Array<'VARC' | 'DILR' | 'QA'>;
  answers: Record<string, UserAnswer>;
  visitedQuestions: string[];
  sectionBreakPromptEnabled?: boolean;
}
