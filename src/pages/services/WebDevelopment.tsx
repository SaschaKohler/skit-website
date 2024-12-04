// src/pages/services/WebDevelopment.tsx
import React from "react";
import DefaultLayout from "../../layouts/default/DefaultLayout";

const WebDevelopment: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Webentwicklung
          </h1>
          <p className="text-xl">
            Maßgeschneiderte Websites und Web-Anwendungen
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">WordPress & Divi</h2>
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
                  <h3 className="font-semibold mb-2">
                    Professionelle WordPress-Entwicklung
                  </h3>
                  <p className="text-gray-600">
                    Individuelle Themes und Plugins basierend auf dem
                    Divi-Framework mit Fokus auf Performance und
                    Benutzerfreundlichkeit.
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
                  <h3 className="font-semibold mb-2">Mitgliederbereiche</h3>
                  <p className="text-gray-600">
                    Sichere und benutzerfreundliche Mitgliederbereiche für Paid
                    Content, Kurse und exklusive Inhalte.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">E-Mail & Automation</h2>
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
                  <h3 className="font-semibold mb-2">Brevo Integration</h3>
                  <p className="text-gray-600">
                    Professionelle E-Mail-Marketing-Lösungen mit automatisierten
                    Kampagnen und personalisierten Newslettern.
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
                  <h3 className="font-semibold mb-2">Make.com Workflows</h3>
                  <p className="text-gray-600">
                    Automatisierte Geschäftsprozesse durch intelligente
                    Verknüpfung verschiedener Dienste und Anwendungen.
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

export default WebDevelopment;
