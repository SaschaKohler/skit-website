import React from 'react'
import DefaultLayout from '../layouts/default/DefaultLayout'

const Impressum: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-3xl font-bold mb-8">Impressum</h1>

          <div className="bg-white rounded-lg shadow-sm p-8 space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-4">
                Informationen über den Diensteanbieter
              </h2>
              <p className="text-lg font-medium mb-2">Sascha Kohler</p>
              <p className="text-gray-600">Furth 6</p>
              <p className="text-gray-600 mb-4">4311 Schwertberg, Österreich</p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Kontakt</h3>
                <p className="text-gray-600">
                  <strong>Tel.:</strong>{' '}
                  <a
                    href="tel:+436509030372"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    0650/90 30 372
                  </a>
                </p>
                <p className="text-gray-600">
                  <strong>E-Mail:</strong>{' '}
                  <a
                    href="mailto:office@sascha-kohler.at"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    office@sascha-kohler.at
                  </a>
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Unternehmensgegenstand</h3>
                <p className="text-gray-600">
                  Werbeagentur & IT Dienstleistungen
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Gewerbedaten</h3>
                <p className="text-gray-600">
                  <strong>GISA:</strong> 37168438, 37168445
                </p>
                <p className="text-gray-600">
                  <strong>Mitglied bei:</strong> WKO, Landesinnung, etc.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">
                  Aufsichtsbehörde/Gewerbebehörde
                </h3>
                <p className="text-gray-600">Bezirkshauptmannschaft Perg</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Berufsbezeichnung</h3>
                <p className="text-gray-600">
                  Webdesign + IT-Dienstleister <em>Full-Stack</em>
                </p>
                <p className="text-gray-600">
                  <strong>Verleihungsstaat:</strong> Österreich
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Datenschutz</h2>
              <div className="space-y-2 text-gray-600">
                <p>
                  <strong>E-Mail der Datenschutzstelle:</strong>{' '}
                  <a
                    href="mailto:office@sascha-kohler.at"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    office@sascha-kohler.at
                  </a>
                </p>
                <p>
                  <strong>Tel.:</strong>{' '}
                  <a
                    href="tel:+436509030372"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    0650/9030372
                  </a>
                </p>
                <p>
                  <strong>Impressum der Datenschutzstelle:</strong>{' '}
                  <a
                    href="https://skit.sascha-kohler.at/impressum/"
                    className="text-blue-600 hover:text-blue-800"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://skit.sascha-kohler.at/impressum/
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default Impressum
