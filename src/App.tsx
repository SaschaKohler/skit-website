// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WebDevelopment from "./pages/services/WebDevelopment";
import AppDevelopment from "./pages/services/AppDevelopment";
import ServicesIndex from "./pages/services/index.tsx";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesIndex />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/app-development" element={<AppDevelopment />} />
        <Route path="technologies" element={<TechnologyLayout />}>
          <Route index element={<TechnologyOverview />} />
          <Route path="wordpress" element={<WordPressPage />} />
          <Route path="make" element={<MakePage />} />
          <Route path="brevo" element={<BrevoPage />} />
          <Route path="react-vite" element={<ReactVitePage />} />
          <Route path="nlp" element={<NLPPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
