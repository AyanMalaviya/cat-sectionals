import React, { useState } from 'react';
import { Play, Pause, CheckCircle2, Clock, ArrowRight, Sparkles, Coffee } from 'lucide-react';

interface SectionTransitionModalProps {
  isOpen: boolean;
  completedSection: 'VARC' | 'DILR' | 'QA';
  completedSectionNumber: number; // 1 or 2
  nextSection: 'VARC' | 'DILR' | 'QA';
  nextSectionNumber: number; // 2 or 3
  attemptedCount: number;
  totalQuestions: number;
  timeSpentSeconds: number;
  onStartNextSection: () => void;
  onPauseAndExit: () => void;
  onDisableFuturePrompts: () => void;
}

export const SectionTransitionModal: React.FC<SectionTransitionModalProps> = ({
  isOpen,
  completedSection,
  completedSectionNumber,
  nextSection,
  nextSectionNumber,
  attemptedCount,
  totalQuestions,
  timeSpentSeconds,
  onStartNextSection,
  onPauseAndExit,
  onDisableFuturePrompts,
}) => {
  const [dontShowAgain, setDontShowAgain] = useState(false);

  if (!isOpen) return null;

  const sectionFullNames: Record<string, string> = {
    VARC: 'Verbal Ability & Reading Comprehension',
    DILR: 'Data Interpretation & Logical Reasoning',
    QA: 'Quantitative Aptitude',
  };

  const handleStartNow = () => {
    if (dontShowAgain) {
      onDisableFuturePrompts();
    }
    onStartNextSection();
  };

  const handlePause = () => {
    if (dontShowAgain) {
      onDisableFuturePrompts();
    }
    onPauseAndExit();
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}m ${s < 10 ? '0' : ''}${s}s`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white border border-slate-200 rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl text-slate-900 animate-in zoom-in-95 duration-200">
        {/* Top Header */}
        <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-900 p-6 text-white text-center relative overflow-hidden">
          <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md mx-auto flex items-center justify-center mb-3 shadow-inner">
            <CheckCircle2 className="w-6 h-6 text-emerald-300" />
          </div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest bg-emerald-500/30 text-emerald-200 px-2.5 py-1 rounded-full border border-emerald-400/30">
            Section {completedSectionNumber} Completed &amp; Saved
          </span>
          <h2 className="text-xl sm:text-2xl font-black mt-2 tracking-tight">
            {completedSection}: {sectionFullNames[completedSection] || completedSection}
          </h2>
          <p className="text-xs text-blue-100 mt-1 max-w-sm mx-auto">
            Your responses and sectional timer have been securely saved.
          </p>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">
          {/* Section 1 Performance Snapshot */}
          <div className="grid grid-cols-2 gap-3 bg-slate-50 border border-slate-200 rounded-2xl p-3.5 text-center">
            <div className="border-r border-slate-200 pr-2">
              <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                Attempted
              </span>
              <span className="text-base font-extrabold text-blue-600">
                {attemptedCount} <span className="text-xs text-slate-500 font-normal">/ {totalQuestions}</span>
              </span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                Time Taken
              </span>
              <span className="text-base font-extrabold text-slate-800">
                {formatTime(timeSpentSeconds)}
              </span>
            </div>
          </div>

          {/* Next Section Brief */}
          <div className="p-4 bg-amber-50/80 border border-amber-300/80 rounded-2xl space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
                <Coffee className="w-4 h-4 text-amber-700" />
                Up Next: Section {nextSectionNumber} of 3
              </span>
              <span className="text-xs font-mono font-bold bg-amber-200 text-amber-950 px-2 py-0.5 rounded">
                40 Mins Timer
              </span>
            </div>
            <h3 className="text-sm font-bold text-slate-900">
              {nextSection}: {sectionFullNames[nextSection] || nextSection}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              In real CAT exam mode, each section has a strict 40-minute countdown. You can start the next section now, or pause and take a breather!
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2.5 pt-1">
            <button
              onClick={handleStartNow}
              className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-xl transition shadow-md shadow-blue-900/20 flex items-center justify-center gap-2"
            >
              <span>Start Section {nextSectionNumber} ({nextSection}) Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={handlePause}
              className="w-full py-2.5 px-4 bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 font-semibold text-xs rounded-xl transition flex items-center justify-center gap-2"
            >
              <Pause className="w-3.5 h-3.5 text-slate-500" />
              <span>Take a Break (Pause &amp; Resume Later)</span>
            </button>
          </div>

          {/* "Don't show again" checkbox */}
          <div className="pt-3 border-t border-slate-200 flex items-start gap-2.5">
            <input
              type="checkbox"
              id="dontShowBreakPrompt"
              checked={dontShowAgain}
              onChange={(e) => setDontShowAgain(e.target.checked)}
              className="mt-0.5 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
            />
            <label htmlFor="dontShowBreakPrompt" className="text-xs text-slate-600 cursor-pointer select-none">
              <span className="font-semibold text-slate-800">Don't show this break prompt again</span>
              <span className="block text-[11px] text-slate-500">
                Subsequent sections will auto-advance immediately. You can re-enable this anytime using the glowing toggle at the top.
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
