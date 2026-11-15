import React, { useState, useEffect, useRef, useCallback } from 'react';
import { SectionalTest, TestResult, QuestionStatus, ActiveSession, ExamType, SectionType } from './types';
import { sectionalTests, getTestById, allFullMocks } from './data/testsData';
import {
  getTestHistory,
  saveTestResult,
  getActiveSession,
  saveActiveSession,
  clearActiveSession,
  evaluateQuestionResponses,
  estimatePercentile,
  estimateFullMockPercentile,
  getSectionBreakPromptEnabled,
  setSectionBreakPromptEnabled,
  getBookmarks,
  toggleBookmark,
} from './utils/storage';

// Analytics & Insights
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

// Components
import { Navbar } from './components/Navbar';
import { Dashboard } from './components/Dashboard';
import { FullMocksView } from './components/FullMocksView';
import { ExamHeader } from './components/ExamInterface/ExamHeader';
import { QuestionView } from './components/ExamInterface/QuestionView';
import { QuestionPalette } from './components/ExamInterface/QuestionPalette';
import { SubmitModal } from './components/ExamInterface/SubmitModal';
import { SectionTransitionModal } from './components/ExamInterface/SectionTransitionModal';
import { QuestionPaperModal } from './components/ExamInterface/QuestionPaperModal';
import { Scorecard } from './components/ResultReview/Scorecard';
import { DetailedAnalysis } from './components/ResultReview/DetailedAnalysis';
import { HistoryView } from './components/HistoryView';
import { BookmarksView } from './components/BookmarksView';
import { VirtualCalculator } from './components/VirtualCalculator';
import { AdBanner } from './components/AdBanner';
import { SupportModal } from './components/SupportModal';
import { Footer } from './components/Footer';
import { LegalModal, LegalTab } from './components/LegalModal';
import { AboutView } from './components/AboutView';
import { getInitialTheme, toggleThemeMode, ThemeMode } from './utils/theme';

interface HistoryStackState {
  view: 'dashboard' | 'exam' | 'scorecard' | 'analysis';
  tab: 'full-mocks' | 'tests' | 'topic-wise' | 'history' | 'bookmarks' | 'about';
  testId?: string;
  resultId?: string;
  exam?: ExamType;
  scrollY?: number;
  legalTab?: LegalTab;
}

export const getPageKey = (
  v: 'dashboard' | 'exam' | 'scorecard' | 'analysis',
  t: 'full-mocks' | 'tests' | 'topic-wise' | 'history' | 'bookmarks' | 'about' = 'full-mocks',
  exam: ExamType = 'CAT',
  testId?: string,
  resultId?: string
): string => {
  if (v === 'dashboard') {
    return `dashboard:${exam}:${t}`;
  }
  if (v === 'exam') {
    return `exam:${testId || ''}`;
  }
  if (v === 'scorecard') {
    return `scorecard:${testId || ''}:${resultId || ''}`;
  }
  if (v === 'analysis') {
    return `analysis:${testId || ''}:${resultId || ''}`;
  }
  return `${v}:${t}`;
};

