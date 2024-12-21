import React from 'react';
import DefaultLayout from '../../layouts/default/DefaultLayout';

interface LegalLayoutProps {
  title: string;
  lastUpdated?: string;
  children: React.ReactNode;
}

const LegalLayout: React.FC<LegalLayoutProps> = ({ title, lastUpdated, children }) => {
  return (
    <DefaultLayout>
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8">
            <h1 className="text-3xl font-bold mb-4">{title}</h1>
            {lastUpdated && (
              <p className="text-gray-600 mb-8">
                Stand: {lastUpdated}
              </p>
            )}
            <div className="prose prose-blue max-w-none">
              {children}
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default LegalLayout;