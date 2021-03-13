module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      heading: "acumin-pro-wide, sans-serif",
      body: "neue-haas-grotesk-display, sans-serif",
    },
    extend: {
      colors: {
        gold: {
          300: "#C9B099",
          500: "#D8B281",
          800: "#493C30",
        },
        grey: {
          500: "#2E2E2E",
          800: "#1A1A1A",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
