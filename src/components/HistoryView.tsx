import React, { useState } from 'react';
import { TestResult } from '../types';
import {
  deleteTestResult,
  clearAllHistory,
} from '../utils/storage';
import {
  Clock,
  Trash2,
  ArrowRight,
  RotateCcw,
} from 'lucide-react';

interface HistoryViewProps {
  history: TestResult[];
  onSelectResult: (result: TestResult) => void;
  onRetakeTest: (testId: string) => void;
  onRefreshHistory: () => void;
}

export const HistoryView: React.FC<HistoryViewProps> = ({
  history,
  onSelectResult,
  onRetakeTest,
  onRefreshHistory,
}) => {
  const [sectionFilter, setSectionFilter] = useState<'ALL' | 'QA' | 'VARC' | 'DILR'>('ALL');

  const filteredHistory = history.filter((item) => {
    if (sectionFilter === 'ALL') return true;
    return item.section === sectionFilter;
  });

  const handleDelete = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (window.confirm('Delete this test attempt?')) {
      deleteTestResult(id);
      onRefreshHistory();
    }
  };

  const handleClearAll = () => {
    if (window.confirm('Clear all test history?')) {
      clearAllHistory();
      onRefreshHistory();
    }
  };

  // Performance metrics across all tests
  const totalTests = history.length;
  const avgAccuracy = totalTests > 0 ? Math.round(history.reduce((acc, h) => acc + h.accuracy, 0) / totalTests) : 0;
  const bestScore = totalTests > 0 ? Math.max(...history.map(h => h.totalMarks)) : 0;
  const totalCorrect = totalTests > 0 ? history.reduce((acc, h) => acc + h.correctCount, 0) : 0;

  const sectionColors: Record<string, string> = {
    QA: 'bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800',
    VARC: 'bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
    DILR: 'bg-purple-50 dark:bg-purple-950/70 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800',
  };

  return (
    <div className="max-w-5xl mx-auto px-3 sm:px-4 py-5 sm:py-6 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 animate-in fade-in duration-200 transition-colors">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h1 className="text-xl md:text-2xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
            Tests Given
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            {totalTests} test attempts recorded
          </p>
        </div>

        {totalTests > 0 && (
          <button
            onClick={handleClearAll}
            className="self-start sm:self-center px-3 py-1.5 bg-rose-50 dark:bg-rose-950/60 hover:bg-rose-100 dark:hover:bg-rose-900/60 border border-rose-300 dark:border-rose-800 text-rose-700 dark:text-rose-300 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 shadow-2xs"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Clear History</span>
          </button>
        )}
      </div>

      {/* Overview Metric Cards */}
      {totalTests > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 mb-6">
          <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-3 sm:p-3.5 shadow-2xs">
            <span className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">Total Attempts</span>
            <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100 font-mono mt-0.5">
              {totalTests}
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-3 sm:p-3.5 shadow-2xs">
            <span className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">Average Accuracy</span>
            <div className="text-xl sm:text-2xl font-black text-emerald-700 dark:text-emerald-400 font-mono mt-0.5">
              {avgAccuracy}%
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-3 sm:p-3.5 shadow-2xs">
            <span className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">Highest Score</span>
            <div className="text-xl sm:text-2xl font-black text-blue-700 dark:text-blue-400 font-mono mt-0.5">
              {bestScore} <span className="text-xs font-normal text-slate-500 dark:text-slate-400">marks</span>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-3 sm:p-3.5 shadow-2xs">
            <span className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">Total Correct</span>
            <div className="text-xl sm:text-2xl font-black text-emerald-700 dark:text-emerald-400 font-mono mt-0.5">
              {totalCorrect}
            </div>
          </div>
        </div>
      )}

      {/* Section Filter Pills */}
      <div className="flex items-center gap-2 mb-6 overflow-x-auto no-scrollbar whitespace-nowrap pb-1 max-w-full">
        {(['ALL', 'QA', 'VARC', 'DILR'] as const).map((sec) => (
          <button
            key={sec}
            onClick={() => setSectionFilter(sec)}
            className={`shrink-0 px-3 py-1.5 rounded-lg text-xs font-bold transition ${
              sectionFilter === sec
                ? 'bg-slate-900 dark:bg-blue-600 text-white shadow-xs'
                : 'bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            {sec === 'ALL' ? 'All Sections' : sec}
          </button>
        ))}
      </div>

      {/* History List */}
      {filteredHistory.length === 0 ? (
        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-10 text-center text-slate-500 dark:text-slate-400">
          <p className="text-sm font-medium">No test attempts yet.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filteredHistory.map((item) => {
            const minutes = Math.floor(item.totalTimeSeconds / 60);
            const seconds = item.totalTimeSeconds % 60;

            return (
              <div
                key={item.id}
                onClick={() => onSelectResult(item)}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500 rounded-xl p-4 transition shadow-2xs hover:shadow-sm cursor-pointer group"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                  {/* Test Info */}
                  <div className="flex items-start gap-3">
                    <span
                      className={`px-2 py-0.5 rounded text-xs font-bold border shrink-0 ${
                        sectionColors[item.section] || 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      {item.section}
                    </span>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                        {item.testTitle}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        <span>
                          {new Date(item.timestamp).toLocaleDateString()} at{' '}
                          {new Date(item.timestamp).toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </span>
                        <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                          <Clock className="w-3 h-3 text-slate-400 dark:text-slate-500" />
                          <span>
                            {minutes}:{seconds < 10 ? `0${seconds}` : seconds} mins
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Metrics and Actions */}
                  <div className="flex flex-wrap items-center justify-between sm:justify-start gap-3 sm:gap-6 w-full md:w-auto pt-2.5 md:pt-0 border-t md:border-t-0 border-slate-100 dark:border-slate-800">
                    <div className="text-left sm:text-right">
                      <div className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400">Score</div>
                      <div className="text-sm sm:text-base font-black text-slate-900 dark:text-slate-100 font-mono">
                        {item.totalMarks}{' '}
                        <span className="text-xs font-normal text-slate-400 dark:text-slate-500">/ {item.maxMarks}</span>
                      </div>
                    </div>

                    <div className="text-center sm:text-right">
                      <div className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400">Correct / Wrong</div>
                      <div className="text-sm sm:text-base font-bold font-mono">
                        <span className="text-emerald-700 dark:text-emerald-400">{item.correctCount}</span>
                        <span className="text-slate-400 dark:text-slate-500 mx-1">/</span>
                        <span className="text-rose-700 dark:text-rose-400">{item.incorrectCount}</span>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400">Accuracy</div>
                      <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100 font-mono">
                        {item.accuracy}%
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-1.5 pl-2 border-l border-slate-200 dark:border-slate-800">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectResult(item);
                        }}
                        className="p-1.5 bg-blue-50 dark:bg-blue-950/70 hover:bg-blue-600 dark:hover:bg-blue-600 text-blue-700 dark:text-blue-300 hover:text-white rounded-lg text-xs font-semibold transition"
                        title="Review Responses"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onRetakeTest(item.testId);
                        }}
                        className="p-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-lg text-xs font-semibold transition"
                        title="Retake Test"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </button>

                      <button
                        onClick={(e) => handleDelete(e, item.id)}
                        className="p-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-rose-100 dark:hover:bg-rose-950/60 text-slate-400 dark:text-slate-500 hover:text-rose-700 dark:hover:text-rose-300 rounded-lg text-xs transition"
                        title="Delete Attempt"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
