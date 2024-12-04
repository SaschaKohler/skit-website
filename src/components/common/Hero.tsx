import React from "react";
import { ArrowRight, Monitor, Heart, Brain } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Technologie mit{" "}
              <span className="text-blue-200">Menschlichkeit</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Als erfahrener IT-Experte und Lebensberater verbinde ich
              technische Expertise mit tiefem Verständnis für Menschen und ihre
              Bedürfnisse.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold 
                hover:bg-blue-50 transition duration-300 flex items-center gap-2"
              >
                Projekt starten <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href="#contact"
                className="border border-white text-white px-8 py-3 rounded-lg 
                font-semibold hover:bg-white/10 transition duration-300 text-center"
              >
                Kontakt aufnehmen
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <Monitor className="w-12 h-12 mb-4 text-blue-200" />
              <h3 className="text-xl font-semibold mb-2">IT Lösungen</h3>
              <p className="text-blue-100">
                Maßgeschneiderte Digitallösungen für Ihren Erfolg
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm mt-12">
              <Heart className="w-12 h-12 mb-4 text-blue-200" />
              <h3 className="text-xl font-semibold mb-2">Persönlich</h3>
              <p className="text-blue-100">
                Individuelle Betreuung mit Herz und Verstand
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <Brain className="w-12 h-12 mb-4 text-blue-200" />
              <h3 className="text-xl font-semibold mb-2">Ganzheitlich</h3>
              <p className="text-blue-100">
                Technologie im Einklang mit Menschen
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm mt-12">
              <div className="text-3xl mb-4">20+</div>
              <h3 className="text-xl font-semibold mb-2">Jahre Erfahrung</h3>
              <p className="text-blue-100">in der Arbeit mit Menschen</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
