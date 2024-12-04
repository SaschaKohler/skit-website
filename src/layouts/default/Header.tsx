// src/layouts/default/Header.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">
            sk.IT software
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a
              href="#services"
              className="hover:text-blue-200 transition duration-300"
            >
              Leistungen
            </a>
            <a
              href="#about"
              className="hover:text-blue-200 transition duration-300"
            >
              Über uns
            </a>
            <a
              href="#contact"
              className="hover:text-blue-200 transition duration-300"
            >
              Kontakt
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#services"
                className="hover:text-blue-200 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Leistungen
              </a>
              <a
                href="#about"
                className="hover:text-blue-200 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Über uns
              </a>
              <a
                href="#contact"
                className="hover:text-blue-200 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontakt
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
