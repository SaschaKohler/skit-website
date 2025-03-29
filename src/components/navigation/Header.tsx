import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import ThemeToggle from '../common/ThemeToggle'
import { useTheme } from '../../context/ThemeContext'

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { theme } = useTheme()

  // Scroll-Effekt
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Navigation schließen, wenn die Route sich ändert
  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Über Mich', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Kontakt', path: '/contact' },
  ]

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 shadow-md'
          : 'py-5'
      } ${theme === 'dark' && !scrolled ? 'bg-[var(--color-background)]' : scrolled ? 'bg-[var(--color-ui-dark)]' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="font-heading text-xl">
            <span className="text-[var(--color-primary)]">SK </span>
            <span className="text-[var(--color-secondary)]">Web</span>
            <span className="text-[var(--color-primary-hover)]">Design</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative px-1 py-2 font-medium transition-colors ${
                location.pathname === link.path 
                  ? 'text-[var(--color-primary)]' 
                  : 'text-[var(--color-text)] hover:text-[var(--color-primary)]'
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.span
                  layoutId="navbar-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--color-primary)]"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}

          {/* Theme Toggle */}
          <div className="ml-2">
            <ThemeToggle />
          </div>

          <Link
            to="/contact"
            className="ml-2 px-5 py-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white rounded-lg font-medium uppercase tracking-widest transition-all hover:shadow-md text-sm"
          >
            Jetzt anfragen
          </Link>
        </nav>

        {/* Mobile Menu Controls */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />

          <button
            className="ml-4 rounded-lg p-2 text-[var(--color-text)] hover:bg-[var(--color-primary-light)]"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4 sm:px-6 py-4 bg-[var(--color-ui-dark)] border-t border-[var(--color-border)]">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center py-3 px-4 rounded-lg ${
                location.pathname === link.path
                  ? 'bg-[var(--color-primary-light)] text-[var(--color-primary)]'
                  : 'text-[var(--color-text)] hover:bg-[var(--color-ui-medium)]'
              }`}
            >
              {link.name}
              <ChevronRight className="ml-auto h-5 w-5" />
            </Link>
          ))}
          <Link
            to="/contact"
            className="block mt-4 py-3 px-4 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white rounded-lg font-medium uppercase tracking-wider text-center transition-all"
          >
            Jetzt anfragen
          </Link>
        </div>
      </motion.div>
    </header>
  )
}

export default Header