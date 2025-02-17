/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
      colors: {
        accentOrange: "#EB8733",
        textGray: "#37372F",
        primaryYellow: "#FEF506",
        textBlack: "#1C1B17",
        lightBlack: "#262626",
        textLight: "#C8C8C9",
        emailButton: "#2ecc71",
        emailButtonHover: "#209f55",
        defaultColor: "#1C1B17",
        normalBlue: "#007bff",
        orange800: "#6B360A",
        orange50: "#FEFAF6",
        footerBG: "#2E1805",
        footerBorder: "#F3B886",
        naturalColor: "FFFFFA",
        strokeColor2: "#007bff",
        heroBlue: "#59C5F3",
      

      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        comic: ["var(--font-comic-neue)"],

      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
''