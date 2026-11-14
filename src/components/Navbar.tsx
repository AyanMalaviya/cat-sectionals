import React, { useState } from 'react';
import { BookOpen, History, Bookmark, Calculator, User, Edit3, Check, Layers, Heart, Clock } from 'lucide-react';
import { getCandidateName, setCandidateName } from '../utils/storage';

interface NavbarProps {
  currentTab: 'full-mocks' | 'tests' | 'topic-wise' | 'history' | 'bookmarks';
  onSelectTab: (tab: 'full-mocks' | 'tests' | 'topic-wise' | 'history' | 'bookmarks') => void;
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
  const [candidate, setCandidate] = useState<string>(getCandidateName());
  const [isEditingName, setIsEditingName] = useState(false);
  const [nameInput, setNameInput] = useState(candidate);

  const handleSaveName = () => {
    const trimmed = nameInput.trim() || 'CAT Aspirant';
    setCandidateName(trimmed);
    setCandidate(trimmed);
    setIsEditingName(false);
  };

  return (
    <nav className="bg-white border-b border-slate-200 text-slate-800 sticky top-0 z-30 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
        {/* Brand Logo */}
        <div
          onClick={() => onSelectTab('tests')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <img
            src="/logo.svg"
            alt="CAT Mock Test CBT Logo"
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
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 ${
              currentTab === 'full-mocks'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Clock className="w-4 h-4" />
            <span>Full Mocks (120m)</span>
            <span className="text-[10px] font-extrabold px-1.5 py-0.2 rounded bg-amber-400 text-amber-950 font-bold">
              NEW
            </span>
          </button>

          <button
            onClick={() => onSelectTab('tests')}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition flex items-center gap-2 ${
              currentTab === 'tests'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Sectional Tests (40m)</span>
          </button>

          <button
            onClick={() => onSelectTab('topic-wise')}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition flex items-center gap-2 ${
              currentTab === 'topic-wise'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Topic-Wise</span>
          </button>

          <button
            onClick={() => onSelectTab('history')}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition flex items-center gap-2 relative ${
              currentTab === 'history'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <History className="w-4 h-4" />
            <span>Tests Given</span>
            {testsGivenCount > 0 && (
              <span className="px-1.5 py-0.2 bg-emerald-600 text-white font-bold rounded-full text-[10px]">
                {testsGivenCount}
              </span>
            )}
          </button>

          <button
            onClick={() => onSelectTab('bookmarks')}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition flex items-center gap-2 ${
              currentTab === 'bookmarks'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Bookmark className="w-4 h-4" />
            <span className="hidden sm:inline">Bookmarks</span>
            {bookmarksCount > 0 && (
              <span className="px-1.5 py-0.2 bg-amber-500 text-white font-bold rounded-full text-[10px]">
                {bookmarksCount}
              </span>
            )}
          </button>
        </div>

        {/* Right Tools & Candidate Profile */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleCalculator}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 rounded-lg text-xs font-semibold transition shadow-xs"
            title="Launch CAT Virtual Calculator"
          >
            <Calculator className="w-3.5 h-3.5 text-blue-600" />
            <span className="hidden md:inline">Virtual Calc</span>
          </button>

          {/* Support Us Button */}
          {onOpenSupport && (
            <button
              onClick={onOpenSupport}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-700 rounded-lg text-xs font-bold transition shadow-2xs group"
              title="Support 100% Free CAT Mocks"
            >
              <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline">Support</span>
            </button>
          )}

          {/* Candidate Profile Widget */}
          <div className="relative">
            {isEditingName ? (
              <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-slate-300 shadow-sm">
                <input
                  type="text"
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSaveName()}
                  className="bg-slate-50 text-xs px-2 py-1 rounded text-slate-900 outline-none w-28 border border-slate-200"
                  autoFocus
                />
                <button
                  onClick={handleSaveName}
                  className="p-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-xs"
                >
                  <Check className="w-3 h-3" />
                </button>
              </div>
            ) : (
              <div
                onClick={() => setIsEditingName(true)}
                className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-slate-100 cursor-pointer transition border border-transparent hover:border-slate-200"
                title="Click to edit candidate name"
              >
                <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold text-white shrink-0">
                  <User className="w-3.5 h-3.5" />
                </div>
                <div className="text-left hidden lg:block">
                  <div className="text-xs font-semibold text-slate-800 truncate max-w-[120px] flex items-center gap-1">
                    <span>{candidate}</span>
                    <Edit3 className="w-3 h-3 text-slate-400" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
