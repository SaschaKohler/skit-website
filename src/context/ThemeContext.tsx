import React, { createContext, useContext, useState, useEffect } from 'react'

// Theme Types
type Theme = 'light' | 'dark'

// Context Interface
interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

// Create Context mit Default-Werten
const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
})

// Custom Hook für einfachen Zugriff auf den Theme Context
export const useTheme = () => useContext(ThemeContext)

// Theme Provider Component
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Initialer Theme-Wert (prüft lokalen Speicher oder nutzt System-Präferenz)
  const [theme, setTheme] = useState<Theme>(() => {
    // In Browser-Umgebung
    if (typeof window !== 'undefined') {
      // Versuchen, gespeicherte Einstellung aus dem localStorage zu laden
      const savedTheme = localStorage.getItem('theme') as Theme
      
      if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
        return savedTheme
      }
      
      // Falls keine Einstellung gespeichert ist, System-Präferenz prüfen
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark'
      }
    }
    
    // Default ist Light Theme
    return 'light'
  })

  // Theme wechseln
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  // Theme-Attribute im HTML-Element aktualisieren und speichern
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Set data-theme attribute on the HTML element
    document.documentElement.setAttribute('data-theme', theme)
    
    // Add or remove dark class for Tailwind's dark mode
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    // Theme-Einstellung im localStorage speichern
    localStorage.setItem('theme', theme)
  }, [theme])

  // Provider zurückgeben
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider