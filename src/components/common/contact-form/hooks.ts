import { useState } from 'react';
import { FormData, FormStatus, initialFormData } from './types';

export const useContactForm = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(service)
        ? prev.selectedServices.filter(s => s !== service)
        : [...prev.selectedServices, service]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const webhookUrl = import.meta.env.VITE_WEBHOOK_URL;
      if (!webhookUrl) {
        throw new Error('Webhook URL nicht konfiguriert');
      }

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Netzwerkfehler');
      }

      setStatus('success');
    } catch (error) {
      console.error('Fehler beim Senden:', error);
      setStatus('error');
    }
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setStatus('idle');
    setStep(1);
  };

  const updateFormData = (updates: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...updates }));
  };

  return {
    step,
    setStep,
    formData,
    updateFormData,
    status,
    handleServiceToggle,
    handleSubmit,
    handleReset
  };
};