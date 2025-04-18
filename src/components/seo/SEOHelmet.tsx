import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getPageMetadata, getKeywordsString } from '../../utils/seo';

/**
 * SEO-Komponente, die dynamisch Meta-Tags basierend auf der aktuellen Seite setzt
 */
const SEOHelmet: React.FC = () => {
  const location = useLocation();
  const metadata = getPageMetadata(location.pathname);

  useEffect(() => {
    // Setze Dokument-Titel
    document.title = metadata.title;

    // Aktualisiere Meta-Tags
    const metaTags = {
      'description': metadata.description,
      'keywords': getKeywordsString(metadata.keywords),
      'og:title': metadata.ogTitle || metadata.title,
      'og:description': metadata.ogDescription || metadata.description,
      'og:url': metadata.canonicalUrl || `https://skit.sascha-kohler.at${location.pathname}`,
      'og:image': metadata.ogImage || 'https://skit.sascha-kohler.at/img/og-image.jpg'
    };

    // Aktualisiere bestehende Meta-Tags oder erstelle neue
    Object.entries(metaTags).forEach(([name, content]) => {
      let metaTag = document.querySelector(`meta[property="${name}"]`) || 
                   document.querySelector(`meta[name="${name}"]`);
      
      if (!metaTag) {
        metaTag = document.createElement('meta');
        if (name.startsWith('og:')) {
          metaTag.setAttribute('property', name);
        } else {
          metaTag.setAttribute('name', name);
        }
        document.head.appendChild(metaTag);
      }
      
      metaTag.setAttribute('content', content);
    });

    // Aktualisiere den kanonischen Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', metadata.canonicalUrl || `https://skit.sascha-kohler.at${location.pathname}`);
    }

    // Cleanup-Funktion für useEffect
    return () => {
      // Optional: Hier könnten wir die Meta-Tags zurücksetzen, aber das ist nicht nötig,
      // da sie durch den nächsten Seitenwechsel ohnehin aktualisiert werden
    };
  }, [location.pathname, metadata]);

  // Diese Komponente rendert nichts im DOM, sie aktualisiert nur die Meta-Tags
  return null;
};

export default SEOHelmet;
