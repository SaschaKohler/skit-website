import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, MessageCircleQuestion } from 'lucide-react'

interface FAQ {
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    question: 'Wie lange dauert es, bis meine Website online ist?',
    answer:
      'Ihre professionelle WordPress-Website ist in nur 14 Tagen online. Das beinhaltet die komplette Einrichtung: Website, Google Analytics, GDPR-Consent Banner, Email-Marketing Setup und alle rechtlichen Seiten (Impressum, Datenschutz, AGB).',
  },
  {
    question: 'Brauche ich technische Vorkenntnisse für WordPress?',
    answer:
      'Nein, Sie brauchen keinerlei technische Vorkenntnisse. Ich richte alles für Sie ein und zeige Ihnen in einer persönlichen Schulung, wie Sie Ihre Website einfach selbst pflegen können. WordPress ist speziell für Nicht-Techniker:innen entwickelt worden.',
  },
  {
    question: 'Was kostet eine WordPress-Website für Gründer:innen?',
    answer:
      'Die Preise beginnen beim Starter-Paket mit professioneller Website, Google Services und GDPR-Compliance. Alle Pakete beinhalten die komplette digitale Grundausstattung ohne versteckte Kosten. Im kostenlosen Erstgespräch besprechen wir, welches Paket am besten zu Ihnen passt.',
  },
  {
    question: 'Ist meine Website DSGVO-konform?',
    answer:
      'Ja, absolut. Jede Website beinhaltet einen GDPR Consent V2 konformen Cookie-Banner, eine rechtssichere Datenschutzerklärung, ein Impressum und AGB. Sie können rechtssicher durchstarten ohne sich um Abmahnungen sorgen zu müssen.',
  },
  {
    question: 'Was unterscheidet sk.IT Software von anderen Webdesign-Agenturen?',
    answer:
      'Die Kombination aus drei Elementen macht den Unterschied: 1) Technische Expertise seit den frühen 90ern in Web, React, WebGL und KI, 2) Digitale Kompetenz im WordPress- und Google-Ökosystem, 3) Menschliche Kompetenz als dipl. Lebens- und Sozialberater, NLP-Trainer und Coach. Als selbst Einzelunternehmer:in verstehe ich Ihre Gründungssituation aus eigener Erfahrung.',
  },
  {
    question: 'Welche Services sind im WordPress-Paket enthalten?',
    answer:
      'Das komplette Paket umfasst: Professionelle WordPress-Website mit responsivem Design, Google Analytics und Tag Manager Setup, Google Unternehmensprofil, Google Search Console, GDPR-konformer Cookie-Banner, Datenschutzerklärung, Impressum, AGB, Brevo Email-Marketing Setup, Newsletter-Integration, und persönliche Schulung. Optional: Prozessautomatisierung mit make.com.',
  },
  {
    question: 'Für wen ist sk.IT Software ideal?',
    answer:
      'Ideal für Unternehmensgründer:innen und Einzelunternehmer:innen, speziell Teilnehmer:innen des AMS Unternehmer-Gründer-Programms in Österreich, frisch gegründete Einzelunternehmen, und Gründer:innen die wissen dass Online-Präsenz wichtig ist, aber keine Zeit für die technische Komplexität haben.',
  },
  {
    question: 'Bietet sk.IT Software auch individuelle Entwicklung an?',
    answer:
      "Ja, neben WordPress-Websites biete ich auch individuelle Entwicklung mit React, TypeScript, WebGL (Three.js), KI-gestützte Features und maßgeschneiderte Webanwendungen. 'Anything is possible' - für komplexere Anforderungen finden wir immer eine Lösung.",
  },
  {
    question: 'Gibt es Mentoring und Beratung über die technische Umsetzung hinaus?',
    answer:
      'Ja, als dipl. Lebens- und Sozialberater, NLP-Trainer, Coach und Mentaltrainer biete ich ganzheitliche Begleitung. Ich verstehe die Herausforderungen der Gründungsphase aus eigener Erfahrung und unterstütze nicht nur technisch, sondern auch menschlich und strategisch.',
  },
  {
    question: 'Wie läuft das kostenlose Erstgespräch ab?',
    answer:
      'Im kostenlosen Erstgespräch klären wir Ihre Bedürfnisse, Ihre Zielgruppe und Ihre digitalen Ziele. Ich zeige Ihnen, wie ich Sie bei Ihrem sicheren Start in die digitale Welt unterstützen kann. Es ist ein unverbindliches Kennenlernen ohne Verkaufsdruck - Sie entscheiden danach in Ruhe, ob Sie mit mir arbeiten möchten.',
  },
]

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-[var(--color-background)] w-full" id="faq">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-4xl">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <MessageCircleQuestion className="h-10 w-10 text-rose-500" />
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[var(--color-text)]">
              Häufig gestellte Fragen
            </h2>
          </div>
          <p className="text-[var(--color-text-light)] text-lg max-w-2xl mx-auto">
            Alles, was Sie über WordPress-Websites für Gründer:innen wissen müssen
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-[var(--color-ui-dark)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              {/* Question Button */}
              <button
                onClick={() => { toggleFAQ(index); }}
                className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-semibold text-[var(--color-text)] font-subheading">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="h-5 w-5 text-rose-500 flex-shrink-0" />
                </motion.div>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-[var(--color-text-light)] font-body leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-[var(--color-text-light)] mb-4">
            Haben Sie noch weitere Fragen?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-rose-500 to-amber-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all transform hover:translate-y-[-2px]"
          >
            Kostenloses Erstgespräch vereinbaren
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQSection
