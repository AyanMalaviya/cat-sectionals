import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// 1. App Icon SVG (512x512 square format)
const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e3a8a" />
      <stop offset="50%" stop-color="#1d4ed8" />
      <stop offset="100%" stop-color="#0f172a" />
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fbbf24" />
      <stop offset="100%" stop-color="#d97706" />
    </linearGradient>
    <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="100%" stop-color="#818cf8" />
    </linearGradient>
    <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.35" />
    </filter>
  </defs>

  <!-- Background Base with rounded corners -->
  <rect width="512" height="512" rx="108" fill="url(#bgGrad)" />
  
  <!-- Subtle Inner Border Highlight -->
  <rect x="12" y="12" width="488" height="488" rx="98" fill="none" stroke="rgba(255, 255, 255, 0.15)" stroke-width="4" />

  <!-- Outer Dial / CBT Timer Arc (representing 40-minute sectional countdown) -->
  <circle cx="256" cy="246" r="168" fill="none" stroke="rgba(255, 255, 255, 0.08)" stroke-width="14" />
  <path d="M 256 78 A 168 168 0 1 1 108 324" fill="none" stroke="url(#goldGrad)" stroke-width="14" stroke-linecap="round" />
  
  <!-- Dial Tick Marks -->
  <circle cx="256" cy="98" r="4" fill="#fbbf24" />
  <circle cx="404" cy="246" r="4" fill="#fbbf24" />
  <circle cx="256" cy="394" r="4" fill="#fbbf24" />
  <circle cx="108" cy="246" r="4" fill="#fbbf24" />

  <!-- Center Badge Glow & Shadow -->
  <g filter="url(#dropShadow)">
    <!-- Stylized Academic Cap / Peak (Signifying IIM / Top Percentile) -->
    <path d="M 256 128 L 366 178 L 256 228 L 146 178 Z" fill="#ffffff" />
    <!-- Cap Underbody / Tier -->
    <path d="M 186 200 L 186 242 Q 256 280 326 242 L 326 200 Q 256 235 186 200 Z" fill="url(#goldGrad)" />
    <!-- Tassel -->
    <path d="M 366 178 Q 386 220 376 264" fill="none" stroke="#fbbf24" stroke-width="6" stroke-linecap="round" />
    <circle cx="376" cy="268" r="6" fill="#fbbf24" />
  </g>

  <!-- Bold Monogram: "CAT" -->
  <text x="256" y="348" font-family="'Inter', -apple-system, sans-serif" font-size="94" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="4">CAT</text>

  <!-- CBT Sub-Badge Pill -->
  <g transform="translate(196, 374)">
    <rect width="120" height="36" rx="18" fill="url(#goldGrad)" />
    <text x="60" y="24" font-family="'Inter', -apple-system, sans-serif" font-size="18" font-weight="900" fill="#0f172a" text-anchor="middle" letter-spacing="3">CBT</text>
  </g>

  <!-- Subtle Speed Arrow / Bolt Accent -->
  <polygon points="340,320 358,335 344,337 352,354 336,339 344,337" fill="#38bdf8" opacity="0.9" />
</svg>`;

// 2. Maskable Icon SVG (with extra safe zone padding for Android 512x512)
const maskableIconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="bgGradMask" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e3a8a" />
      <stop offset="50%" stop-color="#1d4ed8" />
      <stop offset="100%" stop-color="#0f172a" />
    </linearGradient>
    <linearGradient id="goldGradMask" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fbbf24" />
      <stop offset="100%" stop-color="#d97706" />
    </linearGradient>
    <filter id="dropShadowMask" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="6" stdDeviation="10" flood-color="#000000" flood-opacity="0.35" />
    </filter>
  </defs>

  <!-- Full Bleed Square Background for Maskable Icon -->
  <rect width="512" height="512" fill="url(#bgGradMask)" />

  <!-- Scaled Content (80% inside safe zone 512 * 0.8 = 410) -->
  <g transform="translate(51, 51) scale(0.8)">
    <!-- Outer Dial / CBT Timer Arc -->
    <circle cx="256" cy="246" r="168" fill="none" stroke="rgba(255, 255, 255, 0.12)" stroke-width="16" />
    <path d="M 256 78 A 168 168 0 1 1 108 324" fill="none" stroke="url(#goldGradMask)" stroke-width="16" stroke-linecap="round" />
    
    <g filter="url(#dropShadowMask)">
      <path d="M 256 128 L 366 178 L 256 228 L 146 178 Z" fill="#ffffff" />
      <path d="M 186 200 L 186 242 Q 256 280 326 242 L 326 200 Q 256 235 186 200 Z" fill="url(#goldGradMask)" />
      <path d="M 366 178 Q 386 220 376 264" fill="none" stroke="#fbbf24" stroke-width="7" stroke-linecap="round" />
      <circle cx="376" cy="268" r="7" fill="#fbbf24" />
    </g>

    <text x="256" y="348" font-family="'Inter', -apple-system, sans-serif" font-size="94" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="4">CAT</text>

    <g transform="translate(196, 374)">
      <rect width="120" height="38" rx="19" fill="url(#goldGradMask)" />
      <text x="60" y="25" font-family="'Inter', -apple-system, sans-serif" font-size="19" font-weight="900" fill="#0f172a" text-anchor="middle" letter-spacing="3">CBT</text>
    </g>
  </g>
</svg>`;