export function App() {
  // Theme state (Dark / Light)
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);

  const handleToggleTheme = () => {
    setTheme((prev) => toggleThemeMode(prev));
  };

  // Multi-Exam State (CAT, XAT, SNAP)
  const [activeExam, setActiveExam] = useState<ExamType>('CAT');

  // Navigation & View state
  const [currentTab, setCurrentTab] = useState<'full-mocks' | 'tests' | 'topic-wise' | 'history' | 'bookmarks' | 'about'>('full-mocks');
  const [view, setView] = useState<'dashboard' | 'exam' | 'scorecard' | 'analysis'>('dashboard');

  // Active exam state
  const [activeTest, setActiveTest] = useState<SectionalTest | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [currentSectionIndex, setCurrentSectionIndex] = useState<number>(0);
  const [completedSections, setCompletedSections] = useState<Array<SectionType>>([]);
  const [sectionBreakPromptEnabled, setSectionBreakPromptEnabledState] = useState<boolean>(getSectionBreakPromptEnabled());
  const [remainingSeconds, setRemainingSeconds] = useState<number>(40 * 60);
  const [userResponses, setUserResponses] = useState<Record<string, number | string | null>>({});
  const [questionStatuses, setQuestionStatuses] = useState<Record<string, QuestionStatus>>({});
  const [questionTimes, setQuestionTimes] = useState<Record<string, number>>({});
  const [visitedQuestions, setVisitedQuestions] = useState<Set<string>>(new Set());
  const [isPaletteOpen, setIsPaletteOpen] = useState(true);

  // Result state
  const [currentResult, setCurrentResult] = useState<TestResult | null>(null);

  // History & Bookmarks state (from localStorage)
  const [history, setHistory] = useState<TestResult[]>(getTestHistory());
  const [bookmarks, setBookmarks] = useState<string[]>(getBookmarks());
  const [activeSession, setActiveSessionState] = useState<ActiveSession | null>(getActiveSession());

  // Modals & Tools state
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [isSectionTransitionModalOpen, setIsSectionTransitionModalOpen] = useState(false);
  const [transitionCompletedSection, setTransitionCompletedSection] = useState<SectionType>('VARC');
  const [transitionNextSection, setTransitionNextSection] = useState<SectionType>('DILR');
  const [transitionStats, setTransitionStats] = useState<{ attempted: number; total: number; timeSpent: number }>({
    attempted: 0,
    total: 24,
    timeSpent: 0,
  });
  const [isPaperModalOpen, setIsPaperModalOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const [activeLegalTab, setActiveLegalTab] = useState<LegalTab>('about');

  // Flag to avoid pushing history entry when navigating via browser Back/Forward (popstate)
  const isPopStateRef = useRef(false);

  // Scroll restoration tracking for independent tabs & stack pages
  const scrollPositionsRef = useRef<Record<string, number>>({});
  const pendingScrollRef = useRef<number | null>(null);

  const currentPageKey = getPageKey(view, currentTab, activeExam, activeTest?.id, currentResult?.id);
  const currentPageKeyRef = useRef(currentPageKey);
  const prevPageKeyRef = useRef(currentPageKey);

  useEffect(() => {
    currentPageKeyRef.current = currentPageKey;
  }, [currentPageKey]);

  // Window scroll listener: records scroll position for current page/tab
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    let saveTimeout: number | undefined;

    const handleWindowScroll = () => {
      const currentKey = currentPageKeyRef.current;
      if (currentKey.startsWith('exam:')) return;

      const currentScrollY = window.scrollY;
      scrollPositionsRef.current[currentKey] = currentScrollY;

      clearTimeout(saveTimeout);
      saveTimeout = window.setTimeout(() => {
        const state = window.history.state;
        if (state) {
          window.history.replaceState({ ...state, scrollY: currentScrollY }, '', window.location.hash);
        }
      }, 100);
    };

    window.addEventListener('scroll', handleWindowScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleWindowScroll);
      clearTimeout(saveTimeout);
    };
  }, []);

  // Scroll restoration effect: runs whenever page or tab changes
  useEffect(() => {
    if (prevPageKeyRef.current !== currentPageKey) {
      prevPageKeyRef.current = currentPageKey;

      const targetScroll = pendingScrollRef.current !== null
        ? pendingScrollRef.current
        : (scrollPositionsRef.current[currentPageKey] ?? 0);

      pendingScrollRef.current = null;

      // Apply scroll restoration immediately and verify with requestAnimationFrame
      window.scrollTo({ top: targetScroll, left: 0, behavior: 'instant' as ScrollBehavior });

      let rafId2: number | undefined;
      const rafId1 = requestAnimationFrame(() => {
        window.scrollTo({ top: targetScroll, left: 0, behavior: 'instant' as ScrollBehavior });
        rafId2 = requestAnimationFrame(() => {
          window.scrollTo({ top: targetScroll, left: 0, behavior: 'instant' as ScrollBehavior });
        });
      });

      return () => {
        cancelAnimationFrame(rafId1);
        if (rafId2 !== undefined) cancelAnimationFrame(rafId2);
      };
    }
  }, [currentPageKey]);

  const getHashForState = (
    v: 'dashboard' | 'exam' | 'scorecard' | 'analysis',
    t: 'full-mocks' | 'tests' | 'topic-wise' | 'history' | 'bookmarks' | 'about',
    tId?: string,
    exam: ExamType = activeExam
  ): string => {
    const examPrefix = exam.toLowerCase();
    if (v === 'dashboard') {
      return `#/${examPrefix}/${t}`;
    }
    if (v === 'exam') {
      return `#/exam${tId ? `/${tId}` : ''}`;
    }
    if (v === 'scorecard') {
      return `#/scorecard${tId ? `/${tId}` : ''}`;
    }
    if (v === 'analysis') {
      return `#/analysis${tId ? `/${tId}` : ''}`;
    }
    return `#/${examPrefix}/${t}`;
  };

  const pushNavState = useCallback(
    (
      newView: 'dashboard' | 'exam' | 'scorecard' | 'analysis',
      newTab?: 'full-mocks' | 'tests' | 'topic-wise' | 'history' | 'bookmarks' | 'about',
      testId?: string,
      resultId?: string,
      replace: boolean = false,
      exam?: ExamType
    ) => {
      const targetTab = newTab || currentTab;
      const targetTestId = testId || activeTest?.id;
      const targetResultId = resultId || currentResult?.id;
      const targetExam = exam || activeExam;

      // 1. Record current page's scroll position before navigating away
      const currentKey = getPageKey(view, currentTab, activeExam, activeTest?.id, currentResult?.id);
      scrollPositionsRef.current[currentKey] = window.scrollY;

      // 2. Determine target page key and desired scroll position
      const targetKey = getPageKey(newView, targetTab, targetExam, targetTestId, targetResultId);

      let targetScroll = 0;
      if (newView === 'exam') {
        targetScroll = 0;
      } else if (scrollPositionsRef.current[targetKey] !== undefined) {
        targetScroll = scrollPositionsRef.current[targetKey];
      } else {
        targetScroll = 0;
      }

      pendingScrollRef.current = targetScroll;

      const hash = getHashForState(newView, targetTab, targetTestId, targetExam);

      const stateObj: HistoryStackState = {
        view: newView,
        tab: targetTab,
        testId: targetTestId,
        resultId: targetResultId,
        exam: targetExam,
        scrollY: targetScroll,
      };

      if (!isPopStateRef.current) {
        if (replace) {
          window.history.replaceState(stateObj, '', hash);
        } else {
          window.history.pushState(stateObj, '', hash);
        }
      }

      setView(newView);
      if (newTab) {
        setCurrentTab(newTab);
      }
      if (exam) {
        setActiveExam(exam);
      }
    },
    [view, currentTab, activeTest, currentResult, activeExam]
  );

  const handleSelectExam = (newExam: ExamType) => {
    setActiveExam(newExam);
    pushNavState('dashboard', currentTab, undefined, undefined, false, newExam);
  };

  // Initial URL hash and History Stack setup on mount
  useEffect(() => {
    const saved = getActiveSession();
    if (saved) {
      setActiveSessionState(saved);
    }

    const hash = window.location.hash.replace(/^#\/?/, '');
    const parts = hash.split('/');

    let initialExam: ExamType = 'CAT';
    let route = parts[0];
    let id = parts[1];

    if (['cat', 'xat', 'snap'].includes(parts[0]?.toLowerCase())) {
      initialExam = parts[0].toUpperCase() as ExamType;
      route = parts[1] || 'full-mocks';
      id = parts[2];
    } else {
      const urlParams = new URLSearchParams(window.location.search);
      const qExam = urlParams.get('exam');
      if (qExam && ['cat', 'xat', 'snap'].includes(qExam.toLowerCase())) {
        initialExam = qExam.toUpperCase() as ExamType;
      }
    }

    let initialView: 'dashboard' | 'exam' | 'scorecard' | 'analysis' = 'dashboard';
    let initialTab: 'full-mocks' | 'tests' | 'topic-wise' | 'history' | 'bookmarks' | 'about' = 'full-mocks';
    let testToLoad: SectionalTest | null = null;
    let resultToLoad: TestResult | null = null;

    if (route === 'about' || route === 'mission' || route === 'about-us') {
      initialTab = 'about';
    } else if (['contact', 'privacy', 'terms', 'disclaimer'].includes(route)) {
      setActiveLegalTab(route as LegalTab);
      setIsLegalModalOpen(true);
    } else if (route === 'full-mocks') {
      initialTab = 'full-mocks';
    } else if (route === 'tests') {
      initialTab = 'tests';
    } else if (route === 'topic-wise') {
      initialTab = 'topic-wise';
    } else if (route === 'history') {
      initialTab = 'history';
    } else if (route === 'bookmarks') {
      initialTab = 'bookmarks';
    } else if (route === 'exam' && id) {
      const found = getTestById(id);
      if (found) {
        testToLoad = found;
        initialExam = found.examType || initialExam;
        initialView = 'exam';
      }
    } else if (route === 'scorecard' && id) {
      const found = getTestById(id);
      if (found) {
        testToLoad = found;
        initialExam = found.examType || initialExam;
        const past = getTestHistory().find((r) => r.testId === id);
        if (past) resultToLoad = past;
        initialView = 'scorecard';
      }
    } else if (route === 'analysis' && id) {
      const found = getTestById(id);
      if (found) {
        testToLoad = found;
        initialExam = found.examType || initialExam;
        const past = getTestHistory().find((r) => r.testId === id);
        if (past) resultToLoad = past;
        initialView = 'analysis';
      }
    }

    setActiveExam(initialExam);
    if (testToLoad) setActiveTest(testToLoad);
    if (resultToLoad) setCurrentResult(resultToLoad);
    setView(initialView);
    setCurrentTab(initialTab);

    const initialState: HistoryStackState = {
      view: initialView,
      tab: initialTab,
      testId: testToLoad?.id,
      resultId: resultToLoad?.id,
      exam: initialExam,
    };
    window.history.replaceState(
      initialState,
      '',
      getHashForState(initialView, initialTab, testToLoad?.id, initialExam)
    );
  }, []);

  // Handle Browser Back and Forward buttons seamlessly via popstate
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      // Check if user is navigating away from an ongoing active exam
      if (view === 'exam') {
        const confirmLeave = window.confirm(
          'You are in an active mock test. Do you want to pause your test and leave? Your progress is saved.'
        );
        if (!confirmLeave) {
          // Re-push exam state to cancel back navigation
          window.history.pushState(
            { view: 'exam', tab: currentTab, testId: activeTest?.id },
            '',
            `#/exam/${activeTest?.id || ''}`
          );
          return;
        } else {
          setActiveSessionState(getActiveSession());
        }
      }

      isPopStateRef.current = true;
      const state: HistoryStackState | null = event.state;

      let targetView: 'dashboard' | 'exam' | 'scorecard' | 'analysis' = 'dashboard';
      let targetTab: 'full-mocks' | 'tests' | 'topic-wise' | 'history' | 'bookmarks' | 'about' = currentTab;
      let targetExam: ExamType = activeExam;
      let targetTestId = activeTest?.id;
      let targetResultId = currentResult?.id;

      if (state && state.view) {
        targetView = state.view;
        if (state.tab) targetTab = state.tab;
        if (state.exam) targetExam = state.exam;
        if (state.testId) targetTestId = state.testId;
        if (state.resultId) targetResultId = state.resultId;

        setView(state.view);
        if (state.tab) {
          setCurrentTab(state.tab);
        }
        if (state.exam) {
          setActiveExam(state.exam);
        }
        if (state.testId) {
          const test = getTestById(state.testId);
          if (test) setActiveTest(test);
        }
        if (state.resultId) {
          const res = getTestHistory().find((r) => r.id === state.resultId);
          if (res) setCurrentResult(res);
        }
      } else {
        // Fallback for direct hash navigation
        const hash = window.location.hash.replace(/^#\/?/, '');
        const [route, id] = hash.split('/');
        if (route === 'exam' && id) {
          const t = getTestById(id);
          if (t) {
            targetView = 'exam';
            targetTestId = id;
            setActiveTest(t);
            setView('exam');
          }
        } else if (route === 'scorecard' && id) {
          const t = getTestById(id);
          if (t) {
            targetView = 'scorecard';
            targetTestId = id;
            setActiveTest(t);
            const res = getTestHistory().find((r) => r.testId === id);
            if (res) {
              targetResultId = res.id;
              setCurrentResult(res);
            }
            setView('scorecard');
          }
        } else if (route === 'analysis' && id) {
          const t = getTestById(id);
          if (t) {
            targetView = 'analysis';
            targetTestId = id;
            setActiveTest(t);
            const res = getTestHistory().find((r) => r.testId === id);
            if (res) {
              targetResultId = res.id;
              setCurrentResult(res);
            }
            setView('analysis');
          }
        } else if (['about', 'contact', 'privacy', 'terms', 'disclaimer'].includes(route)) {
          setActiveLegalTab(route as LegalTab);
          setIsLegalModalOpen(true);
        } else if (['full-mocks', 'tests', 'topic-wise', 'history', 'bookmarks'].includes(route)) {
          targetView = 'dashboard';
          targetTab = route as any;
          setCurrentTab(route as any);
          setView('dashboard');
        } else {
          targetView = 'dashboard';
          targetTab = 'full-mocks';
          setView('dashboard');
          setCurrentTab('full-mocks');
        }
      }

      const targetKey = getPageKey(targetView, targetTab, targetExam, targetTestId, targetResultId);
      const targetScroll = state?.scrollY !== undefined
        ? state.scrollY
        : (scrollPositionsRef.current[targetKey] ?? 0);

      pendingScrollRef.current = targetScroll;

      setTimeout(() => {
        isPopStateRef.current = false;
      }, 50);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [view, currentTab, activeTest]);

  const handleOpenLegalTab = (tab: LegalTab) => {
    setActiveLegalTab(tab);
    setIsLegalModalOpen(true);
    window.history.pushState(
      { view, tab: currentTab, legalTab: tab },
      '',
      `#/${tab}`
    );
  };

  const handleCloseLegalModal = () => {
    setIsLegalModalOpen(false);
    window.history.pushState(
      { view, tab: currentTab },
      '',
      getHashForState(view, currentTab, activeTest?.id)
    );
  };

  const refreshStorageData = () => {
    setHistory(getTestHistory());
    setBookmarks(getBookmarks());
    setActiveSessionState(getActiveSession());
  };

  // Timer Effect for active exam
  useEffect(() => {
    if (view !== 'exam' || !activeTest) return;

    const interval = setInterval(() => {
      setRemainingSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleAutoSubmit();
          return 0;
        }

        const curQ = activeTest.questions[currentQuestionIndex];
        if (curQ) {
          setQuestionTimes((times) => ({
            ...times,
            [curQ.id]: (times[curQ.id] || 0) + 1,
          }));
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [view, activeTest, currentQuestionIndex]);

  // Dynamic SEO Page Title & Meta Tag Updates for Target Keywords & Free Positioning
  useEffect(() => {
    let title = 'Free Mock Test - 86+ Free Mock Tests CBT for Competitive Exams (CAT, XAT, SNAP)';
    let desc = '100% Free Computer Based Test (CBT) portal for CAT, XAT, and SNAP with official simulations, authentic scoring, virtual calculator, and detailed solutions.';

    if (view === 'exam' && activeTest) {
      title = `Free ${activeTest.examType || 'CBT'} Mock Test: ${activeTest.title} (Official Simulation) | CBTMocks`;
      desc = `Take official ${activeTest.examType || ''} mock test ${activeTest.title} with real CBT timer, instant question palette, and detailed step-by-step solutions.`;
    } else if (view === 'scorecard' && activeTest) {
      title = `Free Mock Test Scorecard: ${activeTest.title} | Percentile & Analytics | CBTMocks`;
    } else if (view === 'analysis' && activeTest) {
      title = `Free Mock Test Solutions: ${activeTest.title} | Step-by-Step Analysis | CBTMocks`;
    } else if (activeExam === 'XAT') {
      if (currentTab === 'full-mocks') {
        title = 'Free XAT Mock Tests 2026 - Official Full Papers (175 Mins) | CBTMocks';
        desc = 'Practice 100% free official XAT full-length mock tests (175 minutes, 75 questions) with Decision Making, VALR, QA-DI, +1 / -0.25 marking, and 5 options (A-E).';
      } else if (currentTab === 'tests') {
        title = 'Free XAT Decision Making (DM) & Sectional Tests 2026 | CBTMocks';
        desc = 'Master XAT Decision Making (DM), Verbal Ability (VALR), and QA-DI with authentic past year caselets from XAT 2024 and 2023.';
      } else {
        title = 'Free XAT Mock Tests & PYQs 2026 (Decision Making & Sectionals) | CBTMocks';
        desc = 'Comprehensive free XAT 2026 preparation with previous year papers, ethical decision making caselets, and sectional mocks.';
      }
    } else if (activeExam === 'SNAP') {
      if (currentTab === 'full-mocks') {
        title = 'Free SNAP Mock Tests 2026 - 60-Minute Speed Mock Exams | CBTMocks';
        desc = 'Practice 60-minute authentic SNAP speed mock tests with 60 questions across General English, Analytical Reasoning, and Quant with +1 / -0.25 scoring.';
      } else {
        title = 'Free SNAP Sectional Speed Tests 2026 (GE, LR, QA-DS) | CBTMocks';
        desc = 'Timed speed sectionals for SNAP 2026: 15-minute General English, 25-minute Logical Reasoning, and 20-minute Quant tests.';
      }
    } else {
      // CAT
      if (currentTab === 'full-mocks') {
        title = 'Free CAT Mock Tests 2026 - 120-Minute Official Full Mocks | CBTMocks';
        desc = 'Authentic 120-minute 3-section CAT full mock tests (VARC 40m, DILR 40m, QA 40m) with 66 questions, 198 marks, and calculator.';
      } else if (currentTab === 'tests') {
        title = 'Free CAT Sectional Mock Tests 2026 (QA, DILR, VARC 40-Min) | CBTMocks';
        desc = 'Timed 40-minute authentic CAT sectional test papers from CAT 2020 to 2026 with official CBT countdown and +3 / -1 marking.';
      } else if (currentTab === 'topic-wise') {
        title = 'Free CAT Topic-Wise Practice Quizzes (QA, DILR, VARC) | CBTMocks';
      }
    }

    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', desc);
    }
  }, [view, currentTab, activeTest, activeExam]);

  // Helper getters for Full Mock vs Sectional Active State
  const isCurrentFullMock = Boolean(
    activeTest && (activeTest.isFullMock || activeTest.category === 'full-mock' || activeTest.section === 'FULL')
  );

  const activeSectionConfig = (isCurrentFullMock && activeTest?.sectionsList)
    ? activeTest.sectionsList[currentSectionIndex]
    : null;

  const currentSectionQuestions = activeTest
    ? (activeSectionConfig
        ? activeTest.questions.slice(activeSectionConfig.startIndex, activeSectionConfig.endIndex + 1)
        : activeTest.questions)
    : [];

  const activeQuestionGlobalIndex = activeSectionConfig
    ? activeSectionConfig.startIndex + currentQuestionIndex
    : currentQuestionIndex;

  const activeQuestion = (activeTest && activeTest.questions[activeQuestionGlobalIndex])
    ? activeTest.questions[activeQuestionGlobalIndex]
    : activeTest?.questions[0];

  // Periodic auto-save of active session
  useEffect(() => {
    if (view !== 'exam' || !activeTest) return;

    const sessionData: ActiveSession = {
      testId: activeTest.id,
      startTime: Date.now(),
      remainingSeconds,
      currentQuestionIndex,
      currentSectionIndex,
      completedSections,
      answers: {},
      visitedQuestions: Array.from(visitedQuestions),
      sectionBreakPromptEnabled,
    };

    activeTest.questions.forEach((q) => {
      sessionData.answers[q.id] = {
        questionId: q.id,
        response: userResponses[q.id] ?? null,
        status: questionStatuses[q.id] || 'not-visited',
        timeSpentSeconds: questionTimes[q.id] || 0,
      };
    });

    saveActiveSession(sessionData);
  }, [
    view,
    activeTest,
    remainingSeconds,
    currentQuestionIndex,
    currentSectionIndex,
    completedSections,
    userResponses,
    questionStatuses,
    questionTimes,
    visitedQuestions,
    sectionBreakPromptEnabled,
  ]);

  const handleStartTest = (test: SectionalTest) => {
    setActiveTest(test);
    const isMock = test.category === 'full-mock' || test.section === 'FULL' || test.isFullMock;
    setCurrentSectionIndex(0);
    setCompletedSections([]);
    setCurrentQuestionIndex(0);

    const initialSecSeconds = (isMock && test.sectionsList && test.sectionsList[0]?.durationMinutes)
      ? test.sectionsList[0].durationMinutes * 60
      : (isMock ? 40 * 60 : test.durationMinutes * 60);
    setRemainingSeconds(initialSecSeconds);

    const initialStatuses: Record<string, QuestionStatus> = {};
    const initialVisited = new Set<string>();

    test.questions.forEach((q, idx) => {
      if (idx === 0) {
        initialStatuses[q.id] = 'not-answered';
        initialVisited.add(q.id);
      } else {
        initialStatuses[q.id] = 'not-visited';
      }
    });

    setUserResponses({});
    setQuestionStatuses(initialStatuses);
    setQuestionTimes({});
    setVisitedQuestions(initialVisited);
    setIsPaletteOpen(true);

    const targetTab = test.category === 'full-mock'
      ? 'full-mocks'
      : (test.category === 'topic-wise' ? 'topic-wise' : 'tests');
    scrollPositionsRef.current[`exam:${test.id}`] = 0;
    pendingScrollRef.current = 0;
    pushNavState('exam', targetTab, test.id);
  };

  const handleResumeActiveTest = () => {
    const session = getActiveSession();
    if (!session) return;

    const test = getTestById(session.testId);
    if (!test) return;

    setActiveTest(test);
    const isMock = test.category === 'full-mock' || test.section === 'FULL' || test.isFullMock;
    const secIdx = session.currentSectionIndex || 0;
    setCurrentSectionIndex(secIdx);
    setCompletedSections(session.completedSections || []);
    setCurrentQuestionIndex(session.currentQuestionIndex || 0);

    const defaultSecDuration = (isMock && test.sectionsList && test.sectionsList[secIdx]?.durationMinutes)
      ? test.sectionsList[secIdx].durationMinutes * 60
      : (isMock ? 40 * 60 : test.durationMinutes * 60);
    setRemainingSeconds(session.remainingSeconds || defaultSecDuration);

    const responses: Record<string, number | string | null> = {};
    const statuses: Record<string, QuestionStatus> = {};
    const times: Record<string, number> = {};

    Object.entries(session.answers).forEach(([qId, ans]) => {
      responses[qId] = ans.response;
      statuses[qId] = ans.status;
      times[qId] = ans.timeSpentSeconds;
    });

    setUserResponses(responses);
    setQuestionStatuses(statuses);
    setQuestionTimes(times);
    setVisitedQuestions(new Set(session.visitedQuestions || []));
    if (session.sectionBreakPromptEnabled !== undefined) {
      setSectionBreakPromptEnabledState(session.sectionBreakPromptEnabled);
    }
    setIsPaletteOpen(true);

    const targetTab = test.category === 'full-mock'
      ? 'full-mocks'
      : (test.category === 'topic-wise' ? 'topic-wise' : 'tests');
    scrollPositionsRef.current[`exam:${test.id}`] = 0;
    pendingScrollRef.current = 0;
    pushNavState('exam', targetTab, test.id);
  };

  const handleDiscardActiveTest = () => {
    clearActiveSession();
    setActiveSessionState(null);
  };

  const handleExitTest = () => {
    if (window.confirm('Pause test and return to Dashboard? Your progress is saved and you can resume anytime.')) {
      setActiveSessionState(getActiveSession());
      const targetTab = activeTest?.category === 'full-mock'
        ? 'full-mocks'
        : (activeTest?.category === 'topic-wise' ? 'topic-wise' : 'tests');
      pushNavState('dashboard', targetTab);
    }
  };

  const selectQuestion = (index: number) => {
    if (!activeTest) return;
    const currentQ = activeQuestion;
    const targetGlobalIndex = activeSectionConfig
      ? activeSectionConfig.startIndex + index
      : index;
    const targetQ = activeTest.questions[targetGlobalIndex];

    if (currentQ) {
      const curStatus = questionStatuses[currentQ.id];
      if (curStatus === 'not-visited') {
        setQuestionStatuses((prev) => ({ ...prev, [currentQ.id]: 'not-answered' }));
      }
    }

    if (targetQ) {
      setVisitedQuestions((prev) => new Set(prev).add(targetQ.id));
      if (!questionStatuses[targetQ.id] || questionStatuses[targetQ.id] === 'not-visited') {
        setQuestionStatuses((prev) => ({ ...prev, [targetQ.id]: 'not-answered' }));
      }
    }

    setCurrentQuestionIndex(index);
  };

  const handleSaveAndNext = () => {
    if (!activeTest || !activeQuestion) return;
    const currentQ = activeQuestion;
    const resp = userResponses[currentQ.id];
    const hasAnswer = resp !== null && resp !== undefined && String(resp).trim() !== '';

    const newStatus: QuestionStatus = hasAnswer ? 'answered' : 'not-answered';
    setQuestionStatuses((prev) => ({ ...prev, [currentQ.id]: newStatus }));

    if (currentQuestionIndex < currentSectionQuestions.length - 1) {
      selectQuestion(currentQuestionIndex + 1);
    }
  };

  const handleMarkForReviewAndNext = () => {
    if (!activeTest || !activeQuestion) return;
    const currentQ = activeQuestion;
    const resp = userResponses[currentQ.id];
    const hasAnswer = resp !== null && resp !== undefined && String(resp).trim() !== '';

    const newStatus: QuestionStatus = hasAnswer ? 'marked-answered' : 'marked';
    setQuestionStatuses((prev) => ({ ...prev, [currentQ.id]: newStatus }));

    if (currentQuestionIndex < currentSectionQuestions.length - 1) {
      selectQuestion(currentQuestionIndex + 1);
    }
  };

  const handleClearResponse = () => {
    if (!activeTest || !activeQuestion) return;
    const currentQ = activeQuestion;

    setUserResponses((prev) => {
      const next = { ...prev };
      delete next[currentQ.id];
      return next;
    });

    setQuestionStatuses((prev) => ({ ...prev, [currentQ.id]: 'not-answered' }));
  };

  const handleToggleBreakPrompt = () => {
    const nextVal = !sectionBreakPromptEnabled;
    setSectionBreakPromptEnabledState(nextVal);
    setSectionBreakPromptEnabled(nextVal);
  };

  const handleDisableBreakPrompt = () => {
    setSectionBreakPromptEnabledState(false);
    setSectionBreakPromptEnabled(false);
  };

  const handleAdvanceToNextSection = () => {
    setIsSectionTransitionModalOpen(false);
    if (!activeTest || !activeTest.sectionsList) return;

    const nextIdx = currentSectionIndex + 1;
    setCurrentSectionIndex(nextIdx);
    setCurrentQuestionIndex(0);

    const nextDuration = (activeTest.sectionsList[nextIdx]?.durationMinutes || 40) * 60;
    setRemainingSeconds(nextDuration);

    const nextConfig = activeTest.sectionsList[nextIdx];
    const firstQ = activeTest.questions[nextConfig.startIndex];
    if (firstQ) {
      setQuestionStatuses((prev) => ({
        ...prev,
        [firstQ.id]: prev[firstQ.id] && prev[firstQ.id] !== 'not-visited' ? prev[firstQ.id] : 'not-answered',
      }));
      setVisitedQuestions((prev) => new Set([...prev, firstQ.id]));
    }

    const curPayload: Record<string, any> = {};
    activeTest.questions.forEach((q) => {
      curPayload[q.id] = {
        questionId: q.id,
        response: userResponses[q.id] ?? null,
        status: questionStatuses[q.id] || 'not-visited',
        timeSpentSeconds: questionTimes[q.id] || 0,
      };
    });

    const updatedCompleted = Array.from(
      new Set([...completedSections, activeTest.sectionsList[currentSectionIndex].section])
    );
    setCompletedSections(updatedCompleted);

    saveActiveSession({
      testId: activeTest.id,
      startTime: Date.now(),
      remainingSeconds: nextDuration,
      currentSectionIndex: nextIdx,
      completedSections: updatedCompleted,
      currentQuestionIndex: 0,
      answers: curPayload,
      visitedQuestions: Array.from(visitedQuestions),
      sectionBreakPromptEnabled,
    });
  };

  const handlePauseAndExitFromTransition = () => {
    setIsSectionTransitionModalOpen(false);
    if (!activeTest || !activeTest.sectionsList) return;

    const nextIdx = currentSectionIndex + 1;
    const nextDuration = (activeTest.sectionsList[nextIdx]?.durationMinutes || 40) * 60;
    const updatedCompleted = Array.from(
      new Set([...completedSections, activeTest.sectionsList[currentSectionIndex].section])
    );
    setCompletedSections(updatedCompleted);

    const curPayload: Record<string, any> = {};
    activeTest.questions.forEach((q) => {
      curPayload[q.id] = {
        questionId: q.id,
        response: userResponses[q.id] ?? null,
        status: questionStatuses[q.id] || 'not-visited',
        timeSpentSeconds: questionTimes[q.id] || 0,
      };
    });

    saveActiveSession({
      testId: activeTest.id,
      startTime: Date.now(),
      remainingSeconds: nextDuration,
      currentSectionIndex: nextIdx,
      completedSections: updatedCompleted,
      currentQuestionIndex: 0,
      answers: curPayload,
      visitedQuestions: Array.from(visitedQuestions),
      sectionBreakPromptEnabled,
    });

    setActiveSessionState(getActiveSession());
    pushNavState('dashboard', 'full-mocks');
  };

  const handleSubmitExam = () => {
    if (!activeTest) return;

    // Full Mock interim section submission
    if (isCurrentFullMock && activeTest.sectionsList && currentSectionIndex < activeTest.sectionsList.length - 1) {
      setIsSubmitModalOpen(false);

      const secConfig = activeTest.sectionsList[currentSectionIndex];
      const completedSec = secConfig.section;
      const nextSecConfig = activeTest.sectionsList[currentSectionIndex + 1];
      const nextSec = nextSecConfig.section;

      const secQuestions = activeTest.questions.slice(secConfig.startIndex, secConfig.endIndex + 1);
      const attemptedInSec = secQuestions.filter((q) => {
        const resp = userResponses[q.id];
        return resp !== null && resp !== undefined && String(resp).trim() !== '';
      }).length;

      const currentDuration = (secConfig.durationMinutes || 40) * 60;
      const timeTakenInSec = currentDuration - remainingSeconds;
      setCompletedSections((prev) => Array.from(new Set([...prev, completedSec])));

      if (sectionBreakPromptEnabled) {
        setTransitionCompletedSection(completedSec);
        setTransitionNextSection(nextSec);
        setTransitionStats({
          attempted: attemptedInSec,
          total: secQuestions.length,
          timeSpent: Math.max(1, timeTakenInSec),
        });
        setIsSectionTransitionModalOpen(true);
      } else {
        handleAdvanceToNextSection();
      }
      return;
    }

    // Final test submission
    const responsePayload: Record<string, { response: number | string | null; status: QuestionStatus; timeSpentSeconds: number }> = {};

    activeTest.questions.forEach((q) => {
      const resp = userResponses[q.id] ?? null;
      const status = questionStatuses[q.id] || 'not-visited';
      const timeSpent = questionTimes[q.id] || 0;

      responsePayload[q.id] = {
        response: (status === 'answered' || status === 'marked-answered') ? resp : null,
        status,
        timeSpentSeconds: timeSpent,
      };
    });

    const {
      processedAnswers,
      totalMarks,
      correctCount,
      incorrectCount,
      unattemptedCount,
      accuracy,
    } = evaluateQuestionResponses(activeTest.questions, responsePayload, activeTest.examType || 'CAT');

    const totalTimeTaken = isCurrentFullMock
      ? Math.max(1, (activeTest.durationMinutes || 120) * 60 - remainingSeconds)
      : Math.max(1, activeTest.durationMinutes * 60 - remainingSeconds);

    const estimatedPercentile = isCurrentFullMock
      ? estimateFullMockPercentile(totalMarks, activeTest.examType || 'CAT')
      : estimatePercentile(totalMarks, activeTest.section, activeTest.examType || 'CAT');

    const result: TestResult = {
      id: `res-${Date.now()}`,
      testId: activeTest.id,
      testTitle: activeTest.title,
      section: activeTest.section,
      category: activeTest.category,
      examType: activeTest.examType || 'CAT',
      year: activeTest.year,
      timestamp: Date.now(),
      totalTimeSeconds: totalTimeTaken,
      totalMarks,
      maxMarks: activeTest.totalMarks,
      correctCount,
      incorrectCount,
      unattemptedCount,
      accuracy,
      estimatedPercentile,
      answers: processedAnswers,
    };

    saveTestResult(result);
    clearActiveSession();
    setActiveSessionState(null);

    setCurrentResult(result);
    setIsSubmitModalOpen(false);
    refreshStorageData();

    const targetTab = activeTest.category === 'full-mock'
      ? 'full-mocks'
      : (activeTest.category === 'topic-wise' ? 'topic-wise' : 'tests');
    const scorecardKey = getPageKey('scorecard', targetTab, activeExam, activeTest.id, result.id);
    scrollPositionsRef.current[scorecardKey] = 0;
    pendingScrollRef.current = 0;
    pushNavState('scorecard', targetTab, activeTest.id, result.id);
  };

  const handleAutoSubmit = () => {
    handleSubmitExam();
  };

  const handleReviewPastTest = (result: TestResult) => {
    const test = getTestById(result.testId);
    if (!test) return;

    setActiveTest(test);
    setCurrentResult(result);
    pushNavState('analysis', test.category === 'topic-wise' ? 'topic-wise' : 'tests', test.id, result.id);
  };

  const handleSelectResultFromHistory = (result: TestResult) => {
    const test = getTestById(result.testId);
    if (!test) return;

    setActiveTest(test);
    setCurrentResult(result);
    pushNavState('scorecard', 'history', test.id, result.id);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900 dark:selection:bg-blue-900 dark:selection:text-white transition-colors duration-150">
      {/* Navbar: Visible when NOT in active exam */}
      {view !== 'exam' && (
        <Navbar
          currentTab={currentTab}
          onSelectTab={(tab) => {
            if (view === 'dashboard' && tab === currentTab) {
              const currentKey = getPageKey('dashboard', tab, activeExam);
              scrollPositionsRef.current[currentKey] = 0;
              window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            } else {
              pushNavState('dashboard', tab);
            }
          }}
          activeExam={activeExam}
          onSelectExam={handleSelectExam}
          testsGivenCount={history.length}
          bookmarksCount={bookmarks.length}
          onToggleCalculator={() => setIsCalculatorOpen((prev) => !prev)}
          onOpenSupport={() => setIsSupportModalOpen(true)}
          theme={theme}
          onToggleTheme={handleToggleTheme}
        />
      )}

      {/* Main Body */}
      <main className="flex-1 flex flex-col bg-white dark:bg-slate-950">
        {/* EXAM VIEW (Real CAT/XAT/SNAP CBT interface with maximized question area) */}
        {view === 'exam' && activeTest && activeQuestion && (
          <div className="flex-1 flex flex-col h-screen overflow-hidden bg-white dark:bg-slate-950">
            <ExamHeader
              title={activeTest.title}
              section={isCurrentFullMock ? (activeSectionConfig?.section || 'FULL') : activeTest.section}
              durationMinutes={isCurrentFullMock ? (activeSectionConfig?.durationMinutes || 40) : activeTest.durationMinutes}
              remainingSeconds={remainingSeconds}
              isPaletteOpen={isPaletteOpen}
              onTogglePalette={() => setIsPaletteOpen((prev) => !prev)}
              onToggleCalculator={() => setIsCalculatorOpen((prev) => !prev)}
              onOpenQuestionPaper={() => setIsPaperModalOpen(true)}
              onSubmitClick={() => setIsSubmitModalOpen(true)}
              onExitTest={handleExitTest}
              isFullMock={isCurrentFullMock}
              currentSectionIndex={currentSectionIndex}
              completedSections={completedSections}
              sectionsList={activeTest.sectionsList}
              sectionBreakPromptEnabled={sectionBreakPromptEnabled}
              onToggleBreakPrompt={handleToggleBreakPrompt}
              theme={theme}
              onToggleTheme={handleToggleTheme}
              submitButtonLabel={
                isCurrentFullMock && activeTest.sectionsList && currentSectionIndex < activeTest.sectionsList.length - 1
                  ? `Submit ${activeSectionConfig?.section || 'Section'}`
                  : 'Submit Test'
              }
            />

            <div className="flex-1 flex flex-col lg:flex-row overflow-hidden bg-white dark:bg-slate-950">
              <QuestionView
                question={activeQuestion}
                selectedOption={userResponses[activeQuestion.id] ?? null}
                onSelectOption={(val) => {
                  const qId = activeQuestion.id;
                  setUserResponses((prev) => ({ ...prev, [qId]: val }));
                }}
                onSaveAndNext={handleSaveAndNext}
                onMarkForReviewAndNext={handleMarkForReviewAndNext}
                onClearResponse={handleClearResponse}
                onPrevious={() => {
                  if (currentQuestionIndex > 0) {
                    selectQuestion(currentQuestionIndex - 1);
                  }
                }}
                onNext={() => {
                  if (currentQuestionIndex < currentSectionQuestions.length - 1) {
                    selectQuestion(currentQuestionIndex + 1);
                  }
                }}
                isFirst={currentQuestionIndex === 0}
                isLast={currentQuestionIndex === currentSectionQuestions.length - 1}
                isBookmarked={bookmarks.includes(activeQuestion.id)}
                onToggleBookmark={() => {
                  const qId = activeQuestion.id;
                  toggleBookmark(qId);
                  setBookmarks(getBookmarks());
                }}
              />

              {isPaletteOpen && (
                <QuestionPalette
                  questions={currentSectionQuestions}
                  currentQuestionIndex={currentQuestionIndex}
                  questionStatuses={questionStatuses}
                  onSelectQuestion={selectQuestion}
                  onSubmitClick={() => setIsSubmitModalOpen(true)}
                  onClose={() => setIsPaletteOpen(false)}
                />
              )}
            </div>

            {/* Non-intrusive thin bottom bar during mock exam */}
            <AdBanner slot="exam-bottom-bar" />
          </div>
        )}

        {/* NON-EXAM VIEWS (With optional side rails on ultra-wide screens) */}
        {view !== 'exam' && (
          <div className="flex justify-center w-full min-h-[calc(100vh-64px)] px-2 sm:px-4">
            {/* Left Side Rail (Only rendered when real Google AdSense ID is configured) */}
            <AdBanner slot="side-rail-left" className="mr-4" />

            <div className="flex-1 max-w-7xl w-full">
              {/* POST-EXAM SCORECARD VIEW - BASIC & STREAMLINED */}
              {view === 'scorecard' && currentResult && activeTest && (
                <Scorecard
                  result={currentResult}
                  test={activeTest}
                  onReviewSolutions={() => pushNavState('analysis', currentTab, activeTest.id, currentResult.id)}
                  onRetakeTest={() => handleStartTest(activeTest)}
                  onGoHome={() => {
                    const tab = activeTest && activeTest.category === 'full-mock'
                      ? 'full-mocks'
                      : (activeTest && activeTest.category === 'topic-wise' ? 'topic-wise' : 'tests');
                    pushNavState('dashboard', tab);
                  }}
                />
              )}

              {/* POST-EXAM RESPONSES REVIEW - BASIC CORRECT/INCORRECT & TIME (NO LONG EXPLANATIONS) */}
              {view === 'analysis' && currentResult && activeTest && (
                <DetailedAnalysis
                  test={activeTest}
                  result={currentResult}
                  onBackToScorecard={() => pushNavState('scorecard', currentTab, activeTest.id, currentResult.id)}
                  onGoHome={() => {
                    const tab = activeTest && activeTest.category === 'full-mock'
                      ? 'full-mocks'
                      : (activeTest && activeTest.category === 'topic-wise' ? 'topic-wise' : 'tests');
                    pushNavState('dashboard', tab);
                  }}
                />
              )}

              {/* DASHBOARD / FULL MOCKS / TOPIC-WISE / TESTS GIVEN / BOOKMARKS TABS */}
              {view === 'dashboard' && (
                <>
                  {currentTab === 'full-mocks' && (
                    <FullMocksView
                      fullMocks={allFullMocks}
                      testHistory={history}
                      activeSession={activeSession}
                      activeExam={activeExam}
                      onResumeActiveTest={handleResumeActiveTest}
                      onDiscardActiveTest={handleDiscardActiveTest}
                      onStartTest={handleStartTest}
                      onReviewPastTest={handleReviewPastTest}
                    />
                  )}

                  {(currentTab === 'tests' || currentTab === 'topic-wise') && (
                    <Dashboard
                      tests={sectionalTests}
                      testHistory={history}
                      activeSession={activeSession}
                      activeCategory={currentTab === 'topic-wise' ? 'topic-wise' : 'sectional-pyq'}
                      activeExam={activeExam}
                      onSelectCategory={(cat) => {
                        const tab = cat === 'topic-wise' ? 'topic-wise' : 'tests';
                        pushNavState('dashboard', tab);
                      }}
                      onResumeActiveTest={handleResumeActiveTest}
                      onDiscardActiveTest={handleDiscardActiveTest}
                      onStartTest={handleStartTest}
                      onReviewPastTest={handleReviewPastTest}
                      onOpenAbout={() => pushNavState('dashboard', 'about')}
                    />
                  )}

                  {currentTab === 'about' && (
                    <AboutView
                      onStartFullMock={() => pushNavState('dashboard', 'full-mocks')}
                      onStartSectionals={() => pushNavState('dashboard', 'tests')}
                      onOpenSupport={() => setIsSupportModalOpen(true)}
                    />
                  )}

                  {currentTab === 'history' && (
                    <HistoryView
                      history={history}
                      onSelectResult={handleSelectResultFromHistory}
                      onRetakeTest={(testId) => {
                        const t = getTestById(testId);
                        if (t) handleStartTest(t);
                      }}
                      onRefreshHistory={refreshStorageData}
                    />
                  )}

                  {currentTab === 'bookmarks' && (
                    <BookmarksView
                      allTests={sectionalTests}
                      onBackToDashboard={() => pushNavState('dashboard', 'full-mocks')}
                    />
                  )}
                </>
              )}
            </div>

            {/* Right Side Rail */}
            <AdBanner slot="side-rail-right" className="ml-4" />
          </div>
        )}
      </main>

      {/* Footer */}
      {view !== 'exam' && (
        <Footer
          onOpenLegalTab={handleOpenLegalTab}
          onSelectTab={(tab) => {
            if (view === 'dashboard' && tab === currentTab) {
              const currentKey = getPageKey('dashboard', tab, activeExam);
              scrollPositionsRef.current[currentKey] = 0;
              window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            } else {
              pushNavState('dashboard', tab);
            }
          }}
          onOpenCalculator={() => setIsCalculatorOpen((prev) => !prev)}
          onOpenSupport={() => setIsSupportModalOpen(true)}
        />
      )}

      {/* CAT Virtual Calculator Widget */}
      <VirtualCalculator
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
      />

      {/* Support 100% Free Mocks Modal */}
      <SupportModal
        isOpen={isSupportModalOpen}
        onClose={() => setIsSupportModalOpen(false)}
      />

      {/* Section Transition Break Modal (Full Mocks) */}
      <SectionTransitionModal
        isOpen={isSectionTransitionModalOpen}
        completedSection={transitionCompletedSection}
        completedSectionNumber={currentSectionIndex + 1}
        nextSection={transitionNextSection}
        nextSectionNumber={currentSectionIndex + 2}
        attemptedCount={transitionStats.attempted}
        totalQuestions={transitionStats.total}
        timeSpentSeconds={transitionStats.timeSpent}
        onStartNextSection={handleAdvanceToNextSection}
        onPauseAndExit={handlePauseAndExitFromTransition}
        onDisableFuturePrompts={handleDisableBreakPrompt}
      />

      {/* Confirmation Submit Modal */}
      {view === 'exam' && activeTest && (
        <SubmitModal
          isOpen={isSubmitModalOpen}
          onClose={() => setIsSubmitModalOpen(false)}
          onConfirmSubmit={handleSubmitExam}
          testTitle={
            isCurrentFullMock
              ? `${activeTest.title} - Section ${currentSectionIndex + 1} (${activeSectionConfig?.section || ''})`
              : activeTest.title
          }
          section={isCurrentFullMock ? (activeSectionConfig?.section || 'VARC') : activeTest.section}
          questions={currentSectionQuestions}
          questionStatuses={questionStatuses}
        />
      )}

      {/* Full Question Paper Modal */}
      {view === 'exam' && activeTest && (
        <QuestionPaperModal
          isOpen={isPaperModalOpen}
          onClose={() => setIsPaperModalOpen(false)}
          questions={currentSectionQuestions}
          testTitle={
            isCurrentFullMock
              ? `${activeTest.title} - Section ${currentSectionIndex + 1} (${activeSectionConfig?.section || ''})`
              : activeTest.title
          }
        />
      )}

      {/* Footer: Visible on all non-exam views */}
      {view !== 'exam' && (
        <Footer
          onOpenLegalTab={handleOpenLegalTab}
          onSelectTab={(tab) => pushNavState('dashboard', tab)}
          onOpenCalculator={() => setIsCalculatorOpen((prev) => !prev)}
          onOpenSupport={() => setIsSupportModalOpen(true)}
        />
      )}

      {/* Legal & Compliance Modal (AdSense Required: About, Contact, Privacy, Terms, Disclaimer) */}
      <LegalModal
        isOpen={isLegalModalOpen}
        activeTab={activeLegalTab}
        onTabChange={(tab) => {
          setActiveLegalTab(tab);
          window.history.replaceState({ view, tab: currentTab, legalTab: tab }, '', `#/${tab}`);
        }}
        onClose={handleCloseLegalModal}
        onOpenSupport={() => setIsSupportModalOpen(true)}
      />

      {/* Vercel Analytics & Web Vitals Speed Insights */}
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App;
