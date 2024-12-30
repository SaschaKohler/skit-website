import React from 'react'
import { ServiceCategory } from '../types'

interface ServiceSelectionProps {
  categories: ServiceCategory[]
  selectedServices: string[]
  onServiceToggle: (service: string) => void
  onNext: () => void
}

export const ServiceSelection: React.FC<ServiceSelectionProps> = ({
  categories,
  selectedServices,
  onServiceToggle,
  onNext,
}): React.JSX.Element => (
  <div className="space-y-8">
    {categories.map(category => (
      <div key={category.id}>
        <h3 className="font-semibold mb-4">{category.title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {category.options.map(service => (
            <label
              key={service}
              className={`
                flex items-center p-4 rounded-lg border-2 cursor-pointer
                transition-colors duration-200
                ${
                  selectedServices.includes(service)
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-200'
                }
              `}
            >
              <input
                type="checkbox"
                checked={selectedServices.includes(service)}
                onChange={() => { onServiceToggle(service) }}
                className="sr-only"
              />
              <span className="ml-2">{service}</span>
            </label>
          ))}
        </div>
      </div>
    ))}
    <button
      type="button"
      onClick={onNext}
      disabled={selectedServices.length === 0}
      className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg 
               font-semibold hover:bg-blue-700 transition duration-300 
               disabled:opacity-50 disabled:cursor-not-allowed"
    >
      Weiter zu Details
    </button>
  </div>
)