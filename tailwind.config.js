export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3faeba',
          light: '#4fc3cf',
          dark: '#389aa5',
        },
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}