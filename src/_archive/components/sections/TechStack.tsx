import { Code2, Globe, Workflow, Database, Brain } from 'lucide-react'

const TechStack = () => {
  const sections = [
    {
      title: 'Web-Applikationen',
      icon: <Code2 className="w-6 h-6" />,
      features: [
        'Single Page Applications (SPA)',
        'Progressive Web Apps (PWA)',
        'Admin-Dashboards',
        'E-Commerce Lösungen',
      ],
      tools: [
        { name: 'WordPress', icon: <Globe className="w-5 h-5" /> },
        { name: 'Make.com', icon: <Workflow className="w-5 h-5" /> },
        { name: 'Brevo', icon: <Database className="w-5 h-5" /> },
        { name: 'React & Vite', icon: <Code2 className="w-5 h-5" /> },
        { name: 'NLP', icon: <Brain className="w-5 h-5" /> },
      ],
    },
    {
      title: 'Interaktive Websites',
      icon: <Globe className="w-6 h-6" />,
      features: [
        'Animierte Benutzeroberflächen',
        'Echtzeit-Updates',
        'Formulare mit Validierung',
        'Filterfunktionen',
      ],
    },
    {
      title: 'Backend Integration',
      icon: <Database className="w-6 h-6" />,
      features: [
        'REST API Integration',
        'Echtzeit-Daten',
        'Authentifizierung',
        'Datenbankanbindung',
      ],
    },
  ]

  return (
    <div className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-[var(--color-ui-dark)] rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-[var(--color-border)]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                  {section.icon}
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-text-dark)]">
                  {section.title}
                </h3>
              </div>

              <ul className="space-y-3 mb-6">
                {section.features.map((feature, fIndex) => (
                  <li
                    key={fIndex}
                    className="flex items-center gap-2 text-[var(--color-text)]"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {section.tools && (
                <div className="border-t pt-4">
                  <div className="flex flex-wrap gap-2">
                    {section.tools.map((tool, tIndex) => (
                      <div
                        key={tIndex}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-[var(--color-ui-medium)] rounded-full text-sm text-[var(--color-text)]"
                      >
                        {tool.icon}
                        {tool.name}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TechStack
