import React from 'react'

interface SuccessMessageProps {
  selectedServices: string[]
  onReset: () => void
}

export const SuccessMessage: React.FC<SuccessMessageProps> = ({
  selectedServices,
  onReset,
}): React.JSX.Element => (
  <div className="max-w-2xl mx-auto bg-[var(--color-ui-dark)] rounded-lg shadow-lg p-8 text-center border border-[var(--color-border)]">
    <div className="mb-8">
      <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
        <svg
          className="w-8 h-8 text-green-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
    </div>
    <h2 className="text-2xl font-bold mb-4 text-[var(--color-text-dark)]">Danke für Ihre Anfrage!</h2>
    <p className="text-[var(--color-text)] mb-6">
      Ich werde mich innerhalb von 30 Minuten bei Ihnen melden.
    </p>
    {selectedServices.length > 0 && (
      <div className="bg-[var(--color-ui-medium)] p-4 rounded-lg mb-6 border border-[var(--color-border)]">
        <h3 className="font-semibold mb-2 text-[var(--color-text-dark)]">Ausgewählte Dienste:</h3>
        <ul className="text-[var(--color-text)]">
          {selectedServices.map((service, index) => (
            <li key={index} className="mb-1">
              • {service}
            </li>
          ))}
        </ul>
      </div>
    )}
    <button
      onClick={onReset}
      className="text-blue-600 hover:text-blue-800 font-medium"
    >
      Neue Anfrage starten
    </button>
  </div>
)