import React from "react";
import { Link } from 'react-router-dom';
import { Check, ExternalLink } from "lucide-react";

const PricingPackages: React.FC = () => {
  const packages = [
    {
      name: "Starter",
      price: "ab 1.990€",
      features: [
        "Professionelle Website mit bis zu 5 Seiten",
        "Responsive Design",
        "Domain & Hosting für 1 Jahr inklusive",
        "SSL-Verschlüsselung",
        "Basis SEO-Optimierung",
      ],
    },
    {
      name: "Business",
      price: "ab 3.990€",
      features: [
        "Alle Starter Features",
        "Bis zu 10 Seiten",
        "Content Management System",
        "Newsletter-Integration",
        "Social Media Integration",
      ],
    },
    {
      name: "Premium",
      price: "ab 7.990€",
      features: [
        "Alle Business Features",
        "Unbegrenzte Seiten",
        "E-Commerce Integration möglich",
        "Premium SEO-Optimierung",
        "Individuelle Zusatzfunktionen",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Transparente Preise</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Wählen Sie das passende Paket für Ihre Bedürfnisse. Alle Preise sind Nettopreise und
            verstehen sich zzgl. der gesetzlichen MwSt.
          </p>
          <Link 
            to="/packages" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mt-4"
          >
            Detaillierte Preisübersicht und Zusatzleistungen 
            <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-8 transition-all duration-300 
                       hover:shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4">{pkg.name}</h3>
              <div className="text-3xl font-bold text-blue-600 mb-6">
                {pkg.price}
              </div>
              <ul className="space-y-3">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Benötigen Sie ein individuelles Angebot oder haben spezielle Anforderungen?
          </p>
          <Link
            to="/packages"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold 
                    transition duration-300 hover:bg-blue-700"
          >
            Alle Details anzeigen
          </Link>
        </div>

        <div className="mt-16 p-6 bg-blue-50 rounded-xl text-center">
          <h3 className="text-xl font-semibold mb-3">Laufende Kosten transparent</h3>
          <p className="text-gray-600">
            Alle Pakete beinhalten im ersten Jahr Hosting und Domain. Die laufenden Kosten danach 
            finden Sie in der detaillierten Preisübersicht.
          </p>
          <Link 
            to="/packages#recurring" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mt-4"
          >
            Zu den laufenden Kosten
            <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingPackages;