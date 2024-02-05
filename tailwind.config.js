/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      primary: "#1B1D1A",
      secondary: "#76E874",
      third: "#DCEBE1",
      accent: "#F5F5F5",
    },
    fontFamily: {
      Montserrat: ['"Montserrat"', "serif"],
    },
    extend: {},
  },
  plugins: [],
};
