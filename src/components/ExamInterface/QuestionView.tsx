import React, { useState } from 'react';
import { Question } from '../../types';
import { Bookmark, BookmarkCheck, BookOpen, HelpCircle, Copy, Check } from 'lucide-react';
import { MathText } from '../MathText';
import { formatQuestionForClipboard, copyTextToClipboard } from '../../utils/clipboard';

interface QuestionViewProps {
  question: Question;
  selectedOption: number | string | null;
  onSelectOption: (option: number | string | null) => void;
  onSaveAndNext: () => void;
  onMarkForReviewAndNext: () => void;
  onClearResponse: () => void;
  onPrevious: () => void;
  onNext: () => void;
  isFirst: boolean;
  isLast: boolean;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
}

export const QuestionView: React.FC<QuestionViewProps> = ({
  question,
  selectedOption,
  onSelectOption,
  onSaveAndNext,
  onMarkForReviewAndNext,
  onClearResponse,
  onPrevious,
  onNext,
  isFirst,
  isLast,
  isBookmarked,
  onToggleBookmark,
}) => {
  const isTITA = question.type === 'TITA';
  const passageContent = question.passage || question.context;
  const hasPassage = Boolean(passageContent && passageContent.trim().length > 0);
  const [copied, setCopied] = useState(false);

  const handleCopyQuestion = async () => {
    const text = formatQuestionForClipboard(question);
    const success = await copyTextToClipboard(text);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-white text-slate-900 overflow-hidden">
      {/* Top Question Info Bar */}
      <div className="bg-slate-50 px-6 py-3 border-b border-slate-200 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-extrabold text-slate-900 text-base">
            Question {question.questionNumber}
          </span>
          <span className="bg-white text-slate-700 px-2.5 py-1 rounded-md text-xs font-semibold border border-slate-300">
            {question.type === 'MCQ' ? 'Multiple Choice (MCQ)' : 'Type In The Answer (TITA)'}
          </span>
          <span className="text-slate-500 text-xs hidden sm:inline">
            Topic: <span className="text-slate-800 font-bold">{question.topic}</span>
          </span>
        </div>

        <div className="flex items-center gap-4">
          {/* Marking scheme badge */}
          <div className="flex items-center gap-2 text-xs">
            <span className="text-emerald-700 font-bold bg-emerald-50 border border-emerald-300 px-2.5 py-1 rounded-md">
              +3.00
            </span>
            <span className="text-rose-700 font-bold bg-rose-50 border border-rose-300 px-2.5 py-1 rounded-md">
              {question.type === 'MCQ' ? '-1.00' : '0.00'}
            </span>
          </div>

          {/* Copy Question Button */}
          <button
            onClick={handleCopyQuestion}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold transition ${
              copied
                ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100 hover:text-slate-900 shadow-2xs'
            }`}
            title="Copy question and options to clipboard"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
            <span>{copied ? 'Copied!' : 'Copy'}</span>
          </button>

          {/* Bookmark Button */}
          <button
            onClick={onToggleBookmark}
            className={`p-2 rounded-lg transition ${
              isBookmarked
                ? 'text-amber-700 bg-amber-100 hover:bg-amber-200'
                : 'text-slate-400 hover:text-slate-800 hover:bg-slate-200'
            }`}
            title={isBookmarked ? 'Remove Bookmark' : 'Bookmark Question'}
          >
            {isBookmarked ? <BookmarkCheck className="w-5 h-5" /> : <Bookmark className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Main Maximized Workspace */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden bg-white">
        {/* Left Passage / Context Pane (if present) with maximized comfortable reading typography */}
        {hasPassage && (
          <div className="w-full md:w-1/2 p-6 md:p-8 bg-slate-50/70 border-b md:border-b-0 md:border-r border-slate-200 overflow-y-auto">
            {question.passageTitle && (
              <div className="flex items-center gap-2 mb-4 text-blue-900 font-bold text-sm tracking-wide uppercase border-b border-slate-200 pb-2.5">
                <BookOpen className="w-4 h-4 text-blue-700" />
                <span><MathText text={question.passageTitle} /></span>
              </div>
            )}
            <div className="passage-text text-slate-900 text-base leading-relaxed whitespace-pre-line selection:bg-blue-100">
              <MathText text={passageContent} />
            </div>
          </div>
        )}

        {/* Right Question & Options Pane - MAXIMIZED FOR MAXIMUM READABILITY */}
        <div className={`flex-1 p-6 md:p-8 lg:p-10 overflow-y-auto ${hasPassage ? 'md:w-1/2' : 'w-full max-w-5xl mx-auto'}`}>
          {/* Question Text - Large, clear and legible */}
          <div className="mb-8">
            <h2 className="text-base md:text-lg lg:text-xl font-bold text-slate-900 leading-relaxed whitespace-pre-line">
              <MathText text={question.question} />
            </h2>
          </div>

          {/* Answer Area - Maximized size, high-contrast, comfortable click areas */}
          {!isTITA && question.options ? (
            /* MCQ Options */
            <div className="space-y-4 max-w-4xl">
              {question.options.map((opt, idx) => {
                const isSelected = selectedOption === idx;
                const optionLabel = String.fromCharCode(65 + idx); // A, B, C, D

                return (
                  <label
                    key={idx}
                    onClick={() => onSelectOption(idx)}
                    className={`flex items-start gap-4 p-4 md:p-5 rounded-2xl border-2 cursor-pointer transition-all duration-150 select-text ${
                      isSelected
                        ? 'bg-blue-50/90 border-blue-600 text-slate-950 shadow-sm ring-2 ring-blue-500/20'
                        : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/80 text-slate-800'
                    }`}
                  >
                    <div className="pt-0.5">
                      <div
                        className={`w-7 h-7 rounded-full border-2 flex items-center justify-center text-sm font-black transition ${
                          isSelected
                            ? 'border-blue-600 bg-blue-600 text-white'
                            : 'border-slate-300 text-slate-600 bg-slate-100'
                        }`}
                      >
                        {optionLabel}
                      </div>
                    </div>
                    <span className="text-base md:text-lg leading-relaxed flex-1 font-medium pt-0.5">
                      <MathText text={opt} />
                    </span>
                  </label>
                );
              })}
            </div>
          ) : (
            /* TITA (Type In The Answer) input area - Maximized input */
            <div className="bg-slate-50 border border-slate-200 p-6 md:p-8 rounded-3xl max-w-lg shadow-xs">
              <div className="flex items-center gap-2 mb-4 text-xs font-bold text-slate-700">
                <HelpCircle className="w-4 h-4 text-blue-600" />
                <span>Type In The Answer (TITA)</span>
              </div>
              <div className="mb-5">
                <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">
                  Your Answer:
                </label>
                <input
                  type="text"
                  value={selectedOption !== null && selectedOption !== undefined ? String(selectedOption) : ''}
                  onChange={(e) => onSelectOption(e.target.value)}
                  placeholder="Enter numeric / sequence answer..."
                  className="w-full bg-white border-2 border-slate-300 rounded-xl px-5 py-3 text-lg font-mono font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  autoFocus
                />
              </div>

              {/* Virtual Numpad for TITA */}
              <div className="grid grid-cols-3 gap-2.5">
                {['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', '⌫'].map((k) => (
                  <button
                    key={k}
                    type="button"
                    onClick={() => {
                      const cur = selectedOption !== null && selectedOption !== undefined ? String(selectedOption) : '';
                      if (k === '⌫') {
                        onSelectOption(cur.slice(0, -1));
                      } else {
                        onSelectOption(cur + k);
                      }
                    }}
                    className="py-3 bg-white hover:bg-slate-100 active:bg-slate-200 border border-slate-300 text-slate-900 font-mono font-bold rounded-xl text-base transition shadow-2xs"
                  >
                    {k}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Exam Action Bar */}
      <div className="bg-slate-50 px-6 py-3.5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
        {/* Left action buttons */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onMarkForReviewAndNext}
            className="px-4 py-2.5 bg-purple-50 hover:bg-purple-100 active:bg-purple-200 border border-purple-300 text-purple-800 rounded-xl text-xs font-bold transition shadow-2xs"
          >
            Mark for Review & Next
          </button>
          <button
            onClick={onClearResponse}
            className="px-4 py-2.5 bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 rounded-xl text-xs font-bold transition shadow-2xs"
          >
            Clear Response
          </button>
        </div>

        {/* Right Navigation & Save buttons */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onPrevious}
            disabled={isFirst}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold border transition ${
              isFirst
                ? 'opacity-40 cursor-not-allowed bg-slate-100 border-slate-200 text-slate-400'
                : 'bg-white hover:bg-slate-100 border-slate-300 text-slate-800 shadow-2xs'
            }`}
          >
            Previous
          </button>
          <button
            onClick={onNext}
            disabled={isLast}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold border transition ${
              isLast
                ? 'opacity-40 cursor-not-allowed bg-slate-100 border-slate-200 text-slate-400'
                : 'bg-white hover:bg-slate-100 border-slate-300 text-slate-800 shadow-2xs'
            }`}
          >
            Next
          </button>
          <button
            onClick={onSaveAndNext}
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white rounded-xl text-xs font-bold transition shadow-sm"
          >
            Save & Next
          </button>
        </div>
      </div>
    </div>
  );
};
