// src/components/sections/About.tsx
import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">EPU mit Fokus</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Vorteile als EPU</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                </svg>
                100% Konzentration auf nur ein Projekt
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                </svg>
                Maximale Reaktionszeit: 30 Minuten
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                </svg>
                Komplettlösungen aus einer Hand
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Unser Prozess</h3>
            <ol className="space-y-4">
              <li className="flex">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
                  1
                </span>
                <div>
                  <h4 className="font-semibold">Zielsetzung & Anforderungen</h4>
                  <p>Gemeinsames Erarbeiten Ihrer spezifischen Bedürfnisse</p>
                </div>
              </li>
              <li className="flex">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
                  2
                </span>
                <div>
                  <h4 className="font-semibold">Konzepterstellung</h4>
                  <p>Detaillierte Planung und technisches Konzept</p>
                </div>
              </li>
              <li className="flex">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
                  3
                </span>
                <div>
                  <h4 className="font-semibold">Umsetzung</h4>
                  <p>Entwicklung und kontinuierlicher Support</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
