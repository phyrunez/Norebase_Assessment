/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/components/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'black-opacity': '0 4px 10px rgba(0, 0, 0, 0.5)', 
      },
    },
  },
  plugins: [],
}

