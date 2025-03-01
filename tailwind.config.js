/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#032637',
        secondary: '#2f5a8d',
        dark: '#121212',
      },
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
};
