import { useState, FormEvent } from 'react'
import { FormData, FormStatus, initialFormData } from './types'

// Environment aware webhook URL getter
// Environment aware webhook URL getter with validation
const getWebhookUrl = () => {
  const url = import.meta.env.VITE_WEBHOOK_URL

  if (!url) {
    console.error('VITE_WEBHOOK_URL environment variable is not set')
    return null
  }

  try {
    new URL(url) // Validates URL format
    return url
  } catch (e) {
    console.error('Invalid VITE_WEBHOOK_URL format:', e)
    return null
  }
}

export const useContactForm = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState<string>('')

  const handleServiceToggle = (service: string): void => {
    setFormData(prev => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(service)
        ? prev.selectedServices.filter(s => s !== service)
        : [...prev.selectedServices, service],
    }))
  }

  const validateForm = (): boolean => {
    if (formData.selectedServices.length === 0) {
      setErrorMessage('Bitte wählen Sie mindestens einen Service aus.')
      return false
    }

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('Bitte füllen Sie alle erforderlichen Felder aus.')
      return false
    }

    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setErrorMessage('Bitte geben Sie eine gültige E-Mail-Adresse ein.')
      return false
    }

    return true
  }

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault()
    setErrorMessage('')

    if (!validateForm()) {
      setStatus('error')
      return
    }

    const webhookUrl = getWebhookUrl()
    if (!webhookUrl) {
      setStatus('error')
      setErrorMessage(
        'Systemkonfigurationsfehler. Bitte kontaktieren Sie uns per E-Mail.'
      )
      return
    }

    setStatus('sending')

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Origin: window.location.origin,
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          environment: import.meta.env.DEV ? 'development' : 'production',
          source: window.location.href,
        }),
      })

      if (!response.ok) {
        const errorText = await response.text()
        console.error('Server Antwort:', errorText)

        if (response.status === 403) {
          throw new Error('CORS-Fehler: Zugriff verweigert')
        } else if (response.status === 429) {
          throw new Error(
            'Zu viele Anfragen. Bitte versuchen Sie es später erneut.'
          )
        } else {
          throw new Error(
            `Netzwerkfehler: ${response.status} ${response.statusText}`
          )
        }
      }

      const responseText = await response.text()
      console.log('Erfolgreiche Antwort:', responseText)

      setStatus('success')
      setErrorMessage('')
    } catch (error) {
      console.error('Fehler beim Senden:', error)
      setStatus('error')
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.'
      )
    }
  }

  const handleReset = (): void => {
    setFormData(initialFormData)
    setStatus('idle')
    setErrorMessage('')
    setStep(1)
  }

  const updateFormData = (updates: Partial<FormData>): void => {
    setFormData(prev => ({ ...prev, ...updates }))
  }

  return {
    step,
    setStep,
    formData,
    updateFormData,
    status,
    errorMessage,
    handleServiceToggle,
    handleSubmit,
    handleReset,
  }
}
