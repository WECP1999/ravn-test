/** @type {import(‘tailwindcss’).Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'hsla(120, 100% ,25%,1)',
        secondary: 'hsla(330, 100% ,71%,1)',
      },
    },
  },
  plugins: [],
};
