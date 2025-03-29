import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Send,
  Phone,
  Mail,
  Clock,
  Calendar,
  CheckCircle,
  ArrowRight,
  MessageCircle,
} from 'lucide-react'

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    website: false,
    pricing: 'oneTime',
    bookingSystem: false,
  })

  const [formStatus, setFormStatus] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle')

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target

    const checked =
      type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('submitting')

    // Simuliere API-Anruf
    setTimeout(() => {
      setFormStatus('success')
      console.log('Form submitted:', formData)
      // In einer realen Anwendung würde hier der API-Aufruf stattfinden
    }, 1500)
  }

  return (
    <div className="pt-20 pb-16">
      {/* Hintergrund mit warmem Farbverlauf */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-rose-50 to-amber-50 -z-10" />

      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Seitenüberschrift */}
          <div className="text-center mb-12">
            <motion.h1
              className="text-3xl sm:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Lassen Sie uns{' '}
              <span className="text-rose-500">zusammenarbeiten</span>
            </motion.h1>
            <motion.p
              className="text-gray-600 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Vereinbaren Sie ein kostenloses Beratungsgespräch oder stellen Sie
              direkt Ihre Anfrage.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Kontaktformular */}
            <motion.div
              className="md:col-span-2 bg-white rounded-xl shadow-lg p-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {formStatus === 'success' ? (
                <div className="text-center py-10">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                    <CheckCircle className="h-10 w-10 text-green-500" />
                  </div>
                  <h2 className="text-2xl font-bold mb-3">
                    Vielen Dank für Ihre Anfrage!
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Ich werde mich schnellstmöglich bei Ihnen melden, in der
                    Regel innerhalb von 24 Stunden.
                  </p>
                  <button
                    onClick={() => {
                      setFormStatus('idle')
                    }}
                    className="inline-flex items-center px-6 py-3 bg-rose-500 hover:bg-rose-600 text-white rounded-lg font-medium transition-all"
                  >
                    Neue Anfrage senden
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <MessageCircle className="h-6 w-6 mr-2 text-rose-500" />
                    Ihre Anfrage
                  </h2>

                  <form onSubmit={handleSubmit}>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="block mb-2 text-sm font-medium text-gray-700"
                        >
                          Ihr Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="bg-gray-50 border border-gray-300 text-gray-700 rounded-lg focus:ring-rose-500 focus:border-rose-500 block w-full p-3"
                          placeholder="Max Mustermann"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium text-gray-700"
                        >
                          Ihre E-Mail *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="bg-gray-50 border border-gray-300 text-gray-700 rounded-lg focus:ring-rose-500 focus:border-rose-500 block w-full p-3"
                          placeholder="name@beispiel.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label
                        htmlFor="phone"
                        className="block mb-2 text-sm font-medium text-gray-700"
                      >
                        Telefonnummer
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-700 rounded-lg focus:ring-rose-500 focus:border-rose-500 block w-full p-3"
                        placeholder="+43 123 456 789"
                      />
                    </div>

                    <div className="mb-6">
                      <p className="block mb-2 text-sm font-medium text-gray-700">
                        Ich interessiere mich für:
                      </p>
                      <div className="flex items-center mb-3">
                        <input
                          id="website"
                          type="checkbox"
                          name="website"
                          checked={formData.website}
                          onChange={handleChange}
                          className="w-4 h-4 text-rose-500 bg-gray-100 border-gray-300 rounded focus:ring-rose-500"
                        />
                        <label htmlFor="website" className="ml-2 text-gray-700">
                          Eine WordPress Website
                        </label>
                      </div>

                      {formData.website && (
                        <div className="ml-6 mb-4 p-4 bg-rose-50 rounded-lg">
                          <p className="block mb-2 text-sm font-medium text-gray-700">
                            Bevorzugte Zahlungsweise:
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <label
                              className={`inline-flex items-center px-4 py-2 rounded-lg border cursor-pointer transition-colors ${
                                formData.pricing === 'oneTime'
                                  ? 'bg-rose-100 border-rose-300 text-rose-700'
                                  : 'bg-white border-gray-200 text-gray-700 hover:bg-rose-50'
                              }`}
                            >
                              <input
                                type="radio"
                                name="pricing"
                                value="oneTime"
                                checked={formData.pricing === 'oneTime'}
                                onChange={handleChange}
                                className="sr-only"
                              />
                              <span>Einmalzahlung</span>
                            </label>

                            <label
                              className={`inline-flex items-center px-4 py-2 rounded-lg border cursor-pointer transition-colors ${
                                formData.pricing === 'monthly'
                                  ? 'bg-rose-100 border-rose-300 text-rose-700'
                                  : 'bg-white border-gray-200 text-gray-700 hover:bg-rose-50'
                              }`}
                            >
                              <input
                                type="radio"
                                name="pricing"
                                value="monthly"
                                checked={formData.pricing === 'monthly'}
                                onChange={handleChange}
                                className="sr-only"
                              />
                              <span>Monatliche Rate</span>
                            </label>
                          </div>

                          <div className="mt-4">
                            <div className="flex items-center">
                              <input
                                id="bookingSystem"
                                type="checkbox"
                                name="bookingSystem"
                                checked={formData.bookingSystem}
                                onChange={handleChange}
                                className="w-4 h-4 text-rose-500 bg-gray-100 border-gray-300 rounded focus:ring-rose-500"
                              />
                              <label
                                htmlFor="bookingSystem"
                                className="ml-2 text-gray-700"
                              >
                                Mit Buchungssystem (+290€)
                              </label>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="mb-6">
                      <label
                        htmlFor="message"
                        className="block mb-2 text-sm font-medium text-gray-700"
                      >
                        Ihre Nachricht *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="bg-gray-50 border border-gray-300 text-gray-700 rounded-lg focus:ring-rose-500 focus:border-rose-500 block w-full p-3"
                        placeholder="Beschreiben Sie Ihr Projekt oder Ihre Fragen..."
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center px-6 py-3 bg-rose-500 hover:bg-rose-600 text-white rounded-lg font-medium transition-all w-full md:w-auto disabled:bg-gray-400 disabled:cursor-not-allowed"
                      disabled={formStatus === 'submitting'}
                    >
                      {formStatus === 'submitting' ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Wird gesendet...
                        </>
                      ) : (
                        <>
                          Anfrage senden
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </motion.div>

            {/* Kontaktinformationen */}
            <motion.div
              className="md:col-span-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-gradient-to-br from-rose-500 to-amber-500 rounded-xl shadow-lg p-8 text-white sticky top-24">
                <h3 className="text-xl font-bold mb-6">Kontaktinformationen</h3>

                <div className="space-y-4 mb-8">
                  <div className="flex">
                    <Mail className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white/80 text-sm">E-Mail</p>
                      <a
                        href="mailto:office@sascha-kohler.at"
                        className="hover:underline"
                      >
                        office@sascha-kohler.at
                      </a>
                    </div>
                  </div>

                  <div className="flex">
                    <Phone className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white/80 text-sm">Telefon</p>
                      <a href="tel:+4365090030372" className="hover:underline">
                        +43 (0) 650 90 30 372
                      </a>
                    </div>
                  </div>

                  <div className="flex">
                    <Clock className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white/80 text-sm">Bürozeiten</p>
                      <p>Mo-Fr: 9:00 - 17:00 Uhr</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/20">
                  <h4 className="font-medium mb-3">
                    Schnelle Terminvereinbarung
                  </h4>
                  <a
                    href="https://calendly.com/skwebdesign/beratung"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-5 py-2 bg-white text-rose-600 hover:bg-rose-100 rounded-lg font-medium transition-all w-full justify-center"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Termin buchen
                  </a>
                  <p className="text-sm mt-3 text-white/80">
                    Buchen Sie direkt einen Termin für ein kostenloses
                    30-minütiges Beratungsgespräch.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* FAQ-Bereich */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Häufig gestellte Fragen
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  q: 'Wie läuft der Prozess einer Website-Erstellung ab?',
                  a: 'Nach einem kostenlosen Beratungsgespräch erstelle ich ein Konzept und Design. Nach Ihrer Freigabe setze ich die Website um und integriere Ihre Inhalte. Nach Ihrer finalen Abnahme geht die Website online.',
                },
                {
                  q: 'Wie lange dauert es, bis meine Website fertig ist?',
                  a: 'In der Regel ist Ihre Website in 14 Tagen online. Bei komplexeren Projekten kann es etwas länger dauern, was wir aber vorher besprechen.',
                },
                {
                  q: 'Kann ich meine Website später selbst bearbeiten?',
                  a: 'Ja, Ihre WordPress-Website können Sie selbst verwalten. Sie erhalten eine Einführung und Anleitung zur Bedienung des Content Management Systems.',
                },
                {
                  q: 'Was sind die laufenden Kosten nach dem ersten Jahr?',
                  a: 'Nach dem ersten Jahr fallen 19€/Monat oder 190€/Jahr für Hosting, Domain, Updates und technischen Support an.',
                },
              ].map((faq, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <h3 className="font-semibold text-gray-800 mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
