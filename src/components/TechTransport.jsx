import { motion } from 'framer-motion'
import TechBg from '/src/assets/tech-bg.png'

import useDeviceWidth from '/src/hooks/useDeviceWidth'

export default function TechTransport() {
  const isDesktop = useDeviceWidth()
  return (
    <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 w-full">
      {isDesktop ? (
        <motion.div
          initial={{ x: -500, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              type: 'spring',
            },
          }}
          className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl mx-auto lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute "
        >
          <svg
            className="absolute left-0 hidden h-full text-white dark:text-lightViolet transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="object-cover w-full h-full rounded shadow-lg lg:rounded-none lg:shadow-none lg:h-full"
            src={TechBg}
            alt="Imagem de fundo do Transporte de equipamentos eletrônicos"
            loading="lazy"
          />
        </motion.div>
      ) : (
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl mx-auto lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute ">
          <svg
            className="absolute left-0 hidden h-full text-white dark:text-lightViolet transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="object-cover w-full h-full rounded shadow-lg lg:rounded-none lg:shadow-none lg:h-full"
            src={TechBg}
            alt="Imagem de fundo do Transporte de Equipamentos Eletrônicos"
            loading="lazy"
          />
        </div>
      )}
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-2xl">
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              type: 'spring',
              delay: 0.3,
            },
          }}
          className="mb-16 lg:my-40 lg:max-w-xl lg:pr-5 "
        >
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-primaryViolet dark:text-gray-300 sm:text-4xl sm:leading-none">
            Transporte eletrônico
            <br className="hidden md:block" />
          </h2>
          <p className="pr-5 mb-5 text-base text-gray-700 dark:text-gray-100 md:text-lg">
            O transporte de equipamentos eletrônicos é altamente especializado,
            especialmente para instrumentos musicais profissionais, computadores
            e outros equipamentos de alto valor que são extremamente sensíveis à
            temperatura, umidade, vibrações e impactos.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
