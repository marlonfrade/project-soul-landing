import { useContext, useRef } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

import VideoBg from '/src/assets/header-bg.mp4'
import FixedNavbar from './FixedNavbar'

import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import confetti from 'canvas-confetti'

export const Header = () => {
  const { theme } = useContext(ThemeContext)
  const submitBtn = useRef(null)
  const inputName = useRef(null)
  const inputEmail = useRef(null)
  const form = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    submitBtn.current.innerText = 'Aguarde...'
    submitBtn.current.disabled = 'true'

    await emailjs
      .sendForm(
        'contact_service',
        'contact_form',
        form.current,
        'G-ksENfO0PJWfAtDr'
      )
      .then(
        (result) => {
          console.log(result.text)
          const duration = 10 * 1000
          const animationEnd = Date.now() + duration
          const defaults = {
            startVelocity: 30,
            spread: 360,
            ticks: 60,
            zIndex: 0,
          }

          const randomInRange = (min, max) => {
            return Math.random() * (max - min) + min
          }
          let interval = setInterval(() => {
            var timeLeft = animationEnd - Date.now()

            if (timeLeft <= 0) {
              return clearInterval(interval)
            }

            const particleCount = 50 * (timeLeft / duration)
            // since particles fall down, start a bit higher than random
            confetti(
              Object.assign({}, defaults, {
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
              })
            )
            confetti(
              Object.assign({}, defaults, {
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
              })
            )
          }, 250)
          submitBtn.current.innerText = 'Enviado!'
          inputEmail.current.value = ''
          inputName.current.value = ''
        },
        (error) => {
          console.log(error.text)
          submitBtn.current.disabled = 'false'
          inputEmail.current.value = ''
          inputName.current.value = ''
        }
      )
  }

  return (
    <div className="relative min-h-[100vh]">
      <video
        className="absolute inset-0 object-cover w-full h-full"
        loop
        autoPlay
        muted
      >
        <source src={VideoBg} type="video/mp4" />
      </video>
      <div
        id="home"
        className="relative bg-gray-600 dark:bg-gray-900 bg-opacity-50 dark:bg-opacity-75"
      >
        <div className="px-4 py-0 pb-20 md:py-0 lg:px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
          <div className="relative flex flex-col min-h-[100vh]">
            <FixedNavbar />
            <div className="w-full flex flex-1 flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <motion.h2
                  initial={{ x: -300, opacity: 0 }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                    transition: {
                      type: 'spring',
                      delay: 0.3,
                    },
                  }}
                  className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-5xl sm:leading-none"
                >
                  Entre em contato e{' '}
                  <span
                    className={
                      theme === 'dark'
                        ? 'text-lightViolet'
                        : 'text-primaryViolet'
                    }
                  >
                    garanta
                  </span>{' '}
                  a essência
                  <br className="hidden md:block" /> do{' '}
                  <span
                    className={
                      theme === 'dark'
                        ? 'text-lightViolet'
                        : 'text-primaryViolet'
                    }
                  >
                    {' '}
                    Melhor Transporte
                  </span>
                  .
                </motion.h2>
                <motion.p
                  initial={{ x: 300, opacity: 0 }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                    transition: {
                      type: 'spring',
                      delay: 0.5,
                    },
                  }}
                  className="max-w-xl mb-4 text-base text-white dark:text-gray-400 md:text-lg"
                >
                  Com um atendimento exclusivo como diferencial, nosso objetivo
                  é oferecer soluções completas e personalizadas para atender as
                  necessidades específicas de cada cliente.
                </motion.p>
              </div>
              <div className="w-full max-w-xl xl:w-5/12">
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                    transition: {
                      type: 'tween',
                      delay: 0.8,
                    },
                  }}
                  className="h-full w-full bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-500 dark:border-gray-800 p-7 sm:p-10"
                >
                  <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl text-white">
                    Entre em contato
                  </h3>
                  <form ref={form} onSubmit={handleSubmit}>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="Name"
                        className="inline-block mb-1 font-medium text-white"
                      >
                        Nome
                      </label>
                      <input
                        placeholder="Soul Logística"
                        required
                        type="text"
                        className="text-primaryViolet dark:text-lightViolet flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-lightViolet focus:outline-none focus:shadow-outline"
                        id="Name"
                        name="Name"
                        ref={inputName}
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="email"
                        className="inline-block mb-1 font-medium text-white"
                      >
                        E-mail
                      </label>
                      <input
                        placeholder="soullogistica@email.com.br"
                        required
                        type="email"
                        className="text-primaryViolet dark:text-lightViolet flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-lightViolet focus:outline-none focus:shadow-outline"
                        id="email"
                        name="email"
                        ref={inputEmail}
                      />
                    </div>
                    <div className="mt-4 mb-2 sm:mb-4">
                      <button
                        ref={submitBtn}
                        type="submit"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md dark:disabled:bg-lightViolet dark:disabled:bg-opacity-30 disabled:bg-primaryViolet disabled:bg-opacity-30 bg-primaryViolet dark:bg-lightViolet hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                      >
                        Enviar
                      </button>
                    </div>
                    <p className="text-xs text-gray-300 dark:text-gray-600 sm:text-sm">
                      Nós respeitamos sua privacidade. Não compartilhamos
                      informações.
                    </p>
                  </form>
                </motion.div>
              </div>
            </div>
            <div className="mt-20 animate-bounce w-full flex justify-center items-center">
              <a
                href="#about"
                className="btn group flex items-center bg-transparent p-2 px-6 text-xl font-thin tracking-widest text-white"
              >
                <span className="relative pr-4 pb-1 text-white after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-lightViolet after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100">
                  ver mais
                </span>
                <svg
                  viewBox="0 0 46 16"
                  height="10"
                  width="30"
                  xmlns="http://www.w3.org/2000/svg"
                  id="arrow-horizontal"
                  className="-translate-x-2 fill-lightViolet transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:rotate-90 group-hover:scale-x-105 group-hover:fill-white"
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
        </div>
      </div>
    </div>
  )
}
