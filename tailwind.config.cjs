module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
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
        primary: '#c69a47',
        secondary: '#64748b'
      }
    },
  },
  plugins: [],
}
