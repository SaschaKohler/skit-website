/**
 * Dieses Skript generiert eine sitemap.xml-Datei für die Website
 * Führen Sie es mit "node generateSitemap.js" aus
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Website-URL
const SITE_URL = 'https://skit.sascha-kohler.at';

// Alle Routen der Webseite
const routes = [
  { path: '/', priority: 1.0, changefreq: 'weekly', lastmod: new Date().toISOString().split('T')[0] },
  { path: '/about', priority: 0.8, changefreq: 'monthly', lastmod: new Date().toISOString().split('T')[0] },
  { path: '/services', priority: 0.9, changefreq: 'monthly', lastmod: new Date().toISOString().split('T')[0] },
  { path: '/services/web-development', priority: 0.8, changefreq: 'monthly', lastmod: new Date().toISOString().split('T')[0] },
  { path: '/services/automation', priority: 0.8, changefreq: 'monthly', lastmod: new Date().toISOString().split('T')[0] },
  { path: '/services/api-integration', priority: 0.8, changefreq: 'monthly', lastmod: new Date().toISOString().split('T')[0] },
  { path: '/services/mobile-apps', priority: 0.8, changefreq: 'monthly', lastmod: new Date().toISOString().split('T')[0] },
  { path: '/contact', priority: 0.8, changefreq: 'monthly', lastmod: new Date().toISOString().split('T')[0] },
  { path: '/impressum', priority: 0.3, changefreq: 'yearly', lastmod: new Date().toISOString().split('T')[0] },
  { path: '/datenschutz', priority: 0.3, changefreq: 'yearly', lastmod: new Date().toISOString().split('T')[0] },
  { path: '/agb', priority: 0.3, changefreq: 'yearly', lastmod: new Date().toISOString().split('T')[0] },
];

// Bilder für spezifische Seiten
const images = {
  '/': [
    {
      loc: 'https://skit.sascha-kohler.at/img/hero-image.svg',
      title: 'WordPress Websites für mehr Online-Sichtbarkeit',
      caption: 'Professionelle Webpräsenz in 14 Tagen von Sascha Kohler'
    }
  ],
  '/about': [
    {
      loc: 'https://skit.sascha-kohler.at/img/og-image.jpg',
      title: 'Sascha Kohler - WordPress Experte für Online-Sichtbarkeit'
    }
  ],
  '/services': [
    {
      loc: 'https://skit.sascha-kohler.at/img/services/web-development.svg',
      title: 'WordPress Website Entwicklung in 14 Tagen'
    },
    {
      loc: 'https://skit.sascha-kohler.at/img/services/automation.svg',
      title: 'Online Marketing & Sichtbarkeit'
    }
  ]
};

// XML-Sitemap generieren
function generateSitemap() {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
  xml += '      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n';
  xml += '      xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"\n';
  xml += '      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9\n';
  xml += '            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n';

  routes.forEach(route => {
    xml += '  <url>\n';
    xml += `    <loc>${SITE_URL}${route.path}</loc>\n`;
    xml += `    <lastmod>${route.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;

    // Bilder hinzufügen, wenn vorhanden
    if (images[route.path]) {
      images[route.path].forEach(image => {
        xml += '    <image:image>\n';
        xml += `      <image:loc>${image.loc}</image:loc>\n`;
        xml += `      <image:title>${image.title}</image:title>\n`;
        if (image.caption) {
          xml += `      <image:caption>${image.caption}</image:caption>\n`;
        }
        xml += '    </image:image>\n';
      });
    }

    xml += '  </url>\n';
  });

  xml += '</urlset>';

  return xml;
}

// Sitemap in Datei schreiben
const sitemap = generateSitemap();
const outputPath = path.join(__dirname, '../../public/sitemap.xml');

fs.writeFileSync(outputPath, sitemap);
console.log(`Sitemap geschrieben nach: ${outputPath}`);
