const NotFound = () => {
  return (
    <main class="flex items-center justify-center h-screen bg-black">
      <div class="px-4 py-16 mx-auto text-center lg:px-8 lg:py-48 max-w-7xl sm:px-6 sm:py-24">
        <div class="justify-center w-full text-center lg:p-10 max-auto">
          <div class="justify-center w-full mx-auto">
            <p class="text-5xl tracking-tight text-white  lg:text-9xl">404</p>
            <p class="max-w-xl mx-auto mt-4 text-lg tracking-tight text-gray-400">
              Página Não Encontrada
            </p>
          </div>
          {/* <div class="flex justify-center gap-3 mt-10">
            <a
              class="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black"
              href="#"
            >
              Primary button
            </a>
            <a
              class="inline-flex items-center text-sm font-semibold leading-6 text-gray-900"
              href="#"
            >
              <span> Naked button </span>
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="flex-none w-3 h-3 ml-3 fill-blue-600 group-active:fill-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                ></path>
              </svg>
            </a>
          </div> */}
        </div>
      </div>
    </main>
  )
}

export default NotFound
