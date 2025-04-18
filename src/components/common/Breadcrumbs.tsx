import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

/**
 * Breadcrumbs-Komponente für verbesserte Navigation und SEO
 */
const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  // Wenn wir auf der Startseite sind, zeigen wir keine Breadcrumbs an
  if (pathnames.length === 0) {
    return null;
  }

  // Mapping für benutzerfreundliche Pfadnamen
  const pathMap: Record<string, string> = {
    'about': 'Über Mich',
    'services': 'Services',
    'contact': 'Kontakt',
    'impressum': 'Impressum',
    'datenschutz': 'Datenschutz',
    'agb': 'AGB',
    'web-development': 'Webentwicklung',
    'automation': 'Automatisierung',
    'api-integration': 'API-Integration',
    'mobile-apps': 'Mobile Anwendungen'
  };

  return (
    <nav className="bg-[var(--color-ui-dark)] py-2 text-sm" aria-label="Breadcrumb">
      <div className="container mx-auto px-4 sm:px-6">
        <ol className="flex items-center flex-wrap" itemScope itemType="https://schema.org/BreadcrumbList">
          {/* Startseite ist immer die erste Breadcrumb */}
          <li className="flex items-center" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link 
              to="/" 
              className="text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors flex items-center"
              itemProp="item"
            >
              <Home className="h-4 w-4" />
              <span className="sr-only" itemProp="name">Home</span>
            </Link>
            <meta itemProp="position" content="1" />
            {pathnames.length > 0 && (
              <ChevronRight className="h-4 w-4 mx-2 text-[var(--color-text-muted)]" />
            )}
          </li>

          {/* Dynamische Breadcrumbs basierend auf dem aktuellen Pfad */}
          {pathnames.map((pathname, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const position = index + 2; // +2 weil Home bereits Position 1 ist

            return (
              <li 
                key={pathname} 
                className="flex items-center"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                {isLast ? (
                  <span className="text-[var(--color-primary)]" itemProp="name">
                    {pathMap[pathname] || pathname}
                  </span>
                ) : (
                  <>
                    <Link 
                      to={routeTo} 
                      className="text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
                      itemProp="item"
                    >
                      <span itemProp="name">{pathMap[pathname] || pathname}</span>
                    </Link>
                    <ChevronRight className="h-4 w-4 mx-2 text-[var(--color-text-muted)]" />
                  </>
                )}
                <meta itemProp="position" content={position.toString()} />
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
