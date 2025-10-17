import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Heart,
  Clock,
  Calendar,
  Users,
  CheckCircle,
  Star,
  ArrowRight,
} from 'lucide-react'

const AboutPage: React.FC = () => {
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

  return (
    <div className="pt-24 pb-16">
      {/* Hintergrund mit warmem Farbverlauf */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-rose-50 to-amber-50 -z-10" />

      <div className="container mx-auto px-4 sm:px-6">
        {/* Überschrift und Intro */}
        <div className="text-center mb-16">
          <motion.h1
            className="text-3xl sm:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Über <span className="text-rose-500">Mich</span>
          </motion.h1>
          <motion.p
            className="text-gray-600 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Als digitaler Mentor und dipl. Lebens- und Sozialberater unterstütze ich
            Gründer:innen dabei, ihre Online-Präsenz sicher und professionell aufzubauen.
          </motion.p>
        </div>

        {/* Hauptinhalt */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Foto und Bildunterschrift */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-300 to-amber-300 transform rotate-3 rounded-2xl"></div>
              <img
                src="images/about/me.png"
                alt="Sascha Kohler"
                className="relative z-10  rounded-2xl shadow-xl"
              />

              <div className="absolute -bottom-5 -right-5 bg-white rounded-lg shadow-lg p-4 z-20">
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map(star => (
                    <Star
                      key={star}
                      className="h-5 w-5 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>
                <p className="text-sm font-medium mt-1">
                  100% zufriedene Kunden
                </p>
              </div>
            </div>
          </motion.div>

          {/* Text über mich */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Ihr digitaler Begleiter in der Gründungsphase
            </h2>
            <p className="text-gray-600 mb-4">
              Seit den frühen 90er Jahren bin ich in der digitalen Welt zuhause – mit einer
              Affinität, die fast schon Nerd-Charakter hat. Von WordPress über React-Frameworks
              bis hin zu 3D mit WebGL und Three.js: <strong>Anything is possible</strong>.
              Aber das Wichtigste für Sie als Gründer:in ist nicht die Technologie an sich,
              sondern dass sie für Sie arbeitet.
            </p>

            <p className="text-gray-600 mb-6">
              Als <strong>dipl. Lebens- und Sozialberater</strong> sowie selbst Einzelunternehmer:in
              (Digitales Business, Mentaltrainer, Coach, NLP-Trainer) verstehe ich Ihre Situation
              wie kaum ein anderer. Ich kenne nicht nur den pragmatischen Ansatz eines
              Computerspezialisten, sondern stehe im <strong>wohlwollenden Verständnis</strong> als
              Mentor an Ihrer Seite – eine Kombination, die Sie am Markt so nicht finden werden.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                {
                  icon: <Clock className="h-5 w-5 text-rose-500" />,
                  text: 'Seit Anfang der 90er im Web',
                },
                {
                  icon: <Calendar className="h-5 w-5 text-rose-500" />,
                  text: 'Dipl. Lebens- & Sozialberater',
                },
                {
                  icon: <Users className="h-5 w-5 text-rose-500" />,
                  text: 'Selbst Einzelunternehmer:in',
                },
                {
                  icon: <Heart className="h-5 w-5 text-rose-500" />,
                  text: 'KI & Automatisierungs-Expertise',
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center">
                  <div className="mr-2">{item.icon}</div>
                  <span className="text-sm text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-rose-500 hover:bg-rose-600 text-white rounded-lg font-medium transition-all shadow-md hover:shadow-lg"
            >
              Lernen Sie mich kennen
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>

        {/* Mein Ansatz */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Mein Ansatz</h2>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: <Heart className="h-8 w-8 text-rose-500" />,
                title: 'Ganzheitliches Verständnis',
                desc: 'Als dipl. Lebens- und Sozialberater verstehe ich die Herausforderungen einer Gründung und begleite Sie mit Empathie und Kompetenz.',
              },
              {
                icon: <CheckCircle className="h-8 w-8 text-amber-500" />,
                title: 'Komplexität einfach gemacht',
                desc: 'Von WordPress über Google Analytics bis GDPR – ich übernehme die technische Komplexität, damit Sie sich auf Ihr Business konzentrieren können.',
              },
              {
                icon: <Clock className="h-8 w-8 text-amber-500" />,
                title: 'Mehr als nur Code',
                desc: 'Mit Expertise in KI, Automatisierung und modernsten Technologien schaffe ich individuelle Lösungen – aber immer menschzentriert und verständlich.',
              },
            ].map((approach, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-200"
                variants={itemVariants}
              >
                <div className="mb-4">{approach.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {approach.title}
                </h3>
                <p className="text-gray-600">{approach.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Warum WordPress */}
        <div className="mb-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">
              WordPress – Die perfekte Basis für Gründer:innen
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Als Gründer:in brauchen Sie eine Lösung, die professionell ist, aber ohne
              Vorkenntnisse bedienbar bleibt. WordPress bietet genau diese Balance –
              und ich richte es so ein, dass Sie sich sofort zurechtfinden.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white from-rose-50 to-amber-50 rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-800">
                Vorteile für Sie
              </h3>
              <ul className="space-y-3">
                {[
                  'Einfache Bedienung ohne Programmierkenntnisse',
                  'Flexibel erweiterbar mit über 50.000 Plugins',
                  'Kostengünstig im Vergleich zu maßgeschneiderten Lösungen',
                  'Regelmäßige Updates für Sicherheit und neue Funktionen',
                  'Volle Kontrolle über Ihre Inhalte',
                ].map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl border border-gray-200 p-6 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-800">
                WordPress Fakten
              </h3>
              <ul className="space-y-4">
                {[
                  {
                    stat: '43%',
                    text: 'aller Websites im Internet nutzen WordPress',
                  },
                  {
                    stat: '65.000+',
                    text: 'Plugins für zusätzliche Funktionalität',
                  },
                  {
                    stat: '10.000+',
                    text: 'professionelle Themes für Ihr Design',
                  },
                  {
                    stat: '200+',
                    text: 'Millionen Websites vertrauen auf WordPress',
                  },
                  { stat: '60+', text: 'Sprachen werden unterstützt' },
                ].map((fact, idx) => (
                  <li key={idx} className="flex">
                    <div className="w-20 font-bold text-rose-500 text-lg">
                      {fact.stat}
                    </div>
                    <div className="text-gray-700">{fact.text}</div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Qualifikationen und Zertifizierungen */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Meine Expertise für Ihren Start
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '💻',
                title: 'Technologien',
                items: [
                  'WordPress & React',
                  'WebGL & Three.js',
                  'KI-Integration',
                ],
              },
              {
                icon: '🎯',
                title: 'Digitale Services',
                items: [
                  'Google Analytics & Tag Manager',
                  'Email-Marketing (Brevo)',
                  'Automatisierung (make.com)',
                ],
              },
              {
                icon: '🤝',
                title: 'Persönliche Kompetenz',
                items: [
                  'Dipl. Lebens- & Sozialberater',
                  'NLP-Trainer & Coach',
                  'Mentaltrainer',
                ],
              },
            ].map((qual, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="text-3xl mb-4">{qual.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {qual.title}
                </h3>
                <ul className="space-y-2">
                  {qual.items.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-rose-400 rounded-full mr-2"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="bg-gradient-to-r from-rose-400 to-amber-500 rounded-xl p-8 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-3">
            Bereit für Ihren digitalen Start?
          </h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Als Gründer:in haben Sie genug zu tun. Lassen Sie uns in einem kostenlosen
            Erstgespräch herausfinden, wie ich Sie als digitaler Mentor und technischer
            Partner optimal unterstützen kann.
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

export default AboutPage
