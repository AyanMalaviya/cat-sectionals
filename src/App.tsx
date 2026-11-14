import React, { useState, useEffect, useRef, useCallback } from 'react';
import { SectionalTest, TestResult, QuestionStatus, ActiveSession } from './types';
import { sectionalTests, getTestById } from './data/testsData';
import {
  getTestHistory,
  saveTestResult,
  getActiveSession,
  saveActiveSession,
  clearActiveSession,
  evaluateQuestionResponses,
  estimatePercentile,
  getBookmarks,
  toggleBookmark,
  getCandidateName,
} from './utils/storage';

// Components
import { Navbar } from './components/Navbar';
import { Dashboard } from './components/Dashboard';
import { ExamHeader } from './components/ExamInterface/ExamHeader';
import { QuestionView } from './components/ExamInterface/QuestionView';
import { QuestionPalette } from './components/ExamInterface/QuestionPalette';
import { SubmitModal } from './components/ExamInterface/SubmitModal';
import { QuestionPaperModal } from './components/ExamInterface/QuestionPaperModal';
import { Scorecard } from './components/ResultReview/Scorecard';
import { DetailedAnalysis } from './components/ResultReview/DetailedAnalysis';
import { HistoryView } from './components/HistoryView';
import { BookmarksView } from './components/BookmarksView';
import { VirtualCalculator } from './components/VirtualCalculator';
import { AdBanner } from './components/AdBanner';

interface HistoryStackState {
  view: 'dashboard' | 'exam' | 'scorecard' | 'analysis';
  tab: 'tests' | 'topic-wise' | 'history' | 'bookmarks';
  testId?: string;
  resultId?: string;
}

