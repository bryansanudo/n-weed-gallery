/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        thPrimary: "#c539ac",
        thSecondary: "#6057ca",
        thGreen: "#29fd04",
      },
    },
  },
  plugins: [],
};
