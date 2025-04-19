import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Heart, Calendar, Zap } from 'lucide-react'
import HeroSection from '../components/sections/HeroSection'
import ResponsivePricingPackages from '../components/sections/ResponsivePricingPackages'
import ClientJourneySection from '../components/sections/ClientJourneySection'

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section mit auffälligen Schriftarten */}
      <HeroSection />

      {/* Vorteile-Teaser mit Icons */}
      <section className="py-12 bg-[var(--color-ui-dark)] w-full">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Calendar className="h-8 w-8 text-rose-500" />,
                title: 'Schnelle Umsetzung',
                desc: 'In nur 14 Tagen ist Ihre Website fertig und online',
              },
              {
                icon: <Zap className="h-8 w-8 text-amber-500" />,
                title: 'Einfache Bedienung',
                desc: 'WordPress macht die Verwaltung Ihrer Inhalte zum Kinderspiel',
              },
              {
                icon: <Heart className="h-8 w-8 text-rose-500" />,
                title: 'Persönliche Betreuung',
                desc: 'Von der Idee bis zum fertigen Webauftritt an Ihrer Seite',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-gradient-to-r black gray border-gray-200 border rounded-xl p-6 shadow-sm hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-subheading font-semibold mb-2 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 font-body">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Journey Visualization */}
      <ClientJourneySection />

      {/* Kundenbewertungen Vorschau */}
      {/* <section className="py-16 bg-gradient-to-b from-[var(--color-ui-dark)] to-[var(--color-primary-light)] w-full"> */}
      {/*   <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl"> */}
      {/*     <div className="text-center mb-12"> */}
      {/*       <h2 className="text-3xl font-subheading font-bold mb-4"> */}
      {/*         Was unsere Kunden sagen */}
      {/*       </h2> */}
      {/*       <div className="flex justify-center space-x-1 mb-3"> */}
      {/*         {[1, 2, 3, 4, 5].map(star => ( */}
      {/*           <Star */}
      {/*             key={star} */}
      {/*             className="h-6 w-6 text-amber-400 fill-amber-400" */}
      {/*           /> */}
      {/*         ))} */}
      {/*       </div> */}
      {/*       <p className="text-gray-600 max-w-2xl mx-auto font-body"> */}
      {/*         Zufriedene Kunden sind unsere beste Referenz. Sehen Sie selbst, */}
      {/*         was andere über unsere Websites sagen. */}
      {/*       </p> */}
      {/*     </div> */}
      {/**/}
      {/*     <Testimonials /> */}
      {/*   </div> */}
      {/* </section> */}

      {/* Hauptprodukt - Preisgestaltung */}
      <section id="pricing" className="scroll-mt-20">
        <ResponsivePricingPackages />
      </section>

      {/* CTA-Section */}
      <section className="py-16 bg-[var(--color-ui-dark)] w-full">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
          <motion.div
            className="max-w-4xl mx-auto bg-gradient-to-r from-rose-400 to-amber-500 rounded-xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative px-6 py-12 sm:px-12 sm:py-16 text-center text-white">
              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl font-subheading font-bold mb-4">
                  Bereit für Ihren erfolgreichen Webauftritt?
                </h2>
                <p className="text-white/90 mb-8 max-w-2xl mx-auto font-body">
                  Lassen Sie uns in einem unverbindlichen Gespräch herausfinden,
                  wie Ihre perfekte Website aussehen könnte.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-rose-600 hover:bg-rose-100 font-medium uppercase tracking-wider rounded-lg shadow-md hover:shadow-lg transition-all transform hover:translate-y-[-2px]"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Beratungsgespräch vereinbaren
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
