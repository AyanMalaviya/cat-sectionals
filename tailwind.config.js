/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cat: {
          blue: '#1e3a8a',
          navy: '#0f172a',
          accent: '#0284c7',
          answered: '#16a34a', // CAT TCS iON green
          notAnswered: '#dc2626', // CAT TCS iON red
          notVisited: '#e2e8f0', // CAT TCS iON grey/white
          marked: '#7c3aed', // CAT TCS iON purple
          markedAnswered: '#9333ea', // CAT TCS iON purple with green dot
        }
      }
    },
  },
  plugins: [],
}
