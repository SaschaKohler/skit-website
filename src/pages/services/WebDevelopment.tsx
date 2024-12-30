import React from 'react'
import DefaultLayout from '../../layouts/default/DefaultLayout'
import { Link } from 'react-router-dom'
import { useContactNavigation } from '../../hooks/useContactNavigation'

const WebDevelopment: React.FC = (): React.JSX.Element => {
  const handleContactClick = useContactNavigation()

  return (
    <DefaultLayout>
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Ihre neue Website
          </h1>
          <p className="text-xl">Modern, einladend und einfach zu pflegen</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Was Sie bekommen</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-blue-600 mt-1 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div>
                  <h3 className="font-semibold mb-2">
                    Einfach selbst zu pflegen
                  </h3>
                  <p className="text-gray-600">
                    Mit WordPress und dem Divi-Editor können Sie Ihre Inhalte
                    ganz leicht selbst aktualisieren - ohne technische
                    Vorkenntnisse.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-blue-600 mt-1 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div>
                  <h3 className="font-semibold mb-2">
                    Geschützter Bereich für Ihre Kunden
                  </h3>
                  <p className="text-gray-600">
                    Bieten Sie exklusive Inhalte, Online-Kurse oder digitale
                    Produkte in einem passwortgeschützten Bereich an.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Automatische Helfer</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-blue-600 mt-1 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div>
                  <h3 className="font-semibold mb-2">
                    Newsletter & Kundenbetreuung
                  </h3>
                  <p className="text-gray-600">
                    Halten Sie mit personalisierten E-Mails Kontakt zu Ihren
                    Kunden. Automatische Willkommensnachrichten,
                    Geburtstagswünsche und mehr.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-blue-600 mt-1 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div>
                  <h3 className="font-semibold mb-2">
                    Alles greift ineinander
                  </h3>
                  <p className="text-gray-600">
                    Ihre Website, E-Mails und Social Media arbeiten Hand in
                    Hand. Einmal eingerichtet, läuft alles wie von selbst.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Zusätzlicher Bereich für Vorteile */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Ihre Vorteile</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-blue-600 text-2xl font-bold mb-2">
                Zeitersparnis
              </div>
              <p>
                Sie konzentrieren sich auf Ihr Geschäft, während die Website für
                Sie arbeitet
              </p>
            </div>
            <div className="text-center">
              <div className="text-blue-600 text-2xl font-bold mb-2">
                Alles inklusive
              </div>
              <p>Hosting, Domain, E-Mails und Support aus einer Hand</p>
            </div>
            <div className="text-center">
              <div className="text-blue-600 text-2xl font-bold mb-2">
                Persönlich
              </div>
              <p>Ein Ansprechpartner für alle Ihre Fragen und Wünsche</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Digitale Lösungen, die begeistern
          </h2>
          <p className="text-gray-600 mb-8">
            Sie haben eine Vision - gemeinsam finden wir den besten Weg, diese
            digital umzusetzen.
          </p>
          <Link
            to="/#contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            onClick={handleContactClick}
          >
            Jetzt unverbindlich beraten lassen
          </Link>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default WebDevelopment

