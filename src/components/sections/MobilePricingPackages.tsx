import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Check,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  CreditCard,
  Clock,
} from 'lucide-react'

/**
 * Vereinfachte Pricing-Komponente speziell für mobile Geräte
 * Ohne komplexe Animationen und CSS-Variablen
 */
const MobilePricingPackages: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'oneTime'>(
    'oneTime'
  )
  const [expandedFeatures, setExpandedFeatures] = useState(false)
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null)

  // Hauptpaket
  const mainPackage = {
    name: 'WordPress Website',
    description: 'Ihre professionelle Website in nur 14 Tagen online',
    price: {
      monthly: 99,
      oneTime: 790,
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
      'Mobil optimiert für alle Geräte',
      'WordPress-Basisschulung (60 Min.)',
      'SSL-Verschlüsselung (https)',
      'Rechtssichere Datenschutzerklärung & Impressum',
      'Google Maps Integration (optional)',
      'Social Media Links',
      'Kontaktseite mit Anfahrt',
    ],
  }

  // Mögliche Erweiterungen als Upgrades
  const upgrades = [
    {
      id: 'booking',
      name: 'Buchungssystem',
      price: 290,
      description: 'Online-Terminbuchung für Kunden',
    },
    {
      id: 'blog',
      name: 'Blog-Einrichtung',
      price: 240,
      description: 'Blogbereich inkl. Kategorien & Tags',
    },
    {
      id: 'premium',
      name: 'Premium Theme',
      price: 190,
      description: 'Erweitertes Design mit mehr Funktionen',
    },
    {
      id: 'additional-pages',
      name: 'Zusätzliche Seiten',
      price: 120,
      description: 'Pro zusätzliche Seite (inkl. Content-Überarbeitung)',
    },
  ]

  // Features anzeigen (komplett oder begrenzt)
  const displayedFeatures = expandedFeatures
    ? mainPackage.features
    : mainPackage.features.slice(0, 5)

  const toggleFeature = (id: string) => {
    if (selectedFeature === id) {
      setSelectedFeature(null)
    } else {
      setSelectedFeature(id)
    }
  }

  return (
    <section className="py-12 bg-rose-50 w-full" id="mobile-pricing-section">
      <div className="container mx-auto px-4">
        {/* Seitenüberschrift */}
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-medium mb-2">
            14-Tage Express-Website
          </span>
          <h2 className="text-2xl font-bold mb-3">
            Transparente <span className="text-rose-500">Preisgestaltung</span>
          </h2>
          <p className="text-gray-600 text-sm mb-4 max-w-md mx-auto">
            Wählen Sie zwischen einmaliger Zahlung oder flexiblen Raten
          </p>
        </div>

        {/* Preis-Card */}
        <div className="bg-white rounded-xl p-5 shadow-md mb-8 border border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            {mainPackage.name}
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            {mainPackage.description}
          </p>

          {/* Zahlungsart-Tabs */}
          <div className="mb-4 flex border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => {
                setBillingCycle('oneTime')
              }}
              className={`flex-1 py-2 px-3 text-xs font-medium ${
                billingCycle === 'oneTime'
                  ? 'bg-rose-500 text-white'
                  : 'bg-gray-50 text-gray-700'
              }`}
            >
              <CreditCard className="inline-block h-3 w-3 mr-1" />
              Einmalzahlung
            </button>
            <button
              onClick={() => {
                setBillingCycle('monthly')
              }}
              className={`flex-1 py-2 px-3 text-xs font-medium ${
                billingCycle === 'monthly'
                  ? 'bg-rose-500 text-white'
                  : 'bg-gray-50 text-gray-700'
              }`}
            >
              <Clock className="inline-block h-3 w-3 mr-1" />
              Ratenzahlung
            </button>
          </div>

          {/* Preis */}
          <div className="bg-rose-50 rounded-lg p-4 mb-4 text-center">
            <span className="text-2xl font-bold text-rose-600">
              {billingCycle === 'monthly'
                ? `${mainPackage.price.monthly}€`
                : `${mainPackage.price.oneTime}€`}
            </span>
            <span className="text-sm font-normal text-gray-500 ml-1">
              {billingCycle === 'monthly' ? '/Monat' : ' einmalig'}
            </span>

            {billingCycle === 'monthly' && (
              <p className="text-rose-700 text-xs mt-2">
                <span className="font-semibold">Startgebühr:</span>{' '}
                {mainPackage.setup}€, dann 6 x {mainPackage.price.monthly}€
                monatlich
              </p>
            )}

            {billingCycle === 'oneTime' && (
              <p className="text-rose-700 text-xs mt-2">
                <span className="font-semibold">Zahlungsplan:</span> 50%
                Anzahlung, 50% bei Fertigstellung
              </p>
            )}
          </div>

          {/* Features */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-gray-800 text-sm">Inklusive:</h4>
              <button
                onClick={() => {
                  setExpandedFeatures(!expandedFeatures)
                }}
                className="text-xs text-rose-500 flex items-center"
              >
                {expandedFeatures ? 'Weniger anzeigen' : 'Alle anzeigen'}
                {expandedFeatures ? (
                  <ChevronUp className="h-3 w-3 ml-1" />
                ) : (
                  <ChevronDown className="h-3 w-3 ml-1" />
                )}
              </button>
            </div>

            <ul className="space-y-2">
              {displayedFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="block w-full bg-rose-500 hover:bg-rose-600 text-white text-center font-medium py-3 px-4 rounded-lg transition-colors"
          >
            Kostenloses Gespräch vereinbaren
          </Link>
        </div>

        {/* Erweiterungen */}
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-4">Website-Erweiterungen</h3>

          <div className="space-y-3">
            {upgrades.map(upgrade => (
              <div
                key={upgrade.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden"
              >
                <div
                  className="p-3 flex justify-between items-center cursor-pointer"
                  onClick={() => {
                    toggleFeature(upgrade.id)
                  }}
                >
                  <div>
                    <span className="font-medium text-gray-800">
                      {upgrade.name}
                    </span>
                    <span className="text-rose-600 font-bold ml-2 text-sm">
                      +{upgrade.price}€
                    </span>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-400 transition-transform ${
                      selectedFeature === upgrade.id ? 'rotate-180' : ''
                    }`}
                  />
                </div>

                {selectedFeature === upgrade.id && (
                  <div className="px-3 pb-3 pt-0 text-sm text-gray-600 border-t border-gray-100">
                    {upgrade.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Schritte */}
        <div className="bg-white rounded-lg p-4 mb-8 border border-gray-200">
          <h3 className="text-lg font-bold mb-3">So läuft Ihr Projekt ab</h3>

          <div className="space-y-4">
            {[
              { day: 1, title: 'Beratungsgespräch' },
              { day: 2, title: 'Konzept & Design' },
              { day: 5, title: 'Inhalte & Feedback' },
              { day: 10, title: 'Review & Feinschliff' },
              { day: 14, title: 'Fertigstellung & Launch' },
            ].map((step, idx) => (
              <div key={idx} className="flex items-center">
                <div className="w-7 h-7 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-xs mr-3">
                  {step.day}
                </div>
                <span className="text-gray-800 font-medium">{step.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Folgekosten */}
        <div className="bg-white rounded-lg p-4 mb-8 border border-gray-200">
          <h3 className="text-lg font-bold mb-2">Nach dem ersten Jahr</h3>
          <p className="text-gray-600 text-sm mb-3">
            Für Hosting, Domain, Updates und Support:
          </p>
          <div className="bg-rose-50 p-3 rounded border border-rose-100 text-center">
            <div className="text-gray-800 font-medium">
              19€/Monat oder 190€/Jahr
            </div>
            <div className="text-xs text-gray-600 mt-1">
              Bei jährlicher Zahlung sparen Sie 2 Monate
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-rose-500 to-amber-500 rounded-lg p-5 text-white text-center">
          <h3 className="text-lg font-bold mb-2">
            Bereit für Ihren Webauftritt?
          </h3>
          <p className="mb-4 text-sm text-white/90">
            In nur 14 Tagen zum perfekten ersten Eindruck.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-rose-600 font-medium py-2 px-5 rounded-lg"
          >
            Jetzt starten
            <ArrowRight className="inline-block ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default MobilePricingPackages
