import React from 'react';
import { BookOpen, History, Bookmark, Calculator, Layers, Heart, Clock, Compass } from 'lucide-react';

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
    <nav className="bg-white border-b border-slate-200 text-slate-800 sticky top-0 z-30 shadow-xs">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2 sm:py-3 flex flex-col md:flex-row md:items-center justify-between gap-2.5 sm:gap-4">
        {/* Top Mobile Bar / Desktop Left */}
        <div className="flex items-center justify-between w-full md:w-auto">
          {/* Brand Logo */}
          <div
            role="button"
            tabIndex={0}
            aria-label="CBTMocks Home - Free Mock Tests"
            onClick={() => onSelectTab('tests')}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onSelectTab('tests')}
            className="flex items-center gap-2.5 cursor-pointer group outline-none select-none"
          >
            <img
              src="/logo.svg"
              alt="CBTMocks Logo"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl shadow-md shadow-blue-700/20 group-hover:scale-105 transition object-contain shrink-0"
              width={40}
              height={40}
            />
            <div>
              <div className="font-extrabold text-base md:text-lg tracking-tight text-slate-900 flex items-center gap-1.5 leading-none">
                <span>CAT CBT Mocks</span>
                <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded bg-blue-100 text-blue-700 border border-blue-200 tracking-wider">
                  2026
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium mt-0.5">
                Free Sectionals &amp; Full Mocks
              </p>
            </div>
          </div>

          {/* Right Tools (Mobile Top-Right) */}
          <div className="flex items-center gap-1.5 sm:gap-2 md:hidden">
            <button
              onClick={onToggleCalculator}
              aria-label="Launch On-Screen Virtual Calculator"
              className="flex items-center gap-1 px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 rounded-lg text-xs font-semibold transition shadow-xs"
              title="Launch CAT Virtual Calculator"
            >
              <Calculator className="w-3.5 h-3.5 text-blue-600" />
              <span className="text-[11px]">Calc</span>
            </button>

            {onOpenSupport && (
              <button
                onClick={onOpenSupport}
                aria-label="Support 100% Free CAT Mocks via UPI"
                className="flex items-center gap-1 px-2.5 py-1.5 bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-700 rounded-lg text-xs font-bold transition shadow-2xs group"
                title="Support 100% Free CAT Mocks"
              >
                <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500 group-hover:scale-110 transition-transform" />
                <span className="text-[11px]">Support</span>
              </button>
            )}
          </div>
        </div>

        {/* Navigation Tabs - Horizontally scrollable on mobile with smooth touch swipe */}
        <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto no-scrollbar scroll-smooth w-full md:w-auto -mx-3 px-3 sm:mx-0 sm:px-0 pb-0.5 md:pb-0">
          <button
            onClick={() => onSelectTab('full-mocks')}
            aria-label="Official Full Mock Tests (120 minutes)"
            className={`px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 shrink-0 whitespace-nowrap ${
              currentTab === 'full-mocks'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 bg-slate-50/60 md:bg-transparent'
            }`}
          >
            <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="sr-only">Full Mock Tests</span>
            <span aria-hidden="true">Full Mocks (120m)</span>
            <span className="text-[9px] sm:text-[10px] font-extrabold px-1.5 py-0.2 rounded bg-amber-400 text-amber-950 font-bold">
              NEW
            </span>
          </button>

          <button
            onClick={() => onSelectTab('tests')}
            aria-label="Sectional Mock Tests (40 minutes)"
            className={`px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 sm:gap-2 shrink-0 whitespace-nowrap ${
              currentTab === 'tests'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 bg-slate-50/60 md:bg-transparent'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="sr-only">Sectional Mock Tests</span>
            <span aria-hidden="true">Sectionals (40m)</span>
          </button>

          <button
            onClick={() => onSelectTab('topic-wise')}
            aria-label="Topic-Wise Practice Quizzes"
            className={`px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 sm:gap-2 shrink-0 whitespace-nowrap ${
              currentTab === 'topic-wise'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 bg-slate-50/60 md:bg-transparent'
            }`}
          >
            <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="sr-only">Topic-Wise Quizzes</span>
            <span aria-hidden="true">Topic-Wise</span>
          </button>

          <button
            onClick={() => onSelectTab('history')}
            aria-label={`Tests Given History${testsGivenCount > 0 ? ` (${testsGivenCount} tests)` : ''}`}
            className={`px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 sm:gap-2 shrink-0 whitespace-nowrap relative ${
              currentTab === 'history'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 bg-slate-50/60 md:bg-transparent'
            }`}
          >
            <History className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="sr-only">Tests Given History</span>
            <span aria-hidden="true">Tests Given</span>
            {testsGivenCount > 0 && (
              <span className="px-1.5 py-0.2 bg-emerald-600 text-white font-bold rounded-full text-[9px] sm:text-[10px]">
                {testsGivenCount}
              </span>
            )}
          </button>

          <button
            onClick={() => onSelectTab('bookmarks')}
            aria-label={`Bookmarked Questions${bookmarksCount > 0 ? ` (${bookmarksCount} saved)` : ''}`}
            className={`px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 sm:gap-2 shrink-0 whitespace-nowrap ${
              currentTab === 'bookmarks'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 bg-slate-50/60 md:bg-transparent'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="sr-only">Bookmarked Questions</span>
            <span aria-hidden="true">Bookmarks</span>
            {bookmarksCount > 0 && (
              <span className="px-1.5 py-0.2 bg-amber-500 text-white font-bold rounded-full text-[9px] sm:text-[10px]">
                {bookmarksCount}
              </span>
            )}
          </button>

          <button
            onClick={() => onSelectTab('about')}
            aria-label="About CBTMocks & Anti-Paywall Mission"
            className={`px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 shrink-0 whitespace-nowrap ${
              currentTab === 'about'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 bg-slate-50/60 md:bg-transparent'
            }`}
            title="Our Mission & CBT Strategy Guide"
          >
            <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="sr-only">About CBTMocks and Anti-Paywall Mission</span>
            <span aria-hidden="true">Mission</span>
          </button>
        </div>

        {/* Right Tools (Desktop Only) */}
        <div className="hidden md:flex items-center gap-2.5">
          <button
            onClick={onToggleCalculator}
            aria-label="Launch On-Screen Virtual Calculator"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 rounded-lg text-xs font-semibold transition shadow-xs"
            title="Launch CAT Virtual Calculator"
          >
            <Calculator className="w-3.5 h-3.5 text-blue-600" />
            <span>Virtual Calc</span>
          </button>

          {onOpenSupport && (
            <button
              onClick={onOpenSupport}
              aria-label="Support 100% Free CAT Mocks via UPI"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-700 rounded-lg text-xs font-bold transition shadow-2xs group"
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
