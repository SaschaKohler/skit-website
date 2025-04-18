import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, Instagram, Facebook, Linkedin, Heart } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()
  const { theme } = useTheme()

  return (
    <footer className={`${theme === 'dark' ? 'bg-[var(--color-ui-dark)]' : 'bg-gradient-to-br from-rose-50 to-amber-50'} pt-12 pb-6 border-t border-[var(--color-border-light)]`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Branding und Kurzbeschreibung */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="font-bold text-2xl">
                <span className="text-[var(--color-primary)]">sk.</span>
                <span className="text-[var(--color-secondary)]">IT</span>
                <span className="text-[var(--color-primary-hover)]"> Software</span>
              </span>
            </Link>
            <p className="text-[var(--color-text)] mb-4">
              Professionelle Softwarelösungen und IT-Dienstleistungen.
              Persönlich, kompetent und zuverlässig.
            </p>
            <div className="flex space-x-3 mb-4">
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--color-card-bg)] p-2 rounded-full text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] hover:shadow-md transition-all"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--color-card-bg)] p-2 rounded-full text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] hover:shadow-md transition-all"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--color-card-bg)] p-2 rounded-full text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] hover:shadow-md transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-[var(--color-text-dark)] mb-4">Navigation</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'Über Mich', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'WordPress Website', path: '/#pricing' },
                { name: 'Kontakt', path: '/contact' },
                { name: 'Impressum', path: '/impressum' },
                { name: 'Datenschutz', path: '/datenschutz' },
              ].map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-[var(--color-text-dark)] mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                { name: 'Web-Entwicklung', path: '/services/web-development' },
                { name: 'Automatisierung', path: '/services/automation' },
                { name: 'API-Integration', path: '/services/api-integration' },
                { name: 'Mobile Anwendungen', path: '/services/mobile-apps' },
                { name: 'E-Commerce Lösungen', path: '/services' },
                { name: 'Technical Consulting', path: '/services' },
              ].map((service, idx) => (
                <li key={idx}>
                  <Link
                    to={service.path}
                    className="text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-[var(--color-text-dark)] mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:office@sascha-kohler.at"
                  className="flex items-center text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  <span>office@sascha-kohler.at</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+4365090030372"
                  className="flex items-center text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  <span>+43 (0) 650 90 30 372</span>
                </a>
              </li>
              <li className="pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-5 py-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white rounded-lg font-medium transition-all hover:shadow-md text-sm"
                >
                  Kostenloses Beratungsgespräch
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Trennlinie */}
        <div className="border-t border-[var(--color-border)] pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[var(--color-text)] text-sm mb-4 md:mb-0">
              &copy; {currentYear} Sascha Kohler. Alle Rechte vorbehalten.
            </p>
            <div className="flex space-x-4">
              <Link
                to="/datenschutz"
                className="text-[var(--color-text)] hover:text-[var(--color-primary)] text-sm"
              >
                Datenschutz
              </Link>
              <Link
                to="/agb"
                className="text-[var(--color-text)] hover:text-[var(--color-primary)] text-sm"
              >
                AGB
              </Link>
              <Link
                to="/impressum"
                className="text-[var(--color-text)] hover:text-[var(--color-primary)] text-sm"
              >
                Impressum
              </Link>
              <div className="text-[var(--color-text)] text-sm flex items-center">
                <span className="mr-1">Erstellt mit</span>
                <Heart className="h-3 w-3 text-[var(--color-primary)]" />
                <span className="ml-1">in Österreich</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer