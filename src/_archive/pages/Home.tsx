// src/pages/Home.tsx
import React from 'react'
import ContactForm from '../components/common/contact-form'
import Hero from '../components/common/Hero'
import PricingPackages from '../components/sections/PricingPackages'
import DefaultLayout from '../layouts/default/DefaultLayout'
import About from '../components/sections/About.tsx'
import Services from '../components/sections/Services'

const Home: React.FC = () => {
  return (
    <DefaultLayout>
      <Hero />
      <Services />
      {/* <TechStack /> */}
      <About />
      <PricingPackages />
      <ContactForm />
    </DefaultLayout>
  )
}

export default Home
