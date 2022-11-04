/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray3b: "#3b3b3b",
        gray2b: "#2b2b2b",
        gray69: "#696969",
      },
    },
  },
  plugins: [],
};
