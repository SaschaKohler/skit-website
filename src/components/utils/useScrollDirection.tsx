import { useState, useEffect } from 'react'

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState('up')
  const [isAtTop, setIsAtTop] = useState(true)

  useEffect(() => {
    let lastScrollY = window.scrollY
    const threshold = 10 // Minimale Scroll-Distanz bevor Richtung aktualisiert wird

    const updateScrollDirection = () => {
      const scrollY = window.scrollY
      setIsAtTop(scrollY < 10)

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        return
      }

      const direction = scrollY > lastScrollY ? 'down' : 'up'
      if (direction !== scrollDirection) {
        setScrollDirection(direction)
      }
      lastScrollY = scrollY > 0 ? scrollY : 0
    }

    window.addEventListener('scroll', updateScrollDirection)
    return () => {
      window.removeEventListener('scroll', updateScrollDirection)
    }
  }, [scrollDirection])

  return { scrollDirection, isAtTop }
}
