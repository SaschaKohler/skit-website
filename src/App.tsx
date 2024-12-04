// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Maintenance from "./pages/Maintenance";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Maintenance />} />
      </Routes>
    </Router>
  );
};

export default App;
