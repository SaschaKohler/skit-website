import React from 'react'
import {
  Zap,
  Code,
  Layout,
  Smartphone,
  Monitor,
  Gauge,
  Settings,
  RefreshCw,
} from 'lucide-react'

const ReactVitePage: React.FC = () => {
  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Blitzschnelle Performance',
      description:
        'Optimale Ladezeiten durch modernste Entwicklungstechnologien',
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Responsive Design',
      description:
        'Perfekte Darstellung auf allen Geräten und Bildschirmgrößen',
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: 'Moderne Benutzeroberflächen',
      description: 'Intuitive und ansprechende User Interfaces',
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: 'Optimierte Performance',
      description: 'Schnelle Ladezeiten und effiziente Ressourcennutzung',
    },
  ]

  const projectTypes = [
    {
      title: 'Web-Applikationen',
      description:
        'Maßgeschneiderte Webanwendungen für Ihre spezifischen Anforderungen',
      features: [
        'Single Page Applications (SPA)',
        'Progressive Web Apps (PWA)',
        'Admin-Dashboards',
        'E-Commerce Lösungen',
      ],
    },
    {
      title: 'Interaktive Websites',
      description: 'Dynamische Websites mit modernen Funktionen',
      features: [
        'Animierte Benutzeroberflächen',
        'Echtzeit-Updates',
        'Formulare mit Validierung',
        'Filterfunktionen',
      ],
    },
    {
      title: 'Backend Integration',
      description: 'Nahtlose Verbindung mit verschiedenen Datenquellen',
      features: [
        'REST API Integration',
        'Echtzeit-Daten',
        'Authentifizierung',
        'Datenbankanbindung',
      ],
    },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">React & Vite Entwicklung</h1>

      <div className="prose prose-lg max-w-none mb-12">
        <p>
          Mit React und Vite entwickle ich moderne, schnelle und wartbare
          Webanwendungen. Diese Technologiekombination ermöglicht es,
          maßgeschneiderte Lösungen zu erstellen, die genau auf Ihre
          Anforderungen zugeschnitten sind.
        </p>
      </div>

      {/* Technology Stack */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-6">Moderne Technologie-Stack</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">React</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Code className="w-5 h-5 mt-1" />
                <span>Komponentenbasierte Entwicklung</span>
              </li>
              <li className="flex items-start gap-2">
                <RefreshCw className="w-5 h-5 mt-1" />
                <span>Reaktive Benutzeroberflächen</span>
              </li>
              <li className="flex items-start gap-2">
                <Monitor className="w-5 h-5 mt-1" />
                <span>Große Ökosystem an Komponenten</span>
              </li>
            </ul>
          </div>
          <div className="bg-white/10 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Vite</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Zap className="w-5 h-5 mt-1" />
                <span>Ultraschnelle Entwicklungsumgebung</span>
              </li>
              <li className="flex items-start gap-2">
                <Settings className="w-5 h-5 mt-1" />
                <span>Optimierte Build-Prozesse</span>
              </li>
              <li className="flex items-start gap-2">
                <Gauge className="w-5 h-5 mt-1" />
                <span>Effizientes Hot Module Replacement</span>
              </li>
            </ul>
          </div>
        </div>
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

      {/* Project Types */}
      <div className="bg-blue-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-6">Projektarten</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projectTypes.map((type, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
              <p className="text-gray-600 mb-4">{type.description}</p>
              <ul className="space-y-2">
                {type.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start gap-2 text-gray-600"
                  >
                    <span className="text-blue-600">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Development Process */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6">Mein Entwicklungsprozess</h2>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div
              className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center 
              justify-center flex-shrink-0"
            >
              1
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Anforderungsanalyse
              </h3>
              <p className="text-gray-600">
                Gemeinsame Erarbeitung der Projektziele und technischen
                Anforderungen
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div
              className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center 
              justify-center flex-shrink-0"
            >
              2
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Konzeption & Design
              </h3>
              <p className="text-gray-600">
                Entwicklung der Architektur und des visuellen Designs
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div
              className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center 
              justify-center flex-shrink-0"
            >
              3
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Entwicklung</h3>
              <p className="text-gray-600">
                Agile Entwicklung mit regelmäßigen Feedback-Schleifen
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div
              className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center 
              justify-center flex-shrink-0"
            >
              4
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Testing & Deployment
              </h3>
              <p className="text-gray-600">
                Umfassende Tests und professionelle Inbetriebnahme
              </p>
            </div>
          </div>
        </div>
        <button
          className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold 
          hover:bg-blue-700 transition duration-300"
        >
          Projekt besprechen
        </button>
      </div>
    </div>
  )
}

export default ReactVitePage
