// src/layouts/default/DefaultLayout.tsx
import React from "react";
import Header from "../../components/common/Header";
// import Footer from "../../components/common/Footer";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">sk.IT software</h3>
            <p>Ihre komplette Digitallösung aus einer Hand.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Kontakt</h3>
            <p>Email: office@sascha-kohler.at</p>
            <p>Tel: +43(0)650 90 30 372</p>
            <p>Max. Reaktionszeit: 30min</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Links</h3>
            <div className="flex flex-col space-y-2">
              <a href="#services" className="hover:text-blue-400">
                Leistungen
              </a>
              <a href="#about" className="hover:text-blue-400">
                Über uns
              </a>
              <a href="/impressum" className="hover:text-blue-400">
                Impressum
              </a>
              <a href="/datenschutz" className="hover:text-blue-400">
                Datenschutzerklärung
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>© 2024 WEB | GRAPHIX | FULL IT ❤️</p>
        </div>
      </div>
    </footer>
  );
};

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50">{children}</main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
