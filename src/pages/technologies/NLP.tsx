import React from "react";
import {
  Brain,
  Target,
  MessageCircle,
  HeartHandshake,
  ArrowUpRight,
} from "lucide-react";

const NLPPage: React.FC = () => {
  const benefits = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Verbesserte Kommunikation",
      description: "Klare und effektive Kommunikation in allen Projektphasen",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Zielgerichtete Lösungen",
      description: "Präzise Erfassung und Umsetzung Ihrer Anforderungen",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Ganzheitlicher Ansatz",
      description:
        "Berücksichtigung sowohl technischer als auch menschlicher Aspekte",
    },
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      title: "Nachhaltige Zusammenarbeit",
      description:
        "Aufbau langfristiger, vertrauensvoller Geschäftsbeziehungen",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">NLP in meiner Arbeitsweise</h1>

      <div className="prose prose-lg max-w-none mb-12">
        <p>
          Als NLP Master Practitioner nutze ich die Erkenntnisse und Techniken
          des Neurolinguistischen Programmierens, um die Zusammenarbeit mit
          meinen Kunden zu optimieren und bessere Projektergebnisse zu erzielen.
          Diese Expertise fließt in alle meine IT-Dienstleistungen ein.
        </p>
      </div>

      {/* Benefits */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg 
            transition-shadow duration-300"
          >
            <div className="text-blue-600 mb-4">{benefit.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
            <p className="text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>

      {/* Integration with IT Services */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-6">
          NLP & IT - Der Mehrwert für Sie
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">
              In der Projektanalyse
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <ArrowUpRight className="w-5 h-5 mt-1" />
                <span>Präzise Erfassung Ihrer Bedürfnisse</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowUpRight className="w-5 h-5 mt-1" />
                <span>Klare Zieldefinition</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowUpRight className="w-5 h-5 mt-1" />
                <span>Effektive Lösungsfindung</span>
              </li>
            </ul>
          </div>
          <div className="bg-white/10 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">In der Umsetzung</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <ArrowUpRight className="w-5 h-5 mt-1" />
                <span>Transparente Kommunikation</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowUpRight className="w-5 h-5 mt-1" />
                <span>Konstruktives Feedback</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowUpRight className="w-5 h-5 mt-1" />
                <span>Nutzerorientierte Lösungen</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6">
          Meine ganzheitliche Herangehensweise
        </h2>
        <p className="text-gray-600 mb-6">
          Meine NLP-Ausbildung ermöglicht es mir, technische Expertise mit einem
          tiefen Verständnis für menschliche Kommunikation und Bedürfnisse zu
          verbinden. Dies spiegelt sich in allen meinen IT-Dienstleistungen
          wider - von der ersten Beratung bis zur finalen Umsetzung.
        </p>
        <div className="border-t border-gray-200 pt-6 mt-6">
          <p className="text-gray-600">
            Erfahren Sie mehr über meine konkreten IT-Dienstleistungen in den
            Bereichen WordPress, Make.com, Brevo und React/Vite Entwicklung.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NLPPage;
