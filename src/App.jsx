import React from 'react'
import { useLocation, useRoutes } from 'react-router-dom'

import { Layout } from './contexts/LayoutContext'
import { Theme } from './contexts/ThemeContext'

import Home from './pages/Home'
import NotFound from './pages/NotFound'

export default function App() {
  const element = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ])

  const location = useLocation()

  if (!element) return null
  return (
    <Theme>
      <Layout>{React.cloneElement(element, { key: location.pathname })}</Layout>
    </Theme>
  )
}
