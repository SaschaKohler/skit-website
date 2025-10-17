import React from 'react'
import { Helmet } from 'react-helmet'
import Header from './Header'
import Footer from './Footer'
import PageTransition from '../../components/common/PageTransition'
import ScrollButton from '../../components/utils/ScrollToTopButton'

const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'sk.IT - Sascha Kohler',
  description: 'IT Dienstleistungen und Webentwicklung',
  url: 'https://skit.sascha-kohler.at',
  telephone: '+43(0)650 90 30 372',
  email: 'office@sascha-kohler.at',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'AT',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '48.2082',
    longitude: '16.3738',
  },
  sameAs: [
    'https://www.linkedin.com/in/sascha-kohler',
    'https://github.com/SaschaKohler',
  ],
}

interface DefaultLayoutProps {
  children: React.ReactNode
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <PageTransition>{children}</PageTransition>
          <ScrollButton />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default DefaultLayout
