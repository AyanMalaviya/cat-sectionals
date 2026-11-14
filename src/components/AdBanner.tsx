import React, { useEffect, useRef } from 'react';
import { ADS_CONFIG } from '../config/adsConfig';
import { Sparkles, Info } from 'lucide-react';

declare global {
  interface Window {
    adsbygoogle?: any[];
  }
}

export type AdSlotType = 'dashboard-leaderboard' | 'scorecard-native' | 'sidebar-rectangle';

interface AdBannerProps {
  slot: AdSlotType;
  className?: string;
}

export const AdBanner: React.FC<AdBannerProps> = ({ slot, className = '' }) => {
  const adRef = useRef<HTMLModElement | null>(null);
  const isRealAdSenseConfigured =
    ADS_CONFIG.enabled &&
    ADS_CONFIG.provider === 'adsense' &&
    ADS_CONFIG.googleAdSense.client !== 'ca-pub-XXXXXXXXXXXXXXXX';

  // Load Google AdSense script dynamically when publisher ID is configured
  useEffect(() => {
    if (!isRealAdSenseConfigured) return;

    const existingScript = document.querySelector('script[src*="adsbygoogle.js"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.async = true;
      script.crossOrigin = 'anonymous';
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADS_CONFIG.googleAdSense.client}`;
      document.head.appendChild(script);
    }

    try {
      if (typeof window !== 'undefined') {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (e) {
      console.warn('AdSense ad push warning:', e);
    }
  }, [isRealAdSenseConfigured, slot]);

  if (!ADS_CONFIG.enabled) return null;

  // Determine slot ID
  const getSlotId = () => {
    switch (slot) {
      case 'dashboard-leaderboard':
        return ADS_CONFIG.googleAdSense.slots.dashboardLeaderboard;
      case 'scorecard-native':
        return ADS_CONFIG.googleAdSense.slots.scorecardNative;
      case 'sidebar-rectangle':
        return ADS_CONFIG.googleAdSense.slots.sidebarRectangle;
      default:
        return ADS_CONFIG.googleAdSense.slots.dashboardLeaderboard;
    }
  };

  // REAL GOOGLE ADSENSE AD UNIT (Active when publisher ID is inserted in adsConfig.ts)
  if (isRealAdSenseConfigured) {
    return (
      <div className={`w-full my-4 flex flex-col items-center justify-center overflow-hidden ${className}`}>
        <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-1">
          Advertisement
        </span>
        <div className="w-full min-h-[90px] flex items-center justify-center bg-slate-50 border border-slate-200 rounded-xl overflow-hidden p-2">
          <ins
            ref={adRef}
            className="adsbygoogle w-full block text-center"
            style={{ display: 'block' }}
            data-ad-client={ADS_CONFIG.googleAdSense.client}
            data-ad-slot={getSlotId()}
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        </div>
      </div>
    );
  }

  // PROGRAMMATIC DEMO / PLACEHOLDER AD UNIT (For target audience: Higher Education, MBA Admissions, EdTech)
  // Shows clean, high-CPM contextual education display slots with instructions to plug in publisher ID
  if (slot === 'dashboard-leaderboard') {
    return (
      <div className={`w-full my-5 bg-gradient-to-r from-slate-50 via-blue-50/40 to-slate-50 border border-slate-200/90 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs relative overflow-hidden group hover:border-blue-300 transition-all ${className}`}>
        <div className="flex items-center gap-3.5 flex-1">
          <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-700 flex items-center justify-center shrink-0 border border-blue-200">
            <Sparkles className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[9px] font-extrabold uppercase tracking-widest text-slate-400 px-1.5 py-0.5 rounded bg-slate-200/60 border border-slate-300/50">
                Sponsored • High-CPM Target Audience
              </span>
              <span className="text-[10px] text-blue-600 font-semibold flex items-center gap-1">
                <Info className="w-3 h-3" /> Auto-Serving Education Ads
              </span>
            </div>
            <h4 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-700 transition">
              Top MBA Colleges & Executive Programs — Admissions Open
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Explore eligibility, placements, average CTC, and scholarship criteria for premier business schools.
            </p>
          </div>
        </div>

        <div className="shrink-0 flex items-center">
          <span className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition shadow-2xs cursor-pointer">
            Explore Programs
          </span>
        </div>
      </div>
    );
  }

  // Scorecard Native Banner (Post-submission ad slot)
  if (slot === 'scorecard-native') {
    return (
      <div className={`w-full my-6 bg-slate-50/80 border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-2xs hover:border-slate-300 transition-all ${className}`}>
        <div className="flex items-center justify-between mb-3 border-b border-slate-200/80 pb-2">
          <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
            Advertisement • Programmatic Display Unit
          </span>
          <span className="text-[11px] text-slate-500 font-medium">
            Google AdSense / Media.net Target Slot
          </span>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-slate-900">
              Data Science, Management Consulting & Leadership Certifications
            </h4>
            <p className="text-xs text-slate-600 max-w-2xl leading-relaxed">
              Accelerate your management career profile with industry-accredited business analytics and finance credentials.
            </p>
          </div>
          <span className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs shrink-0 transition cursor-pointer">
            View Details
          </span>
        </div>
      </div>
    );
  }

  // Sidebar Rectangle
  return (
    <div className={`w-full max-w-[300px] mx-auto p-4 bg-slate-50 border border-slate-200 rounded-xl text-center shadow-2xs ${className}`}>
      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-2">
        Advertisement
      </span>
      <div className="h-[200px] flex flex-col items-center justify-center p-3 border border-dashed border-slate-300 rounded-lg bg-white">
        <Sparkles className="w-6 h-6 text-blue-500 mb-2" />
        <h5 className="text-xs font-bold text-slate-800 mb-1">Programmatic Ad Unit</h5>
        <p className="text-[11px] text-slate-500">Auto-filled by Google AdSense / Media.net</p>
      </div>
    </div>
  );
};

export default AdBanner;
