module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '640px',
        md: '690px',
        lg: '728px',
        xl: '984px',
        '2xl': '1960px',
      }
    },
    extend: {
      colors: {
        primary: '#cdaf57',
        secondary: '#00897B'
      }
    },
  },
  plugins: [],
}
