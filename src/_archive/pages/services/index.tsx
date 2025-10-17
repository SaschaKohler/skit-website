import React from 'react'
import DefaultLayout from '../../layouts/default/DefaultLayout'
import BusinessTechStack from '../../components/solutions/BusinessTechStack'

const ServicesIndex: React.FC = (): React.JSX.Element => {
  return (
    <DefaultLayout>
      <div className="bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <BusinessTechStack />
        </div>
      </div>
    </DefaultLayout>
  )
}

export default ServicesIndex