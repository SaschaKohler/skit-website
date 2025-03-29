import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Globe, MapPin, Building, FileText } from 'lucide-react'
import LegalLayout from '../components/layouts/LegalLayout'

const Impressum: React.FC = () => {
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
    <LegalLayout title="Impressum">
      <motion.div
        className="space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.section variants={itemVariants}>
          <div className="flex items-start">
            <div className="mr-4 mt-1">
              <Building className="h-6 w-6 text-rose-500" />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-3 text-gray-800">
                Informationen über den Diensteanbieter
              </h2>
              <p className="text-lg font-medium mb-2">Sascha Kohler</p>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-rose-400 mr-2 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-600">Furth 6</p>
                  <p className="text-gray-600 mb-4">
                    4311 Schwertberg, Österreich
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="bg-gradient-to-br from-rose-50 to-amber-50 rounded-lg p-5 shadow-sm">
            <h3 className="font-semibold mb-3 flex items-center">
              <Phone className="h-5 w-5 text-rose-500 mr-2" />
              Kontakt
            </h3>
            <p className="text-gray-700 mb-2">
              <strong>Tel.:</strong>{' '}
              <a
                href="tel:+436509030372"
                className="text-rose-600 hover:text-rose-700 transition-colors"
              >
                0650/90 30 372
              </a>
            </p>
            <p className="text-gray-700">
              <strong>E-Mail:</strong>{' '}
              <a
                href="mailto:office@sascha-kohler.at"
                className="text-rose-600 hover:text-rose-700 transition-colors"
              >
                office@sascha-kohler.at
              </a>
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <h3 className="font-semibold mb-3 flex items-center">
              <Globe className="h-5 w-5 text-rose-500 mr-2" />
              Unternehmensgegenstand
            </h3>
            <p className="text-gray-700">Werbeagentur & IT Dienstleistungen</p>
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="space-y-5">
          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <h3 className="font-semibold mb-3 flex items-center">
              <FileText className="h-5 w-5 text-rose-500 mr-2" />
              Gewerbedaten
            </h3>
            <p className="text-gray-700 mb-2">
              <strong>GISA:</strong> 37168438, 37168445
            </p>
            <p className="text-gray-700">
              <strong>Mitglied bei:</strong> WKO, Landesinnung, etc.
            </p>
          </div>

          <div className="bg-gradient-to-br from-rose-50 to-amber-50 rounded-lg p-5 shadow-sm">
            <h3 className="font-semibold mb-3 flex items-center">
              <Building className="h-5 w-5 text-rose-500 mr-2" />
              Aufsichtsbehörde/Gewerbebehörde
            </h3>
            <p className="text-gray-700">Bezirkshauptmannschaft Perg</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <h3 className="font-semibold mb-3 flex items-center">
              <FileText className="h-5 w-5 text-rose-500 mr-2" />
              Berufsbezeichnung
            </h3>
            <p className="text-gray-700 mb-2">
              Webdesign + IT-Dienstleister <em>Full-Stack</em>
            </p>
            <p className="text-gray-700">
              <strong>Verleihungsstaat:</strong> Österreich
            </p>
          </div>
        </motion.section>

        <motion.section variants={itemVariants}>
          <div className="bg-gradient-to-br from-rose-50 to-amber-50 rounded-lg p-5 shadow-sm">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Mail className="h-5 w-5 text-rose-500 mr-2" />
              Datenschutz
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>E-Mail der Datenschutzstelle:</strong>{' '}
                <a
                  href="mailto:office@sascha-kohler.at"
                  className="text-rose-600 hover:text-rose-700 transition-colors"
                >
                  office@sascha-kohler.at
                </a>
              </p>
              <p>
                <strong>Tel.:</strong>{' '}
                <a
                  href="tel:+436509030372"
                  className="text-rose-600 hover:text-rose-700 transition-colors"
                >
                  0650/9030372
                </a>
              </p>
              <p>
                <strong>Impressum der Datenschutzstelle:</strong>{' '}
                <a
                  href="https://skit.sascha-kohler.at/impressum/"
                  className="text-rose-600 hover:text-rose-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://skit.sascha-kohler.at/impressum/
                </a>
              </p>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </LegalLayout>
  )
}

export default Impressum
