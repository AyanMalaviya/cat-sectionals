/**
 * Programmatic Advertising Configuration
 * 
 * Target Audience: CAT, MBA Aspirants, Students, Higher Education & EdTech.
 * 
 * High-Paying Programmatic Networks (No manual partnerships needed):
 * 1. Google AdSense (Recommended #1): Automatic auctions, highest fill rate, contextually serves
 *    MBA courses, study materials, colleges, and prep tools.
 * 2. Media.net (Yahoo! Bing network): Premium contextual education ads.
 * 3. EthicalAds / Carbon Ads: High-paying, privacy-safe automated student/tech ads.
 * 
 * To activate live Google AdSense:
 * 1. Replace `client` with your approved publisher ID: 'ca-pub-XXXXXXXXXXXXXXXX'
 * 2. Add your Ad Slot IDs created in your Google AdSense console.
 */

export interface AdsConfiguration {
  enabled: boolean;
  provider: 'adsense' | 'custom' | 'demo';
  googleAdSense: {
    client: string; // e.g. 'ca-pub-8711221458060472'
    slots: {
      dashboardLeaderboard: string;
      scorecardNative: string;
      sidebarRectangle: string;
      examBottomBar: string;
    };
  };
}

export const ADS_CONFIG: AdsConfiguration = {
  enabled: true,
  provider: 'adsense',
  googleAdSense: {
    client: 'ca-pub-8711221458060472',
    slots: {
      dashboardLeaderboard: '1860511928',
      scorecardNative: '9331807838',
      sidebarRectangle: '',
      examBottomBar: '',
    },
  },
};
