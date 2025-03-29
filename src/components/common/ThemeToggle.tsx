import React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'
import { motion } from 'framer-motion'

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-opacity-50 bg-[var(--color-ui-medium)] hover:bg-[var(--color-ui-light)]"
      aria-label={
        theme === 'dark'
          ? 'Zum hellen Modus wechseln'
          : 'Zum dunklen Modus wechseln'
      }
      title={
        theme === 'dark'
          ? 'Zum hellen Modus wechseln'
          : 'Zum dunklen Modus wechseln'
      }
    >
      <motion.div
        initial={{ scale: 0.8, rotate: 0 }}
        animate={{
          scale: 1,
          rotate: theme === 'dark' ? 0 : 180,
        }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
          duration: 0.5,
        }}
        className="relative"
      >
        <div className="relative">
          {theme === 'dark' ? (
            <Moon className="h-5 w-5 text-[var(--color-secondary)]" />
          ) : (
            <Sun className="h-5 w-5 text-[var(--color-secondary)]" />
          )}

          {/* Glowing effect */}
          <div
            className={`absolute inset-0 rounded-full blur-sm opacity-30 transition-opacity duration-300 ${
              theme === 'dark' ? 'bg-[var(--color-secondary)]' : 'bg-[var(--color-secondary)]'
            }`}
            style={{ transform: 'scale(1.5)' }}
          ></div>
        </div>
      </motion.div>
    </button>
  )
}

export default ThemeToggle