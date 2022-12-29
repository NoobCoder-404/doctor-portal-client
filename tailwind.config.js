/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  daisyui: {
    themes: [
      {
        doctorsthemes: {
          primary: '#3A4256',

          secondary: '#19D3AE',

          accent: '#FFFFFF',

          neutral: '#3D4451',

          'base-100': '#FFFFFF'
        }
      }
    ]
  },
  theme: {
    extend: {}
  },
  plugins: [require('daisyui')]
};
