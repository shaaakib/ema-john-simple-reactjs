/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#FF9900',

          secondary: '#95A0A7',

          accent: '#FFE0B3',

          neutral: '#1C2B35',

          'base-100': '#F9F9FB',

          info: '#81B0D5',

          success: '#53E99C',

          warning: '#BD6705',

          error: '#F22C61',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
