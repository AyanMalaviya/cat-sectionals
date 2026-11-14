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
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
        {/* Brand Logo */}
        <div
          role="button"
          tabIndex={0}
          aria-label="CBTMocks Home - Free Mock Tests"
          onClick={() => onSelectTab('tests')}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onSelectTab('tests')}
          className="flex items-center gap-3 cursor-pointer group outline-none"
        >
          <img
            src="/logo.svg"
            alt="CBTMocks Logo"
            className="w-10 h-10 rounded-xl shadow-md shadow-blue-700/20 group-hover:scale-105 transition object-contain"
            width={40}
            height={40}
          />
          <div>
            <div className="font-extrabold text-base md:text-lg tracking-tight text-slate-900 flex items-center gap-1.5">
              <span>CAT CBT Mocks</span>
              <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded bg-blue-100 text-blue-700 border border-blue-200 tracking-wider">
                2026
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium hidden sm:block">
              Free Sectionals &amp; Practice
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-1 sm:gap-1.5">
          <button
            onClick={() => onSelectTab('full-mocks')}
            aria-label="Official Full Mock Tests (120 minutes)"
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 ${
              currentTab === 'full-mocks'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Clock className="w-4 h-4" />
            <span className="sr-only">Full Mock Tests</span>
            <span aria-hidden="true">Full Mocks (120m)</span>
            <span className="text-[10px] font-extrabold px-1.5 py-0.2 rounded bg-amber-400 text-amber-950 font-bold">
              NEW
            </span>
          </button>

          <button
            onClick={() => onSelectTab('tests')}
            aria-label="Sectional Mock Tests (40 minutes)"
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition flex items-center gap-2 ${
              currentTab === 'tests'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span className="sr-only">Sectional Mock Tests</span>
            <span aria-hidden="true">Sectional Tests (40m)</span>
          </button>

          <button
            onClick={() => onSelectTab('topic-wise')}
            aria-label="Topic-Wise Practice Quizzes"
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition flex items-center gap-2 ${
              currentTab === 'topic-wise'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span className="sr-only">Topic-Wise Quizzes</span>
            <span aria-hidden="true">Topic-Wise</span>
          </button>

          <button
            onClick={() => onSelectTab('history')}
            aria-label={`Tests Given History${testsGivenCount > 0 ? ` (${testsGivenCount} tests)` : ''}`}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition flex items-center gap-2 relative ${
              currentTab === 'history'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <History className="w-4 h-4" />
            <span className="sr-only">Tests Given History</span>
            <span aria-hidden="true">Tests Given</span>
            {testsGivenCount > 0 && (
              <span className="px-1.5 py-0.2 bg-emerald-600 text-white font-bold rounded-full text-[10px]">
                {testsGivenCount}
              </span>
            )}
          </button>

          <button
            onClick={() => onSelectTab('bookmarks')}
            aria-label={`Bookmarked Questions${bookmarksCount > 0 ? ` (${bookmarksCount} saved)` : ''}`}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition flex items-center gap-2 ${
              currentTab === 'bookmarks'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Bookmark className="w-4 h-4" />
            <span className="sr-only">Bookmarked Questions</span>
            <span className="hidden sm:inline" aria-hidden="true">Bookmarks</span>
            {bookmarksCount > 0 && (
              <span className="px-1.5 py-0.2 bg-amber-500 text-white font-bold rounded-full text-[10px]">
                {bookmarksCount}
              </span>
            )}
          </button>

          <button
            onClick={() => onSelectTab('about')}
            aria-label="About CBTMocks & Anti-Paywall Mission"
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 ${
              currentTab === 'about'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
            title="Our Mission & CBT Strategy Guide"
          >
            <Compass className="w-4 h-4" />
            <span className="sr-only">About CBTMocks and Anti-Paywall Mission</span>
            <span className="hidden md:inline" aria-hidden="true">About &amp; Mission</span>
            <span className="md:hidden" aria-hidden="true">Mission</span>
          </button>
        </div>

        {/* Right Tools */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleCalculator}
            aria-label="Launch On-Screen Virtual Calculator"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 rounded-lg text-xs font-semibold transition shadow-xs"
            title="Launch CAT Virtual Calculator"
          >
            <Calculator className="w-3.5 h-3.5 text-blue-600" />
            <span className="sr-only">Virtual Calculator</span>
            <span className="hidden md:inline" aria-hidden="true">Virtual Calc</span>
          </button>

          {/* Support Us Button */}
          {onOpenSupport && (
            <button
              onClick={onOpenSupport}
              aria-label="Support 100% Free CAT Mocks via UPI"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-700 rounded-lg text-xs font-bold transition shadow-2xs group"
              title="Support 100% Free CAT Mocks"
            >
              <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500 group-hover:scale-110 transition-transform" />
              <span className="sr-only">Support Us</span>
              <span className="hidden sm:inline" aria-hidden="true">Support</span>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};
