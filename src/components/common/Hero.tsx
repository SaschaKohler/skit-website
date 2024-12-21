import React from "react";
import { ArrowRight, Monitor, Heart, Brain } from "lucide-react";

const Hero: React.FC = () => {
  const features = [
    {
      icon: <Monitor className="w-12 h-12 mb-4 text-blue-200" />,
      title: "Aus der Praxis",
      description: "Lösungen, die Ihren Arbeitsalltag wirklich erleichtern"
    },
    {
      icon: <Heart className="w-12 h-12 mb-4 text-blue-200" />,
      title: "Persönlich",
      description: "Ein Ansprechpartner für alle Ihre Fragen",
      extraClasses: "mt-12"
    },
    {
      icon: <Brain className="w-12 h-12 mb-4 text-blue-200" />,
      title: "Verständlich",
      description: "Komplexe Technik einfach erklärt"
    },
    {
      icon: <div className="text-3xl mb-4">30 Min</div>,
      title: "Reaktionszeit",
      description: "Schnelle Hilfe garantiert",
      extraClasses: "mt-12"
    }
  ];

  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Dienstleistungspakete <br />
              <span className="text-blue-200">von EPU für EPU</span>
            </h1>
            <p className="text-xl mb-4 text-blue-100">
              Als Einzelunternehmer verstehe ich Ihre Herausforderungen. 
              Mit 20 Jahren Erfahrung in der Kundenbetreuung helfe ich Ihnen, 
              Ihr Geschäft erfolgreich zu digitalisieren - persönlich, verständlich und effektiv.
            </p>
            <p className="text-lg mb-8 text-blue-100">
              <strong>EPU</strong> steht für Ein-Personen-Unternehmen – selbstständige UnternehmerInnen, 
              die ihre Expertise und Leidenschaft im Alleingang zum Erfolg führen. 
              Als EPU kenne ich die spezifischen Bedürfnisse und Herausforderungen 
              und biete maßgeschneiderte Lösungen für Ihren digitalen Erfolg.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold 
                             transition duration-300 flex items-center gap-2
                             hover:bg-blue-50">
                Lernen Sie mich kennen 
                <ArrowRight className="w-5 h-5 transition-transform duration-300 
                                   group-hover:translate-x-1" />
              </button>
              <a href="#contact"
                 className="border border-white text-white px-8 py-3 rounded-lg 
                        font-semibold transition duration-300 text-center
                        hover:bg-white hover:text-blue-600">
                Gespräch vereinbaren
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-white/10 p-6 rounded-lg backdrop-blur-sm transition-all 
                          duration-300 hover:bg-white/20 ${feature.extraClasses || ''}`}
              >
                {feature.icon}
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-blue-100">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;