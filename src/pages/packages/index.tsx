import React from 'react'
import DefaultLayout from '../../layouts/default/DefaultLayout'
import { Info, Check } from 'lucide-react'
import { useContactNavigation } from '../../hooks/useContactNavigation'

const PricingPage: React.FC = () => {
  const handleContactClick = useContactNavigation()
  const mainPackages = [
    {
      name: 'Starter',
      price: 'ab 1.990€',
      description: 'Perfekt für kleine Unternehmen und Selbstständige',
      features: [
        'Professionelle Website mit bis zu 5 Seiten',
        'Responsive Design',
        'Domain & Hosting für 1 Jahr inklusive',
        'SSL-Verschlüsselung',
        'Basis SEO-Optimierung',
        'Kontaktformular',
      ],
      recurring: {
        price: '29€/Monat',
        items: [
          'Hosting & Domain',
          'SSL-Zertifikat',
          'Technischer Support',
          'Regelmäßige Updates',
        ],
      },
    },
    {
      name: 'Business',
      price: 'ab 3.990€',
      description: 'Für wachsende Unternehmen mit höheren Ansprüchen',
      features: [
        'Professionelle Website mit bis zu 10 Seiten',
        'Responsive Design',
        'Domain & Hosting für 1 Jahr inklusive',
        'SSL-Verschlüsselung',
        'Erweiterte SEO-Optimierung',
        'Kontaktformular & Newsletter-Integration',
        'Content Management System',
        'Social Media Integration',
        'Google Business Profil Optimierung',
      ],
      recurring: {
        price: '49€/Monat',
        items: [
          'Hosting & Domain',
          'SSL-Zertifikat',
          'Technischer Support',
          'Regelmäßige Updates',
          'Monatliches Backup',
          'Performance-Monitoring',
        ],
      },
    },
    {
      name: 'Premium',
      price: 'ab 7.990€',
      description: 'Die All-Inclusive-Lösung für maximalen Erfolg',
      features: [
        'Unbegrenzte Anzahl an Seiten',
        'Maßgeschneidertes Design',
        'Domain & Hosting für 1 Jahr inklusive',
        'SSL-Verschlüsselung',
        'Premium SEO-Optimierung',
        'Komplettes E-Mail-Marketing-Setup',
        'E-Commerce Integration möglich',
        'Social Media Integration',
        'Google Business Profil Optimierung',
        'Individuelle Zusatzfunktionen',
        'Content-Erstellung für Startseite',
      ],
      recurring: {
        price: '99€/Monat',
        items: [
          'Hosting & Domain',
          'SSL-Zertifikat',
          'Premium Support',
          'Regelmäßige Updates',
          'Tägliches Backup',
          'Performance-Monitoring',
          'Monatlicher SEO-Bericht',
          'Security Monitoring',
        ],
      },
    },
  ]

  const addOnServices = [
    {
      name: 'Google Ads Management',
      price: 'ab 299€/Monat',
      description: 'Professionelles Management Ihrer Google Ads Kampagnen',
      features: [
        'Kampagnen-Setup',
        'Keyword-Recherche',
        'A/B-Testing',
        'Monatliche Optimierung',
        'Performance-Berichte',
      ],
    },
    {
      name: 'Social Media Marketing',
      price: 'ab 399€/Monat',
      description: 'Betreuung Ihrer Social Media Kanäle',
      features: [
        'Content-Planung',
        '12 Posts pro Monat',
        'Community Management',
        'Performance Analyse',
        'Targeting-Optimierung',
      ],
    },
    {
      name: 'SEO-Optimierung',
      price: 'ab 199€/Monat',
      description: 'Kontinuierliche Suchmaschinenoptimierung',
      features: [
        'Keyword-Optimierung',
        'Content-Optimierung',
        'Technisches SEO',
        'Lokales SEO',
        'Monatliche SEO-Berichte',
      ],
    },
  ]

  return (
    <DefaultLayout>
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Unsere Pakete im Detail</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transparente Preise für Ihren digitalen Erfolg. Alle Pakete
              beinhalten persönliche Betreuung und können individuell angepasst
              werden.
            </p>
          </div>

          {/* Info-Box */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-12 rounded-lg">
            <div className="flex items-start">
              <Info className="h-6 w-6 text-blue-500 mr-3 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-blue-800">
                  Wichtiger Hinweis zu unseren Preisen
                </h3>
                <p className="text-blue-700">
                  Alle angegebenen Preise sind Nettopreise zzgl. der
                  gesetzlichen MwSt. Die endgültigen Kosten werden individuell
                  nach Ihren spezifischen Anforderungen kalkuliert.
                </p>
              </div>
            </div>
          </div>

          {/* Hauptpakete Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {mainPackages.map((pkg, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg"
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-4">
                    {pkg.price}
                  </div>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>

                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Wiederkehrende Kosten */}
                  <div className="bg-gray-50 -mx-8 px-8 py-6 mt-8">
                    <h4 className="text-lg font-semibold mb-3">
                      Laufende Kosten: {pkg.recurring.price}
                    </h4>
                    <div className="space-y-2">
                      {pkg.recurring.items.map((item, idx) => (
                        <div key={idx} className="flex items-start text-sm">
                          <Check className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Zusatzleistungen */}
          <div className="mt-24">
            <h2 className="text-3xl font-bold text-center mb-12">
              Marketing & SEO Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {addOnServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:shadow-lg"
                >
                  <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                  <div className="text-2xl font-bold text-blue-600 mb-4">
                    {service.price}
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-blue-600 text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Sind Sie sich noch unsicher?
            </h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Lassen Sie uns in einem unverbindlichen Gespräch herausfinden,
              welches Paket am besten zu Ihren Bedürfnissen passt.
            </p>
            <button
              onClick={handleContactClick}
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold 
                     transition duration-300 hover:bg-blue-50"
            >
              Kostenloses Erstgespräch vereinbaren
            </button>
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default PricingPage
