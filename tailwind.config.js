/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
      },
      colors: {
        brand: '#8A4BDE',
        brandgold: '#FEC753',
        dark: '#16002B',
        light: '#FAF8FC',
        gradientStart: '#7900F3',
        gradientEnd: '#5B00B6',
      },
      backgroundImage: {
        header: "url('/headerbg.svg')",
        footer: "url('/footerbg.svg')",
      },
    },
  },
  plugins: [],
};
