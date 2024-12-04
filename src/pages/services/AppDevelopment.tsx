// src/pages/services/AppDevelopment.tsx
import React from "react";
import DefaultLayout from "../../layouts/default/DefaultLayout";

const AppDevelopment: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            App-Entwicklung
          </h1>
          <p className="text-xl">Moderne Webanwendungen mit React und Vite</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Technologie-Stack</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-blue-600 mt-1 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div>
                  <h3 className="font-semibold mb-2">React & TypeScript</h3>
                  <p className="text-gray-600">
                    Entwicklung moderner Single Page Applications mit Fokus auf
                    Typ-Sicherheit und Wartbarkeit.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-blue-600 mt-1 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div>
                  <h3 className="font-semibold mb-2">
                    Vite & Build-Optimierung
                  </h3>
                  <p className="text-gray-600">
                    Schnelle Entwicklungsumgebung und optimierte Builds für
                    beste Performance.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Entwicklungsprozess</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-blue-600 mt-1 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div>
                  <h3 className="font-semibold mb-2">Agile Entwicklung</h3>
                  <p className="text-gray-600">
                    Enge Zusammenarbeit mit regelmäßigen Updates und schnellen
                    Anpassungsmöglichkeiten.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-blue-600 mt-1 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div>
                  <h3 className="font-semibold mb-2">Continuous Integration</h3>
                  <p className="text-gray-600">
                    Automatisierte Tests und Deployments für stabile und
                    zuverlässige Anwendungen.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default AppDevelopment;
