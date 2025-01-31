import { FormEvent } from 'react'
import { UI } from './components'
import { useContactForm } from './hooks'
import {
  serviceCategories,
  budgetOptions,
  timeframeOptions,
  contactOptions,
} from './types'

const ContactForm = (): React.JSX.Element => {
  const {
    step,
    setStep,
    formData,
    updateFormData,
    status,
    handleServiceToggle,
    handleSubmit,
    handleReset,
  } = useContactForm()

  const renderProjectDetails = (): React.JSX.Element => (
    <div className="space-y-4 md:space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Budget
        </label>
        <select
          value={formData.budget}
          onChange={e => {
            updateFormData({ budget: e.target.value })
          }}
          className="w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg"
          required
        >
          {budgetOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Zeitrahmen
        </label>
        <select
          value={formData.timeframe}
          onChange={e => {
            updateFormData({ timeframe: e.target.value })
          }}
          className="w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg"
          required
        >
          {timeframeOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Projektdetails
        </label>
        <textarea
          value={formData.message}
          onChange={e => {
            updateFormData({ message: e.target.value })
          }}
          rows={4}
          className="w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg"
          placeholder="Beschreiben Sie Ihr Projekt und Ihre spezifischen Anforderungen..."
          required
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <button
          type="button"
          onClick={() => {
            setStep(1)
          }}
          className="w-full sm:flex-1 px-4 py-2 md:px-6 md:py-3 border border-gray-300 rounded-lg font-semibold
                   hover:bg-gray-50 transition duration-300"
        >
          Zurück
        </button>
        <button
          type="button"
          onClick={() => {
            setStep(3)
          }}
          className="w-full sm:flex-1 bg-blue-600 text-white py-2 px-4 md:py-3 md:px-6 rounded-lg 
                   font-semibold hover:bg-blue-700 transition duration-300"
        >
          Weiter zu Kontakt
        </button>
      </div>
    </div>
  )

  const renderContactDetails = (): React.JSX.Element => (
    <div className="space-y-4 md:space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Name
        </label>
        <input
          type="text"
          value={formData.name}
          onChange={e => {
            updateFormData({ name: e.target.value })
          }}
          className="w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          E-Mail
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={e => {
            updateFormData({ email: e.target.value })
          }}
          className="w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Telefon (optional)
        </label>
        <input
          type="tel"
          value={formData.phone}
          onChange={e => {
            updateFormData({ phone: e.target.value })
          }}
          className="w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Bevorzugte Kontaktaufnahme
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {contactOptions.map(option => (
            <label
              key={option.value}
              className={`
                p-3 md:p-4 border-2 rounded-lg cursor-pointer text-center
                ${
                  formData.preferredContact === option.value
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-200'
                }
              `}
            >
              <input
                type="radio"
                name="preferredContact"
                value={option.value}
                checked={formData.preferredContact === option.value}
                onChange={e => {
                  updateFormData({
                    preferredContact: e.target
                      .value as typeof formData.preferredContact,
                  })
                }}
                className="sr-only"
              />
              {option.label}
            </label>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <button
          type="button"
          onClick={() => {
            setStep(2)
          }}
          className="w-full sm:flex-1 px-4 py-2 md:px-6 md:py-3 border border-gray-300 rounded-lg font-semibold
                   hover:bg-gray-50 transition duration-300"
        >
          Zurück
        </button>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full sm:flex-1 bg-blue-600 text-white py-2 px-4 md:py-3 md:px-6 rounded-lg 
                   font-semibold hover:bg-blue-700 transition duration-300
                   disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'sending' ? (
            <span className="flex items-center justify-center">
              <UI.LoadingSpinner className="h-5 w-5 -ml-1 mr-3" />
              Wird gesendet...
            </span>
          ) : (
            'Anfrage absenden'
          )}
        </button>
      </div>
    </div>
  )

  if (status === 'success') {
    return (
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <UI.SuccessMessage
            selectedServices={formData.selectedServices}
            onReset={handleReset}
          />
        </div>
      </section>
    )
  }

  const onSubmit = (e: FormEvent): void => {
    e.preventDefault()
    void handleSubmit(e)
  }

  return (
    <div id="contact" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-6">
          Kontaktieren Sie mich
        </h2>
        <p className="text-center text-gray-600 mb-8 md:mb-16 max-w-2xl mx-auto">
          Lassen Sie uns gemeinsam Ihr Projekt besprechen. Wählen Sie die
          gewünschten Services aus und teilen Sie mir Ihre Vorstellungen mit.
        </p>

        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg">
          <UI.StepIndicator currentStep={step} />
          <form onSubmit={onSubmit} className="p-4 md:p-8">
            {step === 1 && (
              <UI.ServiceSelection
                categories={serviceCategories}
                selectedServices={formData.selectedServices}
                onServiceToggle={handleServiceToggle}
                onNext={() => {
                  setStep(2)
                }}
              />
            )}

            {step === 2 && renderProjectDetails()}
            {step === 3 && renderContactDetails()}
          </form>
          {/* Service Summary Sidebar */}
          {step > 1 && formData.selectedServices.length > 0 && (
            <div className="border-t p-4 md:p-8 bg-gray-50">
              <h4 className="font-semibold mb-3 md:mb-4">Ihre Auswahl:</h4>
              <ul className="space-y-1 md:space-y-2">
                {formData.selectedServices.map((service, index) => (
                  <li key={index} className="text-sm text-gray-600">
                    • {service}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {status === 'error' && errorMessage && (
            <div className="px-4 md:px-8 pb-4 md:pb-8">
              <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
                {errorMessage}
                {errorMessage.includes('Systemkonfigurationsfehler') && (
                  <div className="mt-2">
                    <a
                      href="mailto:office@sascha-kohler.at"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      office@sascha-kohler.at
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}{' '}
        </div>
      </div>
    </div>
  )
}

export default ContactForm
