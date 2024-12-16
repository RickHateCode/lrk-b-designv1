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
        "bgAbout": "url('/lrk-b-designv1/src/assets/Bgabout.jpg')",
        "bgService": "url('/lrk-b-designv1/src/assets/BgService.jpg')",
        "bgProverb": "url('/lrk-b-designv1/src/assets/background.jpg')",
        "bgAfrican": "url('/lrk-b-designv1/src/assets/africanMan.jpg')",
      }
    },
  },
  plugins: [],
}
