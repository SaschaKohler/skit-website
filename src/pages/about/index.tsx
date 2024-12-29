import React, { useState } from "react";
import { Link } from "react-router-dom";
import DefaultLayout from "../../layouts/default/DefaultLayout";
import { useContactNavigation } from "../../hooks/useContactNavigation";
import { Heart, Users, Target } from "lucide-react";

const AboutPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleContactClick = useContactNavigation();

  const handleMobileContactClick = (e: React.MouseEvent) => {
    handleContactClick(e);
    setIsMenuOpen(false);
  };

  return (
    <DefaultLayout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Die Geschichte hinter dem Code
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Ein Pharmazeut auf digitaler Entdeckungsreise
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        {/* Personal Story Section */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img
                src="/images/about/me.jpeg"
                alt="Portrait"
                className="rounded-lg shadow-lg w-96 h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Mein Weg zu Ihnen</h2>
              <p className="text-lg text-gray-700 mb-6">
                20 Jahre lang durfte ich als Pharmazeut Menschen in allen
                Lebenslagen begleiten und unterstützen. Diese Zeit hat mich
                gelehrt, wie wertvoll echtes Zuhören und ehrliche Beratung sind.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Meine Leidenschaft für Technologie und der Wunsch, Menschen auch
                in der digitalen Welt bestmöglich zu unterstützen, führten mich
                in die Welt der Webentwicklung. Als NLP Master Practitioner
                verbinde ich heute technisches Know-how mit tiefem Verständnis
                für menschliche Bedürfnisse.
              </p>
              <p className="text-lg text-gray-700">
                Dieser einzigartige Weg ermöglicht es mir, Ihnen nicht nur
                technische Lösungen zu bieten, sondern echte digitale
                Partnerschaften aufzubauen - von Mensch zu Mensch.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Was mir wichtig ist
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Heart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Mit Herz dabei</h3>
              <p className="text-gray-600">
                Wie in der Apotheke steht auch in der digitalen Welt der Mensch
                für mich im Mittelpunkt. Ihre Ziele sind meine Mission.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">
                Präzision trifft Vision
              </h3>
              <p className="text-gray-600">
                Die Genauigkeit aus der Pharmazie kombiniert mit kreativen
                digitalen Lösungen - für Ergebnisse, die begeistern.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">
                Echte Partnerschaft
              </h3>
              <p className="text-gray-600">
                Von EPU zu EPU - ich verstehe Ihre Herausforderungen und bin
                mehr als nur ein Dienstleister.
              </p>
            </div>
          </div>
        </div>

        {/* Why Me Section */}
        <div className="mb-20 bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Warum ich der Richtige bin
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Der persönliche Draht
                </h3>
                <p className="text-gray-600">
                  Sie bekommen keine austauschbare Agentur-Betreuung, sondern
                  einen echten Partner, der Sie und Ihr Geschäft versteht.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Volle Aufmerksamkeit
                </h3>
                <p className="text-gray-600">
                  Als EPU konzentriere ich mich voll auf Ihr Projekt - mit
                  garantierter Reaktionszeit von 30 Minuten.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Ganzheitlicher Ansatz
                </h3>
                <p className="text-gray-600">
                  Technische Expertise kombiniert mit NLP und Menschenkenntnis -
                  für Lösungen, die wirklich funktionieren.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Klare Kommunikation
                </h3>
                <p className="text-gray-600">
                  Keine technischen Monologe, sondern verständliche Erklärungen
                  und transparente Prozesse.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">
            Lassen Sie uns zusammenarbeiten
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Ich freue mich darauf, Ihre Geschichte kennenzulernen und gemeinsam
            herauszufinden, wie ich Sie auf Ihrem Weg in die digitale Zukunft
            unterstützen kann.
          </p>
          <Link
            to="/#contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 
            transition-colors inline-flex items-center justify-center"
            onClick={handleContactClick}
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default AboutPage;
