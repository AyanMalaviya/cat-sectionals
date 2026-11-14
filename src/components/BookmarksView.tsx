import React, { useState } from 'react';
import { Question, SectionalTest } from '../types';
import { getBookmarks, toggleBookmark } from '../utils/storage';
import { Bookmark, BookmarkCheck, BookOpen, Lightbulb, CheckCircle2, ArrowLeft, Copy, Check } from 'lucide-react';
import { MathText } from './MathText';
import { formatQuestionForClipboard, copyTextToClipboard } from '../utils/clipboard';

interface BookmarksViewProps {
  allTests: SectionalTest[];
  onBackToDashboard: () => void;
}

export const BookmarksView: React.FC<BookmarksViewProps> = ({
  allTests,
  onBackToDashboard,
}) => {
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(getBookmarks());

  // Collect all bookmarked questions across all tests
  const bookmarkedQuestions: { question: Question; test: SectionalTest }[] = [];

  allTests.forEach((t) => {
    t.questions.forEach((q) => {
      if (bookmarkedIds.includes(q.id)) {
        if (!bookmarkedQuestions.some((b) => b.question.id === q.id || b.question.question === q.question)) {
          bookmarkedQuestions.push({ question: q, test: t });
        }
      }
    });
  });

  const handleToggle = (qId: string) => {
    toggleBookmark(qId);
    setBookmarkedIds(getBookmarks());
  };

  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyQuestion = async (q: Question) => {
    const text = formatQuestionForClipboard(q);
    const success = await copyTextToClipboard(text);
    if (success) {
      setCopiedId(q.id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-3 sm:px-4 py-6 sm:py-8 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 animate-in fade-in duration-200 transition-colors">
      <div className="flex items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <button
            onClick={onBackToDashboard}
            className="p-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl transition border border-slate-300 dark:border-slate-700 shadow-2xs"
            aria-label="Back to Tests"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-xl md:text-2xl font-black text-slate-900 dark:text-slate-100">
              Bookmarks ({bookmarkedQuestions.length})
            </h1>
          </div>
        </div>

        <button
          onClick={onBackToDashboard}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold transition shadow-xs"
        >
          Back to Tests
        </button>
      </div>

      {bookmarkedQuestions.length === 0 ? (
        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 sm:p-12 text-center text-slate-500 dark:text-slate-400">
          <Bookmark className="w-12 h-12 mx-auto text-slate-400 dark:text-slate-500 mb-3" />
          <h3 className="text-base font-bold text-slate-800 dark:text-slate-200 mb-1">No Bookmarked Questions</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
            You can bookmark tricky or high-yield questions during the test or while reviewing solutions by clicking the bookmark icon.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {bookmarkedQuestions.map(({ question: q, test: t }) => (
            <div
              key={q.id}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition"
            >
              <div className="bg-slate-50 dark:bg-slate-950 px-3.5 sm:px-5 py-3 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 text-xs">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-bold text-slate-900 dark:text-slate-100">
                    {t.section} • Q{q.questionNumber}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400 hidden sm:inline">({t.title})</span>
                  <span className="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 px-2 py-0.5 rounded text-[11px] border border-slate-300 dark:border-slate-700">
                    {q.topic}
                  </span>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <button
                    onClick={() => handleCopyQuestion(q)}
                    className={`px-2.5 py-1.5 rounded-lg border text-xs font-semibold transition flex items-center gap-1.5 ${
                      copiedId === q.id
                        ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300'
                        : 'bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white shadow-2xs'
                    }`}
                    title="Copy Question"
                  >
                    {copiedId === q.id ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />}
                    <span className="text-[11px]">{copiedId === q.id ? 'Copied' : 'Copy'}</span>
                  </button>

                  <button
                    onClick={() => handleToggle(q.id)}
                    className="p-1.5 text-amber-700 dark:text-amber-400 bg-amber-100 dark:bg-amber-950/60 rounded-lg hover:bg-amber-200 dark:hover:bg-amber-900/60 transition"
                    title="Remove Bookmark"
                  >
                    <BookmarkCheck className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="p-4 sm:p-5 md:p-6">
                {(q.passage || q.context) && (
                  <div className="mb-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-4 text-xs md:text-sm text-slate-800 dark:text-slate-200 font-serif whitespace-pre-line leading-relaxed max-h-56 overflow-y-auto">
                    <MathText text={q.passage || q.context} />
                  </div>
                )}

                <div className="text-slate-900 dark:text-slate-100 text-sm md:text-base font-semibold mb-4 whitespace-pre-line leading-relaxed">
                  <MathText text={q.question} />
                </div>

                {q.type === 'MCQ' && q.options && (
                  <div className="space-y-2 mb-5">
                    {q.options.map((opt, optIdx) => {
                      const isCorrect = Number(q.correctAnswer) === optIdx;
                      return (
                        <div
                          key={optIdx}
                          className={`p-3 rounded-xl border text-xs flex items-center justify-between ${
                            isCorrect
                              ? 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-300 dark:border-emerald-600 text-emerald-950 dark:text-emerald-100 font-semibold'
                              : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="font-bold">{String.fromCharCode(65 + optIdx)}.</span>
                            <span><MathText text={opt} /></span>
                          </div>
                          {isCorrect && (
                            <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1 text-[11px]">
                              <CheckCircle2 className="w-3.5 h-3.5" /> Correct Answer
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}

                {q.type === 'TITA' && (
                  <div className="mb-5 p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-xs">
                    <span className="text-slate-600 dark:text-slate-400 font-medium">Correct Answer (TITA): </span>
                    <strong className="text-emerald-700 dark:text-emerald-400 font-mono text-sm ml-1">
                      <MathText text={String(q.correctAnswer)} />
                    </strong>
                  </div>
                )}

                {/* Explanation */}
                <div className="bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 rounded-xl p-4 text-xs md:text-sm text-slate-800 dark:text-slate-200 leading-relaxed whitespace-pre-line">
                  <div className="flex items-center gap-2 mb-2 text-blue-900 dark:text-blue-300 font-bold text-xs uppercase tracking-wider">
                    <Lightbulb className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <span>Solution Explanation</span>
                  </div>
                  <MathText text={q.explanation} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
