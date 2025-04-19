import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  Check,
  ArrowRight,
  Calendar,
  Package,
  ChevronDown,
  PlusCircle,
  Clock,
  CreditCard,
  PocketKnife,
  Zap,
  CheckCircle2,
  MessageCircle,
  Sparkles,
} from 'lucide-react'
import { motion, useAnimation, useInView } from 'framer-motion'
import PricingAnimation from '../animation/PricingAnimation'

const PricingPackages: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'oneTime'>(
    'oneTime'
  )
  const [showAllFeatures, setShowAllFeatures] = useState(false)
  const [selectedUpgrades, setSelectedUpgrades] = useState<string[]>([])
  const [, setTotalPrice] = useState<number>(0)

  const pricingRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(pricingRef, { once: true, amount: 0.2 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

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
      popular: true,
      icon: <Calendar className="h-5 w-5 text-rose-500" />,
    },
    {
      id: 'blog',
      name: 'Blog-Einrichtung',
      price: 240,
      description: 'Blogbereich inkl. Kategorien & Tags',
      popular: false,
      icon: <MessageCircle className="h-5 w-5 text-amber-500" />,
    },
    {
      id: 'premium',
      name: 'Premium Theme',
      price: 190,
      description: 'Erweitertes Design mit mehr Funktionen',
      popular: true,
      icon: <Zap className="h-5 w-5 text-amber-500" />,
    },
    {
      id: 'additional-pages',
      name: 'Zusätzliche Seiten',
      price: 120,
      description: 'Pro zusätzliche Seite (inkl. Content-Überarbeitung)',
      popular: false,
      icon: <PlusCircle className="h-5 w-5 text-rose-500" />,
    },
  ]

  // Berechne den Gesamtpreis basierend auf den ausgewählten Upgrades
  useEffect(() => {
    const basePrice =
      billingCycle === 'oneTime'
        ? mainPackage.price.oneTime
        : mainPackage.setup + mainPackage.price.monthly * 6

    const upgradesPrice = selectedUpgrades.reduce((sum, id) => {
      const upgrade = upgrades.find(u => u.id === id)
      return sum + (upgrade ? upgrade.price : 0)
    }, 0)

    setTotalPrice(basePrice + upgradesPrice)
  }, [billingCycle, selectedUpgrades])

  // Toggle Upgrade-Auswahl
  const toggleUpgrade = (id: string) => {
    if (selectedUpgrades.includes(id)) {
      setSelectedUpgrades(selectedUpgrades.filter(item => item !== id))
    } else {
      setSelectedUpgrades([...selectedUpgrades, id])
    }
  }

  // Features anzeigen (komplett oder begrenzt)
  const displayedFeatures = showAllFeatures
    ? mainPackage.features
    : mainPackage.features.slice(0, 7)

  // Animation für die Features-Liste
  const featureVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  }

  const featureItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  }

  // Container Animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <section
      className="py-20 bg-gradient-to-b from-[var(--color-primary-light)] to-[var(--color-ui-dark)] w-full"
      ref={pricingRef}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-rose-100 text-rose-700 text-sm font-medium mb-3">
            14-Tage Express-Website
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Transparente <span className="text-rose-500">Preisgestaltung</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            Wählen Sie zwischen flexiblen Abomodellen oder einer einmaligen
            Zahlung - ganz nach Ihren Bedürfnissen. Alle Preise sind Nettopreise
            und verstehen sich zzgl. der gesetzlichen MwSt.
          </p>
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Hauptpaket Card mit Animation */}
          <motion.div
            className="bg-[var(--color-ui-dark)] rounded-2xl p-8 border border-[var(--color-border)] shadow-lg mb-12 transition-all duration-300 hover:shadow-xl relative overflow-hidden"
            variants={cardVariants}
          >
            {/* Dekorative Elemente */}
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br rounded-full opacity-20"></div>
            <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-gradient-to-tr rounded-full opacity-20"></div>

            <div className="flex flex-col lg:flex-row relative z-10">
              <div className="lg:w-7/12 mb-8 lg:mb-0 lg:pr-8">
                <div className="flex items-center mb-3">
                  <Package className="h-6 w-6 text-[var(--color-primary)] mr-2" />
                  <h3 className="text-2xl font-bold text-[var(--color-text-dark)]">
                    {mainPackage.name}
                  </h3>
                </div>
                <p className="text-[var(--color-text)] mb-6">
                  {mainPackage.description}
                </p>

                {/* Zahlungsoption Tabs */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-[var(--color-text)] mb-2">
                    Zahlungsweise wählen:
                  </label>
                  <div className="inline-flex bg-[var(--color-ui-medium)] p-1 rounded-lg shadow-inner">
                    <button
                      onClick={() => {
                        setBillingCycle('oneTime')
                      }}
                      className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        billingCycle === 'oneTime'
                          ? 'bg-[var(--color-primary)] text-white shadow-sm transform -translate-y-0.5'
                          : 'bg-transparent text-[var(--color-text)] hover:bg-[var(--color-ui-light)]'
                      }`}
                    >
                      <CreditCard className="inline-block h-4 w-4 mr-1" />
                      Einmalzahlung
                    </button>
                    <button
                      onClick={() => {
                        setBillingCycle('monthly')
                      }}
                      className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        billingCycle === 'monthly'
                          ? 'bg-[var(--color-primary)] text-white shadow-sm transform -translate-y-0.5'
                          : 'bg-transparent text-[var(--color-text)] hover:bg-[var(--color-ui-light)]'
                      }`}
                    >
                      <Clock className="inline-block h-4 w-4 mr-1" />
                      Ratenzahlung
                    </button>
                  </div>
                </div>

                {/* Preis */}
                <div className="mb-4">
                  <div className="flex items-baseline">
                    <motion.span
                      className="text-3xl font-bold text-[var(--color-primary)]"
                      key={billingCycle} // Key für Animation bei Änderung
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      {billingCycle === 'monthly'
                        ? `${mainPackage.price.monthly}€`
                        : `${mainPackage.price.oneTime}€`}
                    </motion.span>
                    <span className="text-sm font-normal text-[var(--color-text-light)] ml-2">
                      {billingCycle === 'monthly' ? '/Monat' : ' einmalig'}
                    </span>
                  </div>

                  {billingCycle === 'monthly' && (
                    <motion.div
                      className="bg-rose-50 text-rose-700 px-4 py-2 rounded-lg text-sm mt-2 border border-rose-100"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="font-semibold">Startgebühr:</span>{' '}
                      {mainPackage.setup}€, dann 6 x {mainPackage.price.monthly}
                      € monatlich
                    </motion.div>
                  )}

                  {billingCycle === 'oneTime' && (
                    <motion.div
                      className="bg-rose-50 text-rose-700 px-4 py-2 rounded-lg text-sm mt-2 border border-rose-100"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="font-semibold">Zahlungsplan:</span> 50%
                      Anzahlung, 50% bei Fertigstellung
                    </motion.div>
                  )}
                </div>

                {/* CTA Button */}
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center w-full bg-rose-500 hover:bg-rose-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:translate-y-[-2px] shadow-lg hover:shadow-xl"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Kostenloses Beratungsgespräch
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Features Liste */}
              <div className="lg:w-5/12 bg-gradient-to-br from-[var(--color-primary-light)] to-[var(--color-secondary-light)] rounded-xl p-6">
                <h4 className="font-semibold text-[var(--color-text-dark)] mb-4 flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-[var(--color-primary)] mr-2" />
                  Inklusive:
                </h4>
                <motion.ul
                  className="space-y-3 mb-4"
                  variants={featureVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {displayedFeatures.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start"
                      variants={featureItemVariants}
                    >
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-[var(--color-text)]">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* Show more/less toggle */}
                {mainPackage.features.length > 7 && (
                  <button
                    onClick={() => {
                      setShowAllFeatures(!showAllFeatures)
                    }}
                    className="text-rose-600 hover:text-rose-800 text-sm font-medium flex items-center mt-2 transition-all duration-300 hover:translate-x-1"
                  >
                    {showAllFeatures
                      ? 'Weniger anzeigen'
                      : 'Alle Features anzeigen'}
                    <ChevronDown
                      className={`ml-1 h-4 w-4 transition-transform duration-300 ${showAllFeatures ? 'rotate-180' : ''}`}
                    />
                  </button>
                )}
              </div>
            </div>
          </motion.div>

          {/* Erweiterungen/Upgrades */}
          <motion.div className="mb-12" variants={cardVariants}>
            <h3 className="text-xl font-bold mb-2 flex items-center">
              <PocketKnife className="h-5 w-5 mr-2 text-rose-500" />
              Website-Erweiterungen
            </h3>
            <p className="text-gray-600 mb-6">
              Passen Sie Ihre Website mit zusätzlichen Funktionen an Ihre
              Bedürfnisse an.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {upgrades.map(upgrade => (
                <motion.div
                  key={upgrade.id}
                  onClick={() => {
                    toggleUpgrade(upgrade.id)
                  }}
                  className={`
                    bg-white border rounded-xl p-5 transition-all duration-300 cursor-pointer transform hover:-translate-y-1
                    ${
                      selectedUpgrades.includes(upgrade.id)
                        ? 'border-rose-400 shadow-md bg-rose-50'
                        : 'border-gray-200 hover:border-rose-200 hover:shadow-sm'
                    }
                  `}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4 mt-1">
                      {upgrade.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-gray-800">
                          {upgrade.name}
                        </h4>
                        {upgrade.popular && (
                          <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full flex items-center">
                            <Sparkles className="h-3 w-3 mr-1" />
                            Beliebt
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mt-1 mb-2">
                        {upgrade.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="font-bold text-rose-600">
                          + {upgrade.price}€
                        </div>
                        <div
                          className={`
                          h-5 w-5 rounded-full border transition-colors duration-200 flex items-center justify-center
                          ${
                            selectedUpgrades.includes(upgrade.id)
                              ? 'bg-rose-500 border-rose-500 text-white'
                              : 'border-gray-300 bg-white'
                          }
                        `}
                        >
                          {selectedUpgrades.includes(upgrade.id) && (
                            <Check className="h-3 w-3" />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Animierte Gesamtpreis-Anzeige wenn Upgrades ausgewählt sind */}
            {selectedUpgrades.length > 0 && (
              <motion.div
                className="mt-6 bg-gradient-to-r from-rose-50 to-amber-50 rounded-xl p-5 border border-rose-100 shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h4 className="font-semibold text-gray-800 mb-2">
                  Ihr individuelles Paket:
                </h4>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-xs font-medium">
                    WordPress Website
                  </span>
                  {selectedUpgrades.map(id => {
                    const upgrade = upgrades.find(u => u.id === id)
                    return upgrade ? (
                      <span
                        key={id}
                        className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {upgrade.name}
                      </span>
                    ) : null
                  })}
                </div>

                <PricingAnimation
                  price={
                    billingCycle === 'monthly'
                      ? mainPackage.price.monthly
                      : mainPackage.price.oneTime
                  }
                  billingCycle={billingCycle}
                  upgrades={upgrades}
                  selectedUpgrades={selectedUpgrades}
                />

                <div className="flex items-center justify-center mt-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center bg-rose-500 hover:bg-rose-600 text-white font-medium px-5 py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:translate-y-[-2px]"
                  >
                    Angebot anfragen
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* WordPress-Vorteile mit Animation */}
          <motion.div
            className="bg-[var(--color-ui-dark)] border border-[var(--color-border)] rounded-xl p-6 mb-12 hover:shadow-md transition-all duration-300"
            variants={cardVariants}
          >
            <h3 className="text-lg font-bold text-[var(--color-text-dark)] mb-4 flex items-center">
              <Zap className="h-5 w-5 text-[var(--color-primary)] mr-2" />
              Vorteile einer WordPress-Website
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <motion.div
                className="bg-gradient-to-br from-[var(--color-primary-light)] to-[var(--color-secondary-light)] p-4 rounded-lg transition-all duration-300 hover:shadow-sm transform hover:translate-y-[-2px]"
                whileHover={{ scale: 1.03 }}
              >
                <h4 className="font-medium text-[var(--color-primary)] mb-2">
                  Einfache Bedienung
                </h4>
                <p className="text-sm text-[var(--color-text)]">
                  Sie können Inhalte selbst aktualisieren, ohne
                  Programmierkenntnisse.
                </p>
              </motion.div>
              <motion.div
                className="bg-gradient-to-br from-[var(--color-primary-light)] to-[var(--color-secondary-light)] p-4 rounded-lg transition-all duration-300 hover:shadow-sm transform hover:translate-y-[-2px]"
                whileHover={{ scale: 1.03 }}
              >
                <h4 className="font-medium text-[var(--color-primary)] mb-2">
                  Erweiterbar
                </h4>
                <p className="text-sm text-[var(--color-text)]">
                  Tausende Plugins für zusätzliche Funktionen verfügbar.
                </p>
              </motion.div>
              <motion.div
                className="bg-gradient-to-br from-[var(--color-primary-light)] to-[var(--color-secondary-light)] p-4 rounded-lg transition-all duration-300 hover:shadow-sm transform hover:translate-y-[-2px]"
                whileHover={{ scale: 1.03 }}
              >
                <h4 className="font-medium text-[var(--color-primary)] mb-2">
                  Zukunftssicher
                </h4>
                <p className="text-sm text-[var(--color-text)]">
                  WordPress wird ständig weiterentwickelt und aktualisiert.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Service-Prozess Timeline */}
          <motion.div
            className="bg-[var(--color-ui-dark)] border border-[var(--color-border)] rounded-xl p-6 mb-12"
            variants={cardVariants}
          >
            <h3 className="text-lg font-bold text-[var(--color-text-dark)] mb-4">
              So läuft Ihr Website-Projekt ab
            </h3>
            <div className="space-y-4">
              {[
                {
                  day: 1,
                  title: 'Beratungsgespräch',
                  desc: 'Wir besprechen Ihre Anforderungen und Ziele.',
                },
                {
                  day: 2,
                  title: 'Konzept & Design',
                  desc: 'Sie erhalten einen ersten Design-Vorschlag.',
                },
                {
                  day: 5,
                  title: 'Inhalte & Feedback',
                  desc: 'Sie liefern Texte und Bilder, wir passen an.',
                },
                {
                  day: 10,
                  title: 'Review & Feinschliff',
                  desc: 'Gemeinsame Abstimmung der finalen Version.',
                },
                {
                  day: 14,
                  title: 'Fertigstellung & Launch',
                  desc: 'Ihre Website geht online!',
                },
              ].map((step, idx, arr) => (
                <motion.div
                  key={idx}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="flex flex-col items-center mr-4">
                    <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-sm">
                      {step.day}
                    </div>
                    {idx < arr.length - 1 && (
                      <div className="w-0.5 h-10 bg-gradient-to-b from-rose-100 to-amber-100 mt-1"></div>
                    )}
                  </div>
                  <div className="bg-gradient-to-r from-[var(--color-primary-light)] to-[var(--color-secondary-light)] rounded-lg p-3 flex-1 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-x-1">
                    <h4 className="font-medium text-[var(--color-primary)]">
                      {step.title}
                    </h4>
                    <p className="text-sm text-[var(--color-text)]">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Folgekosten */}
          <motion.div
            className="bg-[var(--color-ui-dark)] border border-[var(--color-border)] rounded-xl p-6 mb-8"
            variants={cardVariants}
          >
            <h3 className="text-lg font-bold text-[var(--color-text-dark)] mb-3 flex items-center">
              <Clock className="h-5 w-5 text-[var(--color-primary)] mr-2" />
              Nach dem ersten Jahr
            </h3>
            <p className="text-[var(--color-text)] mb-3">
              Für Hosting, Domain, WordPress-Updates und technischen Support:
            </p>
            <div className="bg-gradient-to-r from-[var(--color-primary-light)] to-[var(--color-secondary-light)] p-4 rounded-lg border border-[var(--color-primary-light)]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div className="text-[var(--color-text-dark)]">
                  <span className="font-medium">19€/Monat</span> oder{' '}
                  <span className="font-medium">190€/Jahr</span> (2 Monate
                  gratis)
                </div>
                <div className="mt-3 sm:mt-0">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                    Jederzeit kündbar
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="bg-gradient-to-r from-rose-400 to-amber-500 rounded-xl p-8 text-white flex flex-col md:flex-row justify-between items-center"
            variants={cardVariants}
          >
            <div>
              <h3 className="text-xl font-bold mb-2">
                Bereit für Ihren professionellen Webauftritt?
              </h3>
              <p className="text-white/90 mb-4 md:mb-0">
                In nur 14 Tagen zum perfekten ersten Eindruck im Web.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-rose-600 hover:bg-rose-50 font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:translate-y-[-2px]"
            >
              Jetzt starten
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default PricingPackages
