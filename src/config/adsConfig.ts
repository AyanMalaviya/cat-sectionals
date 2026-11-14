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
    client: string; // e.g. 'ca-pub-1234567890123456'
    slots: {
      dashboardLeaderboard: string; // e.g. '1234567890'
      scorecardNative: string;      // e.g. '9876543210'
      sidebarRectangle: string;     // e.g. '5544332211'
    };
  };
}

export const ADS_CONFIG: AdsConfiguration = {
  enabled: true,
  // Change to 'adsense' when your AdSense account is approved
  provider: 'adsense',
  googleAdSense: {
    client: 'ca-pub-XXXXXXXXXXXXXXXX', // Paste your AdSense Publisher ID here
    slots: {
      dashboardLeaderboard: '1234567890',
      scorecardNative: '9876543210',
      sidebarRectangle: '5544332211',
    },
  },
};
