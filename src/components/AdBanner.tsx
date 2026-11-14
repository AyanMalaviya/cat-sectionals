import React, { useState } from 'react';
import { ExternalLink, Sparkles, BookOpen, Calculator, Award, X, ChevronRight, Tag } from 'lucide-react';

export type AdSlotType = 'top-ticker' | 'dashboard-banner' | 'scorecard-banner' | 'sidebar-card';

interface AdBannerProps {
  slot: AdSlotType;
  customPublisherId?: string; // Optional Google AdSense ca-pub-xxx
  className?: string;
}

interface PromoCampaign {
  id: string;
  tag: string;
  badgeColor: string;
  title: string;
  description: string;
  ctaText: string;
  code?: string;
  url: string;
  icon: React.FC<{ className?: string }>;
}

const CAT_CAMPAIGNS: Record<AdSlotType, PromoCampaign> = {
  'top-ticker': {
    id: 'national-mocks-discount',
    tag: 'SPONSORED PARTNER',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
    title: 'Flat 40% OFF on All-India National CAT Mock Test Series',
    description: '30 Full-Length Mocks + Video Solutions by 99.9%ilers. Use coupon at checkout.',
    ctaText: 'Claim Offer',
    code: 'CATPORTAL40',
    url: 'https://iimcat.ac.in',
    icon: Sparkles,
  },
  'dashboard-banner': {
    id: 'iim-call-predictor',
    tag: 'RECOMMENDED RESOURCE',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
    title: 'Free IIM Call Predictor & Composite Score Calculator',
    description: 'Evaluate your shortlisting chances for IIM Ahmedabad, Bangalore, Calcutta, Lucknow, and Kozhikode based on 10th, 12th, graduation, category, and target sectional scores.',
    ctaText: 'Calculate IIM Calls Free',
    url: 'https://iimcat.ac.in',
    icon: Calculator,
  },
  'scorecard-banner': {
    id: 'sectional-score-booster',
    tag: 'SECTIONAL BOOSTER',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    title: 'Targeting 99+ %ile? Master Weak Areas with Targeted Video Sets',
    description: 'Get curated speed math shortcuts, DILR matrix frameworks, and philosophy RC decoding guides used by 99.8+ %ilers.',
    ctaText: 'Explore Mastery Sets',
    code: 'BOOST99',
    url: 'https://iimcat.ac.in',
    icon: Award,
  },
  'sidebar-card': {
    id: 'formula-cheat-sheet',
    tag: 'FREE DOWNLOAD',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
    title: '100 Essential CAT Formulas & Speed Math Shortcuts (PDF)',
    description: 'Geometry theorems, Algebra identities, Number theory remainders & PnC shortcuts in one printable handbook.',
    ctaText: 'Download Handbook',
    url: 'https://iimcat.ac.in',
    icon: BookOpen,
  },
};

export const AdBanner: React.FC<AdBannerProps> = ({ slot, customPublisherId, className = '' }) => {
  const [isDismissed, setIsDismissed] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  if (isDismissed) return null;

  const campaign = CAT_CAMPAIGNS[slot];
  const Icon = campaign.icon;

  const handleCopyCode = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (campaign.code) {
      navigator.clipboard.writeText(campaign.code);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  // Top Ticker / Header Strip
  if (slot === 'top-ticker') {
    return (
      <div className={`bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white px-4 py-2 text-xs flex items-center justify-between border-b border-blue-800/60 shadow-xs ${className}`}>
        <div className="flex items-center gap-2.5 mx-auto max-w-7xl flex-wrap justify-center text-center">
          <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-400 text-slate-950 uppercase tracking-wider">
            {campaign.tag}
          </span>
          <span className="font-semibold text-slate-100">{campaign.title}:</span>
          <span className="text-slate-300 hidden md:inline">{campaign.description}</span>
          {campaign.code && (
            <button
              onClick={handleCopyCode}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 border border-white/20 text-amber-300 font-mono font-bold transition"
              title="Click to copy coupon code"
            >
              <Tag className="w-3 h-3" />
              <span>{campaign.code}</span>
              <span className="text-[10px] text-slate-300">({copiedCode ? 'Copied!' : 'Copy'})</span>
            </button>
          )}
          <a
            href={campaign.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-bold text-amber-300 hover:text-white underline underline-offset-2 ml-1"
          >
            <span>{campaign.ctaText}</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
        <button
          onClick={() => setIsDismissed(true)}
          className="p-1 text-slate-400 hover:text-white hover:bg-white/10 rounded transition shrink-0 ml-2"
          title="Dismiss banner"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    );
  }

  // Dashboard & Scorecard Banner (Full Width Horizontal)
  if (slot === 'dashboard-banner' || slot === 'scorecard-banner') {
    return (
      <div className={`p-5 md:p-6 rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50/80 via-white to-indigo-50/50 shadow-xs relative overflow-hidden group hover:border-blue-400 transition-all duration-200 ${className}`}>
        {/* Subtle decorative background circle */}
        <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-blue-100/50 rounded-full blur-2xl pointer-events-none" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 relative z-10">
          <div className="flex items-start gap-4 flex-1">
            <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <Icon className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                <span className={`px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wide border ${campaign.badgeColor}`}>
                  {campaign.tag}
                </span>
                {campaign.code && (
                  <button
                    onClick={handleCopyCode}
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-amber-50 text-amber-800 border border-amber-300 hover:bg-amber-100 transition"
                  >
                    <Tag className="w-3 h-3 text-amber-600" />
                    <span>Use Code: {campaign.code}</span>
                    <span className="text-[10px] text-amber-600">{copiedCode ? '(Copied!)' : '(Click to Copy)'}</span>
                  </button>
                )}
              </div>
              <h4 className="text-base md:text-lg font-bold text-slate-900 group-hover:text-blue-700 transition">
                {campaign.title}
              </h4>
              <p className="text-xs md:text-sm text-slate-600 mt-1 leading-relaxed max-w-3xl">
                {campaign.description}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href={campaign.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-xs md:text-sm transition shadow-sm flex items-center justify-center gap-2"
            >
              <span>{campaign.ctaText}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Sidebar / Compact Card
  return (
    <div className={`p-4 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-blue-300 transition-all shadow-2xs ${className}`}>
      <div className="flex items-center justify-between mb-2">
        <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${campaign.badgeColor}`}>
          {campaign.tag}
        </span>
        <button
          onClick={() => setIsDismissed(true)}
          className="text-slate-400 hover:text-slate-600 transition"
          title="Dismiss"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
      <h5 className="font-bold text-sm text-slate-900 mb-1 leading-snug">
        {campaign.title}
      </h5>
      <p className="text-xs text-slate-600 mb-3 leading-relaxed">
        {campaign.description}
      </p>
      <a
        href={campaign.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-600"
      >
        <span>{campaign.ctaText}</span>
        <ChevronRight className="w-3.5 h-3.5" />
      </a>
    </div>
  );
};

export default AdBanner;
