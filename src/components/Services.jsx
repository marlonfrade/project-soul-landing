import React from 'react'
import TechTransport from './TechTransport'

import { motion } from 'framer-motion'

const Services = () => {
  return (
    <div
      id="services"
      className="flex flex-col justify-between w-full min-h-[100vh]"
    >
      <div className="bg-primaryViolet dark:bg-lightViolet py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <motion.div
            initial={{
              scale: 0,
            }}
            whileInView={{
              scale: 1,
              transition: {
                type: 'spring',
                delay: 0.1,
              },
            }}
            className="rounded-lg bg-gray-100 dark:bg-gray-900 px-4 py-6 md:py-8 lg:py-12"
          >
            <p className="mb-2 text-center font-semibold text-lightViolet md:mb-3 lg:text-lg">
              #Serviços
            </p>

            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 dark:text-gray-100 md:mb-6 lg:text-3xl">
              Soluções Personalizadas para Você
            </h2>

            <p className="mx-auto max-w-screen-md text-center text-gray-500 dark:text-gray-300 md:text-lg">
              Para fornecer serviços de excelência, a Soul Logística assume o
              compromisso de atender cada cliente com o máximo de sua
              capacidade. Entregamos sua carga com serviços confiáveis e
              especializados, adotando práticas conscientes de segurança, que
              visam proporcionar uma experiência mais satisfatória aos nossos
              clientes. Veja abaixo nossos serviços.
            </p>
          </motion.div>
        </div>
      </div>
      <TechTransport />
    </div>
  )
}

export default Services
