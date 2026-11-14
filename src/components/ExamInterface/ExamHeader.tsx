import React from 'react';
import { Timer, Calculator, FileText, User, PanelRight, Maximize2, LogOut } from 'lucide-react';

interface ExamHeaderProps {
  title: string;
  section: string;
  durationMinutes: number;
  remainingSeconds: number;
  candidateName: string;
  isPaletteOpen: boolean;
  onTogglePalette: () => void;
  onToggleCalculator: () => void;
  onOpenQuestionPaper: () => void;
  onSubmitClick: () => void;
  onExitTest?: () => void;
}

export const ExamHeader: React.FC<ExamHeaderProps> = ({
  title,
  section,
  durationMinutes,
  remainingSeconds,
  candidateName,
  isPaletteOpen,
  onTogglePalette,
  onToggleCalculator,
  onOpenQuestionPaper,
  onSubmitClick,
  onExitTest,
}) => {
  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;
  const isTimeCritical = remainingSeconds <= 300; // <= 5 minutes

  const formatNumber = (num: number) => (num < 10 ? `0${num}` : `${num}`);

  return (
    <header className="bg-white border-b border-slate-200 text-slate-900 shadow-xs sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex flex-wrap items-center justify-between gap-3">
        {/* Left: Test Details */}
        <div className="flex items-center gap-3">
          <div className="bg-blue-50 border border-blue-200 px-2.5 py-1 rounded text-xs font-bold text-blue-700 tracking-wider">
            {section}
          </div>
          <div>
            <h1 className="text-sm md:text-base font-bold text-slate-900 tracking-tight flex items-center gap-2">
              {title}
            </h1>
            <p className="text-[11px] text-slate-500 font-medium">{durationMinutes} mins</p>
          </div>
        </div>

        {/* Center: Live Timer */}
        <div className="flex items-center">
          <div
            className={`flex items-center gap-2 px-4 py-1.5 rounded-lg border font-mono font-bold tracking-widest text-lg transition-all ${
              isTimeCritical
                ? 'bg-rose-50 border-rose-300 text-rose-700 animate-pulse shadow-xs'
                : 'bg-slate-100 border-slate-300 text-slate-900'
            }`}
          >
            <Timer className={`w-4 h-4 ${isTimeCritical ? 'text-rose-600' : 'text-blue-600'}`} />
            <span>
              {formatNumber(minutes)}:{formatNumber(seconds)}
            </span>
            {isTimeCritical && (
              <span className="text-[10px] uppercase font-sans tracking-normal bg-rose-600 text-white px-1.5 py-0.5 rounded ml-1 font-semibold">
                Last 5m
              </span>
            )}
          </div>
        </div>

        {/* Right: Actions & Tools */}
        <div className="flex items-center gap-2">
          {/* Toggle Palette to maximize question area */}
          <button
            onClick={onTogglePalette}
            className={`flex items-center gap-1.5 px-3 py-1.5 border rounded-lg text-xs font-semibold transition shadow-2xs ${
              isPaletteOpen
                ? 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-800'
                : 'bg-blue-50 hover:bg-blue-100 border-blue-300 text-blue-800'
            }`}
            title={isPaletteOpen ? "Hide Palette for 100% Screen Width" : "Show Palette"}
          >
            {isPaletteOpen ? <Maximize2 className="w-3.5 h-3.5" /> : <PanelRight className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{isPaletteOpen ? 'Maximize View' : 'Show Palette'}</span>
          </button>

          <button
            onClick={onToggleCalculator}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-300 text-slate-700 hover:text-slate-900 rounded-lg text-xs font-semibold transition shadow-2xs"
            title="Open On-Screen Virtual Calculator"
          >
            <Calculator className="w-3.5 h-3.5 text-blue-600" />
            <span className="hidden sm:inline">Calculator</span>
          </button>

          <button
            onClick={onOpenQuestionPaper}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-300 text-slate-700 hover:text-slate-900 rounded-lg text-xs font-semibold transition shadow-2xs"
            title="View Complete Question Paper"
          >
            <FileText className="w-3.5 h-3.5 text-slate-600" />
            <span className="hidden md:inline">Paper</span>
          </button>

          <button
            onClick={onSubmitClick}
            className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white rounded-lg text-xs font-bold transition shadow-xs flex items-center gap-1.5"
          >
            Submit
          </button>

          {onExitTest && (
            <button
              onClick={onExitTest}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-300 text-slate-700 hover:text-slate-900 rounded-lg text-xs font-semibold transition shadow-2xs"
              title="Pause and return to tests dashboard"
            >
              <LogOut className="w-3.5 h-3.5 text-slate-500" />
              <span className="hidden md:inline">Exit</span>
            </button>
          )}

          {/* Candidate Profile Avatar */}
          <div className="hidden lg:flex items-center gap-2 pl-2 border-l border-slate-200">
            <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold text-white">
              <User className="w-4 h-4" />
            </div>
            <div className="text-left text-[11px]">
              <div className="font-semibold text-slate-800 leading-tight truncate max-w-[100px]">{candidateName}</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
