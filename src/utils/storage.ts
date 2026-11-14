import { TestResult, ActiveSession, Question, UserAnswer, SectionType, ExamType } from '../types';

const STORAGE_KEYS = {
  HISTORY: 'cat_mock_history_v1',
  ACTIVE_SESSION: 'cat_mock_active_session_v1',
  BOOKMARKS: 'cat_mock_bookmarks_v1',
  SECTION_BREAK_PROMPT: 'cat_mock_section_break_prompt',
};

// Section break prompt preference (Default: true)
export const getSectionBreakPromptEnabled = (): boolean => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.SECTION_BREAK_PROMPT);
    return raw === null ? true : raw === 'true';
  } catch {
    return true;
  }
};

export const setSectionBreakPromptEnabled = (enabled: boolean): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.SECTION_BREAK_PROMPT, String(enabled));
  } catch (e) {
    console.error('Failed to save section break prompt preference', e);
  }
};

// History storage
export const getTestHistory = (): TestResult[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.HISTORY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    console.error('Failed to load test history from local storage', e);
    return [];
  }
};

export const saveTestResult = (result: TestResult): void => {
  try {
    const current = getTestHistory();
    // Keep newest first
    const updated = [result, ...current.filter(r => r.id !== result.id)];
    localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to save test result to local storage', e);
  }
};

export const getTestResultById = (id: string): TestResult | null => {
  const history = getTestHistory();
  return history.find(r => r.id === id) || null;
};

export const deleteTestResult = (id: string): void => {
  try {
    const current = getTestHistory();
    const updated = current.filter(r => r.id !== id);
    localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to delete test result', e);
  }
};

export const clearAllHistory = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEYS.HISTORY);
  } catch (e) {
    console.error('Failed to clear history', e);
  }
};

// Active test session storage (for accident refresh or recovery)
export const getActiveSession = (): ActiveSession | null => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.ACTIVE_SESSION);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to load active session', e);
    return null;
  }
};

export const saveActiveSession = (session: ActiveSession): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.ACTIVE_SESSION, JSON.stringify(session));
  } catch (e) {
    console.error('Failed to save active session', e);
  }
};

export const clearActiveSession = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEYS.ACTIVE_SESSION);
  } catch (e) {
    console.error('Failed to clear active session', e);
  }
};

// Bookmarks
export const getBookmarks = (): string[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    return [];
  }
};

export const toggleBookmark = (questionId: string): boolean => {
  try {
    const bookmarks = getBookmarks();
    let updated: string[];
    let isBookmarked: boolean;
    if (bookmarks.includes(questionId)) {
      updated = bookmarks.filter(id => id !== questionId);
      isBookmarked = false;
    } else {
      updated = [...bookmarks, questionId];
      isBookmarked = true;
    }
    localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(updated));
    return isBookmarked;
  } catch (e) {
    return false;
  }
};

