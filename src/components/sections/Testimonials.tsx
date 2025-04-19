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
    name: 'Sabine Meyer',
    role: 'Life Coach',
    content:
      'Die Zusammenarbeit war fantastisch! In nur 12 Tagen war meine Website online und übertraf alle meine Erwartungen. Meine Kunden sind begeistert, wie einfach sie nun Termine buchen können.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=32',
  },
  {
    id: 2,
    name: 'Thomas Berger',
    role: 'Unternehmensberater',
    content:
      'Endlich eine Website, die mich repräsentiert. Die Umsetzung war schnell, unkompliziert und das Ergebnis überzeugt auf ganzer Linie. Die persönliche Betreuung war besonders wertvoll für mich.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=59',
  },
  {
    id: 3,
    name: 'Julia Schmidt',
    role: 'Yogalehrerin',
    content:
      'Ich bin absolut begeistert von meiner neuen Website. Das Design ist warm und einladend, genau wie mein Yogastudio. Die Buchungsfunktion hat meine Organisation komplett verändert.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=47',
  },
  {
    id: 4,
    name: 'Maria Huber',
    role: 'Ernährungsberaterin',
    content:
      'Schnell, einfach und genau wie besprochen. Meine Website war sogar früher fertig als geplant und sieht fantastisch aus. Das Preis-Leistungs-Verhältnis ist unschlagbar!',
    rating: 4,
    image: 'https://i.pravatar.cc/150?img=25',
  },
  {
    id: 5,
    name: 'Michael Werner',
    role: 'Fotograf',
    content:
      'Als Kreativprofi war mir ein ansprechendes Design besonders wichtig. Meine Erwartungen wurden nicht nur erfüllt, sondern übertroffen. Die Zusammenarbeit lief reibungslos und inspirierend.',
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
