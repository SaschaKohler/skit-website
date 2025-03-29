import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Scrollt automatisch zum Seitenanfang beim Navigieren zwischen Routen
 */
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [pathname])

  return null
}

export default ScrollToTop
