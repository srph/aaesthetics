module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      heading: 'acumin-pro-wide, sans-serif',
      body: 'neue-haas-grotesk-display, sans-serif'
    },
    extend: {
      spacing: {
        112: '28rem',
        128: '32rem',
        144: '36rem',
        160: '40rem',
        176: '44rem',
        192: '48rem',
        '1/2': '50%',
        full: '100%'
      },
      zIndex: {
        'nav-mobile': 1000,
        'nav-overlay': 1010,
        'nav-content': 1020
      }
    },
    colors: {
      white: '#fff',
      black: '#000',
      gold: {
        100: '#FFEBD0',
        300: '#C9B099',
        500: '#D8B281',
        700: '#5C341C',
        800: '#493C30'
      },
      green: {
        300: '#D6FFE6',
        500: '#6D8376',
        800: '#304939'
      },
      grey: {
        300: '#878787',
        500: '#2E2E2E',
        800: '#1A1A1A'
      },
      red: {
        300: '#fdf2f2',
        500: '#f98080',
        800: '#9a1c1c'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: ['@tailwindcss/typography']
}
