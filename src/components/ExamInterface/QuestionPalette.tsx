import React from 'react';
import { Question, QuestionStatus } from '../../types';
import { ChevronRight, X } from 'lucide-react';

interface QuestionPaletteProps {
  questions: Question[];
  currentQuestionIndex: number;
  questionStatuses: Record<string, QuestionStatus>;
  onSelectQuestion: (index: number) => void;
  onSubmitClick: () => void;
  onClose?: () => void;
}

export const QuestionPalette: React.FC<QuestionPaletteProps> = ({
  questions,
  currentQuestionIndex,
  questionStatuses,
  onSelectQuestion,
  onSubmitClick,
  onClose,
}) => {
  // Compute counts for the 5 official CAT states
  const counts = {
    answered: 0,
    notAnswered: 0,
    notVisited: 0,
    marked: 0,
    markedAnswered: 0,
  };

  questions.forEach((q) => {
    const status = questionStatuses[q.id] || 'not-visited';
    switch (status) {
      case 'answered':
        counts.answered++;
        break;
      case 'not-answered':
        counts.notAnswered++;
        break;
      case 'marked':
        counts.marked++;
        break;
      case 'marked-answered':
        counts.markedAnswered++;
        break;
      case 'not-visited':
      default:
        counts.notVisited++;
        break;
    }
  });

  const getStatusBadgeStyle = (status: QuestionStatus, isCurrent: boolean) => {
    const base = 'w-9 h-9 rounded-md font-bold text-xs flex items-center justify-center transition cursor-pointer select-none relative';
    const ring = isCurrent ? 'ring-2 ring-blue-600 dark:ring-blue-400 ring-offset-2 ring-offset-white dark:ring-offset-slate-900 font-black scale-105 z-10 shadow-sm' : '';

    switch (status) {
      case 'answered':
        return `${base} bg-emerald-600 hover:bg-emerald-700 text-white shadow-2xs ${ring}`;
      case 'not-answered':
        return `${base} bg-rose-600 hover:bg-rose-700 text-white shadow-2xs ${ring}`;
      case 'marked':
        return `${base} bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-2xs ${ring}`;
      case 'marked-answered':
        return `${base} bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-2xs ${ring}`;
      case 'not-visited':
      default:
        return `${base} bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 shadow-2xs ${ring}`;
    }
  };

  // Helper: On mobile (<1024px), selecting a question auto-closes the drawer
  const handleSelectQuestion = (idx: number) => {
    onSelectQuestion(idx);
    if (typeof window !== 'undefined' && window.innerWidth < 1024 && onClose) {
      onClose();
    }
  };

  return (
    <>
      {/* Mobile Backdrop Overlay (< lg) */}
      <div
        className="fixed inset-0 bg-slate-900/60 dark:bg-black/80 backdrop-blur-xs z-50 lg:hidden animate-in fade-in duration-150"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Palette Container: Slide-over drawer on mobile (< lg), static side column on desktop (lg:) */}
      <aside className="fixed inset-y-0 right-0 z-50 w-80 max-w-[85vw] bg-slate-50 dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 flex flex-col h-full shadow-2xl lg:shadow-none lg:static lg:w-72 lg:z-auto animate-in slide-in-from-right duration-200 transition-colors">
        {/* Legend Header */}
        <div className="p-3.5 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
              Question Palette
            </h3>
            {onClose && (
              <button
                onClick={onClose}
                aria-label="Close question palette"
                className="p-1 text-slate-400 dark:text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded text-xs flex items-center gap-0.5"
                title="Hide palette"
              >
                <span className="hidden sm:inline text-slate-500 dark:text-slate-400 font-semibold">Hide</span>
                <X className="w-4 h-4 sm:hidden" />
                <ChevronRight className="w-4 h-4 hidden sm:block" />
              </button>
            )}
          </div>

          {/* Legend grid */}
          <div className="grid grid-cols-2 gap-2 text-[11px]">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded bg-emerald-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                {counts.answered}
              </span>
              <span className="text-slate-700 dark:text-slate-300 font-medium">Answered</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded bg-rose-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                {counts.notAnswered}
              </span>
              <span className="text-slate-700 dark:text-slate-300 font-medium">Not Answered</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-[10px] font-bold flex items-center justify-center shrink-0">
                {counts.notVisited}
              </span>
              <span className="text-slate-500 dark:text-slate-400">Not Visited</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-purple-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                {counts.marked}
              </span>
              <span className="text-slate-700 dark:text-slate-300 font-medium">Marked</span>
            </div>

            <div className="col-span-2 flex items-center gap-2">
              <div className="relative w-5 h-5 rounded-full bg-purple-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                {counts.markedAnswered}
                <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-emerald-500 rounded-full border border-white dark:border-slate-900"></span>
              </div>
              <span className="text-slate-700 dark:text-slate-300 font-medium leading-tight text-[11px]">
                Ans &amp; Marked for Review <span className="text-[10px] text-emerald-700 dark:text-emerald-400 font-bold">(Evaluated)</span>
              </span>
            </div>
          </div>
        </div>

        {/* Grid of Question Numbers */}
        <div className="p-3.5 flex-1 bg-slate-50 dark:bg-slate-900 overflow-y-auto">
          <div className="text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-2">
            Tap Question to Navigate:
          </div>
          <div className="grid grid-cols-5 gap-2">
            {questions.map((q, idx) => {
              const status = questionStatuses[q.id] || 'not-visited';
              const isCurrent = idx === currentQuestionIndex;

              return (
                <button
                  key={q.id}
                  onClick={() => handleSelectQuestion(idx)}
                  className={getStatusBadgeStyle(status, isCurrent)}
                  title={`Question ${idx + 1}: ${status.replace('-', ' ')}`}
                  aria-label={`Jump to Question ${idx + 1}`}
                >
                  {idx + 1}
                  {status === 'marked-answered' && (
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full border border-white dark:border-slate-900"></span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Bottom Submit Action */}
        <div className="p-3.5 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 shrink-0">
          <button
            onClick={onSubmitClick}
            aria-label="Submit Test"
            className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white rounded-xl text-xs font-bold transition shadow-sm flex items-center justify-center gap-2"
          >
            Submit Test
          </button>
        </div>
      </aside>
    </>
  );
};

export default QuestionPalette;
