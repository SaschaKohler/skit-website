import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Check,
  LayoutGrid,
  Smartphone,
  Search,
  ShoppingCart,
  Users,
  Calendar,
  Zap,
  Settings,
  Heart,
} from 'lucide-react'

const ServicesPage: React.FC = () => {
  // Animation Varianten
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  // Service mit Icon, Name, Beschreibung und Features
  interface ServiceProps {
    icon: React.ReactNode
    name: string
    description: string
    features: string[]
    isPrimary?: boolean
  }

  const ServiceCard: React.FC<ServiceProps> = ({
    icon,
    name,
    description,
    features,
    isPrimary = false,
  }) => (
    <motion.div
      variants={itemVariants}
      className={`bg-white rounded-xl p-6 shadow-lg border ${
        isPrimary ? 'border-rose-200' : 'border-gray-200'
      } transition-all duration-300 hover:shadow-xl ${
        isPrimary ? 'relative' : ''
      }`}
    >
      {isPrimary && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-rose-500 to-amber-500 text-white px-4 py-1 rounded-full text-sm font-medium">
          <Heart className="inline-block h-3 w-3 mr-1" /> Empfohlen
        </div>
      )}

      <div className="flex flex-col h-full">
        <div
          className={`w-14 h-14 rounded-full ${
            isPrimary
              ? 'bg-rose-100 text-rose-500'
              : 'bg-amber-100 text-amber-500'
          } flex items-center justify-center mb-5`}
        >
          {icon}
        </div>

        <h3
          className={`text-xl font-bold mb-3 ${isPrimary ? 'text-rose-600' : 'text-gray-800'}`}
        >
          {name}
        </h3>

        <p className="text-gray-600 mb-5">{description}</p>

        <ul className="space-y-3 mb-6 flex-grow">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className={`inline-flex items-center justify-center px-5 py-2 rounded-lg font-medium transition-all ${
            isPrimary
              ? 'bg-rose-500 hover:bg-rose-600 text-white'
              : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
          }`}
        >
          {isPrimary ? 'Jetzt anfragen' : 'Mehr erfahren'}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  )

  return (
    <div className="pt-24 pb-16">
      {/* Hintergrund mit warmem Farbverlauf */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-rose-50 to-amber-50 -z-10" />

      <div className="container mx-auto px-4 sm:px-6">
        {/* Seitenüberschrift */}
        <div className="text-center mb-16">
          <motion.h1
            className="text-3xl sm:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Unsere <span className="text-rose-500">Services</span>
          </motion.h1>
          <motion.p
            className="text-gray-600 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Von der professionellen WordPress-Website bis zu individuellen
            Erweiterungen – alles mit persönlicher Betreuung.
          </motion.p>
        </div>

        {/* Hauptservices Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <ServiceCard
            icon={<LayoutGrid className="h-7 w-7" />}
            name="WordPress Website"
            description="Ihre professionelle Website in nur 14 Tagen online – schnell, unkompliziert und persönlich betreut."
            features={[
              '4-Seiten Basis-Website',
              'Responsive Design für alle Geräte',
              'Content Management System',
              'Domain & Hosting (1 Jahr inklusive)',
              'SEO-Grundeinrichtung',
              'WordPress-Basisschulung',
            ]}
            isPrimary={true}
          />

          <ServiceCard
            icon={<Calendar className="h-7 w-7" />}
            name="Buchungssystem"
            description="Erweitern Sie Ihre Website mit einem professionellen Online-Terminbuchungssystem."
            features={[
              'Automatische Terminverwaltung',
              'Kalendersynchronisation',
              'Zahlungsintegration möglich',
              'E-Mail-Benachrichtigungen',
              'Anpassbare Buchungsregeln',
              'Mobil optimiert',
            ]}
          />

          <ServiceCard
            icon={<Smartphone className="h-7 w-7" />}
            name="Mobile Optimierung"
            description="Machen Sie Ihre Website perfekt auf allen Geräten – vom Smartphone bis zum Desktop."
            features={[
              'Responsive Design',
              'Touch-optimierte Elemente',
              'Schnelle Ladezeiten auf Mobilgeräten',
              'Google Mobile Test bestehen',
              'Optimierte Bilder für mobile Nutzer',
              'Mobile-First Ansatz',
            ]}
          />

          <ServiceCard
            icon={<Search className="h-7 w-7" />}
            name="SEO-Optimierung"
            description="Verbessern Sie Ihre Sichtbarkeit in Google und anderen Suchmaschinen."
            features={[
              'Keyword-Recherche',
              'On-Page Optimierung',
              'Meta-Daten Einrichtung',
              'Google My Business Optimierung',
              'Technische SEO-Optimierung',
              'Monatliche Performance-Berichte',
            ]}
          />

          <ServiceCard
            icon={<ShoppingCart className="h-7 w-7" />}
            name="E-Commerce Integration"
            description="Erweitern Sie Ihre Website um einen Online-Shop und verkaufen Sie Ihre Produkte online."
            features={[
              'WooCommerce Integration',
              'Produkt-Katalog Einrichtung',
              'Zahlungsanbieter-Integration',
              'Steuerliche Einstellungen',
              'Versand-Module',
              'Shop-Schulung',
            ]}
          />

          <ServiceCard
            icon={<Users className="h-7 w-7" />}
            name="Mitgliederbereich"
            description="Erstellen Sie exklusive Inhalte für angemeldete Benutzer oder verkaufen Sie Mitgliedschaften."
            features={[
              'Geschützter Bereich für Mitglieder',
              'Verschiedene Zugriffsebenen',
              'Abonnement-Modelle möglich',
              'Integration von Zahlungsanbieter',
              'E-Mail-Automatisierung',
              'Mitglieder-Dashboard',
            ]}
          />
        </motion.div>

        {/* Zusätzliche Services */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Weitere Dienstleistungen
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Settings className="h-6 w-6 text-rose-500" />,
                title: 'Website-Wartung',
                desc: 'Regelmäßige Updates und technischer Support für Ihre Website.',
              },
              {
                icon: <Zap className="h-6 w-6 text-amber-500" />,
                title: 'Performance-Optimierung',
                desc: 'Beschleunigen Sie Ihre Website für bessere Nutzerfreundlichkeit und SEO.',
              },
              {
                icon: <Heart className="h-6 w-6 text-rose-500" />,
                title: 'Individuelle Anpassungen',
                desc: 'Maßgeschneiderte Funktionen für Ihre speziellen Anforderungen.',
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <Link
                  to="/contact"
                  className="text-rose-500 hover:text-rose-600 font-medium inline-flex items-center"
                >
                  Details anfragen
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Prozess */}
        <div className="bg-gradient-to-br from-rose-50 to-amber-50 rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Unser Prozess</h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                step: 1,
                title: 'Beratung',
                desc: 'Wir besprechen Ihre Anforderungen und Ziele.',
              },
              {
                step: 2,
                title: 'Konzept',
                desc: 'Wir erstellen ein individuelles Konzept für Ihre Website.',
              },
              {
                step: 3,
                title: 'Design',
                desc: 'Wir gestalten das Layout und Design Ihrer Website.',
              },
              {
                step: 4,
                title: 'Umsetzung',
                desc: 'Wir setzen Ihre Website technisch um und integrieren Inhalte.',
              },
              {
                step: 5,
                title: 'Launch',
                desc: 'Ihre Website geht online und wir schulen Sie in der Bedienung.',
              },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-lg p-5 shadow-sm relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="w-10 h-10 rounded-full bg-rose-500 text-white flex items-center justify-center font-bold absolute -top-5 left-5">
                  {step.step}
                </div>
                <h3 className="font-semibold text-gray-800 mt-4 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="bg-gradient-to-r from-rose-400 to-amber-500 rounded-xl p-8 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-3">
            Bereit für Ihren perfekten Webauftritt?
          </h2>
          <p className="mb-6 max-w-2xl mx-auto">
            In nur 14 Tagen zu Ihrer professionellen WordPress-Website.
            Vereinbaren Sie jetzt ein kostenloses Beratungsgespräch.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-white text-rose-600 hover:bg-rose-100 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Beratungsgespräch vereinbaren
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default ServicesPage
