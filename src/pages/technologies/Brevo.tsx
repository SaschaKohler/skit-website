import React from "react";
import {
  Mail,
  MessageCircle,
  BarChart,
  Users,
  Target,
  Send,
  Clock,
  Settings,
} from "lucide-react";

const BrevoPage: React.FC = () => {
  const features = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "E-Mail Marketing",
      description:
        "Professionelle Newsletter und Marketing-Kampagnen erstellen und versenden",
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "SMS Marketing",
      description: "Direkte Kommunikation mit Kunden über SMS und WhatsApp",
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Analytics & Reports",
      description: "Detaillierte Einblicke in die Performance Ihrer Kampagnen",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Zielgruppen-Segmentierung",
      description:
        "Präzise Zielgruppenansprache durch intelligente Segmentierung",
    },
  ];

  const useCases = [
    {
      title: "Willkommens-Sequenz",
      description:
        "Automatische E-Mail-Serie für neue Newsletter-Abonnenten oder Kunden",
      steps: [
        "Bestätigungsmail nach Anmeldung",
        "Willkommensgeschenk (z.B. PDF-Guide)",
        "Vorstellung Ihrer Services",
        "Spezielle Erstkundenangebote",
      ],
    },
    {
      title: "Verkaufstrichter",
      description:
        "Automatisierter Verkaufsprozess mit personalisierten E-Mails",
      steps: [
        "Interesse wecken mit wertvollen Inhalten",
        "Problemlösungen aufzeigen",
        "Produktvorstellung",
        "Follow-up bei Kaufabbruch",
      ],
    },
    {
      title: "Kundenbindung",
      description:
        "Automatische Kommunikation zur Stärkung der Kundenbeziehung",
      steps: [
        "Geburtstagsmails",
        "Feedback-Anfragen",
        "Reaktivierungskampagnen",
        "Treue-Belohnungen",
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Brevo Marketing Automation</h1>

      <div className="prose prose-lg max-w-none mb-12">
        <p>
          Brevo ist eine All-in-One Marketing-Plattform, die E-Mail-Marketing,
          SMS-Marketing und Marketing-Automation vereint. Die Plattform
          ermöglicht es, personalisierte Marketing-Kampagnen zu erstellen und
          Ihre Kundenbeziehungen zu automatisieren.
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
        <h2 className="text-2xl font-bold mb-6">
          Marketing-Automatisierung in der Praxis
        </h2>
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
              <h3 className="font-semibold mb-2">Zeitersparnis</h3>
              <p className="text-gray-600">
                Automatisieren Sie wiederkehrende Marketing-Aufgaben und
                konzentrieren Sie sich auf Ihr Kerngeschäft.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Target className="w-6 h-6 text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Bessere Conversion</h3>
              <p className="text-gray-600">
                Erreichen Sie Ihre Zielgruppe zum richtigen Zeitpunkt mit
                relevanten Inhalten.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Users className="w-6 h-6 text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Personalisierung</h3>
              <p className="text-gray-600">
                Sprechen Sie Ihre Kunden individuell und persönlich an.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Settings className="w-6 h-6 text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Skalierbarkeit</h3>
              <p className="text-gray-600">
                Wachsen Sie ohne zusätzlichen Personalaufwand.
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
            <p>Einrichtung und Konfiguration Ihres Brevo-Accounts</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-blue-600 mt-1">•</span>
            <p>Entwicklung von E-Mail-Marketing-Strategien</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-blue-600 mt-1">•</span>
            <p>
              Erstellung von E-Mail-Templates und Automatisierungs-Workflows
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-blue-600 mt-1">•</span>
            <p>Integration mit Ihrer Website und anderen Marketing-Tools</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-blue-600 mt-1">•</span>
            <p>Schulung und Support für Ihr Marketing-Team</p>
          </div>
        </div>
        <button
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold 
          hover:bg-blue-700 transition duration-300"
        >
          Marketing-Automation Beratung anfragen
        </button>
      </div>
    </div>
  );
};

export default BrevoPage;
