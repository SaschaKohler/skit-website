import React from "react";
import {
  Users,
  Lightbulb,
  Layout,
  Brain,
  Clock,
  MessagesSquare,
  ArrowRight,
  Rocket,
} from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  features,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-8 transition-all duration-300 
                  hover:shadow-lg hover:bg-gray-50">
      <div className="text-blue-600 mb-6 transition-transform duration-300 
                    group-hover:scale-105">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 transition-colors duration-300
                   group-hover:text-blue-700">
        {title}
      </h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} 
              className="flex items-start gap-2 text-gray-600">
            <span className="text-blue-600 mt-1 transition-transform duration-300
                         group-hover:translate-x-1">
              <ArrowRight className="w-4 h-4" />
            </span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Users className="w-12 h-12" />,
      title: "Erstgespräch & Beratung",
      description:
        "Gemeinsam finden wir heraus, was Sie wirklich brauchen - ohne Fachchinesisch, dafür mit viel Verständnis",
      features: [
        "Offenes Gespräch über Ihre Ziele",
        "Ehrliche Einschätzung der Möglichkeiten",
        "Klare Zeitpläne und Kostenrahmen",
        "Verständliche Erklärungen auf Augenhöhe",
      ],
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: "Ihre digitale Visitenkarte",
      description: "Eine Website, die zu Ihnen und Ihren Kunden passt",
      features: [
        "Moderne, einladende Gestaltung",
        "Einfach selbst zu pflegen",
        "Automatisierte Kundenansprache",
        "Perfekt für soziale Medien",
      ],
    },
    {
      icon: <Layout className="w-12 h-12" />,
      title: "Alles aus einer Hand",
      description: "Sie kümmern sich um Ihr Geschäft, ich mich um den Rest",
      features: [
        "Domain und Hosting inklusive",
        "Geschützter Bereich für Ihre Kunden",
        "Newsletter und Kontaktformulare",
        "Alle technischen Details erledigt",
      ],
    },
    {
      icon: <Rocket className="w-12 h-12" />,
      title: "Spezielle Wünsche",
      description: "Auch für besondere Anforderungen finden wir eine Lösung",
      features: [
        "Maßgeschneiderte Funktionen",
        "Eigene Online-Kurse anbieten",
        "Digitale Produkte verkaufen",
        "Besondere Kundenwünsche erfüllen",
      ],
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Verlässliche Betreuung",
      description: "Ich bin für Sie da, wenn Sie mich brauchen",
      features: [
        "Schnelle Hilfe innerhalb 30 Minuten",
        "Direkter Draht zu mir",
        "Regelmäßige Updates",
        "Klare, verständliche Kommunikation",
      ],
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "Ihr Sparringspartner",
      description:
        "Mehr als nur Technik - ich verstehe Ihr Geschäft und Ihre Kunden",
      features: [
        "20 Jahre Erfahrung mit Menschen",
        "Geschulter Kommunikationsprofi",
        "Praktische Lösungen für den Alltag",
        "Fokus auf Ihren Erfolg",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Was ich für Sie tun kann</h2>
          <p className="text-gray-600 text-lg">
            Als Einzelunternehmer weiß ich, worauf es ankommt: persönliche Betreuung, 
            klare Kommunikation und Lösungen, die Ihnen das Leben leichter machen. 
            Keine komplizierten Prozesse, keine Warteschleifen - nur Sie und ich im 
            direkten Austausch für Ihr erfolgreiches Digitalprojekt.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="mt-16 bg-blue-600 text-white rounded-lg p-8 text-center 
                     transition-all duration-300 hover:bg-blue-700">
          <h3 className="text-2xl font-bold mb-4">Ein Partner für alles</h3>
          <p className="max-w-2xl mx-auto mb-6">
            Sie bekommen von mir ein Rundum-sorglos-Paket zum festen Preis. 
            Keine versteckten Kosten, keine Überraschungen - dafür alle Fäden 
            in einer Hand und einen Ansprechpartner, der Ihre Sprache spricht.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold 
                         transition-all duration-300 inline-flex items-center gap-2
                         hover:bg-gray-100">
            Lassen Sie uns reden <MessagesSquare className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;