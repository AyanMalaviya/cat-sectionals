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
    QA: 'bg-blue-50 text-blue-700 border-blue-200',
    VARC: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    DILR: 'bg-purple-50 text-purple-700 border-purple-200',
  };

  return (
    <div className="max-w-5xl mx-auto px-3 sm:px-4 py-5 sm:py-6 bg-white text-slate-900 animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200">
        <div>
          <h1 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
            Tests Given
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            {totalTests} test attempts recorded
          </p>
        </div>

        {totalTests > 0 && (
          <button
            onClick={handleClearAll}
            className="self-start sm:self-center px-3 py-1.5 bg-rose-50 hover:bg-rose-100 border border-rose-300 text-rose-700 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 shadow-2xs"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Clear History</span>
          </button>
        )}
      </div>

      {/* Overview Metric Cards */}
      {totalTests > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 mb-6">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 sm:p-3.5 shadow-2xs">
            <span className="text-[11px] sm:text-xs text-slate-500 font-medium">Total Attempts</span>
            <div className="text-xl sm:text-2xl font-black text-slate-900 font-mono mt-0.5">
              {totalTests}
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 sm:p-3.5 shadow-2xs">
            <span className="text-[11px] sm:text-xs text-slate-500 font-medium">Average Accuracy</span>
            <div className="text-xl sm:text-2xl font-black text-emerald-700 font-mono mt-0.5">
              {avgAccuracy}%
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 sm:p-3.5 shadow-2xs">
            <span className="text-[11px] sm:text-xs text-slate-500 font-medium">Highest Score</span>
            <div className="text-xl sm:text-2xl font-black text-blue-700 font-mono mt-0.5">
              {bestScore} <span className="text-xs font-normal text-slate-500">marks</span>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 sm:p-3.5 shadow-2xs">
            <span className="text-[11px] sm:text-xs text-slate-500 font-medium">Total Correct</span>
            <div className="text-xl sm:text-2xl font-black text-emerald-700 font-mono mt-0.5">
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
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-white border border-slate-300 text-slate-700 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            {sec === 'ALL' ? 'All Sections' : sec}
          </button>
        ))}
      </div>

      {/* History List */}
      {filteredHistory.length === 0 ? (
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-10 text-center text-slate-500">
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
                className="bg-white border border-slate-200 hover:border-blue-400 rounded-xl p-4 transition shadow-2xs hover:shadow-sm cursor-pointer group"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                  {/* Test Info */}
                  <div className="flex items-start gap-3">
                    <span
                      className={`px-2 py-0.5 rounded text-xs font-bold border shrink-0 ${
                        sectionColors[item.section] || 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {item.section}
                    </span>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm group-hover:text-blue-600 transition">
                        {item.testTitle}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500 mt-0.5">
                        <span>
                          {new Date(item.timestamp).toLocaleDateString()} at{' '}
                          {new Date(item.timestamp).toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </span>
                        <span className="flex items-center gap-1 text-slate-500">
                          <Clock className="w-3 h-3 text-slate-400" />
                          <span>
                            {minutes}:{seconds < 10 ? `0${seconds}` : seconds} mins
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Metrics and Actions */}
                  <div className="flex flex-wrap items-center justify-between sm:justify-start gap-3 sm:gap-6 w-full md:w-auto pt-2.5 md:pt-0 border-t md:border-t-0 border-slate-100">
                    <div className="text-left sm:text-right">
                      <div className="text-[10px] sm:text-[11px] text-slate-500">Score</div>
                      <div className="text-sm sm:text-base font-black text-slate-900 font-mono">
                        {item.totalMarks}{' '}
                        <span className="text-xs font-normal text-slate-400">/ {item.maxMarks}</span>
                      </div>
                    </div>

                    <div className="text-center sm:text-right">
                      <div className="text-[10px] sm:text-[11px] text-slate-500">Correct / Wrong</div>
                      <div className="text-sm sm:text-base font-bold font-mono">
                        <span className="text-emerald-700">{item.correctCount}</span>
                        <span className="text-slate-400 mx-1">/</span>
                        <span className="text-rose-700">{item.incorrectCount}</span>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-[10px] sm:text-[11px] text-slate-500">Accuracy</div>
                      <div className="text-sm sm:text-base font-bold text-slate-900 font-mono">
                        {item.accuracy}%
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-1.5 pl-2 border-l border-slate-200">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectResult(item);
                        }}
                        className="p-1.5 bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white rounded-lg text-xs font-semibold transition"
                        title="Review Responses"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onRetakeTest(item.testId);
                        }}
                        className="p-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold transition"
                        title="Retake Test"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </button>

                      <button
                        onClick={(e) => handleDelete(e, item.id)}
                        className="p-1.5 bg-slate-100 hover:bg-rose-100 text-slate-400 hover:text-rose-700 rounded-lg text-xs transition"
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
