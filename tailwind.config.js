module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, 
  theme: {
    extend: {},
    fontFamily: {
      mainfont: ["Barlow", "sans-serif"],
      namefont: ["Philosopher", "cursive"],
    },
    screens: {
      'sm': '375px',
      'md': '640px',
      'lg': '768px',
      'xl': '1024px',
      '2xl': '1280px',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
