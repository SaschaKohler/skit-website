// src/components/common/Hero.tsx
import React from "react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Ihre Vision. Unsere Expertise.
      </h1>
      <p className="text-xl mb-8">
        Maßgeschneiderte Digitallösungen mit persönlicher Betreuung
      </p>
      <Link
        to="/contact"
        className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300"
      >
        Kontakt aufnehmen
      </Link>
    </div>
  );
};

export default Hero;
