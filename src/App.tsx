import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/utils/ScrollToTop'

// Lazy load components
const Home = React.lazy(() => import('./pages/Home'))
const WebDevelopment = React.lazy(
  () => import('./pages/services/WebDevelopment')
)
const AppDevelopment = React.lazy(
  () => import('./pages/services/AppDevelopment')
)
const Automation = React.lazy(() => import('./pages/services/Automation'))
const AboutPage = React.lazy(() => import('./pages/about'))
const ServicesIndex = React.lazy(() => import('./pages/services/index'))
const TechnologyLayout = React.lazy(() => import('./layouts/TechnologyLayout'))
const BrevoPage = React.lazy(() => import('./pages/technologies/Brevo'))
const MakePage = React.lazy(() => import('./pages/technologies/Make'))
const WordPress = React.lazy(() => import('./pages/technologies/Wordpress'))
const TechnologyOverview = React.lazy(
  () => import('./pages/technologies/Overview')
)
const NLPPage = React.lazy(() => import('./pages/technologies/NLP'))
const ReactVitePage = React.lazy(() => import('./pages/technologies/ReactVite'))
const JaZumLebenPage = React.lazy(() => import('./pages/ja-zum-leben'))
const Impressum = React.lazy(() => import('./pages/impressum'))
const Datenschutz = React.lazy(() => import('./pages/datenschutz'))
const AGB = React.lazy(() => import('./pages/agb'))
const PricingPage = React.lazy(() => import('./pages/packages'))

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
  </div>
)

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesIndex />} />
          <Route
            path="/services/app-development"
            element={<AppDevelopment />}
          />
          <Route
            path="/services/web-development"
            element={<WebDevelopment />}
          />
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
      </Suspense>
    </Router>
  )
}

export default App
