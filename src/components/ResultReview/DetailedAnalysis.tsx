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
    <div className="max-w-5xl mx-auto px-4 py-8 bg-white text-slate-900 animate-in fade-in duration-200">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <button
            onClick={onBackToScorecard}
            className="p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition border border-slate-300 shadow-2xs"
            title="Back to Scorecard"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-xl md:text-2xl font-black text-slate-900">
              Responses & Answers Review
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              {test.title} • Score: <strong className="text-blue-700">{result.totalMarks} / {result.maxMarks}</strong> • Correct: <strong className="text-emerald-700">{result.correctCount}</strong> • Incorrect: <strong className="text-rose-700">{result.incorrectCount}</strong>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onBackToScorecard}
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition border border-slate-300 shadow-2xs"
          >
            View Summary
          </button>
          <button
            onClick={onGoHome}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition shadow-xs"
          >
            Dashboard
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 mb-6 shadow-2xs flex flex-wrap items-center justify-between gap-3">
        {/* Status Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <button
            onClick={() => setFilter('all')}
            className={`px-3.5 py-1.5 rounded-lg font-bold transition ${
              filter === 'all'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            All ({test.questions.length})
          </button>

          <button
            onClick={() => setFilter('correct')}
            className={`px-3.5 py-1.5 rounded-lg font-bold transition flex items-center gap-1.5 ${
              filter === 'correct'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-white text-emerald-700 hover:bg-emerald-50 border border-slate-200'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Correct ({result.correctCount})</span>
          </button>

          <button
            onClick={() => setFilter('incorrect')}
            className={`px-3.5 py-1.5 rounded-lg font-bold transition flex items-center gap-1.5 ${
              filter === 'incorrect'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'bg-white text-rose-700 hover:bg-rose-50 border border-slate-200'
            }`}
          >
            <XCircle className="w-3.5 h-3.5" />
            <span>Incorrect ({result.incorrectCount})</span>
          </button>

          <button
            onClick={() => setFilter('unattempted')}
            className={`px-3.5 py-1.5 rounded-lg font-bold transition flex items-center gap-1.5 ${
              filter === 'unattempted'
                ? 'bg-slate-700 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <MinusCircle className="w-3.5 h-3.5" />
            <span>Unattempted ({result.unattemptedCount})</span>
          </button>

          <button
            onClick={() => setFilter('bookmarked')}
            className={`px-3.5 py-1.5 rounded-lg font-bold transition flex items-center gap-1.5 ${
              filter === 'bookmarked'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'bg-white text-amber-700 hover:bg-amber-50 border border-slate-200'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5" />
            <span>Bookmarked ({bookmarkedIds.filter((id) => test.questions.some((q) => q.id === id)).length})</span>
          </button>
        </div>

        {/* Topic Filter */}
        <div className="flex items-center gap-2 text-xs">
          <Filter className="w-3.5 h-3.5 text-slate-500" />
          <select
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value)}
            className="bg-white border border-slate-300 rounded-lg px-3 py-1.5 text-xs text-slate-800 font-medium focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-2xs"
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
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-12 text-center text-slate-500">
          <p className="text-base font-bold text-slate-700">No questions match the selected filter.</p>
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
                className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xs hover:border-slate-300 transition"
              >
                {/* Question Status Banner with Question No, Time Taken, and Marks */}
                <div className="bg-slate-50 px-6 py-3.5 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-3">
                    <span className="font-extrabold text-slate-900 text-base">
                      Question {q.questionNumber}
                    </span>
                    <span className="bg-white text-slate-700 px-2.5 py-0.5 rounded text-[11px] font-bold border border-slate-300">
                      {q.type}
                    </span>
                    <span className="text-slate-500 text-xs hidden sm:inline">
                      Topic: <span className="text-slate-800 font-bold">{q.topic}</span>
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    {/* Time Spent on this Question */}
                    <div className="flex items-center gap-1 text-slate-600 font-mono font-medium bg-white px-2.5 py-1 rounded-lg border border-slate-200">
                      <Clock className="w-3.5 h-3.5 text-blue-600" />
                      <span>{timeMin > 0 ? `${timeMin}m ` : ''}{timeSec}s</span>
                    </div>

                    {/* Result badge */}
                    {isAttempted ? (
                      isCorrect ? (
                        <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-300 text-emerald-800 font-bold rounded-lg text-xs">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Correct (+3)</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1.5 px-3 py-1 bg-rose-50 border border-rose-300 text-rose-800 font-bold rounded-lg text-xs">
                          <XCircle className="w-3.5 h-3.5" />
                          <span>Incorrect ({marksAwarded < 0 ? '-1' : '0'})</span>
                        </div>
                      )
                    ) : (
                      <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-600 font-bold rounded-lg text-xs border border-slate-200">
                        <MinusCircle className="w-3.5 h-3.5" />
                        <span>Unattempted (0)</span>
                      </div>
                    )}

                    {/* Copy Question Button */}
                    <button
                      onClick={() => handleCopyQuestion(q)}
                      className={`px-2.5 py-1.5 rounded-lg border text-xs font-semibold transition flex items-center gap-1.5 ${
                        copiedId === q.id
                          ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                          : 'bg-white border-slate-300 text-slate-600 hover:bg-slate-100 hover:text-slate-900 shadow-2xs'
                      }`}
                      title="Copy Question & Options"
                    >
                      {copiedId === q.id ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
                      <span className="text-[11px]">{copiedId === q.id ? 'Copied' : 'Copy'}</span>
                    </button>

                    {/* Bookmark Toggle */}
                    <button
                      onClick={() => handleBookmarkToggle(q.id)}
                      className={`p-1.5 rounded-lg transition ${
                        isBookmarked
                          ? 'text-amber-700 bg-amber-100'
                          : 'text-slate-400 hover:text-slate-700 hover:bg-slate-100'
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

                <div className="p-6 md:p-8">
                  {/* Passage Toggle if question has passage */}
                  {(q.passage || q.context) && (
                    <div className="mb-6 bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden">
                      <button
                        onClick={() => togglePassage(q.id)}
                        className="w-full px-5 py-2.5 flex items-center justify-between text-xs font-bold text-blue-800 hover:bg-slate-100 transition"
                      >
                        <div className="flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-blue-600" />
                          <span><MathText text={q.passageTitle || 'Context Passage / Set Information'} /></span>
                        </div>
                        {isPassageOpen ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </button>

                      {isPassageOpen && (
                        <div className="p-5 border-t border-slate-200 passage-text text-slate-800 leading-relaxed max-h-80 overflow-y-auto whitespace-pre-line bg-white/70">
                          <MathText text={q.passage || q.context} />
                        </div>
                      )}
                    </div>
                  )}

                  {/* Question Text - Maximized font & spacing */}
                  <div className="text-slate-900 text-base md:text-lg font-bold mb-6 whitespace-pre-line leading-relaxed">
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
                          'bg-white border-slate-200 text-slate-700 hover:border-slate-300';
                        let badgeStyle = 'bg-slate-100 border-slate-300 text-slate-600';

                        if (isCorrectOption) {
                          optionStyle =
                            'bg-emerald-50 border-emerald-400 text-emerald-950 font-semibold ring-1 ring-emerald-300';
                          badgeStyle = 'bg-emerald-600 text-white font-black border-emerald-600';
                        } else if (isUserSelected && !isCorrectOption) {
                          optionStyle =
                            'bg-rose-50 border-rose-400 text-rose-950 font-semibold ring-1 ring-rose-300';
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
                                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                                  <Check className="w-3.5 h-3.5" /> Correct Answer
                                </span>
                              )}
                              {isUserSelected && !isCorrectOption && (
                                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-bold bg-rose-100 text-rose-800 border border-rose-300">
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-5 rounded-2xl border border-slate-200 text-xs">
                      <div>
                        <span className="block text-slate-600 mb-1.5 font-bold">Your Response:</span>
                        <div
                          className={`font-mono text-lg font-bold px-4 py-2.5 rounded-xl border-2 ${
                            isAttempted
                              ? isCorrect
                                ? 'bg-emerald-50 border-emerald-400 text-emerald-800'
                                : 'bg-rose-50 border-rose-400 text-rose-800'
                              : 'bg-white border-slate-200 text-slate-400'
                          }`}
                        >
                          {isAttempted ? <MathText text={String(userAns.response)} /> : '[Unattempted]'}
                        </div>
                      </div>

                      <div>
                        <span className="block text-slate-600 mb-1.5 font-bold">
                          Official Correct Answer:
                        </span>
                        <div className="font-mono text-lg font-bold px-4 py-2.5 rounded-xl bg-emerald-50 border-2 border-emerald-400 text-emerald-800">
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
