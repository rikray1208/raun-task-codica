/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,css,scss}"],
  theme: {
    extend: {
      colors: {
        myPrimary: "#333B3F",
        mySecondary : "#839199",
        myTertiary : "#a8b2b8",
      }

    },
  },
  plugins: [],
}