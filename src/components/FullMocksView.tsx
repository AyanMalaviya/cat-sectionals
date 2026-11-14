import React, { useState } from 'react';
import { SectionalTest, TestResult, ActiveSession } from '../types';
import { AdBanner } from './AdBanner';
import {
  Clock,
  Play,
  CheckCircle2,
} from 'lucide-react';

interface FullMocksViewProps {
  fullMocks: SectionalTest[];
  testHistory: TestResult[];
  activeSession: ActiveSession | null;
  onResumeActiveTest: () => void;
  onDiscardActiveTest: () => void;
  onStartTest: (test: SectionalTest) => void;
  onReviewPastTest: (result: TestResult) => void;
}

export const FullMocksView: React.FC<FullMocksViewProps> = ({
  fullMocks,
  testHistory,
  activeSession,
  onResumeActiveTest,
  onDiscardActiveTest,
  onStartTest,
  onReviewPastTest,
}) => {
  const [selectedYear, setSelectedYear] = useState<string>('ALL');

  const activeTestInfo = activeSession ? fullMocks.find((t) => t.id === activeSession.testId) : null;

  const filteredMocks = fullMocks.filter((t) => {
    if (selectedYear !== 'ALL' && !t.year.includes(selectedYear)) return false;
    return true;
  });

  const availableYears = ['ALL', 'CAT 2026', 'CAT 2023', 'CAT 2022', 'CAT 2021', 'CAT 2020'];

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 py-5 sm:py-6 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 animate-in fade-in duration-200 transition-colors">
      {/* Resume Banner for In-Progress Full Mock */}
      {activeSession && activeTestInfo && (
        <div className="mb-6 p-4 sm:p-5 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/40 dark:to-orange-950/30 border-2 border-amber-400 dark:border-amber-700 rounded-2xl sm:rounded-3xl shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-amber-400 text-amber-950 flex items-center justify-center shrink-0 shadow-xs">
              <Clock className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-extrabold uppercase tracking-wider bg-amber-200 dark:bg-amber-900 text-amber-950 dark:text-amber-200 px-2 py-0.5 rounded-full">
                  In-Progress Full Mock
                </span>
                <span className="text-xs text-amber-900 dark:text-amber-300 font-mono font-bold">
                  Section {((activeSession.currentSectionIndex || 0) + 1)} of 3 •{' '}
                  {Math.floor(activeSession.remainingSeconds / 60)}:
                  {activeSession.remainingSeconds % 60 < 10
                    ? `0${activeSession.remainingSeconds % 60}`
                    : activeSession.remainingSeconds % 60}{' '}
                  mins left in section
                </span>
              </div>
              <h3 className="text-base font-extrabold text-slate-900 dark:text-slate-100 mt-0.5">
                {activeTestInfo.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Your previous sections and answers are safely marked. Continue right from where you left off.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 w-full md:w-auto">
            <button
              onClick={onResumeActiveTest}
              className="flex-1 md:flex-none px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs rounded-xl transition flex items-center justify-center gap-1.5 shadow-md shadow-blue-900/20"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Resume Section {((activeSession.currentSectionIndex || 0) + 1)}</span>
            </button>
            <button
              onClick={onDiscardActiveTest}
              className="px-4 py-2.5 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold rounded-xl transition"
            >
              Discard
            </button>
          </div>
        </div>
      )}

      {/* Clean, Compact Header: Simple & Informative */}
      <div className="mb-6 pb-5 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                120 Mins • 3 Sections
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Official CAT CBT Format
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
              Full-Length Mock Tests
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl leading-relaxed">
              Timed 120-minute simulated CBT mock exams across VARC, DILR, and QA (66 questions, 198 marks) with built-in calculator, +3 / -1 marking, and sectional score percentiles.
            </p>
          </div>

          <div className="flex items-center gap-1.5 self-start sm:self-center text-[11px] text-slate-600 dark:text-slate-300 font-medium shrink-0">
            <span className="bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700">
              ⚡ Official +3 / -1 Marking
            </span>
            <span className="bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700">
              ☕ Optional Breaks
            </span>
          </div>
        </div>
      </div>

      {/* Year Filter Pills (Horizontally swipeable on mobile) */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar whitespace-nowrap pb-1 max-w-full">
          {availableYears.map((yr) => (
            <button
              key={yr}
              onClick={() => setSelectedYear(yr)}
              className={`shrink-0 px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                selectedYear === yr
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              {yr === 'ALL' ? 'All Full Mocks' : yr}
            </button>
          ))}
        </div>

        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 hidden sm:block shrink-0">
          {filteredMocks.length} Full Mock Tests Ready
        </span>
      </div>

      {/* Full Mock Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
        {filteredMocks.map((test) => {
          const pastAttempts = testHistory.filter((h) => h.testId === test.id);
          const bestAttempt = pastAttempts.length > 0
            ? [...pastAttempts].sort((a, b) => b.totalMarks - a.totalMarks)[0]
            : null;
          const isInProgress = activeSession && activeSession.testId === test.id;

          return (
            <div
              key={test.id}
              className={`border rounded-2xl sm:rounded-3xl p-4 sm:p-6 transition flex flex-col justify-between relative overflow-hidden bg-white dark:bg-slate-900 shadow-xs hover:shadow-md ${
                isInProgress ? 'border-amber-400 dark:border-amber-500 ring-2 ring-amber-400/40' : 'border-slate-200 dark:border-slate-800'
              }`}
            >
              <div>
                {/* Top Badge Row */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-blue-100 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                      {test.year}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      120 Mins • 3 Sections
                    </span>
                  </div>

                  {isInProgress ? (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800 flex items-center gap-1 animate-pulse">
                      <Clock className="w-3 h-3" />
                      In-Progress
                    </span>
                  ) : pastAttempts.length > 0 ? (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                      {pastAttempts.length} {pastAttempts.length === 1 ? 'Attempt' : 'Attempts'}
                    </span>
                  ) : (
                    <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500">
                      Unattempted
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-slate-100 tracking-tight leading-snug mb-2">
                  {test.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2 mb-4">
                  {test.description}
                </p>

                {/* 3 Sections Flow Indicator */}
                <div className="p-3 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 rounded-2xl mb-4 space-y-1.5">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                    Section Sequence (40 Mins Each):
                  </span>
                  <div className="grid grid-cols-3 gap-1.5 text-center text-xs font-bold">
                    <div className="py-1.5 px-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-slate-200">
                      <span className="block text-[10px] text-blue-600 dark:text-blue-400 font-bold">SEC 1</span>
                      VARC (24Q)
                    </div>
                    <div className="py-1.5 px-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-slate-200">
                      <span className="block text-[10px] text-blue-600 dark:text-blue-400 font-bold">SEC 2</span>
                      DILR (20Q)
                    </div>
                    <div className="py-1.5 px-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-slate-200">
                      <span className="block text-[10px] text-blue-600 dark:text-blue-400 font-bold">SEC 3</span>
                      QA (22Q)
                    </div>
                  </div>
                </div>

                {/* Past Attempt High Score */}
                {bestAttempt && (
                  <div className="mb-4 p-3 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 rounded-2xl flex items-center justify-between text-xs">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 block">
                        Best Attempt Score
                      </span>
                      <span className="font-extrabold text-emerald-900 dark:text-emerald-100 text-sm">
                        {bestAttempt.totalMarks} / {test.totalMarks} Marks
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 block">
                        Est. Percentile
                      </span>
                      <span className="font-extrabold text-emerald-700 dark:text-emerald-400 text-sm">
                        {bestAttempt.estimatedPercentile}%ile
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Actions */}
              <div className="pt-2 flex items-center gap-3">
                {isInProgress ? (
                  <button
                    onClick={onResumeActiveTest}
                    className="flex-1 py-2.5 px-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs rounded-xl transition flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Resume Full Mock</span>
                  </button>
                ) : (
                  <button
                    onClick={() => onStartTest(test)}
                    className="flex-1 py-2.5 px-4 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs rounded-xl transition flex items-center justify-center gap-1.5 shadow-md shadow-blue-900/20"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>{pastAttempts.length > 0 ? 'Retake Full Mock' : 'Start Full Mock (120m)'}</span>
                  </button>
                )}

                {pastAttempts.length > 0 && (
                  <button
                    onClick={() => onReviewPastTest(bestAttempt || pastAttempts[0])}
                    className="py-2.5 px-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs rounded-xl transition"
                  >
                    Review
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Ad Unit */}
      <AdBanner slot="bottom-leaderboard" className="mt-10" />
    </div>
  );
};
