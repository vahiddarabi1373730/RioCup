/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    colors: {
      'custom-background': '#D3AC67',
      'white': '#FFF',
      'F8EEDC': '#F8EEDC',
      'DDBE88': '#DDBE88',
      'D3AC67': '#D3AC67',
      '333': '#333',
      'ACACAC': "#ACACAC",
      '5D5D5D': '#5D5D5D',
      'E6E6E6': '#E6E6E6',
      'F2F2F2': '#F2F2F2',
      'F8F2E7 ': '#F8F2E7 '
    },
    screens: {
      'sm': '360px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }

  },
  plugins: [],

}

