import React from "react";
import { Link } from "react-router-dom";
import { Globe, Workflow, Mail, Code, Brain } from "lucide-react";

const TechnologyOverview: React.FC = () => {
  const technologies = [
    {
      icon: <Globe className="w-12 h-12" />,
      title: "WordPress",
      description: "Professionelle Websites mit Divi Theme",
      path: "/technologies/wordpress",
      features: [
        "Individuelle Themes",
        "Mitgliederbereiche",
        "E-Commerce",
        "Automatisierung",
      ],
    },
    {
      icon: <Workflow className="w-12 h-12" />,
      title: "Make.com",
      description: "Automatisierung von Geschäftsprozessen",
      path: "/technologies/make",
      features: [
        "Workflow-Automation",
        "App-Integration",
        "Prozessoptimierung",
        "Zeitersparnis",
      ],
    },
    {
      icon: <Mail className="w-12 h-12" />,
      title: "Brevo",
      description: "E-Mail-Marketing und Automation",
      path: "/technologies/brevo",
      features: [
        "Newsletter",
        "Marketing-Automation",
        "Kundenbeziehungen",
        "Kampagnen",
      ],
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "React & Vite",
      description: "Maßgeschneiderte Webanwendungen",
      path: "/technologies/react-vite",
      features: [
        "Single Page Apps",
        "Performance",
        "Moderne UIs",
        "Responsives Design",
      ],
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "NLP-Integration",
      description: "Ganzheitliche Kommunikation",
      path: "/technologies/nlp",
      features: [
        "Klare Kommunikation",
        "Bedürfnisanalyse",
        "Zielorientierung",
        "Nachhaltigkeit",
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Meine Technologien & Expertise
        </h1>
        <p className="text-xl text-gray-600">
          Ein ganzheitlicher Ansatz für Ihre digitale Transformation
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {technologies.map((tech) => (
          <Link
            key={tech.path}
            to={tech.path}
            className="group bg-white rounded-xl shadow-lg p-8 transition-all duration-300 
              hover:shadow-xl hover:scale-[1.02] hover:bg-gradient-to-b hover:from-white hover:to-blue-50"
          >
            <div
              className="text-blue-600 mb-6 transform transition-transform duration-300 
              group-hover:scale-110"
            >
              {tech.icon}
            </div>
            <h3
              className="text-2xl font-bold mb-3 group-hover:text-blue-600 
              transition-colors duration-300"
            >
              {tech.title}
            </h3>
            <p className="text-gray-600 mb-6">{tech.description}</p>
            <ul className="space-y-2">
              {tech.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-gray-600"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  {feature}
                </li>
              ))}
            </ul>
          </Link>
        ))}
      </div>

      <div
        className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-700 text-white 
        rounded-xl p-8 text-center"
      >
        <h2 className="text-2xl font-bold mb-4">
          Komplettlösungen aus einer Hand
        </h2>
        <p className="max-w-2xl mx-auto">
          Als Ein-Mann-Unternehmen biete ich Ihnen durchdachte Digitallösungen
          mit persönlicher Betreuung. Von der ersten Idee bis zur fertigen
          Implementierung erhalten Sie alles aus einer Hand.
        </p>
      </div>
    </div>
  );
};

export default TechnologyOverview;
