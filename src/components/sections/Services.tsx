// src/components/sections/Services.tsx
import React from "react";
import ServiceCard from "../ui/ServiceCard";

const Services: React.FC = () => {
  const services = [
    {
      title: "Webentwicklung",
      items: [
        "WordPress mit Divi-Theme",
        "Mitgliederbereiche für Paid Content",
        "Automatisierte E-Mail-Systeme",
        "Hosting & Server-Management",
      ],
    },
    {
      title: "App-Entwicklung",
      items: [
        "Maßgeschneiderte React-Vite Lösungen",
        "Fullstack-Entwicklung",
        "Von der Idee zum fertigen Produkt",
        "100% Fokus pro Projekt",
      ],
    },
    {
      title: "Automation & Integration",
      items: [
        "make.com Workflows",
        "Social Media Integration",
        "Brevo-Automatisierung",
        "Maßgeschneiderte Automationslösungen",
      ],
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">
          Unsere Leistungen
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
