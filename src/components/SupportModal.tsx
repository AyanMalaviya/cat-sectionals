import React, { useState } from 'react';
import { X, Heart, Copy, Check, ShieldCheck, Smartphone, ExternalLink } from 'lucide-react';

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SupportModal: React.FC<SupportModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const upiId = 'ayanmalaviya111@okhdfcbank';
  const upiLink = `upi://pay?pa=${upiId}&pn=Ayan%20Malaviya&cu=INR&tn=Support%20Free%20CAT%20Mocks`;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(upiLink)}&margin=10`;

  if (!isOpen) return null;

  const handleCopyUPI = async () => {
    try {
      await navigator.clipboard.writeText(upiId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white border border-slate-200 rounded-3xl max-w-md w-full max-h-[92vh] overflow-y-auto shadow-2xl text-slate-900 relative">
        {/* Top Header */}
        <div className="bg-gradient-to-r from-rose-500 via-pink-500 to-indigo-600 p-6 text-white text-center relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 bg-black/20 hover:bg-black/40 text-white rounded-full transition"
            title="Close"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md mx-auto flex items-center justify-center mb-3 shadow-inner">
            <Heart className="w-7 h-7 text-white fill-white" />
          </div>

          <h3 className="text-xl font-black tracking-tight">
            Support 100% Free Mock Tests
          </h3>
          <p className="text-xs text-rose-100 mt-1 max-w-xs mx-auto leading-relaxed">
            Help us keep 62+ CAT &amp; MBA mock tests free forever without expensive ₹10,000 paywalls.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 text-center">
          {/* Why We Need Support */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3.5 text-xs text-slate-600 leading-relaxed text-left">
            <p className="font-semibold text-slate-800 mb-1 flex items-center gap-1.5">
              <span>🎯</span> Our Open Mission:
            </p>
            Coaching platforms lure students with 1 free mock and lock the rest behind ₹5,000–₹15,000 paywalls. We keep authentic past year sectionals and practice tests 100% open to every student. Any contribution directly supports server and database costs.
          </div>

          {/* QR Code */}
          <div className="flex flex-col items-center justify-center">
            <div className="p-3 bg-white border-2 border-slate-200 rounded-2xl shadow-xs">
              <img
                src={qrCodeUrl}
                alt="UPI QR Code - ayanmalaviya111@okhdfcbank"
                className="w-44 h-44 object-contain rounded-lg"
                width={176}
                height={176}
              />
            </div>
            <span className="text-[11px] font-bold text-slate-500 mt-2 flex items-center gap-1">
              <Smartphone className="w-3.5 h-3.5 text-blue-600" />
              Scan with GPay, PhonePe, Paytm or BHIM
            </span>
          </div>

          {/* UPI ID Box with 1-Click Copy */}
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-between gap-2">
            <div className="text-left overflow-hidden">
              <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                UPI ID (Direct Transfer)
              </span>
              <span className="font-mono font-bold text-sm text-slate-900 truncate block">
                {upiId}
              </span>
            </div>

            <button
              onClick={handleCopyUPI}
              className={`px-3 py-1.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition shrink-0 ${
                copied
                  ? 'bg-emerald-600 text-white'
                  : 'bg-blue-600 hover:bg-blue-500 text-white shadow-2xs'
              }`}
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>

          {/* Direct Mobile UPI App Link */}
          <a
            href={upiLink}
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-sm transition"
          >
            <span>Open in UPI App (GPay / PhonePe / Paytm)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          {/* Safety Notice */}
          <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 font-medium pt-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>100% Safe via UPI • Direct bank transfer</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportModal;
