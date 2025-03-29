import React, { useRef, useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

interface PricingAnimationProps {
  price: number
  billingCycle: 'monthly' | 'oneTime'
  upgrades: { id: string; name: string; price: number }[]
  selectedUpgrades: string[]
}

const PricingAnimation: React.FC<PricingAnimationProps> = ({
  price,
  billingCycle,
  upgrades,
  selectedUpgrades,
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.5 })
  const controls = useAnimation()

  // Berechnung des aktuellen Preises
  const basePrice = billingCycle === 'monthly' ? price * 6 + 297 : price

  const upgradePrice = selectedUpgrades.reduce((total, id) => {
    const upgrade = upgrades.find(u => u.id === id)
    return total + (upgrade ? upgrade.price : 0)
  }, 0)

  const totalPrice = basePrice + upgradePrice

  // Animation beim Ändern des Preises
  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        scale: [1, 1.1, 1],
        transition: { duration: 0.5 },
      })
    }
  }, [isInView, totalPrice, controls])

  // Animation für die Preisziffer
  const digitVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.3,
      },
    }),
  }

  // Verwandelt den Preis in einzelne Ziffern
  const priceDigits = totalPrice.toString().split('')

  return (
    <div ref={ref} className="mt-6">
      <p className="text-sm text-gray-500 mb-1 text-center">Gesamtpreis:</p>
      <motion.div
        className="text-center"
        animate={controls}
        initial={{ opacity: 0, y: 20 }}
      >
        <div className="flex justify-center items-baseline">
          {priceDigits.map((digit, index) => (
            <motion.span
              key={index}
              className="text-4xl font-bold text-rose-600"
              variants={digitVariants}
              initial="hidden"
              animate="visible"
              custom={index}
            >
              {digit}
            </motion.span>
          ))}
          <motion.span
            className="text-4xl font-bold text-rose-600 ml-1"
            variants={digitVariants}
            initial="hidden"
            animate="visible"
            custom={priceDigits.length}
          >
            €
          </motion.span>
        </div>

        <motion.p
          className="text-sm text-gray-500 mt-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {billingCycle === 'monthly'
            ? 'inkl. Anzahlung & 6 Monatsraten'
            : 'einmalige Zahlung'}
        </motion.p>
      </motion.div>

      {/* Ausgewählte Upgrades Visuelle Darstellung */}
      {selectedUpgrades.length > 0 && (
        <motion.div
          className="mt-4 bg-rose-50 p-3 rounded-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-sm font-medium text-rose-700 mb-2">
            Ihre ausgewählten Erweiterungen:
          </p>
          <div className="flex flex-wrap gap-2">
            {selectedUpgrades.map(id => {
              const upgrade = upgrades.find(u => u.id === id)
              return upgrade ? (
                <motion.span
                  key={id}
                  className="inline-flex items-center bg-white px-2 py-1 rounded-full text-xs font-medium text-rose-600 border border-rose-200"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {upgrade.name} (+{upgrade.price}€)
                </motion.span>
              ) : null
            })}
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default PricingAnimation
