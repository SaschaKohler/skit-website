import React from 'react'

interface StepIndicatorProps {
  currentStep: number
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({
  currentStep,
}): React.JSX.Element => {
  const steps = [
    { number: 1, label: 'Services' },
    { number: 2, label: 'Details' },
    { number: 3, label: 'Kontakt' },
  ]

  return (
    <div className="relative py-4 px-4 md:px-8 border-b">
      {/* Mobile Version - Compact View */}
      <div className="md:hidden flex justify-between items-center">
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            <div className="flex flex-col items-center">
              <div
                className={`
                w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                ${
                  currentStep >= step.number
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-400'
                }
              `}
              >
                {step.number}
              </div>
              <span
                className={`
                mt-1 text-xs font-medium
                ${currentStep >= step.number ? 'text-blue-600' : 'text-gray-400'}
              `}
              >
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`
                w-full max-w-[60px] h-0.5 mx-1
                ${currentStep > step.number ? 'bg-blue-600' : 'bg-gray-200'}
              `}
              />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Desktop Version - Full View */}
      <div className="hidden md:flex justify-between items-center">
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            <div className="flex items-center">
              <div
                className={`
                w-10 h-10 rounded-full flex items-center justify-center text-base font-medium transition-colors
                ${
                  currentStep >= step.number
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-400'
                }
              `}
              >
                {step.number}
              </div>
              <span
                className={`
                ml-3 font-medium transition-colors
                ${currentStep >= step.number ? 'text-blue-600' : 'text-gray-400'}
              `}
              >
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div className="relative w-32">
                <div className="absolute top-1/2 w-full h-0.5 bg-gray-200 -translate-y-1/2" />
                {currentStep > step.number && (
                  <div className="absolute top-1/2 w-full h-0.5 bg-blue-600 -translate-y-1/2 transition-all duration-300" />
                )}
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}