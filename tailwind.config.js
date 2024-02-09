/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}",]
   ,
  theme: {
    backgroundImage: {
      login: "url('./src/assets/bg2.jpg')",
      back: "url('./public/back.png')",
    extend: {},
  },
  plugins: [],
}
}
