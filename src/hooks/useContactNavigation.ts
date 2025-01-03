import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export const useContactNavigation = () => {
  const navigate = useNavigate()
  const location = useLocation()

  return useCallback((e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault()
    }

    const scrollToContact = () => {
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
      navigate('/', { replace: true })
      // Warten auf Navigation, bevor wir scrollen
      setTimeout(scrollToContact, 100)
    } else {
      scrollToContact()
    }
  }, [navigate, location])
}