import React from "react";
import {
  Code2,
  Wrench,
  Workflow,
  MessagesSquare,
  ArrowRight,
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
      className="bg-white rounded-xl shadow-md p-8 transition-all duration-300 
                  hover:shadow-lg hover:bg-gray-50"
    >
      <div
        className="text-blue-600 mb-6 transition-transform duration-300 
                    group-hover:scale-105"
      >
        {icon}
      </div>
      <h3
        className="text-2xl font-bold mb-4 transition-colors duration-300
                   group-hover:text-blue-700"
      >
        {title}
      </h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-gray-600">
            <span
              className="text-blue-600 mt-1 transition-transform duration-300
                         group-hover:translate-x-1"
            >
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
      icon: <Code2 className="w-12 h-12" />,
      title: "Custom Web Development",
      description:
        "Maßgeschneiderte React/Vite Anwendungen, die genau auf Ihre Bedürfnisse zugeschnitten sind",
      features: [
        "Single Page Applications (SPA)",
        "Progressive Web Apps (PWA)",
        "Responsive Design",
        "Performance-optimiert",
      ],
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "WordPress Lösungen",
      description:
        "Professionelle WordPress-Entwicklung mit Divi Theme für maximale Flexibilität",
      features: [
        "Individuelle Divi Designs",
        "Sichere Mitgliederbereiche",
        "E-Commerce Integration",
        "Content Management",
      ],
    },
    {
      icon: <Workflow className="w-12 h-12" />,
      title: "Business Automation",
      description:
        "Automatisieren Sie Ihre Geschäftsprozesse mit make.com und steigern Sie Ihre Effizienz",
      features: [
        "Workflow Automatisierung",
        "API Integrationen",
        "Email Marketing Automation",
        "CRM Synchronisation",
      ],
    },
  ];

  return (
    <section id="services" className="relative py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Full-Stack Development</h2>
          <p className="text-gray-600 text-lg">
            Als EPU biete ich Ihnen durchgängige Lösungen von Frontend bis
            Automation. Durch die Konzentration auf ein Projekt garantiere ich
            Ihnen meine volle Aufmerksamkeit und schnelle Reaktionszeiten von
            maximal 30 Minuten.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div
          className="mt-16 bg-blue-600 text-white rounded-lg p-8 text-center 
                     transition-all duration-300 hover:bg-blue-700"
        >
          <h3 className="text-2xl font-bold mb-4">Ihr Full-Stack Partner</h3>
          <p className="max-w-2xl mx-auto mb-6">
            Von der ersten Idee bis zur fertigen Lösung entwickle ich Ihr
            Projekt mit modernsten Technologien. Als Ihr direkter
            Ansprechpartner garantiere ich transparente Kommunikation und
            effiziente Umsetzung zum vereinbarten Festpreis.
          </p>
          <button
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold 
                         transition-all duration-300 inline-flex items-center gap-2
                         hover:bg-gray-100"
          >
            Projekt besprechen <MessagesSquare className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
