import React, { useState } from 'react';
import { SectionalTest, TestResult, ActiveSession } from '../types';
import { AdBanner } from './AdBanner';
import {
  Clock,
  Play,
  Layers,
  Award,
  CheckCircle2,
  Calendar,
  Zap,
  HelpCircle,
  FileQuestion,
  Mail,
  ArrowRight,
  Sparkles,
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
  const [showMissingReport, setShowMissingReport] = useState(false);

  const activeTestInfo = activeSession ? fullMocks.find((t) => t.id === activeSession.testId) : null;

  const filteredMocks = fullMocks.filter((t) => {
    if (selectedYear !== 'ALL' && !t.year.includes(selectedYear)) return false;
    return true;
  });

  const availableYears = ['ALL', 'CAT 2026', 'CAT 2023', 'CAT 2022', 'CAT 2021', 'CAT 2020'];

  const sectionNames = ['1. VARC (40m)', '2. DILR (40m)', '3. QA (40m)'];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 bg-white text-slate-900 animate-in fade-in duration-200">
      {/* Resume Banner for In-Progress Full Mock */}
      {activeSession && activeTestInfo && (
        <div className="mb-6 p-5 bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-400 rounded-3xl shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-amber-400 text-amber-950 flex items-center justify-center shrink-0 shadow-xs">
              <Clock className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-extrabold uppercase tracking-wider bg-amber-200 text-amber-950 px-2 py-0.5 rounded-full">
                  In-Progress Full Mock
                </span>
                <span className="text-xs text-amber-900 font-mono font-bold">
                  Section {((activeSession.currentSectionIndex || 0) + 1)} of 3 •{' '}
                  {Math.floor(activeSession.remainingSeconds / 60)}:
                  {activeSession.remainingSeconds % 60 < 10
                    ? `0${activeSession.remainingSeconds % 60}`
                    : activeSession.remainingSeconds % 60}{' '}
                  mins left in section
                </span>
              </div>
              <h3 className="text-base font-extrabold text-slate-900 mt-0.5">
                {activeTestInfo.title}
              </h3>
              <p className="text-xs text-slate-600">
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
              className="px-4 py-2.5 bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 text-xs font-semibold rounded-xl transition"
            >
              Discard
            </button>
          </div>
        </div>
      )}

      {/* Hero Banner: Full Mock Tests */}
      <div className="mb-8 p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950 text-white rounded-3xl shadow-lg relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-blue-500/30 text-blue-200 border border-blue-400/30 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider">
              ⏱️ 120-Minute Official Full Mock Tests
            </span>
            <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-3 py-1 rounded-full text-[11px] font-bold">
              3 Timed Sections (VARC → DILR → QA)
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight">
            Official Full Mock Tests CBT (120 Mins • 66 Questions)
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
            Practice complete 3-section full mock tests created by assembling authentic official PYQ papers. Each test follows the strict CAT sequence: Section 1 VARC (40m, 24 Qs) → Section 2 DILR (40m, 20 Qs) → Section 3 QA (40m, 22 Qs). Includes built-in virtual calculator, score percentiles, and optional transition breaks between sections.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-2 text-[11px]">
              <span className="bg-white/10 px-3 py-1.5 rounded-xl font-semibold border border-white/15">
                ⏳ 120 Minutes (3 × 40m)
              </span>
              <span className="bg-white/10 px-3 py-1.5 rounded-xl font-semibold border border-white/15">
                📝 66 Questions (198 Marks)
              </span>
              <span className="bg-white/10 px-3 py-1.5 rounded-xl font-semibold border border-white/15">
                ☕ Section Transition Breaks
              </span>
              <span className="bg-white/10 px-3 py-1.5 rounded-xl font-semibold border border-white/15">
                🧮 Draggable Virtual Calculator
              </span>
              <span className="bg-white/10 px-3 py-1.5 rounded-xl font-semibold border border-white/15">
                ₹0 100% Free
              </span>
            </div>

            <button
              onClick={() => setShowMissingReport((prev) => !prev)}
              className="text-xs font-bold text-blue-300 hover:text-white flex items-center gap-1.5 underline decoration-blue-400 underline-offset-4"
            >
              <FileQuestion className="w-3.5 h-3.5" />
              <span>{showMissingReport ? 'Hide Missing Slots Report' : 'Missing Slot Papers? Click Here'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Missing Slot Papers Wanted Notice / Contribution Panel */}
      {showMissingReport && (
        <div className="mb-8 p-5 bg-amber-50 border border-amber-300 rounded-3xl text-slate-800 text-xs leading-relaxed animate-in fade-in duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-amber-200 mb-3">
            <div className="flex items-center gap-2 font-bold text-amber-950 text-sm">
              <HelpCircle className="w-4 h-4 text-amber-600" />
              <span>Official CAT Slot Papers Status &amp; Missing Sections Inventory</span>
            </div>
            <span className="text-[10px] bg-amber-200 text-amber-900 font-extrabold px-2 py-0.5 rounded-full">
              Community Sourcing
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <h4 className="font-bold text-emerald-800 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Available &amp; Ready Full Mocks (Assembled):
              </h4>
              <ul className="list-disc pl-5 text-slate-700 space-y-0.5">
                <li><strong>CAT 2026:</strong> National All-India Specimen Mock (VARC + DILR + QA)</li>
                <li><strong>CAT 2023:</strong> Official All-India Full Mock (Slot 2 VARC + Slot 1 DILR + Slot 1 QA)</li>
                <li><strong>CAT 2022:</strong> Official All-India Full Mock (Slot 2 VARC + Slot 3 DILR + Slot 2 QA)</li>
                <li><strong>CAT 2021:</strong> Slot 1 Official Full Mock (Slot 1 VARC + Slot 1 DILR + Slot 1 QA)</li>
                <li><strong>CAT 2020:</strong> Slot 1 Official Full Mock (Slot 1 VARC + Slot 1 DILR + Slot 1 QA)</li>
              </ul>
            </div>

            <div className="space-y-1.5">
              <h4 className="font-bold text-rose-800 flex items-center gap-1">
                <span>🔍</span> Missing Slot Sections We Are Hunting:
              </h4>
              <ul className="list-disc pl-5 text-slate-700 space-y-0.5">
                <li><strong>CAT 2024:</strong> Slot 1 VARC text (Passages &amp; VA), Slot 2 (All 3), Slot 3 (All 3)</li>
                <li><strong>CAT 2023:</strong> Slot 1 VARC, Slot 2 DILR, Slot 3 VARC &amp; DILR</li>
                <li><strong>CAT 2022:</strong> Slot 1 VARC &amp; DILR, Slot 2 DILR, Slot 3 VARC</li>
                <li><strong>CAT 2021:</strong> Slot 2 VARC &amp; DILR, Slot 3 (All 3)</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-amber-900">
            <span>
              Have the official question paper PDF or response key for any missing slot? Email us or let us know and we will integrate it immediately!
            </span>
            <a
              href="mailto:ayanmalaviya111@gmail.com?subject=CAT%20Missing%20Slot%20Question%20Paper"
              className="px-3.5 py-1.5 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl transition flex items-center gap-1.5 shrink-0 shadow-2xs"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email Paper to Ayan</span>
            </a>
          </div>
        </div>
      )}

      {/* Year Filter Pills */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-1.5 flex-wrap">
          {availableYears.map((yr) => (
            <button
              key={yr}
              onClick={() => setSelectedYear(yr)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                selectedYear === yr
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-50'
              }`}
            >
              {yr === 'ALL' ? 'All Full Mocks' : yr}
            </button>
          ))}
        </div>

        <span className="text-xs font-semibold text-slate-500 hidden sm:block">
          {filteredMocks.length} Full Mock Tests Ready
        </span>
      </div>

      {/* Full Mock Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredMocks.map((test) => {
          const pastAttempts = testHistory.filter((h) => h.testId === test.id);
          const bestAttempt = pastAttempts.length > 0
            ? [...pastAttempts].sort((a, b) => b.totalMarks - a.totalMarks)[0]
            : null;
          const isInProgress = activeSession && activeSession.testId === test.id;

          return (
            <div
              key={test.id}
              className={`border rounded-3xl p-6 transition flex flex-col justify-between relative overflow-hidden bg-white shadow-xs hover:shadow-md ${
                isInProgress ? 'border-amber-400 ring-2 ring-amber-400/40' : 'border-slate-200'
              }`}
            >
              <div>
                {/* Top Badge Row */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-blue-100 text-blue-700 border border-blue-200">
                      {test.year}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
                      120 Mins • 3 Sections
                    </span>
                  </div>

                  {isInProgress ? (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-100 text-amber-800 border border-amber-300 flex items-center gap-1 animate-pulse">
                      <Clock className="w-3 h-3" />
                      In-Progress
                    </span>
                  ) : pastAttempts.length > 0 ? (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      {pastAttempts.length} {pastAttempts.length === 1 ? 'Attempt' : 'Attempts'}
                    </span>
                  ) : (
                    <span className="text-[11px] font-semibold text-slate-400">
                      Unattempted
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-snug mb-2">
                  {test.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-4">
                  {test.description}
                </p>

                {/* 3 Sections Flow Indicator */}
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-2xl mb-4 space-y-1.5">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">
                    Strict Sectional Sequence (40 Mins Each):
                  </span>
                  <div className="grid grid-cols-3 gap-1.5 text-center text-xs font-bold">
                    <div className="py-1.5 px-1 bg-white border border-slate-200 rounded-xl text-slate-800">
                      <span className="block text-[10px] text-blue-600">SEC 1</span>
                      VARC (24Q)
                    </div>
                    <div className="py-1.5 px-1 bg-white border border-slate-200 rounded-xl text-slate-800">
                      <span className="block text-[10px] text-blue-600">SEC 2</span>
                      DILR (20Q)
                    </div>
                    <div className="py-1.5 px-1 bg-white border border-slate-200 rounded-xl text-slate-800">
                      <span className="block text-[10px] text-blue-600">SEC 3</span>
                      QA (22Q)
                    </div>
                  </div>
                </div>

                {/* Past Attempt High Score */}
                {bestAttempt && (
                  <div className="mb-4 p-3 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center justify-between text-xs">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block">
                        Best Attempt Score
                      </span>
                      <span className="font-extrabold text-emerald-900 text-sm">
                        {bestAttempt.totalMarks} / {test.totalMarks} Marks
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block">
                        Est. Percentile
                      </span>
                      <span className="font-extrabold text-emerald-700 text-sm">
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
                    className="py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl transition"
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
