/** @type {import('tailwindcss').Config} */
export default {
    content: [
      './index.html',
      './src/**/*.{js,jsx,ts,tsx}', // Scans all JS/JSX/TS/TSX files in src
    ],
    theme: {
      extend: {
        colors: {
          primary: '#003366', // Dark Blue
          secondary: '#E6F2FF', // Light Blue
          accent: '#00CC66', // Bright Green
        },
        fontFamily: {
          heading: ['Montserrat', 'sans-serif'],
          sans: ['Open Sans', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };