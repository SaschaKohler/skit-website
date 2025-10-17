import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie, X, Settings, Check, Shield } from 'lucide-react'

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

type ConsentModeStatus = 'granted' | 'denied'

type GTagConsentParams = {
  analytics_storage: ConsentModeStatus
  ad_storage: ConsentModeStatus
  ad_user_data: ConsentModeStatus
  ad_personalization: ConsentModeStatus
  functionality_storage: ConsentModeStatus
  personalization_storage: ConsentModeStatus
  security_storage: ConsentModeStatus
}

type ConsentUpdateEvent = GTagConsentParams & {
  event: 'consent_update'
}

type CookieConsentUpdateEvent = {
  event: 'cookie_consent_update'
  consent_analytics: boolean
  consent_marketing: boolean
  consent_necessary: boolean
}

type DataLayerEntry = ConsentUpdateEvent | CookieConsentUpdateEvent | Record<string, unknown>

interface GTMWindow extends Window {
  dataLayer?: DataLayerEntry[]
  gtag?: (command: 'consent', action: 'update', params: GTagConsentParams) => void
}

const isCookiePreferences = (value: unknown): value is CookiePreferences => {
  if (typeof value !== 'object' || value === null) {
    return false
  }
  const prefs = value as Partial<Record<keyof CookiePreferences, unknown>>
  const keys: (keyof CookiePreferences)[] = ['necessary', 'analytics', 'marketing']
  return keys.every(key => typeof prefs[key] === 'boolean')
}

const parseCookiePreferences = (value: string): CookiePreferences | null => {
  try {
    const parsed = JSON.parse(value) as unknown
    return isCookiePreferences(parsed) ? parsed : null
  } catch {
    return null
  }
}

const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [hasConsent, setHasConsent] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Immer aktiviert
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    // Prüfe ob bereits eine Einwilligung vorhanden ist
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      // Warte kurz bevor Banner angezeigt wird (bessere UX)
      setTimeout(() => { setShowBanner(true); }, 1000)
    } else {
      // Lade gespeicherte Präferenzen
      const savedPrefs = parseCookiePreferences(consent)
      if (savedPrefs) {
        setPreferences(savedPrefs)
        setHasConsent(true)
        // Setze Consent silent (ohne Event) beim initialen Load
        updateGTMConsent(savedPrefs, true)
      } else {
        setTimeout(() => { setShowBanner(true); }, 1000)
      }
    }
  }, [])

  // Google Tag Manager Consent Update
  const updateGTMConsent = (prefs: CookiePreferences, silent: boolean = false): void => {
    if (typeof window === 'undefined') {
      return
    }
    const w = window as GTMWindow
    if (!Array.isArray(w.dataLayer)) {
      w.dataLayer = []
    }

    const consentParams: GTagConsentParams = {
      analytics_storage: prefs.analytics ? 'granted' : 'denied',
      ad_storage: prefs.marketing ? 'granted' : 'denied',
      ad_user_data: prefs.marketing ? 'granted' : 'denied',
      ad_personalization: prefs.marketing ? 'granted' : 'denied',
      functionality_storage: 'granted',
      personalization_storage: prefs.analytics ? 'granted' : 'denied',
      security_storage: 'granted',
    }

    if (typeof w.gtag === 'function') {
      w.gtag('consent', 'update', consentParams)
    } else {
      w.dataLayer.push({
        event: 'consent_update',
        ...consentParams,
      })
    }

    if (!silent) {
      w.dataLayer.push({
        event: 'cookie_consent_update',
        consent_analytics: prefs.analytics,
        consent_marketing: prefs.marketing,
        consent_necessary: prefs.necessary,
      })

      console.warn('Cookie Consent updated:', {
        analytics: prefs.analytics,
        marketing: prefs.marketing,
        method: typeof w.gtag === 'function' ? 'gtag()' : 'dataLayer',
        dataLayer_events: w.dataLayer.length,
      })
    } else {
      console.warn('Cookie Consent loaded from storage:', {
        analytics: prefs.analytics,
        marketing: prefs.marketing,
        silent: true,
      })
    }
  }

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem('cookie-consent', JSON.stringify(prefs))
    localStorage.setItem('cookie-consent-date', new Date().toISOString())
    updateGTMConsent(prefs)
    setShowBanner(false)
    setShowSettings(false)
    setHasConsent(true)
  }

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
    }
    setPreferences(allAccepted)
    savePreferences(allAccepted)
  }

  const acceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
    }
    setPreferences(necessaryOnly)
    savePreferences(necessaryOnly)
  }

  const saveCustomPreferences = () => {
    savePreferences(preferences)
  }

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === 'necessary') return // Notwendige Cookies können nicht deaktiviert werden
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  // Banner Animation
  const bannerVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
      },
    },
    exit: {
      y: 100,
      opacity: 0,
      transition: { duration: 0.3 },
    },
  }

  // Settings Modal Animation
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.2 },
    },
  }

  return (
    <>
      {/* Cookie Settings Button - Permanent in bottom left corner */}
      <AnimatePresence>
        {hasConsent && !showBanner && !showSettings && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            onClick={() => { setShowSettings(true); }}
            className="fixed bottom-6 left-6 z-40 w-14 h-14 bg-gradient-to-br from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
            aria-label="Cookie-Einstellungen öffnen"
            title="Cookie-Einstellungen"
          >
            <Cookie className="w-7 h-7 text-white group-hover:rotate-12 transition-transform duration-300" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Cookie Banner */}
      <AnimatePresence>
        {showBanner && !showSettings && (
          <motion.div
            variants={bannerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
          >
            <div className="container mx-auto max-w-6xl">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border-2 border-rose-200 dark:border-rose-700 p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  {/* Icon */}
                  <div className="hidden md:flex items-center justify-center w-16 h-16 bg-gradient-to-br from-rose-100 to-amber-100 dark:from-rose-900/40 dark:to-amber-900/40 rounded-full flex-shrink-0">
                    <Cookie className="w-8 h-8 text-rose-600 dark:text-rose-400" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="md:hidden flex items-center justify-center w-12 h-12 bg-gradient-to-br from-rose-100 to-amber-100 dark:from-rose-900/40 dark:to-amber-900/40 rounded-full flex-shrink-0">
                        <Cookie className="w-6 h-6 text-rose-600 dark:text-rose-400" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                        Cookie-Einstellungen
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                      Wir verwenden Cookies, um Ihre Erfahrung zu verbessern und unsere Website zu optimieren. 
                      Mit "Alle akzeptieren" stimmen Sie der Verwendung aller Cookies zu. 
                      Sie können auch nur notwendige Cookies akzeptieren oder Ihre Präferenzen individuell anpassen.
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto">
                    <button
                      onClick={acceptAll}
                      className="px-6 py-3 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2 whitespace-nowrap"
                    >
                      <Check className="w-5 h-5" />
                      Alle akzeptieren
                    </button>
                    <button
                      onClick={acceptNecessary}
                      className="px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-lg font-semibold transition-all duration-300 whitespace-nowrap"
                    >
                      Nur Notwendige
                    </button>
                    <button
                      onClick={() => { setShowSettings(true); }}
                      className="px-6 py-3 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 border-2 border-gray-300 dark:border-gray-600 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
                    >
                      <Settings className="w-5 h-5" />
                      Einstellungen
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Settings Modal */}
      <AnimatePresence>
        {showSettings && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              onClick={() => { setShowSettings(false); }}
            />

            {/* Modal */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden pointer-events-auto"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-rose-500 to-amber-500 p-6 relative">
                  <button
                    onClick={() => { setShowSettings(false); }}
                    className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-lg transition-colors"
                    aria-label="Schließen"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>
                  <div className="flex items-center gap-3">
                    <Shield className="w-8 h-8 text-white" />
                    <div>
                      <h2 className="text-2xl font-bold text-white">
                        Cookie-Einstellungen
                      </h2>
                      <p className="text-white/90 text-sm mt-1">
                        Verwalten Sie Ihre Datenschutz-Präferenzen
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
                  <div className="space-y-6">
                    {/* Notwendige Cookies */}
                    <div className="border-2 border-gray-200 dark:border-gray-700 rounded-xl p-5 bg-gray-50 dark:bg-gray-900/50">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                              Notwendige Cookies
                            </h3>
                            <span className="px-2 py-1 bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-300 text-xs font-medium rounded-full">
                              Immer aktiv
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Diese Cookies sind für die Grundfunktionen der Website erforderlich 
                            und können nicht deaktiviert werden. Sie speichern z.B. Ihre Cookie-Präferenzen.
                          </p>
                        </div>
                        <div className="flex-shrink-0">
                          <div className="w-12 h-6 bg-rose-500 rounded-full flex items-center justify-end px-1">
                            <div className="w-4 h-4 bg-white rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Analytics Cookies */}
                    <div
                      className={`border-2 rounded-xl p-5 cursor-pointer transition-all ${
                        preferences.analytics
                          ? 'border-rose-300 dark:border-rose-700 bg-rose-50 dark:bg-rose-900/20'
                          : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/50'
                      }`}
                      onClick={() => { togglePreference('analytics'); }}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Analyse & Statistik
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                            Diese Cookies helfen uns zu verstehen, wie Besucher:innen mit unserer Website 
                            interagieren, indem Informationen anonym gesammelt werden.
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-500">
                            Dienste: Google Analytics, Google Tag Manager
                          </p>
                        </div>
                        <div className="flex-shrink-0">
                          <div
                            className={`w-12 h-6 rounded-full flex items-center transition-all ${
                              preferences.analytics
                                ? 'bg-rose-500 justify-end'
                                : 'bg-gray-300 dark:bg-gray-600 justify-start'
                            } px-1`}
                          >
                            <div className="w-4 h-4 bg-white rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Marketing Cookies */}
                    <div
                      className={`border-2 rounded-xl p-5 cursor-pointer transition-all ${
                        preferences.marketing
                          ? 'border-rose-300 dark:border-rose-700 bg-rose-50 dark:bg-rose-900/20'
                          : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/50'
                      }`}
                      onClick={() => { togglePreference('marketing'); }}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Marketing & Personalisierung
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                            Diese Cookies werden verwendet, um Werbung relevanter zu machen und 
                            personalisierte Inhalte anzuzeigen.
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-500">
                            Dienste: Google Ads, Social Media Plugins
                          </p>
                        </div>
                        <div className="flex-shrink-0">
                          <div
                            className={`w-12 h-6 rounded-full flex items-center transition-all ${
                              preferences.marketing
                                ? 'bg-rose-500 justify-end'
                                : 'bg-gray-300 dark:bg-gray-600 justify-start'
                            } px-1`}
                          >
                            <div className="w-4 h-4 bg-white rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Info Box */}
                    <div className="bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-200 dark:border-amber-700 rounded-xl p-4">
                      <p className="text-sm text-amber-900 dark:text-amber-200">
                        <strong>Hinweis:</strong> Sie können Ihre Einstellungen jederzeit ändern. 
                        Weitere Informationen finden Sie in unserer{' '}
                        <a href="/datenschutz" className="underline hover:no-underline font-semibold">
                          Datenschutzerklärung
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="border-t-2 border-gray-200 dark:border-gray-700 p-6 bg-gray-50 dark:bg-gray-900/50">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={saveCustomPreferences}
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
                    >
                      <Check className="w-5 h-5" />
                      Auswahl speichern
                    </button>
                    <button
                      onClick={acceptAll}
                      className="flex-1 px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-lg font-semibold transition-all duration-300"
                    >
                      Alle akzeptieren
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default CookieConsent
