import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Header from './components/navigation/Header'
import Footer from './components/navigation/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ServicesPage from './pages/ServicesPage'
import Impressum from './pages/impressum'
import Datenschutz from './pages/datenschutz'
import AGB from './pages/agb'
import ScrollToTop from './components/common/ScrollToTop'
import Breadcrumbs from './components/common/Breadcrumbs'
import SEOHelmet from './components/seo/SEOHelmet'
import { ThemeProvider } from './context/ThemeContext'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <SEOHelmet />
        <div className="flex flex-col min-h-screen bg-[var(--color-background)] text-[var(--color-text)] transition-colors duration-300">
          <Header />
          <Breadcrumbs />
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/services/web-development" element={<ServicesPage category="web" />} />
                <Route path="/services/automation" element={<ServicesPage category="automation" />} />
                <Route path="/services/api-integration" element={<ServicesPage category="api" />} />
                <Route path="/services/mobile-apps" element={<ServicesPage category="mobile" />} />
                <Route path="/contact" element={<ContactPage />} />
                {/* Rechtliche Seiten */}
                <Route path="/impressum" element={<Impressum />} />
                <Route path="/datenschutz" element={<Datenschutz />} />
                <Route path="/agb" element={<AGB />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App