import { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext({})

export function Theme({ children }) {
  const [theme, setTheme] = useState('light')

  // verify user preferences for theme
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [])

  //verify and apply theme color in the root div
  useEffect(() => {
    //   invert theme below
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      localStorage.setItem('user_color_preference', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('user_color_preference', 'light')
    }
  }, [theme])

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
    localStorage.setItem('user_color_preference', theme)
  }
  return (
    <ThemeContext.Provider value={{ handleThemeSwitch, theme }}>
      {children}
    </ThemeContext.Provider>
  )
}
