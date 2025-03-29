import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Check, Plus, ArrowRight, Calendar } from 'lucide-react'

const PricingPackages: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'oneTime'>('oneTime')

  // Fokussiertes Kernprodukt für den schnellstmöglichen Markteintritt
  const mainPackage = {
    name: 'WordPress Website',
    description: 'Ihre professionelle WordPress-Webseite in 14 Tagen',
    price: {
      monthly: 99,
      oneTime: 790
    },
    setup: 297, // Einmalige Anzahlung bei monatlicher Zahlungsweise
    features: [
      'Professionelle 4-Seiten WordPress-Website',
      'Modernes, responsives Design',
      'Kontaktformular',
      'Content Management System (WordPress)',
      'Domain & Hosting (1 Jahr inklusive)',
      'SEO-Grundeinrichtung',
      'Online in nur 14 Tagen',
    ],
    includes: [
      'Persönliche Betreuung',
      'WordPress-Basisschulung',
      'Mobil optimiert'
    ]
  }

  // Mögliche Erweiterungen als Upgrades
  const upgrades = [
    {
      name: 'Buchungssystem',
      price: 290,
      description: 'Online-Terminbuchung für Kunden'
    },
    {
      name: 'Blog-Einrichtung',
      price: 240,
      description: 'Blogbereich inkl. Kategorien & Tags'
    },
    {
      name: 'Premium Theme',
      price: 190,
      description: 'Erweitertes Design mit mehr Funktionen'
    }
  ]

  // Funktion, um den Preis basierend auf dem Zahlungszyklus anzuzeigen
  const formatPrice = () => {
    if (billingCycle === 'monthly') {
      return `${mainPackage.price.monthly}€/Monat`
    } else {
      return `${mainPackage.price.oneTime}€`
    }
  }

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">WordPress Website - Schnell & Unkompliziert</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            Professionelle WordPress-Website für Berater, Coaches und Kleinunternehmen.<br/>
            In nur 14 Tagen online. Alle Preise zzgl. 20% MwSt.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Hauptpaket */}
          <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg mb-12">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-7/12 mb-6 md:mb-0 md:pr-8">
                <h3 className="text-2xl font-bold mb-2">{mainPackage.name}</h3>
                <p className="text-gray-700 mb-4">{mainPackage.description}</p>
                
                <div className="flex items-center mb-6">
                  <div className="inline-flex bg-gray-100 p-1 rounded-lg">
                    <button
                      onClick={() => setBillingCycle('oneTime')}
                      className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        billingCycle === 'oneTime' 
                        ? 'bg-blue-600 text-white shadow-sm' 
                        : 'bg-transparent text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      Einmalzahlung
                    </button>
                    <button
                      onClick={() => setBillingCycle('monthly')}
                      className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        billingCycle === 'monthly' 
                        ? 'bg-blue-600 text-white shadow-sm' 
                        : 'bg-transparent text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      Monatliche Rate
                    </button>
                  </div>
                </div>
                
                <div className="text-3xl font-bold text-blue-600 mb-4">
                  {formatPrice()}
                  <span className="text-sm font-normal text-gray-500 ml-2">
                    {billingCycle === 'monthly' ? '(6 Monate)' : 'einmalig'}
                  </span>
                </div>
                
                {billingCycle === 'monthly' && (
                  <div className="bg-blue-50 text-blue-700 px-3 py-2 rounded text-sm mb-6">
                    Startgebühr: {mainPackage.setup}€, dann 6 x {mainPackage.price.monthly}€ monatlich
                  </div>
                )}
                
                {billingCycle === 'oneTime' && (
                  <div className="bg-blue-50 text-blue-700 px-3 py-2 rounded text-sm mb-6">
                    50% Anzahlung, 50% bei Fertigstellung
                  </div>
                )}
                
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Beratungstermin vereinbaren
                </Link>
              </div>
              
              <div className="md:w-5/12 bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold mb-4">Inklusive:</h4>
                <ul className="space-y-3 mb-6">
                  {mainPackage.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {mainPackage.includes.map((item, idx) => (
                    <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Erweiterungen/Upgrades */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <Plus className="h-5 w-5 mr-2 text-blue-600" />
              WordPress-Erweiterungen
            </h3>
            
            <div className="grid md:grid-cols-3 gap-4">
              {upgrades.map((upgrade, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-lg p-5 transition duration-300 hover:shadow-md">
                  <h4 className="font-semibold mb-1">{upgrade.name}</h4>
                  <p className="text-sm text-gray-600 mb-2">{upgrade.description}</p>
                  <div className="font-bold text-blue-600">+ {upgrade.price}€</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* WordPress-Vorteile */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 mb-12">
            <h3 className="text-lg font-bold mb-4">Vorteile einer WordPress-Website</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-medium text-blue-700 mb-2">Einfache Bedienung</h4>
                <p className="text-sm text-gray-600">Sie können Inhalte selbst aktualisieren, ohne Programmierkenntnisse.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-medium text-blue-700 mb-2">Erweiterbar</h4>
                <p className="text-sm text-gray-600">Tausende Plugins für zusätzliche Funktionen verfügbar.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-medium text-blue-700 mb-2">Zukunftssicher</h4>
                <p className="text-sm text-gray-600">WordPress wird ständig weiterentwickelt und aktualisiert.</p>
              </div>
            </div>
          </div>
          
          {/* Folgekosten */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-bold mb-3">Nach dem ersten Jahr</h3>
            <p className="text-gray-600 mb-3">
              Hosting, Domain, WordPress-Updates und technischer Support:
            </p>
            <div className="bg-gray-50 p-3 rounded">
              <span className="font-medium">19€/Monat</span> oder <span className="font-medium">190€/Jahr</span>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="bg-blue-50 rounded-xl p-6 flex flex-col md:flex-row justify-between items-center">
            <div>
              <h3 className="text-lg font-bold text-blue-800 mb-2">Bereit für Ihre WordPress-Website?</h3>
              <p className="text-blue-700 mb-4 md:mb-0">
                In nur 14 Tagen zum perfekten ersten Eindruck im Web.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg transition duration-300"
            >
              Jetzt starten
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingPackages