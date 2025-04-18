// src/components/ui/ServiceCard.tsx
import React from 'react'
import { Link } from 'react-router-dom'

interface ServiceCardProps {
  title: string
  items: string[]
  link?: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, items, link }) => {
  return (
    <div className="bg-[var(--color-ui-dark)] p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-[var(--color-border)]">
      <h3 className="text-xl font-semibold mb-4 text-[var(--color-text-dark)]">{title}</h3>
      <ul className="space-y-2 mb-4 text-[var(--color-text)]">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {link && (
        <Link
          to={link}
          className="inline-block mt-4 text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] font-medium transition-colors"
        >
          Mehr erfahren →
        </Link>
      )}
    </div>
  )
}

export default ServiceCard
