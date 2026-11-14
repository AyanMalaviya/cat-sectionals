import React from 'react';
import { Question, QuestionStatus } from '../../types';
import { ChevronRight } from 'lucide-react';

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
    const ring = isCurrent ? 'ring-2 ring-blue-600 ring-offset-2 ring-offset-white font-black scale-105 z-10 shadow-sm' : '';

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
        return `${base} bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 shadow-2xs ${ring}`;
    }
  };

  return (
    <aside className="w-full lg:w-72 bg-slate-50 border-l border-slate-200 flex flex-col h-full overflow-y-auto shrink-0">
      {/* Legend Header */}
      <div className="p-3.5 bg-white border-b border-slate-200">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
            Question Palette
          </h3>
          {onClose && (
            <button
              onClick={onClose}
              className="p-1 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded text-xs flex items-center gap-0.5"
              title="Hide palette to maximize question view"
            >
              <span>Hide</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Legend grid */}
        <div className="grid grid-cols-2 gap-2 text-[11px]">
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded bg-emerald-600 text-white text-[10px] font-bold flex items-center justify-center">
              {counts.answered}
            </span>
            <span className="text-slate-700 font-medium">Answered</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded bg-rose-600 text-white text-[10px] font-bold flex items-center justify-center">
              {counts.notAnswered}
            </span>
            <span className="text-slate-700 font-medium">Not Answered</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded bg-white border border-slate-300 text-slate-700 text-[10px] font-bold flex items-center justify-center">
              {counts.notVisited}
            </span>
            <span className="text-slate-500">Not Visited</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-purple-600 text-white text-[10px] font-bold flex items-center justify-center">
              {counts.marked}
            </span>
            <span className="text-slate-700 font-medium">Marked</span>
          </div>

          <div className="col-span-2 flex items-center gap-2">
            <div className="relative w-5 h-5 rounded-full bg-purple-600 text-white text-[10px] font-bold flex items-center justify-center">
              {counts.markedAnswered}
              <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-emerald-500 rounded-full border border-white"></span>
            </div>
            <span className="text-slate-700 font-medium leading-tight text-[11px]">
              Ans & Marked for Review <span className="text-[10px] text-emerald-700 font-bold">(Evaluated)</span>
            </span>
          </div>
        </div>
      </div>

      {/* Grid of Question Numbers */}
      <div className="p-3.5 flex-1 bg-slate-50">
        <div className="text-[11px] font-bold text-slate-600 mb-2">
          Select Question:
        </div>
        <div className="grid grid-cols-5 gap-2">
          {questions.map((q, idx) => {
            const status = questionStatuses[q.id] || 'not-visited';
            const isCurrent = idx === currentQuestionIndex;

            return (
              <button
                key={q.id}
                onClick={() => onSelectQuestion(idx)}
                className={getStatusBadgeStyle(status, isCurrent)}
                title={`Question ${idx + 1}: ${status.replace('-', ' ')}`}
              >
                {idx + 1}
                {status === 'marked-answered' && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full border border-white"></span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom Submit Action */}
      <div className="p-3.5 bg-white border-t border-slate-200">
        <button
          onClick={onSubmitClick}
          className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white rounded-xl text-xs font-bold transition shadow-sm flex items-center justify-center gap-2"
        >
          Submit Test
        </button>
      </div>
    </aside>
  );
};
