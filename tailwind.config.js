/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: [{pattern: /^.*$/}],
  darkMode: 'media',
  content: [],
  theme: {
    extend: {
      colors: {
        brand: {
          100: '#fc03ad',
          200: '#c20486',
          300: '#9c026b',
          400: '#6e014b'
        }
      }
    },
  },
  plugins: [],
}
