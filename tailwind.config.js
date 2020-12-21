module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      blue: {
        lightest: '#00a8cc',
        light: '#0c7b93',
        dark: '#27496d',
        darker: '#142850'
      },
      text: {
        white: '#f7f7f7',
        bone: '#eeeeee',
        black: '#393e46',
        gray: '#929aab'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
