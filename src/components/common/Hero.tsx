import React from "react";
import { ArrowRight, Monitor, Heart, Brain } from "lucide-react";

const Hero: React.FC = () => {
  const features = [
    {
      icon: (
        <Monitor className="w-8 h-8 md:w-12 md:h-12 mb-3 md:mb-4 text-blue-200" />
      ),
      title: "Aus der Praxis",
      description: "Lösungen, die Ihren Arbeitsalltag wirklich erleichtern",
    },
    {
      icon: (
        <Heart className="w-8 h-8 md:w-12 md:h-12 mb-3 md:mb-4 text-blue-200" />
      ),
      title: "Persönlich",
      description: "Ein Ansprechpartner für alle Ihre Fragen",
      extraClasses: "sm:mt-8 md:mt-12",
    },
    {
      icon: (
        <Brain className="w-8 h-8 md:w-12 md:h-12 mb-3 md:mb-4 text-blue-200" />
      ),
      title: "Verständlich",
      description: "Komplexe Technik einfach erklärt",
    },
    {
      icon: <div className="text-2xl md:text-3xl mb-3 md:mb-4">30 Min</div>,
      title: "Reaktionszeit",
      description: "Schnelle Hilfe garantiert",
      extraClasses: "sm:mt-8 md:mt-12",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start md:items-center">
          <div className="space-y-6 md:space-y-8">
            {/* Profile Image for Mobile */}
            <div className="relative w-32 h-32 md:w-48 md:h-48 mx-auto md:hidden mb-6">
              <img
                src="/images/about/me.jpeg"
                alt="Sascha Kohler"
                className="rounded-full object-cover w-full h-full shadow-lg border-4 border-white/20"
              />
              <div className="absolute -bottom-2 -right-2 bg-blue-200 text-blue-800 px-3 py-0.5 rounded-full text-sm font-semibold">
                EPU
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center md:text-left">
              Dienstleistungspakete
              <span className="block text-blue-200 mt-2">von EPU für EPU</span>
            </h1>

            <p className="text-lg md:text-xl text-blue-100 text-center md:text-left">
              Als Einzelunternehmer verstehe ich Ihre Herausforderungen. Mit 20
              Jahren Erfahrung in der Kundenbetreuung helfe ich Ihnen, Ihr
              Geschäft erfolgreich zu digitalisieren - persönlich, verständlich
              und effektiv.
            </p>

            <p className="text-base md:text-lg text-blue-100 text-center md:text-left">
              <strong>EPU</strong> steht für Ein-Personen-Unternehmen –
              selbstständige UnternehmerInnen, die ihre Expertise und
              Leidenschaft im Alleingang zum Erfolg führen. Als EPU kenne ich
              die spezifischen Bedürfnisse und Herausforderungen und biete
              maßgeschneiderte Lösungen für Ihren digitalen Erfolg.
            </p>

            {/* Profile Image for Desktop */}
            <div className="relative w-48 h-48 mx-auto hidden md:block mb-8">
              <img
                src="/images/about/me.jpeg"
                alt="Sascha Kohler"
                className="rounded-full object-cover w-full h-full shadow-lg border-4 border-white/20"
              />
              <div className="absolute -bottom-2 -right-2 bg-blue-200 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold">
                EPU
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                className="bg-white text-blue-600 px-6 md:px-8 py-3 rounded-lg font-semibold 
                         w-full sm:w-auto
                         transition duration-300 flex items-center justify-center gap-2
                         hover:bg-blue-50"
              >
                Lernen Sie mich kennen
                <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href="#contact"
                className="border border-white text-white px-6 md:px-8 py-3 rounded-lg 
                        w-full sm:w-auto
                        font-semibold transition duration-300 text-center
                        hover:bg-white hover:text-blue-600"
              >
                Gespräch vereinbaren
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-8 md:mt-0">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-white/10 p-4 md:p-6 rounded-lg backdrop-blur-sm 
                          transition-all duration-300 hover:bg-white/20
                          ${feature.extraClasses || ""}`}
              >
                {feature.icon}
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-blue-100">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
