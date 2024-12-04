// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/default/DefaultLayout";
import Home from "./pages/Home";
import TechnologyLayout from "./layouts/TechnologyLayout";
import WordPressPage from "./pages/technologies/WordPress";
import MakePage from "./pages/technologies/Make";
import BrevoPage from "./pages/technologies/Brevo";
import ReactVitePage from "./pages/technologies/ReactVite";
import NLPPage from "./pages/technologies/NLP";
import TechnologyOverview from "./pages/technologies/Overview";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="technologies" element={<TechnologyLayout />}>
            <Route index element={<TechnologyOverview />} />
            <Route path="wordpress" element={<WordPressPage />} />
            <Route path="make" element={<MakePage />} />
            <Route path="brevo" element={<BrevoPage />} />
            <Route path="react-vite" element={<ReactVitePage />} />
            <Route path="nlp" element={<NLPPage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

// src/layouts/TechnologyLayout.tsx
import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Globe, Workflow, Mail, Code, Brain } from "lucide-react";

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
  );
};

export default TechnologyLayout;
