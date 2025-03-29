import React from 'react'
import { motion } from 'framer-motion'
import {
  BookOpen,
  FileText,
  CreditCard,
  Users,
  Lock,
  FileCheck,
  ShieldCheck,
  Eye,
} from 'lucide-react'
import LegalLayout from '../components/layouts/LegalLayout'

const AGB: React.FC = () => {
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

  // AGBs mit Icon
  const agbSections = [
    {
      title: '1. Geltungsbereich',
      content:
        'Diese Allgemeinen Geschäftsbedingungen (nachfolgend "AGB") gelten für alle Verträge zwischen Sascha Kohler (nachfolgend "wir" oder "uns") und unseren Kunden (nachfolgend "Kunde" oder "Sie").',
      icon: <BookOpen className="h-6 w-6 text-rose-500" />,
    },
    {
      title: '2. Vertragsschluss',
      content:
        'Die Darstellung unserer Dienstleistungen stellt kein rechtlich bindendes Angebot, sondern eine unverbindliche Aufforderung zur Bestellung dar. Durch die Beauftragung unserer Dienstleistungen geben Sie ein verbindliches Angebot zum Vertragsschluss ab.',
      icon: <FileText className="h-6 w-6 text-rose-500" />,
    },
    {
      title: '3. Leistungsumfang',
      content:
        'Der genaue Umfang unserer Leistungen ergibt sich aus der jeweiligen Leistungsbeschreibung im Angebot bzw. der Auftragsbestätigung. Wir behalten uns vor, die vereinbarten Leistungen zu ändern oder von ihnen abzuweichen, wenn die Änderung oder Abweichung unter Berücksichtigung unserer Interessen für den Kunden zumutbar ist.',
      icon: <FileCheck className="h-6 w-6 text-rose-500" />,
    },
    {
      title: '4. Preise und Zahlungsbedingungen',
      content:
        'Alle Preise verstehen sich in Euro und zuzüglich der gesetzlichen Mehrwertsteuer. Rechnungen sind innerhalb von 14 Tagen nach Rechnungsdatum ohne Abzug zur Zahlung fällig.',
      icon: <CreditCard className="h-6 w-6 text-rose-500" />,
    },
    {
      title: '5. Mitwirkungspflichten des Kunden',
      content:
        'Der Kunde ist verpflichtet, uns alle für die Durchführung unserer Leistungen erforderlichen Informationen, Materialien und Zugänge rechtzeitig zur Verfügung zu stellen.',
      icon: <Users className="h-6 w-6 text-rose-500" />,
    },
    {
      title: '6. Urheberrecht und Nutzungsrechte',
      content:
        'Alle von uns erstellten Werke (Websites, Grafiken, Texte etc.) sind urheberrechtlich geschützt. Nach vollständiger Bezahlung erhält der Kunde ein einfaches, nicht übertragbares Nutzungsrecht.',
      icon: <Lock className="h-6 w-6 text-rose-500" />,
    },
    {
      title: '7. Gewährleistung und Haftung',
      content:
        'Wir haften für Schäden nur bei Vorsatz oder grober Fahrlässigkeit. Die Haftung für leichte Fahrlässigkeit ist ausgeschlossen, soweit keine wesentlichen Vertragspflichten betroffen sind.',
      icon: <ShieldCheck className="h-6 w-6 text-rose-500" />,
    },
    {
      title: '8. Vertraulichkeit',
      content:
        'Beide Parteien verpflichten sich, alle im Rahmen der Zusammenarbeit erhaltenen Informationen vertraulich zu behandeln und nicht an Dritte weiterzugeben.',
      icon: <Eye className="h-6 w-6 text-rose-500" />,
    },
    {
      title: '9. Schlussbestimmungen',
      content:
        'Es gilt österreichisches Recht unter Ausschluss des UN-Kaufrechts. Gerichtsstand ist Schwertberg, Österreich, soweit gesetzlich zulässig.',
      icon: <FileText className="h-6 w-6 text-rose-500" />,
    },
  ]

  return (
    <LegalLayout
      title="Allgemeine Geschäftsbedingungen"
      lastUpdated="21.12.2024"
    >
      <motion.section
        className="space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {agbSections.map((section, index) => (
          <motion.div key={index} variants={itemVariants}>
            <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-800">
              <span className="mr-2">{section.icon}</span>
              {section.title}
            </h2>
            <div
              className={`rounded-lg p-5 shadow-sm ${
                index % 2 === 0
                  ? 'bg-gradient-to-br from-rose-50 to-amber-50'
                  : 'bg-white border border-gray-200'
              }`}
            >
              <p className="text-gray-700">{section.content}</p>
            </div>
          </motion.div>
        ))}

        <motion.div
          variants={itemVariants}
          className="mt-8 p-6 bg-gradient-to-br from-rose-50 to-amber-50 rounded-lg shadow-sm border border-rose-100"
        >
          <h3 className="font-semibold mb-3 text-gray-800">
            Kontakt bei Fragen
          </h3>
          <p className="text-gray-700">
            Bei Fragen zu unseren AGB können Sie uns jederzeit unter{' '}
            <a
              href="mailto:office@sascha-kohler.at"
              className="text-rose-600 hover:text-rose-700 transition-colors"
            >
              office@sascha-kohler.at
            </a>{' '}
            kontaktieren.
          </p>
        </motion.div>
      </motion.section>
    </LegalLayout>
  )
}

export default AGB
