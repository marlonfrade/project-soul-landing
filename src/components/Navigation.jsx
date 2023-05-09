import { useState, useContext } from 'react'
import { LayoutContext } from '../contexts/LayoutContext'
import CloseIcon from '/src/assets/close.svg'
import MenuBg from '/src/assets/bars-sort.svg'

import { motion } from 'framer-motion'

const variants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}

const navigation = [
  {
    name: '#Soul',
    href: '#home',
  },
  {
    name: 'A Essência',
    href: '#about',
  },
  {
    name: 'do Melhor Transporte',
    href: '#services',
  },
]

export default function Navigation() {
  const { openNav, setOpenNav } = useContext(LayoutContext)

  const handleClickNavigation = async (e) => {
    e.preventDefault()
    const urlId = new URL(e.target.href)
    const hash = urlId.hash
    await setOpenNav(false)
    setTimeout(() => {
      document.querySelector(hash).scrollIntoView({ behavior: 'smooth' })
    }, 500)
  }
  return (
    <div className="relative">
      <button onClick={() => setOpenNav(true)} className="">
        <img src={MenuBg} alt="Ícone Menu" className="w-10 h-10" />
      </button>
      {openNav ? (
        <motion.div
          initial="closed"
          animate={openNav ? 'open' : 'closed'}
          variants={variants}
        >
          <div className="fixed w-full h-[100vh] inset-0 overflow-y-hidden overflow-hidden px-6 py-6 dark:bg-lightViolet bg-primaryViolet">
            <div className="flex h-9 items-center justify-between">
              <div className="flex"></div>
              <div className="flex">
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-red-500 hover:text-red-700"
                  onClick={() => setOpenNav(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <img
                    loading="lazy"
                    src={CloseIcon}
                    alt="Fecha Menu"
                    className="w-20 h-20 mt-10"
                  />
                </button>
              </div>
            </div>
            <div className="mt-6 flex justify-center items-center w-full h-[100vh]">
              <div className="-my-6 divide-y divide-gray-900/10 dark:divide-gray-100/20">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      id={item.href}
                      href={item.href}
                      className="block rounded-lg py-2 px-3 text-3xl lg:text-6xl font-semibold text-gray-100 hover:underline"
                      onClick={handleClickNavigation}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </div>
  )
}
