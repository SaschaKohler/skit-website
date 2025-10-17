import React from 'react'
import { motion } from 'framer-motion'
import { AlertCircle, Clock, CheckCircle2, Sparkles } from 'lucide-react'

const WhyNotDIYSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-[var(--color-background)] to-[var(--color-ui-dark)] w-full">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-6xl">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[var(--color-text)] mb-4">
            "Ist ja nur ein kleines Unternehmen..."
          </h2>
          <p className="text-xl text-[var(--color-text-light)] max-w-3xl mx-auto">
            Ein Satz, den ich oft höre. Und dann, drei Monate später...
          </p>
        </motion.div>

        {/* Story Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Die Realität */}
          <motion.div
            className="bg-gradient-to-br from-rose-50 to-rose-100 dark:from-rose-900/20 dark:to-rose-800/20 rounded-xl p-8 border-2 border-rose-200 dark:border-rose-700"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-start gap-4 mb-6">
              <AlertCircle className="h-8 w-8 text-rose-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold font-subheading text-gray-800 dark:text-gray-100 mb-2">
                  Die Realität
                </h3>
                <p className="text-gray-700 dark:text-gray-200 text-lg italic">
                  "Mache ich schnell selbst..."
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-rose-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Woche 1:</strong> WordPress Installation – welches Theme? Welche Plugins?
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-rose-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Woche 2:</strong> Google Analytics einrichten – wie war das nochmal mit dem Tag Manager?
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-rose-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Woche 3:</strong> Cookie-Banner! DSGVO! Impressum! Datenschutzerklärung! Abmahnung?!
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-rose-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Woche 4:</strong> SEO... Newsletter... Formulare... Mobile-Ansicht kaputt...
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-rose-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Monat 2:</strong> Das wird zum Vollzeit-Job. Und das Business? Das wartet...
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200 font-semibold text-center">
                "Es ist ja nur eine Website für mein kleines Unternehmen. 
                Das kann doch nicht so kompliziert sein..."
              </p>
            </div>
          </motion.div>

          {/* Die Lösung */}
          <motion.div
            className="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 rounded-xl p-8 border-2 border-emerald-200 dark:border-emerald-700"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-start gap-4 mb-6">
              <Sparkles className="h-8 w-8 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold font-subheading text-gray-800 dark:text-gray-100 mb-2">
                  Die Lösung
                </h3>
                <p className="text-gray-700 dark:text-gray-200 text-lg italic">
                  "Ich kümmere mich um alles."
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Tag 1:</strong> Kostenloses Erstgespräch – ich höre zu, verstehe Ihre Situation
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Woche 1-2:</strong> Ich baue Ihre Website, richte Google Services ein, kümmere mich um GDPR
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Tag 14:</strong> Ihre Website ist online. Rechtssicher. SEO-optimiert. Professionell.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Danach:</strong> SEO-Management, Updates, Support – ich bleibe an Ihrer Seite
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Sie?</strong> Konzentrieren sich auf Ihr Business. Darauf kommt es an.
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200 font-semibold text-center">
                "Keine Vorkenntnisse nötig. Kein Technik-Stress. 
                Nur Sie und Ihr Business – genau so soll es sein."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Story */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-amber-50 to-rose-50 dark:from-amber-900/20 dark:to-rose-900/20 rounded-xl p-8 border-2 border-amber-200 dark:border-amber-700">
            <h3 className="text-2xl font-bold font-subheading text-gray-800 dark:text-gray-100 mb-4 text-center">
              Warum ich das verstehe
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
              Als selbst Einzelunternehmer:in kenne ich beide Seiten: Die technische Komplexität 
              <strong> und</strong> die Herausforderung, ein Business aufzubauen. Ich weiß, wie schnell 
              aus "mache ich schnell selbst" ein monatelanges Projekt wird, das Sie von dem abhält, 
              was wirklich zählt – Ihre Kund:innen, Ihre Dienstleistung, Ihr Business.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
              Deshalb gibt es sk.IT Software: Damit Sie sich auf das konzentrieren können, was Sie 
              am besten können. Den Rest – WordPress, Google Analytics, GDPR, SEO-Management, 
              Email-Marketing, Automatisierung – das übernehme ich. <strong>Alles aus einer Hand.</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-rose-500 to-amber-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all transform hover:translate-y-[-2px]"
              >
                Kostenloses Erstgespräch vereinbaren
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center px-8 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-semibold rounded-lg border-2 border-gray-300 dark:border-gray-600 hover:border-amber-500 dark:hover:border-amber-500 transition-all"
              >
                Pakete ansehen
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyNotDIYSection
