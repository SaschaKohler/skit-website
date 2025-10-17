/**
 * SEO-Utility-Funktionen für die Website
 */

interface PageMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

// Standard-Metadaten für die Website - AI-optimiert
const DEFAULT_METADATA: PageMetadata = {
  title: 'WordPress Websites für Gründer:innen in 14 Tagen | Digitaler Mentor Sascha Kohler | sk.IT Software',
  description: 'Professionelle WordPress-Website in nur 14 Tagen für Unternehmensgründer:innen und Einzelunternehmer:innen in Österreich. Komplette digitale Grundausstattung: WordPress, Google Analytics & Tag Manager, GDPR Consent V2, Email-Marketing mit Brevo, Automatisierung mit make.com. Als dipl. Lebens- und Sozialberater, NLP-Trainer und Coach verstehe ich die Herausforderungen der Gründungsphase aus eigener Erfahrung. Speziell für AMS Unternehmer-Gründer-Programm Teilnehmer:innen. Kostenloses Erstgespräch.',
  keywords: [
    'WordPress für Gründer:innen Österreich',
    'WordPress Website 14 Tage', 
    'Unternehmensgründung Online-Präsenz', 
    'GDPR Compliance Website',
    'Google Analytics Setup Gründer', 
    'Digitaler Mentor Gründung', 
    'AMS Unternehmer-Gründer-Programm',
    'Website Einzelunternehmer:innen',
    'DSGVO konforme Website',
    'Email-Marketing Brevo Setup',
    'Prozessautomatisierung make.com',
    'SEO Management Österreich',
    'Lebens- und Sozialberater IT',
    'WordPress Entwickler Oberösterreich',
    'Website Schwertberg',
    'Sascha Kohler',
    'sk.IT Software'
  ],
  ogTitle: 'WordPress Websites für Gründer:innen in 14 Tagen | Ihr digitaler Mentor',
  ogDescription: 'Komplette digitale Grundausstattung für Ihre Gründung: WordPress, Google Services, GDPR & Email-Marketing. Als dipl. Lebens- und Sozialberater begleite ich Sie nicht nur technisch, sondern auch menschlich durch die Gründungsphase.',
  ogImage: 'https://skit.sascha-kohler.at/img/og-image.jpg',
  canonicalUrl: 'https://skit.sascha-kohler.at'
};

