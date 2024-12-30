import { useNavigate } from 'react-router-dom'

export const useContactNavigation = (): (() => void) => {
  const navigate = useNavigate()

  const handleContactClick = (): void => {
    void navigate('/contact')
  }

  return handleContactClick
}