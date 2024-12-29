import React from "react";
import { GraduationCap, Heart, Brain, Landmark } from "lucide-react";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  const qualifications = [
    {
      icon: <Landmark className="w-6 h-6" />,
      title: "Apotheker",
      description: "Über 20 Jahre Erfahrung in öffentlichen Apotheken",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "NLP-Practitioner,Life Master & Train the Trainer i.A.",
      description: "Zertifizierte Ausbildung in NLP-Techniken",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Lebens- und Sozialberater",
      description: "In Ausbildung unter Supervision (Rene Otto Knor Akademie)",
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "IT-Experte",
      description:
        "Spezialisiert auf moderne Webtechnologien und Digitallösungen",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Ganzheitliche Expertise</h2>
          <p className="text-gray-600 text-lg mb-8">
            Mein Weg führt vom Apotheker über die IT bis zur Lebensberatung -
            eine einzigartige Kombination, die es mir ermöglicht, Menschen und
            Technologie auf besondere Weise zu verbinden.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Professionelle Entwicklung */}
          <div
            className="bg-white rounded-lg shadow-md p-8 transition duration-300 
                       hover:shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-4">Mein Werdegang</h3>
            <div className="space-y-4">
              <p className="text-gray-600">
                Als Apotheker durfte ich über zwei Jahrzehnte Menschen in nahezu
                jeder Lebenssituation begleiten. Diese Zeit hat mir nicht nur
                ein tiefes Verständnis für körperliche Aspekte des Wohlbefindens
                vermittelt, sondern auch meinen Blick für die emotionalen und
                sozialen Bedürfnisse der Menschen geschärft.
              </p>
              <p className="text-gray-600">
                Die Verbindung von Technologie und menschlichem Wohlbefinden
                wurde zu meiner Passion. Als IT-Experte entwickle ich heute
                Lösungen, die nicht nur technisch exzellent sind, sondern auch
                den Menschen in den Mittelpunkt stellen.
              </p>
            </div>
          </div>

          {/* Qualifikationen Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {qualifications.map((qual, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600
                         transition duration-300 hover:shadow-lg"
              >
                <div className="text-blue-600 mb-4">{qual.icon}</div>
                <h4 className="text-xl font-semibold mb-2">{qual.title}</h4>
                <p className="text-gray-600">{qual.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Projekt "Ja zum Leben" */}
        <div
          className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg p-8
                     transition duration-300 hover:from-blue-700 hover:to-indigo-800"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Projekt "Ja zum Leben"</h3>
            <p className="mb-4">
              Gemeinsam mit meiner Frau Gerda Ahorner verbinde ich modernste
              Beratungstechniken mit traditionellem Heilwissen. Wir unterstützen
              Menschen dabei, ihr volles Potenzial zu entfalten und ein
              erfülltes, selbstbestimmtes Leben zu führen.
            </p>
            <Link
              to="/ja-zum-leben"
              className="inline-block bg-white text-blue-600 px-6 py-2 rounded-lg 
                     font-semibold transition duration-300 hover:bg-opacity-90"
            >
              Mehr erfahren
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
