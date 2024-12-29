// src/pages/Maintenance.tsx
import React from "react";

const MaintenancePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-8 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">
          Website wird aktualisiert
        </h1>
        <div className="mb-8">
          <svg
            className="animate-spin h-16 w-16 mx-auto mb-4"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <p className="text-xl mb-4">
            Wir arbeiten gerade an spannenden Verbesserungen für Sie!
          </p>
        </div>
        <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
          <p className="text-lg mb-4">Kontaktieren Sie uns unter:</p>
          <a
            href="mailto:office@sascha-kohler.at"
            className="text-xl hover:text-blue-200 transition-colors"
          >
            office@sascha-kohler.at
          </a>
        </div>
      </div>
    </div>
  );
};
export default MaintenancePage;
