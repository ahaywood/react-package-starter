/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    require('./src/tailwind/colors.config.js'),
    require('./src/tailwind/typography.config.js'),
    require('./src/tailwind/shadows.config.js'),
    require('./src/tailwind/blurs.config.js'),
    require('./src/tailwind/utilities.config.js'),
  ],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}

