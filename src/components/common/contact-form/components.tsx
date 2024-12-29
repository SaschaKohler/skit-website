import React from "react";
import { ServiceCategory } from "./types";

interface StepIndicatorProps {
  currentStep: number;
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({
  currentStep,
}) => {
  const steps = [
    { number: 1, label: "Services" },
    { number: 2, label: "Details" },
    { number: 3, label: "Kontakt" },
  ];

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
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-400"
                }
              `}
              >
                {step.number}
              </div>
              <span
                className={`
                mt-1 text-xs font-medium
                ${currentStep >= step.number ? "text-blue-600" : "text-gray-400"}
              `}
              >
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`
                w-full max-w-[60px] h-0.5 mx-1
                ${currentStep > step.number ? "bg-blue-600" : "bg-gray-200"}
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
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-400"
                }
              `}
              >
                {step.number}
              </div>
              <span
                className={`
                ml-3 font-medium transition-colors
                ${currentStep >= step.number ? "text-blue-600" : "text-gray-400"}
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
  );
};

interface ServiceSelectionProps {
  categories: ServiceCategory[];
  selectedServices: string[];
  onServiceToggle: (service: string) => void;
  onNext: () => void;
}

export const ServiceSelection: React.FC<ServiceSelectionProps> = ({
  categories,
  selectedServices,
  onServiceToggle,
  onNext,
}) => (
  <div className="space-y-8">
    {categories.map((category) => (
      <div key={category.id}>
        <h3 className="font-semibold mb-4">{category.title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {category.options.map((service) => (
            <label
              key={service}
              className={`
                flex items-center p-4 rounded-lg border-2 cursor-pointer
                transition-colors duration-200
                ${
                  selectedServices.includes(service)
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-blue-200"
                }
              `}
            >
              <input
                type="checkbox"
                checked={selectedServices.includes(service)}
                onChange={() => onServiceToggle(service)}
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
);

interface LoadingSpinnerProps {
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  className = "h-5 w-5",
}) => (
  <svg
    className={`animate-spin ${className}`}
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
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);

interface SuccessMessageProps {
  selectedServices: string[];
  onReset: () => void;
}

export const SuccessMessage: React.FC<SuccessMessageProps> = ({
  selectedServices,
  onReset,
}) => (
  <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 text-center">
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
    <h2 className="text-2xl font-bold mb-4">Danke für Ihre Anfrage!</h2>
    <p className="text-gray-600 mb-6">
      Ich werde mich innerhalb von 30 Minuten bei Ihnen melden.
    </p>
    {selectedServices.length > 0 && (
      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <h3 className="font-semibold mb-2">Ausgewählte Dienste:</h3>
        <ul className="text-gray-600">
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
);

export const UI = {
  StepIndicator,
  ServiceSelection,
  LoadingSpinner,
  SuccessMessage,
};

