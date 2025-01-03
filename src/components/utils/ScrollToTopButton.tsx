import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Reduziere Schwelle für mobile Geräte
      const scrollThreshold = window.innerWidth <= 768 ? 200 : 300

      if (window.pageYOffset > scrollThreshold) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // Initial check
    toggleVisibility()

    window.addEventListener('scroll', toggleVisibility)
    window.addEventListener('resize', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
      window.removeEventListener('resize', toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed md:bottom-8 md:right-8 
                     bottom-4 right-4 
                     p-2 md:p-3
                     bg-blue-600 hover:bg-blue-700 
                     text-white rounded-full shadow-lg 
                     transition-all duration-300 
                     transform hover:scale-110 
                     focus:outline-none focus:ring-2 
                     focus:ring-blue-500 focus:ring-opacity-50 
                     z-[9999]"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      )}
    </>
  )
}
