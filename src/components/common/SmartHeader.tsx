import { type PropsWithChildren } from 'react'
import { useScrollDirection } from '../utils/useScrollDirection'

export default function SmartHeader({ children }: PropsWithChildren) {
  const { scrollDirection, isAtTop } = useScrollDirection()

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 
        transition-transform duration-300 
        bg-white/90 backdrop-blur-sm 
        shadow-sm z-50
        ${!isAtTop && scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'}
        ${isAtTop ? 'shadow-none' : 'shadow-md'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2 md:py-4">
          {children}
        </div>
      </div>
    </header>
  )
}
