import { TestResult, ActiveSession, Question, UserAnswer, SectionType } from '../types';

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

// Score & CAT Marks Calculation according to official scheme:
// MCQ: Correct = +3, Incorrect = -1, Unattempted = 0
// TITA: Correct = +3, Incorrect = 0, Unattempted = 0
export const evaluateQuestionResponses = (
  questions: Question[],
  userResponses: Record<string, { response: number | string | null; status: any; timeSpentSeconds?: number }>
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
          marksAwarded = 3;
          correctCount++;
        } else {
          isCorrect = false;
          marksAwarded = -1;
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
          marksAwarded = 3;
          correctCount++;
        } else {
          isCorrect = false;
          marksAwarded = 0; // No negative marking in TITA!
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

// Historical CAT Score-to-Percentile Estimation Model
export const estimatePercentile = (score: number, section: SectionType): number => {
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

// Historical CAT 198-Mark Full Mock Score-to-Percentile Model
export const estimateFullMockPercentile = (totalScore: number): number => {
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
