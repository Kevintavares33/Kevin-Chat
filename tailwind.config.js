/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}",]
   ,
  theme: {
    backgroundImage: {
      login: "url('./src/assets/bg-2.jpg')",
      back: "url('./src/assets/back.png')",
    extend: {},
  },
  plugins: [],
}
}
