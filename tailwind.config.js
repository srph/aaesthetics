module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      heading: "acumin-pro-wide, sans-serif",
      body: "neue-haas-grotesk-display, sans-serif",
    },
    colors: {
      white: "#fff",
      black: "#000",
      gold: {
        300: "#C9B099",
        500: "#D8B281",
        800: "#493C30",
      },
      green: {
        300: "#D6FFE6",
        500: "#6D8376",
        800: "#304939",
      },
      grey: {
        500: "#2E2E2E",
        800: "#1A1A1A",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: ["@tailwindcss/typography"],
}
