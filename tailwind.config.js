/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    screens: {
      sm: "370px",
      // => @media (min-width: 440px) { ... }

      md: "720px",
      // => @media (min-width: 1024px) { ... }

      lg: "1280px",
      // => @media (min-width: 1280px) { ... }
    },

    extend: {
      colors: {
        primary: "#33323A",
        secondary: "#09977C",
      },

      container: {
        padding: "1.2rem",
        center: true,
      },
    },
  },
  plugins: [],
};
