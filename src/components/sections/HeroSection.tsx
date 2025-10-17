import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const carouselImages = [
    {
      url: '/img/unsichtbar.png',
      alt: 'Ihr Partner für einen sicheren digitalen Start',
      fallback:
        'https://via.placeholder.com/600x600?text=Digitaler+Start',
    },
    {
      url: '/img/sichtbar.png',
      alt: 'Von der Gründung bis zur erfolgreichen Online-Präsenz',
      fallback: 'https://via.placeholder.com/600x600?text=Online+Präsenz',
    },
    {
      url: '/img/auffindbar.png',
      alt: 'WordPress, Google Analytics & mehr – alles aus einer Hand',
      fallback: 'https://via.placeholder.com/600x600?text=Komplettservice',
    },

    {
      url: '/img/erfolgreich.png',
      alt: 'Erfolgreich durchstarten mit professioneller Betreuung',
      fallback: 'https://via.placeholder.com/600x600?text=Erfolgreicher+Start',
    },
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  // Auto-Rotation für das Carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % carouselImages.length)
    }, 5000)

    return () => {
      clearInterval(interval)
    }
  }, [carouselImages.length])

  // Funktionen für das Carousel
  const nextSlide = (): void => {
    setCurrentSlide(prev => (prev + 1) % carouselImages.length)
  }

  const prevSlide = (): void => {
    setCurrentSlide(
      prev => (prev - 1 + carouselImages.length) % carouselImages.length
    )
  }

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
    <section className="pt-24 pb-20 md:pt-32 md:pb-28 relative overflow-hidden bg-white">
      {/* Minimalistischer Hintergrund */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-white" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col justify-center items-center">
            <motion.div
              initial="hidden"
              animate={isVisible ? 'visible' : 'hidden'}
              variants={preheadingVariants}
              className="mb-4"
            >
              <h2 className="text-2xl sm:text-3xl font-medium text-rose-500 mb-2">
                FÜR GRÜNDER:INNEN & EINZELUNTERNEHMER:INNEN
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={isVisible ? 'visible' : 'hidden'}
              variants={titleVariants}
              className="mb-8"
            >
              <h1
                className="text-5xl sm:text-6xl md:text-7xl font-heading font-bold tracking-tight leading-none text-gray-900"
                style={{ letterSpacing: '-0.02em' }}
              >
                <div className="text-rose-600">Ihr sicherer Start</div>
                <div className="mt-2">in die digitale Welt</div>
              </h1>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={isVisible ? 'visible' : 'hidden'}
              variants={contentVariants}
              className="mb-8"
            >
              <p className="text-lg sm:text-xl text-gray-700 max-w-xl leading-relaxed">
                Sie gründen gerade Ihr Einzelunternehmen und wissen: An einer professionellen
                Online-Präsenz führt kein Weg mehr vorbei. Aber zwischen Business-Plan,
                Finanzierung und den ersten Kund:innen bleibt wenig Zeit für komplexe
                digitale Themen.
                <strong className="block mt-3 text-rose-600">
                  Genau hier unterstütze ich Sie – als erfahrener Partner, der nicht nur
                  die Technik beherrscht, sondern auch Ihre Herausforderungen als Gründer:in kennt.
                </strong>
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
                className="px-6 py-3 bg-rose-500 hover:bg-rose-600 text-white rounded-md font-medium transition-all hover:translate-y-[-2px] inline-flex items-center justify-center"
              >
                Kostenloses Erstgespräch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="#pricing"
                className="px-6 py-3 bg-white hover:bg-gray-100 text-gray-800 border border-gray-300 rounded-md font-medium transition-all inline-flex items-center justify-center"
              >
                Meine Services
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              scale: { type: 'spring', visualDuration: 0.5, bounce: 0.3 },
            }}
            className="hidden md:block relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
              {/* Carousel-Bilder */}
              {carouselImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    onError={e => {
                      // Fallback wenn das Bild nicht gefunden wird
                      e.currentTarget.src = image.fallback
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white text-lg font-medium">
                    {image.alt}
                  </div>
                </div>
              ))}

              {/* Carousel-Navigation */}
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/50 transition-colors"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/50 transition-colors"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>

              {/* Carousel-Indikatoren */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentSlide(index)
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide ? 'bg-white w-6' : 'bg-white/50'
                    }`}
                    aria-label={`Gehe zu Slide ${String(index + 1)}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
