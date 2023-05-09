import { useState, useEffect } from 'react'

export default function useDeviceWidth() {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth >= 1024)
    }

    // Set initial device width
    handleResize()

    // Add event listener for window resize
    window.addEventListener('resize', handleResize)

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return isDesktop
}
