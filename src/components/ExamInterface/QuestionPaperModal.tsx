import React, { useState } from 'react';
import { Question } from '../../types';
import { X, FileText, Copy, Check } from 'lucide-react';
import { MathText } from '../MathText';
import { formatQuestionForClipboard, copyTextToClipboard } from '../../utils/clipboard';

interface QuestionPaperModalProps {
  isOpen: boolean;
  onClose: () => void;
  questions: Question[];
  testTitle: string;
}

export const QuestionPaperModal: React.FC<QuestionPaperModalProps> = ({
  isOpen,
  onClose,
  questions,
  testTitle,
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyQuestion = async (q: Question) => {
    const text = formatQuestionForClipboard(q);
    const success = await copyTextToClipboard(text);
    if (success) {
      setCopiedId(q.id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white border border-slate-200 rounded-3xl max-w-4xl w-full h-[85vh] flex flex-col overflow-hidden shadow-2xl text-slate-900">
        {/* Header */}
        <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-sm md:text-base text-slate-900">Full Question Paper View</h3>
              <p className="text-xs text-slate-500">{testTitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-white">
          {questions.map((q, idx) => (
            <div key={q.id} className="p-4 bg-slate-50 border border-slate-200 rounded-2xl shadow-2xs">
              <div className="flex items-center justify-between mb-3 text-xs border-b border-slate-200 pb-2">
                <span className="font-bold text-blue-700">
                  Question {idx + 1} ({q.type})
                </span>
                <div className="flex items-center gap-3">
                  <span className="text-slate-500">
                    Topic: <strong className="text-slate-800">{q.topic}</strong>
                  </span>
                  <button
                    onClick={() => handleCopyQuestion(q)}
                    className="flex items-center gap-1 px-2 py-0.5 rounded border border-slate-300 text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-50 text-[11px] font-medium transition shadow-2xs"
                    title="Copy Question"
                  >
                    {copiedId === q.id ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedId === q.id ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              {(q.passage || q.context) && (
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 mb-3 text-xs text-slate-800 font-serif whitespace-pre-line leading-relaxed max-h-48 overflow-y-auto">
                  <MathText text={q.passage || q.context} />
                </div>
              )}

              <p className="text-sm text-slate-900 mb-4 whitespace-pre-line font-medium leading-relaxed">
                <MathText text={q.question} />
              </p>

              {q.type === 'MCQ' && q.options && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {q.options.map((opt, optIdx) => (
                    <div
                      key={optIdx}
                      className="p-2.5 rounded-lg bg-white border border-slate-200 text-slate-700 flex items-start gap-2"
                    >
                      <span className="font-bold text-slate-500">{String.fromCharCode(65 + optIdx)}.</span>
                      <span><MathText text={opt} /></span>
                    </div>
                  ))}
                </div>
              )}

              {q.type === 'TITA' && (
                <div className="text-xs text-amber-700 italic font-medium">
                  [Non-MCQ: Type in the answer]
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold transition shadow-xs"
          >
            Close Paper View
          </button>
        </div>
      </div>
    </div>
  );
};
