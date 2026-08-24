/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      colors: {
        charcoal: {
          DEFAULT: '#171310',
          800: '#211a15',
          700: '#2b221b',
        },
        cream: {
          DEFAULT: '#f6efe2',
          100: '#fbf7ef',
          200: '#efe4d0',
        },
        gold: {
          DEFAULT: '#cf9a42',
          light: '#e8c789',
          dark: '#a97930',
        },
        blush: '#f3d7dd',
        mint: '#dbeee0',
        sky: '#dbe9f4',
      },
      boxShadow: {
        soft: '0 20px 45px -20px rgba(23, 19, 16, 0.35)',
        card: '0 10px 30px -12px rgba(23, 19, 16, 0.25)',
      },
      letterSpacing: {
        widest2: '0.28em',
      },
    },
  },
  plugins: [],
}
