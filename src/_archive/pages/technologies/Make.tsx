import React from 'react'
import {
  Clock,
  Workflow,
  Settings,
  ArrowDown,
  ArrowRight,
} from 'lucide-react'
import { useContactNavigation } from '../../hooks/useContactNavigation'

interface Step {
  title: string;
  description: string;
}

const MakePage: React.FC = (): React.JSX.Element => {
  const handleContactClick = useContactNavigation()

  const benefits = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Zeit sparen',
      description:
        'Automatisieren Sie wiederkehrende Aufgaben und gewinnen Sie Zeit für das Wesentliche',
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: 'Prozesse optimieren',
      description:
        'Verbinden Sie verschiedene Systeme und lassen Sie sie nahtlos zusammenarbeiten',
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Effizienz steigern',
      description:
        'Reduzieren Sie manuelle Fehler und steigern Sie die Produktivität',
    },
  ]

  const workflowExample: Step[] = [
    {
      title: 'Kontaktformular wird ausgefüllt',
      description: 'Ein Interessent sendet eine Anfrage über Ihre Website',
    },
    {
      title: 'Automatische Datenverarbeitung',
      description:
        'Die Daten werden in Ihrem CRM-System gespeichert und kategorisiert',
    },
    {
      title: 'Personalisierte Antwort',
      description:
        'Eine individuell angepasste Bestätigungsmail wird sofort versendet',
    },
    {
      title: 'Aufgaben erstellen',
      description:
        'Ein Ticket für die Nachverfolgung wird im System erstellt',
    },
    {
      title: 'Benachrichtigung',
      description:
        'Sie erhalten eine Nachricht über die neue Anfrage auf Ihrem Smartphone',
    },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Automatisierung mit Make.com
        </h1>
        <p className="text-xl text-gray-600">
          Verbinden Sie Ihre digitalen Werkzeuge und lassen Sie sie automatisch
          für Sie arbeiten
        </p>
      </div>

      {/* Vorteile */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="text-blue-600 mb-4">{benefit.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
            <p className="text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>

      {/* Workflow Example */}
      <div className="bg-blue-50 p-8 rounded-lg mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">
          So funktioniert&apos;s:
          <br />
          <span className="text-gray-600 font-normal text-lg">
            Beispiel eines automatisierten Workflows
          </span>
        </h2>
        <div className="space-y-4">
          {workflowExample.map((step, index) => (
            <React.Fragment key={index}>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
              {index < workflowExample.length - 1 && (
                <div className="flex justify-center">
                  <ArrowDown className="text-blue-600 w-6 h-6" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">
          Bereit für mehr Automatisierung?
        </h2>
        <p className="text-lg mb-6">
          Lassen Sie uns gemeinsam Ihre Prozesse optimieren
        </p>
        <button 
          onClick={handleContactClick}
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold inline-flex items-center hover:bg-gray-100 transition duration-300"
        >
          Gespräch vereinbaren
          <ArrowRight className="ml-2 w-5 h-5" />
        </button>
      </div>
    </div>
  )
}

export default MakePage