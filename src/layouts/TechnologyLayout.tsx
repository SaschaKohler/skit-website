// src/layouts/TechnologyLayout.tsx
import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Globe, Workflow, Mail, Code, Brain } from "lucide-react";
import DefaultLayout from "./default/DefaultLayout";

const TechnologyLayout: React.FC = () => {
  const location = useLocation();

  const technologies = [
    {
      name: "WordPress",
      path: "/technologies/wordpress",
      icon: <Globe className="w-5 h-5" />,
    },
    {
      name: "Make.com",
      path: "/technologies/make",
      icon: <Workflow className="w-5 h-5" />,
    },
    {
      name: "Brevo",
      path: "/technologies/brevo",
      icon: <Mail className="w-5 h-5" />,
    },
    {
      name: "React & Vite",
      path: "/technologies/react-vite",
      icon: <Code className="w-5 h-5" />,
    },
    {
      name: "NLP",
      path: "/technologies/nlp",
      icon: <Brain className="w-5 h-5" />,
    },
  ];

  return (
    <DefaultLayout>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm sticky top-16 z-40">
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-wrap gap-4">
              {technologies.map((tech) => (
                <Link
                  key={tech.path}
                  to={tech.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition duration-300
                  ${
                    location.pathname === tech.path
                      ? "bg-blue-600 text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {tech.icon}
                  <span>{tech.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </nav>
        <div className="container mx-auto px-6 py-8">
          <Outlet />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default TechnologyLayout;
