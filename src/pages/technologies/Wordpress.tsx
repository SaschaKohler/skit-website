// src/pages/technologies/WordPress.tsx
import React from 'react'
import { Code, Layout, Shield, Zap } from 'lucide-react'
import { useContactNavigation } from '../../hooks/useContactNavigation'

const WordPress: React.FC = () => {
  const handleContactClick = useContactNavigation()
  const features = [
    {
      icon: <Layout className="w-8 h-8" />,
      title: 'Divi Theme Builder',
      description: 'Visuelles Design ohne Programmierkenntnisse',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Sicherheit & Updates',
      description: 'Automatische Updates und Sicherheitsmaßnahmen',
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Custom Development',
      description: 'Individuelle Erweiterungen und Anpassungen',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performance',
      description: 'Optimierung für schnelle Ladezeiten',
    },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">WordPress mit Divi</h1>

      <div className="prose prose-lg max-w-none mb-12">
        <p>
          WordPress ist das meistgenutzte Content Management System weltweit und
          bietet in Kombination mit dem Divi Theme Builder unbegrenzte
          Möglichkeiten für Ihre Webpräsenz.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {features.map((feature, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-md">
            <div className="text-blue-600 mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-4">Meine WordPress-Services</h2>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <span className="text-blue-600">•</span>
            <span>Komplette Website-Erstellung mit Divi Theme</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600">•</span>
            <span>Integration von Mitgliederbereichen und Paid Content</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600">•</span>
            <span>E-Commerce Lösungen mit WooCommerce</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600">•</span>
            <span>Automatisierung von Marketing und Verkaufsprozessen</span>
          </li>
        </ul>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Warum WordPress?</h2>
        <p className="mb-6">
          WordPress bietet die perfekte Balance zwischen Benutzerfreundlichkeit
          und Flexibilität. Nach der Einrichtung können Sie Ihre Website selbst
          pflegen und aktualisieren - ich zeige Ihnen wie.
        </p>
        <button
          onClick={handleContactClick}
          className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold 
          hover:bg-blue-50 transition duration-300"
        >
          Beratungsgespräch vereinbaren
        </button>
      </div>
    </div>
  )
}

export default WordPress
