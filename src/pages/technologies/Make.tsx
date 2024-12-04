import React from "react";
import {
  Workflow,
  Bot,
  Zap,
  Link as LinkIcon,
  Clock,
  Shield,
} from "lucide-react";

const MakePage: React.FC = () => {
  const useCases = [
    {
      title: "Automatische Kundenbetreuung",
      description:
        "Wenn sich ein Kunde über Ihr Kontaktformular meldet, wird automatisch eine Bestätigung versendet, ein Ticket erstellt und Sie werden benachrichtigt.",
    },
    {
      title: "E-Commerce Integration",
      description:
        "Nach einem Verkauf werden automatisch Rechnungen erstellt, Versandlabel generiert und Kundeninformationen in Ihre CRM-System übertragen.",
    },
    {
      title: "Content Management",
      description:
        "Blogbeiträge werden automatisch auf verschiedenen Social-Media-Plattformen geteilt und in Ihrem Newsletter angekündigt.",
    },
    {
      title: "Datenmanagement",
      description:
        "Kundendaten werden automatisch zwischen Ihrem CRM, Newsletter-Tool und anderen Systemen synchronisiert.",
    },
  ];

  const features = [
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Visuelle Workflows",
      description:
        "Erstellen Sie komplexe Automatisierungen ohne Programmierung",
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Intelligente Automation",
      description: "Automatisieren Sie wiederkehrende Aufgaben und Prozesse",
    },
    {
      icon: <LinkIcon className="w-8 h-8" />,
      title: "Nahtlose Integration",
      description: "Verbinden Sie verschiedene Apps und Dienste miteinander",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Zeitersparnis",
      description:
        "Reduzieren Sie manuelle Arbeit durch automatisierte Workflows",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Sicherheit",
      description: "Verschlüsselte Datenübertragung und sichere Verarbeitung",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Echtzeit-Verarbeitung",
      description: "Sofortige Ausführung von Aktionen bei definierten Triggern",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Make.com Automation</h1>

      <div className="prose prose-lg max-w-none mb-12">
        <p>
          Make.com ist eine leistungsstarke Automatisierungsplattform, die es
          ermöglicht, verschiedene Apps und Dienste miteinander zu verbinden und
          Geschäftsprozesse zu automatisieren - ohne Programmierkenntnisse.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
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

      {/* Use Cases */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-6">Praxisbeispiele</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-white/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
              <p className="text-blue-100">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Integration Section */}
      <div className="bg-blue-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-4">Populäre Integrationen</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "WordPress",
            "WooCommerce",
            "Brevo",
            "Google Workspace",
            "Slack",
            "Trello",
            "Shopify",
            "PayPal",
          ].map((integration, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 text-center shadow-sm
              hover:shadow-md transition-shadow duration-300"
            >
              {integration}
            </div>
          ))}
        </div>
      </div>

      {/* Service Offering */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Meine Make.com Services</h2>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="text-blue-600 mt-1">
              <LinkIcon className="w-5 h-5" />
            </span>
            <p>
              Analyse Ihrer Geschäftsprozesse und Identifikation von
              Automatisierungspotentialen
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-blue-600 mt-1">
              <Workflow className="w-5 h-5" />
            </span>
            <p>Entwicklung und Implementierung maßgeschneiderter Workflows</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-blue-600 mt-1">
              <Bot className="w-5 h-5" />
            </span>
            <p>Integration mit bestehenden Systemen und Anwendungen</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-blue-600 mt-1">
              <Shield className="w-5 h-5" />
            </span>
            <p>Schulung und Support für Ihr Team</p>
          </div>
        </div>
        <button
          className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold 
          hover:bg-blue-700 transition duration-300"
        >
          Automation-Beratung anfragen
        </button>
      </div>
    </div>
  );
};

export default MakePage;
