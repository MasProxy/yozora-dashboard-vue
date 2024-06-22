/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#517C99', hover: '#81AECA' },
        secondary: { DEFAULT: '#D469C2', hover: '#966BC5' },
        disabled: { DEFAULT: '#C0BED7', second: '#EFEEFB' },
        success: { DEFAULT: '#5CBC60', hover: '#85DCA8' },
        danger: { DEFAULT: '#FD4D4D', hover: '#DC4747' },
        gray: { DEFAULT: '#DCE1E4', second: '#B0B0B0' },
        black: { DEFAULT: '#444444' },
      },
    },
  },
  plugins: [],
}
