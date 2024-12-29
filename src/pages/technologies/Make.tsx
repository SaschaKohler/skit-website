import React from "react";
import {
  Settings,
  Clock,
  Users,
  Target,
  Shield,
  MessageCircle,
  Zap,
  Link as LinkIcon,
} from "lucide-react";

const MakePage: React.FC = () => {
  const useCases = [
    {
      title: "Professionelle Erstbetreuung",
      description:
        "Bei Kontaktaufnahme wird automatisch eine Begrüßung versendet, Ihr CRM aktualisiert und Sie werden benachrichtigt - schnell und zuverlässig.",
    },
    {
      title: "Effiziente Terminverwaltung",
      description:
        "Nach Terminbuchungen werden Bestätigungen verschickt, Kalender synchronisiert und relevante Unterlagen bereitgestellt.",
    },
    {
      title: "Digitale Präsenz",
      description:
        "Ihre Inhalte werden automatisch auf verschiedenen Plattformen geteilt und Ihre Online-Sichtbarkeit optimal genutzt.",
    },
    {
      title: "Datensynchronisation",
      description:
        "Ihre Klientendaten werden sicher zwischen allen wichtigen Systemen synchronisiert - für einen reibungslosen Arbeitsablauf.",
    },
  ];

  const features = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Intelligente Automation",
      description:
        "Optimieren Sie Ihre Arbeitsabläufe ohne technische Vorkenntnisse",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Zeitersparnis",
      description: "Fokussieren Sie sich auf Ihre Kernaufgaben, während Routinearbeiten automatisch ablaufen",
    },
    {
      icon: <LinkIcon className="w-8 h-8" />,
      title: "Nahtlose Integration",
      description: "Verbinden Sie Ihre bestehenden Tools zu einem effizienten System",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Gezielte Prozesse",
      description:
        "Entwickeln Sie maßgeschneiderte Abläufe für Ihre spezifischen Anforderungen",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Datensicherheit",
      description: "Ihre sensiblen Daten werden stets professionell und sicher verarbeitet",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Schnelle Reaktion",
      description: "Automatische Ausführung wichtiger Prozesse in Echtzeit",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Effiziente Arbeitsabläufe mit Make.com</h1>

      <div className="prose prose-lg max-w-none mb-12">
        <p>
          Befreien Sie sich von zeitraubenden Verwaltungsaufgaben und gewinnen Sie mehr 
          Zeit für Ihre Klienten. Make.com automatisiert Ihre administrativen Prozesse 
          intelligent und zuverlässig. Von der Terminverwaltung bis zur Dokumentenorganisation - 
          alles läuft strukturiert im Hintergrund, während Sie sich auf Ihre Kernkompetenzen 
          konzentrieren.
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
        <h2 className="text-2xl font-bold mb-6">Make.com in der Praxis</h2>
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
        <h2 className="text-2xl font-bold mb-4">System-Integrationen</h2>
        <p className="text-gray-600 mb-6">
          Make.com verbindet sich nahtlos mit Ihren bestehenden Systemen:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "WordPress",
            "Website-Systeme",
            "Brevo",
            "Google Kalender",
            "E-Mail-Systeme",
            "CRM-Lösungen",
            "Terminplanung",
            "Und mehr",
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
        <h2 className="text-2xl font-bold mb-4">Make.com Services</h2>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="text-blue-600 mt-1">
              <Settings className="w-5 h-5" />
            </span>
            <p>
              Analyse Ihrer Prozesse und Identifikation von Optimierungspotentialen
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-blue-600 mt-1">
              <Target className="w-5 h-5" />
            </span>
            <p>Entwicklung und Implementierung passgenauer Automatisierungen</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-blue-600 mt-1">
              <LinkIcon className="w-5 h-5" />
            </span>
            <p>Integration mit Ihren bestehenden Tools und Systemen</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-blue-600 mt-1">
              <Users className="w-5 h-5" />
            </span>
            <p>Einführung und kontinuierliche Unterstützung</p>
          </div>
        </div>
        <button
          className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold 
          hover:bg-blue-700 transition duration-300"
        >
          Beratungsgespräch vereinbaren
        </button>
      </div>
    </div>
  );
};

export default MakePage;