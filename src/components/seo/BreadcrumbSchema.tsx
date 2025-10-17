import React from 'react'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet'

/**
 * Generiert JSON-LD Breadcrumb Schema für bessere AI-Auffindbarkeit
 */
const BreadcrumbSchema: React.FC = () => {
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter((x) => x)

  // Mapping für benutzerfreundliche Namen
  const pathMap: Record<string, string> = {
    about: 'Über Mich',
    services: 'Services',
    contact: 'Kontakt',
    impressum: 'Impressum',
    datenschutz: 'Datenschutz',
    agb: 'AGB',
    'web-development': 'Webentwicklung',
    automation: 'Automatisierung',
    'api-integration': 'API-Integration',
    'mobile-apps': 'Mobile Anwendungen',
  }

  // Erstelle BreadcrumbList Schema
  const breadcrumbList = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://skit.sascha-kohler.at',
      },
      ...pathnames.map((pathname, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: pathMap[pathname] || pathname,
        item: `https://skit.sascha-kohler.at/${pathnames.slice(0, index + 1).join('/')}`,
      })),
    ],
  }

  // Nur rendern wenn wir nicht auf der Homepage sind
  if (pathnames.length === 0) {
    return null
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(breadcrumbList)}</script>
    </Helmet>
  )
}

export default BreadcrumbSchema
