import React from 'react'
import { motion } from 'framer-motion'
import Header from '../navigation/Header'
import Footer from '../navigation/Footer'

interface LegalLayoutProps {
  title: string
  lastUpdated?: string
  children: React.ReactNode
}

const LegalLayout: React.FC<LegalLayoutProps> = ({
  title,
  lastUpdated,
  children,
}) => {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-background)]">
      <Header />
      <main className="flex-grow pt-28 pb-16">
        {/* Hintergrund mit warmem Farbverlauf */}
        <div className="absolute top-0 left-0 right-0 h-72 bg-gradient-to-b from-rose-50 to-amber-50 -z-10" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              className="text-3xl font-bold mb-4 text-gray-800"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {title}
            </motion.h1>

            {lastUpdated && (
              <motion.p
                className="text-gray-600 mb-8 border-b border-gray-200 pb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Stand: {lastUpdated}
              </motion.p>
            )}

            <motion.div
              className="prose prose-rose max-w-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {children}
            </motion.div>
          </motion.div>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default LegalLayout
