/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bgAbout": "url('/lrk-b-designv1/Bgabout.jpg')",
        "bgService": "url('/lrk-b-designv1/BgService.jpg')",
        "bgProverb": "url('/lrk-b-designv1/background.jpg')",
        "bgAfrican": "url('/lrk-b-designv1/africanMan.jpg')",
      }
    },
  },
  plugins: [],
}
