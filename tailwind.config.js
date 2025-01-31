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
		primaryYellow: "#FEF506"
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        comic: ["var(--font-comic-neue)"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
