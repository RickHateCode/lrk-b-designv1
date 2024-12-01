/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "vector" : "url('src/assets/vector.jpg')",
        "flower" : "url('/flower.jpg')",
        "construction": "url('/src/assets/construction.jpg')",
        "arc": "url('/src/assets/arc-divider.svg')",
      }
    },
  },
  plugins: [],
}
