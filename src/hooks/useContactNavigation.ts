import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export const useContactNavigation = (): ((e?: React.MouseEvent) => void) => {
  const navigate = useNavigate()
  const location = useLocation()

  return useCallback((e?: React.MouseEvent): void => {
    if (e) {
      e.preventDefault()
    }

    const scrollToContact = (): void => {
      setTimeout(() => {
        const contactElement = document.getElementById('contact')
        if (contactElement) {
          contactElement.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          })
        }
      }, 100)
    }

    // Wenn wir nicht auf der Home-Page sind, navigieren wir erst dorthin
    if (location.pathname !== '/') {
      void Promise.resolve(navigate('/', { replace: true })).then(() => {
        // Warten auf Navigation, bevor wir scrollen
        setTimeout(scrollToContact, 100)
      })
    } else {
      scrollToContact()
    }
  }, [navigate, location])
}