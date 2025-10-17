import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Check, Users, Calendar, Zap, Heart } from 'lucide-react'

interface ServicesPageProps {
  category?: 'web' | 'automation' | 'api' | 'mobile'
}

const ServicesPage: React.FC<ServicesPageProps> = ({ category }) => {
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
      className={`bg-[var(--color-ui-dark)] rounded-xl p-6 shadow-lg border ${
        isPrimary
          ? 'border-[var(--color-primary-light)]'
          : 'border-[var(--color-border)]'
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

        <p className="text-[var(--color-text)] mb-5">{description}</p>

        <ul className="space-y-3 mb-6 flex-grow">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-[var(--color-text)]">{feature}</span>
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
            {category ? (
              <>
                {category === 'web' && 'Web-Entwicklung'}
                {category === 'automation' && 'Automatisierung'}
                {category === 'api' && 'API-Integration'}
                {category === 'mobile' && 'Mobile Anwendungen'}
              </>
            ) : (
              <>
                Digitale Grundlagen für <span className="text-rose-500">Ihre Gründung</span>
              </>
            )}
          </motion.h1>
          <motion.p
            className="text-gray-600 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {category ? (
              <>
                {category === 'web' &&
                  'Maßgeschneiderte Webanwendungen und Portale für Ihre spezifischen Anforderungen. Von einfachen Websites bis zu komplexen Applikationen.'}
                {category === 'automation' &&
                  'Automatisieren Sie wiederkehrende Geschäftsprozesse und steigern Sie Ihre Effizienz durch intelligente Workflows und Datenverarbeitung.'}
                {category === 'api' &&
                  'Verbinden Sie Ihre Systeme nahtlos mit externen Diensten und Plattformen. Entwicklung, Integration und Optimierung von APIs.'}
                {category === 'mobile' &&
                  'Native und hybride Apps für iOS und Android mit fokussierter Nutzererfahrung. Cross-Platform-Entwicklung mit modernsten Technologien.'}
              </>
            ) : (
              <>
                Alles, was Sie für einen sicheren und professionellen Start in die digitale Welt brauchen –
                speziell für Gründer:innen und Einzelunternehmer:innen konzipiert.
              </>
            )}
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
            icon={
              <div className="flex items-center justify-center">
                <img
                  src="/img/services/web-development.svg"
                  alt="WordPress Website"
                  className="h-48 w-auto"
                />
              </div>
            }
            name="WordPress Website"
            description="Ihre professionelle Website mit WordPress – einfach zu bedienen und perfekt für Gründer:innen."
            features={[
              'Responsive Design für alle Geräte',
              'Einfache Content-Verwaltung',
              'SEO-optimiert',
              'Schnelle Ladezeiten',
              'Professionelles Theme-Setup',
              'Schulung in der Bedienung',
            ]}
            isPrimary={true}
          />

          <ServiceCard
            icon={
              <div className="flex items-center justify-center">
                <img
                  src="/img/services/automation.svg"
                  alt="Google Services"
                  className="h-48 w-auto"
                />
              </div>
            }
            name="Google Services"
            description="Volle Kontrolle über Ihre Online-Präsenz mit professionell eingerichteten Google-Tools."
            features={[
              'Google Analytics Setup',
              'Google Tag Manager',
              'Google Unternehmensprofil',
              'Search Console Integration',
              'Basis SEO-Optimierung',
              'Performance-Tracking',
            ]}
          />

          <ServiceCard
            icon={
              <div className="flex items-center justify-center">
                <img
                  src="/img/services/mobile-apps.svg"
                  alt="GDPR & Datenschutz"
                  className="h-48 w-auto"
                />
              </div>
            }
            name="GDPR & Datenschutz"
            description="Rechtssicher durchstarten mit DSGVO-konformer Website-Gestaltung."
            features={[
              'Cookie-Banner (GDPR Consent V2)',
              'Datenschutzerklärung',
              'Impressum',
              'AGB-Erstellung',
              'DSGVO-Grundstandards',
              'Cookie-Management',
            ]}
          />

          <ServiceCard
            icon={
              <div className="flex items-center justify-center">
                <img
                  src="/img/services/api-integration.svg"
                  alt="Email-Marketing"
                  className="h-48 w-auto"
                />
              </div>
            }
            name="Email-Marketing"
            description="Bleiben Sie mit Ihren Kund:innen in Kontakt – professionelles Email-Marketing mit Brevo."
            features={[
              'Brevo Account-Setup',
              'Newsletter-Integration',
              'Automatisierte Kampagnen',
              'Kontaktformular-Anbindung',
              'Email-Vorlagen',
              'DSGVO-konforme Einwilligungen',
            ]}
          />

          <ServiceCard
            icon={
              <div className="flex items-center justify-center">
                <img
                  src="/img/services/e-commerce.svg"
                  alt="Automatisierung mit make.com"
                  className="h-48 w-auto"
                />
              </div>
            }
            name="Automatisierung"
            description="Sparen Sie Zeit mit intelligenten Automatisierungen für Ihre Geschäftsprozesse."
            features={[
              'make.com Workflow-Setup',
              'Prozess-Automatisierung',
              'System-Integrationen',
              'Lead-Management',
              'Daten-Synchronisation',
              'Benachrichtigungen & Alerts',
            ]}
          />

          <ServiceCard
            icon={
              <div className="flex items-center justify-center">
                <img
                  src="/img/services/devops.svg"
                  alt="Individuelle Lösungen"
                  className="h-48 w-auto"
                />
              </div>
            }
            name="Individuelle Entwicklung"
            description="Für komplexere Anforderungen: Maßgeschneiderte Lösungen mit modernsten Technologien."
            features={[
              'React/TypeScript Apps',
              'WebGL & Three.js Visualisierungen',
              'Custom API-Integrationen',
              'KI-gestützte Features',
              'Progressive Web Apps',
              'Anything is possible',
            ]}
          />
        </motion.div>

        {/* Zusätzliche Services */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Zusätzliche Unterstützung
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Users className="h-6 w-6 text-rose-500" />,
                title: 'Mentoring & Beratung',
                desc: 'Als dipl. Lebens- und Sozialberater begleite ich Sie ganzheitlich durch Ihre Gründungsphase.',
              },
              {
                icon: <Zap className="h-6 w-6 text-amber-500" />,
                title: 'Schulung & Training',
                desc: 'Lernen Sie, Ihre Website selbst zu pflegen und Ihre digitalen Tools effektiv zu nutzen.',
              },
              {
                icon: <Heart className="h-6 w-6 text-rose-500" />,
                title: 'Laufende Betreuung',
                desc: 'Auch nach dem Launch stehe ich Ihnen als verlässlicher Partner zur Seite.',
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                className="bg-[var(--color-ui-dark)] border border-[var(--color-border)] rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-[var(--color-text-dark)]">
                  {service.title}
                </h3>
                <p className="text-[var(--color-text)] mb-4">{service.desc}</p>
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
          <h2 className="text-2xl font-bold mb-6 text-center">So arbeiten wir zusammen</h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                step: 1,
                title: 'Kennenlernen',
                desc: 'Kostenloses Erstgespräch – wir lernen uns kennen und besprechen Ihre Anforderungen.',
              },
              {
                step: 2,
                title: 'Konzept',
                desc: 'Gemeinsam entwickeln wir ein Konzept, das zu Ihrer Gründung und Ihrem Budget passt.',
              },
              {
                step: 3,
                title: 'Umsetzung',
                desc: 'Ich setze Ihre Website und alle digitalen Tools professionell auf.',
              },
              {
                step: 4,
                title: 'Schulung',
                desc: 'Sie lernen, wie Sie Ihre Website selbst pflegen und alle Tools nutzen.',
              },
              {
                step: 5,
                title: 'Launch & Support',
                desc: 'Ihr digitaler Auftritt geht live – und ich bleibe Ihr Ansprechpartner.',
              },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                className="bg-[var(--color-ui-dark)] rounded-lg p-5 shadow-sm relative border border-[var(--color-border)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="w-10 h-10 rounded-full bg-rose-500 text-white flex items-center justify-center font-bold absolute -top-5 left-5">
                  {step.step}
                </div>
                <h3 className="font-semibold text-[var(--color-text-dark)] mt-4 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[var(--color-text)]">{step.desc}</p>
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
            Bereit für Ihren sicheren digitalen Start?
          </h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Als Gründer:in brauchen Sie einen Partner, der Sie versteht und Sie
            ohne technischen Ballast ins digitale Zeitalter begleitet. Lassen Sie uns
            in einem kostenlosen Erstgespräch herausfinden, wie ich Sie unterstützen kann.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-white text-rose-600 hover:bg-rose-100 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Kostenloses Erstgespräch
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default ServicesPage
