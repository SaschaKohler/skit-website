import { useState, FormEvent } from 'react'
import { FormData, FormStatus, initialFormData } from './types'

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
      const webhookUrl = import.meta.env.VITE_WEBHOOK_URL as string
      if (!webhookUrl) {
        throw new Error('Webhook URL nicht konfiguriert')
      }

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Netzwerkfehler')
      }

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