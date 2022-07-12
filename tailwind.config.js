/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobileP': '320px',
      // => media(min-widht: 320px)

      'mobileG': '425px',
      // => media(min-widht: 425px)
      
      'tablet': '768px',
      // => media(min-widht: 425px)
      
      'desktop': '1325px',
      // => media(min-widht: 1325px)
    },
  },
  plugins: [],
}