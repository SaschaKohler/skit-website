import React from 'react'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Kontakt Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <p className="mb-2">Sascha Kohler</p>
            <p className="mb-2">
              <a href="tel:+436509030372" className="hover:text-blue-400">
                +43 (0)650 90 30 372
              </a>
            </p>
            <p>
              <a
                href="mailto:office@sascha-kohler.at"
                className="hover:text-blue-400"
              >
                office@sascha-kohler.at
              </a>
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-blue-400">
                  Über mich
                </Link>
              </li>
              <li>
                <Link to="/technologies" className="hover:text-blue-400">
                  Leistungen
                </Link>
              </li>
              <li>
                <Link to="/ja-zum-leben" className="hover:text-blue-400">
                  Ja zum Leben
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/impressum" className="hover:text-blue-400">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="hover:text-blue-400">
                  Datenschutzerklärung
                </Link>
              </li>
              <li>
                <Link to="/agb" className="hover:text-blue-400">
                  AGB
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} sk.IT software. Alle Rechte
            vorbehalten.
          </p>
          <p className="text-sm text-gray-400 mt-2">
            web | graphic | content | ❤️ www.sascha-kohler.at
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
