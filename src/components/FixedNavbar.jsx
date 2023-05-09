import { AnimatePresence, motion } from 'framer-motion'
import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

import DarkIcon from '/src/assets/moon.svg'
import LightIcon from '/src/assets/sun-high.svg'
import DynamicLogo from './DynamicLogo'
import Navigation from './Navigation'

const FixedNavbar = () => {
  const { handleThemeSwitch, theme } = useContext(ThemeContext)

  return (
    <>
      <motion.div
        initial={{ y: 500, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            stiffness: 300,
          },
        }}
        className="flex justify-between items-center w-full"
      >
        <DynamicLogo />
        <div className="flex items-center justify-between space-x-8">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={theme}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <button className="bg-transparent" onClick={handleThemeSwitch}>
                <img
                  src={theme === 'dark' ? LightIcon : DarkIcon}
                  alt={`Ícone tema ${theme}`}
                  className="w-10 h-10"
                />
              </button>
            </motion.div>
          </AnimatePresence>

          <Navigation />
        </div>
      </motion.div>
    </>
  )
}

export default FixedNavbar
