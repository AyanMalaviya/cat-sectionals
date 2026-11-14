import React, { useState, useEffect } from 'react';
import { Question } from '../../types';
import { Bookmark, BookmarkCheck, BookOpen, HelpCircle, Copy, Check, FileText, ArrowRight, ArrowLeft } from 'lucide-react';
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

  // Mobile view mode when passage is present: toggle between reading passage and viewing question
  const [mobileTab, setMobileTab] = useState<'passage' | 'question'>('question');

  // When question changes, reset mobile view to question so user immediately sees new prompt
  useEffect(() => {
    // Keep question tab active so candidates see the new question immediately
    setMobileTab('question');
  }, [question.id]);

  const handleCopyQuestion = async () => {
    const text = formatQuestionForClipboard(question);
    const success = await copyTextToClipboard(text);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 overflow-hidden relative transition-colors">
      {/* Top Question Info Bar - Compact on mobile */}
      <div className="bg-slate-50 dark:bg-slate-900 px-3 sm:px-6 py-2 sm:py-3 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-2 shrink-0">
        <div className="flex items-center gap-1.5 sm:gap-3 min-w-0">
          <span className="font-extrabold text-slate-900 dark:text-slate-100 text-sm sm:text-base shrink-0">
            Q{question.questionNumber}
          </span>
          <span className="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[10px] sm:text-xs font-semibold border border-slate-300 dark:border-slate-700 shrink-0">
            {question.type === 'MCQ' ? 'MCQ' : 'TITA'}
          </span>
          <span className="text-slate-500 dark:text-slate-400 text-[11px] sm:text-xs truncate hidden xs:inline">
            <span className="text-slate-800 dark:text-slate-200 font-bold">{question.topic}</span>
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Marking scheme badge */}
          {(() => {
            const marksPerCorrect = question.marksPerCorrect ?? (question.examType === 'XAT' || question.examType === 'SNAP' ? 1 : 3);
            const negativeMarks = question.negativeMarks ?? (question.examType === 'XAT' || question.examType === 'SNAP' ? 0.25 : 1);
            return (
              <div className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs">
                <span className="text-emerald-700 dark:text-emerald-300 font-bold bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md">
                  +{marksPerCorrect}
                </span>
                <span className="text-rose-700 dark:text-rose-300 font-bold bg-rose-50 dark:bg-rose-950/60 border border-rose-300 dark:border-rose-800 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md">
                  {question.type === 'MCQ' ? `-${negativeMarks}` : '0'}
                </span>
              </div>
            );
          })()}

          {/* Copy Question Button */}
          <button
            onClick={handleCopyQuestion}
            aria-label="Copy question to clipboard"
            className={`flex items-center gap-1 px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-lg border text-xs font-semibold transition ${
              copied
                ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300'
                : 'bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white shadow-2xs'
            }`}
            title="Copy question and options to clipboard"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />}
            <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
          </button>

          {/* Bookmark Button */}
          <button
            onClick={onToggleBookmark}
            aria-label={isBookmarked ? 'Remove Bookmark' : 'Bookmark Question'}
            className={`p-1.5 sm:p-2 rounded-lg transition ${
              isBookmarked
                ? 'text-amber-700 dark:text-amber-400 bg-amber-100 dark:bg-amber-950/50 hover:bg-amber-200 dark:hover:bg-amber-900/50'
                : 'text-slate-400 dark:text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800'
            }`}
            title={isBookmarked ? 'Remove Bookmark' : 'Bookmark Question'}
          >
            {isBookmarked ? <BookmarkCheck className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 dark:text-amber-400" /> : <Bookmark className="w-4 h-4 sm:w-5 sm:h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Tab Switcher when Passage is Present */}
      {hasPassage && (
        <div className="md:hidden flex border-b border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 p-1 shrink-0">
          <button
            onClick={() => setMobileTab('passage')}
            className={`flex-1 py-1.5 px-2 text-xs font-bold rounded-lg transition flex items-center justify-center gap-1.5 ${
              mobileTab === 'passage'
                ? 'bg-white dark:bg-slate-800 text-blue-700 dark:text-blue-300 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Read Passage</span>
          </button>
          <button
            onClick={() => setMobileTab('question')}
            className={`flex-1 py-1.5 px-2 text-xs font-bold rounded-lg transition flex items-center justify-center gap-1.5 ${
              mobileTab === 'question'
                ? 'bg-white dark:bg-slate-800 text-blue-700 dark:text-blue-300 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            <FileText className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Question &amp; Options</span>
          </button>
        </div>
      )}

      {/* Main Maximized Workspace */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden bg-white dark:bg-slate-950 relative">
        {/* Left Passage / Context Pane (Responsive: toggle on mobile, side-by-side on desktop) */}
        {hasPassage && (
          <div
            className={`w-full md:w-1/2 p-4 sm:p-6 md:p-8 bg-slate-50/70 dark:bg-slate-900/40 border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800 overflow-y-auto ${
              mobileTab === 'passage' ? 'flex flex-col' : 'hidden md:block'
            }`}
          >
            {question.passageTitle && (
              <div className="flex items-center gap-2 mb-3 text-blue-900 dark:text-blue-300 font-bold text-xs sm:text-sm tracking-wide uppercase border-b border-slate-200 dark:border-slate-800 pb-2">
                <BookOpen className="w-4 h-4 text-blue-700 dark:text-blue-400 shrink-0" />
                <span><MathText text={question.passageTitle} /></span>
              </div>
            )}
            <div className="passage-text text-slate-900 dark:text-slate-200 text-sm sm:text-base leading-relaxed whitespace-pre-line selection:bg-blue-100 dark:selection:bg-blue-900">
              <MathText text={passageContent} />
            </div>

            {/* Mobile: Quick jump to question button at bottom of passage */}
            <div className="md:hidden mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 text-center">
              <button
                onClick={() => setMobileTab('question')}
                className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>Go to Question {question.questionNumber}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Right Question & Options Pane */}
        <div
          className={`flex-1 p-4 sm:p-6 md:p-8 lg:p-10 overflow-y-auto ${
            hasPassage
              ? mobileTab === 'question'
                ? 'block md:w-1/2'
                : 'hidden md:block md:w-1/2'
              : 'w-full max-w-5xl mx-auto'
          }`}
        >
          {/* Question Text */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-slate-900 dark:text-slate-100 leading-relaxed whitespace-pre-line">
              <MathText text={question.question} />
            </h2>
          </div>

          {/* Answer Area */}
          {!isTITA && question.options ? (
            /* MCQ Options */
            <div className="space-y-3 sm:space-y-4 max-w-4xl">
              {question.options.map((opt, idx) => {
                const isSelected = selectedOption === idx;
                const optionLabel = String.fromCharCode(65 + idx); // A, B, C, D

                return (
                  <label
                    key={idx}
                    onClick={() => onSelectOption(idx)}
                    className={`flex items-start gap-3 sm:gap-4 p-3.5 sm:p-4 md:p-5 rounded-2xl border-2 cursor-pointer transition-all duration-150 select-text ${
                      isSelected
                        ? 'bg-blue-50/90 dark:bg-blue-950/60 border-blue-600 dark:border-blue-500 text-slate-950 dark:text-white shadow-sm ring-2 ring-blue-500/20 dark:ring-blue-500/30'
                        : 'bg-white dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50/80 dark:hover:bg-slate-800/60 text-slate-800 dark:text-slate-200'
                    }`}
                  >
                    <div className="pt-0.5 shrink-0">
                      <div
                        className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 flex items-center justify-center text-xs sm:text-sm font-black transition ${
                          isSelected
                            ? 'border-blue-600 bg-blue-600 text-white'
                            : 'border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800'
                        }`}
                      >
                        {optionLabel}
                      </div>
                    </div>
                    <span className="text-sm sm:text-base md:text-lg leading-relaxed flex-1 font-medium pt-0.5">
                      <MathText text={opt} />
                    </span>
                  </label>
                );
              })}
            </div>
          ) : (
            /* TITA (Type In The Answer) input area */
            <div className="bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 p-4 sm:p-6 md:p-8 rounded-3xl max-w-lg shadow-xs">
              <div className="flex items-center gap-2 mb-3 text-xs font-bold text-slate-700 dark:text-slate-300">
                <HelpCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Type In The Answer (TITA)</span>
              </div>
              <div className="mb-4">
                <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wide">
                  Your Answer:
                </label>
                <input
                  type="text"
                  value={selectedOption !== null && selectedOption !== undefined ? String(selectedOption) : ''}
                  onChange={(e) => onSelectOption(e.target.value)}
                  placeholder="Enter numeric answer..."
                  className="w-full bg-white dark:bg-slate-950 border-2 border-slate-300 dark:border-slate-700 rounded-xl px-4 py-2.5 sm:px-5 sm:py-3 text-base sm:text-lg font-mono font-bold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  autoFocus
                />
              </div>

              {/* Virtual Numpad for TITA */}
              <div className="grid grid-cols-3 gap-2">
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
                    className="py-2.5 sm:py-3 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 active:bg-slate-200 dark:active:bg-slate-600 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 font-mono font-bold rounded-xl text-sm sm:text-base transition shadow-2xs"
                  >
                    {k}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Mobile: View Passage Quick Link Button at bottom */}
          {hasPassage && mobileTab === 'question' && (
            <div className="md:hidden mt-6 text-center">
              <button
                onClick={() => setMobileTab('passage')}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 text-blue-700 dark:text-blue-400 rounded-xl text-xs font-bold transition"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>View Full Passage Again</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Exam Action Bar - Clean single row on mobile without awkward wrapping */}
      <div className="bg-slate-50 dark:bg-slate-900 px-2.5 sm:px-6 py-2.5 sm:py-3.5 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-1.5 sm:gap-3 shrink-0">
        {/* Left Action Buttons */}
        <div className="flex items-center gap-1 sm:gap-2">
          <button
            onClick={onMarkForReviewAndNext}
            aria-label="Mark question for review and move to next"
            className="px-2.5 sm:px-4 py-2 sm:py-2.5 bg-purple-50 dark:bg-purple-950/60 hover:bg-purple-100 dark:hover:bg-purple-900/60 active:bg-purple-200 border border-purple-300 dark:border-purple-800 text-purple-800 dark:text-purple-300 rounded-xl text-xs font-bold transition shadow-2xs shrink-0"
          >
            <span className="sm:hidden">Review</span>
            <span className="hidden sm:inline">Mark for Review &amp; Next</span>
          </button>
          <button
            onClick={onClearResponse}
            aria-label="Clear selected response"
            className="px-2.5 sm:px-4 py-2 sm:py-2.5 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-xl text-xs font-bold transition shadow-2xs shrink-0"
          >
            <span className="sm:hidden">Clear</span>
            <span className="hidden sm:inline">Clear Response</span>
          </button>
        </div>

        {/* Right Navigation & Save Buttons */}
        <div className="flex items-center gap-1 sm:gap-2">
          <button
            onClick={onPrevious}
            disabled={isFirst}
            aria-label="Previous Question"
            className={`px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs font-bold border transition shrink-0 ${
              isFirst
                ? 'opacity-40 cursor-not-allowed bg-slate-100 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-600'
                : 'bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 shadow-2xs'
            }`}
          >
            <span className="sm:hidden">Prev</span>
            <span className="hidden sm:inline">Previous</span>
          </button>
          <button
            onClick={onNext}
            disabled={isLast}
            aria-label="Next Question"
            className={`px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs font-bold border transition shrink-0 ${
              isLast
                ? 'opacity-40 cursor-not-allowed bg-slate-100 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-600'
                : 'bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 shadow-2xs'
            }`}
          >
            Next
          </button>
          <button
            onClick={onSaveAndNext}
            aria-label="Save response and move to next question"
            className="px-3.5 sm:px-6 py-2 sm:py-2.5 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white rounded-xl text-xs font-bold transition shadow-sm shrink-0 whitespace-nowrap"
          >
            Save &amp; Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionView;
