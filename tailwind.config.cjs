const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", ...defaultTheme.fontFamily.sans],
        jura: ["Jura", ...defaultTheme.fontFamily.sans],
        bodoni: ['"Bodoni Moda"', ...defaultTheme.fontFamily.serif],
        cormorant: ["Cormorant", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
  important: "#theme",
};
