import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Clock, UserCheck, Info, Check } from 'lucide-react'
import LegalLayout from '../components/layouts/LegalLayout'

const Datenschutz: React.FC = () => {
  // Animation für die einzelnen Sektionen
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  }

  return (
    <LegalLayout title="Datenschutzerklärung" lastUpdated="08.06.2024">
      <motion.section
        className="space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-800">
            <Info className="h-6 w-6 text-rose-500 mr-2" />
            Einleitung und Überblick
          </h2>
          <div className="bg-gradient-to-br from-rose-50 to-amber-50 rounded-lg p-5 shadow-sm">
            <p className="text-gray-700">
              Wir haben diese Datenschutzerklärung verfasst, um Ihnen gemäß der
              Vorgaben der Datenschutz-Grundverordnung (EU) 2016/679 und
              anwendbaren nationalen Gesetzen zu erklären, welche
              personenbezogenen Daten wir verarbeiten, zukünftig verarbeiten
              werden und welche rechtmäßigen Möglichkeiten Sie haben.
            </p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-800">
            <UserCheck className="h-6 w-6 text-rose-500 mr-2" />
            Kontaktdaten des Verantwortlichen
          </h2>
          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <p className="text-gray-700 mb-3">
              Sollten Sie Fragen zum Datenschutz oder zur Verarbeitung
              personenbezogener Daten haben, finden Sie nachfolgend die
              Kontaktdaten der verantwortlichen Person bzw. Stelle:
            </p>
            <div className="bg-gradient-to-br from-rose-50 to-amber-50 rounded-lg p-4">
              <p className="text-gray-700">
                Sascha Kohler
                <br />
                Furth 6<br />
                4311 Schwertberg
                <br />
                E-Mail:{' '}
                <a
                  href="mailto:office@sascha-kohler.at"
                  className="text-rose-600 hover:text-rose-700 transition-colors"
                >
                  office@sascha-kohler.at
                </a>
                <br />
                Telefon:{' '}
                <a
                  href="tel:+43650903037"
                  className="text-rose-600 hover:text-rose-700 transition-colors"
                >
                  0650/9030372
                </a>
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-800">
            <Clock className="h-6 w-6 text-rose-500 mr-2" />
            Speicherdauer
          </h2>
          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <p className="text-gray-700">
              Dass wir personenbezogene Daten nur so lange speichern, wie es für
              die Bereitstellung unserer Dienstleistungen und Produkte unbedingt
              notwendig ist, gilt als generelles Kriterium bei uns. Das
              bedeutet, dass wir personenbezogene Daten löschen, sobald der
              Grund für die Datenverarbeitung nicht mehr vorhanden ist.
            </p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-800">
            <Shield className="h-6 w-6 text-rose-500 mr-2" />
            Rechte laut Datenschutz-Grundverordnung
          </h2>
          <div className="bg-gradient-to-br from-rose-50 to-amber-50 rounded-lg p-5 shadow-sm">
            <p className="text-gray-700 mb-3">
              Gemäß Artikel 13, 14 DSGVO informieren wir Sie über die folgenden
              Rechte:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <div className="bg-rose-100 text-rose-600 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                  <Check className="h-4 w-4" />
                </div>
                <span>Recht auf Auskunft (Artikel 15 DSGVO)</span>
              </li>
              <li className="flex items-start">
                <div className="bg-rose-100 text-rose-600 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                  <Check className="h-4 w-4" />
                </div>
                <span>Recht auf Berichtigung (Artikel 16 DSGVO)</span>
              </li>
              <li className="flex items-start">
                <div className="bg-rose-100 text-rose-600 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                  <Check className="h-4 w-4" />
                </div>
                <span>
                  Recht auf Löschung ("Recht auf Vergessenwerden") (Artikel 17
                  DSGVO)
                </span>
              </li>
              <li className="flex items-start">
                <div className="bg-rose-100 text-rose-600 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                  <Check className="h-4 w-4" />
                </div>
                <span>
                  Recht auf Einschränkung der Verarbeitung (Artikel 18 DSGVO)
                </span>
              </li>
              <li className="flex items-start">
                <div className="bg-rose-100 text-rose-600 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                  <Check className="h-4 w-4" />
                </div>
                <span>Recht auf Datenübertragbarkeit (Artikel 20 DSGVO)</span>
              </li>
              <li className="flex items-start">
                <div className="bg-rose-100 text-rose-600 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                  <Check className="h-4 w-4" />
                </div>
                <span>Widerspruchsrecht (Artikel 21 DSGVO)</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Hier können weitere Sektionen mit dem gleichen Muster hinzugefügt werden */}
        <motion.div
          variants={itemVariants}
          className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm"
        >
          <p className="text-gray-700 italic">
            <strong>Hinweis:</strong> Dies ist eine gekürzte Version der
            Datenschutzerklärung. In der vollständigen Version finden Sie
            weitere Informationen zu Themen wie Webanalyse, Cookies, Social
            Media und mehr.
          </p>
        </motion.div>
      </motion.section>
    </LegalLayout>
  )
}

export default Datenschutz
