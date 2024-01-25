/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
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
  plugins: [require('@tailwindcss/typography')]
}
