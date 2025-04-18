/**
 * Dieses Skript generiert eine optimierte robots.txt-Datei
 * Führen Sie es mit "node generateRobots.js" aus
 */

const fs = require('fs');
const path = require('path');

// Website-URL
const SITE_URL = 'https://skit.sascha-kohler.at';

// Robots.txt-Inhalt
function generateRobots() {
  const currentDate = new Date().toISOString().split('T')[0];
  
  let content = `# robots.txt für skit.sascha-kohler.at
# Letzte Aktualisierung: ${currentDate}

User-agent: *
Allow: /

# Wichtige Seiten
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

# Block specific file types
Disallow: /*.json$
Disallow: /*.log$
Disallow: /sitemap.xml.gz$
Disallow: /node_modules/

# Wichtige Dateien zulassen
Allow: /sitemap.xml
Allow: /robots.txt

# Allow static assets
Allow: /static/
Allow: /images/
Allow: /img/
Allow: /css/
Allow: /js/
Allow: /assets/
Allow: /fonts/

# Crawl-delay für bessere Server Performance
Crawl-delay: 5

# Sitemap
Sitemap: ${SITE_URL}/sitemap.xml`;

  return content;
}

// Robots.txt in Datei schreiben
const robots = generateRobots();
const outputPath = path.join(__dirname, '../../public/robots.txt');

fs.writeFileSync(outputPath, robots);
console.log(`robots.txt geschrieben nach: ${outputPath}`);
