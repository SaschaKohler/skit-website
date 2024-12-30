import React from 'react'
import { Mail, MessageCircle, Users, Target, Send, Clock } from 'lucide-react'

const BrevoPage: React.FC = (): React.JSX.Element => {
  const features = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Persönliche Kommunikation',
      description:
        'Erreichen Sie Ihre Klienten mit authentischen und relevanten Nachrichten',
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'Gezielte Ansprache',
      description:
        'Die richtige Botschaft zum richtigen Zeitpunkt an die richtige Person',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Nachhaltige Beziehungen',
      description:
        'Pflegen Sie den Kontakt zu Ihren Klienten auf natürliche Weise',
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Individuelle Betreuung',
      description:
        'Automatisierte und dennoch persönliche Kommunikation mit jedem Einzelnen',
    },
  ]

  const useCases = [
    {
      title: 'Professionelle Begrüßung',
      description: 'Eine durchdachte Willkommenssequenz für neue Interessenten',
      steps: [
        'Persönliche Begrüßungsnachricht',
        'Nützliche Erstinformationen',
        'Vorstellung Ihrer Beratung',
        'Einladung zum Gespräch',
      ],
    },
    {
      title: 'Kontinuierliche Begleitung',
      description: 'Strukturierte Kommunikation während der Zusammenarbeit',
      steps: [
        'Regelmäßige Updates',
        'Begleitende Informationen',
        'Erfolgsgeschichten',
        'Follow-up Nachrichten',
      ],
    },
    {
      title: 'Langfristige Bindung',
      description: 'Bleiben Sie professionell und persönlich in Kontakt',
      steps: [
        'Geburtstagsnachrichten',
        'Feedback-Gespräche',
        'Newsletter mit Mehrwert',
        'Besondere Anlässe',
      ],
    },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">
        Professionelle Kommunikation mit Brevo
      </h1>

      <div className="prose prose-lg max-w-none mb-12">
        <p>
          Kommunizieren Sie mit Ihren Klienten auf eine Weise, die sowohl
          persönlich als auch professionell ist. Mit Brevo gestalten Sie Ihre
          E-Mail-Kommunikation effizient und zielgerichtet, ohne dabei die
          persönliche Note zu verlieren. Automatisieren Sie Routineaufgaben und
          gewinnen Sie Zeit für das Wesentliche.
        </p>
      </div>

      {/* Core Features */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg 
            transition-shadow duration-300"
          >
            <div className="text-blue-600 mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Automation Examples */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-6">Kommunikation die wirkt</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-white/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
              <p className="text-blue-100 mb-4">{useCase.description}</p>
              <ul className="space-y-2 text-sm">
                {useCase.steps.map((step, stepIndex) => (
                  <li key={stepIndex} className="flex items-start gap-2">
                    <Send className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Integration Benefits */}
      <div className="bg-blue-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-6">
          Vorteile der Brevo-Integration
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-start gap-4">
            <Clock className="w-6 h-6 text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Zeitgewinn</h3>
              <p className="text-gray-600">
                Automatisieren Sie Standardkommunikation und fokussieren Sie
                sich auf wichtige Gespräche.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Target className="w-6 h-6 text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Gezielte Wirkung</h3>
              <p className="text-gray-600">
                Erreichen Sie Ihre Zielgruppe mit relevanten Inhalten zum
                optimalen Zeitpunkt.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Users className="w-6 h-6 text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Individualisierung</h3>
              <p className="text-gray-600">
                Personalisierte Kommunikation für jeden einzelnen Kontakt.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MessageCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Konstanter Dialog</h3>
              <p className="text-gray-600">
                Bleiben Sie regelmäßig und professionell mit Ihren Klienten in
                Kontakt.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Service Offering */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6">Meine Brevo-Services</h2>
        <div className="space-y-4 mb-8">
          <div className="flex items-start gap-3">
            <span className="text-blue-600 mt-1">•</span>
            <p>Einrichtung und Optimierung Ihres Brevo-Accounts</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-blue-600 mt-1">•</span>
            <p>Entwicklung Ihrer Kommunikationsstrategie</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-blue-600 mt-1">•</span>
            <p>
              Erstellung professioneller E-Mail-Vorlagen und Automatisierungen
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-blue-600 mt-1">•</span>
            <p>Integration in Ihre bestehenden Systeme</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-blue-600 mt-1">•</span>
            <p>Individuelle Einarbeitung und fortlaufende Unterstützung</p>
          </div>
        </div>
        <button
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold 
          hover:bg-blue-700 transition duration-300"
        >
          Beratungsgespräch vereinbaren
        </button>
      </div>
    </div>
  )
}

export default BrevoPage