// 3. OpenGraph 1200x630 Social Banner SVG
const ogBannerSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>
    <linearGradient id="ogBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="40%" stop-color="#1e293b" />
      <stop offset="100%" stop-color="#090d16" />
    </linearGradient>
    <linearGradient id="ogGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fbbf24" />
      <stop offset="100%" stop-color="#f59e0b" />
    </linearGradient>
    <linearGradient id="ogBlue" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="100%" stop-color="#2563eb" />
    </linearGradient>
    <filter id="ogShadow">
      <feDropShadow dx="0" dy="12" stdDeviation="20" flood-color="#000000" flood-opacity="0.5" />
    </filter>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#ogBg)" />

  <!-- Subtle Geometric Grid / Accents -->
  <circle cx="1100" cy="100" r="300" fill="none" stroke="rgba(56, 189, 248, 0.08)" stroke-width="2" />
  <circle cx="1100" cy="100" r="200" fill="none" stroke="rgba(251, 191, 36, 0.08)" stroke-width="2" />
  <circle cx="100" cy="550" r="250" fill="none" stroke="rgba(37, 99, 235, 0.1)" stroke-width="2" />

  <!-- Left: Stylized CAT CBT Shield / Emblem -->
  <g transform="translate(100, 140)" filter="url(#ogShadow)">
    <rect width="320" height="320" rx="68" fill="#1e3a8a" />
    <rect x="8" y="8" width="304" height="304" rx="60" fill="none" stroke="rgba(255, 255, 255, 0.2)" stroke-width="3" />
    
    <!-- Outer Timer Arc -->
    <circle cx="160" cy="154" r="105" fill="none" stroke="rgba(255, 255, 255, 0.1)" stroke-width="9" />
    <path d="M 160 49 A 105 105 0 1 1 68 203" fill="none" stroke="url(#ogGold)" stroke-width="9" stroke-linecap="round" />

    <!-- Cap -->
    <path d="M 160 80 L 228 111 L 160 142 L 92 111 Z" fill="#ffffff" />
    <path d="M 116 125 L 116 151 Q 160 175 204 151 L 204 125 Q 160 147 116 125 Z" fill="url(#ogGold)" />
    
    <!-- Big Text -->
    <text x="160" y="218" font-family="'Inter', sans-serif" font-size="58" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="3">CAT</text>

    <!-- CBT Pill -->
    <g transform="translate(122, 235)">
      <rect width="76" height="24" rx="12" fill="url(#ogGold)" />
      <text x="38" y="16" font-family="'Inter', sans-serif" font-size="12" font-weight="900" fill="#0f172a" text-anchor="middle" letter-spacing="2">CBT</text>
    </g>
  </g>

  <!-- Right: Title & Feature Details -->
  <g transform="translate(480, 175)">
    <!-- Top Pill Badge -->
    <g>
      <rect width="280" height="34" rx="17" fill="rgba(56, 189, 248, 0.12)" stroke="rgba(56, 189, 248, 0.3)" stroke-width="1.5" />
      <text x="140" y="22" font-family="'Inter', sans-serif" font-size="12" font-weight="800" fill="#38bdf8" text-anchor="middle" letter-spacing="2">REAL TCS iON CBT SIMULATION</text>
    </g>

    <!-- Main Title -->
    <text x="0" y="100" font-family="'Inter', sans-serif" font-size="52" font-weight="900" fill="#ffffff" letter-spacing="-1">CAT Mock Test CBT</text>
    <text x="0" y="152" font-family="'Inter', sans-serif" font-size="32" font-weight="700" fill="url(#ogGold)">Free Sectional Mocks &amp; Practice Portal</text>

    <!-- Feature Checklist -->
    <g transform="translate(0, 195)">
      <!-- Item 1 -->
      <circle cx="12" cy="12" r="10" fill="#10b981" />
      <path d="M 8 12 L 11 15 L 16 9" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
      <text x="32" y="17" font-family="'Inter', sans-serif" font-size="18" font-weight="600" fill="#e2e8f0">40-Min Authentic Sectionals (QA, DILR, VARC)</text>

      <!-- Item 2 -->
      <circle cx="12" cy="48" r="10" fill="#10b981" />
      <path d="M 8 48 L 11 51 L 16 45" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
      <text x="32" y="53" font-family="'Inter', sans-serif" font-size="18" font-weight="600" fill="#e2e8f0">Authentic Past Year Papers (2020 – 2026 Mocks)</text>

      <!-- Item 3 -->
      <circle cx="12" cy="84" r="10" fill="#10b981" />
      <path d="M 8 84 L 11 87 L 16 81" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
      <text x="32" y="89" font-family="'Inter', sans-serif" font-size="18" font-weight="600" fill="#e2e8f0">On-Screen Virtual Calculator &amp; Instant Analytics</text>
    </g>
  </g>

  <!-- Bottom URL / Branding bar -->
  <rect y="590" width="1200" height="40" fill="rgba(0, 0, 0, 0.4)" />
  <text x="600" y="615" font-family="'Inter', sans-serif" font-size="14" font-weight="700" fill="#94a3b8" text-anchor="middle" letter-spacing="2">100% FREE • NO SIGNUP REQUIRED • CAT-SECTIONALS.VERCEL.APP</text>
