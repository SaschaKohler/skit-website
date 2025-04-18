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

// Standard-Metadaten für die Website
const DEFAULT_METADATA: PageMetadata = {
  title: 'sk.IT | Professionelle Softwareentwicklung & IT-Dienstleistungen - Sascha Kohler',
  description: 'Webentwicklung, Automatisierung & IT-Lösungen für effiziente Unternehmensprozesse von Sascha Kohler, EPU Österreich.',
  keywords: [
    'Softwareentwicklung', 
    'IT-Dienstleistungen', 
    'Webentwicklung', 
    'React', 
    'Automatisierung', 
    'API-Integration', 
    'EPU', 
    'Sascha Kohler',
    'Österreich'
  ],
  ogTitle: 'sk.IT | Professionelle Softwareentwicklung & IT-Dienstleistungen',
  ogDescription: 'Webentwicklung, Automatisierung & IT-Lösungen für effiziente Unternehmensprozesse. Fullstack-Entwicklung von Sascha Kohler, EPU Österreich.',
  ogImage: 'https://skit.sascha-kohler.at/img/og-image.jpg',
  canonicalUrl: 'https://skit.sascha-kohler.at'
};

// Seitenspezifische Metadaten
const PAGE_METADATA: Record<string, PageMetadata> = {
  '/': DEFAULT_METADATA,
  
  '/about': {
    title: 'Über mich | Fullstack-Entwickler Sascha Kohler - sk.IT Software',
    description: 'Erfahren Sie mehr über Sascha Kohler, Fullstack-Entwickler mit 10+ Jahren Erfahrung in Webentwicklung, Automatisierung und IT-Lösungen in Österreich.',
    keywords: [
      'Über Sascha Kohler', 
      'Fullstack-Entwickler', 
      'IT-Experte', 
      'Entwickler-Profil', 
      'Webentwicklung Österreich',
      'Software-Spezialist',
      'IT-Beratung',
      'Programmierer Wien'
    ],
    ogTitle: 'Über Sascha Kohler | Fullstack-Entwickler & IT-Experte',
    ogDescription: 'Erfahren Sie mehr über Sascha Kohler, Fullstack-Entwickler mit 10+ Jahren Erfahrung in Webentwicklung, Automatisierung und IT-Lösungen.',
    canonicalUrl: 'https://skit.sascha-kohler.at/about'
  },
  
  '/services': {
    title: 'IT-Dienstleistungen & Softwareentwicklung | sk.IT Software - Sascha Kohler',
    description: 'Professionelle IT-Dienstleistungen: Webentwicklung, Automatisierung, API-Integration, mobile Anwendungen und mehr. Maßgeschneiderte Softwarelösungen für Ihr Unternehmen.',
    keywords: [
      'IT-Dienstleistungen', 
      'Softwareentwicklung', 
      'Webentwicklung', 
      'Automatisierung', 
      'API-Integration', 
      'Mobile Anwendungen',
      'E-Commerce Lösungen',
      'DevOps',
      'IT-Beratung'
    ],
    ogTitle: 'IT-Dienstleistungen & Softwareentwicklung | sk.IT Software',
    ogDescription: 'Professionelle IT-Dienstleistungen: Webentwicklung, Automatisierung, API-Integration und mehr. Maßgeschneiderte Softwarelösungen für Ihr Unternehmen.',
    canonicalUrl: 'https://skit.sascha-kohler.at/services'
  },
  
  '/contact': {
    title: 'Kontakt | IT-Beratung & Projektanfrage - sk.IT Software',
    description: 'Kontaktieren Sie Sascha Kohler für Ihre IT-Projekte. Kostenlose Beratung zu Webentwicklung, Automatisierung und Software-Lösungen.',
    keywords: [
      'Kontakt', 
      'IT-Beratung', 
      'Projektanfrage', 
      'Software-Entwicklung Anfrage', 
      'Webentwicklung Kontakt',
      'IT-Dienstleistungen Österreich',
      'Beratungsgespräch',
      'Softwareentwickler kontaktieren'
    ],
    ogTitle: 'Kontakt | IT-Beratung & Projektanfrage - sk.IT Software',
    ogDescription: 'Kontaktieren Sie Sascha Kohler für Ihre IT-Projekte. Kostenlose Beratung zu Webentwicklung, Automatisierung und Software-Lösungen.',
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
  return PAGE_METADATA[path] || DEFAULT_METADATA;
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
