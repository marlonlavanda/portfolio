/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "mlr-primary": "#1A3257",
        "mlr-secondary": "#72519C",
        "mlr-secondary-light": "#f0e7ec",
        "mlr-secondary-dark": "#684269",
        "mlr-accent": "#62C8F2",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        gravitas: ["Gravitas One"],
      },
    },
  },
  plugins: [],
}
