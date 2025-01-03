import React from 'react'
import Header from './Header'
import Footer from './Footer'
import PageTransition from '../../components/common/PageTransition'
import ScrollButton from '../../components/utils/ScrollToTopButton'

interface DefaultLayoutProps {
  children: React.ReactNode
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <PageTransition>{children}</PageTransition>
        <ScrollButton />
      </main>
      <Footer />
    </div>
  )
}

export default DefaultLayout
