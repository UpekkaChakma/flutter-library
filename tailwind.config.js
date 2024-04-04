/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontWeight: {
        500: "500",
      },
      lineHeight: { primary: "18.2px", zero: "0px" },
      colors: {
        primary: "#111111",
        secondary: "#989898",
      },
      backgroundColor: {
        secondary: "#F0F0F0",
        blackBackground: "#0D0D0E",
      },
      borderColor: {
        primary: "#F0F0F0",
        black: "#111111",
      },
      screens: {
        xs: { min: "300px", max: "402px" },
      },
    },
    plugins: [],
  },
};
