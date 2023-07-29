const plugin = require('tailwindcss/plugin')

module.exports = {
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.center': {
          'display': 'flex',
          'justifyContent': 'center',
          'itemsCenter': 'center',
        },
        'svg': {
          'fill': 'currentColor',
        }
      })
    })
  ]
}