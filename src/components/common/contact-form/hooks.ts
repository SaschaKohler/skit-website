import { useState, FormEvent } from 'react'
import { FormData, FormStatus, initialFormData } from './types'

// Environment aware webhook URL getter
const getWebhookUrl = () => {
  // Lokale Entwicklung: Default Webhook URL wenn keine env Variable gesetzt
  if (import.meta.env.DEV && !import.meta.env.VITE_WEBHOOK_URL) {
    return 'https://hook.eu2.make.com/jlwmk5crl8yhvtiq2h3pyd6a6aogstwa'
  }
  return import.meta.env.VITE_WEBHOOK_URL
}

export const useContactForm = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleServiceToggle = (service: string): void => {
    setFormData(prev => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(service)
        ? prev.selectedServices.filter(s => s !== service)
        : [...prev.selectedServices, service],
    }))
  }

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault()
    setStatus('sending')

    try {
      const webhookUrl = getWebhookUrl()
      console.log('Verwendete Webhook URL:', webhookUrl)

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          environment: import.meta.env.DEV ? 'development' : 'production',
        }),
      })

      if (!response.ok) {
        const errorText = await response.text()
        console.error('Server Antwort:', errorText)
        throw new Error(
          `Netzwerkfehler: ${response.status} ${response.statusText}`
        )
      }

      // Make.com sendet "Accepted" als Text, keine JSON-Response
      const responseText = await response.text()
      console.log('Erfolgreiche Antwort:', responseText)

      setStatus('success')
    } catch (error) {
      console.error('Fehler beim Senden:', error)
      setStatus('error')
    }
  }

  const handleReset = (): void => {
    setFormData(initialFormData)
    setStatus('idle')
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
    handleServiceToggle,
    handleSubmit,
    handleReset,
  }
}

