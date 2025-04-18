import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  EyeOff,
  Eye,
  Search,
  Users,
  ShoppingCart,
  Heart,
  TrendingUp,
  CheckCircle2,
} from 'lucide-react'

interface JourneyStep {
  icon: React.ReactNode
  title: string
  description: string
  color: string
}

const ClientJourneySection: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [isInView, setIsInView] = useState(false)

  // Auto-advance through journey steps
  useEffect(() => {
    if (!isInView) return

    const timer = setInterval(() => {
      setCurrentStep(prev => (prev === journeySteps.length - 1 ? 0 : prev + 1))
    }, 3000)

    return () => {
      clearInterval(timer)
    }
  }, [isInView])

  const journeySteps: JourneyStep[] = [
    {
      icon: <EyeOff className="w-10 h-10" />,
      title: 'Unsichtbar',
      description:
        'Ohne professionelle Webpräsenz bleiben Ihre Angebote unentdeckt und Potenzial ungenutzt.',
      color: 'bg-gray-200',
    },
    {
      icon: <Eye className="w-10 h-10" />,
      title: 'Sichtbar',
      description:
        'Mit einer ansprechenden Website werden Sie von Ihrer Zielgruppe wahrgenommen.',
      color: 'bg-rose-100',
    },
    {
      icon: <Search className="w-10 h-10" />,
      title: 'Auffindbar',
      description:
        'Durch SEO-Optimierung erscheinen Sie in Suchergebnissen und werden aktiv gefunden.',
      color: 'bg-rose-200',
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Ansprechend',
      description:
        'Ihr einzigartiges Design spricht Ihre idealen Kunden an und baut Vertrauen auf.',
      color: 'bg-rose-300',
    },
    {
      icon: <ShoppingCart className="w-10 h-10" />,
      title: 'Überzeugend',
      description:
        'Klar strukturierte Angebote führen zu Anfragen und Buchungen.',
      color: 'bg-rose-400',
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: 'Verbindend',
      description: 'Sie bauen nachhaltige Beziehungen zu Ihrer Zielgruppe auf.',
      color: 'bg-rose-500',
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-white" />,
      title: 'Erfolgsreich',
      description:
        'Ihre digitale Präsenz wird zum entscheidenden Wachstumsfaktor Ihres Unternehmens.',
      color: 'bg-rose-600',
    },
  ]

  return (
    <section className="py-20 bg-[var(--color-ui-dark)] w-full">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading mb-4">
            Ihre Reise zur digitalen Sichtbarkeit
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Von unsichtbar zu unübersehbar: Entdecken Sie, wie ich Ihre digitale
            Transformation begleite.
          </p>
        </div>

        <motion.div
          className="max-w-5xl mx-auto"
          onViewportEnter={() => {
            setIsInView(true)
          }}
          onViewportLeave={() => {
            setIsInView(false)
          }}
        >
          {/* Journey Map */}
          <div className="relative mb-10">
            <div className="absolute top-1/2 left-0 right-0 h-2 bg-gray-200 -translate-y-1/2 rounded-full z-0"></div>

            <div className="flex justify-between relative z-10">
              {journeySteps.map((step, index) => (
                <motion.div
                  key={index}
                  className={`w-12 h-12 rounded-full flex items-center justify-center cursor-pointer ${
                    index <= currentStep ? step.color : 'bg-gray-200'
                  } transition-all duration-300`}
                  onClick={() => {
                    setCurrentStep(index)
                  }}
                  whileHover={{ scale: 1.1 }}
                  animate={
                    currentStep === index
                      ? {
                          scale: [1, 1.1, 1],
                          boxShadow: '0 0 0 8px rgba(244, 63, 94, 0.2)',
                        }
                      : {}
                  }
                >
                  <motion.div
                    animate={{
                      opacity: index <= currentStep ? 1 : 0.0,
                      scale: currentStep === index ? 1 : 0.8,
                    }}
                  >
                    {step.icon}
                  </motion.div>

                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap font-medium text-sm">
                    {step.title}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Current Step Details */}
          <motion.div
            className="bg-[var(--color-ui-dark)] rounded-xl p-8 shadow-lg border border-[var(--color-border)] mt-16"
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div
                className={`${journeySteps[currentStep].color} p-5 rounded-xl`}
              >
                {journeySteps[currentStep].icon}
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">
                  {journeySteps[currentStep].title}
                </h3>
                <p className="text-gray-700">
                  {journeySteps[currentStep].description}
                </p>
              </div>

              {currentStep === journeySteps.length - 1 && (
                <div className="mt-4 md:mt-0">
                  <motion.div
                    className="bg-rose-500 text-white px-6 py-3 rounded-lg font-medium flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <CheckCircle2 className="mr-2 h-5 w-5" />
                    Das möchte ich auch!
                  </motion.div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Manual Navigation Controls */}
          <div className="flex justify-center gap-2 mt-8">
            {journeySteps.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${index === currentStep ? 'bg-rose-500' : 'bg-gray-300'}`}
                onClick={() => {
                  setCurrentStep(index)
                }}
                aria-label={`Go to step ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-medium mb-4">
            Bereit für Ihre eigene Erfolgsgeschichte?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam Ihren digitalen Auftritt transformieren und
            Ihre Sichtbarkeit erhöhen.
          </p>
          <motion.button
            className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-lg font-medium inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Jetzt Beratungsgespräch vereinbaren
          </motion.button>
        </div>
      </div>
    </section>
  )
}

export default ClientJourneySection

