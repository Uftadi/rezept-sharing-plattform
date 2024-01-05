/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          green: '#ECFF12',
          "text-gray": '#8E9194',
          "border-gray": "#646464",

      }
    },
  },
  plugins: [],
}

