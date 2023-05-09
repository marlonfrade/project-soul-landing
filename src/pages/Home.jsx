import React from 'react'

import About from '../components/About'
import Footer from '../components/Footer'

import { Header } from '../components/Header'
import Services from '../components/Services'
import CommoditiesTransport from '../components/CommoditiesTransport'
import AnimalTransport from '../components/AnimalTransport'

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Services />
      <CommoditiesTransport />
      <AnimalTransport />
      <Footer />
    </>
  )
}

export default Home
