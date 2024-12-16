/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bgAbout": "url('/lrk-b-designv1/assets/Bgabout.jpg')",
        "bgService": "url('/lrk-b-designv1/assets/Bgservice.jpg')",
        "bgProverb": "url('/lrk-b-designv1/assets/background.jpg')",
        "bgAfrican": "url('/lrk-b-designv1/assets/africanMan.jpg')",
        
      }
    },
  },
  plugins: [],
}
