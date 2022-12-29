/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1440px'
    }
  },
  plugins: [require('daisyui'), require('flowbite/plugin')]
};
