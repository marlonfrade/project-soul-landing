import BgOne from '/src/assets/about-1.jpeg'
import BgTwo from '/src/assets/about-2.jpeg'
import BgThree from '/src/assets/about-3.jpeg'

import MissionIcon from '/src/assets/mission.svg'
import VisionIcon from '/src/assets/vision.svg'
import ValuesIcon from '/src/assets/values.svg'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section
      id="about"
      className="px-4 lg:px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl h-full md:min-h-[100vh]"
    >
      <div className="relative pt-20 w-full h-full md:min-h-[100vh] flex flex-col justify-between items-center">
        <div className="w-full text-left">
          <div className="relative flex-col items-center m-auto align-middle">
            <div className="items-center gap-1 text-left lg:gap-24 lg:inline-flex">
              <motion.div
                initial={{
                  x: -300,
                  opacity: 0,
                }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    type: 'spring',
                    stiffness: 100,
                    delay: 0.1,
                  },
                }}
                className="flex flex-col m-auto md:order-first"
              >
                <div className="max-w-xl">
                  <div>
                    <p className="text-6xl font-medium tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                      Quem Somos
                    </p>
                  </div>
                </div>
                <div className="mt-6 lg:max-w-7xl">
                  <ul
                    role="list"
                    className="flex flex-col space-y-4 py-8 sm:grid sm:grid-cols-2 sm:gap-4 list-none lg:gap-6"
                  >
                    <li>
                      <div>
                        <p className="mt-5 text-lg font-medium leading-6 text-lightViolet">
                          #Soul
                        </p>
                      </div>
                      <div className="mt-2 text-base text-gray-500 dark:text-gray-300">
                        A Soul Logística, é uma empresa de transporte de cargas,
                        atuando com esperiência e responsabilidade em todo
                        território nacional.
                      </div>
                    </li>
                    <li>
                      <div>
                        <p className="mt-5 text-lg font-medium leading-6 text-lightViolet">
                          #Diferencial
                        </p>
                      </div>
                      <div className="mt-2 text-base text-gray-500 dark:text-gray-300">
                        Com um atendimento exclusivo como diferencial, nosso
                        objetivo é oferecer soluções completas e personalizadas
                        para atender as necessidades específicas de cada cliente
                      </div>
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    type: 'tween',
                    delay: 0.4,
                  },
                }}
                className="w-full flex flex-col items-center"
              >
                <div className="w-full h-full flex flex-col items-center">
                  <div className="swiper flex overflow-x-scroll w-full">
                    <img
                      className="w-full h-full object-cover bg-gray-300"
                      src={BgOne}
                      id="slide1"
                      loading="lazy"
                      alt="Quem somos slide 1"
                    />
                    <img
                      className="w-full h-full object-cover bg-gray-300"
                      src={BgTwo}
                      id="slide2"
                      loading="lazy"
                      alt="Quem somos slide 2"
                    />
                    <img
                      className="w-full h-1/2 object-cover bg-gray-300"
                      src={BgThree}
                      id="slide3"
                      loading="lazy"
                      alt="Quem somos slide 3"
                    />
                  </div>
                </div>
                <div className="flex mt-4 animate-pulse">
                  <a
                    href="#slide1"
                    className="w-4 h-4 mx-1 bg-gray-400 rounded-full"
                  ></a>
                  <a
                    href="#slide2"
                    className="w-4 h-4 mx-1 bg-gray-400 rounded-full"
                  ></a>
                  <a
                    href="#slide3"
                    className="w-4 h-4 mx-1 bg-gray-400 rounded-full"
                  ></a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <section>
          <div className="px-5 pt-0 mb-12 mx-auto md:px-12 lg:px-16 lg:mt-12">
            <motion.div
              initial={{
                y: -300,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  type: 'spring',
                },
              }}
            >
              <div className="grid grid-cols-1 gap-12 pt-24 md:grid-cols-3 lg:space-y-0 items-baseline text-center">
                <div className="flex flex-col justify-center items-center">
                  <div className="flex flex-col justify-center items-center">
                    <div className="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl lg:mx-auto">
                      <img
                        src={MissionIcon}
                        alt="Ícone de Missão"
                        loading="lazy"
                      />
                    </div>
                    <p className="mt-4 text-lg font-medium leading-6 text-black dark:text-white">
                      Missão
                    </p>
                  </div>
                  <div className="mt-4 text-base text-gray-500 dark:text-gray-300">
                    Fornecer aos nossos clientes um serviço de transporte de
                    cargas terrestres de alta qualidade, com agilidade,
                    eficiência e segurança.
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div className="flex flex-col justify-center items-center">
                    <div className="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl lg:mx-auto">
                      <img
                        src={VisionIcon}
                        alt="Ícone de Visão"
                        loading="lazy"
                      />
                    </div>
                    <p className="mt-4 text-lg font-medium leading-6 text-black dark:text-white">
                      Visão
                    </p>
                  </div>
                  <div className="mt-4 text-base text-gray-500 dark:text-gray-300">
                    Nosso objetivo é ser uma empresa líder em soluções de
                    transporte, reconhecida pela excelência em nossos serviços e
                    atendimento.
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div className="flex flex-col justify-center items-center">
                    <div className="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl lg:mx-auto">
                      <img
                        src={ValuesIcon}
                        alt="Ícone de Valores"
                        loading="lazy"
                      />
                    </div>
                    <p className="mt-4 text-lg font-medium leading-6 text-black dark:text-white">
                      Valores
                    </p>
                  </div>
                  <div className="mt-4 text-base text-gray-500 dark:text-gray-300">
                    Atendimento humano, respeito, confiança, segurança,
                    agilidade, comprometimento e responsabilidade!
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="animate-bounce w-full flex justify-center items-end align-bottom">
          <a
            href="#services"
            className="btn group flex items-center bg-transparent p-2 px-6 text-xl font-thin tracking-widest text-primaryViolet dark:text-lightViolet"
          >
            <span className="relative pr-4 pb-1 text-primaryViolet dark:text-lightViolet after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-lightViolet after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100">
              ver mais
            </span>
            <svg
              viewBox="0 0 46 16"
              height="10"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
              id="arrow-horizontal"
              className="-translate-x-2 fill-lightViolet transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:rotate-90 group-hover:scale-x-105 group-hover:fill-primaryViolet dark:group-hover:fill-lightViolet"
            >
              <path
                transform="translate(30)"
                d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                data-name="Path 10"
                id="Path_10"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
