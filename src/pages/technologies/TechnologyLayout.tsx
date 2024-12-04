// src/pages/technologies/TechnologyLayout.tsx
import React from "react";
import { Link, Outlet } from "react-router-dom";
import DefaultLayout from "../../layouts/default/DefaultLayout";

const TechnologyLayout: React.FC = () => {
  const technologies = [
    { name: "WordPress", path: "/technologies/wordpress" },
    { name: "Make.com", path: "/technologies/make" },
    { name: "Brevo", path: "/technologies/brevo" },
    { name: "React & Vite", path: "/technologies/react-vite" },
    { name: "NLP", path: "/technologies/nlp" },
  ];

  return (
    <DefaultLayout>
      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto px-6 py-12">
          <nav className="mb-8">
            <ul className="flex flex-wrap gap-4">
              {technologies.map((tech) => (
                <li key={tech.path}>
                  <Link
                    to={tech.path}
                    className="px-4 py-2 rounded-lg bg-white shadow hover:shadow-md 
                      transition-shadow duration-300 text-blue-600 hover:text-blue-700"
                  >
                    {tech.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Outlet />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default TechnologyLayout;
