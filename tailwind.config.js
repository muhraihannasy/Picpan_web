/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#CE1261",
        secondary: "#333333",
        third: "#A80D4E",
        fourty: "#F5F5F5",
        fivety: "#666666",
        sixty: "#D9D9D9",
      },
      fontFamily: {
        impact: ["Impact", "sans-serif"],
        mavenpro: ["Maven Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
