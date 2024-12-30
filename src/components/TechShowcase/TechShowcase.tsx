import React, { useState, useEffect, useCallback } from 'react'
import {
  ChevronLeft,
  ChevronRight,
  Server,
  Mail,
  Lock,
  Layout,
  Users,
  Video,
  FileText,
  Workflow,
} from 'lucide-react'
import memberAreaImage from '../../assets/images/ja-zum-leben/member-area.png'
import cmsSystemImage from '../../assets/images/ja-zum-leben/cms-system.png'
import emailMarketingImage from '../../assets/images/ja-zum-leben/email-marketing.png'

const TechShowcase = (): React.JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const slides = [
    {
      image: memberAreaImage,
      alt: 'WordPress Divi Member Area',
      title: 'Member Bereich',
    },
    {
      image: cmsSystemImage,
      alt: 'Content Management System',
      title: 'CMS System',
    },
    {
      image: emailMarketingImage,
      alt: 'Email Marketing Automation',
      title: 'Email Marketing',
    },
  ]

  const nextSlide = useCallback((): void => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide(prev => (prev + 1) % slides.length)
    setTimeout(() => {
      setIsTransitioning(false)
    }, 500)
  }, [isTransitioning, slides.length])

  const prevSlide = (): void => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length)
    setTimeout(() => {
      setIsTransitioning(false)
    }, 500)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => {
      clearInterval(timer)
    }
  }, [nextSlide])

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Image Slider */}
      <div className="relative mb-16 rounded-lg overflow-hidden shadow-xl bg-gray-900">
        <div className="relative h-96">
          {/* Slider Track */}
          <div
            className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${String(currentSlide * 100)}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="relative min-w-full h-full flex-shrink-0"
              >
                {/* Image */}
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                />
                {/* Overlay - Now part of each slide */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/40 flex items-center justify-center">
                  <h3 className="text-white text-3xl md:text-4xl font-bold text-center px-4">
                    {slide.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          disabled={isTransitioning}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full 
                   hover:bg-white disabled:opacity-50 transition-all duration-300
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          disabled={isTransitioning}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full 
                   hover:bg-white disabled:opacity-50 transition-all duration-300
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 
                      ${
                        currentSlide === index
                          ? 'bg-white scale-110'
                          : 'bg-white/50 hover:bg-white/70'
                      }`}
              onClick={() => {
                if (!isTransitioning) {
                  setIsTransitioning(true)
                  setCurrentSlide(index)
                  setTimeout(() => {
                    setIsTransitioning(false)
                  }, 500)
                }
              }}
              aria-label={`Go to slide ${String(index + 1)}`}
            />
          ))}
        </div>
      </div>

      {/* Tech Stack Description */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Layout className="w-8 h-8 text-blue-600 mr-3" />
            <h3 className="text-xl font-semibold">WordPress Divi</h3>
          </div>
          <p className="text-gray-600">
            Professionelles Theme mit umfangreichen Gestaltungsmöglichkeiten und
            responsivem Design.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Lock className="w-8 h-8 text-blue-600 mr-3" />
            <h3 className="text-xl font-semibold">Member Bereich</h3>
          </div>
          <p className="text-gray-600">
            Geschützter Bereich für Videos, Dokumente und exklusive Inhalte mit
            automatisierter Zugangsverwaltung.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Users className="w-8 h-8 text-blue-600 mr-3" />
            <h3 className="text-xl font-semibold">CMS System</h3>
          </div>
          <p className="text-gray-600">
            Benutzerfreundliche Verwaltung durch Custom Fields und modularen
            Aufbau.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Mail className="w-8 h-8 text-blue-600 mr-3" />
            <h3 className="text-xl font-semibold">Email Marketing</h3>
          </div>
          <p className="text-gray-600">
            Eigener Mailserver mit automatisiertem Marketing und
            Kundenbetreuung.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Video className="w-8 h-8 text-blue-600 mr-3" />
            <h3 className="text-xl font-semibold">Video Integration</h3>
          </div>
          <p className="text-gray-600">
            Optimierte Videoplattform für Kursinhalte und Schulungsmaterial.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <FileText className="w-8 h-8 text-blue-600 mr-3" />
            <h3 className="text-xl font-semibold">Dokumente</h3>
          </div>
          <p className="text-gray-600">
            Strukturiertes Dokumentenmanagement mit Download-Funktion.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Server className="w-8 h-8 text-blue-600 mr-3" />
            <h3 className="text-xl font-semibold">Hosting</h3>
          </div>
          <p className="text-gray-600">
            Professionelles Hosting mit SSL-Verschlüsselung und Backup-System.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Workflow className="w-8 h-8 text-blue-600 mr-3" />
            <h3 className="text-xl font-semibold">Automation</h3>
          </div>
          <p className="text-gray-600">
            Automatisierte Workflows für Kundenbetreuung und Marketing mit
            make.com.
          </p>
        </div>
      </div>
    </div>
  )
}

export default TechShowcase