// Score & Marks Calculation according to official exam scheme:
// CAT: MCQ Correct = +3, Incorrect = -1; TITA Correct = +3, Incorrect = 0
// XAT: MCQ Correct = +1, Incorrect = -0.25; 5 Options (A-E)
// SNAP: MCQ Correct = +1, Incorrect = -0.25; 4 Options (A-D)
export const evaluateQuestionResponses = (
  questions: Question[],
  userResponses: Record<string, { response: number | string | null; status: any; timeSpentSeconds?: number }>,
  defaultExamType?: ExamType
): {
  processedAnswers: Record<string, UserAnswer>;
  totalMarks: number;
  correctCount: number;
  incorrectCount: number;
  unattemptedCount: number;
  accuracy: number;
} => {
  const processedAnswers: Record<string, UserAnswer> = {};
  let totalMarks = 0;
  let correctCount = 0;
  let incorrectCount = 0;
  let unattemptedCount = 0;

  questions.forEach(q => {
    const exam = q.examType || defaultExamType || 'CAT';
    const marksPerCorrect = q.marksPerCorrect ?? (exam === 'XAT' || exam === 'SNAP' ? 1 : 3);
    const negativeMarks = q.negativeMarks ?? (exam === 'XAT' || exam === 'SNAP' ? 0.25 : 1);

    const u = userResponses[q.id];
    const resp = u ? u.response : null;
    const timeSpent = u?.timeSpentSeconds || 0;
    const status = u?.status || 'not-visited';

    let isCorrect = false;
    let marksAwarded = 0;

    // Check if attempted
    const isAttempted = resp !== null && resp !== undefined && String(resp).trim() !== '';

    if (!isAttempted) {
      unattemptedCount++;
      marksAwarded = 0;
      isCorrect = false;
    } else {
      if (q.type === 'MCQ') {
        if (Number(resp) === Number(q.correctAnswer)) {
          isCorrect = true;
          marksAwarded = marksPerCorrect;
          correctCount++;
        } else {
          isCorrect = false;
          marksAwarded = -negativeMarks;
          incorrectCount++;
        }
      } else {
        // TITA comparison (trim and lower-case string matching)
        const userStr = String(resp).trim().toLowerCase();
        const correctStr = String(q.correctAnswer).trim().toLowerCase();

        // Exact match or numeric float match
        const isMatch = userStr === correctStr || (!isNaN(Number(userStr)) && !isNaN(Number(correctStr)) && Number(userStr) === Number(correctStr));

        if (isMatch) {
          isCorrect = true;
          marksAwarded = marksPerCorrect;
          correctCount++;
        } else {
          isCorrect = false;
          marksAwarded = 0; // No negative marking in TITA
          incorrectCount++;
        }
      }
    }

    totalMarks += marksAwarded;

    processedAnswers[q.id] = {
      questionId: q.id,
      response: resp,
      status,
      timeSpentSeconds: timeSpent,
      isCorrect,
      marksAwarded,
    };
  });

  // Round total marks to 2 decimal places to prevent JS floating point quirks (e.g. 14.750000000000002)
  totalMarks = Math.round(totalMarks * 100) / 100;

  const attemptedTotal = correctCount + incorrectCount;
  const accuracy = attemptedTotal > 0 ? Math.round((correctCount / attemptedTotal) * 1000) / 10 : 0;

  return {
    processedAnswers,
    totalMarks,
    correctCount,
    incorrectCount,
    unattemptedCount,
    accuracy,
  };
};

// Historical Score-to-Percentile Estimation Model (CAT, XAT, SNAP)
export const estimatePercentile = (score: number, section: SectionType, examType: ExamType = 'CAT'): number => {
  // XAT Sectional Percentiles
  if (examType === 'XAT' || section === 'DM' || section === 'VALR' || section === 'QA-DI') {
    if (section === 'DM') {
      // XAT Decision Making (~21 Qs, total 21 marks)
      if (score >= 15) return 99.5;
      if (score >= 13) return 99.0;
      if (score >= 11.5) return 96.0;
      if (score >= 10) return 92.0; // Typical XLRI DM cutoff
      if (score >= 8.5) return 85.0;
      if (score >= 7) return 75.0;
      if (score >= 5) return 60.0;
      if (score > 0) return Math.min(50, Math.round(score * 8));
      return 10.0;
    } else if (section === 'VALR') {
      // XAT Verbal & Logical Reasoning (~26 Qs, total 26 marks)
      if (score >= 17) return 99.5;
      if (score >= 15) return 99.0;
      if (score >= 13) return 96.0;
      if (score >= 11) return 90.0;
      if (score >= 9.5) return 84.0;
      if (score >= 7.5) return 72.0;
      if (score >= 5) return 58.0;
      if (score > 0) return Math.min(50, Math.round(score * 7.5));
      return 10.0;
    } else {
      // XAT QA-DI (~28 Qs, total 28 marks)
      if (score >= 19) return 99.5;
      if (score >= 16) return 99.0;
      if (score >= 13.5) return 96.0;
      if (score >= 11.5) return 90.0;
      if (score >= 9.5) return 82.0;
      if (score >= 7) return 70.0;
      if (score >= 4.5) return 55.0;
      if (score > 0) return Math.min(50, Math.round(score * 8));
      return 10.0;
    }
  }

  // SNAP Sectional Percentiles
  if (examType === 'SNAP' || section === 'GE' || section === 'LR' || section === 'QA-DS') {
    if (section === 'GE') {
      // SNAP General English (15 Qs, 15 marks)
      if (score >= 13) return 99.0;
      if (score >= 11) return 95.0;
      if (score >= 9) return 85.0;
      if (score >= 7) return 70.0;
      if (score > 0) return Math.min(60, Math.round(score * 8));
      return 10.0;
    } else if (section === 'LR') {
      // SNAP Analytical & LR (25 Qs, 25 marks)
      if (score >= 21) return 99.5;
      if (score >= 18.5) return 98.0;
      if (score >= 16) return 92.0;
      if (score >= 13) return 80.0;
      if (score > 0) return Math.min(65, Math.round(score * 4.8));
      return 10.0;
    } else {
      // SNAP QA, DI & DS (20 Qs, 20 marks)
      if (score >= 17) return 99.5;
      if (score >= 15) return 98.0;
      if (score >= 12.5) return 92.0;
      if (score >= 10) return 80.0;
      if (score > 0) return Math.min(65, Math.round(score * 6));
      return 10.0;
    }
  }

  // CAT Sectional Percentiles
  if (section === 'QA') {
    if (score >= 42) return 99.9;
    if (score >= 36) return 99.5;
    if (score >= 30) return 99.0;
    if (score >= 25) return 98.0;
    if (score >= 20) return 95.0;
    if (score >= 16) return 90.0;
    if (score >= 13) return 85.0;
    if (score >= 10) return 80.0;
    if (score >= 7) return 70.0;
    if (score >= 4) return 60.0;
    if (score > 0) return Math.min(55, Math.round(score * 12));
    return 10.0;
  } else if (section === 'VARC') {
    if (score >= 46) return 99.9;
    if (score >= 40) return 99.5;
    if (score >= 34) return 99.0;
    if (score >= 28) return 97.0;
    if (score >= 23) return 93.0;
    if (score >= 19) return 88.0;
    if (score >= 15) return 82.0;
    if (score >= 11) return 72.0;
    if (score >= 7) return 60.0;
    if (score > 0) return Math.min(55, Math.round(score * 8));
    return 10.0;
  } else {
    // DILR
    if (score >= 38) return 99.9;
    if (score >= 32) return 99.5;
    if (score >= 26) return 99.0;
    if (score >= 22) return 97.0;
    if (score >= 18) return 94.0;
    if (score >= 14) return 88.0;
    if (score >= 11) return 82.0;
    if (score >= 8) return 72.0;
    if (score >= 5) return 60.0;
    if (score > 0) return Math.min(55, Math.round(score * 11));
    return 10.0;
  }
};

