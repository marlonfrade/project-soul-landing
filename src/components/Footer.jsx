import React from 'react'

const Footer = () => {
  return (
    <footer className="relative w-full mt-60" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-16">
        <div className="flex flex-col items-center space-y-6">
          <div className="mx-auto">
            <a
              href="#home"
              className="mx-auto text-lg text-center text-black transition duration-500 ease-in-out transform tracking-relaxed"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 animate-bounce text-primaryViolet dark:text-lightViolet"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
                />
              </svg>
            </a>
          </div>
          <div className="mx-auto">
            <span className="mx-auto mt-2 text-sm text-gray-500 dark:text-gray-100">
              Soul Logística © 2023
              <a
                href="https://monkeybranch.dev"
                target="_blank"
                className="mx-2 text-primaryViolet dark:text-lightViolet hover:text-gray-500 dark:hover:text-gray-300"
                rel="noopener noreferrer"
              >
                Desenvolvido por Monkey Branch
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
