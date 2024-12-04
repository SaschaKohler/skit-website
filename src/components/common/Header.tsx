// src/components/common/Header.tsx
import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">sk.IT software</div>
          <div className="hidden md:flex space-x-6">
            <Link to="/services" className="hover:text-blue-200">
              Leistungen
            </Link>
            <Link to="/about" className="hover:text-blue-200">
              Über uns
            </Link>
            <Link to="/contact" className="hover:text-blue-200">
              Kontakt
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