</svg>`;

async function generateAllAssets() {
  const publicDir = path.resolve('public');
  const srcAssetsDir = path.resolve('src/assets');

  // Ensure directories exist
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
  if (!fs.existsSync(srcAssetsDir)) fs.mkdirSync(srcAssetsDir, { recursive: true });

  // 1. Write SVGs
  fs.writeFileSync(path.join(publicDir, 'logo.svg'), iconSvg, 'utf8');
  fs.writeFileSync(path.join(publicDir, 'favicon.svg'), iconSvg, 'utf8');
  fs.writeFileSync(path.join(srcAssetsDir, 'logo.svg'), iconSvg, 'utf8');

  // 2. Generate PNG Favicons
  console.log('Generating favicon-16x16.png...');
  await sharp(Buffer.from(iconSvg)).resize(16, 16).png().toFile(path.join(publicDir, 'favicon-16x16.png'));

  console.log('Generating favicon-32x32.png...');
  await sharp(Buffer.from(iconSvg)).resize(32, 32).png().toFile(path.join(publicDir, 'favicon-32x32.png'));

  console.log('Generating apple-touch-icon.png (180x180)...');
  await sharp(Buffer.from(iconSvg)).resize(180, 180).png().toFile(path.join(publicDir, 'apple-touch-icon.png'));

  // 3. Generate PWA Icons
  console.log('Generating pwa-192x192.png...');
  await sharp(Buffer.from(iconSvg)).resize(192, 192).png().toFile(path.join(publicDir, 'pwa-192x192.png'));

  console.log('Generating pwa-512x512.png...');
  await sharp(Buffer.from(iconSvg)).resize(512, 512).png().toFile(path.join(publicDir, 'pwa-512x512.png'));

  console.log('Generating pwa-maskable-512x512.png...');
  await sharp(Buffer.from(maskableIconSvg)).resize(512, 512).png().toFile(path.join(publicDir, 'pwa-maskable-512x512.png'));

  // 4. Generate OpenGraph 1200x630 Social Banner
  console.log('Generating og-image.png (1200x630)...');
  await sharp(Buffer.from(ogBannerSvg)).resize(1200, 630).png().toFile(path.join(publicDir, 'og-image.png'));

  console.log('All logo and PWA icon assets generated successfully!');
}

generateAllAssets().catch((err) => {
  console.error('Error generating assets:', err);
  process.exit(1);
});
