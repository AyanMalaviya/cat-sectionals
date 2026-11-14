import React, { useState, useEffect } from 'react';
import { SectionalTest, TestResult, SectionType, ActiveSession, TestCategory } from '../types';
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

  // Automatically reset topic tag or year when switching category
  useEffect(() => {
    setSelectedTopicTag('ALL');
    setSelectedYear('ALL');
  }, [activeCategory]);

  // Filter tests by Category (Sectional vs Topic-Wise), Section (QA, VARC, DILR), and Topic/Year
  const filteredTests = tests.filter((t) => {
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
        .filter((t) => t.category === 'topic-wise' && (selectedSection === 'ALL' || t.section === selectedSection))
        .map((t) => t.topicTag)
        .filter(Boolean)
    )
  ) as string[];

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 py-5 sm:py-6 bg-white text-slate-900 animate-in fade-in duration-200">
      {/* Resume Unfinished Test Banner */}
      {activeSession && activeTestInfo && (
        <div className="mb-6 p-4 bg-amber-50 border border-amber-300 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
              <Clock className="w-4 h-4 text-amber-700" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider bg-amber-200 text-amber-900 px-2 py-0.5 rounded">
                  In-Progress Test
                </span>
                <span className="text-xs text-amber-900 font-mono font-bold">
                  {Math.floor(activeSession.remainingSeconds / 60)}:
                  {activeSession.remainingSeconds % 60 < 10
                    ? `0${activeSession.remainingSeconds % 60}`
                    : activeSession.remainingSeconds % 60}{' '}
                  remaining
                </span>
              </div>
              <h4 className="text-sm font-bold text-slate-900 mt-0.5">
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
              className="px-3 py-2 bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 text-xs rounded-xl transition"
            >
              Discard
            </button>
          </div>
        </div>
      )}

      {/* SEO Hero Banner: Free Mock Tests for Competitive Exams */}
      <div className="mb-8 p-5 sm:p-8 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white rounded-2xl sm:rounded-3xl shadow-lg relative overflow-hidden">
        <div className="absolute -right-12 -top-12 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-blue-500/30 text-blue-200 border border-blue-400/30 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider">
              ✨ 100% Free Mock Tests • Zero Paywalls
            </span>
            <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-3 py-1 rounded-full text-[11px] font-bold">
              CAT 2026 Ready
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight">
            Free Mock Tests CBT for Competitive Exams
          </h1>

          <p className="text-xs sm:text-sm text-blue-100 max-w-3xl leading-relaxed">
            Practice 62+ authentic free mock tests with official 40-minute CBT countdowns, full TCS iON simulation, and on-screen virtual calculator. Master Quantitative Aptitude, DILR, and VARC with 866+ questions from CAT 2020 through CAT 2026 specimen mocks. Zero paywalls, zero signups, 100% free forever.
          </p>

          <div className="pt-2 flex flex-wrap gap-2 text-[11px]">
            <span className="bg-white/10 backdrop-blur-xs px-3 py-1.5 rounded-xl font-semibold border border-white/15">
              📊 62+ Free Mock Tests
            </span>
            <span className="bg-white/10 backdrop-blur-xs px-3 py-1.5 rounded-xl font-semibold border border-white/15">
              🎯 866+ Questions
            </span>
            <span className="bg-white/10 backdrop-blur-xs px-3 py-1.5 rounded-xl font-semibold border border-white/15">
              ⚡ Official +3 / -1 Marking
            </span>
            <span className="bg-white/10 backdrop-blur-xs px-3 py-1.5 rounded-xl font-semibold border border-white/15">
              🧮 Built-in Virtual Calculator
            </span>
            <span className="bg-white/10 backdrop-blur-xs px-3 py-1.5 rounded-xl font-semibold border border-white/15">
              ₹0 No Coaching Fees
            </span>
          </div>
        </div>
      </div>

      {/* Top Header & Mode Toggle */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-5 border-b border-slate-200">
        <div>
          <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
            {activeCategory === 'sectional-pyq'
              ? 'Free CAT Mock Tests CBT — 40-Min Sectionals'
              : 'Free Topic-Wise Mock Quizzes — Practice Sets'}
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            {activeCategory === 'sectional-pyq'
              ? `Authentic Free Sectional Mock Tests (QA, DILR, VARC) from 2020 to 2026 • ${filteredTests.length} free tests ready`
              : `Targeted Free Mock Practice Sets with official PYQs and specimen mocks • ${filteredTests.length} free quizzes ready`}
          </p>
        </div>

        {/* Mode Toggle: Sectionals vs Topic-Wise - Full width grid on mobile */}
        <div className="w-full sm:w-auto grid grid-cols-2 sm:flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200">
          <button
            onClick={() => {
              onSelectCategory('sectional-pyq');
              setSelectedTopicTag('ALL');
            }}
            className={`flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-xs font-bold transition ${
              activeCategory === 'sectional-pyq'
                ? 'bg-white text-blue-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">40-Min Sectionals</span>
          </button>

          <button
            onClick={() => {
              onSelectCategory('topic-wise');
              setSelectedYear('ALL');
            }}
            className={`flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-xs font-bold transition ${
              activeCategory === 'topic-wise'
                ? 'bg-white text-blue-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Layers className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">Topic Quizzes</span>
          </button>
        </div>
      </div>

      {/* Filter Bar: Section Pills & Year/Topic Filter (Swipeable on Mobile) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        {/* Section Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar whitespace-nowrap pb-1 max-w-full">
          {(['ALL', 'QA', 'VARC', 'DILR'] as const).map((sec) => {
            const isSelected = selectedSection === sec;
            const labels: Record<string, string> = {
              ALL: 'All Sections',
              QA: 'Quantitative Aptitude',
              VARC: 'VARC',
              DILR: 'DILR',
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
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white border border-slate-300 text-slate-700 hover:text-slate-900 hover:bg-slate-50'
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
            <span className="text-xs text-slate-500 font-medium mr-1 shrink-0">Year:</span>
            {['ALL', '2026', '2025', '2024', '2023', '2022', '2021', '2020'].map((yr) => (
              <button
                key={yr}
                onClick={() => setSelectedYear(yr)}
                className={`shrink-0 px-2.5 py-1 rounded-md text-xs font-semibold transition ${
                  selectedYear === yr
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
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
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
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
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* 100% Free / Anti-Paywall Trust Banner */}
      <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-blue-50 border border-emerald-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-black text-sm shrink-0 shadow-xs">
            62+
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-extrabold text-xs text-emerald-950 uppercase tracking-wide">
                100% Free CAT Mock Tests &amp; Practice
              </span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-200/60 text-emerald-800 border border-emerald-300">
                Zero Paywalls • No Sign-up
              </span>
            </div>
            <p className="text-xs text-slate-600 mt-0.5 leading-snug">
              Unlike coaching institutes that give 1 free mock then demand ₹10,000+, all 62 full sectionals &amp; topic quizzes are permanently free.
            </p>
          </div>
        </div>
      </div>

      {/* Tests Grid */}
      {filteredTests.length === 0 ? (
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-12 text-center text-slate-500">
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
      <section className="mt-12 pt-6 border-t border-slate-200" aria-label="About CBTMocks Mission">
        <div className="bg-gradient-to-r from-blue-50/70 via-indigo-50/40 to-slate-50 border border-blue-200/60 rounded-3xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xs">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-black shrink-0 shadow-xs">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-extrabold uppercase tracking-wider bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                  100% Free Forever
                </span>
                <span className="text-xs text-slate-500 font-semibold">
                  Zero Paywalls • No Mobile Spam
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-extrabold text-slate-900 mt-0.5">
                Why is CBTMocks 100% Free for Every Aspirant?
              </h3>
              <p className="text-xs text-slate-600 max-w-xl">
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
