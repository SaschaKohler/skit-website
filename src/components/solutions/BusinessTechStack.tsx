import React from 'react'
import {
  Globe,
  ShoppingBag,
  Users,
  MessageSquare,
  ArrowRight,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const BusinessTechStack: React.FC = () => {
  const solutions = [
    {
      title: 'Online Präsenz',
      icon: <Globe className="w-8 h-8" />,
      description:
        'Professioneller Webauftritt mit einfacher Content-Verwaltung',
      features: ['Responsive Design', 'SEO-Optimierung', 'Content-Management'],
      examples: ['Praxis-Webseiten', 'Portfolios', 'Unternehmensauftritte'],
      link: '/services/web-development',
    },
    {
      title: 'Digitale Produkte',
      icon: <ShoppingBag className="w-8 h-8" />,
      description: 'Verkaufen Sie Ihre Dienstleistungen & Produkte online',
      features: [
        'Zahlungsabwicklung',
        'Produktkatalog',
        'Automatisierte Auslieferung',
      ],
      examples: ['Online-Shops', 'Digitale Downloads', 'Buchungssysteme'],
      link: '/services/app-development',
    },
    {
      title: 'Geschützter Bereich',
      icon: <Users className="w-8 h-8" />,
      description: 'Exklusiver Content für Ihre Kunden & Mitglieder',
      features: ['Mitgliederverwaltung', 'Premium Content', 'Kursmanagement'],
      examples: ['Online-Kurse', 'Coaching-Programme', 'Mitgliedschaften'],
      link: '/technologies/react-vite',
    },
    {
      title: 'Workflow Automation',
      icon: <MessageSquare className="w-8 h-8" />,
      description: 'Automatisierte Geschäftsprozesse & Kommunikation',
      features: ['Email-Marketing', 'Terminbuchung', 'Kundenbetreuung'],
      examples: ['Newsletter', 'Terminerinnerungen', 'Kundenanfragen'],
      link: '/technologies/make',
    },
  ]

  return (
    <section className="w-full py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
          Digitale Lösungen für Ihr Geschäft
        </h2>
        <p className="text-xl text-gray-600">
          Maßgeschneiderte Technologien, die Ihr Unternehmen voranbringen
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {solutions.map(solution => (
          <div
            key={solution.title}
            className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-2 rounded-lg bg-blue-100">{solution.icon}</div>
              <h3 className="text-xl font-bold">{solution.title}</h3>
            </div>

            <p className="text-gray-600 mb-6">{solution.description}</p>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Features:</h4>
                <div className="flex flex-wrap gap-2">
                  {solution.features.map(feature => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Anwendungen:</h4>
                <div className="flex flex-wrap gap-2">
                  {solution.examples.map(example => (
                    <span
                      key={example}
                      className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                to={solution.link}
                className="inline-flex items-center justify-center w-full px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-colors group"
              >
                Mehr erfahren
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BusinessTechStack