// Seitenspezifische Metadaten
const PAGE_METADATA: Record<string, PageMetadata> = {
  '/': DEFAULT_METADATA,
  
  '/about': {
    title: 'Über Sascha Kohler | Web-Entwickler seit den 90ern & dipl. Lebens-/Sozialberater',
    description: 'Sascha Kohler vereint drei einzigartige Kompetenzen: 1) Technische Expertise als Web-Entwickler seit den frühen 90er Jahren mit Spezialisierung auf WordPress, React, TypeScript, WebGL und KI-gestützte Anwendungen. 2) Digitale Kompetenz im WordPress- und Google-Ökosystem, Automatisierung und GDPR-Compliance. 3) Menschliche Kompetenz als dipl. Lebens- und Sozialberater, NLP-Trainer, Coach und Mentaltrainer. Als selbst Einzelunternehmer:in in den Bereichen Digitales Business, Coaching und Training kenne ich die Herausforderungen der Gründungsphase aus eigener Erfahrung. Ich begleite Sie nicht nur technisch, sondern auch menschlich und strategisch auf Ihrem Weg in die digitale Selbständigkeit.',
    keywords: [
      'Sascha Kohler Schwertberg', 
      'Digitaler Mentor Gründer:innen', 
      'Lebens- und Sozialberater IT', 
      'WordPress Experte Oberösterreich',
      'Web-Entwickler seit 1990',
      'React TypeScript Entwickler',
      'WebGL Three.js Spezialist',
      'NLP-Trainer IT',
      'Coach Gründer:innen',
      'Mentaltrainer Selbständige',
      'Einzelunternehmer:in Österreich',
      'AMS Gründerprogramm Mentor',
      'GDPR Compliance Experte',
      'SEO Management Spezialist',
      'Google Analytics Spezialist'
    ],
    ogTitle: 'Sascha Kohler | Ihr digitaler Mentor mit Herz und Kompetenz',
    ogDescription: 'Web-Entwickler seit den 90ern + dipl. Lebens- und Sozialberater + selbst Einzelunternehmer:in = Ihre einzigartige Begleitung für den sicheren Start in die digitale Welt.',
    canonicalUrl: 'https://skit.sascha-kohler.at/about'
  },
  
  '/services': {
    title: 'Digitale Grundausstattung für Gründer:innen | WordPress, Google, GDPR, SEO Management',
    description: 'Komplettes Service-Portfolio für Ihren digitalen Start: 1) WordPress-Website mit responsivem Design, professionell und einfach bedienbar, SEO-optimiert. 2) Google Services Setup: Analytics, Tag Manager, Unternehmensprofil, Search Console. 3) GDPR & Datenschutz: Cookie-Banner (GDPR Consent V2), Datenschutzerklärung, Impressum, AGB - rechtssicher durchstarten. 4) Email-Marketing mit Brevo: Newsletter-Setup, automatisierte Kampagnen. 5) Prozessautomatisierung mit make.com: Workflows, Zeitersparnis. 6) SEO-Management: Laufende Optimierung, damit Sie gefunden werden. 7) Mentoring & Beratung: Ganzheitliche Begleitung als dipl. Lebens- und Sozialberater. Optional: Individuelle Entwicklung mit React, TypeScript, WebGL, KI-Integration. Alles aus einer Hand, keine Vorkenntnisse nötig.',
    keywords: [
      'WordPress Website Gründer:innen Österreich',
      'Google Analytics Setup Service', 
      'Google Tag Manager Einrichtung', 
      'GDPR Cookie-Banner DSGVO', 
      'Email-Marketing Brevo Setup', 
      'make.com Automatisierung Service',
      'SEO Management Service Österreich',
      'DSGVO Compliance Website',
      'Digitale Gründungsbegleitung Österreich',
      'Online-Präsenz Aufbau Einzelunternehmer',
      'WordPress Entwicklung Oberösterreich',
      'React TypeScript Entwicklung',
      'WebGL Three.js Visualisierung',
      'KI-gestützte Features',
      'Mentoring Gründer:innen',
      'AMS Unternehmer-Gründer-Programm Services'
    ],
    ogTitle: 'Digitale Services für Gründer:innen | Alles aus einer Hand',
    ogDescription: 'WordPress-Website in 14 Tagen mit kompletter digitaler Grundausstattung: Google Services, GDPR-Compliance, Email-Marketing, Automatisierung. Speziell für Gründer:innen entwickelt.',
    canonicalUrl: 'https://skit.sascha-kohler.at/services'
  },
  
  '/contact': {
    title: 'Kostenloses Erstgespräch vereinbaren | WordPress Website für Gründer:innen',
    description: 'Vereinbaren Sie jetzt Ihr kostenloses Erstgespräch für Ihre WordPress-Website. Im unverbindlichen Kennenlernen klären wir Ihre Bedürfnisse, Ihre Zielgruppe und Ihre digitalen Ziele. Ich zeige Ihnen, wie ich Sie bei Ihrem sicheren Start in die digitale Welt unterstützen kann. Als Gründer:in brauchen Sie einen Partner, der nicht nur Technik beherrscht, sondern auch Ihre Situation versteht. Als dipl. Lebens- und Sozialberater und selbst Einzelunternehmer:in begleite ich Sie mit Empathie, Kompetenz und echter Erfahrung. Kein Verkaufsdruck - Sie entscheiden in Ruhe. Speziell für Teilnehmer:innen des AMS Unternehmer-Gründer-Programms geeignet.',
    keywords: [
      'Kostenloses Erstgespräch WordPress', 
      'Gründungsberatung digital Österreich', 
      'Website-Anfrage Gründer:innen', 
      'WordPress Beratung Einzelunternehmer', 
      'Digitaler Mentor Kontakt',
      'Gründer:innen Beratung Wien',
      'Kostenlose Website-Beratung',
      'AMS Gründerprogramm Website',
      'Unverbindliches Erstgespräch',
      'WordPress Experte kontaktieren',
      'Lebens- und Sozialberater IT Kontakt',
      'Einzelunternehmer:in Unterstützung',
      'Website Gründung Österreich'
    ],
    ogTitle: 'Kostenloses Erstgespräch | Ihr digitaler Start beginnt hier',
    ogDescription: 'Lassen Sie uns in einem unverbindlichen und kostenlosen Gespräch klären, wie ich Sie als digitaler Mentor mit Herz und Kompetenz optimal unterstützen kann. Kein Verkaufsdruck, nur ehrliche Beratung.',
    canonicalUrl: 'https://skit.sascha-kohler.at/contact'
  },
  
  '/impressum': {
    title: 'Impressum | Rechtliche Informationen - sk.IT Software',
    description: 'Rechtliche Informationen und Impressum von sk.IT Software - Sascha Kohler, EPU für Softwareentwicklung und IT-Dienstleistungen.',
    keywords: ['Impressum', 'Rechtliche Informationen', 'sk.IT Software', 'Sascha Kohler'],
    canonicalUrl: 'https://skit.sascha-kohler.at/impressum'
  },
  
  '/datenschutz': {
    title: 'Datenschutz | Datenschutzerklärung - sk.IT Software',
    description: 'Datenschutzerklärung und Informationen zur Datenverarbeitung von sk.IT Software - Sascha Kohler.',
    keywords: ['Datenschutz', 'Datenschutzerklärung', 'sk.IT Software', 'Sascha Kohler', 'DSGVO'],
    canonicalUrl: 'https://skit.sascha-kohler.at/datenschutz'
  },
  
  '/agb': {
    title: 'AGB | Allgemeine Geschäftsbedingungen - sk.IT Software',
    description: 'Allgemeine Geschäftsbedingungen für die Dienstleistungen von sk.IT Software - Sascha Kohler.',
    keywords: ['AGB', 'Allgemeine Geschäftsbedingungen', 'sk.IT Software', 'Sascha Kohler'],
    canonicalUrl: 'https://skit.sascha-kohler.at/agb'
  }
};

/**
 * Holt die Metadaten für eine bestimmte Seite
 * @param path - Der Pfad der Seite
 * @returns Die Metadaten für die Seite
 */
export const getPageMetadata = (path: string): PageMetadata => {
  return PAGE_METADATA[path] ?? DEFAULT_METADATA;
};

/**
 * Generiert einen dynamischen Seitentitel
 * @param pageTitle - Der Titel der aktuellen Seite
 * @returns Der vollständige Seitentitel
 */
export const getPageTitle = (pageTitle?: string): string => {
  if (!pageTitle) return DEFAULT_METADATA.title;
  return `${pageTitle} | sk.IT Software - Sascha Kohler`;
};

/**
 * Generiert Keywords als String
 * @param keywords - Die Keywords für die Seite
 * @returns Keywords als Komma-separierter String
 */
export const getKeywordsString = (keywords: string[]): string => {
  return keywords.join(', ');
};

export default {
  getPageMetadata,
  getPageTitle,
  getKeywordsString
};
