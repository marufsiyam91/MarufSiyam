/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},

    fontFamily: {
      primary: ['Hanken Grotesk', 'sans-serif'],
      urbanist: ['Urbanist', 'sans-serif'],
      cursive: [ 'Seaweed Script', 'cursive']
    },

    screens: {
      'sm': '640px',

      'md': '768px',

      'lg': '992px',

      'xl': '1024px',

      '2xl': '1280px',
    }
  },
  plugins: [],
}