module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor: theme => ({
      'yellow-hubb': '#FFC865',
      'white': '#fff'
     })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}