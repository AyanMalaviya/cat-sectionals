import React from 'react';
import { BookOpen, History, Bookmark, Calculator, Layers, Heart, Clock, Info } from 'lucide-react';

interface NavbarProps {
  currentTab: 'full-mocks' | 'tests' | 'topic-wise' | 'history' | 'bookmarks' | 'about';
  onSelectTab: (tab: 'full-mocks' | 'tests' | 'topic-wise' | 'history' | 'bookmarks' | 'about') => void;
  testsGivenCount: number;
  bookmarksCount: number;
  onToggleCalculator: () => void;
  onOpenSupport?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  testsGivenCount,
  bookmarksCount,
  onToggleCalculator,
  onOpenSupport,
}) => {
  return (
    <nav className="bg-white border-b border-slate-200 text-slate-800 sticky top-0 z-30 shadow-2xs">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2 sm:py-2.5 flex flex-col xl:flex-row xl:items-center justify-between gap-2 xl:gap-6">
        {/* Top Header Row (Mobile/Tablet) & Left Branding (Desktop) */}
        <div className="flex items-center justify-between w-full xl:w-auto shrink-0">
          {/* Brand Logo */}
          <div
            role="button"
            tabIndex={0}
            aria-label="CBTMocks Home - Free Mock Tests"
            onClick={() => onSelectTab('tests')}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onSelectTab('tests')}
            className="flex items-center gap-2.5 cursor-pointer group outline-none select-none shrink-0"
          >
            <img
              src="/logo.svg"
              alt="CBTMocks Logo"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl shadow-xs group-hover:scale-105 transition object-contain shrink-0"
              width={36}
              height={36}
            />
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 leading-none">
                CBTMocks
              </span>
              <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded-full bg-blue-100 text-blue-700 border border-blue-200 tracking-wide">
                2026
              </span>
            </div>
          </div>

          {/* Quick Tools (Mobile & Tablet Top-Right) */}
          <div className="flex items-center gap-1.5 xl:hidden shrink-0">
            <button
              onClick={onToggleCalculator}
              aria-label="Launch On-Screen Virtual Calculator"
              className="flex items-center gap-1 px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 rounded-xl text-xs font-semibold transition shadow-2xs"
              title="Launch CAT Virtual Calculator"
            >
              <Calculator className="w-3.5 h-3.5 text-blue-600" />
              <span className="text-xs">Calculator</span>
            </button>

            {onOpenSupport && (
              <button
                onClick={onOpenSupport}
                aria-label="Support 100% Free CAT Mocks via UPI"
                className="flex items-center gap-1 px-2.5 py-1.5 bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-700 rounded-xl text-xs font-bold transition shadow-2xs group"
                title="Support 100% Free CAT Mocks"
              >
                <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500 group-hover:scale-110 transition-transform" />
                <span className="text-xs">Support</span>
              </button>
            )}
          </div>
        </div>

        {/* Clean, Segmented Navigation Tabs */}
        <div className="w-full xl:w-auto overflow-x-auto no-scrollbar scroll-smooth -mx-1 px-1 sm:mx-0 sm:px-0">
          <div className="inline-flex items-center gap-1 p-1 bg-slate-100/90 border border-slate-200/80 rounded-2xl whitespace-nowrap min-w-max">
            {/* 1. Full Mocks */}
            <button
              onClick={() => onSelectTab('full-mocks')}
              aria-label="Official Full Mock Tests"
              className={`px-3 py-1.5 rounded-xl text-xs transition inline-flex items-center gap-1.5 shrink-0 ${
                currentTab === 'full-mocks'
                  ? 'bg-white text-blue-700 font-bold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60 font-medium'
              }`}
            >
              <Clock className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>Full Mocks</span>
            </button>

            {/* 2. Sectionals */}
            <button
              onClick={() => onSelectTab('tests')}
              aria-label="Sectional Mock Tests"
              className={`px-3 py-1.5 rounded-xl text-xs transition inline-flex items-center gap-1.5 shrink-0 ${
                currentTab === 'tests'
                  ? 'bg-white text-blue-700 font-bold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60 font-medium'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>Sectionals</span>
            </button>

            {/* 3. Topics */}
            <button
              onClick={() => onSelectTab('topic-wise')}
              aria-label="Topic-Wise Practice Quizzes"
              className={`px-3 py-1.5 rounded-xl text-xs transition inline-flex items-center gap-1.5 shrink-0 ${
                currentTab === 'topic-wise'
                  ? 'bg-white text-blue-700 font-bold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60 font-medium'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>Topics</span>
            </button>

            {/* Subtle Divider */}
            <div className="h-4 w-px bg-slate-300 mx-0.5 shrink-0" />

            {/* 4. History */}
            <button
              onClick={() => onSelectTab('history')}
              aria-label={`Test History${testsGivenCount > 0 ? ` (${testsGivenCount} attempts)` : ''}`}
              className={`px-3 py-1.5 rounded-xl text-xs transition inline-flex items-center gap-1.5 shrink-0 ${
                currentTab === 'history'
                  ? 'bg-white text-blue-700 font-bold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60 font-medium'
              }`}
            >
              <History className="w-3.5 h-3.5 text-slate-500 shrink-0" />
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
                  ? 'bg-white text-blue-700 font-bold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60 font-medium'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5 text-amber-500 shrink-0" />
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
                  ? 'bg-white text-blue-700 font-bold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60 font-medium'
              }`}
            >
              <Info className="w-3.5 h-3.5 text-slate-500 shrink-0" />
              <span>About</span>
            </button>
          </div>
        </div>

        {/* Right Tools (Desktop Only) */}
        <div className="hidden xl:flex items-center gap-2 shrink-0">
          <button
            onClick={onToggleCalculator}
            aria-label="Launch On-Screen Virtual Calculator"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 rounded-xl text-xs font-semibold transition shadow-xs"
            title="Launch CAT Virtual Calculator"
          >
            <Calculator className="w-3.5 h-3.5 text-blue-600" />
            <span>Virtual Calc</span>
          </button>

          {onOpenSupport && (
            <button
              onClick={onOpenSupport}
              aria-label="Support 100% Free CAT Mocks via UPI"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-700 rounded-xl text-xs font-bold transition shadow-2xs group"
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
