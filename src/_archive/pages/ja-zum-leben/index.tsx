import React from 'react'
import DefaultLayout from '../../layouts/default/DefaultLayout'
import JaZumLebenSection from '../../components/sections/JaZumLebenSection'
import ContactForm from '../../components/common/contact-form'
import TechShowcase from '../../components/TechShowcase/TechShowcase'

const JaZumLebenPage: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="min-h-screen">
        <JaZumLebenSection />
        <TechShowcase />
        <ContactForm />
      </div>
    </DefaultLayout>
  )
}

export default JaZumLebenPage
