import React, { useEffect, useState } from 'react'
import PricingPackages from './PricingPackages'
import MobilePricingPackages from './MobilePricingPackages'

/**
 * Responsive Wrapper-Komponente, die basierend auf der Bildschirmgröße
 * entweder die Desktop- oder die mobile Version der Pricing-Komponente lädt
 */
const ResponsivePricingPackages: React.FC = () => {
  // State für die aktuelle View
  const [isMobileView, setIsMobileView] = useState(false)
  
  // Funktion zur Überprüfung der Bildschirmgröße
  const checkIfMobile = () => {
    // Standard-Breakpoint für Mobile: 768px
    const shouldUseMobileView = window.innerWidth < 768 || 
      // iOS-spezifische Erkennung
      (navigator.userAgent.includes('iPhone') || 
       navigator.userAgent.includes('iPad'))
    
    setIsMobileView(shouldUseMobileView)
  }
  
  // Event-Listener für Resize-Events
  useEffect(() => {
    // Initial check
    checkIfMobile()
    
    // Listener hinzufügen
    window.addEventListener('resize', checkIfMobile)
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', checkIfMobile)
    }
  }, [])
  
  // Wähle die entsprechende Komponente basierend auf dem Viewport
  return isMobileView ? <MobilePricingPackages /> : <PricingPackages />
}

export default ResponsivePricingPackages
