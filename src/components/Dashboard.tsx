import React, { useState, useEffect } from 'react';
import { SectionalTest, TestResult, SectionType, ActiveSession, TestCategory, ExamType } from '../types';
import { TestCard } from './TestCard';
import { AdBanner } from './AdBanner';
import {
  Clock,
  Play,
  BookOpen,
  Layers,
  ArrowRight,
  Compass,
} from 'lucide-react';

interface DashboardProps {
  tests: SectionalTest[];
  testHistory: TestResult[];
  activeSession: ActiveSession | null;
  activeCategory: TestCategory;
  activeExam?: ExamType;
  onSelectCategory: (category: TestCategory) => void;
  onResumeActiveTest: () => void;
  onDiscardActiveTest: () => void;
  onStartTest: (test: SectionalTest) => void;
  onReviewPastTest: (result: TestResult) => void;
  onOpenAbout?: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  tests,
  testHistory,
  activeSession,
  activeCategory,
  activeExam = 'CAT',
  onSelectCategory,
  onResumeActiveTest,
  onDiscardActiveTest,
  onStartTest,
  onReviewPastTest,
  onOpenAbout,
}) => {
  const [selectedSection, setSelectedSection] = useState<'ALL' | SectionType>('ALL');
  const [selectedTopicTag, setSelectedTopicTag] = useState<string>('ALL');
  const [selectedYear, setSelectedYear] = useState<string>('ALL');

  // Automatically reset section, topic tag, or year when switching category or exam
  useEffect(() => {
    setSelectedSection('ALL');
    setSelectedTopicTag('ALL');
    setSelectedYear('ALL');
  }, [activeCategory, activeExam]);

  // Determine sections list based on active exam
  const examSections: Array<'ALL' | SectionType> = activeExam === 'XAT'
    ? ['ALL', 'DM', 'VALR', 'QA-DI']
    : activeExam === 'SNAP'
    ? ['ALL', 'GE', 'LR', 'QA-DS']
    : ['ALL', 'QA', 'VARC', 'DILR'];

  // Filter tests by Exam, Category (Sectional vs Topic-Wise), Section, and Topic/Year
  const filteredTests = tests.filter((t) => {
    if ((t.examType || 'CAT') !== activeExam) return false;
    if (t.category !== activeCategory) return false;
    if (selectedSection !== 'ALL' && t.section !== selectedSection) return false;

    if (activeCategory === 'topic-wise') {
      if (selectedTopicTag !== 'ALL' && t.topicTag !== selectedTopicTag) return false;
    }

    if (activeCategory === 'sectional-pyq') {
      if (selectedYear !== 'ALL' && !t.year.includes(selectedYear)) return false;
    }

    return true;
  });

  const activeTestInfo = activeSession ? tests.find((t) => t.id === activeSession.testId) : null;

  // Available topic tags for topic-wise view
  const topicTags = Array.from(
    new Set(
      tests
        .filter((t) => (t.examType || 'CAT') === activeExam && t.category === 'topic-wise' && (selectedSection === 'ALL' || t.section === selectedSection))
        .map((t) => t.topicTag)
        .filter(Boolean)
    )
  ) as string[];

  // Dynamic available years
  const availableYears = Array.from(
    new Set(
      tests
        .filter((t) => (t.examType || 'CAT') === activeExam && t.category === 'sectional-pyq')
        .map((t) => {
          const match = t.year.match(/\d{4}/);
          return match ? match[0] : null;
        })
        .filter(Boolean)
    )
  ) as string[];
  availableYears.sort((a, b) => Number(b) - Number(a));

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 py-5 sm:py-6 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 animate-in fade-in duration-200 transition-colors">
      {/* Resume Unfinished Test Banner */}
      {activeSession && activeTestInfo && (
        <div className="mb-6 p-4 bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-200 flex items-center justify-center shrink-0">
              <Clock className="w-4 h-4 text-amber-700 dark:text-amber-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider bg-amber-200 dark:bg-amber-900 text-amber-900 dark:text-amber-200 px-2 py-0.5 rounded">
                  In-Progress Test
                </span>
                <span className="text-xs text-amber-900 dark:text-amber-300 font-mono font-bold">
                  {Math.floor(activeSession.remainingSeconds / 60)}:
                  {activeSession.remainingSeconds % 60 < 10
                    ? `0${activeSession.remainingSeconds % 60}`
                    : activeSession.remainingSeconds % 60}{' '}
                  remaining
                </span>
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 mt-0.5">
                {activeTestInfo.title}
              </h4>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onResumeActiveTest}
              className="flex-1 sm:flex-none px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl transition flex items-center justify-center gap-1.5 shadow-xs"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Resume</span>
            </button>
            <button
              onClick={onDiscardActiveTest}
              className="px-3 py-2 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs rounded-xl transition"
            >
              Discard
            </button>
          </div>
        </div>
      )}

      {/* Clean Compact Header: Mode Toggle & Page Summary */}
      <div className="mb-6 pb-5 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider border ${
                activeExam === 'XAT'
                  ? 'bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800'
                  : activeExam === 'SNAP'
                  ? 'bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800'
                  : 'bg-blue-100 dark:bg-blue-950/70 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800'
              }`}>
                {activeExam} • {activeCategory === 'sectional-pyq' ? 'Sectionals' : 'Topic Quizzes'}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                100% Free CBT Practice
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
              {activeExam} {activeCategory === 'sectional-pyq' ? 'Sectional Mock Tests' : 'Topic-Wise Practice Quizzes'}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl leading-relaxed">
              {activeExam === 'XAT'
                ? (activeCategory === 'sectional-pyq'
                    ? 'Timed authentic XAT sectional tests (Decision Making, VALR, QA-DI) from XAT 2023 to 2026 with official XLRI caselets, 5 options (A-E), and +1 / -0.25 scoring.'
                    : 'Targeted XAT practice caselets focusing on corporate ethics, HR dilemmas, business strategy, and critical reasoning.')
                : activeExam === 'SNAP'
                ? (activeCategory === 'sectional-pyq'
                    ? 'Fast-paced 15-25 minute SNAP speed sectionals (General English, Analytical & Logical Reasoning, QA & Data Sufficiency) with +1 / -0.25 scoring.'
                    : 'Targeted SNAP quizzes across vocabulary, series, direction sense, and speed arithmetic.')
                : (activeCategory === 'sectional-pyq'
                    ? 'Timed 40-minute authentic sectional tests (QA, DILR, VARC) from CAT 2020 to 2026 with official CBT countdown, built-in calculator, and +3 / -1 marking.'
                    : 'Targeted topic-wise practice quizzes with step-by-step explanations to master concepts across Quantitative Aptitude, DILR sets, and Reading Comprehension.')}
            </p>
          </div>

          {/* Mode Toggle: Sectionals vs Topic-Wise */}
          <div className="w-full sm:w-auto grid grid-cols-2 sm:flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shrink-0">
            <button
              onClick={() => {
                onSelectCategory('sectional-pyq');
                setSelectedTopicTag('ALL');
              }}
              className={`flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2 rounded-lg text-xs font-bold transition ${
                activeCategory === 'sectional-pyq'
                  ? 'bg-white dark:bg-slate-800 text-blue-700 dark:text-blue-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">Sectionals</span>
            </button>

            <button
              onClick={() => {
                onSelectCategory('topic-wise');
                setSelectedYear('ALL');
              }}
              className={`flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2 rounded-lg text-xs font-bold transition ${
                activeCategory === 'topic-wise'
                  ? 'bg-white dark:bg-slate-800 text-blue-700 dark:text-blue-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <Layers className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">Topic Quizzes</span>
            </button>
          </div>
        </div>
      </div>

      {/* Filter Bar: Section Pills & Year/Topic Filter (Swipeable on Mobile) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        {/* Section Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar whitespace-nowrap pb-1 max-w-full">
          {examSections.map((sec) => {
            const isSelected = selectedSection === sec;
            const labels: Record<string, string> = {
              ALL: 'All Sections',
              QA: 'QA (Quant)',
              VARC: 'VARC',
              DILR: 'DILR',
              DM: 'Decision Making (DM)',
              VALR: 'Verbal & LR (VALR)',
              'QA-DI': 'QA-DI (Quant & DI)',
              GE: 'General English',
              LR: 'Analytical Reasoning',
              'QA-DS': 'QA, DI & DS',
            };

            return (
              <button
                key={sec}
                onClick={() => {
                  setSelectedSection(sec);
                  setSelectedTopicTag('ALL');
                }}
                className={`shrink-0 px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${
                  isSelected
                    ? 'bg-slate-900 dark:bg-blue-600 text-white shadow-xs'
                    : 'bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {labels[sec] || sec}
              </button>
            );
          })}
        </div>

        {/* Sub-Filters: Year (for Sectionals) or Topic Tags (for Topic-Wise) */}
        {activeCategory === 'sectional-pyq' && (
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar whitespace-nowrap pb-1 max-w-full">
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium mr-1 shrink-0">Year:</span>
            {['ALL', ...availableYears].map((yr) => (
              <button
                key={yr}
                onClick={() => setSelectedYear(yr)}
                className={`shrink-0 px-2.5 py-1 rounded-md text-xs font-semibold transition ${
                  selectedYear === yr
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
                }`}
              >
                {yr}
              </button>
            ))}
          </div>
        )}

        {activeCategory === 'topic-wise' && topicTags.length > 0 && (
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar whitespace-nowrap pb-1 max-w-full">
            <button
              onClick={() => setSelectedTopicTag('ALL')}
              className={`shrink-0 px-2.5 py-1 rounded-md text-xs font-semibold transition ${
                selectedTopicTag === 'ALL'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
              }`}
            >
              All Topics
            </button>
            {topicTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTopicTag(tag)}
                className={`shrink-0 px-2.5 py-1 rounded-md text-xs font-semibold transition ${
                  selectedTopicTag === tag
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Tests Grid */}
      {filteredTests.length === 0 ? (
        <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-12 text-center text-slate-500 dark:text-slate-400">
          <p className="text-sm font-medium">No tests found for the selected filters.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredTests.map((test) => {
            const testAttempts = testHistory.filter((h) => h.testId === test.id);
            return (
              <TestCard
                key={test.id}
                test={test}
                pastAttempts={testAttempts}
                onStartTest={onStartTest}
                onReviewPastTest={onReviewPastTest}
              />
            );
          })}
        </div>
      )}

      {/* Clean, Non-Intimidating Mission & Strategy Link */}
      <section className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-800" aria-label="About CBTMocks Mission">
        <div className="bg-gradient-to-r from-blue-50/70 via-indigo-50/40 to-slate-50 dark:from-slate-900 dark:via-blue-950/30 dark:to-slate-900 border border-blue-200/60 dark:border-slate-800 rounded-3xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xs">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-black shrink-0 shadow-xs">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-extrabold uppercase tracking-wider bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 px-2 py-0.5 rounded-full">
                  100% Free Forever
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
                  Zero Paywalls • No Mobile Spam
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-slate-100 mt-0.5">
                Why is CBTMocks 100% Free for Every Aspirant?
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 max-w-xl">
                Read our mission to break predatory ₹10,000 coaching paywalls, the full coaching comparison matrix, and our CBT exam strategy guide.
              </p>
            </div>
          </div>

          {onOpenAbout && (
            <button
              onClick={onOpenAbout}
              className="w-full sm:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl transition flex items-center justify-center gap-2 shrink-0 shadow-xs"
            >
              <span>Read Mission &amp; Guide</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </section>

      {/* Bottom Ad Unit (Only rendered when real Google AdSense ID is configured) */}
      <AdBanner slot="bottom-leaderboard" className="mt-8" />
    </div>
  );
};
