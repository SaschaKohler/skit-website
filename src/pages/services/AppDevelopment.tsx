import React from 'react'
import DefaultLayout from '../../layouts/default/DefaultLayout'
import { useContactNavigation } from '../../hooks/useContactNavigation'

const AppDevelopment: React.FC = () => {
  const handleContactClick = useContactNavigation()

  return (
    <DefaultLayout>
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Individuelle Lösungen
          </h1>
          <p className="text-xl">
            Genau das, was Sie für Ihr Geschäft brauchen
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Maßgeschneidert für Sie</h2>
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
                  <h3 className="font-semibold mb-2">Passt wie angegossen</h3>
                  <p className="text-gray-600">
                    Ihre Lösung wird genau nach Ihren Wünschen entwickelt - mit
                    allen Funktionen, die Sie brauchen, nicht mehr und nicht
                    weniger.
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
                  <h3 className="font-semibold mb-2">Zukunftssicher gebaut</h3>
                  <p className="text-gray-600">
                    Mit modernster Technologie entwickelt, damit Ihre Lösung
                    auch morgen noch perfekt funktioniert und mitwachsen kann.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">
              So arbeiten wir zusammen
            </h2>
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
                    Schritt für Schritt zum Ziel
                  </h3>
                  <p className="text-gray-600">
                    Sie sehen regelmäßig den Fortschritt und können jederzeit
                    Anpassungen vornehmen - so wird es genau so, wie Sie es sich
                    vorstellen.
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
                  <h3 className="font-semibold mb-2">Sorglos-Paket</h3>
                  <p className="text-gray-600">
                    Von der ersten Idee bis zum fertigen Produkt kümmere ich
                    mich um alles. Inklusive Einarbeitung und Support.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Anwendungsbeispiele */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Das ist möglich
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-blue-600 text-2xl font-bold mb-2">
                Online-Kurse
              </div>
              <p>
                Ihre Expertise als digitales Produkt - mit geschütztem
                Mitgliederbereich
              </p>
            </div>
            <div className="text-center">
              <div className="text-blue-600 text-2xl font-bold mb-2">
                Buchungssysteme
              </div>
              <p>Termine online vereinbaren und verwalten - ganz automatisch</p>
            </div>
            <div className="text-center">
              <div className="text-blue-600 text-2xl font-bold mb-2">
                Spezialfunktionen
              </div>
              <p>
                Kalkulatoren, Konfiguratoren oder andere Tools für Ihre Kunden
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Haben Sie eine Idee?</h2>
          <p className="text-gray-600 mb-8">
            Lassen Sie uns gemeinsam herausfinden, wie wir Ihre Vision in die
            Realität umsetzen können.
          </p>
          <button
            onClick={handleContactClick}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Idee besprechen
          </button>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default AppDevelopment
