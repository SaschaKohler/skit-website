import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

type Testimonial = {
  id: number
  name: string
  role: string
  content: string
  rating: number
  image?: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sabine M.',
    role: 'Life Coach & Neugründerin (AMS-Programm)',
    content:
      'Als Teilnehmerin des AMS-Gründerprogramms hatte ich keine Zeit, mich in komplexe digitale Themen einzuarbeiten. Sascha hat nicht nur meine Website erstellt, sondern mir auch gezeigt, wie ich sie selbst pflege. Das Google Analytics Setup hilft mir, meine Kund:innen besser zu verstehen.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=32',
  },
  {
    id: 2,
    name: 'Thomas B.',
    role: 'Einzelunternehmer Unternehmensberatung',
    content:
      'Was Sascha auszeichnet: Er versteht die Gründungssituation. Als selbst Einzelunternehmer weiß er, wo der Schuh drückt. Von WordPress über GDPR bis Google Tag Manager – alles aus einer Hand. Und das Wichtigste: Ich kann mich auf mein Business konzentrieren.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=59',
  },
  {
    id: 3,
    name: 'Julia S.',
    role: 'Yogastudio-Gründerin',
    content:
      'Die Kombination aus technischer Expertise und menschlicher Begleitung ist einzigartig. Als dipl. Lebens- und Sozialberater versteht Sascha meine Ängste und Unsicherheiten. Meine Website ist nicht nur schön, sondern auch rechtssicher mit DSGVO-konformem Cookie-Banner.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=47',
  },
  {
    id: 4,
    name: 'Maria H.',
    role: 'Ernährungsberatung (Neugründung)',
    content:
      'Ich hatte null Vorkenntnisse und große Sorge vor der technischen Seite. Sascha hat mir das Email-Marketing mit Brevo eingerichtet und mir in einer ausführlichen Schulung alles erklärt. Jetzt erreiche ich meine Kund:innen regelmäßig mit Newslettern – automatisiert!',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=25',
  },
  {
    id: 5,
    name: 'Michael W.',
    role: 'Fotografie-Einzelunternehmen',
    content:
      'Das Google Unternehmensprofil bringt mir lokale Kund:innen, die mich vorher nie gefunden hätten. Die WordPress-Website ist so intuitiv, dass ich sie selbst pflege. Sascha ist kein normaler "Webdesigner" – er ist ein Mentor, der einen durch den digitalen Dschungel führt.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=15',
  },
]

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Automatisches Rotieren der Testimonials
  useEffect(() => {
    if (!isPaused) {
      autoplayRef.current = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length)
      }, 6000)
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
      }
    }
  }, [isPaused])

  const goToPrevious = () => {
    setCurrentIndex(
      prevIndex => (prevIndex - 1 + testimonials.length) % testimonials.length
    )
  }

  const goToNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length)
  }

  // Pause auto-rotation on hover
  const handleMouseEnter = () => {
    setIsPaused(true)
  }
  const handleMouseLeave = () => {
    setIsPaused(false)
  }

  // Erstellen eines Teilarrays der aktuell sichtbaren Testimonials (für Desktop 3, für mobil 1)

  return (
    <div
      className="relative mx-auto"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={containerRef}
    >
      {/* Steuerungsbuttons */}
      <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 z-10">
        <button
          onClick={goToPrevious}
          className="bg-[var(--color-ui-dark)] rounded-full p-2 shadow-md hover:shadow-lg transition-all transform hover:scale-110 text-[var(--color-primary)]"
          aria-label="Vorheriges Testimonial"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      </div>
      <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
        <button
          onClick={goToNext}
          className="bg-[var(--color-ui-dark)] rounded-full p-2 shadow-md hover:shadow-lg transition-all transform hover:scale-110 text-[var(--color-primary)]"
          aria-label="Nächstes Testimonial"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Desktop Karussell */}
      <div className="hidden md:grid md:grid-cols-3 gap-6">
        {testimonials.slice(currentIndex, currentIndex + 3).length < 3
          ? [
              ...testimonials.slice(currentIndex, testimonials.length),
              ...testimonials.slice(
                0,
                3 - (testimonials.length - currentIndex)
              ),
            ].map((testimonial, idx) => (
              <TestimonialCard
                key={`${testimonial.id}-${idx}`}
                testimonial={testimonial}
              />
            ))
          : testimonials
              .slice(currentIndex, currentIndex + 3)
              .map((testimonial, idx) => (
                <TestimonialCard
                  key={`${testimonial.id}-${idx}`}
                  testimonial={testimonial}
                />
              ))}
      </div>

      {/* Mobile Karussell */}
      <div className="md:hidden">
        <TestimonialCard testimonial={testimonials[currentIndex]} />

        {/* Mobile Pagination Indikatoren */}
        <div className="flex justify-center mt-4 space-x-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentIndex(idx)
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === currentIndex ? 'bg-rose-500 scale-110' : 'bg-rose-200'
              }`}
              aria-label={`Gehe zu Testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

interface TestimonialCardProps {
  testimonial: Testimonial
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="bg-[var(--color-ui-dark)] rounded-xl p-6 shadow-lg hover:shadow-xl transition-duration-300 flex flex-col h-full border border-[var(--color-border)]"
    >
      {/* Sternebewertung */}
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, idx) => (
          <Star
            key={idx}
            className={`h-5 w-5 ${
              idx < testimonial.rating
                ? 'text-[var(--color-secondary)] fill-[var(--color-secondary)]'
                : 'text-[var(--color-ui-light)]'
            }`}
          />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-[var(--color-text)] mb-6 flex-grow">
        "{testimonial.content}"
      </p>

      {/* Autor */}
      <div className="flex items-center">
        {testimonial.image && (
          <div className="mr-4">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-12 h-12 rounded-full object-cover border-2 border-[var(--color-primary-light)]"
            />
          </div>
        )}
        <div>
          <h4 className="font-semibold text-[var(--color-text-dark)]">
            {testimonial.name}
          </h4>
          <p className="text-[var(--color-primary)] text-sm">
            {testimonial.role}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default Testimonials
