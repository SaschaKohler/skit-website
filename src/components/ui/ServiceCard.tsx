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
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-2 mb-4">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {link && (
        <Link
          to={link}
          className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium"
        >
          Mehr erfahren →
        </Link>
      )}
    </div>
  )
}

export default ServiceCard
