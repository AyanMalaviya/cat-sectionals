import React from 'react';
import { Timer, Calculator, FileText, PanelRight, Maximize2, LogOut, CheckCircle2, Lock, Sun, Moon } from 'lucide-react';
import { SectionBreakToggle } from './SectionBreakToggle';

interface ExamHeaderProps {
  title: string;
  section: string;
  durationMinutes: number;
  remainingSeconds: number;
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
  theme?: 'light' | 'dark';
  onToggleTheme?: () => void;
}

export const ExamHeader: React.FC<ExamHeaderProps> = ({
  title,
  section,
  durationMinutes,
  remainingSeconds,
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
  theme = 'light',
  onToggleTheme,
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
    <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 shadow-xs sticky top-0 z-40 transition-colors">
      {/* Top Main Bar: Responsive 2-tier on mobile, single flex row on desktop */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3">
        {/* Row 1: Test Identity & Primary Clock + Submit */}
        <div className="flex items-center justify-between w-full sm:w-auto gap-2">
          {/* Test Name & Badge */}
          <div className="flex items-center gap-2 min-w-0">
            <img
              src="/logo.svg"
              alt="Logo"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg shadow-xs shrink-0 object-contain"
              width={32}
              height={32}
            />
            <div className="bg-blue-50 dark:bg-blue-950/70 border border-blue-200 dark:border-blue-800 px-2 py-0.5 rounded text-[11px] font-extrabold text-blue-700 dark:text-blue-300 tracking-wider shrink-0">
              {isFullMock ? 'FULL MOCK' : section}
            </div>
            <div className="min-w-0">
              <h1 className="text-xs sm:text-sm md:text-base font-bold text-slate-900 dark:text-slate-100 tracking-tight truncate max-w-[130px] sm:max-w-xs md:max-w-none">
                {title}
              </h1>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium hidden sm:block">
                {isFullMock ? '120m (40m per section)' : `${durationMinutes}m test`}
              </p>
            </div>
          </div>

          {/* Mobile Right: Clock & Submit */}
          <div className="flex items-center gap-1.5 sm:hidden shrink-0">
            {onToggleTheme && (
              <button
                onClick={onToggleTheme}
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                className="p-1 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-amber-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
              >
                {theme === 'dark' ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
              </button>
            )}

            <div
              className={`flex items-center gap-1 px-2 py-1 rounded-lg border font-mono font-bold text-xs tracking-wider transition-all ${
                isTimeCritical
                  ? 'bg-rose-50 dark:bg-rose-950/60 border-rose-300 dark:border-rose-800 text-rose-700 dark:text-rose-300 animate-pulse'
                  : 'bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100'
              }`}
            >
              <Timer className={`w-3.5 h-3.5 ${isTimeCritical ? 'text-rose-600 dark:text-rose-400' : 'text-blue-600 dark:text-blue-400'}`} />
              <span>
                {formatNumber(minutes)}:{formatNumber(seconds)}
              </span>
            </div>

            <button
              onClick={onSubmitClick}
              aria-label={submitButtonLabel || 'Submit Exam'}
              className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white rounded-lg text-xs font-bold transition shadow-xs"
            >
              Submit
            </button>
          </div>
        </div>

        {/* Center: Live Timer (Desktop Only) */}
        <div className="hidden sm:flex items-center gap-2 shrink-0">
          <div
            className={`flex items-center gap-2 px-3.5 py-1 rounded-lg border font-mono font-bold tracking-widest text-base md:text-lg transition-all ${
              isTimeCritical
                ? 'bg-rose-50 dark:bg-rose-950/60 border-rose-300 dark:border-rose-800 text-rose-700 dark:text-rose-300 animate-pulse shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100'
            }`}
          >
            <Timer className={`w-4 h-4 ${isTimeCritical ? 'text-rose-600 dark:text-rose-400' : 'text-blue-600 dark:text-blue-400'}`} />
            <span>
              {formatNumber(minutes)}:{formatNumber(seconds)}
            </span>
            {isTimeCritical && (
              <span className="text-[10px] uppercase font-sans tracking-normal bg-rose-600 text-white px-1.5 py-0.5 rounded ml-1 font-semibold">
                5m Left
              </span>
            )}
          </div>
        </div>

        {/* Tools Bar (Scrollable row on mobile, clean row on desktop) */}
        <div className="flex items-center justify-between sm:justify-end gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar w-full sm:w-auto -mx-1 px-1 sm:mx-0 sm:px-0">
          {/* Theme Toggle (Desktop) */}
          {onToggleTheme && (
            <button
              onClick={onToggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="hidden sm:flex items-center gap-1 px-2 sm:px-2.5 py-1 sm:py-1.5 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-amber-400 hover:text-slate-900 dark:hover:text-amber-300 rounded-lg text-xs font-semibold transition shrink-0"
            >
              {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-slate-600" />}
              <span className="text-[11px] sm:text-xs">{theme === 'dark' ? 'Light' : 'Dark'}</span>
            </button>
          )}

          {/* Section Break Toggle (Full Mocks) */}
          {isFullMock && onToggleBreakPrompt && (
            <div className="shrink-0 mr-0.5">
              <SectionBreakToggle
                enabled={sectionBreakPromptEnabled}
                onToggle={onToggleBreakPrompt}
                showLabel={false}
              />
            </div>
          )}

          {/* Toggle Palette */}
          <button
            onClick={onTogglePalette}
            aria-label={isPaletteOpen ? 'Maximize Question View (Hide Question Palette)' : 'Show Question Palette'}
            className={`flex items-center gap-1 px-2 sm:px-2.5 py-1 sm:py-1.5 border rounded-lg text-xs font-semibold transition shrink-0 ${
              isPaletteOpen
                ? 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200'
                : 'bg-blue-50 dark:bg-blue-950/70 hover:bg-blue-100 dark:hover:bg-blue-900 border-blue-300 dark:border-blue-800 text-blue-800 dark:text-blue-300'
            }`}
            title={isPaletteOpen ? 'Hide Palette for 100% Screen Width' : 'Show Palette'}
          >
            {isPaletteOpen ? <Maximize2 className="w-3.5 h-3.5" /> : <PanelRight className="w-3.5 h-3.5" />}
            <span className="text-[11px] sm:text-xs">{isPaletteOpen ? 'Max' : 'Palette'}</span>
          </button>

          {/* Calculator */}
          <button
            onClick={onToggleCalculator}
            aria-label="Open On-Screen Virtual Calculator"
            className="flex items-center gap-1 px-2 sm:px-2.5 py-1 sm:py-1.5 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white rounded-lg text-xs font-semibold transition shrink-0"
            title="Open On-Screen Virtual Calculator"
          >
            <Calculator className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span className="text-[11px] sm:text-xs">Calc</span>
          </button>

          {/* Question Paper */}
          <button
            onClick={onOpenQuestionPaper}
            aria-label="View Full Question Paper"
            className="flex items-center gap-1 px-2 sm:px-2.5 py-1 sm:py-1.5 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white rounded-lg text-xs font-semibold transition shrink-0"
            title="View Complete Question Paper"
          >
            <FileText className="w-3.5 h-3.5 text-slate-600 dark:text-slate-300" />
            <span className="text-[11px] sm:text-xs">Paper</span>
          </button>

          {/* Desktop Submit Button */}
          <button
            onClick={onSubmitClick}
            aria-label={submitButtonLabel || 'Submit Exam'}
            className="hidden sm:flex px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white rounded-lg text-xs font-bold transition shadow-xs items-center gap-1.5 shrink-0"
          >
            {submitButtonLabel || 'Submit'}
          </button>

          {/* Pause / Exit Test */}
          {onExitTest && (
            <button
              onClick={onExitTest}
              aria-label="Pause and return to tests dashboard"
              className="flex items-center gap-1 px-2 sm:px-2.5 py-1 sm:py-1.5 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white rounded-lg text-xs font-semibold transition shrink-0"
              title="Pause and return to tests dashboard"
            >
              <LogOut className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
              <span className="text-[11px] sm:text-xs">Pause</span>
            </button>
          )}
        </div>
      </div>

      {/* Sub-bar for Full Mock: 3-Section Progression Indicators */}
      {isFullMock && (
        <div className="bg-slate-50 dark:bg-slate-900/90 border-t border-slate-200 dark:border-slate-800 px-3 sm:px-4 py-1.5 overflow-x-auto no-scrollbar">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 min-w-max sm:min-w-0">
            <div className="flex items-center gap-1.5 sm:gap-2 text-xs">
              <span className="text-[10px] font-extrabold uppercase text-slate-400 dark:text-slate-500 tracking-wider hidden md:inline">
                Sections:
              </span>
              <div className="flex items-center gap-1 sm:gap-1.5">
                {sections.map((sec, idx) => {
                  const isCompleted = completedSections.includes(sec.id);
                  const isActive = currentSectionIndex === idx;
                  const isLocked = !isCompleted && !isActive;

                  return (
                    <div
                      key={sec.id}
                      className={`flex items-center gap-1 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg text-[11px] sm:text-xs font-bold transition shrink-0 ${
                        isActive
                          ? 'bg-blue-600 text-white shadow-xs'
                          : isCompleted
                          ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800'
                          : 'bg-white dark:bg-slate-800 text-slate-400 dark:text-slate-400 border border-slate-200 dark:border-slate-700'
                      }`}
                    >
                      {isCompleted ? (
                        <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600 dark:text-emerald-400" />
                      ) : isLocked ? (
                        <Lock className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-slate-400 dark:text-slate-500" />
                      ) : (
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white animate-pulse"></span>
                      )}
                      <span>
                        <span className="sm:hidden">{idx + 1}. {sec.id}</span>
                        <span className="hidden sm:inline">{sec.label}</span>
                      </span>
                      {isActive && (
                        <span className="text-[9px] bg-white/20 px-1 rounded ml-0.5 hidden xs:inline">
                          Active
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium hidden md:block">
              Section Time: <span className="font-mono font-bold text-slate-800 dark:text-slate-200">{formatNumber(minutes)}:{formatNumber(seconds)}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default ExamHeader;
