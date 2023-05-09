import React from 'react'
import CommoditiesBg from '/src/assets/commodities-transport.jpeg'
import { motion } from 'framer-motion'

import useDeviceWidth from '/src/hooks/useDeviceWidth'

const CommoditiesTransport = () => {
  const isDesktop = useDeviceWidth()
  return (
    <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 lg:my-40">
      {isDesktop ? (
        <motion.div
          initial={{ x: 500, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              type: 'spring',
            },
          }}
          className="inset-y-0 lg:absolute lg:w-7/12 lg:max-w-full lg:mx-0 lg:px-0 xl:px-0 lg:pr-0"
        >
          <svg
            className="absolute right-0 hidden h-full text-white dark:text-lightViolet transform translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H-0L50 0Z" />
          </svg>
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src={CommoditiesBg}
            alt="Imagem de fundo do Transporte de Commodities"
            loading="lazy"
          />
        </motion.div>
      ) : (
        <div className="inset-y-0 lg:absolute lg:w-7/12 lg:max-w-full lg:mx-0 lg:px-0 xl:px-0 lg:pr-0">
          <svg
            className="absolute right-0 hidden h-full text-white dark:text-lightViolet transform translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H-0L50 0Z" />
          </svg>
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src={CommoditiesBg}
            alt="Imagem de fundo do Transporte de commodities"
            loading="lazy"
          />
        </div>
      )}
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: {
            type: 'spring',
            delay: 0.5,
          },
        }}
        className="relative flex flex-col items-end w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-2xl"
      >
        <div className="mb-16 lg:my-40 lg:max-w-xl lg:pr-5 ">
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-primaryViolet dark:text-white sm:text-4xl sm:leading-none">
            Transporte de commodities
            <br className="hidden md:block" />
          </h2>
          <p className="pr-5 mb-5 text-base text-gray-700 dark:text-gray-100 md:text-lg">
            Oferecemos transporte de insumos agrícolas com comprometimento com a
            responsabilidade comercial, social e ambiental. Nossa empresa está
            pronta para atender clientes de diferentes segmentos, desde pequenos
            agricultores tradicionais até grandes empresas.
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default CommoditiesTransport
