import React, { useState } from 'react';
import { Question, TestResult, SectionalTest } from '../../types';
import { toggleBookmark, getBookmarks } from '../../utils/storage';
import {
  CheckCircle2,
  XCircle,
  MinusCircle,
  Bookmark,
  BookmarkCheck,
  BookOpen,
  Filter,
  Check,
  Clock,
  ChevronDown,
  ChevronUp,
  ArrowLeft,
  Copy
} from 'lucide-react';
import { MathText } from '../MathText';
import { formatQuestionForClipboard, copyTextToClipboard } from '../../utils/clipboard';

interface DetailedAnalysisProps {
  test: SectionalTest;
  result: TestResult;
  onBackToScorecard: () => void;
  onGoHome: () => void;
}

export const DetailedAnalysis: React.FC<DetailedAnalysisProps> = ({
  test,
  result,
  onBackToScorecard,
  onGoHome,
}) => {
  const [filter, setFilter] = useState<'all' | 'correct' | 'incorrect' | 'unattempted' | 'bookmarked'>('all');
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [expandedPassages, setExpandedPassages] = useState<Record<string, boolean>>({});
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(getBookmarks());

  const handleBookmarkToggle = (qId: string) => {
    toggleBookmark(qId);
    setBookmarkedIds(getBookmarks());
  };

  const togglePassage = (qId: string) => {
    setExpandedPassages((prev) => ({ ...prev, [qId]: !prev[qId] }));
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

  const topics = Array.from(new Set(test.questions.map((q) => q.topic)));

  const filteredQuestions = test.questions.filter((q) => {
    const userAns = result.answers[q.id];
    const isAttempted = userAns && userAns.response !== null && userAns.response !== undefined && String(userAns.response).trim() !== '';
    const isCorrect = userAns?.isCorrect;
    const isBookmarked = bookmarkedIds.includes(q.id);

    if (filter === 'correct' && !isCorrect) return false;
    if (filter === 'incorrect' && (!isAttempted || isCorrect)) return false;
    if (filter === 'unattempted' && isAttempted) return false;
    if (filter === 'bookmarked' && !isBookmarked) return false;

    if (selectedTopic !== 'all' && q.topic !== selectedTopic) return false;

    return true;
  });

  return (
    <div className="max-w-5xl mx-auto px-3 sm:px-4 py-6 sm:py-8 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 animate-in fade-in duration-200 transition-colors">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <button
            onClick={onBackToScorecard}
            className="p-2 sm:p-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl transition border border-slate-300 dark:border-slate-700 shadow-2xs shrink-0"
            title="Back to Scorecard"
            aria-label="Back to Scorecard"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-xl md:text-2xl font-black text-slate-900 dark:text-slate-100">
              Responses & Answers Review
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              {test.title} • Score: <strong className="text-blue-700 dark:text-blue-400">{result.totalMarks} / {result.maxMarks}</strong> • Correct: <strong className="text-emerald-700 dark:text-emerald-400">{result.correctCount}</strong> • Incorrect: <strong className="text-rose-700 dark:text-rose-400">{result.incorrectCount}</strong>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onBackToScorecard}
            className="flex-1 sm:flex-none px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl text-xs font-bold transition border border-slate-300 dark:border-slate-700 shadow-2xs text-center"
          >
            View Summary
          </button>
          <button
            onClick={onGoHome}
            className="flex-1 sm:flex-none px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition shadow-xs text-center"
          >
            Dashboard
          </button>
        </div>
      </div>

      {/* Filter and Search Bar (Swipeable on Mobile) */}
      <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-3 sm:p-4 mb-6 shadow-2xs flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {/* Status Filter Buttons */}
        <div className="flex items-center gap-1.5 text-xs overflow-x-auto no-scrollbar whitespace-nowrap pb-1 max-w-full">
          <button
            onClick={() => setFilter('all')}
            className={`shrink-0 px-3 sm:px-3.5 py-1.5 rounded-lg font-bold transition ${
              filter === 'all'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
            }`}
          >
            All ({test.questions.length})
          </button>

          <button
            onClick={() => setFilter('correct')}
            className={`shrink-0 px-3 sm:px-3.5 py-1.5 rounded-lg font-bold transition flex items-center gap-1.5 ${
              filter === 'correct'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-white dark:bg-slate-800 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 border border-slate-200 dark:border-slate-700'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Correct ({result.correctCount})</span>
          </button>

          <button
            onClick={() => setFilter('incorrect')}
            className={`shrink-0 px-3 sm:px-3.5 py-1.5 rounded-lg font-bold transition flex items-center gap-1.5 ${
              filter === 'incorrect'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'bg-white dark:bg-slate-800 text-rose-700 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 border border-slate-200 dark:border-slate-700'
            }`}
          >
            <XCircle className="w-3.5 h-3.5" />
            <span>Incorrect ({result.incorrectCount})</span>
          </button>

          <button
            onClick={() => setFilter('unattempted')}
            className={`shrink-0 px-3 sm:px-3.5 py-1.5 rounded-lg font-bold transition flex items-center gap-1.5 ${
              filter === 'unattempted'
                ? 'bg-slate-700 dark:bg-slate-600 text-white shadow-xs'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
            }`}
          >
            <MinusCircle className="w-3.5 h-3.5" />
            <span>Unattempted ({result.unattemptedCount})</span>
          </button>

          <button
            onClick={() => setFilter('bookmarked')}
            className={`shrink-0 px-3 sm:px-3.5 py-1.5 rounded-lg font-bold transition flex items-center gap-1.5 ${
              filter === 'bookmarked'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'bg-white dark:bg-slate-800 text-amber-700 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950/40 border border-slate-200 dark:border-slate-700'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5" />
            <span>Bookmarked ({bookmarkedIds.filter((id) => test.questions.some((q) => q.id === id)).length})</span>
          </button>
        </div>

        {/* Topic Filter */}
        <div className="flex items-center gap-2 text-xs self-start sm:self-auto shrink-0">
          <Filter className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400 shrink-0" />
          <select
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value)}
            className="bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-slate-800 dark:text-slate-200 font-medium focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-2xs"
          >
            <option value="all">All Topics</option>
            {topics.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Questions Solution List */}
      {filteredQuestions.length === 0 ? (
        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-12 text-center text-slate-500 dark:text-slate-400">
          <p className="text-base font-bold text-slate-700 dark:text-slate-300">No questions match the selected filter.</p>
          <button
            onClick={() => {
              setFilter('all');
              setSelectedTopic('all');
            }}
            className="mt-3 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl transition"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {filteredQuestions.map((q) => {
            const userAns = result.answers[q.id];
            const isAttempted =
              userAns &&
              userAns.response !== null &&
              userAns.response !== undefined &&
              String(userAns.response).trim() !== '';
            const isCorrect = userAns?.isCorrect;
            const marksAwarded = userAns?.marksAwarded ?? 0;
            const timeSpent = userAns?.timeSpentSeconds || 0;
            const isBookmarked = bookmarkedIds.includes(q.id);
            const isPassageOpen = expandedPassages[q.id] ?? true;

            const timeMin = Math.floor(timeSpent / 60);
            const timeSec = timeSpent % 60;

            return (
              <div
                key={q.id}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition"
              >
                {/* Question Status Banner with Question No, Time Taken, and Marks */}
                <div className="bg-slate-50 dark:bg-slate-950 px-3.5 sm:px-6 py-3 sm:py-3.5 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-3 text-xs">
                  <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                    <span className="font-extrabold text-slate-900 dark:text-slate-100 text-sm sm:text-base">
                      Question {q.questionNumber}
                    </span>
                    <span className="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-bold border border-slate-300 dark:border-slate-700">
                      {q.type}
                    </span>
                    <span className="text-slate-500 dark:text-slate-400 text-xs">
                      Topic: <span className="text-slate-800 dark:text-slate-200 font-bold">{q.topic}</span>
                    </span>
                  </div>

                  <div className="flex items-center gap-2 sm:gap-3 flex-wrap w-full sm:w-auto justify-between sm:justify-start">
                    {/* Time Spent on this Question */}
                    <div className="flex items-center gap-1 text-slate-600 dark:text-slate-300 font-mono font-medium bg-white dark:bg-slate-800 px-2 py-1 rounded-lg border border-slate-200 dark:border-slate-700 text-xs">
                      <Clock className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                      <span>{timeMin > 0 ? `${timeMin}m ` : ''}{timeSec}s</span>
                    </div>

                    {/* Result badge */}
                    {isAttempted ? (
                      isCorrect ? (
                        <div className="flex items-center gap-1 px-2.5 py-1 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 font-bold rounded-lg text-xs">
                          <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                          <span>Correct (+3)</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1 px-2.5 py-1 bg-rose-50 dark:bg-rose-950/60 border border-rose-300 dark:border-rose-800 text-rose-800 dark:text-rose-300 font-bold rounded-lg text-xs">
                          <XCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>Incorrect ({marksAwarded < 0 ? '-1' : '0'})</span>
                        </div>
                      )
                    ) : (
                      <div className="flex items-center gap-1 px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-bold rounded-lg text-xs border border-slate-200 dark:border-slate-700">
                        <MinusCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>Unattempted (0)</span>
                      </div>
                    )}

                    <div className="flex items-center gap-1.5 ml-auto sm:ml-0">
                      {/* Copy Question Button */}
                      <button
                        onClick={() => handleCopyQuestion(q)}
                        className={`px-2 py-1 rounded-lg border text-xs font-semibold transition flex items-center gap-1 ${
                          copiedId === q.id
                            ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300'
                            : 'bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white shadow-2xs'
                        }`}
                        title="Copy Question & Options"
                      >
                        {copiedId === q.id ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />}
                        <span className="text-[11px] hidden sm:inline">{copiedId === q.id ? 'Copied' : 'Copy'}</span>
                      </button>

                      {/* Bookmark Toggle */}
                      <button
                        onClick={() => handleBookmarkToggle(q.id)}
                        className={`p-1.5 rounded-lg transition ${
                          isBookmarked
                            ? 'text-amber-700 dark:text-amber-400 bg-amber-100 dark:bg-amber-950/60'
                            : 'text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                        }`}
                        title={isBookmarked ? 'Bookmarked' : 'Add to Bookmarks'}
                      >
                        {isBookmarked ? (
                          <BookmarkCheck className="w-4 h-4" />
                        ) : (
                          <Bookmark className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-6 md:p-8">
                  {/* Passage Toggle if question has passage */}
                  {(q.passage || q.context) && (
                    <div className="mb-6 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden">
                      <button
                        onClick={() => togglePassage(q.id)}
                        className="w-full px-5 py-2.5 flex items-center justify-between text-xs font-bold text-blue-800 dark:text-blue-300 hover:bg-slate-100 dark:hover:bg-slate-900 transition"
                      >
                        <div className="flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                          <span><MathText text={q.passageTitle || 'Context Passage / Set Information'} /></span>
                        </div>
                        {isPassageOpen ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </button>

                      {isPassageOpen && (
                        <div className="p-5 border-t border-slate-200 dark:border-slate-800 passage-text text-slate-800 dark:text-slate-200 leading-relaxed max-h-80 overflow-y-auto whitespace-pre-line bg-white/70 dark:bg-slate-900/60">
                          <MathText text={q.passage || q.context} />
                        </div>
                      )}
                    </div>
                  )}

                  {/* Question Text - Maximized font & spacing */}
                  <div className="text-slate-900 dark:text-slate-100 text-base md:text-lg font-bold mb-6 whitespace-pre-line leading-relaxed">
                    <MathText text={q.question} />
                  </div>

                  {/* Options Comparison (for MCQ) */}
                  {q.type === 'MCQ' && q.options && (
                    <div className="space-y-3">
                      {q.options.map((opt, optIdx) => {
                        const isCorrectOption = Number(q.correctAnswer) === optIdx;
                        const isUserSelected = isAttempted && Number(userAns.response) === optIdx;
                        const optionLabel = String.fromCharCode(65 + optIdx);

                        let optionStyle =
                          'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700';
                        let badgeStyle = 'bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300';

                        if (isCorrectOption) {
                          optionStyle =
                            'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-400 dark:border-emerald-600 text-emerald-950 dark:text-emerald-100 font-semibold ring-1 ring-emerald-300 dark:ring-emerald-700';
                          badgeStyle = 'bg-emerald-600 text-white font-black border-emerald-600';
                        } else if (isUserSelected && !isCorrectOption) {
                          optionStyle =
                            'bg-rose-50 dark:bg-rose-950/50 border-rose-400 dark:border-rose-600 text-rose-950 dark:text-rose-100 font-semibold ring-1 ring-rose-300 dark:ring-rose-700';
                          badgeStyle = 'bg-rose-600 text-white font-black border-rose-600';
                        }

                        return (
                          <div
                            key={optIdx}
                            className={`p-4 rounded-2xl border-2 flex items-start gap-3.5 transition ${optionStyle}`}
                          >
                            <div
                              className={`w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs shrink-0 ${badgeStyle}`}
                            >
                              {optionLabel}
                            </div>
                            <div className="flex-1 text-base leading-relaxed pt-0.5 font-medium">
                              <MathText text={opt} />
                            </div>
                            <div className="shrink-0 flex items-center gap-1.5 pt-0.5">
                              {isCorrectOption && (
                                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-bold bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-700">
                                  <Check className="w-3.5 h-3.5" /> Correct Answer
                                </span>
                              )}
                              {isUserSelected && !isCorrectOption && (
                                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-bold bg-rose-100 dark:bg-rose-900/60 text-rose-800 dark:text-rose-200 border border-rose-300 dark:border-rose-700">
                                  Your Choice
                                </span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* TITA Response Comparison */}
                  {q.type === 'TITA' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 dark:bg-slate-950 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 text-xs">
                      <div>
                        <span className="block text-slate-600 dark:text-slate-400 mb-1.5 font-bold">Your Response:</span>
                        <div
                          className={`font-mono text-lg font-bold px-4 py-2.5 rounded-xl border-2 ${
                            isAttempted
                              ? isCorrect
                                ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-400 dark:border-emerald-600 text-emerald-800 dark:text-emerald-300'
                                : 'bg-rose-50 dark:bg-rose-950/60 border-rose-400 dark:border-rose-600 text-rose-800 dark:text-rose-300'
                              : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500'
                          }`}
                        >
                          {isAttempted ? <MathText text={String(userAns.response)} /> : '[Unattempted]'}
                        </div>
                      </div>

                      <div>
                        <span className="block text-slate-600 dark:text-slate-400 mb-1.5 font-bold">
                          Official Correct Answer:
                        </span>
                        <div className="font-mono text-lg font-bold px-4 py-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border-2 border-emerald-400 dark:border-emerald-600 text-emerald-800 dark:text-emerald-300">
                          <MathText text={String(q.correctAnswer)} />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
