import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink } from 'lucide-react'

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  // Animation Varianten
  const preheadingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.3,
      },
    },
  }

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.6,
      },
    },
  }

  return (
    <section className="relative overflow-hidden min-h-[85vh] md:min-h-[90vh] flex items-center">
      {/* Vollflächiges Hintergrundbild */}
      <div className="absolute inset-0">
        <img
          src="/img/bahnhof-hero.jpg"
          alt="Unternehmensgründung - Klare Richtung in der digitalen Welt"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 35%' }}
        />
        {/* Gradient Overlay für bessere Lesbarkeit */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/40"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content - Links */}
          <div className="flex flex-col justify-center items-start">
            <motion.div
              initial="hidden"
              animate={isVisible ? 'visible' : 'hidden'}
              variants={preheadingVariants}
              className="mb-4 text-left w-full"
            >
              <h2 className="text-xl sm:text-2xl font-medium text-rose-400 mb-2">
                FÜR GRÜNDER:INNEN & EINZELUNTERNEHMER:INNEN
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={isVisible ? 'visible' : 'hidden'}
              variants={titleVariants}
              className="mb-8 text-left w-full"
            >
              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight leading-tight text-white"
                style={{ letterSpacing: '-0.02em' }}
              >
                <div className="text-rose-400">Züge in alle Richtungen.</div>
                <div className="mt-2">Ihre Online-Präsenz</div>
                <div className="mt-2">hat ein klares Ziel.</div>
              </h1>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={isVisible ? 'visible' : 'hidden'}
              variants={contentVariants}
              className="mb-8 text-left w-full"
            >
              <p className="text-lg sm:text-xl text-gray-100 max-w-xl leading-relaxed">
                Unternehmensgründung fühlt sich manchmal an wie am Bahnhof: Züge
                in alle erdenklichen Richtungen, unzählige Entscheidungen,
                tausend Dinge gleichzeitig.
              </p>
              <p className="text-lg sm:text-xl text-white font-medium mt-4 max-w-xl leading-relaxed">
                Da sollte Ihre erste Online-Präsenz nicht auch noch in
                unbekannte Richtungen führen.
              </p>
              <p className="text-lg sm:text-xl text-rose-300 mt-4 max-w-xl leading-relaxed">
                <strong>Ich bringe Klarheit in Ihre digitale Reise</strong> –
                mit einer professionellen Website, die genau dorthin führt, wo
                Sie hinwollen: Zu Ihren Kund:innen.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Link
                to="/contact"
                className="px-8 py-4 bg-rose-500 hover:bg-rose-600 text-white rounded-lg font-medium transition-all hover:translate-y-[-2px] hover:shadow-xl inline-flex items-center justify-center text-lg"
              >
                Kostenloses Erstgespräch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="#pricing"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-lg font-medium transition-all inline-flex items-center justify-center text-lg"
              >
                Meine Services
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </motion.div>
          </div>

          {/* Rechte Seite - Leer für Bild-Sichtbarkeit */}
          <div className="hidden md:block"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
