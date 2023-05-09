import { createContext, useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'
import Navigation from '../components/Navigation'

export const LayoutContext = createContext({})

export function Layout({ children }) {
  const [openNav, setOpenNav] = useState(false)
  return (
    <LayoutContext.Provider value={{ openNav, setOpenNav }}>
      {openNav ? (
        <Navigation />
      ) : (
        <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 overflow-x-hidden">
          {children}
        </div>
      )}
    </LayoutContext.Provider>
  )
}
