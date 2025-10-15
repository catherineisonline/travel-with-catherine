/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    // extend: {},
    fontFamily: {
      mainfont: ["Barlow", "sans-serif"],
      namefont: ["Anton", "sans-serif"],
    },
    screens: {
      sm: "375px",
      md: "640px",
      lg: "768px",
      xl: "1024px",
      "2xl": "1280px",
    },
  },
  // variants: {
  //   extend: {},
  // },
  // plugins: [require("tailwind-scrollbar-hide")],
};
