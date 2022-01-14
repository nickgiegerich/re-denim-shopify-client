module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: theme => ({
        '112': '28rem',
        '120': '30rem',
      }),
      minHeight: theme => ({
        '80': '20rem',
      }),
      colors: {
        palette: {
          lighter: '#F0FFFF',
          // light: '#DDD6FE',
          light: '#BBBCBE',
          primary: '#01CDA9',
          dark: '#332D4F',
          // primary: '#5B21B6', ORIGINAL
          // dark: '#4C1D95', ORIGINAL
        },
      },
      fontFamily: {
        primary: ['"Josefin Sans"']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'class',
    }),
  ],
}
