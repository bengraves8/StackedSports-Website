/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Gotham SSm A', 'Gotham SSm B', 'system-ui', 'sans-serif'],
          display: ['Gotham A', 'Gotham B', 'system-ui', 'sans-serif'],
        },
        colors: {
          primary: {
            50: '#f0f5ff',
            100: '#e6edff',
            200: '#bfd3ff',
            300: '#94b5ff',
            400: '#608dff',
            500: '#356CE5',
            600: '#2e5dcc',
            700: '#254db3',
            800: '#1d3d99',
            900: '#142e80',
          },
          secondary: {
            50: '#f3ffe6',
            100: '#e7ffcc',
            200: '#ceff99',
            300: '#b5ff66',
            400: '#98EA48',
            500: '#7fd800',
            600: '#66b300',
            700: '#4c8c00',
            800: '#336600',
            900: '#1a3300',
          }
        },
      },
    },
    plugins: [],
  };