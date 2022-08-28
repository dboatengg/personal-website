/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: "class", // 'false' or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ["Epilogue", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      "background-dark": "#1e1e25",
      "title-dark": "#ffffff",
      "text-dark": "#a2a1a6",
      "background-light": "#f5f6f5",
      "card-light": "#ededed",
      "card-dark": "#282833",
      "title-light": "#373737",
      "text-light": "#6a6a6a",
      button: "#7364d0",
      "text-white": "#fff",
    },
    extend: {},
  },
  plugins: [],
};
