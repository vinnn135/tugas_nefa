/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx}",

    "./index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
       poppins: ["Poppins","sans-serif"]
      },
      colors: {
        primary: "#468EF9",
        secondary: '#0C66EE',
        black: "#2222222",
        gray: "#666666",
        lightgray: "#DDDDDD",
        green: "#28C165",
        red: "#F4574D",

      }
    },
  },
  plugins: [],
}

