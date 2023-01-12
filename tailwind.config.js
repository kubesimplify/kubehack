/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          "light-background": "rgb(var(--light-background) / <alpha-value>)",
          "cyan": "#52D6FF",
      },
      screens:{
        // "6xl": '1160px'
      }
    },
  },
  plugins: [],
};