// Full Mock Score-to-Percentile Model (CAT 198m, XAT ~75m, SNAP 60m)
export const estimateFullMockPercentile = (totalScore: number, examType: ExamType = 'CAT'): number => {
  if (examType === 'XAT') {
    // XAT Full Mock (~75 marks Part 1)
    if (totalScore >= 45) return 99.8;
    if (totalScore >= 40) return 99.2;
    if (totalScore >= 36) return 98.0;
    if (totalScore >= 33) return 95.0; // Typical XLRI BM shortlist cutoff
    if (totalScore >= 29) return 90.0;
    if (totalScore >= 25) return 85.0;
    if (totalScore >= 22) return 80.0;
    if (totalScore >= 18) return 70.0;
    if (totalScore >= 14) return 55.0;
    if (totalScore > 0) return Math.min(50, Math.round(totalScore * 3.5));
    return 10.0;
  }

  if (examType === 'SNAP') {
    // SNAP Full Mock (60 marks)
    if (totalScore >= 46) return 99.8;
    if (totalScore >= 43) return 99.0;
    if (totalScore >= 40) return 97.5;
    if (totalScore >= 36) return 94.0;
    if (totalScore >= 32) return 88.0;
    if (totalScore >= 28) return 80.0;
    if (totalScore >= 23) return 70.0;
    if (totalScore > 0) return Math.min(60, Math.round(totalScore * 2.5));
    return 10.0;
  }

  // CAT Full Mock (198 marks)
  if (totalScore >= 115) return 99.95;
  if (totalScore >= 102) return 99.9;
  if (totalScore >= 88) return 99.5;
  if (totalScore >= 78) return 99.0;
  if (totalScore >= 68) return 98.0;
  if (totalScore >= 58) return 95.0;
  if (totalScore >= 48) return 90.0;
  if (totalScore >= 40) return 85.0;
  if (totalScore >= 33) return 80.0;
  if (totalScore >= 26) return 70.0;
  if (totalScore >= 20) return 60.0;
  if (totalScore >= 14) return 50.0;
  if (totalScore > 0) return Math.min(45, Math.round(totalScore * 2.8));
  return 10.0;
};
