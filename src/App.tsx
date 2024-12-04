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
