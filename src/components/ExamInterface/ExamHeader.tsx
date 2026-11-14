import React from 'react';
import { Timer, Calculator, FileText, User, PanelRight, Maximize2, LogOut, CheckCircle2, Lock } from 'lucide-react';
import { SectionBreakToggle } from './SectionBreakToggle';

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
  isFullMock?: boolean;
  currentSectionIndex?: number;
  completedSections?: Array<'VARC' | 'DILR' | 'QA'>;
  sectionBreakPromptEnabled?: boolean;
  onToggleBreakPrompt?: () => void;
  submitButtonLabel?: string;
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
  isFullMock = false,
  currentSectionIndex = 0,
  completedSections = [],
  sectionBreakPromptEnabled = true,
  onToggleBreakPrompt,
  submitButtonLabel,
}) => {
  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;
  const isTimeCritical = remainingSeconds <= 300; // <= 5 minutes

  const formatNumber = (num: number) => (num < 10 ? `0${num}` : `${num}`);

  const sections: Array<{ id: 'VARC' | 'DILR' | 'QA'; label: string; name: string }> = [
    { id: 'VARC', label: 'Sec 1: VARC', name: 'Verbal Ability & RC' },
    { id: 'DILR', label: 'Sec 2: DILR', name: 'Data Interpretation & LR' },
    { id: 'QA', label: 'Sec 3: QA', name: 'Quantitative Aptitude' },
  ];

  return (
    <header className="bg-white border-b border-slate-200 text-slate-900 shadow-xs sticky top-0 z-40">
      {/* Top Main Bar */}
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-3">
        {/* Left: Test Details */}
        <div className="flex items-center gap-2.5">
          <img
            src="/logo.svg"
            alt="CAT Mock Test CBT Logo"
            className="w-8 h-8 rounded-lg shadow-xs shrink-0 object-contain"
            width={32}
            height={32}
          />
          <div className="bg-blue-50 border border-blue-200 px-2 py-0.5 rounded text-xs font-bold text-blue-700 tracking-wider">
            {isFullMock ? 'FULL MOCK' : section}
          </div>
          <div>
            <h1 className="text-sm md:text-base font-bold text-slate-900 tracking-tight flex items-center gap-2">
              {title}
            </h1>
            <p className="text-[11px] text-slate-500 font-medium">
              {isFullMock ? '120 mins total (40m per section)' : `${durationMinutes} mins`}
            </p>
          </div>
        </div>

        {/* Center: Live Timer */}
        <div className="flex items-center gap-2">
          <div
            className={`flex items-center gap-2 px-3.5 py-1 rounded-lg border font-mono font-bold tracking-widest text-base md:text-lg transition-all ${
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
          {/* Section Break Toggle (Only visible for Full Mocks) */}
          {isFullMock && onToggleBreakPrompt && (
            <div className="mr-1">
              <SectionBreakToggle
                enabled={sectionBreakPromptEnabled}
                onToggle={onToggleBreakPrompt}
              />
            </div>
          )}

          {/* Toggle Palette to maximize question area */}
          <button
            onClick={onTogglePalette}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 border rounded-lg text-xs font-semibold transition shadow-2xs ${
              isPaletteOpen
                ? 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-800'
                : 'bg-blue-50 hover:bg-blue-100 border-blue-300 text-blue-800'
            }`}
            title={isPaletteOpen ? 'Hide Palette for 100% Screen Width' : 'Show Palette'}
          >
            {isPaletteOpen ? <Maximize2 className="w-3.5 h-3.5" /> : <PanelRight className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{isPaletteOpen ? 'Maximize' : 'Palette'}</span>
          </button>

          <button
            onClick={onToggleCalculator}
            className="flex items-center gap-1.5 px-2.5 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-300 text-slate-700 hover:text-slate-900 rounded-lg text-xs font-semibold transition shadow-2xs"
            title="Open On-Screen Virtual Calculator"
          >
            <Calculator className="w-3.5 h-3.5 text-blue-600" />
            <span className="hidden sm:inline">Calc</span>
          </button>

          <button
            onClick={onOpenQuestionPaper}
            className="flex items-center gap-1.5 px-2.5 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-300 text-slate-700 hover:text-slate-900 rounded-lg text-xs font-semibold transition shadow-2xs"
            title="View Complete Question Paper"
          >
            <FileText className="w-3.5 h-3.5 text-slate-600" />
            <span className="hidden md:inline">Paper</span>
          </button>

          <button
            onClick={onSubmitClick}
            className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white rounded-lg text-xs font-bold transition shadow-xs flex items-center gap-1.5"
          >
            {submitButtonLabel || 'Submit'}
          </button>

          {onExitTest && (
            <button
              onClick={onExitTest}
              className="flex items-center gap-1 px-2.5 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-300 text-slate-700 hover:text-slate-900 rounded-lg text-xs font-semibold transition shadow-2xs"
              title="Pause and return to tests dashboard"
            >
              <LogOut className="w-3.5 h-3.5 text-slate-500" />
              <span className="hidden md:inline">Pause</span>
            </button>
          )}

          {/* Candidate Profile Avatar */}
          <div className="hidden lg:flex items-center gap-2 pl-2 border-l border-slate-200">
            <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold text-white">
              <User className="w-4 h-4" />
            </div>
            <div className="text-left text-[11px]">
              <div className="font-semibold text-slate-800 leading-tight truncate max-w-[90px]">{candidateName}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-bar for Full Mock: 3-Section Progression Indicators */}
      {isFullMock && (
        <div className="bg-slate-50 border-t border-slate-200 px-4 py-1.5">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-xs">
              <span className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider hidden sm:inline">
                Sections:
              </span>
              <div className="flex items-center gap-1.5">
                {sections.map((sec, idx) => {
                  const isCompleted = completedSections.includes(sec.id);
                  const isActive = currentSectionIndex === idx;
                  const isLocked = !isCompleted && !isActive;

                  return (
                    <div
                      key={sec.id}
                      className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold transition ${
                        isActive
                          ? 'bg-blue-600 text-white shadow-xs'
                          : isCompleted
                          ? 'bg-emerald-50 text-emerald-800 border border-emerald-300'
                          : 'bg-white text-slate-400 border border-slate-200'
                      }`}
                    >
                      {isCompleted ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      ) : isLocked ? (
                        <Lock className="w-3 h-3 text-slate-400" />
                      ) : (
                        <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                      )}
                      <span>{sec.label}</span>
                      {isActive && <span className="text-[10px] bg-white/20 px-1 rounded ml-0.5">Active</span>}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="text-[11px] text-slate-500 font-medium hidden md:block">
              Section Time Left: <span className="font-mono font-bold text-slate-800">{formatNumber(minutes)}:{formatNumber(seconds)}</span> • Automatic section lockout on expiry
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
