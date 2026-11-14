import React, { useEffect, useRef } from 'react';
import { ADS_CONFIG } from '../config/adsConfig';

declare global {
  interface Window {
    adsbygoogle?: any[];
  }
}

export type AdSlotType =
  | 'bottom-leaderboard'
  | 'side-rail-left'
  | 'side-rail-right'
  | 'scorecard-bottom'
  | 'exam-bottom-bar';

interface AdBannerProps {
  slot: AdSlotType;
  className?: string;
}

export const AdBanner: React.FC<AdBannerProps> = ({ slot, className = '' }) => {
  const adRef = useRef<HTMLModElement | null>(null);

  // Check if real Google AdSense publisher credentials are provided
  const isRealAdSenseConfigured =
    ADS_CONFIG.enabled &&
    ADS_CONFIG.provider === 'adsense' &&
    Boolean(ADS_CONFIG.googleAdSense.client) &&
    ADS_CONFIG.googleAdSense.client !== 'ca-pub-XXXXXXXXXXXXXXXX';

  // Load Google AdSense script only when real publisher credentials exist
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

  // If real ads are not configured, render NOTHING (no placeholders, no empty boxes)
  if (!isRealAdSenseConfigured) {
    return null;
  }

  // Determine slot ID from configuration (if created in AdSense console)
  const getSlotId = (): string => {
    switch (slot) {
      case 'bottom-leaderboard':
        return ADS_CONFIG.googleAdSense.slots.dashboardLeaderboard;
      case 'scorecard-bottom':
        return ADS_CONFIG.googleAdSense.slots.scorecardNative;
      case 'side-rail-left':
      case 'side-rail-right':
        return ADS_CONFIG.googleAdSense.slots.sidebarRectangle;
      case 'exam-bottom-bar':
        return ADS_CONFIG.googleAdSense.slots.examBottomBar;
      default:
        return '';
    }
  };

  const slotId = getSlotId();

  // Thin, non-intrusive bottom bar during exam simulation
  if (slot === 'exam-bottom-bar') {
    return (
      <div
        className={`w-full bg-slate-50 border-t border-slate-200 px-4 py-1 flex items-center justify-center shrink-0 z-20 ${className}`}
        aria-label="Sponsored"
      >
        <div className="w-full max-w-4xl min-h-[50px] max-h-[60px] flex items-center justify-center overflow-hidden">
          <ins
            ref={adRef}
            className="adsbygoogle block w-full text-center"
            style={{ display: 'inline-block', width: '100%', height: '50px' }}
            data-ad-client={ADS_CONFIG.googleAdSense.client}
            {...(slotId ? { 'data-ad-slot': slotId } : {})}
            data-ad-format="horizontal"
            data-full-width-responsive="false"
          />
        </div>
      </div>
    );
  }

  // Side Rail Slots (Fixed to left and right margins on widescreen displays)
  if (slot === 'side-rail-left' || slot === 'side-rail-right') {
    return (
      <aside
        className={`hidden 2xl:flex flex-col items-center justify-start w-[160px] min-h-[600px] shrink-0 sticky top-20 ${className}`}
        aria-label="Advertisement"
      >
        <span className="text-[9px] uppercase font-bold tracking-widest text-slate-400 mb-1">
          Advertisement
        </span>
        <div className="w-[160px] min-h-[600px] bg-slate-50 border border-slate-200 rounded-xl overflow-hidden p-1 flex items-center justify-center">
          <ins
            ref={adRef}
            className="adsbygoogle"
            style={{ display: 'inline-block', width: '160px', height: '600px' }}
            data-ad-client={ADS_CONFIG.googleAdSense.client}
            {...(slotId ? { 'data-ad-slot': slotId } : {})}
          />
        </div>
      </aside>
    );
  }

  // Bottom Slots (Footer / Bottom of Dashboard or Scorecard)
  return (
    <div
      className={`w-full flex flex-col items-center justify-center overflow-hidden my-8 ${className}`}
      aria-label="Advertisement"
    >
      <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-1">
        Advertisement
      </span>
      <div className="w-full max-w-4xl min-h-[90px] flex items-center justify-center bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden p-2 shadow-2xs">
        <ins
          ref={adRef}
          className="adsbygoogle w-full block text-center"
          style={{ display: 'block' }}
          data-ad-client={ADS_CONFIG.googleAdSense.client}
          {...(slotId ? { 'data-ad-slot': slotId } : {})}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </div>
  );
};

export default AdBanner;