export function App() {
  // Navigation & View state
  const [currentTab, setCurrentTab] = useState<'tests' | 'topic-wise' | 'history' | 'bookmarks'>('tests');
  const [view, setView] = useState<'dashboard' | 'exam' | 'scorecard' | 'analysis'>('dashboard');

  // Active exam state
  const [activeTest, setActiveTest] = useState<SectionalTest | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
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
  const [isPaperModalOpen, setIsPaperModalOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  const candidateName = getCandidateName();

  // Flag to avoid pushing history entry when navigating via browser Back/Forward (popstate)
  const isPopStateRef = useRef(false);

  const getHashForState = (
    v: 'dashboard' | 'exam' | 'scorecard' | 'analysis',
    t: 'tests' | 'topic-wise' | 'history' | 'bookmarks',
    tId?: string
  ): string => {
    if (v === 'dashboard') {
      return `#/${t}`;
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
    return `#/${t}`;
  };

  const pushNavState = useCallback(
    (
      newView: 'dashboard' | 'exam' | 'scorecard' | 'analysis',
      newTab?: 'tests' | 'topic-wise' | 'history' | 'bookmarks',
      testId?: string,
      resultId?: string,
      replace: boolean = false
    ) => {
      const targetTab = newTab || currentTab;
      const targetTestId = testId || activeTest?.id;
      const targetResultId = resultId || currentResult?.id;

      const hash = getHashForState(newView, targetTab, targetTestId);

      const stateObj: HistoryStackState = {
        view: newView,
        tab: targetTab,
        testId: targetTestId,
        resultId: targetResultId,
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
    },
    [currentTab, activeTest, currentResult]
  );

  // Initial URL hash and History Stack setup on mount
  useEffect(() => {
    const saved = getActiveSession();
    if (saved) {
      setActiveSessionState(saved);
    }

    const hash = window.location.hash.replace(/^#\/?/, '');
    const [route, id] = hash.split('/');

    let initialView: 'dashboard' | 'exam' | 'scorecard' | 'analysis' = 'dashboard';
    let initialTab: 'tests' | 'topic-wise' | 'history' | 'bookmarks' = 'tests';
    let testToLoad: SectionalTest | null = null;
    let resultToLoad: TestResult | null = null;

    if (route === 'topic-wise') {
      initialTab = 'topic-wise';
    } else if (route === 'history') {
      initialTab = 'history';
    } else if (route === 'bookmarks') {
      initialTab = 'bookmarks';
    } else if (route === 'exam' && id) {
      const found = getTestById(id);
      if (found) {
        testToLoad = found;
        initialView = 'exam';
      }
    } else if (route === 'scorecard' && id) {
      const found = getTestById(id);
      if (found) {
        testToLoad = found;
        const past = getTestHistory().find((r) => r.testId === id);
        if (past) resultToLoad = past;
        initialView = 'scorecard';
      }
    } else if (route === 'analysis' && id) {
      const found = getTestById(id);
      if (found) {
        testToLoad = found;
        const past = getTestHistory().find((r) => r.testId === id);
        if (past) resultToLoad = past;
        initialView = 'analysis';
      }
    }

    if (testToLoad) setActiveTest(testToLoad);
    if (resultToLoad) setCurrentResult(resultToLoad);
    setView(initialView);
    setCurrentTab(initialTab);

    const initialState: HistoryStackState = {
      view: initialView,
      tab: initialTab,
      testId: testToLoad?.id,
      resultId: resultToLoad?.id,
    };
    window.history.replaceState(
      initialState,
      '',
      getHashForState(initialView, initialTab, testToLoad?.id)
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

      if (state && state.view) {
        setView(state.view);
        if (state.tab) {
          setCurrentTab(state.tab);
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
            setActiveTest(t);
            setView('exam');
          }
        } else if (route === 'scorecard' && id) {
          const t = getTestById(id);
          if (t) {
            setActiveTest(t);
            const res = getTestHistory().find((r) => r.testId === id);
            if (res) setCurrentResult(res);
            setView('scorecard');
          }
        } else if (route === 'analysis' && id) {
          const t = getTestById(id);
          if (t) {
            setActiveTest(t);
            const res = getTestHistory().find((r) => r.testId === id);
            if (res) setCurrentResult(res);
            setView('analysis');
          }
        } else if (['tests', 'topic-wise', 'history', 'bookmarks'].includes(route)) {
          setCurrentTab(route as any);
          setView('dashboard');
        } else {
          setView('dashboard');
          setCurrentTab('tests');
        }
      }

      setTimeout(() => {
        isPopStateRef.current = false;
      }, 50);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [view, currentTab, activeTest]);

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

  // Periodic auto-save of active session
  useEffect(() => {
    if (view !== 'exam' || !activeTest) return;

    const sessionData: ActiveSession = {
      testId: activeTest.id,
      startTime: Date.now(),
      remainingSeconds,
      currentQuestionIndex,
      answers: {},
      visitedQuestions: Array.from(visitedQuestions),
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
  }, [view, activeTest, remainingSeconds, currentQuestionIndex, userResponses, questionStatuses, questionTimes, visitedQuestions]);

  const handleStartTest = (test: SectionalTest) => {
    setActiveTest(test);
    setCurrentQuestionIndex(0);
    setRemainingSeconds(test.durationMinutes * 60);

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

    pushNavState('exam', test.category === 'topic-wise' ? 'topic-wise' : 'tests', test.id);
  };

  const handleResumeActiveTest = () => {
    const session = getActiveSession();
    if (!session) return;

    const test = getTestById(session.testId);
    if (!test) return;

    setActiveTest(test);
    setCurrentQuestionIndex(session.currentQuestionIndex || 0);
    setRemainingSeconds(session.remainingSeconds || test.durationMinutes * 60);

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
    setIsPaletteOpen(true);

    pushNavState('exam', test.category === 'topic-wise' ? 'topic-wise' : 'tests', test.id);
  };

  const handleDiscardActiveTest = () => {
    clearActiveSession();
    setActiveSessionState(null);
  };

  const handleExitTest = () => {
    if (window.confirm('Pause test and return to Dashboard? Your progress is saved and you can resume anytime.')) {
      setActiveSessionState(getActiveSession());
      pushNavState('dashboard', activeTest?.category === 'topic-wise' ? 'topic-wise' : 'tests');
    }
  };

  const selectQuestion = (index: number) => {
    if (!activeTest) return;
    const currentQ = activeTest.questions[currentQuestionIndex];
    const targetQ = activeTest.questions[index];

    if (currentQ) {
      const curStatus = questionStatuses[currentQ.id];
      if (curStatus === 'not-visited') {
        setQuestionStatuses((prev) => ({ ...prev, [currentQ.id]: 'not-answered' }));
      }
    }

    setVisitedQuestions((prev) => new Set(prev).add(targetQ.id));
    if (!questionStatuses[targetQ.id] || questionStatuses[targetQ.id] === 'not-visited') {
      setQuestionStatuses((prev) => ({ ...prev, [targetQ.id]: 'not-answered' }));
    }

    setCurrentQuestionIndex(index);
  };

  const handleSaveAndNext = () => {
    if (!activeTest) return;
    const currentQ = activeTest.questions[currentQuestionIndex];
    const resp = userResponses[currentQ.id];
    const hasAnswer = resp !== null && resp !== undefined && String(resp).trim() !== '';

    const newStatus: QuestionStatus = hasAnswer ? 'answered' : 'not-answered';
    setQuestionStatuses((prev) => ({ ...prev, [currentQ.id]: newStatus }));

    if (currentQuestionIndex < activeTest.questions.length - 1) {
      selectQuestion(currentQuestionIndex + 1);
    }
  };

  const handleMarkForReviewAndNext = () => {
    if (!activeTest) return;
    const currentQ = activeTest.questions[currentQuestionIndex];
    const resp = userResponses[currentQ.id];
    const hasAnswer = resp !== null && resp !== undefined && String(resp).trim() !== '';

    const newStatus: QuestionStatus = hasAnswer ? 'marked-answered' : 'marked';
    setQuestionStatuses((prev) => ({ ...prev, [currentQ.id]: newStatus }));

    if (currentQuestionIndex < activeTest.questions.length - 1) {
      selectQuestion(currentQuestionIndex + 1);
    }
  };

  const handleClearResponse = () => {
    if (!activeTest) return;
    const currentQ = activeTest.questions[currentQuestionIndex];

    setUserResponses((prev) => {
      const next = { ...prev };
      delete next[currentQ.id];
      return next;
    });

    setQuestionStatuses((prev) => ({ ...prev, [currentQ.id]: 'not-answered' }));
  };

  const handleSubmitExam = () => {
    if (!activeTest) return;

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
    } = evaluateQuestionResponses(activeTest.questions, responsePayload);

    const totalTimeTaken = activeTest.durationMinutes * 60 - remainingSeconds;
    const estimatedPercentile = estimatePercentile(totalMarks, activeTest.section);

    const result: TestResult = {
      id: `res-${Date.now()}`,
      testId: activeTest.id,
      testTitle: activeTest.title,
      section: activeTest.section,
      category: activeTest.category,
      year: activeTest.year,
      timestamp: Date.now(),
      totalTimeSeconds: Math.max(1, totalTimeTaken),
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
    pushNavState('scorecard', activeTest.category === 'topic-wise' ? 'topic-wise' : 'tests', activeTest.id, result.id);
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
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Navbar: Visible when NOT in active exam */}
      {view !== 'exam' && (
        <Navbar
          currentTab={currentTab}
          onSelectTab={(tab) => {
            pushNavState('dashboard', tab);
          }}
          testsGivenCount={history.length}
          bookmarksCount={bookmarks.length}
          onToggleCalculator={() => setIsCalculatorOpen((prev) => !prev)}
        />
      )}

      {/* Main Body */}
      <main className="flex-1 flex flex-col bg-white">
        {/* EXAM VIEW (Real CAT TCS iON interface with maximized question area) */}
        {view === 'exam' && activeTest && (
          <div className="flex-1 flex flex-col h-screen overflow-hidden bg-white">
            <ExamHeader
              title={activeTest.title}
              section={activeTest.section}
              durationMinutes={activeTest.durationMinutes}
              remainingSeconds={remainingSeconds}
              candidateName={candidateName}
              isPaletteOpen={isPaletteOpen}
              onTogglePalette={() => setIsPaletteOpen((prev) => !prev)}
              onToggleCalculator={() => setIsCalculatorOpen((prev) => !prev)}
              onOpenQuestionPaper={() => setIsPaperModalOpen(true)}
              onSubmitClick={() => setIsSubmitModalOpen(true)}
              onExitTest={handleExitTest}
            />

            <div className="flex-1 flex flex-col lg:flex-row overflow-hidden bg-white">
              <QuestionView
                question={activeTest.questions[currentQuestionIndex]}
                selectedOption={userResponses[activeTest.questions[currentQuestionIndex].id] ?? null}
                onSelectOption={(val) => {
                  const qId = activeTest.questions[currentQuestionIndex].id;
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
                  if (currentQuestionIndex < activeTest.questions.length - 1) {
                    selectQuestion(currentQuestionIndex + 1);
                  }
                }}
                isFirst={currentQuestionIndex === 0}
                isLast={currentQuestionIndex === activeTest.questions.length - 1}
                isBookmarked={bookmarks.includes(activeTest.questions[currentQuestionIndex].id)}
                onToggleBookmark={() => {
                  const qId = activeTest.questions[currentQuestionIndex].id;
                  toggleBookmark(qId);
                  setBookmarks(getBookmarks());
                }}
              />

              {isPaletteOpen && (
                <QuestionPalette
                  questions={activeTest.questions}
                  currentQuestionIndex={currentQuestionIndex}
                  questionStatuses={questionStatuses}
                  onSelectQuestion={selectQuestion}
                  onSubmitClick={() => setIsSubmitModalOpen(true)}
                  onClose={() => setIsPaletteOpen(false)}
                />
              )}
            </div>
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
                    const tab = activeTest && activeTest.category === 'topic-wise' ? 'topic-wise' : 'tests';
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
                    const tab = activeTest && activeTest.category === 'topic-wise' ? 'topic-wise' : 'tests';
                    pushNavState('dashboard', tab);
                  }}
                />
              )}

              {/* DASHBOARD / TOPIC-WISE / TESTS GIVEN / BOOKMARKS TABS */}
              {view === 'dashboard' && (
                <>
                  {(currentTab === 'tests' || currentTab === 'topic-wise') && (
                    <Dashboard
                      tests={sectionalTests}
                      testHistory={history}
                      activeSession={activeSession}
                      activeCategory={currentTab === 'topic-wise' ? 'topic-wise' : 'sectional-pyq'}
                      onSelectCategory={(cat) => {
                        const tab = cat === 'topic-wise' ? 'topic-wise' : 'tests';
                        pushNavState('dashboard', tab);
                      }}
                      onResumeActiveTest={handleResumeActiveTest}
                      onDiscardActiveTest={handleDiscardActiveTest}
                      onStartTest={handleStartTest}
                      onReviewPastTest={handleReviewPastTest}
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
                      onBackToDashboard={() => pushNavState('dashboard', 'tests')}
                    />
                  )}
                </>
              )}
            </div>

            {/* Right Side Rail (Only rendered when real Google AdSense ID is configured) */}
            <AdBanner slot="side-rail-right" className="ml-4" />
          </div>
        )}
      </main>

      {/* CAT Virtual Calculator Widget */}
      <VirtualCalculator
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
      />

      {/* Confirmation Submit Modal */}
      {view === 'exam' && activeTest && (
        <SubmitModal
          isOpen={isSubmitModalOpen}
          onClose={() => setIsSubmitModalOpen(false)}
          onConfirmSubmit={handleSubmitExam}
          testTitle={activeTest.title}
          section={activeTest.section}
          questions={activeTest.questions}
          questionStatuses={questionStatuses}
        />
      )}

      {/* Full Question Paper Modal */}
      {view === 'exam' && activeTest && (
        <QuestionPaperModal
          isOpen={isPaperModalOpen}
          onClose={() => setIsPaperModalOpen(false)}
          questions={activeTest.questions}
          testTitle={activeTest.title}
        />
      )}
    </div>
  );
}

export default App;
