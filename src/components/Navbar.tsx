import React from 'react';
import { BookOpen, History, Bookmark, Calculator, Layers, Heart, Clock, Info, Sun, Moon } from 'lucide-react';
import { ExamType } from '../types';

interface NavbarProps {
  currentTab: 'full-mocks' | 'tests' | 'topic-wise' | 'history' | 'bookmarks' | 'about';
  onSelectTab: (tab: 'full-mocks' | 'tests' | 'topic-wise' | 'history' | 'bookmarks' | 'about') => void;
  activeExam: ExamType;
  onSelectExam: (exam: ExamType) => void;
  testsGivenCount: number;
  bookmarksCount: number;
  onToggleCalculator: () => void;
  onOpenSupport?: () => void;
  theme?: 'light' | 'dark';
  onToggleTheme?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  activeExam = 'CAT',
  onSelectExam,
  testsGivenCount,
  bookmarksCount,
  onToggleCalculator,
  onOpenSupport,
  theme = 'light',
  onToggleTheme,
}) => {
  const isDark = theme === 'dark';

  return (
    <nav className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 sticky top-0 z-30 shadow-2xs transition-colors duration-150">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2 sm:py-2.5 flex flex-col xl:flex-row xl:items-center justify-between gap-2 xl:gap-6">
        {/* Top Header Row (Mobile/Tablet) & Left Branding (Desktop) */}
        <div className="flex items-center justify-between w-full xl:w-auto shrink-0 gap-2">
          {/* Brand Logo & Exam Switcher */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div
              role="button"
              tabIndex={0}
              aria-label="CBTMocks Home - Free Mock Tests"
              onClick={() => onSelectTab('tests')}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onSelectTab('tests')}
              className="flex items-center gap-2 cursor-pointer group outline-none select-none shrink-0"
            >
              <img
                src="/logo.svg"
                alt="CBTMocks Logo"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl shadow-xs group-hover:scale-105 transition object-contain shrink-0"
                width={36}
                height={36}
              />
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white leading-none">
                  CBTMocks
                </span>
              </div>
            </div>

            {/* Exam Selector Pills (CAT | XAT | SNAP) */}
            <div className="inline-flex items-center p-0.5 sm:p-1 bg-slate-100 dark:bg-slate-950/90 border border-slate-200 dark:border-slate-800 rounded-xl shrink-0">
              <button
                onClick={() => onSelectExam('CAT')}
                aria-label="Switch to CAT 2026 Mock Tests"
                className={`px-2.5 sm:px-3 py-1 rounded-lg text-xs font-black transition ${
                  activeExam === 'CAT'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
                title="Common Admission Test (IIMs)"
              >
                CAT
              </button>
              <button
                onClick={() => onSelectExam('XAT')}
                aria-label="Switch to XAT 2026 Mock Tests"
                className={`px-2.5 sm:px-3 py-1 rounded-lg text-xs font-black transition ${
                  activeExam === 'XAT'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
                title="Xavier Aptitude Test (XLRI Jamshedpur & Delhi)"
              >
                XAT
              </button>
              <button
                onClick={() => onSelectExam('SNAP')}
                aria-label="Switch to SNAP 2026 Mock Tests"
                className={`px-2.5 sm:px-3 py-1 rounded-lg text-xs font-black transition ${
                  activeExam === 'SNAP'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
                title="Symbiosis National Aptitude Test (SIBM, SCMHRD)"
              >
                SNAP
              </button>
            </div>
          </div>

          {/* Quick Tools (Mobile & Tablet Top-Right) */}
          <div className="flex items-center gap-1.5 xl:hidden shrink-0">
            {onToggleTheme && (
              <button
                onClick={onToggleTheme}
                aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                className="p-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-xl transition shadow-2xs"
                title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {isDark ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-600" />
                )}
              </button>
            )}

            <button
              onClick={onToggleCalculator}
              aria-label="Launch On-Screen Virtual Calculator"
              className="flex items-center gap-1 px-2.5 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 rounded-xl text-xs font-semibold transition shadow-2xs"
              title="Launch On-Screen Virtual Calculator"
            >
              <Calculator className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span className="text-xs">Calc</span>
            </button>

            {onOpenSupport && (
              <button
                onClick={onOpenSupport}
                aria-label="Support 100% Free Mocks via UPI"
                className="flex items-center gap-1 px-2.5 py-1.5 bg-rose-50 dark:bg-rose-950/40 hover:bg-rose-100 dark:hover:bg-rose-900/50 border border-rose-200 dark:border-rose-800/60 text-rose-700 dark:text-rose-300 rounded-xl text-xs font-bold transition shadow-2xs group"
                title="Support 100% Free Mocks"
              >
                <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500 group-hover:scale-110 transition-transform" />
                <span className="text-xs">Support</span>
              </button>
            )}
          </div>
        </div>

        {/* Clean, Segmented Navigation Tabs */}
        <div className="w-full xl:w-auto overflow-x-auto no-scrollbar scroll-smooth -mx-1 px-1 sm:mx-0 sm:px-0">
          <div className="inline-flex items-center gap-1 p-1 bg-slate-100/90 dark:bg-slate-950/80 border border-slate-200/80 dark:border-slate-800 rounded-2xl whitespace-nowrap min-w-max">
            {/* 1. Full Mocks */}
            <button
              onClick={() => onSelectTab('full-mocks')}
              aria-label="Official Full Mock Tests"
              className={`px-3 py-1.5 rounded-xl text-xs transition inline-flex items-center gap-1.5 shrink-0 ${
                currentTab === 'full-mocks'
                  ? 'bg-white dark:bg-slate-800 text-blue-700 dark:text-blue-300 font-bold shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-white/60 dark:hover:bg-slate-800/60 font-medium'
              }`}
            >
              <Clock className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
              <span>Full Mocks</span>
            </button>

            {/* 2. Sectionals */}
            <button
              onClick={() => onSelectTab('tests')}
              aria-label="Sectional Mock Tests"
              className={`px-3 py-1.5 rounded-xl text-xs transition inline-flex items-center gap-1.5 shrink-0 ${
                currentTab === 'tests'
                  ? 'bg-white dark:bg-slate-800 text-blue-700 dark:text-blue-300 font-bold shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-white/60 dark:hover:bg-slate-800/60 font-medium'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
              <span>Sectionals</span>
            </button>

            {/* 3. Topics */}
            <button
              onClick={() => onSelectTab('topic-wise')}
              aria-label="Topic-Wise Practice Quizzes"
              className={`px-3 py-1.5 rounded-xl text-xs transition inline-flex items-center gap-1.5 shrink-0 ${
                currentTab === 'topic-wise'
                  ? 'bg-white dark:bg-slate-800 text-blue-700 dark:text-blue-300 font-bold shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-white/60 dark:hover:bg-slate-800/60 font-medium'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
              <span>Topics</span>
            </button>

            {/* Subtle Divider */}
            <div className="h-4 w-px bg-slate-300 dark:bg-slate-700 mx-0.5 shrink-0" />

            {/* 4. History */}
            <button
              onClick={() => onSelectTab('history')}
              aria-label={`Test History${testsGivenCount > 0 ? ` (${testsGivenCount} attempts)` : ''}`}
              className={`px-3 py-1.5 rounded-xl text-xs transition inline-flex items-center gap-1.5 shrink-0 ${
                currentTab === 'history'
                  ? 'bg-white dark:bg-slate-800 text-blue-700 dark:text-blue-300 font-bold shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-white/60 dark:hover:bg-slate-800/60 font-medium'
              }`}
            >
              <History className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400 shrink-0" />
              <span>History</span>
              {testsGivenCount > 0 && (
                <span className="px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-emerald-600 text-white">
                  {testsGivenCount}
                </span>
              )}
            </button>

            {/* 5. Bookmarks */}
            <button
              onClick={() => onSelectTab('bookmarks')}
              aria-label={`Bookmarked Questions${bookmarksCount > 0 ? ` (${bookmarksCount} saved)` : ''}`}
              className={`px-3 py-1.5 rounded-xl text-xs transition inline-flex items-center gap-1.5 shrink-0 ${
                currentTab === 'bookmarks'
                  ? 'bg-white dark:bg-slate-800 text-blue-700 dark:text-blue-300 font-bold shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-white/60 dark:hover:bg-slate-800/60 font-medium'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400 shrink-0" />
              <span>Bookmarks</span>
              {bookmarksCount > 0 && (
                <span className="px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-amber-500 text-white">
                  {bookmarksCount}
                </span>
              )}
            </button>

            {/* 6. About */}
            <button
              onClick={() => onSelectTab('about')}
              aria-label="About CBTMocks Platform"
              className={`px-3 py-1.5 rounded-xl text-xs transition inline-flex items-center gap-1.5 shrink-0 ${
                currentTab === 'about'
                  ? 'bg-white dark:bg-slate-800 text-blue-700 dark:text-blue-300 font-bold shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-white/60 dark:hover:bg-slate-800/60 font-medium'
              }`}
            >
              <Info className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400 shrink-0" />
              <span>About</span>
            </button>
          </div>
        </div>

        {/* Right Tools (Desktop Only) */}
        <div className="hidden xl:flex items-center gap-2 shrink-0">
          {onToggleTheme && (
            <button
              onClick={onToggleTheme}
              aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="p-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-xl transition shadow-xs"
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-600" />
              )}
            </button>
          )}

          <button
            onClick={onToggleCalculator}
            aria-label="Launch On-Screen Virtual Calculator"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 rounded-xl text-xs font-semibold transition shadow-xs"
            title="Launch CAT Virtual Calculator"
          >
            <Calculator className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Virtual Calc</span>
          </button>

          {onOpenSupport && (
            <button
              onClick={onOpenSupport}
              aria-label="Support 100% Free CAT Mocks via UPI"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-50 dark:bg-rose-950/40 hover:bg-rose-100 dark:hover:bg-rose-900/50 border border-rose-200 dark:border-rose-800/60 text-rose-700 dark:text-rose-300 rounded-xl text-xs font-bold transition shadow-2xs group"
              title="Support 100% Free CAT Mocks"
            >
              <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500 group-hover:scale-110 transition-transform" />
              <span>Support</span>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
