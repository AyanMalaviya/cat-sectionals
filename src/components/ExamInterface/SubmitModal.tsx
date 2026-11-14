import React from 'react';
import { Question, QuestionStatus } from '../../types';
import { AlertTriangle, CheckCircle } from 'lucide-react';

interface SubmitModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmSubmit: () => void;
  testTitle: string;
  section: string;
  questions: Question[];
  questionStatuses: Record<string, QuestionStatus>;
}

export const SubmitModal: React.FC<SubmitModalProps> = ({
  isOpen,
  onClose,
  onConfirmSubmit,
  testTitle,
  section,
  questions,
  questionStatuses,
}) => {
  if (!isOpen) return null;

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

  const totalAnsweredForEvaluation = counts.answered + counts.markedAnswered;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white border border-slate-200 rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl text-slate-900">
        {/* Header */}
        <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-700">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-base text-slate-900">Submit Sectional Mock Test</h3>
            <p className="text-xs text-slate-500">{testTitle}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-sm text-slate-700 mb-4 font-medium">
            Are you sure you want to submit?
          </p>

          {/* Exam Summary Table */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden mb-5">
            <table className="w-full text-xs">
              <thead className="bg-slate-100 text-slate-600 uppercase font-bold text-[10px] tracking-wider border-b border-slate-200">
                <tr>
                  <th className="py-2.5 px-3 text-left">Section</th>
                  <th className="py-2.5 px-2 text-center">Total</th>
                  <th className="py-2.5 px-2 text-center text-emerald-700">Answered</th>
                  <th className="py-2.5 px-2 text-center text-rose-700">Unanswered</th>
                  <th className="py-2.5 px-2 text-center text-purple-700">Marked</th>
                  <th className="py-2.5 px-2 text-center text-slate-600">Not Visited</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-medium">
                <tr>
                  <td className="py-3 px-3 font-bold text-slate-900">{section}</td>
                  <td className="py-3 px-2 text-center text-slate-700">{questions.length}</td>
                  <td className="py-3 px-2 text-center text-emerald-700 font-bold">
                    {totalAnsweredForEvaluation}
                  </td>
                  <td className="py-3 px-2 text-center text-rose-700">{counts.notAnswered}</td>
                  <td className="py-3 px-2 text-center text-purple-700">{counts.marked}</td>
                  <td className="py-3 px-2 text-center text-slate-600">{counts.notVisited}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 text-xs text-blue-900 flex items-start gap-2.5">
            <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <span>
              <strong>Note:</strong> Both 'Answered' and 'Answered & Marked for Review' ({totalAnsweredForEvaluation} questions) will be evaluated.
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 rounded-xl text-xs font-semibold transition"
          >
            Back to Test
          </button>
          <button
            onClick={onConfirmSubmit}
            className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition shadow-sm"
          >
            Confirm & Finish Test
          </button>
        </div>
      </div>
    </div>
  );
};
