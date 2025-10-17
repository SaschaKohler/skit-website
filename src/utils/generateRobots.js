/**
 * Dieses Skript generiert eine optimierte robots.txt-Datei
 * Führen Sie es mit "node generateRobots.js" aus
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Website-URL
const SITE_URL = 'https://skit.sascha-kohler.at';

// Robots.txt-Inhalt mit AI-Crawler Optimierung
function generateRobots() {
  const currentDate = new Date().toISOString().split('T')[0];
  
  let content = `# robots.txt für skit.sascha-kohler.at
# Letzte Aktualisierung: ${currentDate}
# Optimiert für klassische Suchmaschinen und AI-gestützte Crawler

# ========================================
# AI-Crawler explizit erlauben
# ========================================

# OpenAI GPT (ChatGPT, GPT-4)
User-agent: GPTBot
Allow: /
Crawl-delay: 1

# Anthropic Claude
User-agent: Claude-Web
Allow: /
Crawl-delay: 1

# Perplexity AI
User-agent: PerplexityBot
Allow: /
Crawl-delay: 1

# Google Bard / Gemini
User-agent: Google-Extended
Allow: /
Crawl-delay: 1

# Bing AI / Copilot
User-agent: BingPreview
Allow: /
Crawl-delay: 1

# Common Crawl (für AI Training)
User-agent: CCBot
Allow: /
Crawl-delay: 2

# ========================================
# Standard Suchmaschinen
# ========================================

# Google
User-agent: Googlebot
Allow: /
Crawl-delay: 1

# Bing
User-agent: Bingbot
Allow: /
Crawl-delay: 1

# DuckDuckGo
User-agent: DuckDuckBot
Allow: /
Crawl-delay: 1

# ========================================
# Alle anderen Bots
# ========================================

User-agent: *
Allow: /

# Wichtige Seiten explizit erlauben
Allow: /about
Allow: /services
Allow: /contact
Allow: /impressum
Allow: /datenschutz
Allow: /agb

# Block access to admin areas
Disallow: /admin/
Disallow: /wp-admin/
Disallow: /wp-login.php
Disallow: /api/private/

# Block specific file types
Disallow: /*.json$
Disallow: /*.log$
Disallow: /sitemap.xml.gz$
Disallow: /node_modules/
Disallow: /.git/

# Wichtige Dateien zulassen
Allow: /sitemap.xml
Allow: /robots.txt
Allow: /.well-known/

# Allow static assets
Allow: /static/
Allow: /images/
Allow: /img/
Allow: /css/
Allow: /js/
Allow: /assets/
Allow: /fonts/
Allow: /public/

# Standard Crawl-delay
Crawl-delay: 2

# ========================================
# Sitemaps
# ========================================

# Haupt-Sitemap
Sitemap: ${SITE_URL}/sitemap.xml`;

  return content;
}

// Robots.txt in Datei schreiben
const robots = generateRobots();
const outputPath = path.join(__dirname, '../../public/robots.txt');

fs.writeFileSync(outputPath, robots);
console.log(`robots.txt geschrieben nach: ${outputPath}`);
