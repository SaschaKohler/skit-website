import React from "react";
import DefaultLayout from "../../layouts/default/DefaultLayout";
import { Clock, CalendarCheck, Mail, Users, ArrowRight, Zap } from "lucide-react";

const Automation: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Mehr Zeit für das Wesentliche
          </h1>
          <p className="text-xl">
            Lassen Sie sich die Routinearbeit abnehmen
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Das machen wir für Sie</h2>
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
                    Automatische Kundenbetreuung
                  </h3>
                  <p className="text-gray-600">
                    Willkommens-E-Mails, Terminbestätigungen und Erinnerungen - 
                    alles läuft von selbst, während Sie sich um Ihre Kunden kümmern.
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
                  <h3 className="font-semibold mb-2">Clever verknüpft</h3>
                  <p className="text-gray-600">
                    Alle Ihre Programme arbeiten nahtlos zusammen - von der Website 
                    über E-Mails bis zum Kalender. Ein reibungsloser Ablauf ohne Ihr Zutun.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Das sparen Sie sich</h2>
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
                  <h3 className="font-semibold mb-2">Keine Fleißarbeit mehr</h3>
                  <p className="text-gray-600">
                    Schluss mit dem Kopieren von Daten zwischen Programmen oder dem 
                    manuellen Versenden von Standard-E-Mails.
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
                  <h3 className="font-semibold mb-2">Keine vergessenen Aufgaben</h3>
                  <p className="text-gray-600">
                    Wichtige Erinnerungen und Nachfassen bei Kunden - 
                    Ihr digitaler Assistent denkt mit und behält alles im Blick.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Beispiele für Automatisierungen */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-8 text-center">Das wird automatisch</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <CalendarCheck className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Terminbuchungen</h3>
              <p className="text-gray-600">
                Kunden buchen online, bekommen automatisch eine Bestätigung 
                und werden rechtzeitig erinnert
              </p>
            </div>
            <div className="text-center p-6">
              <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">E-Mail-Betreuung</h3>
              <p className="text-gray-600">
                Newsletter, Willkommens-Mails und Geburtstagswünsche - 
                persönlich, aber automatisch
              </p>
            </div>
            <div className="text-center p-6">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Kundenservice</h3>
              <p className="text-gray-600">
                Anfragen werden sortiert, Aufgaben verteilt und 
                nichts wird vergessen
              </p>
            </div>
          </div>
        </div>

        {/* Vorteile */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Ihre Vorteile</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start bg-white p-6 rounded-lg shadow-sm">
              <Clock className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Zeit gewinnen</h3>
                <p className="text-gray-600">
                  Bis zu 70% weniger Zeit für Verwaltungsaufgaben. 
                  Endlich wieder Zeit für das, was wirklich wichtig ist.
                </p>
              </div>
            </div>
            <div className="flex items-start bg-white p-6 rounded-lg shadow-sm">
              <Zap className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Fehler vermeiden</h3>
                <p className="text-gray-600">
                  Automatische Abläufe arbeiten zuverlässig und genau - 
                  keine vergessenen Aufgaben mehr.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Bereit für mehr Freiheit?</h2>
          <p className="text-gray-600 mb-8">
            Lassen Sie uns gemeinsam herausfinden, welche Aufgaben wir Ihnen 
            abnehmen können.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors 
            inline-flex items-center gap-2">
            Möglichkeiten besprechen
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Automation;