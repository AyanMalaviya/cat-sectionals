import React, { useState, useEffect } from 'react';
import { SectionalTest, TestResult, SectionType, ActiveSession, TestCategory } from '../types';
import { TestCard } from './TestCard';
import { AdBanner } from './AdBanner';
import {
  Clock,
  Play,
  BookOpen,
  Layers,
  CheckCircle2,
  Award,
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
    <div className="max-w-7xl mx-auto px-4 py-6 bg-white text-slate-900 animate-in fade-in duration-200">
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

      {/* Top Header & Mode Toggle */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-5 border-b border-slate-200">
        <div>
          <h1 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
            {activeCategory === 'sectional-pyq'
              ? 'CAT Mock Test CBT — 40-Min Sectional Tests'
              : 'CAT Practice Portal — Topic-Wise Sectional Quizzes'}
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            {activeCategory === 'sectional-pyq'
              ? `Authentic CAT Sectional Mock Tests (QA, DILR, VARC) from 2020 to 2026 • ${filteredTests.length} tests available`
              : `Targeted CAT Practice sets with official PYQs and specimen mocks • ${filteredTests.length} tests available`}
          </p>
        </div>

        {/* Mode Toggle: Sectionals vs Topic-Wise */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200 self-start md:self-auto">
          <button
            onClick={() => {
              onSelectCategory('sectional-pyq');
              setSelectedTopicTag('ALL');
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition ${
              activeCategory === 'sectional-pyq'
                ? 'bg-white text-blue-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>40-Min Sectionals</span>
          </button>

          <button
            onClick={() => {
              onSelectCategory('topic-wise');
              setSelectedYear('ALL');
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition ${
              activeCategory === 'topic-wise'
                ? 'bg-white text-blue-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Topic-Wise Quizzes</span>
          </button>
        </div>
      </div>

      {/* Filter Bar: Section Pills & Year/Topic Filter */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        {/* Section Tabs */}
        <div className="flex items-center gap-2 flex-wrap">
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
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${
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
          <div className="flex items-center gap-1.5 self-start sm:self-auto flex-wrap">
            <span className="text-xs text-slate-500 font-medium mr-1">Year:</span>
            {['ALL', '2026', '2025', '2024', '2023', '2022', '2021', '2020'].map((yr) => (
              <button
                key={yr}
                onClick={() => setSelectedYear(yr)}
                className={`px-2.5 py-1 rounded-md text-xs font-semibold transition ${
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
          <div className="flex items-center gap-1.5 flex-wrap self-start sm:self-auto">
            <button
              onClick={() => setSelectedTopicTag('ALL')}
              className={`px-2.5 py-1 rounded-md text-xs font-semibold transition ${
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
                className={`px-2.5 py-1 rounded-md text-xs font-semibold transition ${
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

      {/* SEO Section: CAT Mock Test CBT & Practice Guide */}
      <section className="mt-16 pt-10 border-t border-slate-200" aria-label="CAT Mock Test CBT Guide">
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">
              <Award className="w-4 h-4" />
            </span>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              CAT Mock Test CBT &amp; Sectional Practice Guide
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <div className="space-y-2">
              <h3 className="font-bold text-slate-800 flex items-center gap-1.5 text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Real CAT CBT Exam Simulation
              </h3>
              <p>
                Experience the authentic TCS iON Computer Based Test (CBT) environment with a 40-minute strict sectional countdown, question palette status indicators (Answered, Not Answered, Marked for Review), and official marking scheme (+3 marks for correct answers, -1 for wrong MCQs, and 0 penalty for TITA questions).
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-slate-800 flex items-center gap-1.5 text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Full 40-Min Sectional Mock Tests
              </h3>
              <p>
                Master sectional time allocation across Quantitative Aptitude (QA, 22 questions), Data Interpretation &amp; Logical Reasoning (DILR, 20 questions), and Verbal Ability &amp; Reading Comprehension (VARC, 24 questions) using authentic past year papers from CAT 2020 through CAT 2026 specimen mocks.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-slate-800 flex items-center gap-1.5 text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Targeted CAT Practice &amp; Analytics
              </h3>
              <p>
                Strengthen core concepts with focused topic-wise practice quizzes across Arithmetic, Algebra, Geometry, Numbers, RC Passages, Tournaments, and Matrix arrangements. Review detailed solution rationales, accuracy, and question-by-question time tracking after every attempt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Ad Unit (Only rendered when real Google AdSense ID is configured) */}
      <AdBanner slot="bottom-leaderboard" className="mt-8" />
    </div>
  );
};
