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
    <div
      className="group bg-white rounded-xl shadow-lg p-8 transition-all duration-300 
      hover:shadow-xl hover:scale-[1.02] hover:bg-gradient-to-b hover:from-white hover:to-blue-50"
    >
      <div
        className="text-blue-600 mb-6 transform transition-transform duration-300 
        group-hover:scale-110 group-hover:text-blue-700"
      >
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-700 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-gray-600">
            <span className="text-blue-600 mt-1">
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
      title: "Persönliche Beratung",
      description:
        "Individuelles Erstgespräch zur Ermittlung Ihrer Ziele und Anforderungen",
      features: [
        "Intensive Bedarfsanalyse",
        "Realistische Zielsetzung",
        "Abgleich mit aktuellen Möglichkeiten",
        "Wertschätzender Dialog auf Augenhöhe",
      ],
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: "Konzeptentwicklung",
      description: "Maßgeschneiderte Strategien für Ihre digitale Präsenz",
      features: [
        "WordPress mit Divi-Theme",
        "Hosting & E-Mail-Setup",
        "Automation mit Brevo & Make.com",
        "Social Media Integration",
      ],
    },
    {
      icon: <Layout className="w-12 h-12" />,
      title: "WordPress-Lösungen",
      description: "Professionelle WordPress-Websites mit allen Features",
      features: [
        "Individuelle Themes & Designs",
        "Mitgliederbereiche für Paid Content",
        "Vollautomatisierte Prozesse",
        "E-Commerce Integration",
      ],
    },
    {
      icon: <Rocket className="w-12 h-12" />,
      title: "Fullstack-Entwicklung",
      description: "Von der Idee zum fertigen Produkt",
      features: [
        "React/Vite für moderne Apps",
        "Maßgeschneiderte Lösungen",
        "Responsive Design",
        "Performance-Optimierung",
      ],
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Premium Support",
      description: "100% Fokus auf Ihr Projekt mit schnellster Reaktionszeit",
      features: [
        "Maximale Reaktionszeit: 30 Minuten",
        "Direkte Kommunikation",
        "Persönliche Betreuung",
        "Regelmäßige Updates",
      ],
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "Ganzheitliche Expertise",
      description:
        "Technische Kompetenz kombiniert mit menschlichem Verständnis",
      features: [
        "20+ Jahre Erfahrung im Kundenservice",
        "NLP Master Practitioner",
        "Technische & menschliche Perspektive",
        "Win-Win-Orientierung",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Meine Leistungen</h2>
          <p className="text-gray-600 text-lg">
            Als Ein-Mann-Unternehmen biete ich Ihnen vollständige
            Digitallösungen mit persönlicher Betreuung. Meine Stärke liegt in
            der Kombination aus technischer Expertise und menschlichem
            Verständnis - für Lösungen, die nicht nur funktionieren, sondern
            auch Menschen verbinden.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="mt-16 bg-blue-600 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Komplettlösungen aus einer Hand
          </h3>
          <p className="max-w-2xl mx-auto mb-6">
            Ich biete ausschließlich Komplettlösungen an - von der ersten Idee
            bis zur fertigen Implementierung. Sie erhalten einen Festpreis für
            das Gesamtpaket und haben einen direkten Ansprechpartner für alle
            Aspekte Ihres Projekts.
          </p>
          <button
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold 
            hover:bg-blue-50 transition duration-300 inline-flex items-center gap-2"
          >
            Projekt besprechen <MessagesSquare className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
