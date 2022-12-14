/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    fontSize: {
      "2xs":10,
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
      '3xl': 40,
    },
    colors: {
      transparent : 'transparent',
      'black': '#000000',
      'white': '#FFFFFF',
      gray: {
        900: '#121214',
        800: '#202024',
        400: '#7C7C8A',
        200: '#C4C34CC',
        100: '#E1E1E6',
      },

      cyan: {
        500: '#81D8F7',
        300: '#9BE1F8',
      },

      red:{
        700: "#b91c1c"
      }

    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif',
      },
      backgroundImage:{
        'hero-pattern': "url('./src/assets/curso design de sobrancelha 3.jpg') ",
      }
    },
  },
  plugins: [],
}
