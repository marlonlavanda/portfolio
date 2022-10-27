/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "mlr-navy": "#01273E",
        "mlr-sky": "#4CC7E8",
      },
    },
  },
  plugins: [],
}
