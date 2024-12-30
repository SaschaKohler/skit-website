import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import WebDevelopment from './pages/services/WebDevelopment'
import AppDevelopment from './pages/services/AppDevelopment'
import Automation from './pages/services/Automation'
import AboutPage from './pages/about'
import ServicesIndex from './pages/services/index.tsx'
import TechnologyLayout from './layouts/TechnologyLayout.tsx'
import BrevoPage from './pages/technologies/Brevo.tsx'
import MakePage from './pages/technologies/Make.tsx'
import WordPress from './pages/technologies/Wordpress.tsx'
import TechnologyOverview from './pages/technologies/Overview.tsx'
import NLPPage from './pages/technologies/NLP.tsx'
import ReactVitePage from './pages/technologies/ReactVite.tsx'
import JaZumLebenPage from './pages/ja-zum-leben'
import Impressum from './pages/impressum'
import Datenschutz from './pages/datenschutz'
import AGB from './pages/agb'
import PricingPage from './pages/packages'

const App: React.FC = () => {
  return (
    <Router>
      {/* <ScrollToTop /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesIndex />} />
        <Route path="/services/app-development" element={<AppDevelopment />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/automation" element={<Automation />} />
        <Route path="/ja-zum-leben" element={<JaZumLebenPage />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/agb" element={<AGB />} />
        <Route path="/packages" element={<PricingPage />} />
        <Route path="technologies" element={<TechnologyLayout />}>
          <Route index element={<TechnologyOverview />} />
          <Route path="wordpress" element={<WordPress />} />
          <Route path="make" element={<MakePage />} />
          <Route path="brevo" element={<BrevoPage />} />
          <Route path="react-vite" element={<ReactVitePage />} />
          <Route path="nlp" element={<NLPPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
