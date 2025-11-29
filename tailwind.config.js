/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bandage-blue': '#23A6F0',
        'bandage-dark': '#252B42',
        'bandage-green': '#2DC071',
        'text-gray': '#737373',
        'muted-gray': '#BDBDBD',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}