const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        'custom-purple':'#2E1832',
      },
      fontFamily: {
        'sniglet': 'Sniglet',
        'comfortaa': 'Comfortaa'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
