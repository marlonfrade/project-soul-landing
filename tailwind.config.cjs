/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{jsx, js}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['inter', 'serif'],
      },
      colors: {
        primaryViolet: '#4E1473',
        lightViolet: '#8E6CD4',
        primaryBlue: '#001756',
      },
    },
  },
  plugins: [],
}
