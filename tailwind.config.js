module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'fuchsia': {
        600: '#E70858',
      },
    },
    fontFamily: {
      sans: ['Work Sans', 'sans-serif'],
    },
    borderRadius: {
      'none': '0',
      'sm': '0.25rem',
      DEFAULT: '0.5rem',
      'md': '0.5rem',
      'lg': '1.5vw',
    },
    boxShadow: {
      'xl': '0 4px 24px rgba(0, 0, 0, 0.3)',
      'inner': 'inset 0 4px 24px rgba(0, 0, 0, 0.3)',
    },
    extend: {},
  },
  plugins: [],
}
