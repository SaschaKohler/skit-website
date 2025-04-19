import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

const HeartAnimation: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    // Nach dem Laden mit kurzer Verzögerung starten
    const timer = setTimeout(() => {
      setIsAnimating(true)
    }, 2000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  // Animation Varianten
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const heartVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: [0, 1.2, 1],
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
      },
    },
  }

  const pulseVariants = {
    initial: { scale: 1 },
    pulse: {
      scale: [1, 1.15, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: 'reverse' as "reverse",
      },
    },
  }

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <motion.div
        className="w-full h-full relative"
        variants={containerVariants}
        initial="hidden"
        animate={isAnimating ? 'visible' : 'hidden'}
      >
        {/* Verschiedene Herzen im Hintergrund */}
        {[...Array(12)].map((_, i) => {
          // Zufällige Positionen für die Herzen
          const x = Math.random() * 100
          const y = Math.random() * 100
          const size = Math.random() * 0.6 + 0.3 // Zwischen 0.3 und 0.9
          const delay = Math.random() * 5

          return (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: `translateX(-50%) translateY(-50%) scale(${size})`,
              }}
              variants={heartVariants}
              transition={{ delay }}
            >
              <motion.div
                variants={pulseVariants}
                initial="initial"
                animate="pulse"
                className="text-rose-500 opacity-20"
              >
                <Heart fill="currentColor" size={40} />
              </motion.div>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}

export default HeartAnimation
